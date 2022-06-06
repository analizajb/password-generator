// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charSet = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ascii: ['!','"','#','$','%','&','(',')','*','+']
};

function generatePassword() {
  var promptUser = window.prompt('How many characters would you like your password to include?');
    // validate prompt is answered
    if (promptUser === "" || promptUser === null) {
      window.alert("Please enter a number between 8 and 128!");
      return generatePassword();
    }
  
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