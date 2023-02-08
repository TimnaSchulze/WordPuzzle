window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  }


const vowles = ["a", "e", "i","o", "u"];
const string = "Figure out the phrase by entering the correct vowles";
const stringArray = string.split("");
let xArray = [];
stringArray.forEach(function(letter) {
  if (vowles.includes(letter)) {
    xArray.push("__");
  } else {
    xArray.push(letter);
  }
});
const finalString = xArray.join("");

};