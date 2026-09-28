# 🐛 DEBUG QUEST: MISI PERBAIKAN PROGRAM

**Lembar Kerja Peserta Didik (LKPD) Berbasis Game — Interaktif**

Materi: **Debugging, Refactoring, dan Etika AI**  
Konteks: **Perulangan (Loop) dan Pola (Pattern)**  
Kelas: **VIII / Fase D — Kurikulum Merdeka**  
Usia target: **13–14 tahun**

---

## 1. Deskripsi Proyek

**DEBUG QUEST** adalah aplikasi web statis berbentuk **LKPD (Lembar Kerja Peserta Didik)** yang dikemas sebagai **permainan edukatif**. Aplikasi ini membantu murid memahami materi *Debugging, Refactoring, dan Etika AI* melalui 8 level misi interaktif, dengan **Perulangan** dan **Pola** sebagai konteks latihan.

Aplikasi ini **100% offline-ready** (tanpa backend), dapat dijalankan hanya dengan membuka `index.html` di browser, dan dapat di-deploy gratis ke GitHub Pages.

### Gagasan Besar

> "Program yang dapat berjalan belum tentu merupakan program yang baik. AI dapat membantu proses memperbaiki, tetapi keputusan akhir tetap harus berasal dari pemahaman dan pertimbangan murid."

---

## 2. Fitur Lengkap

### 🎮 Gameplay
- **8 level misi** berjenjang: Pola & Perulangan → Pemburu Bug → Pelacak Perulangan → Stasiun Sortir → Lab Refactoring → Dilema Etika AI → Bos Terakhir → Laporan & Refleksi
- **Sistem XP, bintang (1–3), dan 8 lencana (badge)**
- **Progress bar** XP: 0 / 1200, Level: 0 / 8
- **Animasi konfeti** saat menyelesaikan level dan saat kemenangan
- **Efek suara** dibuat dengan Web Audio API (tanpa file MP3)

### 🌐 Dwibahasa (Bilingual)
- Mode **ID+EN (default)**: istilah Inggris + arti Indonesia dalam tanda kurung
- Mode **ID saja** dan **EN saja**
- **Tooltip kamus istilah** otomatis saat hover/tap

### 💾 Penyimpanan
- **Autosave ke localStorage** setiap 3 detik
- Indikator **"Tersimpan ✓"** berkedip di header
- Tombol **"Lanjutkan Permainan"** jika ada save data
- Tombol **"Reset Progres"** dengan konfirmasi ganda (ketik `RESET`)

### 🎓 Laporan & Sertifikat
- **Level 8**: Log Debugging (tabel 6 kolom), Deklarasi Penggunaan AI (6 pernyataan), Pernyataan Tanggung Jawab, Refleksi Murid (10 pertanyaan), Checklist (7 item)
- **Sertifikat digital** yang bisa dicetak (`window.print()`) — dioptimalkan untuk kertas A4 landscape
- Tombol **"Unduh Jawaban (.txt)"** — untuk dikumpulkan ke guru
- Tombol **"Salin Ringkasan"** ke clipboard

### ♿ Aksesibilitas (UDL)
- Slider ukuran teks (80%–150%)
- Mode Kontras Tinggi (High Contrast Mode)
- Font Ramah Disleksia (Dyslexia-Friendly Font)
- Suara umpan balik (Sound Feedback)
- Text-to-Speech (baca soal dengan suara)
- Timer opsional per level (tidak memengaruhi skor)
- Toggle animasi
- Navigasi keyboard penuh + ARIA labels
- Menghormati `prefers-reduced-motion`

### 🛠️ Fitur Tambahan
- **Mode Guru (Teacher Mode)** — buka dengan `Ctrl + Shift + T` atau tap logo 5 kali
- **Papan Petunjuk (Hint System)** di setiap soal
- **Mode "Belajar Tanpa AI"** — toggle di peta misi
- **Glosarium interaktif** (16 istilah) dengan pencarian
- **Peta Konsep Visual** (HTML/CSS murni)
- **Easter egg** jika semua bintang 3

---

## 3. Cara Menjalankan Secara Lokal

1. Simpan keempat file (`index.html`, `style.css`, `script.js`, `README.md`) dalam **satu folder**.
2. **Klik dua kali `index.html`** — browser akan membuka aplikasi.
3. Aplikasi langsung berjalan. Tidak perlu install apa pun, tidak perlu internet (kecuali Google Fonts, tapi ada fallback lokal).

> **Catatan:** Jika ingin lebih rapi, jalankan dengan server lokal sederhana: `python -m http.server 8000`, lalu buka `http://localhost:8000`.

---

## 4. Cara Deploy ke GitHub Pages (GRATIS, PERMANEN)

### Persiapan
- Akun GitHub (gratis). Daftar di https://github.com
- 4 file yang sudah jadi

### LANGKAH 1 — Buat Repository
1. Login ke GitHub → klik **`+`** di pojok kanan atas → **New repository**
2. Nama: `lkpd-debug-quest` (huruf kecil, pakai tanda hubung)
3. Pilih **Public** (WAJIB)
4. **Jangan** centang "Add a README file"
5. Klik **Create repository**

### LANGKAH 2 — Unggah 4 File
1. Klik **"uploading an existing file"** (atau **Add file → Upload files**)
2. Seret keempat file ke area abu-abu
3. Tulis pesan commit: `Upload file LKPD Debug Quest`
4. Klik **Commit changes**

### LANGKAH 3 — Aktifkan GitHub Pages
1. Klik tab **Settings** → sidebar kiri **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` + `/ (root)`
4. Klik **Save**
5. Tunggu 1–3 menit, refresh. Muncul kotak hijau:
   *"Your site is live at https://USERNAME.github.io/lkpd-debug-quest/"*
6. **Klik link itu.** Game sudah online!

### LANGKAH 4 — Bagikan ke Murid
- Salin link `https://USERNAME.github.io/lkpd-debug-quest/`
- Bagikan lewat Google Classroom, WhatsApp, atau QR code
- Murid tinggal klik — langsung main di HP/laptop

### LANGKAH 5 — Ubah Isi Game Setelah Online
1. Buka repository di GitHub
2. Klik nama file (misalnya `script.js`)
3. Klik ikon **pensil** (✏️)
4. Edit → scroll ke bawah → **Commit changes**
5. Tunggu 1–2 menit, refresh website

---

## 5. Cara Deploy Alternatif (Netlify Drop)

1. Buka https://app.netlify.com/drop
2. **Seret folder** `lkpd-debug-quest` (berisi 4 file) ke area unggah
3. Tunggu 10–20 detik — langsung dapat link
4. Ganti nama di **Site settings → Change site name**
5. Selesai (disarankan daftar gratis agar link permanen)

---

## 6. Struktur File
