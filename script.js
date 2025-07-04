AOS.init({ duration:800, once:true });

const toggle = document.getElementById('mode-toggle');
toggle.onclick = () => {
  const t = document.documentElement;
  const next = t.getAttribute('data-theme') === 'dark' ? '' : 'dark';
  t.setAttribute('data-theme', next);
  toggle.textContent = next ? '☀️' : '🌙';
};
