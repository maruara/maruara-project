<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="util" uri="http://com.web/util" %>


<a href="<c:url value="/front/prototype/board/write.view" />">글쓰기</a>


<table class="bbs_property" border="1" cellspacing="0" summary="게시판 목록">
	<caption>게시판 목록</caption>
	<colgroup>
		<col style="width:10%;" />
		<col style="width:50%;" />
		<col style="width:20%;" />
		<col style="width:20%;" />
	</colgroup>
	<thead>
		<tr>
			<th abbr="번호" scope="col">번호</th>
			<th scope="col">제목</th>
			<th scope="col">작성자</th>
			<th scope="col">작성일</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${list }" var="row" varStatus="status">
			<tr>
				<td scope="row">${row.NO }</td>
				<td class="title"><a href="<c:url value="/front/prototype/board/read/${row.NO }" />">${row.TITLE }</a></td>
				<td>${row.USER_NM }</td>
				<td><fmt:formatDate value="${row.REGDATE}" pattern="yyyy-MM-dd" /></td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<util:pagination paginationInfo="${paginationInfo }" />
