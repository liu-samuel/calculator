numbers = document.querySelector(".numbers");
operations = document.querySelector(".operations")


function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(a, operator, b) {
    return operator(a, b)
}

numbers.addEventListener('click', () => {
    console.log(1)
})

operations.addEventListener('click', () => {
    console.log("operation")
})
