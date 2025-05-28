let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(timer, 1000);
function timer() {
  targetDate = new Date("June 4, 2025 18:00:00").getTime();
  currentDate = new Date().getTime();
  distance = targetDate - currentDate;
  day = Math.floor(distance / 1000 / 60 / 60 / 24);
  hour = Math.floor(distance / 1000 / 60 / 60) % 24;
  minute = Math.floor(distance / 1000 / 60) % 60;
  second = Math.floor(distance / 1000) % 60;

  days.innerHTML = day < 10 ? "0" + day : day;
  hours.innerHTML = hour < 10 ? "0" + hour : hour;
  minutes.innerHTML = minute < 10 ? "0" + minute : minute;
  seconds.innerHTML = second < 10 ? "0" + second : second;
}
