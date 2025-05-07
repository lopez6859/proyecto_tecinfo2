const imagenes = document.querySelector('.imagenes');
const imgs = document.querySelectorAll('.imagenes img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function mostrarImagen() {
  imagenes.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % imgs.length;
  mostrarImagen();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + imgs.length) % imgs.length;
  mostrarImagen();
});

// Avance automático cada 5 segundos
setInterval(() => {
  index = (index + 1) % imgs.length;
  mostrarImagen();
}, 5000);
