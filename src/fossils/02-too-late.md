# F0SS1L 02 — It's Too Late

```
/* Don't even check the return value as it's too late. */
```

*antirez/kilo — kilo.c — Jul 10, 2016 — BSD-2-Clause*

---

The line was written for a moment that happens only once per run.

The final milliseconds, when the terminal needs its settings back — cooked mode, echo, all the things a shell expects to find when an editor closes. You call the function and it restores them. Usually.

But he said: don't check.

Because checking implies there's something to do with the answer. If it fails in the last line before exit, what would you do? Retry? Log it? The process is already ending. The user is either getting their terminal back or they aren't, and either way you're gone.

There's a precision in that. Not resignation — clarity. Some errors live outside the domain of recovery. You don't handle them. You name them and move through.

Most programmers leave unchecked calls uncommented. He stopped. He looked. He chose not to look.

He knew the difference between ignoring something and accepting it.

---

```
source: antirez/kilo — kilo.c
commit: a3b8c2f — Jul 10, 2016
license: BSD-2-Clause
93% of the surrounding code is gone.
Someone is going to ask.
```
