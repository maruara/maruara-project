<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<script type="text/javascript">
jQuery(function($) {
	var type = '${handle.type}';
	var messsage = '${handle.messsage}';
	
	if(!type) {
		$.alert({
			msg : messsage,
			url : '<c:url value="${handle.url}"/>'
			/* 
			callback: function() {
				if('${handle.url}') {
					location.href = '<c:url value="${handle.url}"/>';
				}
			}
			*/
		});
	} else if(type == 'parentAlert') {
		$.alert({
			msg: messsage,
			target: 'parent',
			callback: function() {
				if('${handle.formName}' && '${handle.url}') {
					var form = $('#${handle.formName}', parent.document);
					if(form) {
						form.attr('target', '_self')
							.attr('action', '<c:url value="${handle.url}" />').submit();
					}
				} else if('${handle.url}') {
					parent.location.href = '<c:url value="${handle.url}"/>';
				}
			}
		});
	} else if(type == 'confirm') {
		$.confirm({
			msg: message,
			success: '${handle.success}',
			cancel: '${handle.cancel}',
			callbackParam: '${handle.callbackParam}',
			url: '<c:url value="${handle.url}"/>'
		});
	} else if(type == 'parentConfirm') {
		$.confirm({
			target: 'parent',
			msg: message,
			success: '${handle.success}',
			cancel: '${handle.cancel}',
			callbackParam: '${handle.callbackParam}',
			url: '<c:url value="${handle.url}"/>'
		});
	} else if(type == 'javascript' && '${handle.script}') {
		parent.eval('${handle.script}');
	}
});
</script>