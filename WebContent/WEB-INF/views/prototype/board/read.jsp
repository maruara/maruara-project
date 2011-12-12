<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<c:set var="newline" value="<%= \"\n\" %>" />

<script type="text/javascript">
jQuery(function($) {
	$('#btn_modify').on('click', function() {
		location.href = '<c:url value="/prototype/board/modify/${data.NO}" />';
	});
	
	$('#btn_delete').on('click', function() {
		if(confirm('삭제하시겠습니까?'))
			location.href = '<c:url value="/prototype/board/delete/${data.NO}" />';
	});
	
	$('#btn_list').on('click', function() {
		location.href = '<c:url value="/prototype/board" />';
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
			<th scope="row">제목</th>
			<td>
				${data.TITLE }
			</td>
		</tr>
		<tr>
			<th scope="row">작성자</th>
			<td>
				${data.CREATE_USER_ID }
			</td>
		</tr>
		<tr>
			<th scope="row">기간</th>
			<td>
				<fmt:formatDate value="${data.START_DT }" pattern="yyyy-MM-dd"/> ~
				<fmt:formatDate value="${data.END_DT }" pattern="yyyy-MM-dd"/>
			</td>
		</tr>
		<tr>
			<th scope="row">내용</th>
			<td>
				${fn:replace(data.MEMO, newline, '<br/>')}
			</td>
		</tr>
	</tbody>
</table>

<div class="btn_center">
	<span class="btn_pack medium"><button type="button" id="btn_modify">수정</button></span>
	<span class="btn_pack medium"><button type="button" id="btn_delete">삭제</button></span>
	<span class="btn_pack medium"><button type="button" id="btn_list">목록</button></span>
</div>

