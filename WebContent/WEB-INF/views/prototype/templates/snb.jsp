<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>



<script type="text/javascript">
jQuery(function($){
	
	// Side Menu
	var menu_v = $('div.menu_v');
	var sItem = menu_v.find('>ul>li');
	var ssItem = menu_v.find('>ul>li>ul>li');
	var lastEvent = null;
	
	sItem.find('>ul').css('display','none');
	menu_v.find('>ul>li>ul>li[class=active]').parents('li').attr('class','active');
	menu_v.find('>ul>li[class=active]').find('>ul').css('display','block');

	function menu_vToggle(event){
		var t = $(this);
		
		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function(){ lastEvent=null }, 200);
		
		if (t.next('ul').is(':hidden')) {
			sItem.find('>ul').slideUp(100);
			t.next('ul').slideDown(100);
		} else if(!t.next('ul').length) {
			sItem.find('>ul').slideUp(100);
		} else {
			t.next('ul').slideUp(100);
		}
		
		if (t.parent('li').hasClass('active')){
			t.parent('li').removeClass('active');
		} else {
			sItem.removeClass('active');
			t.parent('li').addClass('active');
		}
	}
	sItem.find('>a').click(menu_vToggle).focus(menu_vToggle);
	
	function subMenuActive(){
		ssItem.removeClass('active');
		$(this).parent(ssItem).addClass('active');
	}; 
	ssItem.find('>a').click(subMenuActive).focus(subMenuActive);
	
	//icon
	menu_v.find('>ul>li>ul').prev('a').append('<span class="i"></span>');
});
</script>


<div id="menu_v" class="menu_v">
	<ul>
		<li>
			<a href="#" onclick="return false;"><span>게시판1</span></a>
			<ul>
				<li class="active"><a href="<c:url value="/prototype/board?code=${param.code}" />"><span>목록</span></a></li>
				<li><a href="<c:url value="/prototype/board/write?code=${param.code}" />"><span>등록</span></a></li>
			</ul>
		</li>
	</ul>
</div>


<%
/*

<script type="text/javascript">
jQuery(function($){
	
// 	var icons = {
// 		header: "ui-icon-circle-arrow-e",
// 		headerSelected: "ui-icon-circle-arrow-s"
// 	};
	
	$("#sideMenu").accordion({
// 		icons: icons,
		active:0,
		header:'h3',
		autoHeight:false,
		animated:false,
		collapsable: true
// 		,create:function(event, ui) {
// 			$('<span />', {'class':'ui-icon ui-icon-bullet'}).insertBefore('#sideMenu>ul>li>a');
// 		}
	});
});
</script>

<div id="sideMenu">
	<h3><a href="<c:url value="/prototype/board" />">게시판1</a></h3>
	<ul>
		<li class="active"><a href="<c:url value="/prototype/board" />">목록</a></li>
		<li><a href="<c:url value="/prototype/board/write" />">등록</a></li>
	</ul>
	<h3><a href="<c:url value="/prototype/board" />">게시판1</a></h3>
	<ul>
		<li><a href="#">테스트</a></li>
	</ul>
</div>

*/
%>