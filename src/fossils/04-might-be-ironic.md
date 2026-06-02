# F0SS1L 04 — Might Be Ironic

```
return ret_follows(pc + *pc + 1); // FIXME, might be ironic
```

*jqlang/jq — src/execute.c — MIT*

---

The function checks whether a return follows.

It does this by looking at the next instruction. If the next instruction is a return, it returns true. If the next instruction is a jump, it follows the jump recursively and checks again.

The FIXME has been here since someone noticed: if this function is wrong, it might be wrong about itself.

That's what *might be ironic* means. A broken return-detector, unable to detect its own broken return. The observer and the observed sharing a flaw. The tool examining the wound it has.

Most FIXME notes are small distress signals — *come back here, something needs attention.* This one knows the shape of the problem and finds it funny. It understands that there's a joke available, and doesn't confirm whether the joke is real.

Nobody has looked closely enough to know. The only way would be to trace a recursive function through its own recursion, which is exactly the kind of thing you keep meaning to do.

It remains. Patient. Possibly laughing.

---

```
source: jqlang/jq — src/execute.c
license: MIT
87% of the surrounding code is gone.
Someone is going to ask.
```
