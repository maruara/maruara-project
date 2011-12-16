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

<div class="table1">
	<table summary="<spring:message code="board.list.summary" />">
		<caption><spring:message code="board.list.summary" /> ${totalCount}</caption>
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
			<c:forEach items="${list }" var="row" varStatus="status">
				<tr>
					<td scope="row">${row.SEQ }</td>
					<td class="left"><a href="<c:url value="/prototype/board/${paramMap.code }/read/${row.SEQ }" /><util:param />">${row.SUBJECT }</a></td>
					<td>${row.READ_CNT }</td>
					<td>${row.CREATE_USER_NM }</td>
					<td><fmt:formatDate value="${row.CREATE_DT}" pattern="yyyy-MM-dd" /></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</div>

<util:pagination pagination="${pagination }" />
