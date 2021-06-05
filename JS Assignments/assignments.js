// Question 1
// var mark1 = +prompt("Enter Marks of First Subject Out of 100");
// var mark2 = +prompt("Enter Marks of Second Subject Out of 100");
// var mark3 = +prompt("Enter Marks of Third Subject Out of 100");

// var total = mark1 + mark2 + mark3;// document.write("Total Marks : " + total + "<br>");
// var percentage = (total / 300) * 100;// document.write("Percentage : " + percentage + "%" + "<br>");
// if (percentage >= 80) {
// document.write("Grade is : A");
// } else if (percentage >= 60) {
// document.write("Grade is : B");
// } else if (percentage >= 40) {
// document.write("Grade is : C");
// } else if (percentage < 40) { 
// document.write("Failed"); 
// }


// Question 2 
// var rand=5; 
// var usrInp=+prompt("Guess The Number Out of 1 to 10"); 
// if (usrInp==rand) { 
// alert("Bingo! Correct answer"); 
// }    else if (usrInp==rand + 1 || usrInp==rand - 1) { 
// alert("Close to the answer"); 
// } else { 
// alert("Wrong Guess");
// } 


// Question 3 
// var temp=+prompt("Enter Temperature"); 
// if (temp>= 40) {    
// alert("It is too hot outside");    
// } else if (temp >= 30) {    
// alert("The Weather today is Normal");    
// } else if (temp >= 20) {    
// alert("Today’s Weather is cool");    
// } else if (temp >= 10) {    
// alert("OMG! Today’s weather is so Cool");    
// }


// Question 4    
// var firstNum = +prompt("Enter First Number");    
// var secondNum = +prompt("Enter Second Number");    
// var operator = prompt("Enter Operator (+,-,x,/,%)");
// if (operator == "+") {    
// alert(firstNum + secondNum);    
// } else if (operator == "-") {    
// alert(firstNum - secondNum);    
// } else if (operator == "x") {    
// alert(firstNum * secondNum);    
// } else if (operator == "/") {    
// alert(firstNum / secondNum);    
// } else if (operator == "%") {    
// alert(firstNum % secondNum);    
// }


//Question 5    
// var pass = "abcdef1234";    
// var usrInp = prompt("Enter Password");
// if (usrInp = "") {    
// alert("Password Not Entered");    
// usrInp = prompt("Enter Password");    
// return usrInp;    
// }    
// if (usrInp == pass) {    
// alert("Correct! The password you entered matches the original password");    
// } else {    
// alert("Incorrect password");    
// }


//Question 6   
// var comp = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select><option>" + comp[0] + "</option><option>" + comp[1] + "</option><option>" + comp[2] + "</option><option>" + comp[3] + "</option><option>" + comp[4] + "</option><option>" + comp[5] + "</option></select>");


//Question 7    
//  var a = +prompt("Enter Number to Print Table");    
//  var b = +prompt("Enter Table Length");    
//  for (var i = 1;i <= b; i++) {
//     document.write(a + " x " + i + " = " + a*i + "<br>" )
// }