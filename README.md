# PustakaKu — Sistem Manajemen Perpustakaan Terintegrasi Smart Locker 24 Jam & QRIS

> **Tugas Besar Rekayasa Perangkat Lunak (RPL) — Semester 5**  
> **Nama Pengembang**: Rafli Ibrahim  
> **NIM**: 2247006516017  

---

## 📌 1. Latar Belakang & Analisis Kebutuhan

Layanan perpustakaan konvensional pada umumnya dibatasi oleh jam operasional loket layanan fisik (pukul 08.00 s/d 16.00 WIB). Keterbatasan ini menjadi kendala bagi mahasiswa dan masyarakat dengan mobilitas tinggi yang membutuhkan akses peminjaman atau pengambilan buku di luar jam kerja.

**PustakaKu** dikembangkan sebagai solusi perangkat lunak manajemen perpustakaan modern dengan mengintegrasikan:
1. **Smart Locker Mandiri 24 Jam**: Anggota perpustakaan dapat memesan buku melalui katalog daring (OPAC) dan mengambil buku kapan saja secara fleksibel di loker digital mandiri menggunakan scan **QR Code** atau **PIN darurat 6-digit**.
2. **Sistem Perhitungan Denda Otomatis & Kasir QRIS**: Denda keterlambatan buku terhitung otomatis sebesar **Rp 1.000,- / hari** dengan opsi pelunasan non-tunai langsung melalui QRIS atau tunai di meja loket saat pengembalian buku.
3. **Dual-Portal Terintegrasi**: Pemisahan portal layanan publik anggota (*Member*) dan meja sirkulasi staf (*Petugas/Admin*) dengan alur verifikasi (ACC/Tolak) permohonan pinjaman secara real-time.

---

## 🚀 2. Fitur Utama Sistem

### A. Portal Anggota Perpustakaan (`index.html` & `login.html`)
* **Autentikasi & Quick Login**: Login berbasis Nomor Anggota / NIM dan kata sandi, dilengkapi formulir pemulihan kata sandi mandiri (*Forgot Password*) dengan verifikasi nomor WhatsApp terdaftar.
* **Katalog Koleksi Real-Time (OPAC)**: Pencarian instan judul, penulis, rak buku, dan filter kategori dengan indikator stok ketersediaan fisik.
* **Pemesanan Buku (Booking Multi-Kanal)**:
  * Pengambilan di **Meja Loket Sirkulasi Lantai 1**.
  * Pengambilan di **Smart Locker Mandiri 24 Jam** (akses kapan saja tanpa antre).
* **Tiket Digital & Akses Smart Locker**: Menampilkan tiket booking resmi, status approval petugas, QR Code pembuka loker otomatis, dan 6 digit PIN cadangan.
* **Perpanjangan Pinjaman Mandiri (+7 Hari)**: Anggota dapat memperpanjang masa peminjaman secara mandiri sebanyak 1 kali sebelum masa berlaku habis.
* **Dashboard Keterlambatan & Denda**: Banner visual notifikasi denda keterlambatan, rincian hari terlambat, dan modal pelunasan non-tunai via **QRIS** dengan verifikasi instan.
* **Filter Status Pinjaman**: Filter tabs rapi (*Semua, Menunggu ACC, Siap Diambil, Dipinjam, Terlambat/Denda, Selesai*).

### B. Portal Meja Petugas Sirkulasi (`admin.html`)
* **Persetujuan Permohonan (ACC / Tolak)**: Petugas memeriksa stok fisik di rak sebelum menyetujui peminjaman untuk disiapkan di loket atau loker.
* **Meja Sirkulasi & Serah Terima Buku**:
  * Konfirmasi serah terima buku ke anggota.
  * Penerimaan pengembalian buku dengan pemulihan otomatis kuota stok.
  * Validasi kasir denda keterlambatan tunai jika anggota belum melunasi secara digital via QRIS.
* **Filter Sirkulasi Aktif**: Penyaringan status sirkulasi (*Siap Diambil, Sedang Dipinjam, Terlambat/Ada Denda*).
* **Kelola Inventaris Koleksi (CRUD)**:
  * Tambah judul koleksi baru lengkap dengan lokasi rak dan kuota stok.
  * Edit data buku dan validasi batas minimal stok tidak boleh lebih kecil dari eksemplar yang sedang dipinjam.
  * Hapus buku dengan proteksi keamanan (mencegah penghapusan jika eksemplar buku sedang aktif dipinjam).
  * Pencarian live search buku di meja inventaris.
* **Cetak Rekapitulasi Laporan Sirkulasi (Print / PDF)**:
  * Format dokumen resmi instansi Dinas Perpustakaan dan Kearsipan Daerah.
  * Rekap statistik transaksi, buku aktif dipinjam, buku selesai, dan total denda lunas terkumpul.
  * Dilengkapi lembar pengesahan tanda tangan Kepala Perpustakaan & Petugas Sirkulasi.

