const heading = document.createElement("h1");
heading.innerText = "Palindrome";
heading.style.textAlign = "center";
heading.style.marginTop = "100px";
heading.style.fontSize = "35px";
heading.style.fontFamily = "Georgia";

const divElement = document.createElement("div");
divElement.style.border = "1px solid black";
divElement.style.width = "400px";
divElement.style.height = "300px";
divElement.style.margin = "auto";
divElement.style.backgroundColor = "lightblue";

const textAreaHeading = document.createElement("b");
textAreaHeading.textContent = "Enter your text to check palindrome";
textAreaHeading.style.padding = "50px";
textAreaHeading.style.fontSize = "18px";

const textArea = document.createElement("textarea");
textArea.id = "text";
textArea.style.marginLeft = "90px";
textArea.style.fontSize = "20px";
textArea.style.height = "90px";

const btnCheck = document.createElement("button");
btnCheck.id = "check";
btnCheck.innerText = "Check";
btnCheck.style.marginLeft = "180px";
btnCheck.style.fontSize = "15px";

divElement.append(document.createElement("br"));
divElement.append(textAreaHeading);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(textArea);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(btnCheck);
document.body.append(heading);
document.body.append(document.createElement("br"));
document.body.append(divElement);

const outputElement = document.createElement("b");
outputElement.style.marginLeft = "100px";
outputElement.style.fontSize = "20px";
outputElement.style.color = "blue";

function checkPalindrome() {
  const String = textArea.value.toLowerCase();
  let reversedString = "";
  for (let i = String.length - 1; i >= 0; i--) {
    reversedString += String[i];
  }
  let output;
  if (String === reversedString) {
    output = `${textArea.value} is a Palindrome`;
  } else {
    output = `${String} is not a Palindrome`;
  }
  divElement.append(document.createElement("br"));
  divElement.append(document.createElement("br"));
  outputElement.textContent = output;
  divElement.append(outputElement);
}

btnCheck.addEventListener("click", checkPalindrome);
