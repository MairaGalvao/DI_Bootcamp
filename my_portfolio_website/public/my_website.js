// //a nav bar with Home, About me, PT, Hebrew, English
// //a background pic 
// // div with stuff written on the side
// //scrow down and then another picture of coding 
// //a list or another nav bar with options for my skills and my projects (4 projects)
// //a div with a box and a msg (Emicida)
// //icons for git, medium, and linkedin
// //below icons for about me, contact me, et
// //made with love* a msg on footer

// function creatingNavBar(){
//     let divNavBar = document.createElement('DIV')
//     divNavBar.id = ('topnav')
//     document.body.appendChild(divNavBar)
// }
// creatingNavBar()

// function creatingInfoNavBar(){
//     var navInfo = ["Home", "About", "Contact Me"];
//     navInfo.forEach(function(text) {
//     var a = document.createElement("a");
//     a.className = "navInfo";
//     a.innerHTML = text;
//     let myDiv = document.getElementById('topnav')
//     myDiv.appendChild(a);
// })}
// creatingInfoNavBar()


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}