$(function(){
	$(".open--popup").click(function(){
    var target = $(this).attr("data-pop");

    

    $("#"+target).fadeIn(300);
    dimOpen()
  });

  $(".popBasic .close").click(function(){
    $(this).parents(".popBasic").fadeOut(300);
    dimClose();
  });

  $("#dim").click(function(){
    $(".popBasic").fadeOut(300);
    dimClose();
  });

  function dimOpen(){
    $("body").css("overflow", "hidden");
    $("#dim").fadeIn(300);
  }

  function dimClose(){
    $("body").css("overflow", "auto");
    $("#dim").fadeOut(300);
  }
});