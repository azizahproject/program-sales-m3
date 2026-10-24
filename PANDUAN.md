# Panduan Info Program Sales

## Isi folder
- `index.html` : tampilan. Tidak perlu diubah.
- `config.js` : daftar file batch, brand, dan kalender bulan.
- `programs/` : data program. Satu file `batch-N.js` untuk satu kelompok surat.
- `pdf/` : PDF surat. Satu file per program.

## Pertama kali: pasang di GitHub Pages
1. Masuk ke github.com, klik New repository. Beri nama, misalnya `info-program-m3-jakutpus`. Pilih Public. Klik Create repository.
2. Klik "uploading an existing file". Buka folder ini di komputer, pilih semua isinya (`index.html`, `config.js`, `programs`, `pdf`), lalu drag ke halaman GitHub. Klik Commit changes.
3. Buka Settings, lalu Pages. Di Source pilih "Deploy from a branch". Branch: `main`, folder: `/ (root)`. Klik Save.
4. Tunggu sekitar 1 menit. Alamat situs tampil di halaman yang sama, bentuknya `https://NAMAKAMU.github.io/NAMA-REPO/`. Bagikan alamat itu ke salesman.

## Menambah program baru
1. Siapkan file data. Salin `programs/_template.js` menjadi `programs/batch-4.js` lalu isi. Atau minta Claude membuatnya dari PDF surat.
2. Siapkan PDF suratnya. Beri nama sama dengan `id` program, misalnya `pdf/tph-ls-350-jawa.pdf`. Satu surat satu file.
3. Buka `config.js`, tambahkan `"programs/batch-4.js"` ke daftar `BATCH_FILES`. Contoh: `["programs/batch-1.js", "programs/batch-4.js"]`.
4. Di repo GitHub, klik Add file, lalu Upload files. Drag `batch-4.js` ke folder `programs`, PDF-nya ke folder `pdf`, dan `config.js` yang baru. Klik Commit changes.
5. Tunggu sekitar 1 menit, lalu muat ulang situs.

Untuk mengunggah ke dalam folder: buka folder itu di GitHub dulu (misalnya `programs`), baru klik Add file, lalu Upload files.

## Mengganti atau memperbaiki program
Unggah file dengan nama yang sama. GitHub akan menimpanya. Riwayat versi lama tetap ada di tab Commits.

## Brand baru dan bulan baru
Buka `config.js`. Tambah baris di `BRANDS` untuk brand baru, atau di `CAL` untuk bulan kalender perusahaan baru.

## Jika program tidak muncul
- Pastikan nama file di `BATCH_FILES` sama persis dengan nama file di folder `programs`.
- Pastikan setiap program punya `id` yang unik.
- Pastikan nama brand di program sama persis dengan nama di `BRANDS`.
- Jika ada file yang gagal dimuat, situs menampilkan pesan merah di bawah daftar. Program lain tetap tampil.
