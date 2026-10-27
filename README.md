# Template Portofolio

Website portofolio statis (HTML, CSS, JavaScript). Tanpa build, tanpa dependensi.

## Cara mengubah isi
Edit `data.js`: nama, deskripsi, keahlian, proyek, perjalanan, dan kontak.
Ganti teks yang diawali tanda kurung siku `[ ... ]`.

## Foto diri
Simpan foto di `assets/` (misalnya `assets/foto.jpg`, potret 4:5), lalu isi `photo: "assets/foto.jpg"` di `data.js`.
Selama `photo` kosong, hero menampilkan placeholder.

## Mengganti warna tema
Buka `style.css`, ubah 5 variabel di blok paling atas (`--primary`, `--on-primary`, `--secondary`, `--ink`, `--bg`).
Warna turunan lainnya dihitung otomatis. Ada beberapa contoh kombinasi siap pakai di komentar blok tersebut.

## Letak file
- CV: `assets/cv.pdf`
- Gambar proyek: `assets/projects/` (sesuaikan nama di field `image` pada `data.js`)
- Gambar sertifikat: `assets/certificates/` (daftar di `certificates` pada `data.js`)
Gunakan nama file huruf kecil tanpa spasi, misalnya `petlink.png`. Gambar yang tidak ditemukan akan disembunyikan otomatis.

## Coba di komputer
Buka `index.html` di browser, atau jalankan `npx serve .`

## Deploy ke Vercel
Lewat GitHub (disarankan):
1. Buat repository baru di GitHub lalu push seluruh isi folder ini.
2. Buka vercel.com, klik Add New, Project, lalu pilih repository tersebut.
3. Framework Preset: Other. Biarkan Build Command dan Output Directory kosong. Klik Deploy.

Lewat CLI:
```
npm i -g vercel
vercel --prod
```
Setiap push ke GitHub akan otomatis memperbarui situs.
