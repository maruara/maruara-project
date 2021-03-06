<%@page import="org.springframework.web.servlet.LocaleResolver"%>
<%@page import="java.util.Locale"%>
<%@page import="org.springframework.web.servlet.support.RequestContext"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<script type="text/javascript">
jQuery(function($) {
	$('#date').datepicker();
	
	$('#txt1').text(msg.common.test);
	$('#txt2').text(msg.common.test1('입니다'));
});
</script>

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

