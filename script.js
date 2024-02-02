const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");

function redirectToLink() {
  console.log("Botão 'Não' clicado");
  window.location.href = "https://wa.me/5582999450966"; // Substitua com o link desejado
}

function moveRandomly() {
  console.log("Mouse passou por cima do botão 'Não'");
  const bodyWidth = document.body.clientWidth - btnNo.clientWidth;
  const bodyHeight = document.body.clientHeight - btnNo.clientHeight;

  const randomX = Math.floor(Math.random() * bodyWidth);
  const randomY = Math.floor(Math.random() * bodyHeight);

  btnNo.style.position = "absolute";
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
}
