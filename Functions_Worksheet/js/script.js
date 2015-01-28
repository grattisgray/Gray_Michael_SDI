/**
 * Michael Gray
 * SDI Section #3
 * 1/26/15
 * Functions Worksheet
*/

//Circumference

//Calculate the circumference of a circle
//Defining of the variables for 2(3.14)radius = circumference
    //Givens
var pie = 3.14;
var radius = 8;
//circumference arguments
var circum = solveCir(pie,radius);
//circumference parameters
function solveCir(pie,radius){
//Return to get the values
    return pie*radius*2;
}
//Print out of the formula
console.log("The circumference of the circle is " + circum + "ft.");

//Stung!
//It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function

//Givens
//Defining of the variables for calculating the number of stings per pound.
//Givens
var victimWeight = 150;
var beeStings = 8.666666667
//arguments
var kill = stingsVic(beeStings,victimWeight);
//parameters for calculating bee stings
function stingsVic(beeStings,victimWeight){
    //Return the values for bee stings
    return victimWeight*beeStings;
}
//Print out of the number of bee stings needed to kills an animal.
console.log("It takes " + kill + " bee stings to kill this animal.");
