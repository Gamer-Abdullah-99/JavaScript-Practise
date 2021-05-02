var ans;

function add(a,b) {
    ans = a + b;
    return ans;
}
function sub(a,b) {
    ans = a - b;
    return ans;
}
function mul(a,b) {
    ans = a * b;
    return ans;
}
function div(a,b) {
    ans = a / b;
    return ans;
}

var a = +prompt("Enter First Number");
var b = +prompt("Enter Second Number");
var operation = prompt("Enter What Operation would you like to perform ? (Add/Sub/Mul/Div)");

if (operation === "Add") {
    add(a,b);
}
if (operation === "Sub") {
    sub(a,b);
}
if (operation === "Mul") {
    mul(a,b);
}
if (operation === "Div") {
    div(a,b);
}

document.write("<h1>" + operation+ " " + a + " , " + b + " = " + ans + "<h1>");