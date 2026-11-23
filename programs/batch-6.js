/* Batch 6. Surat program Desember 2026 (periode 23 Nov – 27 Des) dan program Nov yang baru terbit, plus 2 memorandum (AP 9528, 9279). */
(function () {
  const pdf = id => ({view: "pdf/" + id + ".pdf", download: "pdf/" + id + ".pdf"});
  const ADDED = "2026-11-24";
  const K1 = "23 Nov – 22 Des, 23 – 27 Des 2026";
  const PER = "23 Nov – 27 Des 2026 (W48–52)";
  const SETMX = "Program di-setting di Matrix.";
  const BAYAR_TFJ = "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT TFJ.";
  const KLAIM_RPT = "Di akhir program CNS/Subdist klaim dengan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist.";
  const RETAIL = "Retail, GMM Retail, Lokman, Kantin, Koperasi, Rest Area, Bengkel, Rumah Makan, Kantin Sekolah, Kuliner, Lokpen, TDP Retail, Topping Up";

  /* Pembangun program: ringkasan standar + mekanisme */
  function mk(o) {
    const kv = [["Periode program", o.periode || PER], ["Area", o.area], ["Outlet", o.outlet]];
    if (o.produk) kv.push(["Produk", o.produk]);
    kv.push(["No. Action Proposal", o.no], ["Periode klaim", o.klaim || K1], ["Batas akhir klaim", o.batas]);
    const ring = {title: "Ringkasan", offers: o.offers, kv: kv};
    if (o.lead) ring.lead = o.lead;
    const p = {
      id: o.id, brand: o.brand, name: o.name, code: o.code || "TP_1111", no: o.no, added: ADDED,
      pdf: pdf(o.id), start: o.start, end: o.end, tags: o.tags, keywords: o.keywords,
      blocks: [ring, {title: o.mechTitle || "Mekanisme", list: o.mech}].concat(o.extra || [])
    };
    if (o.divisi) p.divisi = o.divisi;
    if (o.memos) p.memos = o.memos;
    return p;
  }

  const programs = [
    /* ---------- Teh Pucuk Harum ---------- */
    mk({
      id: "tph-discount-west-des", brand: "Teh Pucuk Harum",
      name: "Discount Pembelian TPH Desember 2026 West (GRSM 1,2,3,4)",
      no: "BEV/SUN/26/11/9318", start: "2026-11-23", end: "2026-12-27", batas: "26 Februari 2027",
      area: "West (GRSM 1, 2, 3, 4)",
      outlet: "Subdist GT & Institusi (Sisdima dan non Sisdima): Grosir, Gromin, SO, Topping Up, Retail, TDP, Lokpen",
      produk: "TPH 350ml / 500ml (boleh mix reguler dan LS)",
      tags: ["Subdist GT & Institusi", "Sumatera", "Jabodetabek & Jabar", "Retail", "Discount"],
      keywords: ["tph", "teh pucuk", "teh pucuk harum", "350ml", "500ml", "discount", "west", "sumatera", "jabodetabek", "jabar", "retail"],
      offers: [
        {l: "Retail, semua West: beli ≥3 CRT", b: "Rp300/CRT", s: "TPH 350ml / 500ml, reguler atau LS, mix variant"},
        {l: "Jabodetabek & Jabar: beli ≥500 CRT", b: "Rp700/CRT", s: "Jadi Rp900/CRT jika ada syarat tambahan (lihat Mekanisme)"},
        {l: "Sumatera: beli ≥150 CRT", b: "Rp400/CRT", s: "25–149 CRT: Rp200/CRT"}
      ],
      mech: [
        "Berlaku untuk Subdist GT & Institusi (Sisdima dan non Sisdima): Grosir, Gromin, SO, Topping Up, Retail, TDP, Lokpen.",
        "Area Sumatera, produk TPH 350ml/500ml (boleh mix reguler dan LS). Berlaku untuk Gromin, SO, Grosir, GMM Grosir, GMM Gromin, TDP Grosir, TDP Gromin: beli ≥150 CRT disc Rp400/CRT, beli 25–149 CRT disc Rp200/CRT.",
        "Area Jabodetabek & Jabar, produk TPH 350ml/500ml (boleh mix reguler dan LS), channel sama seperti Sumatera: beli ≥500 CRT disc Rp700/CRT, 300–499 CRT disc Rp400/CRT, 100–299 CRT disc Rp300/CRT, 25–99 CRT disc Rp200/CRT.",
        "Khusus strata ≥500 CRT: discount menjadi Rp900/CRT jika outlet juga membeli minimal 10 CRT (mix) TPH 350ml LS / TPH 500 Jasmine / TPH 500ml LS.",
        "Berlaku All West untuk channel retail (" + RETAIL.replace(", Topping Up", "") + ", Topping Up): beli ≥3 CRT TPH 350ml (reg/LS) / TPH 500ml (reg/LS), mix variant, disc Rp300/CRT.",
        "Discount produk dicantumkan di invoice dan di-setting di Matrix.",
        "Outlet peserta adalah outlet yang diregister di Matrix.",
        "Di akhir program Subdist klaim dengan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist."
      ]
    }),
    mk({
      id: "tph-1300-west-nov-des", brand: "Teh Pucuk Harum", code: "TP_1111_EBSL",
      name: "Program TPH 1300ml West Nov–Des 2026 (GRSM 1,2,3,4)",
      no: "BEV/SUN/26/10/9528", start: "2026-10-26", end: "2026-12-27", batas: "26 Februari 2027",
      periode: "26 Okt – 27 Des 2026 (W44–52)", area: "West (GRSM 1, 2, 3, 4)",
      outlet: "Grosir, Gromin, SO, GMM",
      produk: "TPH 1300ml",
      klaim: "26 Okt – 25 Nov, 26 Nov – 25 Des, 26 – 27 Des 2026",
      tags: ["Grosir", "Gromin", "SO", "GMM", "GRSM 1,2,3,4", "Bonus produk", "Memorandum"],
      keywords: ["tph", "teh pucuk", "1300ml", "1,3 liter", "bonus", "ebsl", "west", "lock budget", "kuota bonus"],
      offers: [{l: "Beli 5 karton TPH 1300ml", b: "Bonus 1 karton TPH 1300ml", s: "Berlaku kelipatan. Bonus lock budget"}],
      memos: [{
        no: "00119/ZAP4/11/2026/MTFJ",
        summary: "Perubahan mekanisme point 4: setting Matrix berbeda per GRSM.",
        changes: [
          "GRSM 1, 2, 3B, 3C, 4: program tidak di-setting di Matrix. Kuota bonus per GRSM ada di file Excel terlampir di memorandum.",
          "GRSM 3A: program tetap di-setting di Matrix sesuai kuota bonus di Excel.",
          "Sebelumnya: program dicantumkan di invoice dan di-setting di Matrix."
        ],
        pdf: pdf("memo-tph-1300-west-nov-des")
      }],
      mech: [
        "Setiap pembelian 5 karton TPH 1300ml mendapat bonus 1 karton TPH 1300ml.",
        "Berlaku kelipatan.",
        "Bonus lock budget: jika program sudah mencapai biaya yang disetujui, AP tidak berlaku lagi.",
        "Setting Matrix (menurut memorandum): GRSM 1, 2, 3B, 3C, 4 tidak di-setting di Matrix, kuota bonus per GRSM ada di Excel terlampir memorandum. GRSM 3A di-setting di Matrix sesuai kuota bonus di Excel. File Excel tidak ada di PDF ini.",
        "Outlet peserta adalah outlet yang diregister di Matrix, dan NOO.",
        "Bonus outlet dibayarkan lebih dulu oleh Subdist/CNS, kemudian Subdist/CNS klaim ke PT Tirta Fresindo Jaya."
      ]
    }),
    mk({
      id: "tph-tetra-flush-out-gr3ab-des", brand: "Teh Pucuk Harum", code: "GT_1111",
      name: "Flush Out TPH Tetra Ori & Less Sugar 300ml Jan–Mar 2027, Beli 2 Karton Bonus 1 Karton (GRSM 3A & 3B)",
      no: "BEV/SUN/26/11/9327", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      periode: "23 Nov – 27 Des 2026", area: "GRSM 3A dan 3B",
      outlet: "Channel Retail (group outlet RTL), berlaku juga untuk Topping Up",
      produk: "TPH Tetra Original 300ml (351954) dan TPH Tetra Less Sugar 300ml (351966)",
      tags: ["Retail", "Topping Up", "GRSM 3A,3B", "Bonus produk", "Flush out"],
      keywords: ["tph", "teh pucuk", "tetra", "tetra pak", "300ml", "flush out", "ned", "less sugar", "bonus", "3a", "3b"],
      offers: [{l: "Beli 2 karton TPH Tetra Original / Less Sugar 300ml", b: "Bonus 1 karton", s: "Berlaku kelipatan. Kuota terbatas (lock budget)"}],
      mech: [
        "Setiap pembelian TPH Tetra Original & Less Sugar 300ml sebanyak 2 karton mendapat bonus 1 karton. Program di-setting di Matrix dan berlaku kelipatan.",
        "Dijalankan di channel Retail (group outlet RTL), berlaku juga untuk Topping Up.",
        "Berlaku untuk area GRSM 3A dan GRSM 3B.",
        "Kuota lock budget sesuai stock NED Jan–Mar 2027, mengikuti sisa stock update di masing-masing titik CNS.",
        "Kuota GRSM 3A: 4.000 karton (kuota jual + bonus). Kuota GRSM 3B: 5.431 karton (kuota jual + bonus)."
      ]
    }),
    mk({
      id: "tph-lychee-bliss-b1g1-retail-des", brand: "Teh Pucuk Harum", code: "GT_1111",
      name: "TPH Lychee Bliss Buy 1 Get 1 Retail (GRSM 3A, 3B, 3C)",
      no: "BEV/SUN/26/11/9486", start: "2026-11-23", end: "2026-12-27", batas: "28 Maret 2027",
      periode: "23 Nov – 27 Des 2026", area: "Lokal, GRSM 3A, 3B, 3C",
      outlet: "All channel Retail",
      produk: "TPH Lychee Bliss",
      tags: ["All Retail", "GRSM 3A,3B,3C", "Beli 1 gratis 1", "Bonus produk"],
      keywords: ["tph", "teh pucuk", "lychee", "lychee bliss", "buy 1 get 1", "b1g1", "bonus", "retail", "3a", "3b", "3c"],
      offers: [{l: "Beli 1 karton TPH Lychee Bliss", b: "Bonus 1 karton", s: "Maks 2 karton bonus per transaksi"}],
      mech: [
        "Setiap pembelian 1 karton TPH Lychee Bliss mendapat 1 karton TPH Lychee Bliss.",
        "Maksimal bonus 2 karton per transaksi.",
        "Berlaku untuk channel All Retail, area GRSM 3A, 3B, 3C."
      ]
    }),

    /* ---------- Le Minerale ---------- */
    mk({
      id: "lm-discount-grsm3-des", brand: "Le Minerale",
      name: "Discount Pembelian LM 600ml, 1500ml, 330ml & 3L GRSM 3A, 3B & 3C Desember 2026",
      no: "BEV/SUN/26/11/9225", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "GRSM 3 (3A, 3B, 3C)", outlet: "GT & Institusi (Subdist Sisdima dan non Sisdima)",
      produk: "LM 600ml, 1500ml, 330ml, 3L",
      tags: ["GT & Institusi", "GRSM 3A,3B,3C", "Discount", "Akumulasi 4 SKU"],
      keywords: ["lm", "le minerale", "600ml", "1500ml", "330ml", "3l", "3 liter", "discount", "grsm 3", "3a", "3b", "3c"],
      offers: [
        {l: "Beli ≥450 CRT", b: "LM 600ml Rp2.700/CRT", s: "LM 1500ml Rp1.900, LM 330ml Rp400, 3L Rp1.900"},
        {l: "Beli 10–99 CRT", b: "LM 600ml Rp700/CRT", s: "LM 1500ml Rp400, LM 330ml Rp200, 3L Rp400"}
      ],
      mech: [
        "Berlaku untuk area GRSM 3A, 3B, 3C dan outlet GT & Institusi (Subdist Sisdima dan non Sisdima).",
        "Berlaku untuk qty akumulasi 4 SKU (LM 1500ml, 600ml, 330ml, 3L).",
        "Discount produk dicantumkan di invoice dan di-setting di Matrix.",
        "Outlet peserta adalah outlet yang diregister di Matrix.",
        "Di akhir program CNS/Subdist klaim dengan melampirkan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist.",
        "Bonus/reward outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian klaim ke PT TFJ."
      ],
      extra: [{
        title: "Tabel discount per CRT", lead: "Qty akumulasi 4 SKU dalam CRT.",
        table: {
          cols: [{h: "Akumulasi"}, {h: "LM 600ml", d: 1}, {h: "LM 1500ml", d: 1}, {h: "LM 330ml", d: 1}, {h: "LM 3L", d: 1}],
          rows: [
            {c: ["≥450 CRT", "Rp2.700", "Rp1.900", "Rp400", "Rp1.900"]},
            {c: ["250–449 CRT", "Rp2.000", "Rp1.500", "Rp300", "Rp1.500"]},
            {c: ["100–249 CRT", "Rp1.300", "Rp1.100", "Rp200", "Rp1.100"]},
            {c: ["10–99 CRT", "Rp700", "Rp400", "Rp200", "Rp400"]}
          ]
        }
      }]
    }),
    mk({
      id: "lm-galon-15l-discount-west-des", brand: "Le Minerale",
      name: "Discount Pembelian LM Galon 15L West Desember 2026",
      no: "BEV/SUN/26/11/9248", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "West (GRSM 1, 2, 3A, 3B, 3C, 4)", outlet: "GT & Institusi (Subdist Sisdima dan non Sisdima), SO, Gromin, Grosir, LMD, LMHS",
      produk: "Le Minerale Galon 15L",
      tags: ["SO", "Gromin", "Grosir", "Retail", "LMD", "LMHS", "West", "Galon 15L"],
      keywords: ["lm", "le minerale", "galon", "gallon", "15l", "15 liter", "discount", "west", "lmd", "lmhs"],
      offers: [
        {l: "SO: beli min. 250 galon", b: "Rp300/galon"},
        {l: "Gromin, Grosir: beli min. 60 galon", b: "Rp300/galon"},
        {l: "Retail, LMD, LMHS: beli min. 10 galon", b: "Rp500/galon"}
      ],
      mech: [
        "SO: minimal pembelian 250 galon mendapat discount Rp300/galon.",
        "Gromin, Grosir: minimal pembelian 60 galon mendapat discount Rp300/galon.",
        "Retail, LMD, LMHS: minimal pembelian 10 galon mendapat discount Rp500/galon.",
        "Berlaku untuk area West (GRSM 1, 2, 3A, 3B, 3C, 4).",
        "Discount produk dicantumkan di invoice dan di-setting di Matrix.",
        "Outlet peserta adalah outlet yang diregister di Matrix, LMD, dan NOO yang diajukan HOA dan diketahui PIC Marketing setempat.",
        "Di akhir program CNS/Subdist klaim dengan melampirkan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist.",
        "Bonus/reward outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian klaim ke PT TFJ."
      ]
    }),
    mk({
      id: "lm-galon-15l-cashback-west-des", brand: "Le Minerale", code: "TP_1111_GALLON",
      name: "Cashback Bulanan LM Galon 15L SO, Gromin, Grosir West (GRSM 3A, 3B, 3C & 4) Desember 2026",
      no: "BEV/SUN/26/11/9251", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "GR3 & GR4 (GRSM 3A, 3B, 3C, 4)", outlet: "Gromin, Grosir, SO, LMD",
      produk: "Le Minerale Galon 15L",
      tags: ["SO", "Gromin", "Grosir", "LMD", "GRSM 3A,3B,3C,4", "Cashback", "Galon 15L"],
      keywords: ["lm", "le minerale", "galon", "gallon", "15l", "15 liter", "cashback", "bulanan", "so", "gromin", "grosir"],
      offers: [
        {l: "SO: ≥100.000 galon", b: "Rp750/galon", s: "Terendah 1.500–4.999 galon: Rp300/galon"},
        {l: "Gromin: ≥1.000 galon", b: "Rp600/galon", s: "Terendah 300–499 galon: Rp350/galon"}
      ],
      mech: [
        "Berlaku untuk Gromin, Grosir, SO, LMD.",
        "Setiap outlet dengan total pembelian LM galon 15L sebulan mendapat discount tambahan (berupa cashback) sesuai tabel.",
        "Cashback diberikan di akhir periode program berdasarkan akumulasi pencapaian total sales LM galon 15L (sesuai strata). Bentuknya uang (potong PPh outlet/toko) atau discount yang di-setting di Matrix setelah program berakhir.",
        "Jika cashback dibayarkan dalam bentuk discount, potongan maksimal 30% dari pembelian barang LM botol dan LM galon per invoice.",
        "Outlet peserta adalah outlet yang diregister di Matrix.",
        "Di akhir program CNS/Subdist klaim dengan melampirkan report Matrix per Subdist / CNS (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist."
      ],
      extra: [
        {
          title: "Tabel cashback Gromin", lead: "Akumulasi pembelian LM galon 15L.",
          table: {
            cols: [{h: "Akumulasi", s: "galon"}, {h: "Cashback", s: "per galon", d: 1}],
            rows: [
              {c: ["≥1.000", "Rp600"]},
              {c: ["500–999", "Rp500"]},
              {c: ["300–499", "Rp350"]}
            ]
          }
        },
        {
          title: "Tabel cashback SO", lead: "Berlaku GRSM 3A, 3B, 3C, 4.",
          table: {
            cols: [{h: "Akumulasi", s: "galon"}, {h: "Cashback", s: "per galon", d: 1}],
            rows: [
              {c: ["≥100.000", "Rp750"]},
              {c: ["25.000–99.999", "Rp600"]},
              {c: ["10.000–24.999", "Rp550"]},
              {c: ["7.500–9.999", "Rp500"]},
              {c: ["5.000–7.499", "Rp400"]},
              {c: ["1.500–4.999", "Rp300"]}
            ]
          }
        }
      ]
    }),
    mk({
      id: "lm-galon-5l-west-des", brand: "Le Minerale", code: "TP_1111_EBS",
      name: "Pembelian Galon LM 5L West Desember 2026",
      no: "BEV/SUN/26/11/9250", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "West (GRSM 1, 2, 3A, 3B, 3C, 4)",
      outlet: "GT & Institusi (Subdist Sisdima dan non Sisdima), SO, Gromin, Grosir, LMD, Topping Up, Retail, LMHS",
      produk: "Le Minerale Galon 5L",
      tags: ["SO", "Gromin", "Grosir", "Retail", "LMD", "LMHS", "West", "Galon 5L", "Bonus produk"],
      keywords: ["lm", "le minerale", "galon", "gallon", "5l", "5 liter", "bonus", "west", "lmd", "lmhs"],
      offers: [
        {l: "Beli min. 4 CRT", b: "Bonus 1 pcs galon 5L", s: "Maks 2 pcs"},
        {l: "Beli min. 15 CRT", b: "Bonus 1 CRT galon 5L", s: "Berlaku kelipatan"}
      ],
      mech: [
        "Setiap pembelian minimal 4 CRT mendapat bonus 1 pcs galon 5L (maksimal 2 pcs).",
        "Setiap pembelian minimal 15 CRT mendapat bonus 1 CRT galon 5L, berlaku kelipatan.",
        "Program dicantumkan di invoice dan di-setting di Matrix.",
        "Outlet peserta adalah outlet yang diregister di Matrix, dan NOO yang diajukan HOA dan diketahui PIC Marketing setempat.",
        "Di akhir program CNS/Subdist klaim dengan melampirkan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist.",
        "Bonus/reward outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian klaim ke PT TFJ."
      ]
    }),
    mk({
      id: "lm-1500-beli-50-bonus-1-gr3-des", brand: "Le Minerale",
      name: "Pembelian LM 1500ml Beli 50 Karton Bonus 1 Karton GRSM 3A, 3B, 3C",
      no: "BEV/SUN/26/11/9279", start: "2026-11-17", end: "2026-12-27", batas: "29 Maret 2027",
      periode: "17 Nov – 27 Des 2026", area: "GRSM 3 (3A, 3B, 3C)", outlet: "All channel Grosir, Gromin, dan SO",
      produk: "Le Minerale 1500ml",
      klaim: "17 Nov – 16 Des, 17 – 27 Des 2026",
      tags: ["Grosir", "Gromin", "SO", "GRSM 3A,3B,3C", "Bonus produk", "Memorandum"],
      keywords: ["lm", "le minerale", "1500ml", "1,5 liter", "beli 50", "bonus 1 karton", "grsm 3", "3a", "3b", "3c"],
      offers: [{l: "Beli 50 karton LM 1500ml", b: "Bonus 1 karton LM 1500ml", s: "Berlaku kelipatan"}],
      memos: [{
        no: "00132/ZAP4/11/2026/MTFJ",
        summary: "Perubahan judul dan mekanisme: LM 330ml tidak lagi ikut hitungan.",
        changes: [
          "Judul sekarang: Pembelian LM 1500ml Beli 50 Karton Bonus 1 Karton GRSM 3A, 3B, 3C (sebelumnya: LM 1500ml & 330ml).",
          "Mekanisme poin 3: setiap pembelian 50 karton LM 1500ml mendapat bonus 1 karton LM 1500ml (sebelumnya: 50 karton LM 1500ml/LM 330ml, boleh mix)."
        ],
        pdf: pdf("memo-lm-1500-beli-50-bonus-1-gr3-des")
      }],
      mech: [
        "Berlaku untuk channel All Grosir, Gromin, dan SO, area GRSM 3A, 3B, 3C.",
        "Setiap pembelian 50 karton LM 1500ml mendapat bonus 1 karton LM 1500ml (menurut memorandum; surat asli masih menulis LM 1500ml/LM 330ml boleh mix).",
        "Berlaku kelipatan.",
        "Program di-setting di Matrix.",
        "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT TFJ."
      ]
    }),
    mk({
      id: "sample-wa-gromin-nov", brand: "Lintas Brand", code: "GT_1111",
      name: "Sample untuk Program WA Pelanggan Gromin Nasional",
      no: "BEV/SUN/26/11/9219", start: "2026-11-09", end: "2026-11-28", batas: "29 Januari 2027",
      periode: "9 – 28 Nov 2026", area: "Nasional", outlet: "Pelanggan Gromin (toko yang membeli paket WA blast)",
      produk: "Paket sample 7 SKU (lihat Mekanisme)",
      klaim: "9 – 28 Nov 2026",
      tags: ["Gromin", "Nasional", "WA blast", "Sample"],
      keywords: ["sample", "wa", "wa blast", "gromin", "fgr", "paket", "bonus 4 botol", "lm 600ml", "nasional"],
      offers: [{l: "Toko membeli paket WA blast", b: "Bonus 4 botol LM 600ml", s: "Untuk pelanggan toko. Penggantian ke toko lewat FGR"}],
      mech: [
        "Bonus 4 botol LM 600ml untuk pelanggan toko yang membeli paket WA blast.",
        "Bonus diberikan lebih dulu oleh pihak toko melalui Subdist/CNS. Nanti diganti TFJ melalui FGR yang dibuat tim Marketing.",
        "FGR diberikan di awal sebanyak 250 karton per GRSM untuk toko. Setelah produk sample habis di area, FGR di-request kembali.",
        "Kebutuhan FGR di-request oleh admin GRSM ke admin Marketing sesuai tabel terlampir di surat.",
        "Admin toko wajib merekap paket yang terjual beserta screenshot WA dan nota penjualan.",
        "Klaim bonus diberikan berdasarkan nota penjualan dan WA order."
      ],
      extra: [{
        title: "Isi paket (karton)",
        table: {
          cols: [{h: "SKU"}, {h: "Qty", s: "karton"}],
          rows: [
            {c: ["TPH 350ml", "1"]}, {c: ["LM 600ml", "2"]}, {c: ["Kopikap Jumbo", "1"]},
            {c: ["Collagena", "1"]}, {c: ["Nipis Madu 330ml", "1"]}, {c: ["TPH Tetra", "1"]}, {c: ["Susu 7 Kurma", "1"]}
          ]
        }
      }]
    }),

    /* ---------- Aspen ---------- */
    mk({
      id: "aspen-250-retail-gr3a3c4-des", brand: "Aspen", code: "TP_1111",
      name: "Aspen 250ml Channel Retail GRSM 3A, 3C, 4",
      no: "WAT/ASP/26/11/9010", start: "2026-11-16", end: "2026-12-27", batas: "29 Maret 2027",
      periode: "16 Nov – 27 Des 2026", area: "GRSM 3A, 3C, 4", outlet: "All channel Retail",
      produk: "Aspen 250ml", klaim: "16 Nov – 15 Des, 16 – 27 Des 2026",
      tags: ["All Retail", "GRSM 3A,3C,4", "Discount"],
      keywords: ["aspen", "250ml", "shrink", "potongan", "retail", "3a", "3c", "grsm 4"],
      offers: [{l: "Beli ≥3 shrink Aspen 250ml", b: "Potongan Rp1.000/shrink"}],
      mech: [
        "Berlaku untuk channel All Retail, area GRSM 3A, 3C, 4.",
        "Setiap pembelian 3 shrink atau lebih mendapat potongan Rp1.000 per shrink.",
        "Program di-setting di Matrix.",
        "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT OKE."
      ]
    }),
    mk({
      id: "aspen-250-so-gromin-gr3a3c4-des", brand: "Aspen", code: "GT_1111",
      name: "Aspen 250ml Channel SO, Gromin GRSM 3A, 3C, 4",
      no: "WAT/ASP/26/11/9020", start: "2026-11-20", end: "2026-12-27", batas: "28 Maret 2027",
      periode: "20 Nov – 27 Des 2026", area: "Lokal, GRSM 3A, 3C, 4", outlet: "SO, Gromin, Grosir, Retail",
      produk: "Aspen 250ml", klaim: "20 Nov – 19 Des, 20 – 27 Des 2026",
      tags: ["SO", "Gromin", "Grosir", "Retail", "GRSM 3A,3C,4", "Discount"],
      keywords: ["aspen", "250ml", "shrink", "potongan", "so", "gromin", "grosir", "3a", "3c", "grsm 4"],
      offers: [
        {l: "Beli ≥250 shrink Aspen 250ml", b: "Potongan Rp1.000/shrink"},
        {l: "Beli 50–249 shrink", b: "Potongan Rp500/shrink"}
      ],
      mech: [
        "Berlaku untuk channel SO, Gromin, Grosir, Retail, area GRSM 3A, 3C, 4.",
        "Pembelian 250 shrink atau lebih: potongan Rp1.000/shrink.",
        "Pembelian 50–249 shrink: potongan Rp500/shrink.",
        "Program di-setting di Matrix.",
        "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT OKE."
      ]
    }),
    mk({
      id: "aspen-700-so-grosir-gr3a3b4-potongan", brand: "Aspen", code: "TP_1111",
      name: "Potongan Aspen 700ml SO & Grosir GR 3A, 3B & 4",
      no: "WAT/ASP/26/11/9009", start: "2026-11-16", end: "2027-01-30", batas: "1 April 2027",
      periode: "16 Nov 2026 – 30 Jan 2027", area: "GR 3A, GR 3B, GR 4", outlet: "SO, Gromin, Grosir",
      produk: "Aspen 700ml", klaim: "16 Nov – 15 Des 2026, 16 Des 2026 – 15 Jan 2027, 16 – 30 Jan 2027",
      tags: ["SO", "Gromin", "Grosir", "GR 3A,3B,4", "Potongan", "Strata"],
      keywords: ["aspen", "700ml", "shrink", "potongan", "so", "gromin", "grosir", "strata", "3a", "3b", "grsm 4"],
      offers: [
        {l: "Beli ≥200 shrink Aspen 700ml", b: "Potongan Rp4.500/shrink"},
        {l: "Beli 50–199 shrink", b: "Potongan Rp2.000/shrink"},
        {l: "Beli 10–49 shrink", b: "Potongan Rp1.500/shrink"}
      ],
      mech: [
        "Berlaku untuk channel SO, Gromin, Grosir, area GRSM 3A, GR 3B, GR 4.",
        "Pembelian 200 shrink atau lebih: potongan Rp4.500/shrink.",
        "Pembelian 50–199 shrink: potongan Rp2.000/shrink.",
        "Pembelian 10–49 shrink: potongan Rp1.500/shrink.",
        "Program di-setting di Matrix.",
        "Maksimal pengambilan mengikuti strata outlet (lihat tabel).",
        "Catatan: 3 minggu pertama semua outlet masuk Strata E. Setelah 3 minggu, toko di-review dan masuk strata sesuai hasil (daftar toko setelah 3 minggu dilampirkan di surat)."
      ],
      extra: [{
        title: "Strata maksimal pengambilan",
        lead: "Satuan angka tidak tertulis di surat.",
        table: {
          cols: [{h: "Strata"}, {h: "Pengambilan"}],
          rows: [
            {c: ["A", "≥1.300"]}, {c: ["B", "1.000–1.299"]}, {c: ["C", "700–999"]},
            {c: ["D", "400–699"]}, {c: ["E", "200–399"]}
          ]
        }
      }]
    }),
    mk({
      id: "aspen-cosmo-gmm-2-1-des", brand: "Aspen", code: "GT_1111",
      name: "Cosmo Aspen 700ml di GMM, Beli 2 Gratis 1 (Counter)",
      no: "WAT/ASP/26/11/9016", start: "2026-11-23", end: "2026-12-31", batas: "29 Maret 2027",
      periode: "23 Nov – 31 Des 2026", area: "Lokal. GRSM 3A, 3B, 3C, 4, 5A, 5B, 6A, 6B (selected outlet)",
      outlet: "All GMM yang sudah listing Aspen dan ada program kompetitor (outlet yang terdapat cosmo kompetitor)",
      produk: "Aspen 700ml", klaim: "23 Nov – 22 Des, 23 – 31 Des 2026",
      tags: ["GMM", "Selected outlet", "Cosmo", "Bonus produk"],
      keywords: ["aspen", "700ml", "cosmo", "gmm", "counter", "2+1", "bonus", "pop", "kompetitor"],
      offers: [{l: "Beli 2 botol Aspen 700ml", b: "Bonus 1 botol Aspen 700ml", s: "Hitungan 2 shrink gratis 1 shrink. Maks bonus 10 shrink"}],
      mech: [
        "Berlaku untuk channel All GMM yang sudah listing Aspen dan ada program kompetitor. Area GRSM 3A, 3B, 3C, 4, 5A, 5B, 6A, 6B (selected outlet yang terdapat cosmo kompetitor).",
        "Setiap beli 2 botol Aspen 700ml mendapat 1 botol Aspen 700ml.",
        "Bonus wajib diturunkan ke konsumen.",
        "Wajib dibuatkan POP mengenai cosmo Aspen tersebut.",
        "Bonus diberikan di awal saat order Aspen 700ml. Hitungan kelipatan 2 shrink Aspen 700ml gratis 1 shrink Aspen 700ml. Maksimal bonus 10 shrink."
      ]
    }),
    mk({
      id: "aspen-cosmo-gmm-gr3456-des", brand: "Aspen", code: "TP_1111",
      name: "Cosmo Aspen 700ml di GMM GRSM 3, 4, 5, 6",
      no: "WAT/ASP/26/11/9005", start: "2026-11-16", end: "2026-12-06", batas: "8 Maret 2027",
      periode: "16 Nov – 6 Des 2026", area: "GR 3, 4, 5, 6 (GRSM 3A, 3B, 3C, 4, 5A, 5B, 6A, 6B)",
      outlet: "All GMM yang sudah listing Aspen",
      produk: "Aspen 700ml", klaim: "16 Nov – 6 Des 2026 (1 kali)",
      tags: ["GMM", "GRSM 3,4,5,6", "Cosmo", "Bonus produk"],
      keywords: ["aspen", "700ml", "cosmo", "gmm", "beli 3", "bonus", "pop"],
      offers: [{l: "Beli 3 botol Aspen 700ml", b: "Bonus 1 botol Aspen 700ml", s: "Hitungan 3 shrink gratis 1 shrink. Maks bonus 10 shrink"}],
      mech: [
        "Berlaku untuk channel All GMM yang sudah listing Aspen, area GRSM 3A, 3B, 3C, 4, 5A, 5B, 6A, 6B.",
        "Setiap beli 3 botol Aspen 700ml mendapat 1 botol Aspen 700ml.",
        "Bonus wajib diturunkan ke konsumen.",
        "Wajib dibuatkan POP mengenai cosmo Aspen tersebut.",
        "Bonus diberikan di awal saat order Aspen 700ml. Hitungan kelipatan 3 shrink Aspen 700ml gratis 1 shrink Aspen 700ml. Maksimal bonus 10 shrink."
      ]
    }),

    /* ---------- Susu 7 Kurma, Collagena ---------- */
    mk({
      id: "kurma-distribusi-des", brand: "Susu 7 Kurma",
      name: "Distribusi Susu 7 Kurma Nasional Desember 2026",
      no: "BEV/KUR/26/11/9016", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "Nasional (GRSM 1–8)", outlet: "Subdist GT & Institusi (Sisdima dan non Sisdima), Grosir, Gromin, SO, Topping Up, Retail, TDP, Lokpen",
      produk: "Susu 7 Kurma",
      tags: ["Subdist GT & Institusi", "Grosir", "Gromin", "SO", "Retail", "Nasional", "GRSM 1–8"],
      keywords: ["susu 7 kurma", "susu tujuh kurma", "kurma", "distribusi", "discount", "karton"],
      offers: [
        {l: "Beli ≥25 karton", b: "Rp4.000/karton"},
        {l: "Beli 15–24 karton", b: "Rp3.000/karton"},
        {l: "Beli 10–14 karton", b: "Rp2.000/karton"}
      ],
      mech: [
        "Pembelian 25 karton atau lebih mendapat discount Rp4.000/karton.",
        "Pembelian 15–24 karton mendapat discount Rp3.000/karton.",
        "Pembelian 10–14 karton mendapat discount Rp2.000/karton.",
        SETMX, BAYAR_TFJ
      ]
    }),
    mk({
      id: "kurma-disc-retail-des", brand: "Susu 7 Kurma",
      name: "Discount Susu 7 Kurma 12's Retail Nasional Desember 2026",
      no: "BEV/KUR/26/11/9017", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "Nasional (GRSM 1–8)", outlet: RETAIL,
      produk: "Susu 7 Kurma 12's (kaleng)",
      tags: ["Retail", "Nasional", "GRSM 1–8", "Discount"],
      keywords: ["susu 7 kurma", "susu tujuh kurma", "kurma", "12's", "kaleng", "retail", "discount"],
      offers: [{l: "Beli 6 kaleng Susu 7 Kurma", b: "Disc Rp3.000", s: "Maks Rp12.000 per transaksi. Berlaku kelipatan"}],
      mech: [
        "Setiap pembelian 6 kaleng Susu 7 Kurma mendapat discount Rp3.000 per 6 kaleng.",
        "Maksimal discount Rp12.000 per transaksi.",
        "Berlaku kelipatan.",
        SETMX, BAYAR_TFJ
      ]
    }),
    mk({
      id: "collagena-distribusi-des", brand: "Collagena",
      name: "Distribusi Collagena SO, Grosir, Gromin Nasional Desember 2026",
      no: "BEV/COL/26/11/9019", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "Nasional (GRSM 1–8)", outlet: "SO, Grosir, Gromin, TDP Grosir, TDP Gromin",
      produk: "Collagena",
      tags: ["SO", "Grosir", "Gromin", "TDP", "Nasional", "GRSM 1–8"],
      keywords: ["collagena", "distribusi", "discount", "karton", "persen"],
      offers: [
        {l: "Beli ≥25 karton", b: "Disc 4%", s: "Dari harga masing-masing region"},
        {l: "Beli 15–24 karton", b: "Disc 2%", s: "Dari harga masing-masing region"}
      ],
      mech: [
        "Setiap pembelian 25 karton atau lebih mendapat discount 4% dari harga masing-masing region.",
        "Setiap pembelian 15–24 karton mendapat discount 2% dari harga masing-masing region.",
        SETMX, BAYAR_TFJ
      ]
    }),
    mk({
      id: "collagena-disc-retail-des", brand: "Collagena",
      name: "Discount Collagena 12's Retail Nasional Desember 2026",
      no: "BEV/COL/26/11/9021", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "Nasional (GRSM 1–8)", outlet: "All channel Retail: " + RETAIL,
      produk: "Collagena 12's (kaleng)",
      tags: ["Retail", "Nasional", "GRSM 1–8", "Discount"],
      keywords: ["collagena", "12's", "kaleng", "retail", "discount"],
      offers: [{l: "Beli 6 kaleng Collagena", b: "Disc Rp3.000", s: "Maks Rp12.000 per transaksi. Berlaku kelipatan"}],
      mech: [
        "Setiap pembelian 6 kaleng Collagena mendapat discount Rp3.000 per 6 kaleng.",
        "Maksimal discount Rp12.000 per transaksi.",
        "Berlaku kelipatan.",
        SETMX, BAYAR_TFJ
      ]
    }),
    mk({
      id: "gentle-gen-kurma-collagena-nov", brand: "Lintas Brand", code: "TP_0000",
      name: "Promo Susu 7 Kurma atau Collagena Free Gentle Gen",
      no: "HOM/GGG/26/10/9135", start: "2026-11-01", end: "2026-11-30", batas: "29 Januari 2027",
      periode: "1 – 30 Nov 2026", area: "Nasional", outlet: "Toko (pelaksana Team Sales M3)",
      produk: "Susu 7 Kurma, Collagena. Support: Gentle Gen pouch 360ml",
      klaim: "1 – 30 Nov 2026",
      tags: ["Nasional", "Cosmo", "Gentle Gen", "Susu 7 Kurma", "Collagena"],
      keywords: ["gentle gen", "susu 7 kurma", "collagena", "kilau", "nipis", "pouch", "cosmo", "eo", "pascal", "trade program"],
      offers: [{l: "Beli 1 karton Susu 7 Kurma atau Collagena", b: "Support 2 pouch Gentle Gen 360ml", s: "Diberikan ke konsumen sebagai cosmo"}],
      mech: [
        "Pelaksana program: Team Sales M3. Area nasional.",
        "Untuk pembelian 1 karton Susu Tujuh Kurma atau Collagena, toko mendapat support 2 pouch Gentle Gen 360ml untuk diberikan ke konsumen sebagai cosmo.",
        "Jika stock Gentle Gen pouch tidak tersedia, diganti 2 pouch Kilau Nipis 630ml atau 6 pouch Kilau Nipis 210ml (kode 370037, 370038, 370039, 370105, 370126, 370128, 370145, 370146, 370147, 370072, 370073).",
        "Produk Gentle Gen pouch 360ml dibeli di CNS/Subdist terdekat oleh EO M3 yang ditunjuk.",
        "Setiap pembelian Gentle Gen pouch 360ml, pihak EO mendapat potongan harga 50%.",
        "Program di-setting di Matrix (on invoice).",
        "Biaya program diklaim ke PT Pascal Corpindo Semesta."
      ]
    }),

    /* ---------- Kopikap, Kopiko 78 ---------- */
    mk({
      id: "kopikap-so-gromin-grosir-des", brand: "Kopikap Jumbo", code: "GT_1111",
      name: "Pembelian Kopikap Jumbo Desember 2026 Grosir, Gromin, SO GRSM 1,2,3",
      no: "BEV/SUN/26/11/9295", start: "2026-11-23", end: "2026-12-27", batas: "28 Maret 2027",
      area: "GRSM 1, 2, 3A, 3B, 3C. Tidak berlaku di Purwasuka, Betacik, CNS Pekayon (Bekasi) dan GRSM 4",
      outlet: "SO, Gromin, Grosir, TDP Grosir, TDP Gromin",
      produk: "Kopikap Jumbo",
      tags: ["SO", "Gromin", "Grosir", "GRSM 1,2,3", "Discount"],
      keywords: ["kopikap", "kap jumbo", "kopikap jumbo", "discount", "so", "gromin", "grosir", "purwasuka", "betacik", "pekayon"],
      offers: [
        {l: "Beli ≥25 CRT", b: "Rp2.000/CRT"},
        {l: "Beli 10–24 CRT", b: "Rp1.500/CRT"}
      ],
      mech: [
        "Berlaku untuk SO, Gromin, Grosir, TDP Grosir, TDP Gromin.",
        "Pembelian 25 CRT atau lebih: discount Rp2.000/CRT.",
        "Pembelian 10–24 CRT: discount Rp1.500/CRT.",
        "Berlaku hanya di GRSM 1, 2, 3A, 3B, 3C. Tidak berlaku di Purwasuka, Betacik, CNS Pekayon (Bekasi) dan GRSM 4.",
        "Program dicantumkan di invoice dan di-setting di Matrix.",
        "Outlet peserta adalah outlet yang diregister di Matrix.",
        "Di akhir program CNS/Subdist klaim dengan melampirkan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist."
      ]
    }),
    mk({
      id: "kopikap-lm600-paket-gr34-des", brand: "Kopikap Jumbo",
      name: "Pembelian Paket Kopikap Jumbo + LM 600ml Retail GR3 & 4 Desember 2026",
      no: "BEV/SUN/26/11/9308", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "GR3 & 4 (GRSM 3A, 3B, 3C, 4)",
      outlet: "All channel Retail GT: Retail, Kantin, Koperasi, Rest Area, TDP Retail, Lokpen, Bengkel, TU, Lokman, Rumah Makan, Kuliner, Kantin Sekolah, GMM Retail",
      tags: ["All channel Retail GT", "GRSM 3A,3B,3C,4", "Discount paket"],
      keywords: ["kopikap", "kap jumbo", "le minerale", "lm", "600ml", "paket", "discount", "retail", "gr3", "gr4"],
      offers: [{l: "Beli paket 1 karton Kopikap Jumbo + 1 karton LM 600ml", b: "Disc LM 600ml Rp5.000", s: "Berlaku kelipatan"}],
      mech: [
        "Setiap pembelian paket 1 karton Kopikap Jumbo + 1 karton Le Minerale 600ml mendapat discount untuk LM 600ml sebesar Rp5.000.",
        "Berlaku kelipatan.",
        "Program dicantumkan di invoice dan di-setting di Matrix.",
        "Outlet peserta adalah outlet yang diregister di Matrix.",
        "Di akhir program CNS/Subdist klaim dengan melampirkan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist."
      ]
    }),
    mk({
      id: "k78c-push-distribusi-west-des", brand: "Kopiko 78", code: "GT_1111",
      name: "Push Distribusi Kopiko 78C di SO, Grosir & Gromin West (Desember 2026)",
      no: "BEV/78C/26/11/9006", start: "2026-11-23", end: "2026-12-27", batas: "28 Maret 2027",
      area: "West (GRSM 1, 2, 3, 4)", outlet: "SO, Grosir, Gromin, TDP Grosir, TDP Gromin",
      produk: "Kopiko 78C (mix)",
      tags: ["SO", "Grosir", "Gromin", "TDP", "West", "Discount"],
      keywords: ["kopiko", "kopiko 78", "78c", "k78c", "distribusi", "discount", "mix", "so", "gromin", "grosir"],
      offers: [
        {l: "Beli ≥50 CRT (mix)", b: "Rp1.800/CRT"},
        {l: "Beli 10–49 CRT (mix)", b: "Rp1.200/CRT"},
        {l: "Beli 5–9 CRT (mix)", b: "Rp600/CRT"}
      ],
      mech: [
        "Berlaku untuk SO, Grosir, Gromin, TDP Grosir, TDP Gromin di area GRSM 1, 2, 3, 4.",
        "Pembelian ≥50 CRT mendapat disc Rp1.800/CRT (mix).",
        "Pembelian 10–49 CRT mendapat disc Rp1.200/CRT (mix).",
        "Pembelian 5–9 CRT mendapat disc Rp600/CRT (mix).",
        "Program di-setting di Matrix."
      ]
    }),

    /* ---------- Susu 7 Kurma Kids ---------- */
    mk({
      id: "s7k-kids-gmm-des", brand: "Susu 7 Kurma Kids", code: "GT_1111",
      name: "Promo S7K Kids di GMM GRSM 3A, 3B, 3C, 4",
      no: "BEV/TKK/26/11/9046", start: "2026-11-23", end: "2026-12-27", batas: "28 Maret 2027",
      area: "GR3 & 4 (GRSM 3A, 3B, 3C, 4)", outlet: "GMM yang terlampir di surat",
      produk: "Susu 7 Kurma Kids (S7K Kids)",
      tags: ["GMM", "GRSM 3A,3B,3C,4", "Potongan harga", "POSM"],
      keywords: ["s7k", "s7k kids", "susu 7 kurma kids", "kids", "gmm", "potongan", "posm"],
      offers: [{l: "Setiap pembelian S7K Kids", b: "Potongan Rp12.000/karton", s: "Toko memberi discount Rp300/pcs ke konsumen"}],
      mech: [
        "Berlaku untuk GMM yang terlampir di surat, area GRSM 3A, 3B, 3C, 4.",
        "Setiap pembelian produk S7K Kids, toko mendapat potongan harga Rp12.000 per karton.",
        "Potongan dipotong di faktur. Pihak toko memberikan discount kepada konsumen sebesar Rp300/pcs, dan memasang POSM \"Beli S7K Kids 5 pcs mendapat pot. 1.500 atau 300/pcs\".",
        SETMX, BAYAR_TFJ
      ]
    }),
    mk({
      id: "s7k-kids-grosir-des", brand: "Susu 7 Kurma Kids", code: "GT_1111",
      name: "Promo S7K Kids di Grosir GRSM 3A, 3B, 3C, 4 Desember 2026",
      no: "BEV/TKK/26/11/9044", start: "2026-11-23", end: "2026-12-27", batas: "28 Maret 2027",
      area: "GR3 & 4 (GRSM 3A, 3B, 3C, 4)", outlet: "SO, Gromin, Grosir, TDP Grosir, TDP Gromin",
      produk: "Susu 7 Kurma Kids (S7K Kids)",
      tags: ["SO", "Gromin", "Grosir", "TDP", "GRSM 3A,3B,3C,4", "Bonus produk"],
      keywords: ["s7k", "s7k kids", "susu 7 kurma kids", "kids", "grosir", "bonus", "beli 10"],
      offers: [{l: "Beli 10 karton S7K Kids", b: "Bonus 1 karton S7K Kids", s: "Maks bonus 5 karton"}],
      mech: [
        "Setiap pembelian 10 karton S7K Kids mendapat 1 karton S7K Kids.",
        "Maksimal bonus 5 karton.",
        SETMX,
        "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT TFJ."
      ]
    }),

    /* ---------- Nipis Madu ---------- */
    mk({
      id: "nipis-madu-gr3a-des", brand: "Nipis Madu", code: "TP_1111",
      name: "Trade Promo Nipis Madu 330ml GRSM 3A Desember 2026",
      no: "BEV/CSD/26/11/9053", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "GR3A", outlet: "All outlet GT: Grosir, Gromin, SO, Retail, Lokpen, GMM Retail, Kantin, Rumah Makan, Koperasi, Rest Area, Kuliner, TDP Retail, Lokman, Topping Up",
      produk: "Nipis Madu 330ml",
      tags: ["All outlet GT", "GR3A", "Discount"],
      keywords: ["nipis", "nipis madu", "330ml", "discount", "trade promo", "gr3a", "grsm 3a"],
      offers: [
        {l: "Beli ≥700 CRT", b: "Rp700/CRT", s: "Terendah 5–19 CRT: Rp200/CRT"}
      ],
      mech: [
        "Berlaku untuk semua outlet GT, area GR3A, produk Nipis Madu 330ml.",
        "Pembelian ≥700 CRT: disc Rp700/CRT.",
        "Pembelian 450–699 CRT: disc Rp650/CRT.",
        "Pembelian 250–449 CRT: disc Rp600/CRT.",
        "Pembelian 150–249 CRT: disc Rp500/CRT.",
        "Pembelian 75–149 CRT: disc Rp400/CRT.",
        "Pembelian 20–74 CRT: disc Rp300/CRT.",
        "Pembelian 5–19 CRT: disc Rp200/CRT.",
        SETMX,
        "Outlet peserta adalah outlet yang diregister di Matrix.",
        "Di akhir program Subdist klaim dengan melampirkan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel penanggung jawab Subdist."
      ]
    }),
    mk({
      id: "nipis-madu-ikat-target-west-des", brand: "Nipis Madu", code: "TP_1111",
      name: "Ikat Target Nipis Madu 330ml West Desember 2026",
      no: "BEV/CSD/26/11/9057", start: "2026-11-23", end: "2026-12-27", batas: "29 Maret 2027",
      area: "West (GRSM 1, 2, 3A, 3B, 3C, 4)",
      outlet: "Semua outlet GT: Grosir, Gromin, SO, Retail, TDP, Lokpen, GMM, Kantin, Rumah Makan, Koperasi, Topping Up",
      produk: "Nipis Madu 330ml",
      tags: ["All outlet GT", "GRSM 1,2,3,4", "Ikat target", "Cashback"],
      keywords: ["nipis", "nipis madu", "330ml", "ikat target", "cashback", "kelas", "growth", "west"],
      offers: [{l: "Cashback Nipis Madu 330ml", b: "Rp300–1.000/CRT", s: "Tergantung kelas A–E, capaian 100% dan min. growth"}],
      mech: [
        "Berlaku untuk semua outlet GT, area GRSM 1, 2, 3A, 3B, 3C, 4.",
        "Cashback dibayar per CRT sesuai kelas pencapaian, jika capaian 100% dan memenuhi minimal growth.",
        "Bonus diberikan di akhir periode program, di-setting di faktur (bonus di-setting pada bulan berikutnya).",
        "Growth berdasarkan STM Q1.2026, atau 13 minggu (September, Oktober, November), atau Q3.2025."
      ],
      extra: [{
        title: "Kelas dan cashback",
        lead: "Pencapaian dalam CRT selama periode program (5 minggu).",
        table: {
          cols: [{h: "Kelas"}, {h: "Pencapaian", s: "CRT"}, {h: "Cashback", s: "per CRT", d: 1}, {h: "Min. growth"}],
          rows: [
            {c: ["A", "≥3.000", "Rp1.000", "2%"]},
            {c: ["B", "2.000–2.999", "Rp900", "5%"]},
            {c: ["C", "1.000–1.999", "Rp700", "7%"]},
            {c: ["D", "325–999", "Rp500", "8%"]},
            {c: ["E", "200–324", "Rp300", "10%"]}
          ]
        }
      }]
    }),

    /* ---------- Ikat target TPH SO, Gromin ---------- */
    mk({
      id: "tph-ikat-target-so-gromin-des", brand: "Teh Pucuk Harum", code: "TP_1111",
      name: "Ikat Target TPH SO, Gromin Desember 2026 Area West (GRSM 3, 4)",
      no: "BEV/BEV/26/11/9356", start: "2026-11-23", end: "2026-12-27", batas: "29 Februari 2027 (tertulis di surat, tanggal ini tidak ada di kalender 2027)",
      area: "GRSM 3 & 4 (3A, 3B, 3C, 4)",
      outlet: "SO, Gromin, Grosir yang sudah mengikuti program sebelumnya, atau SO/Gromin/Grosir baru yang disetujui RSM",
      produk: "TPH 350ml dan 500ml, semua variant",
      tags: ["SO", "Gromin", "Grosir", "GRSM 3,4", "Ikat target", "Cashback", "Bonus produk"],
      keywords: ["tph", "teh pucuk", "350ml", "500ml", "ikat target", "cashback", "zona", "bonus produk", "so", "gromin", "week"],
      offers: [
        {l: "Cashback SO (zona A+ sampai D)", b: "Rp900–2.000/CRT", s: "Zona A+ Rp2.000, zona D Rp900"},
        {l: "Cashback Gromin (zona E sampai G)", b: "Rp600–1.000/CRT", s: "Zona E Rp1.000, zona G Rp600"},
        {l: "Bonus produk TPH 350ml", b: "1–75 CRT", s: "Capai 100% target Des dan ≥70% di week 04"}
      ],
      mech: [
        "Program berlaku untuk outlet SO, Gromin, Grosir yang sudah mengikuti program sebelumnya, atau SO/Gromin/Grosir baru yang disetujui RSM.",
        "Outlet SO/Gromin dibuatkan surat ikat target yang ditandatangani Subdist/AOM, RSM, dan PIC/penanggung jawab outlet.",
        "Produk: TPH 350ml dan 500ml all variant. Berlaku untuk area GRSM 3A, 3B, 3C, 4.",
        "Cashback bulanan diberikan sesuai zona pengambilan per week. Zona boleh naik, tetapi turun maksimal 1 level. Contoh: outlet Zona C boleh naik ke Zona A atau B, tetapi turun hanya boleh ke Zona D.",
        "Bonus produk TPH 350ml diberikan jika outlet mencapai 100% target Desember 2026, dan pencapaian di week 04 minimal 70%. Jika outlet naik zona, outlet pasti mendapat bonus produk.",
        "Target Desember 2026 berdasarkan STM Q2.2026 dan STM Q3.2026, atau rata-rata 13 minggu (September, Oktober, November).",
        "Cashback bulanan dan bonus produk diberikan setelah program berakhir (di-setting di Matrix di akhir periode program).",
        "Cashback bulanan diberikan dengan mekanisme potongan di faktur (berupa discount), transfer vendor, atau potong tagihan. PPh bonus sesuai ketentuan perpajakan.",
        "Setiap order penjualan ke SO/Gromin harus mendapat persetujuan Subdist/NR terkait.",
        "Pelaksana program adalah Team Operasional."
      ],
      extra: [
        {
          title: "Tabel SO (GRSM 3, 4)",
          lead: "Target periode Desember 2026 (5 minggu), dalam CRT.",
          table: {
            cols: [{h: "Zona"}, {h: "Target", s: "per minggu"}, {h: "Periode Des", s: "5 minggu"}, {h: "Min. growth"}, {h: "Cashback", s: "per CRT", d: 1}, {h: "Bonus produk", s: "min. MTD 70%", d: 1}],
            rows: [
              {c: ["A+", "10.000", "≥50.000", "–", "Rp2.000", "75 CRT"]},
              {c: ["A", "7.000", "35.000–49.999", "5%", "Rp1.750", "50 CRT"]},
              {c: ["B", "5.000", "25.000–34.999", "10%", "Rp1.400", "45 CRT"]},
              {c: ["C", "2.500", "12.500–24.999", "10%", "Rp1.100", "40 CRT"]},
              {c: ["D", "1.000", "5.000–12.499", "15%", "Rp900", "20 CRT"]}
            ]
          }
        },
        {
          title: "Tabel Gromin (GRSM 3, 4)",
          lead: "Surat menulis batas zona E sebagai 1.2500. Dibaca ≥1.250 (250 per minggu × 5 minggu).",
          table: {
            cols: [{h: "Zona"}, {h: "Target", s: "per minggu"}, {h: "Periode Des", s: "5 minggu"}, {h: "Min. growth"}, {h: "Cashback", s: "per CRT", d: 1}, {h: "Bonus produk", s: "min. MTD 70%", d: 1}],
            rows: [
              {c: ["E", "250", "≥1.250", "5%", "Rp1.000", "10 CRT"]},
              {c: ["F", "100", "500–1.249", "10%", "Rp800", "5 CRT"]},
              {c: ["G", "50", "250–499", "10%", "Rp600", "1 CRT"]}
            ]
          }
        }
      ]
    })
  ];

  window.BATCHES = (window.BATCHES || []).concat([{
    updated: "2026-11-24 06:30",
    text: "Surat program Desember 2026: 28 program dan 2 memorandum (AP 9528 TPH 1300ml, AP 9279 LM 1500ml).",
    programs: programs
  }]);
})();
