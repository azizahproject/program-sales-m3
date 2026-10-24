/* Batch 3. Surat program November 2026 (W44-47), West. Struktur isian: lihat programs/_template.js */
window.BATCHES = (window.BATCHES || []).concat([{
  updated: "2026-10-23 22:20",
  text: "Batch 1 program November 2026 (26 Okt – 22 Nov): Kopiko 78C, Le Minerale (galon 5L, galon 15L discount dan cashback, discount GRSM 3), Nipis Madu GR3A, TPH West, Aspen 700ml GR3A.",
  programs: [
    {
      id: "k78c-push-distribusi-west-nov", brand: "Kopiko 78",
      name: "Push Distribusi Kopiko 78C di SO, Grosir & Gromin West",
      code: "TP_1111", no: "BEV/78C/26/10/9010", added: "2026-10-23",
      pdf: {view: "pdf/k78c-push-distribusi-west-nov.pdf", download: "pdf/k78c-push-distribusi-west-nov.pdf"},
      start: "2026-10-26", end: "2026-11-22",
      tags: ["SO", "Gromin", "Grosir", "GRSM 1,2,3,4", "Discount mix"],
      keywords: ["k78", "kopiko", "78c", "push distribusi", "tdp"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Discount pembelian ≥50 CRT (mix)", b: "Rp1.800/CRT", s: "10–49 CRT Rp1.200/CRT. 5–9 CRT Rp600/CRT"}],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "West (GRSM 1, 2, 3, 4)"],
            ["Outlet", "SO, Gromin, Grosir, TDP Grosir, TDP Gromin"],
            ["No. Action Proposal", "BEV/78C/26/10/9010"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Strata discount",
          lead: "Qty dihitung mix Kopiko 78C. Discount dibayar per CRT.",
          table: {
            cols: [{h: "Pembelian"}, {h: "Discount", s: "per CRT", d: 1}],
            rows: [{c: ["≥50 CRT", "Rp1.800"]}, {c: ["10–49 CRT", "Rp1.200"]}, {c: ["5–9 CRT", "Rp600"]}]
          }
        },
        {title: "Mekanisme", list: ["Berlaku untuk area GRSM 1, 2, 3, 4.", "Berlaku untuk SO, Gromin, Grosir, TDP Grosir, TDP Gromin.", "Program di-setting di Matrix."]}
      ]
    },
    {
      id: "lm-galon-5l-west-nov", brand: "Le Minerale",
      name: "Pembelian Galon Le Minerale 5L West",
      code: "TP_1111", no: "BEV/SUN/26/10/9416", added: "2026-10-23",
      pdf: {view: "pdf/lm-galon-5l-west-nov.pdf", download: "pdf/lm-galon-5l-west-nov.pdf"},
      start: "2026-10-26", end: "2026-11-22",
      tags: ["GT & Institusi", "SO", "Gromin", "Grosir", "Retail", "West", "Bonus galon"],
      keywords: ["lm", "le minerale", "galon", "gallon", "5l", "5 liter", "bonus"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "Beli min. 4 CRT", b: "Bonus 1 pcs galon 5L", s: "Maksimal 2 pcs"},
            {l: "Beli min. 15 CRT", b: "Bonus 1 CRT galon 5L", s: "Berlaku kelipatan"}
          ],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "West (GRSM 1, 2, 3A, 3B, 3C, 4)"],
            ["Outlet", "GT & Institusi (Subdist Sisdima dan non Sisdima), SO, Gromin, Grosir, LMD, Topping Up, Retail, LMHS"],
            ["No. Action Proposal", "BEV/SUN/26/10/9416"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Mekanisme",
          list: [
            "Setiap pembelian minimal 4 CRT mendapat bonus 1 pcs galon 5L (maksimal 2 pcs).",
            "Setiap pembelian minimal 15 CRT mendapat bonus 1 CRT galon 5L, berlaku kelipatan.",
            "Program dicantumkan di invoice dan di-setting di Matrix.",
            "Outlet peserta adalah outlet yang terdaftar di Matrix. NOO diajukan HOA dan diketahui PIC marketing setempat.",
            "Di akhir program, CNS/Subdist klaim dengan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel Subdist.",
            "Bonus outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian klaim ke PT TFJ."
          ]
        }
      ]
    },
    {
      id: "lm-galon-15l-discount-west-nov", brand: "Le Minerale",
      name: "Discount Pembelian Galon Le Minerale 15L West",
      code: "TP_1111", no: "BEV/SUN/26/10/9417", added: "2026-10-23",
      pdf: {view: "pdf/lm-galon-15l-discount-west-nov.pdf", download: "pdf/lm-galon-15l-discount-west-nov.pdf"},
      start: "2026-10-26", end: "2026-11-22",
      tags: ["GT & Institusi", "SO", "Gromin", "Grosir", "Retail", "West", "Discount"],
      keywords: ["lm", "le minerale", "galon", "gallon", "15l", "15 liter", "lmd", "lmhs"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "Retail, LMD, LMHS. Min. 10 galon", b: "Rp500/galon"},
            {l: "SO min. 250 galon. Gromin dan Grosir min. 60 galon", b: "Rp300/galon"}
          ],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "West (GRSM 1, 2, 3A, 3B, 3C, 4)"],
            ["Outlet", "GT & Institusi (Subdist Sisdima dan non Sisdima), SO, Gromin, Grosir, LMD, LMHS"],
            ["No. Action Proposal", "BEV/SUN/26/10/9417"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Strata discount",
          table: {
            cols: [{h: "Outlet"}, {h: "Min. pembelian", s: "galon"}, {h: "Discount", s: "per galon", d: 1}],
            rows: [
              {c: ["SO", "250", "Rp300"]},
              {c: ["Gromin, Grosir", "60", "Rp300"]},
              {c: ["Retail, LMD, LMHS", "10", "Rp500"]}
            ]
          }
        },
        {
          title: "Ketentuan", fold: true,
          list: [
            "Discount dicantumkan di invoice dan di-setting di Matrix.",
            "Outlet peserta adalah outlet yang terdaftar di Matrix. NOO diajukan HOA dan diketahui PIC marketing setempat.",
            "Di akhir program, CNS/Subdist klaim dengan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel Subdist.",
            "Bonus/reward outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian klaim ke PT TFJ."
          ]
        }
      ]
    },
    {
      id: "lm-galon-15l-cashback-west-nov", brand: "Le Minerale",
      name: "Cashback Bulanan Galon Le Minerale 15L SO, Gromin, Grosir West (GRSM 3A, 3B, 3C, 4)",
      code: "TP_1111", no: "BEV/SUN/26/10/9418", added: "2026-10-23",
      pdf: {view: "pdf/lm-galon-15l-cashback-west-nov.pdf", download: "pdf/lm-galon-15l-cashback-west-nov.pdf"},
      start: "2026-10-26", end: "2026-11-22",
      tags: ["SO", "Gromin", "Grosir", "LMD", "GRSM 3A,3B,3C,4", "Cashback"],
      keywords: ["lm", "le minerale", "galon", "gallon", "15l", "15 liter", "cashback", "gr3", "gr4"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "Cashback Gromin", b: "Rp350–600/galon", s: "Strata 300 sampai ≥1.000 galon per bulan"},
            {l: "Cashback SO", b: "Rp300–750/galon", s: "Strata 1.500 sampai ≥100.000 galon per bulan"}
          ],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "GRSM 3A, 3B, 3C, 4"],
            ["Outlet", "Gromin, Grosir, SO, LMD"],
            ["No. Action Proposal", "BEV/SUN/26/10/9418"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "24 Februari 2027"]
          ]
        },
        {
          title: "Cashback Gromin",
          lead: "Berdasarkan total pembelian LM galon 15L dalam sebulan.",
          table: {
            cols: [{h: "Pembelian", s: "galon"}, {h: "Cashback", s: "per galon", d: 1}],
            rows: [{c: ["≥1.000", "Rp600"]}, {c: ["500–999", "Rp500"]}, {c: ["300–499", "Rp350"]}]
          }
        },
        {
          title: "Cashback SO",
          lead: "Berlaku GRSM 3A, 3B, 3C, 4. Berdasarkan total pembelian LM galon 15L dalam sebulan.",
          table: {
            cols: [{h: "Pembelian", s: "galon"}, {h: "Cashback", s: "per galon", d: 1}],
            rows: [
              {c: ["≥100.000", "Rp750"]}, {c: ["25.000–99.999", "Rp600"]}, {c: ["10.000–24.999", "Rp550"]},
              {c: ["7.500–9.999", "Rp500"]}, {c: ["5.000–7.499", "Rp400"]}, {c: ["1.500–4.999", "Rp300"]}
            ]
          },
          note: "Pengambilan di atas 125.000 galon, bonusnya hanya Rp400/galon. Contoh: pengambilan 127.000 galon, yang 2.000 galon mendapat cashback Rp400."
        },
        {
          title: "Ketentuan pemberian", fold: true,
          list: [
            "Cashback diberikan di akhir periode program, berdasarkan akumulasi total sales LM galon 15L sesuai strata.",
            "Bentuk cashback: uang (dipotong PPh outlet/toko) atau discount yang di-setting di Matrix setelah akhir periode.",
            "Jika dibayar dalam bentuk discount, potongan maksimal 30% dari pembelian barang LM botol dan LM galon per invoice.",
            "Outlet peserta adalah outlet yang terdaftar di Matrix.",
            "Di akhir program, CNS/Subdist klaim dengan report Matrix per Subdist/CNS (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel Subdist."
          ],
          note: "Surat hanya mencantumkan strata untuk Gromin dan SO, walau Grosir dan LMD tercantum sebagai outlet yang berlaku."
        }
      ]
    },
    {
      id: "lm-discount-grsm3-nov", brand: "Le Minerale",
      name: "Discount Pembelian LM 600ml, 1500ml, 330ml & 3L GRSM 3A, 3B & 3C",
      code: "TP_1111", no: "BEV/SUN/26/10/9425", added: "2026-10-23",
      pdf: {view: "pdf/lm-discount-grsm3-nov.pdf", download: "pdf/lm-discount-grsm3-nov.pdf"},
      start: "2026-10-26", end: "2026-11-22",
      tags: ["GT & Institusi", "GRSM 3A,3B,3C", "Discount", "Qty akumulasi 4 SKU"],
      keywords: ["lm", "le minerale", "600ml", "1500ml", "330ml", "3l", "3 liter", "grsm 3", "gr3"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "LM 600ml", b: "Rp2.700/CRT", s: "Strata ≥450 CRT. Terendah Rp700"},
            {l: "LM 1500ml", b: "Rp1.900/CRT", s: "Strata ≥450 CRT. Terendah Rp400"},
            {l: "LM 330ml", b: "Rp400/CRT", s: "Strata ≥450 CRT. Terendah Rp200"},
            {l: "LM 3L", b: "Rp1.900/CRT", s: "Strata ≥450 CRT. Terendah Rp400"}
          ],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "GRSM 3A, 3B, 3C"],
            ["Outlet", "GT & Institusi (Subdist Sisdima dan non Sisdima)"],
            ["No. Action Proposal", "BEV/SUN/26/10/9425"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Strata discount",
          lead: "Strata dihitung dari qty akumulasi 4 SKU (1500ml, 600ml, 330ml, 3L). Discount per CRT.",
          table: {
            cols: [
              {h: "Akumulasi", s: "CRT"}, {h: "LM 600ml", d: 1}, {h: "LM 1500ml", d: 1}, {h: "LM 330ml", d: 1}, {h: "LM 3L", d: 1}
            ],
            rows: [
              {c: ["≥450", "Rp2.700", "Rp1.900", "Rp400", "Rp1.900"]},
              {c: ["250–449", "Rp2.000", "Rp1.500", "Rp300", "Rp1.500"]},
              {c: ["100–249", "Rp1.300", "Rp1.100", "Rp200", "Rp1.100"]},
              {c: ["10–99", "Rp700", "Rp400", "Rp200", "Rp400"]}
            ]
          }
        },
        {
          title: "Ketentuan", fold: true,
          list: [
            "Discount dicantumkan di invoice dan di-setting di Matrix.",
            "Outlet peserta adalah outlet yang terdaftar di Matrix.",
            "Di akhir program, CNS/Subdist klaim dengan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel Subdist.",
            "Bonus/reward outlet dibayarkan lebih dulu oleh CNS/Subdist, kemudian klaim ke PT TFJ."
          ]
        }
      ]
    },
    {
      id: "nipis-madu-gr3a-nov", brand: "Nipis Madu",
      name: "Trade Promo Nipis Madu GRSM 3A",
      code: "TP_1111", no: "BEV/CSD/26/10/9077", added: "2026-10-23",
      pdf: {view: "pdf/nipis-madu-gr3a-nov.pdf", download: "pdf/nipis-madu-gr3a-nov.pdf"},
      start: "2026-10-26", end: "2026-11-22",
      tags: ["All outlet GT", "GR3A", "Discount"],
      keywords: ["nipis", "nipis madu", "330ml", "gr3a", "grsm 3a", "trade promo"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Nipis Madu 330ml, ≥700 CRT", b: "Rp700/CRT", s: "Mulai pembelian 5 CRT: Rp200/CRT"}],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "GR3A"],
            ["Outlet", "Semua outlet GT: Grosir, Gromin, SO, Retail, Lokpen, GMM Retail, Kantin, Rumah Makan, Koperasi, Rest Area, Kuliner, TDP Retail, Lokman, Topping Up"],
            ["Produk", "Nipis Madu 330ml"],
            ["No. Action Proposal", "BEV/CSD/26/10/9077"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Strata discount",
          table: {
            cols: [{h: "Pembelian", s: "CRT"}, {h: "Discount", s: "per CRT", d: 1}],
            rows: [
              {c: ["≥700", "Rp700"]}, {c: ["450–699", "Rp650"]}, {c: ["250–449", "Rp600"]}, {c: ["150–249", "Rp500"]},
              {c: ["75–149", "Rp400"]}, {c: ["20–74", "Rp300"]}, {c: ["5–19", "Rp200"]}
            ]
          }
        },
        {
          title: "Ketentuan", fold: true,
          list: [
            "Program di-setting di Matrix.",
            "Outlet peserta adalah outlet yang terdaftar di Matrix.",
            "Di akhir program, Subdist klaim dengan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel Subdist."
          ]
        }
      ]
    },
    {
      id: "tph-discount-west-nov", brand: "Teh Pucuk Harum",
      name: "Discount Pembelian TPH West (GRSM 1,2,3,4)",
      code: "TP_1111", no: "BEV/SUN/26/10/9386", added: "2026-10-23",
      pdf: {view: "pdf/tph-discount-west-nov.pdf", download: "pdf/tph-discount-west-nov.pdf"},
      start: "2026-10-26", end: "2026-11-22",
      tags: ["SO", "Gromin", "Grosir", "Retail", "GRSM 1,2,3,4", "Discount"],
      keywords: ["tph", "teh pucuk", "teh pucuk harum", "350ml", "500ml", "jasmine", "ls", "sumatera", "jabodetabek", "jabar"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [
            {l: "Jabodetabek dan Jabar, ≥500 CRT", b: "Rp700–900/CRT", s: "Rp900 jika beli min. 10 CRT mix TPH 350ml LS / 500ml Jasmine / 500ml LS"},
            {l: "Retail All West, min. 3 CRT", b: "Rp300/CRT"}
          ],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "West (GRSM 1, 2, 3, 4)"],
            ["Outlet", "Subdist GT & Institusi (Sisdima dan non Sisdima), Grosir, Gromin, SO, Topping Up, Retail, TDP, Lokpen"],
            ["Produk", "TPH 350ml dan 500ml (Reg/LS)"],
            ["No. Action Proposal", "BEV/SUN/26/10/9386"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "24 Januari 2027"]
          ]
        },
        {
          title: "Strata discount",
          lead: "Discount per CRT. TPH 350ml dan 500ml boleh mix Reg/LS.",
          groups: [
            {h: "Sumatera. Gromin, SO, Grosir, GMM, TDP", items: [["≥150 CRT", "Rp400"], ["25–149 CRT", "Rp200"]]},
            {h: "Jabodetabek & Jabar. Gromin, SO, Grosir, GMM, TDP", items: [
              ["≥500 CRT", "Rp700"],
              ["≥500 CRT + min. 10 CRT mix LS/Jasmine", "Rp900", 1],
              ["300–499 CRT", "Rp400"], ["100–299 CRT", "Rp300"], ["25–99 CRT", "Rp200"]
            ]},
            {h: "All West. Retail (mix 350ml dan 500ml, mix varian)", items: [["≥3 CRT", "Rp300"]]}
          ],
          note: "Retail mencakup GMM Retail, Lokman, Kantin, Koperasi, Rest Area, Bengkel, Rumah Makan, Kantin Sekolah, Kuliner, Lokpen, TDP Retail, Topping Up."
        },
        {
          title: "Ketentuan", fold: true,
          list: [
            "Discount dicantumkan di invoice dan di-setting di Matrix.",
            "Outlet peserta adalah outlet yang terdaftar di Matrix.",
            "Di akhir program, Subdist klaim dengan report Matrix per Subdist (per outlet total) yang ditandatangani SS, RSM, dan dibubuhi stempel Subdist."
          ]
        }
      ]
    },
    {
      id: "aspen-700-gr3a-nov", brand: "Aspen",
      name: "Diskon on Faktur Aspen 700ml di GMM, Gromin dan SO GRSM 3A",
      code: "GT_1111", no: "WAT/ASP/26/10/9023", added: "2026-10-23",
      pdf: {view: "pdf/aspen-700-gr3a-nov.pdf", download: "pdf/aspen-700-gr3a-nov.pdf"},
      start: "2026-10-26", end: "2026-11-22",
      tags: ["GMM", "Gromin", "SO", "GR3A", "Diskon on faktur"],
      keywords: ["aspen", "700ml", "shrink", "gr3a", "grsm 3a", "gmm"],
      blocks: [
        {
          title: "Ringkasan",
          offers: [{l: "Aspen 700ml, ≥50 karton per faktur", b: "Rp2.000/shrink", s: "6–25 karton Rp1.000. 25–50 karton Rp1.500"}],
          kv: [
            ["Periode program", "26 Okt – 22 Nov 2026 (W44–47)"],
            ["Area", "GR3A"],
            ["Outlet", "GMM, Gromin, SO (di luar TDP Gromin)"],
            ["Produk", "Aspen 700ml"],
            ["No. Action Proposal", "WAT/ASP/26/10/9023"],
            ["Periode klaim", "26 Okt – 22 Nov 2026"],
            ["Batas akhir klaim", "21 Februari 2027"]
          ]
        },
        {
          title: "Strata diskon on faktur",
          lead: "Strata dihitung per faktur. Diskon di-setting di Matrix dan tercantum di invoice/faktur.",
          table: {
            cols: [{h: "Pembelian per faktur"}, {h: "Diskon", s: "per shrink", d: 1}],
            rows: [{c: ["6–25 karton", "Rp1.000"]}, {c: ["25–50 karton", "Rp1.500"]}, {c: ["50 karton ke atas", "Rp2.000"]}]
          },
          note: "Batas strata ditulis seperti di surat, angka 25 dan 50 muncul di dua strata. Jika ada outlet di angka itu, konfirmasi ke principal."
        }
      ]
    }
  ]
}]);
