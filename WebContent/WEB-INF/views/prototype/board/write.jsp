<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>
<link type="text/css" href="<c:url value="/resources/css/common.css" />" rel="stylesheet"  />
<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.7.1.min.js" />"></script>
<script type="text/javascript">
jQuery(function($) {
	$('#btn_cancel').on('click', function() {
		location.href = "<c:url value="/prototype/board/list" />";
	});
	
	$('form').on('submit', function() {
		
		if(!$.trim($('#title', this).val())) {
			alert('제목은 필수 입력 항목 입니다.');
			$('#title', this).focus();
			return false;
		}
		
		if(!$.trim($('#content', this).val())) {
			alert('내용은 필수 입력 항목 입니다.');
			$('#content', this).focus();
			return false;
		}
		
		<c:if test="${not empty data}">
			$(this).prop('action', '<c:url value="/prototype/board/update" />');
		</c:if>
		
		return true;
	});
});
</script>
</head>
<body>

<div class="gnb">
	<p><a href="<c:url value="/" />">홈</a></p>
</div>

<form action="<c:url value="/prototype/board/insert" />" name="frm" method="post">
	<c:if test="${not empty data }">
		<input type="hidden" name="no" value="${param.no }" />
	</c:if>

	<table class="tbl_type" border="1" cellspacing="0" summary="게시판 글쓰기">
		<caption>게시판 글쓰기</caption>
		<colgroup>
			<col style="width:15%;" />
			<col style="width:85%;" />
		</colgroup>
		<tbody>
			<tr>
				<th scope="row">제목</th>
				<td>
					<input type="text" name="title" id="title" style="width:90%;" class="inputType1" value="${data.TITLE }" />
				</td>
			</tr>
			<tr>
				<th scope="row">내용</th>
				<td>
					<textarea name="content" id="content" style="width:90%; height:200px;">${data.CONTENT}</textarea>
				</td>
			</tr>
			<c:if test="${not empty data }">
				<tr>
					<th scope="row">작성자</th>
					<td>${data.USER_NM }</td>
				</tr>
				<tr>
					<th scope="row">작성일</th>
					<td><fmt:formatDate value="${data.REGDATE}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
				</tr>
			</c:if>
		</tbody>
	</table>
	
	<div class="btn">
		<input type="submit" value="저장" />&nbsp;&nbsp;
		<button type="button" id="btn_cancel">취소</button>
	</div>
</form>



</body>
</html>