// Assignment Code
var generateBtn = document.querySelector("#generate"); //This is the button to genrate the random password
//All variables below this point are Characters to generate the random password with.
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length)
  return arr[index]
};
// These are the password options. 
function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to contain? 8-128 "));
  if (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength)) {
    alert("Your input was incorrect please make sure your input is a number greater than 8 or less than 128.")
    return null
  };
  var hasSpecialCharacters = confirm("Click ok to include special characters.");
  var hasNumericCharacters = confirm("Click ok to include numeric characters.");
  var hasLowerCasedCharacters = confirm("Click ok to include lower cased characters.");
  var hasUpperCasedCharacters = confirm("Click ok to include upper cased characters.");
  if (hasSpecialCharacters === false && hasNumericCharacters === false && hasLowerCasedCharacters === false && hasUpperCasedCharacters === false) {
    alert("Please pick at least one type of character.")
    return null
  };
  var chosenCharacters = [];
  var passwordResults = [];
  if (hasSpecialCharacters) {
    chosenCharacters = chosenCharacters.concat(specialCharacters)
    passwordResults.push(getRandom(specialCharacters))
  };
  if (hasNumericCharacters) {
    chosenCharacters = chosenCharacters.concat(numericCharacters)
    passwordResults.push(getRandom(numericCharacters))
  };
  if (hasLowerCasedCharacters) {
    chosenCharacters = chosenCharacters.concat(lowerCasedCharacters)
    passwordResults.push(getRandom(lowerCasedCharacters))
  };
  if (hasUpperCasedCharacters) {
    chosenCharacters = chosenCharacters.concat(upperCasedCharacters)
    passwordResults.push(getRandom(upperCasedCharacters))
  };
  var remainingCharacters = passwordLength - passwordResults.length
  while (remainingCharacters > 0) {
    passwordResults.push(getRandom(chosenCharacters))
    remainingCharacters--
  }
  return passwordResults.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
