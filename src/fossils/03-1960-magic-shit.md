# F0SS1L 03 — 1960 Magic Shit

```
/* Raw mode: 1960 magic shit. */
```

*antirez/kilo — kilo.c — Jul 10, 2016 — BSD-2-Clause*

---

In 1960, someone at Bell Labs decided how a terminal should talk to a computer. They made choices. Some were careful. Some were expedient. All of them survived.

The protocol is still here. Under every modern terminal, every shell, every text editor that has ever existed: the same handshake. Flip the bits. Tell the device: stop buffering, stop echoing, stop processing special characters. I'll handle it now.

He had to implement this. Sixty years later, in a language that didn't exist when the protocol was designed, for hardware that would have seemed like fiction to the people who wrote the spec. He did it. Then he wrote four words.

*1960 magic shit.*

Not frustration — accuracy. It is magic. There is no clean explanation for why these flags do what they do. You learn them the way you learn spells: by rote, by asking someone older, because no one alive remembers the reasoning.

And it is shit, the way anything load-bearing and never revisited becomes shit: through accumulation.

He said both things. He moved on.

---

```
source: antirez/kilo — kilo.c
commit: a3b8c2f — Jul 10, 2016
license: BSD-2-Clause
93% of the surrounding code is gone.
Someone is going to ask.
```
