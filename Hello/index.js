$(document).ready(function(){


$( "#navigation > a").click(function() {
    
    var anchor = $(this).attr('data-nav');

    $('html, body').animate({
        scrollTop: $("#anchor-" + anchor).offset().top
    }, 2000);

  });

});


 /* $('#menubar ul li a').on('click',function(event){
    var $anchor = $(this);*/