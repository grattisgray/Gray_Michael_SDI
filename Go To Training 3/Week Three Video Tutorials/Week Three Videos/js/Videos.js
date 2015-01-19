/**
 * Micahel Gray
 * SDI Section #3
 * Week Three Videos
 * 1/19/15
 */

//if(sunny) {
 //   goToBeach();
  //  if(warmWater){
  //      wearNewSuit();
 //   }
//}else{
//    goToTheMovies();
//}

//Basic Conditional Statement
//Decision - making for the Machine

//Conditonal Logic
/*
var oldEnough = true;

//If the child is old enough, print to the console "you can ride!"
if(oldEnough){
  //code performed if condition is true
    console.log("You can ride the coaster!");
}
console.log("What comes after.");


//Relational Expressions

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}
*/

//If and else
//Choosing between two blocks of code
/*
var kidHeight = 36;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight >= minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else{
    //code performed if condition is false
    console.log("Sorry kid, you've got some growing to do first!");
}
/*
 */

//Else If
//Choosing between three or more blocks of code
//always requires a condition

var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight >= minHeight){
    //you can ride!
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //you can ride with a parent present
    console.log("You can ride, but only with a parent present.");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}
