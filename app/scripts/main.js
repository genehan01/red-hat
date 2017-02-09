$(window).load(function () {
  var bodyDOM = $('body');
  var menuIcon = $('#menu-icon');
  var mobileMenuUnderlay = $('#mobile-menu-underlay');
  var mobileCloseBtn = $('#mobile-close-btn');

  menuIcon.add(mobileMenuUnderlay).add(mobileCloseBtn).on('click', toggleMobileMenu);

  function toggleMobileMenu () {
    bodyDOM.toggleClass('mobile-open');
  }

  /*
   * Replace all SVG images with inline SVG
   */
 /* jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
              $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }

          // Replace image with new SVG
          $img.replaceWith($svg);

      }, 'xml');

  });*/

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

  // Parallax Library Init
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
