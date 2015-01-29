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

//Prompt the user for a max number
//do while loop

//It always runs at least once.
/*
do{
    code to run

} while(condition to test)

*/

do{
    //runs at least once
    //prompt the user
    var max = prompt("Please enter a maximum value:");
} while(max==="" || isNaN(max));
console.log(max);

/*
Function functionName(Parameters){
    code goes in here
}

 */

//Create a function that will give us a random number
function randomizr(minNum, maxNum){

    //Math.random() * (maxNum - minNum) + min number
    var randomNumber = Math.round( Math.random() * (maxNum - minNum) + Number(minNum));
    console.log(randomNumber);
}

//Function call - starts the function running!
//Put in the arguments to send into the function
randomizr(min,max);

