// main.js

/***************************************
 * Toggle hamburger dropdown on mobile
 ***************************************/
function toggleMenu() {
    var dropdownMenu = document.getElementById('dropdownMenu');
    // If menu is hidden, show it; if shown, hide it
    if (dropdownMenu.style.display === 'flex') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'flex';
    }
  }
  
  /************************************************
   * Simple auto-rotating carousel for Camera Installation
   ************************************************/
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  
  // Auto-rotate every 4 seconds
  setInterval(() => {
    // Hide current slide
    slides[currentSlide].classList.remove('active');
  
    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;
  
    // Show the next slide
    slides[currentSlide].classList.add('active');
  }, 4000);