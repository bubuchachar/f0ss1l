# Memory — Fossil

**Type:** personal tool
**Description:** A web experience that surfaces abandoned code comments and gives them a literary voice.
**Created:** 2026-05-31

---

## Concept

Fossil surfaces abandoned comments from real codebases. Each comment narrates what it witnessed as everything around it changed. The "loneliness score" (%) measures how much of the surrounding code has been replaced since the comment was written. Every fossil ends the same way: "Someone is going to ask."

Came out of a free-play session exploring the Ship of Theseus applied to code. The literary piece about `// TODO: remove this` came first, then the project emerged from it.

---

## Current State (2026-06-02)

- 7 fossils in src/index.html (all embedded as JS data)
- SVG logo (assets/f0ss1l.svg) — kerning-corrected by Melody, inline in HTML
- Font system: Doto for .prose and .intro-body; Share Tech Mono for all UI
- Interest capture: `[ N ] Be the first commit.` pre-click; count + email field post-click
- Email capture posts to Formspree (placeholder ID — must replace before deploy)
- LinkedIn launch card: assets/linkedin-card.html (1080×1080, screenshot at Cmd+0)

---

## The Fossils

### F0SS1L 01 (opener)
`// TODO: remove this — temporary workaround for wrapping issue`
Status: composite attribution ("composite — every codebase, everywhere / ∞%") — accepted for v1
Register: the workaround that became permanent

### F0SS1L 02
`// No session — sign in anonymously, no login screen needed`
bubuchachar/memori-v2 — app/src/App.tsx — commit 8c11a85 — Mar 27, 2026
Register: the decision not to ask

### F0SS1L 03
`/* Don't even check the return value as it's too late. */`
antirez/kilo — kilo.c — Jul 10, 2016 — BSD-2-Clause
Register: resigned clarity

### F0SS1L 04
`/* Raw mode: 1960 magic shit. */`
antirez/kilo — kilo.c — Jul 10, 2016 — BSD-2-Clause
Register: ancient stubbornness

### F0SS1L 05
`return ret_follows(pc + *pc + 1); // FIXME, might be ironic`
jqlang/jq — src/execute.c — MIT
Register: self-referential humor

### F0SS1L 06
`// This mutation is ugly, even if we undo it`
jqlang/jq — src/compile.c — MIT
Register: guilt preserved in amber

### F0SS1L 07
`/* POSIX doesn't provide errno values for strftime() failures; weird */`
jqlang/jq — src/builtin.c — MIT
Register: bureaucratic exhaustion

---

## Git Archaeology — Shallow Clone Limitation
Shallow clones (`--depth=N`) make `git blame` unreliable for date attribution.

- **kilo**: reliable dates (small repo)
- **jq**: all old comments show Jul 4, 2023 — shallow boundary, not true age
- For future fossil hunting: full clone for small repos only, or note date uncertainty in attribution.

---

## Pre-Deploy Checklist

- [ ] Create Formspree account (login: m.for.midnight@gmail.com, notifications: hello@itsmelody.io)
- [ ] Replace `REPLACE_WITH_YOUR_FORM_ID` in src/index.html with real form ID
- [ ] Set up vercel.json
- [ ] Run `vercel --prod` from project root
- [ ] Replace `[url]` in assets/linkedin-card.html with live URL
- [ ] Screenshot LinkedIn card at Cmd+0 in Arc (1080×1080)
- [ ] Tag release: `git tag v1`

---

## Launch Plan

- v1: static site, 7 fossils, interest capture (counter + email) → LinkedIn / Reddit
- v2: live git URL input — paste any public repo, get its oldest surviving comments
- Interest threshold for v2: TBD (watching email signups)

---

## Key Copy

- Loneliness score: "X% of the surrounding code is gone. The comment remains pointing at a room that no longer exists."
- Universal ending: "Someone is going to ask." — not a question, an inevitability
- Launch line: "Code is written by people. Some of it gets left behind. Someone's gonna ask."
