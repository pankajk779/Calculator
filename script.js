

class Calculator {

    constructor(previousEntry, currentEntry) {
        this.previousEntry;
        this.currentEntry;
        this.allClear()
    }

    chooseOperation(operation) {
        if (this.currentEntry == '') return
        if (this.previousEntry != '') {
            this.calculate
        }
        this.operation = operation
        this.previousEntry = this.currentEntry
        this.currentEntry = ''
    }

    allClear() {
        this.currentEntry = ''
        this.previousEntry = ''
    }

    del() {
        this.currentEntry = this.currentEntry.toString().slice(0, -1);
    }

    calculate() {

    }

    appendValue(number) {
        if (number === '.' && this.currentEntry.includes('.'))
            return;

        this.currentEntry = this.currentEntry.toString() + number.toString();
    }

    displayValue() {
        this.currentEntry.innerHTML = "5"
    }

}


// https://www.youtube.com/watch?v=j59qQ7YWLxw

const numberButtons = document.querySelectorAll('.data-number')
const operationButtons = document.querySelectorAll('.data-operation')
const calculateButton = document.querySelector(".data-calculate")
const delButton = document.querySelector('.data-del')
const allClearButton = document.querySelector('.data-all-clear')
var previousEntryElement = document.querySelector('.data-previous-entry')
var currentEntryElement = document.querySelector('.data-typed-entry')

const calculator = new Calculator;

for (var i = 0; i < numberButtons.length; i++) {
    let number = numberButtons[i].innerHTML;
    // debugger
    numberButtons[i].addEventListener("click", (e) => {
        
        //appendNumber
        if (numberButtons[i].innerHTML === '.' && currentEntryElement.contains('.'))
            return;
        if(currentEntryElement.innerHTML.length >= 8)
            return;
        currentEntryElement.innerHTML = currentEntryElement.innerHTML + number.toString()
    })
}

for (var i = 0; i < operationButtons.length; i++) {
    let button = operationButtons[i];

    operationButtons[i].addEventListener('click', (e) => {
        currentEntryElement.innerHTML = currentEntryElement.innerHTML + button.innerHTML;
    })
}

calculateButton.addEventListener('click', (e) => {

})

delButton.addEventListener('click', (e) => {
    currentEntryElement.innerHTML = currentEntryElement.innerHTML.slice(0, -1);
})

allClearButton.addEventListener('click', (e) => {
    debugger
    calculator.allClear()
    calculator.displayValue()
})
