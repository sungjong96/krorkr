
$(function(){
    $(".msub").css("display", "none");
  
    $(".title").click(function () {
      $(".title").not(this).removeClass("open");
      $(".title").not(this).next().slideUp(300);
      $(this).toggleClass("open");
      $(this).next().slideToggle(300);
    });  

  });