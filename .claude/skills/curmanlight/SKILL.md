````markdown
# curmanlight Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill outlines the core development conventions and workflows for the `curmanlight` TypeScript codebase. It covers file and code organization, import/export styles, commit message patterns, and testing practices. Use this guide to ensure consistency and efficiency when contributing to or maintaining the repository.

## Coding Conventions

### File Naming

- Use **kebab-case** for all file names.
  - Example:
    ```
    user-profile.ts
    data-fetcher.test.ts
    ```

### Import Style

- Use **relative imports** for referencing modules within the project.
  - Example:
    ```typescript
    import { fetchData } from './data-fetcher'
    ```

### Export Style

- Use **named exports** for all modules.
  - Example:
    ```typescript
    // In user-profile.ts
    export function getUserProfile(id: string) { ... }
    ```

### Commit Message Patterns

- Commit types are mixed, with common prefixes like `docs` and `tools`.
- Keep commit messages concise (average ~52 characters).
  - Example:
    ```
    docs: update README with usage instructions
    tools: add script for data migration
    ```

## Workflows

### Documentation Updates

**Trigger:** When updating or improving documentation files.
**Command:** `/docs-update`

1. Edit the relevant documentation files (e.g., README.md).
2. Use the `docs:` prefix in your commit message.
3. Push your changes and open a pull request if required.

### Tooling Enhancements

**Trigger:** When adding or modifying scripts and tools.
**Command:** `/tools-update`

1. Create or update scripts in the appropriate directory.
2. Use the `tools:` prefix in your commit message.
3. Test the tool locally before committing.
4. Push your changes and open a pull request if required.

## Testing Patterns

- Test files use the `*.test.*` naming pattern.
  - Example:
    ```
    data-fetcher.test.ts
    ```
- The specific testing framework is not detected; check existing test files for framework clues.
- Place tests alongside the modules they test, using the same naming convention.

  Example test file structure:
````

src/
data-fetcher.ts
data-fetcher.test.ts

```

## Commands
| Command        | Purpose                                      |
|----------------|----------------------------------------------|
| /docs-update   | Update or improve documentation files         |
| /tools-update  | Add or modify scripts and developer tools     |
```
