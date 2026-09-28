/* =========================================================
   DEBUG QUEST — MISI PERBAIKAN PROGRAM
   LKPD Interaktif Informatika Kelas VIII / Fase D
   ========================================================= */
(function () {
  'use strict';

  /* ===== 1. KAMUS ISTILAH ===== */
  const KAMUS_ISTILAH = {
    "bug": "Kesalahan atau masalah pada program yang membuat hasil tidak sesuai tujuan.",
    "debugging": "Proses mencari, memahami, memperbaiki, dan menguji kembali bug.",
    "refactoring": "Merapikan struktur kode tanpa mengubah tujuan atau perilaku yang seharusnya.",
    "loop": "Instruksi yang dijalankan berulang kali (perulangan).",
    "pattern": "Keteraturan yang dapat dikenali pada urutan, bentuk, nilai, atau tindakan (pola).",
    "trace table": "Tabel untuk mengikuti perubahan nilai variabel dari satu langkah ke langkah berikutnya (tabel pelacakan).",
    "syntax error": "Kesalahan karena aturan penulisan bahasa pemrograman dilanggar (kesalahan sintaks).",
    "logic error": "Program berjalan tetapi hasilnya tidak sesuai tujuan (kesalahan logika).",
    "input": "Nilai masukan yang diberikan ke program.",
    "output": "Hasil yang dikeluarkan oleh program.",
    "computational thinking": "Cara berpikir memecahkan masalah secara terstruktur, termasuk memecah masalah dan mengenali pola.",
    "artificial intelligence": "Teknologi yang dapat membantu menghasilkan atau menganalisis informasi berdasarkan perintah dan data (kecerdasan buatan).",
    "declaration": "Catatan jujur tentang apakah dan bagaimana AI digunakan (deklarasi).",
    "testing": "Proses menjalankan atau memeriksa program untuk melihat apakah hasilnya sesuai tujuan (pengujian).",
    "reflection": "Kegiatan meninjau pengalaman belajar dan menjelaskan apa yang dipelajari (refleksi).",
    "variabel": "Tempat menyimpan nilai dalam program (variable).",
    "range": "Fungsi Python untuk membuat deret angka (range function).",
    "list": "Kumpulan data berurutan dalam program (list).",
    "indeks": "Nomor posisi data dalam list, dimulai dari 0 (index)."
  };

  const DAFTAR_GLOSARIUM = [
    { istilah: "Algoritma (Algorithm)", arti: "Urutan langkah untuk menyelesaikan masalah." },
    { istilah: "Bug", arti: "Kesalahan atau masalah pada program yang membuat hasil tidak sesuai tujuan." },
    { istilah: "Debugging", arti: "Proses mencari, memahami, memperbaiki, dan menguji kembali bug." },
    { istilah: "Refactoring", arti: "Merapikan struktur kode tanpa mengubah tujuan atau perilaku yang seharusnya." },
    { istilah: "Perulangan (Loop)", arti: "Instruksi yang dijalankan berulang kali." },
    { istilah: "Pola (Pattern)", arti: "Keteraturan yang dapat dikenali pada urutan, bentuk, nilai, atau tindakan." },
    { istilah: "Computational Thinking", arti: "Cara berpikir untuk memecahkan masalah dengan langkah terstruktur, termasuk memecah masalah dan mengenali pola." },
    { istilah: "AI (Artificial Intelligence)", arti: "Teknologi yang dapat membantu menghasilkan atau menganalisis informasi berdasarkan perintah dan data yang tersedia." },
    { istilah: "Deklarasi AI (AI Declaration)", arti: "Catatan jujur tentang apakah dan bagaimana AI digunakan." },
    { istilah: "Pengujian (Testing)", arti: "Proses menjalankan atau memeriksa program untuk melihat apakah hasilnya sesuai tujuan." },
    { istilah: "Refleksi (Reflection)", arti: "Kegiatan meninjau pengalaman belajar dan menjelaskan apa yang dipelajari." },
    { istilah: "Sintaks (Syntax)", arti: "Aturan penulisan bahasa pemrograman." },
    { istilah: "Sintaks Error (Syntax Error)", arti: "Kesalahan karena aturan penulisan bahasa pemrograman dilanggar." },
    { istilah: "Logika Error (Logic Error)", arti: "Program berjalan tetapi hasilnya tidak sesuai tujuan." },
    { istilah: "Trace Table", arti: "Tabel untuk mengikuti perubahan nilai variabel dari satu langkah ke langkah berikutnya." },
    { istilah: "Variabel (Variable)", arti: "Tempat menyimpan nilai dalam program." }
  ];

  /* ===== 2. DATA SOAL ===== */
  const SOAL_LEVEL1 = [
    { id:"L1-01", pertanyaan:"Perhatikan pola angka berikut: 2, 4, 6, 8, ... Angka berapakah yang muncul berikutnya?", pilihan:["9","10","12","14"], jawaban:1, pembahasan:"Pola ini bertambah dua setiap langkahnya (2 → 4 → 6 → 8), sehingga angka berikutnya adalah 10." },
    { id:"L1-02", pertanyaan:"Perhatikan pola bentuk: lingkaran – kotak – lingkaran – kotak – ... Bentuk apa yang muncul berikutnya?", pilihan:["Kotak","Lingkaran","Segitiga","Bintang"], jawaban:1, pembahasan:"Pola ini bergantian secara teratur. Setelah 'kotak' selalu muncul 'lingkaran'." },
    { id:"L1-03", pertanyaan:"Lampu lalu lintas berubah dengan urutan: Merah → Kuning → Hijau → ... Warna apa yang muncul setelah Hijau?", pilihan:["Kuning","Hijau","Merah","Biru"], jawaban:2, pembahasan:"Lampu lalu lintas memiliki pola berulang: Merah → Kuning → Hijau → Merah lagi." },
    { id:"L1-04", pertanyaan:"Jadwal piket kelas berulang setiap ...", pilihan:["Hari","Minggu","Bulan","Tahun"], jawaban:1, pembahasan:"Jadwal piket kelas adalah contoh pola dalam kehidupan sehari-hari yang berulang setiap minggu." },
    { id:"L1-05", pertanyaan:"Apa yang dimaksud dengan perulangan (loop)?", pilihan:["Instruksi yang dijalankan satu kali saja","Instruksi yang dijalankan berulang kali","Kesalahan pada program","Cara merapikan kode"], jawaban:1, pembahasan:"Perulangan (loop) adalah cara memberikan instruksi yang dilakukan berulang kali." },
    { id:"L1-06", pertanyaan:"Apa yang dimaksud dengan pola (pattern)?", pilihan:["Kesalahan yang muncul berkali-kali","Keteraturan yang dapat diamati pada urutan tindakan atau data","Perintah untuk mengulang","Nama variabel dalam program"], jawaban:1, pembahasan:"Pola adalah keteraturan yang dapat diamati pada urutan tindakan atau data." },
    { id:"L1-07", kode:"for i in range(1, 6):\n    print(i)", pertanyaan:"Perhatikan kode di atas. Angka apa saja yang akan ditampilkan?", pilihan:["1 2 3 4","1 2 3 4 5","0 1 2 3 4","1 2 3 4 5 6"], jawaban:1, pembahasan:"range(1, 6) menghasilkan nilai 1, 2, 3, 4, dan 5. Karena perintah print berada di dalam perulangan, satu perintah yang sama dijalankan beberapa kali dengan nilai i yang berubah." },
    { id:"L1-08", kode:"for i in range(1, 6):\n    print(i)", pertanyaan:"Pada kode di atas, berapa kali perintah print(i) dijalankan?", pilihan:["4 kali","5 kali","6 kali","1 kali"], jawaban:1, pembahasan:"Nilai i berjalan dari 1 sampai 5, sehingga print(i) dijalankan sebanyak 5 kali." },
    { id:"L1-09", pertanyaan:"Manakah yang merupakan contoh perulangan dalam kehidupan sehari-hari?", pilihan:["Menulis nama sendiri satu kali","Memutar lagu berikutnya dalam daftar putar sampai tidak ada lagu yang tersisa","Membaca judul buku","Menutup pintu"], jawaban:1, pembahasan:"Memutar lagu berikutnya dalam daftar putar sampai tidak ada lagu yang tersisa adalah contoh perulangan karena langkah yang sama dilakukan berulang kali." },
    { id:"L1-10", pertanyaan:"Pola perilaku program yang benar adalah: menerima input → memeriksa kondisi → melakukan aksi → ...", pilihan:["berhenti selamanya","mengulangi langkah","menghapus program","mematikan komputer"], jawaban:1, pembahasan:"Pola perilaku program: menerima input, memeriksa kondisi, melakukan aksi, lalu mengulangi langkah." }
  ];

  const SOAL_LEVEL2 = [
    { id:"L2-01", tujuan:"Program seharusnya menampilkan angka 1 sampai 5.", baris:["for i in range(1, 4):","    print(i)"], barisBug:0, jenis:"Kesalahan batas (Boundary Error)", pembahasan:"range(1, 4) hanya menghasilkan 1, 2, dan 3. Batas akhir belum tepat. Seharusnya range(1, 6) agar menghasilkan 1 sampai 5." },
    { id:"L2-02", tujuan:"Program seharusnya menampilkan angka 1 sampai 5.", baris:["for i in range(1, 5):","    print(i)"], barisBug:0, jenis:"Kesalahan batas (Boundary Error)", pembahasan:"Hasil yang keluar adalah 1 2 3 4. Nilai 5 belum muncul. Salah satu hal yang perlu diperiksa adalah batas pada range. Perbaikannya: range(1, 6)." },
    { id:"L2-03", tujuan:"Program seharusnya menampilkan semua angka dalam list: 1 2 3 4 5.", baris:["angka = [1, 2, 3, 4, 5]","","for i in range(0, 5):","    print(angka[i])"], barisBug:2, jenis:"Kesalahan batas (Boundary Error)", pembahasan:"range(0, 5) menghasilkan 0, 1, 2, 3, 4. Sebenarnya ini sudah menjangkau semua indeks, tetapi jika ditulis range(1, 5) maka angka pertama akan terlewat. Perhatikan nilai awal perulangan." },
    { id:"L2-04", tujuan:"Program seharusnya menampilkan angka 1 sampai 3.", baris:["for i in range(1, 4)","    print(i)"], barisBug:0, jenis:"Kesalahan sintaks (Syntax Error)", pembahasan:"Baris for diakhiri tanpa tanda titik dua (:). Aturan penulisan bahasa pemrograman dilanggar. Perbaikannya: for i in range(1, 4):" },
    { id:"L2-05", tujuan:"Program seharusnya menjumlahkan angka 1 sampai 4, sehingga hasil akhirnya 10.", baris:["total = 0","for i in range(1, 5):","    total = total - i","print(total)"], barisBug:2, jenis:"Kesalahan logika (Logic Error)", pembahasan:"Program berjalan tetapi hasilnya tidak sesuai tujuan. Seharusnya total = total + i (penjumlahan), bukan pengurangan." },
    { id:"L2-06", tujuan:"Program seharusnya menampilkan angka 1 sampai 5.", baris:["for i in range(1, 7):","    print(i)"], barisBug:0, jenis:"Kesalahan batas (Boundary Error)", pembahasan:"range(1, 7) menghasilkan 1 sampai 6. Program mengulang terlalu banyak. Seharusnya range(1, 6)." },
    { id:"L2-07", tujuan:"Program seharusnya menampilkan angka 1 sampai 5.", baris:["for i in range(0, 5):","    print(i)"], barisBug:0, jenis:"Kesalahan batas (Boundary Error)", pembahasan:"range(0, 5) menghasilkan 0, 1, 2, 3, 4. Angka 0 ikut tampil dan angka 5 tidak muncul. Nilai awal perulangan perlu diperiksa." },
    { id:"L2-08", tujuan:"Program seharusnya menampilkan semua nama dalam daftar satu per satu.", baris:["nama = [\"Ana\", \"Budi\", \"Citra\"]","","for i in range(1, 3):","    print(nama[i])"], barisBug:2, jenis:"Kesalahan batas (Boundary Error)", pembahasan:"range(1, 3) hanya menghasilkan 1 dan 2, sehingga nama[0] (Ana) terlewat. Seharusnya range(0, 3) agar semua data ditampilkan." }
  ];

  const SOAL_LEVEL3 = [
    { id:"L3-01", judul:"Tabel Pelacakan 1", kode:"for i in range(1, 6):\n    print(i)", kolom:["Putaran","Nilai i","Aksi","Hasil yang Diamati"],
      baris:[ {putaran:"1",i:"1",aksi:"print(i)",hasil:"1"}, {putaran:"2",i:"2",aksi:"print(i)",hasil:"2"}, {putaran:"3",i:"3",aksi:"print(i)",hasil:"3"}, {putaran:"4",i:"4",aksi:"print(i)",hasil:"4"}, {putaran:"5",i:"5",aksi:"print(i)",hasil:"5"} ],
      selKosong:["1:1","2:2","3:3","4:4","5:5","1:hasil","2:hasil","3:hasil","4:hasil","5:hasil"],
      pembahasan:"Nilai i berubah setiap putaran: 1, 2, 3, 4, 5. Karena print berada di dalam perulangan, hasil yang diamati sama dengan nilai i pada putaran itu." },
    { id:"L3-02", judul:"Tabel Pelacakan 2", kode:"total = 0\nfor i in range(1, 5):\n    total = total + i\nprint(total)", kolom:["Putaran","Nilai i","total = total + i","Nilai total Setelah Aksi"],
      baris:[ {putaran:"1",i:"1",aksi:"total = 0 + 1",hasil:"1"}, {putaran:"2",i:"2",aksi:"total = 1 + 2",hasil:"3"}, {putaran:"3",i:"3",aksi:"total = 3 + 3",hasil:"6"}, {putaran:"4",i:"4",aksi:"total = 6 + 4",hasil:"10"} ],
      selKosong:["1:hasil","2:hasil","3:hasil","4:hasil"],
      pembahasan:"total dimulai dari 0. Setiap putaran, nilai i ditambahkan ke total. Hasil akhirnya adalah 10. Perintah print(total) berada di luar perulangan, jadi hanya dijalankan sekali di akhir." }
  ];

  const KARTU_LEVEL4 = [
    { id:"K01", teks:"Hasil perulangan kurang satu angka.", kategori:"debugging" },
    { id:"K02", teks:"Nama variabel a, b, c diganti menjadi jumlah_siswa, nilai_ujian, rata_rata.", kategori:"refactoring" },
    { id:"K03", teks:"Program diperbaiki lalu nama variabel dirapikan.", kategori:"keduanya" },
    { id:"K04", teks:"Siswa mengubah kode berkali-kali tanpa menguji hasil.", kategori:"bukan" },
    { id:"K05", teks:"Membandingkan hasil yang diharapkan dengan hasil yang benar-benar terjadi.", kategori:"debugging" },
    { id:"K06", teks:"Mengurangi pengulangan kode yang tidak diperlukan agar lebih teratur.", kategori:"refactoring" },
    { id:"K07", teks:"Mengubah satu hal pada satu waktu lalu menjalankan ulang program.", kategori:"debugging" },
    { id:"K08", teks:"Membuat nama variabel dan langkah program lebih jelas tanpa mengubah tujuan.", kategori:"refactoring" },
    { id:"K09", teks:"Menebak-nebak penyebab bug tanpa membaca pesan kesalahan.", kategori:"bukan" },
    { id:"K10", teks:"Memperbaiki kondisi berhenti perulangan, kemudian merapikan struktur penulisannya.", kategori:"keduanya" }
  ];

  const SOAL_LEVEL5 = {
    tahapA: { kodeAsli:"x = 10\ny = 5\nz = x + y\nprint(z)",
      pemetaan:[ {variabel:"x", nilai:"10", jawabanBenar:"jumlah_buku"}, {variabel:"y", nilai:"5", jawabanBenar:"buku_dipinjam"}, {variabel:"z", nilai:"x + y", jawabanBenar:"sisa_buku"} ],
      pilihanNama:["jumlah_buku","buku_dipinjam","sisa_buku","total_siswa","nilai_ujian","rata_rata","a","b","c"],
      pembahasan:"Program tersebut dapat dibaca, tetapi nama x, y, dan z tidak menjelaskan maksud data. Nama yang lebih jelas membantu orang lain memahami program tanpa harus menebak maksud penulisnya." },
    tahapB: { pertanyaan:"Kode sudah rapi: jumlah_buku = 10, buku_dipinjam = 5, sisa_buku = jumlah_buku + buku_dipinjam. Apakah hasil program sudah sesuai tujuan?",
      pilihan:["Sudah benar, lanjut saja.","Perlu Debugging — ini kesalahan logika karena kata 'sisa' mengandaikan pengurangan, bukan penjumlahan."], jawaban:1,
      pembahasan:"Refactoring tidak boleh sekadar mengganti nama. Murid tetap harus memastikan makna dan hasil program benar. Bila hasil yang diharapkan berbeda dari kode, masalahnya masuk ke ranah debugging." },
    tahapC: { pertanyaan:"Pilih SEMUA yang termasuk prinsip refactoring untuk murid kelas 8.",
      pilihan:[
        {teks:"Gunakan nama variabel yang menjelaskan isi atau tujuan data.", benar:true},
        {teks:"Hindari komentar yang tidak benar hanya agar kode terlihat 'bagus'.", benar:true},
        {teks:"Kurangi pengulangan yang tidak diperlukan, tetapi jangan membuat kode lebih sulit dipahami.", benar:true},
        {teks:"Lakukan perubahan kecil-kecil dan uji kembali.", benar:true},
        {teks:"Simpan versi sebelum perubahan penting agar dapat kembali bila terjadi masalah.", benar:true},
        {teks:"Ubah semua nama variabel menjadi satu huruf agar kode lebih pendek.", benar:false},
        {teks:"Ubah perilaku program supaya terlihat lebih canggih.", benar:false}
      ],
      pembahasan:"Refactoring bertujuan meningkatkan kerapian dan keterbacaan struktur kode, bukan mengubah perilaku program." }
  };

  const SOAL_LEVEL6 = [
    { id:"L6-01", skenario:"Meminta AI menjelaskan arti pesan error dengan bahasa sederhana.", jawaban:"boleh", pembahasan:"AI dapat membantu memberikan petunjuk dan menjelaskan error. Murid tetap harus memahami masalahnya sendiri." },
    { id:"L6-02", skenario:"Meminta AI langsung memberikan kode final, lalu menyalinnya tanpa memeriksa.", jawaban:"tidak", pembahasan:"Ketika penggunaan AI membuat tugas berubah menjadi sekadar menyalin, murid harus berhenti dan memeriksa. Murid tetap perlu memahami masalah, memeriksa saran, menguji kode, dan dapat menjelaskan hasil pekerjaannya." },
    { id:"L6-03", skenario:"Meminta AI memberikan tiga pertanyaan pemandu agar kamu dapat menemukan bug sendiri.", jawaban:"boleh", pembahasan:"Ini adalah contoh prompt AI yang mendukung berpikir. Murid tetap melakukan analisis dan pengujian." },
    { id:"L6-04", skenario:"Menggunakan saran AI yang kamu sendiri tidak dapat menjelaskannya.", jawaban:"tidak", pembahasan:"Ketika AI memberi kode yang murid tidak dapat jelaskan, murid harus berhenti dan memeriksa." },
    { id:"L6-05", skenario:"Meminta AI menunjukkan bagian kode yang perlu diperiksa, bukan langsung meminta jawaban akhir.", jawaban:"boleh", pembahasan:"AI dapat membantu menunjukkan bagian kode yang perlu diperiksa. Murid tetap mencari dan membuktikan penyebabnya." },
    { id:"L6-06", skenario:"Memakai jawaban AI yang membuat asumsi yang tidak ada dalam soal, tanpa memeriksa ulang.", jawaban:"tidak", pembahasan:"Ketika AI membuat asumsi yang tidak ada dalam soal, murid harus berhenti dan memeriksa." },
    { id:"L6-07", skenario:"Meminta AI membuat contoh pengujian (testing) untuk menguji programmu.", jawaban:"boleh", pembahasan:"AI dapat membantu meminta contoh pengujian untuk menguji program. Pengujian tetap dilakukan oleh murid." },
    { id:"L6-08", skenario:"Mencatat penggunaan AI pada lembar deklarasi setelah tugas selesai.", jawaban:"boleh", pembahasan:"Deklarasi bukan hukuman. Deklarasi adalah catatan transparan agar guru dan murid dapat mengetahui bagaimana alat AI digunakan selama proses belajar." }
  ];

  const SOAL_LEVEL7 = {
    kodeAwal:"angka = [1, 2, 3, 4, 5]\n\nfor i in range(1, 5):\n    print(angka[i])",
    tujuan:"Program seharusnya menampilkan semua angka dalam list: 1 2 3 4 5",
    hasilAktual:"2 3 4 5",
    langkah:[
      { pertanyaan:"Langkah 1 — Perbaiki batas perulangan (range). Pilih yang benar:", pilihan:["range(1, 5)","range(1, 6)","range(0, 5)","range(0, 6)"], jawaban:1, pembahasan:"range(1, 6) menghasilkan indeks 1 sampai 5. Namun kita juga perlu memeriksa indeks yang dipakai." },
      { pertanyaan:"Langkah 2 — Perbaiki indeks list. Pilih yang benar:", pilihan:["angka[i]","angka[i-1]","angka[i+1]","angka[0]"], jawaban:1, pembahasan:"Indeks list dimulai dari 0. Karena i dimulai dari 1, maka angka[i-1] akan mengambil angka[0], angka[1], dan seterusnya. Alternatif lain: gunakan range(0, 5) dengan angka[i]." },
      { pertanyaan:"Langkah 3 — Tuliskan hasil akhir yang benar (pisahkan dengan spasi):", tipe:"isian", jawaban:"1 2 3 4 5", pembahasan:"Setelah kedua perbaikan dilakukan dan diuji, program menampilkan seluruh data: 1 2 3 4 5." }
    ],
    refleksiBos:"Berapa banyak bug yang kamu temukan? Apa bedanya mengubah kode karena tebakan dengan mengubah kode karena bukti?"
  };

  const REFLEKSI_PERTANYAAN = [
    "Bug apa yang paling sulit saya temukan? Mengapa?",
    "Bagaimana saya mengetahui bahwa perbaikan saya benar?",
    "Apa yang berubah setelah saya melakukan refactoring?",
    "Bagaimana saya menggunakan pola atau perulangan untuk memahami masalah?",
    "Apa manfaat AI dalam proses saya?",
    "Apa risiko jika saya langsung menyalin jawaban AI tanpa memeriksa?",
    "Bagian mana yang sekarang dapat saya lakukan tanpa bantuan?",
    "Apa satu kebiasaan debugging yang akan saya gunakan pada tugas berikutnya?",
    "Apa perbedaan debugging dan refactoring menurut pemahaman saya sendiri?",
    "Apa yang saya pelajari dari kesalahan yang saya temukan hari ini?"
  ];

  const CHECKLIST_ITEM = [
    "Saya memahami tujuan program.",
    "Saya mencatat bug yang ditemukan.",
    "Saya menguji perbaikan.",
    "Saya melakukan refactoring secara hati-hati.",
    "Saya dapat menjelaskan hasil program.",
    "Saya mencatat penggunaan AI bila digunakan.",
    "Saya sudah melakukan refleksi."
  ];

  const BADGE_INFO = {
    1:{ikon:"🧭", nama:"Penjelajah Pola (Pattern Explorer)"},
    2:{ikon:"🐛", nama:"Pemburu Bug (Bug Hunter)"},
    3:{ikon:"🔍", nama:"Detektif Jejak (Trace Detective)"},
    4:{ikon:"🗂️", nama:"Ahli Sortir (Sorting Master)"},
    5:{ikon:"✨", nama:"Perapian Kode (Code Tidy)"},
    6:{ikon:"⚖️", nama:"Penjaga Etika (Ethics Guardian)"},
    7:{ikon:"👑", nama:"Penakluk Bug (Bug Slayer)"},
    8:{ikon:"📜", nama:"Reflektor (Reflector)"}
  };

  const XP_PER_LEVEL = { 1:100, 2:150, 3:150, 4:150, 5:150, 6:200, 7:250, 8:100 };
  const NAMA_LEVEL = {
    1:{id:"Pola & Perulangan", en:"Pattern Pulse", ikon:"🧭"},
    2:{id:"Pemburu Bug", en:"Bug Hunter", ikon:"🐛"},
    3:{id:"Pelacak Perulangan", en:"Trace Runner", ikon:"🔍"},
    4:{id:"Stasiun Sortir", en:"Sorting Station", ikon:"🗂️"},
    5:{id:"Lab Refactoring", en:"Refactor Lab", ikon:"✨"},
    6:{id:"Dilema Etika AI", en:"AI Ethics Dilemma", ikon:"⚖️"},
    7:{id:"Bos Terakhir", en:"Final Boss", ikon:"👑"},
    8:{id:"Laporan & Refleksi", en:"Report & Reflection", ikon:"📜"}
  };

  /* ===== 3. STATE GAME ===== */
  const SAVE_KEY = "debugquest_save_v1";
  const TOTAL_XP_MAKS = 1200;

  const state = {
    nama:"", kelas:"", bahasa:"ID+EN",
    xp:0, levelTerbuka:1, levelSelesai:{}, bintang:{},
    jawaban:{}, // jawaban per level
    level8: { log:[], deklarasi:{}, refleksi:[], checklist:[] },
    pengaturan: { ukuranTeks:100, kontras:false, disleksia:false, suara:false, tts:false, timer:false, animasi:true },
    tanpaAI:false
  };

  let audioCtx = null;

  /* ===== 4. MANAJEMEN LAYAR ===== */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function tampilkanLayar(id) {
    $$('.layar').forEach(s => { s.hidden = (s.id !== id); });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id === 'layar-peta') renderPeta();
    if (id === 'layar-glosarium') renderGlosarium();
    if (id === 'layar-peta-konsep') renderPetaKonsep();
    if (id === 'layar-guru') renderGuru();
    if (id === 'layar-level8') renderLevel8();
    if (id === 'layar-sertifikat') renderSertifikat();
  }

  /* ===== 5. LOGIKA LEVEL 1–7 ===== */

  /* --- LEVEL 1 --- */
  const L1 = { idx:0, benar:0, dijawab:[] };
  function renderLevel1() {
    tampilkanLayar('layar-level1');
    L1.idx = 0; L1.benar = 0; L1.dijawab = [];
    gambarSoal1();
  }
  function gambarSoal1() {
    const soal = SOAL_LEVEL1[L1.idx];
    $('#l1-progress').textContent = `Soal ${L1.idx+1} / ${SOAL_LEVEL1.length}`;
    $('#l1-score').textContent = `Skor: ${L1.benar}`;
    renderDots('#l1-dots', SOAL_LEVEL1.length, L1.dijawab);
    let html = `<div class="soal-text">${escapeHTML(soal.pertanyaan)}</div>`;
    if (soal.kode) html += `<div class="blok-kode">${highlightKode(soal.kode)}</div>`;
    html += `<div class="pilihan-list">`;
    soal.pilihan.forEach((p,i) => {
      html += `<button class="pilihan" data-i="${i}">${String.fromCharCode(65+i)}. ${escapeHTML(p)}</button>`;
    });
    html += `</div>`;
    $('#l1-card').innerHTML = html;
    $('#l1-feedback').hidden = true;
    $$('#l1-card .pilihan').forEach(btn => btn.addEventListener('click', () => jawab1(parseInt(btn.dataset.i,10))));
  }
  function jawab1(i) {
    const soal = SOAL_LEVEL1[L1.idx];
    const benar = i === soal.jawaban;
    L1.dijawab.push(benar ? 'benar' : 'salah');
    if (benar) { L1.benar++; playSound('benar'); } else { playSound('salah'); }
    $$('#l1-card .pilihan').forEach((b,idx) => {
      b.disabled = true;
      if (idx === soal.jawaban) b.classList.add('benar');
      else if (idx === i && !benar) b.classList.add('salah');
    });
    tampilkanFeedback('#l1-feedback', benar, soal.pembahasan, () => {
      L1.idx++;
      if (L1.idx >= SOAL_LEVEL1.length) selesaikanLevel(1, L1.benar, SOAL_LEVEL1.length);
      else gambarSoal1();
    });
    $('#l1-score').textContent = `Skor: ${L1.benar}`;
    renderDots('#l1-dots', SOAL_LEVEL1.length, L1.dijawab);
  }

  /* --- LEVEL 2 --- */
  const L2 = { idx:0, benar:0, dijawab:[] };
  function renderLevel2() {
    tampilkanLayar('layar-level2');
    L2.idx = 0; L2.benar = 0; L2.dijawab = [];
    gambarSoal2();
  }
  function gambarSoal2() {
    const soal = SOAL_LEVEL2[L2.idx];
    $('#l2-progress').textContent = `Soal ${L2.idx+1} / ${SOAL_LEVEL2.length}`;
    $('#l2-score').textContent = `Skor: ${L2.benar}`;
    renderDots('#l2-dots', SOAL_LEVEL2.length, L2.dijawab);
    let html = `<div class="soal-text"><strong>Tujuan (Goal):</strong> ${escapeHTML(soal.tujuan)}</div>`;
    html += `<p class="muted">Klik baris yang menurutmu mengandung bug (Click the line you think contains the bug).</p>`;
    html += `<div class="blok-kode" style="white-space:normal">`;
    soal.baris.forEach((b,i) => {
      html += `<div class="kode-baris" data-i="${i}"><span class="ln">${i+1}</span>${highlightKode(b) || '&nbsp;'}</div>`;
    });
    html += `</div>`;
    html += `<div class="form-actions"><button id="l2-hint" class="btn btn-secondary btn-sm">💡 PETUNJUK (Hint)</button></div>`;
    html += `<div id="l2-hint-box" class="muted" style="margin-top:.6rem;font-size:.85rem" hidden>
      <strong>3 Pertanyaan Dasar Debugging (3 Basic Debugging Questions):</strong>
      <ol><li>Apa yang seharusnya terjadi?</li><li>Apa yang sebenarnya terjadi?</li><li>Bagian mana yang dapat menjelaskan perbedaan antara keduanya?</li></ol>
    </div>`;
    $('#l2-card').innerHTML = html;
    $('#l2-feedback').hidden = true;
    $$('#l2-card .kode-baris').forEach(el => el.addEventListener('click', () => jawab2(parseInt(el.dataset.i,10))));
    $('#l2-hint').addEventListener('click', () => { $('#l2-hint-box').hidden = false; });
  }
  function jawab2(i) {
    const soal = SOAL_LEVEL2[L2.idx];
    const benar = i === soal.barisBug;
    L2.dijawab.push(benar ? 'benar' : 'salah');
    if (benar) { L2.benar++; playSound('benar'); } else { playSound('salah'); }
    $$('#l2-card .kode-baris').forEach((el,idx) => {
      el.style.pointerEvents = 'none';
      if (idx === soal.barisBug) el.classList.add('benar');
      else if (idx === i && !benar) el.classList.add('salah');
    });
    const pesan = `<strong>Jenis Kesalahan (Error Type):</strong> ${escapeHTML(soal.jenis)}<br/><br/>${escapeHTML(soal.pembahasan)}`;
    tampilkanFeedback('#l2-feedback', benar, pesan, () => {
      L2.idx++;
      if (L2.idx >= SOAL_LEVEL2.length) selesaikanLevel(2, L2.benar, SOAL_LEVEL2.length);
      else gambarSoal2();
    }, true);
    $('#l2-score').textContent = `Skor: ${L2.benar}`;
    renderDots('#l2-dots', SOAL_LEVEL2.length, L2.dijawab);
  }

  /* --- LEVEL 3 --- */
  const L3 = { idx:0, benar:0, total:0 };
  function renderLevel3() {
    tampilkanLayar('layar-level3');
    L3.idx = 0; L3.benar = 0; L3.total = 0;
    gambarSoal3();
  }
  function gambarSoal3() {
    const soal = SOAL_LEVEL3[L3.idx];
    $('#l3-progress').textContent = `Tabel ${L3.idx+1} / ${SOAL_LEVEL3.length}`;
    let html = `<h3>${escapeHTML(soal.judul)}</h3>`;
    html += `<div class="blok-kode">${highlightKode(soal.kode)}</div>`;
    html += `<p class="muted">Isi sel kosong di bawah ini. Untuk kolom "Hasil yang Diamati" / "Nilai total Setelah Aksi", isi dengan angka.</p>`;
    html += `<div class="trace-wrap"><table class="trace-table" id="l3-tabel"><thead><tr>`;
    soal.kolom.forEach(k => { html += `<th>${escapeHTML(k)}</th>`; });
    html += `</tr></thead><tbody>`;
    soal.baris.forEach((row, ri) => {
      html += `<tr>`;
      const cells = ["putaran","i","aksi","hasil"];
      cells.forEach((c) => {
        const key = `${row.putaran}:${c}`;
        const perluIsi = soal.selKosong.includes(key);
        if (perluIsi) {
          html += `<td data-putaran="${row.putaran}" data-kolom="${c}" data-benar="${escapeHTML(row[c])}"><input type="text" inputmode="numeric" /></td>`;
        } else {
          html += `<td>${escapeHTML(row[c])}</td>`;
        }
      });
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    html += `<div class="form-actions"><button id="l3-cek" class="btn btn-primary">PERIKSA TABEL (Check Table)</button></div>`;
    html += `<div id="l3-feedback" class="feedback" hidden></div>`;
    $('#l3-card').innerHTML = html;
    $('#l3-cek').addEventListener('click', cekLevel3);
  }
  function cekLevel3() {
    const soal = SOAL_LEVEL3[L3.idx];
    let semua = true, jumlahSel = 0, benarSel = 0;
    $$('#l3-tabel td[data-benar]').forEach(td => {
      const inp = td.querySelector('input');
      const val = (inp.value || '').trim();
      const benar = val === td.dataset.benar;
      td.classList.remove('benar','salah');
      td.classList.add(benar ? 'benar' : 'salah');
      jumlahSel++;
      if (benar) benarSel++;
      else semua = false;
    });
    L3.benar += benarSel;
    L3.total += jumlahSel;
    const fb = $('#l3-feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (semua ? 'ok' : 'no');
    fb.innerHTML = `<div class="fb-head">${semua ? '✅' : '❌'} ${semua ? 'Tabel benar!' : 'Belum semua benar'}</div>
      <div class="fb-body">Sel benar: <strong>${benarSel} / ${jumlahSel}</strong><br/><br/>${escapeHTML(soal.pembahasan)}</div>
      <div class="form-actions"><button id="l3-lanjut" class="btn btn-primary">${L3.idx+1 >= SOAL_LEVEL3.length ? 'SELESAI (Finish)' : 'LANJUT (Next)'}</button></div>`;
    $('#l3-lanjut').addEventListener('click', () => {
      L3.idx++;
      if (L3.idx >= SOAL_LEVEL3.length) selesaikanLevel(3, L3.benar, L3.total);
      else gambarSoal3();
    });
    if (semua) playSound('benar'); else playSound('salah');
  }

  /* --- LEVEL 4 --- */
  const L4 = { penempatan:{}, terpilih:null };
  const KATEGORI_L4 = [
    { id:"debugging", label:"Debugging" },
    { id:"refactoring", label:"Refactoring" },
    { id:"keduanya", label:"Keduanya (Both)" },
    { id:"bukan", label:"Bukan Keduanya (Neither)" }
  ];
  function renderLevel4() {
    tampilkanLayar('layar-level4');
    L4.penempatan = {}; L4.terpilih = null;
    let html = '';
    KARTU_LEVEL4.forEach(k => {
      html += `<div class="kartu-soal" draggable="true" data-id="${k.id}" id="kartu-${k.id}">${escapeHTML(k.teks)}</div>`;
    });
    $('#l4-pool').innerHTML = html;
    let bhtml = '';
    KATEGORI_L4.forEach(k => {
      bhtml += `<div class="keranjang" data-kat="${k.id}"><h4>${escapeHTML(k.label)}</h4><div class="isi" id="isi-${k.id}"></div></div>`;
    });
    $('#l4-baskets').innerHTML = bhtml;
    setupDragDrop();
    $('#l4-feedback').hidden = true;
    $('#btn-l4-cek').onclick = cekLevel4;
  }
  function setupDragDrop() {
    const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
    $$('#l4-pool .kartu-soal').forEach(kartu => {
      kartu.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', kartu.id); });
      kartu.addEventListener('click', () => {
        if (!isTouch) return;
        $$('.kartu-soal').forEach(k => k.classList.remove('terpilih'));
        kartu.classList.add('terpilih');
        L4.terpilih = kartu.id;
      });
    });
    $$('.keranjang').forEach(keranjang => {
      keranjang.addEventListener('dragover', e => { e.preventDefault(); keranjang.classList.add('dragover'); });
      keranjang.addEventListener('dragleave', () => keranjang.classList.remove('dragover'));
      keranjang.addEventListener('drop', e => {
        e.preventDefault(); keranjang.classList.remove('dragover');
        const id = e.dataTransfer.getData('text/plain');
        tempatkanKartu(id, keranjang.dataset.kat);
      });
      keranjang.addEventListener('click', () => {
        if (!isTouch || !L4.terpilih) return;
        tempatkanKartu(L4.terpilih, keranjang.dataset.kat);
        L4.terpilih = null;
      });
    });
  }
  function tempatkanKartu(id, kat) {
    const kartu = document.getElementById(id);
    if (!kartu) return;
    const isi = document.getElementById('isi-' + kat);
    isi.appendChild(kartu);
    kartu.classList.add('ditempatkan');
    kartu.classList.remove('terpilih');
    L4.penempatan[id] = kat;
    playSound('klik');
  }
  function cekLevel4() {
    let benar = 0;
    KARTU_LEVEL4.forEach(k => {
      const kartu = document.getElementById('kartu-' + k.id);
      if (!kartu) return;
      const kat = L4.penempatan[k.id];
      if (kat === k.kategori) { benar++; kartu.style.borderColor = 'var(--warna-benar)'; }
      else if (kat) { kartu.style.borderColor = 'var(--warna-salah)'; }
    });
    const total = KARTU_LEVEL4.length;
    const fb = $('#l4-feedback');
    fb.hidden = false;
    fb.className = 'feedback ' + (benar === total ? 'ok' : 'no');
    fb.innerHTML = `<div class="fb-head">${benar===total?'✅':'❌'} Benar: <strong>${benar} / ${total}</strong></div>
      <div class="fb-body">Debugging berfokus mencari dan memperbaiki masalah. Refactoring berfokus meningkatkan kerapian dan keterbacaan struktur kode tanpa mengubah perilaku.</div>
      <div class="form-actions"><button id="l4-lanjut" class="btn btn-primary">${benar===total?'SELESAI (Finish)':'ULANGI (Retry)'}</button>
      <button id="l4-paksa" class="btn btn-secondary">LANJUT (Continue)</button></div>`;
    $('#l4-lanjut').addEventListener('click', () => {
      if (benar === total) selesaikanLevel(4, benar, total);
      else renderLevel4();
    });
    $('#l4-paksa').addEventListener('click', () => selesaikanLevel(4, benar, total));
    if (benar === total) playSound('benar'); else playSound('salah');
  }

  /* --- LEVEL 5 --- */
  function renderLevel5() {
    tampilkanLayar('layar-level5');
    gambarTahap5A();
  }
  function gambarTahap5A() {
    const t = SOAL_LEVEL5.tahapA;
    let html = `<h3>Tahap A — Ganti Nama Variabel (Rename Variables)</h3>`;
    html += `<p>Kode berikut bisa dibaca, tetapi nama variabel tidak menjelaskan maksud data.</p>`;
    html += `<div class="blok-kode">${highlightKode(t.kodeAsli)}</div>`;
    html += `<p class="muted">Pilih nama yang lebih jelas untuk setiap variabel.</p>`;
    t.pemetaan.forEach((p,i) => {
      html += `<label class="field"><span>Variabel <code>${p.variabel}</code> (nilai: ${escapeHTML(p.nilai)}) →</span>
        <select data-idx="${i}" class="l5-sel">
          <option value="">-- Pilih nama (Choose name) --</option>
          ${t.pilihanNama.map(n => `<option value="${n}">${n}</option>`).join('')}
        </select></label>`;
    });
    html += `<div class="form-actions"><button id="l5-cek-a" class="btn btn-primary">PERIKSA (Check)</button></div>`;
    html += `<div id="l5-fb" class="feedback" hidden></div>`;
    $('#l5-card').innerHTML = html;
    $('#l5-cek-a').addEventListener('click', () => {
      let benar = 0;
      $$('.l5-sel').forEach(sel => {
        const idx = parseInt(sel.dataset.idx, 10);
        if (sel.value === t.pemetaan[idx].jawabanBenar) benar++;
      });
      if (benar === t.pemetaan.length) { playSound('benar'); gambarTahap5B(); }
      else { playSound('salah'); const fb = $('#l5-fb'); fb.hidden = false; fb.className = 'feedback no';
        fb.innerHTML = `<div class="fb-head">❌ Belum tepat</div><div class="fb-body">Coba lagi. Petunjuk: ${escapeHTML(t.pembahasan)}</div>`; }
    });
  }
  function gambarTahap5B() {
    const t = SOAL_LEVEL5.tahapB;
    let html = `<h3>Tahap B — Jebakan Logika (Logic Trap)</h3>`;
    html += `<div class="blok-kode">jumlah_buku = 10
buku_dipinjam = 5
sisa_buku = jumlah_buku + buku_dipinjam
print(sisa_buku)</div>`;
    html += `<p>${escapeHTML(t.pertanyaan)}</p>`;
    html += `<div class="pilihan-list">`;
    t.pilihan.forEach((p,i) => { html += `<button class="pilihan" data-i="${i}">${escapeHTML(p)}</button>`; });
    html += `</div>`;
    $('#l5-card').innerHTML = html;
    $$('#l5-card .pilihan').forEach(btn => btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.i,10);
      const benar = i === t.jawaban;
      $$('#l5-card .pilihan').forEach((b,idx) => {
        b.disabled = true;
        if (idx === t.jawaban) b.classList.add('benar');
        else if (idx === i && !benar) b.classList.add('salah');
      });
      if (benar) playSound('benar'); else playSound('salah');
      setTimeout(() => { if (benar) gambarTahap5C(); else { alert('Belum tepat. Pikirkan lagi: kata "sisa" mengandaikan pengurangan.'); gambarTahap5B(); } }, 600);
    }));
  }
  function gambarTahap5C() {
    const t = SOAL_LEVEL5.tahapC;
    let html = `<h3>Tahap C — Prinsip Refactoring</h3>`;
    html += `<p>${escapeHTML(t.pertanyaan)}</p>`;
    t.pilihan.forEach((p,i) => {
      html += `<label class="checkbox-big" style="margin-bottom:.5rem"><input type="checkbox" data-i="${i}" /> <span>${escapeHTML(p.teks)}</span></label>`;
    });
    html += `<div class="form-actions"><button id="l5-cek-c" class="btn btn-primary">PERIKSA (Check)</button></div>`;
    $('#l5-card').innerHTML = html;
    $('#l5-cek-c').addEventListener('click', () => {
      let benar = 0, total = t.pilihan.length;
      $$('#l5-card input[type=checkbox]').forEach(cb => {
        const i = parseInt(cb.dataset.i,10);
        if (cb.checked === t.pilihan[i].benar) benar++;
      });
      if (benar === total) { playSound('benar'); selesaikanLevel(5, benar, total); }
      else { playSound('salah'); alert(`Benar ${benar}/${total}. Baca lagi prinsip refactoring di materi 6.4.`); }
    });
  }

  /* --- LEVEL 6 --- */
  const L6 = { idx:0, benar:0 };
  function renderLevel6() {
    tampilkanLayar('layar-level6');
    if (state.tanpaAI) {
      $('#l6-card').innerHTML = `<h3>Mode "Belajar Tanpa AI" aktif</h3>
        <p>Kerjakan dengan membaca kode, membuat tabel pelacakan, berdiskusi dengan teman, dan mencoba pengujian.</p>
        <div class="form-actions"><button id="l6-lanjut-tanpa-ai" class="btn btn-primary">LANJUT KE LEVEL 7 (Go to Level 7)</button></div>`;
      $('#l6-deklarasi').hidden = true;
      $('#l6-lanjut-tanpa-ai').onclick = () => selesaikanLevel(6, 0, 0);
      return;
    }
    L6.idx = 0; L6.benar = 0;
    $('#l6-deklarasi').hidden = true;
    gambarSoal6();
  }
  function gambarSoal6() {
    const soal = SOAL_LEVEL6[L6.idx];
    $('#l6-progress').textContent = `Skenario ${L6.idx+1} / ${SOAL_LEVEL6.length}`;
    let html = `<div class="soal-text">${escapeHTML(soal.skenario)}</div>`;
    html += `<div class="dilema-btns">
      <button class="dilema-btn boleh" data-j="boleh">🟢 BOLEH (Allowed)</button>
      <button class="dilema-btn catatan" data-j="catatan">🟡 BOLEH DENGAN CATATAN (Allowed with caution)</button>
      <button class="dilema-btn tidak" data-j="tidak">🔴 TIDAK BOLEH (Not allowed)</button>
    </div>`;
    $('#l6-card').innerHTML = html;
    $('#l6-feedback').hidden = true;
    $$('#l6-card .dilema-btn').forEach(btn => btn.addEventListener('click', () => jawab6(btn.dataset.j)));
  }
  function jawab6(j) {
    const soal = SOAL_LEVEL6[L6.idx];
    const benar = j === soal.jawaban;
    if (benar) { L6.benar++; playSound('benar'); } else { playSound('salah'); }
    $$('#l6-card .dilema-btn').forEach(b => {
      b.disabled = true;
      if (b.dataset.j === soal.jawaban) b.classList.add('benar');
      else if (b.dataset.j === j && !benar) b.classList.add('salah');
    });
    tampilkanFeedback('#l6-feedback', benar, soal.pembahasan, () => {
      L6.idx++;
      if (L6.idx >= SOAL_LEVEL6.length) tampilkanDeklarasi6();
      else gambarSoal6();
    });
  }
  function tampilkanDeklarasi6() {
    $('#l6-card').hidden = true;
    $('#l6-feedback').hidden = true;
    const d = $('#l6-deklarasi');
    d.hidden = false;
    d.innerHTML = `<h3>Deklarasi Penggunaan AI (AI Usage Declaration)</h3>
      <p class="muted">Isi dengan jujur. Deklarasi bukan hukuman, melainkan catatan transparan.</p>
      <label class="field"><span>Apakah saya menggunakan AI? (Did I use AI?)</span>
        <div class="radio-row">
          <label><input type="radio" name="l6-ai" value="Ya"/> Ya (Yes)</label>
          <label><input type="radio" name="l6-ai" value="Tidak"/> Tidak (No)</label>
        </div>
      </label>
      <label class="field"><span>Bagian yang diperiksa sendiri... (Parts I checked myself...)</span><textarea id="l6-ai-1" rows="2"></textarea></label>
      <label class="field"><span>Saran AI yang saya terima/tolak... (AI suggestions I accepted/rejected...)</span><textarea id="l6-ai-2" rows="2"></textarea></label>
      <div class="form-actions"><button id="l6-selesai" class="btn btn-primary">SELESAI LEVEL 6 (Finish Level 6)</button></div>`;
    $('#l6-selesai').addEventListener('click', () => {
      state.jawaban.l6_deklarasi = {
        pakai: (document.querySelector('input[name="l6-ai"]:checked') || {}).value || "",
        periksa: $('#l6-ai-1').value, saran: $('#l6-ai-2').value
      };
      simpanState();
      selesaikanLevel(6, L6.benar, SOAL_LEVEL6.length);
    });
  }

  /* --- LEVEL 7 --- */
  const L7 = { step:0, benar:0 };
  function renderLevel7() {
    tampilkanLayar('layar-level7');
    L7.step = 0; L7.benar = 0;
    gambarSoal7();
  }
  function gambarSoal7() {
    const soal = SOAL_LEVEL7;
    if (L7.step < 3) {
      const langkah = soal.langkah[L7.step];
      let html = `<h3>Misi Perbaikan Program (Mission: Fix the Program)</h3>`;
      html += `<p><strong>Tujuan (Goal):</strong> ${escapeHTML(soal.tujuan)}</p>`;
      html += `<div class="blok-kode">${highlightKode(soal.kodeAwal)}</div>`;
      html += `<p class="muted"><strong>Hasil Aktual (Actual Output):</strong> ${escapeHTML(soal.hasilAktual)}</p>`;
      html += `<p>${escapeHTML(langkah.pertanyaan)}</p>`;
      if (langkah.tipe === 'isian') {
        html += `<label class="field"><span>Jawaban (Answer):</span><input type="text" id="l7-isian" /></label>`;
        html += `<div class="form-actions"><button id="l7-cek" class="btn btn-primary">PERIKSA (Check)</button></div>`;
      } else {
        html += `<div class="pilihan-list">`;
        langkah.pilihan.forEach((p,i) => { html += `<button class="pilihan" data-i="${i}">${escapeHTML(p)}</button>`; });
        html += `</div>`;
      }
      html += `<div id="l7-feedback" class="feedback" hidden></div>`;
      $('#l7-card').innerHTML = html;
      if (langkah.tipe === 'isian') {
        $('#l7-cek').addEventListener('click', () => {
          const v = ($('#l7-isian').value || '').trim().replace(/\s+/g,' ');
          const benar = v === langkah.jawaban;
          if (benar) { L7.benar++; playSound('benar'); } else { playSound('salah'); }
          tampilkanFeedback('#l7-feedback', benar, langkah.pembahasan, () => { L7.step++; gambarSoal7(); });
        });
      } else {
        $$('#l7-card .pilihan').forEach(btn => btn.addEventListener('click', () => {
          const i = parseInt(btn.dataset.i,10);
          const benar = i === langkah.jawaban;
          $$('#l7-card .pilihan').forEach((b,idx) => {
            b.disabled = true;
            if (idx === langkah.jawaban) b.classList.add('benar');
            else if (idx === i && !benar) b.classList.add('salah');
          });
          if (benar) { L7.benar++; playSound('benar'); } else { playSound('salah'); }
          tampilkanFeedback('#l7-feedback', benar, langkah.pembahasan, () => { L7.step++; gambarSoal7(); });
        }));
      }
    } else {
      // Selesai - bandingkan hasil
      let html = `<h3>✅ Perbaikan Selesai! (Fix Complete!)</h3>`;
      html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.8rem;">`;
      html += `<div><h4>Sebelum (Before)</h4><div class="blok-kode">${highlightKode(soal.kodeAwal)}</div>
        <p class="muted">Output: <strong>${escapeHTML(soal.hasilAktual)}</strong></p></div>`;
      html += `<div><h4>Sesudah (After)</h4><div class="blok-kode">${highlightKode("angka = [1, 2, 3, 4, 5]\n\nfor i in range(1, 6):\n    print(angka[i-1])")}</div>
        <p class="muted">Output: <strong>1 2 3 4 5</strong></p></div>`;
      html += `</div>`;
      html += `<p style="margin-top:1rem"><em>${escapeHTML(soal.refleksiBos)}</em></p>`;
      html += `<label class="field"><span>Jawaban refleksi (Reflection answer):</span><textarea id="l7-refleksi" rows="3"></textarea></label>`;
      html += `<div class="form-actions"><button id="l7-selesai" class="btn btn-primary">SELESAI LEVEL 7 (Finish Level 7)</button></div>`;
      $('#l7-card').innerHTML = html;
      $('#l7-selesai').addEventListener('click', () => {
        state.jawaban.l7_refleksi = $('#l7-refleksi').value;
        simpanState();
        selesaikanLevel(7, L7.benar, 3);
      });
    }
  }

  /* ===== 6. LEVEL 8: LAPORAN & REFLEKSI ===== */
  function renderLevel8() {
    tampilkanLayar('layar-level8');
    // Log debugging
    const tbody = $('#log-table tbody');
    tbody.innerHTML = '';
    const logTersimpan = state.level8.log || [];
    const jumlah = Math.max(6, logTersimpan.length);
    for (let i = 0; i < jumlah; i++) tambahBarisLog(i, logTersimpan[i] || {});
    // Deklarasi
    if (state.level8.deklarasi.pakai) {
      const r = document.querySelector(`input[name="ai-ya"][value="${state.level8.deklarasi.pakai}"]`);
      if (r) r.checked = true;
    }
    ['ai-1','ai-2','ai-3','ai-4','ai-5'].forEach((id, idx) => {
      const keys = ['bagian','saran','periksa','sendiri','pelajari'];
      const el = document.getElementById(id);
      if (el) el.value = state.level8.deklarasi[keys[idx]] || '';
    });
    if (state.level8.tanggung) $('#ai-tanggung').checked = true;
    // Refleksi
    const rlist = $('#refleksi-list');
    rlist.innerHTML = '';
    REFLEKSI_PERTANYAAN.forEach((q,i) => {
      rlist.innerHTML += `<label class="field"><span>${i+1}. ${escapeHTML(q)}</span>
        <textarea data-r="${i}" rows="2">${escapeHTML(state.level8.refleksi[i] || '')}</textarea></label>`;
    });
    // Checklist
    const clist = $('#checklist-list');
    clist.innerHTML = '';
    CHECKLIST_ITEM.forEach((c,i) => {
      clist.innerHTML += `<label class="checkbox-big" style="margin-bottom:.4rem">
        <input type="checkbox" data-c="${i}" ${state.level8.checklist[i] ? 'checked' : ''} />
        <span>${escapeHTML(c)}</span></label>`;
    });
    // Event
    $('#btn-log-tambah').onclick = () => { tambahBarisLog(tbody.children.length, {}); simpanLevel8(); };
    $('#btn-log-hapus').onclick = () => { if (tbody.children.length > 1) { tbody.removeChild(tbody.lastChild); simpanLevel8(); } };
    tbody.addEventListener('input', simpanLevel8);
    $('#layar-level8').addEventListener('input', simpanLevel8);
    $('#btn-level8-selesai').onclick = () => { simpanLevel8(); selesaikanLevel(8, 7, 7); };
  }
  function tambahBarisLog(i, data) {
    const tbody = $('#log-table tbody');
    const tr = document.createElement('tr');
    const fields = ['bagian','harap','aktual','dugaan','ubah','hasil'];
    let html = `<td>${i+1}</td>`;
    fields.forEach(f => {
      html += `<td><textarea data-f="${f}" rows="1">${escapeHTML(data[f] || '')}</textarea></td>`;
    });
    tr.innerHTML = html;
    tbody.appendChild(tr);
  }
  function simpanLevel8() {
    const log = [];
    $$('#log-table tbody tr').forEach(tr => {
      const row = {};
      tr.querySelectorAll('textarea').forEach(ta => { row[ta.dataset.f] = ta.value; });
      log.push(row);
    });
    state.level8.log = log;
    state.level8.deklarasi = {
      pakai: (document.querySelector('input[name="ai-ya"]:checked') || {}).value || "",
      bagian: ($('#ai-1')||{}).value || "",
      saran: ($('#ai-2')||{}).value || "",
      periksa: ($('#ai-3')||{}).value || "",
      sendiri: ($('#ai-4')||{}).value || "",
      pelajari: ($('#ai-5')||{}).value || ""
    };
    state.level8.tanggung = $('#ai-tanggung').checked;
    state.level8.refleksi = [];
    $$('#refleksi-list textarea').forEach(ta => { state.level8.refleksi[parseInt(ta.dataset.r,10)] = ta.value; });
    state.level8.checklist = [];
    $$('#checklist-list input[type=checkbox]').forEach(cb => { state.level8.checklist[parseInt(cb.dataset.c,10)] = cb.checked; });
    simpanState();
  }

  /* ===== FUNGSI BANTU LEVEL ===== */
  function renderDots(sel, total, dijawab) {
    const el = $(sel);
    if (!el) return;
    el.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const s = document.createElement('span');
      if (dijawab[i] === 'benar') s.classList.add('benar');
      else if (dijawab[i] === 'salah') s.classList.add('salah');
      else if (i === dijawab.length) s.classList.add('aktif');
      el.appendChild(s);
    }
  }
  function tampilkanFeedback(sel, benar, pesan, cb, htmlPesan) {
    const fb = $(sel);
    fb.hidden = false;
    fb.className = 'feedback ' + (benar ? 'ok' : 'no');
    const body = htmlPesan ? pesan : escapeHTML(pesan).replace(/\n/g,'<br/>');
    fb.innerHTML = `<div class="fb-head">${benar?'✅':'❌'} ${benar?'Tepat! (Correct!)':'Belum tepat (Not yet)'}</div>
      <div class="fb-body">${body}</div>
      <div class="form-actions"><button class="btn btn-primary" id="fb-lanjut">LANJUT (Next)</button></div>`;
    $('#fb-lanjut').addEventListener('click', cb);
  }
  function selesaikanLevel(nomor, benar, total) {
    const persen = total > 0 ? (benar/total)*100 : 100;
    let bintang = 0;
    if (persen >= 90) bintang = 3;
    else if (persen >= 70) bintang = 2;
    else if (persen >= 50) bintang = 1;
    state.bintang[nomor] = Math.max(state.bintang[nomor] || 0, bintang);
    state.levelSelesai[nomor] = true;
    // hitung XP (hanya sekali per level)
    if (!state.jawaban['xp_l'+nomor]) {
      const xp = Math.round(XP_PER_LEVEL[nomor] * (persen/100));
      state.xp += xp;
      state.jawaban['xp_l'+nomor] = xp;
    }
    if (state.levelTerbuka < nomor + 1 && nomor < 8) state.levelTerbuka = nomor + 1;
    simpanState();
    playSound('level');
    tampilkanModalLevel(nomor, bintang);
  }
  function tampilkanModalLevel(nomor, bintang) {
    const info = NAMA_LEVEL[nomor];
    const badge = BADGE_INFO[nomor];
    const stars = '★'.repeat(bintang) + '☆'.repeat(3-bintang);
    $('#modal-title').textContent = `Level ${nomor} Selesai!`;
    $('#modal-msg').innerHTML = `<div style="text-align:center">
      <div style="font-size:3rem">${info.ikon}</div>
      <p><strong>${info.id} (${info.en})</strong></p>
      <p style="font-size:1.6rem;color:var(--warna-peringatan)">${stars}</p>
      <p>Lencana diperoleh: <strong>${badge.ikon} ${badge.nama}</strong></p>
      <p>Total XP: <strong>${state.xp}</strong></p>
    </div>`;
    $('#modal-ok').textContent = 'LANJUT (Continue)';
    $('#modal-ok').className = 'btn btn-primary';
    $('#modal-cancel').hidden = true;
    $('#modal').hidden = false;
    const handler = () => {
      $('#modal-ok').removeEventListener('click', handler);
      $('#modal').hidden = true;
      $('#modal-cancel').hidden = false;
      $('#modal-ok').className = 'btn btn-danger';
      tampilkanLayar('layar-peta');
      cekEasterEgg();
    };
    $('#modal-ok').addEventListener('click', handler);
    konfeti(bintang === 3 ? 80 : 40);
  }
  function cekEasterEgg() {
    const semuaTiga = Object.keys(NAMA_LEVEL).every(k => state.bintang[k] === 3);
    if (semuaTiga && !state.jawaban.easterEgg) {
      state.jawaban.easterEgg = true; simpanState();
      setTimeout(() => {
        tampilToast('🐛👑 Kamu menemukan semua bug! Bahkan bug yang bersembunyi di balik pola.');
        konfeti(200, true);
      }, 500);
    }
  }

  /* ===== 7. LOCALSTORAGE ===== */
  function simpanState() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
      const ind = $('#save-indicator');
      if (ind) { ind.classList.add('show'); setTimeout(() => ind.classList.remove('show'), 1200); }
    } catch (e) { /* private browsing */ }
  }
  function muatState() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      Object.assign(state, data);
      return true;
    } catch (e) { return false; }
  }
  function resetState() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
    location.reload();
  }
  function adaSave() {
    try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; }
  }
  function perbaruiHeader() {
    $('#xp-current').textContent = state.xp;
    $('#xp-max').textContent = TOTAL_XP_MAKS;
    const selesai = Object.keys(state.levelSelesai).length;
    $('#level-current').textContent = selesai;
    $('#progress-fill').style.width = Math.min(100, (state.xp / TOTAL_XP_MAKS) * 100) + '%';
  }

  /* ===== 8. AUDIO (Web Audio API) ===== */
  function getAudioCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }
  function playNada(freq, dur, delay) {
    const ctx = getAudioCtx(); if (!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
    g.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + delay + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delay + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(ctx.currentTime + delay); o.stop(ctx.currentTime + delay + dur + 0.05);
  }
  function playSound(jenis) {
    if (!state.pengaturan.suara) return;
    if (jenis === 'benar') { playNada(523, 0.12, 0); playNada(659, 0.12, 0.1); playNada(784, 0.15, 0.2); }
    else if (jenis === 'salah') { playNada(330, 0.14, 0); playNada(262, 0.18, 0.12); }
    else if (jenis === 'klik') { playNada(800, 0.05, 0); }
    else if (jenis === 'level') { [523,659,784,988,1175].forEach((f,i) => playNada(f, 0.15, i*0.12)); }
    else if (jenis === 'menang') { [523,659,784,1047,1319,1047,784,523].forEach((f,i) => playNada(f, 0.2, i*0.15)); }
  }

  /* ===== 9. TEXT-TO-SPEECH ===== */
  function bacaTeks(teks) {
    if (!state.pengaturan.tts) return;
    if (typeof window.speechSynthesis === 'undefined') return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(teks);
    u.lang = 'id-ID'; u.rate = 0.95;
    window.speechSynthesis.speak(u);
  }

  /* ===== 10. AKSESIBILITAS ===== */
  function terapkanPengaturan() {
    document.documentElement.style.setProperty('--font-ukuran-dasar', state.pengaturan.ukuranTeks + '%');
    document.body.classList.toggle('kontras-tinggi', state.pengaturan.kontras);
    document.body.classList.toggle('font-disleksia', state.pengaturan.disleksia);
    document.body.classList.toggle('tanpa-animasi', !state.pengaturan.animasi);
    const map = { 'set-text-size': state.pengaturan.ukuranTeks, 'set-kontras': state.pengaturan.kontras, 'set-disleksia': state.pengaturan.disleksia, 'set-suara': state.pengaturan.suara, 'set-tts': state.pengaturan.tts, 'set-timer': state.pengaturan.timer, 'set-animasi': state.pengaturan.animasi };
    Object.keys(map).forEach(id => { const el = document.getElementById(id); if (el) { if (el.type === 'checkbox') el.checked = !!map[id]; else el.value = map[id]; } });
    const tv = $('#text-size-val'); if (tv) tv.textContent = state.pengaturan.ukuranTeks + '%';
  }

  /* ===== 11. SERTIFIKAT & EKSPOR ===== */
  function renderSertifikat() {
    $('#sert-nama').textContent = state.nama || '—';
    $('#sert-kelas').textContent = state.kelas ? 'Kelas ' + state.kelas : '—';
    const tgl = new Date().toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
    $('#sert-tanggal').textContent = tgl;
    $('#sert-xp').textContent = state.xp;
    const totalBintang = Object.values(state.bintang).reduce((a,b) => a+b, 0);
    $('#sert-bintang').textContent = totalBintang + ' / 24';
    const badgeCount = Object.keys(state.levelSelesai).length;
    $('#sert-badge').textContent = badgeCount + ' / 8';
    let bhtml = '';
    Object.keys(BADGE_INFO).forEach(k => {
      if (state.levelSelesai[k]) bhtml += `<span title="${BADGE_INFO[k].nama}">${BADGE_INFO[k].ikon}</span>`;
    });
    $('#sert-badges').innerHTML = bhtml || '—';
    playSound('menang');
    konfeti(150, true);
  }
  function unduhJawaban() {
    let t = `DEBUG QUEST — LKPD INFORMATIKA KELAS VIII\n`;
    t += `==========================================\n`;
    t += `Nama  : ${state.nama}\nKelas : ${state.kelas}\nTanggal: ${new Date().toLocaleString('id-ID')}\n\n`;
    t += `TOTAL XP: ${state.xp} / ${TOTAL_XP_MAKS}\n`;
    Object.keys(NAMA_LEVEL).forEach(k => {
      t += `Level ${k} (${NAMA_LEVEL[k].id}): ${state.levelSelesai[k] ? '✓ Selesai' : '—'} ${state.bintang[k] ? '★'.repeat(state.bintang[k]) : ''}\n`;
    });
    t += `\n=== LOG DEBUGGING ===\n`;
    (state.level8.log || []).forEach((r,i) => {
      if (!r) return;
      t += `\n[Baris ${i+1}]\n  Bagian dicek   : ${r.bagian||''}\n  Harapan        : ${r.harap||''}\n  Aktual         : ${r.aktual||''}\n  Dugaan penyebab: ${r.dugaan||''}\n  Perubahan/uji  : ${r.ubah||''}\n  Hasil uji      : ${r.hasil||''}\n`;
    });
    t += `\n=== DEKLARASI PENGGUNAAN AI ===\n`;
    const d = state.level8.deklarasi || {};
    t += `Pakai AI? : ${d.pakai||'-'}\nBagian dibantu AI  : ${d.bagian||'-'}\nSaran AI yang dipakai: ${d.saran||'-'}\nCara memeriksa: ${d.periksa||'-'}\nDikerjakan sendiri: ${d.sendiri||'-'}\nPelajaran: ${d.pelajari||'-'}\n`;
    t += `\n=== REFLEKSI ===\n`;
    (state.level8.refleksi || []).forEach((r,i) => { t += `\n${i+1}. ${REFLEKSI_PERTANYAAN[i]}\n   → ${r||'-'}\n`; });
    t += `\n=== CHECKLIST ===\n`;
    (state.level8.checklist || []).forEach((c,i) => { t += `${c?'[✓]':'[ ]'} ${CHECKLIST_ITEM[i]}\n`; });
    const blob = new Blob([t], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `debugquest_${(state.nama||'murid').replace(/\s+/g,'_')}.txt`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    tampilToast('Jawaban diunduh ✓');
  }
  function salinRingkasan() {
    const txt = `DEBUG QUEST — ${state.nama} (${state.kelas})\nXP: ${state.xp}/${TOTAL_XP_MAKS}\nLevel selesai: ${Object.keys(state.levelSelesai).length}/8\nBintang: ${Object.values(state.bintang).reduce((a,b)=>a+b,0)}/24`;
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => tampilToast('Ringkasan disalin ✓'));
    else tampilToast('Clipboard tidak tersedia');
  }

  /* ===== 12. MODE GURU ===== */
  let guruAktif = false;
  function toggleGuru() {
    guruAktif = !guruAktif;
    if (guruAktif) { tampilkanLayar('layar-guru'); } else { tampilkanLayar('layar-peta'); }
  }
  function renderGuru() {
    let html = '';
    html += `<p><strong>Kunci Level 1:</strong> ${SOAL_LEVEL1.map(s=>String.fromCharCode(65+s.jawaban)).join(', ')}</p>`;
    html += `<p><strong>Kunci Level 2 (baris bug):</strong> ${SOAL_LEVEL2.map(s=>s.barisBug+1).join(', ')}</p>`;
    html += `<p><strong>Level 3:</strong> lihat tabel pelacakan — hasil akhir: 1..5, total: 10</p>`;
    html += `<p><strong>Level 4 (kategori kartu):</strong></p><ul>`;
    KARTU_LEVEL4.forEach(k => html += `<li>${k.id}: ${k.kategori}</li>`);
    html += `</ul>`;
    html += `<p><strong>Level 6 (kunci):</strong> ${SOAL_LEVEL6.map(s=>s.id+': '+s.jawaban).join(' | ')}</p>`;
    html += `<p><strong>Level 7:</strong> range(1,6) + angka[i-1] → output 1 2 3 4 5</p>`;
    $('#guru-jawaban').innerHTML = html;
  }

  /* ===== 13. PETA MISI, GLOSARIUM, PETA KONSEP ===== */
  function renderPeta() {
    perbaruiHeader();
    const grid = $('#peta-grid');
    grid.innerHTML = '';
    for (let n = 1; n <= 8; n++) {
      const info = NAMA_LEVEL[n];
      const terkunci = n > state.levelTerbuka;
      const selesai = !!state.levelSelesai[n];
      const bintang = state.bintang[n] || 0;
      const stars = '★'.repeat(bintang) + '☆'.repeat(3-bintang);
      const div = document.createElement('div');
      div.className = 'peta-node' + (terkunci ? ' terkunci' : '') + (selesai ? ' selesai' : '');
      div.innerHTML = `
        ${terkunci ? '<span class="node-badge">🔒</span>' : ''}
        ${selesai ? `<span class="node-badge">${BADGE_INFO[n].ikon}</span>` : ''}
        <div class="node-ikon">${info.ikon}</div>
        <div class="node-judul">Level ${n} — ${info.id}</div>
        <div class="node-en">${info.en}</div>
        <div class="node-stars" style="color:var(--warna-peringatan)">${stars}</div>
        <div class="muted" style="font-size:.75rem;margin-top:.3rem">${XP_PER_LEVEL[n]} XP</div>
      `;
      if (!terkunci) div.addEventListener('click', () => bukaLevel(n));
      grid.appendChild(div);
    }
    $('#toggle-tanpa-ai').checked = state.tanpaAI;
  }
  function bukaLevel(n) {
    if (n === 1) renderLevel1();
    else if (n === 2) renderLevel2();
    else if (n === 3) renderLevel3();
    else if (n === 4) renderLevel4();
    else if (n === 5) renderLevel5();
    else if (n === 6) renderLevel6();
    else if (n === 7) renderLevel7();
    else if (n === 8) renderLevel8();
  }
  function renderGlosarium(filter) {
    const list = $('#glosarium-list');
    const f = (filter || '').toLowerCase();
    list.innerHTML = '';
    DAFTAR_GLOSARIUM.filter(g => g.istilah.toLowerCase().includes(f) || g.arti.toLowerCase().includes(f))
      .forEach(g => {
        list.innerHTML += `<div class="glos-item"><strong>${escapeHTML(g.istilah)}</strong>${escapeHTML(g.arti)}</div>`;
      });
  }
  function renderPetaKonsep() {
    const alur = ['Perulangan & Pola', 'muncul dalam kode', 'program diuji', 'ditemukan bug',
      'debugging', 'refactoring', 'AI sebagai pendamping', 'keputusan diverifikasi', 'refleksi'];
    const el = $('#konsep-alur');
    el.innerHTML = '';
    alur.forEach((a,i) => {
      el.innerHTML += `<div class="konsep-kotak">${escapeHTML(a)}</div>`;
      if (i < alur.length - 1) el.innerHTML += `<div class="konsep-panah">↓</div>`;
    });
  }

  /* ===== BANTUAN ===== */
  function escapeHTML(s) {
    if (s == null) return '';
    return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function highlightKode(kode) {
    let s = escapeHTML(kode);
    s = s.replace(/\b(for|in|if|else|range|print|def|while)\b/g, m => {
      if (m === 'range' || m === 'print') return `<span class="fn">${m}</span>`;
      return `<span class="kw">${m}</span>`;
    });
    s = s.replace(/\b(\d+)\b/g, '<span class="num">$1</span>');
    s = s.replace(/(&quot;[^&]*&quot;|&#39;[^&]*&#39;)/g, '<span class="str">$1</span>');
    s = s.replace(/(#.*)$/gm, '<span class="cmt">$1</span>');
    return s;
  }
  function tampilToast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(t._to);
    t._to = setTimeout(() => { t.hidden = true; }, 2600);
  }
  function konfeti(jumlah, emas) {
    if (!state.pengaturan.animasi) return;
    const canvas = $('#confetti-canvas');
    canvas.classList.add('aktif');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const parts = [];
    const warna = emas ? ['#FBBF24','#F59E0B','#FCD34D'] : ['#22D3EE','#4ADE80','#F87171','#FBBF24','#A78BFA'];
    for (let i = 0; i < jumlah; i++) {
      parts.push({ x: Math.random()*canvas.width, y: -10, vx:(Math.random()-0.5)*4, vy: Math.random()*4+2, s: Math.random()*6+4, c: warna[Math.floor(Math.random()*warna.length)], r: Math.random()*Math.PI });
    }
    let frame = 0;
    function loop() {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      parts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.r += 0.08;
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c; ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*0.6); ctx.restore();
      });
      frame++;
      if (frame < 180) requestAnimationFrame(loop);
      else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.classList.remove('aktif'); }
    }
    loop();
  }
  function modalKonfirmasi(title, msg, onOk, mintaKetik) {
    $('#modal-title').textContent = title;
    $('#modal-msg').innerHTML = msg;
    const extra = $('#modal-extra');
    extra.innerHTML = mintaKetik ? `<label class="field"><span>Ketik "${mintaKetik}" untuk konfirmasi:</span><input type="text" id="modal-ketik" /></label>` : '';
    $('#modal').hidden = false;
    $('#modal-ok').className = 'btn btn-danger';
    $('#modal-cancel').hidden = false;
    const cleanup = () => { $('#modal-ok').removeEventListener('click', okH); $('#modal-cancel').removeEventListener('click', cancelH); };
    const okH = () => {
      if (mintaKetik) {
        const v = ($('#modal-ketik')||{}).value || '';
        if (v.trim().toUpperCase() !== mintaKetik.toUpperCase()) { tampilToast('Ketik dengan benar untuk konfirmasi'); return; }
      }
      cleanup(); $('#modal').hidden = true; onOk();
    };
    const cancelH = () => { cleanup(); $('#modal').hidden = true; };
    $('#modal-ok').addEventListener('click', okH);
    $('#modal-cancel').addEventListener('click', cancelH);
  }

  /* ===== 13. INISIALISASI ===== */
  function init() {
    if (muatState()) { /* sudah ada save */ }
    terapkanPengaturan();
    perbaruiHeader();

    // Tombol pembuka
    $('#btn-mulai').addEventListener('click', () => {
      if (adaSave() && state.nama) {
        modalKonfirmasi('Mulai Ulang?', 'Kamu sudah punya progres tersimpan. Mulai dari awal akan menghapus progres.<br/><br/><em>Ingin lanjut dari progres tersimpan?</em>', () => {
          resetState();
        }, 'RESET');
      } else {
        tampilkanLayar('layar-identitas');
      }
    });
    if (adaSave() && state.nama) $('#btn-lanjut').hidden = false;
    $('#btn-lanjut').addEventListener('click', () => {
      tampilkanLayar('layar-peta');
    });

    // Identitas
    $('#input-nama').value = state.nama || '';
    $('#input-kelas').value = state.kelas || '';
    $('#btn-identitas-lanjut').addEventListener('click', () => {
      const n = $('#input-nama').value.trim();
      const k = $('#input-kelas').value.trim();
      if (!n) { alert('Isi nama dulu ya.'); return; }
      state.nama = n; state.kelas = k;
      simpanState();
      tampilkanLayar('layar-peta');
    });

    // Header
    $('#btn-home').addEventListener('click', () => {
      if (state.nama) tampilkanLayar('layar-peta');
      else tampilkanLayar('layar-pembuka');
    });
    $('#btn-bahasa').addEventListener('click', () => {
      const p = $('#panel-bahasa'); p.hidden = !p.hidden;
      $('#panel-akses').hidden = true;
    });
    $('#btn-akses').addEventListener('click', () => {
      const p = $('#panel-akses'); p.hidden = !p.hidden;
      $('#panel-bahasa').hidden = true;
    });
    $('#btn-glosarium').addEventListener('click', () => tampilkanLayar('layar-glosarium'));

    // Panel bahasa
    $$('input[name="bahasa"]').forEach(r => {
      r.checked = r.value === state.bahasa;
      r.addEventListener('change', () => { state.bahasa = r.value; simpanState(); });
    });

    // Panel aksesibilitas
    $('#set-text-size').addEventListener('input', e => { state.pengaturan.ukuranTeks = parseInt(e.target.value,10); $('#text-size-val').textContent = e.target.value + '%'; terapkanPengaturan(); simpanState(); });
    $('#set-kontras').addEventListener('change', e => { state.pengaturan.kontras = e.target.checked; terapkanPengaturan(); simpanState(); });
    $('#set-disleksia').addEventListener('change', e => { state.pengaturan.disleksia = e.target.checked; terapkanPengaturan(); simpanState(); });
    $('#set-suara').addEventListener('change', e => { state.pengaturan.suara = e.target.checked; simpanState(); if (e.target.checked) playSound('klik'); });
    $('#set-tts').addEventListener('change', e => { state.pengaturan.tts = e.target.checked; simpanState(); });
    $('#set-timer').addEventListener('change', e => { state.pengaturan.timer = e.target.checked; simpanState(); });
    $('#set-animasi').addEventListener('change', e => { state.pengaturan.animasi = e.target.checked; terapkanPengaturan(); simpanState(); });
    $('#btn-reset-progres').addEventListener('click', () => {
      modalKonfirmasi('Reset Progres', 'Semua progres akan dihapus. Ketik <strong>RESET</strong> untuk konfirmasi.', () => resetState(), 'RESET');
    });

    // Peta
    $('#btn-peta-konsep').addEventListener('click', () => tampilkanLayar('layar-peta-konsep'));
    $('#btn-peta-glosarium').addEventListener('click', () => tampilkanLayar('layar-glosarium'));
    $('#toggle-tanpa-ai').addEventListener('change', e => { state.tanpaAI = e.target.checked; simpanState(); });

    // Glosarium
    $('#cari-glosarium').addEventListener('input', e => renderGlosarium(e.target.value));
    $('#btn-glosarium-kembali').addEventListener('click', () => tampilkanLayar('layar-peta'));
    // Peta konsep
    $('#btn-konsep-kembali').addEventListener('click', () => tampilkanLayar('layar-peta'));

    // Sertifikat
    $('#btn-cetak').addEventListener('click', () => window.print());
    $('#btn-unduh').addEventListener('click', unduhJawaban);
    $('#btn-salin').addEventListener('click', salinRingkasan);
    $('#btn-kembali-peta').addEventListener('click', () => tampilkanLayar('layar-peta'));

    // Mode guru
    document.addEventListener('keydown', e => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'T' || e.key === 't')) { e.preventDefault(); toggleGuru(); }
    });
    let tapCount = 0, tapTimer;
    $('.logo').addEventListener('click', () => {
      tapCount++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => { tapCount = 0; }, 800);
      if (tapCount >= 5) { toggleGuru(); tapCount = 0; }
    });
    $('#btn-guru-buka').addEventListener('click', () => { state.levelTerbuka = 8; simpanState(); perbaruiHeader(); tampilToast('Semua level dibuka'); });
    $('#btn-guru-reset').addEventListener('click', () => modalKonfirmasi('Reset Semua Data', 'Ketik RESET untuk konfirmasi.', () => resetState(), 'RESET'));
    $('#btn-guru-tutup').addEventListener('click', () => { guruAktif = false; tampilkanLayar('layar-peta'); });

    // Autosave periodik
    setInterval(simpanState, 3000);
    // Simpan saat halaman ditutup
    window.addEventListener('beforeunload', simpanState);
  }

  document.addEventListener('DOMContentLoaded', init);
})();