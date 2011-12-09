<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>

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
			<a href="#"><span>동해물과</span></a>
			<ul>
				<li class="active"><a href="#"><span>동해물과</span></a></li>
				<li><a href="#"><span>동해</span></a></li>
			</ul>
		</li>
		<li>
			<a href="#"><span>백두산이</span></a>
			<ul>
				<li><a href="#"><span>백두산이 마르고 닳도록</span></a></li>
				<li><a href="#"><span>백두산</span></a></li>
			</ul>
		</li>
		<li>
			<a href="#"><span>마르고</span></a>
		</li>
		<li>
			<a href="#"><span>닳도록</span></a>
			<ul>
				<li><a href="#"><span>닳도록</span></a></li>
				<li><a href="#"><span>닳도</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
				<li><a href="#"><span>닳</span></a></li>
			</ul>
		</li>
	</ul>
</div>
