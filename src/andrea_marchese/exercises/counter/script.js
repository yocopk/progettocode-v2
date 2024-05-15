/** @format */

const counterDisplay = document.getElementById('counter');
const incBtn = document.getElementById('btn-inc');
const decBtn = document.getElementById('btn-dec');

function increaseCounter() {
  counterDisplay.textContent = parseInt(counterDisplay.textContent) + 1;
}

function decreaseCounter() {
  counterDisplay.textContent = parseInt(counterDisplay.textContent) - 1;
}

incBtn.addEventListener('click', increaseCounter);
decBtn.addEventListener('click', decreaseCounter);
