var chem = parseInt(prompt("Enter Marks in Chemistry Out Of 100"));
var phy = parseInt(prompt("Enter Marks in Physics Out Of 100"));
var math = parseInt(prompt("Enter Marks in Mathematics Out Of 100"));
var eng = parseInt(prompt("Enter Marks in English Out Of 100"));
var pst = parseInt(prompt("Enter Marks in Pakistan Studies Out Of 100"));

total = chem + phy + math + eng + pst;
alert(total);

if(total >= 300) {
    alert("A1 Grade Obtained")
}
else if(total >= 250) {
    alert("A Grade Obtained")
}
else if(total >= 200) {
    alert("B Grade Obtained")
}
else if(total >= 150) {
    alert("C Grade Obtained")
}
else if(total < 150) {
    alert("Failed")
}