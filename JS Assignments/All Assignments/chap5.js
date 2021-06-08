//Chapter 5

// a = +prompt("Enter First Number");
// b = +prompt("Enter Second Number");
// w = a + b;
// document.write("Sum of "+a+" and "+b+" is "+w);

// a = +prompt("Enter First Number");
// b = +prompt("Enter Second Number");
// w = a + b;
// document.write("Sum of "+a+" and "+b+" is "+w+"<br>");
// x = a - b;
// document.write("Difference of "+a+" and "+b+" is "+x+"<br>");
// y = a * b;
// document.write("Multiplication of "+a+" and "+b+" gives "+y+"<br>");
// z = a / b;
// document.write("Division of "+a+" and "+b+" gives "+z+"<br>");
// c = a % b;
// document.write("Modulus of "+a+" and "+b+" gives "+c+"<br>");

// var num ;
// document.write("Value after variable declaration is "+num+"<br>");
// num = 5;
// document.write("Initial Value is "+num+"<br>");
// ++num;
// document.write("Value after Increment is "+num+"<br>");
// num = num + 7;
// document.write("Value after Addition is "+num+"<br>");
// --num;
// document.write("Value after Decrement is "+num+"<br>");
// num = num%3;
// document.write("Remainder is "+num+"<br>");

// var price = 600;
// var quantity = 5;
// var totalPrice = price*quantity;
// document.write("Total cost to buy "+quantity+" tickets of a movie is "+totalPrice);

// var num = +prompt("Enter Number to Print Table");
// for(var a = 1;a <= 10;a++){
//     document.write(num+" x "+a+" = "+num*a+"<br>");
// }

// var celsius = 25;
// toFarhrenheit = (celsius * 9/5)+32;
// document.write(celsius+"<sup>0</sup>C is "+toFarhrenheit+"<sup>0</sup>F");
// document.write("<br>");
// var fahrenheit = 70;
// toCelsius = (fahrenheit - 32)* 5/9;
// document.write(fahrenheit+"<sup>0</sup>F is "+toCelsius+"<sup>0</sup>C");

// document.write("<h1>Shopping Cart</h1>"+"<br>");
// var p1 = 650;
// document.write("Price of Shirt is "+p1+"<br>");
// var q1 = 3;
// document.write("Quantity of Shirt is "+q1+"<br>");
// var p2 = 100;
// document.write("Price of Shirt is "+p2+"<br>");
// var q2 = 7;
// document.write("Price of Shirt is "+q2+"<br>");
// var dc = 100;
// document.write("Delivery Charges are "+dc+"<br>");
// var total = p1 * q1 + p2 * q2 + dc;
// document.write("<br><br>"+"Total Cost of Your Order is "+total);

// document.write("<h1>Marksheet</h1>"+"<br>");
// var totalMarks = 500;
// var marksObt = 450;
// var percentage = (marksObt/totalMarks)*100;
// document.write("Total Marks : "+totalMarks+"<br>");
// document.write("Marks Obtained : "+marksObt+"<br>");
// document.write("Percentage : "+percentage+"%"+"<br>");

// document.write("<h1>Currency in PKR</h1>"+"<br>");
// var usd = 10;
// var usdToPkr = usd*104.8;
// var sar = 25;
// var sarToPkr = sar*28;
// var total = usdToPkr + sarToPkr;
// document.write("Total Money in PKR : "+total);

// var var a = 5;
// var var ans = ((a + 5)* 10)/2;
// document.write("Answer is "+ans);

// document.write("<h1>Age Calculator</h1>"+"<br>");
// var currentYear = 2021;
// document.write("Current Year : "+currentYear+"<br>");
// var birthYear = 2000;
// document.write("Birth Year : "+birthYear+"<br>");
// var age = currentYear - birthYear;
// document.write("Your Age is  : "+age+"<br>");

// document.write("<h1>The Geometrizer</h1>"+"<br>");
// var r = 20;
// document.write("Radius of Circle is "+r+"<br>")
// var circumference = 2*3.142*r;
// document.write("Circumference of Circle is "+circumference+"<br>")
// var area = 3.142*r*r;
// document.write("Area of Circle is "+area+"<br>")

document.write("<h1>The Lifetime Supply Calculator</h1>"+"<br>");
var snack = "Oreo";
document.write("Favourite Snack is "+snack+"<br>");
var age = 21;
document.write("Current Age is "+age+"<br>");
var expAge = 90;
document.write("Expected Age is "+expAge+"<br>");
var req = 5;
document.write("Daily Requirement is "+req+"<br>");
var remAge = expAge - age;
var snackReq = remAge * req;
document.write("You will need "+snackReq+" "+snack+" to last you until ripe old age of "+expAge);