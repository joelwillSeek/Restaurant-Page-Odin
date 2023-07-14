/**
 *
 * @returns {{tableReservation:HTMLDivElement,openingHours:HTMLDivElement}}
 */

let createSchedulesView = () => {
  //table reservation box
  let tableReservation = document.createElement("div");
  tableReservation.classList.add("tablereserve");

  let tableReservationTitle = document.createElement("h1");
  tableReservationTitle.classList.add("tableReservation");
  tableReservationTitle.textContent = "TABLE RESERVATION...";

  let phoneNumber = document.createElement("p");
  phoneNumber.textContent = "(008) 01869018907";

  let contantEmail = document.createElement("p");
  contantEmail.textContent = "eyoelseleshizeyohannes@gmail.com";

  let contactAddress = document.createElement("p");
  contactAddress.textContent = "08744,Sadar pur 8973";

  tableReservation.append(
    tableReservationTitle,
    phoneNumber,
    contantEmail,
    contactAddress
  );

  //open hours box
  let openingHours = document.createElement("div");
  openingHours.classList.add("openinghours");

  let openingHoursTilte = document.createElement("h1");
  openingHoursTilte.textContent = "OPENING HOURS...";

  let weekSchedule = document.createElement("ul");

  let listOfDaysInWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let listOfTimeAvailable = [
    "9:00 - 18:00",
    "10:00 - 18:00",
    "11:00 - 18:00",
    "12:00 - 18:00",
    "14:00 - 18:00",
    "16:00 - 18:00",
    "CLOSED",
  ];

  for (let i = 0; i < 7; i++) {
    let day = document.createElement("li");
    day.textContent = `${listOfDaysInWeek[i]} ${listOfTimeAvailable[i]}`;
    weekSchedule.appendChild(day);
  }

  openingHours.append(openingHoursTilte, weekSchedule);

  let containerOfOpeningAndReserv = document.createElement("div");
  containerOfOpeningAndReserv.classList.add("containeropenandreserv");
  containerOfOpeningAndReserv.append(openingHours, tableReservation);
  return containerOfOpeningAndReserv;
};

export default createSchedulesView;
