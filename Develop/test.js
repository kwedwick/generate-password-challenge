// Assignment code here
const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeLowercaseElement = document.getElementById("includeLowercase")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")

const form = document.getElementById("userInputForm")

const UPPERCASE_ASCII_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_ASCII_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_ASCII_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_ASCII_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64).concat(
        arrayFromLowToHigh(91, 96).concat(
            arrayFromLowToHigh(123, 126)
        )
    )
)



characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)


form.addEventListener("submit", e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeLowercase = includeLowercaseElement.checked
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    const password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
})

function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    //String.fromCharCode(65)
    console.log(LOWERCASE_ASCII_CODES)
}



function arrayFromLowToHigh (low, high) {
    const array = []
    for (let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
};

















// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



//document.getElementById("btn").addEventListener("click", function() {
//  console.log("Button was pressed!")
//});