<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="util" uri="http://com.web/util" %>



<c:set var="newline" value="<%= \"\n\" %>" />

<script type="text/javascript">
jQuery(function($) {
	$('#btn_modify').on('click', function() {
		location.href = '<c:url value="/prototype/board/${paramMap.code}/modify/${boardData.SEQ}" /><util:param />';
	});
	
	$('#btn_delete').on('click', function() {
		$.confirm({
			msg : '삭제하시겠습니까?',
			success : function() {
				location.href = '<c:url value="/prototype/board/${paramMap.code}/delete/${boardData.SEQ}" /><util:param />';
			}
		});
	});
	
	$('#btn_reply').on('click', function() {
		location.href = '<c:url value="/prototype/board/${paramMap.code}/reply/${boardData.SEQ}" /><util:param />';
	});
	
	$('#btn_list').on('click', function() {
		location.href = '<c:url value="/prototype/board/${paramMap.code}" /><util:param />';
	});
});
</script>


<div class="location">
	홈 &gt; 게시판1 &gt; 상세보기
</div>

<div class="title">
	<h2>게시판1</h2>
</div>


<table class="tbl_type" summary="게시판 보기">
	<caption>게시판 보기</caption>
	<colgroup>
		<col style="width:15%;" />
		<col style="width:85%;" />
	</colgroup>
	<tbody>
		<tr>
			<th scope="row">
				조회수
			</th>
			<td>
				${boardData.READ_CNT }
			</td>
		</tr>
		<tr>
			<th scope="row">제목</th>
			<td>
				<c:out value="${boardData.SUBJECT }" />
			</td>
		</tr>
		<tr>
			<th scope="row">작성자</th>
			<td>
				${boardData.CREATE_USER_NM }
			</td>
		</tr>
		<tr>
			<th scope="row">내용</th>
			<td>
				<%
				/*
				<c:set var="memo"><c:out value="${boardData.MEMO }" /></c:set>
				${fn:replace(memo, newline, '<br/>')}
				*/
				%>
				${util:nl2br(data.MEMO) }
			</td>
		</tr>
		<tr>
			<th scope="row">
				공개여부
			</th>
			<td>
				${boardData.OPEN_YN_NM }
			</td>
		</tr>
		<tr>
			<th scope="row">
				<label for="">파일</label>
			</th>
			<td>
				
			</td>
		</tr>
		<tr>
			<th scope="row">작성일</th>
			<td><fmt:formatDate value="${boardData.CREATE_DT}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
		</tr>
	</tbody>
</table>


<div class="btn_center">
	<c:if test="${sessionScope.userSession.USER_ID eq boardData.CREATE_USER_ID}">
		<span class="btn_pack medium"><button type="button" id="btn_modify">수정</button></span>
		<span class="btn_pack medium"><button type="button" id="btn_delete">삭제</button></span>	
	</c:if>
	<span class="btn_pack medium"><button type="button" id="btn_reply">답글</button></span>
	<span class="btn_pack medium"><button type="button" id="btn_list">목록</button></span>
</div>




<c:if test="${fn:length(preNextList) > 0}">
	<table class="tbl_type_list" summary="이전 다음글 정보">
		<colgroup>
			<col style="width:10%;" />
			<col style="width:50%;" />
			<col style="width:10%;" />
			<col style="width:15%;" />
			<col style="width:15%;" />
		</colgroup>
		<tbody>
			<c:forEach items="${preNextList }" var="row" varStatus="status">
				<tr>
					<td scope="row">${row.SEQ }</td>
					<td class="title" style="padding-left:${(row.LVL-1) * 15}px;">
						<c:if test="${row.LVL gt 1}">
							<img src="<c:url value="/resources/images/prototype/table/ioc-reply.gif" />" />
						</c:if>
						<c:if test="${row.P_USE_YN eq 'N' }">
							<span class="comment">[원글이 삭제된 답글]</span>
						</c:if>
						<a href="<c:url value="/prototype/board/${paramMap.code }/read/${row.SEQ }" /><util:param />" title="<c:out value="${row.SUBJECT }" />">
							<c:choose>
								<c:when test="${paramMap.seq eq row.SEQ }">
									<strong><c:out value="${row.SUBJECT }" /></strong>
								</c:when>
								<c:otherwise>
									<c:out value="${row.SUBJECT }" />
								</c:otherwise>
							</c:choose>
						</a>
						<img src="<c:url value="/resources/images/prototype/table/ic_pic.gif" />" alt="첨부이미지" class="pic" />
						<span class="comment">[<strong>5</strong>]</span>
						<c:if test="${row.NEW_YN eq 'Y'}">
							<img src="<c:url value="/resources/images/prototype/table/ic_new.gif" />" alt="새글" class="new" />
						</c:if>
					</td>
					<td>${row.READ_CNT }</td>
					<td>${row.CREATE_USER_NM }</td>
					<td><fmt:formatDate value="${row.CREATE_DT}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</c:if>
