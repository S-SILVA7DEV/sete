
/* Player de música do Sete */
Sete.initAudio = function (cfg) {
  const btn = document.getElementById("musicBtn");

  if (!cfg.musica.arquivo || !btn) return;

  const audio = new Audio(cfg.musica.arquivo);
  const fill = document.getElementById("barFill");

  audio.loop = true;
  audio.preload = "auto";

  // Inicia ou retoma a música
  Sete.playMusic = function () {
    if (audio.paused) {
      audio.play().catch((error) => {
        console.warn("Não foi possível iniciar a música:", error);
      });
    }
  };

  // Pausa a música
  Sete.pauseMusic = function () {
    audio.pause();
  };

  // Controle manual
  btn.addEventListener("click", () => {
    if (audio.paused) {
      Sete.playMusic();
    } else {
      Sete.pauseMusic();
    }
  });

  audio.addEventListener("play", () => {
    btn.textContent = "Pausar";
  });

  audio.addEventListener("pause", () => {
    btn.textContent = "Tocar";
  });

  audio.addEventListener("timeupdate", () => {
    if (fill) {
      fill.style.width =
        (audio.currentTime / (audio.duration || 1)) * 100 + "%";
    }
  });

  audio.addEventListener("error", () => {
    btn.disabled = true;
    btn.style.opacity = ".4";
    console.error("Erro ao carregar a música.");
  });
};
