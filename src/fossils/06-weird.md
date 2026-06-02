# F0SS1L 06 — Weird

```
/* POSIX doesn't provide errno values for strftime() failures; weird */
```

*jqlang/jq — src/builtin.c — MIT*

---

In 1988, a committee published a standard.

It specified hundreds of functions. For most of them, it specified what the error code should be when they fail — a vocabulary of failure, so developers could tell users something. You could handle errors. You could be specific.

For strftime(), they didn't.

They specified the return value: zero on failure. But the error code? Unspecified. If strftime fails — and it can fail, when the output buffer is too small, when the locale is wrong — it doesn't tell you why. It just stops. Returns zero. Leaves the error state wherever it was before.

Someone discovered this while trying to write good error handling. Opened the spec. Read it twice. Closed it.

Wrote: *weird.*

That's the whole verdict. One word for a committee decision made before the developer was born, that will outlast every line they write, that cannot be fixed or worked around or appealed. Only acknowledged.

The frustration too old to be angry. The shrug that is the only honest response.

*Weird.*

---

```
source: jqlang/jq — src/builtin.c
license: MIT
81% of the surrounding code is gone.
Someone is going to ask.
```
