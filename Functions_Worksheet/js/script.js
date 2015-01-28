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

