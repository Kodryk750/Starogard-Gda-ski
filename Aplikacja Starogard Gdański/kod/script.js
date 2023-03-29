const toggleTheme = document.querySelector('#toggleTheme');
const body = document.querySelector('body');

function changeTheme() {
  body.classList.toggle('dark');
}

toggleTheme.addEventListener('change', changeTheme);

let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 12000); 
}

showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.querySelector('.prev').addEventListener('click', function() {
  plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', function() {
  plusSlides(1);
});