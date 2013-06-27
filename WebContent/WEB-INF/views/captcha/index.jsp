<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>

<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.7.1.min.js" />"></script>
<script>
jQuery(function($) {
	$('#j_captcha_response').on('keyup', function() {
		var _self = $(this);
		var val = _self.val();
		if(val) {
			_self.val(val.toUpperCase());
		}
	});


	var _jcaptchaCarousel = $('#jcaptchaCarousel');
	$('#btnCaptchaReload').on('click', function() {
		$.ajax({
			url : '<c:url value="/captcha/jcaptchaImage.json" />',
			dataType : 'json',
			success : function(data, textStatus, jqXHR) {
				if(data.captchaCode) {
					_jcaptchaCarousel
						.empty()
						.append($('<img />', {src:'data:image/jpg;base64,' + data.captchaCode}));
				} else {
					alert('이미지 새로고침에 실패하였습니다.');
				}
			},
			error : function(jqXHR, textStatus, errorThrown) {
				console.log('jqXHR : ' + jqXHR);
				console.log('textStatus : ' + textStatus);
				console.log('errorThrown : ' + errorThrown);
				alert('ERROR : ' + textStatus);
			}
		});
	}).trigger('click');
	
});
</script>

</head>
<body>

<form action="<c:url value="/captcha/insert" />" method="post">
	<div id="jcaptchaCarousel">
<%-- 		<img src="<c:url value="/captcha/jcaptcha" />" style="border:1px solid #999;" /> --%>
	</div>
	<div>
		<input type="button" value="이미지 새로고침" id="btnCaptchaReload" />
	</div>
	<div>
		<input type="text" name="j_captcha_response" id="j_captcha_response" style="ime-mode:disabled;" />
	</div>
	<div>
		<input type="submit" value="전송" />	
	</div>
</form>

</body>
</html>