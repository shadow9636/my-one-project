const barManu =document.getElementById("bar") ;
const slidManu =document.getElementById("slid-manu");
const closManu =document.getElementById("closmanu");
const all=document.getElementById("closmanuall");
const hedar=document.querySelector(".hed");
barManu.addEventListener("click",() =>{
    slidManu.style.left="0vh";
    slidManu.style.top="0px";
    hedar.style.width="79vw";
    hedar.style.marginLeft="20vw";

});
closManu.addEventListener("click",() =>{
    slidManu.style.left="-50vh";
    hedar.style.width="98vw";
     hedar.style.marginLeft="0vw";
});
all.addEventListener("click",() =>{
    slidManu.style.left="-50vh";
    hedar.style.width="98vw"; 
     hedar.style.marginLeft="0vw";   
});

