import { useCallback, useEffect, useRef, useState } from "react";
import type { AssistedCurriculumDraft } from "./contracts";
import type {
  AssistedDraftApplicationService,
  AssistedDraftInspection,
} from "./application-service.mjs";

export type AssistedDraftWorkspaceStatus =
  | "idle"
  | "loading"
  | "ready"
  | "saving"
  | "checkpointing"
  | "restoring"
  | "conflict"
  | "error";

export interface AssistedDraftWorkspaceState {
  status: AssistedDraftWorkspaceStatus;
  inspection: AssistedDraftInspection | null;
  error: unknown;
}

export function useAssistedDraftWorkspace(
  service: AssistedDraftApplicationService,
  packageId: string | null,
) {
  const requestSequence = useRef(0);
  const [state, setState] = useState<AssistedDraftWorkspaceState>({
    status: "idle",
    inspection: null,
    error: null,
  });

  const refresh = useCallback(async () => {
    const requestId = ++requestSequence.current;
    if (!packageId) {
      setState({ status: "idle", inspection: null, error: null });
      return null;
    }
    setState((current) => ({ ...current, status: "loading", error: null }));
    try {
      const inspection = await service.inspect(packageId);
      if (requestId === requestSequence.current) {
        setState({ status: "ready", inspection, error: null });
      }
      return inspection;
    } catch (error) {
      if (requestId === requestSequence.current) {
        setState((current) => ({ ...current, status: "error", error }));
      }
      throw error;
    }
  }, [packageId, service]);

  useEffect(() => {
    void refresh().catch(() => undefined);
  }, [refresh]);

  const save = useCallback(
    async (draft: AssistedCurriculumDraft) => {
      const expectedVersion = state.inspection?.currentVersion ?? 0;
      setState((current) => ({ ...current, status: "saving", error: null }));
      try {
        const result = await service.save(draft, expectedVersion);
        if (result.status === "conflict") {
          setState((current) => ({ ...current, status: "conflict", error: result }));
          return result;
        }
        await refresh();
        return result;
      } catch (error) {
        setState((current) => ({ ...current, status: "error", error }));
        throw error;
      }
    },
    [refresh, service, state.inspection?.currentVersion],
  );

  const checkpoint = useCallback(
    async (draft: AssistedCurriculumDraft) => {
      const expectedVersion = state.inspection?.currentVersion ?? 0;
      setState((current) => ({ ...current, status: "checkpointing", error: null }));
      try {
        const result = await service.checkpoint(draft, expectedVersion);
        if (result.status === "conflict") {
          setState((current) => ({ ...current, status: "conflict", error: result }));
          return result;
        }
        await refresh();
        return result;
      } catch (error) {
        setState((current) => ({ ...current, status: "error", error }));
        throw error;
      }
    },
    [refresh, service, state.inspection?.currentVersion],
  );

  const restoreRecovery = useCallback(async () => {
    if (!packageId) return null;
    const expectedVersion = state.inspection?.currentVersion ?? 0;
    setState((current) => ({ ...current, status: "restoring", error: null }));
    try {
      const result = await service.restore(packageId, expectedVersion);
      if (result.status === "conflict") {
        setState((current) => ({ ...current, status: "conflict", error: result }));
        return result;
      }
      await refresh();
      return result;
    } catch (error) {
      setState((current) => ({ ...current, status: "error", error }));
      throw error;
    }
  }, [packageId, refresh, service, state.inspection?.currentVersion]);

  const discardRecovery = useCallback(async () => {
    if (!packageId) return null;
    try {
      const result = await service.discardRecovery(packageId);
      await refresh();
      return result;
    } catch (error) {
      setState((current) => ({ ...current, status: "error", error }));
      throw error;
    }
  }, [packageId, refresh, service]);

  return {
    ...state,
    refresh,
    save,
    checkpoint,
    restoreRecovery,
    discardRecovery,
  };
}
