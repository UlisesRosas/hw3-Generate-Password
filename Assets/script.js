// arrays to build password
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerletters = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var uperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// empty array to combine other arrays in to 
var arr = [];
// declaring thwe variable so that it doesnt have to be declared every time the for loop runsin line 44
 var index = 0

// build function to generate password 
var generatePassword = function () {
  // see if button is connected
console.log("hello world")
// prompt the user for criteria 
//  *password length
var numberOfchartacters = window.prompt("Choose a number of charactrs for the password. Must be at least 8 characters and no more than 128.")

// check value for number of characters
console.log(numberOfchartacters)
// chacking if the user imput is correct
if (numberOfchartacters < 8 || numberOfchartacters > 128) {
// Letting user know that answer is invalid 
window.alert("Invalid answer try again");
// starting finction again to get correct imput
generatePassword();
// converting string answer in to a number value
numberOfchartacters = parseInt(numberOfchartacters);

// tests eo see if number is within this range to move on to the next prompt
}else if (numberOfchartacters >= 8 || numberOfchartacters <= 128) {
  //  * lowercase, uppercase,special characters
var hasLower = window.confirm("Do you want lower case letters?");
// when the confirm statement holds true it moves on
if (hasLower === true){
// adds the upper case lettesr in to empty array
  arr = arr.concat(lowerletters);
}
// variable that is of true value if the user selects ok
var hasUpper = window.confirm("Do you want upper case letters?");
// if variable is strue then it moves on
if(hasUpper === true){
  // adds upper case lettesr array to the empty array as well if previous condition is met
  arr = arr.concat(uperLetters);  
}
// variable that is of true value if the user selects ok
var hasNumbers = window.confirm("Do you want numbers?");
// tests to see if the user wants numbers
if(hasNumbers === true){
  // adds numbers array to whatever is already in the array in line 7
  arr = arr.concat(numbers);  
}
// variable that is of true value if the user selects ok
var hasSpecial = window.confirm("Do you want special characters?");
//  when the user clicks ok it moves on
if(hasSpecial === true){
  // adds specialCharacters array to the array in line 7
  arr = arr.concat(specialCharacters);  
}
// variable for our  rsndom string that will get generated
var randString = ""
// picking out things from the array until the number of number of characters provided by the user is reached
for (var i = 0; i <= numberOfchartacters; i++) {
//  randomizes the index based on the length of the array in line 7
  index = Math.floor(Math.random() * arr.length);
  // adding the item that was selected with the random index and adding it to random string variable each time it loops
  randString += arr[index];
  // testing to see what that string is in the console
  console.log(randString);
}
// making the function put out a result which is the string that wa built
return randString;
}

}; 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password imput in the html

function writePassword() {
  var password = generatePassword();
  // password variable is being set to whatever you return in the generatePassword functioin in this case random string
  var passwordText = document.querySelector("#password");

  //this displays the text stored in password 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



