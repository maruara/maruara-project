<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Insert title here</title>

<script type="text/javascript">

String.prototype.escape = function() {
	if(!this) {
		return '';
	}
	
	var size = '>'.charCodeAt(0) + 1;
	var ESCAPES = new Array(size);
    ESCAPES['"'.charCodeAt(0)] = '&#034;';  // 34
    ESCAPES['&'.charCodeAt(0)] = '&amp;';  // 38
    ESCAPES['\''.charCodeAt(0)] = '&#039;';  // 39
    ESCAPES['<'.charCodeAt(0)] = '&lt;';  // 60
    ESCAPES['>'.charCodeAt(0)] = '&gt;';  // 62
    
    var from = 0;
    var c, escaped;
    var escapeCount = ESCAPES.length;
    var escape = '';
    for(var to = from, end=this.length; to<end; to++) {
    	c = this.charAt(to).charCodeAt(0);
    	if(c > escapeCount) {
    		continue;
    	}
    	escaped = ESCAPES[c];
    	if(escaped == null) {
    		continue;
    	}
    	
    	if(from < to) {
    		escape += this.substr(from, to-from);
    	}
    	escape += escaped;
    	from = to + 1;
    }
    if(from < end) {
    	escape += this.substr(from, end - from);
    }
    return escape;
};



String.prototype.unescape = function() {
	if(!this) {
		return '';
	}
	
	var firstAmp = this.indexOf('&');
	if(firstAmp < 0) {
		return '';
	}
	
	var UNESCAPES = new Array(5, 2);
	UNESCAPES = [
		['quot', 34]
	  , ['amp', 38]
	  , ['apos', 39]
	  , ['lt', 60]
	  , ['gt', 62]
	];
	
	var unescape = this.substr(0, firstAmp);
	var c, entityContent;
	var nextIdx = -1, semiColonIdx = -1, amphersandIdx = -1, entityValue = -1, entityContentLen = -1, isHexChar = -1;
	
	for(var i=firstAmp, s=this.length; i<s; i++) {
		c = this.charAt(i);
		if(c == '&') {
			nextIdx = i + 1;
			semiColonIdx = this.indexOf(';', nextIdx);
			if(semiColonIdx == -1) {
				unescape += c;
            	continue;
            }
			amphersandIdx = this.indexOf('&', i + 1);
			if(amphersandIdx != -1 && amphersandIdx < semiColonIdx) {
				unescape += c;
                continue;
            }
			
			entityContent = this.substring(nextIdx, semiColonIdx);
			entityValue = -1;
			entityContentLen = entityContent.length;
			
			if(entityContentLen > 0) {
                if(entityContent.charAt(0) == '#') {
                    if(entityContentLen > 1) {
                        isHexChar = entityContent.charAt(1).charCodeAt(0);
                        try {
                            switch(isHexChar) {
                                case 88: // 'X'
                                case 120: // 'x'
                                    entityValue = parseInt(entityContent.substring(2), 16);
                                    break;

                                default:
                                    entityValue = parseInt(entityContent.substring(1), 10);
                                    break;
                            }
                            if(entityValue > 65535) {
                                entityValue = -1;
                            }
                        } catch(e) {
                            entityValue = -1;
                        }
                    }
                } else {
                	for(var j=0, z=UNESCAPES.length; j<z; j++) {
                		if(UNESCAPES[j][0] == entityContent) {
                			entityValue = UNESCAPES[j][1];
                			break;
                		}
                	}
                }
            }
            
            if(entityValue == -1) {
            	unescape += String.fromCharCode(38) + entityContent + String.fromCharCode(59);
            } else {
            	unescape += String.fromCharCode(entityValue);
            }
            i = semiColonIdx;
		} else {
			unescape += c;
		}
	}
	
	return unescape;
};

var str = "abc!@#$%^*()&<>\"'한글ab";

if( navigator.userAgent.indexOf('MSIE') > -1 ) {
	alert('원본 : ' + str);
	str = str.escape();
	alert('escape : ' + str);
	alert('unescape : ' + str.unescape());
} else {
	console.log('원본 : ' + str);
	str = str.escape();
	console.log('escape : ' + str);
	console.log('unescape : ' + str.unescape());
}

</script>

</head>
<body>

</body>
</html>