---

## 🛠️ 3. Arsitektur & Teknologi

* **Frontend**: HTML5 Semantik, Modern CSS3 (*CSS Variables, Flexbox, Grid, Clean UI Badges, Print-Media Specific Styles*).
* **Logic & Controller**: Vanilla JavaScript (ES6+) Modular tanpa dependensi eksternal berat (bebas *framework lock-in*).
* **State & Persistence**: `localStorage` Multi-Session Architecture:
  * `pk_members`: Basis data akun pengguna & petugas.
  * `pk_books`: Basis data inventaris koleksi buku & rak.
  * `pk_loans`: Catatan transaksi sirkulasi, status, tiket locker, dan denda.
  * `pk_current_member` & `pk_last_member`: Manajemen sesi autentikasi.
* **Desain Perangkat Lunak (UML)**:
  * File `USE CASE.drawio` (Diagram Use Case Aktor Member & Petugas).
  * File `Class.drawio` (Class Diagram Entitas Anggota, Buku, Sirkulasi, dan Denda).
  * File `UML SISTEM.drawio` (Activity & Sequence Diagram alur booking dan loker).

---

## 🔑 4. Kredensial Akun Uji Coba (Demo Testing)

Untuk mempermudah dosen penguji atau reviewer menguji seluruh use case sistem:

| Peran (Role) | Nomor Anggota / ID | Password | Skenario Demo yang Tersedia |
| :--- | :--- | :--- | :--- |
| **Anggota Utama** | `2205099` | `123` | **Ahmad Fikri** (Tersedia 1 buku terlambat denda Rp 3.000 siap bayar QRIS, 1 buku dipinjam siap uji perpanjang +7 hari, 1 buku siap ambil di Smart Locker 24 Jam dengan QR, dan 1 buku menunggu ACC). |
| **Anggota 2** | `2205011` | `123` | **Budi Santoso** (Akun anggota cadangan untuk pengujian booking baru). |
| **Anggota 3** | `2205034` | `123` | **Siti Rahmawati** (Akun anggota reguler). |
| **Petugas / Staf** | `PETUGAS-01` | `admin` | **Petugas Sirkulasi** (Akses dashboard admin, ACC/Tolak, terima pengembalian, kasir denda, CRUD buku, cetak laporan PDF). |

> *Catatan: Pada halaman login (`login.html`), tersedia tombol **Pilih Akun Instan (Quick Login)** untuk masuk dalam satu klik tanpa perlu mengetik manual.*

---

## 💻 5. Cara Menjalankan Aplikasi Secara Lokal

Aplikasi berbasis web murni (*client-side web application*) sehingga tidak memerlukan instalasi backend server atau database engine yang rumit:

1. **Clone atau Unduh Repositori**:
   ```bash
   git clone https://github.com/<username>/<repo-name>.git
   cd <repo-name>
   ```
2. **Jalankan Aplikasi**:
   * Cukup klik dua kali (*double click*) file **`login.html`** atau **`index.html`** di peramban web modern apa pun (Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, Safari).
   * Atau gunakan ekstensi **Live Server** di Visual Studio Code untuk pengalaman live reload.

---

## 📄 6. Struktur Berkas Repositori

```text
├── index.html          # Portal Anggota (Katalog OPAC, Pinjaman Saya, Tiket Smart Locker, Bayar QRIS)
├── admin.html          # Portal Petugas (ACC Booking, Meja Sirkulasi, CRUD Buku, Cetak Laporan PDF)
├── login.html          # Halaman Login Dual-Portal & Pemulihan Password Mandiri
├── app.js              # Business Logic, State Controller, Perhitungan Denda, & LocalStorage Handler
├── style.css           # Desain Antarmuka Responsif, Komponen UI, & Pengaturan Format Cetak Media Print
├── qr-locker.jpg       # Aset QR Code Mockup untuk Akses Smart Locker & Kasir QRIS
├── qrcode.jpeg         # Aset Visual Pendukung
├── Class.drawio        # Diagram Kelas (UML Class Diagram)
├── USE CASE.drawio     # Diagram Use Case Sistem Perpustakaan
├── UML SISTEM.drawio   # Diagram Alur & Sekuensial Sistem
├── .gitignore          # Konfigurasi Pengecualian Berkas Repositori Git
└── README.md           # Dokumentasi Akademik & Panduan Penggunaan Sistem
```

---

## 👨‍💻 7. Identitas Pengembang

* **Nama**: Rafli Ibrahim
* **NIM**: 2247006516017
* **Program Studi**: Informatika / Teknik Informatika
* **Mata Kuliah**: Rekayasa Perangkat Lunak (RPL)
* **Semester**: 5 (Lima)
* **Tahun Akademik**: 2026/2027

