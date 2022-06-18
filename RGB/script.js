let corEscolhida;
function generateColors() {
  let div = document.getElementsByClassName("color");
  let visor = document.getElementById("painel");
  let r;
  let g;
  let b;
  for (let i = 0; i < div.length; i++) {
    r = Math.random() * 256;
    g = Math.random() * 256;
    b = Math.random() * 256;
    div[i].style.backgroundColor = `rgb(${r},${g},${b})`;
  }
  corEscolhida = Math.floor(Math.random() * 6);
  visor.innerHTML = div[corEscolhida].style.backgroundColor;
}

function checkColor(aux) {
  let corCerta = document.getElementById("painel");
  if (corCerta.textContent === aux.style.backgroundColor) {
    alert(true);
  } else {
    alert(false);
  }
}
