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