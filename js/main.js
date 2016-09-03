$('#menu-btn').click(function() {
   $('#mobile-nav').slideToggle(500); 
});

$(window).scroll(function() {
    if($(window).scrollTop() > 0 && $('#mobile-nav').is(":visible"))
    {
        $('#mobile-nav').hide(200);
    }
});

if($(window).width() > 600) {
   $('#mobile-nav').hide();
} 

$(window).resize(function() {
   if($(window).width() > 600) {
       $('#mobile-nav').hide();
   } 
});