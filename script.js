// Get Elements //
let bg = document.getElementById('bg');
let moon = document.getElementById('moon');
let heaven = document.getElementById('heaven');
let sea = document.getElementById('sea');
let road = document.getElementById('road');
let text = document.getElementById('text');
let nav = document.getElementById('nav');
let fade = document.getElementsByClassName('fade');
let opacity = document.getElementById('iframe-container');
let changebody = document.getElementsByClassName("changebody");
//Reveal videos//



//Parallax Effect//
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    text.style.bottom = value * 2 + 'px';
    moon.style.left = value * 3 + 'px';
})

//fade Video with Hover

//Change bg-color//
function swt() {
    let swt1 = document.body;
    swt1.classList.toggle("dark-mode");
    
}


//Speed for timeout function//
let speed = 70;
let i = 0;
let getp = document.getElementById('typeP')
let txt = `Ich bin 16. Jahre alt und komme aus Oberösterreich. Derzeit besuche ich die HTL Leonding, in
    meiner Freizeit filme und fotografiere ich gerne. Außerdem mache ich gerne Sport und gehe gerne
    Skifahren.`;

function typewriter() {
    if (i < txt.length) {
        getp.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}
typewriter();