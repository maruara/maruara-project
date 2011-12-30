<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>

<script src="http://code.jquery.com/jquery-latest.js" type="text/javascript"></script>
<script type="text/javascript">
jQuery(function($) {
	var DateUtil = {
		dateFmt: function(date) {
			var rDate = date;
			if (typeof(rDate) == 'string') {
				if(this.dateGubun) {
					var sDate = rDate.split(this.dateGubun);
					if(sDate.length == 3) {
						rDate = new Date(sDate[0], parseInt(sDate[1], 10)-1, sDate[2]);
					}
				} else {
					rDate = new Date(rDate.substr(0,4), parseInt(rDate.substr(4,2), 10)-1, rDate.substr(6,2));
				}
			}
			return rDate;
		},
	    diffDays: function(d1, d2, dateGubun) {
    		this.dateGubun = dateGubun;
	        var t2 = this.dateFmt(d2).getTime();
	        var t1 = this.dateFmt(d1).getTime();
	 
// 	        return parseInt((t2-t1)/(24*3600*1000), 10);
			return Math.floor((t2-t1)/(24*3600*1000));
	    },   
	    diffWeeks: function(d1, d2, dateGubun) {
    		this.dateGubun = dateGubun;
	        var t2 = this.dateFmt(d2).getTime();
	        var t1 = this.dateFmt(d1).getTime();
	 
	        return parseInt((t2-t1)/(24*3600*1000*7), 10);
	    },
	    diffMonths: function(d1, d2, dateGubun) {
    		this.dateGubun = dateGubun;
	        var d1Y = this.dateFmt(d1).getFullYear();
	        var d2Y = this.dateFmt(d2).getFullYear();
	        var d1M = this.dateFmt(d1).getMonth();
	        var d2M = this.dateFmt(d2).getMonth();
	 
	        return (d2M+12*d2Y)-(d1M+12*d1Y);
	    },
	    diffYears: function(d1, d2, dateGubun) {
    		this.dateGubun = dateGubun;
	        return this.dateFmt(d2).getFullYear()-this.dateFmt(d1).getFullYear();
	    }
	};
	alert( DateUtil.diffYears('20101027', '20110312') );
	alert( DateUtil.diffYears('2010-10-27', '2011-03-12', '-') );
	alert( DateUtil.diffMonths('20101027', '20110312') );
	alert( DateUtil.diffDays('20110228', '20110328') );
});
</script>


</head>
<body>

</body>
</html>