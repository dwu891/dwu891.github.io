$('#menu-btn').click(function() {
   $('#mobile-nav').slideToggle(500); 
});

if($(window).width() > 600) {
   $('#mobile-nav').hide();
} 

$(window).resize(function() {
   if($(window).width() > 600) {
       $('#mobile-nav').hide();
   } 
});