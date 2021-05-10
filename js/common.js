$(function(){
  $(".boxSelect .select").click(function(){
    $(this).next("ul").toggleClass("active");
  });

  $(".boxSelect ul li a").click(function(){
    var val = $(this).html();

    $(this).parents("ul").find("li").removeClass("active");
    $(this).parent().addClass("active");
    $(this).parents(".boxSelect").children(".select").html(val);
    $(this).parents("ul").removeClass("active");
  });

  $(".popBasic").click(function(event){
    var target = $(event.target);
    
    if(target.is(".popBasic")){
      $(this).fadeOut(300);
      dimClose();
    }
  });


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