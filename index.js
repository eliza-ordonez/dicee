
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").src = randomImage1;
document.querySelector(".img2").src = randomImage2;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// Other ways to access images... prob better too when dealing w/multiple imgs
// document.querySelectorAll("img")[0]
// document.querySelectorAll("img")[1]
