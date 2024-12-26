
function sendMail(){
    window.location.href="mailto:baliyanlucky85@gmail.com";
}

function downloadMyResume(){
    const link=document.createElement('a');
    link.href='files/My Resume.pdf';
    link.download='My Resume.pdf';
    link.click();
}


tl=gsap.timeline();

tl.from("section img",{
    x:-300,
    duration:.6,
    opacity:0,
    ease:"pow3.Out",
})


tl.from(".photo-container",{
    scale:7,
    opacity:0.5,
    filter:"grayscale(100%)",
    duration:1.3,
    scrollTrigger:{
        trigger:".about",
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})

tl.from(".about-sec h1",{
    y:200,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".about-sec p",
        scroller:"body",
        start:"top 55%",
        end:"top 100%",
        scrub:5,
    }
})

tl.from(".about-sec p",{
    y:500,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".about-sec p",
        scroller:"body",
        start:"top 55%",
        end:"top 100%",
        scrub:5,
    }
})

let divs=document.querySelectorAll(".wrapper div");
let serve=document.querySelector(".serve");

divs.forEach((div,index)=>{
   
    if (index === 0) {
        return;
      }

   let translatexValues=[270,500,720];
   let traslateX=translatexValues[index-1] || 300;
   gsap.to(div,{
      x:traslateX,
      duration:.1,
      ease:"pow3.InOut",
      scrollTrigger:{
        trigger:div,
        scroller:"body",
        start:"top 20%",
        end:"top 50%",
        scrub:2,
      }
   })
})



let svg=document.querySelectorAll("svg");
let skill=document.querySelector(".skill");

svg.forEach((svg)=>{
    skill.addEventListener("mouseenter",()=>{
        svg.classList.add("animate-me");
    })
})

svg.forEach((svg)=>{
    skill.addEventListener("mouseleave",()=>{
        svg.classList.remove("animate-me");
    })
})

let sub=document.querySelectorAll(".sub-bar");

sub.forEach((s)=>{
    skill.addEventListener("mouseenter",()=>{
        gsap.from(s,{
            y:100,
            opacity:0,
            duration:1,
            ease:"pow3.InOut",
        })
    })
})


gsap.from(".heading",{
    x:100,
    ease:"pow3.InOut",
    scrollTrigger:{
        trigger:".work",
        scroller:"body",
        start:"top 10%",
        end:"top -100%",
        scrub:5,
        pin:true,
    }
})

let il=document.querySelectorAll(".bottom .left .img-container");
let ir=document.querySelectorAll(".bottom .right .img-container");
let im=document.querySelectorAll(".bottom .img-container");
let pa=document.querySelectorAll(".bottom p");
let banner=document.querySelector(".banner");



gsap.to(il,{
    x:-400,
    transform:"rotate(-19deg)",
    opacity:1,
    ease:"pow3.InOut",
    stagger:0.1,
    scrollTrigger:{
        trigger:il,
        scroller:"body",
        start:"top 10%",
        end:"top -100%",
        scrub:2,
    }
})

gsap.to(ir,{
    x:400,
    transform:"rotate(19deg)",
    opacity:1,
    ease:"pow3.InOut",
    stagger:0.1,
    scrollTrigger:{
        trigger:il,
        scroller:"body",
        start:"top 10%",
        end:"top -100%",
        scrub:2,
    }
})

gsap.to(im,{
    scale:1.2,
    opacity:1,
    ease:"pow3.InOut",
    stagger:0.1,
    scrollTrigger:{
        trigger:il,
        scroller:"body",
        start:"top 10%",
        end:"top -100%",
        scrub:2,
    }
})

gsap.from(pa,{
y:100,
opacity:.3,
stagger:0.1,
ease:"pow3.InOut",
scrollTrigger:{
trigger:pa,
scroller:"body",
start:"top 70%",
end:"top 100%",
scrub:2,
}
})

gsap.from(banner,{
    scale:0,
    opacity:0,
    stagger:0.1,
    ease:"pow3.InOut",
    scrollTrigger:{
    trigger:pa,
    scroller:"body",
    start:"top 70%",
    end:"top 100%",
    scrub:2,
    }
})


