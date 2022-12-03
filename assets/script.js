// Assignment code here

// Arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specChar = ['~','!','@','#','$','%','^','&','*','_','-','=','+','<','>','/','?',',','.'];

// Declare function variables
var confirmCharLength = " ";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSpecChar;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Define generatePassword() and function parameters for password
function generatePassword() {
  confirmCharLength = 
  (prompt("Confirm length of characters you would like for your password! Please choose between 8-128 characters!"));


if (confirmCharLength < 8 || confirmCharLength >128) {
  alert("Password must have 8-128 characters to continue!");
  var confirmCharLength = prompt ("Confirm length of characters you would like for your password! Please choose between 8-128 characters!");
};

// CONFIRM questions for following password parameters
  confirmLowerCase = 
    confirm("Would you like to include LOWERCASE letters in your password?");
  confirmUpperCase = 
    confirm("Would you like to include UPPERCASE letters in your password?");
  confirmNumbers = 
    confirm("Would you like to include NUMBERS (0,1,2,3...) in your password?");
  confirmSpecChar =
    confirm("Would you like to include SPECIAL CHARACTERS (@, !, $...) in your password?");

// if statement when none of the parameters are selected/confirmed

 if (confirmLowerCase ===false && confirmUpperCase===false && confirmNumbers ===false && confirmSpecChar ===false) {
  alert ("Password must include ONE parameter! Please try again!!")
  var confirmLowerCase = 
    confirm("Would you like to include LOWERCASE letters in your password?");
  var confirmUpperCase = 
    confirm("Would you like to include UPPERCASE letters in your password?");
  var confirmNumbers = 
    confirm("Would you like to include NUMBERS (0,1,2,3...) in your password?");
  var confirmSpecChar =
    confirm("Would you like to include SPECIAL CHARACTERS (@, !, $...) in your password?");
 };
// declaring variable that is LOCAL to this function
 var passwordChar = []; 

// if statement when parameters are selected/confirmed to create new arrary

 if (confirmLowerCase) {
  passwordChar = passwordChar.concat(lowerCase)
 };
if (confirmUpperCase) {
  passwordChar = passwordChar.concat(upperCase)
};
if (confirmNumbers) {
  passwordChar = passwordChar.concat (numbers)
};
if (confirmSpecChar) {
  passwordChar = passwordChar.concat (specChar)
};

// declaring variable that is LOCAL to this functions for loop
var randomPass = " ";

// for loop with math.random to create randomized password 

for (var i = 0; i < confirmCharLength; i++) {
  randomPass = randomPass + passwordChar[Math.floor(Math.random() * passwordChar.length)];
}
return randomPass;


};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(writePassword);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

