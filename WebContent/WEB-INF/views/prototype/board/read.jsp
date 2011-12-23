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


<div class="cb_module" style="margin-top:50px; width:777px;">
	<h5 class="cb_h_type cb_h_type2">댓글 <span>(<strong>53</strong>)</span></h5>
	<div class="cb_lstcomment">
		<ul>
			<li class="cb_thumb_off">
				<div class="cb_comment_area">
					<div class="cb_info_area">
						<div class="cb_section">
							<span class="cb_nick_name">원빈</span>
							<span class="cb_usr_id">(wonbeen)</span>
							<span class="cb_date">2009-06-17 10:25</span>
						</div>
						<div class="cb_section2">
							<span class="cb_nobar"><a href="#">수정</a></span>
							<span class="cb_nobar"><a href="#">삭제</a></span>
						</div>
					</div>
					<div class="cb_dsc_comment">
						<p class="cb_dsc">
							제가 생각하기에 유전자치환 시대에는 우성유전자만이 세상에 있으면 그 경쟁에서 밀려나버린 유전자는 우성이지만,<br>
							특정유전자에 치명적인 바이러스를 치료하기 위해서 열성임을 감안하고서라도 보관 하겠죠.<br>
							바이러스는 RNA를 가지고 세포의 DNA에 끼어들어가서 자기복제를 합니다.<br>
							바이러스를 이용하면 거의 모든 세포를 감염(?)시키면서 세포의 DNA를 바꿀 수 있겠네요.
						</p>
					</div>
					<!-- 숨김처리
					<div class="cb_info_area2">
						<a href="#">3개</a>의 답글이 있습니다.
					</div>
					//숨김처리 -->
				</div>
			</li>
			<li class="cb_thumb_off">
				<div class="cb_wrt cb_wrt_default">
					<div class="cb_wrt_box">
						<div class="cb_wrt_box2">
						<form action="#" method="post">
						<fieldset>
						<legend>댓글 등록 폼</legend>
							<div class="cb_usr_area">
								<div class="cb_txt_area">
									<div class="cb_section">
										<textarea name=""></textarea>
										<div class="cb_btn_area">
											<!-- [D] 등록 버튼 이미지 변화
												기본 : http://static.naver.com/common/comment/btn_registry.gif
												마우스 다운 : http://static.naver.com/common/comment/btn_registry_down.gif 
												포커스 아웃 : http://static.naver.com/common/comment/btn_registry.gif -->
											<input type="image" src="http://static.naver.com/common/comment/btn_registry.gif" alt="등록">
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
