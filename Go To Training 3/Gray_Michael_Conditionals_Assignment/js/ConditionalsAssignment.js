/**
 * Michael Gray
 * SDI Section #3
 * Conditionals Assignment
 * 1/22/15
 */

//Taking my wife out to dinner for a date
var oliveGarden = "yes";
//Determine if I can take my wife out to a nice restaurant
var userInput = prompt("Did you get paid today?");

//Conditional statement for which restaurant
if(userInput == oliveGarden) {
    //Being paid equals expensive dinner.
    console.log("Yes, you can take your wife out to Ruth's Chris Steak House!");

}else{
    //Not being paid equals inexpensive dinner.
    console.log("You and your wife have to settle for Olive Garden today!")
//My total
var myMeal = prompt("Please enter your meal's price");
    //Wife's total
var wifeMeal = prompt("Please enter in your wife's meal price.");
    //Meal total minus the tip.
var bill = (Number(myMeal) + Number(wifeMeal));
//print out of the total.
    console.log("The price of your meal will be " + "$" + bill);

}
//Conditional statement to determine the total for the meal
if(userInput == "yes") {
    //After Dinner you need to determine your tip for the waitress
    //My total
    var myMeal = prompt("Please enter your meal's price");
    //Wife's total
    var wifeMeal = prompt("Please enter in your wife's meal price.");
    //Meal total minus the tip.
    var bill = (Number(myMeal) + Number(wifeMeal));
//print out of the total.
    console.log("The price of your meal will be " + "$" + bill);

}
//Defining the tip percentages
//Great tip
var tipGreat = .30;
//Bad tip
var tipHorrible = .05;
//How to determine the waitress's or waitor's tip
var tipQuestion = prompt("Determine the tip amount by rating your experience on a scale of 1 to 5 (5 being great).");

//Calculations for each set of tips whether good or bad.
tipBill = (Number(bill) * Number(tipGreat));
//Calculation of bad tip
tipBad = (Number(bill) * Number(tipHorrible));
//Calculation of total with good tip
totalBill = Number(bill) + Number(tipBill);
//Calculation of total with bad tip
totalBad = Number(bill) + Number(tipBad);
//Conditional statement to calculate the bill and tip total
//code for good tip
if(tipQuestion >3){
    //Print out of good tip total bill
    console.log("The price of your meal plus tip will be " + "$ " + totalBill);
    //code for bad tip
}else if(tipQuestion <=3){
    //Print out of bad tip total bill
    console.log("The price of your meal plus tip will be " + "$" + totalBad);

}
//Decide if we want to go out for dessert after dinner

var dessert = prompt("Would you like to stop for dessert?");
//Conditional statement that determines where we go.
if(dessert == "yes" || dessert == "sure") {
    //Dairy Queen.
    //Print out of going to DQ.
    console.log("Stop at Dairy Queen for a Blizzard.");
    //Go home.
}else if(dessert == "no" || dessert == "not tonight"){
    //Print out of going home.
    console.log("Go home for the evening to relax.");
}
//Ternary statement giving the parameters of the dessert decision.
if(dessert != "yes" && dessert != "sure" && dessert != "no" && dessert != "not tonight"){
    dessert = prompt("Only answer by using one of the following: yes, sure, no, or not tonight.");

}
//Could not figure out how to get the ternary to work. I don't understand. Could you explain this better?
dessert = "yes" || "sure" || "no" || "not tonight" ? console.log("Stop at Dairy Queen for a Blizzard.") : console.log("Go home for the evening to relax.");


