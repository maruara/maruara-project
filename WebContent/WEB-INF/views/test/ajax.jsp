<?xml version="1.0" encoding="UTF-8" ?>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Insert title here</title>

<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-1.5.1.js" charset="UTF-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/json2.js" charset="UTF-8"></script>
<script type="text/javascript">
jQuery(function($) {
	$.ajaxSetup({
		// image/jpeg, application/x-ms-application, iamge/gif, application/xaml+xml, */*
		/*
		accepts:{
    		xml: "application/xml, text/xml",
            html: "text/html",
            script: "text/javascript, application/javascript",
            json: "application/json, text/javascript",
            text: "text/plain",
            _default: "*//*"
	    },
	    
	    beforeSend:function(xhr) {
	    	xhr.setRequestHeader('content-type', 'application/json');
	    }
		*/
	});
	
	$('#request16').click(function() {
		$.ajax({
			url:'${pageContext.request.contextPath}/test/request16',
			type:'POST',
			contentType:'application/json',
			success:function(data) {
				alert(JSON.stringify(data));
			},
			error:function(data) {
				alert(JSON.stringify(data));
			}
		});
	});
	
	$('#request17').click(function() {
		$.ajax({
			url:'${pageContext.request.contextPath}/test/request17',
			type:'POST',
			data:{tst:'test'},
			dataType:'json'//,
			//beforeSend:function (xhr) {
		    //    xhr.setRequestHeader('X-Test', 'foo');
		        //xhr.setRequestHeader('content-type', 'application/json');  // application/x-www-form-urlencoded; charset=UTF-8
		    //}
		})
		.success(function(data) {
			alert('success : ' + JSON.stringify(data));
		})
		.error(function(xhr) {
			alert(JSON.stringify(xhr));
		})
	});
	
	$('#request19').click(function() {
		$.ajax({
			url:'${pageContext.request.contextPath}/test/request19',
			type:'POST',
			data:{_method:'PUT'},
			success:function() {
				alert('success');
			},
			error:function() {
				alert('error');
			}
		});
	});
	
	
	$('#request20').click(function() {
		$.ajax({
			url:'${pageContext.request.contextPath}/test/request20/' + $('#txtViewResolver').val(),
			type:'POST',
			dataType:'json',
			contentType:'application/json',
			success:function(data) {
				alert('success : ' + JSON.stringify(data));
			},
			error:function(data, textStatus, errorThrown) {
				var e = $.parseJSON(data.responseText);
				alert("message : " + e.message);
				alert("msg : " + e.msg);
			}
		});
	});
	
	
	$('#request21').click(function() {
		$.ajax({
			url:'${pageContext.request.contextPath}/test/request21/',
			type:'POST',
			dataType:'json',
			data:{req:'request'},
			success:function(data) {
				alert('success : ' + JSON.stringify(data));
			},
			error:function(data) {
				// alert('error : ' + JSON.stringify(data));
				$('#msg').html(JSON.stringify(data));
				alert(data.responseText);
			}
		});
	});
	
	
	
	$('#request22').click(function() {
		$.ajax({
			url:'${pageContext.request.contextPath}/test/request22/',
			type:'POST',
			dataType:'json',
			data:{"req":"request"},
			//processData: false,
			//data:JSON.stringify({"req":"request"}),
			//data:"{\"req\":\"request\"}",
			/*
			beforeSend:function(xhr) {
				xhr.setRequestHeader('content-type', 'application/json');
			},
			*/
			contentType:'application/json',
			success:function(data) {
				alert('success : ' + JSON.stringify(data));
			},
			error:function(data) {
				// alert('error : ' + JSON.stringify(data));
				$('#msg').html(JSON.stringify(data));
			}
		});
	});



	$('#request35').click(function() {
		$.ajax({
			url:'${pageContext.request.contextPath}/test/request35/',
			type:'POST',
			dataType:'xml',
			//data:{"req":"request"},
			contentType:'text/xml',
			success:function(data) {
				alert('success : ' + $(data).find('string').text());
			},
			error:function(data) {
				// alert('error : ' + JSON.stringify(data));
				alert('error : ' + data.xml);
			}
		});
	});
	
});
</script>

</head>
<body>

<input type="button" id="request16" value="request16" /><br/>
<input type="button" id="request17" value="request17" /><br/>
<input type="button" id="request19" value="request19" /><br/>
<input type="button" id="request20" value="request20" /><input type="text" id="txtViewResolver" /><br/>
<input type="button" id="request21" value="request21" /><br/>
<input type="button" id="request22" value="request22" /><br/>
<input type="button" id="request35" value="request35" /><br/>

</body>
</html>