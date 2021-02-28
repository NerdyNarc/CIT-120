var containerEle = document.body.querySelector(".container");

const number1 = prompt('Enter first number: ');
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number2 = prompt('Enter second number: ');

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

containerEle.innerHTML= "The answer is "+result;