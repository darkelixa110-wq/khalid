"""Membuat lembar storyboard (PNG) dari potongan gambar sumber."""
import math
from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter

SRC = {"merah": Image.open("source/petarung-merah.png"), "biru": Image.open("source/pangeran-biru.png")}
BOX = {
    "merah-utama": ("merah", (0, 0, 660, 1000)),
    "merah-wajah": ("merah", (700, 0, 1024, 345)),
    "merah-punggung": ("merah", (778, 385, 1018, 895)),
    "merah-mata": ("merah", (805, 1000, 1024, 1300)),
    "merah-tangan": ("merah", (0, 840, 620, 1000)),  # di atas logo
    "biru-utama": ("biru", (0, 0, 680, 1000)),
    "biru-wajah": ("biru", (700, 0, 1024, 320)),
    "biru-punggung": ("biru", (748, 365, 1012, 790)),
    "biru-mata": ("biru", (790, 830, 1024, 1110)),
    "biru-tangan": ("biru", (0, 980, 720, 1480)),
}
RED, BLUE, GOLD = (220, 50, 40), (40, 110, 230), (240, 200, 110)
TW, TH = 480, 270
F = lambda s, b=False: ImageFont.truetype(
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if b else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", s)


def crop(key):
    who, box = BOX[key]
    return SRC[who].crop(box)


def cover(img, w, h, focus=(0.5, 0.5), flip=False):
    if flip:
        img = ImageOps.mirror(img)
    return ImageOps.fit(img, (w, h), Image.LANCZOS, centering=focus)


def speed_lines(d, cx, cy, color=(255, 255, 255), n=48, r0=90):
    for i in range(n):
        a = i * 2 * math.pi / n
        d.line([(cx + r0 * math.cos(a), cy + r0 * math.sin(a)),
                (cx + 600 * math.cos(a), cy + 600 * math.sin(a))], fill=color, width=2 if i % 2 else 1)


def arc(d, box, start, end, color, width=8):
    d.arc(box, start, end, fill=color, width=width)
    d.arc([box[0] + 10, box[1] + 10, box[2] - 10, box[3] - 10], start, end, fill=(255, 255, 255), width=2)


def shot(n):
    t = Image.new("RGB", (TW, TH), "black")
    d = ImageDraw.Draw(t)
    if n == 1:
        t.paste(cover(crop("merah-punggung"), TW, TH, (0.5, 0.3)))
    elif n == 2:
        t.paste(cover(crop("biru-punggung"), TW, TH, (0.5, 0.3), flip=True))
    elif n == 3:
        t.paste(cover(crop("merah-mata"), TW, TH, (0.5, 0.55)))
    elif n == 4:
        t.paste(cover(crop("biru-mata"), TW, TH, (0.5, 0.4)))
    elif n == 5:
        a = cover(crop("merah-wajah"), TW, TH, (0.4, 0.5))
        b = cover(crop("biru-wajah"), TW, TH, (0.6, 0.4))
        m = Image.new("L", (TW, TH), 0)
        ImageDraw.Draw(m).polygon([(TW * 0.58, 0), (TW, 0), (TW, TH), (TW * 0.42, TH)], fill=255)
        t.paste(a)
        t.paste(b, (0, 0), m)
        d.line([(TW * 0.58, 0), (TW * 0.42, TH)], fill=GOLD, width=4)
    elif n == 6:
        a = cover(crop("biru-tangan"), TW, TH // 2, (0.3, 0.55))
        b = cover(crop("merah-tangan"), TW, TH // 2, (0.5, 0.5))
        t.paste(a)
        t.paste(b, (0, TH // 2))
        d.line([(0, TH // 2), (TW, TH // 2)], fill="black", width=6)
        d.line([(120, 110), (330, 20)], fill=(255, 255, 255), width=3)
        d.line([(200, 250), (440, 170)], fill=(255, 255, 255), width=3)
    elif n == 7:
        speed_lines(d, TW / 2, TH / 2, (90, 90, 90), n=60, r0=40)
        t.paste(cover(crop("merah-utama"), 200, 260, (0.5, 0.35)), (0, 5))
        t.paste(cover(crop("biru-utama"), 200, 260, (0.5, 0.3), flip=True), (280, 5))
        d = ImageDraw.Draw(t)
        for y in range(20, TH, 22):
            d.line([(200, y), (240, y)], fill=RED, width=2)
            d.line([(240, y + 11), (280, y + 11)], fill=BLUE, width=2)
    elif n == 8:
        base = Image.new("RGB", (TW, TH), "white")
        sil = ImageOps.invert(cover(crop("biru-utama"), TW, TH, (0.5, 0.3)).convert("L"))
        base = Image.merge("RGB", [sil] * 3)
        t.paste(base.point(lambda v: 255 if v > 140 else 0))
        d = ImageDraw.Draw(t)
        speed_lines(d, TW / 2, TH / 2, (0, 0, 0), n=40, r0=30)
        d.ellipse([TW / 2 - 25, TH / 2 - 25, TW / 2 + 25, TH / 2 + 25], fill=(255, 240, 200), outline="black", width=3)
    elif n == 9:
        cells = [("merah-utama", (0.3, 0.6)), ("biru-utama", (0.4, 0.55)), ("merah-tangan", (0.3, 0.4)),
                 ("biru-tangan", (0.5, 0.5)), ("merah-wajah", (0.5, 0.5)), ("biru-wajah", (0.5, 0.5))]
        for i, (k, f) in enumerate(cells):
            x, y = (i % 3) * 160, (i // 3) * 135
            t.paste(cover(crop(k), 158, 133, f), (x, y))
        d = ImageDraw.Draw(t)
        arc(d, [10, 20, 150, 200], 200, 340, RED, 6)
        arc(d, [170, 10, 320, 160], 20, 160, BLUE, 6)
        arc(d, [330, 140, 480, 290], 200, 330, RED, 6)
        arc(d, [10, 150, 150, 300], 300, 60, BLUE, 6)
    elif n == 10:
        a = cover(crop("merah-utama"), TW // 2, TH, (0.5, 0.25)).point(lambda v: v * 0.6)
        b = cover(crop("biru-utama"), TW // 2, TH, (0.5, 0.25), flip=True).point(lambda v: v * 0.6)
        t.paste(a)
        t.paste(b, (TW // 2, 0))
        d = ImageDraw.Draw(t)
        f = F(15, True)
        for i, ch in enumerate("TARIAN KAIN MERAH"):
            d.text((14, 8 + i * 15), ch, fill=(255, 210, 200), font=f)
        for i, ch in enumerate("ARUS BIRU"):
            d.text((TW - 26, 8 + i * 15), ch, fill=(200, 220, 255), font=f)
    elif n == 11:
        t.paste(Image.new("RGB", (TW, TH), (15, 10, 25)))
        d = ImageDraw.Draw(t)
        for i in range(7):
            d.arc([-160 + i * 12, 20 + i * 8, 260 - i * 6, 260 - i * 4], 280, 60, fill=(255, 90 + i * 20, 30), width=7)
            d.arc([220 + i * 6, 20 + i * 8, 640 - i * 12, 260 - i * 4], 120, 260, fill=(40 + i * 15, 120 + i * 15, 255), width=7)
        for i in range(5):
            d.arc([300 + i * 18, 150 - i * 10, 380 + i * 18, 230 - i * 10], 180, 360, fill=(230, 245, 255), width=3)
        d.ellipse([TW / 2 - 30, TH / 2 - 30, TW / 2 + 30, TH / 2 + 30], fill=(255, 255, 240))
    elif n == 12:
        t.paste(Image.new("RGB", (TW, TH), (250, 250, 245)))
        d = ImageDraw.Draw(t)
        for r in (40, 90, 150, 220):
            d.ellipse([TW / 2 - r * 1.6, TH / 2 - r, TW / 2 + r * 1.6, TH / 2 + r], outline=(200, 200, 200), width=3)
    elif n == 13:
        a = cover(crop("merah-wajah"), TW // 2, TH, (0.5, 0.6))
        b = cover(crop("biru-wajah"), TW // 2, TH, (0.6, 0.5))
        t.paste(a)
        t.paste(b, (TW // 2, 0))
        haze = Image.new("RGB", (TW, TH), (190, 170, 140))
        t = Image.blend(t, haze, 0.25)
        d = ImageDraw.Draw(t)
    elif n == 14:
        a = cover(crop("merah-utama"), TW // 2, TH, (0.5, 0.25)).point(lambda v: v * 0.45)
        b = cover(crop("biru-utama"), TW // 2, TH, (0.5, 0.25), flip=True).point(lambda v: v * 0.45)
        t.paste(a)
        t.paste(b, (TW // 2, 0))
        d = ImageDraw.Draw(t)
        f = F(34, True)
        w = d.textlength("IMBANG", font=f)
        d.text(((TW - w) / 2, 100), "IMBANG", fill=GOLD, font=f)
        f2 = F(16)
        w = d.textlength("— bersambung —", font=f2)
        d.text(((TW - w) / 2, 150), "— bersambung —", fill=(230, 230, 230), font=f2)
    return t


SHOTS = [
    (1, "0:00.0–0:02.5", "Senja: petarung merah (belakang)", "Push-in pelan, debu & kain berkibar"),
    (2, "0:02.5–0:04.5", "Pangeran biru di atap seberang", "Dicerminkan agar arah layar berlawanan"),
    (3, "0:04.5–0:06.0", "ECU mata merah (bercadar)", "Zoom pelan, kilat cahaya di mata"),
    (4, "0:06.0–0:07.5", "ECU mata biru (bercadar)", "Cermin shot 3"),
    (5, "0:07.5–0:09.5", "Split diagonal: dua wajah", "Pan berlawanan, garis emas berpendar"),
    (6, "0:09.5–0:11.0", "Genggam gagang + kilau bilah", "2 cut cepat, kilau menyapu bilah"),
    (7, "0:11.0–0:12.5", "Melesat dari dua sisi", "Speed lines, jejak merah vs biru"),
    (8, "0:12.5–0:13.5", "BENTURAN: impact frame", "2–3 frame hitam-putih, flash, layar bergetar"),
    (9, "0:13.5–0:18.0", "Adu tebasan (6 cut cepat)", "Jejak api merah / ombak biru ala ukiyo-e"),
    (10, "0:18.0–0:20.5", "Berpisah, nama jurus vertikal", "Latar gelap, partikel aura"),
    (11, "0:20.5–0:24.0", "Jurus pamungkas bertemu", "Pusaran api vs ombak, slow-mo"),
    (12, "0:24.0–0:25.0", "White-out + gelombang kejut", "Layar putih, cincin menyebar"),
    (13, "0:25.0–0:28.0", "Debu reda: dua wajah", "Kabut debu, kain berkibar pelan"),
    (14, "0:28.0–0:30.0", "Kartu akhir: IMBANG", "Siluet gelap, judul emas"),
]

COLS, PAD, CAP = 4, 18, 74
rows = math.ceil(len(SHOTS) / COLS)
W = COLS * TW + (COLS + 1) * PAD
H = 90 + rows * (TH + CAP + PAD) + PAD
sheet = Image.new("RGB", (W, H), (18, 18, 22))
d = ImageDraw.Draw(sheet)
d.text((PAD, 22), "STORYBOARD — Rival di Atap Kota (30 dtk, 16:9, tanpa audio)", fill="white", font=F(34, True))
for i, (n, tc, title, note) in enumerate(SHOTS):
    x = PAD + (i % COLS) * (TW + PAD)
    y = 90 + (i // COLS) * (TH + CAP + PAD)
    sheet.paste(shot(n), (x, y))
    d.rectangle([x, y, x + TW - 1, y + TH - 1], outline=(70, 70, 80))
    d.rectangle([x, y, x + 44, y + 30], fill=GOLD)
    d.text((x + 8, y + 3), f"{n:02d}", fill="black", font=F(20, True))
    d.text((x, y + TH + 6), f"{tc}  {title}", fill="white", font=F(17, True))
    d.text((x, y + TH + 32), note, fill=(180, 180, 190), font=F(16))
sheet.save("storyboard/storyboard.png")
print(sheet.size)
