let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations")
let equals = document.querySelector(".equals")
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
        
        operator = determineOperator(operation);
        if (!operating) {
            displayValue = upper.textContent
            lower.textContent = upper.textContent
            upper.textContent = ''
        }
        else {
            displayValue2 = upper.textContent
        }
        operating = !operating;
    })     
})
    

equals.addEventListener('click', () => {
    if (!operating) {
        lower.textContent = displayValue
    }
    
    else {
        displayValue2 = upper.textContent
        upper.textContent = ''
        lower.textContent = operate(displayValue, operator, displayValue2)
    }
    operating = !operating

})


clear.addEventListener('click', () => {
    upper.textContent = '';
    lower.textContent = '';
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