let menu = document.querySelectorAll(".menu-btn");
let menuClose = document.querySelector(".close-btn");
let menuHam = document.querySelector(".ham-btn");
let header = document.querySelector(".header");
let closeMobileBtn = document.querySelectorAll(".search-mobile-close-btn");
let menuMobile = document.querySelector(".search-mobile");
let dropDownGenre = document.querySelector(".dropdown-genre");
let dropDownYears = document.querySelector(".dropdown-years");
let optionsGenre = document.querySelectorAll(".option-genre");
let optionsYears = document.querySelectorAll(".option-years");
let textGenre = document.querySelector(".textBox-genre");
let textYears = document.querySelector(".textBox-years");

optionsGenre.forEach(element=>{
  element.addEventListener("click", function(e){
    let dataAttribute = element.getAttribute("data-genre");
    textGenre.setAttribute("value",dataAttribute);
    
    
  })
})
optionsYears.forEach(element=>{
  element.addEventListener("click", function(e){
    let dataAttribute = element.getAttribute("data-years");
    textYears.setAttribute("value",dataAttribute);
    
    
  })
})
dropDownGenre.addEventListener("click",function(e){
  dropDownGenre.classList.toggle("active-drop");
})
dropDownYears.addEventListener("click",function(e){
  dropDownYears.classList.toggle("active-drop");
})

menu.forEach(element => {
  element.addEventListener("click", (event)=>{
    menuHam.classList.toggle("menu-hide");
    menuClose.classList.toggle("menu-hide");
    header.classList.toggle("header-full");
  })
});

closeMobileBtn.forEach(element => {
  element.addEventListener("click", (event)=>{
    menuMobile.classList.toggle("search-mobile-full");
  })
})

dropDownGenre.addEventListener('blur', (event) => {
  dropDownGenre.classList.remove('active-drop');
});
dropDownYears.addEventListener('blur', (event) => {
  dropDownYears.classList.remove('active-drop');
});

/* Filter session */

let filterLinks = document.querySelectorAll(".filter-link");
let marker = document.querySelector(".marker");
function indicator(target){
  let size = 20;
  marker.style.left = -size/2 + target.offsetLeft + "px";
  marker.style.width = target.offsetWidth+size+"px";
}

filterLinks.forEach(element =>{
  element.addEventListener("click",(e)=>{
    indicator(e.target);
    filterLinks.forEach(element=>{
      element.classList.remove("active-filter");
    })
    element.classList.add("active-filter");
  })
})