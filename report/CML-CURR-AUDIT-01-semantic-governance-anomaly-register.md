# CML-CURR-AUDIT-01 — Registro consolidato anomalie semantiche e di governance

## Scopo

Questo registro consolida i rilievi emersi dai pilot disciplinari e dalle verifiche trasversali. Non modifica né approva dati curricolari.

## P1 — priorità alta

1. **Matematica, Secondaria classe 1 — possibile contaminazione di livello**
   - `mat_sec_1_001` combina obiettivi da Secondaria con conoscenze tipiche della Primaria (`numeri naturali entro il 20` e progressione entro il 100).
   - Richiesta verifica disciplinare e confronto con la fonte originaria.

2. **Governance incoerente della validazione**
   - Tutte le 142 unità hanno `validazioneUmana: true`.
   - Educazione Fisica e Religione Cattolica dichiarano però nei metadati o nelle note contenuti provvisori, non validati o ancora da validare con il dipartimento.
   - `validazioneUmana: true` non può essere interpretato come approvazione formale senza un contratto di stato esplicito.

3. **Provenienza disciplinare insufficiente in Italiano**
   - La fonte top-level dichiara adattamento dal benchmark strutturale Tecnologia/Italiano.
   - Il riuso dello schema è legittimo, ma non costituisce fonte disciplinare dei contenuti di Italiano.

4. **Nove gap Primaria ad alta confidenza**
   - Arte e Immagine classe 2;
   - Educazione Fisica classe 2;
   - Matematica classi 2, 3, 4;
   - Musica classi 2, 4;
   - Religione Cattolica classi 2, 4.
   - Nessuna fonte, nota o metadato documenta aggregazione o non applicabilità.

5. **Granularità sistemica dell’Infanzia**
   - Dieci assenze fascia 3–4 derivano da un unico problema di modello.
   - Le unità fascia 5 rinviano ai cinque campi di esperienza, ma non dichiarano copertura plurifascia 3–5.

## P2 — priorità media

1. **Geografia — duplicazione testuale esatta**
   - Il traguardo di `geo_pri_3_001` coincide con `geo_pri_1_001`.

2. **Fonti aggregate e non granulari**
   - In più discipline una singola stringa fonte combina D.M. 254/2012, D.M. 221/2025, documenti interni, Agenda 2030 e adattamenti d’istituto.
   - Non è possibile attribuire ogni campo a una fonte specifica.

3. **Applicabilità temporale non esplicitata nelle unità**
   - I riferimenti a IN 2012 e IN 2025 non indicano anno scolastico, classe, tipo di uso o regime transitorio.

4. **Riferimenti normativi da verificare puntualmente**
   - Italiano: corsivo, lettura integrale, numero di libri, norma grammaticale, riassunto.
   - Educazione Civica: educazione finanziaria/previdenziale, pluralismo e riferimenti internazionali.
   - Tecnologia: Educazione Civica e pensiero computazionale attribuiti a D.M. 221/2025.
   - Musica: notazione curricolare, canto corale e tecnologie digitali.
   - Religione Cattolica: pluralismo culturale e religioso.

5. **Adattamenti locali non distinti dalle fonti ufficiali**
   - Ceramica arianese, patrimonio irpino, evidenze quantitative, durate, numero di righe, percentuali e soglie operative.

## P3 — qualità editoriale

- Musica: `Elementi diagogica` e maiuscola anomala in `Onomatopee`.
- Educazione Fisica: ricorrenze di accenti impropri come `attivitá`, `abilitá`, `Capacitá`.
- Ulteriore normalizzazione ortografica raccomandata sull’intero corpus.

## Decisioni richieste prima di correzioni dati

1. definire il significato di `validazioneUmana`, `stato`, `readiness` e approvazione dipartimentale;
2. adottare un modello di provenienza per campo o almeno per blocco semantico;
3. distinguere fonte ufficiale, adattamento d’istituto e proposta transitoria;
4. approvare la granularità dell’Infanzia;
5. validare i nove gap Primaria;
6. aprire correzioni dati in PR separate, disciplina per disciplina.

`CML_CURR_AUDIT_01_CONSOLIDATED_ANOMALY_REGISTER_READY_NO_DATA_CHANGED`
