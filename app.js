const addTimerElement = document.querySelector("#add-timer");
const timerListElement = document.querySelector("#timers");
const timerInputElement = document.querySelector("#time-input");

addTimerElement.addEventListener("click", () => {
  const time = timerInputElement.value;

  const timer = document.createElement("li");

  timer.textContent = valueTime(time);

  timerListElement.append(timer);

  timer.addEventListener("click", () => {
    timer.remove();
  });

  timerFunction(timer, time - 1);
});

function valueTime(time) {
  h = "00";
  m = "00";
  s = time;
  if (time > 60) {
    m = Math.floor(time / 60);
    s = time % 60;
    if (m > 60) {
      h = Math.floor(m / 60);
      m = m % 60;
    }
  }

  return `${h}:${m}:${s}`;
}

function timerFunction(timerElement, time) {
  setTimeout(() => {
    timerElement.textContent = valueTime(time);
    if (time <= 0) {
      timerElement.remove();
    }
    time--;
    timerFunction(timerElement, time);
  }, 1000);
}
