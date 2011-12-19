<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true"%>
<%@ page import="java.io.*" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<%
String msg = "ERROR";
String traceInfo = "";

if(exception != null) {
    log("WEB ERROR",exception);
    msg = exception.getMessage();
    
	ByteArrayOutputStream osbyte = new ByteArrayOutputStream();
	PrintStream ps = new PrintStream(osbyte);
	exception.printStackTrace(ps);
	traceInfo = osbyte.toString().replaceAll("\\n", "<br/>");
	ps.close();
	osbyte.close();
}
%>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8" />
<title><spring:message code="messages.common.errorPage" text="에러페이지" /></title>

<style type="text/css">
.wrap{width:90%; margin:0 auto;}
.title{text-align:center; font:bold 16px normal;}
.message{font-weight:bold;}
div div{margin:15px 0; line-height:1.2;}
.activity{text-align:center;}
</style>

</head>
<body>

BizException

<div class="wrap">
	<div class="title"><spring:message code="messages.common.errorPage" text="에러페이지" /></div>
	<div class="message"><%=msg %></div>
	<div><%=traceInfo %></div>
	<div class="activity">
		<input type="button" value="BACK" onclick="history.back();" />
	</div>
</div>

</body>
</html>