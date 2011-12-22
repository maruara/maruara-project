<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="util" uri="http://com.web/util" %>


<script type="text/javascript">
jQuery(function($) {
	
	
	// 기간 조회
	$fromDate = $('#startDt');
	$toDate = $('#endDt');
	$fromDate.datepicker({
		minDate : new Date(),
		maxDate : $.datepicker.parseDate($.datepicker._defaults.dateFormat , $toDate.val() )
		, onSelect: function(selectedDate) {
			$toDate.datepicker('option', 'minDate', $.datepicker.parseDate($.datepicker._defaults.dateFormat, selectedDate));
		}
	});
	
	$toDate.datepicker({
		minDate : $.datepicker.parseDate($.datepicker._defaults.dateFormat, $fromDate.val() )
		, onSelect: function(selectedDate) {
			$fromDate.datepicker('option', 'maxDate', $.datepicker.parseDate($.datepicker._defaults.dateFormat, selectedDate));
		}
	});
	
});
</script>

<div class="location">
	홈 &gt; 게시판1 &gt; 목록
</div>

<div class="title">
	<h2><spring:message code="board.title" /></h2>
</div>


<input type="text" id="startDt" name="startDt" value="" readonly="readonly" class="inputType1" style="width:70px" title="시작일자" />
~
<input type="text" id="endDt" name="endDt" value="" readonly="readonly" class="inputType1" style="width:70px" title="종료일자" />
<br />


총건수 : ${paramMap.totalRecords}
<table class="tbl_type_list" summary="<spring:message code="board.list.summary" />">
	<caption><spring:message code="board.list.summary" /> ${paramMap.totalRecords}</caption>
	<colgroup>
		<col style="width:10%;" />
		<col style="width:50%;" />
		<col style="width:10%;" />
		<col style="width:15%;" />
		<col style="width:15%;" />
	</colgroup>
	<thead>
		<tr>
			<th abbr="<spring:message code="board.list.no" />" scope="col"><spring:message code="board.list.no" /></th>
			<th scope="col"><spring:message code="board.list.subject" /></th>
			<th scope="col"><spring:message code="board.list.readcnt" /></th>
			<th scope="col"><spring:message code="board.list.createUser" /></th>
			<th scope="col"><spring:message code="board.list.createDate" /></th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${boardList }" var="row" varStatus="status">
			<tr>
				<td scope="row">${row.SEQ }</td>
				<td class="title" style="padding-left:${(row.LVL-1) * 15}px;">
					<%/* 
					<c:forEach begin="2" end="${row.LVL }" varStatus="replyStatus">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</c:forEach>
					<c:if test="${row.LVL gt 1}">L</c:if>
					*/%>
					<c:if test="${row.LVL gt 1}">
						<img src="<c:url value="/resources/images/prototype/table/ioc-reply.gif" />" />
					</c:if>
					<c:if test="${row.P_USE_YN eq 'N' }">
						<span class="comment">[원글이 삭제된 답글]</span>
					</c:if>
					<a href="<c:url value="/prototype/board/${paramMap.code }/read/${row.SEQ }" /><util:param />" title="<c:out value="${row.SUBJECT }" />">
						<c:out value="${row.SUBJECT }" />
					</a>
					<img src="<c:url value="/resources/images/prototype/table/ic_pic.gif" />" alt="첨부이미지" class="pic" />
					<span class="comment">[<strong>5</strong>]</span>
					<c:if test="${row.NEW_YN eq 'Y'}">
						<img src="<c:url value="/resources/images/prototype/table/ic_new.gif" />" alt="새글" class="new" />
					</c:if>
				</td>
				<td>${row.READ_CNT }</td>
				<td>${row.CREATE_USER_NM }</td>
				<td><fmt:formatDate value="${row.CREATE_DT}" pattern="yyyy-MM-dd" /></td>
			</tr>
		</c:forEach>
		<c:if test="${paramMap.totalRecords < 1}">
			<tr>
				<td colspan="5">조회 결과가 존재하지 않습니다.</td>
			</tr>
		</c:if>
	</tbody>
</table>

<util:pagination pagination="${pagination }" />
