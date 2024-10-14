function isValid(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Invalid number provided');
  }

  if (
    num1 === Infinity ||
    num2 === Infinity ||
    num1 === -Infinity ||
    num2 === -Infinity
  ) {
    throw new Error('Invalid number provided');
  }

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('Invalid number provided');
  }
}

class Calculator {
  constructor(num1, num2, validateFn) {
    this.num1 = num1;
    this.num2 = num2;
    this.validateFn = validateFn;
    this.validateFn(this.num1, this.num2);
  }

  set setX(value) {
    this.num1 = value;
    this.validateFn(this.num1, this.num2);
  }

  set setY(value) {
    this.num2 = value;
    this.validateFn(this.num1, this.num2);
  }

  logSum = () => {
    return this.num1 + this.num2;
  };

  logMul = () => {
    return this.num1 * this.num2;
  };

  logSub = () => {
    return this.num1 - this.num2;
  };

  logDiv = () => {
    if (this.num2 === 0) {
      throw new Error('Divison by zero');
    }
    return this.num1 / this.num2;
  };
}

const calculator = new Calculator(12, 0, isValid);
const logSumRef = calculator.logSum;
const logSubRef = calculator.logSub;

calculator.setX = 20;
calculator.setY = 5;

console.log(logSubRef());
console.log(logSumRef());
