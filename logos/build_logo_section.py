"""Build the LOGO LIBRARY section of the portfolio from logos/*/manifest.json.

To add a logo:
  1. Put the image in the right folder (companies/, aws/, azure/ or tech/).
  2. Add an entry to that folder's manifest.json, e.g.
     {"name": "React", "category": "Frontend", "file": "tech/react.svg",
      "source_url": "https://...", "notes": ""}
     ("category" is only used for tech/ and picks the heading it goes under.)
  3. Run:  python3 logos/build_logo_section.py

Re-running replaces the existing section, so it is safe to run again after
adding or swapping logo files.
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOC = os.path.join(ROOT, "srinivas_full_portfolio.md")
COLS = 4
HEADING_RE = re.compile(r"^# (\d{2}) — LOGO LIBRARY$", re.M)

# Alternate variants kept in the folder but not shown in the document.
SKIP_FILES = {
    "tech/openai-white.svg",
    "companies/balihans.png",
    "tech/anthropic-ivory.svg",
    "aws/kinesis-data-streams.svg",
}
DISPLAY_NAMES = {
    "Amazon Web Services (AWS) logo": "Amazon Web Services",
    "Microsoft Azure logo": "Microsoft Azure",
    "Bluekyte.AI": "Bluekyte.AI (Counsello AI)",
    "Indian Institute of Technology Madras (IIT Madras)": "IIT Madras",
    "AIML Data Analytics Solutions Pvt. Ltd. / Open Data Fabric": "AIML Data Analytics / Open Data Fabric",
}
CATEGORY_TITLES = {
    "Languages": "Languages",
    "AI frameworks & tools": "AI Frameworks & Tools",
    "Model providers": "Model Providers",
    "ML / data": "ML / Data",
    "Backend": "Backend",
    "Frontend": "Frontend",
    "Databases": "Databases",
    "DevOps": "DevOps",
    "Integrations & platforms": "Integrations & Platforms",
}


def load(category):
    path = os.path.join(ROOT, "logos", category, "manifest.json")
    if not os.path.exists(path):
        return []
    with open(path, encoding="utf-8") as f:
        return [e for e in json.load(f) if e.get("file") not in SKIP_FILES]


def cell(entry):
    name = DISPLAY_NAMES.get(entry["name"], entry["name"])
    file = entry.get("file")
    if file and os.path.exists(os.path.join(ROOT, "logos", file)):
        return f'<img src="logos/{file}" alt="{name}" height="48"><br>{name}'
    return f"*(no logo available)*<br>{name}"


def grid(entries):
    if not entries:
        return "_No logos collected yet._\n"
    rows = [entries[i:i + COLS] for i in range(0, len(entries), COLS)]
    out = ["| " + " | ".join([" "] * COLS) + " |",
           "|" + "|".join([":---:"] * COLS) + "|"]
    for row in rows:
        cells = [cell(e) for e in row] + [" "] * (COLS - len(row))
        out.append("| " + " | ".join(cells) + " |")
    return "\n".join(out) + "\n"


def build(number):
    parts = [
        f"# {number:02d} — LOGO LIBRARY\n",
        "Logos for the companies, cloud services, and technologies in this portfolio, "
        "ready for the portfolio website. The image files live in the `logos/` folder "
        "next to this document; each subfolder has a `manifest.json` recording where "
        "every file came from. To add a logo, put the file in the right subfolder, "
        "add an entry to that folder's `manifest.json`, and run "
        "`python3 logos/build_logo_section.py` to rebuild this section.\n",
        "> Logos are trademarks of their respective owners and are shown only to "
        "identify the organizations and technologies I have worked with.\n",
        "## Companies & Institutions\n",
        grid(load("companies")),
        "## AWS Services\n",
        grid(load("aws")),
        "## Microsoft Azure Services\n",
        grid(load("azure")),
    ]
    tech = load("tech")
    categories = []
    for e in tech:
        if e.get("category") not in categories:
            categories.append(e.get("category"))
    for c in categories:
        parts.append(f"## {CATEGORY_TITLES.get(c, c)}\n")
        parts.append(grid([e for e in tech if e.get("category") == c]))
    return "\n".join(parts) + "\n---\n\n"


doc = open(DOC, encoding="utf-8").read()
existing = HEADING_RE.search(doc)
end = doc.index("\n# END")
if existing:
    number = int(existing.group(1))
    doc = doc[:existing.start()] + build(number) + doc[end + 1:]
else:
    last = max(int(n) for n in re.findall(r"^# (\d{2}) — ", doc, re.M))
    doc = doc[:end + 1] + build(last + 1) + doc[end + 1:]
open(DOC, "w", encoding="utf-8").write(doc)
print("logo section written")
