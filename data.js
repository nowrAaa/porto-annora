// =====================================================
// EDIT FILE INI SAJA untuk mengubah isi portofolio.
// Tidak perlu menyentuh index.html / script.js.
// =====================================================
window.PORTFOLIO = {
  name: "Nayla Annora Nobel Widyonarko",
  role: "Mahasiswa Sistem Informasi Bisnis",
  intro:
    "Saya merancang dan membangun sistem informasi yang membuat proses bisnis lebih rapi, mulai dari analisis kebutuhan sampai aplikasi yang bisa dipakai.",
  cv: "assets/CV - Nayla Annora Nobel Widyonarko.pdf", // taruh file CV di folder assets/ dengan nama cv.pdf

  about:
    "Mahasiswa D-IV Sistem Informasi Bisnis yang sedang belajar menganalisis sistem, pengembangan website, dan pengembangan aplikasi mobile. Memiliki ketertarikan dan keterampilan teknis dalam perancangan arsitektur sistem, pemodelan proses bisnis, serta pembangunan aplikasi web menggunakan teknologi modern.",
  facts: [
    { label: "Kampus", value: "Politeknik Negeri Malang" },
    { label: "Jurusan", value: "Teknologi Informasi" },
    { label: "Program studi", value: "D4 Sistem Informasi Bisnis" },
    { label: "Lokasi", value: "Malang, Jawa Timur" }
  ],

  skills: [
    { group: "Analisis dan perancangan", items: ["Use case diagram", "Activity diagram", "Sequence diagram", "ERD", "Analisis kebutuhan"] },
    { group: "Pengembangan", items: ["HTML dan CSS", "JavaScript", "Flutter", "Git dan GitHub"] },
  ],

  projects: [
    {
      title: "PetLink",
      image: "assets/projects/petlink.png",
      imageAlt: "Tampilan aplikasi PetLink",
      meta: "Aplikasi mobile, 2026",
      desc: "Platform layanan kesehatan hewan yang menghubungkan pemilik hewan dengan dokter dan klinik. Menyusun Software Requirement Specification (SRS) dan membuat Use Case Diagram, Activity Diagram, Sequence Diagram, dan Flow Sistem untuk peran customer, klinik, dokter, dan admin. Mendesain UI aplikasi mobile dan website di Figma. Mengimplementasikan desain Figma ke Flutter, termasuk fitur Profil Hewan, Booking Klinik, dan Riwayat Konsultasi. Melakukan Black Box Testing bersama tim",
      tags: ["Mobile", "Flutter" ],
    },
    {
      title: "Website Lab Business Analyst JTI Polinema",
      image: "assets/projects/lab-ba.png",
      imageAlt: "Tampilan website Lab Business Analyst",
      meta: "Website, 2025",
      desc: " Website profil dan CMS untuk Lab Business Analyst Jurusan Teknologi Informasi Polinema . Membuat Use Case Diagram, Context Diagram, Activity Diagram, dan Sequence Diagram untuk landing page dan CMS, serta menyusun dokumentasi dan requirement sistem. Mendesain UI landing page, CMS, form, dan modal interaktif. Mengembangkan komponen navbar dan halaman home dengan HTML, CSS, Bootstrap, dan JavaScript. Melakukan functional testing dan user acceptance testing.",
      tags: ["Web", "HTML", "CSS", "JavaScript"],
    }
  ],

  // Gambar sertifikat: simpan di assets/certificates/ 
  certificates: [
    { title: "Sertifikat TRAINING PUBLIC SPEAKING", issuer: "BEM Fakultas Ekonomi dan Bisnis Universitas Muhammadiyah Malang ", year: "2025", image: "assets/certificates/sertifikat-2.pdf" },
    { title: "Sertifikat Seminar Nasional Himpunan Mahasiswa Teknologi Informasi Politeknik Negeri Malang Tahun 2025 dengan tema “Smart Solutions for a Sustainable Future Economy: Integrating Artificial Intelligence into the Modern Business World” ", issuer: "Himpunan Mahasiswa Teknologi Informasi Politeknik Negeri Malang", year: "2025", image: "assets/certificates/sertifikat-3.pdf" },
    { title: "Sertifikat Webinar Skill-Development ", issuer: "FESt Management", year: "2025", image: "assets/certificates/sertifikat-4.pdf" },
    { title: "Sertifikat Acara Future Entrepreneur Summit 2025 ", issuer: " FESt Management berkolaborasi dengan BEM Fakultas Ekonomi dan Bisnis Universitas Muhammadiyah Malang", year: "2025", image: "assets/certificates/sertifikat-5.pdf" },
    { title: "Sertifikat KOMPETISI IDE BISNIS TINGKAT NASIONAL", issuer: "Future Entrepreneur Summit", year: "2024", image: "assets/certificates/sertifikat-6.pdf" },{ title: "Sertifikat Latihan Keterampilan Manajemen Mahasiswa Tingkat Dasar XXXIII Tahun 2024", issuer: "UNIT KEGIATAN MAHASISWA PENDIDIKAN DAN PENALARAN", year: "2024", image: "assets/certificates/sertifikat-1.pdf" }

  ],

  timeline: [
    { when: "2024 - Sekarang", title: "Politeknik Negeri Malang", text: "D-IV Sistem Informasi Sistem" },
    { when: "2021-2024", title: "SMAN 6 Malang", text: "Ilmu Pengetahuan Sosial" },
    { when: "2018-2021", title: "Mts Khadijah Malang" },
    { when: "2012-2018", title: "SD Kartika 47 Malang" }
  ],

  contact: "Hubungi saya melalui email atau media sosial.",
  links: [
    { label: "Email", url: "mailto:emailanda@example.com", text: "naylaannora@gmail.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/nayla-annora-nobel-widyonarko-960553322/", text: "linkedin.com/in/nayla-annora-nobel-widyonarko-960553322" },
    { label: "GitHub", url: "https://github.com/nowrAaa/", text: "github.com/nowrAaa" }
  ],

  footer: "2026 © Nayla Annora Nobel Widyonarko."
};
