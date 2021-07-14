var num = document.getElementById("number")
var usrInp = document.getElementById("usrInp")
num.innerText = 1;
usrInp.value = 1;
var a;

function add() {
    usrVal = +usrInp.value
    numVal = +num.innerText
    a = usrVal + numVal
    num.innerText = a
}
function sub() {
    usrVal = +usrInp.value
    numVal = +num.innerText
    a = numVal - usrVal
    num.innerText = a
}