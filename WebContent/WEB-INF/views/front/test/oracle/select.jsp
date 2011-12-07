<%@page import="java.util.List"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Oracle Test</title>
</head>
<body>

<h1>${pageContext.request.requestURI}</h1>

<table>
	<tr>
		<th>ID</th>
		<th>PW</th>
		<th>NAME</th>
		<th>ADDR</th>
		<th>PHONE</th>
		<th>REGDATE</th>
		<th>MODDATE</th>
		<th>MEMO</th>
	</tr>
<c:forEach items="${list}" var="data">
	<tr>
		<td>${data.ID}</td>
		<td>${data.PW}</td>
		<td>${data.NAME}</td>
		<td>${data.ADDR}</td>
		<td>${data.PHONE}</td>
		<td>${data.REGDATE}</td>
		<td>${data.MODDATE}</td>
		<td>${data.MEMO}</td>
	</tr>
</c:forEach>
</table>

</body>
</html>