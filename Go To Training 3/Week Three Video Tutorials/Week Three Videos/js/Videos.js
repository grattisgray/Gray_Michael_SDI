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
//Choosing between two

var kidHeight = 48;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height

if(kidHeight >= minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}
if(kidHeight < minHeight){
    console.log("Sorry kid, you've got some growing to do first!");
}