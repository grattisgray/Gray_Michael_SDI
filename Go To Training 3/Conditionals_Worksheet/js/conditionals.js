/**
 * Michael Gray
 * SDI Section #3
 * Conditionals Worksheet
 * 1/20/15
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

//Define the varibles with User prompts.
var carEfficiency = prompt("What is your car's MPG?");
var carTank = prompt("How many gallons of gas does your car hold?");
var carGasPercent = prompt("What percentage of gas do you have remaining?");
//Varibles must be in the right order to work.
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



//Group 2: Multiple Results
//Check the Login

