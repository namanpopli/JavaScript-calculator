const screen1Element = document.querySelector('.screen-1');
const screen2Element = document.querySelector('.screen-2');
const numbersElement = document.querySelectorAll('.number');
const operationElement = document.querySelectorAll('.operation');
const previousClearElement = document.querySelector('.clear-prev');
const clearElement = document.querySelector('.clear');
const equalElement = document.querySelector('.equal-to');

let screen1Number = '';
let screen2Number = '';
let result = '';
let lastOperation = '';
let hasDot = false;

numbersElement.forEach((number) => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !hasDot) {
            hasDot = true;
        } else if(e.target.innerText === '.' && hasDot) {
            return;
        }
        screen2Number += e.target.innerText;
        screen2Element.innerText = screen2Number;
    })
});

operationElement.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if(!screen2Number) {
            return;
        }
        haveDot = false;
        const operationName = e.target.innerText;
        if(screen1Number && lastOperation && screen2Number) {
            performCalculations();
        } else {
            result = parseFloat(screen2Number);
        }
        clearVal(operationName);
        lastOperation = operationName;
    })
})

function clearVal(operationName = '') {
    screen1Number += screen2Number + ' ' + operationName + ' ';
    screen1Element.innerText = screen1Number;
    screen2Element.innerText = '';
    screen2Number = '';
}

function performCalculations() {
    if(lastOperation === '+') {
        result = parseFloat(result) + parseFloat(screen2Number);
    } else if(lastOperation === '-') {
        result = parseFloat(result) - parseFloat(screen2Number);
    } else if(lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(screen2Number);
    } else if(lastOperation === '%') {
        result = parseFloat(result) % parseFloat(screen2Number);
    } else if(lastOperation === '÷') {
        result = parseFloat(result) / parseFloat(screen2Number);
    }
}

equalElement.addEventListener('click', (e) => {
    if(!screen1Number || !screen2Number) {
        return;
    }
    haveDot = false;
    performCalculations();
    clearVal();
    screen2Element.innerText = result;
    screen2Number = result;
    screen1Number = '';
});

clearElement.addEventListener('click', (e) => {
    screen1Element.innerText = '0';
    screen2Element.innerText = '0';
    screen1Number = '';
    screen2Number = '';
    result = '';
});

previousClearElement.addEventListener('click', (e) => {
    let temp = parseFloat(screen2Number / 10);
    screen2Number = Math.floor(temp);
    screen2Element.innerText = screen2Number;
});