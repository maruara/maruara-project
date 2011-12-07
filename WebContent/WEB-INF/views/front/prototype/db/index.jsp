<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>
</head>
<body>

<ol>
	<li><a href="<c:url value="/front/prototype/db/connect" />">DB Connection</a></li>
	<li>
		<a href="<c:url value="/front/prototype/db/tx1" />">Advice Rollback Test (Advice 적합한 클래스 메소드 이므로 롤백 처리)</a>
	</li>
	<li>
		<a href="<c:url value="/front/prototype/db/tx2" />">Advice get Method Test (Advice에서 read-only로 정의된 메소드 이지만 롤백은 처리)</a>
	</li>
	<li>
		<a href="<c:url value="/front/prototype/db/tx3" />">Annotation Driven Test (Annotation으로 정의한 메소드 이므로 롤백 처리)</a>
	</li>
	<li>
		<a href="<c:url value="/front/prototype/db/tx4" />">Annotation Driven And Advice no-rollback-for Test (Annotation과 Advice no Rollback 이 같이 있을 경우 롤백 처리)</a>
	</li>
	<li>
		<a href="<c:url value="/front/prototype/db/tx5" />">Advice Not Method Test (Advice에 속하지 않은 클래스 메소드 이므로 롤백 되지 않음)</a>
	</li>
</ol>

</body>
</html>