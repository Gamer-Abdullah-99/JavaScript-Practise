//Chapter 12-13

// a = +prompt("Enter First Number");
// b = +prompt("Enter Second Number");
// if (a > b) {
//     alert(a+" is greater than "+b);
// }
// else if (b > a) {
//     alert(b+" is greater than "+a);
// }
// else if (a = b) {
//     alert(a+" is equal to "+b);
// }

// a = +prompt("Enter Number");
// if (a == 0){
//     alert("Number is 0")
// }
// else if (a < 0){
//     alert("Number is Negative")
// }
// else if (a > 0){
//     alert("Number is Positive")
// }

// usrInp = prompt("Enter Letter");
// if (usrInp == "a" ||usrInp == "e" ||usrInp == "i" ||usrInp == "o" ||usrInp == "u"){
//     alert("True")
// }
// else {
//     alert("False")
// }

// var pass = "abcdef1234";
// var usrInp = prompt("Enter Password");
// if (usrInp == pass) {
//     alert("Correct! The password you entered matches the original password");
// } 
// else if(usrInp === "") {
//     alert("No Passsword Entered")
// }
// else {
//     alert("Incorrect password");
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

usrInpt = prompt("Enter Time in 24 hrs Format (0700)")
if (usrInpt.slice(0,2) == 12) {
    alert("Time is 12:"+usrInpt.slice(2,4)+" PM")
}
else if (usrInpt.slice(0,2) == 00) {
    alert("Time is 00:"+usrInpt.slice(2,4)+" AM")
}
else if (usrInpt.slice(0,2) < 12) {
    alert("Time is "+usrInpt.slice(0,2)+":"+usrInpt.slice(2,4)+" AM")
}
else if (usrInpt.slice(0,2) > 12) {
    time = usrInpt.slice(0,2) - 12;
    alert("Time is "+time+":"+usrInpt.slice(2,4)+" PM")
}