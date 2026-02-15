function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btn = document.querySelector('#btnLoad');
const status = document.querySelector('#status');
const data = document.querySelector('#data');

btn.addEventListener('click', () => {
  status.textContent = 'Cargando...';
  data.style.display = 'none';

  const delayMs = randomInt(200, 1200);

  setTimeout(() => {
    status.textContent = 'Listo';
    data.style.display = 'block';
  }, delayMs);
});
