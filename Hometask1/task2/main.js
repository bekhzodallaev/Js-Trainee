const NUMBER_INPUT = document.getElementById('input');
const INPUT_VALUE = document.querySelector('.result');
const SUBMIT_BTN = document.querySelector('.btn');

function getNum() {
  const value = parseInt(NUMBER_INPUT.value, 10);
  return isNaN(value) ? null : value;
}

function isValid(value) {
  return value !== null && value >= 0;
}

function convertBinary() {
  let value = getNum();
  let binaryString = '';
  let remainder;

  if (!isValid(value)) {
    INPUT_VALUE.textContent = 'Please enter a valid non-negative number';
    return;
  }
  if (value === 0) {
    binaryString = '0';
  } else {
    while (value > 0) {
      remainder = value % 2;
      value = Math.floor(value / 2);
      binaryString = remainder + binaryString;
    }
  }
  INPUT_VALUE.textContent = binaryString;
}

SUBMIT_BTN.addEventListener('click', convertBinary);
