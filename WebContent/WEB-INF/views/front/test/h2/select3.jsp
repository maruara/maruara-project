<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>

</head>
<body>

<h1>H2 Database Data Select Page</h1>


<table>
	<caption>JSTL 사용</caption>
	<tr>
		<th>순번</th>
		<th>COL1</th>
		<th>COL2</th>
		<th>COL3</th>
		<th>COL4</th>
		<th>COL5</th>
		<th>COL6</th>
	</tr>

	<c:forEach items="${list}" var="data" varStatus="status">
	<tr>
		<td>${status.count}</td>
		<td>${data.COL1}</td>
		<td>${data.COL2}</td>
		<td>${data.COL3}</td>
		<td>${data.COL4}</td>
		<td>${data.COL5}</td>
		<td>${data.COL6}</td>
	</tr>
	</c:forEach>
	
</table>




</body>
</html>