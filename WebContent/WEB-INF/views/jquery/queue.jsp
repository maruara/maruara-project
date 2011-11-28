<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>

<style>
  div { margin:3px; width:50px; position:absolute;
  height:50px; left:10px; top:30px; 
  background-color:yellow; }
  div.red { background-color:red; }  
</style>


<script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
<script type="text/javascript">
jQuery(function($) {
	$("button").click(function () {
		  $("div").animate({left:'+=200px'}, 2000);
		  $("div").animate({top:'0px'}, 600);
		  $("div").queue(function () {
		    $(this).toggleClass("red");
// 		    $(this).dequeue();
		  });
		  $("div").animate({left:'10px', top:'30px'}, 700);
	});	
});
</script>

</head>
<body>

<button>Start</button>  
<div></div>

</body>
</html>