//鼠标滚轮效果
var indexa=0;//滚轮用的变量
var gl_index=0;//滚动一次移动多少的变量
var width_window=$(window).width();
var gl_one=0;
	gl_one2=0;
	gl_one3=0;
	gl_one4=0;
	
	gl_two1=0;
	gl_two2=0;
	gl_two3=0;
	gl_two4=0;
	gl_two5=0;
	gl_two6=0;
	gl_two7=0;
	gl_two8=0;
	gl_two9=0;
	gl_two10=0;
	
	gl_three1=0;
	gl_three2=0;
	gl_three3=0;
	gl_three4=0;
	gl_three5=0;
	gl_three6=0;
	gl_three7=0;
	gl_three8=0;
	gl_three9=0;
	gl_three10=0;
	gl_two11=0;
	
	gl_four1=0;
	gl_four2=0;
	gl_four3=0;
	gl_four4=0;
	gl_four5=0;
	gl_four6=0;
var	gl_four7=0;
	gl_four8=0;
	gl_four9=0;
	gl_four10=0;
	gl_four11=0;
	gl_four12=0;
	gl_four13=0;
	gl_four14=0;
	gl_four15=0;
//-----------------------------------------------------------------------
var two_index=0;
//方向键与滚轮交互问题
/*
if($(".ready_one ul li").offset().left==-width_window){indexa=-width_window}
if($(".ready_one ul li").offset().left==-width_window*2){indexa=-width_window*2}
if($(".ready_one ul li").offset().left==-width_window*3){indexa=-width_window*3}
*/
$(".ready_one ul li").mousewheel(function(event,delta){
			
	if(delta<0){
		if(indexa<=-width_window*3){
			indexa=-width_window*3;
			}else{
				indexa=indexa-143;	
			};

			if($("#one_1li").offset().left<=(-width_window/2)){
					$('.cen_benner').fadeIn(500);//进度条的显示
					$(".cb_left_two").css("width",111);								
				}
				
				if($("#one_1li").offset().left<=(-width_window*2)*(3/4)){$(".cb_left_two").css("width",212);}
				if($("#one_1li").offset().left<=(-width_window*3)*(3/4)){$(".cb_left_two").css("width",311);	}
				gl_index=gl_index-13;
			$(".ready_one ul li").stop().animate({"left":indexa},500);
//向下滚动，第一张图的效果---------------------------------------------------------------------------------------------
				gl_one=gl_one-40;
				if(gl_one<-448){gl_one=-400};
				gl_one2-=55;
				if(gl_one2<-500){gl_one2=-500};
				gl_one3-=80;
				if(gl_one3<-512){gl_one3=-512};
			 gl_one4-=45;
				if(gl_one4<-400){gl_one4=-400};
				
					$(".one_3").stop().animate({"left":112+gl_one3},1000);
					$(".one_2").stop().animate({"left":100+gl_one2},1000);
					$(".one_1").stop().animate({"left":48+gl_one},1000);
					$(".one_4").stop().animate({"left":-112+gl_one4},1000);

//---------------------------------------------------------------------------------------------------			
					
//向下滚动，第二张图的效果			
						gl_two1-=38.45;
						if(gl_two1<-1000){gl_two1=-1000}	
						gl_two2-=30.8;
						if(gl_two2<-800){gl_two2=-800}	
						gl_two3-=10.5;
						if(gl_two3<-237){gl_two3=-237}	
						
						gl_two4-=32.2;
						if(gl_two4<-818){gl_two4=-818}		
						gl_two6-=30.8;
						if(gl_two6<-800){gl_two6=-800}	
						gl_two7-=31;
						if(gl_two7<-800){gl_two7=-800}	
						gl_two8-=30;
						if(gl_two8<-880){gl_two8=-880}	
						gl_two9-=32.62;
						if(gl_two9<-824){gl_two9=-824}	
						gl_two11-=40.2;
						if(gl_two11<-800){gl_two11=-800}	
						gl_two10-=30.8;
						if(gl_two10<-800){gl_two10=-800}	
						$(".two_1").delay(200).stop(true,false).animate({"left":500+gl_two1},1000);
						$(".two_2").delay(200).stop(true,false).animate({"left":400+gl_two2},1000);
						$(".two_4").delay(200).stop(true,false).animate({"right":-gl_two3},1000);
						$("#two_bg1").delay(200).stop(true,false).animate({"right":2-gl_two4},1000);
						$("#two_bg2").delay(200).stop(true,false).animate({"right":195-gl_two6},1000);
						$("#two_bg3").delay(200).stop(true,false).animate({"left":812+gl_two7},1000);
						$("#two_bg4").delay(200).stop(true,false).animate({"left":643+gl_two8},1000);
						$("#two_bg5").delay(200).stop(true,false).animate({"right":-212-gl_two9},1000);
						$("#two_bg6").delay(200).stop(true,false).animate({"right":-170-gl_two11},1000);
						$(".two_4_left_png_ready").delay(200).stop(true,false).animate({"left":700+gl_two10},1000);
				
//-------------------------------------------------------------------------------------------------------
//第三张图向下滚动
if(indexa<-width_window*1&&indexa>-width_window*3){
					gl_three1-=25;
					gl_three2-=21.5;
					gl_three3-=14;
					gl_three4-=28.6;
					gl_three5-=28.5;
					gl_three6-=28.5;
					gl_three7-=28.6;
					gl_three8-=28.6;
					gl_three9-=21.8;
					$(".three_1").delay(360).stop(true,false).animate({"left":350+gl_three1},1000);
					$(".three_2").delay(320).stop(true,false).animate({"left":300+gl_three2},1000);
					$(".three_3").delay(280).stop(true,false).animate({"right":-34-gl_three3},1000);
					$(".three_4").delay(230).stop(true,false).animate({"left":720+gl_three4},1000);
					$(".three_5").delay(230).stop(true,false).animate({"right":-70-gl_three5},1000);
					$(".three_6").delay(230).stop(true,false).animate({"left":814+gl_three6},1000);
					$(".three_7").delay(230).stop(true,false).animate({"left":650+gl_three7},1100);
					$(".three_8").delay(230).stop(true,false).animate({"right":-32-gl_three8},1100);
					$(".CP_one").delay(230).stop(true,false).animate({"left":717+gl_three9},1100);
}
//-----------------------------------------------------------------------------------------------------------
//第四张图向下滚动
if(indexa<-width_window*2){
	gl_four1-=28.6;
	if(400+gl_four1<=0)
	{gl_four1=-400;}
	
	gl_four2-=30;
	if(-400-gl_four2>=20)
	{gl_four2=-420;}
	
	gl_four3-=28.6;
	if(408+gl_four3<=8)
	{gl_four3=-400;}
	
	gl_four4-=28.6;
	if(550+gl_four4<=150)
	{gl_four4=-400;}
	
	gl_four5-=30;
	if(636+gl_four5<=236)
	{gl_four5=-400;}
	
	gl_four6-=28.6;
	if(590+gl_four6<=190)
	{gl_four6=-400;}
	
	gl_four7-=30;
	if(550+gl_four7<=157)
	{gl_four7=-400;}
	
	gl_four8-=28.6;
	if(55-gl_four8>455)
	{gl_four8=-400;}
	
	gl_four9-=28.6;
	if(-122-gl_four9>278)
	{gl_four9=-400}
	
	gl_four10-=28.6;
	if(-2-gl_four10>398)
	{gl_four10=-400}
	
	gl_four11-=28.6;
	if(56-gl_four11>456)
	{gl_four11=-400}
	
	gl_four12-=28.6;
	if(820+gl_four12<420)
	{gl_four12=-400}
	
	gl_four13-=28.6;
	if(656+gl_four13<256){gl_four13=-400}
	gl_four14-=28;
	if(779+gl_four14<379){gl_four14=-400}
						$(".four_1").delay(0).stop(true,false).animate({"left":400+gl_four1},1000);
						$(".four_2").delay(0).stop(true,false).animate({"right":-400-gl_four2},1000);
						$(".four_3").delay(0).stop(true,false).animate({"left":408+gl_four3},1050);
						$(".four_4").delay(0).stop(true,false).animate({"left":550+gl_four4},1050);
						$(".four_5").delay(0).stop(true,false).animate({"left":636+gl_four5},1100);
						$(".four_6").delay(0).stop(true,false).animate({"left":590+gl_four6},1150);
						$(".four_7").delay(0).stop(true,false).animate({"left":550+gl_four7},1200);
						$(".four_10").delay(0).stop(true,false).animate({"right":55-gl_four8},1200);
						$(".four_11").delay(0).stop(true,false).animate({"right":-122-gl_four9},1200);
						$(".four_12").delay(0).stop(true,false).animate({"right":-2-gl_four10},1200);
						$(".four_13").delay(0).stop(true,false).animate({"right":56-gl_four11},1300);
						$(".four_14").delay(0).stop(true,false).animate({"left":820+gl_four12},1200);
						$(".four_15").delay(0).stop(true,false).animate({"left":656+gl_four13},1200);
						$(".four_16").delay(0).stop(true,false).animate({"left":779+gl_four14},1200);
}
	}
//滚轮向上滚动
	else if(delta>0){
		if(indexa>=0){
				indexa=0;
         }
		else{
				indexa=indexa+143;
		};
			
				
				if($("#one_1li").offset().left>=(-width_window*3)*(4/5)){$(".cb_left_two").css("width",212);}
				if($("#one_1li").offset().left>=(-width_window*2)*(4/5)){$(".cb_left_two").css("width",111);}
				if($("#one_1li").offset().left>=(-width_window)){
					$(".cb_left_two").css("width",17);
					$('.cen_benner').fadeOut(500);//进度条的显示
					
			}	
//向上滚动，第一张图的效果---------------------------------------------------------------------------------------------------------
			if(indexa>=(-width_window/2)-400){
				gl_one=gl_one+44;
				if(gl_one>48){gl_one=48};
				gl_one2+=55;
				if(gl_one2>100){gl_one2=100};
				gl_one3+=80;
				if(gl_one3>112){gl_one3=112};
				 gl_one4+=45;
				if(gl_one4>-112){gl_one4=-112};
					$(".one_3").stop().animate({"left":gl_one3},1000);
					$(".one_2").stop().animate({"left":gl_one2},1000);
					$(".one_1").stop().animate({"left":gl_one},1000);
					$(".one_4").stop().animate({"left":gl_one4},1000);
			}
//-------------------------------------------------------------------------------------------------------------
		$(".ready_one ul li").stop().animate({"left":indexa},600);
		
//第二张图向上滚动
if(indexa>-width_window*2){	
						gl_two1+=38.45;
						if(gl_two1>0){gl_two1=0}	
						gl_two2+=30.8;
						if(gl_two2>0){gl_two2=0}	
						gl_two3+=10.5;
						if(gl_two3>0){gl_two3=0}	
						gl_two4+=32.2;
						if(gl_two4>0){gl_two4=0}		
						gl_two6+=30.8;
						if(gl_two6>0){gl_two6=0}	
						gl_two7+=31;
						if(gl_two7>0){gl_two7=0}	
						gl_two8+=30;
						if(gl_two8>0){gl_two8=0}
						gl_two9+=32.62;
						if(gl_two9>0){gl_two9=-0}	
						gl_two11+=26.8;
						if(gl_two11>0){gl_two11=0}
						gl_two10+=30.8;
						if(gl_two10>0){gl_two10=-0}	
						$(".two_1").delay(200).stop(true,false).animate({"left":500+gl_two1},1000);
						$(".two_2").delay(200).stop(true,false).animate({"left":400+gl_two2},1000);
						$(".two_4").delay(200).stop(true,false).animate({"right":-gl_two3},1000);
						$("#two_bg1").delay(200).stop(true,false).animate({"right":2-gl_two4},1000);
						$("#two_bg2").delay(200).stop(true,false).animate({"right":195-gl_two6},1000);
						$("#two_bg3").delay(200).stop(true,false).animate({"left":812+gl_two7},1000);
						$("#two_bg4").delay(200).stop(true,false).animate({"left":643+gl_two8},1000);
						$("#two_bg5").delay(200).stop(true,false).animate({"right":-212-gl_two9},1000);
						$("#two_bg6").delay(200).stop(true,false).animate({"right":-170-gl_two11},1000);
						$(".two_4_left_png_ready").delay(200).stop(true,false).animate({"left":700+gl_two10},1000);
	}
		
//第三张图向上滚动
if(indexa<-width_window*1&&indexa>-width_window*3){
					gl_three1+=25;
					gl_three2+=21.5;
					gl_three3+=14;
					gl_three4+=28.6;
					gl_three5+=28.5;
					gl_three6+=28.5;
					gl_three7+=28.6;
					gl_three8+=28.6;
					gl_three9+=21.4;
					$(".three_1").delay(360).stop(true,false).animate({"left":350+gl_three1},1000);
					$(".three_2").delay(320).stop(true,false).animate({"left":300+gl_three2},1000);
					$(".three_3").delay(280).stop(true,false).animate({"right":-34-gl_three3},1000);
					$(".three_4").delay(230).stop(true,false).animate({"left":720+gl_three4},1000);
					$(".three_5").delay(230).stop(true,false).animate({"right":-70-gl_three5},1000);
					$(".three_6").delay(230).stop(true,false).animate({"left":814+gl_three6},1000);
					$(".three_7").delay(230).stop(true,false).animate({"left":650+gl_three7},1100);
					$(".three_8").delay(230).stop(true,false).animate({"right":-32-gl_three8},1100);
					$(".CP_one").delay(230).stop(true,false).animate({"left":717+gl_three9},1100);
}		
				
			
			
			
//第四张图向上滚动	
if(indexa<(-width_window)){
		
	gl_four1+=28.6;
	if(gl_four1>=0)
	{gl_four1=0;}
	
	
	gl_four2+=30;
	if(gl_four2>=20)
	{gl_four2=0;}
	
	gl_four3+=28.6;
	if(408+gl_four3>=408)
	{gl_four3=0;}
	
	gl_four4+=28.6;
	if(550+gl_four4>=550)
	{gl_four4=0;}
	
	gl_four5+=55;
	if(636+gl_four5>=636)
	{gl_four5=0;}
	
	gl_four6+=28.6;
	if(590+gl_four6>=590)
	{gl_four6=0}
	
	gl_four7+=55;
	if(gl_four7>=0)
	{gl_four7=0}
	
	gl_four8+=28.6;
	if(gl_four8>0)
	{gl_four8=0;}
	
	gl_four9+=28.6;
	if(gl_four9>0)
	{gl_four9=0}
	
	gl_four10+=28.6;
	if(gl_four10>0)
	{gl_four10=0}
	
	gl_four11+=28.6;
	if(gl_four11>0)
	{gl_four11=0}
	
	gl_four12+=28.6;
	if(820+gl_four12>820)
	{gl_four12=0}
	
	gl_four13+=28.6;
	if(656+gl_four13>656){gl_four13=0}
	gl_four14+=28;
	if(779+gl_four14>779){gl_four14=0}
						$(".four_1").delay(50).stop(true,false).animate({"left":400+gl_four1},1000);
						$(".four_2").delay(50).stop(true,false).animate({"right":-400-gl_four2},1000);
						$(".four_3").delay(0).stop(true,false).animate({"left":408+gl_four3},1100);
						$(".four_4").delay(0).stop(true,false).animate({"left":550+gl_four4},1150);
						$(".four_5").delay(0).stop(true,false).animate({"left":636+gl_four5},1150);
						$(".four_6").delay(0).stop(true,false).animate({"left":590+gl_four6},1100);
						$(".four_7").delay(0).stop(true,false).animate({"left":550+gl_four7},1200);
						$(".four_10").delay(0).stop(true,false).animate({"right":55-gl_four8},1150);
						$(".four_11").delay(0).stop(true,false).animate({"right":-122-gl_four9},1150);
						$(".four_12").delay(0).stop(true,false).animate({"right":-2-gl_four10},1150);
						$(".four_13").delay(0).stop(true,false).animate({"right":56-gl_four11},1150);
						$(".four_14").delay(0).stop(true,false).animate({"left":820+gl_four12},1150);
						$(".four_15").delay(0).stop(true,false).animate({"left":656+gl_four13},1150);
						$(".four_16").delay(0).stop(true,false).animate({"left":779+gl_four14},1150);
				
				}

		event.stopPropagation();
		event.preventDefault();

		

	 // prevent default
}
});