'use strict';
function addNumbers(arg1, arg2) {
    return alert(`The addition result is ${arg1 + arg2}`);
}

function subtractNumbers(arg1, arg2) {
    return alert(`The subtraction result is ${arg1 - arg2}`);
}

function divideNumbers(arg1, arg2) {
    return alert(`The division result is ${arg1 / arg2}`);
}

function multiplyNumbers(arg1, arg2) {
    return alert(`The multiplication result is ${arg1 * arg2}`);
}

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case 'addition':
            addNumbers(arg1, arg2);
            break;
        case 'subtraction':
            subtractNumbers(arg1, arg2);
            break;
        case 'division':
            divideNumbers(arg1, arg2);
            break;
        case 'multiplication':
            multiplyNumbers(arg1, arg2);
            break;
        default:
            alert('Unknown type of operation!');
    }
}

let arg1 = +prompt('Enter the first number');
let arg2 = +prompt('Enter the second number');
let operation = prompt('Enter operation: addition, subtraction, division or multiplication');
mathOperation(arg1, arg2, operation);
