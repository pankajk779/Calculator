class Calculator {

    constructor(previousEntry, currentEntry) {
        this.previousEntryElement = previousEntry;
        this.currentEntryElement = currentEntry;
        this.allClear()
    }

    chooseOperation(operation) {
        if (this.currentEntry === '' || this.currentEntryElement.innerHTML.length > 6) return
        if (this.previousEntry !== '') {
            this.calculate()
        }
        this.operation = operation
        this.previousEntry = this.currentEntry
        this.currentEntry = ''
    }

    allClear() {
        this.currentEntry = ''
        this.previousEntry = ''
        this.operation = undefined;
    }

    del() {
        this.currentEntry = this.currentEntry.toString().slice(0, -1);
        this.previousEntry = ''
    }

    calculate() {
        
        let computation;
        const prev = parseFloat(this.previousEntry);
        const current = parseFloat(this.currentEntry)
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;

            case '-':
                computation = prev - current;
                break;

            case '/':
                computation = prev / current
                break;

            case '*':
                computation = prev * current
                break;

            case '%':
                computation = prev % current
                break

            default:
                return;

        }

        if(computation.toString().length > 12){
            computation = computation.toString().slice(0, 10)
            debugger
        }
        this.previousEntry = `${this.previousEntry} ${this.operation} ${this.currentEntry}`
        this.currentEntry = computation;
        this.operation = undefined;
        
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.'), [0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en-IN', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentEntryElement.innerHTML = this.getDisplayNumber(this.currentEntry)
        if (this.operation != null) {
            this.previousEntryElement.innerHTML =
                `${this.getDisplayNumber(this.previousEntry)} ${this.operation}`
        } else {
            this.previousEntryElement.innerHTML = this.previousEntry
        }
    }

    appendValue(number) {

        if (number === '.' && this.currentEntry.includes('.'))
            return;

        if(this.currentEntry.length >=5 || this.currentEntryElement.innerHTML.length >= 6)
            return;

        if(number === '.' && this.currentEntry.length == 0){
            this.currentEntry = this.curr
        }
        this.currentEntry = this.currentEntry.toString() + number.toString();
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

// checking stroke length
const line = document.querySelectorAll("#logo path")
for(var i = 0; i < line.length; i++){
    console.log(`Letter ${i} is ${line[i].getTotalLength()} `)
}

const button1 = document.querySelector(".sub_calculator");
button1.addEventListener("click", (e)=>{
    smoothScroll(".space1")
})

const button2 = document.querySelector(".sub_features");
button2.addEventListener("click", (e)=>{
    smoothScroll(".space2")
})

const button3 = document.querySelector(".sub_video");
button3.addEventListener("click", (e)=>{
    smoothScroll(".space3")
})

const button4 = document.querySelector(".nav_lang_button");
button4.addEventListener("click", (e)=>{
    smoothScroll(".comment_space")
})

const play = document.querySelector(".play_pause");
play.addEventListener("click", (e)=>{
    const video = document.querySelector('.video');
    togglePlayPause(video);
})

function togglePlayPause(video){
    const paused = video.paused;
    debugger
    if(paused){
        video.play();
    }else{
        video.pause();
    }
}

const muteButton = document.querySelector(".mute");
muteButton.addEventListener("click", (e)=>{
    toggleMute(document.querySelector(".video"))
});

function toggleMute(video){
    video.muted = !video.muted
}

function smoothScroll(divName){
    const hero = document.querySelector(divName);
    hero.scrollIntoView({behavior:'smooth'})
}

const calculator = new Calculator(previousEntryElement, currentEntryElement);

for (var i = 0; i < numberButtons.length; i++) {
    let numberBtn = numberButtons[i]

    numberBtn.addEventListener("click", (e) => {

        calculator.appendValue(numberBtn.innerHTML)
        calculator.updateDisplay();
    })
}

for (var i = 0; i < operationButtons.length; i++) {
    let button = operationButtons[i];

    button.addEventListener('click', (e) => {
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
}

calculateButton.addEventListener('click', (e) => {
    calculator.calculate()
    calculator.updateDisplay()
})

delButton.addEventListener('click', (e) => {

    calculator.del()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', (e) => {

    calculator.allClear()
    calculator.updateDisplay()
})