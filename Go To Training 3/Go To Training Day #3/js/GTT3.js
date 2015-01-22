/**
 * Michael Gray
 * 1/22/15
 * SDI Section #3
 * GoTo Training Day #3
 */

    /*
//Check how many pears are in a fruit bowl
//Create our "Fruit bowl"
//Use an array, variable that holds multiple variables
var bowlOfFruit = ["apple", "pear", "peach", "tomato", "kiwi", "watermelon", "pear", "strawberry"];

console.log(bowlOfFruit);

//Find out how many items are in an array.
//length property - how many items in an array
//Dot Syntax - "use a period"
console.log(bowlOfFruit.length);

//Call upon a specific item in the array
console.log(bowlOfFruit[2]);

//Create a variable to hold the total number of pears
var totalNumPears = 0;

// "6" == 6 TRUE - Only looks at the value
// "6" === 6 FALSE Data type is different

//if(condition to test){Code that will run if condition is true }

/*
If Else statement
if(condition){
    Code to run if condition is true
}else{
    Code to run if condition is false
}

 */
/*
if(bowlOfFruit[0] === "peach"   ){
    //Count the fruit as a peach
    //add one to the total num of pears
    console.log("This is a pear!");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
}else{
    //Code to run if not a pear
    console.log("This fruit is not a pear.");
}

//Test the next item in the array


if(bowlOfFruit[1] === "pear"   ){
    //Count the fruit as a peach
    //add one to the total num of pears
    console.log("This is a pear!");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
}else{
    //Code to run if not a pear
    console.log("This fruit is not a pear.");
}

console.log("There are "+totalNumPears + " pear(s) in the fruit bowl.");


//Test third item in the array

if(bowlOfFruit[2] === "pear"   ){
    //Count the fruit as a peach
    //add one to the total num of pears
    console.log("This is a pear!");
    totalNumPears++; //totalNumPears = totalNumPears + 1;
}else{
    //Code to run if not a pear
    console.log("This fruit is not a pear.");
}

//Loop - repetitive code
//For LOOP
// for(initialize a variable; condition to test; increment of change){ code to run each time that the condition is true }

//Create a new variable to hold total of pears
var pearNumber = 0;

for(var i=0; i<5; i++) {

    console.log("Inside the loop");
}

//Using a for loop with an array!

for(var j=0;j<bowlOfFruit.length;j++ ){
    //Use j, as the index #
    console.log(bowlOfFruit[j]);

    //Test each fruit to see if it is a pear
    if(bowlOfFruit[j] === "pear"){
        console.log("You found a pear");
        pearNumber++;

    }else{
        //If the fruit is not a pear
        console.log("This is not a pear.");
    }

}
alert("The total number of pear(s) is " + pearNumber);
console.log("The total number of pear(s) is " + pearNumber);

//Validate prompts

var userInput = prompt("Please type in your name:");

//To make sure that it is not blank
if(userInput === ""){
    console.log("Left it blank");
    //Re-prompt the user - give them a second chance
    //to set the variable
    userInput = prompt("Please don't leave blank. What is your name?");
    console.log(userInput);
}

//Check if the use types in a number

var age = prompt("Please type in your age:");

//isNaN(to check) - tests to see if it is NOT a NUMBER
//Double negative - be careful

console.log(isNaN("cat")); //returns true
console.log(isNaN(7)); //returns false

if(isNaN(age)){
    //This means the user typed in a text string and not a number.
    //Re-prompt for a number
    age=prompt("Please only use numbers. What is your age.");
}

var userYesNo = prompt("Please type in yes or no.")

//.toLowerCase()
//Changes a text string to all lowercase
userYesNo = userYesNo.toLowerCase();
//Limit to those two choices

if(userYesNo != "yes" && userYesNo !="no"){
    userYesNo=prompt("Only type in yeas or no");
}

*/

//Givens
//Grade in percent
var grade = 53

//Test what grade
// A - 100 - 90
// B - 89 - 80
// C - 79 - 70
// D - 69 - 60
// F - 59 and under

if(grade >= 90){
    console.log("You have a " + grade + "%, which means you have earned a(n) A in the class");
}else if(grade>=80){
    console.log("You have a " + grade + "%, which means you have earned a(n) B in the class");
}else if(grade>=70){
    console.log("You have a " + grade + "%, which means you have earned a(n) C in the class");
}else if(grade>=60){
    console.log("You have a " + grade + "%, which means you have earned a(n) D in the class");
}else{
    console.log("You have a " + grade + "%, which means you have earned a(n) F in the class");
}

//Use ternary in simple if else statements

(4<7)? console.log("4 is less than 7"): console.log("7 is less than 8");
