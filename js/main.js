
$(document).ready(function(){
	$('.loading').fadeOut(1000);
},

//처음에 메뉴 숨기기
function(){
	menu = document.querySelector('.menuBox');
	menu.sytle.visibility = 'hidden';
}
);

//햄버거 버튼
$('#line-wrapper').click(function(){
   $('.line').removeClass('init');
   $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
   $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
   $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');
   
   $('.menuBox').slideToggle() /* animate({opacity:"100"},1000);*/
});

//화면 스크롤 이동
$('#Home').click(function(){
	var scrollPosition = $(".conA").offset().top;
	
	$('html, body').animate({
	scrollTop: scrollPosition
	}, 500);
	
});

$('#About').click(function(){
	var scrollPosition = $(".conB").offset().top;
	
	$('html, body').animate({
	scrollTop: scrollPosition
	}, 500);	


});


$('#Work').click(function(){
	var scrollPosition = $(".conC").offset().top;
	
	$('html, body').animate({
	scrollTop: scrollPosition
	}, 500);
	
});


$('#Contact').click(function(){
	var scrollPosition = $(".conD1").offset().top;
	
	$('html, body').animate({
	scrollTop: scrollPosition
	}, 500);	
	
});

//
  
  