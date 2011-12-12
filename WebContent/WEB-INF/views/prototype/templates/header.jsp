<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>

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

<span class="btn_pack small"><button type="button" onclick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_purple');">mc_purple</button></span>
<span class="btn_pack small"><button type="button" onclick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_violet');">mc_violet</button></span>
<span class="btn_pack small"><button type="button" onclick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_orange');">mc_orange</button></span>
<span class="btn_pack small"><button type="button" onclick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_green');">mc_green</button></span>
<span class="btn_pack small"><button type="button" onclick="jQuery('div#menu').removeClass().addClass('menu'+' '+'mc_gray');">mc_gray</button></span>
<!-- class="mc_purple | mc_violet | mc_orange | mc_green | mc_gray"-->
<br />

<div id="menu" class="menu mc_violet">
	<div class="inset">
		<div class="major">
		<!-- class="major + (m1~m12)"-->
			<ul>
			<li class="m1">
				<a href="<c:url value="/resources/html/view.html" />"><span>Resource HTML</span></a>
			</li>
			<li class="m2">
				<a href="<c:url value="/prototype/board" />"><span>게시판</span></a>
				<div class="sub">
					<ul>
						<li><a href="<c:url value="/prototype/board" />"><span>게시판 1</span></a></li>
					</ul>
				</div>
			</li>
			<li class="m3">
				<a href="<c:url value="/prototype/db/index.view" />"><span>DB</span></a>
			</li>
			<li class="m4">
				<a href="<c:url value="/prototype/common/locale" />"><span>Locale</span></a>
				<div class="sub">
					<ul>
						<li><a href="#"><span>메뉴 4-1</span></a></li>
						<li><a href="#"><span>메뉴 4-2</span></a></li>
						<li><a href="#"><span>메뉴 4-3</span></a></li>
					</ul>
				</div>
			</li>
			</ul>
		</div>
		<div class="aside">
			<ul>
			<li class="m1">
				<c:choose>
					<c:when test="${empty sessionScope.userSession }">
						<a href="<c:url value="/prototype/user/login.view" />"><span>로그인</span></a>
						<div class="sub">
							<ul>
								<li><a href="<c:url value="/prototype/user/login.view" />"><span>로그인</span></a></li>
								<li><a href="#"><span>팝업 로그인</span></a></li>
							</ul>
						</div>
					</c:when>
					<c:otherwise>
						<a href="<c:url value="/prototype/user/logout" />"><span>로그아웃</span></a>
					</c:otherwise>
				</c:choose>
			</li>
			<li class="m2">
				<a href="#"><span>관리자</span></a>
				<div class="sub">
					<ul>
						<li><a href="#"><span>관리자 메뉴 1</span></a></li>
						<li><a href="#"><span>관리자 메뉴 2</span></a></li>
					</ul>
				</div>
			</li>
			</ul>
		</div>
		<span class="gradient"></span>
	</div>
	<span class="shadow"></span>
</div>
