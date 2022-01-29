let valueCoin;
let coins = 5;
let coincidence = 0;
window.onload = start;

function start() {
  document.querySelector(".button-send").onclick = game;
  fillCoins();
}
function game() {
  coincidence = 0;
  valueCoin = document.querySelector("#text-field").value;

  if (valueCoin >= 2 && valueCoin <= 10) {
    createBox();
  } else {
    clean();
  }
}
function createBox() {
  document.querySelector(".contain").innerHTML = "";
  for (let i = 0; i < valueCoin; i++) {
    let random = Math.ceil(Math.random() * valueCoin);
    let colorCoin = check(random);
    document
      .querySelector(".contain")
      .insertAdjacentHTML(
        "beforeend",
        `<div class="box ${colorCoin}">${random}</div>`
      );
  }
  if (coincidence > 0) {
    var msg = ` ${coincidence} matches, gain ${coincidence} coins`;
    coins += coincidence;
  } else {
    var msg = `lose ${valueCoin} coins`;
    coins -= valueCoin;
  }
  document.querySelector(".info").innerHTML = msg;
  fillCoins();
  clean();
}
function check(random) {
  if (random == valueCoin) {
    coincidence++;
    return "green";
  } else {
    return "red";
  }
}
function fillCoins() {
  let c = document.querySelector(".coins");
  c.innerHTML = `<h3> Coins: ${coins}</h3>`;
  for (let i = 0; i < coins; i++) {
    c.insertAdjacentHTML("beforeend", `<img src="assets/img/coin-pyke.png">`);
  }
}
function clean() {
  document.querySelector("#text-field").value = " ";
  document.querySelector("#text-field").focus();
}
