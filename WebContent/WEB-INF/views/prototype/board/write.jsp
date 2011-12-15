<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<script type="text/javascript">
jQuery(function($) {
	
	// 취소 버튼
	$('#btn_cancel').on('click', function() {
		location.href = "<c:url value="/prototype/board" />";
	});
	
	// 저장
	$('form').on('submit', function() {
		
		if(!$.trim($('#subject', this).val())) {
			alert('제목은 필수 입력 항목 입니다.');
			$('#subject', this).focus();
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


<div class="location">
	홈 &gt; 게시판1 &gt; 쓰기
</div>

<div class="title">
	<h2>게시판1</h2>
</div>


<form action="<c:url value="/prototype/board" />" name="frm" method="post">
	<input type="hidden" name="code" value="${param.code }" />
	
	<c:if test="${not empty data }">
		<input type="hidden" name="no" value="${data.NO }" />
		<input type="hidden" name="_method" value="put" />
	</c:if>

	<div class="form_table1">
		<table summary="게시판 글쓰기">
			<colgroup>
				<col style="width:15%;" />
				<col style="width:85%;" />
			</colgroup>
			<tbody>
				<tr>
					<th scope="row">
						<label for="subject">제목</label>
					</th>
					<td>
						<input type="text" name="subject" id="subject" style="width:90%;" class="i_text" title="제목" value="${data.TITLE }" />
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label for="memo">내용</label>
					</th>
					<td>
						<textarea name="memo" id="memo" style="width:90%; height:200px;" class="i_text">${data.MEMO}</textarea>
					</td>
				</tr>
				<tr>
					<th scope="row">
						공개여부
					</th>
					<td>
						<input type="radio" id="openYnY" name="openYn" value="Y" class="i_radio" checked="checked" /><label for="openYnY">공개</label>
						<input type="radio" id="openYnN" name="openYn" value="N" class="i_radio" /><label for="openYnN">비공개</label>
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label for="">파일</label>
					</th>
					<td>
						
					</td>
				</tr>
				<c:if test="${not empty data }">
					<tr>
						<th scope="row">작성자</th>
						<td>${data.CREATE_USER_ID }</td>
					</tr>
					<tr>
						<th scope="row">작성일</th>
						<td><fmt:formatDate value="${data.REGDATE}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
					</tr>
				</c:if>
			</tbody>
		</table>
	</div>
	
	<div class="btn_center">
		<span class="btn_pack medium icon"><span class="add"></span><input type="submit" value="저장" /></span>
		<span class="btn_pack medium icon"><span class="delete"></span><button type="button" id="btn_cancel">취소</button></span>
	</div>
</form>
