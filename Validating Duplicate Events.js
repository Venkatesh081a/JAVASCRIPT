const heading = document.createElement("h2");
heading.innerText = "Validating Duplicate Events";
heading.style.textAlign = "center";
heading.style.fontSize = "30px";
heading.style.marginTop = "100px";

document.body.append(heading);
document.body.append(document.createElement("br"));

const heading1 = document.createElement("b");
heading1.innerText = "Enter Event Name ";
heading1.style.marginLeft = "460px";
heading1.style.fontSize = "18px";
document.body.append(heading1);

const eventName = document.createElement("input");
eventName.id = "eventName";
eventName.style.marginLeft = "20px";
document.body.append(eventName);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const addEvent = document.createElement("button");
addEvent.id = "add";
addEvent.innerText = "Add Event";
addEvent.style.marginLeft = "550px";
addEvent.style.fontSize = "15px";
document.body.append(document.createElement("br"));
document.body.append(addEvent);

const displayEvent = document.createElement("button");
displayEvent.id = "display";
displayEvent.innerText = "Display Event";
displayEvent.style.fontSize = "15px";
displayEvent.style.marginLeft = "20px";
document.body.append(displayEvent);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const Message = document.createElement("b");
Message.style.marginLeft = "500px";
Message.style.fontSize = "20px";

const table = document.createElement("table");
table.id = "eventdetailscontainer";
table.style.marginLeft = "100px";
table.style.fontSize = "20px";
table.style.border = "1px solid black";
table.style.width = "170px";

const tablerow = document.createElement("tr");

const tableheading = document.createElement("th");
tableheading.innerText = "Event Name";
tableheading.style.border = "1px solid black";

tablerow.append(tableheading);
table.append(tablerow);

const detail = [];

addEvent.addEventListener("click", () => {
  const eventValue = eventName.value;
  if (detail.includes(eventValue)) {
    Message.innerText = "Event name already exists. Try with some other name";
    Message.style.color = "red";
    document.body.append(Message);
  } else {
    detail.push(eventValue);
    Message.innerText = "Event name added successfully!";
    Message.style.color = "green";
    document.body.append(Message);
    const tablerow1 = document.createElement("tr");
    const tabledata = document.createElement("td");
    tabledata.innerText = eventValue;
    tabledata.style.border = "1px solid black";
    tablerow1.append(tabledata);
    table.appendChild(tablerow1);
  }
});

const divElement = document.createElement("div");
divElement.id = "result";
divElement.style.border = "5px solid blue";
divElement.style.width = "400px";
divElement.style.margin = "auto";
divElement.style.height = "200px";

const title = document.createElement("h3");
title.innerText = "Event Details";
title.style.marginLeft = "100px";
divElement.append(title);

displayEvent.addEventListener("click", () => {
  divElement.append(table);
  document.body.append(divElement);
});
