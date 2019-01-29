// Variable declaration
const numberA = 3;
const numberB = 2;

// Addition
console.log('---Addition---');
console.log(numberA + numberB);

function addition(num1, num2) {
  return num1 + num2;
}

console.log(`result of 4 + 2 equal to ${addition(4, 2)}`);
console.log(`result of 133 + 112 equal to ${addition(133, 112)}`);

// Substraction
console.log('---Substraction---');
console.log(numberA - numberB);

function substraction(num1, num2) {
  return num1 - num2;
}

console.log(`result of 4 - 2 equal to ${substraction(4, 2)}`);
console.log(`result of 10000 - 1 equal to ${substraction(10000, 1)}`);

//  Multiplication
console.log('---Multiplication--');
console.log(numberA * numberB);

function multiplication(num1, num2) {
  return num1 * num2;
}

console.log(`result of 4 * 2 equal to ${multiplication(4, 2)}`);
console.log(`result of 10000 * 1 equal to ${multiplication(10000, 1)}`);

// Division
console.log('---Division---');
console.log(numberA / numberB);

function division(num1, num2) {
  return num1 / num2;
}

console.log(`result of 4 / 2 equal to ${division(4, 2)}`);
console.log(`result of 10000 / 1 equal to ${division(10000, 1)}`);

// Modulation
console.log('---Modulation');
console.log(numberA % numberB);

function modulation(num1, num2) {
  return num1 % num2;
}

console.log(`result of 4 % 2 equal to ${modulation(4, 2)}`);
console.log(`result of 10000 % 1 equal to ${substraction(10000, 1)}`);

//Loop
const numbers = [3, 2, 5, 19, 1313];
let result = 0;
for (let i in numbers) {
  result += numbers[i];
}

console.log('---Loop---');
console.log(`total addition in numbers is ${result}`);
