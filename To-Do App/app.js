var inp = document.getElementById("inp")
var list = document.getElementById("list")

function add() {
    var li = document.createElement("li");
    var task = document.createTextNode(inp.value);
    li.appendChild(task);

    var btn1 = document.createElement("button");
    var btn1Val = document.createTextNode('Remove');
    btn1.appendChild(btn1Val);
    btn1.setAttribute("onclick", "rmv(this)");
    li.appendChild(btn1);

    var btn2 = document.createElement("button");
    var btn2Val = document.createTextNode('Edit');
    btn2.appendChild(btn2Val);
    btn2.setAttribute("onclick", "edit(this)");
    li.appendChild(btn2);

    list.appendChild(li);
    inp.value = " ";
}

function delAll() {
    list.innerHTML = " ";
}

function rmv(a) {
    a.parentNode.remove();
}

function edit(a) {
    newVal = prompt("Enter New Task");
    f = a.parentNode.firstChild.nodeValue = newVal;
}