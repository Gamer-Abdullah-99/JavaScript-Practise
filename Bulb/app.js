function off() {
    document.getElementById('bulb').src = "./bulb.jpg"
}
function on() {
    document.getElementById('bulb').src = "./glowing-bulb.jpg"
}

function toggle() {
    if (document.getElementById("toggle-btn").innerHTML === 'Click To Turn On') {
        document.getElementById('toggle-bulb').src = "./glowing-bulb.jpg"
        document.getElementById("toggle-btn").innerHTML = 'Click To Turn Off'
    }
    else if(document.getElementById('toggle-btn').innerHTML === "Click To Turn Off") {
        document.getElementById('toggle-bulb').src = "./bulb.jpg"
        document.getElementById("toggle-btn").innerHTML = 'Click To Turn On'
    }
}