<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
<script type="text/javascript">
jQuery(function($) {
	var profits = 123.456;
	
	
	$('<span/>', {text:'toFixed supports is ' + profits.toFixed}).prependTo( $('#fixeds') );
	
	
	// 소수점 두자리까지 (반올림)
	$('#fixeds div:eq(0)').html( profits.toFixed(2) );
	
	//  소수점 네자리까지 (모자란 숫자는 0으로 채움)
	$('#fixeds div:eq(1)').html( profits.toFixed(4) );
	
	
	
	
	$('#precisions').prepend( $('<span/>', {'html':'toPrecision supports is ' + profits.toPrecision}) );
	
	// 소수점 두자리까지 (반올림)
	$('#precisions div:eq(0)').html( profits.toPrecision(5) );
		
	//  소수점 네자리까지 (모자란 숫자는 0으로 채움)
	$('#precisions div:eq(1)').html( profits.toPrecision(7) );
	
	// 정수부분을 1.2e+2로 표시
	$('#precisions div:eq(2)').html( profits.toPrecision(2) );
	
	var anumber = 1;
	$('#precisions div:eq(3)').html( anumber.toPrecision(3) );
	
	
	alert( $.format.date(new Date(), 'dd M yy') );
	
});
</script>
</head>
<body>

<h2>fixed</h2>
<div id="fixeds">
	<div></div>
	<div></div>
</div>

<h2>precisions</h2>
<div id="precisions">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

</body>
</html>