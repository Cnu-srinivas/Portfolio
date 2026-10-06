#!/usr/bin/env python3
"""Render web/images/og.png, the 1200x630 preview card LinkedIn, Slack and WhatsApp show
when the site is shared. Uses the Earthy Minimal palette and the system Arial faces, so it
runs anywhere Pillow is installed:  python3 tools/make_og_image.py
Edit the TEXT block to change the words; re-run to rebuild."""
from PIL import Image, ImageDraw, ImageFont
import os, sys

W, H = 1200, 630
PAPER, INK, SAGE, SAND, TERRA = "#F8F6EE", "#2E3A2F", "#6B7F5B", "#D9C9B2", "#C96F4F"
FONT_DIR = "/System/Library/Fonts/Supplemental"
def font(name, size):
    for cand in (os.path.join(FONT_DIR, name), name):
        if os.path.exists(cand):
            return ImageFont.truetype(cand, size)
    return ImageFont.load_default()

TEXT = dict(
    kicker="SENIOR AI ENGINEER  ·  IIT MADRAS  ·  HYDERABAD, INDIA",
    line1="AI systems that work",
    line2="after the demo.",
    sub="Agents, RAG, voice AI and document automation, designed, built and run\nend to end, with the guardrails, evals and cost tracking that keep them working.",
    name="Srinivas Dharavath",
    proofs=[("~70%", "less manual ticket work,\nB2B support team"),
            ("600", "employees on an HR\nplatform I built"),
            ("60", "recruiters daily in an ATS\nwith AI screening")],
)

img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)
# faint drafting grid
for x in range(0, W, 28):
    d.line([(x, 0), (x, H)], fill="#EFEBE0", width=1)
for y in range(0, H, 28):
    d.line([(0, y), (W, y)], fill="#EFEBE0", width=1)
# palette bar along the top edge
for i, c in enumerate([INK, SAGE, SAND, TERRA, PAPER]):
    d.rectangle([i * W / 5, 0, (i + 1) * W / 5, 10], fill=c)

M = 72
d.text((M, 62), TEXT["kicker"], font=font("Arial Bold.ttf", 17), fill=SAGE)
f_big = font("Arial Black.ttf", 84)
d.text((M - 4, 100), TEXT["line1"], font=f_big, fill=INK)
d.text((M - 4, 196), TEXT["line2"], font=f_big, fill=TERRA)
d.multiline_text((M, 318), TEXT["sub"], font=font("Arial.ttf", 25), fill="#4F5B50", spacing=8)

# proof row with dimension lines
y0 = 430
d.line([(M, y0 - 18), (W - M, y0 - 18)], fill=SAND, width=1)
col = (W - 2 * M) / 3
for i, (n, l) in enumerate(TEXT["proofs"]):
    x = M + i * col
    d.line([(x, y0 - 2), (x + 150, y0 - 2)], fill=TERRA, width=1)
    d.line([(x, y0 - 8), (x, y0 + 4)], fill=TERRA, width=1)
    d.line([(x + 150, y0 - 8), (x + 150, y0 + 4)], fill=TERRA, width=1)
    d.text((x - 2, y0 + 10), n, font=font("Arial Black.ttf", 44), fill=INK)
    d.multiline_text((x, y0 + 66), l, font=font("Arial.ttf", 18), fill="#656E61", spacing=4)

# name, bottom right, with a small hull mark
d.text((W - M, H - 48), TEXT["name"], font=font("Arial Bold.ttf", 22), fill=INK, anchor="rs")
d.text((W - M, H - 22), "www.srinivasdharavath.com", font=font("Arial.ttf", 16), fill="#656E61", anchor="rs")

out = os.path.join(os.path.dirname(__file__), "..", "web", "images", "og.png")
img.save(out, optimize=True)
print("wrote", os.path.normpath(out), os.path.getsize(out) // 1024, "KB")
