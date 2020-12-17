const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const $infoLaunch = document.getElementById('date-launch');
const $dateInfo = document.querySelectorAll('#date-info');

// Get Current Date
let currentDate = new Date();
let currentYear =  currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay =   currentDate.getDate();

// Get Launch Date 
const launchDate = new Date(currentYear, currentMonth, currentDay + 10, 09, 30, 0);

let year = launchDate.getFullYear();
let month = launchDate.getMonth();
let hours = launchDate.getHours();
let minutes = launchDate.getMinutes();


// Create date info launch

month = months[month];
const weekday = weekdays[launchDate.getDay()];
const date = launchDate.getDate();
$infoLaunch.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const launchTime = launchDate.getTime();

function getRemaindingTime() {
  const today = new Date().getTime();
  const diffTime = launchTime - today;
  console.log(diffTime);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  // calculate all values
  let days = diffTime / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((diffTime % oneDay) / oneHour);
  let minutes = Math.floor((diffTime % oneHour) / oneMinute);
  let seconds = Math.floor((diffTime % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  $dateInfo.forEach(function (item, index) {
      console.log(item)
    item.innerHTML = format(values[index]);
  });

  if (diffTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();


