// JavaScript Document
$(document).ready(function(){
	
	/* homepage two parts move */
	function leftPartClick(){
		$("#leftPart").off("click");
		$("#rightPart").off("click");
		$("#leftTitle").css("display","none");
		if(($("#rightPart").css("left")).replace(/[^-\d\.]/g, '')==$( window ).width()/2){
			$(this).css("z-index",15)
			$(this).animate({left:'0'},1500);
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
				$(this).animate({left:'10%'},1500);
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
	
	/*Set #leftContent top*/
	var navheight = $("#leftMask a").height();
	$("#leftContent").css("top",navheight);
	
	/* left part menus animation */
	//Remove poitner and show content
	$("#leftMask a").click(function(){
		$(this).css("cursor","default");	
		$("#goBack").css("display","block");
		idName = "#" + $(this).attr("id") + "Content";
		$(idName).css("display","block");
		setTimeout(function(){
			$(idName).addClass("leftContentFadeIn");
		},3300)
	})
	
	//menus animation start
	$("#education").click(function(){
		$(this).addClass("educationMove");
		$("#education span:first-child").addClass("eduBefore");
		$(this).siblings().addClass("sibilngsMove");
		setTimeout(function(){
			var leftPosition = ($(window).width()*0.9/2) - $("#education span:first-child").width() - ($("#education span:nth-child(2)").width())/2
			$("#education").css("left",leftPosition);
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
	
	/* Left close button */
	$("#goBack").click(function(){
		setTimeout(function(){
			$("#education").removeClass("educationMove");
			$("#education span:first-child").removeClass("eduBefore");
			$("#education").css("left","5%");
			$("#career").removeClass("careerMove");
			$("#career span:first-child").removeClass("carBefore");
			$("#career span:nth-child(2)").removeClass("careerAfterMove");
			$("#career").css("left","3%");
			$("#design").removeClass("designMove");
			$("#design span:nth-child(2)").removeClass("dsgAfter");
			$("#design").css("left","25%");
			$("#contact").removeClass("contactMove");
			$("#contact span:first-child").removeClass("ctcBefore");
			$("#contact span:nth-child(2)").removeClass("contactAfterMove");
			$("#contact").css("left","40%");
			$("#about").removeClass("aboutMove");
			$("#about span:nth-child(2)").removeClass("aboutAfterMove");
			$("#about").css("left","34%");
			$("#leftMask a").removeClass("sibilngsMove");
			$("#leftMask a").css("cursor","pointer");	
			$("#leftContent div").removeClass("leftContentFadeIn");
			$("#leftContent div").css("display","none");
		},1000)
		$(this).css("display","none")
		$("#leftLoading").addClass("leftLoadingFadeIn");
		setTimeout(function(){
			$("#leftLoading").removeClass("leftLoadingFadeIn");
		},3100)		
	})
	
	/*left side canvas*/
	CANVAS = { // BOO GLOBALS
  h : null, // height
  w : null, // width
  c : null, // context
  e : null  // element
};
var CTX; // shorter name

window.onload = size;
window.onresize = size;

window.rAF = (function() { 
	return  window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame   ||
	window.mozRequestAnimationFrame      ||
	function( callback ){
		window.setTimeout(callback, 1000 / 60);
	};
})();

function size() {
  window.setTimeout(function() {
    container = document.getElementById('container');
    
    CANVAS.e = document.getElementById('c');
    CANVAS.h = container.offsetHeight;
    CANVAS.w = container.offsetWidth;
    CANVAS.c = CANVAS.e.getContext('2d');
    CTX = CANVAS.c;
    
    CANVAS.e.setAttribute('height', CANVAS.h+'px');
    CANVAS.e.style.height = CANVAS.h.toString()+'px';
    CANVAS.e.setAttribute('width', CANVAS.w+'px');
    CANVAS.e.style.width = CANVAS.w.toString()+'px';
    
    init();
  },0)
}

function init() {
  CTX.clearRect(0, 0, CANVAS.w, CANVAS.h)
  window.t = 0;
  window.xb = null;
  window.yb = null;

  
  (function loop(){
    rAF(loop);
    render();
  })();
}

function render() {
  x1=xb||Math.sin(t)*( (Math.pow(Math.E, Math.cos(t))) - (2*Math.cos(4*t)) - Math.pow(Math.sin(t/12),5) );
  y1=yb||Math.cos(t)*( (Math.pow(Math.E, Math.cos(t))) - (2*Math.cos(4*t)) - Math.pow(Math.sin(t/12),5) );
  
  t+=0.02;
  x2=Math.sin(t)*( (Math.pow(Math.E, Math.cos(t))) - (2*Math.cos(4*t)) - Math.pow(Math.sin(t/12),5) );
  y2=Math.cos(t)*( (Math.pow(Math.E, Math.cos(t))) - (2*Math.cos(4*t)) - Math.pow(Math.sin(t/12),5) );
  
  c = "hsla("+(360-(Math.floor((Math.abs(x1)+Math.abs(y1)*60)).toString()))+", 70%, 60%, 1)";
  px1 = CANVAS.w/2+x1*60;
  py1 = CANVAS.h/2+y1*60;
  px2 = CANVAS.w/2+x2*60;
  py2 = CANVAS.h/2+y2*60;

  
  CTX.strokeStyle = c;
  CTX.lineWidth = 2;
  CTX.lineCap = 'square';
  CTX.beginPath();
  CTX.moveTo(px1, py1);
  CTX.lineTo(px2, py2);
  CTX.stroke();

  xb = x2;
  yb = y2;
}
	
	
})
