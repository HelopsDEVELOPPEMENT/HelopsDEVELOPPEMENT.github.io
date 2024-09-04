// Function to rotate the carousel
function rotateCarousel() {
    const carousel = document.querySelector('.carousel');
    const firstItem = carousel.firstElementChild;
  
    // Remove the first item and append it to the end
    carousel.removeChild(firstItem);
    carousel.appendChild(firstItem);
  }
  
  // Rotate the carousel every 5 seconds
  setInterval(rotateCarousel, 5000);
  