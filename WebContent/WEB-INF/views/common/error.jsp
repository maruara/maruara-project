<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isErrorPage="true"%>
<%@ page import="java.io.*" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
String msg = "ERROR";
String traceInfo = "";

if( exception != null ){
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

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><fmt:message key="messages.common.errorPage"/></title>

<link type="text/css" href="${pageContext.request.contextPath}/resources/ui/layout.css" rel="stylesheet" charset="UTF-8" />
<style type="text/css">
.wrap{width:90%; margin:0 auto;}
.title{text-align:center; font:bold 16px normal;}
.message{font-weight:bold;}
div div{margin:15px 0; line-height:1.2;}
.activity{text-align:center;}
</style>

</head>
<body>

<div class="wrap">
	<div class="title"><fmt:message key="messages.common.errorPage"/></div>
	<div class="message"><%=msg %></div>
	<div><%=traceInfo %></div>
	<div class="activity">
		<input type="button" value="BACK" onclick="history.back();" />
	</div>
</div>

</body>
</html>