var char = document.getElementById("character")
var bloc = document.getElementById("block")

function jumping() {
    if(character.classList != "animate")
    {
    char.classList.add("animate");
    setTimeout(function(){
        char.classList.remove("animate");
    },500);
}
}

var checkdead= setInterval (function(){
var characterTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
var blockleft = parseInt(window.getComputedStyle(bloc).getPropertyValue("left"));
if(blockleft<20 && blockleft >0 && characterTop>=230)
{
    block.style.animation="none";
    block.style.display="none";
    alert("Computer Wins")
}
},10);

