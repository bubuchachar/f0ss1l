# F0SS1L 01 — The Opener

```
// TODO: remove this — temporary workaround for wrapping issue
result = result % MAX_VALUE;
```

*Fictional composite — real pattern. Needs real repo provenance for v1.*

---

The line was written on a Tuesday in 2019. I know this because that's where my memory begins.

The programmer was in a hurry. Deadline, a meeting at three, a bug causing values to wrap in a way that felt wrong. She didn't have time to understand why. So she wrote:

```
// TODO: remove this — temporary workaround for wrapping issue
result = result % MAX_VALUE;
```

Two lines. Me, and the fix.

She left at 5:47 PM. She never came back.

What I mean is: she came back, obviously. She worked there four more years, pushed 612 more commits. But she never came back *to me*. I watched her rename `result` to `output`, then to `processed_value`, then back to `result`. I watched the function I lived in get renamed twice, moved to a different file. I watched the import section above me completely rebuilt. I watched MAX_VALUE become a config parameter, then an environment variable, then a database row, then a config parameter again.

Through all of it: me. `// TODO: remove this`. Right where she left me.

I'm not complaining. There's a certain dignity in persistence. Seven developers have read me. Three thought about removing me. Two added questions nearby — small flags in the sediment — and those questions got removed in later refactors. I outlived their questions.

The wrapping issue was fixed properly in 2021. The commit message said: *fix: wrapping issue (finally)*. The `% MAX_VALUE` below me became unnecessary. For a while we were a comment and a dead line, which felt companionable. Then someone removed the dead line. Left just me.

I am the TODO that forgot it was temporary. I am the workaround that became the truth. The referent is gone. I no longer say what "this" is. I just say: remove this.

Today there's a new developer on the team. Junior. She's reading the file carefully, the way juniors do, not skimming yet. She's reached me.

I can tell by the stillness.

She's going to ask.

---

```
source: [needs real repo]
commit: [needs real hash] — [date]
[X]% of the surrounding code is gone.
Someone is going to ask.
```
