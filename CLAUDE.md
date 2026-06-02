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

- **Accent:** #00FF41 (phosphor green — comment block, logo, "Someone is going to ask.")
- **Body text:** #4DFF7C (softer green — prose, nav, attribution)
- **Background:** #060E06 (very dark green — easier on eyes than pure black)
- **Typography:** Doto (body — swap pending next session); Press Start 2P (logo only)
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

- [x] Interest capture: click counter only (counterapi.dev), no email
- [x] Font for logo: Press Start 2P
- [ ] Swap body font from Share Tech Mono → Doto (next session)
- [ ] F0SS1L 01 needs a real repo comment for provenance (currently fictional composite)
- [ ] Deploy: vercel.json + vercel --prod + v1 tag

---

## Root Allowlist

Permitted files in project root:
- CLAUDE.md
- memory.md
- log.md
- index.html
- tasks.md
- .gitignore
- .impeccable.md
- src/
- assets/
