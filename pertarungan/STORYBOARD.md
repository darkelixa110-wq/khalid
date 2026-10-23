# Storyboard v2 — "Rival di Atap Kota"

- **Durasi:** 30 detik (900 frame @ 30 fps), 1920×1080, tanpa audio
- **Alat:** Remotion (`anime/`), belum dirender sebagai video
- **Alur:** dua rival bertemu di atap kota saat senja, bertarung, dan berakhir imbang
- **Lembar visual:** `storyboard/storyboard-v2.jpg`. Setiap panel adalah frame asli dari komposisi
  `Pertarungan`, bukan sketsa.
- **Sumber karakter:** `source/*-anime.jpg` (versi gaya anime dari pengguna), latarnya dihapus
  menjadi `cutouts/*.png`

## Daftar shot

| #   | Waktu       | Frame   | Isi                                                     |
| --- | ----------- | ------- | ------------------------------------------------------- |
| 01  | 0:00–0:02.5 | 0–74    | Senja, kamera turun; dua rival di atap berseberangan     |
| 02  | 0:02.5–0:04 | 75–119  | Petarung merah, rim light hangat, push-in               |
| 03  | 0:04–0:05.5 | 120–164 | Pangeran biru, rim light dingin, push-in                |
| 04  | 0:05.5–0:07 | 165–209 | Close-up mata merah, cut ke close-up mata biru          |
| 05  | 0:07–0:08.5 | 210–254 | Kuda-kuda: kota menggelap, aura air & api menyala       |
| 06  | 0:08.5–0:10 | 255–299 | Melesat ke tengah: afterimage & garis kecepatan         |
| 07  | 0:10–0:11   | 300–329 | Benturan: 3 impact frame, lalu percikan & layar bergetar |
| 08  | 0:11–0:15   | 330–449 | Adu tebasan 4 ketukan: ombak biru ↔ api, kamera berayun  |
| 09  | 0:15–0:17   | 450–509 | Terpental mundur, debu di kaki                          |
| 10  | 0:17–0:19   | 510–569 | Nama jurus vertikal: pangeran, lalu petarung merah       |
| 11  | 0:19–0:23   | 570–689 | Jurus pamungkas: ombak raksasa vs badai api             |
| 12  | 0:23–0:24   | 690–719 | White-out + gelombang kejut                             |
| 13  | 0:24–0:27   | 720–809 | Uap menipis, keduanya masih berdiri                     |
| 14  | 0:27–0:30   | 810–899 | Kartu akhir "IMBANG — bersambung"                       |

## Cara melihat dan memperbarui

```bash
cd pertarungan/anime
npm i
npx remotion studio                      # pratinjau interaktif
# Render ulang frame storyboard (butuh Chrome; di cloud pakai Chrome milik HyperFrames):
REMOTION_BROWSER=/path/ke/chrome-headless-shell node scripts/storyboard-stills.mjs 50 105 ...
python3 scripts/storyboard-sheet.py ../storyboard/storyboard-v2.jpg
```

## Batasan

1. **Karakter tidak benar-benar beranimasi.** Gerakannya hanya geser, putar, skala, afterimage,
   dan efek. Tangan dan kaki tidak bergerak terpisah, dan ekspresi tidak berubah.
2. **Close-up wajah buram.** Wajah di gambar sumber hanya selebar ±150–200 px, sementara di
   shot 04 dibesarkan sekitar 3–4×.
3. **Karakter wanita terpotong di paha** pada gambar sumbernya. Bagian bawahnya selalu ditutup
   atap, uap, atau keluar dari bingkai.
4. **Latar kota masih sederhana** (siluet berlapis), belum selevel lukisan latar anime TV.
