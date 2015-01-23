/**
 * Michael Gray
 * SDI Section #3
 * Conditionals Assignment
 * 1/22/15
 */
//Taking my wife out to dinner for a date
var oliveGarden = "yes";

var userInput = prompt("Did you get paid today?");


if(userInput == oliveGarden) {
    console.log("Yes, you can take your wife out to Ruth's Chris Steak House!");

}else{
    console.log("You and your wife have to settle for Olive Garden today!")

}

if(userInput == "yes") {
    //After Dinner you need to determine your tip for the waitress
    var myMeal = prompt("Please enter your meal's price");
    var wifeMeal = prompt("Please enter in your wife's meal price.");
    var bill = (Number(myMeal) + Number(wifeMeal));

    console.log("The price of your meal will be " + "$" + bill);

}
var tipGreat = .30;
var tipHorrible = .05;
var tipQuestion = prompt("Determine the tip amount by rating your experience on a scale of 1 to 5 (5 being great).");

tipBill = (Number(bill) * Number(tipGreat));
tipBad = (Number(bill) * Number(tipHorrible));
totalBill = Number(bill) + Number(tipBill);
totalBad = Number(bill) + Number(tipBad);

if(tipQuestion >3){
    console.log("The price of your meal plus tip will be " + totalBill);
}else if(tipQuestion <=3){
    console.log("The price of your meal plus tip will be " + totalBad);

}

var dessert = prompt("Would you like to stop for dessert?");

if(dessert == "yes" || dessert == "sure") {
    console.log("Stop at Dairy Queen for a Blizzard.")
}else if(dessert == "no" || dessert == "not tonight"){
    console.log("Go home for the evening to relax.");
}

if(dessert != "yes" && dessert != "sure" && dessert != "no" && dessert != "not tonight"){
    dessert = prompt("Only answer by using one of the following: yes, sure, no, or not tonight.");

}

("yes" || "no") ? "Stop at Dairy Queen for a Blizzard.": "Go home for the evening to relax.";

