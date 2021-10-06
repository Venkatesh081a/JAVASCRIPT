const heading = document.createElement("h1");
heading.innerText = "Product Details";
heading.style.textAlign = "center";
heading.style.marginTop = "100px";
document.body.append(heading);
document.body.append(document.createElement("br"));

const headingName = document.createElement("b");
headingName.innerText = "Name :";
headingName.style.marginLeft = "500px";
headingName.style.fontSize = "20px";
document.body.append(headingName);

const nameInput = document.createElement("input");
nameInput.id = "name";
nameInput.style.marginLeft = "130px";
document.body.append(nameInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const headingPrice = document.createElement("b");
headingPrice.innerText = "Price :";
headingPrice.style.marginLeft = "500px";
headingPrice.style.fontSize = "20px";
document.body.append(headingPrice);

const priceInput = document.createElement("input");
priceInput.id = "price";
priceInput.style.marginLeft = "135px";
document.body.append(priceInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const headingQuantity = document.createElement("b");
headingQuantity.innerText = "Available quantity :";
headingQuantity.style.marginLeft = "500px";
headingQuantity.style.fontSize = "20px";
document.body.append(headingQuantity);

const quantityInput = document.createElement("input");
quantityInput.id = "quantity";
quantityInput.style.marginLeft = "25px";
document.body.append(quantityInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const btn = document.createElement("button");
btn.innerText = "Convert To Json";
btn.style.fontSize = "16px";
btn.style.marginLeft = "600px";
document.body.append(btn);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

btn.addEventListener("click", function () {
  const name = nameInput.value;
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const details = {
    Name: name,
    Price: price,
    "Available quantity": quantity,
  };
  document.body.append(
    `{"Name" : ${details.Name} , "Price" : ${details.Price} , "Available quantity" : ${details["Available quantity"]}}`
  );
});
