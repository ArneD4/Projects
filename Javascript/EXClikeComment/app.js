  
let control = document.getElementById('control');
let light = document.getElementById('light')

let light_control = false; // light off as default (boolean)

function lightSwitcher(){
    if(!light_control){
        light_control=true
        control.src= "img/control_on.png"
        light.src= "img/light_on.png"
    }
    else{
        light_control=false
        control.src= "img/control_off.png"
        light.src= "img/light_off.png"
    }
}

control.addEventListener('click',lightSwitcher)