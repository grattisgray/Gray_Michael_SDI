/**
 * Michael Gray
 * SDI Section #3
 * 1/29/15
 * Go To Training 4
 **/

//alert("alert");

//Create a file that gives us a random number between two numbers

//Ask the user for a min number

var min = prompt("Let's find a random number between two numbers. \nPlease enter a minimum number:");

//Validate that user prompt
/*
Old way of doing it was using an
if(min==="" || isNaN(min)){
    //re-prompt the user
    min = prompt("Please do not leave blank and only use numbers.");

}

 */

//isNaN() - is Not a Number - double negative
console.log(isNaN("cat")); //returns true - text strings return true
console.log(isNaN(7)); //returns false - numbers return false

//New way of validating is with While loops

while(min==="" || isNaN(min)){
    //re-prompt the user
    min = prompt("Please do not leave blank and only use numbers!\nPlease type in min value:");
}