"""Assembles the rendered keyframes in out/storyboard/ into one captioned storyboard sheet."""
import sys

from PIL import Image, ImageDraw, ImageFont

FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

# (frame, shot label, time, caption)
PANELS = [
    (50, "01", "0:00–0:02.5", "Senja, kamera turun. Dua rival di atap berseberangan."),
    (105, "02", "0:02.5–0:04", "Petarung merah, rambut & syal tertiup angin, rim light hangat."),
    (150, "03", "0:04–0:05.5", "Pangeran biru, rim light dingin, push-in."),
    (175, "04a", "0:05.5–0:06.2", "Close-up mata merah."),
    (200, "04b", "0:06.2–0:07", "Cut ke close-up mata biru."),
    (245, "05", "0:07–0:08.5", "Kuda-kuda: kota menggelap, aura air & api menyala."),
    (290, "06", "0:08.5–0:10", "Melesat ke tengah: afterimage & garis kecepatan."),
    (301, "07a", "0:10–0:10.1", "Benturan: 3 impact frame hitam-putih."),
    (310, "07b", "0:10.1–0:11", "Kembali berwarna: percikan, layar bergetar."),
    (345, "08a", "0:11–0:15", "Adu tebasan, 4 ketukan. Tebasan ombak biru…"),
    (375, "08b", "", "…dibalas tebasan api. Kamera berayun tiap ketukan."),
    (490, "09", "0:15–0:17", "Terpental mundur, debu di kaki."),
    (525, "10a", "0:17–0:18", "Nama jurus pangeran (teks vertikal)."),
    (555, "10b", "0:18–0:19", "Nama jurus petarung merah."),
    (630, "11a", "0:19–0:23", "Jurus pamungkas: ombak raksasa vs badai api."),
    (670, "11b", "", "Keduanya bertemu di tengah, kamera bergetar."),
    (700, "12", "0:23–0:24", "White-out + gelombang kejut."),
    (780, "13", "0:24–0:27", "Uap menipis: keduanya masih berdiri."),
    (870, "14", "0:27–0:30", "Kartu akhir: IMBANG — bersambung."),
]

TW, TH, COLS, PAD, CAP = 600, 338, 4, 16, 64


def main(out):
    rows = (len(PANELS) + COLS - 1) // COLS
    sheet = Image.new("RGB", (COLS * TW + (COLS + 1) * PAD, 96 + rows * (TH + CAP + PAD)), (16, 14, 20))
    d = ImageDraw.Draw(sheet)
    d.text((PAD, 24), "STORYBOARD v2 — Rival di Atap Kota (30 dtk, 16:9, tanpa audio)", fill="white", font=ImageFont.truetype(BOLD, 36))
    for i, (frame, label, tc, cap) in enumerate(PANELS):
        x = PAD + (i % COLS) * (TW + PAD)
        y = 96 + (i // COLS) * (TH + CAP + PAD)
        img = Image.open(f"out/storyboard/frame-{frame:03d}.png").convert("RGB").resize((TW, TH), Image.LANCZOS)
        sheet.paste(img, (x, y))
        d.rectangle([x, y, x + 58, y + 30], fill=(240, 200, 110))
        d.text((x + 7, y + 4), label, fill="black", font=ImageFont.truetype(BOLD, 19))
        d.text((x, y + TH + 6), f"{tc}  f{frame}" if tc else f"f{frame}", fill=(240, 200, 110), font=ImageFont.truetype(BOLD, 16))
        d.text((x, y + TH + 30), cap, fill=(220, 220, 228), font=ImageFont.truetype(FONT, 16))
    sheet.save(out, quality=90)
    print(out, sheet.size)


if __name__ == "__main__":
    main(sys.argv[1])
