// Assignment Code
var generateBtn = document.querySelector("#generate");
var number = ['1','2','3','4','5','6','7','8','9','0']
var uppercase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':']
var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
currentIndex = 0
randomIndex = Math.floor(Math.random() * currentIndex)
//create generate password
function generatePassword(){
  console.log("here")

// function random() {
//   for (let i = returnedPassword.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i++));
//     [returnedPassword[i], returnedPassword[j]] = [returnedPassword[j], returnedPassword[i]];
//   }
  var returnedPassword = []
  var passwordLength = prompt("Enter a number between 8-128")
  var passwordList = 8
    console.log(passwordNumber)
  var passwordUppercase = confirm("Would you like to enter uppercase?")
    console.log(passwordUppercase)
  var passwordLowercase = confirm("Would you like to add a lowercase")
  var passwordSpecial = confirm("would you like to add a special character?")
  var passwordNumber = confirm ("would you like to add numbers")
  

if (passwordUppercase){
  returnedPassword = returnedPassword.concat(uppercase)
} 
if (passwordLowercase){
  returnedPassword = returnedPassword.concat(lowercase)
}
if (passwordNumber){
  returnedPassword = returnedPassword.concat(number)
}
if (passwordSpecial){
  returnedPassword = returnedPassword.concat(special)
}


let randomList = returnedPassword.sort((a, b) => 0.5 - Math.random(passwordList));
// function passwordSize(){
// for (var i=0; i<passwordList; i++) {
//   var rnum = Math.floor(Math.random() * chars.length);
//   randomList += returnedPassword
// }
// passwordSize()
// }
for ( let i = 0; i < 8; i++ ) {
  opt = Math.floor(Math.random() * passwordLength.length);
  choose = Math.floor(Math.random() * (passwordList.length));
  passwordList = randomList;
  randomList.splice(8);
}
return returnedPassword; 
console.log(returnedPassword)

}

 







//prompt to determine 8-128 characters✓
//prompt to add numbers
//prompt for uppercase
//prompt for lowercase
//prompt for special ✓

// Write password to the #password input
//check prompts true/false 
//create password from prompt
//return password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
// 

