// Author: Samuel Liu

let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations")
let equals = document.querySelector(".equals")
let decimal = document.querySelector(".decimal")
let upper = document.querySelector(".upper")
let lower = document.querySelector(".lower")
let clear = document.querySelector(".clear")
let erase = document.querySelector(".erase")

let displayValue = NaN;
let displayValue2 = NaN;
let operator = ''
let operating = false;

// Operation functions
function add(a, b) {
    return Number(a) + Number(b)
}

function subtract(a, b) {
    return Number(a) - Number(b)
}

function multiply(a, b) {
    return Number(a) * Number(b)
}

function divide(a, b) {
    return Number(a) / Number(b)
}

function operate(a, operator, b) {
    return operator(a, b)
}

// Adding event listeners
numbers.forEach(number => {
    number.addEventListener('click', () => {
        upper.textContent += number.textContent;
        upper.style.color = 'lightgray';
        lower.style.color = 'darkgray';
        displayValue = upper.textContent;
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if (!operating) {
            operator = determineOperator(operation);
            if (lower.textContent == '') {
                lower.textContent = upper.textContent
            }
            unrounded = Number(lower.textContent)
            displayValue = unrounded.toFixed(3);
            upper.textContent = ''
            operating = !operating;
        }
        else {
            displayValue2 = upper.textContent
            unrounded = operate(displayValue, operator, displayValue2)
            displayValue = unrounded.toFixed(3);
            upper.textContent = displayValue
            lower.textContent = upper.textContent;
            upper.textContent = ''
            operator = determineOperator(operation);
            upper.style.color = 'lightgray';
            lower.style.color = 'darkgray';
        }
        
    })     
})
    
decimal.addEventListener('click', () => {
    upper.textContent += '.';
})

equals.addEventListener('click', () => {
    displayValue = calculate();
})


clear.addEventListener('click', () => {
    upper.textContent = '';
    lower.textContent = '';
    displayValue = NaN;
    displayValue2 = NaN;
    operating = false
})

erase.addEventListener('click', () => {
    upper.textContent = upper.textContent.slice(0, -1);
})

function determineOperator(operation) {
    switch(operation.textContent) {
        case '+':
            operator = add;
            break;
        case '-':
            operator = subtract;
            break
        case 'x':
            operator = multiply;
            break;
        case '/':
            operator = divide;
            break;
        default:
            break;
        }
    return operator
}

function calculate() {
    if (!operating) {
        lower.textContent = displayValue
        upper.textContent = ''
    }

    else {
        displayValue2 = upper.textContent
        upper.textContent = ''
        unrounded = operate(displayValue, operator, displayValue2)
        displayValue = unrounded.toFixed(3);
        lower.textContent = displayValue
    }
    operating = false;
    return displayValue;
}