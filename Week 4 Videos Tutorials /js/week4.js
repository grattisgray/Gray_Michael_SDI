/*
Michael Gray
SDI Section #3
1/26/15
Week 4 Tutorial Videos
Learning about functions
 */
/*
function functionName(){
 //code the function runs
}
*/
/*
function outptMsg(){
    console.log("Hello World, How are you?");
}

function rectArea(){
    var width = 40;
    var length = 50;
    var area = width * length;
    console.log(area);
}

//Function Execution

rectArea();
outptMsg();


//Variable Scope
// Arguments and Parameters

/*
funcName(argument1, argument2);
function funcName(parameter1, parameter2){
    //code the function runs
}
 */
/*
// Parameters and Arguments
rectArea(20, 30);

function rectArea(w, h){ //w=20, h=30
    var area = w * h;
    console.log(area);

}
dogYears(2);

function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky's age in dog years is " + dogYears + " years old.");
}
*/
//Functions - Returning Values
/*
var total = rectArea(20, 30);

function rectArea(w, h) { //w=20, h=30
    var area = w * h;
    return(area);//function spitting the information out
}
console.log(total);
*/
// Functions vs Procedures
// Functions return values
// Functions don't return values
/*
//This is a function
var total = rectArea(20, 30);

function rectArea(w, h) { //w=20, h=30
    var area = w * h;
    return (area);
}


//This is a procedure
var total = rectArea(20, 30);

function rectArea(w, h) { //w=20, h=30
    var area = w * h;
    console.log(area);
}
*/

//Anonymous Functions - called closures
//Are created as the code is in run
/*
var rectArea = function(w, h) { //defining the function
//code that runs the function
    var area = w * h;
    return (area);
}

var b = rectArea(20, 30); //invoking the function

console.log(b); //printing the function to the console
*/

//Loop Videos
/*
console.log("---While loops---");

var b = 10; //sets up the index

while(b>0){ //checks the index
    console.log(b + " bottles of root beer on the wall.");
    b--; //increments or decrements the index
}

console.log("---Do while loop---");

var c = 10;

do{
    console.log(c + " bottles of root beer on the wall.");
    c--; //Still runs no matter if the while is given.
}
while(c>0); //putting just 1 creates an infinity loop, not good for the computer.

*/
console.log("---For Loops---");

//for(var i = 10 -setup index; i > 0 checks the condition; i-- or i++ -decrements or increments the index){
for(var i = 10; i > 0; i--){
    console.log(i + " bottles of root beer on the wall.");
}
//shortened version of do while and while loops


console.log("---breaks in loops---");
//break - breaks the code out of the loop


for(var w = 1; w < 400; w++){
    if(w == 21) {
        break;
    }
    console.log(w + " guests in a attendance.");
}






