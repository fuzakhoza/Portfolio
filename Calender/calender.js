const displayMonth = document.querySelector(".month");
const displayDate = document.querySelector(".date");
const displayYear = document.querySelector(".year");
const displayDay = document.querySelector(".day");
const displayHours = document.querySelector(".hours");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds = document.querySelector(".seconds");

let [hours, minutes, seconds, month, date, day, year] = [0, 0, 0];

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "Januay",
  "Febuay",
  "March",
  "April",
  "Mey",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function updateDate() {
  const nowDate = new Date();

  day = days[nowDate.getDay()];
  date = nowDate.getDate();
  year = nowDate.getFullYear();
  month = months[nowDate.getMonth()];

  hours = nowDate.getHours();
  minutes = nowDate.getMinutes();
  seconds = nowDate.getSeconds();

  displayHours.innerHTML = (hours < 10 ? "0" : "") + hours;
  displayMinutes.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  displaySeconds.innerHTML = (seconds < 10 ? "0" : "") + seconds;

  displayMonth.innerHTML = "Month: " + month;
  displayDate.innerHTML = (date < 10 ? "0" : "") + date;
  displayDay.innerHTML = "Day: " + day;
  displayYear.innerHTML = "Year: " + year;
}
setInterval(() => {
  updateDate();
}, 1000);
