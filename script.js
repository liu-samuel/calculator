numbers = document.querySelectorAll(".numbers");
operations = document.querySelectorAll(".operations")
equals = document.querySelector(".equals")
upper = document.querySelector(".upper")
lower = document.querySelector(".lower")
clear = document.querySelector(".clear")


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

numbers.forEach(number => {
    number.addEventListener('click', () => {
        upper.textContent += number.textContent
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        upper.textContent += operation.textContent
    })
})
    

equals.addEventListener('click', () => {
    operate(a.innerHTML, operator.innerHTML, b.innerHTML)
})


clear.addEventListener('click', () => {
    upper.textContent = ''
})