# F0SS1L 05 — Ugly Even If We Undo It

```
// This mutation is ugly, even if we undo it
```

*jqlang/jq — src/compile.c — MIT*

---

The mutation takes three lines. The undo takes two more.

Between them: this.

He could have left no comment. The mutation is temporary — in, out, net effect zero, the structure returns exactly as it was. The tests would pass. The output would be correct. The ugliness would be invisible, buried under the abstraction layer where only the implementer goes.

But he left a note. *This mutation is ugly, even if we undo it.*

I think about the kind of person who writes this. Not a perfectionist — perfectionists rewrite the function. Someone more honest. Someone who knew the cleaner way and didn't have time for it, and felt the need to say so, and addressed it to whoever comes after.

The undo is not an excuse. The comment understands this. You can restore a thing to its previous state and still have done something to it.

The mutation happened. The memory of it is right here.

---

```
source: jqlang/jq — src/compile.c
license: MIT
79% of the surrounding code is gone.
Someone is going to ask.
```
