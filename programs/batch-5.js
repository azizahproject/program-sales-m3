/* Batch 5. Surat program batch 2 (Okt 2026) dan 3 memorandum (AP 9046, 9555, 9331). */
(function () {
  const pdf = id => ({view: "pdf/" + id + ".pdf", download: "pdf/" + id + ".pdf"});
  const ADDED = "2026-10-27";

  /* Ikat target LM 600ml: bentuk sama untuk Q3 dan Q4, beda periode dan teks */
  function lm600(o) {
    return {
      id: o.id, brand: "Le Minerale", name: o.name, code: "TP_1111", no: o.no, added: o.added,
      pdf: pdf(o.id), memos: o.memos,
      start: o.start, end: o.end,
      tags: ["SO", "Gromin", "Grosir", "GRSM 3A,3B,3C", "Ikat target"],
      keywords: ["lm", "le minerale", "600ml", "ikat target", "cashback", "bonus triwulan", "zona", "grsm 3"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "Cashback bulanan LM 600ml", b: "Rp600–1.100/CRT", s: "Tergantung zona A–E"},
            {l: "Bonus triwulan, capaian 90–99%", b: "Rp150–500/CRT", s: "Tergantung zona A–E"},
            {l: "Bonus triwulan, capaian >100%", b: "Rp300–700/CRT", s: "Tergantung zona A–E"}
          ],
          kv: [
            ["Periode program", o.periode],
            ["Area", "GRSM 3A, 3B, 3C"],
            ["Outlet", "SO, Gromin, Grosir terdaftar, atau outlet baru yang disetujui RSM"],
            ["Produk", "Le Minerale 600ml"],
            ["No. Action Proposal", o.no],
            ["Periode klaim", o.klaim],
            ["Batas akhir klaim", o.batas]
          ]
        },
        {
          title: "Zona dan cashback bulanan",
          lead: "Target dalam CRT. Cashback dibayar per CRT.",
          table: {
            cols: [{h: "Zona"}, {h: "Target", s: "per minggu"}, {h: o.p1, s: "4 minggu"}, {h: o.p2, s: "5 minggu"}, {h: "Cashback", s: "per CRT", d: 1}, {h: "Min. growth"}],
            rows: [
              {c: ["A", "2.500–9.999", "≥10.000", "≥12.500", "Rp1.100", "–"]},
              {c: ["B", "1.500–2.499", "6.000–9.999", "7.500–12.499", "Rp900", "5%"]},
              {c: ["C", "650–1.499", "2.600–5.999", "3.250–7.499", "Rp800", "10%"]},
              {c: ["D", "250–649", "1.000–2.599", "1.250–3.249", "Rp700", "15%"]},
              {c: ["E", "100–249", "400–999", "500–1.249", "Rp600", "15%"]}
            ]
          }
        },
        {
          title: "Bonus triwulan",
          lead: o.bonusLead,
          table: {
            cols: [{h: "Zona"}, {h: "Target", s: "13 minggu (CRT)"}, {h: "Capaian 90–99%", s: "per CRT", d: 1}, {h: "Capaian >100%", s: "per CRT", d: 1}],
            rows: [
              {c: ["A", "≥32.500", "Rp500", "Rp700"]},
              {c: ["B", "19.500–32.499", "Rp350", "Rp500"]},
              {c: ["C", "8.450–19.499", "Rp250", "Rp400"]},
              {c: ["D", "3.250–8.449", "Rp150", "Rp300"]},
              {c: ["E", "1.300–3.249", "Rp150", "Rp300"]}
            ]
          }
        },
        {
          title: "Ketentuan pemberian", fold: true,
          list: o.ketentuan
        }
      ]
    };
  }

  const ketCommon = [
    "Outlet SO/Gromin/Grosir dibuatkan surat ikat target yang ditandatangani Subdist/AOM, RSM, dan pemilik/penanggung jawab outlet.",
    "Target per minggu outlet minimal growth sesuai zona.",
    "Pelaksana program adalah Team Operational."
  ];

  const programs = [
    lm600({
      id: "lm600-ikat-target-okt-des", no: "BEV/SUN/26/10/9046", added: ADDED,
      name: "Ikat Target SO, Gromin, Grosir LM 600ml Okt–Des 2026 (GRSM 3A, 3B, 3C)",
      start: "2026-09-28", end: "2026-12-27", periode: "28 Sep – 27 Des 2026 (W40–52)",
      klaim: "28 Sep – 27 Okt, 28 Okt – 27 Nov, 28 Nov – 27 Des 2026", batas: "29 Maret 2027",
      p1: "Okt–Nov", p2: "Desember",
      bonusLead: "Akumulasi Okt, Nov, Des (13 minggu). Diberikan jika mencapai target Q4.2026 yang sudah ditetapkan.",
      memos: [{
        date: "2026-10-15", no: "00025/ZAP4/10/2026/MTFJ",
        summary: "Perubahan mekanisme: batas atas strata Zona A dihapus.",
        changes: [
          "Zona A, Okt–Nov: ≥10.000 CRT (sebelumnya 10.000–39.999 CRT).",
          "Zona A, Desember: ≥12.500 CRT (sebelumnya 12.500–49.999 CRT).",
          "Bonus triwulan Zona A: ≥32.500 CRT (sebelumnya 32.500–129.999 CRT).",
          "Zona B sampai E tidak berubah."
        ],
        pdf: pdf("memo-lm600-ikat-target-okt-des")
      }],
      ketentuan: [
        "Cashback bulanan diberikan sesuai zona pengambilan per minggu.",
        "Zona boleh naik, tetapi turun maksimal 1 level. Contoh: outlet Zona C boleh naik ke Zona A atau B, tetapi turun hanya ke Zona D.",
        "Bonus triwulan diberikan jika mencapai target Q4.2026 yang sudah ditetapkan.",
        "Bonus mingguan diberikan jika mencapai target Q4.2026 yang sudah ditetapkan.",
        "Target Q4.2026 berdasarkan STM Q4.2025, STM Q2.2026, atau STM Q3.2026.",
        "Bonus bulanan dapat diklaim per bulan. Cashback bulanan diberikan di bulan berikutnya (contoh: cashback Oktober 2026 diberikan di November 2026).",
        "Cashback bulanan dan bonus triwulan dapat berupa discount di-setting di Matrix (potongan maksimal 30% dari nilai faktur LM botol bulan berikutnya), transfer vendor, atau potong tagihan."
      ].concat(ketCommon)
    }),
    lm600({
      id: "lm600-ikat-target-jul-sep", no: "BEV/SUN/26/06/9555",
      name: "Ikat Target SO, Gromin, Grosir LM 600ml Jul–Sep 2026 (GRSM 3A, 3B, 3C)",
      start: "2026-06-29", end: "2026-09-27", periode: "29 Jun – 27 Sep 2026 (W27–39)",
      klaim: "29 Jun – 28 Jul, 29 Jul – 28 Agu, 29 Agu – 27 Sep 2026",
      batas: "28 Oktober 2027",
      p1: "Jul–Agu", p2: "Sept",
      bonusLead: "Akumulasi Jul, Agu, Sep (13 minggu). Diberikan jika mencapai target Q3.2026 yang sudah ditetapkan.",
      memos: [{
        date: "2026-10-15", no: "00030/ZAP4/10/2026/MTFJ",
        summary: "Perubahan mekanisme: batas atas strata Zona A dihapus.",
        changes: [
          "Zona A, Jul–Agu: ≥10.000 CRT (sebelumnya 10.000–39.999 CRT).",
          "Zona A, September: ≥12.500 CRT (sebelumnya 12.500–49.999 CRT).",
          "Bonus triwulan Zona A: ≥32.500 CRT (sebelumnya 32.500–129.999 CRT).",
          "Zona B sampai E tidak berubah."
        ],
        pdf: pdf("memo-lm600-ikat-target-jul-sep")
      }],
      ketentuan: [
        "Cashback bulanan diberikan sesuai zona pengambilan per minggu.",
        "Zona boleh naik, tetapi turun maksimal 1 level. Contoh: outlet Zona C boleh naik ke Zona A atau B, tetapi turun hanya ke Zona D untuk SO, dan Kelas C untuk Gromin.",
        "Bonus triwulan diberikan jika mencapai target Q3.2026 yang sudah ditetapkan.",
        "Bonus mingguan diberikan jika mencapai target Juli 2026 yang sudah ditetapkan.",
        "Target Q3.2026 berdasarkan STM Q1.2026, STM Q2.2026, atau STM Q3.2025.",
        "Bonus bulanan dapat diklaim per bulan. Cashback bulanan diberikan di bulan berikutnya (contoh: cashback Juli 2026 diberikan di Agustus 2026).",
        "Cashback bulanan dan bonus triwulan dapat berupa discount di-setting di Matrix (potongan maksimal 30% dari nilai faktur LM botol bulan berikutnya), transfer vendor, atau potong tagihan."
      ].concat(ketCommon)
    }),
    {
      id: "nipis-madu-ikat-target-west-sep-nov", brand: "Nipis Madu",
      name: "Ikat Target Nipis Madu 330ml West Sep–Nov 2026",
      code: "TP_1111", no: "BEV/CSD/26/08/9113", added: ADDED, pdf: pdf("nipis-madu-ikat-target-west-sep-nov"),
      start: "2026-08-24", end: "2026-11-22",
      tags: ["All outlet GT", "GRSM 1,2,3,4", "Ikat target"],
      keywords: ["nipis", "nipis madu", "330ml", "ikat target", "cashback", "bonus triwulan", "zona", "west"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "Cashback bulanan Nipis Madu 330ml", b: "Rp300–1.000/CRT", s: "Tergantung zona A–E, capaian 100%"},
            {l: "Bonus triwulan", b: "Rp400/CRT", s: "Wajib achieve bulanan selama 3 bulan"}
          ],
          kv: [
            ["Periode program", "24 Agu – 22 Nov 2026 (W35–47)"],
            ["Area", "West (GRSM 1, 2, 3A, 3B, 3C, 4)"],
            ["Outlet", "Semua outlet GT: Grosir, Gromin, SO, Retail, TDP, Lokpen, GMM, Kantin, Rumah Makan, Koperasi, Topping Up"],
            ["Produk", "Nipis Madu 330ml"],
            ["No. Action Proposal", "BEV/CSD/26/08/9113"],
            ["Periode klaim", "24 Agu – 23 Sep, 24 Sep – 23 Okt, 24 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "23 Februari 2027"]
          ]
        },
        {
          title: "Zona dan cashback bulanan",
          lead: "Target dalam CRT. Cashback dibayar per CRT jika capaian 100%.",
          table: {
            cols: [{h: "Zona"}, {h: "Target", s: "per minggu"}, {h: "Sept", s: "5 minggu"}, {h: "Okt–Nov", s: "4 minggu"}, {h: "Min. growth"}, {h: "Cashback", s: "per CRT", d: 1}],
            rows: [
              {c: ["A", "≥600", "≥3.000", "≥2.400", "2%", "Rp1.000"]},
              {c: ["B", "400–599", "2.000–2.999", "1.600–2.399", "5%", "Rp900"]},
              {c: ["C", "200–399", "1.000–1.999", "800–1.599", "7%", "Rp700"]},
              {c: ["D", "65–199", "325–999", "260–799", "8%", "Rp500"]},
              {c: ["E", "40–64", "200–324", "200–259", "10%", "Rp300"]}
            ]
          }
        },
        {
          title: "Bonus triwulan",
          lead: "Akumulasi Sept–Nov (13 minggu). Surat tidak menulis nama zona di tabel ini. Urutannya sama dengan zona A–E di atas.",
          table: {
            cols: [{h: "Zona"}, {h: "Akumulasi", s: "CRT"}, {h: "Bonus", s: "per CRT", d: 1}],
            rows: [
              {c: ["A", "≥7.800", "Rp400"]},
              {c: ["B", "5.200–7.199", "Rp400"]},
              {c: ["C", "2.600–5.199", "Rp400"]},
              {c: ["D", "845–2.599", "Rp400"]},
              {c: ["E", "520–844", "Rp400"]}
            ]
          }
        },
        {
          title: "Ketentuan pemberian", fold: true,
          list: [
            "Tidak boleh turun kelas dari rata-rata kelas sebelumnya.",
            "Wajib achieve bulanan selama 3 bulan untuk mendapat bonus triwulan.",
            "Bonus diberikan di akhir periode program dan di-setting di faktur (bonus di-setting pada bulan berikutnya).",
            "Growth berdasarkan STM Q1.2026, atau 13 minggu (Juni, Juli, Agustus), atau Q3.2025."
          ]
        }
      ]
    },
    {
      id: "kopikap-insentif-salesman-ss", brand: "Kopikap Jumbo",
      name: "Incentive Target Salesman/SS Kopikap Jumbo Nasional",
      code: "GT_1111", no: "BEV/SUN/26/09/9331", added: ADDED, pdf: pdf("kopikap-insentif-salesman-ss"),
      memos: [{
        date: "2026-10-26", no: "00258/ZAP4/10/2026/MTFJ",
        summary: "Perubahan periode program.",
        changes: ["Periode: 24 Agu – 27 Des 2026 (sebelumnya 27 Sep – 31 Des 2026)."],
        pdf: pdf("memo-kopikap-insentif-salesman-ss")
      }],
      start: "2026-08-24", end: "2026-12-27",
      tags: ["Salesman", "SS", "Insentif tunai", "Nasional", "GRSM 1–8"],
      keywords: ["kopikap", "kap jumbo", "insentif", "incentive", "salesman", "ss", "to big", "web mix", "webmix"],
      blocks: [
        {
          title: "Ringkasan",
          lead: "Target dan insentif dihitung per bulan.",
          offers: [
            {l: "Salesman TO Big / All Channel", b: "Rp500.000", s: "Top 3 omset per GRSM, min. STM 1.000 CRT"},
            {l: "Salesman Retail / Non TO Big", b: "Rp400.000", s: "Achieve ≥50% OA dan avg dropsize ≥2 karton"},
            {l: "SS TO Big / All Channel", b: "Rp500.000", s: "Top 3 omset per GRSM, min. STM 2.000 CRT"},
            {l: "SS Retail / Non TO Big", b: "Rp500.000", s: "Achieve ≥50% OA dan avg dropsize ≥2 karton"}
          ],
          kv: [
            ["Periode program", "24 Agu – 27 Des 2026 (menurut memorandum)"],
            ["Area", "Nasional, GRSM 1–8 (area khusus jual Kopikap)"],
            ["No. Action Proposal", "BEV/SUN/26/09/9331"],
            ["Batas akhir klaim", "1 Maret 2027"]
          ]
        },
        {
          title: "Ketentuan", fold: true,
          list: [
            "Program dikoordinir Team Operasional M3 dan di bawah pengawasan NSM dan GRSM.",
            "Semua proses loading dan penjualan di toko wajib memakai Web Mix. Proses di CNS/Subdist wajib memakai faktur dari CNS/Subdist.",
            "Data penjualan berdasarkan Web Mix.",
            "PPh ditanggung marketing. MD menerima insentif penuh sesuai jumlah insentif yang tercantum.",
            "Insentif dibayarkan lebih dulu oleh CNS/Subdist, lalu CNS/Subdist klaim ke PT TFJ sesuai realisasi, atau klaim melalui MOA RSM masing-masing sesuai list pemenang."
          ]
        }
      ]
    },
    {
      id: "kopikap-insentif-motorist-grosir", brand: "Kopikap Jumbo",
      name: "Insentif Motorist, Kanvaser, Karyawan Toko Grosir Kopikap Jumbo Nasional",
      code: "GT_0000", no: "BEV/SUN/26/10/9214", added: ADDED, pdf: pdf("kopikap-insentif-motorist-grosir"),
      start: "2026-09-14", end: "2026-12-06",
      tags: ["Grosir", "Motorist", "Kanvaser", "Nasional", "Insentif tunai"],
      keywords: ["kopikap", "kap jumbo", "insentif", "motorist", "kanvaser", "karyawan toko", "bistem", "agency"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Insentif per penjualan Kopikap Jumbo", b: "Rp1.000/CRT", s: "Untuk motorist toko, karyawan toko, dan kanvaser toko grosir"}],
          kv: [
            ["Periode program", "14 Sep – 6 Des 2026"],
            ["Area", "Nasional"],
            ["Agency", "Bistem"],
            ["Produk", "Kopikap Jumbo"],
            ["No. Action Proposal", "BEV/SUN/26/10/9214"],
            ["Periode perhitungan", "14 Sep – 11 Okt, 12 Okt – 8 Nov, 9 Nov – 6 Des 2026 (tiap 4 minggu)"],
            ["Batas akhir klaim", "31 Maret 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Insentif berlaku untuk motorist toko, karyawan toko, dan kanvaser yang terdaftar di toko grosir.",
            "Kanvaser hanya boleh terdaftar di salah satu toko. Jika terdaftar di 2 toko, wajib memilih salah satu.",
            "Rekap penjualan motorist/kanvaser/karyawan toko (taking order) dibuat oleh toko dan divalidasi Team Sales, dilengkapi cap toko.",
            "Pencairan wajib melampirkan KTP, nomor rekening, dan Surat Perjanjian Kerja (SPK).",
            "Pencairan dilakukan Agency Bistem berdasarkan rekapan yang sudah divalidasi Team Sales, Team Trade, dan Team Marketing. Quotation menyusul."
          ]
        }
      ]
    },
    {
      id: "jagoan-grosir-kelurahan-gr3a", brand: "Lintas Brand",
      name: "Jagoan Grosir per Kelurahan GR3A",
      code: "GT_1111", no: "BEV/SUN/26/10/9216", added: ADDED, pdf: pdf("jagoan-grosir-kelurahan-gr3a"),
      start: "2026-10-26", end: "2027-01-23",
      tags: ["Gromin", "GR3A", "Harga Gromin", "Display", "Extra cashback 2%"],
      keywords: ["jagoan grosir", "kelurahan", "gromin", "harga gromin", "display", "extra cashback", "gr3a", "grsm 3a"],
      blocks: [
        {
          title: "Ringkasan",
          lead: "Untuk outlet Gromin yang terdaftar (daftar peserta terlampir di surat).",
          offers: [
            {l: "Harga Gromin tanpa strata", b: "Harga Gromin", s: "Min. 1 karton per SKU dan min. 5 SKU dari 12 SKU"},
            {l: "Display 25 karton di depan outlet", b: "Bonus 3 karton/bulan", s: "1 karton LM 330, 1 karton LM 600, 1 karton LM 1500"},
            {l: "Display 50 karton di depan outlet", b: "Bonus 6 karton/bulan", s: "2 karton LM 330, 2 karton LM 600, 2 karton LM 1500"},
            {l: "Extra cashback", b: "2% transaksi", s: "Dari total transaksi sebulan, jika closing ikat target"}
          ],
          kv: [
            ["Periode program", "26 Okt 2026 – 23 Jan 2027"],
            ["Area", "GR3A (seluruh GRSM 3A)"],
            ["Outlet", "Gromin terdaftar (peserta terlampir)"],
            ["No. Action Proposal", "BEV/SUN/26/10/9216"],
            ["Periode klaim", "26 Okt – 25 Nov, 26 Nov – 25 Des 2026, 26 Des 2026 – 23 Jan 2027"],
            ["Batas akhir klaim", "24 April 2027"]
          ]
        },
        {
          title: "Program harga Gromin",
          list: [
            "Outlet Gromin mendapat harga Gromin tanpa mengacu strata pengambilan.",
            "Toko harus didaftarkan dan mendapat persetujuan RSM, GRSM, dan Pak Wildan.",
            "Minimal pengambilan 1 karton per SKU dan minimal 5 SKU dari 12 SKU: LM 600, LM 1500, LM 330, LM 15 liter, TPH 350ml, TPH LS 350ml, Nipis Madu 330ml, Kopikap Jumbo, Kopiko 78, Collagena, Susu 7 Kurma, LM 5 liter, LM 3 liter.",
            "Berlaku program DOF dan ikat target nasional.",
            "Program di-setting di Matrix.",
            "Toko yang diikutkan: rata-rata omset Rp1 juta per minggu, atau LTB produk LM 600, LM 1500, dan Teh Pucuk 350ml."
          ]
        },
        {
          title: "Program display",
          lead: "Bonus barang di-setting di Matrix pada bulan berikutnya, setelah outlet deal ikut dan ada foto display sesuai ketentuan.",
          list: [
            "Outlet bersedia display di depan outlet, terlihat dari jalan utama, dan tidak tertutup produk lain.",
            "Outlet bersedia mengambil LM 330, LM 600, LM 1500, Aspen 250, dan Aspen 700ml.",
            "Rata-rata omset outlet maksimal Rp4 juta per minggu.",
            "Display minimal 25 karton atau 50 karton, tergantung ruang outlet.",
            "Outlet yang tidak sesuai kriteria dikeluarkan dari program display di periode berikutnya."
          ]
        },
        {
          title: "Extra cashback 2%", fold: true,
          list: [
            "Jagoan Grosir ini diikutkan program ikat target nasional.",
            "Outlet Gromin wajib mengambil 5 SKU lengkap (LM 330, LM 600, LM 1500, Aspen 250ml, Aspen 700ml) dan mencapai target ikat target.",
            "Jika memenuhi kriteria, outlet mendapat 2% dari total transaksi selama 1 bulan.",
            "Cashback extra diterima jika outlet closing ikat target (LM 600 dan LM 330 + LM 1500) sesuai ketentuan kelas.",
            "Berlaku juga untuk program ikat target nasional dan DOF nasional.",
            "Cashback di-setting di Matrix pada periode berikutnya."
          ]
        }
      ]
    },
    {
      id: "aspen-700-retail-gr3a-nov", brand: "Aspen",
      name: "Pembelian Aspen 700ml di Outlet Retail GRSM 3A",
      code: "GT_1111", no: "WAT/ASP/26/10/9022", added: ADDED, pdf: pdf("aspen-700-retail-gr3a-nov"),
      start: "2026-10-26", end: "2026-11-22",
      tags: ["Retail", "GR3A", "Bonus produk", "Di luar GMM, Gromin, SO"],
      keywords: ["aspen", "700ml", "teh pucuk", "tph", "bonus", "shrink", "retail", "gr3a", "grsm 3a"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Beli 2 shrink Aspen 700ml", b: "Bonus 4 botol TPH Ori 350ml", s: "Maks 6 paket (12 shrink bonus 1 karton TPH Ori 350ml). Berlaku kelipatan"}],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "GR3A"],
            ["Outlet", "Channel terdaftar (data channel terlampir). Tidak berlaku untuk GMM, Gromin, dan SO"],
            ["Produk", "Aspen 700ml"],
            ["No. Action Proposal", "WAT/ASP/26/10/9022"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Setiap pembelian 2 shrink Aspen 700ml mendapat bonus 4 botol Teh Pucuk Ori 350ml.",
            "Maksimal 6 paket, setara 12 shrink bonus 1 karton Teh Pucuk Ori 350ml.",
            "Berlaku kelipatan.",
            "Program di-setting di Matrix dan tercantum di invoice CNS."
          ]
        }
      ]
    },
    {
      id: "kopikap-lm600-paket-gr34-nov", brand: "Kopikap Jumbo",
      name: "Pembelian Paket Kopikap Jumbo + LM 600ml Retail GR3 & 4",
      code: "TP_1111", no: "BEV/SUN/26/10/9381", added: ADDED, pdf: pdf("kopikap-lm600-paket-gr34-nov"),
      start: "2026-10-26", end: "2026-11-22",
      tags: ["All channel Retail GT", "GRSM 3A,3B,3C,4", "Discount paket"],
      keywords: ["kopikap", "kap jumbo", "le minerale", "lm", "600ml", "paket", "discount", "retail", "gr3", "gr4"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Beli paket 1 karton Kopikap Jumbo + 1 karton LM 600ml", b: "Disc LM 600ml Rp5.000", s: "Berlaku kelipatan"}],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "GR3 & 4 (GRSM 3A, 3B, 3C, 4)"],
            ["Outlet", "All channel Retail GT: Retail, Kantin, Koperasi, Rest Area, TDP Retail, Lokpen, Bengkel, TU, Lokman, Rumah Makan, Kuliner, Kantin Sekolah, GMM Retail"],
            ["No. Action Proposal", "BEV/SUN/26/10/9381"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Setiap pembelian paket 1 karton Kopikap Jumbo + 1 karton Le Minerale 600ml mendapat discount untuk LM 600ml sebesar Rp5.000.",
            "Berlaku kelipatan.",
            "Program dicantumkan di invoice dan di-setting di Matrix.",
            "Outlet peserta adalah outlet yang terdaftar di Matrix.",
            "Di akhir program, CNS/Subdist klaim dengan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel Subdist."
          ]
        }
      ]
    },
    {
      id: "kurma-distribusi-nov", brand: "Susu 7 Kurma",
      name: "Distribusi Susu 7 Kurma Nasional",
      code: "TP_1111", no: "BEV/KUR/26/10/9032", added: ADDED, pdf: pdf("kurma-distribusi-nov"),
      start: "2026-10-26", end: "2026-11-22",
      tags: ["Subdist GT & Institusi", "Grosir", "Gromin", "SO", "Retail", "Nasional", "GRSM 1–8"],
      keywords: ["susu 7 kurma", "susu tujuh kurma", "kurma", "distribusi", "discount", "karton"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "Beli ≥25 karton", b: "Rp4.000/karton"},
            {l: "Beli 15–24 karton", b: "Rp3.000/karton"},
            {l: "Beli 10–14 karton", b: "Rp2.000/karton"}
          ],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "Nasional (GRSM 1–8)"],
            ["Outlet", "Subdist GT & Institusi (Sisdima dan non Sisdima), Grosir, Gromin, SO, Topping Up, Retail, TDP, Lokpen"],
            ["Produk", "Susu 7 Kurma"],
            ["No. Action Proposal", "BEV/KUR/26/10/9032"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Setiap pembelian 25 karton atau lebih mendapat discount Rp4.000/karton.",
            "Setiap pembelian 15–24 karton mendapat discount Rp3.000/karton.",
            "Setiap pembelian 10–14 karton mendapat discount Rp2.000/karton.",
            "Berlaku kelipatan.",
            "Program di-setting di Matrix.",
            "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT TFJ."
          ]
        }
      ]
    },
    {
      id: "kurma-disc-retail-nov", brand: "Susu 7 Kurma",
      name: "Discount Susu 7 Kurma 12's Retail Nasional",
      code: "TP_1111", no: "BEV/KUR/26/10/9031", added: ADDED, pdf: pdf("kurma-disc-retail-nov"),
      start: "2026-10-26", end: "2026-11-22",
      tags: ["Retail", "Nasional", "GRSM 1–8", "Discount"],
      keywords: ["susu 7 kurma", "susu tujuh kurma", "kurma", "12's", "kaleng", "retail", "discount"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Beli 6 kaleng Susu 7 Kurma", b: "Disc Rp3.000", s: "Maks Rp12.000 per transaksi. Berlaku kelipatan"}],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "Nasional (GRSM 1–8)"],
            ["Outlet", "Retail, GMM Retail, Lokman, Kantin, Koperasi, Rest Area, Bengkel, Rumah Makan, Kantin Sekolah, Kuliner, Lokpen, TDP Retail, Topping Up"],
            ["No. Action Proposal", "BEV/KUR/26/10/9031"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Setiap pembelian 6 kaleng Susu 7 Kurma mendapat discount Rp3.000 per 6 kaleng.",
            "Maksimal discount Rp12.000 per transaksi.",
            "Berlaku kelipatan.",
            "Program di-setting di Matrix.",
            "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT TFJ."
          ]
        }
      ]
    },
    {
      id: "collagena-distribusi-nov", brand: "Collagena",
      name: "Distribusi Collagena SO, Grosir, Gromin Nasional",
      code: "TP_1111", no: "BEV/COL/26/10/9035", added: ADDED, pdf: pdf("collagena-distribusi-nov"),
      start: "2026-10-26", end: "2026-11-22",
      tags: ["SO", "Grosir", "Gromin", "TDP", "Nasional", "GRSM 1–8"],
      keywords: ["collagena", "distribusi", "discount", "karton", "persen"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "Beli ≥25 karton", b: "Disc 4%", s: "Dari harga masing-masing region"},
            {l: "Beli 15–24 karton", b: "Disc 2%", s: "Dari harga masing-masing region"}
          ],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "Nasional (GRSM 1–8)"],
            ["Outlet", "SO, Grosir, Gromin, TDP Grosir, TDP Gromin"],
            ["Produk", "Collagena"],
            ["No. Action Proposal", "BEV/COL/26/10/9035"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Setiap pembelian 25 karton atau lebih mendapat discount 4% dari harga masing-masing region.",
            "Setiap pembelian 15–24 karton mendapat discount 2% dari harga masing-masing region.",
            "Program di-setting di Matrix.",
            "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT TFJ."
          ]
        }
      ]
    },
    {
      id: "collagena-disc-retail-nov", brand: "Collagena",
      name: "Discount Collagena 12's Retail Nasional",
      code: "TP_1111", no: "BEV/COL/26/10/9036", added: ADDED, pdf: pdf("collagena-disc-retail-nov"),
      start: "2026-10-26", end: "2026-11-22",
      tags: ["Retail", "Nasional", "GRSM 1–8", "Discount"],
      keywords: ["collagena", "12's", "kaleng", "retail", "discount"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Beli 6 kaleng Collagena", b: "Disc Rp3.000", s: "Maks Rp12.000 per transaksi. Berlaku kelipatan"}],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "Nasional (GRSM 1–8)"],
            ["Outlet", "All channel Retail: Retail, GMM Retail, Lokman, Kantin, Koperasi, Rest Area, Bengkel, Rumah Makan, Kantin Sekolah, Kuliner, Lokpen, TDP Retail, Topping Up"],
            ["No. Action Proposal", "BEV/COL/26/10/9036"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Setiap pembelian 6 kaleng Collagena mendapat discount Rp3.000 per 6 kaleng.",
            "Maksimal discount Rp12.000 per transaksi.",
            "Berlaku kelipatan.",
            "Program di-setting di Matrix.",
            "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian CNS/Subdist klaim ke PT TFJ."
          ]
        }
      ]
    }
  ];

  window.BATCHES = (window.BATCHES || []).concat([{
    updated: "2026-10-27 06:40",
    text: "Batch 2 surat program: 12 program dan 3 memorandum (AP 9046, 9555, 9331).",
    programs: programs
  }]);
})();
