window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();


  }
}
const pElement = document.createElement("p");
pElement.append("A puzzle without vowles");
const firstDiv = document.querySelector("div");
firstDiv.append(pElement);
