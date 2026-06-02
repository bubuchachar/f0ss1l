# Memory — Fossil

**Type:** personal tool
**Description:** A web experience that surfaces abandoned code comments and gives them a literary voice.
**Created:** 2026-05-31

---

## Concept

Fossil surfaces abandoned comments from real codebases. Each comment narrates what it witnessed as everything around it changed. The "loneliness score" (%) measures how much of the surrounding code has been replaced since the comment was written. Every fossil ends the same way: "Someone is going to ask."

Came out of a free-play session exploring the Ship of Theseus applied to code — what makes a codebase "the same" over time. The literary piece about `// TODO: remove this` came first, then the project emerged from it.

---

## The Fossils

### F0SS1L 01 (opener)
`// TODO: remove this — temporary workaround for wrapping issue`
Status: literary piece written, needs real repo provenance
Register: the workaround that became permanent

### F0SS1L 02
`/* Don't even check the return value as it's too late. */`
antirez/kilo — kilo.c — Jul 10, 2016 — BSD-2-Clause
Register: resigned clarity

### F0SS1L 03
`/* Raw mode: 1960 magic shit. */`
antirez/kilo — kilo.c — Jul 10, 2016 — BSD-2-Clause
Register: ancient stubbornness

### F0SS1L 04
`return ret_follows(pc + *pc + 1); // FIXME, might be ironic`
jqlang/jq — src/execute.c — MIT
Register: self-referential humor

### F0SS1L 05
`// This mutation is ugly, even if we undo it`
jqlang/jq — src/compile.c — MIT
Register: guilt preserved in amber

### F0SS1L 06
`/* POSIX doesn't provide errno values for strftime() failures; weird */`
jqlang/jq — src/builtin.c — MIT
Register: bureaucratic exhaustion

---

## Next Session
- Replace Share Tech Mono with **Doto** (Google Fonts) for body text — next session

## Git Archaeology — Shallow Clone Limitation
Shallow clones (`--depth=N`) make `git blame` unreliable for date attribution. All pre-depth lines get attributed to the oldest available commit boundary — not their true age.

- **kilo**: reliable dates (small repo, near-full history in shallow clone)
- **jq**: all old comments show Jul 4, 2023 — shallow boundary, not true age (jq dates to ~2012)
- **redis**: same problem — large repo, dates unreliable without full clone
- For future fossil hunting: clone without depth limit for small repos only, or accept date uncertainty and note it in attribution.

## Launch Plan

- v1: static site, 6 fossils, interest capture button → Reddit / LinkedIn
- v2: live git URL input (paste any public repo, get its oldest comment)
- Interest threshold for v2: TBD

---

## Key Copy

- Loneliness score explanation: "X% of the surrounding code is gone. The comment remains pointing at a room that no longer exists."
- Universal ending: "Someone is going to ask." — not a question, an inevitability
- "Someone is going to ask." is always the same because it's always true
