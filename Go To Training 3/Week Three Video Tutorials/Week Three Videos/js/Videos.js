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

//Basic Conditional Statement Video
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


//Relational Expressions Video

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

//If and else Video
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

//Else If Video
//Choosing between three or more blocks of code
//always requires a condition
/*
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
/*
//Relational Operators Video - comparing two values (only two variables) (True or False)
equality ==  strict equality === inequality !=
greater than > / less than < / greater than or equal to >= / less than or equal to >=
("the same as" ==  =  a==b ) (a=b "changes the value of a")
strict eqaulity - uses the === operator. - "the same value" and "the same type" / 6 == "6" is true while 6 === "6" is false
=== is better than ==
inequality - uses the != operator. - "is not the same as" - a!=b

//Logical Operators Video
// What are they used for?
    They compare two TRUE or FALSE values.
    They compare pairs of relational expressions.
    The comparison results in TRUE or FALSE.
    and && =
    or operator - represent by the symbol || - requires at least ONE of the pairs to be true for the whole pair to be true
    not operator - 
 */

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!");
}

