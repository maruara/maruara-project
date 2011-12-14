var context = parseQuery($('script:last').attr('src').replace(/^[^\?]+\??/,''));

function parseQuery(query) {
	var params = new Object();
	if (!query) 
		return params;
	var queries = query.split(/[;&]/);
	var keyVal, key, val;
	for (var i=0, s=queries.length; i<s; i++) {
		keyVal = queries[i].split('=');
		if (!keyVal || keyVal.length != 2)
			continue;
		key = decodeURIComponent(keyVal[0]);
		val = decodeURIComponent(keyVal[1]);
	    val = val.replace(/\+/g, ' ');
	    params[key] = val;
	}
	return params;
}

var contextPath = context.contextPath;

jQuery.i18n.properties({ 
	name:'message',
	path: contextPath+'/static/i18n/', 
	mode:'both',  // vars(default, map or both
	language: context.locale,
	cache: true
//	, callback: function() { 
//		alert(msg.common.test); 
//		alert(jQuery.i18n.prop('msg.common.test')); 
//		alert(msg.common.test1('입니다')); 
//		alert(jQuery.i18n.prop('msg.common.test1', '입니다')); 
//	}
});

