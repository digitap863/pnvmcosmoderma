 $(window).load(function() {
  $('#slider').nivoSlider({
    effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
    animSpeed: 500, // Slide transition speed
    pauseTime: 4000, // How long each slide will show
    startSlide: 0, // Set starting Slide (0 index)
    directionNav: false, // Next & Prev navigation
    controlNav: false, // 1,2,3... navigation
    controlNavThumbs: false, // Use thumbnails for Control Nav
    pauseOnHover: false // Stop animation while hovering      
  });
});