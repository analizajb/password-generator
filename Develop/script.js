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
    }
    else if (lowerConfirm && upperConfirm && symbolConfirm) {
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


  
  // var lowerCase = window.confirm('Would you like to include lowercase letters?');
  // if (lowerCase.confirm === true)
 

  
  // 1. PROMPT USER
  //    - length of password: 8-128 characters
  //    - lowercase, uppercase, numbers, special characters
  // 2. VALIDATE INPUT
  //    - at least one character type should be selected
  // 3. GENERATE PASSWORD
  // 4. RETURN PASSWORD
  

  console.log("Button was clicked!");

  return (password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);