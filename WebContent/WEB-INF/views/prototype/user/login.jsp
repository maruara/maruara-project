<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>
<link type="text/css" href="<c:url value="/resources/css/common.css" />" rel="stylesheet"  />
<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.7.1.min.js" />"></script>
<script type="text/javascript">
jQuery(function($) {
	$('form').on('submit', function() {
		
		var userIdVal = $.trim($('#userId', this).val());
		if(!userIdVal) {
			alert('아이디를 입력해 주세요.');
			$('#userId', this).focus();
			return false;
		}
		
		var userPwVal = $.trim($('#userPw', this).val());
		if(!userPwVal) {
			alert('비밀번호를 입력해 주세요.');
			$('#userPw', this).focus();
			return false;
		}
		
		$.ajax({
			url:'<c:url value="/prototype/user/loginproc.json" />'
		  , type: 'POST'
		  , data: {userId:userIdVal, userPw:userPwVal}
		  , dataType: 'json'
		  , success: function(data) {
			  if(data.userData) {
				  alert('로그인 되었습니다.');
				  location.href = '<c:url value="/prototype/user/login.do" />';
			  } else {
				  alert('존재하지 않은 사용자입니다.');
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
	
	
});
</script>
</head>
<body>

<div class="gnb">
	<p><a href="<c:url value="/" />">홈</a></p>
</div>


<c:choose>
	<c:when test="${not empty sessionScope.userSession }">
		
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
			
			<div class="btn">
				<button id="btn_logout">로그아웃</button>
			</div>
		
		
		
	</c:when>
	<c:otherwise>
		
		<form>
			<table class="tbl_type" border="1" cellspacing="0" summary="로그인" style="width:400px; margin:0 auto;">
				<caption>로그인</caption>
				<colgroup>
					<col style="width:30%;" />
					<col style="width:70%;" />
				</colgroup>
				<tbody>
					<tr>
						<th scope="row">아이디</th>
						<td>
							<input type="text" name="userId" id="userId" style="width:90%" class="inputType1" value="test" />
						</td>
					</tr>
					<tr>
						<th scope="row">비밀번호</th>
						<td>
							<input type="password" name="userPw" id="userPw" style="width:90%" class="inputType1" value="1" />
						</td>
					</tr>
				</tbody>	
			</table>
			
			<div class="btn">
				<input type="submit" value="로그인" />
			</div>
		</form>
		
	</c:otherwise>
</c:choose>

</body>
</html>