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
/*
for(var account = 10; account <= 100; account ++) {
    account = prompt("What is your current account balance?");
    console.log(account)
}
for(var purchase = 10; purchase <= 0; purchase ++) {
    purchase = prompt("How much do you spend each month?");
    console.log(purchase)
}
for(var deposit = 10; deposit <= 0; deposit ++) {
    deposit = prompt("How much do you deposit each month?");
    console.log(deposit)
}
*/


var account = prompt("What is your current account balance?");

while (account <0){
    console.log(account);
    account = prompt("Invalid account balance, Please re-enter your account balance.");
}
for (var purchase = prompt("How much do you spend each month?"); purchase <0; purchase = prompt("Invalid purchase amount.")){
    console.log(purchase);
}

for (var deposit = prompt("How much do you deposit each month?"); deposit <0; deposit = prompt("Invalid deposit amount.")){
    console.log(deposit);
}

//arguments
var current = accountChange(account,purchase,deposit);
//parameters for calculating current account summary
function accountChange(account,purchase,deposit){
    //Return the values for account total
    return Number(account) + Number(deposit) - Number(purchase);
}
//Print out of the the account total for that day.
console.log("Your current account balance is $" + current);


var quarterly = function(jan,feb,mar) {
    var interest = .05;
    var jan = Math.pow(interest / 4 + 1, 4) * current;
    var feb = Math.pow(interest / 4 + 1, 4) * jan;
    var mar = Math.pow(interest / 4 + 1, 4) * feb;

    return Number(jan) + Number(feb) + Number(mar);
}

var a = quarterly(account,purchase,deposit);
    console.log("Your current account balance with quarterly interest is $" + Math.round(a));
    alert("Your current account balance with quarterly interest is $" + Math.round(a * Math.pow(10, 2)) / Math.pow(10, 2));


/*
var compInterest = Number(current) * Number(interest) + Number(account);
*/

for(var i = 1; i > 100; i ++){
    console.log("Quarterly account balance plus interest equals $" + compInterest);
    i++;
}
