### Panduan

untuk menggunakan tailwind, membutuhkan ekstensi VSCode sebagai berikut
 - Live Server / Live Preview
 - PostCSS Language Support
 - Tailwind CSS intellisense
 - Node JS

 ### cara inisialisasi panduan tailwind css dengan node js

ketik di terminal atau cmd 
 `npm init -y`

 lalu install tailwind
 `npm install -D tailwindcss`

 lalu install tailwindcss dan buat file configurasi tailwind
 `npx tailwindcss init`

 jika ada error atau ada dependis yang dibutuhkan, ketik ini
 `npm install -D postcss` (misal nama dependsi yang dibutuhkan adalah "postcss")

 cara hapus tailwindcss
 `npm uninstall tailwindcss`

 lalu buat 1 file css (default name "input.css")
 isi dengan tiga baris kode ini

 `@tailwind base; //tailwind akan mereset semua settingan dari browser awal dan mulai menjalankan render engine "preflight"`
`@tailwind components; // tailwind akan memanggil component semua yang diapunya`
`@tailwind utilities; // tailwind akan memanggil semua component utilities`

