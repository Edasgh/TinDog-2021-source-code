let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("quote");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 7000); // Change image every 7 seconds

}

let listBtn=document.querySelector('.fa-list');
let nav=document.querySelector('.navbar');



listBtn.addEventListener('click',()=>{
 nav.classList.toggle('d-none');
})

  
let nxtBtn=document.querySelector('.next-btn');
let prevBtn=document.querySelector('.prev-btn');
nxtBtn.addEventListener('click',()=>{
 showSlides();
})

prevBtn.addEventListener('click',()=>{
 showSlides();
  
})