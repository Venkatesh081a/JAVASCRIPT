const heading = document.createElement("h2");
heading.textContent = "Events Cost Calculation";
heading.id = "h2";
heading.style.textAlign = "center";
heading.style.fontSize = "40px";
heading.style.marginTop = "100px";
heading.style.color = "green";

const optionsGroup = document.createElement("optgroup");
optionsGroup.id = "options-container";

const corporateEvent = document.createElement("option");
corporateEvent.textContent = "Corporate Event";
corporateEvent.id = "corporate-event";
optionsGroup.append(corporateEvent);

const weddingEvent = document.createElement("option");
weddingEvent.textContent = "Wedding Event";
weddingEvent.id = "wedding-event";
optionsGroup.append(weddingEvent);

const socialEvent = document.createElement("option");
socialEvent.textContent = "Social Event";
socialEvent.id = "social-event";
optionsGroup.append(socialEvent);

const collegeEvent = document.createElement("option");
collegeEvent.textContent = "College Event";
collegeEvent.id = "college-event";
optionsGroup.append(collegeEvent);

const selectionEvents = document.createElement("select");
selectionEvents.name = "selectionEvents";
selectionEvents.id = "select";
selectionEvents.style.marginLeft = "600px";
selectionEvents.style.fontSize = "18px";
selectionEvents.append(optionsGroup);

const numberOfDays = document.createElement("label");
numberOfDays.textContent = "Number of days :";
numberOfDays.style.marginLeft = "480px";
numberOfDays.style.fontSize = "20px";

const inputNumberOfDays = document.createElement("input");
inputNumberOfDays.placeholder = "Enter Number of Days";
inputNumberOfDays.id = "numberofdays";
inputNumberOfDays.style.marginLeft = "20px";

const btnCalculate = document.createElement("button");
btnCalculate.textContent = "Calculate";
btnCalculate.style.marginLeft = "600px";

let outputContent = document.createElement("b");
outputContent.style.marginLeft = "550px";
outputContent.style.fontSize = "20px";

document.body.append(heading);
document.body.append(document.createElement("br"));
document.body.append(selectionEvents);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(numberOfDays);
document.body.append(inputNumberOfDays);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(btnCalculate);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(outputContent);
document.body.style.backgroundColor = "lightgrey";

const corporateEventCostPerDay = 40000;
const weddingEventCostPerDay = 10000;
const socialEventCostPerDay = 5000;
const collegeEventCostPerDay = 4000;
let finalCost;

const displayTotalCost = function (totalCost) {
  return `Total cost is $ ${totalCost}`;
};

const calculateEventCost = function () {
  const eventSelected =
    selectionEvents.options[selectionEvents.selectedIndex].text;
  const numberOfDaysRequired = inputNumberOfDays.value;

  switch (eventSelected) {
    case "Corporate Event":
      finalCost = corporateEventCostPerDay * numberOfDaysRequired;
      outputContent.textContent = displayTotalCost(finalCost);
      break;
    case "Wedding Event":
      finalCost = weddingEventCostPerDay * numberOfDaysRequired;
      outputContent.textContent = displayTotalCost(finalCost);
      break;
    case "Social Event":
      finalCost = socialEventCostPerDay * numberOfDaysRequired;
      outputContent.textContent = displayTotalCost(finalCost);
      break;
    case "College Event":
      finalCost = collegeEventCostPerDay * numberOfDaysRequired;
      outputContent.textContent = displayTotalCost(finalCost);
      break;
  }
};

btnCalculate.addEventListener("click", calculateEventCost);
