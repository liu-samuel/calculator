let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations")
let equals = document.querySelector(".equals")
let decimal = document.querySelector(".decimal")
let upper = document.querySelector(".upper")
let lower = document.querySelector(".lower")
let clear = document.querySelector(".clear")

let displayValue = 0;
let displayValue2 = 0;
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
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if (!operating) {
            operator = determineOperator(operation);
            displayValue = upper.textContent
            lower.textContent = upper.textContent
            upper.textContent = ''
        }
        else {
            displayValue2 = upper.textContent
            upper.textContent = operate(displayValue, operator, displayValue2)
            displayValue = upper.textContent;
            lower.textContent = upper.textContent;
            upper.textContent = ''
            operator = determineOperator(operation);
        }
        operating = !operating;
    })     
})
    
decimal.addEventListener('click', () => {
    upper.textContent += '.'
})

equals.addEventListener('click', () => {
    calculate();
})


clear.addEventListener('click', () => {
    upper.textContent = '';
    lower.textContent = '';
    displayValue = 0;
    displayValue2 = 0;
    operating = false
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
    }

    else {
        displayValue2 = upper.textContent
        upper.textContent = ''
        lower.textContent = operate(displayValue, operator, displayValue2)
    }
    operating = !operating
    return lower.textContent;
}