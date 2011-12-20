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
		location.href = '<c:url value="/prototype/board/${paramMap.code}/modify/${data.SEQ}" /><util:param />';
	});
	
	$('#btn_delete').on('click', function() {
		$.confirm({
			msg : '삭제하시겠습니까?',
			success : function() {
				location.href = '<c:url value="/prototype/board/${paramMap.code}/delete/${data.SEQ}" /><util:param />';
			}
		});
	});
	
	$('#btn_reply').on('click', function() {
		location.href = '<c:url value="/prototype/board/${paramMap.code}/reply/${data.SEQ}" /><util:param />';
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


<table class="tbl_type" border="1" cellspacing="0" summary="게시판 보기">
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
				${data.READ_CNT }
			</td>
		</tr>
		<tr>
			<th scope="row">제목</th>
			<td>
				<c:out value="${data.SUBJECT }" />
			</td>
		</tr>
		<tr>
			<th scope="row">작성자</th>
			<td>
				${data.CREATE_USER_NM }
			</td>
		</tr>
		<tr>
			<th scope="row">내용</th>
			<td>
				<%
				/*
				<c:set var="memo"><c:out value="${data.MEMO }" /></c:set>
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
				${data.OPEN_YN_NM }
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
			<td><fmt:formatDate value="${data.CREATE_DT}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
		</tr>
	</tbody>
</table>


<div class="btn_center">
	<c:if test="${sessionScope.userSession.USER_ID eq data.CREATE_USER_ID}">
		<span class="btn_pack medium"><button type="button" id="btn_modify">수정</button></span>
		<span class="btn_pack medium"><button type="button" id="btn_delete">삭제</button></span>	
	</c:if>
	<span class="btn_pack medium"><button type="button" id="btn_reply">답글</button></span>
	<span class="btn_pack medium"><button type="button" id="btn_list">목록</button></span>
</div>

