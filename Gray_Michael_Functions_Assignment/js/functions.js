/*
 * Michael Gray
 * SDI Section #3
 * 1/26/15.
 * Functions Assignment
*/

//Calculate
/*
Check account balance
Deduct purchases
Add deposits
Calculate quarterly interest on your account
 */

//Defining of the variables
var account = prompt("What is your current account balance?");
var purchase = prompt("How much did you spend?");
var deposit = prompt("How much did you deposit?");


//arguments
var current = accountChange(account,purchase,deposit);
//parameters for calculating current account summary
function accountChange(account,purchase,deposit){
    //Return the values for account total
    return Number(account) + Number(deposit) - Number(purchase);
}
//Print out of the the account total for that day.
console.log("Your current account balance is $ " + current);

var interest = .05

