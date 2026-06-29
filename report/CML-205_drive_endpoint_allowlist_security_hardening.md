# CML-205 - DRIVE_ENDPOINT_ALLOWLIST_SECURITY_HARDENING

## 1. Baseline

| Item                   | Value                      |
| ---------------------- | -------------------------- |
| Repo                   | `curmanlight`              |
| Branch                 | `main`                     |
| Start commit           | `a21838a`                  |
| `origin/main` at start | `a21838a`                  |
| Working tree at start  | Clean                      |
| Slice type             | Runtime security hardening |
| Deploy                 | None                       |
| Push                   | None                       |
| Secrets                | None                       |

## 2. Root Cause / Context

The `uploadTeacherCmlToDrive()` function reads the endpoint from `localStorage.getItem('curmanlight.driveUploadEndpoint')` and passes it directly to `fetch()` without validation. This was the P2 risk documented in CML-198 and CML-199: "Optional Drive endpoint lacks documented trust boundary".

## 3. Allowlist Policy Implemented

### Allowed Hosts (explicit)

```javascript
const ALLOWED_ENDPOINT_HOSTS = ['drive.google.com', 'docs.google.com']
```

### Validation Rules

| Check          | Rule                                                                         | Rejection Code        |
| -------------- | ---------------------------------------------------------------------------- | --------------------- |
| Empty          | `endpoint` empty or whitespace-only                                          | `empty`               |
| Protocol       | Only `https://` allowed                                                      | `https` or `protocol` |
| Malformed      | URL parse error                                                              | `malformed`           |
| Credentials    | `username:password@` in URL                                                  | `credentials`         |
| Localhost      | `localhost`, `127.x.x.x`, `192.168.x.x`, `10.x.x.x`, `172.16-31.x.x`, raw IP | `localhost`           |
| Host allowlist | Only explicit allowed hosts (with subdomain suffix match)                    | `host`                |

### Subdomain Matching

A host is accepted if:

- It exactly matches an entry in `ALLOWED_ENDPOINT_HOSTS`
- It is a direct subdomain of an allowed host (e.g., `sub.school.edu` if `school.edu` is allowed)

## 4. Functions Modified

| Function                                | Change                                                                           |
| --------------------------------------- | -------------------------------------------------------------------------------- |
| `validateDriveEndpoint(endpoint)`       | New: returns `{valid, reason}`                                                   |
| `isAllowedHost(hostname, allowedHosts)` | New: exact + subdomain suffix check                                              |
| `getDriveUploadEndpoint()`              | Integrated validation: returns empty string if invalid                           |
| `uploadTeacherCmlToDrive()`             | Checks `validateDriveEndpoint()` before `fetch()`; shows reason-specific message |

## 5. User-Facing Messages

| Rejection Reason     | Italian Message                                                           |
| -------------------- | ------------------------------------------------------------------------- |
| `empty`              | "Endpoint Drive non configurato."                                         |
| `protocol` / `https` | "Protocollo non consentito. Usa solo HTTPS."                              |
| `credentials`        | "URL contiene credenziali. Rimuovi nome utente e password dall'endpoint." |
| `localhost`          | "Endpoint locale non consentito per sicurezza."                           |
| `host`               | "Host non consentito. Verifica l'endpoint Drive configurato."             |
| `malformed`          | "Endpoint non valido. Verifica l'URL configurato."                        |

All rejection messages include: "Il file .cml resterà disponibile per il caricamento manuale."

## 6. Fallback Behavior

| Scenario                          | Behavior                                       |
| --------------------------------- | ---------------------------------------------- |
| No endpoint configured            | Informational message + manual `.cml` download |
| Invalid endpoint (any reason)     | Specific warning + manual `.cml` download      |
| Valid endpoint but fetch fails    | Generic error + manual `.cml` download         |
| Valid endpoint and fetch succeeds | Success toast                                  |

Manual `.cml` download is always available as fallback.

## 7. Rejected Endpoint Cases (Smoke Results)

| Case                            | Result                   |
| ------------------------------- | ------------------------ |
| Empty / whitespace              | REJECTED (`empty`)       |
| `http://` endpoint              | REJECTED (`https`)       |
| `javascript:` URL               | REJECTED (`protocol`)    |
| `data:` URL                     | REJECTED (`protocol`)    |
| `file:` URL                     | REJECTED (`protocol`)    |
| `localhost`                     | REJECTED (`localhost`)   |
| `127.0.0.1`                     | REJECTED (`localhost`)   |
| `192.168.x.x`                   | REJECTED (`localhost`)   |
| `10.x.x.x`                      | REJECTED (`localhost`)   |
| `172.16-31.x.x`                 | REJECTED (`localhost`)   |
| Raw IP                          | REJECTED (`localhost`)   |
| `user:pass@host`                | REJECTED (`credentials`) |
| `https://evil.example.com/`     | REJECTED (`host`)        |
| `https://unsupported-site.org/` | REJECTED (`host`)        |
| `drive.google.com`              | ACCEPTED                 |
| `docs.google.com`               | ACCEPTED                 |
| Allowed host subdomain          | ACCEPTED                 |

**Smoke test: 21/21 PASS**

## 8. Existing Workflow Preserved

| Feature                  | Status    |
| ------------------------ | --------- |
| Teacher `.cml` export    | Unchanged |
| Local `.cml` download    | Unchanged |
| `.cml` payload structure | Unchanged |
| `buildTeacherCmlModel()` | Unchanged |

## 9. Limitations Explicitly Documented

1. **Client-side only**: allowlist is a client-side hardening, not server-side security. A MITM or compromised server can bypass it.
2. **Static allowlist**: `ALLOWED_ENDPOINT_HOSTS` is hardcoded. Adding school domains requires source change and redistribution.
3. **No TLS verification**: code checks `https://` scheme but does not validate TLS certificates beyond that.
4. **No credential storage**: endpoint remains in `localStorage` unencrypted. A valid endpoint is an XSS target if browser is compromised.
5. **Manual fallback recommended**: if allowlist rejects the endpoint, user must manually upload `.cml`. This is the recommended production path.

## 10. Validation Results

### JSON Validator

```
node tools/validate-cml-normalized-curriculum.mjs
overallValid: true
totalFiles: 14
invalidCount: 0
```

**Result: 14/14 PASS**

### Runtime Shape Test

```
node tools/test-runtime-mappa-dati-shape.mjs
overall: PASS
disciplines: 14 passed, 0 failed
```

**Result: 14/14 PASS**

### Drive Endpoint Smoke

**Result: 21/21 PASS**

## 11. Verification Checklist

| Check                                          | Result |
| ---------------------------------------------- | ------ |
| `git status` — clean after temp script removal | YES    |
| HEAD at `a21838a` (modified)                   | YES    |
| `origin/main` at `a21838a` (no push)           | YES    |
| JSON validator 14/14 PASS                      | YES    |
| Shape test 14/14 PASS                          | YES    |
| Drive endpoint smoke 21/21 PASS                | YES    |
| `git diff --check` — no whitespace errors      | YES    |
| Secret scan — no secrets                       | YES    |
| No deploy                                      | YES    |
| No push                                        | YES    |
| No secrets                                     | YES    |

## 12. Meta

| Property      | Value                                                       |
| ------------- | ----------------------------------------------------------- |
| Start commit  | `a21838a`                                                   |
| Files changed | 1 (`_published_snapshot/netlify-current/index.html`)        |
| Verdict       | `CML_205_DRIVE_ENDPOINT_ALLOWLIST_SECURITY_HARDENING_READY` |
