/* Contador em tempo real desde a data de início */
Sete.startCounter = function (cfg) {
  const i = cfg.inicio;
  const start = new Date(i.ano, i.mes - 1, i.dia, 0, 0, 0);
  const set = (unit, v) => {
    const n = document.querySelector(`[data-unit="${unit}"]`);
    if (n) n.textContent = v;
  };
  function tick() {
    const now = new Date();
    // Meses completos (calendário), depois o restante em dias/horas/min/seg
    let m = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
    let anchor = new Date(start); anchor.setMonth(start.getMonth() + m);
    if (anchor > now) { m--; anchor = new Date(start); anchor.setMonth(start.getMonth() + m); }
    const diff = now - anchor;
    set("months", m);
    set("days", Math.floor(diff / 864e5));
    set("hours", Math.floor(diff / 36e5) % 24);
    set("mins", Math.floor(diff / 6e4) % 60);
    set("secs", Math.floor(diff / 1e3) % 60);
    set("total", `${Math.floor((now - start) / 864e5)} dias juntos`);
  }
  tick();
  setInterval(tick, 1000);
};
