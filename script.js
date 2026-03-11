/* PARTICLES BACKGROUND */

particlesJS("particles-js",{

particles:{
number:{value:80},
size:{value:3},
color:{value:"#00f7ff"},
line_linked:{enable:true},
move:{speed:2}
}

});

/* SEARCH VEHICLES */

function searchVehicle(){

let input=document.getElementById("searchBar").value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let title=card.innerText.toLowerCase();

if(title.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}

/* IMAGE SLIDER */

let images=[

"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
"https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"

];

let index=0;

function nextSlide(){

index++;

if(index>=images.length){
index=0;
}

document.getElementById("slideImage").src=images[index];

}

function prevSlide(){

index--;

if(index<0){
index=images.length-1;
}

document.getElementById("slideImage").src=images[index];

}

/* AI RECOMMENDATION */

function recommendCar(){

let type=document.getElementById("carType").value;

let result="";

if(type==="speed"){
result="Recommended: Electric Hypercar ⚡";
}

else if(type==="luxury"){
result="Recommended: Luxury SUV 👑";
}

else{
result="Recommended: Off Road Beast 🚙";
}

document.getElementById("recommendation").innerText=result;

}

/* 3D CARD TILT */

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const centerX=rect.width/2;
const centerY=rect.height/2;

const rotateX=(y-centerY)/10;
const rotateY=(centerX-x)/10;

card.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});
