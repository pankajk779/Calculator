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

        if (computation.toString().length > 12) {
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

        if (this.currentEntry.length >= 5 || this.currentEntryElement.innerHTML.length >= 6)
            return;

        if (number === '.' && this.currentEntry.length == 0) {
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
for (var i = 0; i < line.length; i++) {
    console.log(`Letter ${i} is ${line[i].getTotalLength()} `)
}

const nav_cal_button = document.querySelector(".sub_calculator"); nav_cal_button.addEventListener("click", (e) => {
    smoothScroll(".space1")
})

const nav_features_btn
    = document.querySelector(".sub_features");
nav_features_btn.addEventListener("click", (e) => {
        smoothScroll(".space2")
    })

const nav_video_btn = document.querySelector(".sub_video");
nav_video_btn.addEventListener("click", (e) => {
    smoothScroll(".space3")
})

const nav_lang_btn = document.querySelector(".nav_lang_button");
nav_lang_btn.addEventListener("click", (e) => {
    smoothScroll(".comment_space")
})

const video = document.querySelector('.video');

video.addEventListener("click", (e) => {
    togglePlayPause(video);
})


const play_svg = document.getElementById("svg_play_pause");
const play_btn = document.querySelector(".play_pause");
play_btn.addEventListener("click", (e) => {
    
    togglePlayPause(video);
})

function togglePlayPause(video) {
    const paused = video.paused;
    
    if (paused) {
        play_svg.innerHTML = `<path d="M18.5001 75.3001C18.5001 77.0335 19.1001 78.5001 20.3001 79.7001C21.5001 80.9001 23.0001 81.5334 24.8001 81.6001H37.4001C39.1335 81.6001 40.6334 80.9668 41.9001 79.7001C43.1668 78.4335 43.7668 76.9668 43.7001 75.3001V24.8001C43.7001 23.0668 43.1001 21.5668 41.9001 20.3001C40.7001 19.0334 39.2001 18.4335 37.4001 18.5001H24.8001C23.0668 18.5001 21.5668 19.1001 20.3001 20.3001C19.0334 21.5001 18.4335 23.0001 18.5001 24.8001V75.3001ZM56.3001 75.3001C56.3001 77.0335 56.9335 78.5001 58.2001 79.7001C59.4668 80.9001 60.9334 81.5334 62.6001 81.6001H75.2001C76.9334 81.6001 78.4335 80.9668 79.7001 79.7001C80.9668 78.4335 81.5668 76.9668 81.5001 75.3001V24.8001C81.5001 23.0668 80.9001 21.5668 79.7001 20.3001C78.5001 19.0334 77.0001 18.4335 75.2001 18.5001H62.6001C60.8668 18.5001 59.4001 19.1001 58.2001 20.3001C57.0001 21.5001 56.3668 23.0001 56.3001 24.8001V75.3001Z" 
            fill="#1C274C"/>`
        video.play();
    } else {
        play_svg.innerHTML= `<path
            d="M89.2023 38.969C98.0436 43.777 98.0436 56.2228 89.2023 61.0307L35.8191 90.0603C27.2263 94.7332 16.6665 88.6512 16.6665 79.0295V20.9703C16.6665 11.3486 27.2263 5.26667 35.819 9.93942L89.2023 38.969Z"
            fill="#1C274C"
            />`
        video.pause();
    }
}

const muteButton = document.querySelector(".mute");
const svg_mute = document.getElementById("svg_mute");

muteButton.addEventListener("click", (e) => {
    toggleMute(document.querySelector(".video"))
});

function toggleMute(video) {
    if(video.muted){
        svg_mute.innerHTML = `<path d="M27.2918 91.2035C27.9542 91.5198 28.6883 91.6556 29.42 91.5971C30.1517 91.5385 30.8549 91.2878 31.4585 90.8701L59.0002 70.8285H75.0002C77.2103 70.8285 79.3299 69.9505 80.8927 68.3877C82.4555 66.8249 83.3335 64.7053 83.3335 62.4951V37.4951C83.3335 35.285 82.4555 33.1654 80.8927 31.6026C79.3299 30.0398 77.2103 29.1618 75.0002 29.1618H59.0002L31.6252 9.12013C31.0216 8.70249 30.3183 8.45171 29.5867 8.39318C28.855 8.33465 28.1208 8.47043 27.4585 8.7868C26.7402 9.10946 26.128 9.62906 25.6929 10.2854C25.2578 10.9417 25.0176 11.7079 25.0002 12.4951L25.0002 87.4951C25.0025 88.2646 25.2178 89.0183 25.6223 89.6729C26.0268 90.3274 26.6047 90.8572 27.2918 91.2035Z"
                                fill="#1C274C"/>`
        video.muted = false;
    }else{
        svg_mute.innerHTML = `<path
                                    d="M58.7917 29.1667L25 53.875V12.5C25.0023 11.7305 25.2177 10.9768 25.6222 10.3222C26.0267 9.66767 26.6045 9.13791 27.2917 8.79166C27.954 8.47529 28.6882 8.3395 29.4198 8.39804C30.1515 8.45657 30.8547 8.70735 31.4583 9.12499L58.7917 29.1667ZM81.8333 32.9167C81.0003 31.7132 79.865 30.7503 78.5417 30.125C77.447 29.5464 76.2371 29.219 75 29.1667H65.625L25 59.125V87.5C25.0023 88.2694 25.2177 89.0232 25.6222 89.6778C26.0267 90.3323 26.6045 90.8621 27.2917 91.2083C27.954 91.5247 28.6882 91.6605 29.4198 91.6019C30.1515 91.5434 30.8547 91.2926 31.4583 90.875L59 70.8333H75C77.2101 70.8333 79.3297 69.9553 80.8926 68.3925C82.4554 66.8297 83.3333 64.7101 83.3333 62.5V37.5C83.3293 35.8008 82.8059 34.1434 81.8333 32.75V32.9167Z"
                                    fill="#1C274C"
                                />
                                <path
                                    d="M89.9581 21.5418L78.5415 29.8751L24.9998 69.3751L14.9581 76.7918C14.2572 77.3409 13.3901 77.6348 12.4998 77.6251C11.6288 77.6164 10.7825 77.3351 10.0797 76.8205C9.37693 76.306 8.85308 75.5841 8.58178 74.7564C8.31049 73.9288 8.30539 73.0369 8.56721 72.2061C8.82903 71.3754 9.34461 70.6476 10.0415 70.1251L24.9998 59.1251L65.6248 29.1668L85.0415 14.8751C85.472 14.4782 85.9813 14.1766 86.5362 13.9897C87.0911 13.8029 87.6792 13.7352 88.262 13.7909C88.8449 13.8466 89.4095 14.0245 89.919 14.3131C90.4285 14.6016 90.8714 14.9943 91.2189 15.4655C91.5665 15.9368 91.8108 16.476 91.9359 17.048C92.0611 17.6199 92.0643 18.2119 91.9454 18.7852C91.8264 19.3585 91.5879 19.9003 91.2455 20.3753C90.9031 20.8502 90.4644 21.2477 89.9581 21.5418Z"
                                    fill="#2CA9BC"
                                />`
        video.muted = true;
    }
}

//video progressbar update
const progressBar = document.querySelector(".progress_bar");

video.addEventListener("timeupdate", ()=>{
    const currTime = video.currentTime;
    const duration = video.duration;
    const percentage = (currTime/duration) * 100;
    
    progressBar.style.width = `${percentage}%`;
    debugger
})

function smoothScroll(divName) {
    const hero = document.querySelector(divName);
    hero.scrollIntoView({ behavior: 'smooth' })
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