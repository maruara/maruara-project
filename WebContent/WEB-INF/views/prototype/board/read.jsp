<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="util" uri="http://com.web/util" %>



<script type="text/javascript">
jQuery(function($) {
	
	// 수정
	$('#btn_modify').on('click', function() {
		location.href = '<c:url value="/prototype/board/${paramMap.code}/modify/${boardData.SEQ}" /><util:param />';
	});
	
	// 삭제
	$('#btn_delete').on('click', function() {
		$.confirm({
			msg : '삭제하시겠습니까?',
			success : function() {
				location.href = '<c:url value="/prototype/board/${paramMap.code}/delete/${boardData.SEQ}" /><util:param />';
			}
		});
	});
	
	// 답글
	$('#btn_reply').on('click', function() {
		location.href = '<c:url value="/prototype/board/${paramMap.code}/reply/${boardData.SEQ}" /><util:param />';
	});
	
	// 목록
	$('#btn_list').on('click', function() {
		location.href = '<c:url value="/prototype/board/${paramMap.code}" /><util:param />';
	});
	
	
	// 댓글 등록 버튼 mousedown
	$('.btn_comment').on({
		mousedown: function() {
			$(this).prop('src', '<c:url value="/resources/images/prototype/comment/btn_registry_down.gif" />');
		},
		mouseleave: function() {
			$(this).prop('src', '<c:url value="/resources/images/prototype/comment/btn_registry.gif" />');
		}
	});
	
	
	
	
	// 댓글 저장
	$('#commentFrm').on('submit', function(e, type) {
		if(type == 'submit') {
			$.ajax({
				url:'<c:url value="/prototype/board/${paramMap.code}/comment/${paramMap.seq}.json" />'
			  , type: 'POST'
			  , data: {memo:$('#memo').val()}
			  , dataType: 'json'
			  , success: function(data) {
					if(data) {
						$('#commentCount').text(data.commentCount);
						var $cbSection = $('<div/>', {class:'cb_section'})
											.append($('<span/>', {class:'cb_nick_name', text:data.commentData.create_user_nm}))
											.append('&nbsp;')
											.append($('<span/>', {class:'cb_usr_id', text:'(' + data.commentData.create_user_id + ')'}))
											.append('&nbsp;')
											.append($('<span/>', {class:'cb_date', text:data.commentData.create_dt_fmt}));
						
						var $cbSection2 = $('<div/>', {class:'cb_section2'})
											.append(
												$('<span/>', {class:'cb_nobar'})
													.append($('<a/>', {href:'#', text:'답글'}))
											)
											.append('&nbsp;')
											.append(
												$('<span/>', {class:'cb_nobar'})
													.append($('<a/>', {href:'#', text:'수정'}))
											)
											.append('&nbsp;')
											.append(
												$('<span/>', {class:'cb_nobar'})
													.append($('<a/>', {href:'#', text:'삭제'}))
											);
						
// 						var $cbThumbOff = $('<li/>', {class:'cb_thumb_off'});
// 						var $cbCommentArea = $('<div/>', {class:'cb_comment_area'});
// 						var $cbInfoArea = $('<div/>', {class:'cb_info_area'});
						$('#commentWrite').before(
							$('<li/>', {class:'cb_thumb_off'})
								.append(
									$('<div/>', {class:'cb_comment_area'})
										.append(
											$('<div/>', {class:'cb_info_area'})
												.append($cbSection)
												.append($cbSection2)
												.append(
													$('<div/>', {class:'cb_dsc_comment'})
														.append($('<p/>', {class:'cb_dsc', html:data.commentData.memo}))
												)
										)
								)
						);
						
				  	} else {
						alert('서버 에러');
				  	}
			    }
			  , error: function() {
				  alert('서버 에러');
			  }
			});
			return false;
		}
		
		if(!$.trim($('#memo', this).val())) {
			$.jalert({
				msg:'내용은 필수 입력 항목 입니다.',
				callback: function() {
					$('#memo').focus();
				}
			});
			return false;
		}
		
		$this = $(this);
		$.jconfirm({
			msg : '등록 하시겠습니까?',
			success : function() {
				$this.trigger('submit', 'submit');
			}
		});
		
		return false;
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
				<c:set var="newline" value="<%= \"\n\" %>" />
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
				조회수
			</th>
			<td>
				${boardData.READ_CNT }
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




<div class="cb_module" style="margin-top:50px; margin-bottom:50px; width:777px;">
	<h5 class="cb_h_type cb_h_type2">댓글 <span>(<strong id="commentCount">${commentCount }</strong>)</span></h5>
	<div class="cb_lstcomment">
		<ul>
			<c:forEach items="${commentData }" var="row" varStatus="status">
				<c:choose>
					<c:when test="${row.LVL eq 1 }">
						
						<li class="cb_thumb_off">
							<div class="cb_comment_area">
								<div class="cb_info_area">
									<div class="cb_section">
										<span class="cb_nick_name">${row.CREATE_USER_NM }</span>
										<span class="cb_usr_id">(${row.CREATE_USER_ID })</span>
										<span class="cb_date"><fmt:formatDate value="${row.CREATE_DT}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
									</div>
									<div class="cb_section2">
										<span class="cb_nobar"><a href="#">답글</a></span>
										<span class="cb_nobar"><a href="#">수정</a></span>
										<span class="cb_nobar"><a href="#">삭제</a></span>
									</div>
								</div>
								<div class="cb_dsc_comment">
									<p class="cb_dsc">${util:nl2br(row.MEMO) }</p>
								</div>
								<!-- 숨김처리
								<div class="cb_info_area2">
									<a href="#">3개</a>의 답글이 있습니다.
								</div>
								//숨김처리 -->
							</div>
						</li>
						
					</c:when>
					<c:otherwise>
						
						<li class="cb_thumb_off">
							<ul>
								<li class="cb_thumb_off">
									<span class="cb_bu_subnode">ㄴ</span>
									<div class="cb_comment_area">
										<div class="cb_info_area">
											<div class="cb_section">
												<span class="cb_nick_name">${row.CREATE_USER_NM }</span>
												<span class="cb_usr_id">(${row.CREATE_USER_ID })</span>
												<span class="cb_date"><fmt:formatDate value="${row.CREATE_DT}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
											</div>
											<div class="cb_section2">
												<span class="cb_nobar"><a href="#">수정</a></span>
												<span class="cb_nobar"><a href="#">삭제</a></span>
											</div>
										</div>
										<div class="cb_dsc_comment">
											<p class="cb_dsc">
												${util:nl2br(row.MEMO) }
											</p>
										</div>
									</div>
								</li>
							</ul>
						</li>
						
					</c:otherwise>
				</c:choose>
			</c:forEach>
			
			<li id="commentWrite" class="cb_thumb_off">
				<div class="cb_wrt cb_wrt_default">
					<div class="cb_wrt_box">
						<div class="cb_wrt_box2">
							
							<form name="commentFrm" id="commentFrm" method="post">
								<fieldset>
									<legend>댓글 등록 폼</legend>
									<div class="cb_usr_area">
										<div class="cb_txt_area">
											<div class="cb_section">
												<textarea name="memo" id="memo"></textarea>
												<div class="cb_btn_area">
													<input type="image" class="btn_comment" src="<c:url value="/resources/images/prototype/comment/btn_registry.gif" />" alt="등록" />
												</div>
											</div>
										</div>
									</div>
								</fieldset>
							</form>
							
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
	<button class="btn_more"><span style="font-size:10px;">∨</span> More</button>
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
						<c:if test="${row.USE_YN_PARENT eq 'N' }">
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
