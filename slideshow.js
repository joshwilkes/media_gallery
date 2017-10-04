// var slideIndex = 1;

// var slides = document.getElementsByClassName("slide");
// var indicator = document.getElementsByClassName("indicator");

// function plusSlide() {
// 	displaySlide(slideIndex++);
// }

// function prevSlide() {
// 	if(slideIndex > 1) {
// 		displaySlide(slideIndex--);
// 	} else {
// 		displaySlide(slides.length);
// 	}
// }

// function currentSlide(n) {
// 	displaySlide(slideIndex = n);
// }

// function displaySlide(n) {
// 	var i;

// 	if(n > slides.length) {
// 		slideIndex = 1;
// 	}
// 	if(n < 1) {
// 		slideIndex = slides.length;
// 	}

// 	for(i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}

// 	for(i = 0; i < indicator.length; i++) {
// 		indicator[i].className = indicator[i].className.replace(" active", "");
// 	}

// 	slides[slideIndex-1].style.display = "block";
// 	indicator[slideIndex-1].className += " active";

// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var indicator = document.getElementsByClassName("indicator");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < indicator.length; i++) {
      indicator[i].className = indicator[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  indicator[slideIndex-1].className += " active";
}
