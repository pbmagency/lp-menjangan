---
description: Convert satu halaman Inertia (Vue/React) menjadi JSON template Elementor 4.x (Atomic)
---

Convert halaman Inertia yang kusebut setelah command ini menjadi file JSON template Elementor yang bisa di-import lewat Templates → Saved Templates → Import Templates.

## Aturan utama
- Baca `elementor-export/reference.json` sampai habis dulu. Itu SATU-SATUNYA sumber format. Tiru struktur dan nama key persis.
- Nilai di reference (misal display none, width 3px) hanyalah data uji. Tiru bentuknya, jangan salin nilainya.
- Jangan mengarang nama properti, elemen, atau tipe yang tidak ada di reference. Kalau butuh sesuatu yang tidak ada contohnya, jangan ditebak: tulis di notes (nama properti + nilai yang diinginkan) supaya kuatur manual di editor.

## Format
- Top-level: `{"content":[...],"page_settings":[],"version":"0.4","title":"<nama>","type":"page"}`
- Elemen yang boleh dipakai: `e-flexbox` (elType), serta widget `e-heading`, `e-paragraph`, `e-image`, `e-button`. Semua punya `"version":"0.0"`, `"isInner":false`, `settings`, `elements`.
- `id` elemen: 8 karakter hex, unik.
- Teks dibungkus `{"$$type":"escaped-html","value":"..."}`, link kosong `{"$$type":"link","value":[]}`.
- Style per elemen: `settings.classes` = `{"$$type":"classes","value":["e-<idElemen>-<7hex>"]}`, lalu `styles` berisi objek dengan id class itu, `"label":"local"`, `"type":"class"`, dan `variants` per breakpoint (`desktop`, `tablet`, `mobile`) dengan `"state":null` dan `"custom_css":null`.
- Properti style yang boleh dipakai (hanya yang ada di reference): width, height, min-height, padding, margin, display, position, flex-direction, color, background, border-width. Ukuran ditulis `size` dengan unit px; padding/margin satu nilai untuk semua sisi.
- Gambar: biarkan `e-image` kosong (`"settings":[]`) dan catat path aslinya di notes.

## Langkah
1. Baca file halaman yang kusebut, telusuri semua komponen yang di-import sampai ketemu isi aslinya.
2. Baca `tailwind.config.js` dan CSS global, terjemahkan class Tailwind ke nilai nyata (px/hex).
3. Petakan: section/wrapper → e-flexbox, judul → e-heading, teks → e-paragraph, gambar → e-image, tombol/link → e-button. Elemen lain yang tidak ada padanannya: pakai e-flexbox + elemen terdekat dan catat di notes.
4. Pertahankan urutan, teks, dan hierarki layout persis seperti aslinya.
5. Bagian interaktif (form, fetch API, state, chart): jangan dikarang, ganti dengan e-flexbox kosong dan daftarkan di notes.
6. Simpan di `elementor-export/<nama-halaman>.json`.
7. Validasi: JSON valid (`node -e "JSON.parse(require('fs').readFileSync('FILE','utf8'))"`), semua id unik, dan semua key/properti hanya yang ada di reference.
8. Tulis ringkasan: apa yang sudah dikonversi, gambar yang harus diganti, properti yang tidak bisa ditulis (font-size, gap, border-radius, dll), dan bagian interaktif.

Kerjakan per section berurutan. Kalau kutulis "hanya section X dulu", kerjakan section itu saja.