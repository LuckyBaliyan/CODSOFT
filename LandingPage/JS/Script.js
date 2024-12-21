const tl = gsap.timeline();

let overlay=document.querySelector(".overlay");
let hero=document.querySelector("#rot1");
let hero2=document.querySelector("#rot2");
let hero3=document.querySelector("#rot3");
let img=document.getElementsByTagName("img");
let btn=document.getElementsByTagName("button");

tl.to(overlay,{
    height:0,
    duration:2,
    delay:1,
    ease:Expo.easeInOut
})

gsap.to(img,{
    scale:1,
    duration:2.2,
    delay:1,
    ease:Expo.easeInOut
})

tl.to(hero,{
    scale:1,
    duration:1.4,
    delay:0.5,
    ease:Expo.easeInOut
})

tl.to(hero2,{
    x:"-65%",
    y:"5%",
    rotate:"-11deg",
    scale:.85,
    duration:.2,
    delay:0,
    ease:Expo.easeInOut
}).to(hero3,{
    x:"65%",
    y:"5%",
    rotate:"11deg",
    scale:.85,
    duration:.2,
    delay:0,
    ease:Expo.easeInOut
})

tl.to(".container ul li",{
    y:"0%",
    opacity:1,
    duration:1,
    delay:0,
    ease:Expo.easeInOut
})

gsap.to("#sl",{
    y:"0",
    duration:1,
    opacity:1,
    delay:3.4,
    ease:Expo.easeInOut,
    stagger:0.1
})

gsap.to("#name",{
    y:"0%",
    opacity:1,
    duration:1,
    delay:4.6,
    ease:Expo.easeInOut
})

gsap.to(btn,{
    scale:1,
    duration:1,
    delay:4.6,
    ease:Expo.easeInOut
})
