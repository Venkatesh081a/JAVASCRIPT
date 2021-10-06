const heading = document.createElement("h1");
heading.innerText = "Event Selection";
heading.style.textAlign = "center";
document.body.append(heading);
document.body.append(document.createElement("br"));

const selectEventHeading = document.createElement("label");
selectEventHeading.innerText = "Select an Event :";
selectEventHeading.style.marginLeft = "500px";
selectEventHeading.style.fontSize = "18px";
document.body.append(selectEventHeading);

const optionsGroup = document.createElement("optgroup");

const option1 = document.createElement("option");
option1.innerText = "--Select--";
optionsGroup.append(option1);

const optionCorporateEvents = document.createElement("option");
optionCorporateEvents.innerText = "Corporate Events";
optionsGroup.append(optionCorporateEvents);

const optionWeddingEvent = document.createElement("option");
optionWeddingEvent.innerText = "Wedding";
optionsGroup.append(optionWeddingEvent);

const selectionsInput = document.createElement("select");
selectionsInput.append(optionsGroup);
selectionsInput.style.marginLeft = "20px";
selectionsInput.style.fontSize = "18px";
document.body.append(selectionsInput);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const divElement = document.createElement("div");
divElement.setAttribute("id", "registration-form");

const formHeading = document.createElement("h2");
formHeading.style.marginLeft = "600px";
divElement.append(formHeading);
divElement.append(document.createElement("br"));

const daysHeading = document.createElement("b");
daysHeading.innerText = "No of days";
daysHeading.style.marginLeft = "500px";
daysHeading.style.fontSize = "18px";
divElement.append(daysHeading);

const NumberOfDaysInput = document.createElement("input");
NumberOfDaysInput.setAttribute("required", "");
NumberOfDaysInput.id = "noOfDays";
NumberOfDaysInput.style.marginLeft = "65px";
NumberOfDaysInput.style.width = "132px";
divElement.append(NumberOfDaysInput);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));

const startDateHeading = document.createElement("b");
startDateHeading.innerText = "Start Date";
startDateHeading.style.marginLeft = "500px";
startDateHeading.style.fontSize = "18px";
divElement.append(startDateHeading);

const startDateInput = document.createElement("input");
startDateInput.required = true;
startDateInput.type = "date";
startDateInput.style.marginLeft = "65px";
divElement.append(startDateInput);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));

const organizerHeading = document.createElement("b");
organizerHeading.innerText = "Organizer Name";
organizerHeading.style.marginLeft = "500px";
organizerHeading.style.fontSize = "18px";
divElement.append(organizerHeading);

const organizerNameInput = document.createElement("input");
organizerNameInput.id = "organizerName";
organizerNameInput.style.marginLeft = "18px";
organizerNameInput.style.width = "133px";
divElement.append(organizerNameInput);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));

const MobileNumberHeading = document.createElement("b");
MobileNumberHeading.innerText = "Mobile Number";
MobileNumberHeading.style.marginLeft = "500px";
MobileNumberHeading.style.fontSize = "18px";
divElement.append(MobileNumberHeading);

const MobileNumberInput = document.createElement("input");
MobileNumberInput.id = "mobileNumber";
MobileNumberInput.style.marginLeft = "25px";
MobileNumberInput.style.width = "133px";
divElement.append(MobileNumberInput);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));

const btnAdd = document.createElement("button");
btnAdd.textContent = "Add";
btnAdd.setAttribute("id", "addEvents");
btnAdd.style.marginLeft = "600px";
btnAdd.style.fontSize = "15px";
divElement.append(btnAdd);

const btnDisplay = document.createElement("button");
btnDisplay.textContent = "Display";
btnDisplay.setAttribute("id", "displayEvents");
btnDisplay.style.marginLeft = "20px";
btnDisplay.style.fontSize = "15px";
divElement.append(btnDisplay);
divElement.append(document.createElement("br"));
divElement.append(document.createElement("br"));

const successMessageDiv = document.createElement("div");

const Message = document.createElement("b");
Message.setAttribute("id", "successMessage");
Message.style.marginLeft = "550px";
Message.style.fontSize = "20px";
Message.style.color = "green";

