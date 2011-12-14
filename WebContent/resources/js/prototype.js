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
	path:contextPath+'/static/i18n/', 
	mode:'both',
	language:context.locale,  
	callback: function() { 
		jQuery.i18n.prop('msg_hello'); 
		jQuery.i18n.prop('msg_complex', 'John');
		alert(msg_hello +' '+ msg_world); 
		alert(msg_complex('John')); 
	}
});