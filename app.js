const btnDaily = document.querySelector(".btn--daily");
const btnWeekly = document.querySelector(".btn--weekly");
const btnMonthly = document.querySelector(".btn--monthly");
const timeDaily = document.querySelectorAll(".time.daily");
const timeWeekly = document.querySelectorAll(".time.weekly");
const timeMonthly = document.querySelectorAll(".time.monthly");

const dailyPrev = document.querySelectorAll(".daily__hours--prev");
const monthlyPrev = document.querySelectorAll(".monthly__hours--prev");
const weeklyPrev = document.querySelectorAll(".weekly__hours--prev");

function show(time) {
  time.forEach((el) => {
    el.classList.add("show");
  });
}
function reset() {
  timeDaily.forEach((el) => {
    el.classList.remove("show");
    console.log(el);
  });
  timeWeekly.forEach((el) => {
    el.classList.remove("show");
    console.log(el);
  });
  timeMonthly.forEach((el) => {
    el.classList.remove("show");
  });
}
function timeCalender(timesPrev, time) {
  timesPrev.forEach((el) => {
    const newEl = el.innerHTML.replace("Previous", `${time}`);
    el.textContent = newEl;
  });
}

show(timeWeekly);
timeCalender(weeklyPrev, "Last Week");
btnWeekly.style.color = "white";

btnDaily.addEventListener("click", function () {
  btnWeekly.style.color = "rgba(255, 255, 255, 0.548)";
  timeCalender(dailyPrev, "today");
  reset();
  show(timeDaily);
});
btnWeekly.addEventListener("click", function () {
  btnWeekly.style.color = "white";
  timeCalender(weeklyPrev, "Last Week");
  reset();
  show(timeWeekly);
});

btnMonthly.addEventListener("click", function () {
  btnWeekly.style.color = "rgba(255, 255, 255, 0.548)";
  console.log(timeDaily);
  timeCalender(monthlyPrev, "Last month");
  reset();
  show(timeMonthly);
});
