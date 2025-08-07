let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');

function updateDisplay() {
  display.value = currentInput || '0';
}

function appendNumber(number) {
  if (number === '0' && currentInput === '0') return;
  currentInput += number;
  updateDisplay();
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

updateDisplay(); // Initialize display
