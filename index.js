const heading = document.querySelector("nav > span")
let decision  = Math.floor(Math.random() * 5)
let title = ""
switch (decision) {
    case 0 : title = "Alligator !"
    break;
    case 1 : title = "Calc Ya Later !"
    break;
    case 2 : title = "Calculator !"
    break;
    case 3 : title = "Refrigerator!"
    break;
    case 4 : title = "Accelerator !"
    break;
}
heading.textContent = title


const calcScreen = document.querySelector(".screen")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const zero = document.querySelector(".zero")
const calculate = document.querySelector(".equal")
const clean = document.querySelector(".clear")

let firstNumber = ""
let sign = ""
let secondNumber = ""


clean.addEventListener("click", () => {
    firstNumber = ""
    sign = ""
    secondNumber = ""
})

one.addEventListener("click", () => { firstNumber += "1", calcScreen.textContent = firstNumber})
two.addEventListener("click", () => { firstNumber += "2", calcScreen.textContent = firstNumber })
three.addEventListener("click", () => { firstNumber += "3", calcScreen.textContent = firstNumber })
four.addEventListener("click", () => { firstNumber += "4", calcScreen.textContent = firstNumber })
five.addEventListener("click", () => { firstNumber += "5", calcScreen.textContent = firstNumber })
six.addEventListener("click", () => { firstNumber += "6", calcScreen.textContent = firstNumber })
seven.addEventListener("click", () => { firstNumber += "7", calcScreen.textContent = firstNumber })
eight.addEventListener("click", () => { firstNumber += "8", calcScreen.textContent = firstNumber })
nine.addEventListener("click", () => { firstNumber += "9", calcScreen.textContent = firstNumber })
zero.addEventListener("click", () => { firstNumber += "0", calcScreen.textContent = firstNumber })



two.addEventListener("click", () => {
    secondNumber = "2"
    console.log("secondNumber has been set to" + " " + secondNumber)
    //console.log(firstNumber, sign, secondNumber)
})




calculate.addEventListener("click", () => {
    calcScreen.textContent = +firstNumber + +secondNumber
})
