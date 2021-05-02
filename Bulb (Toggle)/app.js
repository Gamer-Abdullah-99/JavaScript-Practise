function toggle() {
    if (document.getElementById('off').className === "show"){
        document.getElementById('off').className = "hidden"
        document.getElementById('on').className = "show"
    }
    else if (document.getElementById('on').className === "show"){
        document.getElementById('off').className = "show"
        document.getElementById('on').className = "hidden"
    }
}