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