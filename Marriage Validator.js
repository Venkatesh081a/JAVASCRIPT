const heading = document.createElement("h1");
heading.textContent = "Marriage Validator";
heading.style.textAlign = "center";
heading.style.marginTop = "100px";
heading.style.fontSize = "40px";

const label1 = document.createElement("label");
label1.textContent = "Bride's Age :";
label1.style.marginLeft = "500px";
label1.style.fontSize = "20px";

const brideInput = document.createElement("input");
brideInput.placeholder = "Enter Age";
brideInput.id = "bride-age";
brideInput.style.marginLeft = "20px";

const label2 = document.createElement("label");
label2.textContent = "Groom's Age :";
label2.style.marginLeft = "500px";
label2.style.fontSize = "20px";

const groomInput = document.createElement("input");
groomInput.placeholder = "Enter Age";
groomInput.id = "groom-age";
groomInput.style.marginLeft = "10px";

const btnValidate = document.createElement("button");
btnValidate.textContent = "Validate";
btnValidate.style.marginLeft = "610px";

document.body.append(heading);
document.body.append(label1);
document.body.append(brideInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(label2);
document.body.append(groomInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(btnValidate);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const divElement = document.createElement("div");
divElement.id = "result";

const output = document.createElement("b");
output.id = "output";
output.style.marginLeft = "600px";
output.style.fontSize = "23px";

divElement.append(output);
document.body.append(divElement);

const validateAge = function () {
  const brideValue = brideInput.value;
  const groomValue = groomInput.value;
  brideValue >= 18 && groomValue >= 21
    ? (output.innerText = "Valid Marriage")
    : (output.innerText = "Invalid Marriage");
};

btnValidate.addEventListener("click", validateAge);
