let heading = document.createElement("h1");
heading.textContent = "COUNTER";
heading.style.fontSize = "50px";
heading.style.textAlign = "center";
heading.style.marginTop = "130px";

document.body.appendChild(heading);

let counterVariable = document.createElement("span");
counterVariable.textContent = 0;
counterVariable.setAttribute("type", "text");
counterVariable.style.fontSize = "90px";
counterVariable.style.marginLeft = "620px";

document.body.appendChild(counterVariable);

let divElement = document.createElement("div");
divElement.setAttribute("id", "button-containers");

let Increase = document.createElement("button");
Increase.textContent = "INCREASE";
Increase.style.marginLeft = "500px";
Increase.setAttribute("id", "Increasebtn");
Increase.style.backgroundColor = "lightgreen";
Increase.style.fontSize = "18px";

let Decrease = document.createElement("button");
Decrease.textContent = "DECREASE";
Decrease.style.marginLeft = "30px";
Decrease.setAttribute("id", "Decreasebtn");
Decrease.style.backgroundColor = "red";
Decrease.style.fontSize = "18px";

let Reset = document.createElement("button");
Reset.textContent = "RESET";
Reset.style.marginLeft = "30px";
Reset.setAttribute("id", "Resetbtn");
Reset.style.backgroundColor = "yellow";
Reset.style.fontSize = "18px";

divElement.appendChild(Increase);
divElement.appendChild(Decrease);
divElement.appendChild(Reset);
document.body.appendChild(divElement);

Increase.addEventListener("click", () => {
  counterVariable.textContent = +counterVariable.textContent + 1;
  counterVariable.style.color = "green";
});

Decrease.addEventListener("click", () => {
  counterVariable.textContent = +counterVariable.textContent - 1;
  counterVariable.style.color = "red";
});

Reset.addEventListener("click", () => {
  counterVariable.textContent = 0;
  counterVariable.style.color = "blue";
});
