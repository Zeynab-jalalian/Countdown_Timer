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
  hourEl.innerHTML=hours;
  minEl.innerHTML=mins;
  secondEl.innerHTML=second;
}

//initial call
countdown();

setInterval(countdown, 1000);
