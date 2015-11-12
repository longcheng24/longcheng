// JavaScript Document
$(document).ready(function(){
	
	//homepage two parts move
	function leftPartClick(){
		$("#leftPart").off("click")
		$("#rightPart").off("click")
		if(($("#rightPart").css("left")).replace(/[^-\d\.]/g, '')==$( window ).width()/2){
			$(this).css("z-index",15)
			$(this).animate({left:'0'},2000)
		}else{
			$("#rightPart").animate({left:'50%'},1000)
			$(this).css("z-index",15)
			$("#rightPart").css("z-index",10)
			$(this).animate({left:'0'},2000)
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
				$(this).animate({left:'10%'},2000)
			}else{
				$("#leftPart").animate({left:'-40%'},1000)
				$(this).css("z-index",15)
				$("#leftPart").css("z-index",10)
				$(this).animate({left:'10%'},2000)
		}
		setTimeout(function(){
			$("#leftPart").on("click",leftPartClick)
			$("#rightPart").on("click",rightPartClick)
		},2100)
	}
		
	$("#leftPart").on("click",leftPartClick)
	$("#rightPart").on("click",rightPartClick)
	
	
	
})
