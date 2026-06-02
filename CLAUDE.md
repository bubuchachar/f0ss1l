# Fossil — Project Rules

<!-- Keep this file minimal. Brand, Figma, and project-specific decisions only. -->

---

## Project

- **Name:** Fossil
- **Type:** personal tool
- **Status:** active
- **Description:** A web experience that surfaces abandoned code comments from real codebases and gives them a literary voice.

---

## Brand

- **Primary color:** #00FF41 (phosphor green)
- **Background:** #000000
- **Typography:** monospace — body copy; chunky pixel display font for logo
- **Logo:** F0SS1L (0 replaces o, 1 replaces i — thematically exact: binary is the bedrock)
- **Brand notes:** Matrix / old-school terminal aesthetic. CRT scanline texture. No gradients. No rounded corners. Decorative borders with `+++` and `----`.

---

## Figma

- **Main file:**
- **File key:**

---

## Design Decisions

- 2026-05-31 Logo uses 0/1 substitution — not arbitrary, 0 and 1 are binary, the oldest layer of any codebase
- 2026-05-31 "Someone is going to ask." is always the same ending — universal, inevitable
- 2026-05-31 Loneliness score (%) = how much surrounding code has changed since comment was written
- 2026-05-31 v1 is fully static — 6 curated fossils, no backend, interest capture button only
- 2026-05-31 Each fossil has: the comment, literary piece (~150 words), attribution block, loneliness score

---

## Open Questions

- [ ] Interest capture: email form or counter?
- [ ] Font for logo: find a chunky pixel font that reads well at display size
- [ ] F0SS1L 01 needs a real repo comment for provenance (currently fictional composite)

---

## Root Allowlist

Permitted files in project root:
- CLAUDE.md
- memory.md
- log.md
- index.html
- tasks.md
- .gitignore
- src/
- assets/
