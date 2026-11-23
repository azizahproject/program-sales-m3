/* Batch 7. Kompensasi S7K Kids program display GRSM 3A (AP 9025) dan memorandumnya. */
(function () {
  const pdf = id => ({view: "pdf/" + id + ".pdf", download: "pdf/" + id + ".pdf"});
  window.BATCHES = (window.BATCHES || []).concat([{
    updated: "2026-11-24 06:30",
    text: "Kompensasi S7K Kids program display GRSM 3A, AP 9025, dengan memorandum.",
    programs: [{
      id: "s7k-kids-display-gr3a-des", brand: "Susu 7 Kurma Kids",
      name: "Kompensasi S7K Kids Program Display di GRSM 3A",
      code: "GTI_0000", no: "BEV/TKK/26/11/9025", added: "2026-11-24",
      pdf: pdf("s7k-kids-display-gr3a-des"),
      start: "2026-11-23", end: "2026-12-26",
      tags: ["Retail", "GRSM 3A", "Display", "Kompensasi produk", "Memorandum"],
      keywords: ["s7k", "s7k kids", "susu 7 kurma kids", "kids", "display", "rak", "kompensasi", "gr3a", "grsm 3a"],
      memos: [{
        no: "00118/ZAP4/11/2026/MTFJ",
        summary: "Perubahan mekanisme poin 4 (kompensasi produk) dan poin 7 (estimasi sales).",
        changes: [
          "Kompensasi produk: 20 pcs per periode program (1 bulan). Sebelumnya 1 karton per periode program (2 bulan).",
          "Estimasi sales: 376 outlet × 20 pcs × 1 bulan × Rp2.880/pcs = Rp21.657.600. Sebelumnya 376 outlet × 1 karton × 1 bulan × Rp115.200 = Rp43.315.200.",
          "C/R: 100% (sebelumnya 50%)."
        ],
        pdf: pdf("memo-s7k-kids-display-gr3a-des")
      }],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Outlet pasang rak dan display S7K Kids", b: "Kompensasi 20 pcs S7K Kids", s: "Per periode program (1 bulan), menurut memorandum"}],
          kv: [
            ["Periode program", "23 Nov – 26 Des 2026 (W48–52)"],
            ["Area", "GRSM 3A (lokal)"],
            ["Outlet", "Retail, TDP Retail, Lokpen, GMM Retail, Kuliner (outlet terlampir di surat)"],
            ["Produk", "Susu 7 Kurma Kids (S7K Kids)"],
            ["No. Action Proposal", "BEV/TKK/26/11/9025"],
            ["Periode klaim", "23 Nov – 22 Des, 23 – 26 Des 2026"],
            ["Batas akhir klaim", "27 Mei 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Berlaku untuk outlet retail yang terlampir di surat: Retail, TDP Retail, Lokpen, GMM Retail, Kuliner.",
            "Outlet wajib memasang rak display dan mendisplay S7K Kids.",
            "Kompensasi produk untuk program display: 20 pcs per periode program (1 bulan), menurut memorandum. Surat asli menulis 1 karton per periode program (2 bulan).",
            "Produk kompensasi diambil dari CNS/Subdist area.",
            "Setelah program berakhir, CNS klaim ke PT TFJ.",
            "Syarat klaim: foto dokumentasi display dan tanda terima pemberian kompensasi ke outlet."
          ]
        }
      ]
    }]
  }]);
})();
