<%@page import="org.springframework.web.servlet.LocaleResolver"%>
<%@page import="java.util.Locale"%>
<%@page import="org.springframework.web.servlet.support.RequestContext"%>
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

<a href="<c:url value="/prototype/common/locale?locale=ko_KR" />">ko_KR</a>
<br/>
<a href="<c:url value="/prototype/common/locale?locale=en_US" />">en_US</a>
<br/>
SESSION : ${sessionScope }
<br />
(new RequestContext(request)).getLocale().getLanguage() : <%=(new RequestContext(request)).getLocale().getLanguage()%>
<br />
response.getLocale() : <%=response.getLocale() %>
<br />
pageContext.response.locale : ${pageContext.response.locale }
<br />
pageContext.response.locale.language : ${pageContext.response.locale.language }
<br />
<c:out value="${pageContext.request.locale.language}" />_<c:out value="${pageContext.request.locale.country}" />
<br />
<spring:message code="messages.test" />
<br />
<fmt:message key="messages.test"/>

</body>
</html>