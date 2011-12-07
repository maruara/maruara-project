<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>
<link href="<c:url value="/resources/ui/layout.css" />" rel="stylesheet" type="text/css" />
<link href="<c:url value="/resources/ui/prototype.css" />" rel="stylesheet" type="text/css" />

</head>
<body>

<div class="gnb">
	<p><a href="<c:url value="/" />">홈</a></p>
</div>

<a href="<c:url value="/front/prototype/common/lang?locale=ko_KR" />">ko_KR</a>
<br/>
<a href="<c:url value="/front/prototype/common/lang?locale=en_US" />">en_US</a>
<br/>
SESSION : ${sessionScope }
<br />
<spring:message code="messages.test" />
<br />
<fmt:message key="messages.test"/> 

</body>
</html>