$( document ).ready(function() {
  $("#about-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".about-wrapper").offset().top - 75
      }, 300);
  });

  $("#portfolio-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".portfolio-wrapper").offset().top - 75
      }, 300);
  });

  $("#team-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".team-wrapper").offset().top - 75
      }, 300);
  });

  $("#logo-button").click(function() {
      $('html, body').animate({
          scrollTop: $('html').offset().top
      }, 300);
  });

});
