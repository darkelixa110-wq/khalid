# Laporan: Tiga Aplikasi Rekam Medis Elektronik (RME) yang Paling Banyak Digunakan di Indonesia

**Tanggal penyusunan:** 19 November 2026
**Cakupan:** Rumah sakit, puskesmas, klinik, dan praktik mandiri di Indonesia
**Status:** Laporan desk research dari sumber publik. Laporan ini bukan audit pasar resmi.

---

## Daftar Isi

1. [Ringkasan Eksekutif](#1-ringkasan-eksekutif)
2. [Metodologi, Label Keyakinan, dan Batasan](#2-metodologi-label-keyakinan-dan-batasan)
3. [Konteks Regulasi dan Ekosistem RME di Indonesia](#3-konteks-regulasi-dan-ekosistem-rme-di-indonesia)
4. [Tabel Perbandingan Singkat](#4-tabel-perbandingan-singkat)
5. [Aplikasi 1 — ePuskesmas (PT Infokes Indonesia)](#5-aplikasi-1--epuskesmas-pt-infokes-indonesia)
6. [Aplikasi 2 — Assist.id (PT Teknologi Media Medika)](#6-aplikasi-2--assistid-pt-teknologi-media-medika)
7. [Aplikasi 3 — SIMRS Khanza (Khanza.Soft Media / YASKI)](#7-aplikasi-3--simrs-khanza-khanzasoft-media--yaski)
8. [Kandidat Lain yang Layak Dipertimbangkan](#8-kandidat-lain-yang-layak-dipertimbangkan)
9. [Analisis Lintas Aplikasi](#9-analisis-lintas-aplikasi)
10. [Panduan Praktis Memilih Aplikasi RME](#10-panduan-praktis-memilih-aplikasi-rme)
11. [Celah Informasi dan Cara Memverifikasinya](#11-celah-informasi-dan-cara-memverifikasinya)
12. [Daftar Sumber](#12-daftar-sumber)

---

## 1. Ringkasan Eksekutif

**Temuan utama: saya tidak menemukan data resmi dan publik yang memeringkat aplikasi RME menurut jumlah pengguna di Indonesia.** Kementerian Kesehatan (Kemenkes) menyediakan daftar sistem RME yang terdaftar di SATUSEHAT Platform, tetapi saya tidak menemukan publikasi jumlah fasyankes per vendor. Karena itu, pemilihan "tiga terbanyak" dalam laporan ini adalah **penilaian berbasis bukti terbaik yang tersedia**, bukan peringkat pasti.

Tiga aplikasi yang dipilih, masing-masing mewakili segmen fasyankes yang berbeda:

| # | Aplikasi | Segmen utama | Skala yang diklaim | Keyakinan atas angka |
|---|----------|--------------|--------------------|----------------------|
| 1 | **ePuskesmas** (PT Infokes Indonesia) | Puskesmas | >3.000 puskesmas dan 500 klinik | Sedang. Klaim perusahaan, didukung banyak studi lapangan |
| 2 | **Assist.id** (PT Teknologi Media Medika) | Klinik dan praktik mandiri | >6.000 faskes. Dari jumlah itu, >3.080 disebut sudah terhubung ke SATUSEHAT | Rendah–Sedang. Klaim perusahaan sendiri |
| 3 | **SIMRS Khanza** (Khanza.Soft Media / YASKI) | Rumah sakit (juga klinik dan puskesmas) | ">1.000 rumah sakit" | Rendah–Sedang. Klaim pengembang, dan angka antarsumber tidak konsisten |

> **Urutan di atas bukan peringkat.** Satuan yang dihitung berbeda (puskesmas, klinik, rumah sakit), dan skala satu rumah sakit tidak setara dengan satu praktik mandiri.

**Pengungkapan penting:** Jika kriterianya *murni jumlah fasyankes yang diklaim*, **MyKlinik** (klaim >4.000 klinik) dan **Medigo** (sekitar 3.500 FKTP terdaftar menurut ringkasan sebuah preprint; angka ini belum saya cocokkan dengan teks aslinya) melampaui klaim SIMRS Khanza. Saya tetap memilih Khanza karena tiga alasan. Pertama, ia mewakili segmen rumah sakit, dengan volume pasien per fasilitas yang jauh lebih besar. Kedua, ia memiliki bukti independen paling banyak, berupa belasan studi akademik di rumah sakit berbeda yang ditemukan dalam penelusuran ini. Ketiga, aktivitas pengembangannya dapat diverifikasi langsung di GitHub. Pembaca yang memakai kriteria berbeda bisa sampai pada daftar yang berbeda (lihat [Bagian 8](#8-kandidat-lain-yang-layak-dipertimbangkan)).

**Konteks pasar:**
- Pasar RME Indonesia **sangat terfragmentasi**. Sebuah preprint berbasis data operasional vendor menyatakan pangsa vendor tersebut di FKTP "masih <10% pada akhir 2024".
- Jumlah fasyankes yang terhubung ke SATUSEHAT naik dari **792** (rilis Kemenkes, September 2023) menjadi **2.498** (November 2023), lalu menjadi **sekitar 60 ribu** pada peluncuran SATUSEHAT RME (September 2026). Kemenkes menargetkan hampir 100 ribu fasyankes.

---

## 2. Metodologi, Label Keyakinan, dan Batasan

### 2.1 Cara penyusunan
1. Pencarian web atas sumber pemerintah (Kemenkes, JDIH), situs dan blog vendor, media massa, repositori GitHub, dan publikasi akademik (jurnal, skripsi, tesis, preprint).
2. Kandidat dinilai dengan tiga kriteria:
   - **Skala**: jumlah fasyankes pengguna yang diklaim atau dilaporkan.
   - **Bukti independen**: adanya studi akademik, dokumen pemerintah daerah, atau data yang dapat diperiksa pihak ketiga.
   - **Representasi segmen**: puskesmas, klinik/praktik mandiri, dan rumah sakit.
3. Statistik repositori GitHub (bintang, fork, tanggal aktivitas terakhir) diambil langsung melalui GitHub API pada 19 November 2026.

### 2.2 Label keyakinan yang dipakai

| Label | Arti |
|-------|------|
| **[Tinggi]** | Dari sumber resmi atau primer yang konsisten, atau data yang saya periksa langsung (misalnya GitHub API) |
| **[Sedang]** | Dari sumber sekunder yang kredibel, atau beberapa sumber yang saling menguatkan |
| **[Rendah]** | Klaim tunggal dari vendor atau materi promosi, data lama, atau angka yang bertentangan antarsumber |

### 2.3 Batasan yang perlu diketahui
- **Sebagian sumber primer tidak dapat saya buka langsung.** Lingkungan kerja saya memblokir akses langsung ke kemkes.go.id, satusehat.kemkes.go.id, jdih.kemkes.go.id, infokes.co.id, epuskesmas.id, assist.id, dan arxiv.org. Informasi dari situs tersebut saya ambil dari **cuplikan hasil mesin pencari** atas halaman itu. Cuplikan bisa saja tidak lengkap atau kehilangan konteks.
- **Halaman daftar sistem RME SATUSEHAT** (`satusehat.kemkes.go.id/platform/system-rme-list`) adalah sumber paling relevan untuk menghitung vendor terdaftar, tetapi tidak dapat saya akses.
- **Hampir semua angka pengguna adalah klaim vendor.** Klaim seperti ini cenderung dibulatkan ke atas dan definisinya beragam: ada yang menghitung "terdaftar", ada yang "aktif", ada yang "pernah memakai".
- **Data harga** yang ditemukan umumnya sudah lama atau tidak dipublikasikan.
- Laporan ini **tidak menilai kualitas klinis atau keamanan** masing-masing aplikasi secara teknis.

---

## 3. Konteks Regulasi dan Ekosistem RME di Indonesia

### 3.1 Dasar hukum

| Regulasi / Kebijakan | Isi pokok | Keyakinan |
|----------------------|-----------|-----------|
| **Permenkes No. 24 Tahun 2022** tentang Rekam Medis | Seluruh fasyankes wajib menyelenggarakan RME **paling lambat 31 Desember 2023**, dan RME harus terintegrasi dengan SATUSEHAT Platform | [Tinggi] |
| **SE Menkes No. HK.02.01/MENKES/1030/2023** (13 Desember 2023) | Mengatur penyelenggaraan RME dan sanksi administratif bertahap: teguran tertulis, lalu rekomendasi pencabutan status akreditasi dan/atau izin. Ringkasan sekunder juga menyebut tenggat lanjutan 31 Desember 2024 terkait kunjungan pasien yang masuk ke SATUSEHAT | [Sedang]. Rincian sanksi saya peroleh dari ringkasan pihak ketiga, bukan dari teks penuh SE |
| **KMK No. HK.01.07/MENKES/1423/2022** | Pedoman variabel dan metadata RME. Dirujuk dalam studi kesesuaian data SIMRS dengan standar nasional | [Sedang] |

### 3.2 SATUSEHAT Platform dan SATUSEHAT RME
- **SATUSEHAT Platform** adalah platform interoperabilitas data kesehatan nasional milik Kemenkes. Fasyankes **dan penyedia RME (vendor)** harus terdaftar dan terverifikasi agar dapat mengirim data. Daftar sistem RME yang terdaftar dapat dilihat di `satusehat.kemkes.go.id/platform/system-rme-list`. [Sedang]
- **Pertumbuhan jumlah fasyankes terintegrasi:**

  | Periode | Jumlah fasyankes terhubung SATUSEHAT | Sumber | Keyakinan |
  |---------|--------------------------------------|--------|-----------|
  | September 2023 | 792 (rumah sakit hingga puskesmas) | Rilis Kemenkes 4 September 2023 | [Sedang] |
  | November 2023 | 2.498 | Rilis Kemenkes 11 November 2023 | [Sedang] |
  | September 2026 | "Sekitar 60 ribu". Target hampir 100 ribu | Pemberitaan peluncuran SATUSEHAT RME | [Sedang] |

- **SATUSEHAT RME** diluncurkan Kemenkes pada **1 September 2026**. Layanan ini **tidak menggantikan aplikasi RME di fasyankes**. Fungsinya menggabungkan rekam medis seseorang dari berbagai fasyankes sehingga data melekat pada individu, bukan pada fasilitas. Rincian yang diberitakan:
  - Data yang diintegrasikan mencakup diagnosis, hasil laboratorium, obat, tindakan, tanda vital, radiologi, dan hasil Cek Kesehatan Gratis (CKG).
  - Tenaga medis mengakses data sesuai kewenangan dan persetujuan pasien, memakai PIN yang berlaku untuk periode tertentu.
  - Pasien dengan profil SATUSEHAT Mobile yang terverifikasi dapat melihat resume medisnya sendiri.
  - Pengamanan sistem melibatkan BSSN, dan BPJS Kesehatan direncanakan membaca RME untuk proses klaim.
  - Penerapan dilakukan bertahap. [Sedang]
- **Implikasi bagi pemilihan aplikasi:** vendor RME di fasyankes tetap diperlukan. Kemampuan mengirim data yang lengkap dan sesuai standar ke SATUSEHAT kini menjadi syarat utama.

### 3.3 Skala fasyankes (sebagai penyebut)

| Jenis | Perkiraan jumlah | Sumber | Keyakinan |
|-------|------------------|--------|-----------|
| Puskesmas | 10.292 | Dasbor Puskesmas Kemenkes (tanggal pembaruan data tidak jelas) | [Sedang] |
| FKTP (puskesmas, klinik pratama, praktik mandiri, dll.) | 39.852 | Preprint Medigo, dari ringkasan terjemahan mesin yang belum saya cocokkan dengan teks asli | [Rendah] |
| Rumah sakit | Sekitar 3.239 (Oktober 2025) | Laporan riset pasar Ken Research. Metodologi tidak dijelaskan | [Rendah] |

---

## 4. Tabel Perbandingan Singkat

| Aspek | ePuskesmas | Assist.id | SIMRS Khanza |
|-------|-----------|-----------|--------------|
| **Pengembang** | PT Infokes Indonesia (Bandung) | PT Teknologi Media Medika | Khanza.Soft Media. Repositori menautkan ke YASKI (yaski.or.id) |
| **Segmen utama** | Puskesmas | Klinik pratama, klinik gigi, praktik mandiri. Ada juga solusi puskesmas | Rumah sakit. Bisa juga untuk klinik dan puskesmas |
| **Model distribusi** | Layanan cloud (SaaS) berbasis web | Layanan cloud berlangganan (SaaS) | Perangkat lunak gratis dengan kode sumber tersedia, diinstal dan dikelola sendiri (self-hosted) |
| **Biaya** | Tidak dipublikasikan (kontrak layanan) | Data lama (2019): mulai Rp299.000/bulan | Tanpa biaya lisensi. Biaya implementasi, kustomisasi, dan pemeliharaan ditanggung sendiri |
| **Klaim skala** | >3.000 puskesmas dan 500 klinik | >6.000 faskes | >1.000 rumah sakit |
| **Integrasi SATUSEHAT** | Ya (klaim vendor) | Ya, >3.080 faskes terhubung (klaim vendor) | Ada modul layanan SATUSEHAT di repositori |
| **Integrasi BPJS** | PCare | PCare | PCare, Mobile JKN, Aplicare, API BPJS FKTP/FKTL (dari nama modul) |
| **Kebutuhan tim IT internal** | Rendah | Rendah | Tinggi |
| **Bukti independen** | Banyak studi lapangan di puskesmas | Terbatas | Banyak studi di rumah sakit |

---

## 5. Aplikasi 1 — ePuskesmas (PT Infokes Indonesia)

### 5.1 Profil
- **Pengembang:** PT Infokes Indonesia, perusahaan TI kesehatan yang berbasis di Bandung, Jawa Barat. [Sedang]
- **Kepemilikan/pendanaan:** Crunchbase mencatat perusahaan ini didanai oleh **Telkom Indonesia**. [Sedang]
- **Tahun berdiri: sumber saling bertentangan.** TheOrg menyebut sejak 2007, sedangkan Crunchbase menyebut beroperasi sejak akhir 2013. Saya juga tidak dapat memastikan tahun peluncuran pertama ePuskesmas. [Rendah]
- **Ukuran tim:** diperkirakan 50–200 karyawan (Dicoding: 50–100, TheOrg: 51–200). [Rendah]
- **Produk terkait:** Infokes juga memiliki **eClinic Leap**, aplikasi RME untuk klinik. [Sedang]
- **Versi:** Studi lapangan menyebut versi **"e-Puskesmas Next Generation (NG)"**, misalnya di Puskesmas Kedungsari, Mojokerto. [Sedang]

### 5.2 Skala penggunaan

| Klaim / data | Sumber | Keyakinan |
|--------------|--------|-----------|
| ">3.000 puskesmas dan 500 klinik" selama lebih dari satu dekade | Profil perusahaan di Dicoding Jobs | [Rendah–Sedang] |
| ">1.000 puskesmas aktif" (data lebih lama) | Profil perusahaan di Kalibrr | [Rendah] |
| Contoh adopsi daerah: seluruh puskesmas Kota Pekanbaru sepakat memakai ePuskesmas. Ada juga kegiatan implementasi di Kab. Tasikmalaya, Kab. Maros (14 puskesmas), Garut, Kab. Bangka, dan Batam | Berita di situs Infokes (materi perusahaan) | [Sedang] |
| Banyak studi akademik independen tentang penerapan ePuskesmas di berbagai daerah (lihat 5.6) | Jurnal dan skripsi | [Tinggi] bahwa aplikasi ini memang luas dipakai. Jumlah persisnya tetap tidak diketahui |

**Perkiraan kasar (bukan data resmi):** jika klaim ">3.000 puskesmas" benar, dengan total sekitar 10.292 puskesmas, maka **sekitar 3 dari 10 puskesmas** memakai ePuskesmas. Angka ini hanya ilustrasi. Validitasnya bergantung pada klaim vendor dan definisi "pengguna".

### 5.3 Fitur dan fungsi
Rincian modul resmi tidak dapat saya akses langsung. Dari studi lapangan dan materi Infokes, cakupan fungsinya meliputi:
- **Rekam medis pasien**: anamnesis, diagnosis, hasil laboratorium, dan resep yang tersimpan digital. [Sedang]
- **Layanan rawat jalan** dan unit-unit puskesmas: poli umum, poli khusus, farmasi, rekam medis. Indikasinya dari studi yang menilai adopsi per unit. [Sedang]
- **Akses lintas perangkat** melalui internet, karena berbasis cloud. [Sedang]

> Saya tidak menemukan dokumentasi resmi yang dapat diverifikasi untuk fitur spesifik seperti antrean online, pelaporan bulanan, atau modul program (KIA, imunisasi, dan sebagainya). Calon pengguna perlu meminta daftar modul langsung ke Infokes.

### 5.4 Integrasi
- **SATUSEHAT**: Infokes menyatakan ePuskesmas sudah terintegrasi (berita Infokes, 2023). [Sedang]
- **PCare BPJS Kesehatan**: terintegrasi menurut sumber yang sama. [Sedang]

### 5.5 Teknologi dan model layanan
- **Berbasis cloud computing**: tidak perlu instalasi server lokal di puskesmas dan dapat diakses dari berbagai perangkat yang tersambung ke internet. [Sedang]
- **Model kontrak**: layanan diberikan melalui kerja sama dengan pemerintah daerah atau puskesmas. Contohnya dokumen MoU di lingkungan Pemkot Samarinda yang menyebut sistem ePus berbasis cloud dari pihak penyedia. [Sedang]
- **Harga tidak dipublikasikan.** [Tinggi] (tidak ditemukan dalam penelusuran)

### 5.6 Temuan riset lapangan
| Lokasi | Desain | Temuan relevan |
|--------|--------|----------------|
| Puskesmas Kedungsari, Mojokerto (skripsi Politeknik Negeri Jember, 2024) | Kualitatif, HOT-Fit, 24 petugas pengguna ePuskesmas NG rawat jalan | Dimensi *Human*: **tidak ada pelatihan** dari Dinas Kesehatan maupun tim pengembang untuk seluruh petugas |
| Puskesmas Babelan I, Bekasi (jurnal INOHIM) | Studi penerapan | Beberapa unit **belum** memakai ePuskesmas (unit rekam medis, poli HIV, poli kusta, farmasi). Ditemukan kendala SDM dan cara entri data. Sebagian rekam medis masih manual |
| Puskesmas Roworejo, Kab. Pesawaran (Jurnal Univ. Malahayati, data Okt 2024–Jul 2025) | Kualitatif, HOT-FIT, studi kasus | Menilai ePuskesmas dengan model HOT-FIT. Temuan lengkap tidak tersedia dalam cuplikan yang saya akses |
### 5.7 Kelebihan
- **Dirancang khusus untuk alur kerja puskesmas.** Ini segmen yang kebutuhannya berbeda dari klinik swasta, misalnya program kesehatan masyarakat.
- **Cloud (SaaS)**: tidak perlu server dan tim IT besar di tiap puskesmas, cocok untuk daerah dengan SDM IT terbatas.
- **Adopsi luas** membuat pengetahuan pengguna mudah ditransfer antarpuskesmas dan antardaerah, serta memudahkan dinkes kabupaten/kota yang menyeragamkan sistem.
- Didukung perusahaan dengan afiliasi BUMN (Telkom) menurut Crunchbase.

### 5.8 Keterbatasan dan risiko
- **Ketergantungan pada koneksi internet** sebagai konsekuensi arsitektur cloud. Ini relevan untuk puskesmas dengan jaringan tidak stabil.
- **Pelatihan dan pendampingan tidak merata** (temuan Mojokerto), dan **adopsi parsial antarunit** (temuan Babelan I).
- **Harga dan SLA tidak transparan** secara publik.
- **Risiko ketergantungan pada vendor (*vendor lock-in*)**. Puskesmas perlu memastikan hak atas ekspor data dan kejelasan lokasi penyimpanan data.

### 5.9 Paling cocok untuk
Puskesmas dan dinas kesehatan kabupaten/kota yang menginginkan sistem seragam berbasis cloud dengan kebutuhan tim IT internal yang rendah.

---

## 6. Aplikasi 2 — Assist.id (PT Teknologi Media Medika)

### 6.1 Profil
- **Badan usaha:** PT Teknologi Media Medika (Assist.id), menurut profil di Kalibrr. [Sedang]
- **Lokasi: sumber berbeda.** Kalibrr menyebut Pekanbaru, sedangkan Kitalulus menyebut alamat di Bandung. [Rendah]
- **Riwayat:** dirintis sejak pertengahan 2018 dan *soft launch* Januari 2019 (Kontan, Oktober 2019). Pada 2019 jumlah klinik penggunanya masih "puluhan". [Sedang]
- **Posisi pasar:** menyasar praktik mandiri serta klinik kecil hingga menengah. Satu ulasan pihak ketiga menilai skalabilitasnya untuk rumah sakit besar mungkin terbatas. [Sedang]
- Assist.id juga memasarkan solusi RME untuk **puskesmas** (blog Assist.id). [Sedang]

### 6.2 Skala penggunaan

| Klaim / data | Sumber | Keyakinan |
|--------------|--------|-----------|
| ">6.000 fasilitas kesehatan". Disebut tumbuh dari ">5.000 faskes" pada 2024 | Situs dan blog Assist.id | [Rendah–Sedang]. Klaim perusahaan, tetapi konsisten di beberapa materinya |
| ">3.080 fasyankes" tercatat terhubung ke SATUSEHAT memakai RME Assist.id | Blog Assist.id | [Rendah–Sedang] |
| "Software klinik dengan adopsi terluas dan terlaris di Indonesia" | Tulisan di kanal *cari.republika.co.id* yang bersumber dari "data investigasi Assist.id" sendiri, jadi bersifat advertorial | [Rendah] |
| Pertumbuhan: dari "puluhan" klinik (2019) ke ribuan faskes (2024–2025) | Kontan 2019 dibandingkan dengan klaim terbaru | [Sedang] untuk tren |

**Catatan analitis:** selisih antara 6.000 pengguna dan 3.080 yang terhubung ke SATUSEHAT menunjukkan bahwa **tidak semua pengguna sudah mengirim data ke SATUSEHAT**, atau bahwa kedua angka diambil pada waktu dan dengan definisi yang berbeda.

### 6.3 Fitur
Rincian di bawah berasal dari artikel Kontan 2019, sehingga fitur saat ini kemungkinan sudah berkembang. [Sedang]
- Pendaftaran pasien, **antrean**, dan **booking konsultasi dokter secara online**.
- **Rekam medis**: catatan dokter berstandar **ICD-10**, catatan perawat, **odontogram** (untuk klinik gigi), dan unggah foto.
- **Inventori obat** dan **kasir (POS)**.
- **Aplikasi untuk pasien**.
- Rencana pengembangan (2019): fitur untuk apotek dan laboratorium. Situs saat ini juga menampilkan produk seperti aplikasi *warehouse* dan manajemen stok.

### 6.4 Integrasi
- **BPJS PCare**: *bridging* sudah tersedia sejak 2019 (Kontan). [Sedang]
- **SATUSEHAT**: diklaim terintegrasi (lihat angka di 6.2). [Rendah–Sedang]

### 6.5 Model bisnis dan biaya
- **Berlangganan (SaaS).** Pada 2019 harga mulai **Rp299.000 per bulan**. [Sedang untuk 2019, Rendah untuk kondisi sekarang]
- Harga terkini tidak berhasil saya verifikasi.

### 6.6 Kelebihan
- **Fokus pada klinik dan praktik mandiri**, dengan produk yang dirancang untuk skala tersebut.
- **Fitur operasional klinik dalam satu paket** (pendaftaran, RME, farmasi/inventori, kasir), sehingga cocok untuk klinik tanpa tim IT.
- Fitur khusus seperti **odontogram** relevan untuk klinik gigi.
- Klaim jumlah koneksi SATUSEHAT yang besar, meski belum terverifikasi independen.

### 6.7 Keterbatasan dan risiko
- **Hampir semua data skala berasal dari Assist.id sendiri**. Saya tidak menemukan studi akademik independen yang setara dengan ePuskesmas atau Khanza.
- **Informasi korporat publik kurang konsisten** (lokasi kantor).
- **Data harga publik sudah lama**.
- Mungkin **kurang sesuai untuk rumah sakit besar** (menurut ulasan pihak ketiga).
- Risiko umum SaaS: ketergantungan pada vendor, internet, dan kejelasan kepemilikan serta ekspor data.

### 6.8 Paling cocok untuk
Klinik pratama, klinik gigi, dan praktik dokter/bidan mandiri yang membutuhkan RME siap pakai dengan *bridging* PCare dan SATUSEHAT.

---

## 7. Aplikasi 3 — SIMRS Khanza (Khanza.Soft Media / YASKI)

### 7.1 Profil
- **Pembuat:** README repositori menyebut **Khanza.Soft Media** sebagai pembuat yang izinnya diperlukan untuk penggunaan komersial. Bagian "About" repositori menautkan ke **yaski.or.id**. Sumber sekunder menyebut YASKI sebagai yayasan pengelola yang berdiri di Klaten sejak 2017, tetapi kepanjangan nama yayasan berbeda-beda antarsumber. [Sedang]
- **Repositori resmi:** `github.com/mas-elkhanza/SIMRS-Khanza`, dibuat 28 Desember 2016. [Tinggi]
- **Sejarah:** satu tesis (UMY) menyebut aplikasi klien SIMRS Khanza gratis sejak 2013. [Rendah–Sedang]
- **Cakupan:** README menyebutnya "Software Manajemen Rumah Sakit/Klinik/Puskesmas", dengan topik repositori *simrs*, *simklinik*, *simpus*, *sirs*. [Tinggi]

### 7.2 Status lisensi (penting dan sering disalahpahami)
- README menyatakan perangkat lunak ini **gratis, kode sumbernya tersedia, dan boleh digunakan siapa saja tanpa biaya**. [Tinggi]
- README juga menyatakan **larangan memperjualbelikan atau mengambil keuntungan dari perangkat lunak ini dalam bentuk apa pun tanpa izin pembuat (Khanza.Soft Media)**. [Tinggi]
- Lisensi yang dirujuk adalah **Aladdin Free Public License (AFPL)**. **FSF tidak menganggap AFPL sebagai lisensi perangkat lunak bebas, dan OSI tidak menganggapnya lisensi open source**, karena AFPL membatasi penjualan atau distribusi berbayar. [Tinggi]
- **Implikasi:** Khanza sering disebut "open source", padahal secara ketat lebih tepat disebut **gratis dan *source-available***. Vendor atau konsultan yang memungut biaya implementasi sebaiknya memastikan batas izin komersial langsung kepada pembuat.

### 7.3 Skala penggunaan dan aktivitas

| Data | Sumber | Keyakinan |
|------|--------|-----------|
| "Digunakan di lebih dari 1000 rumah sakit di seluruh Indonesia" | Deskripsi repositori GitHub (klaim pengembang) | [Rendah–Sedang] |
| ">600 rumah sakit" | Tesis UMY (tahun data tidak jelas) | [Rendah] |
| Situs pengembang memuat sekitar 300 fasyankes terdaftar, sementara klaimnya 1.000 pengguna | Presentasi di SlideShare (2021) | [Rendah] |
| **803 bintang, 963 fork, aktivitas terakhir 19 November 2026** | GitHub API, saya periksa langsung | [Tinggi] |
| Belasan studi akademik di berbagai RS (RSUD Bahteramas, RSUD dr. Soedirman Kebumen, RS Tentara Reksodiwiryo Padang, dll.) | Jurnal, skripsi, dan tesis | [Tinggi] bahwa aplikasi ini memang luas dipakai di RS |

**Interpretasi:** jumlah fork yang hampir seribu dan pengembangan yang masih aktif hingga hari laporan ini disusun adalah indikator kuat basis pengguna dan komunitas yang besar. Meski begitu, **jumlah pasti rumah sakit pengguna tidak dapat diverifikasi**, dan klaim ">1.000" kemungkinan juga mencakup klinik dan puskesmas.

### 7.4 Fitur dan modul
README tidak merinci modul. Struktur folder repositori menunjukkan **modul layanan integrasi** berikut (nama folder diperiksa, fungsi diinferensikan dari namanya): [Sedang]

| Folder di repositori | Indikasi fungsi |
|----------------------|-----------------|
| `KhanzaHMSServiceSatuSehat` | Pengiriman data ke SATUSEHAT |
| `KhanzaHMSServicePCare`, `api-bpjsfktp` | Integrasi BPJS untuk FKTP (PCare) |
| `api-bpjsfktl` | Integrasi BPJS untuk FKRTL (rumah sakit) |
| `KhanzaHMSServiceMobileJKNERM`, `KhanzaHMSServiceMobileJKNFKTP` | Integrasi Mobile JKN |
| `KhanzaHMSServiceAplicare` | Aplicare (informasi ketersediaan tempat tidur BPJS) |
| `KhanzaHMSServiceSIRSYankes` | Pelaporan SIRS (Sistem Informasi Rumah Sakit) Kemenkes |

Sumber sekunder menyebut modul fungsional seperti **registrasi, rekam medis, billing (termasuk BPJS), farmasi, laboratorium, radiologi, dan inventori**, serta *bridging* **VClaim**. [Sedang]. Sebagian sumber ini blog vendor pesaing.

### 7.5 Teknologi
- **Bahasa utama: Java** (GitHub API). [Tinggi]
- **Aplikasi desktop** berbasis Java (sumber sekunder). [Sedang]
- **Basis data MySQL/MariaDB**. Indikasinya dari alat pihak ketiga yang dibuat khusus untuk menyinkronkan struktur database MySQL/MariaDB SIMRS Khanza. [Sedang]
- **Dijalankan sendiri (*self-hosted*)**: rumah sakit menyediakan server, jaringan, cadangan data, dan keamanan sendiri.

### 7.6 Temuan riset

| Lokasi / studi | Temuan relevan |
|----------------|----------------|
| RSUD Bahteramas (evaluasi HOT-FIT, instalasi rawat jalan, 2024) | Kepuasan tertinggi pada variabel **penggunaan sistem (71,79%)**. Ketidakpuasan tertinggi pada **dukungan vendor (26,28%)**. Ini studi satu RS, jadi tidak dapat digeneralisasi |
| RSUD dr. Soedirman Kebumen (tugas akhir/tesis UGM) | RS sudah terhubung teknis dengan SATUSEHAT, tetapi **variabel dan metadata internal Khanza belum sepenuhnya selaras dengan KMK HK.01.07/MENKES/1423/2022**. Studi terkait juga menemukan tidak semua data berhasil dimigrasikan karena perbedaan metadata |
| Tesis UGM tentang adopsi FOSS di layanan kesehatan | Khanza dipilih sebagai objek studi karena lisensinya dinilai sesuai definisi free/open source dan komunitasnya aktif. Catatan: penilaian ini berbeda dengan posisi FSF/OSI atas AFPL (lihat 7.2) |
| Studi kepuasan pengguna modul pendaftaran (EUCS) | Merekomendasikan perbaikan antarmuka dan fitur pencarian |

### 7.7 Kelebihan
- **Tanpa biaya lisensi**, sehingga sangat menarik bagi RS dengan anggaran terbatas, termasuk RSUD dan RS swasta tipe C/D.
- **Kode sumber tersedia**: dapat dikustomisasi penuh oleh tim IT RS.
- **Cakupan modul dan integrasi yang luas** (BPJS, SATUSEHAT, Mobile JKN, SIRS).
- **Komunitas besar** (hampir 1.000 fork) dan **pengembangan aktif**.
- Data tersimpan di server milik RS sendiri, sehingga kontrol penuh atas data ada di tangan RS.

### 7.8 Keterbatasan dan risiko
- **Butuh tim IT internal yang kuat** untuk instalasi, kustomisasi, *update*, keamanan, dan pencadangan.
- **Tidak ada dukungan vendor formal berbasis SLA**. Ketidakpuasan pada aspek dukungan vendor muncul di studi RSUD Bahteramas.
- **Kesesuaian metadata dengan standar nasional perlu diperiksa** (temuan Kebumen).
- **Lisensi AFPL membatasi komersialisasi**, jadi pihak ketiga yang menjual jasa berbasis Khanza perlu izin pembuat.
- **Biaya total kepemilikan (TCO) tidak nol**: server, SDM IT, pelatihan, dan kustomisasi tetap memakan biaya.
- Arsitektur desktop dan *self-hosted* menuntut pengelolaan instalasi klien dan keamanan jaringan internal.

### 7.9 Paling cocok untuk
Rumah sakit (terutama RSUD dan RS swasta kelas menengah ke bawah) yang **memiliki tim IT internal yang kompeten** dan menginginkan kontrol penuh atas sistem dan data tanpa biaya lisensi.

---

## 8. Kandidat Lain yang Layak Dipertimbangkan

Aplikasi di bawah juga memiliki klaim skala besar atau posisi strategis, tetapi tidak saya masukkan ke tiga besar. Alasannya tercantum di kolom terakhir.

| Aplikasi | Segmen | Data yang ditemukan | Keyakinan | Alasan tidak masuk tiga besar |
|----------|--------|---------------------|-----------|-------------------------------|
| **MyKlinik** | Klinik | Klaim ">4.000 klinik". Klaim integrasi SATUSEHAT, BPJS PCare, Antrol v2, I-Care. Ada satu studi penerapan di KITA Clinic Cikupa, Tangerang | [Rendah] | Klaim besar, tetapi bukti independen sangat terbatas. Badan hukum pengelolanya tidak saya temukan. Satu segmen dengan Assist.id, yang klaimnya lebih besar |
| **Medigo** (PT Medigo Teknologi Kesehatan) | FKTP | Preprint arXiv 2512.05381 (Desember 2025) berbasis data operasional perusahaan: pangsa FKTP "masih <10% pada akhir 2024" dan terus naik pada 2025. Ringkasan terjemahan mesin menyebut 3.533 dari 39.852 FKTP (8,9%) | [Sedang] untuk "<10%", [Rendah] untuk angka rinci | Angka di bawah klaim Assist.id. Preprint belum *peer-review* |
| **SIMRS GOS / SIMGOS** (Kemenkes) | Rumah sakit | SIMRS *Generic Open Source* dari Kemenkes. Ada materi resmi tentang SIMGOS Versi 2 | [Sedang] | Jumlah pengguna tidak saya temukan |
| **Klinik Pintar** | Klinik | Bekerja sama dengan PB IDI (2022) untuk meningkatkan adopsi RME | [Sedang] | Data jumlah pengguna tidak ditemukan |
| **eHealth.co.id** | Klinik dan praktik mandiri | Klaim ">500 faskes". Paket "eHealth Lite" terhubung SATUSEHAT, sekitar Rp37.500/bulan (paket tahunan) | [Rendah] | Skala lebih kecil |
| **eClinic Leap** (Infokes) | Klinik | Produk RME klinik dari Infokes | [Sedang] | Jumlah pengguna tidak ditemukan |
| **ASIK** (Kemenkes) | Puskesmas (pencatatan program) | Kemenkes menyatakan ASIK terintegrasi dengan SATUSEHAT | [Sedang] | Bukan aplikasi RME menyeluruh sejenis produk di atas |

---

## 9. Analisis Lintas Aplikasi

### 9.1 Pasar terfragmentasi dan tersegmentasi
- Tidak ada satu aplikasi yang dominan di semua jenis fasyankes. **Puskesmas**, **klinik/praktik mandiri**, dan **rumah sakit** memiliki "pemimpin" yang berbeda, dengan kebutuhan fungsional yang berbeda pula.
- Preprint Medigo menunjukkan bahwa vendor FKTP dengan ribuan pengguna pun memegang pangsa **<10%**.
- **Gambaran kasar, bukan data resmi:** jika total FKTP sekitar 40 ribu, klaim tertinggi di segmen klinik (Assist.id, >6.000) setara dengan sekitar 15%. Angka ini bergantung pada dua angka yang belum terverifikasi.

### 9.2 Dua model dominan: SaaS berbayar vs. perangkat lunak gratis yang dikelola sendiri

| Dimensi | SaaS (ePuskesmas, Assist.id) | Gratis & *self-hosted* (Khanza) |
|---------|------------------------------|----------------------------------|
| Biaya awal | Rendah | Server dan implementasi |
| Biaya berjalan | Langganan | SDM IT dan pemeliharaan |
| Kebutuhan tim IT | Rendah | Tinggi |
| Kontrol atas data | Di vendor (cloud) | Di fasyankes |
| Ketergantungan internet | Tinggi | Lebih rendah untuk operasi internal, tetapi integrasi SATUSEHAT/BPJS tetap butuh internet |
| Dukungan | Dari vendor | Komunitas atau pihak ketiga |
| Kustomisasi | Terbatas | Sangat luas |

### 9.3 Isu yang berulang di ketiga aplikasi
1. **Kepatuhan standar data**: integrasi teknis dengan SATUSEHAT tidak otomatis berarti data sesuai pedoman variabel dan metadata (contoh: temuan Kebumen untuk Khanza).
2. **SDM dan pelatihan**: temuan di puskesmas (Mojokerto, Babelan I) menunjukkan bahwa adopsi RME sering terhambat oleh pelatihan, bukan oleh perangkat lunaknya.
3. **Keamanan data**: survei terhadap 1.150 FKTP yang dikutip preprint Medigo menunjukkan kekhawatiran tinggi atas keamanan data medis dan transaksi, sekitar 65–79% di beberapa kabupaten. [Rendah–Sedang]. Data ini saya peroleh dari ringkasan, bukan teks penuh.
4. **Efek tenggat regulasi**: preprint Medigo menemukan pola adopsi yang melonjak di sekitar tenggat Permenkes 24/2022 (*deadline-chasing*).

---

## 10. Panduan Praktis Memilih Aplikasi RME

Daftar periksa berikut berlaku untuk aplikasi mana pun, termasuk ketiga aplikasi di atas:

- [ ] **Terdaftar dan terverifikasi di SATUSEHAT Platform**: cek di `satusehat.kemkes.go.id/platform/system-rme-list`.
- [ ] **Kelengkapan data yang dikirim ke SATUSEHAT**: minta bukti jenis data apa saja yang terkirim (kunjungan, diagnosis, obat, laboratorium, dll.).
- [ ] **Kesesuaian dengan KMK HK.01.07/MENKES/1423/2022** (variabel dan metadata).
- [ ] ***Bridging* BPJS yang sesuai jenis fasyankes**: PCare untuk FKTP. VClaim dan layanan terkait untuk rumah sakit.
- [ ] **Kepemilikan dan portabilitas data**: hak ekspor data lengkap dalam format terbuka jika berpindah vendor.
- [ ] **Lokasi dan keamanan penyimpanan data**: enkripsi, cadangan, kontrol akses, dan jejak audit.
- [ ] **SLA dukungan teknis**: waktu respons dan ketersediaan layanan (*uptime*).
- [ ] **Biaya total kepemilikan 3–5 tahun**: lisensi/langganan, server, SDM, pelatihan, kustomisasi.
- [ ] **Referensi pengguna sejenis**: kunjungi atau hubungi fasyankes dengan tipe dan ukuran serupa.
- [ ] **Uji coba (demo/trial)** pada alur kerja nyata sebelum kontrak.

---

## 11. Celah Informasi dan Cara Memverifikasinya

| Informasi yang belum pasti | Cara verifikasi yang disarankan |
|----------------------------|---------------------------------|
| Jumlah fasyankes per vendor RME | Ajukan permintaan informasi publik ke Kemenkes (Digital Transformation Office/Pusdatin), atau analisis daftar sistem RME di portal SATUSEHAT |
| Jumlah puskesmas pengguna ePuskesmas | Minta data ke Infokes, atau rekap per dinkes provinsi/kabupaten |
| Jumlah RS pengguna Khanza | Hubungi YASKI. Atau cocokkan dengan data SIRS Kemenkes jika tersedia |
| Harga terkini Assist.id dan ePuskesmas | Minta penawaran resmi (*quotation*) langsung ke vendor |
| Teks lengkap sanksi SE 1030/2023 dan regulasi turunan setelahnya | Baca dokumen asli di JDIH Kemenkes |
| Angka rinci preprint Medigo | Baca teks penuh arXiv 2512.05381 |

---

## 12. Daftar Sumber

> Catatan: sumber bertanda (†) tidak dapat saya buka langsung karena pembatasan jaringan. Isinya saya ambil dari cuplikan mesin pencari atas halaman tersebut.

### Regulasi dan Kemenkes
- (†) Kemenkes — [Fasyankes Wajib Terapkan Rekam Medis Elektronik](https://kemkes.go.id/id/fasyankes-wajib-terapkan-rekam-medis-elektronik)
- (†) Kemenkes — [Kemenkes Ajak Fasyankes Segera Lakukan Registrasi Rekam Medis Elektronik](https://www.kemkes.go.id/id/kemenkes-ajak-fasyankes-segera-lakukan-registrasi-rekam-medis-elektronik)
- (†) JDIH Kemenkes — [Permenkes No. 24 Tahun 2022 (PDF)](https://jdih.kemkes.go.id/common/dokumen/2022permenkes024.pdf)
- (†) JDIH Kemenkes — [SE No. HK.02.01/MENKES/1030/2023 tentang Penyelenggaraan RME di Fasyankes serta Penerapan Sanksi Administratif (PDF)](https://jdih.kemkes.go.id/common/dokumen/SE%20No.%20HK.02.01-MENKES-1030-2023%20ttg%20Penyelenggaraan%20Rekam%20Medis%20Elektronik%20di%20Fasyankes%20Serta%20Penerapan%20Sanksi%20Administratif-signed.pdf)
- Baker McKenzie — [Indonesia: New medical records regulation — what's new?](https://insightplus.bakermckenzie.com/bm/healthcare-life-sciences/indonesia-new-medical-records-regulation-whats-new)
- (†) Kemenkes/Sehat Negeriku — [Begini Cara Terintegrasi ke SATUSEHAT bagi Fasyankes dan Penyedia RME (4 Sept 2023)](https://sehatnegeriku.kemkes.go.id/baca/rilis-media/20230904/5843785/begini-cara-terintegrasi-ke-satusehat-bagi-fasyankes-dan-penyedia-rekam-medis-elektronik)
- (†) Kemenkes/Sehat Negeriku — [Kemenkes Resmi Luncurkan Rekam Medis Elektronik Terintegrasi SATUSEHAT (11 Nov 2023)](https://sehatnegeriku.kemkes.go.id/baca/rilis-media/20231111/2044243/kemenkes-resmi-luncurkan-rekam-medis-elektronik-terintegrasi-satusehat/)
- (†) Kemenkes — [Kemenkes Luncurkan SATUSEHAT RME, Rekam Medis Pasien Terintegrasi Secara Nasional](https://www.kemkes.go.id/id/kemenkes-luncurkan-satusehat-rme-rekam-medis-pasien-terintegrasi-secara-nasional)
- CNBC Indonesia — [Berobat Tak Perlu Lagi Bawa Berkas, Sekarang Ada SATUSEHAT RME (1 Sept 2026)](https://www.cnbcindonesia.com/lifestyle/20260901115240-33-763946/berobat-tak-perlu-lagi-bawa-berkas-sekarang-ada-satusehat-rme)
- Prohealth — [SATUSEHAT RME Diluncurkan, Rekam Medis Pasien Terintegrasi Secara Nasional](https://prohealth.id/satusehat-rme-diluncurkan-rekam-medis-pasien-terintegrasi-secara-nasional/)
- (†) Kemenkes — [Dashboard Puskesmas](https://kemkes.go.id/eng/dashboard-puskesmas)
- (†) Kemenkes — [Digitalisasi Permudah Akses Layanan Kesehatan Primer (ASIK)](https://www.kemkes.go.id/id/digitalisasi-permudah-akses-layanan-kesehatan-primer)
- (†) Kemenkes Keslan — [Mengenai Aplikasi SIM GOS Versi 2](https://keslan.kemkes.go.id/Video/detail_video/V1k3NTloNmxyQ1I3ZnNnbnlIRmhPZz09)

### ePuskesmas / Infokes
- (†) Infokes — [About Infokes Indonesia](https://infokes.co.id/?lang=en)
- (†) Infokes — [Berita integrasi ePuskesmas dengan PCare BPJS dan SATUSEHAT](https://www.infokes.co.id/?p=28131)
- (†) Infokes — [Puskesmas se-Kota Pekanbaru Sepakat Gunakan ePuskesmas](https://infokes.co.id/?p=27627)
- (†) Infokes — [Kategori berita ePuskesmas](https://infokes.co.id/category/epuskesmas-en)
- Dicoding Jobs — [Profil Infokes Indonesia](https://jobs.dicoding.com/infokes-indonesia)
- Kalibrr — [PT Infokes Indonesia](https://www.kalibrr.com/c/pt-infokes-indonesia/jobs)
- Crunchbase — [Infokes Company Profile](https://www.crunchbase.com/organization/infokes)
- TheOrg — [PT Infokes Indonesia](https://theorg.com/org/infokes)
- JPNN — [Infokes Hadirkan Aplikasi Rekam Medis Elektronik eClinic Leap](https://www.jpnn.com/news/infokes-hadirkan-aplikasi-rekam-medis-elektronik-eclinic-leap)
- Pemkot Samarinda (Puskesmas Bukuan) — [Dokumen MoU (PDF)](https://pkm-bukuan.samarindakota.go.id/upload/documents/bukuan/2025-09/16/mou-bpjs-z4TaL.pdf)
- Politeknik Negeri Jember — [Evaluasi Penerapan E-Puskesmas Next Generation Rawat Jalan Menggunakan Metode Hot-Fit di Puskesmas Kedungsari Mojokerto](https://sipora.polije.ac.id/37029/)
- INOHIM (Univ. Esa Unggul) — [Studi penerapan ePuskesmas (Babelan I) (PDF)](https://inohim.esaunggul.ac.id/index.php/INO/article/download/524/264)
- Jurnal Univ. Malahayati — [Evaluasi Penerapan Sistem Informasi e-Puskesmas dengan Model HOT-FIT di Puskesmas Roworejo](https://ejurnalmalahayati.ac.id/index.php/kesehatan/article/view/25584)

### Assist.id
- (†) Assist.id — [6.000+ Faskes Telah Memilih Assist.id](https://blog.assist.id/mengapa-6-000-faskes-memilih-assist-id-bukan-sekadar-angka-ini-alasannya/)
- (†) Assist.id — [Pilih RME yang Terintegrasi Satu Sehat Seperti Assist.id](https://blog.assist.id/pilih-rme-yang-terintegrasi-satu-sehat/)
- (†) Assist.id — [Membawa Puskesmas Era Digital dengan Sistem RME Assist.id](https://blog.assist.id/untitled-5/)
- (†) Assist.id — [Tentang Kami](https://assist.id/tentang-kami) · [Produk](https://assist.id/produk) · [Warehouse & Manajemen Stok](https://assist.id/produk/warehouse)
- Kontan (Okt 2019) — [Assist.id Tawarkan Kemudahan Memanajemen Klinik Kesehatan](https://industri.kontan.co.id/news/assistid-tawarkan-kemudahan-memanajemen-klinik-kesehatan)
- Republika (kanal *cari*, bersifat advertorial) — [Revolusi Sunyi di Ruang Praktik: … Assist.id Ubah Wajah Lebih dari 6.000 Klinik](https://cari.republika.co.id/posts/698884/revolusi-sunyi-di-ruang-praktik-mengungkap-bagaimana-assist-id-ubah-wajah-lebih-dari-6-000-klinik-di-indonesia)
- Kalibrr — [PT Teknologi Media Medika (Assist.id)](https://www.kalibrr.com/id-ID/c/pt-teknologi-media-medika-assist-id/jobs)
- Kitalulus — [Profil Assist.id](https://kitalulus.com/company/asisst-id-0imi)
- HashMicro — [Ulasan aplikasi klinik](https://www.hashmicro.com/id/blog/aplikasi-klinik/)

### SIMRS Khanza
- GitHub — [mas-elkhanza/SIMRS-Khanza](https://github.com/mas-elkhanza/SIMRS-Khanza) (README dan statistik diperiksa 19 Nov 2026)
- GitHub — [pangkrek/sinkronkhanza (alat sinkronisasi struktur DB MySQL/MariaDB untuk Khanza)](https://github.com/pangkrek/sinkronkhanza)
- Wikipedia — [Aladdin Free Public License](https://en.wikipedia.org/wiki/Aladdin_Free_Public_License)
- SlideShare — [Electronic Health Records (2021)](https://www.slideshare.net/slideshow/ehr-for-nursing-2021/250239875)
- Universitas Muhammadiyah Yogyakarta — [Tesis, Bab I (PDF)](https://etd.umy.ac.id/id/eprint/6179/4/Bab%20I.pdf)
- UGM — [Adopsi Produk Free/Open Source Software di Industri Jasa Pelayanan Kesehatan: Studi pada Institusi Pengguna SIMRS Khanza](https://etd.repository.ugm.ac.id/penelitian/detail/158193)
- UGM — [Studi variabel dan metadata SIMRS Khanza, RSUD dr. Soedirman Kebumen](https://etd.repository.ugm.ac.id/penelitian/detail/282658)
- ResearchGate — [Evaluasi SIMRS Khanza: Metode HOT FIT di Instalasi Rawat Jalan RSUD Bahteramas Tahun 2024](https://www.researchgate.net/publication/387061664_Evaluasi_Sistem_Informasi_Manajemen_Rumah_Sakit_SIMRS_Khanza_Metode_HOT_FIT_di_Instalasi_Rawat_Jalan_RSUD_Bahteramas_Tahun_2024)
- Journal Univ. Awal Bros — [Evaluasi kepuasan pengguna SIMRS Khanza (EUCS)](https://journal.univawalbros.ac.id/index.php/jham/article/view/916)
- MedMinutes (blog vendor pesaing, kemungkinan bias) — [TCO SIMRS 5 Tahun: Kapan Khanza Cukup dan Kapan RS Butuh Vendor Berbayar](https://medminutes.io/blog/tco-simrs-5-tahun-khanza-vs-vendor-berbayar-rs-tipe-b-c/)

### Kandidat lain dan konteks pasar
- (†) arXiv — [Deadline-Chasing in Digital Health: Modeling EMR Adoption Dynamics and Regulatory Impact in Indonesian Primary Care (2512.05381)](https://arxiv.org/abs/2512.05381)
- MyKlinik — [Situs resmi](https://myklinik.id/)
- Jurnal Cerdika — [Studi penerapan MyKlinik di KITA Clinic Cikupa (PDF)](https://cerdika.publikasiindonesia.id/index.php/cerdika/article/download/2162/1136/7477)
- eHealth.co.id — [Situs resmi](https://ehealth.co.id/)
- Qoo10 — [RME Terhubung SATUSEHAT untuk Praktik Mandiri, Biayanya Mulai Rp 37.500](https://www.qoo10.co.id/kesehatan/502198/rme-satusehat-praktik-mandiri-ehealth-lite/)
- Suara.com — [Klinik Pintar Pererat Kerja Sama dengan PB IDI (2022)](https://www.suara.com/pressrelease/2022/10/28/125001/klinik-pintar-pererat-kerja-sama-dengan-pb-idi-untuk-tingkatkan-adopsi-rekam-medis-elektronik)
- Ken Research — [Indonesia Telemedicine Market Report](https://www.kenresearch.com/industry-reports/indonesia-telemedicine-market)

---

*Laporan ini disusun dari sumber publik per 19 November 2026. Angka pengguna sebagian besar adalah klaim vendor dan dapat berubah. Untuk keputusan pengadaan, verifikasi langsung ke vendor, dinas kesehatan, dan portal SATUSEHAT Kemenkes.*
