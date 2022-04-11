// Assignment code here
var length = Number(prompt("Choose a length of at least 8 characters and no more than 128 characters")),
charType = prompt("Do you want to include lowercase, uppercase, numeric, and/or special characters?"),
password = generatePassword();
document.getElementById("display").value = password;
document.getElementById('copy-btn').addEventListener('click', copyPassword);
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var charSet = {
   lowercase: 'abcdefghijklmnopqrstuvwxyz',
   uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
   numbers: '123456789',
   symbols: '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~' 
  };
  
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var retVal = "";
  
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(math.floor(math.random()* charSet.length));
  }
  return retVal;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
