//Michael Gray 1-15-15 Expressions Worksheet

//Converting Dog Years to Human Years

// Defining the variables
var dogYears = 7;
var humanYears = 1;

// User input prompt and
var humanYears = prompt("To Calculate Sparky\'s Age \nPlease enter Sparky\'s age in human years:");
//Calculation formula for the conversion
var conversion = dogYears * humanYears;
//Calculated total
alert(conversion);
//print out the output of Sparky's age
console.log(conversion);

//Slice of Pie Part 1

// Definition of slices per pizza
var slicesPizza = 8;

// Needed user input of how many pizzas have been ordered.
var pizzaOrder = prompt("To Calculate the number of pizza slices per person \nPlease enter the number of pizzas ordered");

// Number of People at this party needs to be defined.
var peopleParty = prompt("Please enter the number of people at the party");

//calculation of the number of slices multiply the number of pizzas ordered by the number of slices per pizza and divide that number by the people
var slices = alert((pizzaOrder * slicesPizza)/peopleParty);

//Print out of the number of pizza slices per person at the party
console.log(slices);
//print out in the console says "undefined"; I do not know how to debug this problem.