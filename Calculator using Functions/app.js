function userInp(a) { 
    document.getElementById("inp").value += a 
}
function total() {
    document.getElementById("inp").value = eval(document.getElementById("inp").value)
}
function clr() {
    document.getElementById("inp").value = ""
}
function sqr() {
    x = document.getElementById("inp").value
    document.getElementById("inp").value = x * x
}