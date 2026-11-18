/* Navegação livre entre seções + sequências (abertura, carta, créditos) */
(() => {
  const cfg = Sete.config;
  const scenes = Sete.render(cfg);
  Sete.startCounter(cfg);
  Sete.initAudio(cfg);

  const $ = (id) => document.getElementById(id);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  let current = -1;

  $("mastNames").textContent = `${cfg.casal.ela} & ${cfg.casal.ele}`;

  /* ---------- Barra de navegação ---------- */
  const nav = $("nav");
  scenes.forEach((s, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = s.dataset.label;
    b.addEventListener("click", () => go(i));
    nav.appendChild(b);
  });

  function go(n) {
    if (n === current || n < 0 || n >= scenes.length) return;
    if (current >= 0) scenes[current].classList.remove("active");
    current = n;
    scenes[current].classList.add("active");
    // Pausa vídeos de outras seções
    document.querySelectorAll("video").forEach((v) => v.pause());
    [...nav.children].forEach((b, i) => {
      b.classList.toggle("on", i === n);
      if (i === n) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    });
  }

  // Botões "Continuar" / "Entrar" levam à próxima seção
  document.addEventListener("click", (e) => {
    if (e.target.closest(".next")) go(current + 1);
  });

  /* ---------- Abertura ---------- */
  const intro = $("abertura");
  const leader = intro.querySelector(".leader");
  const title = intro.querySelector(".titlecard");
  const introItems = ["introKicker", "introLead", "playBtn", "skipIntro"];

  // Estado final da abertura: vira um cartaz com o título e o botão "Entrar"
  function introDone() {
    introItems.forEach((id) => ($(id).hidden = true));
    leader.hidden = true;
    title.hidden = false;
    $("enter").hidden = false;
    document.body.classList.add("ready"); // mostra cabeçalho e navegação
  }

  $("playBtn").addEventListener("click", async () => {
    // Inicia a música no primeiro clique da experiência
    if (Sete.playMusic) Sete.playMusic();

    introItems.forEach((id) => $(id).classList.add("out"));
    leader.hidden = true;
    title.hidden = false;
    await sleep(3200);
    introDone();
    go(1);
  });

  $("skipIntro").addEventListener("click", () => { introDone(); go(1); });

  /* ---------- Carta: romper o selo (a carta fica aberta depois) ---------- */
  $("seal").addEventListener("click", async () => {
    $("seal").classList.add("broken");
    $("sealHint").hidden = true;
    await sleep(900);
    $("seal").hidden = true;
    $("paper").hidden = false;
  }, { once: true });

  /* ---------- Créditos: rolam e revelam a frase final ---------- */
  function showFinale() {
    $("creditsWrap").classList.add("done");
    $("finale").classList.add("show");
    $("skip").hidden = true;
  }
  $("credits").addEventListener("animationend", showFinale);
  $("skip").addEventListener("click", showFinale);
  $("again").addEventListener("click", () => go(0));

  go(0);
})();
