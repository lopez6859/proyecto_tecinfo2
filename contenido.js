function mostrarIdea() {
  const idea = document.getElementById("ideaCreativa");
  idea.classList.toggle("oculto");
}

function cambiarColor() {
  const colores = ["#d0f0c0", "#fff4b2", "#cce5ff", "#f9c5d1", "#e6ccff"];
  const randomColor = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = randomColor;
}
