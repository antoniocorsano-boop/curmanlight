# UI/UX 3D Landing Study — Archive

## Scopo del documento

Archiviare lo studio UI/UX per una landing page tridimensionale destinata a CurManLight. Il documento registra la valutazione, le criticità, la decisione progettuale e le regole per eventuali sviluppi futuri. Non costituisce specifica implementativa.

## Sintesi della proposta originaria

La proposta prevedeva una landing page introduttiva con elementi tridimensionali (Three.js) per presentare il processo umano di revisione del curricolo scolastico. L'obiettivo era comunicare visivamente i cinque passaggi del flusso di lavoro:

1. Consulta il curricolo vigente
2. Confronta con il quadro 2025
3. Formula proposte disciplinari
4. Valida in dipartimento
5. Esporta e conserva gli esiti

La proposta includeva l'uso di React per la gestione degli stati, Vite come bundler, Lenis per lo scroll fluido e Three.js per la visualizzazione 3D.

## Valutazione positiva

- L'idea di una sezione introduttiva che presenti il processo in modo chiaro è condivisibile e utile per l'utente.
- I cinque passaggi proposti descrivono correttamente il flusso di lavoro umano di revisione del curricolo.
- La separazione concettuale tra "curricolo vigente" e "quadro 2025" corrisponde alla struttura già presente nell'applicazione (pannello duale current/proposed).
- Una sezione introduttiva potrebbe migliorare l'onboarding di nuovi docenti e referenti.

## Criticità

| Criticità | Descrizione |
|-----------|-------------|
| Complessità tecnica | Three.js + React + Vite + Lenis rappresentano un salto tecnologico incompatibile con l'architettura attuale (HTML/CSS/JS monolitico). |
| Manutenzione | Ogni nuova dipendenza aumenta il costo di manutenzione e il rischio di rottura. |
| Landing autonoma | Una landing separata dall'applicazione esistente creerebbe discontinuità nell'esperienza utente. |
| Accessibilità | La navigazione 3D può essere problematica per utenti con disabilità motorie o cognitive. |
| Performance | Three.js su dispositivi mobili (target primario di CurManLight) può causare problemi di performance e surriscaldamento. |
| Sovraingegnerizzazione | Per presentare 5 passaggi testuali, la complessità 3D è sproporzionata rispetto al valore comunicativo. |

## Decisione progettuale

**La proposta 3D è utile come riferimento concettuale, ma NON è una specifica implementativa.**

Non autorizza:
- React
- Three.js
- Vite
- Lenis
- Nuove dipendenze
- Nuova landing autonoma
- Cambio architetturale

La sezione introduttiva, se realizzata in futuro, dovrà essere:
- Static HTML/CSS (coerente con l'architettura monolitica esistente)
- Senza framework o librerie esterne
- Integrata nella Home tab esistente (non landing autonoma)

## Trasformazione consigliata per CurManLight

L'eventuale futura implementazione dovrà consistere in una sezione statica, non 3D, con due riquadri informativi:

1. **Riquadro sinistro** — "Curricolo vigente": rimanda alla consultazione del documento istituzionale attuale (D.M. 254/2012).
2. **Riquadro destro** — "Quadro 2025": rimanda al confronto con le nuove Indicazioni Nazionali (D.M. 221/2025).

La sezione presenterà il processo umano in 5 passaggi come elenco numerato, riutilizzando le classi CSS esistenti (`home-process-path`, `home-microguide`, `notice-box`).

## Regole per eventuali sviluppi futuri

- Nessuna nuova dipendenza può essere introdotta senza una slice di valutazione dedicata.
- Qualsiasi modifica all'architettura (React, Vite, Three.js) richiede una slice progettuale separata e validazione preventiva.
- La landing, se realizzata, deve essere parte dell'applicazione esistente (Home tab) e non una pagina autonoma.
- Il contenuto deve essere statico e accessibile senza JavaScript abilitato.
- La priorità è mobile-first, coerentemente con il design system esistente (touch target >= 44px, scroll orizzontale, barra mobile).

## Stato del documento

| Campo | Valore |
|-------|--------|
| Stato | Archiviato |
| Data | 2026-06-25 |
| Tipo | Studio concettuale |
| Implementazione | Nessuna |
| Riferimento | CML-158 |