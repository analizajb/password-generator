// Assignment code here
var lowerConfirm;
var upperConfirm;
var numConfirm;
var symbolConfirm;
var usersChoices;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ['!','"','#','$','%','&','(',')','*','+'];

let passwordToBe = [];

function generatePassword() {
  promptLength = window.prompt('How many characters would you like your password to include?');
  console.log("You've chosen " + promptLength + " characters.");
    // validate prompt is answered
    if (!promptLength) {
      window.alert("Please enter a number between 8 and 128!");
      return generatePassword();
    } else if (promptLength < 8 || promptLength > 128) {
      window.alert("Please enter a number between 8 and 128!");
      console.log("You've chosen " + promptLength + " characters.");
      return generatePassword();
    } else {
      lowerConfirm = window.confirm('Would you like to include lowercase letters?');
      console.log("You've chosen to include " + lowerConfirm);
      upperConfirm = window.confirm('Would you like to include uppercase letters?');
      console.log("You've chosen to include " + upperConfirm);
      numConfirm = window.confirm('Would you like to include numbers?');
      console.log("You've chosen to include " + numConfirm);
      symbolConfirm = window.confirm('Would you like to include symbols?');
      console.log("You've chosen to include " + symbolConfirm);
    };

    // If prompts aren't answered
    if (!lowerConfirm && !upperConfirm && !numConfirm && !symbolConfirm) {
      window.alert("A strong password includes at least two of these criteria!");
    } else if (lowerConfirm && upperConfirm && numConfirm && symbolConfirm) {
      usersChoices = lowerCase.concat(upperCase, numbers, symbols);
      console.log(usersChoices)
    }

    // If only three of the options are selected.
    else if (lowerConfirm && upperConfirm && numConfirm) {
      usersChoices = lowerCase.concat(upperCase, numbers);
      console.log(usersChoices)
    } else if (lowerConfirm && upperConfirm && symbolConfirm) {
      usersChoices = lowerCase.concat(upperCase, symbols);
      console.log(usersChoices)
    } else if (lowerConfirm && numConfirm && symbolConfirm) {
      usersChoices = lowerCase.concat(numbers, symbols);
      console.log(usersChoices)
    } else if (upperConfirm && numConfirm && symbolConfirm) {
      usersChoices = upperCase.concat(numbers, symbols);
      console.log(usersChoices)
    }

    // If only two of the options are selected.
    else if (lowerConfirm && upperConfirm) {
      usersChoices = lowerCase.concat(upperCase);
      console.log(usersChoices);
    } else if (lowerConfirm && numConfirm) {
      usersChoices = lowerCase.concat(numbers);
      console.log(usersChoices);
    } else if (lowerConfirm && symbolConfirm) {
      usersChoices = lowerCase.concat(symbols);
      console.log(usersChoices);
    } else if (upperConfirm && numConfirm) {
      usersChoices = upperCase.concat(numbers);
      console.log(usersChoices);
    } else if (upperConfirm && symbolConfirm) {
      usersChoices = upperCase.concat(symbols);
      console.log(usersChoices);
    } else if (numConfirm && symbolConfirm) {
      usersChoices = numbers.concat(symbols);
      console.log(usersChoices);
    } 

    // If only one of the options are selected.
    else if (lowerConfirm) {
      usersChoices = lowerCase;
      console.log(usersChoices);
    } else if (upperConfirm) {
      usersChoices = upperCase;
      console.log(usersChoices);
    } else if (numConfirm) {
      usersChoices = numbers;
      console.log(usersChoices);
    } else if (symbolConfirm) {
      usersChoices = lowerCase;
      console.log(symbols);
    }

    for (var i = 0; i < promptLength; i++) {
      passwordToBe = usersChoices[Math.floor(Math.random() * usersChoices.length)];
    }
     return passwordToBe;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);