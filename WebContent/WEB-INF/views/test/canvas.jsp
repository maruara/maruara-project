<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Canvas</title>

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-1.5.1.js" charset="UTF-8"></script>
<script type="text/javascript">
jQuery(function($) {
	//var myCanvas = document.getElementById('myCanvas');
	//var myCanvas = $('#myCanvas').get(0);
	var myCanvas = $('#myCanvas')[0];
	if(myCanvas.getContext) {
		var ctx = myCanvas.getContext('2d');
		ctx.arc(50, 50, 100, 0, Math.PI*2, true);
		ctx.fillStyle = 'rgba(0, 162, 232, .2)';
		ctx.fill();
	} else {
		document.write('No Canvas');
	}
});
</script>

</head>
<body>

<canvas id="myCanvas" width="500" height="500">
	Canvas is not supported.
</canvas>

</body>
</html>