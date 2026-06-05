const lazyImages = document.querySelectorAll('.swiper-slide img[loading="lazy"]'); // Get all images with the loading="lazy" attribute
function addLoadedClass(image) { // Function to add class to image parent after it is loaded
   const parentElement = image.parentElement;
   if (image.complete) { // Check if the image is loaded
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Add a load event to add the class after the image has loaded
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Loop through all the images and call the addLoadedClass function for each one

/* === */

const middleSlider = document.getElementById('middle-slider');
const bigSlider = document.getElementById('big-slider');

if (middleSlider || bigSlider) {

   if (middleSlider) {
      var swiper = new Swiper(middleSlider, {
         loop: true,
         spaceBetween: 16,
         slidesPerView: 4,
         watchSlidesProgress: true,
         preloadImages: false,
         lazy: {
            loadOnTransitionStart: false,
            loadPrewNext: false,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
      });
   }

   if (bigSlider) {
      var swiper2 = new Swiper(bigSlider, {
         loop: true,
         effect: 'fade',
         spaceBetween: 10,
         watchSlidesProgress: true,
         preloadImages: false,
         lazy: {
            loadOnTransitionStart: false,
            loadPrewNext: false,
         },
         watchSlidesProgress: true,
         watchSlidesVisibility: true,
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
         thumbs: {
            swiper: swiper,
         },
      });
   }

}