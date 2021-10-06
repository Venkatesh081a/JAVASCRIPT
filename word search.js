const heading = document.createElement("h2");
heading.innerText = "Search Word";
heading.style.textAlign = "center";
heading.style.marginTop = "150px";
heading.style.fontSize = "35px";
document.body.append(heading);
document.body.append(document.createElement("br"));

const textAreaHeading = document.createElement("b");
textAreaHeading.innerText = "Enter the Paragraph";
textAreaHeading.style.marginLeft = "400px";
textAreaHeading.style.fontSize = "20px";
document.body.append(textAreaHeading);

const textAreaInput = document.createElement("textarea");
textAreaInput.setAttribute("id", "paragraph");
textAreaInput.style.marginLeft = "20px";
textAreaInput.style.fontSize = "30px";
textAreaInput.style.width = "290px";
textAreaInput.style.height = "100px";
document.body.append(textAreaInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const searchHeading = document.createElement("b");
searchHeading.innerText = "Word to be Searched";
searchHeading.style.marginLeft = "400px";
searchHeading.style.fontSize = "20px";
document.body.append(searchHeading);

const wordSearchInput = document.createElement("input");
wordSearchInput.setAttribute("id", "search");
wordSearchInput.style.marginLeft = "20px";
wordSearchInput.style.height = "20px";
document.body.append(wordSearchInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const btnSearchWord = document.createElement("button");
btnSearchWord.textContent = "Search Word";
btnSearchWord.style.marginLeft = "600px";
document.body.append(btnSearchWord);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const output = document.createElement("b");
output.setAttribute("id", "result");
output.style.fontSize = "20px";
output.style.color = "green";
output.style.marginLeft = "460px";

function calculateWordOccurance() {
  const paragraphContent = textAreaInput.value;
  const searchedWord = wordSearchInput.value;
  const pattern = new RegExp(searchedWord, "g");
  const count = (paragraphContent.match(pattern) || 0).length;
  if (count > 0) {
    output.innerText = `Searched text ${searchedWord} is present ${count} times in the paragraph`;
  } else {
    output.innerText = "Searched text not found";
  }
  document.body.append(output);
}

btnSearchWord.addEventListener("click", calculateWordOccurance);
