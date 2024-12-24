let advice = "Click the Dice to generate a new piece of advice!";
let adviceID = 0;

button = document.getElementById("btn");
body = document.getElementById("body");
adviceText = document.getElementById("advice-text");
adviceHeader = document.getElementById("advice-header");

// Set Advice on Load

function setAdviceOnLoad() {
  adviceText.innerHTML =
    '"Click the button to generate a new piece of advice!"';
  adviceHeader.innerHTML = "0";
}

// Generate Advice on Click
button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      advice = data.slip.advice;
      adviceID = data.slip.id;
    })
    .then(() => {
      adviceText.innerHTML = '"' + advice + '"';
      adviceHeader.innerHTML = adviceID;
    });
});
