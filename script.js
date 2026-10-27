(function () {
  const d = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  const pad = (n) => String(n).padStart(2, "0");

  // Ikon garis sederhana (viewBox 24x24)
  const ICONS = {
    school: '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    star: '<path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1"/><path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1"/>',
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>'
  };
  const icon = (name, cls) => {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    if (cls) s.setAttribute("class", cls);
    s.innerHTML = ICONS[name] || ICONS.star;
    return s;
  };
  // Pilih ikon berdasarkan kata pada label
  const pickIcon = (label) => {
    const l = label.toLowerCase();
    if (l.includes("kampus") || l.includes("sekolah")) return "school";
    if (l.includes("jurusan")) return "layers";
    if (l.includes("studi")) return "book";
    if (l.includes("lokasi") || l.includes("kota")) return "pin";
    if (l.includes("mail")) return "mail";
    if (l.includes("linkedin")) return "linkedin";
    if (l.includes("github")) return "github";
    return "link";
  };
  const fact = (keyword) => (d.facts || []).find((f) => f.label.toLowerCase().includes(keyword));
  const external = (a, url) => { if (url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; } };

  document.documentElement.classList.add("js");

  // ===== Hero =====
  const words = d.name.trim().split(/\s+/);
  document.title = d.name + " | Portofolio";
  $("initials").textContent = (words[0][0] + (words[1] ? words[1][0] : "")).toUpperCase();
  $("brand-name").textContent = words.slice(0, 2).join(" ");
  const hl = el("span", "hl", words[0]);
  $("name").append(hl, " " + words.slice(1).join(" "));
  $("role").textContent = d.role;
  $("intro").textContent = d.intro;
  $("cv-link").href = d.cv;
  $("spin-text").textContent = d.role + " • ";

  if (d.photo) {
    const img = el("img");
    img.src = d.photo;
    img.alt = "Foto " + d.name;
    img.addEventListener("load", () => { $("photo").replaceChildren(img); });
  }

  [["chip-a", fact("lokasi"), "pin"], ["chip-b", fact("kampus"), "school"]].forEach(([id, f, ic]) => {
    if (!f) return;
    $(id).append(icon(ic), el("span", null, f.value));
  });

  const skillCount = d.skills.reduce((n, s) => n + s.items.length, 0);
  [[d.projects.length, "Proyek"], [(d.certificates || []).length, "Sertifikat"], [skillCount, "Keahlian"]].forEach(([n, label]) => {
    if (!n) return;
    const wrap = el("div");
    wrap.append(el("dt", null, label), el("dd", null, n + "+"));
    $("stats").append(wrap);
  });

  // Pita keahlian berjalan (isi digandakan agar animasinya mulus)
  const allSkills = d.skills.flatMap((s) => s.items);
  for (let i = 0; i < 2; i++) allSkills.forEach((s) => $("marquee").append(el("span", null, s)));

  // ===== Tentang =====
  $("about-text").textContent = d.about;
  d.facts.forEach((f) => {
    const wrap = el("div", "reveal");
    const ico = el("span", "ico");
    ico.append(icon(pickIcon(f.label)));
    wrap.append(ico, el("dt", null, f.label), el("dd", null, f.value));
    $("facts").append(wrap);
  });

  // ===== Keahlian =====
  d.skills.forEach((s, i) => {
    const box = el("div", "skill card reveal");
    box.append(el("span", "skill-num", pad(i + 1)), el("h3", null, s.group));
    const ul = el("ul");
    s.items.forEach((item) => ul.append(el("li", null, item)));
    box.append(ul);
    $("skills").append(box);
  });

  // ===== Proyek =====
  d.projects.forEach((p, i) => {
    const art = el("article", "project card reveal");
    const fig = el("figure", "shot");
    const browser = el("div", "browser");
    const bar = el("div", "browser-bar");
    bar.append(el("i"), el("i"), el("i"));
    // Placeholder dipakai bila gambar belum ada / gagal dimuat
    const empty = el("div", "shot-empty");
    empty.append(el("b", null, p.title[0]), el("span", null, "Tampilan segera hadir"));
    browser.append(bar, empty);
    if (p.image) {
      const img = el("img");
      img.src = p.image; img.alt = p.imageAlt || p.title; img.loading = "lazy";
      img.addEventListener("load", () => empty.replaceWith(img));
      img.addEventListener("click", () => openBox(p.image, p.imageAlt || p.title));
    }
    fig.append(browser);

    const body = el("div", "project-body");
    const top = el("div", "project-top");
    top.append(el("span", "project-num", pad(i + 1)), el("p", "meta", p.meta));
    body.append(top, el("h3", null, p.title), el("p", null, p.desc.trim()));
    const tags = el("ul", "tags");
    (p.tags || []).forEach((t) => tags.append(el("li", null, t)));
    body.append(tags);
    const links = el("div", "project-links");
    (p.links || []).forEach((l) => {
      const a = el("a", null, l.label);
      a.href = l.url;
      external(a, l.url);
      a.append(icon("arrow"));
      links.append(a);
    });
    body.append(links);
    art.append(fig, body);
    $("projects").append(art);
  });

  // ===== Lightbox =====
  const box = $("lightbox");
  function openBox(src, caption) {
    const isPdf = /\.pdf$/i.test(src);
    const img = $("lightbox-img"), frame = $("lightbox-pdf"), open = $("lightbox-open");
    img.hidden = isPdf;
    frame.hidden = !isPdf;
    open.hidden = !isPdf;
    if (isPdf) {
      frame.src = src + "#view=FitH";
      open.href = src;
      img.removeAttribute("src");
    } else {
      img.src = src;
      img.alt = caption;
      frame.removeAttribute("src");
    }
    $("lightbox-caption").textContent = caption;
    box.showModal();
  }
  box.addEventListener("close", () => $("lightbox-pdf").removeAttribute("src"));
  $("lightbox-close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });

  // ===== Sertifikat =====
  (d.certificates || []).forEach((c) => {
    const title = c.title.trim(), issuer = c.issuer.trim();
    const isPdf = /\.pdf$/i.test(c.image);
    const card = el("button", "cert card reveal");
    card.type = "button";
    const thumb = el("div", "cert-thumb");
    if (isPdf) {
      thumb.append(el("span", "cert-type", "PDF"), icon("award"));
    } else {
      const img = el("img");
      img.src = c.image; img.alt = "Sertifikat " + title; img.loading = "lazy";
      img.addEventListener("error", () => { img.remove(); thumb.append(icon("award")); });
      thumb.append(img);
    }
    thumb.append(el("span", "cert-year", c.year));
    const body = el("div", "cert-body");
    body.append(el("strong", null, title), el("span", null, issuer));
    card.append(thumb, body);
    card.addEventListener("click", () => openBox(c.image, title + " (" + issuer + ", " + c.year + ")"));
    $("certs").append(card);
  });
  if (!$("certs").children.length) $("sertifikat").remove();

  // ===== Pendidikan =====
  d.timeline.forEach((t) => {
    const li = el("li", "reveal");
    const dot = el("span", "dot");
    dot.append(icon("school"));
    const card = el("div", "tl-card card");
    card.append(el("h3", null, t.title), el("span", "when", t.when));
    if (t.text) card.append(el("p", null, t.text));
    li.append(dot, card);
    $("timeline").append(li);
  });

  // ===== Kontak & footer =====
  $("contact-text").textContent = d.contact;
  d.links.forEach((l) => {
    const li = el("li");
    const a = el("a");
    a.href = l.url;
    external(a, l.url);
    const ico = el("span", "ico");
    ico.append(icon(pickIcon(l.label)));
    const txt = el("span");
    txt.append(el("small", null, l.label), el("b", null, l.text));
    a.append(ico, txt, icon("arrow", "arrow"));
    li.append(a);
    $("links").append(li);
  });
  $("footer").textContent = "© " + new Date().getFullYear() + " " + d.name + ". " + (d.footer || "");

  // ===== Navigasi =====
  const nav = document.querySelector(".nav");
  const toggle = $("nav-toggle"), menu = $("nav-menu");
  const setMenu = (open) => { menu.classList.toggle("open", open); toggle.setAttribute("aria-expanded", open); };
  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ===== Animasi muncul =====
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((n) => io.observe(n));
  } else {
    items.forEach((n) => n.classList.add("in"));
  }
})();
