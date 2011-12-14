<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="util" uri="http://com.web/util" %>

<div class="location">
	홈 &gt; 게시판1 &gt; 목록
</div>

<div class="title">
	<h2><fmt:message key="board.title" /></h2>
</div>

<table class="bbs_property" border="1" cellspacing="0" summary="<fmt:message key="board.list.summary" />">
	<caption><fmt:message key="board.list.summary" /></caption>
	<colgroup>
		<col style="width:10%;" />
		<col style="width:50%;" />
		<col style="width:20%;" />
		<col style="width:20%;" />
	</colgroup>
	<thead>
		<tr>
			<th abbr="<fmt:message key="board.list.no" />" scope="col"><fmt:message key="board.list.no" /></th>
			<th scope="col"><fmt:message key="board.list.title" /></th>
			<th scope="col"><fmt:message key="board.list.createUser" /></th>
			<th scope="col"><fmt:message key="board.list.regdate" /></th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${list }" var="row" varStatus="status">
			<tr>
				<td scope="row">${row.NO }</td>
				<td class="title"><a href="<c:url value="/prototype/board/read/${row.NO }" />">${row.TITLE }</a></td>
				<td>${row.CREATE_USER_ID }</td>
				<td><fmt:formatDate value="${row.REGDATE}" pattern="yyyy-MM-dd" /></td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<util:pagination paginationInfo="${paginationInfo }" />
