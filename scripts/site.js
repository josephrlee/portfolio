$(document).ready(function() {
  // Full Screen Nav Overlay
  $('.menu-burger, .menu-items').on('click', function() {
    $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
  });

  // Image Fadein
  $('img').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });

  //Portriat Fade Out

  $(window).scroll(function() {
    $("#portrait").css("opacity", 1 - $(window).scrollTop() / 600);
  });

  // Sticky Kit
  $(".info").stick_in_parent();

  // Smooth Scrolling
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
      window.location.hash = target;
    });
  });
});
