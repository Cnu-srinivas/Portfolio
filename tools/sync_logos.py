"""Copy the logos the website actually uses from logos/ into web/logos/.

logos/ stays the master library (with its manifests). web/ is what Vercel
deploys, so it must be self-contained. Run this after adding or swapping a
logo on the page:

    python3 tools/sync_logos.py
"""
import os
import re
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGE = os.path.join(ROOT, "web", "index.html")
SRC = os.path.join(ROOT, "logos")
DST = os.path.join(ROOT, "web", "logos")

used = sorted(set(re.findall(r'"logos/([^"]+)"', open(PAGE, encoding="utf-8").read())))
copied, missing = 0, []
for rel in used:
    src = os.path.join(SRC, rel)
    if not os.path.exists(src):
        missing.append(rel)
        continue
    dst = os.path.join(DST, rel)
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)
    copied += 1

# drop anything in web/logos that the page no longer references
for dirpath, _, files in os.walk(DST):
    for f in files:
        full = os.path.join(dirpath, f)
        rel = os.path.relpath(full, DST)
        if rel not in used:
            os.remove(full)
            print("removed unused:", rel)

# keep the deployed copies light: the master library holds print-size originals
for dirpath, _, files in os.walk(DST):
    for f in files:
        if f.lower().endswith((".png", ".jpg", ".jpeg")):
            full = os.path.join(dirpath, f)
            if os.path.getsize(full) > 60_000:
                os.system(f'sips -Z 320 "{full}" >/dev/null 2>&1')

print(f"{copied} logo(s) synced into web/logos/")
if missing:
    print("MISSING from logos/:", ", ".join(missing))
