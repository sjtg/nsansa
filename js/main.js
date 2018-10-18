(function($){
  $(function(){
    $('.dropdown-trigger').dropdown();
    $('.fixed-action-btn').floatingActionButton();
    $('.scrollspy').scrollSpy();
    $('.select').formSelect();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.carousel').carousel();
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 4500); // every 2 seconds
    // $('.slider').slider();
    $('.slider').slider();
  setInterval(function() {
    $('.slider').carousel('next');
  }, 4500);
    $('.tooltipped').tooltip();
    $('html, body').animate({
      scrollTop: $(".intro").offset().top
    }, 4500);

    $('.next').click(function() {
    $('.carousel.carousel-slider').carousel('next');
  });
  $('.prev').click(function() {
    $('.carousel.carousel-slider').carousel('prev');
  });




$('.select').material_select();
  }); // end of document ready
})(jQuery); // end of jQuery name space
