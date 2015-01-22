/*
 Michael Gray
 SDI Section #3
 Conditionals Worksheet
 1/20/15
 */

//Stuff Your Face Example
/*
 //Define the variable and get user input.
 var heavyWeight = prompt("How much do you weight");

 //Determine whether an entrant qualifies based on his weight.
 if(heavyWeight >= 250){
 console.log("Your are heavy enough to compete")
 }else{
 if(heavyWeight < 250)
 console.log("You need to gain some weight.");
 }
 */
//Group 1: Expressions with Conditionals
//Last Chance for Gas
/*
 //Define the variables with User prompts.
 var carEfficiency = prompt("What is your car's MPG?");
 var carTank = prompt("How many gallons of gas does your car hold?");
 var carGasPercent = prompt("What percentage of gas do you have remaining?");
 //Variables must be in the right order to work.
 var carGallons = ((carGasPercent * .01) * carTank);
 var gasPercent = (carGasPercent / 100);



 //Determine whether a car can make it
 // Calculate how many miles you can go with your current amount of gas and whether you need more.
 if((carEfficiency * carTank) * gasPercent >= 200) {
 console.log("Yes, you can make it without stopping for gas!");
 }else{
 if((carEfficiency * carTank) * (gasPercent) <= 200)
 console.log("You only have " + carGallons + " gallons of gas in your tank, better get gas now while you can!");
 }

 */

//Group 2: Multiple Results
//Check the Login

//Define the variables with User prompts
var userName = prompt("Please enter your User Name.");
var userPassword = prompt("Please enter the your password.");
userPassword === "Gray14";

//Define the variables that are used to calculate
var userName1 = "Michael Gray";
//Check to see if both the login and password are correct. If correct welcome the user.
if(userName == "GrattisGray" && userPassword == "Gray14"){
    console.log("Weclome, " + userName1);
//If the user name is incorrect give this message.
}else if(userName != "GrattisGray") {
    alert("User not found. Try again")
//If the password is incorrect give this message.
}else if(userPassword != "Gray14"){
    alert("Password does not match our records.");
    console.log("Password does not match our records.");
}



