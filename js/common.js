$(function(){
	$(".open--popup").click(function(){
    var target = $(this).attr("data-pop");

    $("#"+target).fadeIn(300);
    dimOpen();
  });

  $(".popBox > .close").click(function(){
    $(this).parents(".popBasic").fadeOut(300);
    dimClose();
  });

  function dimOpen(){
    $("#dim").fadeIn(300);
  }

  function dimClose(){
    $("#dim").fadeOut(300);
  }
})