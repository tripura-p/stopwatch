let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let laps = [];

function startStop() {
  if (!isRunning) {
    startTimer();
    document.getElementById('startStop').textContent = 'Stop';
    isRunning = true;
  } else {
    stopTimer();
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;
  }
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timer = setInterval(updateDisplay, 10);
}

function stopTimer() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('startStop').textContent = 'Start';
  elapsedTime = 0;
  updateDisplay();
  laps = [];
  document.getElementById('laps').innerHTML = '';
}

function updateDisplay() {
  const currentTime = new Date(Date.now() - startTime + elapsedTime);
  const hours = String(currentTime.getUTCHours()).padStart(2, '0');
  const minutes = String(currentTime.getUTCMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(currentTime.getUTCMilliseconds()).padStart(3, '0');
  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}.${milliseconds.slice(0, 2)}`;
}

function lap() {
  laps.push(document.getElementById('display').textContent);
  const lapList = document.getElementById('laps');
  const newLap = document.createElement('li');
  newLap.textContent = `Lap ${laps.length}: ${laps[laps.length - 1]}`;
  lapList.appendChild(newLap);
}
