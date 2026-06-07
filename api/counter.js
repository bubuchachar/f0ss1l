export default async function handler(req, res) {
  const action = req.query.action === 'up' ? '/up/' : '/';
  const url = `https://api.counterapi.dev/v1/fossil-itsmelody/want-own-repo${action}`;
  try {
    const r = await fetch(url, { redirect: 'follow' });
    const d = await r.json();
    res.setHeader('Cache-Control', 'no-store');
    res.json({ count: d.count ?? 0 });
  } catch {
    res.status(502).json({ count: 0 });
  }
}
