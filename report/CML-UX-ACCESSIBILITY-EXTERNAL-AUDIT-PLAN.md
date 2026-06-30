# Report — Piano Audit Esterno Accessibilità CurManLight

## Riepilogo Esecutivo

CurManLight ha raggiunto score 64/100 con miglioramenti interni (skip link, ARIA accordion, live region, emoji decorative). Prima di procedere con nuovi fix runtime, questo piano definisce criteri oggettivi, strumenti, protocolli e soglie per un audit esterno che porti l'applicazione verso uno stato "audit-ready" difendibile.

## Perché Serve un Audit Esterno

1. I miglioramenti finora sono stati eseguiti senza strumenti automatici (axe/Lighthouse).
2. Non esiste documentazione di test screen reader.
3. Il punteggio 64/100 è prudente ma non sostenibile senza verifiche oggettive.
4. Una policy chiara evita di dichiarare miglioramenti non supportati da evidenze.

## Aree da Testare

| # | Area | Priorità | Note |
|---|------|----------|------|
| 1 | Home | Alta | Entry point, prima impressione |
| 2 | Curriculum | Alta | Lista discipline, navigazione principale |
| 3 | Cambio disciplina | Alta | Input select + annuncio dinamico |
| 4 | Competenze e Progettazione | Alta | Tab dinamico con contenuto caricato |
| 5 | UDA | Alta | Contenuto generato dinamicamente |
| 6 | Evidenze/Valutazione | Media | Accordion con stato collassabile |
| 7 | Esportazioni | Media | Export Center modale |
| 8 | Guida | Media | Pagina statica informativa |
| 9 | Mobile bottom bar | Alta | Navigazione mobile principale |
| 10 | Menu mobile | Alta | Hamburger menu touch |
| 11 | Accordion Evidenze | Media | Pattern accordion |
| 12 | Export Center | Alta | Modale con focus trap |

## Matrice Strumenti/Obiettivi

| Obiettivo | Strumento | Copertura | Soglia |
|-----------|-----------|-----------|--------|
| Violazioni automatiche | axe DevTools | Tutte le aree, 6 discipline, 4 viewport | 0 critical, 0 serious |
| Punteggio complessivo | Lighthouse Accessibility | Home + 1 pagina dinamica | ≥ 80 accettabile, ≥ 90 obiettivo |
| Screen reader | NVDA + Firefox/Chrome | Percorso minimo 10 step | PASS / FAIL |
| Screen reader Apple | VoiceOver + Safari | Percorso minimo 10 step | MEDIA priorità |
| Tastiera | Test manuale | Navigazione completa | Ordine logico, nessun focus trap |
| Mobile touch | Test manuale | Touch target, scroll, zoom | ≥ 44×44 CSS px |

## Criteri di Accettazione

Prima di dichiarare un miglioramento dello score:

- Score ≤ 70: basta audit automatico documentato
- Score 71–80: axe 0 critical + 0 serious + Lighthouse ≥ 80
- Score 81–85: axe + Lighthouse ≥ 90 + screen reader smoke test PASS
- Score > 85: tutto quanto sopra + VoiceOver/TalkBack + valutazione esterna

## Relazione con ICON-ONLY-LABELS

La runtime slice `CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS` sarà eseguita dopo questo piano, applicando i criteri qui fissati:

- Sostituzione `title` → `aria-label` con verifica tastiera post-fix
- Classificazione P1/P2/P3 secondo le regole del piano
- Nessun cambiamento di layout o comportamento

## Raccomandazione Operativa

1. Approvare questo piano come docs-only
2. Eseguire ICON-ONLY-LABELS (runtime) con criteri già fissati
3. Eseguire audit automatico (axe/Lighthouse) come slice separata
4. Eseguire screen reader smoke test
5. Aggiornare score con evidenza documentata

## Rischi Residui

| Rischio | Impatto | Mitigazione |
|---------|---------|-------------|
| axe non disponibile in ambiente team | Non si può validare | Usare Lighthouse come alternativa parziale |
| NVDA non installato | Screen reader test non eseguibile su Windows | VoiceOver su macOS come fallback parziale |
| Score policy troppo restrittiva | Blocca miglioramenti | Soglia 80 come accettabile temporaneo sblocca remediation |
| ICON-ONLY-LABELS senza audit preventivo | Fix non validato da strumenti | Il piano richiede axe post-fix comunque |
