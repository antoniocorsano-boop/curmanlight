#!/usr/bin/env node

/**
 * CurManLight - Video Guide Automation
 * 
 * Questo script automatizza la produzione del video guida utente:
 * 1. Genera audio TTS in italiano
 * 2. Esegue screen recording con Playwright
 * 3. Unisce video + audio con FFmpeg
 * 
 * Requisiti:
 * - Node.js
 * - Playwright: npm install playwright
 * - edge-tts: npm install edge-tts
 * - FFmpeg: installato nel sistema
 * 
 * Uso:
 * node tools/video-automation/generate-video-guide.js
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const edgeTTS = require('edge-tts');

// Configurazione
const CONFIG = {
  // URL dell'app locale
  appUrl: 'http://localhost:8080',
  
  // Percorsi output
  outputDir: path.join(__dirname, '../../output/video-guide'),
  audioDir: path.join(__dirname, '../../output/video-guide/audio'),
  videoDir: path.join(__dirname, '../../output/video-guide/video'),
  finalDir: path.join(__dirname, '../../output/video-guide/final'),
  
  // Configurazione TTS
  tts: {
    voice: 'it-IT-IsabellaNeural', // Voce italiana naturale
    rate: '+0%', // Velocità normale
    pitch: '+0Hz', // Tono normale
    volume: '+0%' // Volume normale
  },
  
  // Configurazione video
  video: {
    width: 1920,
    height: 1080,
    frameRate: 30,
    bitrate: '5000k'
  }
};

// Script delle sezioni video (dal VIDEO-GUIDE-SCRIPT.md)
const SECTIONS = [
  {
    id: 'intro',
    title: 'Introduzione',
    duration: 45,
    text: 'Benvenuti a CurManLight, lo strumento per la gestione dei curricoli disciplinari nel contesto della transizione IN2025. Questa guida vi mostrerà come utilizzare l\'applicazione per consultare, confrontare e contribuire alla revisione dei curricoli scolastici. L\'interfaccia è organizzata in 5 sezioni principali: Home per la panoramica, Curricolo per la gestione dei contenuti, Progettazione didattica per le evidenze e le unità di apprendimento, Esportazioni per scaricare i documenti, e Guida per il supporto.',
    action: 'home'
  },
  {
    id: 'home',
    title: 'Home e Microguida',
    duration: 45,
    text: 'La Home page fornisce una microguida rapida in 5 passi per iniziare: scegliere una proposta di curricolo, confrontare testo vigente e proposta 2025, decidere se confermare, modificare o discutere, esportare il file .cml per il passaggio successivo, e infine il referente importa gli esiti per preparare la sintesi finale. Questo flusso è stato progettato per guidarvi attraverso il processo di revisione curricolare in modo semplice e strutturato.',
    action: 'home-microguide'
  },
  {
    id: 'consulta',
    title: 'Consultazione del Curricolo',
    duration: 90,
    text: 'Per consultare il curricolo vigente, selezionate il tab Curricolo e poi il sotto-tab Consulta. Qui potete visualizzare il curricolo DM 254/2012 attualmente in uso. La sidebar a sinistra mostra tutte le 14 discipline. Selezionatene una per visualizzare i contenuti specifici. I contenuti sono organizzati per obiettivi di apprendimento, competenze chiave, e traguardi per i diversi ordini di scuola: Infanzia, Primaria e Secondaria.',
    action: 'curricolo-consulta'
  },
  {
    id: 'revisione',
    title: 'Revisione e Confronto Versioni',
    duration: 90,
    text: 'Per contribuire alla revisione, passate al sotto-tab Revisione. Qui potete confrontare il testo vigente DM 254/2012 con la proposta DM 221/2025. L\'interfaccia mostra affiancato il testo vigente e la proposta, permettendovi di identificare facilmente le differenze e le novità. Per proporre una modifica, cliccate sull\'elemento che volete cambiare e inserite la vostra proposta. Le modifiche vengono salvate localmente.',
    action: 'curricolo-revisione'
  },
  {
    id: 'docente',
    title: 'Workflow Docente - Esportazione Proposta',
    duration: 60,
    text: 'Una volta completata la revisione, il docente può esportare la propria proposta come file .cml cliccando sul pulsante "Scarica proposta". Questo file conterrà tutte le vostre modifiche e sarà condiviso con il dipartimento. Il file .cml è il formato standard per lo scambio delle proposte di revisione. Condividetelo con il vostro dipartimento secondo le procedure interne della scuola.',
    action: 'docente-export'
  },
  {
    id: 'dipartimento',
    title: 'Workflow Dipartimento - Importazione e Valutazione',
    duration: 60,
    text: 'Il dipartimento può importare le proposte ricevute dai docenti utilizzando il pannello "Importa proposte docenti". Selezionate i file .cml ricevuti per caricarli nell\'applicazione. Una volta importate, le proposte possono essere valutate. Il dipartimento può registrare tre tipi di esito: validata, validata con note, o rinviata. La validazione dipartimentale è un passaggio fondamentale per garantire la coerenza e la qualità delle proposte prima dell\'approvazione definitiva.',
    action: 'dipartimento-import'
  },
  {
    id: 'referente',
    title: 'Workflow Referente - Importazione Esiti',
    duration: 60,
    text: 'Il referente curricolo può importare gli esiti dipartimentali utilizzando il pannello dedicato. Questo permette di raccogliere tutte le valutazioni e preparare la sintesi finale per il gruppo di lavoro. Dopo l\'importazione, il referente può controllare la completezza, le evidenze e i punti da chiarire prima di sottoporre il tutto al gruppo di lavoro.',
    action: 'referente-import'
  },
  {
    id: 'progettazione',
    title: 'Progettazione Didattica',
    duration: 60,
    text: 'La sezione Progettazione didattica contiene le evidenze e le unità di apprendimento modello. Qui potete consultare esempi concreti di come i curricoli possono essere tradotti in attività didattiche. Le evidenze sono organizzate per ordine di scuola (Infanzia, Primaria, Secondaria) e forniscono esempi pratici di implementazione dei curricoli. Il sotto-tab UDA modello mostra unità di apprendimento di esempio che possono essere utilizzate come riferimento per la progettazione didattica.',
    action: 'progettazione-didattica'
  },
  {
    id: 'esportazioni',
    title: 'Esportazioni',
    duration: 45,
    text: 'La sezione Esportazioni permette di scaricare i curricoli in diversi formati: Word per la modifica avanzata, Markdown per la condivisione, PDF per la stampa, e il formato .cml per lo scambio tra ruoli. Selezionate il formato più adatto alle vostre esigenze. Tutti gli export sono generati localmente e non richiedono connessione internet.',
    action: 'esportazioni'
  },
  {
    id: 'guida',
    title: 'Guida e Supporto',
    duration: 30,
    text: 'Per ulteriore supporto, consultate il tab Guida. Qui trovate informazioni dettagliate su tutte le funzionalità dell\'applicazione, risposte alle domande frequenti, e contatti per assistenza. La guida è organizzata per argomenti e include esempi pratici per aiutarvi a sfruttare al meglio CurManLight.',
    action: 'guida'
  },
  {
    id: 'conclusioni',
    title: 'Conclusioni',
    duration: 15,
    text: 'CurManLight è uno strumento pensato per semplificare la gestione dei curricoli nel contesto della transizione IN2025. Per qualsiasi domanda o suggerimento, non esitate a contattare il team di sviluppo. Grazie per l\'attenzione. Per ulteriori informazioni, visitate la documentazione online o contattate il referente curricolo della vostra istituzione.',
    action: 'home'
  }
];

// Crea directory output
function createOutputDirectories() {
  [CONFIG.outputDir, CONFIG.audioDir, CONFIG.videoDir, CONFIG.finalDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Genera audio TTS per una sezione
async function generateAudioTTS(section) {
  const audioPath = path.join(CONFIG.audioDir, `${section.id}.mp3`);
  
  console.log(`Generando audio per sezione: ${section.title}`);
  
  try {
    const communicate = edgeTTS({
      text: section.text,
      voice: CONFIG.tts.voice,
      rate: CONFIG.tts.rate,
      pitch: CONFIG.tts.pitch,
      volume: CONFIG.tts.volume
    });
    
    const audioStream = fs.createWriteStream(audioPath);
    
    for await (const chunk of communicate) {
      if (chunk.type === 'audio') {
        audioStream.write(chunk.data);
      }
    }
    
    audioStream.end();
    console.log(`Audio generato: ${audioPath}`);
    return audioPath;
  } catch (error) {
    console.error(`Errore generazione audio per ${section.id}:`, error);
    throw error;
  }
}

// Esegue screen recording con Playwright
async function recordScreenRecording() {
  console.log('Avviando screen recording con Playwright...');
  
  const browser = await chromium.launch({
    headless: false, // Headless false per visualizzare il browser
    args: ['--start-maximized']
  });
  
  const context = await browser.newContext({
    viewport: { width: CONFIG.video.width, height: CONFIG.video.height },
    recordVideo: {
      dir: CONFIG.videoDir,
      size: { width: CONFIG.video.width, height: CONFIG.video.height }
    }
  });
  
  const page = await context.newPage();
  
  try {
    // Naviga all'URL dell'app
    await page.goto(CONFIG.appUrl);
    await page.waitForLoadState('networkidle');
    
    // Esegue le azioni per ogni sezione
    for (const section of SECTIONS) {
      console.log(`Registrando sezione: ${section.title}`);
      await executeSectionAction(page, section);
      
      // Pausa per permettere all'utente di vedere l'azione
      await page.waitForTimeout(section.duration * 1000);
    }
    
  } finally {
    await context.close();
    await browser.close();
  }
  
  console.log('Screen recording completato');
}

// Esegue l'azione per una sezione
async function executeSectionAction(page, section) {
  switch (section.action) {
    case 'home':
      await page.click('button[onclick*="setTab(\'home\')"]');
      break;
    case 'home-microguide':
      await page.click('button[onclick*="setTab(\'home\')"]');
      await page.waitForTimeout(1000);
      // Scroll attraverso la microguida
      await page.evaluate(() => {
        const steps = document.querySelectorAll('.home-microguide-step');
        steps.forEach((step, i) => {
          setTimeout(() => {
            step.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, i * 1000);
        });
      });
      break;
    case 'curricolo-consulta':
      await page.click('button[onclick*="setTab(\'curricolo\')"]');
      await page.waitForTimeout(500);
      await page.click('button[onclick*="setTab(\'consulta\')"]');
      await page.waitForTimeout(1000);
      // Seleziona prima disciplina
      const firstDisc = await page.$('.disc-btn');
      if (firstDisc) await firstDisc.click();
      break;
    case 'curricolo-revisione':
      await page.click('button[onclick*="setTab(\'curricolo\')"]');
      await page.waitForTimeout(500);
      await page.click('button[onclick*="setTab(\'revisione\')"]');
      await page.waitForTimeout(1000);
      break;
    case 'docente-export':
      await page.click('button[onclick*="setTab(\'curricolo\')"]');
      await page.waitForTimeout(500);
      await page.click('button[onclick*="setTab(\'revisione\')"]');
      await page.waitForTimeout(1000);
      // Evidenzia pulsante export
      await page.evaluate(() => {
        const btn = document.querySelector('.export-btn.btn-cml');
        if (btn) {
          btn.style.border = '3px solid #ff0000';
          btn.style.boxShadow = '0 0 10px #ff0000';
        }
      });
      break;
    case 'dipartimento-import':
      await page.click('button[onclick*="setTab(\'curricolo\')"]');
      await page.waitForTimeout(500);
      await page.click('button[onclick*="setTab(\'revisione\')"]');
      await page.waitForTimeout(1000);
      // Apre pannello import
      const importPanel = await page.$('#department-import-panel summary');
      if (importPanel) await importPanel.click();
      break;
    case 'referente-import':
      await page.click('button[onclick*="setTab(\'curricolo\')"]');
      await page.waitForTimeout(500);
      await page.click('button[onclick*="setTab(\'revisione\')"]');
      await page.waitForTimeout(1000);
      // Apre pannello referente
      const referentPanel = await page.$('#referent-validation-panel summary');
      if (referentPanel) await referentPanel.click();
      break;
    case 'progettazione-didattica':
      await page.click('button[onclick*="setTab(\'didattica\')"]');
      await page.waitForTimeout(500);
      await page.click('button[onclick*="setTab(\'didattica\')"]');
      await page.waitForTimeout(1000);
      break;
    case 'esportazioni':
      await page.click('button[onclick*="setTab(\'esportazioni\')"]');
      await page.waitForTimeout(1000);
      break;
    case 'guida':
      await page.click('button[onclick*="setTab(\'guida\')"]');
      await page.waitForTimeout(1000);
      break;
    default:
      console.log(`Azione non riconosciuta: ${section.action}`);
  }
  
  await page.waitForTimeout(500);
}

// Unisce video + audio con FFmpeg
async function mergeVideoAudio() {
  console.log('Unendo video + audio con FFmpeg...');
  
  const videoPath = path.join(CONFIG.videoDir, 'video.webm');
  const audioFiles = SECTIONS.map(s => path.join(CONFIG.audioDir, `${s.id}.mp3`));
  const outputPath = path.join(CONFIG.finalDir, 'curmanlight-video-guide.mp4');
  
  // Concatena audio files
  const audioListPath = path.join(CONFIG.audioDir, 'audio-list.txt');
  const audioListContent = audioFiles.map(f => `file '${f}'`).join('\n');
  fs.writeFileSync(audioListPath, audioListContent);
  
  const concatenatedAudio = path.join(CONFIG.audioDir, 'concatenated-audio.mp3');
  
  try {
    // Concatena audio
    execSync(`ffmpeg -f concat -safe 0 -i "${audioListPath}" -c copy "${concatenatedAudio}"`, {
      stdio: 'inherit'
    });
    
    // Unisce video + audio
    execSync(`ffmpeg -i "${videoPath}" -i "${concatenatedAudio}" -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k -shortest "${outputPath}"`, {
      stdio: 'inherit'
    });
    
    console.log(`Video finale generato: ${outputPath}`);
    
    // Pulizia file temporanei
    fs.unlinkSync(audioListPath);
    fs.unlinkSync(concatenatedAudio);
    
  } catch (error) {
    console.error('Errore unione video + audio:', error);
    throw error;
  }
}

// Funzione principale
async function main() {
  console.log('=== CurManLight Video Guide Automation ===\n');
  
  try {
    // Crea directory output
    createOutputDirectories();
    
    // Genera audio TTS per tutte le sezioni
    console.log('\n--- Fase 1: Generazione Audio TTS ---');
    for (const section of SECTIONS) {
      await generateAudioTTS(section);
    }
    
    // Esegue screen recording
    console.log('\n--- Fase 2: Screen Recording ---');
    await recordScreenRecording();
    
    // Unisce video + audio
    console.log('\n--- Fase 3: Unione Video + Audio ---');
    await mergeVideoAudio();
    
    console.log('\n=== Video guide generato con successo! ===');
    console.log(`Percorso output: ${CONFIG.finalDir}`);
    
  } catch (error) {
    console.error('\nErrore durante la generazione del video:', error);
    process.exit(1);
  }
}

// Esecuzione
if (require.main === module) {
  main();
}

module.exports = { main, SECTIONS, CONFIG };
