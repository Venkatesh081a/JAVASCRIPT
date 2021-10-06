let divElement = document.createElement("div");
divElement.id = "container-div";

let heading = document.createElement("h1");
heading.setAttribute("id", "heading");
heading.textContent = "Wedding Decoration Cost Calculation";
heading.style.textAlign = "center";
heading.style.marginTop = "80px";
heading.style.color = "lightblue";

let NameBold = document.createElement("label");
NameBold.id = "name-bold";
NameBold.textContent = "Name :";
NameBold.style.marginLeft = "500px";
NameBold.style.fontSize = "20px";
NameBold.style.color = "gold";

let Name = document.createElement("input");
Name.setAttribute("id", "name");
Name.placeholder = "Enter your Name";
Name.style.textAlign = "center";
Name.style.marginLeft = "30px";

let PhoneNumberBold = document.createElement("label");
PhoneNumberBold.setAttribute("id", "phone-bold");
PhoneNumberBold.textContent = "PhoneNumber :";
PhoneNumberBold.style.marginLeft = "500px";
PhoneNumberBold.style.fontSize = "20px";
PhoneNumberBold.style.color = "gold";

let PhoneNumber = document.createElement("input");
PhoneNumber.setAttribute("id", "phoneNumber");
PhoneNumber.placeholder = "Enter your Mobile Number";
PhoneNumber.style.textAlign = "center";
PhoneNumber.style.marginLeft = "30px";

let AddressBold = document.createElement("label");
AddressBold.setAttribute("id", "phone-bold");
AddressBold.textContent = "Address :";
AddressBold.style.marginLeft = "500px";
AddressBold.style.fontSize = "20px";
AddressBold.style.color = "gold";

let Address = document.createElement("input");
Address.setAttribute("id", "address");
Address.placeholder = "Enter your Address";
Address.style.textAlign = "center";
Address.style.marginLeft = "30px";

let selectionBold = document.createElement("label");
selectionBold.setAttribute("id", "select-bold");
selectionBold.textContent = "Wedding Type :";
selectionBold.style.marginLeft = "500px";
selectionBold.style.fontSize = "20px";
selectionBold.style.color = "gold";

let weddingOption1 = document.createElement("option");
weddingOption1.setAttribute("value", "simple");
weddingOption1.textContent = "Simple";
weddingOption1.selected = true;

let weddingOption2 = document.createElement("option");
weddingOption2.setAttribute("value", "grand");
weddingOption2.textContent = "Grand";

let weddingSelectionElement = document.createElement("select");
weddingSelectionElement.setAttribute("id", "Type");
weddingSelectionElement.style.marginLeft = "30px";
weddingSelectionElement.append(weddingOption1);
weddingSelectionElement.appendChild(weddingOption2);

let extraElementBold = document.createElement("label");
extraElementBold.setAttribute("id", "flower-decoration-bold");
extraElementBold.textContent = "Do you want extra flower decoration ?";
extraElementBold.style.marginLeft = "500px";
extraElementBold.style.fontSize = "20px";
extraElementBold.style.color = "gold";

let decorationOption1 = document.createElement("option");
decorationOption1.value = "yes";
decorationOption1.textContent = "YES";

let decorationOption2 = document.createElement("option");
decorationOption2.value = "no";
decorationOption2.textContent = "NO";

let flowerDecorationSelection = document.createElement("select");
flowerDecorationSelection.setAttribute("id", "decorationSelection");
flowerDecorationSelection.style.marginLeft = "30px";
flowerDecorationSelection.append(decorationOption1);
flowerDecorationSelection.append(decorationOption2);

let btnCostCalcuation = document.createElement("button");
btnCostCalcuation.setAttribute("id", "calculateCost");
btnCostCalcuation.textContent = "Calculate the charge";
btnCostCalcuation.style.marginLeft = "600px";
btnCostCalcuation.style.fontSize = "15px";

divElement.append(heading);
divElement.append(NameBold);
divElement.append(Name);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(PhoneNumberBold);
divElement.append(PhoneNumber);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(AddressBold);
divElement.append(Address);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(selectionBold);
divElement.append(weddingSelectionElement);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(extraElementBold);
divElement.append(flowerDecorationSelection);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(btnCostCalcuation);
document.body.append(divElement);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.style.backgroundColor = "darkgrey";
document.body.style.backgroundImage = "url('./images/img-3.jpg')";

