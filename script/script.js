$(function(){

    //tablist

   $('ul.tabs li').click(function(){
      var tab_id =$(this).attr('data-tab');
   
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      
      $(this).addClass('current');
      $('#'+tab_id).addClass('current');
   
   });

   // sub menu

   // m1
   $('.m1').mouseenter(function(){
      $('.m1 > .sub ').stop().slideDown(200);
      
   });
   $('.m1').mouseleave(function(){
      $('.m1 > .sub').hide();
   });

   // m2
   $('.m2').mouseenter(function(){
      $('.m2 > .sub').stop().slideDown(200);
   });
   $('.m2').mouseleave(function(){
      $('.m2 > .sub').hide();
   });

   // m3
   $('.m3').mouseenter(function(){
      $('.m3 > .sub').stop().slideDown(200);
   });
   $('.m3').mouseleave(function(){
      $('.m3 > .sub').hide();
   });

   // m4
   $('.m4').mouseenter(function(){
      $('.m4 > .sub').stop().slideDown(200);
   });
   $('.m4').mouseleave(function(){
      $('.m4 > .sub').hide();
   });

   // m5
   $('.m5').mouseenter(function(){
      $('.m5 > .sub').stop().slideDown(200);
   });
   $('.m5').mouseleave(function(){
      $('.m5 > .sub').hide();
   });

   // m6
   $('.m6').mouseenter(function(){
      $('.m6 > .sub').stop().slideDown(200);
   });
   $('.m6').mouseleave(function(){
      $('.m6 > .sub').hide();
   });


   // search

   $(".h_icon > .search").click(function(){
      $(".search_wrap").stop().slideToggle('fast');	  
      return false;   
     });


   
   
});

// 풀메뉴
$(function(){
   $('.fullmenu').click(function(){
      $('#gnbFull').slideDown(200);
   });
   $('.mclose').click(function(){
      $('#gnbFull').hide();
   });
});


//   스크롤 이미지 fade in
$(document).ready(function() {
   $(window).scroll( function(){

       $('.cont2').each( function(i){
           
           var bottom_of_element = $(this).offset().top + $(this).outerHeight()/3;
           var bottom_of_window = $(window).scrollTop() + $(window).height();
           
           if( bottom_of_window > bottom_of_element ){
               $(this).animate({'opacity':'1'},700);
           };
           
       }); 
       $('.cont3').each( function(i){
           
           var bottom_of_element = $(this).offset().top + $(this).outerHeight()/3;
           var bottom_of_window = $(window).scrollTop() + $(window).height();
           
           if( bottom_of_window > bottom_of_element ){
               $(this).animate({'opacity':'1'},700);
           };
           
       });
       $('.cont4').each( function(i){
           
         var bottom_of_element = $(this).offset().top + $(this).outerHeight()/2;
         var bottom_of_window = $(window).scrollTop() + $(window).height();
         
         if( bottom_of_window > bottom_of_element ){
             $(this).animate({'opacity':'1'},700);
         };
         
     }); 
   });
});

