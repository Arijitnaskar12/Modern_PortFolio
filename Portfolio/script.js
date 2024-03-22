var typed = new Typed('.Skillset', {
    strings: ['Frontend Coder','MERN Fanatic','DSA Lover',"Backend Enthusiast"],
    typeSpeed: 200,
    backspeed:200,
    loop:true
  });
  function myFunction(){
  let x=document.getElementById("navbar");
  if (x.className === "navbarChnaged") {
    x.style.display = "none";
  } else {
    x.className = "navbarChnaged";
  }
let navLink=document.getElementsByClassName("navA");
let navbar=document.getElementById("navbar");
for(let i=0;i<navLink.length;i++)
{
navLink[i].addEventListener("click",()=>{
  navbar.classList.remove("navbarChnaged")
  navbar.style.display="none";
})
}
  }