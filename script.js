const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secondEl = document.getElementById("seconds");

const newYears = "1 Jan 2026";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const seconds = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const mins = Math.floor(seconds / 60) % 60;
  const second = Math.floor(seconds) % 60;

  dayEl.innerHTML=days;
  hourEl.innerHTML=formatTime(hours);
  minEl.innerHTML=formatTime(mins);
  secondEl.innerHTML=formatTime(second);
}


function formatTime(time){
  return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
