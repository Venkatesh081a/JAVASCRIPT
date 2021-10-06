const heading = document.createElement("h2");
heading.textContent = "Event Billing";
heading.style.textAlign = "center";
heading.style.marginTop = "50px";
heading.style.fontSize = "30px";

const id = document.createElement("b");
id.textContent = "ID :";
id.style.marginLeft = "500px";
id.style.fontSize = "20px";

const eventId = document.createElement("input");
eventId.id = "eventid";
eventId.style.marginLeft = "20px";
eventId.type = "text";

const Name = document.createElement("b");
Name.textContent = "Event Name :";
Name.style.marginLeft = "500px";
Name.style.fontSize = "20px";

const eventName = document.createElement("input");
eventName.id = "eventname";
eventName.style.marginLeft = "20px";

const price = document.createElement("b");
price.textContent = "Price :";
price.style.marginLeft = "500px";
price.style.fontSize = "20px";

const eventPrice = document.createElement("input");
eventPrice.id = "eventprice";
eventPrice.style.marginLeft = "20px";

const btnAddToCart = document.createElement("button");
btnAddToCart.textContent = "Add To Cart";
btnAddToCart.style.marginLeft = "600px";
btnAddToCart.style.fontSize = "15px";

document.body.append(heading);
document.body.append(id);
document.body.append(eventId);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(Name);
document.body.append(eventName);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(price);
document.body.append(eventPrice);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(btnAddToCart);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const divResult = document.createElement("div");
divResult.id = "resultdiv";

const table = document.createElement("table");
table.setAttribute("id", "cartitemstable");
table.style.border = "1px solid black";

const tablerow = document.createElement("tr");
tablerow.id = "itemsDescription";

const tableheading1 = document.createElement("th");
tableheading1.id = "id1";
tableheading1.textContent = "ID";
tableheading1.style.padding = "10px";
tableheading1.style.border = "1px solid black";

const tableheading2 = document.createElement("th");
tableheading2.id = "id2";
tableheading2.textContent = "Product Name";
tableheading2.style.padding = "10px";
tableheading2.style.border = "1px solid black";

const tableheading3 = document.createElement("th");
tableheading3.id = "id3";
tableheading3.textContent = "Price";
tableheading3.style.padding = "10px";
tableheading3.style.border = "1px solid black";

const tableheading4 = document.createElement("th");
tableheading4.id = "id4";
tableheading4.textContent = "Quantity";
tableheading4.style.padding = "10px";
tableheading4.style.border = "1px solid black";

const tableheading5 = document.createElement("th");
tableheading5.id = "id4";
tableheading5.textContent = "Remove From Cart";
tableheading5.style.padding = "10px";
tableheading5.style.border = "1px solid black";

tablerow.append(tableheading1);
tablerow.append(tableheading2);
tablerow.append(tableheading3);
tablerow.append(tableheading4);
tablerow.append(tableheading5);
table.append(tablerow);

divResult.append(table);
divResult.style.marginLeft = "400px";

let eventDetails = [];

let selectedId;
let selectedEventName;
let selectedEventPrice;
let quantity;
const calculateTotalCost = function () {
  selectedId = eventId.value;
  selectedEventName = eventName.value;
  selectedEventPrice = eventPrice.value;

  const tablerow1 = document.createElement("tr");
  tablerow1.id = "itemdata";

  const tabledata1 = document.createElement("td");
  tabledata1.innerText = selectedId;
  tabledata1.style.border = "1px solid black";
  tablerow1.append(tabledata1);

  const tabledata2 = document.createElement("td");
  tabledata2.innerText = selectedEventName;
  tabledata2.style.border = "1px solid black";
  tablerow1.append(tabledata2);

  const tabledata3 = document.createElement("td");
  tabledata3.innerText = selectedEventPrice;
  tabledata3.id = "pricedata";
  tabledata3.style.border = "1px solid black";
  tablerow1.append(tabledata3);

  const tabledata4 = document.createElement("td");
  const selectQuantity = document.createElement("input");
  selectQuantity.type = "number";
  selectQuantity.value = 1;
  selectQuantity.textContent = 1;
  tabledata4.append(selectQuantity);
  tabledata4.id = "itemQuantity";
  tablerow1.append(tabledata4);

  const tabledata5 = document.createElement("td");
  const removeFromCart = document.createElement("a");
  const link = document.createTextNode("Remove");
  removeFromCart.append(link);
  removeFromCart.title = "remove";
  removeFromCart.href = "remove";
  tabledata5.append(removeFromCart);
  tablerow1.appendChild(tabledata5);

  table.append(tablerow1);
  document.body.append(divResult);

  quantity = selectQuantity.value;

  insertEventDetails();

  let prices = 0;
  document.querySelectorAll("#itemQuantity").forEach(function (item) {
    item.addEventListener("change", function (event) {
      let updatedQuantity = event.target.value;
      eventDetails.forEach(function (j) {
        j.Quantity = +updatedQuantity;
        event.target.textContent = j.Quantity;
        prices += event.target.textContent * j.Price;
      });
      console.log(prices);
      console.log(eventDetails);
    });
  });
};

const insertEventDetails = function () {
  const eventDetailsObject = {
    ID: selectedId,
    ProductName: selectedEventName,
    Price: selectedEventPrice,
    Quantity: +quantity,
  };
  eventDetails.push(eventDetailsObject);
  console.log(eventDetails);
};
btnAddToCart.addEventListener("click", calculateTotalCost);
