# khalid — video dengan HyperFrames

Repo ini berisi setup [HyperFrames](https://github.com/heygen-com/hyperframes)
(HeyGen): video ditulis sebagai HTML + GSAP, lalu dirender ke MP4 secara
deterministik oleh headless Chrome + FFmpeg.

## Persiapan (sekali per mesin/container)

Butuh Node.js 22+ dan FFmpeg.

```bash
npm run setup
```

Skrip `scripts/setup.sh` akan:

1. `npm install` — memasang CLI `hyperframes` dan `gsap` (versi dipin).
2. `npx hyperframes browser ensure` — mengunduh Chrome Headless Shell untuk render.
3. `npx hyperframes skills update` — memasang skills HyperFrames
   (`/hyperframes`, `/hyperframes-cli`, `/hyperframes-registry`, `/media-use`)
   untuk Claude Code. Mulai ulang sesi agen agar skills termuat.
4. `npx hyperframes doctor` — memeriksa lingkungan.

## Alur kerja

| Perintah            | Fungsi                                                  |
| ------------------- | ------------------------------------------------------- |
| `npm run check`     | Lint + validasi runtime + layout + motion + kontras     |
| `npm run snapshot -- --at 0,1.5,4` | Simpan frame PNG untuk dicek visual      |
| `npm run render`    | Render ke `demo/renders/demo.mp4`                       |
| `npm run preview`   | Buka Studio preview di browser                          |

Proyek baru: `npx hyperframes init <nama> --example blank --non-interactive`.

## Struktur `demo/`

- `index.html` — komposisi root (6 detik, 1920×1080): latar + dua scene.
- `compositions/intro.html`, `compositions/outro.html` — scene (sub-komposisi).
- `assets/vendor/gsap.min.js` — GSAP disimpan lokal (lihat catatan di bawah).
- `CLAUDE.md` / `AGENTS.md` — aturan HyperFrames untuk agen AI.

## Catatan penting

- **GSAP lokal, bukan CDN.** Di lingkungan dengan proxy (mis. Claude Code
  cloud), headless Chrome gagal memuat `cdn.jsdelivr.net`
  (`net::ERR_TUNNEL_CONNECTION_FAILED`), sehingga `gsap` tidak terdefinisi dan
  render rusak. Untuk komposisi baru, ganti tag `<script>` CDN dengan
  `assets/vendor/gsap.min.js` (salin dari `node_modules/gsap/dist/`).
- Fitur opsional yang belum terpasang: transkripsi (whisper-cpp), TTS lokal
  (Kokoro), musik lokal (MusicGen). Lihat `npm run doctor`.
