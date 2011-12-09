<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title><tiles:getAsString name="title" /></title>
<tiles:insertAttribute name="include" />
</head>
<body>

<div id="wrap">
	<div id="header">
		<tiles:insertAttribute name="header"/>
	</div>
	<div id="container">
		<div class="snb">
			<tiles:insertAttribute name="snb"/>
		</div>
		<div id="content">
			<tiles:insertAttribute name="content"/>
		</div>
	</div>
	<div id="footer">
		<tiles:insertAttribute name="footer"/>
	</div>
</div>

</body>
</html>