"use strict";

const heading = document.createElement("h2");
heading.innerText = "Event Schedule";
heading.style.textAlign = "center";
heading.style.marginTop = "50px";
document.body.append(heading);

const floatingParentDiv = document.createElement("div");
floatingParentDiv.className = "float-container";

const floatingChildDiv = document.createElement("div");
floatingChildDiv.id = "inputelementscontainer";
floatingChildDiv.className = "float-child";
floatingChildDiv.style.height = "350px";
floatingChildDiv.style.width = "350px";
floatingChildDiv.style.marginLeft = "100px";
floatingChildDiv.style.border = "4px solid black";
floatingChildDiv.style.float = "left";
// floatingChildDiv.style.width = "30%";

const headingEventName = document.createElement("b");
headingEventName.innerText = "EventName";
headingEventName.style.marginLeft = "20px";
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(headingEventName);

const EventName = document.createElement("input");
EventName.setAttribute("id", "eventname");
EventName.style.marginLeft = "63px";
EventName.style.width = "125px";
EventName.required = true;
floatingChildDiv.append(EventName);

const headingDate = document.createElement("b");
headingDate.innerText = "Date(dd-mm-yyyy)";
headingDate.style.marginLeft = "20px";
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(headingDate);

const DateInput = document.createElement("input");
DateInput.type = "date";
DateInput.style.marginLeft = "18px";
DateInput.style.width = "125px";
floatingChildDiv.append(DateInput);

const headingVenue = document.createElement("b");
headingVenue.innerText = "Venue";
headingVenue.style.marginLeft = "20px";
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(headingVenue);

const Venue = document.createElement("input");
Venue.id = "venue";
Venue.style.marginLeft = "103px";
Venue.style.width = "125px";
floatingChildDiv.append(Venue);

const headingOrganizer = document.createElement("b");
headingOrganizer.innerText = "Organizer";
headingOrganizer.style.marginLeft = "20px";
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(headingOrganizer);

const Organizer = document.createElement("input");
Organizer.id = "organizer";
Organizer.style.width = "125px";
Organizer.style.marginLeft = "75px";
floatingChildDiv.append(Organizer);

const btnAdd = document.createElement("button");
btnAdd.innerText = "Add";
btnAdd.style.marginLeft = "180px";
btnAdd.style.fontSize = "15px";
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(document.createElement("br"));
floatingChildDiv.append(btnAdd);

const btnDisplay = document.createElement("button");
btnDisplay.innerText = "Display";
btnDisplay.style.marginLeft = "30px";
btnDisplay.style.fontSize = "15px";
floatingChildDiv.append(btnDisplay);

floatingParentDiv.append(floatingChildDiv);
document.body.append(floatingParentDiv);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));

const floatingChildDiv1 = document.createElement("div");
floatingChildDiv1.id = "displayEvents";
floatingChildDiv1.style.float = "left";
floatingChildDiv1.style.marginLeft = "30px";
floatingChildDiv1.style.border = "5px solid blue";

const table = document.createElement("table");
table.id = "displayResults";

const tablerow = document.createElement("tr");

const tableHeading1 = document.createElement("th");
tableHeading1.innerText = "EventName";
tablerow.append(tableHeading1);
tableHeading1.style.border = "1px solid black";

const tableHeading2 = document.createElement("th");
tableHeading2.innerText = "Date";
tablerow.append(tableHeading2);
tableHeading2.style.border = "1px solid black";

const tableHeading3 = document.createElement("th");
tableHeading3.innerText = "Venue";
tablerow.append(tableHeading3);
tableHeading3.style.border = "1px solid black";

const tableHeading4 = document.createElement("th");
tableHeading4.innerText = "Organizer";
tablerow.append(tableHeading4);
tableHeading4.style.border = "1px solid black";

table.append(tablerow);
floatingChildDiv1.append(table);

const floatChildDiv3 = document.createElement("div");
floatChildDiv3.style.width = "100%";
floatChildDiv3.id = "successmessage";
floatChildDiv3.style.float = "left";
floatChildDiv3.style.clear = "left";
floatChildDiv3.style.marginLeft = "30px";

const successMessage = document.createElement("b");
successMessage.id = "successMessage";
successMessage.style.color = "green";
successMessage.style.fontSize = "20px";
successMessage.style.marginLeft = "100px";
floatChildDiv3.append(successMessage);

class Events {
  constructor(event, date, venue, organizer) {
    this.event = event;
    this.date = date;
    this.venue = venue;
    this.organizer = organizer;
  }
}

let details = [];
const insertEventDetails = function () {
  const eventsDetails = new Events(
    EventName.value,
    DateInput.value,
    Venue.value,
    Organizer.value
  );
  details.push(eventsDetails);
  successMessage.innerText = "Event added successfully";
  floatingParentDiv.append(floatChildDiv3);

  const tablerow1 = document.createElement("tr");

  const tabledata1 = document.createElement("td");
  tabledata1.innerText = EventName.value;
  tabledata1.style.border = "1px solid black";
  tablerow1.append(tabledata1);

  const tabledata2 = document.createElement("td");
  tabledata2.innerText = DateInput.value;
  tabledata2.style.border = "1px solid black";
  tablerow1.append(tabledata2);

  const tabledata3 = document.createElement("td");
  tabledata3.innerText = Venue.value;
  tabledata3.style.border = "1px solid black";
  tablerow1.append(tabledata3);

  const tabledata4 = document.createElement("td");
  tabledata4.innerText = Organizer.value;
  tabledata4.style.border = "1px solid black";
  tablerow1.append(tabledata4);

  table.append(tablerow1);
};

btnAdd.addEventListener("click", insertEventDetails);

btnDisplay.addEventListener("click", function () {
  // floatingParentDiv.append(floatingChildDiv1);
  document.body.append(floatingChildDiv1);
});

const floatingChildDiv2 = document.createElement("div");

const searchInput = document.createElement("input");
searchInput.style.marginLeft = "100px";
searchInput.style.width = "20%";
searchInput.placeholder = "Enter the event name to be searched";

floatingChildDiv2.append(searchInput);
document.body.append(floatingChildDiv2);
