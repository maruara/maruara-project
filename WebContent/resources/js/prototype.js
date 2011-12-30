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

var contextPath = context.contextPath = context.contextPath || '';

if(context.locale) {
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
}





/*************************************************************************
함수명: escape
설  명: HTML escape
인  자: 없음
리  턴: escape 문자
메소드 : 
사용예: str.escape();
***************************************************************************/
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



/*************************************************************************
함수명: unescape
설  명: HTML unescape
인  자: 없음
리  턴: unescape 문자
메소드 : 
사용예: str.unescape();
***************************************************************************/
String.prototype.unescape = function() {
	if(!this) {
		return '';
	}
	
	var firstAmp = this.indexOf('&');
	if(firstAmp < 0) {
		return this;
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




/*************************************************************************
함수명: nl2br
설  명: \n을 <br /> 태그로 교체
인  자: 없음
리  턴: 바뀐 문자열
메소드 : 
사용예: str.nl2br();
***************************************************************************/
String.prototype.nl2br = function() {
	return this.replace(/(\r)?\n/g, '<br />');
};



/*************************************************************************
함수명: unnl2br
설  명: <br /> 태그를 \n으로 교체
인  자: 없음
리  턴: 바뀐 문자열
메소드 : 
사용예: str.unnl2br();
***************************************************************************/
String.prototype.unnl2br = function() {
	return this.replace(/<br[^>]*>/gi, '\n');
};






(function($) {
	
	
	/*************************************************************************
	함수명: center
	설  명: Element Position Center
	인  자: 없음
	리  턴: 없음 
	사용예:
	#Select.center();
	***************************************************************************/
	$.fn.extend({
		center: function() {
			return this.each(function() {
				var top = ($(window).height() - $(this).outerHeight())/2 + $(window).scrollTop();
				var left = ($(window).width() - $(this).outerWidth())/2 + $(window).scrollLeft();
				$(this).css({position:'absolute', margin:0, top:(top > 0 ? top:0)+'px', left:(left>0 ? left:0)+'px'});
			});
		}
	});
	
	
	
	
	
	/*************************************************************************
	함수명: textarea.viewByte
	설  명: Textarea의 Byte/글자수 표시
	인  자: maxLen - 제한 Byte/글자수
		   textAlign - Byte/글자수 표시 정렬
		   charset - Character Type (UTF-8(한글 3Byte), EUC-KR(한글 2Byte), 없음(한글 1Byte))
	리  턴: 없음
	메소드 : 
		viewByte - Byte/글자수 표시
		initialize - Byte/글자수 표시 초기화
		length - Byte/글자수 Length
	사용예: 
		var txt1 = new textarea.viewByte({id:'txt1', maxLen:80});
		txt1.initialize();
		txt.length();
	***************************************************************************/
	$.extend(true, window, {
		textarea : {
			viewByte : viewByte
		}
	});

	function viewByte(settings) {
		var defaults = {
			maxLen : 4000,
			textAlign : 'left',
			charset : 'UTF-8'
		};

		var $this = null;
		var $remaining = null;
		var $text = null;
		var $count = null;

		function init() {
			settings = $.extend(true, defaults, settings);

			if (!settings.id) {
				throw new Error('id is required!!');
			}

			$this = $('#' + settings.id);
			if ($this.size() < 1) {
				throw new Error('id is undefined!!');
			}

			$remaining = $('<div/>').insertAfter($this);
			$text = $('<span/>', {
				text : ' byte',
				css : {
					textAlign : settings.textAlign
				}
			}).prependTo($remaining);
			$count = $('<span/>', {
				text : settings.maxLen,
				css : {
					fontWeight : 'bold'
				}
			}).prependTo($remaining);

			$this.bind('input keyup paste', function() {
				update();
			});

			update();
		}

		
		function update() {
			
			var count = length();

			var now = settings.maxLen - count;

			if (now < 0) {
				$text.html(' byte <span style="color:#f00;">초과</span>');
			} else {
				$text.html(' byte');
			}

			$count.text(now);
		};

		function getElement() {
			return $this;
		};

		function initialize() {
			$this.val('');
			update();
		};

		
		function length() {
			var val = $this.val();
			var len = val.length;
			var c;

			var count = 0;
			if(settings.charset.toUpperCase() == 'UTF-8') {
				for ( var i = 0; i < len; i++) {
					c = val.charAt(i);
					if (escape(c).length > 4)
						count += 3;
					else if (c == '\r')
						count += 2;
					else if (c == '\n')
						count += 2;
					else
						count++;
				}
			} else if(settings.charset.toUpperCase() == 'EUC-KR') {
				for ( var i = 0; i < len; i++) {
					c = val.charAt(i);
					if (escape(c).length > 4)
						count += 2;
					else if (c == '\r')
						count += 2;
					else if (c == '\n')
						count += 2;
					else
						count++;
				}
			} else {
				count = len;
			}
			
			return count;
		}

		$.extend(this, {
			'update' : update,
			'getElement' : getElement,
			'initialize' : initialize,
			'length' : length
		});

		init();
	}
	
	
	
	
	
	/*************************************************************************
	함수명: confirm
	설  명: Confirm Dialog
	인  자: settings (옵션)
				target : 타겟 (parent - iframe 사용시 부모창에 표시)
				msg : 메시지
				title : 타이틀
				url : 이동할 페이지
				btnConfirm : 확인버튼 텍스트
				btnCancel : 취소버튼 텍스트
				success : 확인 클릭시 실행할 함수
				cancel : 취소 클릭시 실행할 함수
				callbackParam : 확인/취소 실행할 함수 파라미터
	리  턴: 없음 
	사용예:
	$.confirm({msg: '확인하시겠습니까?', btnConfirm:'확인', url:'/test.do'});
	***************************************************************************/
	$confirm = function(settings) {
		settings = $.extend(true, {
			msg: '',
			title: '확인',
			btnConfirm : '확인',
			btnCancel : '취소'
		}, settings);
		
		var $dialog = null;
		if(settings.target == 'parent') {
			$dialog = parent.$('<div/>', {html:settings.msg});
			settings.success = settings.success ? eval('parent.' + settings.success) : null;
			settings.cancel = settings.cancel ? eval('parent.' + settings.cancel) : null;
		} else {
			$dialog = $('<div/>', {html:settings.msg});
		}
		
		$dialog.dialog({
			modal: true,
			resizable: false,
			title: '<span class="ui-icon ui-icon-alert" style="float:left;"></span> ' + settings.title,
			buttons: [
				{
					text: settings.btnConfirm,
					click: function() {
						$dialog.dialog('close');
						if($.isFunction(settings.success)) {
							if(settings.callbackParam) {
								settings.success.apply(this, settings.callbackParam.split('|'));
							} else {
								settings.success.apply(this);
							}
							return;
						}
						if(settings.url) {
							if(settings.target == 'parent') {
								parent.location.href=settings.url;
							} else {
								location.href=settings.url;
							}
							return;
						}
						if(settings.func) {
							eval(settings.func);
							return;
						}		
					}
				},
				{
					text: settings.btnCancel,
					click: function() {
						$dialog.dialog('close');
						if($.isFunction(settings.cancel)) {
							if(settings.callbackParam) {
								settings.cancel.apply(this, settings.callbackParam.split('|'));
							} else {
								settings.cancel.apply(this);
							}
							return;
						}
						if(settings.url) {
							location.href=settings.url;
							return;
						}
					}
				}
			],
			close: function() {
				$dialog.remove();
			}
		});
		return;
	};
	
	
	
	
	
	/*************************************************************************
	함수명: jconfirm
	설  명: Confirm Dialog
	인  자: settings (옵션)
				target : 타겟 (parent - iframe 사용시 부모창에 표시)
				msg : 메시지
				title : 타이틀
				success : 확인 클릭시 실행할 함수
				cancel : 취소 클릭시 실행할 함수
				buttons : 버튼을 사용자가 직접 추가할 경우 사용 (배열)
					text : 버튼 Text
					callback : 버튼 클릭시 이벤트
				callbackParam : 확인/취소 실행할 함수 파라미터
				modal : Modal 여부
	리  턴: 없음 
	사용예:
	$.jconfirm({
			title:'삭제하시겠습니까?', 
			msg:'삭제시 <em>내공 30점</em>이 감산되며 삭제된 답변은<br/>복구 할 수 없습니다.',
			success:function() { alert('success'); },
			cancel:function() { alert('cancel'); },
			buttons:[{text:'확인1', callback : function() { alert('success1'); }},
					 {text:'취소1', callback : function() { alert('cancel1'); }}]
		});
	***************************************************************************/
	jconfirm = function(settings) {
		$('.ly_pop').remove();
		
		settings = $.extend(true, {
			msg: '',
			title: '확인',
			width: 257,
			modal: true
		}, settings);
		
		
		var $popup = $('<div/>', {style:'width:'+settings.width+'px', 'class':'ly_pop'});
		if(settings.target == 'parent') {
			settings.success = settings.success ? eval('parent.' + settings.success) : null;
			settings.cancel = settings.cancel ? eval('parent.' + settings.cancel) : null;
		}
		$popup.append($('<h1/>').html(settings.title))
			  .append($('<p/>', {'class':'desc', html:settings.msg}));
		
		
		var $btn = $('<div/>', {'class':'btn'});
		if(settings.buttons) {
			var $button, $buttonRind;
			for(var i=0, s=settings.buttons.length; i<s; i++) {
				$button = $('<button/>', {type:'button', text:settings.buttons[i].text})
								.on('click', {callback:settings.buttons[i].callback}, function(event) {
									$popup.trigger('close');
									if($.isFunction(event.data.callback)) {
										if(settings.callbackParam) {
											event.data.callback.apply(this, settings.callbackParam.split('|'));
										} else {
											event.data.callback.apply(this);
										}
										return;
									}
								});
				
				$buttonRind = $('<span/>', {'class':'btn_pack medium'})
									.append($button);
				if(i<s) {
					$buttonRind.append('&nbsp;');
				}
				$btn.append($buttonRind);
			}
		} else {
			$('<img/>', {alt:'확인', src: contextPath + '/resources/images/prototype/popup/btn_confirm.gif'})
				.on('click', function() {
					$popup.trigger('close');
					if($.isFunction(settings.success)) {
						if(settings.callbackParam) {
							settings.success.apply(this, settings.callbackParam.split('|'));
						} else {
							settings.success.apply(this);
						}
						return;
					}
				})
				.appendTo($btn);
			$btn.append('&nbsp;');
			$('<img/>', {alt:'취소', src: contextPath + '/resources/images/prototype/popup/btn_cancel.gif'})
				.on('click', function() {
					$popup.trigger('close');
					if($.isFunction(settings.cancel)) {
						if(settings.callbackParam) {
							settings.cancel.apply(this, settings.callbackParam.split('|'));
						} else {
							settings.cancel.apply(this);
						}
						return;
					}
				})
				.appendTo($btn);
		}
		$popup.append($btn);
		
		$('<img/>', {alt:'닫기', src: contextPath + '/resources/images/prototype/popup/btn_close_layer.gif', 'class':'clse'})
			.appendTo($popup)
			.on('click', function() {
				$popup.trigger('close');
			});
		
		$popup.on('close', function() {
			if(settings.modal) {
				$('.ly_pop_modal').remove();
			}
			$popup.remove();
		});
		
		if(settings.modal) {
			$('<div/>', {'class':'ly_pop_modal', width:$(document).width(), height:$(document).height()}).appendTo('body');
		}
		
		if(settings.target == 'parent') {
			$popup.appendTo($('body', parent));
		} else {
			$popup.appendTo('body');
		}
		
		$popup
			.draggable({
				handle:'h1',
				scroll:false,
				containment:'window'
			})
			.center();
		
	};
	
	
	
	
	/*************************************************************************
	함수명: alert
	설  명: Alert Dialog
	인  자: settings (옵션)
				target : 타겟 (parent - iframe 사용시 부모창에 표시)
				msg : 메시지
				title : 타이틀
				btnConfirm : 확인버튼 텍스트
				url : 이동할 페이지
				callback : 함수
	리  턴: 없음 
	사용예:
	$.alert({msg:'삭제되었습니다.', btnConfirm:'확인'});
	***************************************************************************/
	$alert = function(settings) {
		settings = $.extend(true, {
			msg: '',
			title: '확인',
			btnConfirm : '확인'
		}, settings);
		
		
		var $dialog;
		if(settings.target == 'parent') {
			$dialog = parent.$('<div/>', {html:settings.msg});
		} else {
			$dialog = $('<div/>', {html:settings.msg});
		}
		
		var process = function() {
			if(settings.callback) {
				settings.callback.apply(this);
				return;
			}
			if(settings.url) {
				if(settings.target == 'parent') {
					parent.location.href=settings.url;
				} else {
					location.href=settings.url;
				}
				return;
			}
		};
		
		if(settings.msg) {
			$dialog.dialog({
				modal: true,
				resizable: false,
				title: '<span class="ui-icon ui-icon-check" style="float:left;"></span> ' + settings.title,
				buttons: [
					{
						text: settings.btnConfirm,
						click: function() {
							$dialog.dialog('close');
							process();
						}
					}
				],
				close: function() {
					$dialog.remove();
				}
			});
		} else {
			process();
		}
		
	};
	
	
	
	
	
	
	
	
	/*************************************************************************
	함수명: jalert
	설  명: Alert Dialog
	인  자: settings (옵션)
				target : 타겟 (parent - iframe 사용시 부모창에 표시)
				msg : 메시지
				title : 타이틀
				callback : 확인 클릭시 실행할 함수
				modal : Modal 여부
	리  턴: 없음 
	사용예:
	$.jalert({
			title:'삭제하시겠습니까?', 
			msg:'삭제시 <em>내공 30점</em>이 감산되며 삭제된 답변은<br/>복구 할 수 없습니다.',
			callback:function() { alert('success'); }
		});
	***************************************************************************/
	jalert = function(settings) {
		$('.ly_pop').remove();
		
		settings = $.extend(true, {
			msg: '',
			title: '확인',
			width: 257,
			modal: true
		}, settings);
		
		
		var $popup = $('<div/>', {style:'width:'+settings.width+'px', 'class':'ly_pop'});
		if(settings.target == 'parent') {
			settings.callback = settings.callback ? eval('parent.' + settings.callback) : null;
		}
		$popup.append($('<h1/>').html(settings.title))
			  .append($('<p/>', {'class':'desc', html:settings.msg}));
		
		
		var $btn = $('<div/>', {'class':'btn'});
		$('<img/>', {alt:'확인', src: contextPath + '/resources/images/prototype/popup/btn_confirm.gif'})
			.on('click', function() {
				$popup.trigger('close');
				if($.isFunction(settings.callback)) {
					if(settings.callbackParam) {
						settings.callback.apply(this, settings.callbackParam.split('|'));
					} else {
						settings.callback.apply(this);
					}
					return;
				}
			})
			.appendTo($btn);
		$popup.append($btn);
		
		$('<img/>', {alt:'닫기', src: contextPath + '/resources/images/prototype/popup/btn_close_layer.gif', 'class':'clse'})
			.appendTo($popup)
			.on('click', function() {
				$popup.trigger('close');
			});
		
		$popup.on('close', function() {
			if(settings.modal) {
				$('.ly_pop_modal').remove();
			}
			$popup.remove();
		});
		
		if(settings.modal) {
			$('<div/>', {'class':'ly_pop_modal', width:$(document).width(), height:$(document).height()}).appendTo('body');
		}
		
		if(settings.target == 'parent') {
			$popup.appendTo($('body', parent));
		} else {
			$popup.appendTo('body');
		}
		
		$popup
			.draggable({
				handle:'h1',
				scroll:false,
				containment:'window'
			})
			.center();
	};
	
	
	
})(jQuery);





jQuery(function($) {
	

});
