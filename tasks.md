# Tasks — Fossil

## Phase 1 — Core site
- [x] Project scaffold + all 6 fossil content files
- [ ] HTML/CSS shell: black, phosphor green, F0SS1L logo, CRT scanlines
- [ ] Fossil data embedded as JS, typewriter reveal on comment
- [ ] Prose + attribution fade in after comment types out
- [ ] Navigation: ← → buttons, "fossil 01 of 06", jump-to-number input

## Phase 2 — Polish + interest capture
- [ ] Transition between fossils (fade out → fade in)
- [ ] Interest counter button (counterapi.dev, localStorage to prevent spam)
- [ ] Mobile responsive
- [ ] Phosphor glow on comment text, subtle flicker

## CSS cleanup (post-v1, low priority)
- [ ] F2: z-index magic numbers (9999/9998) on CRT overlays — move to `--z-crt-scanlines` / `--z-crt-vignette` CSS vars in `:root`
- [ ] F3: inline rgba values in glow box-shadows duplicate `--green-bright` — if the green ever changes, update in two places

## Phase 3 — Ship
- [ ] vercel.json config
- [ ] Deploy → vercel --prod
- [ ] Update index.html artifact index with deploy URL
- [ ] Final commit tagged v1
