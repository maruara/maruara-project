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


// http://code.google.com/p/jquery-i18n-properties/

var contextPath = context.contextPath;
