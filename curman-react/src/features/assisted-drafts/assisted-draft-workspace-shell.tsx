import type { ReactNode } from "react";
import type { AssistedCurriculumDraft } from "./contracts";
import type { AssistedDraftApplicationService } from "./application-service.mjs";
import { useAssistedDraftWorkspace } from "./use-assisted-draft-workspace";

export interface AssistedDraftWorkspaceShellProps {
  service: AssistedDraftApplicationService;
  packageId: string | null;
  draft: AssistedCurriculumDraft | null;
  title?: string;
  children?: ReactNode;
}

const busyStatuses = new Set(["loading", "saving", "checkpointing", "restoring"]);

export function AssistedDraftWorkspaceShell({
  service,
  packageId,
  draft,
  title = "Bozza curricolare assistita",
  children,
}: AssistedDraftWorkspaceShellProps) {
  const workspace = useAssistedDraftWorkspace(service, packageId);
  const busy = busyStatuses.has(workspace.status);
  const recoveryDecisionRequired = Boolean(workspace.inspection?.recoveryDecisionRequired);
  const actionsDisabled = busy || !draft || !packageId || recoveryDecisionRequired;

  return (
    <section aria-labelledby="assisted-draft-workspace-title" className="space-y-4">
      <header className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Percorso assistito locale</p>
            <h1 id="assisted-draft-workspace-title" className="mt-1 text-xl font-semibold text-slate-950">
              {title}
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Le proposte restano locali e richiedono sempre revisione e validazione umana.
            </p>
          </div>
          <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700" aria-live="polite">
            {workspace.status === "loading" && "Caricamento…"}
            {workspace.status === "saving" && "Salvataggio…"}
            {workspace.status === "checkpointing" && "Creazione copia…"}
            {workspace.status === "restoring" && "Ripristino…"}
            {workspace.status === "conflict" && "Conflitto da risolvere"}
            {workspace.status === "error" && "Operazione non completata"}
            {(workspace.status === "ready" || workspace.status === "idle") &&
              `Versione locale ${workspace.inspection?.currentVersion ?? 0}`}
          </p>
        </div>
      </header>

      {recoveryDecisionRequired && (
        <aside role="alertdialog" aria-labelledby="assisted-recovery-title" aria-describedby="assisted-recovery-description" className="rounded-xl border border-amber-300 bg-amber-50 p-4">
          <h2 id="assisted-recovery-title" className="font-semibold text-amber-950">È disponibile una copia di recupero</h2>
          <p id="assisted-recovery-description" className="mt-1 text-sm text-amber-900">
            Scegli esplicitamente se ripristinarla oppure conservarla fuori dal lavoro corrente. Nessuna scelta viene applicata automaticamente.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" disabled={busy} onClick={() => void workspace.restoreRecovery()} className="rounded-lg bg-amber-900 px-3 py-2 text-sm font-medium text-white disabled:opacity-50">
              Ripristina copia di recupero
            </button>
            <button type="button" disabled={busy} onClick={() => void workspace.discardRecovery()} className="rounded-lg border border-amber-400 bg-white px-3 py-2 text-sm font-medium text-amber-950 disabled:opacity-50">
              Scarta copia di recupero
            </button>
          </div>
        </aside>
      )}

      {workspace.status === "conflict" && (
        <div role="alert" className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-950">
          <strong>La bozza è cambiata in un’altra scheda.</strong>
          <p className="mt-1">Ricarica la versione più recente prima di salvare o creare una copia di recupero.</p>
          <button type="button" onClick={() => void workspace.refresh()} className="mt-3 rounded-lg border border-rose-400 bg-white px-3 py-2 font-medium">
            Ricarica versione recente
          </button>
        </div>
      )}

      {workspace.status === "error" && (
        <div role="alert" className="rounded-xl border border-rose-300 bg-rose-50 p-4 text-sm text-rose-950">
          Operazione non completata. La versione stabile precedente non è stata sostituita.
        </div>
      )}

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">{children}</div>

      <footer className="flex flex-wrap justify-end gap-2 rounded-xl border border-slate-200 bg-white p-4">
        <button type="button" disabled={actionsDisabled} onClick={() => draft && void workspace.checkpoint(draft)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 disabled:opacity-50">
          Crea copia di recupero
        </button>
        <button type="button" disabled={actionsDisabled} onClick={() => draft && void workspace.save(draft)} className="rounded-lg bg-slate-950 px-3 py-2 text-sm font-medium text-white disabled:opacity-50">
          Salva bozza locale
        </button>
      </footer>
    </section>
  );
}
