document.getElementById("y").textContent=new Date().getFullYear();
var t=document.getElementById("t"),n=document.querySelector("nav");
t.onclick=function(){t.setAttribute("aria-expanded",n.classList.toggle("open"))};
var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});