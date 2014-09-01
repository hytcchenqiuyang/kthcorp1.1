$(function(){

	
	$(".btn").click(function(){
		if($("#issues").css("display")==("none"))
		{
			$("#issues").slideDown();
			$("#kth-history a.btn").css("background-position","0 -28px");
		}	
		else
		{
			$("#issues").slideUp();
			$("#kth-history a.btn").css("background-position","0 0");
		}
	})

	$(".familysite").click(function(){
		$("#familySiteBox").show();
	})
	$(".close").click(function(){
		$("#familySiteBox").hide();
	})
});




