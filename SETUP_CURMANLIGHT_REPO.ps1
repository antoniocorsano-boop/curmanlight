$ErrorActionPreference = "Stop"

Write-Host "CurManLight - impostazione repo locale" -ForegroundColor Cyan

$Repo = Get-Location
Write-Host "Cartella corrente: $Repo"

$requiredDirs = @(
  "docs",
  "docs\03_execution",
  "report",
  "_handoff",
  "_handoff\sources",
  "_handoff\generated",
  "_handoff\zips",
  "_handoff\notes"
)

foreach ($dir in $requiredDirs) {
  if (!(Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir | Out-Null
    Write-Host "Creata cartella: $dir"
  }
}

if (!(Test-Path ".gitignore")) {
@"
# Sistema operativo / editor
.DS_Store
Thumbs.db
.vscode/*
!.vscode/settings.json

# Dipendenze / build, se presenti in futuro
node_modules/
dist/
build/
.cache/
.netlify/

# Archivi temporanei
*.tmp
*.bak
*.log

# Backup locali grandi
*_BACKUP_*.zip
*_SNAPSHOT_*.zip

# Handoff preservato
!_handoff/**
"@ | Set-Content -Encoding UTF8 ".gitignore"
  Write-Host "Creato .gitignore"
}

if (!(Test-Path ".git")) {
  git init
  Write-Host "Git inizializzato"
} else {
  Write-Host "Repository Git già presente"
}

$branch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($branch)) {
  try {
    git checkout -b main
    Write-Host "Creato branch main"
  } catch {
    Write-Host "Branch non modificato"
  }
}

$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$statusFile = "docs\03_execution\CML-000-REPO-BASELINE.md"
if (!(Test-Path $statusFile)) {
@"
# CML-000 — Baseline repository locale CurManLight

Data: $timestamp

## Scopo

Creare una base Git locale prima di modificare lo strumento pubblicato come `curmanlight`.

## Principi

- Preservare le logiche esistenti dello strumento.
- Non sostituire l'app con i prototipi CML-001/CML-002.
- Usare `_handoff/generated/` solo come archivio e confronto.
- Usare `_handoff/sources/Curricolo disciplinare WORD.docx` come fonte documentale originale.
- Integrare le nuove viste con approccio conservativo: CML-001R.

## Verdetto

CML_000_LOCAL_REPO_BASELINE_READY
"@ | Set-Content -Encoding UTF8 $statusFile
  Write-Host "Creato documento baseline: $statusFile"
}

Write-Host "\nStato Git prima del commit:" -ForegroundColor Yellow
git status --short --branch

$changes = git status --porcelain
if (![string]::IsNullOrWhiteSpace($changes)) {
  git add .
  git commit -m "chore: initialize curmanlight local baseline"
  Write-Host "Commit baseline creato" -ForegroundColor Green
} else {
  Write-Host "Nessuna modifica da committare" -ForegroundColor Green
}

Write-Host "\nStato Git finale:" -ForegroundColor Yellow
git status --short --branch
Write-Host "\nCompletato." -ForegroundColor Green
