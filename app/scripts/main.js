$(window).load(function () {
  var menuIcon = document.getElementById("menu-icon");

  // Smooth scrolling to anchor tag
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 650);
        return false;
      }
    }
  });

  // Mouse wheel smooth scrolling
  $('html').niceScroll({
    // Optional prop settings
  });

  skrollr.init({
    refresh: $('body')
  });

  // function openPhotoSwipe (images) {
  //   var pswpElement = document.querySelectorAll('.pswp')[0];

  //   // build items array
  //   var items = [
  //   {
  //       src: swipeImages[0][0][0],
  //       w: 600,
  //       h: 400
  //   },
  //   {
  //       src: swipeImages[0][0][1],
  //       w: 1200,
  //       h: 900
  //   }
  //   ];

  //   // define options (if needed)
  //   var options = {
  //   // optionName: 'option value'
  //   // for example:
  //   index: 0 // start at first slide
  //   };

  //   // Initializes and opens PhotoSwipe
  //   var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  //   gallery.init();

  //   }


  //   document.getElementById('btn').onclick = openPhotoSwipe;

});
