# Log — Fossil

## 2026-06-02 — Scroll fix + dot background experiment
- Locked scroll on html via JS during intro (CSS overflow-y caused scroll on fossil pages after dismiss — moved to inline style so clearing it restores default)
- Tried Mother/Alien-style dot grid background via radial-gradient; looked better in theory than practice, reverted
- Files touched: src/index.html

## 2026-06-02 — Typography: px → rem + prose readability
- All font sizes converted from px to rem (accessibility — respects browser font preferences)
- .prose and .intro-body: 15px → 1rem, line-height 1.5 → 1.65 (Doto needs more air on dark bg)
- .attribution bumped from 12px → 0.8125rem (was smallest readable element, one notch up)
- .payoff: 16px → 1rem (inherits from intro-body, color/glow still distinguishes it)
- Files touched: src/index.html

## 2026-06-02 — Impeccable slop audit
- Ran full CSS audit against Impeccable's 41 slop rules
- One real flag: `transition: all` on three buttons (.interest-btn, .email-submit, .init-btn)
- Fixed to explicit properties per element's actual hover changes
- Everything else clean: no gradient text, no glassmorphism, no generic palette, no border-radius, no shadow soup
- Files touched: src/index.html

## 2026-06-02 — Impeccable design context added
- Ran teach-impeccable: gathered design context from codebase + Melody input
- Emotional register confirmed: melancholy → wry recognition → reverence, in that order
- Aesthetic anchor: Blade Runner / Matrix warmth, not cold brutalism
- Five design principles written and persisted to `.impeccable.md`
- CLAUDE.md allowlist updated to include `.impeccable.md`
- Files touched: `.impeccable.md` (new), `CLAUDE.md`

## 2026-06-02 — Retro applied
- memory.md rewritten: 7 fossils with correct numbering, current state, pre-deploy checklist, launch copy
- Global CLAUDE.md: voice calibration rule (launch copy), permission-question-blocks-commit rule
- Projects CLAUDE.md: em dash categorization rule (UI copy vs literary prose)
- Files touched: memory.md, ~/CLAUDE.md, ~/Desktop/Projects/CLAUDE.md

## 2026-06-02 — Interest capture redesign + LinkedIn card
- Counter redesigned: pre-click shows `[ 0 ]  Be the first commit.` with live count from API
- Post-click: `[ N ]  developer(s) want to search their own repo.` + email field inline
- Email field placeholder replaces separate label: "drop your email. we'll tell you when it's live."
- Email capture posts to Formspree (REPLACE_WITH_YOUR_FORM_ID placeholder — fill before deploy)
- On submit: email row swaps to "You're on the list." without page navigation
- `[ N ]` bracket styling: dim green brackets, bright glowing number
- LinkedIn launch card created: assets/linkedin-card.html (1080×1080, screenshot at Cmd+0)
- Copy: "Code is written by people. Some of it gets left behind. / Someone's gonna ask."
- Files touched: src/index.html, assets/linkedin-card.html

## 2026-05-31 — Session start
- Committed dangling log.md entry (CLAUDE.md update) left unstaged from previous session
- Files touched: log.md

## 2026-05-31 — Typography, logo SVG, scroll fix, fossil 02
- Swapped Share Tech Mono → Doto for prose/story text only (.prose, .intro-body); UI stays Share Tech Mono
- Replaced text logo with kerning-corrected SVG (f0ss1l.svg from DBS/Grant Call); inline SVG in both header instances and payoff line
- SVG logo also used in nav counter and "jump to" label, replacing the word "fossil"
- Scroll-to-top on prev/next fixed — root cause was height:100% on html/body making body the scroll container; switched to min-height:100vh on body so window is the scroll container
- Fixed horizontal scrollbar — added overflow-x:hidden to html element
- word-break:break-all → word-break:normal on comment block (was splitting words mid-character on mobile)
- Attribution line-height tightened: 1.8 → 1.4
- Mobile nav counter + jump row gap reduced to 0
- `<code>` tag introduced as highlight style for inline code terms (MAX_VALUE, TODO, fix: wrapping issue (finally), "fix/wip/ugh/finally" quotes)
- Added fossil 02: `// No session — sign in anonymously, no login screen needed` (bubuchachar/memori-v2, commit 8c11a85, Mar 27 2026); shifted old 02–06 to 03–07; now 7 fossils total
- Files touched: src/index.html, assets/f0ss1l.svg, log.md

## 2026-05-31 — Project created
- Concept emerged from free-play session on Ship of Theseus applied to code
- Wrote flash fiction piece `// TODO: remove this` as the seed
- Sourced 5 real fossils from antirez/kilo (BSD) and jqlang/jq (MIT)
- Wrote all 6 literary pieces
- Defined visual direction: F0SS1L, phosphor green, CRT terminal aesthetic
- Defined launch strategy: curated static v1 → interest capture → live git v2
- Scaffolded project folder and git repo → CLAUDE.md, memory.md, log.md, index.html, .gitignore
- Moved all 6 fossil literary pieces into src/fossils/ (01–06)
- Global memory project_fossil.md migrated into project memory.md

## 2026-05-31 — CLAUDE.md updated
- Corrected brand colors: background #000000 → #060E06, split green into accent (#00FF41) and body (#4DFF7C)
- Typography: updated to reflect Press Start 2P (logo) + Doto pending (body)
- Resolved two open questions: counter = click only, logo font = Press Start 2P
- Added pending tasks: Doto swap, F0SS1L 01 provenance, deploy
- Files touched: CLAUDE.md