const resultDiv = document.createElement("div");
resultDiv.setAttribute("id", "resultEventDetails");
resultDiv.style.margin = "auto";

const table = document.createElement("table");
table.id = "eventTable";
table.style.border = "3px solid blue";
table.style.marginLeft = "500px";

const tableHeadingRow = document.createElement("tr");

const tableHeadingEventName = document.createElement("th");
tableHeadingEventName.innerText = "Event Name";
tableHeadingEventName.style.border = "1px solid black";
tableHeadingRow.append(tableHeadingEventName);

const tableHeadingStartDate = document.createElement("th");
tableHeadingStartDate.innerText = "Start Date";
tableHeadingStartDate.style.border = "1px solid black";
tableHeadingRow.append(tableHeadingStartDate);

const tableHeadingEndDate = document.createElement("th");
tableHeadingEndDate.innerText = "End Date";
tableHeadingEndDate.style.border = "1px solid black";
tableHeadingRow.append(tableHeadingEndDate);

const tableHeadingOrganizerName = document.createElement("th");
tableHeadingOrganizerName.innerText = "Organizer Name";
tableHeadingOrganizerName.style.border = "1px solid black";
tableHeadingRow.append(tableHeadingOrganizerName);

const tableHeadingMobileNumber = document.createElement("th");
tableHeadingMobileNumber.innerText = "Mobile Number";
tableHeadingMobileNumber.style.border = "1px solid black";
tableHeadingRow.appendChild(tableHeadingMobileNumber);

table.append(tableHeadingRow);

let startDate;
let newEndDate;
function displayRegistrationDetailsForm() {
  formHeading.innerText =
    selectionsInput.options[selectionsInput.selectedIndex].text;
  document.body.append(divElement);

  btnAdd.addEventListener("click", () => {
    startDate = new Date(startDateInput.value);
    startDate = `${
      startDate.getMonth() + 1
    }/${startDate.getDate()}/${startDate.getFullYear()}`;
    let endDate = new Date(startDateInput.value);
    endDateMonth = endDate.getMonth();
    endDateDay = endDate.getDate() + +NumberOfDaysInput.value;
    endDateYear = endDate.getFullYear();
    newEndDate = new Date(endDateYear, endDateMonth, endDateDay);
    newEndDate = `${
      newEndDate.getMonth() + 1
    }/${newEndDate.getDate()}/${newEndDate.getFullYear()}`;

    Message.innerText = "Event Added Successfully";
    successMessageDiv.append(Message);
    divElement.append(successMessageDiv);
  });
}

btnDisplay.addEventListener("click", () => {
  const tableDataRow = document.createElement("tr");

  const tableDataEventName = document.createElement("td");
  tableDataEventName.innerText =
    selectionsInput.options[selectionsInput.selectedIndex].text;
  tableDataEventName.style.border = "1px solid black";
  tableDataRow.append(tableDataEventName);

  const tableDataStartDate = document.createElement("td");
  tableDataStartDate.innerText = startDate;
  tableDataStartDate.style.border = "1px solid black";
  tableDataRow.append(tableDataStartDate);

  const tableDataEndDate = document.createElement("td");
  tableDataEndDate.innerText = newEndDate;
  tableDataEndDate.style.border = "1px solid black";
  tableDataRow.append(tableDataEndDate);

  const tableDataOrganizerName = document.createElement("td");
  tableDataOrganizerName.innerText = organizerNameInput.value;
  tableDataOrganizerName.style.border = "1px solid black";
  tableDataRow.append(tableDataOrganizerName);

  const tableDataMobileNumber = document.createElement("td");
  tableDataMobileNumber.innerText = MobileNumberInput.value;
  tableDataMobileNumber.style.border = "1px solid black";
  tableDataRow.append(tableDataMobileNumber);

  table.append(tableDataRow);
  resultDiv.append(table);
  divElement.append(resultDiv);
});

selectionsInput.addEventListener("change", displayRegistrationDetailsForm);

document.body.style.backgroundColor = "lightgrey";
