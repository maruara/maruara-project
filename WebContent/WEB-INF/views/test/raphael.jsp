<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Raphael</title>

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-1.5.1.js" charset="UTF-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/raphael-min.js" charset="UTF-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/joint.all.min.js" charset="UTF-8"></script>
<!-- 
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/raphaelIE.js" charset="UTF-8"></script>
-->
<script type="text/javascript">
jQuery(function($) {
	
	var r = Raphael("hello_world", 1000, 50),
    c1 = r.circle(50, 20, 10),
    c2 = r.circle(250, 25, 10);
	c1.joint(c2);
	
});
</script>

</head>
<body>

<div id="hello_world"></div>

</body>
</html>