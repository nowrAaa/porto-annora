(function () {
  const d = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.textContent = html;
    return n;
  };

  document.title = d.name + " | Portofolio";
  $("brand").textContent = d.name.split(" ")[0];
  $("name").textContent = d.name;
  $("role").textContent = d.role;
  $("intro").textContent = d.intro;
  $("cv-link").href = d.cv;
  $("about-text").textContent = d.about;
  $("contact-text").textContent = d.contact;
  $("footer").textContent = "© " + new Date().getFullYear() + " " + d.name + ". " + d.footer;

  d.facts.forEach((f) => {
    const wrap = el("div");
    wrap.append(el("dt", null, f.label), el("dd", null, f.value));
    $("facts").append(wrap);
  });

  d.skills.forEach((s) => {
    const box = el("div", "skill");
    box.append(el("h3", null, s.group));
    const ul = el("ul");
    s.items.forEach((i) => ul.append(el("li", null, i)));
    box.append(ul);
    $("skills").append(box);
  });

  d.projects.forEach((p) => {
    const art = el("article", "project");
    const head = el("div", "project-head");
    head.append(el("h3", null, p.title), el("p", "meta", p.meta));
    const body = el("div", "project-body");
    body.append(el("p", null, p.desc));
    const tags = el("ul", "tags");
    p.tags.forEach((t) => tags.append(el("li", null, t)));
    body.append(tags);
    const links = el("div", "project-links");
    p.links.forEach((l) => {
      const a = el("a", null, l.label);
      a.href = l.url;
      if (l.url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      links.append(a);
    });
    body.append(links);
    art.append(head, body);
    $("projects").append(art);
  });

  d.timeline.forEach((t) => {
    const li = el("li");
    li.append(el("span", "when", t.when));
    const box = el("div");
    box.append(el("h3", null, t.title), el("p", null, t.text));
    li.append(box);
    $("timeline").append(li);
  });

  d.links.forEach((l) => {
    const li = el("li");
    const a = el("a", null, l.text);
    a.href = l.url;
    if (l.url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    li.append(el("span", null, l.label), a);
    $("links").append(li);
  });
})();
