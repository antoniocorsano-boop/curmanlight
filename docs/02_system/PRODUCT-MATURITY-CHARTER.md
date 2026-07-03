# Product Maturity Charter

## Missione del programma

Stabilire e mantenere nel tempo un sistema operativo di maturita prodotto che renda CurManLight semplice, chiaro, coerente e realmente utilizzabile da utenti scolastici non tecnici.

## Visione di prodotto maturo

Un prodotto maturo in CurManLight e un prodotto che:
- guida l'utente verso il compito corretto senza ambiguita;
- usa linguaggio scolastico comprensibile, non tecnico;
- minimizza errori, ripensamenti e carico cognitivo;
- mantiene coerenza tra interfaccia, guida e terminologia;
- rende prevedibile il comportamento di navigazione e focus.

## Principi non negoziabili

1. Centralita dell'utente scolastico non tecnico.
2. Una schermata = un obiettivo principale.
3. Una decisione principale per volta.
4. Nessuna esposizione di logiche tecniche all'utente finale.
5. Riduzione sistematica del carico cognitivo.
6. Coerenza tra UI, guida, lessico e struttura informativa.
7. Ogni modifica UI deve essere verificabile con criteri UX espliciti.
8. Durante il Programma di Maturita del Prodotto non si introducono nuove funzionalita, salvo correzioni critiche o interventi strettamente necessari a completare un macroprogramma della roadmap.

## Regola di freeze evolutivo

Finche PM-04 (Comprensione del Curriculum) non e completato, la priorita assoluta e ridurre la complessita percepita. Ogni proposta di modifica deve rispondere prima a questa domanda: l'utente capisce meglio e completa il compito con minore carico cognitivo?

## Criterio "una schermata = un obiettivo"

Ogni schermata deve servire un solo obiettivo utente dominante. Se una schermata contiene obiettivi concorrenti, va rifattorizzata in sezioni o passaggi separati.

## Centralita dell'utente scolastico non tecnico

Le scelte di prodotto devono privilegiare comprensione immediata, orientamento e azioni concrete per docenti e personale scolastico senza competenze tecniche.

## Divieto di esposizione di logiche tecniche

Nell'interfaccia utente finale e vietato esporre termini o stati tecnici (es. runtime, hash, workflow, validator, shape test) salvo documentazione tecnica interna.

## Criterio di riduzione del carico cognitivo

Ogni slice UI deve dimostrare che:
- riduce o non aumenta il numero di decisioni simultanee;
- mantiene massimo tre azioni primarie visibili nella stessa area;
- usa etichette esplicite e non ambigue;
- mantiene allineamento tra etichette e compito reale.

## Regole di accettazione per future slice UI

Una slice UI e accettabile solo se:
1. dichiara obiettivo utente principale della schermata;
2. dichiara impatto sul carico cognitivo (ridotto, neutro, aumentato);
3. rispetta gli standard di `docs/02_system/UX-STANDARDS.md`;
4. allinea la guida alla UI aggiornata;
5. non introduce lessico tecnico nella UI;
6. esplicita checklist UX compilata nel documento di esecuzione della slice.
