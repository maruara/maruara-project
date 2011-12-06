<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Insert title here</title>
</head>
<body>

<h2>인덱스 페이지</h2>

<ol>
	<li>
		Prototype
		<ul>
			<li><a href="<c:url value="/prototype/db/connect" />">DB Connection</a></li>
			<li><a href="<c:url value="/resources/html/index.html" />">HTML</a></li>
			<li><a href="<c:url value="/prototype/user/login.view" />">Login</a></li>
			<li><a href="<c:url value="/prototype/board/list" />">board</a></li>
			<li><a href="<c:url value="/prototype/db/tx" />">Transaction</a></li>
		</ul>
	</li>
</ol>

</body>
</html>