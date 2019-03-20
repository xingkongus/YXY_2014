$(document).ready(function() {
	moreclick();
	closeshade();
	infocenter();
});
function infocenter()
{
	var width = $('#ready_one').width();

	var height = $('#ready_one').height();
	console.log(height);
	var infoWidth = $('.viaste_info').width();
	console.log(infoWidth);
	var infoHeight = $('.viaste_info').height();
	console.log(infoHeight);
    var leftInfo = (width-infoWidth)/2;
    var heightInfo = (height-infoHeight)/2;
    $('.viaste_info').css("top",heightInfo+"px");
    $('.viaste_info').css("left",leftInfo +"px");
    $('#jishu').css("top","80px");
}
function moreclick()
{
	$('#t3LPWmore_1').click(function()
	{
		showshade();
		showyunyin();
	});
	$('#t3LPWmore_2').click(function()
	{
		showshade();
		showzuce();
	});
	$('#t3LPWmore_3').click(function()
	{
		showshade();
		showjishu();
	});
	$('#t3LPWmore_4').click(function()
	{
		showshade();
		showchuanmei();
	});
}

function showshade()
{
	$('#viaste_shade').css("display","block")
	$("#viaste_shade").animate({opacity:0.85},1000);
};

function hideshade()
{
	$("#zuce").animate({opacity:0.0},500);
	$("#yunyin").animate({opacity:0.0},500);
	$("#jishu").animate({opacity:0.0},500);
	$("#chuanmei").animate({opacity:0.0},500);
	$("#viaste_shade").animate({opacity:0.0},800);
	if ($("#viaste_shade").css("opacity") <= 0.2){
		$('#zuce').css("display","none");
		$('#yunyin').css("display","none");
		$('#jishu').css("display","none");
		$('#chuanmei').css("display","none");
		$('#viaste_shade').css("display","none");	
	}
	
};
function closeshade()
{
	$('#viaste_shade').click(function(){
		hideshade();
		
	});
	$('.viaste_info').click(function(){
		hideshade();
	});
};

function showzuce()
{
	$('#zuce').css("display","block");
	$("#zuce").animate({opacity:1},1200);
}
function showyunyin()
{
	$('#yunyin').css("display","block");
	$("#yunyin").animate({opacity:1},1200);
}
function showjishu()
{
	$('#jishu').css("display","block");
	$("#jishu").animate({opacity:1},1500);
}
function showchuanmei()
{
	$('#chuanmei').css("display","block");
	$("#chuanmei").animate({opacity:1},1200);
}