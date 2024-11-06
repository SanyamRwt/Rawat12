let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})

let typingEffect = new Typed("#text",{
    strings:["Sanyam Rawat","Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDealy: 1000
})