let sliderEl = document.querySelector("#chars")
let sliderLabelEl = document.querySelector("label[for='chars']")
let uppercaseCheckboxEl = document.querySelector("#uppercase")
let symbolsCheckboxEl = document.querySelector("#symbols")
let generateBtnEl = document.querySelector("#container__generate-btn")

let LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
let UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let NUMBERS = "0123456789"
let SYMBOLS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

let PASSLENGTH = 8

sliderEl.addEventListener("change", event => {
    PASSLENGTH = sliderEl.value
    sliderLabelEl.textContent = PASSLENGTH + " characters"
    
})
function randint(i){
    return Math.floor(Math.random() * i)
}

function createPassword(){
    let result = ""
    let selection = LOWERCASE + NUMBERS
    if (uppercaseCheckboxEl.checked == true) selection += UPPERCASE
    if (symbolsCheckboxEl.checked == true) selection += SYMBOLS
    for (let i = 0; i <= PASSLENGTH; i++)
        result += selection.charAt(randint(selection.length))
    return result;
}

generateBtnEl.addEventListener("click", event  => {
    for (let i = 1; i <= 3; i++) {
        document.querySelector(".pass-item#item" + i).innerHTML = "<pre>" + createPassword() + "</pre>"
    }
})

