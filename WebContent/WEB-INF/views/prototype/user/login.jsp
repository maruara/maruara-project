<%@page import="org.apache.commons.lang3.StringUtils"%>
<%@page import="com.web.common.WebConstants"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>

<link href="<c:url value="/resources/ui/prototype.css" />" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.7.1.min.js" />"></script>
<script type="text/javascript">
jQuery(function($) {
	
	// Warning
	$('#keepid').change(function(){
		if($('#keepid[checked]')){
			$('.warning').toggleClass('open');
		};
	});
	
	
	// Form Submit
	$('#login form').on('submit', function() {
		
		var $userId = $('#userId', this);
		if(!$userId.val()) {
			alert('아이디를 입력해 주세요.');
			$userId.focus();
			return false;
		}
		
		var $userPw = $('#userPw', this);
		if(!$userPw.val()) {
			alert('비밀번호를 입력해 주세요.');
			$userPw.focus();
			return false;
		}
		
		$.ajax({
			url:'<c:url value="/prototype/user/loginproc.json" />'
		  , type: 'POST'
		  , data: {userId: $userId.val(), userPw: $userPw.val()}
		  , dataType: 'json'
		  , success: function(data) {
			  if(data.userData) {
// 				  alert('로그인 되었습니다.');
				  location.href = data.returnUrl;
// 				  location.href = '<c:url value="/prototype/user/login.view" />';
			  } else {
				  alert('일치하는 정보가 없습니다.');
			  }
		    }
		  , error: function() {
			  alert('서버 에러');
		  }
		});
		
		return false;
	});
	
	
	
	$('#btn_logout').on('click', function() {
		location.href = '<c:url value="/prototype/user/logout" />';
	});
	
	
	$('#selUser').on('change', function() {
		if($(this).val()) {
			var user = $(this).val().split('|');
			$('#userId').val(user[0]);
			$('#userPw').val(user[1]);
			$('#g_login').submit();
		}
	});
	
});
</script>

</head>
<body>


<p>
	<a href="<c:url value="/prototype" />">prototype</a>
</p>

<c:choose>
	<c:when test="${empty sessionScope.userSession }">
		
		<div id="login" class="g_login">
			<form action="" id="g_login" class="g_login">
				<fieldset>
					<legend>Login</legend>
					<div class="item">
						<label for="uid" class="userId">ID</label>
						<input name="userId" type="text" value="test" id="userId" class="i_text uid" />
					</div>
					<div class="item">
						<label for="upw" class="userPw">PASSWORD</label>
						<input name="userPw" type="password" value="1" id="userPw" class="i_text upw" />
					</div>
					<p class="keeping"><input name="" type="checkbox" value="" id="keepid" class="i_check"><label for="keepid">로그인 유지</label></p>
					<p class="warning">브라우저를 닫더라도 로그인이 계속 유지될 수 있습니다. 로그인 유지 기능을 사용할 경우 다음 접속부터는 로그인을 하실 필요가 없습니다. 단, 게임방, 학교 등 공공장소에서 이용 시 개인정보가 유출될 수 있으니 꼭 로그아웃을 해주세요.</p>
					<span class="btn_login"><input type="submit" value="로그인" /></span>
					<ul class="help">
						<li class="first"><a href="#">아이디/비밀번호 찾기</a></li>
						<li><a href="#">회원 가입</a></li>
						<li><a href="#o_login" class="o_anchor">Open ID</a></li>
					</ul>
				</fieldset>
			</form>
		</div>
		
		<select name="selUser" id="selUser">
			<option value="">사용자</option>
			<option value="test|1">test (홍길동)</option>
			<option value="test2|1">test2 (홍길동2)</option>
		</select>
		
	</c:when>
	<c:otherwise>
		
		<table class="tbl_type" border="1" cellspacing="0" summary="로그인" style="width:400px; margin:0 auto;">
			<caption>로그인</caption>
			<colgroup>
				<col style="width:30%;" />
				<col style="width:70%;" />
			</colgroup>
			<tbody>
				<tr>
					<th scope="col" colspan="2" style="text-align:center;">로그인 완료</th>
				</tr>
				<tr>
					<th scope="row">사용자 아이디</th>
					<td>
						${sessionScope.userSession.USER_ID }
					</td>
				</tr>
				<tr>
					<th scope="row">사용자명</th>
					<td>
						${sessionScope.userSession.USER_NM }
					</td>
				</tr>
			</tbody>	
		</table>
		
		<div class="btn_center">
			<span class="btn_pack medium"><button type="button" id="btn_logout">로그아웃</button></span>
		</div>
		
	</c:otherwise>
</c:choose>

</body>
</html>