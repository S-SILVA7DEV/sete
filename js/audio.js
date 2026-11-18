/* Player de música — só funciona se houver arquivo no config.js */
Sete.initAudio = function (cfg) {
  const btn = document.getElementById("musicBtn");
  if (!cfg.musica.arquivo || !btn) return;
  const audio = new Audio(cfg.musica.arquivo);
  const fill = document.getElementById("barFill");
  btn.addEventListener("click", () => {
    if (audio.paused) audio.play().catch(() => {}); else audio.pause();
  });
  audio.addEventListener("play", () => (btn.textContent = "Pausar"));
  audio.addEventListener("pause", () => (btn.textContent = "Tocar"));
  audio.addEventListener("timeupdate", () => {
    fill.style.width = (audio.currentTime / (audio.duration || 1)) * 100 + "%";
  });
  audio.addEventListener("error", () => { btn.disabled = true; btn.style.opacity = .4; });
};
