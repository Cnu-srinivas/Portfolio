#!/usr/bin/env python3
"""Set the site's domain and/or "updated" date everywhere they appear.

  python3 tools/site_meta.py --domain srinivas.example.com
  python3 tools/site_meta.py --updated 2026-11-01
  python3 tools/site_meta.py --domain srinivas.example.com --updated 2026-11-01

The domain replaces YOUR-DOMAIN (or the previous domain) in index.html, robots.txt,
sitemap.xml and llms.txt. The date updates the footer, the structured data and the sitemap.
"""
import argparse, datetime, pathlib, re, sys
ROOT = pathlib.Path(__file__).resolve().parent.parent / "web"
FILES = ["index.html", "robots.txt", "sitemap.xml", "llms.txt"]
ap = argparse.ArgumentParser(); ap.add_argument("--domain"); ap.add_argument("--updated"); a = ap.parse_args()
if not a.domain and not a.updated: ap.error("give --domain and/or --updated")
if a.domain:
    dom = re.sub(r"^https?://", "", a.domain).strip("/")
    if not re.fullmatch(r"[a-z0-9.-]+\.[a-z]{2,}", dom): sys.exit(f"not a bare domain: {a.domain}")
    for f in FILES:
        path = ROOT / f; t = path.read_text()
        cur = re.search(r"https://([a-z0-9.-]+|YOUR-DOMAIN)/", t)
        if not cur: continue
        t2 = t.replace(f"https://{cur.group(1)}", f"https://{dom}")
        path.write_text(t2); print(f"{f}: {cur.group(1)} -> {dom} ({t.count(cur.group(1))} places)")
if a.updated:
    d = datetime.date.fromisoformat(a.updated); human = f"{d.day} {d.strftime('%B %Y')}"
    idx = ROOT / "index.html"; t = idx.read_text()
    t, n1 = re.subn(r'"dateModified": "\d{4}-\d{2}-\d{2}"', f'"dateModified": "{a.updated}"', t)
    t, n2 = re.subn(r'<time datetime="\d{4}-\d{2}-\d{2}">[^<]+</time>', f'<time datetime="{a.updated}">{human}</time>', t)
    idx.write_text(t)
    sm = ROOT / "sitemap.xml"; st, n3 = re.subn(r"<lastmod>[^<]+</lastmod>", f"<lastmod>{a.updated}</lastmod>", sm.read_text()); sm.write_text(st)
    print(f"updated date set to {a.updated} in {n1 + n2 + n3} places")
