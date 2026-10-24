/* TEMPLATE. Salin file ini jadi batch-3.js (dst), isi, lalu tambahkan "programs/batch-3.js" ke BATCH_FILES di config.js.
   Satu file boleh berisi beberapa program. Tanggal format "TAHUN-BULAN-HARI". */
window.BATCHES = (window.BATCHES || []).concat([{
  updated: "2026-10-23 21:00",
  text: "Ringkasan satu kalimat isi batch ini (tampil di Riwayat pembaruan).",
  programs: [
    {
      id: "kode-unik-tanpa-spasi",
      brand: "Le Minerale",                 // harus sama dengan nama di BRANDS (config.js)
      name: "Nama program",
      code: "TP_0000", no: "Nomor surat",
      start: "2026-11-01", end: "2026-11-30",
      added: "2026-10-23",                  // opsional. Label BARU tampil beberapa hari
      pdf: {view: "pdf/kode-unik.pdf", download: "pdf/kode-unik.pdf"},   // opsional. Taruh PDF di folder pdf/ dengan nama sama dengan id
      // Alternatif lama (Google Drive): pdf: {id: "ID file Google Drive"},
      tags: ["Retail", "GRSM 3,4"],
      keywords: ["kata", "pencarian", "tambahan"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Judul penawaran", b: "Rp0/karton", s: "Catatan kecil"}],   // tampil besar di kartu
          kv: [["Periode program", "1 – 30 November 2026"], ["Area", "..."]]
        },
        { title: "Mekanisme", list: ["Poin 1.", "Poin 2."] }
        /* Jenis blok lain: lead, facts, groups, table, rule, note, fold:true, warn:true, badge:["Naik","hot"] */
      ]
    }
  ]
}]);