## 2026-05-31 — Font note
- Next session: swap Share Tech Mono → Doto for body text
- Also remove dead VT323 import from font link tag

## 2026-05-31 — Retro cleanup
- Removed dead `countNum` JS reference (element was deleted in earlier refactor, variable left behind)
- Added shallow clone date attribution note to memory.md — kilo dates reliable, jq/redis are not
- Files touched: src/index.html, memory.md

## 2026-05-31 — Session end
- Full build session: scaffold → 6 fossils → site → polish → intro
- Ready for Vercel deploy + Reddit/LinkedIn launch when design is approved
- Remaining: vercel.json, deploy, index.html artifact entry, v1 tag

## 2026-05-31 — Intro screen
- Added fixed intro screen overlaying the main fossil display
- Copy: Ship of Theseus framing → "involuntary poetry" → "F0SS1L finds them."
- Drawn from original free-play session writing — distilled to 4 paragraphs
- CTA: [ INITIALIZE ] button, also dismissable with Enter key
- Transition: 0.6s fade out, then removed from DOM
- Files touched: src/index.html

## 2026-05-31 — Mobile nav layout
- Below 520px: PREV and NEXT go side by side (flex: 1 each), fill the row
- "fossil 01 of 06" counter hidden from nav-row, shown instead between buttons and jump field
- Implemented as a second navCounterMobile element — both kept in sync via JS
- jump-row stacks vertically on mobile
- Files touched: src/index.html

## 2026-05-31 — Fossil number + scroll fix
- Added prominent fossil number (Press Start 2P, 28px, glowing) left of comment block
- Comment block and number share a single bordered panel — number has right border + faint bg
- fossilNumber updates on every fossil change alongside navCounter
- Scroll to top moved inside doRender() so it fires when new content renders, not before the fade
- Removed duplicate scrollTo calls from button handlers
- Root cause: scrollTo before the 300ms fade meant content re-rendered at same scroll position
- Files touched: src/index.html

## 2026-05-31 — Button clickable fix
- Removed `.clicked` class on load — was blocking all clicks for returning visitors
- Separated "already incremented" (localStorage check) from "visual state" (always fresh on load)
- Button always starts as question (dashed border, dim) — `.clicked` only added on actual click
- On click: shows count immediately with cached liveCount, then updates when API responds
- API increment only fires if localStorage key is absent — prevents double-counting
- Root cause: conflating "already clicked" with "disabled" — two separate concerns
- Files touched: src/index.html

## 2026-05-31 — Scroll, button, and pacing fixes
- Scroll to top on prev/next click — user was missing the comment typewriter animation
- Interest button always shows question on load, even for returning visitors who already clicked
- Count only appears after clicking — fetchCount updates display only if already clicked
- Root cause: liveCount starting at 0 + hasClicked=true was flashing "0 developers want this"
- Pause before prose: 100ms → 600ms — comment felt rushed, needed a beat to land
- Files touched: src/index.html

## 2026-05-31 — Line-by-line prose reveal
- Prose paragraphs now appear one by one at 90ms intervals instead of fading in as a block
- Each paragraph has its own opacity transition (0.2s), fast enough to feel snappy
- Attribution fades in 150ms after the last paragraph lands
- Fixed: on fossil change, per-paragraph visibility is cleared (not just the parent class)
- Files touched: src/index.html

## 2026-05-31 — Typography + interest button flow
- Prose line-height: 1.9 → 1.5 (tighter leading, lines sit closer together)
- Prose paragraph gap: 16px → 28px (clear visual separation between paragraphs)
- Root cause: line spacing and para spacing were nearly equal, paragraphs didn't read as separate units
- Interest button: pre-click shows "Would you like to search your own repo?"
- Post-click shows count + "developers want to search their own repo."
- At 100+ clicks: appends "We'll get right to it." — closes the loop
- Root cause: button felt hanging with just a count and no resolution
- Files touched: src/index.html

## 2026-05-31 — Visual tone-down
- Background: #000000 → #060E06 (very dark green, reduces eye strain per image ref)
- Prose font: VT323 → Share Tech Mono (VT323 renders chunky/heavy, reads as bold)
- Prose font size: 22px → 15px, line-height 1.7 → 1.9
- Primary text: #00FF41 → #4DFF7C (softer, less aggressive)
- Comment block + logo + "Someone is going to ask." kept at #00FF41 (intentional contrast)
- Root cause: VT323 weight + pure #00FF41 on black was too harsh for sustained reading
- Files touched: src/index.html

## 2026-05-31 — Phase 1 site built
- Built src/index.html — full static site, all 6 fossils embedded as JS data
- Typewriter effect on comment reveal, prose + attribution fade in after
- Navigation: ← → buttons, "fossil 01 of 06" counter, jump-to-number input
- Interest counter via counterapi.dev, localStorage prevents double-click
- CRT scanlines + vignette via CSS pseudo-elements
- Press Start 2P for logo, VT323 for body, Share Tech Mono for code/meta
- F0SS1L 01 attribution changed to "composite — every codebase, everywhere / ∞%"
- Files touched: src/index.html, tasks.md

## 2026-05-31 — Content committed
- All 6 literary pieces written and saved → src/fossils/01–06
- Each file: the raw comment, the literary piece, attribution block with loneliness score
- F0SS1L 01 flagged as needing real repo provenance (currently fictional composite)
- Files touched: src/fossils/*.md, memory.md, log.md
