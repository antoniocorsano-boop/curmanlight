window.CURMANLIGHT_DATA = {
  meta: {
    title: 'CurManLight — Revisione curricolo',
    officialSourceName: 'Curricolo disciplinare WORD.docx',
    sourceStatus: 'Fonte ufficiale da importare o verificare manualmente',
    version: 'CML-001'
  },
  views: [
    { id: 'home', title: 'Home', description: 'Percorso essenziale e prossima azione.' },
    { id: 'documento-generale', title: 'Documento generale', description: 'Sezioni istituzionali in sola lettura.' },
    { id: 'curricolo-attuale', title: 'Curricolo attuale', description: 'Consultazione del curricolo disciplinare.' },
    { id: 'indicazioni-2012', title: 'Indicazioni 2012', description: 'Riferimento normativo stabile.' },
    { id: 'nuove-2025', title: 'Nuove Indicazioni 2025', description: 'Confronto prudente e da validare.' },
    { id: 'revisione', title: 'Revisione disciplinare', description: 'Proposte, priorità, fonti e note.' },
    { id: 'fonti-export', title: 'Fonti ed esportazione', description: 'Riepilogo e uscita del lavoro.' }
  ],
  lockedGeneralSections: [
    {
      id: 'premessa',
      title: 'Premessa e finalità del curricolo',
      summary: 'Sezione istituzionale da mantenere stabile. Serve a chiarire funzione, destinatari e valore formativo del curricolo di istituto.',
      paragraphs: [
        'Il curricolo di istituto organizza il percorso formativo degli alunni in modo progressivo, coerente e condiviso tra ordini di scuola, discipline e comunità educante.',
        'Questa sezione non è un campo di lavoro diretto: deve essere consultata come riferimento comune prima di intervenire sulle parti disciplinari.'
      ],
      bullets: ['Identità formativa dell’istituto', 'Continuità del percorso verticale', 'Centralità della progettazione collegiale'],
      source: 'Documento ufficiale di istituto — sezione generale'
    },
    {
      id: 'quadro-normativo',
      title: 'Quadro di riferimento',
      summary: 'Raccoglie i riferimenti che orientano la progettazione curricolare e la revisione periodica.',
      paragraphs: [
        'I riferimenti normativi e pedagogici devono essere usati come base di controllo, non come testo da riscrivere automaticamente.',
        'Eventuali aggiornamenti devono essere distinti dal testo vigente e sottoposti a validazione umana.'
      ],
      bullets: ['Autonomia scolastica', 'Indicazioni nazionali vigenti', 'Competenze chiave europee', 'Valutazione e inclusione'],
      source: 'Documento ufficiale di istituto — riferimenti generali'
    },
    {
      id: 'profilo-studente',
      title: 'Profilo dello studente e competenze attese',
      summary: 'Descrive l’orizzonte formativo comune verso cui tendono le discipline.',
      paragraphs: [
        'Il profilo dello studente consente di collegare le scelte disciplinari a obiettivi trasversali, competenze personali e cittadinanza attiva.',
        'Le discipline devono contribuire a tale profilo senza perdere la specificità dei propri saperi e linguaggi.'
      ],
      bullets: ['Sviluppo dell’autonomia', 'Responsabilità personale e sociale', 'Uso consapevole dei linguaggi', 'Pensiero critico e operativo'],
      source: 'Documento ufficiale di istituto — profilo formativo'
    },
    {
      id: 'organizzazione',
      title: 'Organizzazione del curricolo verticale',
      summary: 'Definisce criteri di progressione, raccordo e coerenza tra anni e ordini di scuola.',
      paragraphs: [
        'La revisione disciplinare deve rispettare la progressione verticale: non basta aggiornare singole attività, occorre verificare il raccordo tra traguardi, obiettivi e competenze.',
        'Le modifiche operative vanno quindi motivate attraverso fonte, priorità e impatto sul percorso.'
      ],
      bullets: ['Progressione per anni', 'Raccordo tra ordini', 'Coerenza tra traguardi e obiettivi', 'Documentazione delle modifiche'],
      source: 'Documento ufficiale di istituto — impianto verticale'
    }
  ],
  disciplines: [
    {
      id: 'tecnologia',
      name: 'Tecnologia',
      status: 'Disciplina campione',
      sections: [
        {
          title: 'Nuclei fondanti',
          text: 'Materiali, energia, ambiente, rappresentazione tecnica, progettazione, digitale e processi produttivi. La sezione va verificata rispetto al curricolo ufficiale caricato.'
        },
        {
          title: 'Traguardi di competenza',
          text: 'Lo studente osserva, analizza e interpreta sistemi tecnici e tecnologici; progetta semplici soluzioni; usa strumenti e linguaggi in modo consapevole.'
        },
        {
          title: 'Obiettivi di apprendimento',
          text: 'Gli obiettivi devono essere articolati per anno e collegati a evidenze osservabili, evitando formulazioni generiche o non verificabili.'
        },
        {
          title: 'Raccordi verticali',
          text: 'La progressione deve chiarire cosa viene introdotto, consolidato e approfondito nei diversi anni del primo ciclo.'
        }
      ]
    },
    {
      id: 'italiano',
      name: 'Italiano',
      status: 'Struttura predisposta',
      sections: [
        { title: 'Nuclei fondanti', text: 'Ascolto, parlato, lettura, scrittura, lessico, riflessione linguistica. Testo da allineare al documento ufficiale.' },
        { title: 'Traguardi di competenza', text: 'Sezione predisposta per importazione o revisione controllata.' },
        { title: 'Obiettivi di apprendimento', text: 'Sezione predisposta per anno, fonte e livello di priorità.' }
      ]
    },
    {
      id: 'matematica',
      name: 'Matematica',
      status: 'Struttura predisposta',
      sections: [
        { title: 'Nuclei fondanti', text: 'Numeri, spazio e figure, relazioni e funzioni, dati e previsioni. Testo da allineare al documento ufficiale.' },
        { title: 'Traguardi di competenza', text: 'Sezione predisposta per importazione o revisione controllata.' },
        { title: 'Obiettivi di apprendimento', text: 'Sezione predisposta per anno, fonte e livello di priorità.' }
      ]
    }
  ],
  references2012: [
    {
      title: 'Funzione delle Indicazioni 2012',
      text: 'Le Indicazioni 2012 costituiscono il riferimento ordinario per il curricolo della scuola dell’infanzia e del primo ciclo. In questa vista sono trattate come base stabile di confronto.'
    },
    {
      title: 'Uso nella revisione',
      text: 'Ogni proposta di modifica deve chiarire se conferma il curricolo vigente, lo integra o segnala una possibile criticità di allineamento.'
    },
    {
      title: 'Criterio operativo',
      text: 'Non copiare automaticamente testi normativi. Usare il riferimento per verificare coerenza, progressione e osservabilità degli obiettivi.'
    }
  ],
  references2025: [
    {
      title: 'Confronto prudente',
      text: 'Le nuove formulazioni o bozze di aggiornamento devono essere lette come elementi di confronto fino alla validazione istituzionale definitiva.'
    },
    {
      title: 'Separazione dal curricolo vigente',
      text: 'La proposta 2025 non sovrascrive il curricolo attuale. Ogni suggerimento resta classificato come proposta, con fonte e motivazione.'
    },
    {
      title: 'Impatto disciplinare',
      text: 'La revisione deve indicare quali sezioni disciplinari sono interessate: traguardi, obiettivi, raccordi, attività, valutazione o lessico.'
    }
  ],
  revisions: [
    {
      id: 'rev-tec-001',
      discipline: 'Tecnologia',
      title: 'Rendere più esplicito il raccordo tra progettazione, sostenibilità e digitale',
      source: 'Curricolo attuale + confronto Indicazioni',
      priority: 'alta',
      status: 'bozza',
      note: 'Verificare che la progressione per classe non sia solo tematica, ma collegata a competenze osservabili.'
    },
    {
      id: 'rev-tec-002',
      discipline: 'Tecnologia',
      title: 'Distinguere meglio attività operative, competenze e criteri di valutazione',
      source: 'Documento ufficiale di istituto',
      priority: 'media',
      status: 'da_verificare',
      note: 'La proposta richiede controllo collegiale prima dell’eventuale inserimento nel documento.'
    }
  ],
  sources: [
    {
      label: 'Curricolo disciplinare WORD.docx',
      kind: 'Fonte ufficiale di istituto',
      use: 'Base documentale da consultare e importare in modo controllato.'
    },
    {
      label: 'Indicazioni nazionali 2012',
      kind: 'Riferimento normativo',
      use: 'Base stabile per traguardi, obiettivi e impianto curricolare.'
    },
    {
      label: 'Nuove Indicazioni 2025',
      kind: 'Confronto e aggiornamento',
      use: 'Area prudenziale per proposte da validare.'
    },
    {
      label: 'Delibere e documenti di istituto',
      kind: 'Validazione interna',
      use: 'Controllo umano, collegiale e istituzionale prima dell’adozione.'
    }
  ]
};
