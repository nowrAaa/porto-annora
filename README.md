# Template Portofolio

Website portofolio statis (HTML, CSS, JavaScript). Tanpa build, tanpa dependensi.

## Cara mengubah isi
Edit `data.js`: nama, deskripsi, keahlian, proyek, perjalanan, dan kontak.
Ganti teks yang diawali tanda kurung siku `[ ... ]`. Letakkan `cv.pdf` di folder yang sama.

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
