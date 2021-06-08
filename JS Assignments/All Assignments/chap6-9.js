//Chapter 6-9

// a = 5;
// document.write("The Value of a is "+a+"<br><br>");

// document.write("The Value of ++a is "+(++a)+"<br>");
// document.write("Now Value is "+a+"<br>");

// document.write("The Value of a++ is "+(a++)+"<br>");
// document.write("Now Value is "+(a)+"<br>");

// document.write("The Value of --a is "+(--a)+"<br>");
// document.write("Now Value is "+a+"<br>");

// document.write("The Value of a-- is "+(a--)+"<br>");
// document.write("Now Value is "+a+"<br>");

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is "+a+"<br>");
// document.write("b is "+b+"<br>");
// document.write("Answer is "+result+"<br>");

// var usrName = prompt("Enter Your Name");
// document.write("Greetings! Mr."+usrName);

// var num = +prompt("Enter Number to Print Table");
// if (num == " ") { 
//     for (var a = 1; a <= 10; a++) {
//         document.write(5 + " x " + a + " = " + 5 * a + "<br>");
//     }
// }
// else {
//     for (var a = 1; a <= 10; a++) {
//         document.write(num + " x " + a + " = " + num * a + "<br>");
//     }
// }

var a = prompt("Enter First Subject Name");
var b = prompt("Enter Second Subject Name");
var c = prompt("Enter Third Subject Name");
var aMark = +prompt("Enter First Subject Marks");
var bMark = +prompt("Enter Second Subject Marks");
var cMark = +prompt("Enter Third Subject Marks");
maxMarks = 100;
totalMaxMarks = maxMarks * 3;
totalMarksObt = aMark + bMark + cMark;
aPercent = (aMark / maxMarks) * 100;
bPercent = (bMark / maxMarks) * 100;
cPercent = (cMark / maxMarks) * 100;
percentage = (totalMarksObt / totalMaxMarks) * 100;

document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr><tr><td>"+a+"</td><td>"+maxMarks+"</td><td>"+aMark+"</td><td>"+aPercent+"</td></tr><tr><td>"+b+"</td><td>"+maxMarks+"</td><td>"+bMark+"</td><td>"+bPercent+"</td></tr><tr><td>"+c+"</td><td>"+maxMarks+"</td><td>"+cMark+"</td><td>"+cPercent+"</td></tr><tr><td></td><td>"+totalMaxMarks+"</td><td>"+totalMarksObt+"</td><td>"+percentage+"</td></tr></table >")