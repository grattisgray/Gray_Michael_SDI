/*
Michael Gray
SDI Section #3
Go To Training Day 2
1/15/15
 */

//Create an age calculator

//Ask user thier name
var name = prompt("Please type in your name:");

//print out the name
console.log(name);

//Welcome the user with an alert
alert("Welcome " + name+"! Let's figure out how old you are.");

//Ask the user what year they were born
//age = current year subtract the year they were born
//Create a variable to catch the prompted answer
var yearBorn = prompt("What year were you born?");
console.log(yearBorn);

//What is the current year?
var currentYear = 2015;

var age = currentYear - yearBorn - 1;

//var result = alert(age);

console.log(name+ " you are "+age+ " years old.");
alert(name+ " you are "+age+ " years old.");

//Make it more complicated

//Ask the user how many years in the future they would like to know their age

var yearMore = prompt("How many years in the future would you like to know your age?");

console.log(yearMore);

//Calculate future age

//Plus sign does double duty (it does addition and concatenations
// Prompts only return text strings!
// 10 - returns "10"
//"3610" not equal to #3610
//Casting or parsing an integer
//Casting -Number() - is treating one variable like another temporarily
//parseInt() looks for a leading number in a text string

var futureAge = Number(age) + Number(yearMore);

console.log(futureAge);

var a = Number("40");
console.log(a);

var b = Number("40 years old");
console.log(b);
//NaN = Not a Number

var c = parseInt("40");
console.log(c);

var d = parseInt("40 years old");
console.log(d);

var f = parseInt("I am 40 years old");
console.log(f);
//Will not work because the number is not the first part of the string