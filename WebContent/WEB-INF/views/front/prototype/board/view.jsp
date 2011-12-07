<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<c:set var="newline" value="<%= \"\n\" %>" />

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>
<link href="<c:url value="/resources/ui/layout.css" />" rel="stylesheet" type="text/css" />
<link href="<c:url value="/resources/ui/prototype.css" />" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.7.1.min.js" />"></script>
<script type="text/javascript">
jQuery(function($) {
	$('#btn_modify').on('click', function() {
		location.href = '<c:url value="/front/prototype/board/modify?no=${data.NO}" />';
	});
	
	$('#btn_delete').on('click', function() {
		if(confirm('삭제하시겠습니까?'))
			location.href = '<c:url value="/front/prototype/board/delete?no=${data.NO}" />';
	});
	
	$('#btn_list').on('click', function() {
		location.href = '<c:url value="/front/prototype/board/list" />';
	});
});



function getLocale() {
	 if ( navigator ) {
	     if ( navigator.language ) {
	         return navigator.language;
	     }
	     else if ( navigator.browserLanguage ) {
	         return navigator.browserLanguage;
	     }
	     else if ( navigator.systemLanguage ) {
	         return navigator.systemLanguage;
	     }
	     else if ( navigator.userLanguage ) {
	         return navigator.userLanguage;
	     }
	 }
	} 
	
document.title = getLocale();

</script>
</head>
<body>

<spring:message code="messages.test" />
<%=java.util.Locale.getDefault() %>
<%
out.println(session.getAttribute(org.springframework.web.servlet.i18n.SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME));
out.println(org.springframework.web.servlet.i18n.SessionLocaleResolver.LOCALE_SESSION_ATTRIBUTE_NAME);

%>

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
				${fn:replace(data.MEMO, newline, '<br/>')}
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