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
Calculate quarterly interest on an account.
 */

//Defining of the variables
//Get user's information about account balance
var account = prompt("What is your current account balance?");
//While loop to receive accurate totals
while (account <0){
    //account balance must be greater than 0
    account = prompt("Invalid account balance, Please re-enter your account balance.");
}

//print out of the account total before purchases, deposits, or interest.
console.log(account);

//Get user's information about spending using a for loop
for (var purchase = prompt("How much do you spend each month?"); purchase <0; purchase = prompt("Invalid purchase amount.")){

}

//Print out of the purchases made
console.log(purchase);

//Get user's information about their deposits using a for loop
for (var deposit = prompt("How much do you deposit each month?"); deposit <0; deposit = prompt("Invalid deposit amount.")){

}

//Print out of the purchases made
console.log(deposit);

//arguments
var current = accountChange(account,purchase,deposit);
//parameters for calculating current account summary
function accountChange(account,purchase,deposit){
    //Return the values for account total
    return Number(account) + Number(deposit) - Number(purchase);
}
//Print out of the the account total for that day.
console.log("Your current account balance is $" + current);

//Anonymous function that produces the user's quarterly statement.
var quarterly = function(jan,feb,mar) {
    //Defined interest per month
    var interest = .05;
    //Equation for find the first months account balance including purchases, deposits and interest
    var jan = Math.pow(interest / 4 + 1, 4) * current;
    //Equation for find the second months account balance including purchases, deposits and interest
    var feb = Math.pow(interest / 4 + 1, 4) * jan;
    //Equation for find the third months account balance including purchases, deposits and interest
    var mar = Math.pow(interest / 4 + 1, 4) * feb;
    //Get the value out of the function into the main code
    return Number(jan) + Number(feb) + Number(mar);
};

//Invoke the function to produce the user's quarterly statement.
//Quarterly + the arguments (account,purchase,deposit)
var q = quarterly(account,purchase,deposit);
//Variable to round off the dollar amount to the nearest cent.
var rounded = q.toFixed(2);
//Print and alert for the user's account total plus interest.
    console.log("Your current account balance with quarterly interest is $" + rounded + "!");
//Alerting the user to the account balance.
    alert("Your current account balance with quarterly interest is $" + rounded + "!");

/*
 Testing of the values: Did three tests to check to make sure the equation is processing properly.
 I typed in 1000 for the current account balance.
 For how must I spent for each month I put in 500, and for the total deposited each month I plugged in 500. Which game me a total of $3316.19.

 I typed in 100 for the current account balance.
 For how must I spent for each month I put in 0, and for the total deposited each month I plugged in 0. Which game me a total of $331.62.

 I typed in 50 for the current account balance.
 For how must I spent for each month I put in 10, and for the total deposited each month I plugged in 20. Which game me a total of $198.97.

 */
