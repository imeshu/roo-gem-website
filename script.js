
const launchDate =
new Date("October 17, 2026 18:00:00")
.getTime();



setInterval(()=>{


let now =
new Date().getTime();



let distance =
launchDate-now;



let days =
Math.floor(distance/(1000*60*60*24));

let hours =
Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60));

let minutes =
Math.floor(
(distance%(1000*60*60))
/(1000*60));

let seconds =
Math.floor(
(distance%(1000*60))/1000);



document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;



},1000);




// particle generator


for(let i=0;i<80;i++){


let p=document.createElement("span");


p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.className="particle";


document.querySelector(".particles")
.appendChild(p);


}