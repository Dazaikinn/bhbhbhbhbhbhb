var character = document.getElementById("character");

document.addEventListener("click",  jump);
 
function jump () {
    if(character.classList.contains("animate") == true) {
        return;
    } else {
        character.classList.add("animate");
        setTimeout(removeJump, 300); /*скорость прыжка*/ 
    }
} 


function removeJump () {
    character.classList.remove("animate");
}

let isAlive = setInterval (function () {
    let аниме = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    let призрак = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (призрак < 50 && призрак > 0 && аниме >= 500){
        alert('Game Over')
    }
},10)






































