/* ============================================================
   PENGATURAN. File ini yang kamu edit saat ada perubahan rutin.
   Tambah program baru: buat file programs/batch-N.js (salin programs/_template.js),
   lalu tambahkan nama file itu ke BATCH_FILES di bawah. index.html tidak perlu diubah.
   ============================================================ */
window.CONFIG = {
  /* Tanggal pembaruan yang tampil di atas. Ganti setiap kali kamu upload perubahan. Format "TAHUN-BULAN-HARI".
     Jika dikosongkan, dipakai tanggal dari batch terbaru. */
  UPDATED: "2026-10-25",

  BATCH_FILES: ["programs/batch-1.js", "programs/batch-2.js", "programs/batch-3.js", "programs/batch-4.js"],

  /* Brand baru: tambah satu baris. Warna dipakai untuk penanda brand. */
  BRANDS: [
    {n: "Teh Pucuk Harum", c: "#0F5C37"}, {n: "Le Minerale", c: "#12306B"}, {n: "Kopiko 78", c: "#3B2216"},
    {n: "Kopikap Jumbo", c: "#6B3A1E"}, {n: "Susu 7 Kurma", c: "#5C3513"}, {n: "Susu 7 Kurma Kids", c: "#8A4B12"},
    {n: "Nipis Madu", c: "#7A5A00"}, {n: "Collagena", c: "#7A0F2E"}, {n: "Aspen", c: "#0B6E75"}
  ],

  /* Kalender perusahaan. Tambah bulan baru saat kalendernya keluar. */
  CAL: [
    {id: "2026-09", name: "September 2026", short: "Sep", start: "2026-08-24", end: "2026-09-27"},
    {id: "2026-10", name: "Oktober 2026", short: "Okt", start: "2026-09-28", end: "2026-10-25"},
    {id: "2026-11", name: "November 2026", short: "Nov", start: "2026-10-26", end: "2026-11-22"},
    {id: "2026-12", name: "Desember 2026", short: "Des", start: "2026-11-23", end: "2026-12-27"}
  ],

  SOON_DAYS: 7,   /* program ditandai "Segera berakhir" jika sisa hari kurang dari atau sama dengan ini */
  NEW_DAYS: 7,    /* label BARU tampil berapa hari sejak tanggal added */
  FOOTNOTE: "Ringkasan dari surat program. Untuk detail lengkap, lihat surat aslinya.",
  CREDIT: "Dibuat oleh Azizah Admin RSM M3 JAKUTPUS",
  CREDIT_YEAR: "2026"
};
