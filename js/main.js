(function($){
  $(function(){
    $('.dropdown-trigger').dropdown();
    $('.fixed-action-btn').floatingActionButton();
    $('.scrollspy').scrollSpy();
    $('.select').formSelect();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.carousel').carousel({
      // instance:prev()

      });
    $('.slider').slider();
    $('.tooltipped').tooltip();
    $('html, body').animate({
      scrollTop: $(".intro").offset().top
    }, 2000);




$('.select').material_select();
  }); // end of document ready
})(jQuery); // end of jQuery name space
