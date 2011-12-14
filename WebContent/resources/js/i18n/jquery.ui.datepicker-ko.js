/********************************************************
파일명 : jquery.ui.datepicker-ko.js
설 명 : 달력
작성자 : lcpark
작성일 : 2011.12.01
수정일 : 2011.12.01
*********************************************************/ 
jQuery(function($){
	$.datepicker.regional['ko'] = {
		closeText: '닫기',
		prevText: '이전달',
		nextText: '다음달',
		currentText: '오늘',
		monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)','7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false,
		yearSuffix: '년',
		buttonImage: contextPath + '/resources/images/prototype/calendar/datepicker.png',
		buttonImageOnly: true,
		buttonText:'선택',
		showOn: "both",
		showMonthAfterYear:true,
		changeYear:true,
		changeMonth:true
	};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
});