let finalDiv = document.createElement("div");
finalDiv.style.border = "thick solid lightblue";
finalDiv.style.backgroundColor = "lightgrey";
finalDiv.style.padding = "0.5%";
finalDiv.style.display = "none";
let resultDiv = document.createElement("div");
resultDiv.id = "resultdiv";

let nameTag = document.createElement("b");
nameTag.textContent = "Name : ";
nameTag.style.marginLeft = "500px";
let nameValue = document.createElement("b");
nameValue.style.color = "red";

let phoneTag = document.createElement("b");
phoneTag.textContent = "PhoneNumber : ";
phoneTag.style.marginLeft = "500px";
let phoneValue = document.createElement("b");
phoneValue.style.color = "red";

let addressTag = document.createElement("b");
addressTag.textContent = "Address : ";
addressTag.style.marginLeft = "500px";
let addressValue = document.createElement("b");
addressValue.style.color = "red";
let weddingCostToDisplay = document.createElement("b");
weddingCostToDisplay.style.marginLeft = "500px";
weddingCostToDisplay.style.color = "red";

let weddingTypeSelected;
let simpleWeddingCost;
let grandWeddingCost;
let flowerDecorationRequiredStatus;
let extraFlowerDecorationCost;

const calculateCostBasedOnWeddingType = function () {
  weddingTypeSelected =
    weddingSelectionElement.options[weddingSelectionElement.selectedIndex].text;
  //   let weddingTypeSelected =
  //     weddingSelectionElement[weddingSelectionElement.selectedIndex].textContent;
  weddingTypeSelected === "Simple"
    ? (simpleWeddingCost = 50000)
    : weddingTypeSelected === "Grand"
    ? (grandWeddingCost = 150000)
    : "Invalid selection";
};

weddingSelectionElement.addEventListener(
  "change",
  calculateCostBasedOnWeddingType
);

const floweDecoartionCost = function () {
  const flowerDecoraionSelectd =
    flowerDecorationSelection.options[flowerDecorationSelection.selectedIndex]
      .text;
  flowerDecoraionSelectd === "YES"
    ? (flowerDecorationRequiredStatus = true)
    : (flowerDecorationRequiredStatus = false);
  flowerDecorationRequiredStatus == true
    ? (extraFlowerDecorationCost = 2000)
    : (extraFlowerDecorationCost = 0);
};

flowerDecorationSelection.addEventListener("change", floweDecoartionCost);

let finalWeddingCost;
btnCostCalcuation.addEventListener("click", function () {
  if (
    weddingTypeSelected === "Simple" &&
    flowerDecorationRequiredStatus === true
  ) {
    finalWeddingCost = simpleWeddingCost + extraFlowerDecorationCost;
  }
  if (
    weddingTypeSelected === "Simple" &&
    flowerDecorationRequiredStatus === false
  ) {
    finalWeddingCost = simpleWeddingCost;
  }
  if (
    weddingTypeSelected === "Grand" &&
    flowerDecorationRequiredStatus === true
  ) {
    finalWeddingCost = grandWeddingCost + extraFlowerDecorationCost;
  }
  if (
    weddingTypeSelected === "Grand" &&
    flowerDecorationRequiredStatus === false
  ) {
    finalWeddingCost = grandWeddingCost;
  }
  nameValue.textContent = Name.value;
  phoneValue.textContent = PhoneNumber.value;
  addressValue.textContent = Address.value;
  weddingCostToDisplay.textContent = `Your estimated wedding cost is ${finalWeddingCost}`;
  resultDiv.append(nameTag);
  resultDiv.append(nameValue);
  resultDiv.append(document.createElement("br"));
  resultDiv.append(phoneTag);
  resultDiv.append(phoneValue);
  resultDiv.append(document.createElement("br"));
  resultDiv.append(addressTag);
  resultDiv.append(addressValue);
  resultDiv.append(document.createElement("br"));
  resultDiv.append(weddingCostToDisplay);
  finalDiv.append(resultDiv);
  finalDiv.style.display = "block";
  document.body.append(finalDiv);
  btnCostCalcuation.disabled = true;
});
