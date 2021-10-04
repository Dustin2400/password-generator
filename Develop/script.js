// Assignment code here
var passwordLength;
var lowercase;
var uppercase;
var numeric;
var specialCharacters;
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "123456890";
var specialCharactersChars = "!@#$%^&*()+='<>-./;:[]_{}|~`";
var randomChars = "";
var trialPassword = "";

function generatePassword() {
  passwordLength=null;
  var lengthConfirm = false;
  while (!lengthConfirm) {
    while (!passwordLength){
      passwordLength = window.prompt("How many characters would you like your password to be? (between 8 and 128.)"); 
      passwordLength = parseInt(passwordLength);
    }
    while (passwordLength <= 8 || passwordLength >= 128 ){
      passwordLength = window.prompt("Please pick a number between 8 and 128");
      passwordLength = parseInt(passwordLength);
    }
    lengthConfirm = window.confirm("Your password will be " + passwordLength + " characters long. Is that correct?");
    if (!lengthConfirm){
      passwordLength=null;
    }
  }
  var types = 0;
  while (types < 1) {
    types = 0;
    lowercase=false;
    uppercase=false;
    numeric=false;
    specialCharacters=false;
    var lowercaseConfirm = false;
    while (!lowercaseConfirm) {
      lowercase = window.confirm("Should your password contain lowercase letters?");
      if (lowercase) {
        lowercaseConfirm = window.confirm("Your password needs to contain lowercase letters. Is that correct?");
      } else {
        lowercaseConfirm = window.confirm("Your password does not need lowercase letters. Is that correct?");
      }
    }
    if (lowercase) {
      types ++;
    }
    var uppercaseConfirm = false;
    while (!uppercaseConfirm) {
      uppercase = window.confirm("Should your password contain uppercase letters");
      if (uppercase) {
        uppercaseConfirm = window.confirm("Your password needs to contain uppercase letters. Is that correct?");
      } else {
        uppercaseConfirm = window.confirm("Your password does not need uppercase letters. Is that correct?");
      }
    }
    if(uppercase) {
      types ++;
    }
    var numericConfirm = false;
    while (!numericConfirm) {
      numeric = window.confirm("Should your password contain numbers?")
      if (numeric) {
        numericConfirm = window.confirm("Your passwod needs to conatin a number. Is that correct?");
      } else {
        numericConfirm = window.confirm("Your password does not require numbers. Is that correct?");
      }
    }
    if (numeric) {
      types ++;
    }
    var specialCharactersConfirm = false;
    while(!specialCharactersConfirm) {
      specialCharacters = window.confirm("Should your password contain special characters?");
      if (specialCharacters) {
        specialCharactersConfirm = window.confirm("Your password requires special characters. Is that correct?");
      } else {
        specialCharactersConfirm = window.confirm("Your password does not require special characters. Is that correct?");
      }
    }
    if (specialCharacters) {
      types ++;
    }
    if (types < 2) {
      window.alert("Your password needs at least 2 types of characters: lowercase, uppercase, numeric, or special. Please select at leaset 2.");
    }
  }
  randomChars="";
  if (lowercase) {
    randomChars += lowercaseChars;
  }
  if (uppercase) {
    randomChars += uppercaseChars;
  }
  if (numeric) {
    randomChars += numericChars;
  }
  if (specialCharacters) {
    randomChars += specialCharactersChars;
  }
  for(i=0; i<passwordLength; i++) {
    trialPassword += randomChars.charAt(Math.random()*randomChars.length);
  }
return trialPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
