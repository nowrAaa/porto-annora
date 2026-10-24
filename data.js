// =====================================================
// EDIT FILE INI SAJA untuk mengubah isi portofolio.
// Tidak perlu menyentuh index.html / script.js.
// =====================================================
window.PORTFOLIO = {
  name: "Nayla Annora Nobel Widyonarko",
  role: "Mahasiswa Sistem Informasi Bisnis",
  intro:
    "Saya merancang dan membangun sistem informasi yang membuat proses bisnis lebih rapi, mulai dari analisis kebutuhan sampai aplikasi yang bisa dipakai.",
  cv: "cv.pdf", // taruh file cv.pdf di folder yang sama, atau ganti dengan link

  about:
    "Saya mahasiswa D4 Sistem Informasi Bisnis di Politeknik Negeri Malang. Saya suka menerjemahkan masalah operasional menjadi rancangan sistem yang jelas, lalu mewujudkannya dalam aplikasi. [Tambahkan satu atau dua kalimat tentang minat dan tujuan karier Anda.]",
  facts: [
    { label: "Kampus", value: "Politeknik Negeri Malang" },
    { label: "Jurusan", value: "Teknologi Informasi" },
    { label: "Program studi", value: "D4 Sistem Informasi Bisnis" },
    { label: "Lokasi", value: "Malang, Jawa Timur" }
  ],

  skills: [
    { group: "Analisis dan perancangan", items: ["Use case diagram", "Activity diagram", "Sequence diagram", "ERD", "Analisis kebutuhan"] },
    { group: "Pengembangan", items: ["HTML dan CSS", "JavaScript", "[Bahasa/framework lain]", "Git dan GitHub"] },
    { group: "Basis data dan tools", items: ["MySQL", "Figma", "Vercel", "[Tools lain]"] }
  ],

  projects: [
    {
      title: "PetLink",
      meta: "Aplikasi mobile, 2026",
      desc: "[Tulis satu atau dua kalimat: masalah yang diselesaikan, peran Anda, dan hasilnya.]",
      tags: ["Mobile", "[Teknologi]"],
      links: [{ label: "Kode sumber", url: "#" }]
    },
    {
      title: "Website Lab Business Analyst JTI Polinema",
      meta: "Website, 2025",
      desc: "[Tulis satu atau dua kalimat: masalah yang diselesaikan, peran Anda, dan hasilnya.]",
      tags: ["Web", "[Teknologi]"],
    }
  ],

  timeline: [
    { when: "2024", title: "Mulai kuliah D4 Sistem Informasi Bisnis", text: "Politeknik Negeri Malang, Jurusan Teknologi Informasi." },
    { when: "2025", title: "Website Lab Business Analyst", text: "[Ubah: peran dan kontribusi Anda.]" },
    { when: "2026", title: "PetLink dan sistem laundry", text: "[Ubah: pencapaian atau pelajaran penting.]" }
  ],

  contact: {
  links: [
    { label: "Email", url: "mailto:emailanda@example.com", text: "naylaannor@gmail.com" },
    { label: "LinkedIn", url: "https://linkedin.com/in/username", text: "https://www.linkedin.com/in/nayla-annora-nobel-widyonarko-960553322/" },
    { label: "GitHub", url: "https://github.com/username", text: "https://github.com/nowrAaa/" }
  ],

  footer: "2026 &copy; Nayla Annora Nobel Widyonarko."
}
}
