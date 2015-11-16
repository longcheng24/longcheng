// JavaScript Document
$(document).ready(function(){
	
	/* homepage two parts move */
	function leftPartClick(){
		$("#leftPart").off("click")
		$("#rightPart").off("click")
		if(($("#rightPart").css("left")).replace(/[^-\d\.]/g, '')==$( window ).width()/2){
			$(this).css("z-index",15)
			$(this).animate({left:'0'},1500)
		}else{
			$("#rightPart").animate({left:'50%'},800)
			$(this).css("z-index",15)
			$("#rightPart").css("z-index",10)
			$(this).animate({left:'0'},1500)
		}
		setTimeout(function(){
			$("#leftPart").on("click",leftPartClick)
			$("#rightPart").on("click",rightPartClick)
		},2100)
	}
	
	function rightPartClick(){
		$("#leftPart").off("click")
		$("#rightPart").off("click")
		if(($("#leftPart").css("left")).replace(/[^-\d\.]/g, '')<0){
				$(this).css("z-index",15)
				$(this).animate({left:'10%'},1500)
			}else{
				$("#leftPart").animate({left:'-40%'},800)
				$(this).css("z-index",15)
				$("#leftPart").css("z-index",10)
				$(this).animate({left:'10%'},1500)
		}
		setTimeout(function(){
			$("#leftPart").on("click",leftPartClick)
			$("#rightPart").on("click",rightPartClick)
		},2100)
	}
		
	$("#leftPart").on("click",leftPartClick)
	$("#rightPart").on("click",rightPartClick)
	
	/* left part menus animation */
	//Remove poitner
	$("#leftMask a").click(function(){
		$(this).css("cursor","default");	
	})
	
	$("#education").click(function(){
		$(this).addClass("educationMove");
		$("#education span:first-child").addClass("eduBefore");
		$(this).siblings().addClass("sibilngsMove");
		setTimeout(function(){
			var leftPosition = ($(window).width()*0.9/2) - $("#education span:first-child").width() - ($("#education span:nth-child(2)").width())/2
			$("#education").css("left",leftPosition)
		},2800)
	})
	
	$("#career").click(function(){
		$(this).addClass("careerMove");
		$("#career span:first-child").addClass("carBefore");
		$("#career span:nth-child(2)").addClass("careerAfterMove");
		$(this).siblings().addClass("sibilngsMove");
		setTimeout(function(){
			var leftPosition = ($(window).width()*0.9/2) - $("#career span:first-child").width() - ($("#career span:nth-child(2)").width())/2
			$("#career").css("left",leftPosition)
		},2800)
	})
	
	$("#design").click(function(){
		$(this).addClass("designMove");
		$("#design span:nth-child(2)").addClass("dsgAfter");
		$(this).siblings().addClass("sibilngsMove");
		setTimeout(function(){
			var leftPosition = ($(window).width()*0.9 - $("#design span:first-child").width())/2
			$("#design").css("left",leftPosition)
		},2800)
	})
	
	$("#contact").click(function(){
		$(this).addClass("contactMove");
		$("#contact span:first-child").addClass("ctcBefore");
		$("#contact span:nth-child(2)").addClass("contactAfterMove");
		$(this).siblings().addClass("sibilngsMove");
		setTimeout(function(){
			var leftPosition = ($(window).width()*0.9/2) - $("#contact span:first-child").width() - ($("#contact span:nth-child(2)").width())/2
			$("#contact").css("left",leftPosition)
		},2800)
	})
	
	$("#about").click(function(){
		$(this).addClass("aboutMove");
		$("#about span:nth-child(2)").addClass("aboutAfterMove");
		$(this).siblings().addClass("sibilngsMove");
		setTimeout(function(){
			$("#about span:first-child").text("about");
		},2000)
	setTimeout(function(){
			var leftPosition = ($(window).width()*0.9 - $("#about span:first-child").width())/2
			$("#about").css("left",leftPosition)
		},2800)
	})
	
	
})
