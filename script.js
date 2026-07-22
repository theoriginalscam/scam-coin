/* =========================================================
   $SCAM — script.js
   Interazioni essenziali e sobrie.
   ========================================================= */

/* 0) Segnala che il JS è attivo (abilita le animazioni di comparsa) */
document.documentElement.classList.add('js');

/* 1) Anno automatico nel footer */
document.getElementById('year').textContent = new Date().getFullYear();

/* 2) Copia dell'indirizzo del contratto (attivo solo se c'è il pulsante) */
const copyBtn = document.getElementById('copyBtn');
const addr = document.getElementById('contractAddr');
if (copyBtn && addr) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(addr.textContent.trim());
      const original = copyBtn.textContent;
      copyBtn.textContent = 'Copied';
      setTimeout(() => { copyBtn.textContent = original; }, 1600);
    } catch (e) {
      copyBtn.textContent = 'Copy manually';
    }
  });
}

/* 3) Comparsa al scroll + conteggio numeri delle metriche */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    const valEl = entry.target.querySelector('[data-count]');
    if (valEl) countUp(valEl);
    io.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach((el) => io.observe(el));

/* Rete di sicurezza: se dopo 2,5s qualcosa non è ancora comparso, mostralo comunque */
setTimeout(() => {
  revealEls.forEach((el) => {
    if (!el.classList.contains('is-in')) {
      el.classList.add('is-in');
      const valEl = el.querySelector('[data-count]');
      if (valEl) countUp(valEl);
    }
  });
}, 2500);

/* 4) Rispetta "animazioni ridotte": ferma il video di sfondo sul poster */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const bg = document.querySelector('.abstract__bg');
  if (bg) { bg.removeAttribute('autoplay'); bg.pause && bg.pause(); }
}

/* Anima un numero da 0 al valore finale */
function countUp(el) {
  const target = parseFloat(el.dataset.count);
  const dec = parseInt(el.dataset.dec || '0', 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out
    const current = (target * eased).toFixed(dec);
    el.textContent = current + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
