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
	$('form[name="commentFrm"]').on('submit', function(e, type) {
		$this = $(this);
		if(type == 'submit') {
			$.ajax({
				url:'<c:url value="/prototype/board/${paramMap.code}/comment/${paramMap.seq}.json" />'
			  , type: 'POST'
			  , data: {memo:$('#memo', $this).val()}
			  , dataType: 'json'
			  , success: function(data) {
					if(data) {
						$('#commentCount').text(data.commentCount);
						var $cbSection = $('<div/>', {'class':'cb_section'})
											.append($('<span/>', {'class':'cb_nick_name', text:data.commentData.create_user_nm}))
											.append('&nbsp;')
											.append($('<span/>', {'class':'cb_usr_id', text:'(' + data.commentData.create_user_id + ')'}))
											.append('&nbsp;')
											.append($('<span/>', {'class':'cb_date', text:data.commentData.create_dt_fmt}));
						
						var $cbSection2 = $('<div/>', {'class':'cb_section2'})
											.append(
												$('<span/>', {'class':'cb_nobar'})
													.append($('<a/>', {href:'#', text:'답글'}))
											)
											.append('&nbsp;')
											.append(
												$('<span/>', {'class':'cb_nobar'})
													.append($('<a/>', {href:'#', text:'수정', 'class':'btn_comment_modify'}))
											)
											.append('&nbsp;')
											.append(
												$('<span/>', {'class':'cb_nobar'})
													.append($('<a/>', {href:'#', text:'삭제', 'class':'btn_comment_delete'}))
											);
						
// 						var $cbThumbOff = $('<li/>', {'class':'cb_thumb_off'});
// 						var $cbCommentArea = $('<div/>', {'class':'cb_comment_area'});
// 						var $cbInfoArea = $('<div/>', {'class':'cb_info_area'});
						$('.cb_lstcomment > ul').prepend(
							$('<li/>', {'class':'cb_thumb_off', id:'comment_' + data.commentData.cseq})
								.append($('<input/>', {type:'hidden', name:'cseq', value:data.commentData.cseq}))
								.append(
									$('<div/>', {'class':'cb_comment_area'})
										.append(
											$('<div/>', {'class':'cb_info_area'})
												.append($cbSection)
												.append($cbSection2)
										)
										.append(
											$('<div/>', {'class':'cb_dsc_comment'})
												.append($('<p/>', {'class':'cb_dsc', html:data.commentData.memo}))
										)
								)
						);
						
						$('#memo', $this).val('');
						
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
					$('#memo', this).focus();
				}
			});
			return false;
		}
		
		$.jconfirm({
			msg : '등록 하시겠습니까?',
			success : function() {
				$this.trigger('submit', 'submit');
			}
		});
		
		return false;
	});
	
	
	
	// 댓글 삭제
	$(document).on('click', 'a.btn_comment_delete', function(event) {
		$this = $(this);
		$.jconfirm({
			msg : '삭제 하시겠습니까?',
			success : function() {
				var $parent = $this.parents('li.cb_thumb_off');
				var cseq = $('input:hidden[name="cseq"]', $parent).val();
				
				$.ajax({
					url:'<c:url value="/prototype/board/${paramMap.code}/comment/${paramMap.seq}.json" />'
				  , type: 'POST'
				  , dataType: 'json'
				  , data: {'cseq':cseq,'_method':'DELETE'}
				  , success: function(data) {
					  $('div.cb_info_area', $parent).empty();
					  $('p.cb_dsc', $parent).text('삭제된 댓글입니다.');
					  $('#commentCount').text( data.commentCount );
				  }
				  , error: function() {
					  alert('서버 에러');
				  }
				});
				
			}
		});
		
		event.preventDefault();
	});
	
	
	
	// 댓글 수정 화면
	$(document).on('click', 'a.btn_comment_modify', function(event) {
		var $parent = $(this).parents('li.cb_thumb_off');
		
		var memo = $('p.cb_dsc', $parent).html().replace(/<br[^>]*>/gi, '\n');
		$('div.cb_dsc_comment', $parent)
			.empty()
			.append(
				$('<div/>', {'class':'cb_wrt cb_wrt_default'})
					.append(
						$('<div/>', {'class':'cb_wrt_box'})
							.append(
								$('<div/>', {'class':'cb_wrt_box2'})
									.append(
										$('<form/>', {name:'commentModFrm', method:'post'})
											.append(
												$('<fieldset/>')
													.append($('<legend/>', {text:'댓글 수정 폼'}))
													.append(
														$('<div/>', {'class':'cb_usr_area'})
															.append(
																$('<div/>', {'class':'cb_txt_area'})	
																	.append(
																		$('<div/>', {'class':'cb_section'})
																			.append($('<textarea/>', {name:'memo', val:memo }))
																			.append(
																				$('<div/>', {'class':'cb_btn_area'})
																					.append($('<input/>', {type:'image', 'class':'btn_comment', src:'<c:url value="/resources/images/prototype/comment/btn_registry.gif" />', alt:'수정'}))
																			)
																	)
															)
													)
											)	
									)
							)
					)
			);
		
		$('div.cb_section2', $parent)
			.empty()
			.append(
				$('<span/>', {'class':'cb_nobar'})
					.append(
						$('<a/>', {href:'#', 'class':'btn_comment_modify_cancel', text:'수정취소'})		
					)
			);
		
		event.preventDefault();
	});
	
	
	
	
	// 댓글 수정취소
	$(document).on('click', '.btn_comment_modify_cancel', function(event) {
		var $parent = $(this).parents('li.cb_thumb_off');
		commentCommonCanMod($parent, $('textarea[name="memo"]', $parent).val().replace(/(\r)?\n/g, '<br />'));
		
		/*
		var memo = $('textarea[name="memo"]', $parent).val().replace(/(\r)?\n/g, '<br/>');
		$('div.cb_dsc_comment', $parent)
			.empty()
			.append($('<p/>', {'class':'cb_dsc', html:memo}));
		
		
		$('div.cb_section2', $parent)
			.empty()
			.append(
				$('<span/>', {'class':'cb_nobar'})
					.append($('<a/>', {href:'#', text:'답글'}))
			)
			.append('&nbsp;')
			.append(
				$('<span/>', {'class':'cb_nobar'})
					.append($('<a/>', {href:'#', text:'수정', 'class':'btn_comment_modify'}))
			)
			.append('&nbsp;')
			.append(
				$('<span/>', {'class':'cb_nobar'})
					.append($('<a/>', {href:'#', text:'삭제', 'class':'btn_comment_delete'}))
			);
		*/
		event.preventDefault();
	});
	
	
	
	// 댓글 수정
	$(document).on('submit', 'form[name="commentModFrm"]', function(e, type) {
		$this = $(this);
		$memo = $('textarea[name="memo"]', $this);
		
		if(type == 'submit') {
			var $parent = $this.parents('li.cb_thumb_off');
			var cseq = $('input:hidden[name="cseq"]', $parent).val();
			
			$.ajax({
				url:'<c:url value="/prototype/board/${paramMap.code}/comment/${paramMap.seq}.json" />'
			  , type: 'POST'
			  , data: {memo:$memo.val(), 'cseq':cseq, '_method':'PUT'}
			  , dataType: 'json'
			  , success: function(data) {
					if(data) {
						// $('.btn_comment_modify_cancel').trigger('click');
						commentCommonCanMod($parent, data.commentData.memo);
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
		
		if(!$.trim($memo.val())) {
			$.jalert({
				msg:'내용은 필수 입력 항목 입니다.',
				callback: function() {
					$memo.focus();
				}
			});
			return false;
		}
		
		$.jconfirm({
			msg : '수정 하시겠습니까?',
			success : function() {
				$this.trigger('submit', 'submit');
			}
		});
		
		return false;
	});
	
	
	
	// 댓글 수정/취소 공통 처리
	function commentCommonCanMod($parent, memo) {
		$('div.cb_dsc_comment', $parent)
			.empty()
			.append($('<p/>', {'class':'cb_dsc', html:memo}));
		
		$('div.cb_section2', $parent)
			.empty()
			.append(
				$('<span/>', {'class':'cb_nobar'})
					.append($('<a/>', {href:'#', text:'답글'}))
			)
			.append('&nbsp;')
			.append(
				$('<span/>', {'class':'cb_nobar'})
					.append($('<a/>', {href:'#', text:'수정', 'class':'btn_comment_modify'}))
			)
			.append('&nbsp;')
			.append(
				$('<span/>', {'class':'cb_nobar'})
					.append($('<a/>', {href:'#', text:'삭제', 'class':'btn_comment_delete'}))
			);
	}
	
	
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
	<div class="cb_wrt cb_wrt_default">
		<div class="cb_wrt_box">
			<div class="cb_wrt_box2">
				
				<form name="commentFrm" method="post">
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
	
	<h5 class="cb_h_type cb_h_type2">댓글 <span>(<strong id="commentCount">${commentCount }</strong>)</span></h5>
	<div class="cb_lstcomment">
		<ul>
			<c:forEach items="${commentData }" var="row" varStatus="status">
				<c:choose>
					<c:when test="${row.LVL eq 1 }">
						<li class="cb_thumb_off" id="comment_${row.CSEQ }">
							<input type="hidden" name="cseq" value="${row.CSEQ }" />
							<div class="cb_comment_area">
								<div class="cb_info_area">
									<c:if test="${row.USE_YN eq 'Y' }">
										<div class="cb_section">
											<span class="cb_nick_name">${row.CREATE_USER_NM }</span>
											<span class="cb_usr_id">(${row.CREATE_USER_ID })</span>
											<span class="cb_date"><fmt:formatDate value="${row.CREATE_DT}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
										</div>
										<div class="cb_section2">
											<span class="cb_nobar"><a href="#">답글</a></span>
											<span class="cb_nobar"><a href="#" class="btn_comment_modify">수정</a></span>
											<span class="cb_nobar"><a href="#" class="btn_comment_delete">삭제</a></span>
										</div>
									</c:if>
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
								<li class="cb_thumb_off" id="comment_${row.CSEQ }">
									<input type="hidden" name="cseq" value="${row.CSEQ }" />
									<span class="cb_bu_subnode">ㄴ</span>
									<div class="cb_comment_area">
										<div class="cb_info_area">
											<c:if test="${row.USE_YN eq 'Y' }">
												<div class="cb_section">
													<span class="cb_nick_name">${row.CREATE_USER_NM }</span>
													<span class="cb_usr_id">(${row.CREATE_USER_ID })</span>
													<span class="cb_date"><fmt:formatDate value="${row.CREATE_DT}" pattern="yyyy-MM-dd HH:mm:ss" /></span>
												</div>
												<div class="cb_section2">
													<span class="cb_nobar"><a href="#" class="btn_comment_modify">수정</a></span>
													<span class="cb_nobar"><a href="#" class="btn_comment_delete">삭제</a></span>
												</div>
											</c:if>
										</div>
										<div class="cb_dsc_comment">
											<p class="cb_dsc">${util:nl2br(row.MEMO) }</p>
										</div>
									</div>
								</li>
							</ul>
						</li>
						
					</c:otherwise>
				</c:choose>
			</c:forEach>
			
			
			<!--  
			<li class="cb_thumb_off">
				<div class="cb_wrt cb_wrt_default">
					<div class="cb_wrt_box">
						<div class="cb_wrt_box2">
							
							<form name="commentFrm" method="post">
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
				<ul>
					<li class="cb_thumb_off">
						<span class="cb_bu_subnode">ㄴ</span>
						<div class="cb_comment_area">
							<div class="cb_info_area">
								<div class="cb_section">
									<span class="cb_nick_name">홍길동</span>
									<span class="cb_usr_id">(hong)</span>
									<span class="cb_date">2011-12-12 12:12:12</span>
								</div>
								<div class="cb_section2">
									<span class="cb_nobar"><a href="#">답글</a></span>
									<span class="cb_nobar"><a href="#" class="btn_comment_modify">수정</a></span>
									<span class="cb_nobar"><a href="#" class="btn_comment_delete">삭제</a></span>
								</div>
							</div>
						</div>
						<div class="cb_dsc_comment">
							<div class="cb_wrt cb_wrt_default">
								<div class="cb_wrt_box">
									<div class="cb_wrt_box2">
										
										<form name="commentFrm" method="post">
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
						</div>
					</li>
				</ul>
			</li>
		-->
		
			
		</ul>
	</div>
	<!-- 
	<button class="btn_more"><span style="font-size:10px;">∨</span> More</button>
	 -->
	<a href="#" class="btn_more"><span>More</span></a>
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
