let STOPWATCH_INTERVAL;
let STOPWATCH_RUNNING = false;
let STOPWATCH_SECONDS = 0,
  STOPWATCH_MINUTES = 0,
  STOPWATCH_HOURS = 0;

const STOPWATCH_DISPLAY = document.querySelector(
  '.stopwatch_container .stopwatch_clock'
);
const START_STOPWATCH_BTN = document.querySelector(
  '.stopwatch_container .start_btn'
);
const PAUSE_STOPWATCH_BTN = document.querySelector(
  '.stopwatch_container .pause_btn'
);
const RESET_STOPWATCH_BTN = document.querySelector(
  '.stopwatch_container .reset_btn'
);

START_STOPWATCH_BTN.addEventListener('click', () => {
  if (!STOPWATCH_RUNNING) {
    STOPWATCH_RUNNING = true;
    START_STOPWATCH_BTN.disabled = true;
    PAUSE_STOPWATCH_BTN.disabled = false;
    RESET_STOPWATCH_BTN.disabled = false;
    STOPWATCH_INTERVAL = setInterval(updateStopwatch, 1000);
  }
});

PAUSE_STOPWATCH_BTN.addEventListener('click', () => {
  STOPWATCH_RUNNING = false;
  clearInterval(STOPWATCH_INTERVAL);
  START_STOPWATCH_BTN.disabled = false;
  PAUSE_STOPWATCH_BTN.disabled = true;
});

RESET_STOPWATCH_BTN.addEventListener('click', () => {
  STOPWATCH_RUNNING = false;
  clearInterval(STOPWATCH_INTERVAL);
  STOPWATCH_SECONDS = 0;
  STOPWATCH_MINUTES = 0;
  STOPWATCH_HOURS = 0;
  updateStopwatchDisplay();
  START_STOPWATCH_BTN.disabled = false;
  PAUSE_STOPWATCH_BTN.disabled = true;
  RESET_STOPWATCH_BTN.disabled = true;
});

function updateStopwatch() {
  STOPWATCH_SECONDS++;
  if (STOPWATCH_SECONDS >= 60) {
    STOPWATCH_SECONDS = 0;
    STOPWATCH_MINUTES++;
    if (STOPWATCH_MINUTES >= 60) {
      STOPWATCH_MINUTES = 0;
      STOPWATCH_HOURS++;
    }
  }
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const formattedTime = `${STOPWATCH_HOURS.toString().padStart(
    2,
    '0'
  )} : ${STOPWATCH_MINUTES.toString().padStart(
    2,
    '0'
  )} : ${STOPWATCH_SECONDS.toString().padStart(2, '0')}`;
  STOPWATCH_DISPLAY.textContent = formattedTime;
}

let TIMER_INTERVAL;
let TIMER_RUNNING = false;
let TIMER_TOTAL_SECONDS = 0;

const TIMER_DISPLAY = document.querySelector('.timer_container .timer');
const START_TIMER_BTN = document.getElementById('startTimer');
const RESET_TIMER_BTN = document.getElementById('resetTimer');
const PLUS_1_MINUTE_BTN = document.getElementById('plus1Minute');
const PLUS_10_SECONDS_BTN = document.getElementById('plus10Seconds');
const TIME_INPUT = document.getElementById('timeInput');

START_TIMER_BTN.addEventListener('click', () => {
  const timeInputValue = parseInt(TIME_INPUT.value, 10);
  if (!isNaN(timeInputValue) && timeInputValue > 0) {
    TIMER_TOTAL_SECONDS += timeInputValue;
    TIME_INPUT.value = '';
    startTimer();
  }
});

PLUS_1_MINUTE_BTN.addEventListener('click', () => {
  TIMER_TOTAL_SECONDS += 60;
  updateTimerDisplay();
  if (!TIMER_RUNNING) {
    startTimer();
  }
});

PLUS_10_SECONDS_BTN.addEventListener('click', () => {
  TIMER_TOTAL_SECONDS += 10;
  updateTimerDisplay();
  if (!TIMER_RUNNING) {
    startTimer();
  }
});

function startTimer() {
  if (!TIMER_RUNNING && TIMER_TOTAL_SECONDS > 0) {
    TIMER_RUNNING = true;
    START_TIMER_BTN.disabled = true;
    RESET_TIMER_BTN.disabled = false;
    TIMER_INTERVAL = setInterval(updateTimer, 1000);
  }
}

RESET_TIMER_BTN.addEventListener('click', () => {
  TIMER_RUNNING = false;
  clearInterval(TIMER_INTERVAL);
  TIMER_TOTAL_SECONDS = 0;
  updateTimerDisplay();
  START_TIMER_BTN.disabled = false;
  RESET_TIMER_BTN.disabled = true;
});

function updateTimer() {
  if (TIMER_TOTAL_SECONDS > 0) {
    TIMER_TOTAL_SECONDS--;
    updateTimerDisplay();
    if (TIMER_TOTAL_SECONDS === 0) {
      clearInterval(TIMER_INTERVAL);
      TIMER_RUNNING = false;
      alert('Time is up!');
      START_TIMER_BTN.disabled = false;
      RESET_TIMER_BTN.disabled = true;
    }
  }
}

function updateTimerDisplay() {
  let hours = Math.floor(TIMER_TOTAL_SECONDS / 3600);
  let minutes = Math.floor((TIMER_TOTAL_SECONDS % 3600) / 60);
  let seconds = TIMER_TOTAL_SECONDS % 60;

  const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes
    .toString()
    .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
  TIMER_DISPLAY.textContent = formattedTime;
}
