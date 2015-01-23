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
/*
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
*/

//Group 3: Multiple Conditions
//MovieTicket Price

//Define the variables and user prompt
var age = prompt("What is your age?");
var discount = 7.00 + " dollars";
var regular = 12.00 + " dollars";

//Check the age of user to determine if they would receive a discount.
if(age < 10 || age >= 55){
    console.log("The ticket price is " + discount);
//If users age is 10 or greater, but less than 55 they pay regular price.
}else if(age <= 10 || age < 55){
 console.log("The ticket price is " + regular);

}
//Define the time variable
var time = prompt("What time is does the movie start?")
//If the user purchases a ticker between the hours of 3 and 5 they receive a discount.
if (time >= 3 + "PM" || time > 5 + "PM"){
 console.log("The ticket price is " + discount);
//If the use purchases a ticket for any other time they must pay the regular price.
}else if(regular){
 console.log("The ticket price is " + regular);
}