<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>

<link type="text/css" href="<c:url value="/resources/ui/prototype.css" />" rel="stylesheet"/>

<script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
<script type="text/javascript" src="<c:url value="/resources/js/jquery-ui-1.8.16.custom.min.js" />"></script>
<script src="<c:url value="/resources/js/prototype.js" />?contextPath=${pageContext.request.contextPath}" type="text/javascript"></script>
<script type="text/javascript">
jQuery(function($) {
	$('#btn_popup').on('click', function() {
		$.jconfirm({
			title:'삭제하시겠습니까?', 
			msg:'삭제시 <em>내공 30점</em>이 감산되며 삭제된 답변은<br/>복구 할 수 없습니다.',
			success:function() {
				alert('success');
			},
			cancel:function() {
				alert('cancel');
			},
			buttons:[
				{
					text:'확인1',
					callback : function() {
				 		alert('success1'); 
				 	}
				},
				{
					text:'취소1',
					callback : function() {
				 		alert('cancel1');
				 	}
				}
			],
			modal:true
		});
	});
	
});
</script>

</head>
<body>

<button id="btn_popup">팝업</button>

<%/* 
<div style="width:257px" class="ly_pop">
	<h1>답변을 삭제하시겠습니까?</h1>
	<p class="desc">
		삭제시 <em>내공 30점</em>이 감산되며 삭제된 답변은<br>복구 할 수 없습니다.
	</p>
	<div class="btn">
		<!--
		<span class="btn_pack medium"><button type="button" id="btn_modify">확인</button></span>
		-->
		<a href="#">
			<img alt=확인 src="<c:url value="/resources/images/prototype/popup/btn_confirm.gif" />" />
		</a>
		<a href="#">
			<img alt=취소 src="<c:url value="/resources/images/prototype/popup/btn_cancel.gif" />" />
		</a>
	</div>
	<a class="clse" href="#">
		<img alt=닫기 src="<c:url value="/resources/images/prototype/popup/btn_close_layer.gif" />" />
	</a>
</div>
*/%>

</body>
</html>