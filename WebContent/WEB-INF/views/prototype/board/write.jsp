<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<script type="text/javascript">
jQuery(function($) {
	$('#btn_cancel').on('click', function() {
		location.href = "<c:url value="/prototype/board/list" />";
	});
	
	$('form').on('submit', function() {
		
		if(!$.trim($('#title', this).val())) {
			alert('제목은 필수 입력 항목 입니다.');
			$('#title', this).focus();
			return false;
		}
		
		if(!$.trim($('#memo', this).val())) {
			alert('내용은 필수 입력 항목 입니다.');
			$('#memo', this).focus();
			return false;
		}
		
		return true;
	});
});
</script>


<form action="<c:url value="/front/prototype/board" />" name="frm" method="post">
	<c:if test="${not empty data }">
		<input type="hidden" name="no" value="${data.NO }" />
		<input type="hidden" name="_method" value="put" />
	</c:if>

	<table class="tbl_type" border="1" cellspacing="0" summary="게시판 글쓰기">
		<caption>게시판 글쓰기</caption>
		<colgroup>
			<col style="width:15%;" />
			<col style="width:85%;" />
		</colgroup>
		<tbody>
			<tr>
				<th scope="row">제목</th>
				<td>
					<input type="text" name="title" id="title" style="width:90%;" class="inputType1" value="${data.TITLE }" />
				</td>
			</tr>
			<tr>
				<th scope="row">내용</th>
				<td>
					<textarea name="memo" id="memo" style="width:90%; height:200px;">${data.MEMO}</textarea>
				</td>
			</tr>
			<tr>
				<th scope="row">파일</th>
				<td>
					
				</td>
			</tr>
			<c:if test="${not empty data }">
				<tr>
					<th scope="row">작성자</th>
					<td>${data.USER_NM }</td>
				</tr>
				<tr>
					<th scope="row">작성일</th>
					<td><fmt:formatDate value="${data.REGDATE}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
				</tr>
			</c:if>
		</tbody>
	</table>
	
	<div class="btn_center">
		<span class="btn_pack medium icon"><span class="add"></span><input type="submit" value="저장" /></span>
		<span class="btn_pack medium icon"><span class="delete"></span><button type="button" id="btn_cancel">취소</button></span>
	</div>
</form>
