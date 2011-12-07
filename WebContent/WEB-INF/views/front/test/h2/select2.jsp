<%@page import="java.util.Date"%>
<%@page import="com.web.beans.test.H2TestBean"%>
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
	<caption>JSP Tag 사용</caption>
	<tr>
		<th>COL1</th>
		<th>COL2</th>
		<th>COL3</th>
		<th>COL4</th>
		<th>COL5</th>
		<th>COL6</th>
	</tr>
<%
/*
List<H2TestBean> list = (List<H2TestBean>)request.getAttribute("list");
for(H2TestBean data : list) {
%>
	<tr>
		<td><%=data.getCol1() %></td>
		<td><%=data.getCol2() %></td>
		<td><%=data.getCol3() %></td>
		<td><%=data.getCol4() %></td>
		<td><%=data.getCol5() %></td>
		<td><%=data.getCol6() %></td>
		<td></td>
	</tr>
<%
}


@SuppressWarnings(value="unchecked")
List<Map<?,?>> list = (List<Map<?,?>>)request.getAttribute("list");
for(Map<?,?> data : list) {
%>
	<tr>
		<td><%=data.get("COL1") %></td>
		<td><%=data.get("COL2") %></td>
		<td><%=data.get("COL3") %></td>
		<td><%=data.get("COL4") %></td>
		<td><%=data.get("COL5") %></td>
		<td><%=data.get("COL6") %></td>
		<td></td>
	</tr>
<%
}
*/




List<?> list = (List<?>)request.getAttribute("list");
Map<?,?> data = null;
for(int i=0; i<list.size(); i++) {
	data = (Map<?,?>)list.get(i);
%>
	<tr>
		<td><%=(Integer)data.get("COL1") %></td>
		<td><%=(String)data.get("COL2") %></td>
		<td><%=(String)data.get("COL3") %></td>
		<td><%=(String)data.get("COL4") %></td>
		<td><%=(Date)data.get("COL5") %></td>
		<td><%=(Date)data.get("COL6") %></td>
		<td></td>
	</tr>
<%
}
%>
</table>






</body>
</html>