var numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var letters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// build function to generate password 
var generatePassword = function () {
  // see if button is connected
console.log("hello world")
// prompt the user for criteria 
//  *password length
var numberOfchartacters = window.prompt("Choose a number of charactrs for the password. Must be at least 8 characters and no more than 128.")
numberOfchartacters = parseInt(numberOfchartacters);
// check value for number of characters
console.log(numberOfchartacters);
if (numberOfchartacters < 8 || numberOfchartacters > 128) {
window.alert("Invalid answer try again");
generatePassword();

}else if (numberOfchartacters >= 8 || numberOfchartacters <= 128) {
  //  *lowercase, uppercase,special characters
var lowerCaseOrUper = window.prompt(`Would you like to include upper case letters. "yes" or "no"?`);
  console.log(lowerCaseOrUper);
if (lowerCaseOrUper === "yes" || lowerCaseOrUper === "no") {
    var specialCharacters = window.prompt(`would you like special characters. "yes" or "no"?`)
    console.log(specialCharacters);
  
  
  }else {
    window.alert("Invalid answer. Please try again")
    generatePassword();
  }
  }else {
    window.alert("Invalidanswer. Please try again");
    generatePassword();
}






//validate the imput
//generate password

//display generated password on page
// return domething at the end to go in to pasword variable
return "our password";
}; 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //this displays the text stored in password 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// mad extra function to ask agin if invalid answer is given in the generate pasword option
// var caseChoice = function () {
//   var lowerCaseOrUper = window.prompt(`Would you like to iclude upper case letters. "yes" or "no"`);

// if (lowerCaseOrUper === "yes" || lowerCaseOrUper === "no") {
//   // see if you giot this far
// }else {
//   window.alert("invalid amnswer")
//   caseChoice();
// }
// // check to see if case choice worked
// console.log(lowerCaseOrUper);
// };


