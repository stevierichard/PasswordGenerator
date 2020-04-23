// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = [
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
var lowerCase = [
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
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charArr = [
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
var userPrefference = {
  isLowerCase: false,
  isUpperCase: false,
  isSpecChar: false,
  isUserNumber: false,
  passLength: 0,
};

function passOption() {
  var userLength = prompt("How long you want your password to be?");

  if (userLength >= 8 && userLength <= 128) {
    userPrefference.passLength = userLength;
    var userLowerCase = confirm(
      "Do you want your password to have a lowercase?"
    );
    var userUpperCase = confirm(
      "Do you want your password to have a uppercase?"
    );
    var specChar = confirm(
      "Do you want your password to have a special character"
    );
    var userNumber = confirm("Do you want your password to have a number?");

    if (
      userLowerCase === true ||
      userUpperCase === true ||
      specChar === true ||
      userNumber === true
    ) {
      userPrefference.isLowerCase = userLowerCase;
      userPrefference.isUpperCase = userUpperCase;
      userPrefference.isUserNumber = userNumber;
      userPrefference.isSpecChar = specChar;
      console.log(userPrefference.isLowerCase);
      console.log(userPrefference.isUpperCase);
      console.log(userPrefference.isUserNumber);
      console.log(userPrefference.isSpecChar);

      writePassword();
    }
  } else {
    alert("Your password must be in between 8 and 128 characters");
    passOption();
  }
}
console.log(userPrefference.isLowerCase);
console.log(userPrefference.isUpperCase);
console.log(userPrefference.isUserNumber);
console.log(userPrefference.isSpecChar);

function generatePassword() {
  var newPassword = "";
  var possibleArray = [];
  var definiteChar = [];

  if (userPrefference.isLowerCase === true) {
    possibleArray = possibleArray.concat(lowerCase);
    var randomisLowerCase = getRandom(lowerCase);
    definiteChar.push(randomisLowerCase);
  }

  if (userPrefference.isUpperCase === true) {
    possibleArray = possibleArray.concat(upperCase);
    var randomisUpperCase = getRandom(upperCase);
    definiteChar.push(randomisUpperCase);
  }
  if (userPrefference.isUserNumber === true) {
    possibleArray = possibleArray.concat(numberList);
    var randomisUserNumber = getRandom(numberList);
    definiteChar.push(randomisUserNumber);
  }
  if (userPrefference.isSpecChar === true) {
    possibleArray = possibleArray.concat(charArr);
    var randomisSpecChar = getRandom(charArr);
    definiteChar.push(randomisSpecChar);
  }
  console.log(possibleArray);

  return newPassword;
}
function getRandom(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  var randomElement = array[randomNumber];
  console.log(randomNumber);
  console.log(randomElement);

  return randomElement;
}

// Write password to the #password input
function writePassword() {
  // passOption();
  var password = generatePassword();
  console.log(password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", passOption());
