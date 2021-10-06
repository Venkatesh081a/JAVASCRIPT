const heading = document.createElement("h1");
heading.textContent = "Generate Multiplication Table";
heading.style.textAlign = "center";
heading.style.marginTop = "100px";
heading.style.fontSize = "40px";

const label1 = document.createElement("label");
label1.textContent = "Number :";
label1.style.marginLeft = "500px";
label1.style.fontSize = "20px";

const numberInput = document.createElement("input");
numberInput.placeholder = "Enter any number";
numberInput.id = "bride-age";
numberInput.style.marginLeft = "20px";

const btnGenerate = document.createElement("button");
btnGenerate.textContent = "Generate";
btnGenerate.style.marginLeft = "610px";

document.body.append(heading);
document.body.append(label1);
document.body.append(numberInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(btnGenerate);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const divElement = document.createElement("div");
divElement.id = "result";
divElement.style.marginLeft = "500px";

const displayMultiplicationTable = document.createElement("b");
displayMultiplicationTable.id = "output";
displayMultiplicationTable.style.fontSize = "23px";

divElement.append(displayMultiplicationTable);
document.body.append(divElement);

const generateMultiplicationTable = function () {
  let number = numberInput.value;
  if (number === "") {
    number = 0;
  }
  let result;
  let finalResult = "";
  for (let i = 1; i <= 10; i++) {
    result = number * i;
    finalResult += ` ${"<br>"} ${number} * ${i} = ${result}`;
  }
  displayMultiplicationTable.innerHTML = finalResult;
};

btnGenerate.addEventListener("click", generateMultiplicationTable);
