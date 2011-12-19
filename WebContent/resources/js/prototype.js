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


jQuery(function($) {
	
	
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
	$.confirm = function(settings) {
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
							location.href=settings.url;
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
	함수명: alert
	설  명: Alert Dialog
	인  자: settings (옵션)
				target (타겟)
				msg (메시지)
				title (타이틀)
				btnConfirm (확인버튼 텍스트)
				url (이동할 페이지)
				callback (함수)
	리  턴: 없음 
	사용예:
	$.alert({msg:'삭제되었습니다.', btnConfirm:'확인'});
	***************************************************************************/
	$.alert = function(settings) {
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
					location.href=settings.url;
				} else {
					parent.location.href=settings.url;
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
	
	
	


});
