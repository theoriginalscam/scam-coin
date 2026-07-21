/* =========================================================
   $SCAM — script.js
   Interazioni essenziali e sobrie.
   ========================================================= */

/* 1) Anno automatico nel footer */
document.getElementById('year').textContent = new Date().getFullYear();

/* 2) Copia dell'indirizzo del contratto */
const copyBtn = document.getElementById('copyBtn');
const addr = document.getElementById('contractAddr');
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

/* 3) Comparsa al scroll + conteggio numeri delle metriche */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-in');
    const valEl = entry.target.querySelector('[data-count]');
    if (valEl) countUp(valEl);
    io.unobserve(entry.target);
  });
}, { threshold: 0.3 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

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
