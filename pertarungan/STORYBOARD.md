# Storyboard — "Rival di Atap Kota"

- **Durasi:** 30 detik (900 frame @ 30 fps), 1920×1080, tanpa audio
- **Alat:** Remotion (React), belum dirender
- **Alur:** dua rival bertemu di atap kota saat senja, bertarung, dan berakhir imbang
- **Sumber visual:** `source/petarung-merah.png`, `source/pangeran-biru.png`
  (dipotong per panel; logo "Prince of Persia" selalu dihindari/dipotong)
- **Lembar visual:** `storyboard/storyboard.png` (dibuat oleh `storyboard/build_sheet.py`)

## Bahasa visual yang ditiru (gaya, bukan aset)

| Ciri ala Kimetsu no Yaiba          | Penerapan di video ini                                        |
| ---------------------------------- | ------------------------------------------------------------- |
| Efek jurus bergaya lukisan ukiyo-e | Jejak tebasan pangeran: ombak biru bergaris tinta              |
| Jejak api pada tebasan             | Jejak tebasan petarung merah: api merah-oranye                 |
| Close-up mata sebelum bertarung    | Shot 3–4, dari panel mata bercadar                            |
| Nama jurus sebagai teks di layar   | Shot 10, teks vertikal (nama sementara, menunggu persetujuan) |
| Impact frame & kamera bergetar     | Shot 8 dan 12                                                 |

## Daftar shot

| #  | Waktu         | Frame   | Isi                                  | Gerak kamera / efek                                              |
| -- | ------------- | ------- | ------------------------------------ | ---------------------------------------------------------------- |
| 1  | 0:00.0–0:02.5 | 0–74    | Petarung merah dari belakang, senja  | Push-in pelan, partikel debu, kain berkibar (deformasi ringan)   |
| 2  | 0:02.5–0:04.5 | 75–134  | Pangeran biru di atap seberang       | Gambar dicerminkan agar arah layar berlawanan, push-in           |
| 3  | 0:04.5–0:06.0 | 135–179 | ECU mata merah bercadar              | Zoom pelan, kilat cahaya di mata pada frame terakhir             |
| 4  | 0:06.0–0:07.5 | 180–224 | ECU mata biru bercadar               | Cermin shot 3                                                     |
| 5  | 0:07.5–0:09.5 | 225–284 | Split diagonal dua wajah             | Kedua panel di-pan berlawanan, garis emas berpendar               |
| 6  | 0:09.5–0:11.0 | 285–329 | Genggaman gagang + kilau bilah       | Dua cut cepat, kilau putih menyapu bilah                          |
| 7  | 0:11.0–0:12.5 | 330–374 | Keduanya melesat dari dua sisi       | Speed lines, gambar meluncur ke tengah, jejak merah vs biru       |
| 8  | 0:12.5–0:13.5 | 375–404 | BENTURAN pertama                     | 3 frame hitam-putih, flash, percikan, layar bergetar              |
| 9  | 0:13.5–0:18.0 | 405–539 | Adu tebasan, 6 cut @ ±22 frame       | Zoom ke bagian berbeda, jejak api/ombak, percikan tiap benturan   |
| 10 | 0:18.0–0:20.5 | 540–614 | Berpisah, ambil kuda-kuda            | Latar gelap, partikel aura merah/biru, nama jurus vertikal        |
| 11 | 0:20.5–0:24.0 | 615–719 | Jurus pamungkas bertemu di tengah    | Pusaran api vs ombak dari dua sisi, slow-mo menjelang benturan    |
| 12 | 0:24.0–0:25.0 | 720–749 | White-out                            | Layar putih, cincin gelombang kejut, getar                        |
| 13 | 0:25.0–0:28.0 | 750–839 | Debu reda, dua wajah                 | Kabut debu memudar, kain berkibar pelan                           |
| 14 | 0:28.0–0:30.0 | 840–899 | Kartu akhir "IMBANG — bersambung"    | Kedua karakter digelapkan, judul emas muncul                      |

## Batasan yang perlu diketahui

1. **Karakter tidak bergerak seperti anime asli.** Ilustrasi diam hanya
   digeser, di-zoom, dipotong, dan diberi efek. Ekspresi wajah tidak bisa
   berubah (shot 13 memakai ekspresi yang sudah ada di gambar).
2. **Panel kecil akan buram jika dibesarkan.** Panel wajah, mata, dan punggung
   berukuran sekitar 220–330 px lebar. Di layar 1920 px, panel-panel ini
   dibesarkan sekitar 6–8× dan akan terlihat lembut. Penanganan: dibingkai
   lebih kecil, diberi grain/garis tinta, atau di-upscale dengan AI terlebih dulu.
3. **Logo di gambar sumber.** Bagian gambar yang memuat logo tidak dipakai,
   sehingga pilihan framing pada tangan petarung merah terbatas.
