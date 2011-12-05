<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<c:set var="newline" value="<%= \"\n\" %>" />

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>
<link type="text/css" href="<c:url value="/resources/css/common.css" />" rel="stylesheet"  />
<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.7.1.min.js" />"></script>
<script type="text/javascript">
jQuery(function($) {
	$('#btn_modify').on('click', function() {
		location.href = '<c:url value="/prototype/board/modify?no=${data.NO}" />';
	});
	
	$('#btn_delete').on('click', function() {
		if(confirm('삭제하시겠습니까?'))
			location.href = '<c:url value="/prototype/board/delete?no=${data.NO}" />';
	});
	
	$('#btn_list').on('click', function() {
		location.href = '<c:url value="/prototype/board/list" />';
	});
});
</script>
</head>
<body>

<div class="gnb">
	<p><a href="<c:url value="/" />">홈</a></p>
</div>


<table class="tbl_type" border="1" cellspacing="0" summary="게시판 보기">
	<caption>게시판 보기</caption>
	<colgroup>
		<col style="width:15%;" />
		<col style="width:85%;" />
	</colgroup>
	<tbody>
		<tr>
			<th scope="row">제목</th>
			<td>
				${data.TITLE }
			</td>
		</tr>
		<tr>
			<th scope="row">작성자</th>
			<td>
				${data.USER_NM }
			</td>
		</tr>
		<tr>
			<th scope="row">내용</th>
			<td>
				${fn:replace(data.CONTENT, newline, '<br/>')}
			</td>
		</tr>
	</tbody>
</table>

<div class="btn">
	<button type="button" id="btn_modify">수정</button>
	<button type="button" id="btn_delete">삭제</button>
	<button type="button" id="btn_list">목록</button>
</div>

</body>
</html>