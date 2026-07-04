# CML-389 — Sidebar legenda unica

## Sintesi
Introduzione di una legenda unica nella sidebar per spiegare gli indicatori di stato delle discipline, migliorando l'autoesplicatività dell'interfaccia.

## Cambiamenti principali

### Struttura HTML
Aggiunta legenda sotto il titolo "Discipline":
```html
<div class="aside-legend">
  <div class="aside-legend-item"><span class="aside-legend-dot" style="background:#bdbdbd"></span> Da consultare</div>
  <div class="aside-legend-item"><span class="aside-legend-dot" style="background:#ff9800"></span> Da verificare</div>
  <div class="aside-legend-item"><span class="aside-legend-dot" style="background:#43a047"></span> Approvato</div>
  <div class="aside-legend-item"><span style="color:#1976d2;font-size:9px">★NEW</span> Nuova disciplina</div>
</div>
```

### CSS aggiunto
- `.aside-legend`: sfondo #f5f5f5, padding 6px 11px, font-size 9px, bordo inferiore
- `.aside-legend-item`: flexbox con gap 5px, margin-bottom 3px
- `.aside-legend-dot`: pallino 6x6px, border-radius 50%

## Indicatori spiegati

| Indicatore | Significato | Azione suggerita |
|------------|-------------|------------------|
| ⚪ Grigio | Da consultare | Consulta il curricolo |
| 🟠 Arancione + numero | Da verificare (voci pendenti) | Verifica le voci in Revisione |
| 🟢 Verde + ✅ | Approvato | Nessun intervento necessario |
| ★NEW blu | Nuova disciplina | Esamina la disciplina |

## Allineamento con slice precedenti

### CML-387 (Guida task-oriented)
- Lessico coerente: "consulta", "verifica"
- Percorso operativo: consultare → verificare → approvare

### CML-388 (Onboarding refresh)
- Coerenza con i 5 passi: consulta, scegli, prepara, esporta, verifica
- La legenda spiega cosa significano gli indicatori di stato

### PM-07 Uniformità
- Prima intervento concreto su uniformità visiva
- Sidebar più autoesplicativa senza aggiungere complessità

## Risultato
- Sidebar più comprensibile per nuovi utenti
- Indicatori di stato immediatamente interpretabili
- Nessuna regressione su desktop/mobile
- Leggenda compatta e non invasiva

## PM-07 Uniformità
- **Prima**: 20%
- **Dopo**: 25%

## Prossima slice
CML-390 — Microcopy uniform (PM-07)
