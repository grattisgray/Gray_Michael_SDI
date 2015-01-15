// Michael Gray 1/15/15 Expressions Assignment

//Calculating the Average of a grade


//Quiz Scores and their raw score

var quizGrade1 = prompt("Please enter each quiz grade individually");//each with it's own prompt

var quizGrade2 = prompt("Please enter then next quiz grade");

var quizGrade3 = prompt("Please enter then next quiz grade");

var quizScore = Number(quizGrade1) + Number(quizGrade2) + Number(quizGrade3);//quiz total expression

//alert(quizScore);

var quizAvg = quizScore;//quiz totals

var quizAvg = (quizScore / 3);//must calculate the quiz average (25% of the grade)


//Test Scores and their raw score
var testGrade1 = prompt("Please enter each test grade individually");//each with it's own prompt

var testGrade2 = prompt("Please enter then next test grade");

var testGrade3 = prompt("Please enter then next test grade");

var testScore = Number(testGrade1) + Number(testGrade2) + Number(testGrade3);//test total expression

//alert(testScore);

//Test Average

var testAvg = ((testScore / 3) * 3);//tests are 75% of the grade

//var result = "The Test Average" + testAvg;

var finalAvg = ((testAvg + quizAvg) / 4) //Must multiply by 4 because test are 75% of the grade

var result = "Grade average is" + " " + finalAvg; //given grade result

alert(result);//grade average given

console.log(result);//print out of the grade average
