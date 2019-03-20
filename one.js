// JavaScript Document
$(document).ready(function() {
	var width_window=$(window).width();
//左右滚动赋值
	$(".ready_one").css("width",width_window);
	$(".ready_one ul").css("width",width_window*4);
	$(".ready_one ul li").css("width",width_window);
//---------------------------------------------------
//当页面加载完后自动点击第二张图的第一个按钮
	$("#input_1").css("background-color","#008ae2");
	$("#input_1").css("color",'white').css("font-size",'14px').text("活动平台");
//----------------------------------------------------------------------------
//当页面加载完后自动点击第三张图的第一个按钮
	$("#input_three_1").css("background-color","#008ae2");
	$("#input_three_1").css("color",'white').css("font-size",'14px').text("产品运营"); 
//---------------------------------------------------------------------------------
//顶部的进度条在第一张图为隐藏
	$('.cen_benner').hide();
//------------------------------
//第二张图产生位移而赋值
var PY=200;
$(".two_1").css("left",PY+200);
$(".two_2").css("left",PY+200);
$(".two_4").css("right",-337);
$("#two_bg1").css("right",402-PY*2);
$("#two_bg2").css("right",595-PY*2);
$("#two_bg3").css("left",612+PY);
$("#two_bg4").css("left",443+PY);
$("#two_bg5").css("right",212-424);
$("#two_bg6").css("right",370-540);
$(".two_4_left_png_ready").css("left",500+PY);

//第三张图产生位移而赋值
						$(".three_1").css("left",PY+150);
						$(".three_2").css("left",PY+100);
						$(".three_3").css("right",165-PY);
						$(".three_4").css("left",520+PY);
						$(".three_5").css("right",130-PY);
						$(".three_6").css("left",614+PY);
						$(".three_7").css("left",450+PY);
						$(".three_8").css("right",368-PY-200);
						$(".CP_one").css("left",517+PY);

//第四张图产生位移赋值
$(".four_1").css("left",400);
$(".four_2").css("right",-20-380);
$(".four_3").css("left",8+400);
$(".four_4").css("left",150+400);
$(".four_5").css("left",236+400);
$(".four_6").css("left",190+400);
$(".four_7").css("left",157+400);
$(".four_10").css("right",455-400);
$(".four_11").css("right",-122);
$(".four_12").css("right",398-400);
$(".four_13").css("right",456-400);
$(".four_14").css("left",420+400);
$(".four_15").css("left",256+400);
$(".four_16").css("left",379+400);


//点击微信页面全黑的赋值
	var height_allH=$(".end").offset().top;
	$(".weixin_allH").css("height",height_allH+117);
//-------------------------------------------------
	$(".four_7").hide();//隐藏提早填表
     
//浏览器尺寸变换问题
$(window).resize(function() {
    var width_window=$(window).width();
	$(".ready_one").css("width",width_window);
	$(".ready_one ul").css("width",width_window*4);
	$(".ready_one ul li").css("width",width_window);
	var width_li=$(".ready_one ul li").width();
});
//-------------------------------------------------------------

	
/*
 1.左右方向键控制滚动
 2.顶部进度条左右方向键适应页面显示和隐藏
*/
//定义变量控制页面的位置
var one_len=$(".ready_one ul li").length;//总页面的长度	
var index=0;//控制页面的像素
var indexs=1;//表示当前页面的数字
/*
var gl_key=$("#one_1li").offset().left;
if(gl_key<=0&&gl_key>-width_window){indexs=1};
if(gl_key<=-width_window&&gl_key>-width_window*2){indexs=2};
if(gl_key<=-width_window*2&&gl_key>-width_window*3){indexs=3};
if(gl_key<=-width_window*3){indexs=4};
*/

//左方向键表判断函数
function Judge_Left(){
	if(indexs==1)
				{	
			
				}
				
			else if(indexs==2)					
				{
					$('.cen_benner').fadeOut(800);
				//为从2到1的第二张图赋值
					$(".two_1").delay(200).animate({"left":PY+200},500);
					$(".two_2").delay(200).animate({"left":PY+200},500);
					$(".two_4").delay(200).animate({"right":-337},500);
					$("#two_bg1").delay(200).animate({"right":402-PY*2},500);
					$("#two_bg2").delay(200).animate({"right":595-PY*2},500);
					$("#two_bg3").delay(200).animate({"left":612+PY},500);
					$("#two_bg4").delay(200).animate({"left":443+PY},500);
					$("#two_bg5").delay(200).animate({"right":212-424},500);
					$("#two_bg6").delay(200).animate({"right":370-540},500);	
					$(".two_4_left_png_ready").delay(200).animate({"left":500+PY},500);
					
				}else if(indexs==3){
					//为第三张图赋初值
						$(".three_1").animate({"left":PY+150},500);
						$(".three_2").animate({"left":PY+100},500);
						$(".three_3").animate({"right":165-PY},500);
						$(".three_4").animate({"left":520+PY},500);
						$(".three_5").animate({"right":130-PY},500);
						$(".three_6").animate({"left":614+PY},500);
						$(".three_7").animate({"left":450+PY},500);
						$(".three_8").animate({"right":368-PY-200},500);
						$(".CP_one").animate({"left":517+PY},500);
						
						//第二张图从3往2移动
						$(".two_1").stop(true,false).delay(50).animate({"left":0},1100);
						$(".two_2").stop(true,false).delay(10).animate({"left":0},1100);
						$(".two_4").delay(180).stop(true,false).animate({"right":137},1100);
						$("#two_bg1").delay(200).stop(true,false).animate({"right":420},1250);
						$("#two_bg2").delay(200).stop(true,false).animate({"right":595},1250);
						$("#two_bg3").delay(200).stop(true,false).animate({"left":412},1250);
						$("#two_bg4").delay(200).stop(true,false).animate({"left":243},1250);
						$("#two_bg5").delay(200).stop(true,false).animate({"right":212},1250);
						$("#two_bg6").delay(200).stop(true,false).animate({"right":370},1250);
						$(".two_4_left_png_ready").delay(180).stop(true,false).animate({"left":300},1000);
}else{	
					//为第四张图赋初值
					$(".four_1").animate({"left":400},500);
					$(".four_2").animate({"right":-20-380},500);
					$(".four_3").animate({"left":8+400},500);
					$(".four_4").animate({"left":150+400},500);
					$(".four_5").animate({"left":236+400},500);
					$(".four_6").animate({"left":190+400},500);
					$(".four_7").animate({"left":157+400},500);
					$(".four_10").animate({"right":455-400},500);
					$(".four_11").animate({"right":-122},500);
					$(".four_12").animate({"right":398-400},500);
					$(".four_13").animate({"right":456-400},500);
					$(".four_14").animate({"left":420+400},500);
					$(".four_15").animate({"left":256+400},500);
					$(".four_16").animate({"left":379+400},500);
					
					//第三张图从右往左移动
					$(".three_1").delay(360).stop(true,false).animate({"left":0},1050);
					$(".three_2").delay(320).stop(true,false).animate({"left":0},1050);
					$(".three_3").delay(280).stop(true,false).animate({"right":165},1050);
					$(".three_4").delay(230).stop(true,false).animate({"left":320},1050);
					$(".three_5").delay(230).stop(true,false).animate({"right":330},1250);
					$(".three_6").delay(230).stop(true,false).animate({"left":414},1250);
					$(".three_7").delay(230).stop(true,false).animate({"left":250},1250);
					$(".three_8").delay(230).stop(true,false).animate({"right":368},1250);
					$(".CP_one").delay(230).stop(true,false).animate({"left":417},1050);
	
}
	
	}
//右方向键表判断函数
function Judge_right(){
					$(".one_1").stop(true,false).animate({"left":-400},1100);
					$(".one_2").stop(true,false).animate({"left":-400},1100);
					$(".one_3").stop(true,false).animate({"left":-400},1100);
					$(".one_4").stop(true,false).animate({"left":-512},1100);
		if(indexs==2){
						$(".two_1").stop(true,false).delay(50).animate({"left":0},1150);
						$(".two_2").stop(true,false).delay(10).animate({"left":0},1100);
						$(".two_4").stop(true,false).animate({"right":137},1100);
						$("#two_bg1").stop(true,false).animate({"right":420},1250);
						$("#two_bg2").stop(true,false).animate({"right":595},1250);
						$("#two_bg3").stop(true,false).animate({"left":412},1250);
						$("#two_bg4").stop(true,false).animate({"left":243},1250);
						$("#two_bg5").stop(true,false).animate({"right":212},1250);
						$("#two_bg6").stop(true,false).animate({"right":370},1250);
						$(".two_4_left_png_ready").stop(true,false).animate({"left":300},1100);
						
						
						}	
				else if(indexs==3){
					$(".three_1").stop(true,false).animate({"left":0},1050);
					$(".three_2").stop(true,false).animate({"left":0},1050);
					$(".three_3").stop(true,false).animate({"right":165},1050);
					$(".three_4").stop(true,false).animate({"left":320},1050);
					$(".three_5").stop(true,false).animate({"right":330},1250);
					$(".three_6").stop(true,false).animate({"left":414},1250);
					$(".three_7").stop(true,false).animate({"left":250},1250);
					$(".three_8").stop(true,false).animate({"right":368},1250);
					$(".CP_one").stop(true,false).animate({"left":417},1050);
//为从右到左第二张图赋值--------------------------------------------------------------------		
					$(".two_1").delay(200).animate({"left":-PY-200},500);
					$(".two_2").delay(200).animate({"left":-PY-200},500);
					$(".two_4").delay(200).animate({"right":537},500);
					$("#two_bg1").delay(200).animate({"right":420+PY*2},500);
					$("#two_bg2").delay(200).animate({"right":595+PY*2},500);
					$("#two_bg3").delay(200).animate({"left":412-400},500);
					$("#two_bg4").delay(200).animate({"left":-243},500);
					$("#two_bg5").delay(200).animate({"right":212+400},500);
					$("#two_bg6").delay(200).animate({"right":370+400},500);	
					$(".two_4_left_png_ready").animate({"left":300-400},500);
				
//-----------------------------------------------------------------------------------------------------------						
					
				}else {
						$(".four_1").delay(0).stop(true,false).animate({"left":0},1250);
						$(".four_2").delay(0).stop(true,false).animate({"right":20},1250);
						$(".four_3").delay(0).stop(true,false).animate({"left":8},1250);
						$(".four_4").delay(50).stop(true,false).animate({"left":150},1350);
						$(".four_5").delay(100).stop(true,false).animate({"left":236},1350);
						$(".four_6").delay(100).stop(true,false).animate({"left":190},1350);
						$(".four_7").delay(100).stop(true,false).animate({"left":157},1350);
						$(".four_10").delay(150).stop(true,false).animate({"right":455},1380);
						$(".four_11").delay(150).stop(true,false).animate({"right":278},1380);
						$(".four_12").delay(150).stop(true,false).animate({"right":398},1380);
						$(".four_13").delay(150).stop(true,false).animate({"right":456},1380);
						$(".four_14").delay(150).stop(true,false).animate({"left":420},1380);
						$(".four_15").delay(150).stop(true,false).animate({"left":256},1380);
						$(".four_16").delay(150).stop(true,false).animate({"left":379},1380);
						
						$(".three_1").animate({"left":-PY-200},500);
						$(".three_2").animate({"left":-PY-200},500);
						$(".three_3").animate({"right":165+PY},500);
						$(".three_4").animate({"left":320-PY},500);
						$(".three_5").animate({"right":530+PY},500);
						$(".three_6").animate({"left":214-PY},500);
						$(".three_7").animate({"left":50-PY},500);
						$(".three_8").animate({"right":568+PY},500);
						$(".CP_one").animate({"left":417-400},500);
						$("#two_bg1").css("right",520+PY);
						$("#two_bg2").css("right",595+PY);
						$("#two_bg3").css("left",412-PY);
						$("#two_bg4").css("left",243-PY);
						$("#two_bg5").css("right",212+PY);
						$("#two_bg6").css("right",370+PY);
						$(".two_4_left_png_ready").css("left",300-PY);
					}
	
	
	}
//左右方向键
//将控制封装成一个函数方便下面解除事件和绑定事件
window.onload=contron;
function contron(){
$(document).keyup(function(e){
	var div=$(".ready_one ul");   
	var id=	e.keyCode;
		switch(id){
		case 37:{
				Judge_Left();

				if(indexs==1)
				{	
					return false;
				}
				
				indexs-=1;
				index=index+width_window;
				$(".ready_one ul li").stop(true,false).animate({'left':index},700);
				if(indexs==1){
//第一张图位移
					$(".one_1").animate({"left":48},1100);
					$(".one_2").delay(50).animate({"left":100},1100);
					$(".one_3").delay(80).animate({"left":112},1100);
					$(".one_4").stop(true,false).animate({"left":-112},1100);
							}
		break;}
		case 39:{		
				if(indexs==one_len){return false;}
				index=index-width_window;
					$(".ready_one ul li").stop(true,false).animate({'left':index},700);
					$('.cen_benner').fadeIn(500);//进度条的显示
					indexs+=1	
					Judge_right();//判断函数
}
	;break;}
//进度条适应页面而变化的效果
if(indexs==1){
	 $(".cb_left_two").css("width",17);
}else if(indexs==2){
	 $(".cb_left_two").css("width",111);
	}
	else if(indexs==3){
	  $(".cb_left_two").css("width",212);		
}else {
		$(".cb_left_two").css("width",311);		
		}  
});
};

//进度条上点击收听微博效果
$(".CB_right_1_onea").click(function(){
		$('.CB_right_1_onea').css("color","#006cc9");
		$('.CB_right_1_onea').css("font-weight","700");
		$(".CB_right_1_twoa").removeAttr("style");
	})
//进度条上点击星空微信的效果
$(".CB_right_1_twoa").click(function(){
		$('.CB_right_1_twoa').css("color","#006cc9");
		$('.CB_right_1_twoa').css("font-weight","700");
		$(".CB_right_1_onea").removeAttr("style");
		$(".weixin_nei").show();
		$(".weixin_allH").show();
//当黑幕出现用户不能控制任何东西。
		$(document).unbind("keyup");
		
	})
//微信页面中点击交叉效果
$(".weixin_right").click(function(){
	$(".weixin_nei").hide();
	$(".weixin_allH").hide();
	$(".CB_right_1_twoa").removeAttr("style");
	$(document).bind("keyup",contron());
	});
//-------------------------------------------------------
/*
	1.第二张产品图滚动效果
	2.第二张图的按钮效果

*/
$(document).ready(function() {
		var add=$(".two_4_left_png_ready").height();
		$('.two_4_left_png_all').css('height',add*5);
		var index_two=0;
			indexs_two=1;
	$("#input_1").click(function(){
		$("#input_1").css("background-color","#008ae2");
		$("#input_1").css("color",'white').css("font-size",'14px').text("活动平台"); 
		$("#input_2").removeAttr("style"); 
		$("#input_2").text("02");
		$("#input_3").removeAttr("style"); 
		$("#input_3").text("03"); 
		$("#input_4").removeAttr("style"); 
		$("#input_4").text("04"); 
		$("#input_5").removeAttr("style"); 
		$("#input_5").text("05");
		$(".two_4_left_png").stop(true,false).animate({top:0},500);
		
		
    });
  	$("#input_2").click(function() {
		$("#input_2").css("background-color","#008ae2");
		$("#input_2").css("color",'white').css("font-size",'14px').text("学习库");
		$("#input_1").removeAttr("style"); 
		$("#input_1").text("01");
		$("#input_3").removeAttr("style"); 
		$("#input_3").text("03"); 
		$("#input_4").removeAttr("style"); 
		$("#input_4").text("04"); 
		$("#input_5").removeAttr("style"); 
		$("#input_5").text("05");
		$(".two_4_left_png").stop(true,false).animate({top:-475},500);
    });
	$("#input_3").click(function() {
		$("#input_3").css("background-color","#008ae2");
		$("#input_3").css("color",'white').css("font-size",'14px').text("NetTV");  
		$("#input_1").removeAttr("style"); 
		$("#input_1").text("01"); 
		$("#input_2").removeAttr("style"); 
		$("#input_2").text("02");
		$("#input_4").removeAttr("style"); 
		$("#input_4").text("04"); 
		$("#input_5").removeAttr("style"); 
		$("#input_5").text("05");
		$(".two_4_left_png").stop(true,false).animate({top:-475*2},500);
    });
	$("#input_4").click(function() {
		$("#input_4").css("background-color","#008ae2");
		$("#input_4").css("color",'white').css("font-size",'14px').text("二手市场"); 
		$("#input_1").removeAttr("style"); 
		$("#input_1").text("01"); 
		$("#input_2").removeAttr("style"); 
		$("#input_2").text("02");
		$("#input_3").removeAttr("style"); 
		$("#input_3").text("03"); 
		$("#input_5").removeAttr("style"); 
		$("#input_5").text("05");
		$(".two_4_left_png").stop(true,false).animate({top:-475*3},500);  
    });
	$("#input_5").click(function() {
		$("#input_5").css("background-color","#008ae2");
		$("#input_5").css("color",'white').css("font-size",'14px').text("资源网"); 
		$("#input_1").removeAttr("style"); 
		$("#input_1").text("01"); 
		$("#input_2").removeAttr("style"); 
		$("#input_2").text("02");
		$("#input_3").removeAttr("style"); 
		$("#input_3").text("03"); 
		$("#input_4").removeAttr("style"); 
		$("#input_4").text("04"); 
		$(".two_4_left_png").stop(true,false).animate({top:-475*4},500);
    });
});

//--------------------------------------------------------------------------------




/*
	1.第三张图滚动效果
	2.第三张图的按钮效果


*/
$(document).ready(function() {
	var addH_three=$(".three_3_left_png_ready").height();
	var addL_three=$(".three_3_left_png_all").length;
	$(".three_3_left_png_all").css("height",addH_three*4);
	$("#input_three_1").click(function(){
		$(".CP_one").attr("src","PNG/three/threes_3_1.png");//更换中心白字图片
		$("#input_three_1").css("background-color","#008ae2");
		$("#input_three_1").css("color",'white').css("font-size",'14px').text("产品运营"); 
		$("#input_three_2").removeAttr("style");
		$("#input_three_2").text("02");
		$("#input_three_3").removeAttr("style");
		$("#input_three_3").text("03"); 
		$("#input_three_4").removeAttr("style");
		$("#input_three_4").text("04");
		$(".three_3_left_png").stop(true,false).animate({top:0},500);
});
	$("#input_three_2").click(function(){
		$(".CP_one").attr("src","PNG/three/threes_3_2.png");//更换中心白字图片
		$("#input_three_2").css("background-color","#008ae2");
		$("#input_three_2").css("color",'white').css("font-size",'14px').text("组织策划"); 
		$("#input_three_1").removeAttr("style");
		$("#input_three_1").text("01");
		$("#input_three_3").removeAttr("style");
		$("#input_three_3").text("03"); 
		$("#input_three_4").removeAttr("style");
		$("#input_three_4").text("04");
		$(".three_3_left_png").stop(true,false).animate({top:-424},500); 
});
	$("#input_three_3").click(function(){
		$(".CP_one").attr("src","PNG/three/threes_3_3.png");//更换中心白字图片
		$("#input_three_3").css("background-color","#008ae2");
		$("#input_three_3").css("color",'white').css("font-size",'14px').text("技术研发"); 
		$("#input_three_1").removeAttr("style");
		$("#input_three_1").text("01");
		$("#input_three_2").removeAttr("style");
		$("#input_three_2").text("02"); 
		$("#input_three_4").removeAttr("style");
		$("#input_three_4").text("04");
		$(".three_3_left_png").stop(true,false).animate({top:-424*2},500); 
});
	$("#input_three_4").click(function(){
		$(".CP_one").attr("src","PNG/three/threes_3_4.png");//更换中心白字图片
		$("#input_three_4").css("background-color","#008ae2");
		$("#input_three_4").css("color",'white').css("font-size",'14px').text("文化传媒"); 
		$("#input_three_1").removeAttr("style");
		$("#input_three_1").text("01");
		$("#input_three_2").removeAttr("style");
		$("#input_three_2").text("02"); 
		$("#input_three_3").removeAttr("style");
		$("#input_three_3").text("03"); 
		$(".three_3_left_png").stop(true,false).animate({top:-424*3},500);
});
	
	
	});
//第三张图点击更多
//
$(function(){
	$("#t3LPWmore_1").click(function() {
    
});
//组织策划中心的更多  
	$("#t3LPWmore_2").click(function() {
        
});
//技术研发中心的更多  
$("#t3LPWmore_3").click(function() {
        
});
//文化传媒中心的更多  
$("#t3LPWmore_4").click(function() {
        
});
	
	
	})
//-----------------------------------------------------------------------------------------------
	
	
//第四张图的效果。
//点击加入
$('.four_5').click(function(e) {
    $(".four_5").hide();
	$(".four_7").show(900);
//点击提早填表
	$(".four_9").click(function(){
		
		
		})
	
});
//-------------------------------------------

//-------------------------------------------------------------------------
});