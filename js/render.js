/* Monta todas as seções a partir do config.js */
Sete.render = function (cfg) {
  const stage = document.getElementById("stage");
  const scenes = [];

  // Helper: cria elemento com classe e texto (textContent = seguro)
  const el = (tag, cls, txt) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  };
  const button = (label, cls, id) => {
    const b = el("button", "btn " + (cls || ""), label);
    b.type = "button";
    if (id) b.id = id;
    return b;
  };
  // "label" é o nome que aparece na navegação; --i define a ordem de entrada
  const scene = (id, label, children) => {
    const s = el("section", "scene");
    s.id = id; s.dataset.label = label;
    s.append(...children);
    [...s.children].forEach((c, i) => c.style.setProperty("--i", i));
    stage.appendChild(s);
    scenes.push(s);
    return s;
  };

  /* ---------- Abertura / cartaz ---------- */
  const leader = el("div", "leader"); leader.hidden = true;
  leader.append(el("span", "num"));
  const titleCard = el("div", "titlecard"); titleCard.hidden = true;
  titleCard.append(el("h1", "", cfg.titulo), el("p", "", cfg.subtitulo));
  const kicker = el("p", "kicker", `${cfg.casal.ele} apresenta`); kicker.id = "introKicker";
  const lead = el("p", "lead", cfg.abertura); lead.id = "introLead";
  const enter = button("Entrar", "next", "enter"); enter.hidden = true;
  scene("abertura", "Início", [
    kicker, lead,
    button("Dar play", "", "playBtn"),
    button("Pular abertura", "ghost", "skipIntro"),
    leader, titleCard, enter
  ]);

  /* ---------- História ---------- */
  const d = new Date(cfg.inicio.ano, cfg.inicio.mes - 1, cfg.inicio.dia);
  const estreia = d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
  const counter = el("div", "counter");
  [["months", "meses"], ["days", "dias"], ["hours", "horas"], ["mins", "min"], ["secs", "seg"]]
    .forEach(([u, l]) => {
      const cell = el("div");
      const b = el("b", "", "0"); b.dataset.unit = u;
      cell.append(b, el("small", "", l));
      counter.appendChild(cell);
    });
  const total = el("p", "muted"); total.dataset.unit = "total";
  const historia = [el("h2", "", estreia), el("p", "muted", "Estamos juntos há"), counter, total];
  if (cfg.historia && cfg.historia.texto) historia.push(el("p", "lead small", cfg.historia.texto));
  historia.push(button("Continuar", "next"));
  scene("historia", "História", historia);

  /* ---------- Cenas (fotos e vídeo) ---------- */
  const strip = el("div", "strip");
  cfg.fotos.forEach((f) => {
    const fig = el("figure", "frame");
    const wrap = el("div", "imgwrap");
    const [w, h] = f.proporcao || [4, 5];
    wrap.style.aspectRatio = `${w} / ${h}`;
    const alt = f.legenda || `${cfg.casal.ela} e ${cfg.casal.ele}`;
    const placeholder = () => wrap.replaceChildren(el("span", "ph", "Sua foto aqui"));
    if (f.video) {
      const v = document.createElement("video");
      v.src = f.video; v.poster = f.poster || ""; v.controls = true;
      v.playsInline = true; v.preload = "metadata"; v.setAttribute("aria-label", alt);
      v.onerror = placeholder;
      wrap.appendChild(v);
    } else if (f.src) {
      const img = new Image();
      img.src = f.src; img.alt = alt; img.loading = "lazy"; img.decoding = "async";
      img.onerror = placeholder;
      wrap.appendChild(img);
    } else placeholder();
    fig.appendChild(wrap);
    if (f.legenda) fig.appendChild(el("figcaption", "", f.legenda));
    strip.appendChild(fig);
  });
  scene("memorias", "Cenas", [strip, el("p", "muted", "Deslize para ver mais"), button("Continuar", "next")]);

  /* ---------- Trilha sonora (só se houver arquivo) ---------- */
  if (cfg.musica.arquivo) {
    const bar = el("div", "bar-track"); const fill = el("div"); fill.id = "barFill"; bar.append(fill);
    scene("trilha", "Trilha", [
      el("h2", "", cfg.musica.titulo), el("p", "muted", cfg.musica.artista),
      bar, button("Tocar", "", "musicBtn"), button("Continuar", "ghost next")
    ]);
  }

  /* ---------- Carta ---------- */
  const seal = el("button", "seal", cfg.casal.ele[0]); seal.id = "seal"; seal.type = "button";
  seal.setAttribute("aria-label", "Romper o selo e abrir a carta");
  const sealHint = el("p", "muted", "Toque no selo para abrir"); sealHint.id = "sealHint";
  const paper = el("article", "paper"); paper.id = "paper"; paper.hidden = true;
  cfg.carta.forEach((t, i) => {
    const p = el("p", "", t); p.style.setProperty("--d", `${i * 1.1}s`); paper.appendChild(p);
  });
  scene("carta", "Carta", [seal, sealHint, paper, button("Continuar", "next")]);

  /* ---------- Créditos finais ---------- */
  const credits = el("div", "credits"); credits.id = "credits";
  cfg.creditos.forEach((c) => {
    const row = el("div", "row");
    row.append(el("small", "", c.cargo), el("span", "", c.nome));
    credits.appendChild(row);
  });
  const finale = el("div", "finale"); finale.id = "finale";
  finale.append(
    el("h2", "forever", cfg.frase), el("p", "signature", cfg.assinatura),
    el("p", "muted", cfg.continua), button("Voltar ao início", "ghost", "again")
  );
  const wrap = el("div", "credits-wrap"); wrap.id = "creditsWrap"; wrap.append(credits, finale);
  scene("final", "Final", [wrap, button("Pular créditos", "ghost", "skip")]);

  return scenes;
};
