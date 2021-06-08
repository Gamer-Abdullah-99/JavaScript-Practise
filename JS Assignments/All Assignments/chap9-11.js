//Chapter 9-11

// city = prompt("Enter Name of City");
// if (city === "Karachi"){
//     alert("Welcome to city of lights")
// }

// gender = prompt("Enter Gender");
// if (gender == "male") {
//     alert("Good Morning Sir");
// }
// else if (gender == "female") {
//     alert("Good Morning Ma’am");
// }

// usrInp = prompt("Enter Light Color (red/yellow/green)");
// if (usrInp == "red") {
//     alert("Must Stop")
// }
// else if (usrInp == "yellow") {
//     alert("Ready to move")
// }
// else if (usrInp == "green") {
//     alert("Move now")
// }

// remFuel = +prompt("Enter Remaining Fuel in Car in Litres");
// if (remFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// var mark1 = +prompt("Enter Marks of First Subject Out of 100");
// var mark2 = +prompt("Enter Marks of Second Subject Out of 100");
// var mark3 = +prompt("Enter Marks of Third Subject Out of 100");
// var total = mark1 + mark2 + mark3;
// document.write("Total Marks : " + total + "<br>");
// var percentage = (total / 300) * 100;
// document.write("Percentage : " + percentage + "%" + "<br>");
// if (percentage >= 80) {
//     document.write("Grade is : A-One"+"<br>");
//     document.write("Remarks : Excellent");
// } else if (percentage >= 70) {
//     document.write("Grade is : A"+"<br>");
//     document.write("Remarks : Good");
// } else if (percentage >= 60) {
//     document.write("Grade is : B"+"<br>");
//     document.write("Remarks : You need to improve");
// } else if (percentage < 60) {
//     document.write("Failed"+"<br>");
//     document.write("Remarks : Sorry");
// }

// var rand = 5;
// var usrInp = +prompt("Guess The Number Out of 1 to 10");
// if (usrInp == rand) {
//     alert("Bingo! Correct answer");
// } else if (usrInp == rand + 1 || usrInp == rand - 1) {
//     alert("Close to the answer");
// } else {
//     alert("Wrong Guess");
// }

// usrInp = +prompt("Enter Number to Check");
// if (usrInp % 3 == 0) {
//     alert("Given Number is Divisible by 3")
// }

// usrInp = +prompt("Enter Number to Check");
// if (usrInp % 2 == 0) {
//     alert("Given Number is Even")
// }
// else if (usrInp % 2 != 0) {
//     alert("Given Number is Odd")
// }

// var temp = +prompt("Enter Temperature");
// if (temp >= 40) {
//     alert("It is too hot outside");
// } else if (temp >= 30) {
//     alert("The Weather today is Normal");
// } else if (temp >= 20) {
//     alert("Today’s Weather is cool");
// } else if (temp >= 10) {
//     alert("OMG! Today’s weather is so Cool");
// }

var firstNum = +prompt("Enter First Number");
var secondNum = +prompt("Enter Second Number");
var operator = prompt("Enter Operator (+,-,x,/,%)");
if (operator == "+") {
    alert(firstNum + secondNum);
} else if (operator == "-") {
    alert(firstNum - secondNum);
} else if (operator == "x") {
    alert(firstNum * secondNum);
} else if (operator == "/") {
    alert(firstNum / secondNum);
} else if (operator == "%") {
    alert(firstNum % secondNum);
}