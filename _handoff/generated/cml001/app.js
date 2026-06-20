(function () {
  'use strict';

  const data = window.CURMANLIGHT_DATA;
  const root = document.getElementById('view-root');
  const nav = document.getElementById('view-nav');
  const currentTitle = document.getElementById('current-view-title');
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  const storageKey = 'curmanlight.cml001.revisions.v1';

  let activeView = getInitialView();
  let activeDiscipline = data.disciplines[0].id;
  let revisions = loadRevisions();

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getInitialView() {
    const hash = window.location.hash.replace('#', '');
    return data.views.some((view) => view.id === hash) ? hash : 'home';
  }

  function loadRevisions() {
    try {
      const stored = window.localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : data.revisions;
    } catch (error) {
      return data.revisions;
    }
  }

  function saveRevisions() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(revisions));
    } catch (error) {
      console.warn('Salvataggio locale non disponibile', error);
    }
  }

  function setView(viewId) {
    activeView = viewId;
    window.location.hash = viewId;
    render();
    closeMobileSidebar();
    document.getElementById('main-content').focus({ preventScroll: true });
  }

  function closeMobileSidebar() {
    sidebar.dataset.open = 'false';
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function renderNav() {
    nav.innerHTML = data.views.map((view, index) => `
      <button class="nav-button" type="button" data-view="${view.id}" aria-current="${activeView === view.id ? 'page' : 'false'}">
        <span class="nav-index">${index + 1}</span>
        <span>
          <span class="nav-title">${escapeHtml(view.title)}</span>
          <span class="nav-desc">${escapeHtml(view.description)}</span>
        </span>
      </button>
    `).join('');

    nav.querySelectorAll('[data-view]').forEach((button) => {
      button.addEventListener('click', () => setView(button.dataset.view));
    });
  }

  function render() {
    const view = data.views.find((item) => item.id === activeView) || data.views[0];
    currentTitle.textContent = view.title;
    renderNav();

    const renderers = {
      home: renderHome,
      'documento-generale': renderDocumentoGenerale,
      'curricolo-attuale': renderCurricoloAttuale,
      'indicazioni-2012': renderIndicazioni2012,
      'nuove-2025': renderNuove2025,
      revisione: renderRevisione,
      'fonti-export': renderFontiExport
    };

    root.innerHTML = renderers[activeView] ? renderers[activeView]() : renderHome();
    bindViewEvents();
  }

  function viewHeading(kicker, title, lead) {
    return `
      <header class="view-heading">
        <p class="eyebrow">${escapeHtml(kicker)}</p>
        <h2>${escapeHtml(title)}</h2>
        <p class="lead">${escapeHtml(lead)}</p>
      </header>
    `;
  }

  function renderHome() {
    const pending = revisions.filter((revision) => revision.status !== 'validata').length;
    return `
      <section class="hero">
        <div class="hero-card">
          <p class="eyebrow">Percorso consigliato</p>
          <h2>Consulta il documento, confronta le fonti, lavora solo sulle proposte.</h2>
          <p class="lead">Le sezioni generali restano bloccate. La revisione avviene sulle parti disciplinari, con fonte, priorità, stato e nota di validazione.</p>
          <div class="hero-actions">
            <button class="button-primary" type="button" data-view="documento-generale">Apri documento generale</button>
            <button class="button-secondary" type="button" data-view="revisione">Vai alla revisione</button>
          </div>
        </div>
        <aside class="panel" aria-label="Sintesi operativa">
          <dl class="summary-list">
            <div class="summary-item">
              <span class="summary-dot" aria-hidden="true"></span>
              <div><dt>Sezioni bloccate</dt><dd>${data.lockedGeneralSections.length} sezioni generali consultabili.</dd></div>
            </div>
            <div class="summary-item">
              <span class="summary-dot" aria-hidden="true"></span>
              <div><dt>Proposte aperte</dt><dd>${pending} elementi da controllare o validare.</dd></div>
            </div>
            <div class="summary-item">
              <span class="summary-dot" aria-hidden="true"></span>
              <div><dt>Fonte ufficiale</dt><dd>${escapeHtml(data.meta.officialSourceName)}</dd></div>
            </div>
          </dl>
        </aside>
      </section>

      <section class="grid three" aria-label="Azioni principali">
        ${quickCard('1', 'Prima consulta', 'Leggi le sezioni istituzionali senza modificarle.', 'documento-generale')}
        ${quickCard('2', 'Poi confronta', 'Verifica curricolo attuale, Indicazioni 2012 e proposta 2025.', 'curricolo-attuale')}
        ${quickCard('3', 'Infine revisiona', 'Lavora sulle proposte disciplinari, sempre con validazione umana.', 'revisione')}
      </section>
    `;
  }

  function quickCard(index, title, text, viewId) {
    return `
      <article class="card">
        <div class="card-header">
          <div>
            <p class="eyebrow">Passo ${index}</p>
            <h3>${escapeHtml(title)}</h3>
          </div>
          <span class="badge badge-info">Guidato</span>
        </div>
        <p class="muted">${escapeHtml(text)}</p>
        <button class="inline-action" type="button" data-view="${viewId}">Apri</button>
      </article>
    `;
  }

  function renderDocumentoGenerale() {
    return `
      ${viewHeading('Consultazione istituzionale', 'Documento generale in sola lettura', 'Queste sezioni descrivono l’impianto comune del curricolo. Sono visibili, referenziate e non modificabili.')}
      <div class="notice"><strong>Blocco di sicurezza:</strong> le sezioni generali non contengono campi di modifica. Per intervenire sul curricolo usare la vista “Revisione disciplinare”.</div>
      <section class="grid two" aria-label="Sezioni generali bloccate">
        ${data.lockedGeneralSections.map(renderLockedSection).join('')}
      </section>
    `;
  }

  function renderLockedSection(section) {
    const bullets = section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
    const paragraphs = section.paragraphs.map((item) => `<p>${escapeHtml(item)}</p>`).join('');
    return `
      <article class="card locked-card">
        <div class="card-header">
          <div>
            <p class="eyebrow">Sezione generale</p>
            <h3>${escapeHtml(section.title)}</h3>
          </div>
          <span class="badge badge-locked">Sola lettura</span>
        </div>
        <p class="muted">${escapeHtml(section.summary)}</p>
        <div class="content-block">
          ${paragraphs}
          <ul>${bullets}</ul>
        </div>
        <footer class="source-line">Fonte: ${escapeHtml(section.source)}</footer>
      </article>
    `;
  }

  function renderCurricoloAttuale() {
    const discipline = data.disciplines.find((item) => item.id === activeDiscipline) || data.disciplines[0];
    return `
      ${viewHeading('Consultazione disciplinare', 'Curricolo attuale', 'Questa vista serve a leggere e confrontare. Le modifiche devono essere registrate come proposte, non applicate direttamente al documento.')}
      ${renderDisciplineToolbar()}
      <article class="card">
        <div class="card-header">
          <div>
            <p class="eyebrow">Disciplina selezionata</p>
            <h3>${escapeHtml(discipline.name)}</h3>
          </div>
          <span class="badge badge-info">${escapeHtml(discipline.status)}</span>
        </div>
        <div class="accordion" data-accordion>
          ${discipline.sections.map((section, index) => renderAccordionItem(section.title, section.text, index === 0)).join('')}
        </div>
      </article>
    `;
  }

  function renderDisciplineToolbar() {
    const options = data.disciplines.map((discipline) => `
      <option value="${discipline.id}" ${discipline.id === activeDiscipline ? 'selected' : ''}>${escapeHtml(discipline.name)}</option>
    `).join('');
    return `
      <div class="toolbar">
        <div class="field-group">
          <label for="discipline-select">Disciplina</label>
          <select id="discipline-select">${options}</select>
        </div>
        <button class="button-secondary" type="button" data-view="revisione">Apri proposte di revisione</button>
      </div>
    `;
  }

  function renderAccordionItem(title, text, open) {
    return `
      <div class="accordion-item" data-open="${open ? 'true' : 'false'}">
        <button class="accordion-button" type="button" aria-expanded="${open ? 'true' : 'false'}">
          <span>${escapeHtml(title)}</span>
          <span aria-hidden="true">⌄</span>
        </button>
        <div class="accordion-content">${escapeHtml(text)}</div>
      </div>
    `;
  }

  function renderIndicazioni2012() {
    return `
      ${viewHeading('Riferimento stabile', 'Indicazioni nazionali 2012', 'Area di consultazione per controllare coerenza, progressione e osservabilità delle sezioni curricolari.')}
      <section class="grid three">
        ${data.references2012.map((item) => referenceCard(item, 'Sola lettura')).join('')}
      </section>
    `;
  }

  function renderNuove2025() {
    return `
      ${viewHeading('Confronto prudente', 'Nuove Indicazioni 2025', 'Le possibili innovazioni sono trattate come proposte da verificare, senza sostituire automaticamente il curricolo vigente.')}
      <div class="notice"><strong>Nota di metodo:</strong> usare sempre formule prudenti: proposta, possibile aggiornamento, da validare collegialmente.</div>
      <section class="grid three">
        ${data.references2025.map((item) => referenceCard(item, 'Da validare')).join('')}
      </section>
    `;
  }

  function referenceCard(item, badge) {
    return `
      <article class="card">
        <div class="card-header">
          <div>
            <p class="eyebrow">Riferimento</p>
            <h3>${escapeHtml(item.title)}</h3>
          </div>
          <span class="badge ${badge === 'Da validare' ? 'badge-work' : 'badge-locked'}">${escapeHtml(badge)}</span>
        </div>
        <p class="muted">${escapeHtml(item.text)}</p>
      </article>
    `;
  }

  function renderRevisione() {
    return `
      ${viewHeading('Area operativa', 'Revisione disciplinare', 'Qui si lavora sulle proposte. Ogni modifica resta locale e richiede controllo umano prima di diventare documento ufficiale.')}
      <div class="toolbar">
        <button class="button-primary" type="button" id="add-revision">Aggiungi proposta</button>
        <button class="button-secondary" type="button" id="reset-revisions">Ripristina proposte iniziali</button>
      </div>
      <section class="grid" aria-label="Proposte di revisione">
        ${revisions.map(renderRevisionCard).join('')}
      </section>
    `;
  }

  function renderRevisionCard(revision) {
    return `
      <article class="card revision-card" data-revision-id="${revision.id}">
        <div class="card-header">
          <div>
            <p class="eyebrow">${escapeHtml(revision.discipline)}</p>
            <h3>${escapeHtml(revision.title)}</h3>
          </div>
          <span class="badge ${revision.status === 'validata' ? 'badge-locked' : 'badge-work'}">${labelStatus(revision.status)}</span>
        </div>
        <div class="revision-grid">
          <div class="field-group">
            <label for="priority-${revision.id}">Priorità</label>
            <select id="priority-${revision.id}" data-field="priority">
              ${option('alta', 'Alta', revision.priority)}
              ${option('media', 'Media', revision.priority)}
              ${option('bassa', 'Bassa', revision.priority)}
            </select>
          </div>
          <div class="field-group">
            <label for="status-${revision.id}">Stato</label>
            <select id="status-${revision.id}" data-field="status">
              ${option('bozza', 'Bozza', revision.status)}
              ${option('da_verificare', 'Da verificare', revision.status)}
              ${option('validata', 'Validata', revision.status)}
            </select>
          </div>
          <div class="field-group">
            <label for="source-${revision.id}">Fonte</label>
            <input id="source-${revision.id}" data-field="source" value="${escapeHtml(revision.source)}">
          </div>
        </div>
        <div class="field-group">
          <label for="note-${revision.id}">Nota di revisione</label>
          <textarea id="note-${revision.id}" data-field="note">${escapeHtml(revision.note)}</textarea>
        </div>
      </article>
    `;
  }

  function option(value, label, selected) {
    return `<option value="${value}" ${value === selected ? 'selected' : ''}>${label}</option>`;
  }

  function labelStatus(status) {
    const labels = {
      bozza: 'Bozza',
      da_verificare: 'Da verificare',
      validata: 'Validata'
    };
    return labels[status] || status;
  }

  function renderFontiExport() {
    return `
      ${viewHeading('Controllo finale', 'Fonti ed esportazione', 'Raccoglie le fonti usate e consente di produrre un riepilogo locale del lavoro, senza trasmettere dati all’esterno.')}
      <section class="grid two">
        <article class="card">
          <div class="card-header">
            <div>
              <p class="eyebrow">Fonti</p>
              <h3>Registro delle fonti</h3>
            </div>
            <span class="badge badge-info">${data.sources.length} elementi</span>
          </div>
          <div class="grid">
            ${data.sources.map((source) => `
              <div class="source-card">
                <strong>${escapeHtml(source.label)}</strong>
                <span class="muted">${escapeHtml(source.kind)} — ${escapeHtml(source.use)}</span>
              </div>
            `).join('')}
          </div>
        </article>
        <article class="card export-box">
          <div>
            <p class="eyebrow">Esportazione locale</p>
            <h3>Riepilogo del lavoro</h3>
            <p class="muted">Le funzioni esportano o stampano ciò che è già presente nel browser. Non vengono usati servizi esterni.</p>
          </div>
          <div class="export-actions">
            <button class="button-primary" type="button" id="copy-summary">Copia riepilogo</button>
            <button class="button-secondary" type="button" id="download-json">Scarica JSON</button>
            <button class="button-ghost" type="button" id="print-page">Stampa</button>
          </div>
          <p class="footer-note" id="export-feedback" role="status"></p>
        </article>
      </section>
    `;
  }

  function bindViewEvents() {
    root.querySelectorAll('[data-view]').forEach((button) => {
      button.addEventListener('click', () => setView(button.dataset.view));
    });

    const disciplineSelect = document.getElementById('discipline-select');
    if (disciplineSelect) {
      disciplineSelect.addEventListener('change', (event) => {
        activeDiscipline = event.target.value;
        render();
      });
    }

    root.querySelectorAll('.accordion-button').forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('.accordion-item');
        const nextState = item.dataset.open !== 'true';
        item.dataset.open = String(nextState);
        button.setAttribute('aria-expanded', String(nextState));
      });
    });

    root.querySelectorAll('[data-revision-id] input, [data-revision-id] textarea, [data-revision-id] select').forEach((field) => {
      field.addEventListener('input', updateRevisionFromField);
      field.addEventListener('change', updateRevisionFromField);
    });

    const addRevision = document.getElementById('add-revision');
    if (addRevision) {
      addRevision.addEventListener('click', () => {
        revisions.unshift({
          id: `rev-${Date.now()}`,
          discipline: data.disciplines.find((item) => item.id === activeDiscipline)?.name || 'Disciplina',
          title: 'Nuova proposta di revisione',
          source: data.meta.officialSourceName,
          priority: 'media',
          status: 'bozza',
          note: 'Descrivere la modifica proposta, la fonte e la motivazione didattica.'
        });
        saveRevisions();
        render();
      });
    }

    const resetRevisions = document.getElementById('reset-revisions');
    if (resetRevisions) {
      resetRevisions.addEventListener('click', () => {
        revisions = data.revisions.map((item) => ({ ...item }));
        saveRevisions();
        render();
      });
    }

    const copySummary = document.getElementById('copy-summary');
    if (copySummary) copySummary.addEventListener('click', copyMarkdownSummary);

    const downloadJson = document.getElementById('download-json');
    if (downloadJson) downloadJson.addEventListener('click', downloadJsonSummary);

    const printPage = document.getElementById('print-page');
    if (printPage) printPage.addEventListener('click', () => window.print());
  }

  function updateRevisionFromField(event) {
    const card = event.target.closest('[data-revision-id]');
    const revision = revisions.find((item) => item.id === card.dataset.revisionId);
    if (!revision) return;
    revision[event.target.dataset.field] = event.target.value;
    saveRevisions();
  }

  function buildMarkdownSummary() {
    const lines = [
      '# Riepilogo revisione curricolo',
      '',
      `Fonte ufficiale: ${data.meta.officialSourceName}`,
      `Versione strumento: ${data.meta.version}`,
      '',
      '## Sezioni generali in sola lettura',
      ...data.lockedGeneralSections.map((section) => `- ${section.title}`),
      '',
      '## Proposte di revisione',
      ...revisions.flatMap((revision) => [
        `### ${revision.title}`,
        `- Disciplina: ${revision.discipline}`,
        `- Priorità: ${revision.priority}`,
        `- Stato: ${labelStatus(revision.status)}`,
        `- Fonte: ${revision.source}`,
        `- Nota: ${revision.note}`,
        ''
      ]),
      '## Nota',
      'Documento di lavoro. Ogni proposta richiede validazione umana e collegiale prima dell’adozione.'
    ];
    return lines.join('\n');
  }

  async function copyMarkdownSummary() {
    const feedback = document.getElementById('export-feedback');
    try {
      await navigator.clipboard.writeText(buildMarkdownSummary());
      feedback.textContent = 'Riepilogo copiato negli appunti.';
    } catch (error) {
      feedback.textContent = 'Copia automatica non disponibile. Usare la stampa o scaricare il JSON.';
    }
  }

  function downloadJsonSummary() {
    const payload = {
      exportedAt: new Date().toISOString(),
      meta: data.meta,
      lockedGeneralSections: data.lockedGeneralSections.map(({ id, title, source }) => ({ id, title, source })),
      revisions
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'curmanlight-riepilogo-revisione.json';
    anchor.click();
    URL.revokeObjectURL(url);
    const feedback = document.getElementById('export-feedback');
    if (feedback) feedback.textContent = 'File JSON generato localmente.';
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = sidebar.dataset.open === 'true';
    sidebar.dataset.open = String(!isOpen);
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  window.addEventListener('hashchange', () => {
    const nextView = getInitialView();
    if (nextView !== activeView) {
      activeView = nextView;
      render();
    }
  });

  render();
})();
