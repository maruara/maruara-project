<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="util" uri="http://com.web/util" %>

<script type="text/javascript">
jQuery(function($) {
	
	// 취소 버튼
	$('#btn_cancel').on('click', function() {
		<c:choose>
			<c:when test="${empty mode}">
				location.href = '<c:url value="/prototype/board/${paramMap.code}" /><util:param />';
			</c:when>
			<c:otherwise>
				location.href = '<c:url value="/prototype/board/${paramMap.code}/read/${paramMap.seq}" /><util:param />';
			</c:otherwise>
		</c:choose>
	});
	
	
	
	// 저장
	$('form').on('submit', function(e, type) {
		
		if(type == 'submit') {
			<c:if test="${mode eq 'reply'}">
				$(this).prop('action', '<c:url value="/prototype/board/${paramMap.code }/reply/${paramMap.seq}" />');
			</c:if>
			return true;
		}
		
		if(!$.trim($('#subject', this).val())) {
			$alert({
				msg:'제목은 필수 입력 항목 입니다.',
				callback: function() {
					$('#subject').focus();
				}
			});
			return false;
		}
		
		if(!$.trim($('#memo', this).val())) {
			$alert({
				msg:'내용은 필수 입력 항목 입니다.',
				callback: function() {
					$('#memo').focus();
				}
			});
			return false;
		}
		
		$this = $(this);
		$confirm({
			msg : '${mode eq "modify" ? "수정" : "저장"}하시겠습니까?',
			success : function() {
				$this.trigger('submit', 'submit');
			}
		});
		
		return false;
	});
});
</script>


<div class="location">
	홈 &gt; 게시판1 &gt; 쓰기
</div>

<div class="title">
	<h2>게시판1</h2>
</div>


<form action="<c:url value="/prototype/board/${paramMap.code }" />" name="frm" method="post">
	
	<!-- 수정 -->
	<c:if test="${mode eq 'modify'}">
		<input type="hidden" name="seq" value="${data.SEQ }" />
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
						<input type="text" name="subject" id="subject" style="width:90%;" class="i_text" title="제목" value="<c:out value="${data.SUBJECT }" />" />
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label for="memo">내용</label>
					</th>
					<td>
						<textarea name="memo" id="memo" style="width:90%; height:200px;" class="i_text">${mode eq 'modify' ? data.MEMO : ''}</textarea>
					</td>
				</tr>
				<tr>
					<th scope="row">
						공개여부
					</th>
					<td>
						<input type="radio" id="openYnY" name="openYn" value="Y" class="i_radio" <c:if test="${mode ne 'modify' or data.OPEN_YN eq 'Y'}">checked="checked"</c:if> /><label for="openYnY">공개</label>
						<input type="radio" id="openYnN" name="openYn" value="N" class="i_radio" <c:if test="${mode eq 'modify' and data.OPEN_YN eq 'N' }">checked="checked"</c:if> /><label for="openYnN">비공개</label>
					</td>
				</tr>
				<tr>
					<th scope="row">
						<label for="">파일</label>
					</th>
					<td>
						
					</td>
				</tr>
				<c:if test="${mode eq 'modify'}">
					<tr>
						<th scope="row">작성자</th>
						<td>${data.CREATE_USER_NM }</td>
					</tr>
					<tr>
						<th scope="row">작성일</th>
						<td><fmt:formatDate value="${data.CREATE_DT}" pattern="yyyy-MM-dd HH:mm:ss" /></td>
					</tr>
				</c:if>
			</tbody>
		</table>
	</div>
	
	<div class="btn_center">
		<span class="btn_pack medium icon"><span class="add"></span><input type="submit" value="${mode eq 'modify' ? '수정' : '저장' }" /></span>
		<span class="btn_pack medium icon"><span class="delete"></span><button type="button" id="btn_cancel">취소</button></span>
	</div>
</form>
