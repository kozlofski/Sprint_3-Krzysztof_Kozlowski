const number1 = 4;
const number2 = 3;
const operationType = '%';

let result = 0;
let errorMessage = ''

if(operationType === '+') {
    result = number1 + number2;
} else if(operationType === '-') {
    result = number1 - number2;
} else if(operationType === '*') {
    result = number1 * number2;
} else if(operationType === '/') {
    if(number2 === 0) {
        errorMessage = 'Nie można dzielić przez zero';
    } else {
        result = number1 / number2;
    }
} else if(operationType === '%') {
    if(number2 === 0) {
        errorMessage = 'Nie można dzielić modulo przez zero';
    } else {
        result = number1 % number2;
    }
} else {
    errorMessage = 'Nieobsługiwany typ operacji';
}

if(errorMessage.length === 0) {
    const evenOrOdd = (result % 2 === 0) ? 'parzysty' : 'nieparzysty';
    const message = `Wynik operacji \"${operationType}\" to: ${result}, który jest ${evenOrOdd}`;
    console.log(message);
} else {
    console.log(errorMessage)
}