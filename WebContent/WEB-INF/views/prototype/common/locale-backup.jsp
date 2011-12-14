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
<link type="text/css" href="<c:url value="/resources/ui/redmond/jquery-ui-1.8.16.custom.css" />" rel="stylesheet" />
<link type="text/css" href="<c:url value="/resources/ui/prototype.css" />" rel="stylesheet" />
<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.7.1.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/jquery-ui-1.8.16.custom.min.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/i18n/jquery.i18n.properties-min-1.0.9.js" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/prototype.js?contextPath=${pageContext.request.contextPath}&locale=${pageContext.response.locale.language }" />"></script>
<script type="text/javascript" src="<c:url value="/resources/js/i18n/jquery.ui.datepicker-${pageContext.response.locale.language }.js" />"></script>
<script type="text/javascript">
jQuery(function($) {
	$('#date').datepicker();
	
	
	jQuery.i18n.properties({ 
		name:'message',
		path: contextPath+'/static/i18n/', 
		mode:'both',
		language: context.locale
//		, callback: function() { 
//			alert(msg.common.test); 
//			alert(jQuery.i18n.prop('msg.common.test')); 
//			alert(msg.common.test1('입니다')); 
//			alert(jQuery.i18n.prop('msg.common.test1', '입니다')); 
//		}
	});
	
	
	$('#txt1').text(msg.common.test);
	$('#txt2').text(msg.common.test1('입니다'));
});
</script>
</head>
<body>

<div class="gnb">
	<p><a href="<c:url value="/" />">홈</a></p>
</div>

<a id="default" href="<c:url value="/prototype/common/locale" />">default</a>
<br/>
<a href="<c:url value="/prototype/common/locale?locale=ko_KR" />">ko_KR</a>
<br/>
<a href="<c:url value="/prototype/common/locale?locale=en_US" />">en_US</a>
<br/>
<br/>
<br/>
SESSION : ${sessionScope }
<br />
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
<br />
<br />
<span id="txt1"></span>
<br />
<span id="txt2"></span>
<br />
<br />
<input type="text" id="date" name="date" value="" readonly="readonly" class="inputType1" style="width:70px" title="일자" />

</body>
</html>