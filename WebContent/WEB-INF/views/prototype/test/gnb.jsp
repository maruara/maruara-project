<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>

<style type="text/css">
/* Common */
body,p,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dt,dd,table,th,td,form,fieldset,legend,input,textarea,button,select{margin:0;padding:0}
body,input,textarea,select,button,table{font-family:'나눔고딕',NanumGothic,'돋움',Dotum,AppleGothic,sans-serif;font-size:12px}
img,fieldset{border:0}
ul,ol{list-style:none}
em,address{font-style:normal}
a{text-decoration:none}
a:hover,a:active,a:focus{text-decoration:underline}

/* Additional Page Design */
body{padding:10px 10px 0 0}
.h2_tmpl{clear:both;float:none;margin:10px 0;padding:0 0 2px 7px;border-bottom:1px solid #e9e9e9;background:url(http://html.nhndesign.com/img/bu_h2.gif) 0 7px no-repeat;color:#333;font:bold 14px '나눔고딕',NanumGothic,'돋움',Dotum,AppleGothic,sans-serif;font-weight:bold;letter-spacing:-1px;line-height:26px;text-align:left}
.code_tmpl{overflow:hidden;margin:0 0 20px;padding:0}
.frst_tmpl{margin-top:25px}
.btn_tmpl{overflow:visible;margin:0;padding:0;border:0;background:none;font-size:0;line-height:0;vertical-align:top;cursor:pointer}
.syntaxhighlighter{clear:both}
.notice{width:340px; margin:0 0 -40px 90px; padding:10px 0; color:#999}
.template{position:relative;height:120px}
.template h3{position:absolute;top:30px;left:8px;margin:0;padding:0 0 0 5px;border-left:2px solid #464646;font-family:'나눔고딕',nanumgothic,'돋움',dotum,applegothic,sans-serif;font-size:15px}


/* UI Object */
/* Menu Common */
.menu{overflow:visible;position:relative;border:1px solid;font-size:12px;font-family:Tahoma, Geneva, sans-serif;line-height:normal;white-space:nowrap;*zoom:1}
.menu:after{display:block;clear:both;content:""}
.menu .inset{overflow:visible;position:relative;z-index:2;border:1px solid;background-image:url(http://html.nhndesign.com/ui_library/src/pattern/gnb/jcm/img/bg_bar.png);background-repeat:repeat-x;_background-image:none;*zoom:1}
.menu .inset:after{display:block;clear:both;content:""}
.menu ul{float:left;margin:-1px 0;padding:0;list-style:none}
.menu ul:after{display:block;clear:both;content:""}
.menu li{float:left;position:relative;z-index:1}
.menu a{float:left;position:relative;margin-bottom:-1px;padding:10px 0 11px 0;*padding:10px 0 10px 0;text-decoration:none !important;cursor:pointer}
.menu a span{height:14px;padding:0 20px;font-weight:bold;color:#fff;vertical-align:top}
.menu a span .i{display:inline-block;overflow:hidden;width:8px;height:8px;margin:3px 0 0 7px;padding:0;border:0 !important;font-size:0;line-height:0;vertical-align:top;background:url(http://html.nhndesign.com/ui_library/src/pattern/gnb/jcm/img/ico_sub.gif) no-repeat center top;opacity:.4;filter:alpha(opacity=40)}
.menu .gradient{display:none;_display:block;position:absolute;top:0;left:0;z-index:1;width:100%;height:35px;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg_bar.png', sizingMethod='scale')}
.menu .shadow{overflow:hidden;position:absolute;left:0;bottom:-3px;z-index:1;width:100%;height:0;margin:1px -1px;border:1px solid #ccc;border-top:0;font-size:0;line-height:0}
/* Menu Major */
.menu .major{float:left;position:relative;z-index:2}
.menu .major a{overflow:hidden}
.menu .major span{border-left:1px solid;border-right:1px solid;_zoom:1}
/* Menu Hover */
.menu .major li.active{z-index:2;margin:0 -1px;_margin:0;border-left:1px solid;border-right:1px solid;_border:0}
.menu .major li a:hover,
.menu .major li a:active,
.menu .major li a:focus{padding-left:1px;padding-right:1px;background-image:url(http://html.nhndesign.com/ui_library/src/pattern/gnb/jcm/img/bg_bar_hover.png);_background-image:none}
.menu .major li.active a{padding-left:1px;padding-right:1px;background-image:url(http://html.nhndesign.com/ui_library/src/pattern/gnb/jcm/img/bg_bar_active_hover.png);_background-image:none}
.menu .major li.active .i{background-position:center -50px;opacity:1;filter:none}
/* Menu Active */
.menu .major.m1 .m1,
.menu .major.m2 .m2,
.menu .major.m3 .m3,
.menu .major.m4 .m4,
.menu .major.m5 .m5,
.menu .major.m6 .m6,
.menu .major.m7 .m7,
.menu .major.m8 .m8,
.menu .major.m9 .m9,
.menu .major.m10 .m10,
.menu .major.m11 .m11,
.menu .major.m12 .m12{z-index:3;margin:0 -1px;border-left:1px solid;border-right:1px solid}
.menu .major.m1 .m1 a,
.menu .major.m2 .m2 a,
.menu .major.m3 .m3 a,
.menu .major.m4 .m4 a,
.menu .major.m5 .m5 a,
.menu .major.m6 .m6 a,
.menu .major.m7 .m7 a,
.menu .major.m8 .m8 a,
.menu .major.m9 .m9 a,
.menu .major.m10 .m10 a,
.menu .major.m11 .m11 a,
.menu .major.m12 .m12 a{padding-left:1px;padding-right:1px;background:url(http://html.nhndesign.com/ui_library/src/pattern/gnb/jcm/img/bg_bar_active.png) repeat-x;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='bg_bar_active.png', sizingMethod='scale')}
.menu .major.m1 .m1 span,
.menu .major.m2 .m2 span,
.menu .major.m3 .m3 span,
.menu .major.m4 .m4 span,
.menu .major.m5 .m5 span,
.menu .major.m6 .m6 span,
.menu .major.m7 .m7 span,
.menu .major.m8 .m8 span,
.menu .major.m9 .m9 span,
.menu .major.m10 .m10 span,
.menu .major.m11 .m11 span,
.menu .major.m12 .m12 span,
.menu .major li.active span{border:0}
/* Menu Sub */
.menu .major .sub{display:none;position:absolute;top:100%;left:-1px;width:300px;*width:auto;margin:2px 0 0 0}
.menu .major li.active .sub{display:block}
.menu .major .sub ul{margin:0;padding:1px;border:1px solid #878787;border-top:0;background:#fff}
.menu .major .sub li{display:block;_display:inline;float:none;clear:both;width:100%;*width:auto;margin:0;border:0}
.menu .major .sub a{display:block;float:none;clear:both;*width:100%;_width:auto;margin:0;padding:0 !important;background-image:none !important;filter:none}
.menu .major .sub a span{display:block;height:auto;padding:5px 20px;border:0;font-weight:normal;color:#767676;_zoom:0}
/* Menu Aside */
.menu .aside{float:right;position:relative;z-index:2;border-left:1px solid;background:url(http://html.nhndesign.com/ui_library/src/pattern/gnb/jcm/img/bg_bar_end.png);_background:none}
.menu .aside ul{padding-left:5px;border-left:1px solid}
.menu .aside a{padding-left:10px;*padding-top:11px;opacity:.7}
.menu .aside a:hover,
.menu .aside a:active,
.menu .aside a:focus{opacity:1}
.menu .aside span{padding:0 12px 0 18px;font-weight:normal;*color:#eee;*zoom:1}
.menu .aside a:hover span,
.menu .aside a:active span,
.menu .aside a:focus span{*color:#fff}
.menu .aside li span{display:inline-block;height:14px}
.menu .aside .m1 span{background:url(http://html.nhndesign.com/ui_library/src/pattern/gnb/jcm/img/ico_history.png) no-repeat 0 center;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='ico_history.png', sizingMethod='crop')}
.menu .aside .m2 span{background:url(http://html.nhndesign.com/ui_library/src/pattern/gnb/jcm/img/ico_setup.png) no-repeat 0 center;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='ico_setup.png', sizingMethod='crop')}
/* Menu Aside Sub */
.menu .aside .sub{display:none;position:absolute;top:100%;right:-2px;width:300px;*width:auto;margin:2px 0 0}
.menu .aside li.active .sub{display:block}
.menu .aside .sub ul{float:right;margin:0;padding:1px;border:1px solid #878787;border-top:0;background:#fff}
.menu .aside .sub li{display:block;_display:inline;float:none;clear:both;width:100%;*width:auto;margin:0;border:0}
.menu .aside .sub a{display:block;overflow:hidden;float:none;clear:both;width:100%;_width:auto;margin:0;padding:0 !important;background-image:none !important;filter:none}
.menu .aside .sub a span{display:inline-block;padding:5px 20px;border:0;background-image:none !important;font-weight:normal;color:#767676 !important;filter:none;_zoom:0}
.menu .aside .sub a:hover,
.menu .aside .sub a:active,
.menu .aside .sub a:focus{background:#eee}
/* Menu Color Variation */
/* Menu Purple */
.mc_purple{border-color:#983499;border-bottom-color:#682368}
.mc_purple .inset{border-color:#b65eb7;border-bottom-color:#89388a;background-color:#822a83}
.mc_purple .major span{border-left-color:#944095;border-right-color:#7d2b7e}
.mc_purple .aside{border-color:#752676}
.mc_purple .aside ul{border-color:#a044a2}
.mc_purple .major.m1 .m1,
.mc_purple .major.m2 .m2,
.mc_purple .major.m3 .m3,
.mc_purple .major.m4 .m4,
.mc_purple .major.m5 .m5,
.mc_purple .major.m6 .m6,
.mc_purple .major.m7 .m7,
.mc_purple .major.m8 .m8,
.mc_purple .major.m9 .m9,
.mc_purple .major.m10 .m10,
.mc_purple .major.m11 .m11,
.mc_purple .major.m12 .m12,
.mc_purple .major li.active{border-color:#983499}
.mc_purple .major .sub a:hover,
.mc_purple .major .sub a:active,
.mc_purple .major .sub a:focus{background-color:#e8eef7}
/* Menu Violet */
.mc_violet{border-color:#6755bf;border-bottom-color:#4a3c96}
.mc_violet .inset{border-color:#8e7de1;border-bottom-color:#6c5dbb;background-color:#6251b7}
.mc_violet .major span{border-left-color:#7363c5;border-right-color:#5c4dac}
.mc_violet .aside{border-color:#5849a4}
.mc_violet .aside ul{border-color:#7563cc}
.mc_violet .major.m1 .m1,
.mc_violet .major.m2 .m2,
.mc_violet .major.m3 .m3,
.mc_violet .major.m4 .m4,
.mc_violet .major.m5 .m5,
.mc_violet .major.m6 .m6,
.mc_violet .major.m7 .m7,
.mc_violet .major.m8 .m8,
.mc_violet .major.m9 .m9,
.mc_violet .major.m10 .m10,
.mc_violet .major.m11 .m11,
.mc_violet .major.m12 .m12,
.mc_violet .major li.active{border-color:#6755bf}
.mc_violet .major .sub a:hover,
.mc_violet .major .sub a:active,
.mc_violet .major .sub a:focus{background-color:#f0eef8}
/* Menu Orange */
.mc_orange{border-color:#d0690f;border-bottom-color:#a84f00}
.mc_orange .inset{border-color:#eb961b;border-bottom-color:#dc7011;background-color:#db6600}
.mc_orange .major span{border-left-color:#e07813;border-right-color:#c66200}
.mc_orange .aside{border-color:#c55c00}
.mc_orange .aside ul{border-color:#ed7f13}
.mc_orange .major.m1 .m1,
.mc_orange .major.m2 .m2,
.mc_orange .major.m3 .m3,
.mc_orange .major.m4 .m4,
.mc_orange .major.m5 .m5,
.mc_orange .major.m6 .m6,
.mc_orange .major.m7 .m7,
.mc_orange .major.m8 .m8,
.mc_orange .major.m9 .m9,
.mc_orange .major.m10 .m10,
.mc_orange .major.m11 .m11,
.mc_orange .major.m12 .m12,
.mc_orange .major li.active{border-color:#d0690f}
.mc_orange .major .sub a:hover,
.mc_orange .major .sub a:active,
.mc_orange .major .sub a:focus{background-color:#faf0e7}
/* Menu Green */
.mc_green{border-color:#2d8685;border-bottom-color:#237473}
.mc_green .inset{border-color:#58b2b1;border-bottom-color:#3c8e8d;background-color:#2e8686}
.mc_green .major span{border-left-color:#419695;border-right-color:#2c7f7e}
.mc_green .aside{border-color:#297878}
.mc_green .aside ul{border-color:#3c9999}
.mc_green .major.m1 .m1,
.mc_green .major.m2 .m2,
.mc_green .major.m3 .m3,
.mc_green .major.m4 .m4,
.mc_green .major.m5 .m5,
.mc_green .major.m6 .m6,
.mc_green .major.m7 .m7,
.mc_green .major.m8 .m8,
.mc_green .major.m9 .m9,
.mc_green .major.m10 .m10,
.mc_green .major.m11 .m11,
.mc_green .major.m12 .m12,
.mc_green .major li.active{border-color:#2d8685}
.mc_green .major .sub a:hover,
.mc_green .major .sub a:active,
.mc_green .major .sub a:focus{background-color:#eaf3f3}
/* Menu Gray */
.mc_gray{border-color:#707070;border-bottom-color:#474747}
.mc_gray .inset{border-color:#797979;border-bottom-color:#4a4a4a;background-color:#3e3e3e}
.mc_gray .major span{border-left-color:#545454;border-right-color:#3f3f3f}
.mc_gray .aside{border-color:#383838}
.mc_gray .aside ul{border-color:#646464}
.mc_gray .major.m1 .m1,
.mc_gray .major.m2 .m2,
.mc_gray .major.m3 .m3,
.mc_gray .major.m4 .m4,
.mc_gray .major.m5 .m5,
.mc_gray .major.m6 .m6,
.mc_gray .major.m7 .m7,
.mc_gray .major.m8 .m8,
.mc_gray .major.m9 .m9,
.mc_gray .major.m10 .m10,
.mc_gray .major.m11 .m11,
.mc_gray .major.m12 .m12,
.mc_gray .major li.active{border-color:#555}
.mc_gray .major .sub a:hover,
.mc_gray .major .sub a:active,
.mc_gray .major .sub a:focus{background-color:#f0f0f0}
/* //UI Object */
</style>


<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript">
jQuery(function($){
	
	// Menu
	var menu = $('div.menu');
	var major = $('div.major');
	var li_list = major.find('>ul>li');
	
	// Selected
	function onselectmenu(){
		var myclass = [];
		
		$(this).parent('li').each(function(){
			myclass.push( $(this).attr('class') );
		});
		
		myclass = myclass.join(' ');
		if (!major.hasClass(myclass)) major.attr('class','major').addClass(myclass);
	}
	
	// Show Menu
	function show_menu(){
		t = $(this);
		li_list.removeClass('active');
		t.parent('li').addClass('active');
		// IE7 or IE7 documentMode bug fix
		if($.browser.msie) {
			var v = document.documentMode || parseInt($.browser.version);
			if (v == 7) {
				var subWidth = t.next('div.sub').eq(-1).width();
				t.next('div.sub').css('width',subWidth);
			}
		}
	}
	li_list.find('>a').click(onselectmenu).mouseover(show_menu).focus(show_menu);
	
	// Hide Menu
	function hide_menu(){
		li_list.removeClass('active');
	}
	menu.mouseleave(hide_menu);
	li_list.find('div.sub>ul').mouseleave(hide_menu);
	
	//icon
	major.find('div.sub').prev('a').find('>span').append('<span class="i"></span>');
	
	// Aside
	var aside_li = $('.menu>.inset>.aside>ul>li');
	var aside_a = $('.menu>.inset>.aside>ul>li>a');

	// Show Aside
	function show_aside(){
		li_list.removeClass('active');
		aside_li.removeClass('active');
		$(this).parent('li').addClass('active');

		// IE7 or IE7 documentMode bug fix
		if($.browser.msie) {
			var v = document.documentMode || parseInt($.browser.version);

			if (v == 7) {
				var sub = $(this).next('div.sub').eq(-1);
				sub.css('width', '').css('width', sub.width()+'px');
			}
		}
	}	
	aside_a.mouseover(show_aside).focus(show_aside);
	
	// Hide Aside
	function hide_aside(){
		aside_li.removeClass('active');
	}	
	menu.mouseleave(hide_aside);
	aside_li.find('div.sub>ul').mouseleave(hide_aside);

	// Hide Menu & Aside
	$('*:not(".menu *")').focus(hide_menu).focus(hide_aside);
	
});
</script>

</head>
<body>


<h1>CSS Naviagation Bar.</h1>
<button type="button" onClick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_purple');">mc_purple</button>
<button type="button" onClick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_violet');">mc_violet</button>
<button type="button" onClick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_orange');">mc_orange</button>

<button type="button" onClick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_green');">mc_green</button>
<button type="button" onClick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_gray');">mc_gray</button>
<br>
<br>
<div id="menu" class="menu mc_purple">
<!-- class="mc_purple | mc_violet | mc_orange | mc_green | mc_gray"-->
	<div class="inset">
		<div class="major">
		<!-- class="major + (m1~m12)"-->
			<ul>
			<li class="m1"><a href="#"><span>동해물과</span></a>

				<div class="sub">
					<ul>
					<li><a href="#"><span>동해물과</span></a></li>
					<li><a href="#"><span>동해</span></a></li>
					</ul>
				</div>
			
			</li>
			<li class="m2"><a href="#"><span>백두산이</span></a>

				<div class="sub">
					<ul>
					<li><a href="#"><span>백두산이 마르고 닳도록</span></a></li>
					<li><a href="#"><span>백두산</span></a></li>
					</ul>
				</div>
			</li>
			<li class="m3"><a href="#"><span>마르고</span></a></li>

			<li class="m4"><a href="#"><span>닳도록</span></a>
				<div class="sub">
					<ul>
					<li><a href="#"><span>닳도록</span></a></li>
					<li><a href="#"><span>닳도</span></a></li>
					<li><a href="#"><span>닳</span></a></li>
					</ul>

				</div>
			</li>
			</ul>
		</div>
		<div class="aside">
			<ul>
			<li class="m1"><a href="#"><span>우리나라</span></a></li>
			<li class="m2"><a href="#"><span>만세</span></a>

				<div class="sub">
					<ul>
					<li><a href="#"><span>만세</span></a></li>
					<li><a href="#"><span>만만세</span></a></li>
					</ul>
				</div>
			</li>
			</ul>

		</div>
		<span class="gradient"></span>
	</div>
	<span class="shadow"></span>
</div>


</body>
</html>