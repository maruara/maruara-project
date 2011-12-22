/**
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Core_Component/tags/0.3/Sources/jindo.Component.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Core_HTMLComponent/tags/0.2/Sources/jindo.HTMLComponent.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Core_UIComponent/tags/0.1/Sources/jindo.UIComponent.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/DropArea/tags/0.4/Sources/jindo.DropArea.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Formatter/tags/0.4/Sources/jindo.Formatter.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Dialog/tags/0.2/Sources/jindo.Dialog.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Tree/tags/0.6/Sources/jindo.Tree.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Rolling/tags/0.4/Sources/jindo.Rolling.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/ScrollBar/tags/0.2/Sources/jindo.ScrollBar.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/DragArea/tags/0.4/Sources/jindo.DragArea.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Effect/tags/0.3/Sources/jindo.Effect.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Timer/tags/0.4/Sources/jindo.Timer.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/TextRange/tags/0.4/Sources/jindo.TextRange.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/WatchInput/tags/0.5/Sources/jindo.WatchInput.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/RolloverArea/tags/0.5/Sources/jindo.RolloverArea.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/LayerManager/tags/0.5/Sources/jindo.LayerManager.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/LayerPosition/tags/0.2/Sources/jindo.LayerPosition.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/RolloverClick/tags/0.1/Sources/jindo.RolloverClick.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Transition/tags/0.4/Sources/jindo.Transition.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Calendar/tags/0.4/Sources/jindo.Calendar.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Foggy/tags/0.4/Sources/jindo.Foggy.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Slider/tags/0.4/Sources/jindo.Slider.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Clipboard/tags/0.5/Sources/jindo.Clipboard.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/DefaultTextValue/tags/0.2/Sources/jindo.DefaultTextValue.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/MagneticDropArea/tags/0.4/Sources/jindo.MagneticDropArea.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/PointingDropArea/tags/0.4/Sources/jindo.PointingDropArea.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/FileUploader/tags/0.2/Sources/jindo.FileUploader.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/NumberFormatter/tags/0.4/Sources/jindo.NumberFormatter.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/MultipleAjaxRequest/tags/0.2/Sources/jindo.MultipleAjaxRequest.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/CheckBox/tags/0.5/Sources/jindo.CheckBox.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/SelectBox/tags/0.2/Sources/jindo.SelectBox.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Accordion/tags/0.4/Sources/jindo.Accordion.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/BrowseButton/tags/0.4/Sources/jindo.BrowseButton.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/DatePicker/tags/0.6/Sources/jindo.DatePicker.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/ModalDialog/tags/0.2/Sources/jindo.ModalDialog.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/DynamicTree/tags/0.2/Sources/jindo.DynamicTree.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/FloatingLayer/tags/0.1/Sources/jindo.FloatingLayer.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/Pagination/tags/0.4/Sources/jindo.Pagination.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/RollingChart/tags/0.2/Sources/jindo.RollingChart.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/CircularRolling/tags/0.4/Sources/jindo.CircularRolling.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/ScrollBox/tags/0.2/Sources/jindo.ScrollBox.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/StarRating/tags/0.3/Sources/jindo.StarRating.js
 * http://jindo.nhncorp.com/docs/jindo-component/archive/TabControl/tags/0.4/Sources/jindo.TabControl.js
 */

﻿/**
 * @fileOverview 컴포넌트에 상속되어 사용되는 Component Core 
 * @author gony, hooriza, senxation
 * @see http://wiki.nhncorp.com/display/lsuit/nhn.Component
 * @version 0.3
 */

jindo.Component = jindo.$Class({
	/** @lends jindo.Component */

	_aEventHandler : null,
	_oOption : null,

	/**
	 * 모든 진도 컴포넌트는 jindo.Component를 상속받아 구현한다.
	 * @constructs  
	 */
	$init  : function() {
		var aInstance = this.constructor.getInstance(); //_instances
		if (typeof aInstance == "undefined") {
			this.constructor._aInstance = aInstance = [];
		}
		aInstance[aInstance.length] = this;
		this._aEventHandler = {};
		this._oOption = {};
		this._oOption._oSetter = {};
	},
	
	/**
	 * 옵션값을 설정하거나 가져온다.
	 * @param {String} sName 옵션의 이름
	 * @param {String} sValue 옵션의 값
	 * @return {this} 컴포넌트 객체 자신
	 * @example
var MyComponent = $Class({
	method : function() {
		alert(this._option.foo);
	}
}).extend(jindo.Component);

var oInst = new MyComponent();
oInst.option('foo', 123); // 또는 oInst.option({ foo : 123 });
oInst.method(); // 결과 123
	 */
	option : function(sName, vValue) {
		var sNameType = (typeof sName);

		if (sNameType == "undefined") {
			return this._oOption;
		} else if (sNameType == "string") {
			if (typeof vValue != "undefined") {
				this._oOption[sName] = vValue;
				if (typeof this._oOption._oSetter[sName] == "function") {
					this._oOption._oSetter[sName](vValue);	
				}
				return this;
			} else {
				return this._oOption[sName];
			}
		} else if (sNameType == "object") {
			try {
				for(var x in sName) {
					this._oOption[x] = sName[x];
					if (typeof this._oOption._oSetter[x] == "function") {
						this._oOption._oSetter[x](sName[x]);	
					}
				}
			} catch(e) {}
			return this;
		}
	},
	
	/**
	 * 옵션의 setter 함수를 설정하거나 가져온다. 
	 * @param {String} sName setter의 이름
	 * @param {Function} fSetter setter 함수
	 * @return {this} 컴포넌트 객체 자신
	 */
	optionSetter : function(sName, fSetter) {
		var sNameType = (typeof sName);
		if (sNameType == "undefined") {
			return this._oOption._oSetter;
		} else if (sNameType == "string") {
			if (typeof fSetter != "undefined") {
				this._oOption._oSetter[sName] = jindo.$Fn(fSetter, this).bind();
				return this;
			} else {
				return this._oOption._oSetter[sName];
			}
		} else if (sNameType == "object") {
			try {
				for(var x in sName) {
					this._oOption._oSetter[x] = jindo.$Fn(sName[x], this).bind();
				}
			} catch(e) {}
			return this;
		}		
	},
	
	/**
	 * 이벤트를 발생시킨다.
	 * @param {Object} sEvent
	 * @param {Object} oEvent
	 * @example
//커스텀 이벤트를 발생시키는 예제
var MyComponent = $Class({
	method : function() {
		this.fireEvent('happened', {
			sHello : 'world',
			sAbc : '123'
		});
	}
}).extend(jindo.Component);

var oInst = new MyComponent().attach({
	happened : function(eCustomEvent) {
		alert(eCustomEvent.sHello + '/' + eCustomEvent.nAbc); // 결과 : world/123
	}
};
	 * @example
//실제 이벤트를 위임하는 예제
var MyComponent = $Class({
	method : function(eCustomEvent) {
		this.fireEvent('delegatedclick', eCustomEvent);
	}
}).extend(jindo.Component);

var oInst = new MyComponent().attach({
	delegatedclick : function(eCustomEvent) {
		alert(eCustomEvent.button); // 
	}
};

<button onclick="oInst.method(event);">Click me</button> 
	 */
	fireEvent : function(sEvent, oEvent) {
		var oEvent = oEvent ? (oEvent instanceof jindo.$Event ? oEvent._event : oEvent) : {};
		var fInlineHandler = this['on' + sEvent];
		var aHandlerList = this._aEventHandler[sEvent];
		var bHasInlineHandler = typeof fInlineHandler == 'function';
		var bHasHandlerList = typeof aHandlerList != 'undefined';
		if (!bHasInlineHandler && !bHasHandlerList){
			return true;
		}
		
		aHandlerList = aHandlerList.concat(); //fireEvent수행시 핸들러 내부에서 detach되어도 최초수행시의 핸들러리스트는 모두 수행
		
		var bIsRealEvent = (function(oEvent) {
									
			try { if (oEvent instanceof Event) { return true; } } catch(x) { }
			// try { if (oEvent instanceof HTMLEvent) return true; } catch(x) { } // 이걸 넣으면 FF 에서 속도가 너무 느려짐
			try { if (oEvent instanceof MouseEvent) { return true; }} catch(x) { }
			try { if (oEvent instanceof KeyEvent){ return true; }} catch(x) { }
			try { if (('cancelBubble' in oEvent || 'preventBubble' in oEvent) && 'type' in oEvent) { return true; }} catch(x) { }
			
			return false;
			
		})(oEvent);
		if (!bIsRealEvent) {
			
			try {
				//초기화 작업				
				if (typeof oEvent._extends == 'undefined') {
					oEvent._extends = [];
					oEvent.stop = function() {
						if (oEvent._extends.length > 0) {
							oEvent._extends[oEvent._extends.length - 1].bCanceled = true;	
						}
					};
				}
				oEvent._extends.push({
					sType : sEvent,
					bCanceled : false
				});
				
				oEvent.sType = sEvent;
				
			} catch(e) {
				bIsRealEvent = true;
			}
			
		}
		
		if (bIsRealEvent) oEvent = jindo.$Event(oEvent);
	
		var aArg = [ oEvent ];
	
		for (var i = 2, nLen = arguments.length; i < nLen; i++){
			aArg.push(arguments[i]);
		}
		
		if (bHasInlineHandler) {
			fInlineHandler.apply(this, aArg);
		}
	
		if (bHasHandlerList) {
			for (var i = 0, fHandler; fHandler = aHandlerList[i]; i++) {
				fHandler.apply(this, aArg);
			}
		}
		if (bIsRealEvent){
			return !oEvent.bCanceled;
		}
		
		var oPopedEvent = oEvent._extends.pop();
		return !oPopedEvent.bCanceled;
	
	},

	/**
	 * 커스텀 이벤트 핸들러를 등록한다.
	 * @param {Object} sEvent
	 * @param {Object} fHandlerToAttach
	 * @return {this} 컴포넌트 객체 자신
	 * @example
//이벤트 등록 방법 예제
//아래처럼 등록하면 appear 라는 사용자 이벤트 핸들러는 총 3개가 등록되어 해당 이벤트를 발생시키면 각각의 핸들러 함수가 모두 실행됨.
//attach 을 통해 등록할때는 이벤트명에 'on' 이 빠지는 것에 유의.
function fpHandler1(oEvent) { .... };
function fpHandler2(oEvent) { .... };

var oInst = new MyComponent();
oInst.onappear = fpHandler1; // 직접 등록
oInst.attach('appear', fpHandler1); // attach 함수를 통해 등록
oInst.attach({
	appear : fpHandler1,
	more : fpHandler2
});
	 */
	attach : function(sEvent, fHandlerToAttach) {

		if (arguments.length == 1) {

			jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler, sEvent) {
				this.attach(sEvent, fHandler);
			}, this).bind());
		
			return this;
		}

		var aHandler = this._aEventHandler[sEvent];

		if (typeof aHandler == 'undefined'){
			aHandler = this._aEventHandler[sEvent] = [];
		}

		aHandler.push(fHandlerToAttach);

		return this;

	},
	
	/**
	 * 커스텀 이벤트 핸들러를 해제한다.
	 * @param {Object} sEvent
	 * @param {Object} fHandlerToDetach
	 * @return {this} 컴포넌트 객체 자신
	 * @example
//이벤트 해제 예제
oInst.onappear = null; // 직접 해제
oInst.detach('appear', fpHandler1); // detach 함수를 통해 해제
oInst.detach({
	appear : fpHandler1,
	more : fpHandler2
});
	 */
	detach : function(sEvent, fHandlerToDetach) {

		if (arguments.length == 1) {

			jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler, sEvent) {
				this.detach(sEvent, fHandler);
			}, this).bind());
		
			return this;
		}

		var aHandler = this._aEventHandler[sEvent];

		if (typeof aHandler == 'undefined') return this;

		for (var i = 0, fHandler; fHandler = aHandler[i]; i++) {
			if (fHandler === fHandlerToDetach) {
				aHandler = aHandler.splice(i, 1);
				break;
			}
		}

		return this;

	},
	
	/**
	 * 등록된 모든 커스텀 이벤트 핸들러를 해제한다.
	 * @param {Object} sEvent
	 * @return {this} 컴포넌트 객체 자신
	 */
	detachAll : function(sEvent) {
		var aHandler = this._aEventHandler;
		
		if (arguments.length) {
			
			if (typeof aHandler[sEvent] == 'undefined') {
				return this;
			}
	
			delete aHandler[sEvent];
	
			return this;
		}	
		
		for (var o in aHandler) {
			delete aHandler[o];
		}
		return this;				
	}

});

/**
 * 다수의 컴포넌트를 일괄 생성하는 Static Method
 * @param {Object} aObject
 * @param {Object} oOption
 * @return {Array} 생성된 컴포넌트 객체 배열
 * @example
var Instance = jindo.Component.factory(
	cssquery('li'),
	{
		foo : 123,
		bar : 456
	}
);
 */
jindo.Component.factory = function(aObject, oOption) {
	var aReturn = [];

	if (typeof oOption == "undefined") oOption = {};
	for(var i=0; i < aObject.length; i++) {
		try {
			oInstance = new this(aObject[i], oOption);
			aReturn[aReturn.length] = oInstance;
		} catch(e) {
		}
	}

	return aReturn;
};

/**
 * 컴포넌트의 생성된 인스턴스를 리턴한다.
 * @return {Array} 생성된 인스턴스에 배열
 */
jindo.Component.getInstance = function(){
	return this._aInstance;
};/**
 * @fileOverview HTML 컴포넌트에 상속되어 사용되는 Component Core 
 * @author gony, hooriza, senxation
 * @version 0.2
 */

jindo.HTMLComponent = jindo.$Class({
	/** @lends jindo.HTMLComponent */
	
	sTagName : "",
	
	/**
	 * HTML 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.UIComponent
	 */
	$init : function() {
		return;
	},
	
	/**
	 * 컴포넌트를 새로 그려준다.
	 */
	paint : function() {
		/* 반드시 상속받는 클래스에서 정의되어야 한다. */
		this._onPaint();
	} 
	
}).extend(jindo.UIComponent);

/**
 * 다수의 컴포넌트의 paint 메소드를 일괄 수행하는 Static Method
 */
jindo.HTMLComponent.paint = function() {
	 var aInstance = this.getInstance();
	 if (typeof aInstance == "undefined") {
	 	return;
	 }
	 
	 for(var i = 0; i < aInstance.length; i++) {
	 	if (aInstance[i] && aInstance[i].paint) {
			aInstance[i].paint();
		}
	 }
};

/**
 * 다수의 컴포넌트를 일괄 생성하는 Static Method
 * @param {Array || String} aObject 컴포넌트를 적용할 엘리먼트의 엘리먼트 배열 혹은 클래스명
 * @param {Object} oOption 옵션 객체
 */
jindo.HTMLComponent.factory = function(aObject, oOption) {
	if (typeof aObject == "string") {
		var sClassName = aObject;
		if (/^(\w+)\s*(?:\[(\w+)\s*=\s*(\w+)\])?$/.test(this.prototype.tagName)) {
			var a = [];
			aObject = document.getElementsByTagName(RegExp.$1);
			if(RegExp.$2 && RegExp.$3) {
				for(var i=0; i < aObject.length; i++) {
					if (aObject[i].getAttribute(RegExp.$2) == RegExp.$3) a[a.length] = aObject[i];
				}
				aObject = a;
			}

			if (sClassName) {
				var regex = new RegExp("\\b"+sClassName+"\\b","i"); 
				for(var i=0,a=[]; i < aObject.length; i++) {
					if (regex.test(aObject[i].className)) {
						a[a.length] = aObject[i];
					}
				}
				aObject = a;
			}

		} else {
			return [];
		}
	}
	
	this._fTempFactory = jindo.Component.factory;
	var aObject = this._fTempFactory(aObject, oOption);
	delete this._fTempFactory;
	return aObject;
};/**
 * @fileOverview Core of UIComponent
 * @author senxation
 * @version 0.1
 */

jindo.UIComponent = jindo.$Class({
	/** @lends jindo.UIComponent */
		
	/**
	 * UI 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.Component
	 */
	$init : function() {
		this._bIsActivating = false; //컴포넌트의 활성화 여부
	},

	/**
	 * 컴포넌트의 활성여부를 가져온다.
	 * @return {Boolean}
	 */
	isActivating : function() {
		return this._bIsActivating;
	},

	/**
	 * 컴포넌트를 활성화한다.
	 * @return {this}
	 */
	activate : function() {
		if (this.isActivating()) {
			return this;
		}
		
		//활성화 로직 ex)event binding
		/* 반드시 상속받는 클래스에서 정의되어야 한다. */
		if (arguments.length > 0) {
			this._onActivate(arguments);
		} else {
			this._onActivate();
		}
				
		this._bIsActivating = true;
		return this;
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	deactivate : function() {
		if (!this.isActivating()) {
			return this;
		}
		
		//비활성화 로직 ex)event unbinding
		/* 반드시 상속받는 클래스에서 정의되어야 한다. */
		if (arguments.length > 0) {
			this._onDeactivate(arguments);
		} else {
			this._onDeactivate();
		}
		
		this._bIsActivating = false;
		return this;
	}
}).extend(jindo.Component);	﻿/**
 * @fileOverview HTMLElement를 Drop할 수 있게 해주는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.DropArea = jindo.$Class({
	/** @lends jindo.DropArea */
	_aOveredTarget : null,
	
	/**
	 * DropArea 컴포넌트를 생성한다.
	 * DragArea 컴포넌트는 상위 기준 엘리먼트의 자식들 중 특정 클래스명을 가진 모든 엘리먼트에 Drag된 엘리먼트를 Drop 가능하게 한다.
	 * DragArea 컴포넌트는 인터페이스의 역할만하므로 PointingDropArea, MagneticDropArea와 같이 실제동작을 상속받아 구현하여야 한다.
	 * @constructs
	 * @extends jindo.Component
	 * @requires jindo.DragArea
	 * @param {Object} el Drop될 엘리먼트들의 상위 기준 엘리먼트. 컴포넌트가 적용되는 영역(Area)이 된다.
	 * @param {HashTable} htOption 옵션 객체
	 * @see jindo.DragArea
	 * @see jindo.PointingDropArea
	 * @see jindo.MagneticDropArea
	 */
	$init : function(el, htOption) {
	
		var self = this;
	
		this._el = jindo.$(el);
		
		this.option({ 
			sClassName : 'dropable', 
			oDragInstance : null 
		});
		
		this.option(htOption || {});
		
		this._aOveredTarget = jindo.$A([]);
		
		var oDrag = this.option('oDragInstance');
		if (oDrag) {

			oDrag.attach({
				'dragStart' : function(oCutomEvent) {
					self.fireEvent(oCutomEvent.type, oCutomEvent);
				},
				'dragEnd' : function(oCutomEvent) {
					self.fireEvent(oCutomEvent.type, oCutomEvent);
					self._clearOveredTarget();
				}
			});
		}
	},
	
	_addOveredTarget : function(oTarget) {
		if (this._aOveredTarget.indexOf(oTarget) == -1) {
			this._aOveredTarget.push(oTarget);
			this.fireEvent('over', { "element" : oTarget });
		}
	},
	
	_fireMoveEvent : function(oTarget, oRect, oPos, we) {
		
		var nRatioX = (oPos.pageX - oRect.nLeft) / (oRect.nRight - oRect.nLeft);
		var nRatioY = (oPos.pageY - oRect.nTop) / (oRect.nBottom - oRect.nTop);
		
		this.fireEvent('move', {
			"weEvent" : we,
			"element" : oTarget,
			"nRatioX" : nRatioX,
			"nRatioY" : nRatioY
		});
		
	},

	_removeOveredTarget : function(oTarget) {
	
		var nIndex = this._aOveredTarget.indexOf(oTarget);
		if (nIndex != -1) {
			this._aOveredTarget.splice(nIndex, 1);
			this.fireEvent('out', { "element" : oTarget });
		}

	},
	
	_clearOveredTarget : function() {
		
		for (var oTarget; oTarget = this._aOveredTarget.$value()[0]; ) {
			this._aOveredTarget.splice(0, 1);
			this.fireEvent('out', { "element" : oTarget });
		}
		
	},
	
	reCalculate : function() { }, // Interface

	/**
	 * Drag되고 있는 채, 마우스가 올라간 엘리먼트의 리스트를 구함
	 * @return {Array} 겹쳐진 엘리먼트 
	 */
	getOveredLists : function() {
		return this._aOveredTarget ? this._aOveredTarget.$value() : [];
	}
	
}).extend(jindo.Component);
﻿/**
 * @fileOverview Text Input의 값을 특정한 형식으로 변환하는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.Formatter = jindo.$Class({
	/** @lends jindo.Formatter */
	
	_aMarks : [ '\u0000', '\uFFFF' ],
	
	_sPrevValue : null,
	_oTextRange : null,
	
	/**
	 * Formatter 컴포넌트를 생성한다.
	 * Formatter 컴포넌트는 Text Input의 값을 특정한 형식으로 변환한다.
	 * @constructs
	 * @extends jindo.UIComponent
	 * @requires jindo.TextRange
	 * @requires jindo.WatchInput
	 * @param {HTMLElement} el
	 * @param {HashTable} htOption 옵션 객체
	 * @example 
var oFormatter = new jindo.Formatter($('foo'), {
	WatchInput : {
	} 
}).attach({
	beforechange : function(e) { 
		//전달되는 이벤트 객체 e = {
		//	element : (HTMLElement) Text Input 엘리먼트
		//	text : (String) Text Input 의 값
		//	startMark : (String)
		//	endMark : (String)
		//} 
	},
	change : function(e) {
		//전달되는 이벤트 객체 e = {
		//	element : (HTMLElement) Text Input 엘리먼트
		//	auto : (Boolean) 
		//}
	}
});
	 */
	$init : function(el, htOption) {
		var el = this._el = jindo.$(el);

		this.option({
			WatchInput: {
				nInterval : 100, //Check할 간격 (Except IE)
				bUseTimerOnIE : false, //IE에서 키보드 이벤트를 사용해서 감지할 경우 false로 지정. 다른 브라우저처럼 타이머로 체크하고자하는 경우 true로 설정
				sKeyEvent : "keydown", //attach할 키보드 이벤트 (IE Only)
				bActivateOnload : true
			}
		});
		this.option(htOption || {});
		
		var self = this;
		this._oTextRange = new jindo.TextRange(el);
		this._oWatchInput = new jindo.WatchInput(el, this.option("WatchInput")).attach({
			change : function(e) {
				self.paint(true);
			}
		});
		setTimeout(function() { self.paint(true); }, 0);
	},

	_splice : function(sStr, nIndex, nHowMany, sInsert) {
		return sStr.slice(0, nIndex) + sInsert + sStr.slice(nIndex + nHowMany);
	},
	
	/**
	 * Formatter 컴포넌트를 수행한다.
	 * Text Input에 입력이 있는 경우 beforechange 이벤트 발생. 값이 바뀌었을때 change 이벤트가 발생한다.
	 * @param {Object} bAuto
	 */
	paint : function(bAuto) {
		var el = this._el;

		var oTextRange = this._oTextRange;
		var oMarks = this._aMarks;
		var sText = el.value.toString();
		
		if (oTextRange.hasFocus()) {
			var aSel = [ -1, -1 ];
			try { aSel = oTextRange.getSelection(); } catch(e) { }
			
			sText = this._splice(this._splice(sText, aSel[1], 0, oMarks[1]), aSel[0], 0, oMarks[0]);
		}
		
		var oParam = { 
			element : el, 
			text : sText, 
			startMark : oMarks[0], 
			endMark : oMarks[1] 
		};
		if (!this.fireEvent('beforechange', oParam)) {
			return;
		}
		
		var sOutput = oParam.text;
		
		if (oTextRange.hasFocus()) {
		
			var nPos = sOutput.indexOf(oMarks[0]);
			sOutput = this._splice(sOutput, nPos, 1, '');
			
			var aSel = [ nPos ];
			aSel[1] = sOutput.indexOf(oMarks[1]);
			sOutput = this._splice(sOutput, aSel[1], 1, '');
			
		}
		el.value = sOutput;
		
		if (oTextRange.hasFocus()) {
			try { 
				oTextRange.setSelection(aSel[0], aSel[1]); 
			} catch(e) { 
			}
		}
		
		if (this._sPrevValue != el.value) {
			this._sPrevValue = el.value;
			this.fireEvent('change', { 
				element : el, 
				auto : bAuto ? true : false 
			});
		}
		
	}
	
}).extend(jindo.UIComponent);/**
 * @fileOverview 다이얼로그 레이어
 * @author senxation
 * @version 0.2
 */

jindo.Dialog = jindo.$Class({
	/** @lends jindo.Dialog */
		
	/**
	 * Dialog 컴포넌트를 생성한다.
	 * @constructs
	 * @param {HashTable} htOption 옵션 해시테이블
	 * @requires jindo.LayerPosition
	 * @extends jindo.Component
	 * @example
var oDialog = new jindo.Dialog({
	bAdjustPositionOnResize : true, //윈도우의 크기가 변해도 레이어의 위치를 조절해줄지의 여부
	sClassPrefix : 'dialog-' //Default Class Prefix
}).attach({
	beforeShow : function(oCustomEvent) {
		//다이얼로그 레이어가 보여지기 전에 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
		//oCustomEvent.stop(); 수행시 보여지지 않음
	},
	show : function(oCustomEvent) {
		//다이얼로그 레이어가 보여진 후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
	},
	beforeHide : function(oCustomEvent) {
		//다이얼로그 레이어가 숨겨지기 전에 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
		//oCustomEvent.stop(); 수행시 숨겨지지 않음
	},
	hide : function(oCustomEvent) {
		//다이얼로그 레이어가 숨겨진 후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
	}
});
	 */
	$init : function(htOption) {
		//옵션 초기화
		var htDefaultOption = {
			bAdjustPositionOnResize : true, //윈도우의 크기가 변해도 레이어의 위치를 조절해줄지의 여부
			sClassPrefix : 'dialog-' //Default Class Prefix
		}
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		this._bIsEventAttached = false;
		this._bIsShown = false;
		
		//컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
		this._assignHTMLElements();
		this._initLayerPosition();
	},
	
	/**
	 * HTMLElement들을 선언한다.
	 * @ignore
	 */
	_assignHTMLElements : function() {
		var sClassPrefix = this.option("sClassPrefix");
		this._elLayer = jindo.$('<div class="' + sClassPrefix + 'layer"></div>');
		this._welLayer = jindo.$Element(this._elLayer);
		this._wfClick = jindo.$Fn(this._onClick, this);
		this._wfResize = jindo.$Fn(this._onResize, this);
	},
	
	/**
	 * LayerPosition 컴포넌트를 초기화한다.
	 */
	_initLayerPosition : function() {
		this._oLayerPosition = new jindo.LayerPosition(document.body, this._elLayer, {   
		     "sPosition": "inside-center"
		});
	},
	
	/**
	 * 생성된 LayerPosition 컴포넌트의 인스턴스를 가져온다.
	 * @return {jindo.LayerPosition}
	 */
	getLayerPosition : function() {
		return this._oLayerPosition;
	},
	
	/**
	 * 다이얼로그 레이어에 대한 템플릿을 설정한다.
	 * 다이얼로그 레이어의 내용을 동적으로 설정하기 위해 템플릿 형태로 설정한다.
	 * @remark Jindo의 $Template 참고
	 * @param {String} sTemplate
	 * @example
oDialog.setLayerTemplate('<div><a href="#" class="dialog-close"><img width="15" height="14" alt="레이어닫기" src="http://static.naver.com/common/btn/btn_close2.gif"/></a></div><div style="position:absolute;top:30px;left:10px;">{=text}</div><div style="position:absolute;bottom:10px;right:10px;"><button type="button" class="dialog-confirm">확인</button><button type="button" class="dialog-cancel">취소</button></div></div>');
	 */
	setLayerTemplate : function(sTemplate) {
		this._sTemplate = sTemplate;
		this._template = jindo.$Template(this._sTemplate);
	},
	
	/**
	 * 설정된 다이얼로그 레이어의 템플릿을 가져온다.
	 * @return {String} 설정된 템플릿
	 */
	getLayerTemplate : function() {
		return this._sTemplate;
	},
	
	/**
	 * 다이얼로그 레이어를 보여준다.
	 * @remark 다이얼로그 레이어는 설정된 레이어의 템플릿으로부터 만들어져 document.body에 append된다.
	 * @param {Object} htTemplateProcess 템플릿에 대체하기 위한 데이터를 가지는 Hash Table
	 * @param {Object} htEventHandler 다이얼로그 내부에서 발생하는 이벤트를 처리하는 핸들러들
	 * @example
//다이얼로그 레이어에 닫기, 취소, 확인 버튼이 모두 존재하는경우 각각의 버튼에 대한 핸들러를 함께 등록한다. 
var oDialog = new jindo.Dialog();

oDialog.setLayerTemplate('<div><a href="#" class="dialog-close"><img width="15" height="14" alt="레이어닫기" src="http://static.naver.com/common/btn/btn_close2.gif"/></a></div><div style="position:absolute;top:30px;left:10px;">{=text}</div><div style="position:absolute;bottom:10px;right:10px;"><button type="button" class="dialog-confirm">확인</button><button type="button" class="dialog-cancel">취소</button></div></div>');

oDialog.show({ text : "<strong>확인하시겠습니까?</strong>" }, {
	close : function(oCustomEvent) {
		$Element("status").text("oDialog의 레이어에서 닫기 버튼이 클릭되었습니다.");
		//oCustomEvent.stop() 수행시 레이어가 닫히지 않는다.
	},
	cancel : function(oCustomEvent) {
		$Element("status").text("oDialog의 레이어에서 취소 버튼이 클릭되었습니다.");
		//oCustomEvent.stop() 수행시 레이어가 닫히지 않는다.
	},
	confirm : function(oCustomEvent) {
		$Element("status").text("oDialog의 레이어에서 확인 버튼이 클릭되었습니다.");
		//oCustomEvent.stop() 수행시 레이어가 닫히지 않는다.
	}
});	
	 */
	show : function(htTemplateProcess, htEventHandler) {
		if (this.isShown()) {
			return;
		}
		
		this.attach(htEventHandler);
		
		document.body.appendChild(this._elLayer);
		this._welLayer.html(this._template.process(htTemplateProcess));
		
		var htCustomEvent = { "elLayer" : this._elLayer }; 
		
		if (this.fireEvent("beforeShow", htCustomEvent)) {
			this._welLayer.show();
			this._attachEvents();
			this.getLayerPosition().setPosition();
			this._bIsShown = true;	
		} else {
			return;
		}
		
		this.fireEvent("show", htCustomEvent);		
	},
	
	/**
	 * 다이얼로그 레이어를 숨긴다.
	 * @remark 다이얼로그 레이어가 숨겨지는 동시에 모든 이벤트가 제거되고 document.body에서 제거된다.
	 */
	hide : function() {
		if (!this.isShown()) {
			return;
		}

		var htCustomEvent = {"elLayer" : this._elLayer }; 
		
		if (this.fireEvent("beforeHide", htCustomEvent)) {
			this.detachAll("close").detachAll("confirm").detachAll("cancel");
			this._detachEvents();
			this._welLayer.hide();
			this._welLayer.leave();
			this._bIsShown = false;
		} else {
			return;
		}
		
		this.fireEvent("hide", htCustomEvent); 

	},
	
	/**
	 * 다이얼로그 레이어가 보여지고 있는지 가져온다.
	 * @return {Boolean} 다이얼로그 레이어의 노출여부
	 */
	isShown : function() {
		return this._bIsShown;
	},
	
	/**
	 * 이벤트 등록 여부를 가져온다.
	 * @return {Boolean}
	 * @ignore
	 */
	_isEventAttached : function() {
		return this._bIsEventAttached;
	},

	/**
	 * 이벤트를 등록한다.
	 * @return {this}
	 * @ignore
	 */
	_attachEvents : function() {
		if (this._isEventAttached()) {
			return this;
		}
		
		//활성화 로직 ex)event binding
		this._wfClick.attach(this._elLayer, "click");
		if(this.option("bAdjustPositionOnResize")) {
			this._wfResize.attach(window, "resize");
		}
		this._bIsEventAttached = true;
		return this;
	},
	
	/**
	 * 이벤트를 해제한다.
	 * @return {this}
	 * @ignore
	 */
	_detachEvents : function() {
		if (!this._isEventAttached()) {
			return this;
		}
		
		//비활성화 로직 ex)event unbinding
		this._wfClick.detach(this._elLayer, "click");
		this._wfResize.detach(window, "resize");
		this._bIsEventAttached = false;
		return this;
	},
	
	/**
	 * 다이얼로그 레이어 내부에서 닫기, 확인, 취소 버튼을 처리하기 위한 핸들러
	 * @param {$Event} we
	 * @ignore
	 */
	_onClick : function(we) {
		var sClassPrefix = this.option("sClassPrefix");
		var elClosestClose, elClosestConfirm, elClosestCancel;
		if (elClosestClose = this._getClosest(("." + sClassPrefix + "close"), we.element)) {
			if(this.fireEvent("close")) {
				this.hide();
			} 
		} else if (elClosestConfirm = this._getClosest(("." + sClassPrefix + "confirm"), we.element)) {
			if(this.fireEvent("confirm")) {
				this.hide();
			}
		} else if (elClosestCancel = this._getClosest(("." + sClassPrefix + "cancel"), we.element)) {
			if (this.fireEvent("cancel")) {
				this.hide();
			}
		}
	},
	
	/**
	 * 자신을 포함하여 부모노드중에 셀렉터에 해당하는 가장 가까운 엘리먼트를 구함
	 * @param {String} sSelector CSS셀렉터
	 * @param {HTMLElement} elBaseElement 기준이 되는 엘리먼트
	 * @return {HTMLElement} 구해진 HTMLElement
	 * @ignore
	 */
	_getClosest : function(sSelector, elBaseElement) {
		if (jindo.$$.test(elBaseElement, sSelector)) {
			return elBaseElement;
		}
		return jindo.$$.getSingle("! " + sSelector, elBaseElement);
	},
	
	/**
	 * 브라우저의 사이즈가 변경되었을 때의 레이어 위치를 보정하기위한 핸들러
	 * @ignore
	 */
	_onResize : function() {
		this.getLayerPosition().setPosition();
	}
}).extend(jindo.Component);	﻿/**
 * @fileOverview 트리구조를 표현하는 트리 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.6
 */
jindo.Tree = jindo.$Class({
	/** @lends jindo.Tree */
	
	_bIsActivating : false, //컴포넌트의 활성화 여부
	_sTemplate : null,
	_htNodeData : null,
	_el : null,
	_elSelectedNode : null,
	
	/**
	 * Tree 컴포넌트를 생성한다.
	 * @constructs
	 * @param {Object} el 적용할 트리 엘리먼트 
	 * @param {Object} oOptions 옵션객체
	 * @extends jindo.UIComponent
	 * @example
tree = new jindo.Tree(jindo.$('tree'), { 
	sClassPrefix : 'tree-', //Default Class Prefix 
	bExpandOnSelect : true, //레이블을 클릭하여 선택했을때도 노드를 펼칠지 여부
	bActivateOnload : true //로드시 activate할지 여부
}).attach({
	beforeExpand : function(oCustomEvent) {
		//노드가 펼쳐지기 전에 발생
		//전달되는 이벤트객체 oCustomEvent = {
		//	element : (HTMLElement) 선택된 엘리먼트
		//}
		//oCustomEvent.stop() 수행시 뒤이어 일어나는 select 이벤트는 발생하지 않는다.
	},
	expand : function(e) {
		//노드가 펼쳐진 후 발생
		//전달되는 이벤트객체 oCustomEvent = {
		//	element : (HTMLElement) 선택된 엘리먼트
		//}
	},
	beforeCollapse : function(oCustomEvent) {
		//노드가 접혀지기 전에 발생
		//전달되는 이벤트객체 e = {
		//	element : (HTMLElement) 선택된 엘리먼트
		//}
		//oCustomEvent.stop() 수행시 뒤이어 일어나는 select 이벤트는 발생하지 않는다.
	},
	collapse : function(e) {
		//노드가 접혀진 후 발생
		//전달되는 이벤트객체 oCustomEvent = {
		//	element : (HTMLElement) 선택된 엘리먼트
		//}
	},
	beforeSelect : function(e) {
		//노드가 선택되기 전 발생
		//전달되는 이벤트객체 oCustomEvent = {
		//	element : (HTMLElement) 선택된 엘리먼트
		//}
		//oCustomEvent.stop() 수행시 뒤이어 일어나는 select 이벤트는 발생하지 않는다.
	},
	select : function(oCustomEvent) {
		//노드가 선택되었을 때 발생
		//전달되는 이벤트객체 oCustomEvent = {
		//	element : (HTMLElement) 선택된 엘리먼트
		//}},
	click : function(oCustomEvent) {
		//노드를 클릭했다가 mouseup이 일어날때 발생
		//전달되는 이벤트객체 e = {
		//	element : (HTMLElement) 선택된 엘리먼트
		//	weEvent : (jindo.$Event) 클릭 이벤트 객체
		//}
	},
	beforeProcessData : function(oCustomEvent) {
		//노드를 생성할 때 (createNode) 발생한다.
		//sTemplate에 data를 파싱해 넣는 동작을 커스터마이징 할 수 있다.  
		//전달되는 이벤트객체 e = {
		//	sTemplate : (String) '<li class="{=nodeClass}{if lastNode} {=lastNodeClass}{/if}"><div{if hasChild} class="{=hasChildClass}"{/if}><button class="{=buttonClass}">+</button><span class="{=labelClass}">{=text}</span></div></li>';
		//	htData : (HashTable) 처리중인 데이터 객체
		//}		
	}
});
	 */	
	$init : function(el, oOptions) {
		this.option({ 
			sClassPrefix : 'tree-',
			bExpandOnSelect : true, //레이블을 클릭하여 선택했을때도 노드를 펼칠지 여부
			bActivateOnload : true
		});
		this.option(oOptions || {});
		
		var sPrefix = this.option('sClassPrefix');
		
		//클래스명들
		this.htClassName = {
			sNode : sPrefix + "node",
			sLastNode : sPrefix + "last-node",
			sHasChild : sPrefix + "has-child",
			sButton : sPrefix + "button",
			sLabel : sPrefix + "label",
			sSelected : sPrefix + "selected",
			sCollapsed : sPrefix + "collapsed"
		};
		
		this.setNodeTemplate('<li class="{=sNodeClass}{if bLastNode} {=sLastNodeClass}{/if}"><div{if bHasChild} class="{=sHasChildClass}"{/if}><button class="{=sButtonClass}">+</button><span class="{=sLabelClass}">{=sText}</span></div></li>');
		this._htNodeData = {};
		
		var el = jindo.$(el);
		this._setRootList(el);
		
		this._wfMouseDown = jindo.$Fn(this._onMouseDown, this);
 		this._wfMouseUp = jindo.$Fn(this._onMouseUp, this);
		
		this._makeNodeDataKeyFromHTML(); //data를 마크업으로부터 nodedata를 생성하고 데이터를 기반으로 paint
		this.paintAllNodes();
		
		var elDefaultSelectedNode = jindo.$$.getSingle('.' + this.htClassName.sNode + ' > .' + this.htClassName.sSelected, this.getRootList());
		if (elDefaultSelectedNode) this._setSelectedNode(this.getNode(elDefaultSelectedNode));
		
		if(this.option("bActivateOnload")) {
			this.activate(); //컴포넌트를 활성화한다.	
		}
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 * @return {this}
	 */
	_onActivate : function() {
		var el = this.getRootList();
		this._wfMouseDown.attach(el, 'mousedown');
		this._wfMouseUp.attach(el, 'mouseup');
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		var el = this.getRootList();
		this._wfMouseDown.detach(el, 'mousedown');
		this._wfMouseUp.detach(el, 'mouseup');
	},
	
	_onMouseDown : function(e) {
		var el = e.element;
		var elNode = this.getNode(el);
		if (!elNode) {
			return;
		}
		if (this.hasChild(elNode)) {
			var elButton = jindo.$$.test(el, '.' + this.htClassName.sButton) ? el : jindo.$$.getSingle('! .' + this.htClassName.sButton, el);
			
			if (elButton) {
				if (this.isCollapsed(elNode)) this.expandNode(elNode);
				else this.collapseNode(elNode);
				return;
			}
		}
		
		var htPart = this.getPartsOfNode(elNode);
		if (htPart.elItem) {
			this.selectNode(elNode);
		}
	},
	
	_onMouseUp : function(we) {
		var el = we.element;
		var elNode = this.getNode(el);
		if (!elNode) {
			return;
		}
		if (this.hasChild(elNode)) {
			var elButton = jindo.$$.test(el, '.' + this.htClassName.sButton) ? el : jindo.$$.getSingle('! .' + this.htClassName.sButton, el);
			if (elButton) return;
		}
		
		this.fireEvent('click', { element : elNode, weEvent : we });
	},
	
	//paint관련
	/**
	 * 노드를 새로 그린다.
	 * @param {HTMLElement} elNode
	 * @param {Boolean} bPaintChild 자식노드도 새로 그릴지 여부 (Default : true)
	 */
	paintNode : function(elNode, bPaintChild) {
		if (typeof bPaintChild == "undefined") {
			bPaintChild = true;	
		}
		
		this._paintNode(elNode);

		if (bPaintChild) {
			var aNodes = this.getChildNodes(elNode);
			for (var i = 0; i < aNodes.length; i++) {
				this.paintNode(aNodes[i]);
			}
		}		
	},
	
	/**
	 * 모든 노드를 새로 그린다.
	 * @param {HTMLElement} elNode
	 */	
	paintAllNodes : function(elNode) {
		this.paintNode(elNode || this.getRootNode());
	},
	
	/**
	 * 노드를 새로 그린다. (자식노드가 있거나 마지막 노드일경우 클래스명 처리)
	 * @ignore
	 * @param {HTMLElement} elNode
	 */
	_paintNode : function(elNode) {
		if (!elNode) {
			return;
		}
		var htPart = this.getPartsOfNode(elNode);
		var aChildNodes = this.getChildNodes(elNode);
		
		var htNodeData = this.getNodeData(elNode);
		
		var welNode = jindo.$Element(elNode); 
		var welItem = jindo.$Element(htPart.elItem);

		delete htNodeData["_aChildren"]; //자식이 없으면 _aChildren 제거
		
		//자식이 있는지 여부		
		if (aChildNodes.length > 0) {
			welItem.addClass(this.htClassName.sHasChild);
			htNodeData["_aChildren"] = [];
			
			var self = this;
			jindo.$A(aChildNodes).forEach(function(elNode, i){
				htNodeData["_aChildren"].push(self.getNodeData(elNode));
			})
		}
		else {
			welItem.removeClass(this.htClassName.sHasChild);
			if (htPart.elChild) {
				htPart.elChild.parentNode.removeChild(htPart.elChild);	
			}
		}
		
		//마지막 노드인지
		htNodeData["bLastNode"] = jindo.$$.getSingle('~ .' + this.htClassName.sNode, elNode) ? false : true;
		(htNodeData["bLastNode"]) ? welNode.addClass(this.htClassName.sLastNode) : welNode.removeClass(this.htClassName.sLastNode);
		elNode.parentNode.style.zoom = 1; //ie 렌더링 버그 수정!!
	},
	
	/**
	 * 노드에 적용될 템플릿을 가져온다.
	 * @return {String}
	 * @example
oTree.getNodeTemplate();
기본값 -> '<li class="{=sNodeClass}{if bLastNode} {=sLastNodeClass}{/if}"><div{if bHasChild} class="{=sHasChildClass}"{/if}><button class="{=sButtonClass}">+</button><span class="{=sLabelClass}">{=sText}</span></div></li>'

//템플릿에 process될 값들의 Hash Table
var htProcess = {
	sNodeClass : 노드의 클래스명
	bLastNode : 노드가 마지막인지 여부 
	sLastNodeClass : 마지막 노드의  클래스명
	bHasChild : 노드가 자식을 가지는 지 여부
	sHasChildClass : 자식을 가지는 경우의 클래스명
	sCollapsedClass : 접혀진 노드의 클래스명
	sButtonClass : 접기/펼치기 버튼의 클래스명
	sLabelClass : 레이블의 클래스명
	sText : 노드의 이름 (텍스트)
};
	 */
	getNodeTemplate : function() {
		return this._sTemplate;
	},
	/**
	 * 노드 생성시 노드에 적용될 템플릿을 설정한다.
	 * @param {String} s
	 * @example
//자식노드가 모두 접혀진 채 생성하는 예제
oTree.setNodeTemplate('<li class="{=sNodeClass}{if bLastNode} {=sLastNodeClass}{/if} {=sCollapsedClass}"><div{if bHasChild} class="{=sHasChildClass}"{/if}><button class="{=sButtonClass}">+</button><span class="{=sLabelClass}">{=sText}</span></div></li>');
	 */
	setNodeTemplate : function(s) {
		this._sTemplate = s;
	},
	
	//List 관련
	/**
	 * 노드의 트리리스트(ul 엘리먼트)를 가져온다.
	 * @param {Object} elNode
	 */
	getChildListOfNode : function(elNode) {
		return jindo.$$.getSingle("ul", elNode);		
	},
	/**
	 * 트리컴포넌트그 최상위 루트 트리리스트(ul 엘리먼트)를 가져온다.
	 * @return {HTMLElement}
	 */
	getRootList : function() {
		return this._el;
	},
	_setRootList : function(el) {
		this._el = el;
	},
	
	//Node 관련
	/**
	 * 특정 엘리먼트가 속해있는 노드를 구한다.
	 * @param {HTMLElement} el 노드 자체, 노드의 버튼, 레이블 같이 노드의 li태그 자식 엘리먼트로부터 노드를 구할 수 있다.  
	 * @return {HTMLElement} 노드 (LI Element)
	 */
	getNode : function(el) {
		var elNode = jindo.$$.test(el, '.' + this.htClassName.sNode) ? el : jindo.$$.getSingle('! .' + this.htClassName.sNode, el);
		return elNode && jindo.$Element(elNode).isChildOf(this.getRootList()) ? elNode : null;
		
	},
	
	/**
	 * 노드를 구성하는 요소를 구한다.
	 * @param {HTMLElement} elNode
	 * @return {Object}
	 */
	getPartsOfNode : function(elNode) {
		var aParts = jindo.$$('> *', elNode);
		return { elItem : aParts[0], elChild : aParts[1] };
	},
	
	/**
	 * 노드의 타입을 구한다.
	 * @param {HTMLElement} elNode
	 * @return {String} "root" || "internal" || "leaf"
	 */	
	getNodeType : function(elNode) {
		if (elNode === this.getRootNode()) {
			return "root";
		}
		
		else if (this.getChildNodes(elNode).length > 0) {
			return "internal";
		}
		
		else {
			return "leaf";
		}
	},
	
	/**
	 * 루트노드를 구한다.
	 * @return {HTMLElement}
	 */
	getRootNode : function() {
		if (this._elRootNode) {
			return this._elRootNode;
		}
		this._elRootNode = jindo.$$.getSingle('.' + this.htClassName.sNode, this.getRootList());
		return this._elRootNode;
	},
	
	/**
	 * 모든 노드를 가져온다.
	 * @return {Array}
	 */
	getAllNodes : function() {
		return jindo.$$('.' + this.htClassName.sNode, this.getRootList());
	},
	
	/**
	 * 자식 노드들을 가져온다.
	 * @param {HTMLElement} elNode 노드
	 * @return {Array} 자식 노드들의 배열
	 */
	getChildNodes : function(elNode) {
		var elChildList = this.getChildListOfNode(elNode);
		return elChildList ? jindo.$$('> .' + this.htClassName.sNode, elChildList) : [];
	},
	
	/**
	 * 노드가 자식을 가지고 있는지 여부를 가져온다.
	 * @param {HTMLElement} elNode 노드
	 * @return {Boolean}
	 */
	hasChild : function(elNode) {
		var htPart = this.getPartsOfNode(elNode);
		return htPart.elChild && htPart.elChild.getElementsByTagName('li')[0] ? true : false;
	},
	
	/**
	 * 부모 노드를 가져온다.
	 * @param {HTMLElement} elNode 노드
	 * @return {HTMLElement} 부모 노드
	 */
	getParentNode : function(elNode) {
		var elRootNode = this.getRootNode();
		if (elNode === elRootNode) {
			return null;
		}
		return this.getNode(elNode.parentNode);
	},
	
	/**
	 * 이전 노드를 가져온다.
	 * @param {HTMLElement} elNode 노드
	 * @return {HTMLElement} 이전 노드
	 */
	getPreviousNode : function(elNode) {
		var elReturn = jindo.$$.getSingle('!~ .' + this.htClassName.sNode, elNode);
		return elReturn ? this.getNode(elReturn) : null;
	},
	
	/**
	 * 다음 노드를 가져온다.
	 * @param {HTMLElement} elNode 노드
	 * @return {HTMLElement} 다음 노드
	 */
	getNextNode : function(elNode) {
		var elReturn = jindo.$$.getSingle('~ .' + this.htClassName.sNode, elNode);
		return elReturn ? this.getNode(elReturn) : null;
	},
	
	/**
	 * 선택된 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getSelectedNode : function() {
		return this._elSelectedNode;
	},
	_setSelectedNode : function(el) {
		this._elSelectedNode = el;
	},
	
	/**
	 * 노드가 접혀있는지 여부를 구함
	 * @param {HTMLElement} elNode
	 * return {Boolean} 노드가 접혀있는지 여부
	 */
	isCollapsed : function(elNode) {
		return jindo.$Element(elNode).hasClass(this.htClassName.sCollapsed);
	},
	
	/**
	 * 노드의 depth를 구한다.
	 * @param {HTMLElement} elNode
	 * @return {Number} 노드의 depth 
	 */
	getNodeDepth : function(elNode) {
		var nDepth = -1;
		
		for (; elNode; elNode = elNode.parentNode) {
			if (elNode == this.getRootList()) {
				break;
			}
			if (jindo.$$.test(elNode, '.' + this.htClassName.sNode)) {
				nDepth++;
			}
		}
		
		return nDepth;
	},
	
	/**
	 * 노드에 Data를 설정한다.
	 * @param {HTMLElement} elNode
	 * @example
oTree.setNodeData(elNode, {
	nType : 1,
	nDepth : 3
});

oTree.getNodeData(elNode);
-->  
{
	bLabel : (String) 노드의 레이블 텍스트명,
	_aChildren : (Array) 자식노드데이터의 배열
	nType : 1,
	nDepth : 3,
}
	 */
	setNodeData : function(elNode, htNodeData) {
		var sKey = this._getNodeDataKey(elNode);
		delete htNodeData["_aChildren"]; //고정 정보는 설정할 수 없도록 
		delete htNodeData["sLabel"]; //label은 setNodeLabel 메소드로 설정가능
		for (var vProp in htNodeData) {
			this._htNodeData[sKey][vProp] = htNodeData[vProp];	
		}
	},
	
	/**
	 * 노드의 label에 해당하는 엘리먼트를 가져온다.
	 * @param {HTMLElement} elNode
	 * @return {HTMLElement} 클래스명 "label"을 가지는 엘리먼트
	 */
	getNodeLabelElement : function(elNode) {
		return jindo.$$.getSingle("." + this.htClassName.sLabel, elNode);
	},
	
	/**
	 * 노드의 label을 가져온다.
	 * @param {HTMLElement} elNode
	 * @return {String} label의 innerHTML
	 */
	getNodeLabel : function(elNode) {
		return jindo.$Element(this.getNodeLabelElement(elNode)).html();
	},
	
	/**
	 * 노드의 label을 변경한다.
	 * @param {HTMLElement} elNode
	 * @param {String} sLabel label의 innerHTML
	 */
	setNodeLabel : function(elNode, sLabel) {
		var sKey = this._getNodeDataKey(elNode);
		this._htNodeData[sKey]["sLabel"] = sLabel;
		jindo.$Element(this.getNodeLabelElement(elNode)).html(sLabel);	
	},
	
	/**
	 * 모든 노드에 키를 생성하여 설정한다.
	 * @ignore
	 */
	_makeNodeDataKeyFromHTML : function() {
		var aNodes = this.getAllNodes();
		
		//루프
		for (var i = 0; i < aNodes.length; i++) {
			var elNode = aNodes[i];
			this._makeNodeDataKey(elNode);
			this._makeNodeData(elNode)
		}
	},
	
	/**
	 * 노드의 data를 가져오기위한 키를 생성하여 설정한다.
	 * @ignore
	 * @param {HTMLElement} elNode
	 */
	_makeNodeDataKey : function(elNode) {
		var welNode = jindo.$Element(elNode);
		var sNodeDataKey = this._getNodeDataKey(elNode);
		if (sNodeDataKey) {
			return false;
		}
		
		var sPrefix = this.option('sClassPrefix');
		var sUnique = ('data-' + new Date().getTime() + parseInt(Math.random() * 10000000)).toString(); //ie8 버그수정. toString 이 없으면 나중에 sUnique값이 바뀜
		var sUniqueClass = sPrefix + sUnique;
		welNode.addClass(sUniqueClass);
		
		var sKey = this._getNodeDataKey(elNode);
		this._htNodeData[sKey] = {}; //Data Object 초기화
		
		return sKey;		
	},
	
	/**
	 * 노드의 기본 data를 설정한다.
	 * @param {HTMLElement} elNode
	 */
	_makeNodeData : function(elNode) {
		var htNodeData = this.getNodeData(elNode);
		htNodeData["element"] = elNode;
		htNodeData["sLabel"] = jindo.$Element(this.getNodeLabelElement(elNode)).text();
		htNodeData["bLastNode"] = jindo.$$.getSingle('~ .' + this.htClassName.sNode, elNode) ? false : true;
	},
	
	/**
	 * 노드의 data를 가져오기위한 키를 구한다.
	 * @ignore
	 * @param {HTMLElement} elNode
	 */
	_getNodeDataKey : function(elNode) {
		var sClassName = elNode.className;
		var sPrefix = this.option('sClassPrefix');
		
		var rKey = new RegExp('('+ sPrefix + 'data-[0-9]+)');
		if (rKey.test(sClassName)) {
			return RegExp.$1;
		}
		
		return null;
	},
	
	/**
	 * 노드에 설정된 data를 구한다.
	 * @param {HTMLElement} elNode 생략될 경우 전체 데이터셋을 리턴한다.
	 * @return {Object} 노드의 data
	 * @example 
노드 data의 기본 구조
{ 
	sLabel : (String) 노드명, 
	_aChildren : (Array) 자식노드 배열 
}
	 */
	getNodeData : function(elNode) {
		return (elNode) ? this._htNodeData[this._getNodeDataKey(elNode)] : this._htNodeData;
	},
	
	/**
	 * 노드의 데이터를 제거한다.
	 * 부모의 children에서도 제거한다.
	 * @param {HTMLElement} elNode
	 */
	_clearNodeData : function(elNode) {
		//todo
		var elParentNode = this.getParentNode(elNode);
		var htNodeData = this.getNodeData(elNode);
		var sKey = this._getNodeDataKey(elNode);
		
		if (elParentNode) {
			var htParentNodeData = this.getNodeData(elParentNode);
			if(htParentNodeData) {
				var nIndex = jindo.$A(htParentNodeData["_aChildren"]).indexOf(htNodeData);
				htParentNodeData["_aChildren"].splice(nIndex, 1);	
			}
		}

		//자식의 모든 노드 데이터도 재귀로 제거한다.
		var self = this;
		if (this.hasChild(elNode)) {
			jindo.$A(this.getChildNodes(elNode)).forEach(function(elNode){
				self._clearNodeData(elNode);
			})
		}

		delete this._htNodeData[sKey];
	},
	
	/**
	 * 노드를 펼친다
	 * @param {HTMLElement} elNode 펼칠 노드
	 * @param {Boolean} bChildAll 노드의 자식도 모두 펼칠지 여부
	 */
	expandNode : function(elNode, bChildAll) {
		if (!this.fireEvent('beforeExpand', { element : elNode })) {
			return;
		}
		
		var htPart = this.getPartsOfNode(elNode);
		var aChildren = [];

		if (jindo.$$.test(htPart.elItem, '.' + this.htClassName.sHasChild)) {
			aChildren.push(elNode);
		}
		
		if (bChildAll) {
			aChildren = aChildren.concat(jindo.$$('.' + this.htClassName.sHasChild, elNode));	
		}

		for (var i = 0, elChild; elChild = aChildren[i]; i++) {
			
			var elChildNode = this.getNode(elChild);
			jindo.$Element(elChildNode).removeClass(this.htClassName.sCollapsed);
			this.fireEvent('expand', { element : elChildNode });
			
		}
	},
	
	/**
	 * 노드를 접는다
	 * @param {HTMLElement} elNode 펼칠 노드
	 * @param {Boolean} bChildAll 노드의 자식도 모두 펼칠지 여부
	 */
	collapseNode : function(elNode, bChildAll) {

		if (!this.fireEvent('beforeCollapse', { element : elNode })) {
			return;
		}

		var htPart = this.getPartsOfNode(elNode);
		var aChildren = [];

		if (jindo.$$.test(htPart.elItem, '.' + this.htClassName.sHasChild)) {
			aChildren.push(elNode);
		}

		if (bChildAll) {
			aChildren = aChildren.concat(jindo.$$('.' + this.htClassName.sHasChild, elNode));
		}

		for (var i = 0, elChild; elChild = aChildren[i]; i++) {
			var elChildNode = this.getNode(elChild);
			jindo.$Element(elChildNode).addClass(this.htClassName.sCollapsed);
			this.fireEvent('collapse', { element : elChildNode });
		}
		
	},
	
	/**
	 * 노드를 선택한다.
	 * @param {HTMLElement} elNode 선택할 노드
	 * @return {Boolean} 선택여부
	 */
	selectNode : function(elNode) {
		var self = this;
		var htPart = this.getPartsOfNode(elNode);
		var elSelectedNode = this.getSelectedNode();
		
		var elItem = htPart.elItem;

		if (!this.fireEvent('beforeSelect', { element : elNode })) return false;
		
		if (elSelectedNode != elNode) {
			
			if (elSelectedNode) jindo.$Element(this.getPartsOfNode(elSelectedNode).elItem).removeClass(this.htClassName.sSelected);
			jindo.$Element(elItem).addClass(this.htClassName.sSelected);
			
			this._setSelectedNode(elNode);
			
		} 
				
		this.fireEvent('select', { element : elNode });
		if (this.option("bExpandOnSelect")) {
			this.expandNode(elNode);
		}
		return true;
	},
	
	_createChild : function(elNode) {
		var elChild = this.getChildListOfNode(elNode);
		if (!elChild) {
			elChild = jindo.$('<ul>');
			elNode.appendChild(elChild);
		}

		try {
			return elChild;
		} finally {
			elChild = null;
		}
	},
	
	/**
	 * 노드를 삭제한다.
	 * @param {HTMLElement} elNode 삭제할 노드
	 * @return {this}
	 */
	removeNode : function(elNode) {
		//루트노드틑 삭제할 수 없음
		if (!elNode || elNode === this.getRootNode()) {
			this.clearNode(elNode);
			return this;
		}
		
		var elParentNode = this.getParentNode(elNode);
		this._clearNodeData(elNode);
		elNode.parentNode.removeChild(elNode);
		
		this.selectNode(elParentNode);
		this._paintNode(elParentNode);
		return this;
	},
	
	/**
	 * 자식 노드를 모두 삭제한다.
	 * @param {HTMLElement} elNode 삭제할 노드들의 부모노드
	 * @return {Boolean} 삭제여부
	 */
	clearNode : function(elNode) {
		var elChild = this.getChildListOfNode(elNode);
		if (!elChild) return false;

		var aChildLi = elChild.getElementsByTagName('li');
		for (var i = 0, elChildLi; elChildLi = aChildLi[i]; i++)
			this._clearNodeData(elChildLi);
		
		elChild.parentNode.removeChild(elChild);
		this._paintNode(elNode);
		
		return true;
	},
	
	/**
	 * 루트를 제외한 모든 노드를 제거한다. 
	 */
	clearTree : function() {
		this.clearNode(this.getRootNode());
	},
	
	_moveNodes : function(elTargetNode, aNodes, fCallback) {
		var self = this;
		for (var i = 0, elNode; elNode = aNodes[i]; i++) {
			fCallback(elNode);
		}
	},
	
	/**
	 * 특정 노드에 새 자식노드를 삽입한다. 
	 * @param {HTMLElement} elTargetNode 삽입할 노드의 부모가 될 노드
	 * @param {Array} aNodes 삽입할 노드의 배열
	 */
	appendNode : function(elTargetNode, aNodes) {
		if (!(aNodes instanceof Array)) {
			return arguments.callee.call(this, elTargetNode, [aNodes]);
		}
		
		var self = this;
		var elChild = this._createChild(elTargetNode);
		this._moveNodes(elTargetNode, aNodes, function(elNode) {
			var elParentNode = null;
			elParentNode = self.getParentNode(elNode);
			
			elChild.appendChild(elNode);
			
			//원래의 부모와 그 부모의 자식
			if (elParentNode) {
				self.paintNode(elParentNode, false);
				jindo.$A(self.getChildNodes(elParentNode)).forEach(function(elChildNode){
					self.paintNode(elChildNode, false);	
				});
			}
		});
		
		//타겟
		this.paintNode(elTargetNode, false);
		
		//타겟의 자식 (자기 자신과 자신의 형제)
		jindo.$A(this.getChildNodes(elTargetNode)).forEach(function(elChildNode){
			self.paintNode(elChildNode, false);	
		});
	},
	
	/**
	 * 특정 노드 앞 새 노드를 삽입한다. 
	 * @param {HTMLElement} elTargetNode 기준 노드 (루트노드가 될 수 없다)
	 * @param {Array} aNodes 삽입할 노드의 배열
	 */
	insertNodeBefore : function(elTargetNode, aNodes) {
		if(elTargetNode == this.getRootNode()) {
			return;
		}
		
		if (!(aNodes instanceof Array)) return arguments.callee.call(this, elTargetNode, [ aNodes ]);

		var self = this;
		var elChildList = elTargetNode.parentNode;
		this._moveNodes(elTargetNode, aNodes, function(elNode) {
			
			var elParentNode = null;
			elParentNode = self.getNode(elChildList);
			
			elChildList.insertBefore(elNode, elTargetNode);
			
			//그 부모의 자식
			if (elParentNode) {
				jindo.$A(self.getChildNodes(elParentNode)).forEach(function(elChildNode){
					self.paintNode(elChildNode, false);	
				});
			}
		});
	},
	
	/**
	 * 특정 노드 다음에 새 노드를 삽입힌다.
	 * @param {HTMLElement} elTargetNode 기준 노드 (루트노드가 될 수 없다)
	 * @param {Array} aNodes 삽입할 노드의 배열
	 */
	insertNodeAfter : function(elTargetNode, aNodes) {
		if(elTargetNode == this.getRootNode()) {
			return;
		}
		
		if (!(aNodes instanceof Array)) return arguments.callee.call(this, elTargetNode, [ aNodes ]);
		
		var self = this;
		var elChildList = elTargetNode.parentNode;
		var elNextNode = elTargetNode;
		this._moveNodes(elTargetNode, aNodes, function(elNode) {
			
			var elParentNode = null;
			elParentNode = self.getNode(elChildList);
			 
			elChildList.insertBefore(elNode, elNextNode.nextSibling); 
			elNextNode = elNode;
			
			//그 부모의 자식
			if (elParentNode) {
				jindo.$A(self.getChildNodes(elParentNode)).forEach(function(elChildNode){
					self.paintNode(elChildNode, false);	
				});
			}
		});
	},
	
	/**
	 * 노드를 생성한다.
	 * @param {Array} aDatas 생성할 노드의 정보
	 * @return {Array} 생성된 노드들의 배열
	 * @remark 노드를 생성하기 위해 하나의 노드는 label 스트링이 반드시 필요하고, 자식 노드는 _children 배열로 선언한다.
	 * @example 
//기본적인 데이터만을 포함하여 노드를 생성하는 예제
var aNewNodes = tree.createNode([
	{
		sLabel : '포유류',
		_aChildren : [
			{ sLabel : '고래' },
			{ sLabel : '토끼' },
			{ sLabel : '다람쥐' },
			{
				sLabel : '맹수',
				_aChildren : [
					{ sLabel : '호랑이' },
					{ sLabel : '표범' },
					{ sLabel : '사자' },
					{ sLabel : '재규어' }
				]
			}
		
		]
	},
	
	{ sLabel : '조류' }
]);
	 * @example
//노드별로 원하는 형태의 데이터를 설정하여 생성하는 예제
var aNodes = tree.createNode([
	{
		sLabel : '포유류',
		nType : 1,
		nValue : 15
	},
	{
		sLabel : '조류',
		nType : 2,
		nValue : 20
	}
]);
	 */
	createNode : function(aDatas) {
		var self = this;

		var fGetCode = function(aData) {
			if (aData instanceof Array) {
				var aCodes = [];
				var sTemplate = self.getNodeTemplate();
			
				for (var i = 0; i < aData.length; i++) {
					var htData = aData[i];
					var htParam = { sTemplate : sTemplate, htData : htData };
					self.fireEvent('beforeProcessData', htParam);
					
					var htProcess = {
						sNodeClass : self.htClassName.sNode,
						bLastNode : (i == aData.length - 1) ? true : false, 
						sLastNodeClass : self.htClassName.sLastNode,
						bHasChild : (typeof htData._aChildren != "undefined" && htData._aChildren.length > 0) ? true : false,
						sHasChildClass : self.htClassName.sHasChild,
						sCollapsedClass : self.htClassName.sCollapsed,
						sButtonClass : self.htClassName.sButton,
						sLabelClass : self.htClassName.sLabel,
						sText : htData.sLabel
					};
					
					var sCode = jindo.$Template(htParam.sTemplate).process(htProcess);
					sCode = fGetChildCode(htData._aChildren, sCode);
					aCodes.push(sCode);					 
				}
				return aCodes.join('\n');
			} 
		};
		
		var fGetChildCode = function(elChild, sCode) {
			var sChild = elChild ? fGetCode(elChild) : '';
			if (sChild) {
				var bChanged = false;
				sCode = sCode.replace(/(<ul(\s[^>]*)*>)(<\/ul>)/i, function(_, sBegin, _, sClose) {
					bChanged = true;
					return sBegin + sChild + sClose;
				});
				if (!bChanged) sCode = sCode.replace(/<\/li>/i, function(_) { return '\n<ul>' + sChild + '</ul>\n' + _; });
			}
			return sCode;
		};
		
		var fSetData = function(elChildListOfParentNode, aDatas) {
			var aNodes = jindo.$$("> ." + self.htClassName.sNode, elChildListOfParentNode);
			
			for (var i = 0; i < aNodes.length; i++) {
				var elNode = aNodes[i];
				var htNodeData = aDatas[i];
				
				var sKey = self._makeNodeDataKey(elNode);
				self._htNodeData[sKey] = aDatas[i];
				
				if (typeof htNodeData._aChildren != "undefined") {
					fSetData(self.getChildListOfNode(elNode), htNodeData._aChildren);
				}
			}
		}
		
		var elDummy = jindo.$('<ul>');
		elDummy.innerHTML = fGetCode(aDatas);
		var aNodes = jindo.$$("> ." + this.htClassName.sNode, elDummy);
		fSetData(elDummy, aDatas);
		
		return aNodes;
	},
	
	/**
	 * 노드를 생성할 때 적용된 노드의 원시 데이터를 가져온다.
	 * @deprecated getNodeData
	 */
	getNodeRawData : function(elNode) {
		return this.getNodeData(elNode);
	},
	/**
	 * 노드가 연속으로 선택된 횟수를 가져온다.
	 * @return {Number}
	 * @deprecated
	 */
	getSelectCount : function() {
		return this;
	}
	
}).extend(jindo.UIComponent);
﻿/**
 * @fileOverview 특정 리스트의 일련의 아이템들을 부드러운 움직임으로 이동시켜 볼 수 있도록하는 컴포넌트 
 * @author hooriza, modified by senxation
 * @version 0.4
 */

jindo.Rolling = jindo.$Class({
	/** @lends jindo.Rolling */
	_oTransition : null,

	/**
	 * Rolling 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.Component
	 * @requires jindo.Effect
	 * @requires jindo.Transition
	 * @param {String | HTMLElement} el 리스트를 감싸고 있는 엘리먼트의 id 혹은 엘리먼트 자체  
	 * @param {Object} oOptions 옵션객체
	 * @example
<xmp>
<div id="horz_wrap">
	<ul>
		<li>첫번째</li>
		<li>두번째</li>
		<li>세번째</li>
		<li>네번째</li>
		<li>다섯번째</li>
		<li>여섯번째</li>
		<li>일곱번째</li>
		<li>여덟번째</li>
		<li>아홉번째</li>
		<li>마지막</li>
	</ul>
</div>
<script>
	new jindo.Rolling($('horz_wrap'), {
		nFPS : 50, // (Number) 초당 롤링 이동을 표현할 프레임수
		nDuration : 400, // (ms) jindo.Effect, jindo.Transtition 참고
		sDirection : 'horizontal', // || 'vertical'
		sEffect : "bounce", //jindo.Effect명 참고
	}).attach({
		beforeMove : function(oCustomEvent) {
			//oCustomEvent.element 어느 엘리먼트의 scrollLeft 가 바뀌는지
			//oCustomEvent.nIndex 몇번째 항목으로 이동하는지
			//oCustomEvent.nScroll 이동할 포지션
			//oCustomEvent.stop()시 이동하지 않음
		},
		afterMove : function(oCustomEvent) {
			//oCustomEvent.nIndex 몇번째 항목으로 이동하였는지
		}
	});
</script>
</xmp>
	 */
	$init : function(el, oOptions) {
		
		this._el = jindo.$(el);
		this._elList = jindo.$$.test(this._el, 'ul, ol') ? this._el : jindo.$$.getSingle('> ul, > ol', el);
		
		this.option({
			nFPS : 50,
			nDuration : 800,
			sDirection : 'horizontal',
			sEffect : "linear"
		});
		
		this.option(oOptions || {});
		
		this._oKeys = this.option('sDirection') == 'horizontal' ? {
			offsetWidth : 'offsetWidth',
			marginLeft : 'marginLeft',
			marginRight : 'marginRight',
			clientWidth : 'clientWidth',
			scrollLeft : 'scrollLeft'
		} : {
			offsetWidth : 'offsetHeight',
			marginLeft : 'marginTop',
			marginRight : 'marginBottom',
			clientWidth : 'clientHeight',
			scrollLeft : 'scrollTop'
		};

		this._initTransition();

		var self = this;
		setTimeout(function() { self.moveTo(0); }, 0);
		
	},
	
	_initTransition: function(){
		this._onTransitionEnd = jindo.$Fn(function(e){
			this.fireEvent("afterMove", { nIndex : this.getIndex() });				
		}, this).bind();
		this._oTransition = new jindo.Transition().fps(this.option("nFPS")).attach("end", this._onTransitionEnd);
	},
	
	/**
	 * jindo.Transition 컴포넌트의 인스턴스를 가져온다.
	 * @return {jindo.Transition}
	 */
	getTransition : function() {
		return this._oTransition;
	},
	
	/**
	 * 리스트 엘리먼트를 구한다
	 * @return {HTMLElement} 리스트 엘리먼트 ul 또는 ol
	 */
	getList : function() {
		return this._elList;
	},
	
	/**
	 * 리스트의 아이템(LI, 즉 자식 엘리먼트)들을 구한다.
	 * @return {Array} LI 엘리먼트들의 배열
	 */
	getItems : function() {
		return jindo.$$('> li', this._elList);
	},
	
	_offsetSize : function(el) {
		var eEl = jindo.$Element(el);
		var oKeys = this._oKeys;
		var nMarginLeft = parseInt(eEl.css(oKeys.marginLeft)) || 0;
		var nMarginRight = parseInt(eEl.css(oKeys.marginRight)) || 0;
		return el[oKeys.offsetWidth] + nMarginLeft + nMarginRight;
	},
	
	/**
	 * 현재 표시되고있는 LI의 인덱스를 구한다.
	 * @return {Number} 현재 표시되고있는 LI의 인덱스
	 */
	getIndex : function() {
	
		var el = this._el;
		var oKeys = this._oKeys;
		
		var nScroll = el[oKeys.scrollLeft];

		var aItems = this.getItems();
		var nSize = 0;
		
		var n = 0;
		var nMinDistance = 99999999;

		for (var i = 0; i < aItems.length; i++) {

			var nDistance = Math.abs(nScroll - nSize);
			
			if (nDistance < nMinDistance) {
				nMinDistance = nDistance;
				n = i;
			}
			
			nSize += this._offsetSize(aItems[i]);
			
		}
		
		return n;
	
	},
	
	_move : function(n) {
		
		var el = this._el;
		var oKeys = this._oKeys;
		
		var aItems = this.getItems();
		var nPos = 0, nSize = 0;
		var self = this;
		
		if (n > 0) {

			for (var i = 0; i < n; i++) {
				nPos += this._offsetSize(aItems[i]);
			}
		} else {
			
			for (var i = aItems.length + n; i < aItems.length; i++)
				nPos -= this._offsetSize(aItems[i]);
			
		}
		
		for (var i = 0; i < aItems.length; i++)
			nSize += this._offsetSize(aItems[i]);
			
		if (nPos + el[oKeys.clientWidth] > nSize) {
			nPos = nSize - el[oKeys.clientWidth];
		}
			
		this._size = nSize;

		var htParam = {
			element : el, // 어느 엘리먼트의 scrollLeft 가 바뀌는지
			nIndex : n, // 몇번째 항목으로 이동하는지
			nScroll : nPos
		};
	
		if(!this.fireEvent('beforeMove', htParam)) {
			return;	
		}
		
		if (el[oKeys.scrollLeft] == htParam.nScroll) {
			return false;
		}
		var htDest = {};
		htDest[oKeys.scrollLeft] = jindo.Effect[this.option('sEffect')](htParam.nScroll);
		
		this.getTransition().start(this.option('nDuration'),
			htParam.element, htDest
		);
			
		return true;
		
	},
	
	/**
	 * n번째 아이템으로 이동한다.
	 * @param {Number} n
	 * @return {Boolean} 실제로 이동했는지 여부 
	 */
	moveTo : function(n) {
	
		var aItems = this.getItems();
		
		if (n < 0) {
			n = 0;
		} else if (n >= aItems.length) {
			n = aItems.length - 1;
		}
		if (!this._move(n)) return false;
		
		return true;
		
	},

	/**
	 * 뒤에서부터 n번째 아이템으로 이동한다.
	 * @param {Number} n
	 * @return {Boolean} 실제로 이동했는지 여부
	 */
	moveLastTo : function(n) {
		
		var aItems = this.getItems();
		return this.moveTo(aItems.length - 1 - n);
		
	},

	/**
	 * 현재 위치와 n만큼 떨어진 아이템으로 이동한다.
	 * @param {Number} n
	 * @return {Boolean} 실제로 이동했는지 여부
	 */
	moveBy : function(n) {
	
		var nIndex = this.getIndex();
		return this.moveTo(nIndex + n);
		
	},
	
	/**
	 * 리스트의 아이템들이 가려있는지 여부를 가져온다.
	 * @return {Boolean} 리스트의 아이템들이 가려있는지 여부
	 */
	isOverflowed : function() {
		
		var el = this._el;
		var oKeys = this._oKeys;
		
		var nSize = 0;
		var aItems = this.getItems();
		for (var i = 0; i < aItems.length; i++)
			nSize += this._offsetSize(aItems[i]);
			
		return nSize > el[oKeys.clientWidth];
		
	}

}).extend(jindo.Component);/**
 * @fileOverview 이미지 스크롤바 컴포넌트
 * @author senxation
 * @version 0.2
 */
jindo.ScrollBar = new jindo.$Class({
	/** @lends jindo.ScrollBar */

	_bMouseEnter : false,
	_bIsEventAttachedForCommon : false,
	_bIsEventAttachedForVertical : false,
	_bIsEventAttachedForHorizontal : false,
	
	/**
	 * ScrollBar 컴포넌트는 정해진 크기의 박스내의 내용을 스크롤바를 이용해 이동하여 볼 수 있게합니다.
	 * 스크롤바의 위치와 크기는 마크업의 정의에 따라 커스터마이징할 수 있습니다.
	 * 박스내 내용이 고정되어있고 변하지 않는 경우에 사용합니다.
	 * @constructs
	 * @extends jindo.UIComponent
	 * @requires jindo.Slider
	 * @requires jindo.RolloverArea
	 * @requires jindo.Transition
	 * @param {HTMLElement} el
	 * @param {Object} oOption
	 * @example
var oScrollBar = new jindo.ScrollBar("scroll", {
	sClassPrefix : "scrollbar-", // (String) Class Prefix
	nDelta : 16, // (Number) 스크롤 속도
	sClassNameForRollover : "rollover", // (String) Rollover에 반응할 class 명
	bActivateOnload : true
});
	 */	
	$init : function(el, oOption) {
		
		this.option({
			sClassPrefix : "scrollbar-",
			nDelta : 16, //스크롤 속도
			sClassNameForRollover : "rollover", // (String) Rollover에 반응할 class 명
			bActivateOnload : true
		});
		
		this.option(oOption || {});
		
		this._el = jindo.$(el);
		
		var sClassPrefix = this.option("sClassPrefix");
		
		this._oTimer = new jindo.Timer();
		this._oTransition = new jindo.Transition().fps(30);
		
		this._wfOnMouseEnter = jindo.$Fn(this._onMouseEnter, this);
		this._wfOnMouseLeave = jindo.$Fn(this._onMouseLeave, this);
		
		this._wfOnWheel = jindo.$Fn(this._onWheel, this);
		this._wfOnMouseUp = jindo.$Fn(this._onMouseUp, this);

		this._assignHTMLElements();
		this._initSliders();
		this._initRolloverArea();
		
		if (this.option("bActivateOnload")) {
			this.activate();
		}
	},
	
	_assignHTMLElements : function(){
		var el = this._el;
		var sClassPrefix = this.option("sClassPrefix");

		this._elBox = jindo.$$.getSingle("."+sClassPrefix+"box", el);
		this._elContent = jindo.$$.getSingle("."+sClassPrefix+"content", el);
		
		var welBox = jindo.$Element(this._elBox);
		var welContent = jindo.$Element(this._elContent);
		this._oBoxSize = {
			nWidth: welBox.width(),
			nHeight: welBox.height()
		};
		
		this._oContentSize = {
			nWidth: welContent.width(),
			nHeight: welContent.height()
		}

		this._oHorizontal = {
			elScrollBar : jindo.$$.getSingle("."+sClassPrefix+"h", el)
		}
		var oH = this._oHorizontal;
		if (oH.elScrollBar) {
			oH.elTrack = jindo.$$.getSingle("." + sClassPrefix + "track", oH.elScrollBar);
			oH.elThumb = jindo.$$.getSingle("." + sClassPrefix + "thumb", oH.elTrack);
			oH.elThumbHead = jindo.$$.getSingle("."+sClassPrefix+"thumb-head", oH.elThumb);
			oH.elThumbBody = jindo.$$.getSingle("."+sClassPrefix+"thumb-body", oH.elThumb);
			oH.elThumbFoot = jindo.$$.getSingle("."+sClassPrefix+"thumb-foot", oH.elThumb);			
			oH.elButtonLeft = jindo.$$.getSingle("." + sClassPrefix + "button-left", oH.elScrollBar);
			oH.elButtonRight = jindo.$$.getSingle("." + sClassPrefix + "button-right", oH.elScrollBar);
		}
		
		this._oVertical = {
			elScrollBar : jindo.$$.getSingle("."+sClassPrefix+"v", el)
		}
		var oV = this._oVertical;
		if (oV.elScrollBar) {
			oV.elTrack = jindo.$$.getSingle("." + sClassPrefix + "track", oV.elScrollBar);
			oV.elThumb = jindo.$$.getSingle("." + sClassPrefix + "thumb", oV.elTrack);
			oV.elThumbHead = jindo.$$.getSingle("."+sClassPrefix+"thumb-head", oV.elThumb);
			oV.elThumbBody = jindo.$$.getSingle("."+sClassPrefix+"thumb-body", oV.elThumb);
			oV.elThumbFoot = jindo.$$.getSingle("."+sClassPrefix+"thumb-foot", oV.elThumb);
			oV.elButtonUp = jindo.$$.getSingle("." + sClassPrefix + "button-up", oV.elScrollBar);
			oV.elButtonDown = jindo.$$.getSingle("." + sClassPrefix + "button-down", oV.elScrollBar);
		}
	},
	
	/**
	 * box 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getBox : function() {
		return this._elBox;
	},
	
	/**
	 * content 엘리먼트를 가져온다
	 * @return {HTMLElement}
	 */
	getContent : function() {
		return this._elContent;
	},
	
	/**
	 * 초기 로딩시 정해진 박스의 크기를 가져온다.
	 * @return {Object}
	 * @example
var oSize = {
	nWidth : (Number), 
	nHeight : (Number)
}
	 */
	getDefaultBoxSize : function() {
		return this._oBoxSize;
	},
	
	/**
	 * 초기 로딩시 정해진 박스의 크기를 가져온다.
	 * @return {Object}
	 * @example
var oSize = {
	nWidth : (Number), 
	nHeight : (Number)
}
	 */
	getDefaultContentSize : function() {
		return this._oContentSize;
	},
	
	/**
	 * 가로 스크롤바에 해당하는 HTMLElement 객체들을 가져온다.
	 * @return {Object}
	 * @example
var oScrollBarHorizontal = {
	elScrollBar : (HTMLElement),
	elTrack : (HTMLElement),
	elThumb : (HTMLElement),
	elThumbHead : (HTMLElement),
	elThumbBody : (HTMLElement),
	elThumbFoot : (HTMLElement),	
	elButtonLeft : (HTMLElement), 
	elButtonRight : (HTMLElement)
}
	 */
	getScrollBarHorizontal : function() {
		return this._oHorizontal;
	},
	
	/**
	 * 세로 스크롤바에 해당하는 HTMLElement 객체들을 가져온다.
	 * @return {Object}
	 * @example
var oScrollBarVertical = {
	elScrollBar : (HTMLElement),
	elTrack : (HTMLElement),
	elThumb : (HTMLElement),
	elThumbHead : (HTMLElement),
	elThumbBody : (HTMLElement),
	elThumbFoot : (HTMLElement),	
	elButtonUp : (HTMLElement), 
	elButtonDown : (HTMLElement)
}
	 */
	getScrollBarVertical : function() {
		return this._oVertical;
	},
	
	/**
	 * 가로 스크롤에 해당하는 슬라이더 객체를 가져온다.
	 * @return {jindo.Slider}
	 */
	getSliderHorizontal : function() {
		return this._oSliderHorizontal || null;
	},
	
	/**
	 * 세로 스크롤에 해당하는 슬라이더 객체를 가져온다.
	 * @return {jindo.Slider}
	 */
	getSliderVertical : function() {
		return this._oSliderVertical || null;
	},
	
	/**
	 * RolloverArea 객체를 가져온다.
	 * @return {jindo.RolloverArea}
	 */
	getRolloverArea : function() {
		return this._oRolloverArea;
	},
	
	_attachEvent : function(sDirection) {
		var sClassPrefix = this.option("sClassPrefix");
		var self = this;
		
		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();	
		
		function attach(o) {
			if (o.elScrollBar) {
				var sClassNameForRollover = self.option("sClassNameForRollover");
				jindo.$Element(o.elTrack).addClass(sClassNameForRollover);
				jindo.$Element(o.elThumb).addClass(sClassNameForRollover);
				if (o.elButtonLeft) {
					jindo.$Element(o.elButtonLeft).addClass(sClassNameForRollover);	
				}
				if (o.elButtonRight) {
					jindo.$Element(o.elButtonRight).addClass(sClassNameForRollover);
				}
				if (o.elButtonUp) {
					jindo.$Element(o.elButtonUp).addClass(sClassNameForRollover);
				}
				if (o.elButtonDown) {
					jindo.$Element(o.elButtonDown).addClass(sClassNameForRollover);
				}
			}
		}
		
		function attachH() {
			if (!self._bIsEventAttachedForHorizontal) {
				attach(oH);
			}
			self._bIsEventAttachedForHorizontal = true;
		}
		
		function attachV() {
			if (!self._bIsEventAttachedForVertical) {
				attach(oV);
			}
			self._bIsEventAttachedForVertical = true;
		}
		
		//공통 이벤트
		if(!this._bIsEventAttachedForCommon) {
			this._wfOnMouseEnter.attach(this._el, "mouseenter");
			this._wfOnMouseLeave.attach(this._el, "mouseleave");
			this._wfOnWheel.attach(document, "mousewheel");
			this._wfOnMouseUp.attach(document, "mouseup");
			this._bIsEventAttachedForCommon = true;
			jindo.$Element(this._el).removeClass(sClassPrefix + "noscript");
		}

		//방향이 없으면 전부
		if (!sDirection) {
			attachH();
			attachV();
		}
		if (sDirection == "horizontal") {
			attachH();
		}
		if (sDirection == "vertical") {
			attachV();
		}
	},
	
	_detachEvent : function(sDirection) {
		
		var sClassPrefix = this.option("sClassPrefix");
		var self = this;
		
		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();	
		
		function detach(o) {
			if (o.elScrollBar) {
				var sClassNameForRollover = self.option("sClassNameForRollover");
				jindo.$Element(o.elTrack).removeClass(sClassNameForRollover);
				jindo.$Element(o.elThumb).removeClass(sClassNameForRollover);
				if (o.elButtonLeft) {
					jindo.$Element(o.elButtonLeft).removeClass(sClassNameForRollover);	
				}
				if (o.elButtonRight) {
					jindo.$Element(o.elButtonRight).removeClass(sClassNameForRollover);
				}
				if (o.elButtonUp) {
					jindo.$Element(o.elButtonUp).removeClass(sClassNameForRollover);
				}
				if (o.elButtonDown) {
					jindo.$Element(o.elButtonDown).removeClass(sClassNameForRollover);
				}
			}
		}
		
		function detachH() {
			if (self._bIsEventAttachedForHorizontal) {
				detach(oH);
			}
			self._bIsEventAttachedForHorizontal = false;
		}
		
		function detachV() {
			if (self._bIsEventAttachedForVertical) {
				detach(oV);
			}
			self._bIsEventAttachedForVertical = false;
		}

		//방향이 없으면 전부
		if (!sDirection) {
			detachH();
			detachV();
		}
		else if (sDirection == "horizontal") {
			detachH();
		}
		else if (sDirection == "vertical") {
			detachV();
		}

		//공통 이벤트
		if(this._bIsEventAttachedForCommon && !this._bIsEventAttachedForHorizontal && !this._bIsEventAttachedForVertical) {
			this._wfOnMouseEnter.detach(this._el, "mouseenter");
			this._wfOnMouseLeave.detach(this._el, "mouseleave");
			this._wfOnWheel.detach(document, "mousewheel");
			this._wfOnMouseUp.detach(document, "mouseup");
			this._bMouseEnter = false;
			this._bIsEventAttachedForCommon = false;
			jindo.$Element(this._el).addClass(sClassPrefix + "noscript");	
		}
	},
	
	/**
	 * 스크롤바의 동작을 활성화한다.
	 * @param {String} sDirection "vertical" || "horizontal" || null
	 */
	_onActivate : function(sDirection) {
		this._attachEvent(sDirection || null);
		
		var oSliderH = this.getSliderHorizontal();
		var oSliderV = this.getSliderVertical();
		
		if(!sDirection) {
			if (oSliderH) {
				oSliderH.activate();
				//this.getBox().scrollLeft = 0;
				//this.setScrollLeft(0);
			}
			if (oSliderV) {
				oSliderV.activate();
				//this.getBox().scrollTop = 0;
				//this.setScrollTop(0);
			}
			jindo.$Element(this._el).removeClass(this.option("sClassPrefix") + "noscript");
			return;
		}
		if(sDirection == "horizontal") {
			oSliderH.activate();
			//this.getBox().scrollLeft = 0;
			//this.setScrollLeft(0);
			return;
		}
		if(sDirection == "vertical") {
			oSliderV.activate();
			//this.setScrollTop(0);
			//this.getBox().scrollTop = 0;
			return;
		}
	},
	
	/**
	 * 스크롤바의 동작을 비활성화한다.
	 * @param {String} sDirection "vertical" || "horizontal" || null
	 */
	_onDeactivate : function(sDirection) {
		this._detachEvent(sDirection || null);
		
		var oSliderH = this.getSliderHorizontal();
		var oSliderV = this.getSliderVertical();
		
		if(!sDirection) {
			if (oSliderH) {
				oSliderH.deactivate();
				//this.getContent().style.left = "0px";
				//this.getBox().scrollLeft = 0;
			}
			if (oSliderV) {
				oSliderV.deactivate();
				//this.getContent().style.top = "0px";
				//this.getBox().scrollTop = 0;
			}
			jindo.$Element(this._el).addClass(this.option("sClassPrefix") + "noscript");
			return;
		}
		if(sDirection == "horizontal") {
			oSliderH.deactivate();
			//this.getContent().style.left = "0px";
			//this.getBox().scrollLeft = 0;
			return;
		}
		if(sDirection == "vertical") {
			oSliderV.deactivate();
			//this.getContent().style.top = "0px";
			//this.getBox().scrollTop = 0;
			return;
		}
	},
	
	_initSliders : function() {
		
		var el = this._el;
		var sClassPrefix = this.option("sClassPrefix");

		var self = this;

		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();		
		
		if (oH.elScrollBar) {

			this._nScrollWidth = parseInt(jindo.$Element(this._elContent).width()) - parseInt(jindo.$Element(this._elBox).width());
			
			this._oSliderHorizontal = new jindo.Slider(oH.elTrack, {
				sClassPrefix: sClassPrefix,
				bVertical: false,
				nMinValue: 0,
				nMaxValue: this._nScrollWidth
			});
			this._oSliderHorizontal._oTransition = new jindo.Transition().fps(30);
			
			this._oSliderHorizontal.attach({
				beforeChange: function(oCustomEvent){
					var nTrackWidth = parseInt(jindo.$Element(this.getTrack()).width());
					var nThumbWidth = parseInt(jindo.$Element(this.getThumb(oCustomEvent.nIndex)).width());
					var nAvailWidth = nTrackWidth - nThumbWidth;
					
					if (oCustomEvent.nPos > nAvailWidth) oCustomEvent.nPos = nAvailWidth;
					if (oCustomEvent.nPos < 0) oCustomEvent.nPos = 0;

					if (oCustomEvent.bJump) {
						oCustomEvent.stop();
						this._oTransition.start(200, this.getThumb(oCustomEvent.nIndex), {
							"@left" : jindo.Effect.easeOut(oCustomEvent.nPos + 'px') 
						}).attach({
							playing : function(ePlaying) {
								var nPos = (parseInt(jindo.$Element(ePlaying.element).css("left")));
								self.setScrollLeft(self._oSliderHorizontal.values(0));
							}
						});
					}
				},
				change : function(oCustomEvent) {
					self.setScrollLeft(oCustomEvent.nValue);
				}
			});
			
		}
		
		if (oV.elScrollBar) {
			this._nScrollHeight = parseInt(jindo.$Element(this._elContent).height()) - parseInt(jindo.$Element(this._elBox).height());

			this._oSliderVertical = new jindo.Slider(oV.elTrack, {
				sClassPrefix: sClassPrefix,
				bVertical: true,
				nMinValue: 0,
				nMaxValue: this._nScrollHeight
			})
			this._oSliderVertical._oTransition = new jindo.Transition().fps(30);
			
			this._oSliderVertical.attach({
				beforeChange: function(oCustomEvent){
					var nTrackHeight = parseInt(jindo.$Element(this.getTrack()).height());
					var nThumbHeight = parseInt(jindo.$Element(this.getThumb(oCustomEvent.nIndex)).height());
					var nAvailHeight = nTrackHeight - nThumbHeight;
					
					if (oCustomEvent.nPos > nAvailHeight) oCustomEvent.nPos = nAvailHeight;
					if (oCustomEvent.nPos < 0) oCustomEvent.nPos = 0;

					if (oCustomEvent.bJump) {
						oCustomEvent.stop();
						this._oTransition.start(200, this.getThumb(oCustomEvent.nIndex), {
							"@top" : jindo.Effect.easeOut(oCustomEvent.nPos + 'px') 
						}).attach({
							playing : function(ePlaying) {
								self.setScrollTop(self._oSliderVertical.values(0));
							}
						});
					}
				},
				change : function(oCustomEvent) {
					self.setScrollTop(oCustomEvent.nValue);
				}
			});
			
		}		
		
	},

	_initRolloverArea : function(){
		var sClassPrefix = this.option("sClassPrefix");
		var sClassNameForRollover = this.option("sClassNameForRollover");
		var self = this;
		this._oRolloverArea = new jindo.RolloverArea(this._el, {
			sClassName : sClassNameForRollover, // (String) 컴포넌트가 적용될 엘리먼트의 class 명. 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트에 Rollover 컴포넌트가 적용된다.
			sClassPrefix : sClassPrefix // (String) 컴포넌트가 적용될 엘리먼트에 붙게될 class명의 prefix. (prefix+"over|down")
		}).attach({
			over: function(oCustomEvent){
				oCustomEvent.stop();
				self._onRollover("over", oCustomEvent.element);
			},
			down: function(oCustomEvent){
				oCustomEvent.stop();
				self._onMouseDown(oCustomEvent.element);
				self._onRollover("down", oCustomEvent.element);
			},
			up: function(oCustomEvent){
				oCustomEvent.stop();
				self._onMouseUp(oCustomEvent.element);
				self._onRollover("up", oCustomEvent.element);
			},
			out: function(oCustomEvent){
				oCustomEvent.stop();
				self._onRollover("out", oCustomEvent.element);
			}
		});
	},
	
	getRolloverArea : function() {
		return this._oRolloverArea;
	},

	/**
	 * content의 내용의 크기가 달라졌을때 스크롤바의 이동 값을 재설정해준다. 
	 */	
	reset : function() {
		var el = this._el;
		var sClassPrefix = this.option("sClassPrefix");

		var oSliderH = this.getSliderHorizontal();
		var oSliderV = this.getSliderVertical();
		
		if (oSliderH) {
			this._nScrollWidth = parseInt(jindo.$Element(this._elContent).width()) - parseInt(jindo.$Element(this._elBox).width());
			oSliderH.option("maxValue", this._nScrollWidth);
			this.setScrollLeft(0);
		}
		if (oSliderV) {
			this._nScrollHeight = parseInt(jindo.$Element(this._elContent).height()) - parseInt(jindo.$Element(this._elBox).height());
			oSliderV.option("maxValue", this._nScrollHeight);
			this.setScrollTop(0);			
		}
		
		this._elBox.scrollLeft = 0;
		this._elBox.scrollTop = 0;		
	},
	
	/**
	 * 가로 스크롤이 화면에 표시되었는지 여부를 가져온다.
	 * @return {Boolean} 
	 */
	hasScrollBarHorizontal : function() {
		var sClassPrefix = this.option("sClassPrefix");

		var o = this.getScrollBarHorizontal();
		if (o.elScrollBar) {
			var welScrollBar = jindo.$Element(o.elScrollBar);
			return welScrollBar.visible() || welScrollBar.hasClass(sClassPrefix + "show");	
		}
		return false;
		
	},
	
	/**
	 * 세로 스크롤이 화면에 표시되었는지 여부를 가져온다.
	 * @return {Boolean} 
	 */
	hasScrollBarVertical : function() {
		var sClassPrefix = this.option("sClassPrefix");
		
		var o = this.getScrollBarVertical();
		if (o.elScrollBar) {
			var welScrollBar = jindo.$Element(o.elScrollBar);
			return welScrollBar.visible() || welScrollBar.hasClass(sClassPrefix + "show");
		}
		return false;
	},
	
	/**
	 * 세로 스크롤바의 포지션을 설정한다.
	 * @param {Number} n
	 * @remark 0.1.2 버전부터 slider 0.3.2버전 필요
	 */
	setScrollTop : function(n) {
		if (n > this._nScrollHeight) n = this._nScrollHeight;
		if (n < 0) n = 0;
		
		jindo.$Element(this._elContent).css("top", (n * -1) +"px");
		var oSliderV = this.getSliderVertical();
		if (oSliderV) oSliderV.values(0, n, false); //커스텀이벤트를 발생하지 않으면서 이동
	},

	/**
	 * 가로 스크롤바의 포지션을 설정한다.
	 * @param {Number} n
	 * @remark 0.1.2 버전부터 slider 0.3.2버전 필요
	 */
	setScrollLeft : function(n) {
		if (n > this._nScrollWidth) n = this._nScrollWidth;
		if (n < 0) n = 0;
		
		jindo.$Element(this._elContent).css("left", (n * -1) +"px");
		var oSliderH = this.getSliderHorizontal();
		if (oSliderH) oSliderH.values(0, n, false); //커스텀이벤트를 발생하지 않으면서 이동
	},
	
	/**
	 * 세로 스크롤바의 포지션을 상대값으로 설정한다.
	 * @param {Number} n
	 */
	setScrollTopBy : function(n) {
		this.setScrollTop(this.getScrollTop()+n);		
	},

	/**
	 * 가로 스크롤바의 포지션을 상대값으로 설정한다.
	 * @param {Number} n
	 */
	setScrollLeftBy : function(n) {
		this.setScrollLeft(this.getScrollLeft()+n);		
	},

	/**
	 * 컨텐트 영역의 상/하 위치를 구한다.
	 * @param {Number} n
	 */
	getScrollTop : function(n) {
		return parseInt(jindo.$Element(this._elContent).css("top")) * -1;
	},
	
	/**
	 * 컨텐트 영역의 좌/우 위치를 구한다.
	 * @param {Object} n
	 */
	getScrollLeft : function(n) {
		return parseInt(jindo.$Element(this._elContent).css("left")) * -1;
	},
	
	_getElementType : function(wel) {
		
		var sClassPrefix = this.option("sClassPrefix");
		
		if (wel.hasClass(sClassPrefix+"track")) {
			return "track";
		}
		else if (wel.hasClass(sClassPrefix+"thumb")) {
			return "thumb";
		}
		else if (wel.hasClass(sClassPrefix+"button-up")) {
			return "button-up";
		}
		else if (wel.hasClass(sClassPrefix+"button-up")) {
			return "button-up";
		}
		else if (wel.hasClass(sClassPrefix+"button-down")) {
			return "button-down";
		}
		else if (wel.hasClass(sClassPrefix+"button-left")) {
			return "button-left";
		}
		else if (wel.hasClass(sClassPrefix+"button-right")) {
			return "button-right";
		}
		else {
			return false;
		}
	},
	
	_onWheel : function(we) {
		if (!this._bMouseEnter) {
			return;
		}
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		var nDelta = we.mouse().delta;
		var nDirection  = nDelta / Math.abs(nDelta) * -1;
		var n = Math.ceil(Math.abs(nDelta)) * nDirection * this.option("nDelta");
		
		var bH = this.hasScrollBarHorizontal();
		var bV = this.hasScrollBarVertical();
		if (!bH && !bV) {
			return;
		}
		
		if (this.hasScrollBarVertical() && this._bIsEventAttachedForVertical) {
			this.setScrollTop(this.getScrollTop()+n);
			return;
		}
		
		this.setScrollLeft(this.getScrollLeft()+n);
	},
	
	_onMouseDown : function(el) {
		
		var wel = jindo.$Element(el);
		var sClassPrefix = this.option("sClassPrefix");
		var self = this;

		var sElementType = this._getElementType(wel);
		
		switch (sElementType) {
			case "button-up" :
				var setScrollBy = function (n){
					self.setScrollTopBy(parseInt(n * -1));
				}
			break;
			case "button-down" :
				var setScrollBy = function (n){
					self.setScrollTopBy(n);
				}
			break;
			case "button-left" :
				var setScrollBy = function (n){
					self.setScrollLeftBy(parseInt(n * -1));
				}
			break;
			case "button-right" :
				var setScrollBy = function (n){
					self.setScrollLeftBy(n);
				}
			break;
			default :
			return;
		}
		
		this._oTimer.start(function(){
			setScrollBy(16);
			return true;
		}, 100);
		
	},
	
	_onMouseUp : function(el) {
		this._oTimer.abort();
	},
	
	_onMouseEnter : function(we) {
		this._bMouseEnter = true;
	},
	
	_onMouseLeave : function(we) {
		this._bMouseEnter = false;
	},
	
	_onRollover : function(sType, el) {
		var wel = jindo.$Element(el);
		var sClassPrefix = this.option("sClassPrefix");
		var self = this;
		var sElementType = this._getElementType(wel);
		
		switch (sType) {
			case "over" :
				wel.addClass(sClassPrefix + sElementType + "-over");		
			break;
			case "down" :
				wel.addClass(sClassPrefix + sElementType + "-hold");
			break;
			case "up" :
				wel.removeClass(sClassPrefix + sElementType + "-hold");
			break;
			case "out" :
				wel.removeClass(sClassPrefix + sElementType + "-over");
			break;
		}
		
	}
	
}).extend(jindo.UIComponent);﻿/**
 * @fileOverview HTMLElement를 Drag할 수 있게 해주는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */

jindo.DragArea = jindo.$Class({
	/** @lends jindo.DragArea */
	
	_bIsActivating : false,
	
	/**
	 * DragArea 컴포넌트를 생성한다.
	 * DragArea 컴포넌트는 상위 기준 엘리먼트의 자식들 중 특정 클래스명을 가진 모든 엘리먼트를 Drag 가능하게 하는 기능을 한다.
	 * @constructs
	 * @extends jindo.UIComponent
	 * @param {HTMLElement} el Drag될 엘리먼트들의 상위 기준 엘리먼트. 컴포넌트가 적용되는 영역(Area)이 된다.
	 * @param {Object} oOptions 옵션 객체
	 * @example
area = new jindo.DragArea(document, {
	"sClassName" : 'dragable', // (String) 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트는 Drag 가능하게 된다. 
	"bFlowOut" : true, // (Boolean) 드래그될 엘리먼트가 상위 기준 엘리먼트의 영역을 벗어날 수 있는지의 여부
	"bSetCapture" : false, //ie에서 setCapture 사용여부
	"nThreshold" : 0 // (Number) 드래그가 시작되기 위한 최소 역치값(px) 
}).attach({
	handleDown : function(oCustomEvent) {
		//드래그될 handle 에 마우스가 클릭되었을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 될 엘리먼트 (핸들을 드래그하여 레이어 전체를 드래그되도록 하고 싶으면 이 값을 설정한다. 아래 예제코드 참고)
		//	weEvent : ($Event) mousedown시 발생되는 jindo.$Event 객체
		//};
	},
	dragStart : function(oCustomEvent) {
		//드래그가 시작될 때 발생 (마우스 클릭 후 첫 움직일 때 한 번)
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 될 엘리먼트 (핸들을 드래그하여 레이어 전체를 드래그되도록 하고 싶으면 이 값을 설정한다. 아래 예제코드 참고)
		//	diff : (Object) handledown된 좌표와 dragstart된 좌표의 차이 diff.pageX, diff.pageY
		//	weEvent : ($Event) 마우스 이동 중 발생되는 jindo.$Event 객체
		//};
		//oCustomEvent.stop(); 이 수행되면 뒤따르는 beforedrag 이벤트가 발생하지 않고 중단된다.
	},
	beforeDrag : function(oCustomEvent) {
		//드래그가 시작되고 엘리먼트가 이동되기 직전에 발생 (이동중 beforedrag, drag 순으로 연속적으로 발생)
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 될 엘리먼트
		//	weEvent : ($Event) 마우스 이동 중 발생되는 jindo.$Event 객체
		//	nX : (Number) 드래그 될 x좌표. 이 좌표로 엘리먼트가 이동 된다.
		//	nY : (Number) 드래그 될 y좌표. 이 좌표로 엘리먼트가 이동 된다.
		//	gapX : (Number) 드래그가 시작된 x좌표와의 차이
		//	gapY : (Number) 드래그가 시작된 y좌표와의 차이
		//};
		//oCustomEvent.stop(); 이 수행되면 뒤따르는 drag 이벤트가 발생하지 않고 중단된다.
		//oCustomEvent.nX = null; // 가로로는 안 움직이게
		//oCustomEvent.nX = Math.round(oCustomEvent.nX / 20) * 20;
		//oCustomEvent.nY = Math.round(oCustomEvent.nY / 20) * 20;
		//if (oCustomEvent.nX < 0) oCustomEvent.nX = 0;
		//if (oCustomEvent.nY < 0) oCustomEvent.nY = 0;
	},
	drag : function(oCustomEvent) {
		//드래그 엘리먼트가 이동하는 중에 발생 (이동중 beforedrag, drag 순으로 연속적으로 발생)
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 될 엘리먼트
		//	weEvent : ($Event) 마우스 이동 중 발생되는 jindo.$Event 객체
		//	nX : (Number) 드래그 된 x좌표. 이 좌표로 엘리먼트가 이동 된다.
		//	nY : (Number) 드래그 된 y좌표. 이 좌표로 엘리먼트가 이동 된다.
		//	nGapX : (Number) 드래그가 시작된 x좌표와의 차이
		//	nGapY : (Number) 드래그가 시작된 y좌표와의 차이
		//};
		//oCustomEvent.stop(); 이 수행되면 뒤따르는 dragend 이벤트가 발생하지 않고 중단된다.
	},
	dragEnd : function(oCustomEvent) {
		//드래그(엘리먼트 이동)가 완료된 후에 발생 (mouseup시 1회 발생. 뒤이어 handleup 발생)
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 된 엘리먼트
		//	nX : (Number) 드래그 된 x좌표.
		//	nY : (Number) 드래그 된 y좌표.
		//}
		//oCustomEvent.stop(); 이 수행되면 뒤따르는 handleup 이벤트가 발생하지 않고 중단된다.
	},
	handleUp : function(oCustomEvent) {
		//드래그된 handle에 마우스 클릭이 해제됬을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 된 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 된 엘리먼트
		//};
	}
});
	 */
	$init : function(el, htOption) {
		
		this.option({
			sClassName : 'dragable',
			bFlowOut : true,
			bSetCapture : false, //ie에서 bSetCapture 사용여부
			nThreshold : 0
		});
		
		this.option(htOption || {});
		
		this._el = el;
		
		this.bIsIE = jindo.$Agent().navigator().ie;
		
		this._htDragInfo = {
			"bPrepare" : false //mousedown이 되었을때 true, 이동중엔 false
		};
		this._bIsDragging = false;

		this._wfOnMouseDown = jindo.$Fn(this._onMouseDown, this);
		this._wfOnMouseMove = jindo.$Fn(this._onMouseMove, this);
		this._wfOnMouseUp = jindo.$Fn(this._onMouseUp, this);
		
		this._wfOnDragStart = jindo.$Fn(this._onDragStart, this);
		this._wfOnSelectStart = jindo.$Fn(this._onSelectStart, this);
		
		this.activate();
		
	},
	
	_findDraggableElement : function(el) {
		
		if (jindo.$$.test(el, "input[type=text]") || el.tagName == "TEXTAREA"){
			return null;
		} 
		
		var self = this;
		var sClass = '.' + this.option('sClassName');
		
		var isParentOf = function(el) {
			if (el == null) {
				return false;
			}
			if (!self._el.tagName || self._el === el) {
				return true;
			} 
			return jindo.$Element(self._el).isParentOf(el);
		}
		
		var el = jindo.$$.test(el, sClass) ? el : jindo.$$.getSingle('! ' + sClass, el);
		if (!isParentOf(el)) {
			el = null;
		}
		return el;
	},
	
	/**
	 * 레이어가 현재 드래그 되고 있는지 여부를 가져온다
	 * @return {Boolean} 레이어가 현재 드래그 되고 있는지 여부
	 */
	isDragging : function() {
		return this._bIsDragging && !this._htDragInfo.bPrepare;
	},
	
	/**
	 * 드래그를 강제 종료시킨다.
	 */
	stopDragging : function() {
		
		this._wfOnMouseMove.detach(document, 'mousemove');
		this._wfOnMouseUp.detach(document, 'mouseup');
		this._wfOnMouseUp.detach(document, 'contextmenu');

		var htInfo = this._htDragInfo;
		
		if (!htInfo.bPrepare) {
			var elDrag = htInfo.element;
			var welDrag = jindo.$Element(elDrag);
			
			if (!this.fireEvent('dragEnd', {
				"elArea" : this._el,
				"elHandle" : htInfo.elHandle,
				"element" : htInfo.element,
				"nX" : parseInt(welDrag.css('left')) || 0,
				"nY" : parseInt(welDrag.css('top')) || 0
			})) return;
		}
		
		if(this.bIsIE && this._elSetCapture) {
			this._elSetCapture.releaseCapture();
			this._elSetCapture = null;
		}

		this._bIsDragging = false;
		this._htDragInfo.bPrepare = false;	
			
		this.fireEvent('handleUp', { "elHandle" : htInfo.elHandle,"element" : htInfo.element });
	},
	/*
	getDragHandle : function() {
		return this._htDragInfo && this._htDragInfo.bPrepare == false && this._htDragInfo.elHandle;
	},
	
	getDragElement : function() {
		return this._htDragInfo && this._htDragInfo.bPrepare == false && this._htDragInfo.element;
	},
	*/
	
	/**
	 * DragArea 동작을 위한 mousedown, dragstart, selectstart 이벤트를 attach 한다. 
	 */
	_onActivate : function() {
		this._wfOnMouseDown.attach(this._el, 'mousedown');
		if(this.bIsIE) {
			this._wfOnDragStart.attach(this._el, 'dragstart'); // for IE
			this._wfOnSelectStart.attach(this._el, 'selectstart'); // for IE	
		}
	},
	
	/**
	 * DragArea 동작을 위한 mousedown, dragstart, selectstart 이벤트를 detach 한다. 
	 */
	_onDeactivate : function() {
		this._wfOnMouseDown.detach(this._el, 'mousedown');
		if (this.bIsIE) {
			this._wfOnDragStart.detach(this._el, 'dragstart'); // for IE
			this._wfOnSelectStart.detach(this._el, 'selectstart'); // for IE
		}
	},
	
	/**
	 * 이벤트를 attach한다.
	 * @deprecated activate
	 */
	attachEvent : function() {
		this.activate();
	},
	
	/**
	 * 이벤트를 detach한다.
	 * @deprecated deactivate
	 */
	detachEvent : function() {
		this.deactivate();
	},
	
	/**
	 * 이벤트의 attach 여부를 가져온다.
	 * @deprecated isActivating
	 */
	isEventAttached : function() {
		return this.isActivating();
	},
	
	_onMouseDown : function(we) {
		
		if(this._bIsDragging || this._htDragInfo.bPrepare) return;
		
		/* IE에서 네이버 툴바의 마우스제스처 기능 사용시 우클릭하면 e.mouse().right가 false로 들어오므로 left값으로만 처리하도록 수정 */
		if (!we.mouse().left) {
			return;
		}
		
		// 드래그 할 객체 찾기
		var el = this._findDraggableElement(we.element);
		if (!el) return;
		
		var oPos = we.pos();
		this._htDragInfo = {
			"bPrepare" : true,
			"nButton" : we._event.button,
			"elHandle" : el,
			"element" : el,
			"nPageX" : oPos.pageX,
			"nPageY" : oPos.pageY
		};
		
		this.fireEvent('handleDown', { "elHandle" : el, "element" : el, "weEvent" : we });

		this._wfOnMouseMove.attach(document, 'mousemove');
		this._wfOnMouseUp.attach(document, 'mouseup')
		this._wfOnMouseUp.attach(document, 'contextmenu');

		we.stop($Event.CANCEL_DEFAULT);
	},
	
	_onMouseMove : function(we) {
		
		this._bIsDragging = true;
		/*
		var bIsIE = jindo.$Agent().navigator().ie;
		
		if (bIsIE && this._htDragInfo.nButton != we._event.button) {
			this._wfOnMouseUp.bind(); //수정.
			return;
		}*/

		var htInfo = this._htDragInfo;
		var oPos = we.pos();

		if (htInfo.bPrepare) {
			
			var nThreshold = this.option('nThreshold');
			var oDiff = { "nPageX" : 0, "nPageY" : 0 };
			
			if (nThreshold) {
				oDiff.nPageX = oPos.pageX - htInfo.nPageX;
				oDiff.nPageY = oPos.pageY - htInfo.nPageY;
				var nDistance = Math.sqrt(oDiff.nPageX * oDiff.nPageX + oDiff.nPageY * oDiff.nPageY);
				if (nThreshold > nDistance){
					return;
				} 
			}

			var el = this._findDraggableElement(we.element);
			
			if(this.bIsIE && this.option("bSetCapture")) {
				this._elSetCapture = (this._el == document) ? document.body : el;
				this._elSetCapture.setCapture(true);
			}
			 
			var htParam = {
				"elArea" : this._el,
				"elHandle" : htInfo.elHandle,
				"element" : htInfo.element,
				"diff" : oDiff, //nThreshold가 있는경우 diff필요
				"weEvent" : we	  //$Event
			};
			
			if (!this.fireEvent('dragStart', htParam)) {
				this._bIsDragging = false;
				return;
			}

			var welDrag = jindo.$Element(htParam.element);
			
			htInfo.bPrepare = false;
			htInfo.elHandle = htParam.elHandle;
			htInfo.element = htParam.element;
			htInfo.nX = parseInt(welDrag.css('left')) || 0;
			htInfo.nY = parseInt(welDrag.css('top')) || 0;
			
		}
		
		var htGap = {
			"nX" : oPos.pageX - htInfo.nPageX,
			"nY" : oPos.pageY - htInfo.nPageY
		};
		
		var htParam = {
			"elArea" : this._el,
			"elHandle" : htInfo.elHandle,
			"element" : htInfo.element,
			"weEvent" : we, 		 //$Event
			"nX" : htInfo.nX + htGap.nX,
			"nY" : htInfo.nY + htGap.nY,
			"nGapX" : htGap.nX,
			"nGapY" : htGap.nY
		};
		
		if (!this.fireEvent('beforeDrag', htParam)) {
			return;
		}

		if (this.option('bFlowOut') == false) {
			var elDrag = htParam.element;
			var elParent = jindo.$$.getSingle('! [@position!=static]', htParam.element);
			
			var aSize = [ elDrag.offsetWidth, elDrag.offsetHeight ];
			if (elParent) {
				var nWidth = ( elParent.scrollWidth > elParent.clientWidth ) ? elParent.scrollWidth : elParent.clientWidth;
				var nHeight = ( elParent.scrollHeight > elParent.clientHeight ) ? elParent.scrollHeight : elParent.clientHeight;
				var htRect = { 
					nWidth : nWidth, 
					nHeight : nHeight 
				};	
			} else {
				var htScrollSize = jindo.$Document().scrollSize();
				var htClientSize = jindo.$Document().clientSize();
				var htDocumentSize = htClientSize;
				if (htScrollSize.width > htClientSize.width || htScrollSize.height > htClientSize.height) {
					htDocumentSize = htScrollSize;
				}
				var htRect = {
					nWidth : htDocumentSize.width, 
					nHeight : htDocumentSize.height
				}
			}

			if (htParam.nX !== null) {
				if (htParam.nX < 0) {
					htParam.nX = 0;
				} else if (htParam.nX + aSize[0] > htRect.nWidth) {
					htParam.nX = htRect.nWidth - aSize[0];
				} 
			}
			
			if (htParam.nY !== null) {
				if (htParam.nY < 0) {
					htParam.nY = 0;
				} else if (htParam.nY + aSize[1] > htRect.nHeight) {
					htParam.nY = htRect.nHeight - aSize[1];
				} 
			}
		}

		var elDrag = htInfo.element;
		
		if (htParam.nX !== null) {
			elDrag.style.left = htParam.nX + 'px';
		}
		if (htParam.nY !== null) {
			elDrag.style.top = htParam.nY + 'px';
		}
		if (!this.fireEvent('drag', htParam)){
			return;
		} 

	},
	
	_onMouseUp : function(we) {
		//ie에서는 centextmenu 이벤트가 발생하기전에 mouseup이벤트가 먼저 발생하므로 무시
		if (we.type == "mouseup" && we.mouse().right) {
			return;
		}
		
		if (we.type == "contextmenu") {
			this._htDragInfo.bPrepare = false;
			we.stop();
		}
		
		this.stopDragging();
	},
	
	_onDragStart : function(we) { 
		we.stop(jindo.$Event.CANCEL_DEFAULT); 
	},
	
	_onSelectStart : function(we) {
		if (this._bIsDragging || this._findDraggableElement(we.element)) {
			we.stop(jindo.$Event.CANCEL_DEFAULT);	
		}
	}
	
}).extend(jindo.UIComponent);﻿/**
 * @fileOverview 수치의 중간값을 쉽게 얻을 수 있게 하는 static 컴퍼넌트
 * @author hooriza, modified by senxation
 * @version 0.3
 */
 
/**
 * 새로운 이펙트 생성 함수를 생성한다.
 * @namespace
 * @param {Function} fpFunc	0~1 사이의 숫자를 인자로 받아 정해진 공식에 따라 0~1 사이의 값을 리턴하는 함수
 * @return {Function} 생성된 이펙트 생성 함수
 * @see <a href="http://ajaxui.nhndesign.com/svnview/yorky/hooriza/components/Effect/trunk/Spec/spec.html" target="_blank">JsSpec Page</a>
 */
jindo.Effect = function(fpFunc) {
	
	if (this instanceof arguments.callee)
		throw new Error("You can't create a instance of this");
	
	var regnum = /^(\-?[0-9\.]+)(%|px|pt|em)?$/;
	var regrgb = /^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i;
	var reghex = /^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i;
	
	var reg3to6 = /^#([0-9A-F])([0-9A-F])([0-9A-F])$/i;
	
	var getValue = function(v) {

		var unit;
		
		if (regnum.test(v)) v = parseFloat(v), unit = RegExp.$2;
		else if (regrgb.test(v)) v = [ parseInt(RegExp.$1), parseInt(RegExp.$2), parseInt(RegExp.$3) ], unit = 'color';
		else if (reghex.test(v = v.replace(reg3to6, '#$1$1$2$2$3$3'))) v = [ parseInt(RegExp.$1, 16), parseInt(RegExp.$2, 16), parseInt(RegExp.$3, 16) ], unit = 'color';
		
		return { value : v, unit : unit };

	};
	
	return function(fixs, fixd) {
		
		var unit;
		
		if (arguments.length > 1) fixs = getValue(fixs), fixd = getValue(fixd), unit = fixd.unit;
		else fixd = getValue(fixs), fixs = null, unit = fixd.unit;
		
		// 두개의 단위가 다르면
		if (fixs && fixd && fixs.unit != fixd.unit) throw new Error('unit error');
		
		fixs = fixs && fixs.value;
		fixd = fixd && fixd.value;
		
		var cacheValue, cacheResult;

		var fp = function(p) {
			
			var s = fixs;
			var d = fixd;
			
			var getResult = function(s, d) { return (d - s) * fpFunc(p) + s + unit; } ;
			
			if (unit == 'color') {
				
				var r = parseInt(getResult(s[0], d[0])) << 16;
				r |= parseInt(getResult(s[1], d[1])) << 8;
				r |= parseInt(getResult(s[2], d[2]));
				
				r = r.toString(16).toUpperCase();
				for (var i = 0; 6 - r.length; i++) r = '0' + r;
					
				return  '#' + r;

			}
			
			return getResult(s, d);
		};
		
		if (fixs === null) {

			fp.setStart = function(s) {
				
				if (isNaN(parseInt(s))) s = 0 + unit;
				s = getValue(s);
				
				if (s.unit != unit) throw new Error('unit eror');
				fixs = s.value;

			};
			
		}
		
		return fp;
		
	};
	
};



/**
 * 일정한 속도로 변화하는 형태의 이펙트 함수를 생성한다.
 * @param {String | Number} nStart 시작 수치값
 * @param {String | Number} nEnd 종료 수치값
 * @remark 시작 수치값과 종료 수치값으로는 다음과 같이 여러가지 단위와 표현을 사용할 수 있다
 * <dl>
 *	<dt>그냥 숫자</dt>
 *	<dd>예) 100</dd>
 *	<dt>px 단위</dt>
 *	<dd>예) '200px'</dd>
 *	<dt>% 단위</dt>
 *	<dd>예) '50%'</dd>
 *	<dt>em 단위</dt>
 *	<dd>예) '2em'</dd>
 *	<dt>색상 단위</dt>
 *	<dd>
 *		<dl>
 *			<dt>rgb 표현</dt>
 *			<dd>예) 'rgb(255, 127, 0)'</dd>
 *			<dt>#RRGGBB 표현</dt>
 *			<dd>예) '#FF7F00'</dd>
 *			<dt>#RGB 표현</dt>
 *			<dd>예) '#FA0'</dd>
 *		</dl>
 *	</dd>
 * </dl>
 * @remark 시작 수치값과 종료 수치값의 단위가 다르면 에러를 발생시킨다.
 * @return {EffectFunction} 생성된 이펙트 함수
 * @example
// 100 과 200 사이를 일정하게 증가하는 중간값을 알려주는 함수를 리턴
var f = jindo.Effect.linear(100, 200);

// 리턴된 함수를 사용하여 중간값을 얻음
console.log( f(0) ); // 결과 100
console.log( f(0.5) ); // 결과 150
console.log( f(1) ); // 결과 200
 */
jindo.Effect.linear = jindo.Effect(function(s) {
	return s;
});

/**
 * 점점 빨라지는 식으로 변화하는 형태의 이펙트 함수를 생성한다.
 * @param {String | Number} nStart 시작 수치값
 * @param {String | Number} nEnd 종료 수치값
 * @return {Function} 생성된 이펙트 함수
 */
jindo.Effect.easeIn = jindo.Effect(function(s) {
	y = Math.sqrt(1 - (s * s));
	return (1 - y);
});

/**
 * 점점 느려지는 식으로 변화하는 형태의 이펙트 함수를 생성한다.
 * @param {String | Number} nStart 시작 수치값
 * @param {String | Number} nEnd 종료 수치값
 * @return {Function} 생성된 이펙트 함수
 */
jindo.Effect.easeOut = jindo.Effect(function(s) {
	y = Math.sqrt((2 - s) * s);
	return y;
});

/**
 * 조금 넘어가는 식으로 변화하는 형태의 이펙트 함수를 생성한다.
 * @param {String | Number} nStart 시작 수치값
 * @param {String | Number} nEnd 종료 수치값
 * @return {Function} 생성된 이펙트 함수
 */
jindo.Effect.overphase = jindo.Effect(function(s) {
	s /= 0.69643223;
	y = Math.sqrt((2 - s) * s) + 0.1;
	return y.toFixed(7);
});

/**
 * 튀기는 효과로 변화하는 형태의 이펙트 함수를 생성한다.
 * @remark Script.aculo.us 의 코드 사용
 * @param {String | Number} nStart 시작 수치값
 * @param {String | Number} nEnd 종료 수치값
 * @return {Function} 생성된 이펙트 함수
 */
jindo.Effect.bounce = jindo.Effect(function(s) {
	if (s < (1 / 2.75)) return (7.5625 * s * s);
	else if (s < (2 / 2.75)) return (7.5625 * (s -= (1.5 / 2.75)) * s + .75);
	else if (s < (2.5 / 2.75)) return (7.5625 * (s -= (2.25 / 2.75)) * s + .9375);
	else return (7.5625 * (s -= (2.625 / 2.75)) * s + .984375);
});

// jindo.$Element.prototype.css 패치
(function() {
	var b = jindo.$Element.prototype.css;
	jindo.$Element.prototype.css = function(k, v) {
		if (k == 'opacity') return typeof v != 'undefined' ? this.opacity(parseFloat(v)) : this.opacity();
		return v != 'undefined' ? b.call(this, k, v) : b.call(this, k);
	};
})();
﻿/**
 * @fileOverview 타이머의 사용을 편리하게 해주는 컴포넌트. 함수를 지정한 시간이 지난 후에 실행한다.
 * @author hooriza, modified by senxation
 * @version 0.4
 */

jindo.Timer = jindo.$Class({
	/** @lends jindo.Timer */
	_nTimer : null,
	
	_nLatest : null,
	_nRemained : 0,
	
	_nDelay : null,
	_fCallback : null,

	/**
	 * Timer 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.Component
	 * @example
var oTimer = new jindo.Timer().attach({
	wait : function(oCustomEvent) {
	},
	abort : function(oCustomEvent) {
	},
	run : function(oCustomEvent) {
	},
	end : function(oCustomEvent) {
	}
});
	 * @example
이벤트 목록
wait : 함수가 실행될 때까지 지정한 시간만큼 기다리기 전에 발생한다
abort : 인스턴스 외부에서 abort() 함수를 호출해 강제로 타이머를 종료시켰을때 발생한다
run : 함수가 실행되기 직전에 발생한다
end : 함수가 false 를 리턴해서 내부적으로 종료시켰을 때 발생한다
 	 */
	$init : function() { 
	},
	
	/**
	 * 함수를 지정한 시간이 지난 후에 실행한다. 실행 함수가 true 를 리턴하면 setInterval 을 사용한 것처럼 계속 반복해서 수행된다.
	 * @param {Function} fCallback	지정된 지연 시간 이후에 실행 될 함수
	 * @param {Number} nDelay	msec 단위의 지연 시간
	 * @return {Boolean} 항상 true
	 * @example
var o = new jindo.Timer();
o.start(function() {
	// ...
	return true;
}, 100);
	 */
 	start : function(fCallback, nDelay) {
		
		this.abort();
		this.fireEvent('wait');
		
		this._nLatest = new Date().getTime();
		this._nRemained = 0;
		this._nDelay = nDelay;
		this._fCallback = fCallback;
		
		this.resume();
		
		return true;
	},
	
	_clearTimer : function() {
		
		var bFlag = false;
		
		if (this._nTimer) {
			clearInterval(this._nTimer);
			bFlag = true;
		}
		
		this._nTimer = null;
		return bFlag;
	},
	
	/**
	 * 현재 대기상태에 있는 타이머를 중단시킨다.
	 * @return {Boolean} 이미 멈춰있었으면 false, 그렇지 않으면 true
	 */
	abort : function() {
		
		var bRet;

		if (bRet = this._clearTimer()) {
			this.fireEvent('abort');
		}
			
		return bRet;
		
	},
	
	/**
	 * 현재 동작하고 있는 타이머를 일시정지 시킨다.
	 * @return {Boolean} 이미 멈춰있었으면 false, 그렇지 않으면 true
	 */
	pause : function() {
		
		var nPassed = new Date().getTime() - this._nLatest;
		
		this._nRemained = this._nDelay - nPassed;
		if (this._nRemained < 0) {
			this._nRemained = 0;
		}
		
		return this._clearTimer();
		
	},
	
	/**
	 * 일시정지 상태인 타이머를 재개시킨다.
	 * @return {Boolean} 재개에 성공했으면 true, 그렇지 않으면 false
	 */
	resume : function() {
		
		var self = this;
		
		if (!this._fCallback) {
			return false;
		}
		
		var fGo = function(nDelay, bRecursive) {
			
			self._clearTimer();
			self._nTimer = setInterval(function() {
												 
				if (!self._nTimer) {
					return; //self._nTimer가 null일때도 간헐적으로 수행되는 버그가 있어 추가
				}  
				self.fireEvent('run');
				
				var r = self._fCallback();
				self._nLatest = new Date().getTime();
				
				if (!r) {
					clearInterval(self._nTimer);
					self._nTimer = null;
					
					self.fireEvent('end');
					return;
				}
				
				self.fireEvent('wait');
				if (bRecursive) {
					fGo(self._nDelay, false);
				}
											   
			}, nDelay);
			
		};
		
		if (this._nRemained) {
			fGo(this._nRemained, true);
			this._nRemained = 0;
		} else {
			fGo(this._nDelay, false);
		}
		
		return true;
			
	}
}).extend(jindo.Component);
/**
 * @fileOverview Text Input에서 Caret에 대한 컨트롤을 위한 컴포넌트
 * @version 0.4
 * @author hooriza, modified by senxation
 */
jindo.TextRange = jindo.$Class({
	/** @lends jindo.TextRange */
	/**
	 * TextRange 컴포넌트를 생성한다.
	 * TextRange 컴포넌트는 Text Input에서 Caret에 대한 control을 가능하게 한다.
	 * @constructs
	 * @extends jindo.UIComponent
	 * @see jindo.Formatter
	 * @see jindo.NumberFormatter
	 * @param {HTMLElement} el 대상 TextInput 엘리먼트
	 * @param {HashTable} htOption 옵션 해시테이블
	 * @example
var oTextRange = new jindo.TextRange(jindo.$("foo"), {
	bActivateOnload : true //인스턴스화이후 activate수행 여부
});
	 */	
	$init : function(el, htOption) {
		this.option({
			bActivateOnload : true
		})
		this.option(htOption || {});
		this._el = jindo.$(el);
		this._bFocused = false;
		
		this._wfFocus = jindo.$Fn(function() { this._bFocused = true; }, this);
		this._wfBlur = jindo.$Fn(function() { this._bFocused = false; }, this);
		if (this.option("bActivateOnload")) {
			this.activate();
		}
	},
	
	_onActivate : function() {
		this._wfFocus.attach(this._el, 'focus');
		this._wfFocus.attach(this._el, 'keydown');
		this._wfBlur.attach(this._el, 'blur');
	},
	
	_onDeactivate : function() {
		this._wfFocus.detach(this._el, 'focus');
		this._wfFocus.detach(this._el, 'keydown');
		this._wfBlur.detach(this._el, 'blur');
	},
	
	/**
	 * TextInput에 focus 되어있는지 여부를 가져온다.
	 * @return {Boolean} TextInput에 focus 되어있는지 여부
	 */
	hasFocus : function() {
		return this._bFocused;
	},
	
	/**
	 * Caret이 선택된 영역을 가져온다.
	 * @return {Array} Caret의 시작위치와 끝위치
	 */
	getSelection : function() {
		var el = this._el;

		if (!this._bFocused) {
			this._el.focus();
		}
			
		var el = this._el;
		var aSelection = [ -1, -1 ];
		
		if (isNaN(this._el.selectionStart)) {
			var oRange = document.selection.createRange().duplicate();
			var nLength = el.value.length;
	
			aSelection[0] = -oRange.moveStart('character', -nLength);
			aSelection[1] = nLength - oRange.moveEnd('character', nLength);
		} else {
			aSelection[0] = el.selectionStart;
			aSelection[1] = el.selectionEnd;
		}
		
		this.setSelection(aSelection[0], aSelection[1]);
		return aSelection;
	},
	
	/**
	 * Caret의 선택영역을 설정한다.
	 * @param {Number} nStart
	 * @param {Number} end
	 */
	setSelection : function(nStart, nEnd) {
		var el = this._el;
		if (typeof nEnd == 'undefined') {
			nEnd = nStart;
		}
		
		if (el.setSelectionRange) {
			el.setSelectionRange(nStart, nEnd);
		} else if (el.createTextRange) {
			var oRange = el.createTextRange();
			oRange.collapse(true);
			oRange.moveStart("character", nStart);
			oRange.moveEnd("character", nEnd - nStart);
			oRange.select();
		}
	},
	
	/**
	 * 선택된 selection의 문자열을 가져옴
	 * @return {String} 선택된 selection의 문자열
	 */
	copy : function() {
		if (!this._bFocused) {
			this._el.focus();
		}
		var aSelection = this.getSelection();
		return this._el.value.substring(aSelection[0], aSelection[1]);
	},

	/**
	 * 선택된 selection에 문자열을 붙여넣음
	 * @param {String} sStr 붙여넣을 문자열
	 */
	paste : function(sStr) {
		if (!this._bFocused) {
			this._el.focus();
		}
		
		var el = this._el;
		var aSelection = this.getSelection();
		var sValue = el.value;
		var sPre = sValue.substr(0, aSelection[0]);
		var sPost = sValue.substr(aSelection[1]);
	
		sValue = sPre + sStr + sPost;
		el.value = sValue;
	
		this.setSelection(aSelection[0] + sStr.length);
	},
	
	/**
	 * 선택된 selection의 문자열을 잘라냄
	 * @return {String} 선택된 selection의 문자열
	 */
	cut : function() {
		var s = this.copy();
		this.paste('');
	
		return s;
	}
}).extend(jindo.UIComponent);
/**
 * @fileOverview input[type=text] 혹은 textarea와 같은 입력 컨트롤에 입력여부를 감지하는 컴포넌트
 * @author senxation
 * @version 0.5
 */
jindo.WatchInput = jindo.$Class({
	/**
	 * @lends jindo.WatchInput
	 */
	
	_bIsActivating : false, //컴포넌트의 활성화 여부
	_bTimerRunning : false,
	_bEventAttached : false,
	_sPrevValue : "",
	
	/**
	 * WatchInput 컴포넌트를 생성한다.
	 * @constructs
	 * @param {String | HTMLElement} sInputId 적용할 입력 컨트롤의 id혹은 엘리먼트 자체
	 * @param {Object} htOption 옵션 객체
	 * @extends jindo.UIComponent
	 * @requires jindo.Timer
	 * @example
var oWatchInput = new jindo.WatchInput("input", {
	nInterval : 100, //Check할 간격 (Except IE)
	bUseTimerOnIE : false, //IE에서 키보드 이벤트를 사용해서 감지할 경우 false로 지정. 다른 브라우저처럼 타이머로 체크하고자하는 경우 true로 설정
	sKeyEvent : "keydown", //attach할 키보드 이벤트 (IE Only)
	bActivateOnload : true
}).attach({
	start : function(e) {
		//감지를 시작했을 때 발생
	},
	stop : function(e) {
		//감지를 중단했을 때 발생
	},
	timerStart : function(e) {
		//IE를 제외한 브라우저에서는 한글입력시 KeyEvent이벤트가 발생하지 않으므로 timer를 이용해 감지한다
		//timer가 시작됬을 때 발생
		//except ie
	},
	change : function(e) {
		//입력컨트롤 값이 변경 되었을 경우 발생
		//전달되는 이벤트 객체 e = {
		//	text : (String) 변화된 input의 값
		//}
	},
	timerStop : function(e) {
		//IE를 제외한 브라우저에서는 한글입력시 KeyEvent이벤트가 발생하지 않으므로 timer를 이용해 감지한다
		//timer가 중지됬을 때 발생
	}
});
	 */
	$init : function(sInputId, htOption) {
		
		var htDefaultOption = {
			nInterval : 100, //Check할 간격 (Except IE)
			bUseTimerOnIE : false, //IE에서 키보드 이벤트를 사용해서 감지할 경우 false로 지정. 다른 브라우저처럼 타이머로 체크하고자하는 경우 true로 설정
			sKeyEvent : "keyup", //attach할 키보드 이벤트 (IE Only)
			bActivateOnload : true
		}
		
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		this._elInput = jindo.$(sInputId);
		this._oTimer = new jindo.Timer();
		
		this._bIE = jindo.$Agent().navigator().ie;
		if (this.option("bUseTimerOnIE")) {
			this._bIE = false;
		}
		
		this._wfFocus = jindo.$Fn(this._onFocus, this);
		this._wfBlur = jindo.$Fn(this._onBlur, this);
		this._wfKeyEvent = jindo.$Fn(this._onKeyEvent, this);
		
		if (this.option("bActivateOnload")) {
			this.activate(true);
		}
	},
	
	/**
	 * WatchInput이 적용된 Input 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getInput : function() {
		return this._elInput;
	},
	
	/**
	 * WatchInput이 적용된 Input 엘리먼트의 value를 설정한다.
	 * @remark WatchInput이 적용된 Input 엘리먼트의 값을 키입력 외에 임의로 변경할 때에는 이 메소드를 사용하는 것을 권장한다.
	 * @see setCompareValue
	 * @example
//input값을 변경할 경우
oWatchInput.setInputValue("테스트");
//또는 아래와 같이 사용한다.
oWatchInput.getInput().value = "테스트";
oWatchInput.setCompareValue("테스트"); //input의 value와 같은 값으로 설정한다.
	 */
	setInputValue : function(s) {
		this.getInput().value = s;
		this.setCompareValue(s);
	},	
	
	/**
	 * 현재의 input value와 비교될 이전 Input의 value를 구한다.
	 * @return {String} 
	 */
	getCompareValue : function() {
		return this._sPrevValue;
	},
	
	/**
	 * 현재의 input value와 비교할 값을 설정한다.
	 * @remark IE의 keydown이 발생하지 않거나 FF의 timer가 동작하지 않는 상황에서 input의 value를 변경하면 예기치 않은 change이벤트가 발생하기 때문에 변경된 값과 동일하게 비교할 값을 설정하여 예외처리한다.
	 * @param {String} s
	 * @example
oWatchInput.getInput().value = "테스트";
oWatchInput.setCompareValue("테스트"); //input의 value와 같은 값으로 설정한다. 
	 */
	setCompareValue : function(s) {
		this._sPrevValue = s;
	},
	
	/**
	 * 감지를 시작한다.
	 * 감지의 중단은 인터벌 시간 이후에 일어난다.
	 * IE에서는 KeyEvent 이벤트를 감지한다.
	 * 그외의 브라우저에서는 input에 focus되면 Timer를 사용해 주기적인 비교가 시작되고 blur시 중단된다.
	 * @deprecated activate
	 */
	start : function(bWithoutFocus) {
		this.activate(bWithoutFocus || false);
	},
	
	/**
	 * 감지를 중단한다.
	 * @deprecated deactivate
	 */
	stop : function() {
		this.deactivate();
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 * @param {Boolean} bWithoutFocus Input의 포커스 여부와 관계없이 타이머를 바로 시작 (except IE)
	 * @return {this}
	 */
	_onActivate : function(bWithoutFocus) {
		var elInput = this.getInput();
		
		var bWithoutFocus = bWithoutFocus || false;
		
		//this.setCompareValue(elInput.value);
		
		if(this._bIE) {
			this._wfKeyEvent.attach(elInput, this.option("sKeyEvent"));	
		}
		else {
			if (this._isTimerRunning()) {
				return;
			}
			
			this._wfFocus.attach(elInput, "focus");
			this._wfBlur.attach(elInput, "blur");
			
			if (bWithoutFocus) {
				this._onFocus();
			}
		}	
		
		this.fireEvent("start");
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		var elInput = this.getInput();
		
		if(this._bIE) {
			this._wfKeyEvent.detach(elInput, this.option("sKeyEvent"));
		}
		else {
			if (this._isTimerRunning()) {
				this._stopTimer();	
			}
			
			this._wfFocus.detach(elInput, "focus");
			this._wfBlur.detach(elInput, "blur");
		}
		
		this.fireEvent("stop");
	},
	
	/**
	 * 값을 비교할 시간 간격을 가져온다.
	 * @remark IE제외
	 */
	getInterval : function() {
		return this.option("nInterval");
	},
	
	/**
	 * 값을 비교할 시간 간격을 설정한다.
	 * @remark IE제외
	 * @param {Object} n
	 */
	setInterval : function(n) {
		this.option("nInterval", n);
	},
	
	_isTimerRunning : function() {
		return this._bTimerRunning;
	},
	
	_stopTimer : function() {
		var self = this;
		return setTimeout(function() {
			self._oTimer.abort();
			self._bTimerRunning = false;
			self.fireEvent("timerStop");
		}, this.getInterval());
	},
	
	_onKeyEvent : function(we) {
		this._compare();
	},	
	
	_onFocus : function() {
		if(this._isTimerRunning()) {
			clearTimeout(this._nTimerStopCall);
			this._nTimerStopCall = null;
			return;
		}
		
		this._bTimerRunning = true;
		this.fireEvent("timerStart");
		this._compare();
		
		var self = this;
		
		this._oTimer.start(function(){
			self._compare();
			return true;
		}, this.getInterval());
	},	
	
	_onBlur : function() {
		var self = this;
		this._nTimerStopCall = this._stopTimer();
	},
	
	_compare : function(){
		var sValue = this.getInput().value;
		if (sValue != this.getCompareValue()) {
			
			this.fireEvent("change", {
				text: sValue
			});
			
			this.setCompareValue(sValue);
		}
	}
}).extend(jindo.UIComponent);﻿/**
 * @fileOverview 특정 클래스명을 가진 엘리먼트에 마우스액션이 있을 경우 클래스명을 변경하고 이벤트를 발생시켜 롤오버를 구현한 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.5
 */
jindo.RolloverArea = jindo.$Class({
	/** @lends jindo.RolloverArea */
	  
	/**
	 * RolloverArea 컴포넌트를 생성한다.
	 * RolloverArea 컴포넌트는 기준 엘리먼트의 자식들 중 특정 클래스명을 가진 엘리먼트에 마우스액션이 있을 경우 클래스명을 변경하는 이벤트를 발생시킨다.
	 * @constructs 
	 * @extends jindo.UIComponent
	 * @param {HTMLElement} el 상위 기준 엘리먼트. 컴포넌트가 적용되는 영역(Area)이 된다.
	 * @param {HashTable} htOption 옵션 객체
	 * @example
var oRolloverArea = new jindo.RolloverArea(document.body, {
	sClassName : "rollover", // (String) 컴포넌트가 적용될 엘리먼트의 class 명. 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트에 Rollover 컴포넌트가 적용된다.
	sClassPrefix : "rollover-", // (String) 컴포넌트가 적용될 엘리먼트에 붙게될 class명의 prefix. (prefix+"over|down")
	bCheckMouseDown : true, // (Boolean) mousedown과 mouseup이벤트 핸들링여부 선언
	bActivateOnload : true, // (Boolean) 컴포넌트가 로드된 후 activate 여부
	htStatus : {
		sOver : "over", // (String) mouseover시 추가될 클래스명
		sDown : "down" // (String) mousedown시 추가될 클래스명
	}  
}).attach({
	over : function(oCustomEvent) {
		//컴포넌트가 적용된 엘리먼트에 마우스 커서가 올라갔을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 적용된 엘리먼트
		//	htStatus : {
		//		sOver : "over", // (String) mouseover시 추가, mouseout시 제거될 클래스명
		//		sDown : "down" // (String) mousedown시 추가, mouseup시 제거될 클래스명
		//	},
		//	weEvent : ($Event) mousedown 이벤트에 대한 $Event 객체  
		//}
		//oCustomEvent.stop(); 수행시 클래스명을 추가하지 않음
	},
	down : function(oCustomEvent) {
		//컴포넌트가 적용된 엘리먼트에 마우스 버튼을 눌렀을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 적용된 엘리먼트
		//	htStatus : {
		//		sOver : "over", // (String) mouseover시 추가, mouseout시 제거될 클래스명
		//		sDown : "down" // (String) mousedown시 추가, mouseup시 제거될 클래스명
		//	},
		//	weEvent : ($Event) mousedown 이벤트에 대한 $Event 객체
		//}
		//oCustomEvent.stop(); 수행시 클래스명을 추가하지 않음
	},
	up : function(oCustomEvent) {
		//컴포넌트가 적용된 엘리먼트에 마우스 버튼을 눌렀다 뗏을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 적용된 엘리먼트
		//	htStatus : {
		//		sOver : "over", // (String) mouseover시 추가, mouseout시 제거될 클래스명
		//		sDown : "down" // (String) mousedown시 추가, mouseup시 제거될 클래스명
		//	},
		//	weEvent : ($Event) mouseup 이벤트에 대한 $Event 객체  
		//}
		//oCustomEvent.stop(); 수행시 클래스명을 제거하지 않음
	},
	out : function(oCustomEvent) {
		//컴포넌트가 적용된 엘리먼트에 마우스 커서가 벗어났을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 적용된 엘리먼트
		//	htStatus : {
		//		sOver : "over", // (String) mouseover시 추가, mouseout시 제거될 클래스명
		//		sDown : "down" // (String) mousedown시 추가, mouseup시 제거될 클래스명
		//	},
		//	weEvent : ($Event) mouseout 이벤트에 대한 $Event 객체  
		//}
		//oCustomEvent.stop(); 수행시 클래스명을 제거하지 않음
	}
});
	 */				  
	$init : function(el, htOption) {
		this.option({ 
			sClassName : "rollover", 
			sClassPrefix : "rollover-",
			bCheckMouseDown : true,
			bActivateOnload : true,
			htStatus : {
				sOver : "over",
				sDown : "down"
			} 
		});
		this.option(htOption || {});
		
		this._elArea = jindo.$(el);
		this._aOveredElements = [];
		this._aDownedElements = [];
		this._wfMouseOver = jindo.$Fn(this._onMouseOver, this);
		this._wfMouseOut = jindo.$Fn(this._onMouseOut, this);
		
		if (this.option("bCheckMouseDown")) {
			this._wfMouseDown = jindo.$Fn(this._onMouseDown, this);
			this._wfMouseUp = jindo.$Fn(this._onMouseUp, this);
		}
		
		if (this.option("bActivateOnload")) {
			this.activate();
		}
	},
	
	_addOvered : function(el) {
		if (jindo.$A(this._aOveredElements).indexOf(el) == -1) {
			this._aOveredElements.push(el);
			return true;
		}
		
		return false;
	},
	
	_removeOvered : function(el) {
		var nIndex = jindo.$A(this._aOveredElements).indexOf(el);
		if (nIndex == -1) return false;
		
		this._aOveredElements.splice(nIndex, 1);
		
		return true;		
	},
	
	_flushOvered : function() {
		if (this._aOveredElements.length == 0) {
			return;
		}
		
		for (var i = 0, el; el = this._aOveredElements[i]; i++) {

			var htParam = { 
				element : el,
				htStatus : this.option("htStatus")
			}
			
			if (this.fireEvent('over', htParam)) {
				this._addStatus(htParam.element, htParam.stathtStatusr);
			}
			else {
				return;
			}
		}
		
		this._aOveredElements = [];
	},

	_addStatus : function(el, sStatus) {
		var sPrefix = this.option('sClassPrefix');

		var wel = jindo.$Element(el);
		if (wel.hasClass(sPrefix + sStatus)) return false;
		
		wel.addClass(sPrefix + sStatus);
		return true;
	},
	
	_removeStatus : function(el, sStatus) {
		var sPrefix = this.option('sClassPrefix');

		var wel = jindo.$Element(el);
		if (!wel.hasClass(sPrefix + sStatus)) return false;
		
		wel.removeClass(sPrefix + sStatus);
		return true;
	},
	
	_isInnerElement : function(elParent, elChild) {
		while (elChild) {
			if (elParent === elChild) {
				return true;
			}
			try { 
				elChild = elChild.parentNode; 
			} catch(e) { 
				break; 
			}
		}
			
		return false;
	},
	
	/**
	 * RolloverArea를 활성화시킨다.
	 * @return {this}
	 */
	_onActivate : function() {
		this._wfMouseOver.attach(this._elArea, 'mouseover');
		this._wfMouseOut.attach(this._elArea, 'mouseout');
		if (this.option("bCheckMouseDown")) {
			this._wfMouseDown.attach(this._elArea, 'mousedown');
			this._wfMouseUp.attach(document, 'mouseup');
		}
	},
	
	/**
	 * RolloverArea를 비활성화시킨다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		this._wfMouseOver.detach(this._elArea, 'mouseover');
		this._wfMouseOut.detach(this._elArea, 'mouseout');
		if (this.option("bCheckMouseDown")) {
			this._wfMouseDown.detach(this._elArea, 'mousedown');
			this._wfMouseUp.detach(document, 'mouseup');
		}
		
		this._aOveredElements.length = 0;
		this._aDownedElements.length = 0;
	},
	
	_findRollover : function(el) {
		var sClassName =  this.option('sClassName');
		return jindo.$$.test(el, '.' + sClassName) ? el : jindo.$$.getSingle('! .' + sClassName, el);
	},
	
	_onMouseOver : function(we) {
		var el = we.element;
		
		for (; el = this._findRollover(el); el = el.parentNode) {
			
			if (this._isInnerElement(el, we.relatedElement)) {
				continue;
			}
			
			this._addOvered(el);
				
			var htParam = { 
				element : el,
				htStatus : this.option("htStatus"),
				weEvent : we
			}
			
			if (this.fireEvent('over', htParam)) {
				this._addStatus(htParam.element, htParam.htStatus.sOver);
			} else {
				return;
			}
		}
	},
	
	_onMouseOut : function(we) {
		var el = we.element;
		
		for (; el = this._findRollover(el); el = el.parentNode) {

			if (this._isInnerElement(el, we.relatedElement)) {
				continue;
			} 
			
			this._removeOvered(el);
				
			var htParam = { 
				element : el,
				htStatus : this.option("htStatus"),
				weEvent : we
			}
			if (this.fireEvent('out', htParam)) {
				this._removeStatus(htParam.element, htParam.htStatus.sOver);
			} else {
				return;
			}
		}
	},
	
	_onMouseDown : function(we) {
		var el = we.element;

		while (el = this._findRollover(el)) {
			var htParam = { 
				element : el,
				htStatus : this.option("htStatus"),
				weEvent : we
			}
			this._aDownedElements.push(el);
			if (this.fireEvent('down', htParam)) {
				this._addStatus(htParam.element, htParam.htStatus.sDown);
			}
			
			el = el.parentNode;
		}
	},
	
	_onMouseUp : function(we) {
		var aTargetElementDatas = [];		
		
		var aDownedElements = this._aDownedElements;
		for (var i = 0, el; el = aDownedElements[i]; i++) {
			aTargetElementDatas.push({ 
				element : el,
				htStatus : this.option("htStatus"),
				weEvent : we
			})
		}
		
		var el = we.element;
		for (; el = this._findRollover(el); el = el.parentNode) {
			
			if (this._isInnerElement(el, we.relatedElement)) {
				continue;
			}
			
			if (jindo.$A(aDownedElements).indexOf(el) > -1) {
				continue;
			}
			
			aTargetElementDatas.push({ 
				element : el,
				htStatus : this.option("htStatus"),
				weEvent : we
			});
		}
		
		for (var i = 0, htParam; htParam = aTargetElementDatas[i]; i++) {
			if (this.fireEvent('up', htParam)) {
				this._removeStatus(htParam.element, htParam.htStatus.sDown);
			}		
		}
		
		this._flushOvered();		
		this._aDownedElements = [];
	}
}).extend(jindo.UIComponent);
/**
 * @fileOverview 특정 엘리먼트와 지정한 엘리먼트 그룹에서 발생한 이벤트에 따라 레이어를 숨겨주는 해주는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.5
 */

jindo.LayerManager = jindo.$Class({
	/** @lends jindo.LayerManager */
	
	_bIsActivating  : false,
	_bIsLayerVisible : false,
	_bIsHiding : false, //hide() 메소드가 Timer로 수행되고 있는지의 여부
	_bIsShowing : false,
	_aLink : null,
	_oTimer : null,
	
	/**
	 * 새로운 jindo.LayerManager 객체를 생성한다
	 * @constructs
	 * @param {HTMLElement | String} el 숨기고자하는 레이어 엘리먼트 (혹은 id)
	 * @param {Object} oOption 추가 옵션 (생략가능)
	 * @extends jindo.UIComponent
	 * @requires jindo.Timer
	 * @example
var o = new jindo.LayerManager("layer", {
	sCheckEvent : 'click', // {String} 어떤 이벤트가 발생했을 때 레이어를 닫아야 하는지 설정
	nShowDelay : 0, //{Number} 보여주도록 명령을 한 뒤 얼마 이후에 실제로 보여질지 지연시간 지정 (ms)
	nHideDelay : 100, //{Number} 숨기도록 명령을 한 뒤 얼마 이후에 실제로 숨겨지게 할지 지연시간 지정 (ms)
	sMethod : "show" // "fade", "slide"
}).attach({
	'beforeShow' : function(oCustomEvent) {
		//레이어를 보여주기 전 발생
		//oCustomEvent.stop()을 수행시 레이어를 보여주지 않는다.
	},
	'show' : function(oCustomEvent) {
		//레이어를 보여준 후 발생
	},
	'ignore' : function(oCustomEvent) {
		//이벤트가 발생했으나 레이어를 숨기지 않도록 무시된 경우 발생 
		//oCustomEvent.event ($Event) sCheckEvent가 발생되고 hide가 무시된 경우의  이벤트 객체
	},
	'beforeHide' : function(oCustomEvent) {
		//레이어를 숨기기 전 발생
		//oCustomEvent.stop()을 수행시 레이어를 숨기지 않는다.
	},
	'hide' : function(oCustomEvent) {
		//레이어를 숨긴 후 발생
	}
}).link(elLayer).link(elBtn);
	 */
	$init: function(el, oOption){
		this.option({
			sCheckEvent: "click",
			nShowDelay: 0,
			nHideDelay: 100,
			sMethod : "show", // "fade", "slide"
			nDuration : 100
		});
		
		this.option(oOption || {});
		this.setLayer(el);
		
		this._aLink = [];
		this._oTimer = new jindo.Timer();
		var self = this;
		this._wfOnEvent = jindo.$Fn(this._onEvent, this);
		this.getVisible();
		this.activate();
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		this._wfOnEvent.attach(document, this.option("sCheckEvent"));
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		this._wfOnEvent.detach(document, this.option("sCheckEvent"));
	},
	
	/**
	 * Layer가 보여지고 있는지 여부를 가져온다.
	 * @return {Boolean}
	 */
	getVisible: function(){
		return this._bIsLayerVisible = (this._wel.visible() && this._wel.opacity() > 0);
	},
	
	_check: function(el){
		var wel = jindo.$Element(el);
		for (var i = 0, elLink; elLink = this._aLink[i]; i++) {
			elLink = jindo.$Element(elLink).$value();
			if (elLink && (el == elLink || wel.isChildOf(elLink))) 
				return true;
		}
		return false;
	},
	
	_find: function(el){
		for (var i = 0, elLink; elLink = this._aLink[i]; i++) {
			if (elLink == el) {
				return i;
			} 
		}
		return -1;
	},
	
	/**
	 * 보여주고 숨겨줄 레이어 객체를 가져온다.
	 * @return {HTMLElement} 
	 */
	getLayer : function() {
		return this._el;
	},
	
	/**
	 * 보여주고 숨겨줄 레이어 객체를 가져온다.
	 * @return {HTMLElement} 
	 */
	setLayer : function(el) {
		this._el = jindo.$(el);
		this._wel = jindo.$Element(el);
		this._nLayerHeight = parseInt(this._wel.css("height"));
	},
	
	/**
	 * link된 엘리먼트 배열을 가져온다.
	 * @return {Array}
	 */
	getLinks : function() {
		return this._aLink;
	},
	
	/**
	 * link할 엘리먼트 배열을 설정한다.
	 * @param {Array}
	 * @return {jindo.LayerManager} 인스턴스 자신
	 */
	setLinks : function(a) {
		this._aLink = jindo.$A(a).unique().$value();
		return this;
	},
	
	/**
	 * 생성자의 옵션으로 지정한 이벤트가 발생해도 레이어를 닫지 않게 할 엘리먼트를 지정한다
	 * @param {vElement} vElement 이벤트를 무시할 엘리먼트 또는 엘리먼트의 ID (인자를 여러개 주어서 다수 지정 가능)
	 * @return {jindo.LayerManager} 인스턴스 자신
	 * @example
	 *	o.link($("one"), "two", oEl);
	 */
	link: function(vElement){
	
		if (arguments.length > 1) {
			for (var i = 0, len = arguments.length; i < len; i++) {
				this.link(arguments[i]);
			}
			return this;
		}
		
		if (this._find(vElement) != -1) {
			return this;
		} 
		
		this._aLink.push(vElement);
		return this;
	},
	
	/**
	 * 생성자의 옵션으로 지정한 이벤트가 발생해도 레이어를 닫지 않게 할 엘리먼트 지정한 것을 제거한다
	 * @param {vElement} vElement 이벤트가 무시된 엘리먼트 또는 엘리먼트의 ID (인자를 여러개 주어서 다수 지정 가능)
	 * @return {jindo.LayerManager} 인스턴스 자신
	 * @example
	 *	o.unlink($("one"), "two", oEl);
	 */
	unlink: function(vElement){
	
		if (arguments.length > 1) {
			for (var i = 0, len = arguments.length; i < len; i++) {
				this.unlink(arguments[i]);
			}
			return this;
		}
		
		var nIndex = this._find(vElement);
		if (nIndex == -1) {
			return this;
		}
		
		this._aLink.splice(nIndex, 1);
		return this;
		
	},
	
	_groupAction : function() {
		var sGroup = this.option("sGroup");
		if (sGroup) {
			var aInstance = this.constructor.getInstance();
			for (var i = 0, len = aInstance.length; i < len; i++) {
				var oInstance = aInstance[i];
				if (oInstance !== this && oInstance.option("sGroup") == sGroup) {
					if (!oInstance._bIsHiding) {
						oInstance.hide(oInstance.option("nHideDelay"));
					}
				}
			}
		}
	},
	
	_fireEventBeforeShow : function() {
		return this.fireEvent("beforeShow", {
			element : this.getLayer(),
			linkedList: this.getLinks()
		});
	},
	
	_fireEventShow : function() {
		this._groupAction();
		this.fireEvent("show", {
			element : this.getLayer(),
			linkedList: this.getLinks()
		});
		this._bIsShowing = false;
	},
	
	_fireEventBeforeHide : function() {
		return this.fireEvent("beforeHide", {
			element : this.getLayer(),
			linkedList: this.getLinks()
		})
	},
	
	_fireEventHide : function() {
		this.fireEvent("hide", {
			element : this.getLayer(),
			linkedList: this.getLinks()
		});
		this._bIsHiding = false;
	},
	
	_show: function(fShow, nDelay){
		this._bIsShowing = true;
		this._bIsHiding = false;
		if (typeof nDelay == "undefined") {
			nDelay = this.option("nShowDelay");
		}
		if (nDelay) {
			this._oTimer.start(fShow, nDelay);
		} else {
			this._oTimer.abort();
			fShow();
		}
	},
	
	_hide: function(fHide, nDelay){
		this._bIsShowing = false;
		this._bIsHiding = true;		
		if (typeof nDelay == "undefined") {
			nDelay = this.option("nHideDelay");
		} 
		if (nDelay) {
			this._oTimer.start(fHide, nDelay);
		} else {
			this._oTimer.abort();
			fHide();
		}
	},
	
	_getShowMethod : function() {
		switch (this.option("sMethod")) {
			case "show" :
				return "showIn";
				break;
			case "fade" :
				return "fadeIn";
				break;
			case "slide" :
				return "slideDown";
				break;
		}
	},
	
	_getHideMethod : function() {
		switch (this.option("sMethod")) {
			case "show" :
				return "hideOut";
				break;
			case "fade" :
				return "fadeOut";
				break;
			case "slide" :
				return "slideUp";
				break;
		}
	},
	
	show : function(nDelay) {
		this[this._getShowMethod()](nDelay);
	},
	
	hide : function(nDelay) {
		this[this._getHideMethod()](nDelay);
	},
	
	/**
	 * 레이어를 보여주도록 요청한다
	 * @param {Number} nDelay 레이어를 보여줄 때의 지연시간을 지정 (생략시 옵션으로 지정한 nShowDelay 값을 따른다)
	 * @return {jindo.LayerManager} 인스턴스 자신
	 */
	showIn: function(nDelay){
		if (this.getVisible()) {
			return this;
		}
		
		var self = this;
		this._show(function(){
			self._sAppliedMethod = "show";
			var elLayer = self.getLayer();
		
			//show
			if (self._fireEventBeforeShow()) {
				self._wel.show();
				
				self._fireEventShow();
			} else {
				return this;
			}
		}, nDelay);
		
		return this;
	},
	
	/**
	 * 레이어를 숨기도록 요청한다
	 * @param {Number} nDelay 레이어를 숨길 때의 지연시간을 지정 (생략시 옵션으로 지정한 nHideDelay 값을 따른다)
	 * @return {jindo.LayerManager} 인스턴스 자신
	 */
	hideOut: function(nDelay){
		if (!this.getVisible()) {
			return this;
		}

		var self = this;
		this._hide(function() {
			self._sAppliedMethod = "show";
			if (self._fireEventBeforeHide()) {
				self._wel.hide();
				self._fireEventHide();
			}
		}, nDelay);
		
		return this;
	},
	
	/**
	 * fade, slide를 위한 transition 객체를 가져온다.
	 */
	_getTransition : function() {
		if (this._oTransition) {
			return this._oTransition;	
		} else {
			return this._oTransition = new jindo.Transition().fps(30);
		}
	},
	
	/**
	 * 레이어를 보여주도록 요청한다
	 * @param {Number} nDelay 레이어를 보여줄 때의 지연시간을 지정 (생략시 옵션으로 지정한 nShowDelay 값을 따른다)
	 * @return {nhn.LayerManager} 인스턴스 자신
	 */
	fadeIn : function(nDelay){
		var oTransition = this._getTransition();
		if (!oTransition) {
			return this;
		}
		if (this._wel.opacity() == 1 && this._wel.visible()) {
			return this;
		}
		
		var nDuration = this.option("nDuration");
		
		var self = this;
		this._show(function(){
			self._sAppliedMethod = "fade";
			var elLayer = self.getLayer();
			
			//show
			if (self._fireEventBeforeShow()) {
				if (!self._wel.visible()) {
					self._wel.opacity(0);
					self._wel.show();
				}
				nDuration *= (1 - self._wel.opacity());
				oTransition.attach({
					end : function(e) {
						this.detach("end", arguments.callee);
						self._fireEventShow();
					}
				}).start(nDuration,
					elLayer, {
						"@opacity" : jindo.Effect["linear"](1)
					}
				);
			} else {
				return this;
			}
		}, nDelay);
		
		return this;
		
	},
	
	/**
	 * 레이어를 숨기도록 요청한다
	 * @param {Number} nDelay 레이어를 숨길 때의 지연시간을 지정 (생략시 옵션으로 지정한 nHideDelay 값을 따른다)
	 * @return {nhn.LayerManager} 인스턴스 자신
	 */
	fadeOut: function(nDelay){
		var oTransition = this._getTransition();
		if (!oTransition) {
			return this;
		}
		
		if (!this.getVisible()) {
			return this;
		}

		var nDuration = this.option("nDuration");
		
		var self = this;
		this._hide(function() {
			self._sAppliedMethod = "fade";
			var elLayer = self.getLayer();
			
			if (self._fireEventBeforeHide()) {
				
				nDuration *= self._wel.opacity();
				
				oTransition.attach({
					end : function(e) {
						this.detach("end", arguments.callee);
						self._fireEventHide();
					}
				}).start(nDuration,
					elLayer, {
						"@opacity" : jindo.Effect["linear"](0)
					}
				);
			}
		}, nDelay);

		return this;
		
	},
	
	/**
	 * 레이어를 보여주도록 요청한다
	 * @param {Number} nDelay 레이어를 보여줄 때의 지연시간을 지정 (생략시 옵션으로 지정한 nShowDelay 값을 따른다)
	 * @return {nhn.LayerManager} 인스턴스 자신
	 */
	slideDown : function(nDelay){
		var oTransition = this._getTransition();
		if (!oTransition) {
			return this;
		}
		
		if (this.getVisible()) {
			if (parseInt(this._wel.css("height")) == this._nLayerHeight) {
				return this;
			}
		}
		
		var nDuration = this.option("nDuration");
		
		var self = this;
			
		this._show(function(){
			self._sAppliedMethod = "slide";
			var elLayer = self.getLayer();
		
			//show
			if (self._fireEventBeforeShow()) {
				self._wel.css("height", "0px").css("overflow", "hidden");
				self._wel.show();
				oTransition.attach({
					end : function(e) {
						this.detach("end", arguments.callee);
						self._fireEventShow();
					}
				}).start(nDuration,
					elLayer, {
						"@height" : jindo.Effect["linear"](self._nLayerHeight + "px")
					}
				);
			}
			else {
				return;
			}
		}, nDelay);
		
		return this;
		
	},
	
	/**
	 * 레이어를 숨기도록 요청한다
	 * @param {Number} nDelay 레이어를 숨길 때의 지연시간을 지정 (생략시 옵션으로 지정한 nHideDelay 값을 따른다)
	 * @return {nhn.LayerManager} 인스턴스 자신
	 */
	slideUp: function(nDelay){
		var oTransition = this._getTransition();
		if (!oTransition) {
			return this;
		} 

		var nDuration = this.option("nDuration");

		var self = this;
				
		this._hide(function() {
			self._sAppliedMethod = "slide";
			var elLayer = self.getLayer();
			
			if (self._fireEventBeforeHide()) {
				oTransition.attach({
					end : function(e) {
						self._wel.hide();
						this.detach("end", arguments.callee);
						
						self._fireEventHide();
					}
				}).start(nDuration,
					elLayer, {
						"@height" : jindo.Effect["linear"]("0px")
					}
				)
			}
		}, nDelay);

		return this;
	},
	
	/**
	 * 레이어를 보여주거나 숨기도록 요청한다
	 * @param {Number} nDelay 레이어를 보여주거나 숨길 때의 지연시간을 지정 (생략시 옵션으로 지정한 showDelay/hideDelay 값을 따른다)
	 * @return {nhn.LayerManager} 인스턴스 자신
	 */
	toggle: function(nDelay){
		return !this.getVisible() ? this.show(nDelay) : this.hide(nDelay);
	},
	
	_onEvent : function(we){
		var el = we.element;
		var self = this;
		setTimeout(function(){
			if (!self.getVisible()) {
				return;
			}
			if (self._check(el)) { // hide()수행중이 아니고 links 객체들 안에서 발생한거면
			 	if(!self._bIsHiding || !self._bIsShowing) {
					self.fireEvent("ignore", { weEvent : we });
					self._oTimer.abort();
					return;	
				} 
			}
			//mousedown시 disabled된 input일 경우 el이 제대로 리턴되지 않는 IE버그 수정
			if (typeof el.tagName != "undefined") {
				self.hide();	
			}
		}, this.option("nHideDelay"));		
	}
	
}).extend(jindo.UIComponent);/**
 * @fileOverview 특정 엘리먼트로부터 상대적인 레이어의 위치를 구한다. 
 * @author senxation
 * @version 0.2
 */

jindo.LayerPosition = jindo.$Class({
	/** @lends jindo.LayerPosition */

	/**
	 * 컴포넌트를 생성한다.
	 * 위치를 설정할 레이어 엘리먼트는 document.body의 바로 아래에 존재해야야 한다.
	 * 그렇지 않을 경우 강제로 document.body로 이동된다.
	 * @constructs
	 * @param {HTMLElement} el 기준이 되는 엘리먼트, document.body도 가능하다
	 * @param {HTMLElement} elLayer 위치를 설정할 레이어 엘리먼트
	 * @param {HashTable} htOption
	 * @extends jindo.Component
	 * @example
var oLayerPosition = new jindo.LayerPosition(jindo.$("center"), jindo.$("layer26"), { 
	sPosition: "outside-bottom", //레이어를 띄울 위치. 총 17가지의 위치를 가질 수 있다.
	sAlign: "left", //레이어의 위치가 top/bottom일 때 좌우 정렬 값 "left" || "center" || "middle" 
	sValign: "", //레이어의 위치가 left/right일 때 상하 정렬 값 "top" || "middle" || "bottom"
	nTop: 0, //기준 레이어와의 y좌표의 차이
	nLeft: 0, //기준 레이어와의 x좌표의 차이
	bAuto: false, //자동정렬 여부
	bAdjustPositionOnResize : true, //기준 엘리먼트가 document.body일 경우 브라우저창의 크기가 변경될 때 레이어 위치를 다시 조정할지 여부. 
	bAdjustPositionOnScroll : true //기준 엘리먼트가 document.body일 경우 브라우저의 스크롤위치가 변경될 때 레이어 위치를 다시 조정할지 여부.
});
     * @example
htOption.sPosition = "outside-top-left" || "outside-top" || "outside-top-right" || "outside-right" || "outside-bottom-right" || "outside-bottom" || "outside-bottom-left" || "outside-left" || "inside-top-left" || "inside-top" || "inside-top-right" || "inside-right" || "inside-bottom-right" || "inside-bottom" || "inside-bottom-left" || "inside-left" || "inside-center" 
	 */
	$init: function(el, elLayer, htOption){
		this.option({
			sPosition: "outside-bottom",
			sAlign: "left",
			sValign: "",
			nTop: 0,
			nLeft: 0,
			bAuto: false,
			bAdjustPositionOnResize : true,
			bAdjustPositionOnScroll : true
		});
		this.option(htOption || {});
		this.setElement(el);
		this.setLayer(elLayer);
		if (el && elLayer) {
			this.setPosition();	
		}
		
		this._wfSetPosition = jindo.$Fn(function(){
			if(jindo.$Element(this.getLayer()).visible()){
				this.setPosition();
			}
		}, this);
		
		/* 기준 엘리먼트가 body이면 스크롤되거나 리사이즈 될 경우 보정 */
		if(el == document.body) {
			if (this.option("bAdjustPositionOnScroll")) {
				this._wfSetPosition.attach(window, "scroll");				
			}
			if (this.option("bAdjustPositionOnResize")) {
				this._wfSetPosition.attach(window, "resize");				
			}
		}
	},
	
	/**
	 * 기준 엘리먼트를 구한다.
	 * @return {HTMLElement}
	 */
	getElement : function() {
		return this._el;
	},
	
	/**
	 * 기준 엘리먼트를 설정한다.
	 * @param {HTMLElement}
	 * @return {jindo.LayerPosition} 인스턴스 자신
	 */
	setElement : function(el) {
		this._el = jindo.$(el);
		return this;
	},
	
	/**
	 * 레이어 엘리먼트를 구한다.
	 * @return {HTMLElement}
	 */
	getLayer : function() {
		return this._elLayer;
	},
	
	/**
	 * 레이어 엘리먼트를 설정한다.
	 * @param {HTMLElement}
	 * @return {jindo.LayerPosition} 인스턴스 자신
	 */
	setLayer : function(elLayer) {
		this._elLayer = jindo.$(elLayer);
		return this;
	},
	
	/**
	 * 옵션에 해당하는 레이어의 위치를 구한다.
	 * @param {HashTable} htOption
	 * @return {HashTable} htPosition
	 * @example
(return value) htPosition = {
	nTop : (Number) 문서상의 y좌표
	nLeft : (Number) 문서상의 x좌표
} 
	 */
	getPosition : function(htOption) {
		if (typeof htOption != "object") {
			var htOption = this.option();
		}
		function isPosition(sWord) {
			if (htOption.sPosition.indexOf(sWord) > -1) {
				return true;
			}
			return false;
		}
		
		function setLeftRight(){
			if (isPosition("left")) {
				if (isPosition("outside")) {
					htPosition.nLeft -= nLayerWidth;
					htPosition.nLeft -= htOption.nLeft;					
				}
				else {
					htPosition.nLeft += htOption.nLeft;
				}
			}
			else if (isPosition("right")) {
				htPosition.nLeft += nWidth;
				if (isPosition("inside")) {
					htPosition.nLeft -= nLayerWidth;
					htPosition.nLeft -= htOption.nLeft;
				}
				else {
					htPosition.nLeft += htOption.nLeft;
				}
			}
			else {
				setAlign();
			}
		}
		function setAlign() {
			
			if (htOption.sAlign == "left") {
				htPosition.nLeft += htOption.nLeft;	
			}
			
			if (htOption.sAlign == "center") {
				htPosition.nLeft += (nWidth - nLayerWidth) / 2;
			}
				
			if (htOption.sAlign == "right") {
				htPosition.nLeft += nWidth - nLayerWidth;
				htPosition.nLeft -= htOption.nLeft;	
			}
		}
		function setVerticalAlign() {
			
			if (htOption.sValign == "top") {
				htPosition.nTop += htOption.nTop;	
			}
			
			if (htOption.sValign == "middle") {
				htPosition.nTop += (nHeight - nLayerHeight) / 2;
			}
			
			if (htOption.sValign == "bottom") {
				htPosition.nTop += nHeight - nLayerHeight;
				htPosition.nTop -= htOption.nTop; 
			}
		}
		
		var el = this.getElement();
		var wel = jindo.$Element(el);
		var elLayer = this.getLayer();
		var welLayer = jindo.$Element(elLayer);
		
		var htElementPosition = wel.offset();
		
		var nWidth = el.offsetWidth;// + parseInt(wel.css('marginLeft')) + parseInt(wel.css('marginRight'));
		var nHeight = el.offsetHeight;// + parseInt(wel.css('marginTop')) + parseInt(wel.css('marginBottom'));
		if (el == document.body) {
			var oClientSize = jindo.$Document().clientSize();
			nWidth = oClientSize.width;
			nHeight = oClientSize.height;
		}
		
		var nLayerWidth = elLayer.offsetWidth;
		var nLayerHeight = elLayer.offsetHeight;
		
		//Layer에 마진이 있는경우 렌더링 보정.
		nLayerWidth += parseInt(welLayer.css('marginLeft')) + parseInt(welLayer.css('marginRight')) || 0;
		nLayerHeight += parseInt(welLayer.css('marginTop')) + parseInt(welLayer.css('marginBottom')) || 0;
		
		var htPosition = {
			nTop: 0,
			nLeft: 0
		}
		
		htPosition.nTop = htElementPosition.top;
		htPosition.nLeft = htElementPosition.left;
		if (isPosition("center")) {
			htPosition.nTop += (nHeight - nLayerHeight) / 2;
			htPosition.nTop += htOption.nTop;
			htPosition.nLeft += (nWidth - nLayerWidth) / 2;
			htPosition.nLeft += htOption.nLeft;
		} else if (isPosition("top")) {
			if (isPosition("outside")) {
				htPosition.nTop -= nLayerHeight;
				htPosition.nTop -= htOption.nTop;
			}
			else {
				htPosition.nTop += htOption.nTop;	
			}
			setLeftRight();
		}
		else if (isPosition("bottom")) {
			htPosition.nTop += nHeight;
			if (isPosition("inside")) {
				htPosition.nTop -= nLayerHeight;
				htPosition.nTop -= htOption.nTop;
			}
			else {
				htPosition.nTop += htOption.nTop;
			}
			setLeftRight();
		}
		else if (isPosition("left")) {
			if (isPosition("outside")) {
				htPosition.nLeft -= nLayerWidth;
				htPosition.nLeft -= htOption.nLeft;	
			}
			else {
				htPosition.nLeft += htOption.nLeft;
			}
			setVerticalAlign();
		}
		else if (isPosition("right")) {
			htPosition.nLeft += nWidth;
			if(isPosition("inside")) {
				htPosition.nLeft -= nLayerWidth;
				htPosition.nLeft -= htOption.nLeft;	
			}
			else {
				htPosition.nLeft += htOption.nLeft;
			}
			setVerticalAlign();
		}
		
		/* 기준 엘리먼트가 body인 경우 scroll 포지션에 따른 보정 */
		if (el == document.body) {
			var htScrollPosition = jindo.$Document().scrollPosition();
			var nScrollTop = htScrollPosition.top;
			var nScrollLeft = htScrollPosition.left;
			htPosition.top += nScrollTop;	
			htPosition.left += nScrollLeft;
		}
		
		return htPosition;
	},
	
	/**
	 * 레이어를 특정 좌표에 위치시킨다.
	 * @param {HashTable} htPosition
	 * @example
htPosition = {
	nTop : (Number) 문서상의 y좌표
	nLeft : (Number) 문서상의 x좌표
} 
	 */
	setPosition : function(htPosition){
		var elLayer = this.getLayer();
		var welLayer = jindo.$Element(elLayer);
		document.body.appendChild(elLayer);
		welLayer.css("left", "-9999px").css("top", "0px");
		if(!htPosition) {
			var htPosition = this.getPosition();
		}
		
		if(this.option("bAuto")) {
			htPosition = this._adjustPosition(htPosition);
		}
		welLayer.css("left", htPosition.nLeft + "px").css("top", htPosition.nTop + "px"); //offset으로 설정할경우 간혹 수치가 맞지 않음
	},
	
	/**
	 * 레이어 전체가 화면에 보이는지 여부를 가져온다.
	 * @param {HashTable} htPosition
	 * @return {Boolean}
	 * @ignore
	 */
	_isFullyVisible : function(htPosition){
		if(!htPosition) {
			var htPosition = this.getPosition();			
		}
		var elLayer = this.getLayer();
		var welLayer = jindo.$Element(elLayer);
		var oScrollPosition = jindo.$Document().scrollPosition();
		var nScrollTop = oScrollPosition.top; 	//top
		var nScrollLeft = oScrollPosition.left;	//left
		var oClientSize = jindo.$Document().clientSize();
		var nLayerWidth = elLayer.offsetWidth + (parseInt(welLayer.css('marginLeft')) + parseInt(welLayer.css('marginRight')) || 0);
		var nLayerHeight = elLayer.offsetHeight + (parseInt(welLayer.css('marginTop')) + parseInt(welLayer.css('marginBottom')) || 0);
		
		if (htPosition.nLeft >= 0 && htPosition.nTop >= 0 && oClientSize.width >= htPosition.nLeft - nScrollLeft + nLayerWidth && oClientSize.height >= htPosition.nTop - nScrollTop + nLayerHeight) {
			return true;
		}
		return false;
	},
	
	/**
	 * 가로방향으로 반전되어 배치되도록 변환된 옵션 객체를 가져온다.
	 * @param {HashTable} htOption
	 * @return {HashTable} htOption
	 * @ignore
	 */
	_mirrorHorizontal : function(htOption) {
		
		var htOption = htOption || this.option();
		
		if(htOption.sAlign == "center" || htOption.sPosition == "inside-center") {
			return;
		}
		
		var oTempOption = {};
		for (var i in htOption) {
			oTempOption[i] = htOption[i];
		}
		
		var oPosition = this.getPosition();		
		if(oTempOption.sPosition.indexOf("right") > -1) {
			oTempOption.sPosition = oTempOption.sPosition.replace(/right/, "left");
		}
		else if(oTempOption.sPosition.indexOf("left") > -1) {
			oTempOption.sPosition = oTempOption.sPosition.replace(/left/, "right");
		}
		else if(oTempOption.sAlign == "right") {
			oTempOption.sAlign = "left";
		}
		else if(oTempOption.sAlign == "left") {
			oTempOption.sAlign = "right";
		}
		
		return oTempOption;
	},
	
	/**
	 * 세로방향으로 반전되어 배치되도록 변환된 옵션 객체를 가져온다.
	 * @param {HashTable} htOption
	 * @return {HashTable} htOption
	 * @ignore
	 */
	_mirrorVertical : function(htOption) {
		var htOption = htOption || this.option();
		
		if(htOption.sValign == "middle" || htOption.sPosition == "inside-center") {
			return;
		}
		
		var oTempOption = {};
		for (var i in htOption) {
			oTempOption[i] = htOption[i];
		}
		
		var oPosition = this.getPosition();	
		if(oTempOption.sPosition.indexOf("top") > -1) {
			oTempOption.sPosition = oTempOption.sPosition.replace(/top/, "bottom");
		}
		else if(oTempOption.sPosition.indexOf("bottom") > -1) {
			oTempOption.sPosition = oTempOption.sPosition.replace(/bottom/, "top");
		}
		else if(oTempOption.sValign == "top") {
			oTempOption.sValign = "bottom";
		}
		else if(oTempOption.sValign == "bottom") {
			oTempOption.sValign = "top";
		}
		
		return oTempOption;
	},
	
	/**
	 * 레이어가 항상 보이도록 위치를 자동 조절한다.
	 * 우선순위는 가로 반전, 세로반전, 가로세로반전 순이다.
	 * 모든 경우에도 레이어 전체가 보이지 않을 경우 원위치시킨다.
	 * @param {HashTable} htPosition
	 * @return {HashTable} htOption
	 * @ignore
	 */
	_adjustPosition: function(htPosition){
		if (this._isFullyVisible(htPosition)) {
			return htPosition;
		}

		var htOption = this.option();
		
		var aOption = [];
		aOption.push(this._mirrorHorizontal(htOption));
		aOption.push(this._mirrorVertical(htOption));
		aOption.push(this._mirrorVertical(this._mirrorHorizontal(htOption)));
		for (var i = 0; i < aOption.length; i++) {
			oTempPosition = this.getPosition(aOption[i]);
			if(this._isFullyVisible(oTempPosition)) {
				return oTempPosition;
			}
		}
		return htPosition;
	}
}).extend(jindo.Component);﻿/**
 * @fileOverview RolloverArea와 달리 mousedown/mouseup이 아닌 click이벤트를 체크하는 컴포넌트
 * @author senxation
 * @version 0.1
 */
jindo.RolloverClick = jindo.$Class({
	/** @lends jindo.RolloverClick */
	  
	/**
	 * RolloverClick 컴포넌트를 생성한다.
	 * RolloverClick 컴포넌트는 기준 엘리먼트의 자식들 중 특정 클래스명을 가진 엘리먼트에 마우스액션이 있을 경우 클래스명을 변경하는 이벤트를 발생시킨다.
	 * @constructs 
	 * @extends jindo.UIComponent
	 * @requires jindo.RolloverArea
	 * @param {HTMLElement} el RolloverArea에 적용될 상위 기준 엘리먼트. 컴포넌트가 적용되는 영역(Area)이 된다.
	 * @param {HashTable} htOption 옵션 객체
	 * @see jindo.RolloverArea
	 * @example
var oRolloverClick = new jindo.RolloverClick(document.body, {
	bActivateOnload : true, // (Boolean) 컴포넌트가 로드된 후 activate 여부
	RolloverArea : { //RolloverArea에 적용될 옵션 객체
		bClassName : "rollover", // (String) 컴포넌트가 적용될 엘리먼트의 class 명. 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트에 Rollover 컴포넌트가 적용된다.
		bClassPrefix : "rollover-", // (String) 컴포넌트가 적용될 엘리먼트에 붙게될 class명의 prefix. (prefix+"over|down")
		htStatus : {
			sOver : "over", // (String) mouseover시 추가될 클래스명
			sDown : "down" // (String) mousedown시 추가될 클래스명
		}  
	}
}).attach({
	over : function(oCustomEvent) {
		//컴포넌트가 적용된 엘리먼트에 마우스 커서가 올라갔을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 적용된 엘리먼트
		//	htStatus : {
		//		sOver : "over", // (String) mouseover시 추가, mouseout시 제거될 클래스명
		//		sDown : "down" // (String) mousedown시 추가, mouseup시 제거될 클래스명
		//	},
		//	weEvent : ($Event) mousedown 이벤트에 대한 $Event 객체  
		//}
		//oCustomEvent.stop(); 수행시 클래스명을 추가하지 않음
	},
	out : function(oCustomEvent) {
		//컴포넌트가 적용된 엘리먼트에 마우스 커서가 벗어났을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 적용된 엘리먼트
		//	htStatus : {
		//		sOver : "over", // (String) mouseover시 추가, mouseout시 제거될 클래스명
		//		sDown : "down" // (String) mousedown시 추가, mouseup시 제거될 클래스명
		//	},
		//	weEvent : ($Event) mouseout 이벤트에 대한 $Event 객체  
		//}
		//oCustomEvent.stop(); 수행시 클래스명을 제거하지 않음
	}
	click : function(oCustomEvent) {
		//컴포넌트가 적용된 엘리먼트에 마우스 버튼을 클릭했을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 적용된 엘리먼트
		//	htStatus : {
		//		sOver : "over", // (String) mouseover시 추가, mouseout시 제거될 클래스명
		//		sDown : "down" // (String) mousedown시 추가, mouseup시 제거될 클래스명
		//	},
		//	weEvent : ($Event) click 이벤트에 대한 $Event 객체  
		//}
	}
});
	 */				  
	$init : function(el, htOption) {
		this.option({ 
			bActivateOnload : true
		});
		if (typeof htOption == "undefined") {
			var htOption = {};
		}
		if (!htOption.hasOwnProperty("RolloverArea")) {
			htOption.RolloverArea = {};
		}
		htOption.RolloverArea.bCheckMouseDown = false;
		htOption.RolloverArea.bActivateOnload = false;	
		
		this.option(htOption);
		
		var self = this;
		this._oRolloverArea = new jindo.RolloverArea(el, htOption.RolloverArea).attach({
			over : function(oCustomEvent) {
				if (!self.fireEvent("over", oCustomEvent)) {
					oCustomEvent.stop();
				}
			},
			out : function(oCustomEvent) {
				if (!self.fireEvent("out", oCustomEvent)) {
					oCustomEvent.stop();
				}
			}
		});
		this._wfClick = jindo.$Fn(this._onClick, this);
		
		if (this.option("bActivateOnload")) {
			this.activate();
		}
	},
	
	_onClick : function(we) {
		var elRollover = (this._oRolloverArea._findRollover(we.element));
		if (elRollover) {
			this.fireEvent("click", { 
				element : elRollover,
				htStatus : this._oRolloverArea.option("htStatus"),
				weEvent : we
			});
		}
	},
	
	/**
	 * RolloverClick를 활성화시킨다.
	 * @return {this}
	 */
	_onActivate : function() {
		this._wfClick.attach(this._oRolloverArea._elArea, 'click');
		this._oRolloverArea.activate();
	},
	
	/**
	 * RolloverClick를 비활성화시킨다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		this._wfClick.detach(this._oRolloverArea._elArea, 'click');
		this._oRolloverArea.deactivate();
	}
	
}).extend(jindo.UIComponent);﻿/**
 * @fileOverview 엘리먼트의 css style의 변화를 주어 서서히 움직이는 효과를 주는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */

jindo.Transition = jindo.$Class({
	/** @lends jindo.Transition */
	_nFPS : 15,
	
	_aQueue : null,
	_oTimer : null,
	
	_bIsWaiting : true, // 큐의 다음 동작을 하길 기다리는 상태
	_bIsPlaying : false, // 재생되고 있는 상태
	
	/**
	 * Transition 컴포넌트를 생성한다.
	 * @constructs
	 * @param {Object} oOption 옵션 객체
	 * @extends jindo.Component
	 * @requires jindo.Effect
	 * @requires jindo.Timer
	 * @example 
var oTransition = new jindo.Transition().fps(30).attach({
	'start' : function() {
	//Transition이 시작될 때 발생
	},
	'playing' : function(oCustomEvent) {
	//Transition이 진행되는 매 단계에 발생
	//이벤트 객체 oCustomEvent = { 
	//	element : 변화되고있는 객체 
	//}
	}
	'end' : function() {
	//Transition이 끝났을 때 발생
	},
	'abort' : function() {
	//Transition이 중단되었을 때 발생
	},
	'pause' : function() {
	//Transition이 일시정지되었을 때 발생
	},
	'resume' : function() {
	//Transition이 재시작될 때 발생
	}
});
	 */
	$init : function(oOption) {
		this._aQueue = [];
		this._oTimer = new jindo.Timer();
		
		this.option({ 
			fEffect : jindo.Effect.linear, 
			bCorrection : false 
		});
		this.option(oOption || {});
	},

	/**
	 * 효과가 재생될 초당 frame rate
	 * @param {Number} nFPS (생략시 현재 frame rate 리턴)
	 * @return {Number} 
	 */
	fps : function(nFPS) {
		if (arguments.length > 0) {
			this._nFPS = nFPS;
			return this;
		}
		
		return this._nFPS;
	},
	
	/**
	 * 진행되고 있는 Transition을 중지시킨다.
	 */
	abort : function() {
		this._aQueue = [];
		this._oTimer.abort();
		
		if (this._bIsPlaying) {
			this.fireEvent('abort');
		}

		this._bIsWaiting = true;
		this._bIsPlaying = false;
		
		this._htNow = null;
	},
	
	/**
	 * 지정된 Transition을 시작한다.
	 * @example 
oTransition.start(1000,
	jindo.$('foo'), {
		'@left' : jindo.Effect[sEffect](oPos.pageX + 'px')
	},
	
	jindo.$('bar'), {
		'@top' : jindo.Effect[sEffect](oPos.pageY + 'px')
	}
);
	 */
	start : function() {
	
		this.abort();
		return this.precede.apply(this, arguments);
		
	},
	
	/**
	 * 진행되고 있는 Transition을 일시중지시킨다.
	 */
	pause : function() {
		if (this._oTimer.abort()) {
			this.fireEvent('pause');
		}
	},
	
	/**
	 * 일시중지된 Transition을 재시작시킨다.
	 */
	resume : function() {
	
		var self = this;
		if (!this._htNow) {
			return;
		}
		
		if (this._bIsWaiting == false && this._bIsPlaying == true) this.fireEvent('resume');

		this._goOn();
		
		this._bIsWaiting = false;
		this._bIsPlaying = true;
	
		this._oTimer.start(function() {
		
			var bEnd = !self._goOn();
			if (bEnd) {
				self._bIsWaiting = true;
				setTimeout(function() { 
					self._try(); 
				}, 0);
			}
			
			return !bEnd;
			
		}, this._htNow.nInterval);
		
	},
	
	/**
	 * 지정된 Transition이 종료된 이후에 또 다른 Transition 을 수행한다.
	 * @example 
oTransition.precede(1000,
	jindo.$('foo'), {
		'@left' : jindo.Effect[sEffect](oPos.pageX + 'px')
	},
	
	jindo.$('bar'), {
		'@top' : jindo.Effect[sEffect](oPos.pageY + 'px')
	}
);
	 */
	precede : function(nDuration, oEl) {
		
		if (typeof nDuration == 'function') {
			
			this._aQueue.push(nDuration);
			
		} else {
			
			var htStuff = { 
				nDuration : nDuration, 
				aList : [] 
			};
			
			for (var oArg = arguments, nLen = oArg.length, i = 1; i < nLen - 1; i += 2) {
			
				var aValue = [];
				jindo.$H(oArg[i + 1]).forEach(function(sEnd, sKey) {
				
					if (/^(@|style\.)(\w+)/i.test(sKey))
						aValue.push([ 'csses', RegExp.$2, sEnd ]);
					else
						aValue.push([ 'attrs', sKey, sEnd ]);
				
				});
				
				htStuff.aList.push({
					element : 'tagName' in oArg[i] ? jindo.$Element(oArg[i]) : oArg[i],
					aValue : aValue
				});
			}
			
			this._aQueue.push(htStuff);
			
		}
		
		this._try();
		return this;

	},
	
	_dequeue : function() {
	
		var htStuff = this._aQueue.shift();
		if (!htStuff) return;
		
		if (typeof htStuff == 'function')
			return htStuff;
		
		var aList = htStuff.aList;

		for (var i = 0, nLen = aList.length; i < nLen; i++) {
		
			var vElement = aList[i].element;

			for (var j = 0, aValue = aList[i].aValue, nJLen = aValue.length; j < nJLen; j++) {
				
				var sType = aValue[j][0];
				var fFunc = aValue[j][2];
				
				if (typeof fFunc != 'function') {
					if (fFunc instanceof Array) {
						fFunc = this.option('fEffect')(fFunc[0], fFunc[1]);
					} else {
						fFunc = this.option('fEffect')(fFunc);
					} 
				}
				
				if (fFunc.setStart) {
					
					if (vElement instanceof jindo.$Element) {
					
						switch (sType) {
						case 'csses':
							fFunc.setStart(vElement.css(aValue[j][1]));
							break;
							
						case 'attrs':
							fFunc.setStart(vElement.$value()[aValue[j][1]]);
							break;
						}
					
					} else {
						fFunc.setStart(vElement.getter(aValue[j][1]));	
					}
					
				}
					
				aValue[j][2] = fFunc;

			}
			
		}
		
		return htStuff;
		
	},
	
	_try : function() {
	
		var self = this;
		if (!this._bIsWaiting) return false;
		
		var htStuff;
		
		do {
			htStuff = this._dequeue();
			
			if (!htStuff) {
				if (this._bIsPlaying) {
					this._bIsPlaying = false;	
					this.abort();
					this.fireEvent('end');
				}
				return false;
			}
			
			if (!this._bIsPlaying) this.fireEvent('start');
			
			if (typeof htStuff == 'function') {
				this._bIsPlaying = true;
				htStuff.call(this);
			}
		} while (typeof htStuff == 'function');
		
		var nInterval = 1000 / this._nFPS;
		
		this._htNow = {
			aList : htStuff.aList,
			nRatio : 0,
			nInterval : nInterval,
			nStep : nInterval / htStuff.nDuration
		};
		
		this.resume();

		return true;
		
	},
	
	_goOn : function() {
	
		var htNow = this._htNow;
		var nRatio = htNow.nRatio;
		var aList = htNow.aList;
		
		var oEq = {};
		
		nRatio = parseFloat(nRatio.toFixed(5));
		if (nRatio > 1) {
			nRatio = 1;
		}
		
		var bCorrection = this.option('bCorrection');
		
		for (var i = 0, nLen = aList.length; i < nLen; i++) {
		
			var vElement = aList[i].element;

			for (var j = 0, aValue = aList[i].aValue, nJLen = aValue.length; j < nJLen; j++) {
				
				if (vElement instanceof jindo.$Element) {
					
					var sKey = aValue[j][1];
					var sValue = aValue[j][2](nRatio);
						
					if (bCorrection) {

						var sUnit = /[0-9]([^0-9]*)$/.test(sValue) && RegExp.$1 || '';
						
						if (sUnit) {

							var nValue = parseFloat(sValue);
							var nFloor;
	
							var a = nValue;
							
							nValue += oEq[sKey] || 0;
							nValue = parseFloat(nValue.toFixed(5));
							
							if (i == nLen - 1) {
								
								sValue = Math.round(nValue) + sUnit;
								
							} else {
								
								nFloor = parseFloat(/(\.[0-9]+)$/.test(nValue) && RegExp.$1 || 0);
								sValue = parseInt(nValue) + sUnit;
	
								oEq[sKey] = nFloor;
							
							}
							
						}
				
					}
				
					switch (aValue[j][0]) {
					case 'csses':
						vElement.css(sKey, sValue);
						break;
						
					case 'attrs':
						vElement.$value()[sKey] = sValue;
						break;
					}
					this.fireEvent("playing", {element : vElement.$value()});
					
				} else {
				
					vElement.setter(aValue[j][1], aValue[j][2](nRatio));
					this.fireEvent("playing", {element : vElement});
				}
				
			}
		
		}
		
		htNow.nRatio += htNow.nStep;
		
		return nRatio != 1;
	
	}

}).extend(jindo.Component);
/**
 * @fileOverview 특정 월의 달력 출력을 위한 컴포넌트
 * @author senxation
 * @version 0.4
 */

jindo.Calendar = jindo.$Class({
	/** @lends jindo.Calendar */
	/**
	 * Calendar 컴포넌트를 생성한다.
	 * 달력이 출력 될때 토요일, 일요일은 각각 해당 셀에 sat, sun로 className을 설정한다. 
	 * 이전달의 마지막주의 날짜 셀은 prev-mon, 다음달의 첫주의 날짜 셀은 next_mon로 className을 설정한다.
	 * 공휴일 정보는 draw 커스텀 이벤트에서 클래스명 정의를 통해 작성해야한다.
	 * @constructs
	 * @extends jindo.Component
	 * @param {String | HTMLElement} sLayerId 달력을 출력할 레이어의 id 혹은 레이어 자체.
	 * @param {HashTable} htOption 초기화 옵션 설정을 위한 객체.
	 * @example
var oCalendar = new jindo.Calendar("calendar_layer", {
	sClassPrefix : "calendar-",
	nYear : 1983,
	nMonth : 5,
	nDate : 12,
	sTitleFormat : "yyyy-mm", //설정될 title의 형식
	sYearTitleFormat : "yyyy", //설정될 연 title의 형식
	sMonthTitleFormat : "m", //설정될 월 title의 형식
	aMonthTitle : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], //월의 이름을 설정 "title" 세팅시 적용
	bDrawOnload : true //로딩과 동시에 바로 그릴것인지 여부
}).attach({
	beforeDraw : function(oCustomEvent) {
		//달력을 새로 그리기 전 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//}
		//oCustomEvent.stop()을 실행하면 draw 커스텀 이벤트가 발생하지 않는다. 
	},
	draw : function(oCustomEvent) {
		//달력을 새로 그리는 중 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 날짜가 쓰여질 목표 엘리먼트
		//  elWrapper : (HTMLElement) week의 child 엘리먼트로 날짜가 쓰여질 목표 엘리먼트를 감싸고 있는 상위 엘리먼트. (element와 같을 수도 있음) 
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//	nDate : (Number) 일 (ex. 12)
		//	bPrevMonth : (Boolean) 그려질 날이 이전달의 날인지 여부
		//	bNextMonth : (Boolean) 그려질 날이 다음달의 날인지 여부
		//}
	},
	afterDraw : function(oCustomEvent) {
		//달력을 그린 이후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//}
	}
});
	 * @example 
옵션의 sTitleFormat은 날짜의 형식으로 title 엘리먼트에 표현될 형식을 지정한다. 
다음의 형식을 조합하여 사용할 수 있다.
ex) "yyyy.m", "yyyy년 m월", "yy/m" ...
연도 : yyyy(4자리 숫자, ex "2001"), yy(2자리 숫자, ex "01")
월 : mm(2자리 숫자, ex "01"), m(1자리 숫자, ex "1"), M(aMonthTitle에 설정된 값으로 보여줌 ex "JAN")
	 */
	$init : function(sLayerId, htOption) {
		var oDate = new Date();
		
		this._htToday = {
			nYear : oDate.getFullYear(),
			nMonth : oDate.getMonth() + 1,
			nDate : oDate.getDate()
		}
		
		this._elLayer = jindo.$(sLayerId);
		
		var htDefaultOption = {
			sClassPrefix : "calendar-",
			nYear : this._htToday.nYear,
			nMonth : this._htToday.nMonth,
			nDate : this._htToday.nDate,
					
			sTitleFormat : "yyyy-mm",
			sYearTitleFormat : "yyyy",
			sMonthTitleFormat : "m",
			
			aMonthTitle : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
			bDrawOnload : true
		};
		
		this.option(htDefaultOption);
		this.option(htOption || {});

		var sClassPrefix = this.option("sClassPrefix");
		
		this._initialize();
		this.attachEvent();
		this.setDate(this.option("nYear"), this.option("nMonth"), this.option("nDate"));
		if (this.option("bDrawOnload")) {
			this.draw();
		}
	},
	
	/**
	 * 기준 엘리먼트(달력 레이어 엘리먼트)를 가져온다.
	 * @return {HTMLElement} 달력 레이어
	 */
	getBaseElement : function() {
		return this._elLayer;
	},
	
	/**
	 * 현재 설정된 날짜를 가져온다.
	 * @return {HashTable} 
	 * @example
{
	nYear : 2000,
	nMonth : 1,
	nDate : 31
} 
	 */
	getDate : function() {
		return this._htDate;
	},
	
	/**
	 * 오늘의 정보를 가지는 Hash Table을 가져온다.
	 * @return {HashTable}
	 * @example
{
	nYear : 2000,
	nMonth : 1,
	nDate : 31
}
	 */
	getToday : function() {
		return this._htToday;
	},

	/**
	 * 현재 달력의 날짜를 설정한다.
	 * @param {Number} nYear 연도 값 (ex. 2008)
	 * @param {Number} nMonth 월 값 (1 ~ 12)
	 * @param {Number} nDate 일 값 (1 ~ 31)
	 */
	setDate : function(nYear, nMonth, nDate) {
		this._htDate = {
			nYear : nYear,
			nMonth : (nMonth * 1),
			nDate : (nDate * 1)
		}
	},

	_getShownDate : function() {
		return this.htShownDate || this.getDate();
	},

	_setShownDate : function(nYear, nMonth) {
		this.htShownDate = {
			nYear : nYear,
			nMonth : (nMonth * 1)
		}
	},

	_getFirstDay : function(nYear, nMonth) {
		var oDate = new Date();
		oDate.setDate(15);
		oDate.setYear(nYear);
		oDate.setMonth(nMonth-1);
		oDate.setDate(1);
		return oDate.getDay();
	},

	_getLastDay : function(nYear, nMonth) {
		var oDate = new Date();
		oDate.setDate(15);
		oDate.setYear(nYear);
		oDate.setMonth(nMonth-1);
		oDate.setDate(this._getLastDate(nYear, nMonth));
		return oDate.getDay();
	},

	_getLastDate : function(nYear, nMonth) {
		var oDate = new Date();
		oDate.setDate(15);
		oDate.setYear(nYear);
		oDate.setMonth(nMonth);
		oDate.setDate(1);
		oDate.setDate(0);
		return oDate.getDate();
	},
	
	_getWeeks : function(nYear, nMonth) {
		var nFirstDay = this._getFirstDay(nYear, nMonth);
		var nLastDate = this._getLastDate(nYear, nMonth);
		return Math.ceil((nFirstDay + nLastDate) / 7);	
	},
	
	_getRelativeDate : function(nYear, nMonth, htDate) {
		var htRelativeDate = new Object();
		htRelativeDate.nYear = parseInt(htDate.nYear) + parseInt(nYear);
		htRelativeDate.nMonth = parseInt(htDate.nMonth) + parseInt(nMonth);
		if (htRelativeDate.nMonth > 12) {
			htRelativeDate.nYear += Math.floor((htRelativeDate.nMonth - 1)/12);
			htRelativeDate.nMonth = (htRelativeDate.nMonth % 12 == 0) ? 12 : htRelativeDate.nMonth % 12;
		}
		else if (htRelativeDate.nMonth <= 0) {
			while (htRelativeDate.nMonth <= 0) {
				htRelativeDate.nMonth += 12;
				htRelativeDate.nYear -= 1;
			}
		}
		return htRelativeDate;		
	},
	
	_initialize : function() {
		var sClassPrefix = this.option("sClassPrefix");
		var elLayer = this.getBaseElement();
	
		if (this.elBtnPrevYear = jindo.$$.getSingle(("." + sClassPrefix + "btn-prev-year"), elLayer)) {
			this.wfPrevYear = jindo.$Fn(function(oEvent){
				oEvent.stop(jindo.$Event.CANCEL_DEFAULT);
				this.draw(-1, 0, true);
			}, this);
		}
		if (this.elBtnPrevMonth = jindo.$$.getSingle(("." + sClassPrefix + "btn-prev-mon"), elLayer)) {
			this.wfPrevMonth = jindo.$Fn(function(oEvent){
				oEvent.stop(jindo.$Event.CANCEL_DEFAULT);
				this.draw(0, -1, true);
			}, this);	
		}
				
		if (this.elBtnNextMonth = jindo.$$.getSingle(("." + sClassPrefix + "btn-next-mon"), elLayer)) {
			this.wfNextMonth = jindo.$Fn(function(oEvent){
				oEvent.stop(jindo.$Event.CANCEL_DEFAULT);
				this.draw(0, 1, true);
			}, this);
		}
		if (this.elBtnNextYear = jindo.$$.getSingle(("." + sClassPrefix + "btn-next-year"), elLayer)) {
			this.wfNextYear = jindo.$Fn(function(oEvent){
				oEvent.stop(jindo.$Event.CANCEL_DEFAULT);
				this.draw(1, 0, true);
			}, this);
		}
		
		this.elTitle = jindo.$$.getSingle(("." + sClassPrefix + "title"), elLayer);
		this.elTitleYear = jindo.$$.getSingle(("." + sClassPrefix + "title-year"), elLayer);
		this.elTitleMonth = jindo.$$.getSingle(("." + sClassPrefix + "title-month"), elLayer);
		var elWeekTemplate = jindo.$$.getSingle("." + sClassPrefix + "week", elLayer);
		this.elWeekAppendTarget = elWeekTemplate.parentNode;
		
		this.elWeekTemplate = elWeekTemplate.cloneNode(true);
	},
	
	_setCalendarTitle : function(nYear, nMonth, sType) {

		if (nMonth < 10) {
			nMonth = ("0" + (nMonth * 1)).toString();
		} 
		
		var elTitle = this.elTitle;
		var sTitleFormat = this.option("sTitleFormat");
		var sTitle;
		
		if (typeof sType != "undefined") {
			switch (sType) {
				case "year" :
					elTitle = this.elTitleYear;
					sTitleFormat = this.option("sYearTitleFormat");
					sTitle = sTitleFormat.replace(/yyyy/g, nYear).replace(/y/g, (nYear).toString().substr(2,2));
				break;
				case "month" :
					elTitle = this.elTitleMonth;
					sTitleFormat = this.option("sMonthTitleFormat");
					sTitle = sTitleFormat.replace(/mm/g, nMonth).replace(/m/g, (nMonth * 1)).replace(/M/g, this.option("aMonthTitle")[nMonth-1]); 
				break;
			}
		} else {
			sTitle = sTitleFormat.replace(/yyyy/g, nYear).replace(/y/g, (nYear).toString().substr(2,2)).replace(/mm/g, nMonth).replace(/m/g, (nMonth * 1)).replace(/M/g, this.option("aMonthTitle")[nMonth-1] );
		}  
		
		jindo.$Element(elTitle).text(sTitle);
	},
	
	/**
	 * Calendar를 그린다.
	 * @function
	 * @param {Number} nYear 연도 값 (ex. 2008)
	 * @param {Number} nMonth 월 값 (1 ~ 12)
	 * @param {Boolean} bRelative 연도와 월 값이 상대값인지 여부, 생략 가능
	 * @example
oCalendar.draw(); //현재 설정된 날짜의 달력을 그린다.
oCalendar.draw(2008,12); //2008년 12월 달력을 그린다.
oCalendar.draw(null,12); //현재 표시된 달력의 12월을 그린다.
oCalendar.draw(2010,null); //2010년 현재 표시된 달력의 월을 그린다.
oCalendar.draw(0,1,true); //현재 표시된 달력의 다음 달을 그린다.
oCalendar.draw(-1,null,true); //현재 표시된 달력의 이전 연도를 그린다.
	 */
	draw : function(nYear, nMonth, bRelative) {

		var sClassPrefix = this.option("sClassPrefix");
		
		var oShownDate = this._getShownDate();
		if (oShownDate && typeof bRelative != "undefined" && bRelative) {
			var htRelativeDate = this._getRelativeDate(nYear, nMonth, oShownDate);
			var nYear = htRelativeDate.nYear;
			var nMonth = htRelativeDate.nMonth;
		}
		else if (typeof nYear == "undefined" && typeof nMonth == "undefined" && typeof bRelative == "undefined") {
			var htDate = this.getDate();
			var nYear = htDate.nYear;
			var nMonth = htDate.nMonth;
		}
		else {
			var nYear = nYear || oShownDate.nYear;
			var nMonth = nMonth || oShownDate.nMonth; 
		}
		
		if (!this.fireEvent("beforeDraw", {
			nYear: nYear,
			nMonth: nMonth
		})) {
			return;
		}
		
		if (this.elTitle) {
			this._setCalendarTitle(nYear, nMonth);
		}
		if (this.elTitleYear) {
			this._setCalendarTitle(nYear, nMonth, "year");
		}
		if (this.elTitleMonth) {
			this._setCalendarTitle(nYear, nMonth, "month");
		}
		
		this._clear();
		this._setShownDate(nYear, nMonth);
			
		var htToday = this.getToday();		
		var htDate = this.getDate();
		var nFirstDay = this._getFirstDay(nYear, nMonth);
		var nLastDay = this._getLastDay(nYear, nMonth);
		var nLastDate = this._getLastDate(nYear, nMonth);
		var nWeeks = this._getWeeks(nYear, nMonth);
		
		for (var i = 0; i < nWeeks; i++) {
			jindo.$Element(this.elWeekTemplate.cloneNode(true)).appendTo(this.elWeekAppendTarget);
		}

		var nDay = nFirstDay;
		
		var htDatePrevMonth = this._getRelativeDate(0, -1, {nYear:nYear, nMonth:nMonth});
		var htDateNextMonth = this._getRelativeDate(0, 1, {nYear:nYear, nMonth:nMonth});
		var nPrevMonthLastDate = this._getLastDate(htDatePrevMonth.nYear, htDatePrevMonth.nMonth);	
		var aDays = new Array();

		if (nDay > 0) {
			for (var i = nPrevMonthLastDate - nDay; i < nPrevMonthLastDate; i++) {
				aDays.push(i + 1);
			}
		}
		for (var i = 1; i < nLastDate + 1; i++) {
			aDays.push(i);	
		}
		var nIndexOfLastDate = aDays.length - 1;
		for (var i = 1; i < 7 - nLastDay; i++) {
			aDays.push(i);	
		}

		var elWeeks = jindo.$Element(this.elWeekAppendTarget).child();
		var elDays = jindo.$$("." + sClassPrefix + "date", this.elWeekAppendTarget);
		
		var nDay = 0;
		var nWeek = 0;
		for (i = 0; i < aDays.length; i++) {
			
			if (i != 0 && nDay == 0) {
				nWeek++;
			}
			
			var bPrevMonth = false;
			var bNextMonth = false;
			
			var elTargetDays = jindo.$Element(elWeeks[nWeek]).child();
			var welDay = jindo.$Element(elTargetDays[nDay]);
			var nTempYear = nYear;
			var nTempMonth = nMonth;
			
			if (i < nFirstDay) {
				bPrevMonth = true;
				welDay.addClass(sClassPrefix + "prev-mon");
				nTempYear = htDatePrevMonth.nYear;
				nTempMonth = htDatePrevMonth.nMonth;
			} else if (i > nIndexOfLastDate) {
				bNextMonth = true;
				welDay.addClass(sClassPrefix + "next-mon");				
				nTempYear = htDateNextMonth.nYear;
				nTempMonth = htDateNextMonth.nMonth;
			} else {
				nTempYear = nYear;
				nTempMonth = nMonth
			}
			
			if (nDay == 0) {
				welDay.addClass(sClassPrefix + "sun");
			}
			if (nDay == 6) {
				welDay.addClass(sClassPrefix + "sat");
			}
			if (nTempYear == htToday.nYear && (nTempMonth * 1) == htToday.nMonth && aDays[i] == htToday.nDate) {
				welDay.addClass(sClassPrefix + "today");
			}

			var oParam = {
				element : elDays[i],
				elWrapper : elTargetDays[nDay],
				nYear : nTempYear, 
				nMonth : nTempMonth, 
				nDate : aDays[i],
				bPrevMonth : bPrevMonth,
				bNextMonth : bNextMonth
			};
			if (!this.fireEvent("draw", oParam)) {
				continue;
			}
			jindo.$Element(oParam.element).text(oParam.nDate.toString());
			
			nDay++;
			nDay = nDay % 7;
		}
		this.fireEvent("afterDraw", {
			nYear : nYear, 
			nMonth : nMonth
		});
	},
	
	_clear : function() {
		jindo.$Element(this.elWeekAppendTarget).empty();
	},
	
	attachEvent : function() {
		/*
		 * 이전해
		 */
		if (this.elBtnPrevYear) {
			this.wfPrevYear.attach(this.elBtnPrevYear, "click");
		}
		/*
		 * 이전달
		 */
		if (this.elBtnPrevMonth) {
			this.wfPrevMonth.attach(this.elBtnPrevMonth, "click");
			
		}
		/*
		 * 다음달
		 */
		if (this.elBtnNextMonth) {
			this.wfNextMonth.attach(this.elBtnNextMonth, "click");			
		}
		/*
		 * 다음해
		 */
		if (this.elBtnNextYear) {
			this.wfNextYear.attach(this.elBtnNextYear, "click");
		}
	},
	
	detachEvent : function() {
		/*
		 * 이전해
		 */
		if (this.elBtnPrevYear) {
			this.wfPrevYear.detach(this.elBtnPrevYear, "click");
		}
		/*
		 * 이전달
		 */
		if (this.elBtnPrevMonth) {
			this.wfPrevMonth.detach(this.elBtnPrevMonth, "click");
			
		}
		/*
		 * 다음달
		 */
		if (this.elBtnNextMonth) {
			this.wfNextMonth.detach(this.elBtnNextMonth, "click");			
		}
		/*
		 * 다음해
		 */
		if (this.elBtnNextYear) {
			this.wfNextYear.detach(this.elBtnNextYear, "click");
		}
	}
}).extend(jindo.Component);
﻿/**
 * @fileOverview 특정영역을 강조하기 위해 이외의 부분전체를 안개처럼 뿌옇게 가려주는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.Foggy = jindo.$Class({
	/** @lends jindo.Foggy */
	_elFog : null,
	_bFogAppended : false,
	_oExcept : null,
	_bFogVisible : false,
	_oTransition : null,
	/**
	 * Foggy 컴포넌트를 생성한다.
	 * Foggy 컴포넌트는 특정영역을 highlighting하기 위해 이외의 부분을 안개처럼 뿌옇게 가려주는 기능을 한다.
	 * @constructs 
	 * @extends jindo.Component
	 * @requires jindo.Effect
	 * @requires jindo.Transition
	 * @requires jindo.Timer
	 * @param {Object} oOptions
	 * @example
var foggy = new jindo.Foggy({
	nShowDuration : 200, //(Number) fog 레이어가 완전히 나타나기까지의 시간 (ms)
	nShowOpacity : jindo.Effect.linear(1), //(jindo.Effect) fog 레이어가 보여질 때의 transition 효과와 투명도 (0~1사이의 값)    
	nHideDuration : 200, //(Number) fog 레이어가 완전히 사라지기까지의 시간 (ms)
	nHideOpacity : jindo.Effect.linear(0), //(jindo.Effect) fog 레이어가 숨겨질 때의 transition 효과와 투명도 (0~1사이의 값)
	sEffect : "linear", // (String) jindo.Effect의 종류
	nFPS : 15 //(Number) 효과가 재생될 초당 frame rate
}).attach({
	show : function() {
		//fog 레이어가 화면에 보여지고나서 발생
	},
	hide : function() {
		//fog 레이어가 화면에서 숨겨지고나서 발생
	}
});

//컴포넌트에 의해 생성된 fog레이어에 대한 설정
foggy.getFog().className = 'fog'; 
foggy.getFog().onclick = function() { foggy.hide(); };
	 */
	$init : function(oOptions) {
		
		this.option({
			nShowDuration : 200,
			nShowOpacity : 0.5,
			nHideDuration : 200,
			nHideOpacity : 0,
			sEffect : "linear",
			nFPS : 15
		});
		
		this.option(oOptions || {});
		
		this._elFog = jindo.$('<div>');
		//this._elFog.style.position = 'fixed'; //ie6 fixed 안됨 ㅠㅠ
		
		this._bFogAppended = false;
		this._oExcept = {};
		
		this._oTransition = new jindo.Transition().fps(this.option("nFPS"));
		
		this._fOnResize = jindo.$Fn(this._fitFogToDocument, this);
		this._fOnScroll = jindo.$Fn(this._fitFogToDocumentScrollSize, this);
	},
	
	_appendFog : function() {
		if (this._bFogAppended) return;
		document.body.insertBefore(this._elFog, document.body.firstChild);
		jindo.$Element(this._elFog).opacity(0);
		this._bFogAppended = true;
	},
	
	_getScroll : function(wDocument) {
		var o = {
			top : 0,
			left : 0
		}
		
		o.top = window.pageYOffset || document[wDocument._docKey].scrollTop;
		o.left = window.pageXOffset || document[wDocument._docKey].scrollLeft;
		return o;
	},
	
	_fitFogToDocument : function() {
		
		var wDocument = jindo.$Document(); 

		this._elFog.style.left = this._getScroll(wDocument).left + 'px';		 
		this._elFog.style.width = wDocument.clientSize().width + 'px';
		
		var self = this;
		clearTimeout(this._nTimer);
		this._nTimer = null;

		//가로스크롤이 생겼다 사라지는경우의 버그를 수정하기위한 setTimeout		
		this._nTimer = setTimeout(function(){
		
			var oSize = wDocument.clientSize();
			 
			self._elFog.style.top = self._getScroll(wDocument).top + 'px';
			self._elFog.style.height = oSize.height + 'px';
			
			self._elFog.style.left = self._getScroll(wDocument).left + 'px';		 
			self._elFog.style.width = wDocument.clientSize().width + 'px';
			
		}, 100);
		
	},
	_fitFogToDocumentScrollSize : function() {
		var oSize = jindo.$Document().scrollSize();
		this._elFog.style.left = "0";
		this._elFog.style.top = "0";
		this._elFog.style.width = oSize.width + 'px';
		this._elFog.style.height = oSize.height + 'px';
	},

	/**
	 * 생성된 fog 레이어 엘리먼트를 가져온다.
	 * @return {HTMLElement} fog 레이어 엘리먼트
	 */
	getFog : function() {
		return this._elFog;
	},
	
	/**
	 * fog 레이어를 보여준다. (elExcept는 가리지 않는다.)
	 * @param {HTMLElement} elExcept
	 */
	show : function(elExcept) {
		
		var self = this;
		
		if (this._bFogVisible) return;
		
		if (elExcept) {
			this._oExcept.element = elExcept;
			var sPosition = jindo.$Element(elExcept).css('position');
	
			if (sPosition == 'static') {
				this._oExcept.position = elExcept.style.position;
				elExcept.style.position = 'relative';
			}

			this._oExcept.zIndex = elExcept.style.zIndex;
			elExcept.style.zIndex = 32001;
		}
		
		this._elFog.style.zIndex = 32000;
		this._elFog.style.display = 'none';
		
		this._appendFog();
		this._fitFogToDocument();
		this._fOnResize.attach(window, "resize");
		this._fOnScroll.attach(window, "scroll");
		
		this._elFog.style.display = 'block';
		this._bFogVisible = true;
		
		this._oTransition.start(this.option('nShowDuration'),
			this._elFog, { '@opacity' : jindo.Effect[this.option("sEffect")](this.option('nShowOpacity')) }
		).precede(function() {
			self.fireEvent('show');
		});
		
	},
	
	/**
	 * fog 레이어를 숨긴다.
	 */
	hide : function() {
		
		var self = this;
		
		if (!this._bFogVisible) return;
		
		this._bFogVisible = false;

		this._oTransition.start(this.option('nHideDuration'),
			this._elFog, { '@opacity' : jindo.Effect[this.option("sEffect")](this.option('nHideOpacity')) }
		).precede(function() {
			self._elFog.style.display = 'none';
			
			var elExcept = self._oExcept.element;
			if (elExcept) {
				if (self._oExcept.position) elExcept.style.position = self._oExcept.position;
				elExcept.style.zIndex = self._oExcept.zIndex;
			}
			this._oExcept = {};
			self._fOnResize.detach(window, "resize");
			self._fOnScroll.detach(window, "scroll");
			
			self.fireEvent('hide');
		});
		
	}
	
}).extend(jindo.Component);
﻿/**
 * @fileOverview 일정 영역내의 값을 선택하기에 마우스 클릭 또는 드래그로 선택하는 슬라이더 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */

jindo.Slider = jindo.$Class({
	/** @lends jindo.Slider */				
	_elTrack : null,

	_oDragArea : null,
					
	_aThumbs : null,
	
	_aPoses : null,
	_htSwap : null,
	
	/**
	 * Slider 컴포넌트를 생성한다.
	 * @constructs
	 * @param {String | HTMLElement} el Thumb이 움직이는 바탕이 되는 Track Element (id 혹은 엘리먼트 자체)
	 * @param {Object} oOptions 옵션 객체
	 * @extends jindo.UIComponent
	 * @requires jindo.DragArea
	 * @example
var alpha = new jindo.Slider($('alpha'), {
	 bVertical : false, //슬라이더 세로 여부
	 bJump : true, 
	 sClassPrefix : 'slider-',
	 nMinValue : 0, 
	 nMaxValue : 1,
	 fAdjustValue : ,(Function) 값을 조절하기 위한 함수
	 bActivateOnload : true //(Boolean) 컴포넌트 로드시 activate 여부
}).attach({
	beforeChange : function(oCustomEvent) {
		//Thumb이 움직이기 전에 발생
		//oCustomEvent.stop()을 실행하면 change 이벤트가 발생하지 않고 중단된다.
	},
	change : function(oCustomEvent) {
		//Thumb을 Drop한 이후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nIndex : (Number)
		//	nPos : (Number)
		//	nValue : (Number)
		//}
	}
});
	 */
	
	$init : function(el, oOptions) {
		
		this.option({
			bVertical : false,
			bJump : true,
			sClassPrefix : 'slider-',
			fAdjustValue : null,
			nMinValue : 0,
			nMaxValue : 1,
			bActivateOnload : true
		});
		
		this.option(oOptions || {});
		
		if (!this.option('bVertical')) {
			this._htSwap = {
				y : 'nY',
				x : 'nX',
				clientX : 'clientX',
				pageX : 'pageX',
				offsetWidth : 'offsetWidth',
				left : 'left'
			};
		} else {
			this._htSwap = {
				y : 'nX',
				x : 'nY',
				clientX : 'clientY',
				pageX : 'pageY',
				offsetWidth : 'offsetHeight',
				left : 'top'
			};
		}
		
		this._sRand = 'S' + parseInt(Math.random() * 100000000);

		this._elTrack = jindo.$(el);
		// Thumbs 들과 각각의 값을 저장할 공간 만들기
		this._aThumbs = jindo.$$('.' + this.option('sClassPrefix') + 'thumb', this._elTrack);
		var thumbs = jindo.$ElementList(this._aThumbs);
		thumbs.addClass(this._sRand);

		this._aPoses = [];
		
		this._onTrackMouseDownFn = jindo.$Fn(this._onTrackMouseDown, this);
		
		this._initDragArea();
		
		if (this.option("bActivateOnload")){
			this.activate();		
			this._detectChange();
		}
	},
	
	/**
	 * Track 엘리먼트를 구한다.
	 * @return {HTMLElement} 
	 */
	getTrack : function() {
		return this._elTrack;
	},
	
	/**
	 * n번째 Thumb 엘리먼트를 구한다.
	 * @param {Number} nIndex
	 * @return {HTMLElement} 
	 */
	getThumb : function(nIndex) {
		return this._aThumbs[nIndex];
	},
	
	_initDragArea : function() {
		var self = this;
		var htSwap = this._htSwap;
		
		// 컴퍼넌트 내부에서 사용하는 다른 컴퍼넌트 초기화
		this._oDragArea = new jindo.DragArea(this._elTrack, { 
			sClassName : this._sRand, 
			bFlowOut : false 
		}).attach({
																								   
			'beforeDrag' : function(oCustomEvent) {
				var nIndex = self._getThumbIndex(oCustomEvent.elHandle)
				
				//var nAfterPos = 
				var htParam = { 
					nIndex : nIndex,
					nPos : oCustomEvent[htSwap.x],
					bJump : false
				};
				if (!self.fireEvent('beforeChange', htParam)) {
					return false;
				};
				var nAfterPos = self._getAdjustedPos(nIndex, htParam.nPos);
				if (nAfterPos === false) return e.stop();
				
				oCustomEvent[htSwap.x] = nAfterPos;
				
				oCustomEvent[htSwap.y] = null;
			},
			
			'drag' : function(oCustomEvent) {
											  
				var nIndex = self._getThumbIndex(oCustomEvent.elHandle);
				self._fireChangeEvent(nIndex);
				
			}
		});
	},
	
	/**
	 * 적용된 DragArea 객체를 가져온다.
	 * @return {jindo.DragArea}
	 */
	getDragArea : function() {
		return this._oDragArea; 
	},
	
	_fireChangeEvent : function(nIndex) {
		var sAdjustBy = this.option('adjustBy');
		
		if (!this._detectChange()) return;
		
		var nPos = this._aPoses[nIndex];
		
		var htParam = {
			nIndex : nIndex,
			nPos : nPos,
			nValue : this._getValue(nIndex, nPos)
		};

		this.fireEvent('change', htParam);
	},

	/**
	 * 컴포넌트를 활성화시킨다.
	 */
	_onActivate : function() {
		this.getDragArea().activate();
		this._onTrackMouseDownFn.attach(this._elTrack, 'mousedown');
	},
	
	/**
	 * 컴포넌트를 비활성화시킨다.
	 */
	_onDeactivate : function() {
		this.getDragArea().deactivate();
		this._onTrackMouseDownFn.detach(this._elTrack, 'mousedown');
	},
	
	_onTrackMouseDown : function(e) {
		var self = this;
		if (!this.option('bJump')) return;
		
		// Thumb 이 하나일때만 동작
		//if (this._aThumbs.length != 1) return;
		
		var nIndex = 0;
		var htSwap = this._htSwap;

		var el = e.element;
		var sClass = '.' + this.option('sClassPrefix') + 'thumb';
		var bThumb = jindo.$$.test(el, sClass) || jindo.$$.getSingle('! ' + sClass, el);

		if (bThumb) return;

		var nPos = e.pos()[htSwap.pageX]; // 클릭한 위치
		nPos -= jindo.$Element(this._elTrack).offset()[htSwap.left];
		
		var nMaxDistance = 9999999;;
		
		// 가장 가까운 Thumb 찾기
		for (var i = 0, oThumb; oThumb = this._aThumbs[i]; i++) {
			
			var nThumbPos = parseInt(jindo.$Element(oThumb).css(htSwap.left)) || 0;
			nThumbPos += parseInt(oThumb[htSwap.offsetWidth] / 2);
			
			var nDistance  = Math.abs(nPos - nThumbPos);
			
			if (nDistance < nMaxDistance) {
				nMaxDistance = nDistance;
				nIndex = i;
			}
		}

		var oThumb = this._aThumbs[nIndex];
		nPos -= parseInt(oThumb[htSwap.offsetWidth] / 2);
		
		e.stop(jindo.$Event.CANCEL_DEFAULT);
		this.positions(nIndex, nPos);
	},
	
	_getTrackInfo : function(nIndex) {
		var htSwap = this._htSwap;
		var oThumb = this._aThumbs[nIndex];
		
		var nThumbSize = oThumb[htSwap.offsetWidth];
		var nTrackSize = this._elTrack[htSwap.offsetWidth];
		
		var nMaxPos = nTrackSize - nThumbSize;

		var nMax = this.option('nMaxValue');
		var nMin = this.option('nMinValue');
		
		return {
			maxPos : nMaxPos,
			max : nMax,
			min : nMin
		};
	},
	
	/**
	 * 옵션의 fAdjustValue가 적용된 value를 구한다.
	 * @param {Object} nIndex
	 * @param {Object} nPos
	 * @ignore
	 */
	_getValue : function(nIndex, nPos) {
		if (typeof nPos == 'undefined') {
			nPos = this._aPoses[nIndex];
		}

		var oInfo = this._getTrackInfo(nIndex);
		var nValue = Math.min(Math.max(nPos * (oInfo.max - oInfo.min) / oInfo.maxPos + oInfo.min, oInfo.min), oInfo.max);

		var fAdjust;
		if (fAdjust = this.option('fAdjustValue'))
			nValue = fAdjust.call(this, nValue);
		
		return nValue;
	},
	
	/**
	 * 옵션의 fAdjustValue가 적용된 포지션을 구한다.
	 * @param {Object} nIndex
	 * @param {Object} nPos
	 * @ignore
	 */
	_getAdjustedPos : function(nIndex, nPos) {
		var nAdjustedPos = nPos;
		var oInfo = this._getTrackInfo(nIndex);

		var fAdjust;
		if (fAdjust = this.option('fAdjustValue')) {
			
			var nValue = Math.min(Math.max(nAdjustedPos * (oInfo.max - oInfo.min) / oInfo.maxPos + oInfo.min, oInfo.min), oInfo.max);
			var nAfterValue = fAdjust.call(this, nValue);
			
			if (nValue != nAfterValue) {
				nAdjustedPos = oInfo.maxPos * (nAfterValue - oInfo.min) / (oInfo.max - oInfo.min);
			}
			
		}
		
		nAdjustedPos = Math.max(nAdjustedPos, 0);
		nAdjustedPos = Math.min(nAdjustedPos, oInfo.maxPos);
		
		return nAdjustedPos;		
	},
	
	_detectChange : function() {
		var aPoses = this.positions();
		var bDiff = false;
		
		for (var i = 0, len = aPoses.length; i < len; i++)
			if (aPoses[i] !== this._aPoses[i]) bDiff = true;
		
		this._aPoses = aPoses;
		return bDiff;
	},
	
	_getThumbIndex : function(oThumb) {
		for (var i = 0, len = this._aThumbs.length; i < len; i++)
			if (this._aThumbs[i] == oThumb) return i;
			
		return -1;
	},
	/**
	 * pixel단위로 Thumb의 위치값을 가져오거나 설정한다.
	 * @param {Number} nIndex 위치값을 가져올 Thumb의 index (생략시 모든 Thumb의 위치값 배열을 리턴)
	 * @param {Number} nPos 설정할 위치값(pixel단위)
	 * @param {Boolean} bFireEvent 커스텀이벤트를 발생할지의 여부
	 * @return {Number | Array | jindo.Slider} 설정시에는 객체 자체를 리턴
	 * @example 
	 * oSlider.positions(0);
	 * oSlider.positions();
	 * oSlider.positions(0, 100);
	 */
	positions : function(nIndex, nPos, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;	
		}
		var htSwap = this._htSwap;

		switch (arguments.length) {
		case 0:
			var aPoses = [];
	
			for (var i = 0, len = this._aThumbs.length; i < len; i++)
				aPoses[i] = this.positions(i);
			
			return aPoses;
			
		case 1:
			return parseInt(jindo.$Element(this._aThumbs[nIndex]).css(htSwap.left));
			
		default:
			if (bFireEvent) {
				
				var htParam = { 
					nIndex : nIndex,
					nPos : nPos,
					bJump : true
				};
				if (!this.fireEvent('beforeChange', htParam)) {
					return false;
				};
				var nAfterPos = this._getAdjustedPos(nIndex, htParam.nPos);
				if (nAfterPos === false) return this;
				
			    jindo.$Element(this._aThumbs[nIndex]).css(htSwap.left, nAfterPos + 'px');
			    this._fireChangeEvent(nIndex);
			    return this;	
			}
		
			var nAfterPos = this._getAdjustedPos(nIndex, nPos);
		    jindo.$Element(this._aThumbs[nIndex]).css(htSwap.left, nAfterPos + 'px');
		    return this;
		} 
	},
	/**
	 * 옵션으로 설정한 nMinValue, nMaxValue에 대한 상대값으로 해당 Thumb의 위치값을 가져오거나 설정한다.
	 * @param {Number} nIndex Value를 가져올 Thumb의 index (생략시 모든 Thumb의 위치값 배열을 리턴)
	 * @param {Number} nValue 설정할 위치값
	 * @param {Boolean} bFireEvent 커스텀이벤트를 발생할지의 여부
	 * @return {Number | Array | jindo.Slider} 설정시에는 객체 자체를 리턴
	 * @example 
	 * oSlider.values(0);
	 * oSlider.values();
	 * oSlider.values(0, 0.5);
	 */
	values : function(nIndex, nValue, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;	
		}
		
		switch (arguments.length) {
		case 0:
			var aValues = [];
			
			for (var i = 0, len = this._aThumbs.length; i < len; i++)
				aValues[i] = this._getValue(i);
				
			return aValues;
			
		case 1:
			return this._getValue(nIndex, this.positions(nIndex)); //수정

		default:
			var oInfo = this._getTrackInfo(nIndex);
			this.positions(nIndex, (nValue - oInfo.min) * oInfo.maxPos / (oInfo.max - oInfo.min), bFireEvent);
			return this;
		}
	}
}).extend(jindo.UIComponent);﻿/**
 * @fileOverview 클립보드를 컨트롤하는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.5
 */

nhn.Clipboard = jindo.$Class({
	/** @lends jindo.Clipboard */
	_aElement : null,
	_aData : null,
	_elOvered : null,
	_bFailed : true,
	
	/**
	 * Clipboard 컴포넌트를 생성한다. 플래시로드를 위해 flashObject.js 파일을 사용한다. 
	 * @constructs
	 * @extends jindo.Component
	 * @see <a href="http://devcafe.jindocorp.com/?vid=flashdev&mid=board_6&document_srl=60932" target="_blank">flashObject</a> 
	 * @see <a href="http://flashdev.naver.com/js_standard/reference.html" target="_blank">flashObject API</a>
	 * @param {String} sFlashURL 클립보드를 제어할 플래시파일 주소
	 * @example
<span id="foo">클립보드에 "http://naver.com/" 복사하기</span>
<script>
	oClipboard = new jindo.Clipboard('../Sources/clipboard.swf').attach({
		load : function(e) {
			//클립보드 제어를 위한 Flash 파일이 로드 완료된 이후에 발생
			this.setData($('foo'), 'http://naver.com/');
			this.setData($('bar'), 'http://daum.net/');
		},
		copy: function(e){
			//마우스 클릭시 성공적으로 클립보드가 설정된 경우 발생
			alert(e.element + ' 를 눌러서 ' + e.data + ' 가 클립보드에 저장되었습니다');
		},
		failure: function(e){
			//마우스 클릭시 클립보드 설정에 실패한 경우 발생
			alert('실패 : ' + e.element + ' 를 눌렀지만 ' + e.data + ' 를 클립보드에 저장하지 못했습니다');
		}
	});
</script>
	 */
	$init : function(sFlashURL) {
		
		this._flashURL = sFlashURL;
		
		var oStatic = nhn.Clipboard; //구버전 진도 (0.3.5 이하) $Class에는 constructor프로퍼티가 존재하지 않음
		
		var nGap = jindo.$Agent().navigator().ie && window.external ? 2 : 0;
		
		var sFlashUID = this._unique = 'S' + new Date().getTime() + parseInt(Math.random() * 1000000000);
		
		if (typeof oStatic._callbacks) oStatic._callbacks = {};
		oStatic._callbacks[this._unique] = {
			click : jindo.$Fn(this._onFlashClick, this).bind(),
			mouseover : jindo.$Fn(this._onFlashMouseOver, this).bind(),
			mouseout : jindo.$Fn(this._onFlashMouseOut, this).bind(),
			mousedown : jindo.$Fn(this._onFlashMouseDown, this).bind(),
			mouseup : jindo.$Fn(this._onFlashMouseUp, this).bind(),
			load : jindo.$Fn(this._onFlashLoad, this).bind()
		};
		
		this._aElement = [];
		this._aData = [];
		
		this._initFlash();
		
		this._wfHandler = jindo.$Fn(function(oEvent) {
			this._initFlash();
			
			var el = oEvent.currentElement;
			var htPosition = jindo.$Element(el).offset();
			
			var oPos = oEvent.pos();
			this._setFlashPosSize(htPosition.left, htPosition.top, el.offsetWidth, el.offsetHeight);
			
			this._setClipboard(el, this._getData(el));
			this._elOvered = el;
		}, this);
		
	},
	
	_initFlash : function() {
		if (this._elDummy) {
			return;
		}
		var elDummy = this._elDummy = jindo.$('<div>');
		var sFlashUID = this._unique;
		
		elDummy.style.cssText = 'position:absolute !important; border:0 !important; padding:0 !important; margin:0 !important; overflow:visible !important; z-index:32000 !important;';
		document.body.insertBefore(elDummy, document.body.firstChild);
		
		var sFlashHtml = nhn.FlashObject.generateTag(this._flashURL + '?' + new Date().getTime(), 'CLIPBOARD' + sFlashUID, 1, 1, {flashVars : { sUniq : sFlashUID }, wmode : 'transparent'}); //Flashvars로 sUniq 전달
		sFlashHtml = sFlashHtml.replace(/style="position:relative !important;"/gi, 'style="position:absolute !important; left:0 !important; top:0 !important; border:0 !important; padding:0 !important; margin:0 !important;"');
		elDummy.innerHTML = sFlashHtml;
		jindo.$Fn(this._checkFailed, this).attach(elDummy, 'click');
	},
	
	_setFlashPosSize : function(nLeft, nTop, nWidth, nHeight) {
		var sFlashUID = this._unique;

		var elDummy = this._elDummy;
		elDummy.style.left = nLeft + 'px';
		elDummy.style.top = nTop + 'px';
		
		var oFlash = nhn.FlashObject.find('CLIPBOARD' + sFlashUID);
		oFlash.width = nWidth;
		oFlash.height = nHeight;
		oFlash.style.width = nWidth + 'px';
		oFlash.style.height = nHeight + 'px';
	},
	
	/**
	 * 특정 엘리먼트를 클릭하면 지정된 값을 클립보드에 저장하도록 설정한다.
	 * @remark setData메소드는 반드시 Flash 객체의 로드가 완료된 이후에 수행되어야한다. load 커스텀이벤트핸들러 내에서 수행하는 것을 권장한다.
	 * @example
oClipboard.attach({
	load : function(e) {
		//클립보드 제어를 위한 Flash 파일이 로드 완료된 이후에 발생
		this.setData($('foo'), 'http://naver.com/');
		this.setData($('bar'), 'http://daum.net/');
	}
});
	 * @param {HTMLElement | String} el 지정할 엘리먼트 혹은 id
	 * @param {String} sData 저장할 값. 빈 값이면 설정된 값을 해제한다.
	 */
	setData : function(el, sData) {
		
		var el = jindo.$(el);
		
		var nIndex = jindo.$A(this._aElement).indexOf(el);
		var bExist = nIndex != -1;
		
		if (typeof sData == 'undefined' && bExist) { // 지워야 하는 상황이면
			this._wfHandler.detach(el, 'mousemove');
			
			this._aElement.splice(nIndex, 1);
			this._aData.splice(nIndex, 1);

			this._setFlashPosSize(0, 0, 1, 1);
			return;
		}

		if (el == this._elOvered) {
			this._setClipboard(el, sData);
		}

		if (bExist) { // 바꿔야 하는 상황
			this._aData[nIndex] = sData;
			return;
		}
		
		// 새로 만들어야 하는 상황
		this._wfHandler.attach(el, 'mousemove');
		
		this._aElement.push(el);
		this._aData.push(sData);
		
	},
	
	_getData : function(el) {
		var nIndex = jindo.$A(this._aElement).indexOf(el);
		return this._aData[nIndex];
	},
	
	_setClipboard : function(el, sData) {
		if (sData == this._applied) return;
		this._lastestData = sData;

		var sFlashUID = this._unique;
		var oFlash = nhn.FlashObject.find('CLIPBOARD' + sFlashUID);
		var sCursor = (jindo.$Element(el).css('cursor') || '').toUpperCase();
		var bHandCursor = sCursor == 'POINTER' || sCursor == 'HAND';
		
		try {
			oFlash.setClipboardData(sData);
			oFlash.setClipboardOptions({ cursor : bHandCursor ? 'pointer' : 'default' });
			
			this._applied = sData;
			this._bFailed = false;
		} catch(e) {
			this._bFailed = true;
		}
	},
	
	_checkFailed : function() {
		if (this._bFailed) {
			// 예전에 externalInterface 쓸때 실패했으면
			this.fireEvent('failure', {
				element: this._elOvered,
				data: this._lastestData
			});
		}
	},
	
	_onFlashClick : function(sData) { 
		this.fireEvent('copy', { element : this._elOvered, data : sData }); 
	},
	_onFlashMouseOver : function() { 
		this.fireEvent('over', { element : this._elOvered }); 
	},
	_onFlashMouseOut : function() { 
		this.fireEvent('out', { element : this._elOvered }); 
	},
	_onFlashMouseDown : function() { 
		this.fireEvent('down', { element : this._elOvered }); 
	},
	_onFlashMouseUp : function() { 
		this.fireEvent('up', { element : this._elOvered }); 
	},
	_onFlashLoad : function() { 
		this.fireEvent('load'); 
	}
}).extend(jindo.Component);
/**
 * @fileOverview Text Input에 입력값이 없을 경우 "입력해주세요"와 같이 기본 안내 문구를 등록한다
 * @author senxation
 * @version 0.2
 */

jindo.DefaultTextValue = jindo.$Class({
	/** @lends jindo.DefaultTextValue */
		
	_bIsActivating : false, //컴포넌트의 활성화 여부

	/**
	 * 컴포넌트를 생성한다.
	 * input[type=text] 나 textarea에 적용될 수 있다.
	 * @constructs
	 * @param {HTMLElement} el 베이스(기준) 엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 * @extends jindo.UIComponent
	 */
	$init : function(el, htOption) {
		
		//옵션 초기화
		var htDefaultOption = {
			sValue : "", //입력창에 기본으로 보여줄 값
			bActivateOnload : true //로드시 컴포넌트 활성화여부
		}
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		//Base 엘리먼트 설정
		this._elBaseTarget = jindo.$(el);
		this._wfOnFocus = jindo.$Fn(this._onFocus, this);
		this._wfOnBlur = jindo.$Fn(this._onBlur, this);

		//활성화
		if(this.option("bActivateOnload")) {
			this.activate(); //컴포넌트를 활성화한다.	
		}
	},

	/**
	 * 컴포넌트의 베이스 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this._elBaseTarget;
	},
	
	/**
	 * input의 value를 디폴트 값으로 설정한다.
	 */
	setDefault : function() {
		this.getBaseElement().value = this.option("sValue");
	},
	
	/**
	 * 입력창에 기본으로 보여줄 값을 설정한다.
	 * @param {Object} sValue
	 */
	setDefaultValue : function(sValue) {
		var sOldValue = this.option("sValue");
		this.option("sValue", sValue);
		if (this.getBaseElement().value == sOldValue) {
			this.setDefault();
		}
	},
	
	/**
	 * 입력창에 기본으로 보여줄 값을 가져온다.
	 */
	getDefaultValue : function() {
		return this.option("sValue");
	},
	
	/**
	 * 컴포넌트의 활성여부를 가져온다.
	 * @return {Boolean}
	 */
	isActivating : function() {
		return this._bIsActivating;
	},

	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		//초기화시 Input의 값이 없을 경우에만 Default Text로 변경
		var elInput = this.getBaseElement();
		if (elInput.value == "") {
			this.setDefault();
		}
		this._wfOnFocus.attach(elInput, "focus");
		this._wfOnBlur.attach(elInput, "blur");
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		this._wfOnFocus.detach(elInput, "focus");
		this._wfOnBlur.detach(elInput, "blur");
	},
	
	_onFocus : function(we) {
		var sDefaultValue = this.getDefaultValue();
		var sValue = we.element.value;
		if (sValue == sDefaultValue) {
			we.element.value = "";
		}
	},
	
	_onBlur : function(we) {
		var sValue = we.element.value;
		if (jindo.$S(sValue).trim().$value() == "") {
			this.setDefault();
		}
	}
}).extend(jindo.UIComponent);	﻿/**
 * @fileOverview 드래그하는동안 드래그되는 엘리먼트가 마우스 커서를 가리는 경우 사용하는 DropArea 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.MagneticDropArea = jindo.$Class({
	/** @lends jindo.MagneticDropArea */
	/**
	 * MagneticDropArea 컴포넌트를 생성한다.
	 * MagneticDropArea 컴포넌트는 드래그하는동안 드래그되는 엘리먼트가 마우스 커서를 가리는 경우 사용한다. 
	 * 반드시 DragArea 컴포넌트가 생성된 이후 그 인스턴스를 참조하여 초기화하여야한다.
	 * @constructs
	 * @extends jindo.DropArea
	 * @param {Object} el Drop될 엘리먼트들의 상위 기준 엘리먼트. 컴포넌트가 적용되는 영역(Area)이 된다.
	 * @param {HashTable} htOption 옵션 객체
	 * @see jindo.DragArea
	 * @example
drag = new jindo.DragArea(document, { sClassName : 'dragable' });
drop = new jindo.MagneticDropArea(document, { 
	sClassName : 'dropable', // (String) 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트는 Drop 가능하게 된다. 
	oDragInstance : drag, // (jindo.DragArea) Drop이 될 대상인 DragArea 컴포넌트의 인스턴스
	bCheckOutside : false  // (Boolean) 마우스 커서가 Drop이 될 대상 엘리먼트 밖에 있어도 over, move, out 이벤트가 발생할지 여부  
}).attach({
	dragStart : function(oCustomEvent) {
		//dragInstance의 dragstart 이벤트에 연이어 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 될 엘리먼트 (핸들을 드래그하여 레이어 전체를 드래그되도록 하고 싶으면 이 값을 설정한다. 아래 예제코드 참고)
		//	weEvent : ($Event) 마우스 이동 중 발생되는 jindo.$Event 객체
		//};
	},
	dragEnd : function(oCustomEvent) {
		//dragInstance의 dragend 이벤트에 연이어 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 된 엘리먼트
		//	weEvent : ($Event) 마우스 이동 중 발생되는 jindo.$Event 객체
		//	nX : (Number) 드래그 된 x좌표.
		//	nY : (Number) 드래그 된 y좌표.
		//}
	},
	over : function(oCustomEvent) {
		//Drag된 채 Drop 가능한 엘리먼트에 마우스 커서가 올라갈 경우 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) Drop 될 엘리먼트
		//}
	},
	move : function(oCustomEvent) {
		//Drag된 채 Drop 가능한 엘리먼트위에서 마우스 커서가 움직일 경우 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	weEvent : ($Event) 마우스 이동시 발생하는 jindo의 $Event 객체 
		//	element : (HTMLElement) Drop 될 엘리먼트
		//	nRatioX : (Number) 드랍될 엘리먼트 내부의 좌우비율
		//	nRatioY : (Number) 드랍될 엘리먼트 내부의 상하비율
		//}
	},
	out : function(oCustomEvent) {
		//Drag된 채 Drop 가능한 엘리먼트에서 마우스 커서가 벗어날 경우 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) Drop 될 엘리먼트
		//}
	}
});
	 */
	$init : function(el, htOption) {
		this._wfMouseMove = jindo.$Fn(this._onMouseMove, this);
		
		var oDrag = this.option('oDragInstance');
		if (oDrag) {
			var self = this;
			oDrag.attach({
				'dragStart' : function() { 
					self._wfMouseMove.attach(document, 'mousemove'); 
				},
				'dragEnd' : function() { 
					self._wfMouseMove.detach(document, 'mousemove'); 
				}
			});
			
		} else {
			this._wfMouseMove.attach(document, 'mousemove');
		}

		this.reCalculate();
	},
	
	_getDistance : function(nX, nY, htRect) {
		var nLeft = htRect.left - nX;
		var nTop = htRect.top - nY;
		var nRight = htRect.right - nX;
		var nBottom = htRect.bottom - nY;
		
		return Math.min(
			nLeft * nLeft + nTop * nTop,
			nRight * nRight + nTop * nTop,
			nLeft * nLeft + nBottom * nBottom,
			nRight * nRight + nBottom * nBottom
		);
	},
	
	_onMouseMove : function(we) {
		var oDrag = this.option('oDragInstance');
		if (oDrag && !oDrag.isDragging()){
			return;
		} 
		
		var oPos = we.pos();
		var aItemRect = this._aItemRect;
		var aItem = this._aItem;
		var htRect = this._htAreaRect;
		
		// rect 안에서 움직이는게 아니면 중단
		if (htRect && !(
			htRect.nLeft <= oPos.pageX && oPos.pageX <= htRect.bRight &&
			htRect.nTop <= oPos.pageY && oPos.pageY <= htRect.nBottom
		)) {
			this._clearOveredTarget();
			return;
		}
		
		var bCheckOutside = this.option('checkOutside');

		var nMinDistance = 9999999;
		var nMinDistanceIndex = -1;
		
		var fDistanceCallback = this.option('getDistanceCallback');
		
		for (var i = 0, htRect; htRect = aItemRect[i]; i++) {
			var elInside = aItem[i];
			
			if (fDistanceCallback && !fDistanceCallback.call(this, elInside)) {
				continue;
			}
			
			if (bCheckOutside) {
				var nDistance = this._getDistance(oPos.pageX, oPos.pageY, htRect);
				
				if (nMinDistance > nDistance) {
					nMinDistance = nDistance;
					nMinDistanceIndex = i;
				}
			}
			
			if ( htRect.nLeft <= oPos.pageX && oPos.pageX <= htRect.nRight && htRect.nTop <= oPos.pageY && oPos.pageY <= htRect.nBottom ) {
				this._addOveredTarget(elInside);
				if (!bCheckOutside) {
					this._fireMoveEvent(elInside, htRect, oPos, we);
				}
			} else {
				this._removeOveredTarget(elInside);
			}
			
		}
		
		var nIndex = nMinDistanceIndex;
		if (nIndex != -1) {
			this._fireMoveEvent(aItem[nIndex], aItemRect[nIndex], oPos,we);
		}
	},

	_toRect : function(el) {
		var htOffset = jindo.$Element(el).offset();	
		return {
			"nLeft" : htOffset.left,
			"nTop" : htOffset.top,
			"nRight" : htOffset.left + el.offsetWidth,
			"nBottom" : htOffset.top + el.offsetHeight
		};
	},
	
	/**
	 * 
	 */
	reCalculate : function() {
		var aItem = jindo.$$('.' + this.option('sClassName'), this._el);
			
		if (this._el.tagName && jindo.$$.test(this._el, '.' + this.option('sClassName'))) {
			aItem.push(this._el);
		}
		
		this._aItem = aItem;
		
		this._htAreaRect = this._el.tagName ? this._toRect(this._el) : null;
		this._aItemRect = [];
		
		for (var i = 0, el; el = aItem[i]; i++) {
			this._aItemRect.push(this._toRect(el));
		}
	}
	
}).extend(jindo.DropArea);
﻿/**
 * @fileOverview 드래그하는동안 드래그되는 엘리먼트가 마우스 커서를 가리지 않는 경우 사용하는 DropArea 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.PointingDropArea = jindo.$Class({
	/** @lends jindo.PointingDropArea */
	/**
	 * PointingDropArea 컴포넌트를 생성한다.
	 * PointingDropArea 컴포넌트는 드래그하는동안 드래그되는 엘리먼트가 마우스 커서를 가리지 않는 경우 사용한다.
	 * 반드시 DragArea 컴포넌트가 생성된 이후 그 인스턴스를 참조하여 초기화하여야한다.
	 * @constructs
	 * @extends jindo.DropArea
	 * @param {Object} el Drop될 엘리먼트들의 상위 기준 엘리먼트. 컴포넌트가 적용되는 영역(Area)이 된다.
	 * @param {HashTable} htOption 옵션 객체
	 * @see jindo.DragArea
	 * @example
drag = new jindo.DragArea(document, { className : 'dragable' });
drop = new jindo.PointingDropArea(document, { 
	className : 'dropable', // (String) 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트는 Drop 가능하게 된다. 
	dragInstance : drag // (jindo.DragArea) Drop이 될 대상인 DragArea 컴포넌트의 인스턴스
}).attach({
	dragStart : function(oCustomEvent) {
		//dragInstance의 dragstart 이벤트에 연이어 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	elArea : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 될 엘리먼트 (핸들을 드래그하여 레이어 전체를 드래그되도록 하고 싶으면 이 값을 설정한다. 아래 예제코드 참고)
		//	weEvent : ($Event) 마우스 이동 중 발생되는 jindo.$Event 객체
		//};
	},
	dragEnd : function(oCustomEvent) {
		//dragInstance의 dragend 이벤트에 연이어 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	area : (HTMLElement) 기준 엘리먼트
		//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
		//	element : (HTMLElement) 실제로 드래그 된 엘리먼트
		//	weEvent : ($Event) 마우스 이동 중 발생되는 jindo.$Event 객체
		//	nX : (Number) 드래그 된 x좌표.
		//	nY : (Number) 드래그 된 y좌표.
		//}
	},
	over : function(oCustomEvent) {
		//Drag된 채 Drop 가능한 엘리먼트에 마우스 커서가 올라갈 경우 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) Drop 될 엘리먼트
		//}
	},
	move : function(oCustomEvent) {
		//Drag된 채 Drop 가능한 엘리먼트위에서 마우스 커서가 움직일 경우 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	weEvent : ($Event) 마우스 이동시 발생하는 jindo의 $Event 객체
		//	element : (HTMLElement) Drop 될 엘리먼트
		//	nRatioX : (Number) 드랍될 엘리먼트 내부의 좌우비율
		//	nRatioY : (Number) 드랍될 엘리먼트 내부의 상하비율
		//}
	},
	out : function(oCustomEvent) {
		//Drag된 채 Drop 가능한 엘리먼트에서 마우스 커서가 벗어날 경우 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) Drop 될 엘리먼트
		//}
	}
});
	 */
	$init : function(el, htOption) {
		jindo.$Fn(this._onMouseMove, this).attach(this._el, 'mousemove');
		jindo.$Fn(this._onMouseOver, this).attach(this._el, 'mouseover');
		jindo.$Fn(this._onMouseOut, this).attach(this._el, 'mouseout');
	},

	_parentOf : function(el) {
		if (el == null) {
			return false;
		}
		if (!this._el.tagName || this._el === el){
			return true;
		} 
		return jindo.$Element(this._el).isParentOf(el);
	},
		
	_getTarget : function(elInside) {
		var oDrag = this.option('oDragInstance');
		if (oDrag && !oDrag.isDragging()) {
			return null;
		} 
		
		var sClass = '.' + this.option('sClassName');
		
		var elInside = jindo.$$.test(elInside, sClass) ? elInside : jindo.$$.getSingle('! ' + sClass, elInside);
		
		if (!this._parentOf(elInside)) {
			elInside = null;
		}
		return elInside;
	},
	
	_onMouseMove : function(we) {
		var elInside = this._getTarget(we.element);
		if (!elInside) {
			return;
		} 
	
		this._addOveredTarget(elInside);
		
		var oPos = we.pos();
	
		var htOffset = jindo.$Element(elInside).offset();
		var htArea = {
			"nLeft" : htOffset.left,
			"nTop" : htOffset.top,
			"nRight" : htOffset.left + elInside.offsetWidth,
			"nBottom" : htOffset.top + elInside.offsetHeight
		};

		if ( htArea.nLeft <= oPos.pageX && oPos.pageX <= htArea.nRight && htArea.nTop <= oPos.pageY && oPos.pageY <= htArea.nBottom ) {
			this._fireMoveEvent(elInside, htArea, oPos, we);
		}
	},

	_onMouseOver : function(we) {
		var elInside = this._getTarget(we.element);
		if (!elInside) {
			return;
		}
		
		this._addOveredTarget(elInside);
	},
	
	_onMouseOut : function(we) {
	
		var elInside = this._getTarget(we.element);
		if (!elInside) {
			return;
		}
		
		this._removeOveredTarget(elInside);
	}				

}).extend(jindo.DropArea);/**
 * @fileOverview iframe에 Form을 Submit하여 리프레시없이 파일을 업로드하는 컴포넌트
 * @author senxation
 * @version 0.2
 */

jindo.FileUploader = jindo.$Class({
	/** @lends jindo.FileUploader */
		
	_bIsActivating : false, //컴포넌트의 활성화 여부
	_aHiddenInput : [],

	/**
	 * 컴포넌트를 생성한다.
	 * @constructs
	 * @param {HTMLElement} elFileSelect File Select. 베이스(기준) 엘리먼트
	 * @param {Object} oOption 옵션 객체
	 * @extends jindo.UIComponent
	 * @example 
var oFileUploader = new jindo.FileUploader($("file_select"),{
    sUrl  : 'http://ajaxui.jindodesign.com/docs/components/samples/response/FileUpload.php', //업로드할 서버의 url (Form 전송의 대상)
    sCallback : 'http://ajaxui.jindodesign.com/svnview/Jindo_Component/FileUploader/trunk/Spec/callback.html', //업로드 이후에 iframe이 redirect될 콜백페이지의 주소
    htData : {}, //post할 데이터 셋 예 { blogId : "testid" }
    sFiletype : "*.*", //허용할 파일의 형식. ex) "*.jpg"
    sMsgNotAllowedExt : '업로드가 허용되지 않는 파일형식입니다', //허용할 파일의 형식이 아닌경우에 띄워주는 경고창의 문구
	bAutoUpload : false //파일이 선택됨과 동시에 자동으로 업로드를 수행할지 여부 (upload 메소드 수행)
}).attach({
	success : function(oCustomEvent) {
		//업로드가 성공적으로 완료되었을 때 발생
		//이벤트 객체 oCustomEvent = {
		//	htResult (Object) 서버에서 전달해주는 결과 객체 (서버 설정에 따라 유동적으로 선택가능)
		//}
	},
	
	error : function(oCustomEvent) {
		//업로드가 성공적으로 완료되었을 때 발생
		//이벤트 객체 oCustomEvent = {
		//	htResult : { (Object) 서버에서 전달해주는 결과 객체. 에러발생시 errstr 프로퍼티를 반드시 포함하도록 서버 응답을 설정하여야한다.
		//		errstr : (String) 에러메시지
		// 	}
		//}
	}
});
	 */
	$init : function(elFileSelect, htOption) {
		
		//옵션 초기화
		var htDefaultOption = {
			sUrl: '', // upload url
			sCallback: '', // callback url
			htData : {},
            sFiletype: '*.*',
            sMsgNotAllowedExt: '업로드가 허용되지 않는 파일형식입니다',
            bAutoUpload: false,
			bActivateOnload : true //로드시 컴포넌트 활성화여부
		}
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		//Base 엘리먼트 설정
		this._el = jindo.$(elFileSelect);
		this._wel = jindo.$Element(this._el);
		this._assignHTMLElements();
		
		this.constructor._oCallback = {};
		this._wfChange = jindo.$Fn(this._onFileSelectChange, this);
		
		//활성화
		if(this.option("bActivateOnload")) {
			this.activate(); //컴포넌트를 활성화한다.	
		}
	},
	
	_assignHTMLElements : function() {
		
		this._elForm = this._el.form;
		
		//Iframe 설정
        var sIframeName = 'tmpFrame_' + this._makeUniqueId();
        this._elIframe = jindo.$('<iframe name="' + sIframeName + '" src="' + this.option("sCallback") + '?blank">');
        welIframe = jindo.$Element(this._elIframe);
		welIframe.css({
			position : 'absolute',
        	width : '1px',
        	height : '1px',
        	left : '-100px',
        	top : '-100px'
		});
        document.body.appendChild(this._elIframe);
	},
	
	/**
	 * 컴포넌트의 베이스 엘리먼트를 가져온다.
	 * @deprecated getFileSelect
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this.getFileSelect();
	},
	
	/**
	 * File Select 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getFileSelect : function() {
		return this._el;
	},
	
	/**
	 * File Select의 해당 Form 엘리먼트를 가져온다.
	 * @return {HTMLElement} 
	 */
	getFormElement : function() {
		return this._elForm;
	},
	
	/**
	 * IFrame으로 업로드를 수행한다.
	 */
	upload : function(){
		var elForm = this.getFormElement();
		var welForm = jindo.$Element(elForm);
		
		var sIframeName = this._elIframe.name;
		var sFunctionName = sIframeName + '_func';
		
		//Form 설정		
		var sAction = this.option("sUrl");
		welForm.attr({
			target : sIframeName,
			action : sAction
		});
		
		this._aHiddenInput.push(this._createElement('input', {
            'type': 'hidden',
            'name': 'callback',
            'value': this.option("sCallback")
        }));
        this._aHiddenInput.push(this._createElement('input', {
            'type': 'hidden',
            'name': 'callback_func',
            'value': sFunctionName
        }));
        for (var k in this.option("htData")) {
            this._aHiddenInput.push(this._createElement('input', {
                'type': 'hidden',
                'name': k,
                'value': this.option("htData")[k]
            }));
        }
		
		for (var i = 0; i < this._aHiddenInput.length; i++) {
			elForm.appendChild(this._aHiddenInput[i]);	
		}
        
		//callback 함수 정의
        this.constructor._oCallback[sFunctionName + '_success'] = jindo.$Fn(function(oParameter){
            this.fireEvent("success", { result : oParameter });
			delete this.constructor._oCallback[oParameter.callback_func + '_success'];
			delete this.constructor._oCallback[oParameter.callback_func + '_error'];
			for (var i = 0; i < this._aHiddenInput.length; i++) {
				$Element(this._aHiddenInput[i]).leave();	
			}
			this._aHiddenInput.length = 0;
        }, this).bind();
        
        // temporary function - on error
        this.constructor._oCallback[sFunctionName + '_error'] = jindo.$Fn(function(oParameter){
			this.fireEvent("error", { result : oParameter });
			delete this.constructor._oCallback[oParameter.callback_func + '_success'];
			delete this.constructor._oCallback[oParameter.callback_func + '_error'];
			for (var i = 0; i < this._aHiddenInput.length; i++) {
				jindo.$Element(this._aHiddenInput[i]).leave();	
			}
			this._aHiddenInput.length = 0;
        }, this).bind();
		
        // form submit and reset
        elForm.submit();
    },
	
	/**
	 * 컴포넌트를 활성화한다.
	 * @return {this}
	 */
	_onActivate : function() {
		this._wfChange.attach(this.getFileSelect(), "change");
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		this._wfChange.detach(this.getFileSelect(), "change");
	},
	
	/**
	 * 유일한 id를 랜덤하게 생성한다.
	 * @ignore
	 */
    _makeUniqueId: function(){
        return (new Date).getMilliseconds() + Math.floor(Math.random() * 100000);
    },
	
	/**
	 * element를 생성한다.
	 * @param {Object} name
	 * @param {Object} attributes
	 * @ignore
	 */
    _createElement: function(name, attributes){
        var el = jindo.$("<" + name + ">");
		var wel = jindo.$Element(el);
        for (var k in attributes) {
            wel.attr(k, attributes[k]);
        }
        return el;
    },
	
	/**
	 * 파일의 확장자를 검사한다.
	 * @param {Object} sFile
	 * @ignore
	 */
    _checkExtension: function(sFile){
        var ext = /\.([^\.\/]*)$/.test(sFile) ? RegExp.$1 : '';
        var types = this.option("sFiletype").split(';');
        
        for (var i = 0; i < types.length; i++) {
            types[i] = types[i].replace(/^\s+|\s+$/, '');
            types[i] = types[i].replace(/\./g, '\\.');
            types[i] = types[i].replace(/\*/g, '[^\\.\\/\\\\]+');
            if ((new RegExp(types[i] + '$', 'gi')).test(sFile)) 
                return true;
        }
        
        return false;
    },
	
	/**
	 * 선택된 파일이 바뀌었을경우 처리
	 * @param {$Event} e
	 * @ignore
	 */
	_onFileSelectChange : function(e) {
		
		var sValue = e.element.value;
		
		if (!this._checkExtension(sValue)) {
            var sExtension = /\.([^\.\/]*)$/.test(sValue) ? RegExp.$1 : "";
            alert(this.option("sMsgNotAllowedExt").replace('%s', sExtension));
            return false;
        }
		
        if (this.option("bAutoUpload")) {
			this.upload();
		}
	}
	
}).extend(jindo.UIComponent);﻿/**
 * @fileOverview Text Input의 값을 세자리마다 콤마(,)가 찍힌 형식으로 변환하는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.NumberFormatter = jindo.$Class({
	/** @lends jindo.NumberFormatter */
	/**
	 * NumberFormatter 컴포넌트를 생성한다.
	 * NumberFormatter 컴포넌트는 Text Input의 값을 세자리마다 콤마(,)가 찍힌 형식으로 변환한다.
	 * @constructs
	 * @extends jindo.Formatter
	 * @param {HTMLElement} el
	 * @param {Object} oOptions 옵션 객체
	 * @requires jindo.TextRange
	 * @requires jindo.Timer
	 * @example 
var oNumberFormatter = new jindo.NumberFormatter($('foo'), { 
	bCurrency : true, //(Boolean) 통화인 경우 3자리마다 콤마(,) 삽입됨
	nDecimalPoint : 2, //(Number) 소수점 몇째자리까지 표시할 것인지
	nSize : 3 //(Number) 콤마(,)를 찍을 간격
}).attach({
	beforechange : function(e) { 
		//전달되는 이벤트 객체 e = {
		//	element : (HTMLElement) Text Input 엘리먼트
		//	text : (String) Text Input 의 값
		//	startMark : (String)
		//	endMark : (String)
		//} 
	},
	change : function(e) {
		//전달되는 이벤트 객체 e = {
		//	element : (HTMLElement) Text Input 엘리먼트
		//	auto : (Boolean) 
		//}
	}
});
	 */	
	$init : function(oEl, oOptions) {
		
		this.option({
			bCurrency : true, //(Boolean) 통화인 경우 3자리마다 콤마(,) 삽입됨
			nDecimalPoint : 2, //(Number) 소수점 몇째자리까지 표시할 것인지
			nSize : 3 //(Number) 콤마(,)를 찍을 간격
		})
		var nSize = this.option('nSize') || 3;
	
		this.attach('beforechange', function(oCustomEvent) {
			var sText = oCustomEvent.text;
			
			var sOutput = '';
			var nDot = 0;
			
			// 숫자랑 마크빼고 전부 삭제
			sText = sText.replace(new RegExp('[^0-9' + oCustomEvent.startMark + oCustomEvent.endMark + ']', 'g'), '');

			var sNumText = sText;

			// 맨 앞에 있는 숫자 0 없애기			
			sText = sText.replace(/^0+/, '');
			sText = sText.replace(new RegExp('^0*' + oCustomEvent.startMark + '0*' + oCustomEvent.endMark + '0*'), oCustomEvent.startMark + oCustomEvent.endMark);
			
			if (this.option("bCurrency")) {
				for (var i = sText.length; i >= 0; i--) {
					var sChar = sText.charAt(i);
					if (/[0-9]/.test(sChar)) {
						if (nDot >= nSize) {
							sOutput = ',' + sOutput;
							nDot = 0;
						}
						
						nDot++;
						
						sOutput = sChar + sOutput;
					} else if (sChar == oCustomEvent.startMark || sChar == oCustomEvent.endMark) {
						sOutput = sChar + sOutput;
					}
				}
			}
			
			if (sOutput == oCustomEvent.startMark + oCustomEvent.endMark) {
				sOutput = '0' + sOutput;
			}
			if (sOutput == '' && /^0+$/.test(sNumText)) {
				sOutput = '0';
			}
			
			oCustomEvent.text = sOutput;
		});
		
	}
	
}).extend(jindo.Formatter);/**
 * @fileOverview 다수의 Ajax 요청을 병렬 또는 직렬방식으로 요청하고 응답을 처리하는 컴포넌트 
 * @author senxation
 * @version 0.2
 */

jindo.MultipleAjaxRequest = jindo.$Class({
	/** @lends jindo.MultipleAjaxRequest */

	/**
	 * 컴포넌트를 생성한다.
	 * @constructs
	 * @param {HashTable} htOption 옵션 Hash Table
	 * @extends jindo.Component
	 * @example
var oMultipleAjaxRequest = new jindo.MultipleAjaxRequest({ 
	sMode : "parallel" //요청 방식. 기본은 병렬로 요청. "serial"일 경우 직렬로 요청
}).attach({
	start: function(oCustomEvent) {
		//요청이 시작될 때 발생
		//전달되는 커스텀이벤트 객체 oCustomEvent = {
		//	aAjax : (Array) request() 메소드에 전달되었던 aAjax 배열 
		//	htMetaData : (HashTable) request() 메소드에 전달되었던 htMetaData
		//}
	},
	beforeEachRequest: function(oCustomEvent){
		//각각의 요청 이전에 발생
		//전달되는 커스텀이벤트 객체 oCustomEvent = {
		//	oAjax : (jindo.$Ajax) 해당 요청의 $Ajax 객체 
		//	nIndex : (Number) 요청 순서
		//}
	},
	afterEachResponse: function(oCustomEvent){
		//각각의 응답 이후에 발생
		//전달되는 커스텀이벤트 객체 oCustomEvent = {
		//	oAjax : (jindo.$Ajax) 해당 요청의 $Ajax 객체 
		//	nIndex : (Number) 요청 순서
		//}
	},
	complete: function(oCustomEvent){
		//모든 응답이 완료된 이후에 발생
		//전달되는 커스텀이벤트 객체 oCustomEvent = {
		//	aResponse : (Array) 모든 요청의 jindo.$Ajax.Response 객체의 배열
		//	htMetaData : (HashTable) request메소드에서 선언한 Hash Table 
		//}
		
	}
});
	 */
	$init : function(htOption){
		var htDefaultOption = {
			sMode : "parallel" //기본은 병렬로 요청. "serial"일 경우 직렬로 요청
		}
		this.option(htDefaultOption);
		this.option(htOption);
	},
	
	/**
	 * 요청이 진행중인지 여부를 가져온다.
	 * @return {Boolean} 요청 진행 여부
	 */
	isRequesting : function() {
		return this._bIsRequesting;
	},
	
	/**
	 * 요청을 수행한다.
	 * @param {Array} aAjax 요청을 위한 정보를 담은 Hash Table의 배열
	 * @param {HashTable} complete 커스텀이벤트에 전달될 Hash Table
	 * @return {Boolean} 요청이 성공적으로 시작되었는지 여부
	 * @example
var oAjax1 = {
	sUrl : "1.js", //요청할 URL
	htOption : { //$Ajax의 option객체 (jindo.$Ajax 참고)
		type : "xhr",
		method : "get"
	},
	htParameter : null //$Ajax.request를 수행시 전달할 파라메터 Hash Table 객체
};

var htAjax2 = {
	sUrl : "22.js",
	htOption : {
		type : "xhr",
		method : "get"
	},
	htParameter : null
};

var htAjax3 = {
	sUrl : "3.js",
	htOption : {
		type : "xhr",
		method : "get"
	},
	htParameter : null
};

oMultipleAjaxRequest.request([htAjax1, htAjax2, htAjaxhtAjax sRequestName : "요청이름" });
	 */
	request : function(aAjax, htMetaData) {
		if (this.isRequesting()) { //요청이 진행중이면 중단한다.
			return false;
		}
		if (!(aAjax instanceof Array)) {
			aAjax = [aAjax];
		}
		
		var sMode = this.option("sMode");
		
		if (sMode == "parallel") {
			this._parallelRequest(aAjax, htMetaData);
		} else if (sMode == "serial") {
			this._serialRequest(aAjax, htMetaData);
		} else {
			return false;
		}
		this._bIsRequesting = true;
		return true;
	},
	
	/**
	 * 병렬 요청
	 * @param {Array} aAjax
	 * @ignore
	 */
	_parallelRequest : function(aAjax, htMetaData) {
		this._aAjaxData = aAjax;
		
		this._aAjax = []; //Ajax 객체의 배열
		this._aAjax.length = aAjax.length;
		this._aStatus = []; //요청을 보냈는지 여부
		this._aStatus.length = aAjax.length;
		this._aResponse = []; //응답객체
		this._htMetaData = htMetaData;
		
		if (!this.fireEvent("start", {
			aAjax : aAjax,
			htMetaData : htMetaData
		})) {
			this.abort();	
		}
		
		var self = this;
		jindo.$A(this._aAjaxData).forEach(function(htAjax, i){
			var fParallelResponseHandler = function(oResponse){
				oResponse._constructor = self._aAjax[i];
				var nIndex = self._findAjaxObjectIndexOfResponse(oResponse._constructor);
				self._aResponse[nIndex] = oResponse;
				self._aStatus[nIndex] = true;
				if (!self.fireEvent("afterEachResponse", {
					oAjax : self._aAjax[nIndex],
					nIndex : nIndex
				})) {
					self.abort();
				}
				if (self._hasCompletedGotResponsesOfParallelResponses()) {
					self._complete();
				}
			}
			self._aAjax[i] = jindo.$Ajax(htAjax.sUrl, htAjax.htOption);
			htAjax.htOption.onload = fParallelResponseHandler;
			htAjax.htOption.onerror = fParallelResponseHandler;
			htAjax.htOption.ontimeout = fParallelResponseHandler;
			self._aAjax[i].option(htAjax.htOption);
			if (!self.fireEvent("beforeEachRequest", {
				oAjax : self._aAjax[i],
				nIndex : i
			})) {
				self.abort();	
			}
			self._aAjax[i].request(htAjax.htParameter);
		});
	},
	
	/**
	 * 병렬 요청시 응답이 몇번째 Ajax 요청에 대한 응답인지 찾는다.
	 * @param {Object} oAjax
	 * @return {Number}
	 */
	_findAjaxObjectIndexOfResponse : function(oAjax) {
		return jindo.$A(this._aAjax).indexOf(oAjax);
	},
	
	/**
	 * 병렬 요청의 응답이 모두 완료되었는지 확인한다.
	 */
	_hasCompletedGotResponsesOfParallelResponses : function() {
		var bResult = true;
		jindo.$A(this._aStatus).forEach(function(bStatus){
			if (!bStatus) {
				bResult = false;
				jindo.$A.Break();
			} 
		})
		return bResult;
	},
	
	/**
	 * 직렬 요청
	 * @param {Array} aAjax
	 * @ignore
	 */
	_serialRequest : function(aAjax, htMetaData) {
		this._aAjaxData = aAjax;
		
		this._aAjax = []; //Ajax 객체의 배열
		this._aAjax.length = aAjax.length;
		this._aStatus = []; //요청을 보냈는지 여부
		this._aStatus.length = aAjax.length;
		this._aResponse = []; //응답객체
		
		var self = this;
		jindo.$A(this._aAjaxData).forEach(function(htAjax, i){
			var fSerialRequestHandler = function(e){
				e._constructor = self._aAjax[i];
				self._aResponse.push(e);
				self._serialRequestNext();
			};
			self._aAjax[i] = jindo.$Ajax(htAjax.sUrl, htAjax.htOption);
			htAjax.htOption.onload = fSerialRequestHandler;
			htAjax.htOption.onerror = fSerialRequestHandler;
			htAjax.htOption.ontimeout = fSerialRequestHandler;
			self._aAjax[i].option(htAjax.htOption);
		});
		
		if (!this.fireEvent("start", {
			aAjax : aAjax,
			htMetaData : htMetaData
		})) {
			this.abort();
		}
		
		if (!this.fireEvent("beforeEachRequest", {
			oAjax: this._aAjax[0],
			nIndex : 0
		})) {
			this.abort();
		}
		this._aAjax[0].request(this._aAjaxData[0].htParameter);
		this._aStatus[0] = true;
	},
	
	/**
	 * 직렬 요청시 다음 요청을 수행하거나 응답 완료
	 * @param {Array} aAjax
	 * @ignore
	 */
	_serialRequestNext : function() {
		var nIndex = -1;
		for (var i = 0; i < this._aStatus.length; i++) {
			if(!this._aStatus[i]) {
				this._aStatus[i] = true;
				nIndex = i;
				break;
			}
		}
		
		if (nIndex > 0) {
			if (!this.fireEvent("afterEachResponse", {
				oAjax: this._aAjax[nIndex - 1],
				nIndex : nIndex - 1
			})) {
				this.abort();
			}
			if (!this.fireEvent("beforeEachRequest", {
				oAjax : this._aAjax[nIndex],
				nIndex : nIndex
			})) {
				this.abort();
			}
			this._aAjax[nIndex].request(this._aAjaxData[nIndex].htParameter);
		} else if (nIndex == -1) {
			nIndex = this._aStatus.length;
			if (!this.fireEvent("afterEachResponse", {
				oAjax: this._aAjax[nIndex - 1],
				nIndex : nIndex - 1
			})) {
				this.abort();
			}
			this._complete();
		}
	},
	
	/**
	 * 요청정보들을 초기화한다.
	 * @ignore
	 */
	_reset : function() {
		this._aAjaxData.length = 0;
		this._aAjax.length = 0;
		this._aStatus.length = 0;
		this._aResponse.length = 0;
		this._htMetaData = null;
		
		delete this._aAjaxData;
		delete this._aAjax;
		delete this._aStatus;
		delete this._aResponse;
		delete this._htMetaData;
		
		this._bIsRequesting = false;
	},
	
	/**
	 * 요청을 중단한다.
	 * @remark 다수의 요청중에 현재까지의 모든 요청이 중단되고, 수행되지 않은 요청은 더 이상 진행되지 않는다.
	 */
	abort : function() {
		jindo.$A(this._aAjax).forEach(function(oAjax){
			oAjax.abort();
		});
		this._reset();
	},
	
	/**
	 * 응답이 완료되었을때 수행되어 완료 이벤트(complete)를 발생
	 * @ignore
	 */
	_complete : function() {

		var aResponse = this._aResponse.concat();
		var htMetaData = {};
		for (var vProperty in this._htMetaData) {
			htMetaData[vProperty] = this._htMetaData[vProperty];
		}
		
		this._reset();
		
		this.fireEvent("complete", {
			aResponse : aResponse,
			htMetaData : htMetaData
		});	
	}

}).extend(jindo.Component);	﻿/**
 * @fileOverview 체크박스나 라디오버튼의 디자인을 이미지등으로 대체하기 위한 HTML Component 
 * @author hooriza, modified by senxation
 * @version 0.5
 */

jindo.CheckBox = jindo.$Class({
	/** @lends jindo.CheckBox */
	sTagName : 'input[type=checkbox]', //'input[type=radio]'
	
	/**
	 * CheckBox 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.HTMLComponent
	 * @param {String | HTMLElement} el input[type=checkbox] 또는 input[type=radio]를 감싸고 있는 엘리먼트 혹은 그 id
	 * @param {HashTable} htOption 옵션 객체
	 * @example
<span id="ajax_checkbox">
	<span class="ajax_checkbox_mark"></span><input type="checkbox" name="c" id="c1" />
</span> 
<label for="c1">첫번째</label>

<script type="text/javascript" language="javascript">
	var oCheckBox = jindo.CheckBox(jindo.$('ajax_checkbox'), { sClassPrefix : 'checkbox-' }).attach({
		beforeChange : function(oCustomEvent) {
			//전달되는 이벤트객체 oCustomEvent = {
			//	bChecked : (Boolean) 체크 여부
			//}
			//e.stop(); 수행시 체크/해제 되지 않음
		},
		change : function(oCustomEvent) {
			//전달되는 이벤트객체 oCustomEvent = {
			//	bChecked : (Boolean) 체크 여부
			//}
		}
	});
</script>
	 * @remark input[type=checkbox], input[type=radio]에 이벤트를 직접 바인딩해서 사용할 경우 제대로 동작하지 않음
	 */
	
	$init : function(el, htOption) {
		this.option({
			sClassPrefix : 'checkbox-'
		});
		
		this.option(htOption || {});

		this._elWrapper = jindo.$(el);
		this._welWrapper = jindo.$Element(el);
		this._assignHTMLElements();
		
		this.wfOnClickInput = jindo.$Fn(this._onClickInput, this);
		this.wfOnClickWrapper = jindo.$Fn(this._onClickWrapper, this);
		this.wfOnFocusInput = jindo.$Fn(this._onFocusInput, this);
		this.wfOnBlurInput = jindo.$Fn(this._onBlurInput, this);
		
		this.activate();
		this.paint();
	},
	
	_assignHTMLElements : function() {
		var elWrapper = this._elWrapper;
		/**
		 * 해당 input[type=checkbox] 엘리먼트
		 * @ignore
		 */
		this._elInput = jindo.$$.getSingle('input', elWrapper);
		/**
		 * 해당 input[type=checkbox] 엘리먼트를 대체할 엘리먼트
		 * @ignore
		 */
		if (this._elInput.type == "radio") {
			this.sTagName = "input[type=radio]";
			this.option("sClassPrefix", "radio-");
		}
		var sPrefix = this.option('sClassPrefix');
		this._elSubstitute = jindo.$$.getSingle("." + sPrefix + "mark", elWrapper);
		this._welSubstitute = jindo.$Element(this._elSubstitute);
	},
	
	/**
	 * Input 엘리먼트를 구한다.
	 * @return {HTMLElement}
	 */
	getInput : function() {
		return this._elInput;
	},
	
	/**
	 * Check 여부를 가져온다.
	 * @return {Boolean}
	 */
	getChecked : function() {
		return this.getInput().checked;
	},
	
	/**
	 * Check 여부를 설정한다.
	 * @param {Boolean}
	 * @return {this}
	 */
	setChecked : function(b) {
		this.getInput().checked = b;
		this.paint();
		return this;
	},
	
	/**
	 * CheckBox를 enable 시킨다.
	 * @return {this}
	 */
	enable : function() {
		this.getInput().disabled = false;
		this.paint();
		return this;
	},
	
	/**
	 * CheckBox를 disable 시킨다.
	 * @return {this}
	 */
	disable : function() {
		this.getInput().disabled = true;
		this.paint();
		return this;
	},
	
	_onClickInput : function(we) {
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		
		var self = this;
		setTimeout(function(){ //Scope 안에서 input[type=checkbox]의 checked가 이상함!
			self._welWrapper.fireEvent("click");	
		}, 1);
	},
	
	_onClickWrapper : function(we) {
		var elInput = this._elInput;
		elInput.focus();
		if (elInput.disabled || we.element === elInput) { /* Diabled거나 Label을 클릭했거나 키보드 스페이스로 직접 선택했을 때 */
			return;
		}

		if (!this.fireEvent("beforeChange", { bChecked : elInput.checked })) {
			return;
		}
		
		if (elInput.type == "checkbox") {
			elInput.checked = !elInput.checked;
			this.paint();
		} else if (elInput.type == "radio") {
			elInput.checked = true;

			var self = this;
			//name이 같은 input만 다시 그림
			jindo.$A(this.constructor.getInstance()).forEach(function(oRadioButton){
				if (oRadioButton.getInput().name == self.getInput().name) {
					oRadioButton.paint();
				} 
			});
		}
	},
	
	_onFocusInput : function(we) {
		this._welWrapper.addClass(this.option('sClassPrefix') + 'focused'); 
	},
	
	_onBlurInput : function(we) {
		this._welWrapper.removeClass(this.option('sClassPrefix') + 'focused');
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		this._welWrapper.addClass(this.option('sClassPrefix') + 'applied');
		
		this.wfOnClickInput.attach(this._elInput, 'click');
		this.wfOnClickWrapper.attach(this._elWrapper, 'click');
		this.wfOnFocusInput.attach(this._elInput, 'focus');
		this.wfOnBlurInput.attach(this._elInput, 'blur');
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		this._welWrapper.removeClass(this.option('sClassPrefix') + 'applied');
		
		this.wfOnClickInput.detach(this._elInput, 'click');
		this.wfOnClickWrapper.detach(this._elWrapper, 'click');
		this.wfOnFocusInput.detach(this._elInput, 'focus');
		this.wfOnBlurInput.detach(this._elInput, 'blur');
	},
	
	/**
	 * 컴포넌트를 새로 그려준다. (HTMLComponent 공통메소드)
	 */
	_onPaint : function() {
		var sPrefix = this.option('sClassPrefix');
		
		if (this._elInput.disabled){
			this._welWrapper.addClass(sPrefix + 'disabled');	
		} else {
			this._welWrapper.removeClass(sPrefix + 'disabled');
		}
		
		if (this._elInput.checked){
			this._welSubstitute.addClass(sPrefix + 'checked');	
		} else {
			this._welSubstitute.removeClass(sPrefix + 'checked');
		}
		
		this.fireEvent("change", {
			bChecked : this._elInput.checked
		});
	}
	
}).extend(jindo.HTMLComponent);/**
 * @fileOverview HTML Select 엘리먼트를 대체하여 디자인을 적용한 셀렉트박스
 * @author senxation
 * @version 0.2
 */

jindo.SelectBox = jindo.$Class({
	/** @lends jindo.SelectBox */
	
	sTagName : 'select',
	
	_bIsActivating : false, //컴포넌트의 활성화 여부
	_bDisabled : false, 
	_sPrevValue : null, //select의 이전 값
	_nSelectedIndex : 0, //선택된 index
	_bRealFocused : false, //탭키 이동으로 실제로 포커스되었는지의 여부
	
	/**
	 * SelectBox 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.HTMLComponent
	 * @requires jindo.Timer
	 * @requires jindo.LayerManager
	 * @requires jindo.LayerPosition
	 * @requires jindo.RolloverClick
	 * @param {HTMLElement} el
	 * @param {HashTable} htOption
	 * @example
oSelectBox = new jindo.SelectBox($("s"), {
	sClassPrefix : 'selectbox-', //Default Class Prefix
	nWidth : null, //가로 사이즈, null시 자동
	nHeight : null, //목록의 최대 높이. 그 이상시 스크롤 생김, null시 자동.
	bUseLayerPosition : true, //LayerPosition 컴포넌트로 위치 설정할지 여부.
	
	LayerPosition : {
		sPosition : "outside-bottom", //목록의 위치. LayerPosition 컴포넌트에서 사용할 옵션
		sAlign : "left", //목록의 정렬. LayerPosition 컴포넌트에서 사용할 옵션
		nTop : 0, //선택박스와 목록의 상하 간격. LayerPosition 컴포넌트에서 사용할 옵션
		nLeft : 0 //선택박스와 목록의 좌우 간격. LayerPosition 컴포넌트에서 사용할 옵션
	}
}).attach({
	change : function(oCustomEvent) {//선택한 아이템이 바뀌었을때 발생
		//console.log(oCustomEvent.type);
		//전달되는 이벤트객체 oCustomEvent = {
		//	nIndex : (Number) 선택된 옵션의 인덱스, nLastIndex : nLastSelectedIndex
		//	nLastIndex : (Number) 선택되기 전의 옵션의 인덱스
		//}
	},
	open : function(e) {//레이어가 열리기 직전 발생
		//console.log(oCustomEvent.type);
		//oCustomEvent.stop();
	},
	close : function(oCustomEvent) {//레이어가 닫히기 직전 발생
		//console.log(oCustomEvent.type);
		//oCustomEvent.stop();					
	},
	focus : function(oCustomEvent) {//셀렉트박스가 포커스를 얻으면 발생
		//console.log(oCustomEvent.type);
		//oCustomEvent.stop();
	},
	blur : function(oCustomEvent) {//셀렉트박스가 포커스를 잃으면 발생
		//console.log(oCustomEvent.type);
	}
});
	 */
	$init : function(el, htOption) {
		this._aItemData = [];
		this._aListItemData = [];
		this._aOptions = [];
		var htDefaultOption = {
			sClassPrefix : 'selectbox-', //Default Class Prefix
			nWidth : null,
			nHeight : null,
			bUseLayerPosition : true, //LayerPosition 컴포넌트로 위치 설정할지 여부
			LayerPosition : { //LayerPosition 컴포넌트에서 사용할 옵션
				sPosition : "outside-bottom", //목록의 위치. 
				sAlign : "left", //목록의 정렬.
				nTop : 0,
				nLeft : 0
			}
		}
		this.option(htDefaultOption);
		this.option(htOption || {});
		this._el = jindo.$(el);
		this._assignHTMLElements(); //컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
		this._initLayerManager();
		this._initRolloverClick();
		if(this.option("bUseLayerPosition")) {
			this._initLayerPosition();
		}
		
		this._oTimer = new jindo.Timer();
		this._wfOnFocusSelect = jindo.$Fn(this._onFocusSelect, this);
		this._wfOnBlurSelect = jindo.$Fn(this._onBlurSelect, this);
		this._wfOnMouseDownBox = jindo.$Fn(this._onMouseDownBox, this);
		this._wfOnKeyDown = jindo.$Fn(this._onKeyDown, this);
		this._wfOnMouseWheel = jindo.$Fn(function(e){e.stop(jindo.$Event.CANCEL_DEFAULT)}); //ie6 에서 셀렉트박스에서 스크롤할 경우 선택값이 바뀌는 것을 방지
		
		this._oAgent = jindo.$Agent(); 
		this.activate(); //컴포넌트를 활성화한다.
	},

	/**
	 * 컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
	 */
	_assignHTMLElements : function() {
		var sPrefix = this.option("sClassPrefix");
		var el = this._el;
		this._elSelect	= jindo.$$.getSingle('select.' + sPrefix + 'source', el);
		this._sSelectInnerHTML = this._elSelect.innerHTML; //초기의 innerHtml을 구함
		this._elOptionDefault = jindo.$$.getSingle('option.' + sPrefix + 'default', el).cloneNode(true);
		this._elSelectOptionGroup	= jindo.$$.getSingle('select.' + sPrefix + 'source-option-group', el);
		this._elBox		= jindo.$$.getSingle('.' + sPrefix + 'box', el);
		this._elLabel	= jindo.$$.getSingle('.' + sPrefix + 'label', el);
		this._elLayer	= jindo.$$.getSingle('.' + sPrefix + 'layer', el);
		this._elList	= jindo.$$.getSingle('.' + sPrefix + 'list', el);
		this._elList.innerHTML = "";
		this._elSelectList	= jindo.$('<ul>');
		this._elList.insertBefore(this._elSelectList, this._elList.firstChild);
	},
	
	/**
	 * select 엘리먼트를 가져온다.
	 * @return {HTMLElemen} 
	 */
	getSelectElement : function() {
		return this._elSelect;
	},
	
	/**
	 * box 엘리먼트(클래스명 "box")를 가져온다.
	 * @return {HTMLElemen} 
	 */
	getBoxElement : function() {
		return this._elBox;
	},
	
	/**
	 * label 엘리먼트(클래스명 "label")를 가져온다.
	 * @return {HTMLElemen} 
	 */
	getLabelElement : function() {
		return this._elLabel;
	},
	
	/**
	 * layer 엘리먼트(클래스명 "layer")를 가져온다.
	 * @return {HTMLElemen} 
	 */
	getLayerElement : function() {
		return this._elLayer;
	},
	
	/**
	 * list 엘리먼트(클래스명 "list")를 가져온다.
	 * @return {HTMLElemen} 
	 */
	getListElement : function() {
		return this._elList;
	},
	
	/**
	 * list 엘리먼트 내부의 실제 목록 ul 엘리먼트를 가져온다.
	 * @return {HTMLElemen} 
	 */
	getSelectListElement : function() {
		return this._elSelectList;
	},
	
	_initLayerManager : function() {
		var sPrefix = this.option("sClassPrefix");
		var self = this;
		var elSelect = this.getSelectElement();
		this._oLayerManager = new jindo.LayerManager(this.getLayerElement(), { 
			sCheckEvent : "mousedown",
			nShowDelay : 20, 
			nHideDelay : 0
		}).attach({
			beforeShow : function(oCustomEvent) {
				if(self._bDisabled) {
					oCustomEvent.stop();
					return;
				}
				
				setTimeout(function(){ //focus때문에 delay
					elSelect.focus();
				}, 10);
				
				if(!self.fireEvent("open")) {
					oCustomEvent.stop();
					return;
				}
				jindo.$Element(self._el).addClass(sPrefix + 'open');
				self._paintSelected();
			},
			show : function(oCustomEvent) {
				if (self.option("bUseLayerPosition")) {
					self.getLayerPosition().setLayer(oCustomEvent.element).setPosition(); //레이어가 항상보이도록 포지셔닝을 LayerPosition에 위임
				}
				var welList = jindo.$Element(this.getLayer());
				var nHeight = self.option("nHeight");
				if (nHeight && welList.height() > nHeight) {
					welList.css("overflow", "auto");
					welList.height(nHeight);
				} 
			},
			beforeHide : function(oCustomEvent) {
				if(!self.fireEvent("close")) {
					oCustomEvent.stop();
					setTimeout(function(){ //focus때문에 delay
						elSelect.focus();
					}, 10);
					return;
				}
				jindo.$Element(self._el).removeClass(sPrefix + 'open').removeClass(sPrefix + 'focused');
				setTimeout(function(){ //focus때문에 delay
					self.getSelectElement().blur();
				}, 10);
			}
		}).link(this.getBoxElement()).link(this.getLayerElement());
	},
	
	/**
	 * LayerManager 객체를 가져온다.
	 * @return {jindo.LayerManager}
	 */
	getLayerManager : function() {
		return this._oLayerManager;
	},
	
	_initRolloverClick : function() {
		var sPrefix = this.option("sClassPrefix");
		
		var self = this;
		
		this._oRolloverClick = new jindo.RolloverClick(this.getSelectListElement(), {
			RolloverArea : {
				sClassName : sPrefix + "item",
				sClassPrefix : sPrefix + "item-"  
			}
		}).attach({
			over : function(oCustomEvent) {
				if (self._welSelected) {
					self._welSelected.removeClass(sPrefix + "item-over");	
				}
				var wel = jindo.$Element(oCustomEvent.element);
				wel.addClass(sPrefix + "item-over");
				self._welSelected = wel;
			},
			out : function(oCustomEvent) {
				oCustomEvent.stop();
			},
			click : function(oCustomEvent) {
				if (self._welSelected) {
					self._welSelected.removeClass(sPrefix + "item-selected");
				}
				
				var nSelectedIndex = self._nSelectedIndex;
				
				var wel = jindo.$Element(oCustomEvent.element);
				self.setValue(wel.text());
				
				var nLastSelectedIndex = self.getSelectedIndex();
				
				if (nSelectedIndex != nLastSelectedIndex) {
					self.fireEvent("change", { nIndex : nSelectedIndex, nLastIndex : nLastSelectedIndex });	
				}
				self.getLayerManager().hide(); //선택이 제대로 이뤄졌을 경우에 hide
			}
		});
	},
	
	/**
	 * RolloverClick 객체를 가져온다.
	 * @return {jindo.RolloverClick}
	 */
	getRolloverClick : function() {
		return this._oRolloverClick;
	},
	
	_initLayerPosition : function() {
		this._oLayerPosition = new jindo.LayerPosition(this.getBoxElement(), null, this.option("LayerPosition"));
	},
	
	/**
	 * LayerPosition 객체를 가져온다.
	 * @return {jindo.LayerPosition}
	 */
	getLayerPosition : function() {
		return this._oLayerPosition;
	},

	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		//활성화 로직 ex)event binding		
		var sPrefix = this.option("sClassPrefix");
		var self = this;
		var elSelect = this.getSelectElement();
		jindo.$Element(this._el).removeClass(sPrefix + 'noscript');
		var nWidth = this.option("nWidth");
		if (nWidth) {
			jindo.$Element(this.getBoxElement()).css("width", this.option("nWidth")+"px");
		}		
		
		this._wfOnFocusSelect.attach(elSelect, "focus");
		this._wfOnBlurSelect.attach(elSelect, "blur");
		this._wfOnMouseDownBox.attach(this.getBoxElement(), "mousedown");
		this._wfOnKeyDown.attach(elSelect, "keydown");
		this._wfOnMouseWheel.attach(elSelect, "mousewheel"); 
		
		this.paint();
		this._sPrevValue = this.getValue();
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		//비활성화 로직 ex)event unbinding
		var sPrefix = this.option("sClassPrefix");
		var elSelect = this.getSelectElement();
		jindo.$Element(this._el).addClass(sPrefix + 'noscript');
		
		this._wfOnFocusSelect.detach(elSelect, "focus");
		this._wfOnBlurSelect.detach(elSelect, "blur");
		this._wfOnMouseDownBox.detach(this.getBoxElement(), "mousedown");
		this._wfOnKeyDown.detach(elSelect, "keydown");
		this._wfOnMouseWheel.detach(elSelect, "mousewheel");
	},
	
	/**
	 * text값에 대한 option의 value를 가져온다.
	 * @param {String} sText
	 * @return {String}
	 */
	getValueOf : function (sText) {
		for (var i = 0; i < this._aItemData.length; i++) {
			if (this._aItemData[i].sText == sText) {
				return this._aItemData[i].value;
			}
		}
	},
	
	/**
	 * Select의 value를 가져온다.
	 * @return {String}
	 */
	getValue : function() {
		return this.getSelectElement().value;
	},
	
	/**
	 * Select의 text를 가져온다.
	 * @return {String}
	 */
	getText : function() {
		return this._aItemData[this._nSelectedIndex].sText;
	},
	
	/**
	 * text값을 가지는 옵션의 값으로 value를 설정한다.
	 * @param {String} sText
	 */
	setValue : function(sText) {
		this.getSelectElement().value = this.getValueOf(sText);
		this._sPrevValue = this.getValue();
		this._paint();
	},

	/**
	 * 선택된 index를 가져온다.
	 * @param {Number} nIndex
	 */
	getSelectedIndex : function(nIndex) {
		return this.getSelectElement().selectedIndex;		
	},

	/**
	 * nIndex번째 옵션을 선택한다.
	 * disabled 된것에 대해 처리한다.
	 * @param {Object} nIndex
	 */
	setSelectedIndex : function(nIndex) {
		this.getSelectElement().selectedIndex = nIndex; //선택된 index는 이메소드를 그릴때 정의
	},

	/**
	 * Select의 option 엘리먼트들을 가져온다.
	 * @return {Array}
	 */
	getOptions : function() {
		return this._aOptions;
	},
	
	/**
	 * List내의 아이템 엘리먼트(li)들을 가져온다.
	 * @return {Array}
	 */
	getListItems : function() {
		return this._aListItems;
	},
	
	/**
	 * 셀렉트박스가 disabled 되었는지 여부를 가져온다.
	 */
	getDisabled : function() {
		return this._bDisabled;
	},
	
	/**
	 * 보여질 옵션 그룹을 설정한다.
	 * source 엘리먼트 내에 <option class="selectbox-default"> 엘리먼트가 선언되어있어야한다.
	 * 옵션 그룹을 설정하기 위해 기본으로 설정된 source-option-group 셀렉트 엘리먼트가 선언되어있어야한다. 
	 * option 중 지정된 옵션 그룹명(option-group-그룹명)을 가진 엘리먼트만 보여진다.
	 * @param {String} sName 옵션 그룹 명
	 * @example
<!-- 수행 전 구조 -->
<div>
	<select class="selectbox-source">
   		<option value="0" class="selectbox-default">팀을 선택하세요</option>
   	</select>
	<select class="selectbox-source-option-group"> <!--옵션 그룹을 설정하기 위한 보이지 않는 select-->
   		<option value="1" class="selectbox-option-group-1">Ajax UI1팀</option>
   		<option value="2" class="selectbox-option-group-1">Ajax UI2팀</option>
		<option value="3" class="selectbox-option-group-1">Ajax UI3팀</option>
		<option value="4" class="selectbox-option-group-1">Ajax UI4팀</option>
		<option disabled="disabled" class="selectbox-option-group-1">----------------------</option>
		<option value="5" class="selectbox-option-group-1">SPSUI TF</option>
		<option value="6" class="selectbox-option-group-2">플래시UI1팀</option>	
   		<option value="7" class="selectbox-option-group-2">플래시UI2팀</option>
		<option disabled="disabled" class="selectbox-option-group-2">----------------------</option>
		<option value="8" class="selectbox-option-group-2">RIA기술팀</option>
		<option value="9" class="selectbox-option-group-3">UI기술기획팀</option>
		<option value="10" class="selectbox-option-group-3">웹표준화팀</option>
		<option value="11" class="selectbox-option-group-3">오픈UI기술팀</option>
		<option value="12" class="selectbox-option-group-3">인터널서비스</option>
   	</select>
	<div class="selectbox-box">
		<div class="selectbox-label">팀을 선택하세요</div>
	</div>
	<div class="selectbox-layer">
		<div class="selectbox-list"><ul style="height: auto;"/></div>
	</div>
</div>

setOptionGroup("1")

<!-- 수행 후 구조 -->
<div>
	<select class="selectbox-source">
   		<option value="0" class="selectbox-default">팀을 선택하세요</option>
   		<option value="1" class="selectbox-option-group-1">Ajax UI1팀</option>
   		<option value="2" class="selectbox-option-group-1">Ajax UI2팀</option>
		<option value="3" class="selectbox-option-group-1">Ajax UI3팀</option>
		<option value="4" class="selectbox-option-group-1">Ajax UI4팀</option>
		<option disabled="disabled" class="selectbox-option-group-1">----------------------</option>
		<option value="5" class="selectbox-option-group-1">SPSUI TF</option>
	</select>
	<select class="selectbox-source-option-group"> <!--옵션 그룹을 설정하기 위한 보이지 않는 select-->
   		<option value="1" class="selectbox-option-group-1">Ajax UI1팀</option>
   		<option value="2" class="selectbox-option-group-1">Ajax UI2팀</option>
		<option value="3" class="selectbox-option-group-1">Ajax UI3팀</option>
		<option value="4" class="selectbox-option-group-1">Ajax UI4팀</option>
		<option disabled="disabled" class="selectbox-option-group-1">----------------------</option>
		<option value="5" class="selectbox-option-group-1">SPSUI TF</option>
		<option value="6" class="selectbox-option-group-2">플래시UI1팀</option>	
   		<option value="7" class="selectbox-option-group-2">플래시UI2팀</option>
		<option disabled="disabled" class="selectbox-option-group-2">----------------------</option>
		<option value="8" class="selectbox-option-group-2">RIA기술팀</option>
		<option value="9" class="selectbox-option-group-3">UI기술기획팀</option>
		<option value="10" class="selectbox-option-group-3">웹표준화팀</option>
		<option value="11" class="selectbox-option-group-3">오픈UI기술팀</option>
		<option value="12" class="selectbox-option-group-3">인터널서비스</option>
   	</select>
	<div class="selectbox-box">
		<div class="selectbox-label">팀을 선택하세요</div>
	</div>
	<div class="selectbox-layer">
		<div class="selectbox-list">
			<ul>
				<li class="selectbox-item">Ajax UI1팀</li>
				<li class="selectbox-item">Ajax UI2팀</li>
				<li class="selectbox-item">Ajax UI3팀</li>
				<li class="selectbox-item">Ajax UI4팀</li>
				<li class="selectbox-item-disabled">----------------------</li>
				<li class="selectbox-item">SPSUI TF</li>
			</ul>
		</div>
	</div>
</div>
	 */
	setOptionGroup : function(sName) {
		if (!this._elSelectOptionGroup && !this._elOptionDefault) {
			return;
		}
		
		var elSelect = this.getSelectElement();
		
		var sPrefix = this.option('sClassPrefix');
		var aGroupOption = jindo.$$("." + sPrefix + "option-group-" + sName, this._elSelectOptionGroup);
		
		elSelect.innerHTML = "";
		elSelect.appendChild(this._elOptionDefault.cloneNode(true));
		this._nSelectedIndex = 0; 
		for (var i = 0; i < aGroupOption.length; i++) {
			elSelect.appendChild(aGroupOption[i].cloneNode(true));
		}
		this._sPrevValue = this.getValue();
		
		this.paint();
	},
	
	/**
	 * 선택된 값이 있는지 여부를 가져온다.
	 * Default 옵션이 선택된 경우에 false를 리턴한다.
	 */
	isSelected : function() {
		return !this._aItemData[this.getSelectedIndex()].bDefault;
	},
	
	/**
	 * 선택된 값을 초기화하여 default값으로 되돌린다.
	 */
	setDefault : function() {
		var sPrefix = this.option('sClassPrefix');
		var nDefaultOption = -1;
		jindo.$A(this._aItemData).forEach(function(o, i) {
			if (o.bDefault || o.bSelected) {
				nDefaultOption = i;	
			}
		});
		
		if (this._welSelected) {
			this._welSelected.removeClass(sPrefix + "item-selected");	
		}
		
		if (nDefaultOption < 0) { //default나 selected="selected" 된거 없으면 첫번째 옵션이 default 
			nDefaultOption = 0;
		} 
		
		this._nSelectedIndex = nDefaultOption;
		this.setSelectedIndex(nDefaultOption);
		this._sPrevValue = this.getValue();
		
		this._paint();
	},
	
	/**
	 * 셀렉트박스를 다시 그린다.
	 */
	paint : function() {
		this._paintList();
		this._paintSelected();
		this._paintLabel();
	},
	
	/**
	 * 타이머로 체크하여 계속 다시 그림
	 * @ignore
	 */
	_paint : function() {
		this._paintSelected();
		this._paintLabel();
	},
	
	/**
	 * 현재 설정된 값을 box의 label에 그린다.
	 * @ignore
	 */
	_paintLabel : function() {
		var welLabel = jindo.$Element(this.getLabelElement());
		welLabel.text(this.getText());
	},
	
	/**
	 * 현재 설정된 값을 list에 그린다.
	 * @ignore
	 */
	_paintList : function() {
		var sPrefix = this.option('sClassPrefix');
		this._aOptions = jindo.$$('option', this.getSelectElement());
		var aOptions = this._aOptions;
		this._aItemData = [];
		this._aListItemData = [];
		
		this._nSelectedIndex = 0; 
		var elList = this.getSelectListElement();
		elList.innerHTML = "";
		if (this.option("nHeight")) { /* 높이값 되돌리기 */
			jindo.$Element(this.getLayerElement()).css("height", "auto").css("overflow", "");
		}
		
		for (var i = 0, elOption; elOption = aOptions[i]; i++) {
			
			var welOption = jindo.$Element(elOption);

			var bDefault = welOption.hasClass(sPrefix + 'default');
			var bSelected = welOption.attr("selected") == "selected";
			var bDisabled = bDefault || elOption.disabled;
			
			var sText = welOption.text() || '';
			
			var sValue = welOption.attr("value");
			if (!sValue) {
				welOption.attr("value", sText);
				sValue = sText;
			}
			
			this._aItemData[i] = {
				el : elOption,
				elItem : null,
				sText : sText,
				value : sValue,
				
				bDisabled : bDisabled,
				bSelected : bSelected,
				bDefault : bDefault
			};
			
			// <li> 태그 만들기
			var elItem = null;
			var oItem = this._aItemData[i];
			if (!oItem.bDefault) {

				elItem = jindo.$('<li>');
				// <option> 에 적용된 스타일 그대로 적용하기
				elItem.style.cssText = oItem.el.style.cssText;
				elItem.className = oItem.el.className;
				var welItem = jindo.$Element(elItem);
				welItem.text(oItem.sText);
				
				if (oItem.bDisabled) {
					welItem.addClass(sPrefix + 'item-disabled');
				}
				else {
					welItem.addClass(sPrefix + 'item'); //구분선이 아닐경우만
				}
				
				elList.appendChild(elItem);
				this._aListItemData.push(elItem);
				this._aItemData[i].elItem = elItem;
			}
			
		}
		if (this._aListItemData.length == 0) {
			this.disable();
			return;
		}
		this.enable();
	},
	
	_paintSelected : function() {
		var sPrefix = this.option('sClassPrefix');
		var n = this.getSelectedIndex();
		
		var nPrevSelectedIndex = this._nSelectedIndex;
		if (nPrevSelectedIndex >= 0 && nPrevSelectedIndex < this._aItemData.length) {
			var oItem = this._aItemData[nPrevSelectedIndex];
			if (oItem.elItem) {
				jindo.$Element(oItem.elItem).removeClass(sPrefix + "item-selected").removeClass(sPrefix + "item-over");	
			}
		}
		if (this._welSelected) {
			this._welSelected.removeClass(sPrefix + "item-over");	
		}
		
		this._nSelectedIndex = n; //선택된 index는 이메소드를 그릴때 정의
		var oItem = this._aItemData[n];
		if (oItem.elItem) {
			var elSelected = oItem.elItem;
			var welSelected = jindo.$Element(elSelected);
			this._welSelected = welSelected;
			welSelected.addClass(sPrefix + "item-selected").addClass(sPrefix + "item-over");	
			
			//scroll포지션 세팅
			if (!this.isLayerOpened() || !this.option("nHeight")) {
				return;
			}
			
			var elLayerElement = this.getLayerElement();
			var nHeight = parseInt(jindo.$Element(elLayerElement).css("height"));
			
			var nOffsetTop = elSelected.offsetTop;
			var nOffsetHeight = elSelected.offsetHeight;
			var nScrollTop = elLayerElement.scrollTop;
	
			if (nPrevSelectedIndex < n) {
				var bDown = true;
			}
			else {
				var bDown = false;
			}
			if (nOffsetTop < nScrollTop || nOffsetTop > nScrollTop + nHeight) {
				elLayerElement.scrollTop = nOffsetTop;
			}
			if (bDown) {
				if (nOffsetTop + nOffsetHeight > nHeight + nScrollTop) {
					elLayerElement.scrollTop = (nOffsetTop + nOffsetHeight - nHeight);
				}
			}
			else {
				if (nOffsetTop < nScrollTop) {
					elLayerElement.scrollTop = nOffsetTop;
				}
			}
		}
		
	},
	
	/**
	 * Select 레이어가 열려있는지 여부를 가져온다.
	 * @return {Boolean}
	 */
	isLayerOpened : function() {
		return this.getLayerManager().getVisible();	
	},
	
	/**
	 * SelectBox를 disable 시킨다.
	 * 마우스로 클릭하더라도 목록 레이어가 펼쳐지지 않는다.
	 */
	disable : function() {
		var sPrefix = this.option("sClassPrefix");
		jindo.$Element(this._el).addClass(sPrefix + 'disabled');
		this.getSelectElement().disabled = true;
		this._bDisabled = true;
	},
	
	/**
	 * SelectBox를 enable 시킨다.
	 */
	enable : function() {
		var sPrefix = this.option("sClassPrefix");
		jindo.$Element(this._el).removeClass(sPrefix + 'disabled');
		this.getSelectElement().disabled = false;
		this._bDisabled = false;
	},
	
	_onMouseDownBox : function(e){
		if (this._bDisabled) {
			return;
		}
		
		var oLayerManager = this.getLayerManager();
		if(this.isLayerOpened()) {
			oLayerManager.hide();
		}
		else {
			oLayerManager.show();
		}				
	},
	
	/**
	 * 현재 index로부터 선택가능한 다음 index를 구한다.
	 * @param {Number} nIndex
	 * @param {Number} nTarget
	 * @ignore
	 */
	_getSelectableIndex : function(nIndex, nDirection, nTargetIndex) {
		var nFirst = -1;
		var nLast = this._aItemData.length - 1;
		
		for (var i = 0; i < this._aItemData.length; i++) {
			var oItem = this._aItemData[i];
			if (!oItem.bDisabled && !oItem.bDefault) {
				if (nFirst < 0) {
					nFirst = i;	
				}
				else {
					nLast = i;
				}
			}
		}
		
		if (nTargetIndex < nFirst) {
			nDirection = -Infinity;
		}
		if (nTargetIndex > nLast) {
			nDirection = Infinity;
		}
		
		switch (nDirection) {
			case -1 :
				if (nIndex == nFirst) {
					return nIndex;
				}
				for (var i = nIndex - 1; i > nFirst; i--) {
					var oItem = this._aItemData[i];
					if (!oItem.bDisabled && !oItem.bDefault) {
						return i;
					}					
				}
				return nFirst;
			break;
			
			case 1 :
				if (nIndex == nLast) {
					return nIndex;
				}
				for (var i = nIndex + 1; i < nLast; i++) {
					var oItem = this._aItemData[i];
					if (!oItem.bDisabled && !oItem.bDefault) {
						return i;
					}					
				}
				return nLast;
			break;
			
			case Infinity :
				return nLast;
			break;
			
			case -Infinity :
				return nFirst;
			break;
		}
	},
	
	_onKeyDown : function(e){
		if (!this.isLayerOpened()) {
			return;
		}
		
		//mac용 사파리에서는 select에서의 keydown을 중단
		if (this._oAgent.os().mac && this._oAgent.navigator().safari) {
			e.stop(jindo.$Event.CANCEL_DEFAULT);
			
			var nKeyCode = e.key().keyCode;
			var nSelectedIndex = this.getSelectedIndex();
			var nTargetIndex = nSelectedIndex;
			// 콤보박스에서 발생한 이벤트도 처리하는 경우
			switch (nKeyCode) {
				case 37: // LEFT:
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, -1);
					break;
					
				case 38: // UP:
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, -1);
					break;
				
				case 39: // RIGHT
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, 1);
					break;
					
				case 40: // DOWN
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, 1);
					break;
					
				case 33: // PGUP
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, -Infinity);
					break;
					
				case 34: // PGDN
					nTargetIndex = this._getSelectableIndex(nSelectedIndex, Infinity);
					break;
				case 13: // ENTER
					this.getLayerManager().hide();
					break;
			}
			
			var oParam = {
				nIndex: nTargetIndex,
				nLastIndex: parseInt(this._nSelectedIndex)
			};
			
			this.setSelectedIndex(nTargetIndex);
			this._paint();
			if (oParam.nIndex != oParam.nLastIndex) {
				this.fireEvent("change", oParam);	
			}
			return;
		}
		
		if(e.key().enter || e.key().keyCode == 9) {
			this.getLayerManager().hide();
		}
		
	},
	
	_onFocusSelect : function(e){
		var sPrefix = this.option('sClassPrefix');
		
		var wel = jindo.$Element(this._el); 
		if (!wel.hasClass(sPrefix + 'focused')) {
			if(!this.isLayerOpened()) {
				if (!this.fireEvent("focus")) {
					this.getSelectElement().blur();
					return;
				} 
				this._bRealFocused = true;	
			}
			wel.addClass(sPrefix + 'focused');	
		}
		
		var self = this;
		
		//mac용 사파리에서는 타이머 돌지 않음
		if (!(this._oAgent.os().mac && this._oAgent.navigator().safari)) {
			this._oTimer.start(function(){
			
				var sValue = self.getValue();
				if (!!self._sPrevValue && self._sPrevValue != sValue) {
					var nSelectedIndex = self.getSelectElement().selectedIndex;
					var oItem = self._aItemData[nSelectedIndex];
					//Disable default는 다시 선택되지 않도록. ie는 선택이되네..
					if (oItem.bDisabled || oItem.bDefault) {
						var nDiff = -(self._nSelectedIndex - nSelectedIndex);
						nDiff = (nDiff > 0) ? 1 : -1;
						self.setSelectedIndex(self._getSelectableIndex(self._nSelectedIndex, nDiff, nSelectedIndex));
						return true;
					}
					
					var oParam = {
						nIndex: nSelectedIndex,
						nLastIndex: parseInt(self._nSelectedIndex)
					};
					
					self._paint();
					if (oParam.nIndex != oParam.nLastIndex) {
						self.fireEvent("change", oParam);	
					}
					
					self._sPrevValue = sValue;
				}
				
				return true;
			}, 10);
		}
		
		this._paint();
	},
	
	_onBlurSelect : function(e){
		var sPrefix = this.option('sClassPrefix');
		if (this._bRealFocused) { //레이어가 오픈되지 않고 focus되었던 경우에만 blur 발생
			this.fireEvent("blur");
			jindo.$Element(this._el).removeClass(sPrefix + 'focused');
			this._bRealFocused = false;
		}
		var self = this;
		setTimeout(function(){
			self._oTimer.abort();	
		}, 10); //마우스로 선택된것도 체크되도록
		
	}
	
}).extend(jindo.HTMLComponent);	/**
 * @fileOverview 메뉴의 펼침/닫힘을 이용한 네비게이션을 구현한 아코디언 컴포넌트
 * @author senxation
 * @version 0.4
 */
jindo.Accordion = jindo.$Class({
	/** @lends jindo.Accordion */
	/**
	 * Accordian 컴포넌트를 생성한다.
	 * @constructs
	 * @param {String | HTMLElement} el Accordian 컴포넌트를 적용할 레이어의 id 혹은 레이어 자체 
	 * @param {Object} oOption 초기화 옵션 설정을 위한 객체.
	 * @extends jindo.UIComponent
	 * @requires jindo.Timer
	 * @requires jindo.Transition
	 * @example
var oAccordion = new jindo.Accordion("panel", {
	sDirection : "vertical" // (String) 방향값, 세로("vertical") or 가로("horizontal") 
	nDuration : 300, // (Number) Transition이 적용될 시간 (ms)
	nFPS : 30, // (Number) Transition이 적용될 frame per second
	sEffect : "linear", // (String) Transition 효과의 종류
	nExpandDelay : 0 // (String) 펼칠 때의 딜레이 시간 (ms)
	nContractDelay : 0 // (String) 전체 축소시 딜레이 시간 (ms)
}).attach({
	click : function(oCustomEvent) {
		//handler를 클릭 하였을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nIndex : (Number) 클릭된 handler의 인덱스
		//	element : (HTMLElement) handler
		//}
		if(this.getExpanded() == oCustomEvent.nIndex) this.contractAll();
		else this.expand(oCustomEvent.nIndex);
	},
	mouseover : function(oCustomEvent) {
		//handler에 마우스 커서를 올렸을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nIndex : (Number) 클릭된 handler의 인덱스
		//	element : (HTMLElement) handler
		//	weEvent : (jindo.$Event) jindo $Event 객체
		//}
	},
	mouseout : function(oCustomEvent) {
		//layer에서 마우스 커서가 벗어났을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nIndex : (Number) 클릭된 handler의 인덱스
		//	element : (HTMLElement) handler
		//}
	}
});
	 */
	$init : function(el, htOption) {
		/**
		 * Accordian 컴포너트가 적용될 레이어
		 * @type {HTMLElement}
		 */
		this._el = jindo.$(el);
		this.option({
			classPrefix : "accordion-",
			sDirection : "vertical",
			nDuration : 300,
			nFPS : 30,
			sEffect : "linear",
			nExpandDelay : 0,
			nContractDelay : 0,
			bActivateOnload : true
		});
		this.option(htOption || {});
		
		var sClassPrefix = this.option("classPrefix");
		
		/**
		 * 레이어의 자식 엘리먼트들. 편의상 block으로 명명한다.
		 * @type {HTMLElement}
		 * @remark 반드시 class명을 block으로 정의한다.
		 */
		this._aBlock = jindo.$$("." + sClassPrefix + "block", this._el);

		/**
		 * Timer 객체
		 * @type {jindo.Timer}
		 * @see jindo.Timber
		 */		
		this._oTimer = new jindo.Timer();
				
		/**
		 * Transition 객체
		 * @type {jindo.Transition}
		 * @see jindo.Transition
		 */
		this._oTransition = new jindo.Transition({ bCorrection : true }).fps(this.option("nFPS"));
		
		this._wfOnMouseOverClick = jindo.$Fn(this._onMouseOverClick, this);
		this._wfOnMouseOut = jindo.$Fn(this._onMouseOut, this);
		if (this.option("bActivateOnload")) {
			this.activate();
		}
	},
	
	_onActivate : function() {
		this._wfOnMouseOverClick.attach(this._el, "click");
		this._wfOnMouseOverClick.attach(this._el, "mouseover");
		this._wfOnMouseOut.attach(this._el, "mouseout");
	},
	
	_onDeactivate : function() {
		this._wfOnMouseOverClick.detach(this._el, "click");
		this._wfOnMouseOverClick.detach(this._el, "mouseover");
		this._wfOnMouseOut.detach(this._el, "mouseout");
	},
	
	_onMouseOverClick : function(we) {
		var el = we.element;
		if (el == this._el) {
			return;
		}
		
		var sClassPrefix = this.option("classPrefix");
		var elBlock = (jindo.$Element(el).hasClass(sClassPrefix + "block")) ? el : jindo.$$.getSingle("! ." + sClassPrefix + "block", el);
		var nIndex = null;
		jindo.$A(this._aBlock).forEach(function(o, i) { 
			if (o === elBlock) {
				nIndex = i;
			} 
		});
		
		if (typeof nIndex == "number") {
			var elHandler = this.getHandler(nIndex);
			if (elHandler === elBlock || el === elHandler) {
				this.fireEvent(we.type, {
					element: el,
					nIndex: nIndex,
					weEvent : we
				});
			}
		}
	},
	
	_onMouseOut : function(we) {
		var el = we.element;
		if (el == this._el) {
			return;
		}
		var sClassPrefix = this.option("classPrefix");
		var elBlock = (jindo.$Element(el).hasClass(sClassPrefix + "block")) ? el : jindo.$$.getSingle("! ." + sClassPrefix + "block", el);
		var nIndexOfBlock = null;
		jindo.$A(this._aBlock).forEach(function(o, i) { 
			if (o === elBlock) {
				nIndexOfBlock = i;
			} 
		});

		var self = this;
		var bMouseOutFromLayer = true;
		jindo.$A(jindo.$$("! *", we.relatedElement)).forEach(function(o){
			if (o == self._el) {
				bMouseOutFromLayer = false;
				jindo.$A.Break();
			}
		});
		if(elBlock && bMouseOutFromLayer && typeof nIndexOfBlock == "number") {
			this.fireEvent(we.type, {
				element: elBlock,
				nIndex: nIndexOfBlock
			});
		}
	},
	
	/**
	 * 
	 * @param {Object} n
	 * @ignore
	 */
	_getHeadSize : function(n) {
		var el = this.getHead(n);
		el.style.zoom = 1; //ie rendering bug
		return { width : jindo.$Element(el).width(), height : jindo.$Element(el).height() };			
	},
	
	/**
	 * 
	 * @param {Object} n
	 * @ignore
	 */
	_getBodySize : function(n) {
		var el = this.getBody(n);
		el.style.zoom = 1; //ie rendering bug
		return { width : jindo.$Element(el).width(), height : jindo.$Element(el).height() };			
	},
	
	getTransition : function() {
		return this._oTransition;
	},
	
	/**
	 * n번째 블럭을 확장한다.
	 * @param {Number} n 
	 */
	expand : function(n) {
		var self = this;
		this._oTimer.abort();
		
		if (this.getExpanded() == n) {
			return;
		}
		
		var aArgs = new Array();
		aArgs.push(this.option("nDuration"));
		jindo.$A(this._aBlock).forEach(function(o,i){
			
			var aHeadSize = self._getHeadSize(i);
			var aBodySize = self._getBodySize(i);
			
			aArgs.push(self._aBlock[i]);
			
			switch (self.option("sDirection")) {
				case "vertical" :
					if (i == n) aArgs.push({ '@height' : jindo.Effect[self.option("sEffect")](aBodySize.height + aHeadSize.height + "px") });
					else aArgs.push({ '@height' : jindo.Effect[self.option("sEffect")](aHeadSize.height + "px") });
					break;
				case "horizontal" :
					if (i == n) aArgs.push({'@width': jindo.Effect[self.option("sEffect")](aBodySize.width + aHeadSize.width + "px")});
					else aArgs.push({ '@width': jindo.Effect[self.option("sEffect")](aHeadSize.width + "px")});
					break;
			}
		});
		this._oTimer.start(function(){
			self._oTransition.start.apply(self._oTransition, aArgs);
			self._setExpanded(n);	
		}, this.option("nExpandDelay"));
	},
	
	/**
	 * 모든 블럭을 확장한다.
	 */
	expandAll : function() {
		var self = this;
		this._oTimer.abort();
		
		var aArgs = new Array();
		aArgs.push(this.option("nDuration"));
		jindo.$A(this._aBlock).forEach(function(o,i){
			
			var aHeadSize = self._getHeadSize(i);
			var aBodySize = self._getBodySize(i);
			
			aArgs.push(self._aBlock[i]);
			switch (self.option("sDirection")) {
				case "vertical" :
					aArgs.push({ '@height' : jindo.Effect[self.option("sEffect")](aBodySize.height + aHeadSize.height + "px") });
					break;
				case "horizontal" :
					aArgs.push({'@width': jindo.Effect[self.option("sEffect")](aBodySize.width + aHeadSize.width + "px")});
					break;
			}
		});
		this._oTimer.start(function(){
			self._oTransition.start.apply(self._oTransition, aArgs);
			self._setExpanded("all");	
		}, this.option("nExpandDelay"));
		
	},

	/**
	 * 모든 블럭을 축소한다.
	 * @param n 지연시간 (ms)
	 */
	contractAll : function() {
		var self = this;
		var aArgs = new Array();
		aArgs.push(this.option("nDuration"));
		jindo.$A(this._aBlock).forEach(function(o,i){
			aArgs.push(self._aBlock[i]);
			var aHeadSize = self._getHeadSize(i);
			switch (self.option("sDirection")) {
				case "vertical" :
					aArgs.push({ '@height' : jindo.Effect[self.option("sEffect")](aHeadSize.height + "px") });
					break;
				case "horizontal" :
					aArgs.push({ '@width': jindo.Effect[self.option("sEffect")](aHeadSize.width + "px")});
					break;
			}
		});
		this._oTimer.start(function(){
			self._oTransition.start.apply(self._oTransition, aArgs);
			self._setExpanded(null);
		}, this.option("nContractDelay"));
	},
	
	_setExpanded : function(n) {
		this.nExpanded = n;
	},
	
	/**
	 * 몇 번째 블럭이 확장되었는지 가져온다.
	 * @return {Number} 전체확장일 경우 "all", 전체 축소일경우 null  
	 */
	getExpanded : function() {
		return this.nExpanded;
	},
	
	/**
	 * Block을 가져온다.
	 * @param {Object} n
	 */
	getBlock : function(n) {
		return this._aBlock[n];
	},
	
	/**
	 * 모든 Block을 가져온다.
	 * @return {Array}
	 */
	getAllBlocks : function() {
		return this._aBlock;
	},
	
	/**
	 * Block의 Head를 가져온다.
	 * Head는 Block이 축소되었을때도 항상 노출되는 제목 부분이다.
	 * @param {Object} n
	 */
	getHead : function(n) {
		var elBlock = this.getBlock(n);
		return jindo.$$.getSingle("dt", elBlock);
	},
	
	/**
	 * Block의 Body를 가져온다.
	 * Body는 Block이 확장되었을때만 노출되는 내용 부분이다.
	 * @param {Object} n
	 */
	getBody : function(n) {
		var elBlock = this.getBlock(n);
		return jindo.$$.getSingle("dd", elBlock);
	},
	
	/**
	 * 이벤트를 처리할 핸들러 엘리먼트를 가져온다.
	 * 해당 block내에 클래스명 "handler" 를 가진 엘리먼트를 리턴하고
	 * 없을 경우 해당 block을 리턴한다.
	 * @return {HTMLElemenr}
	 */
	getHandler : function(n) {
		var sClassPrefix = this.option("classPrefix");
		var elBlock = this.getBlock(n);
		return jindo.$$.getSingle("."+sClassPrefix+"handler", elBlock) || this.getBlock(n);
	}
	
}).extend(jindo.UIComponent);
﻿/**
 * @fileOverview FileSelect (input[type=file])의 찾아보기(browse) 버튼을 대체 적용하는 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.BrowseButton = jindo.$Class({
	 /** @lends jindo.BrowseButton */						
	_elBox : null, //마우스 포지션에 따라다니게될 input[type=file]을 포함한 레이어

	_oOrgPos : null,

	/**
	 * BrowseButton 컴포넌트를 생성한다.
	 * BrowseButton은 FileSelect (input[type=file])의 찾아보기(browse) 버튼을 대체 적용한다.
	 * 적용된 FileSelect는 구현상 임시의 플로트 레이어로 이동되고 폼 submit시에  
	 * @constructs
	 * @extends jindo.Component
	 * @param {HTMLElement} el 기준 엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 * @example
new jindo.BrowseButton($('file'), jindo.$('button'), { 
	sClassPrefix : 'button-' 
	//컴포넌트가 적용되면 대체 버튼 엘리먼트에 클래스명 sClassPrefix+"applied" 가 추가됨
	//대체 버튼 엘리먼트에 마우스 오버시 sClassPrefix+"over" 가 추가됨
}).attach({
	'over' : function() {
		//찾아보기 버튼에 커서가 over 되었을 때 발생 
	},
	'out' : function() {
		//찾아보기 버튼에서 커서가 out 되었을 때 발생
	},
	'sourceChange' : function() {
		//선택된 파일의 값이 바뀌었을때 발생
		jindo.$("input").value = this.getFileSelect().value;
	}
});
	 */
	$init : function(el, htOption) {
		
		this.option({
			sClassPrefix : 'browse-'
		});
		
		this.option(htOption || {});
		
		this._el = jindo.$(el);

		this._assignHTMLElement();		
		this._attachEvents();
		
	},
	
	_assignHTMLElement : function() {
		var sClassPrefix = this.option('sClassPrefix');
		
		this._elBox = jindo.$$.getSingle("." + sClassPrefix + "box", this._el);
		this._elFileSelect = jindo.$$.getSingle("." + sClassPrefix + "file-input", this._el);
		this._elBrowseButton = jindo.$$.getSingle("." + sClassPrefix + "button", this._el);
		
		var elBox = this.getBox();
		var elFileSelect = this.getFileSelect();
		var elBrowseButton = this.getBrowseButton();
		
		this._oOrgPos = {
			form : jindo.$$.getSingle('! form', elFileSelect),
			parent : elFileSelect.parentNode,
			sibling : elFileSelect.nextSibling,
			cssText : elFileSelect.style.cssText
		};

		elFileSelect.style.cssText =
			'top:-.5em !important;' +
			'height:500px !important;';

		
		jindo.$Element(elBrowseButton).addClass(sClassPrefix + 'applied');
	},
	
	_adjustFileSelectPos : function(nX) {
		
		var elBox = this.getBox();
		var nPitch = (jindo.$Element(elBox).offset().left + document.documentElement.scrollLeft) - nX;
		this.getFileSelect().style.right = nPitch + 30 + 'px';
		
	},
	
	_attachEvents : function() {
		
		var self = this;
		var elBrowseButton = this.getBrowseButton();
		var welBrowseButton = jindo.$Element(elBrowseButton);
		var elBox = this.getBox();
		var elFileSelect = this.getFileSelect();
		
		
		var wfHoverOnBrowseButton = jindo.$Fn(function(we) {
			welBrowseButton.addClass(this.option('sClassPrefix') + 'over');
			this.fireEvent('over');			
			this._adjustFileSelectPos(we.pos().pageX);
		}, this);
		
		var wfRestore = jindo.$Fn(function(we) {
			welBrowseButton.removeClass(this.option('sClassPrefix') + 'over');
			elFileSelect.style.right = "0px";
			this.fireEvent('out');
		}, this);
		
		var wfMouseMoveOnFloat = jindo.$Fn(function(we) {
			this._adjustFileSelectPos(we.pos().pageX);
		}, this);
		
		jindo.$Fn(function(we) {
			this.fireEvent('sourceChange');
		}, this).attach(this.getFileSelect(), 'change');

		wfHoverOnBrowseButton.attach(elBox, 'mouseover');
		wfMouseMoveOnFloat.attach(elBox, 'mousemove');
		wfRestore.attach(elBox, 'mouseout');
	},
	
	/**
	 * File Input을 감싸고 있는 Box 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getBox : function() {
		return this._elBox;
	},
	
	/**
	 * 적용된 File Input (input[type=file])을 가져온다.
	 * @return {HTMLElement}
	 */
	getFileSelect : function() {
		return this._elFileSelect;
	},
	
	/**
	 * 대체될 찾아보기 버튼을 가져온다.
	 * @return {HTMLElement} 
	 */
	getBrowseButton : function() {
		return this._elBrowseButton;
	}
}).extend(jindo.Component);
/**
 * @fileOverview 달력을 통해 Input Form에 날짜를 입력하기 위한 날짜선택 컴포넌트
 * @name DatePicker.js
 * @author senxation
 * @version 0.6
 */

jindo.DatePicker = jindo.$Class({
	/** @lends jindo.DatePicker */
	
	_bIsActivating : false, //컴포넌트의 활성화 여부
	_aDatePickerSet : [],
	_htSelectedDatePickerSet : null, //클릭된 엘리먼트에 대한 DatePickerSet
	
	/**
	 * DatePicker 컴포넌트를 생성한다.
	 * Calendar 컴포넌트를 통해 출력된 달력의 날짜 선택으로 Input의 값을 입력한다.
	 * @constructs
	 * @extends jindo.UIComponent
	 * @requires jindo.Calendar
	 * @requires jindo.LayerManager
	 * @requires jindo.LayerPosition
	 * @param {HTMLElement} elCalendarLayer 달력을 출력할 레이어 엘리먼트 혹은 id 
	 * @param {Object} oOption 초기화 옵션 설정을 위한 객체.
     * @example 
var oDatePicker = new jindo.DatePicker("calendar_layer", {
	sClassPrefix : "calendar-", //Default Class Prefix
	nYear : 1983, //기본 연도 (지정하지 않으면 현재)
	nMonth : 5, //월 (지정하지 않으면 현재)
	nDate : 12, //일	(지정하지 않으면 현재)
	bDefaultSet : false, //defaultSet값이 true이면 기본 Input 값을 설정한다. false이면 설정하지 않는다.
	sDateFormat : "yyyy-mm-dd", //input에 입력될 날짜의 형식
	sTitleFormat : "yyyy-mm", //달력의 제목부분에 표시될 형식
	aMonthTitle : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], //월 이름
	
	//LayerManager를 위한 옵션
	sCheckEvent : "click",
	nShowDelay : 0, 
	nHideDelay : 0,
	
	bUseLayerPosition : true, //LayerPosition을 사용해서 포지셔닝을 할지의 여부
	//LayerPosition을 위한 옵션
	sPosition: "outside-bottom",
	sAlign: "left",
	nTop: 0,
	nLeft: 0,
	bAuto: false
}).attach({
	focus : function() {
		//Input에 포커스 되었을 때 발생 
	},
	click : function(oCustomEvent) {
		//Input에 마우스를 클릭 하였을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 클릭된 엘리먼트
		//}
	},
	beforeDraw : function(oCustomEvent) {
		//달력을 새로 그리기 전 발생
		//전달되는 이벤트 객체 e = {
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//}
		//oCustomEvent.stop()을 실행하면 draw 커스텀 이벤트가 발생하지 않는다. 
	},
	draw : function(oCustomEvent) {
		//달력을 새로 그리는 중 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 날짜가 쓰여질 목표 엘리먼트
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//	nDate : (Number) 일 (ex. 12)
		//}
	},
	afterDraw : function(oCustomEvent) {
		//달력을 그린 이후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//}
	},
	beforeSelect : function(oCustomEvent) {
		//달력레이어에서 날짜를 선택하고 Text Input에 값이 설정되기 직전에 실행
		//전달되는 이벤트 객체 oCustomEvent = {
		//	sText : (String) Text Input에 설정될 값
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//	nDate : (Number) 일
		//	bPrevMonth : (Boolean) 그려질 날이 이전달의 날인지 여부
		//	bNextMonth : (Boolean) 그려질 날이 다음달의 날인지 여부
		//}
		//oCustomEvent.stop()을 실행하면 select 이벤트가 발생되기전에 수행을 중단한다.
	},
	select : function(oCustomEvent) {
		//달력레이어에서 날짜를 선택하고 Text Input에 값이 설정된 이후 실행
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nYear : (Number) 연 (ex. 2009) 
		//	nMonth : (Number) 월 (ex. 5)
		//	nDate : (Number) 일
		//	bPrevMonth : (Boolean) 그려질 날이 이전달의 날인지 여부
		//	bNextMonth : (Boolean) 그려질 날이 다음달의 날인지 여부
		//}
	}
});
	 * @example 
옵션의 dateFormat은 날짜의 형식으로 다음의 형식을 조합하여 사용할 수 있다.
ex) "yyyy.m.d", "yyyy년 m월 d일", "yy m/d" ...
연도 : yyyy(4자리 숫자, ex "2001"), yy(2자리 숫자, ex "01")
월 : mm(2자리 숫자, ex "01"), m(1자리 숫자, ex "1"), M(monthTitle에 설정된 값으로 보여줌 ex "JAN")
일 : dd(2자리 숫자, ex "01"), d(1자리 숫자, ex "1")
	 * @example 
옵션의 titleFormat은 날짜의 형식으로 다음의 형식을 조합하여 사용할 수 있다.
ex) "yyyy.m", "yyyy년 m월", "yy/m" ...
연도 : yyyy(4자리 숫자, ex "2001"), yy(2자리 숫자, ex "01")
월 : mm(2자리 숫자, ex "01"), m(1자리 숫자, ex "1"), M(monthTitle에 설정된 값으로 보여줌 ex "JAN")
	 */	
	$init : function(elCalendarLayer, htOption) {
		
		var oDate = new Date();
		this.htDefaultOption = {
			sClassPrefix : "calendar-", //Default Class Prefix
			nYear : oDate.getFullYear(),
			nMonth : oDate.getMonth() + 1,
			nDate : oDate.getDate(),			
			bDefaultSet : false, //defaultSet값이 true이면 기본 Input 값을 설정한다. false이면 설정하지 않는다.
			sDateFormat : "yyyy-mm-dd", //input에 입력될 날짜의 형식
			sTitleFormat : "yyyy-mm", //달력의 제목부분에 표시될 형식
			aMonthTitle : ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"], //월 이름
			
			//LayerManager를 위한 옵션
			LayerManager : {
				sCheckEvent : "click",
				nShowDelay : 0, 
				nHideDelay : 0
			},
			
			bUseLayerPosition : true, //LayerPosition을 사용해서 포지셔닝을 할지의 여부
			LayerPosition : { //LayerPosition을 위한 옵션
				sPosition: "outside-bottom",
				sAlign: "left",
				nTop: 0,
				nLeft: 0,
				bAuto: false
			}
		};
		this.option(this.htDefaultOption);
		this.option(htOption);
		
		/**
		 * 달력이 출력될 레이어
		 * @type HTMLElement
		 */
		this._elCalendarLayer = jindo.$(elCalendarLayer);
		this._initCalendar();
		this._initLayerManager();
		
		if(this.option("bUseLayerPosition")) {
			this._initLayerPosition();	
		}
		
		var sClassPrefix = this.option("sClassPrefix");
		
		this._wfFocusInput = jindo.$Fn(this._onFocusInput, this);
		this._wfClickInput = jindo.$Fn(this._onClickInput, this);
		this._wfClickDate = jindo.$Fn(this._onClickDate, this);
		this.activate(); //컴포넌트를 활성화한다.
	},
	
	/**
	 * DatePicker를 적용할 셋을 추가한다.
	 * input 엘리먼트는 반드시 존재해야한다.
	 * @param {HashTabel} ht
	 * @return {jindo.DatePicker} this
	 * @example
oDatePicker.addDatePickerSet({
	elInput : $("input"), //날짜가 입력될 input 엘리먼트
	elButton : $("button"), //input외에도 달력을 보이게 할 엘리먼트
	htOption : {
		nYear : 1983,
		nMonth : 5,
		nDate : 12,			
		nDefaultSet : true,
		sDateFormat : "yyyy-mm-dd",
		sTitleFormat : "yyyy-mm"
	}
})
	 */
	addDatePickerSet : function(ht) {
		
		if (typeof ht.htOption == "undefined") {
			ht.htOption = {};
		}
		
		var htOption = this.option();
		
		//빈 값은 기본값으로 셋팅해줌.
		for (var value in htOption) {
			if (typeof ht.htOption[value] == "undefined") {
				ht.htOption[value] = htOption[value]; 
			}
		}
		this._aDatePickerSet.push(ht);
		
		var oLayerManager = this.getLayerManager();
		ht.elInput.readOnly = true;
		oLayerManager.link(ht.elInput);
		
		if (typeof ht.elButton != "undefined") {
			oLayerManager.link(ht.elButton);
			this._wfClickInput.attach(ht.elButton, "click");
		}
		this._wfFocusInput.attach(ht.elInput, "focus");
		this._wfClickInput.attach(ht.elInput, "click");
		
		if (ht.htOption.defaultSet) {
			this.setInput(ht, {
				nYear : ht.htOption.nYear,
				nMonth : ht.htOption.nMonth,
				nDate : ht.htOption.nDate
			});
		}
		return this;	
	},
	
	/**
	 * DatePicker를 적용할 셋을 제거한다.
	 * @param {HashTable} ht
	 * @return {jindo.DatePicker} this
	 * @example
oDatePicker.removeDatePickerSet({
	elInput : $("input"), //날짜가 입력될 input 엘리먼트
	elButton : $("button") //input외에도 달력을 보이게 할 엘리먼트 (생략가능)
})
	 */
	removeDatePickerSet : function(ht) {
		var nIndex = -1;
		for (var i = 0, len = this._aDatePickerSet.length ; i < len; i++) {
			if (this._aDatePickerSet[i].elInput == ht.elInput || this._aDatePickerSet[i].elButton == ht.elButton) {
				nIndex = i;
				break;				
			}
		}
		
		var htDatePickerSet = this._aDatePickerSet[nIndex];
		if (typeof htDatePickerSet.elButton != "undefined") {
			oLayerManager.unlink(htDatePickerSet.elButton);
			this._wfClickInput.detach(htDatePickerSet.elButton, "click");
		}
		this._wfFocusInput.detach(htDatePickerSet.elInput, "focus");
		this._wfClickInput.detach(htDatePickerSet.elInput, "click");
		if (htDatePickerSet == this._htSelectedDatePickerSet) {
			this._htSelectedDatePickerSet = null;
		}		
		this._aDatePickerSet.splice(i, 1);
		
		return this;
	},
	
	/**
	 * 추가된 DatePickerSet의 배열을 가져온다.
	 * 파라메터로 엘리먼트가 전달될 경우 해당 엘리먼트가 속하는 DatePickerSet를 리턴한다. 
	 * @param {HTMLElement} el
	 * @return {Array | Object}
	 */
	getDatePickerSet : function(el) {
		if(typeof el == "undefined") {
			return this._aDatePickerSet;
		}
		
		for (var i = 0, len = this._aDatePickerSet.length; i < len; i++) {
			if (this._aDatePickerSet[i].elInput == el || this._aDatePickerSet[i].elButton == el) {
				return this._aDatePickerSet[i];				
			}
		}
		return false;
	},
	
	/**
	 * 달력레이어를 가져온다.
	 * @return {HTMLElement}
	 */
	getCalendarLayer : function() {
		return this._elCalendarLayer;
	},
	
	_initCalendar : function() {
		/**
		 * 달력 오브젝트
		 * @type Object jindo.Calendar 컴포넌트 
		 * @see jindo.Calendar
		 */
		var self = this;
		var sClassPrefix = this.option("sClassPrefix");
		this._oCalendar = new jindo.Calendar(this.getCalendarLayer(), this.option()).attach({
			beforeDraw : function(oCustomEvent) {
				if(!self.fireEvent("beforeDraw", oCustomEvent)) {
					oCustomEvent.stop();
				}
			},
			draw : function(oCustomEvent) {
				//선택한 날짜 class명 부여
				var el = oCustomEvent.element;
				var oShowDatePickerSet = self._htSelectedDatePickerSet;
				if (oCustomEvent.nYear == oShowDatePickerSet.nYear && oCustomEvent.nMonth == oShowDatePickerSet.nMonth && oCustomEvent.nDate == oShowDatePickerSet.nDate) {
					jindo.$Element(oCustomEvent.elWrapper).addClass(sClassPrefix + "selected");	
				}
				if(!self.fireEvent("draw", oCustomEvent)) {
					oCustomEvent.stop();
				}
			},
			afterDraw : function(oCustomEvent) {
				self.fireEvent("afterDraw", oCustomEvent);
			}
		});
	},
	
	/**
	 * Calendar 객체를 가져온다.
	 * @return {jindo.Calendar}
	 * @see jindo.Calendar
	 */
	getCalendar : function() {
		return this._oCalendar;
	},
	
	_initLayerManager : function() {
		var self = this;
		var sPrefix = this.option("sClassPrefix");
		var elCalendarLayer = this.getCalendarLayer();
		this._oLayerManager = new jindo.LayerManager(elCalendarLayer, this.option("LayerManager")).attach({
			hide : function(oCustomEvent) {
				self._htSelectedDatePickerSet = null;
			}
		}).link(elCalendarLayer);
	},

	/**
	 * LayerManager 객체를 가져온다.
	 * @return {jindo.LayerManager}
	 */	
	getLayerManager : function() {
		return this._oLayerManager;
	},
	
	_initLayerPosition : function() {
		this._oLayerPosition = new jindo.LayerPosition(null, this.getCalendarLayer(), this.option("LayerPosition"));
	},
	
	/**
	 * LayerPosition 객체를 가져온다.
	 * @return {jindo.LayerPosition}
	 */
	getLayerPosition : function() {
		return this._oLayerPosition;
	},
	
	/**
	 * elInput의 값을 가져온다
	 * @param {Object} htDatePickerSet
	 * @return {String} 
	 */
	getInput : function(htDatePickerSet) {
		return htDatePickerSet.elInput.value;
	},
	
	/**
	 * elInput에 형식에 맞는 날짜값을 설정한다.
	 * @param {Object} htDatePickerSet
	 * @param {HashTable} htDate 
	 */
	setInput : function(htDatePickerSet, htDate) {
		htDatePickerSet.nYear = htDate.nYear;
		htDatePickerSet.nMonth = htDate.nMonth;
		htDatePickerSet.nDate = htDate.nDate;
		htDatePickerSet.elInput.value = this._getDateFormat(htDate);
	},
	
	/**
	 * option("dateFormat")에 맞는 형식의 문자열을 구한다.
	 * @param {HashTable} htDate 
	 * @return {String} sDateFormat
	 * @ingore
	 */
	_getDateFormat : function(htDate) {
		var nYear = htDate.nYear;
		var nMonth = htDate.nMonth;
		var nDate = htDate.nDate;
		
		if (nMonth < 10) 
            nMonth = ("0" + (nMonth * 1)).toString();
        if (nDate < 10) 
            nDate = ("0" + (nDate * 1)).toString();
		
		var sDateFormat = this.option("sDateFormat");
		sDateFormat = sDateFormat.replace(/yyyy/g, nYear).replace(/y/g, (nYear).toString().substr(2,2)).replace(/mm/g, nMonth).replace(/m/g, (nMonth * 1)).replace(/M/g, this.option("aMonthTitle")[nMonth-1] ).replace(/dd/g, nDate).replace(/d/g, (nDate * 1));	
		return sDateFormat;
	},
	
	_linkOnly : function (htDatePickerSet) {
		var oLayerManager = this.getLayerManager();
		oLayerManager.setLinks([this.getCalendarLayer()]);
		oLayerManager.link(htDatePickerSet.elInput);
		if (typeof htDatePickerSet.elButton != "undefined") {
			oLayerManager.link(htDatePickerSet.elButton);	
		}
	},
	
	/**
	 * 컴포넌트의 활성여부를 가져온다.
	 * @return {Boolean}
	 */
	isActivating : function() {
		return this._bIsActivating;
	},

	/**
	 * 컴포넌트를 활성화한다.
	 */
	activate : function() {
		if (this.isActivating()) {
			return;
		}
		
		//활성화 로직 ex)event binding
		/*
		 * 날짜클릭시 이벤트
		 */
		var elCalendarLayer = this.getCalendarLayer();
		this._wfClickDate.attach(elCalendarLayer, "click").attach(elCalendarLayer, "mouseover").attach(elCalendarLayer, "mouseout");
						
		this._bIsActivating = true;
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	deactivate : function() {
		if (!this.isActivating()) {
			return;
		}
		
		//비활성화 로직 ex)event unbinding
		var elCalendarLayer = this.getCalendarLayer();
		this._wfClickDate.detach(elCalendarLayer, "click").detach(elCalendarLayer, "mouseover").detach(elCalendarLayer, "mouseout");
		
		this._bIsActivating = false;
	},
	/**
	 * @deprecated
	 */
	attachEvent : function() {
		return this;
	},
	/**
	 * @deprecated
	 */
	detachEvent : function() {
		return this;		
	},
	/**
	 * @deprecated
	 */
	addButton : function() {
		return this;
	},
	
	_onFocusInput : function(we){
		this.fireEvent("focus");
	},
	
	_onClickInput : function(we){
		
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		if(!this.fireEvent("click", {element : we.currentElement})) return;
		
		var htDatePickerSet = this.getDatePickerSet(we.currentElement);
		this._htSelectedDatePickerSet = htDatePickerSet; //보여진 DatePickerSet
		this._linkOnly(htDatePickerSet);
		
		var nYear = htDatePickerSet.nYear || htDatePickerSet.htOption.nYear;
		var nMonth = htDatePickerSet.nMonth || htDatePickerSet.htOption.nMonth;
		
		this.getCalendar().draw(nYear, nMonth);
		this.getLayerManager().show();
		
		//LayerPosition을 사용할 경우에만
		if (this.option("bUseLayerPosition")) {
			this.getLayerPosition().setElement(htDatePickerSet.elInput).setPosition();
		}
	},
	
	_onClickDate : function(we){
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		var sClassPrefix = this.option("sClassPrefix");
		var el = we.element;
		
		var elDate = (jindo.$Element(el).hasClass(sClassPrefix + "date")) ? el : jindo.$$.getSingle("."+ sClassPrefix + "date", el);
		if (elDate && (elDate == el || elDate.length == 1)) {
			var elTargetDay = elDate;
			while(!jindo.$Element(elTargetDay.parentNode).hasClass(sClassPrefix + "week")) {
				var elTargetDay = elDate.parentNode;
			}
			var welTargetDay = jindo.$Element(elTargetDay);
			
			if (we.type == "mouseover") {
				welTargetDay.addClass(sClassPrefix + "over");
				return;
			}
			if (we.type == "mouseout") {
				welTargetDay.removeClass(sClassPrefix + "over");
				return;
			}

			var htDate = this.getCalendar()._getShownDate();
			var oDatePrevMonth = this.getCalendar()._getRelativeDate(0, -1, htDate);
			var oDateNextMonth = this.getCalendar()._getRelativeDate(0, 1, htDate);
			var bPrevMonth = false;
			var bNextMonth = false;
			var nYear = htDate.nYear;
			var nMonth = htDate.nMonth;
			var nDate = welTargetDay.text();

			if (welTargetDay.hasClass(sClassPrefix + "prev-mon")) {
				bPrevMonth = true;
				nYear = oDatePrevMonth.nYear;
				nMonth = oDatePrevMonth.nMonth;
			} else if (welTargetDay.hasClass(sClassPrefix + "next-mon")) {
				bNextMonth = true; 
				nYear = oDateNextMonth.nYear;
				nMonth = oDateNextMonth.nMonth;
			}

			var htNewDate = {
				"nYear" : nYear,
				"nMonth" : (nMonth * 1),
				"nDate" : (nDate * 1)
			};
			var sDateFormat = this._getDateFormat(htNewDate);
			if (!this.fireEvent("beforeSelect", {
				"sText": sDateFormat,
				"nYear": nYear,
				"nMonth": nMonth,
				"nDate": nDate,
				"bPrevMonth" : bPrevMonth,
				"bNextMonth" : bNextMonth
			})) {
				return;
			}
			this.setInput(this._htSelectedDatePickerSet, htNewDate);
			
			if(this.fireEvent("select", {
				"sText": sDateFormat,
				"nYear": nYear,
				"nMonth": nMonth,
				"nDate": nDate,
				"bPrevMonth" : bPrevMonth,
				"bNextMonth" : bNextMonth
			})) {
				this.getLayerManager().hide();	
			}
		}
	}
}).extend(jindo.UIComponent);
/**
 * @fileOverview 외부의 모든 문서를 가리는 다이얼로그
 * @author senxation
 * @version 0.2
 */

jindo.ModalDialog = jindo.$Class({
	/** @lends jindo.ModalDialog */

	/**
	 * Modal Dialog 컴포넌트를 생성한다.
	 * @constructs
	 * @param {HashTable} htOption 옵션 해시테이블
	 * @extends jindo.Dialog
	 * @requires jindo.Foggy 
	 * @example
var oModalDialog = new jindo.ModalDialog({
	Foggy : { //Foggy 컴포넌트를 위한 옵션 (jindo.Foggy 참고)
		nShowDuration : 150, //(Number) fog 레이어가 완전히 나타나기까지의 시간 (ms)  
		nShowOpacity : 0.8, //(Number) fog 레이어가 보여질 때의 transition 효과와 투명도 (0~1사이의 값)      
		nHideDuration : 150, //(Number) fog 레이어가 완전히 사라지기까지의 시간 (ms)  
		nHideOpacity : 0, //(Number) fog 레이어가 숨겨질 때의 transition 효과와 투명도 (0~1사이의 값)
		sEffect : "linear", // (String) jindo.Effect의 종류
		nFPS : 30 //(Number) 효과가 재생될 초당 frame rate  
	}
}).attach({
	beforeShow : function(e) {
		//다이얼로그 레이어가 보여지기 전에 발생
		//전달되는 이벤트 객체 e = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
		//e.stop(); 수행시 보여지지 않음
	},
	show : function(e) {
		//다이얼로그 레이어가 보여진 후 발생
		//전달되는 이벤트 객체 e = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
	},
	beforeHide : function(e) {
		//다이얼로그 레이어가 숨겨지기 전에 발생
		//전달되는 이벤트 객체 e = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
		//e.stop(); 수행시 숨겨지지 않음
	},
	hide : function(e) {
		//다이얼로그 레이어가 숨겨진 후 발생
		//전달되는 이벤트 객체 e = {
		//	elLayer (HTMLElement) 다이얼로그 레이어
		//}
	}
});
	 */
	$init : function(htOption) {
		var htDefaultOption = {
			Foggy : { //Foggy 컴포넌트를 위한 옵션 (jindo.Foggy 참고)
				nShowDuration : 150, //(Number) fog 레이어가 완전히 나타나기까지의 시간 (ms)  
				nShowOpacity : 0.8, //(Number) fog 레이어가 보여질 때의 transition 효과와 투명도 (0~1사이의 값)      
				nHideDuration : 150, //(Number) fog 레이어가 완전히 사라지기까지의 시간 (ms)  
				nHideOpacity : 0, //(Number) fog 레이어가 숨겨질 때의 transition 효과와 투명도 (0~1사이의 값)
				sEffect : "linear", // (String) jindo.Effect의 종류
				nFPS : 30 //(Number) 효과가 재생될 초당 frame rate  
			}
		};
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		this._initFoggy();
	},
	
	/**
	 * Foggy 컴포넌트를 초기화한다.
	 * @ignore
	 */
	_initFoggy : function() {
		var self = this;
		this._oFoggy = new jindo.Foggy(this.option("Foggy")).attach({
			show : function(e) {
				self.fireEvent("show", { elLayer : self._elLayer });
			},
			hide : function() {
				self.detachAll("close").detachAll("confirm").detachAll("cancel");
				self._detachEvents();
				self._welLayer.hide();
				self._welLayer.leave();
				self._bIsShown = false;
				self.fireEvent("hide", { elLayer : self._elLayer });
			}
		});
		
		//컴포넌트에 의해 생성된 fog레이어에 대한 설정
		this._oFoggy.getFog().className = this.option("sClassPrefix") + 'fog'; 
	},
	
	/**
	 * 생성된 Foggy 컴포넌트의 인스턴스를 가져온다.
	 * @return {jindo.Foggy}
	 */
	getFoggy : function() {
		return this._oFoggy;
	},
	
	/**
	 * 다이얼로그 레이어를 보여준다.
	 * @remark 다이얼로그 레이어는 설정된 레이어의 템플릿으로부터 만들어져 document.body에 append된다.
	 * @param {Object} htTemplateProcess 템플릿에 대체하기 위한 데이터를 가지는 Hash Table
	 * @param {Object} htEventHandler 다이얼로그 내부에서 발생하는 이벤트를 처리하는 핸들러들
	 * @example
//다이얼로그 레이어에 닫기, 취소, 확인 버튼이 모두 존재하는경우 각각의 버튼에 대한 핸들러를 함께 등록한다. 
var oModalDialog = new jindo.ModalDialog();

oModalDialog.setLayerTemplate('<div><a href="#" class="dialog-close"><img width="15" height="14" alt="레이어닫기" src="http://static.naver.com/common/btn/btn_close2.gif"/></a></div><div style="position:absolute;top:30px;left:10px;">{=text}</div><div style="position:absolute;bottom:10px;right:10px;"><button type="button" class="dialog-confirm">확인</button><button type="button" class="dialog-cancel">취소</button></div></div>');

oModalDialog.show({ text : "<strong>확인하시겠습니까?</strong>" }, {
	close : function(e) {
		$Element("status").text("oDialog의 레이어에서 닫기 버튼이 클릭되었습니다.");
		//e.stop() 수행시 레이어가 닫히지 않는다.
	},
	cancel : function(e) {
		$Element("status").text("oDialog의 레이어에서 취소 버튼이 클릭되었습니다.");
		//e.stop() 수행시 레이어가 닫히지 않는다.
	},
	confirm : function(e) {
		$Element("status").text("oDialog의 레이어에서 확인 버튼이 클릭되었습니다.");
		//e.stop() 수행시 레이어가 닫히지 않는다.
	}
});	
	 */
	show : function(htTemplateProcess, htEventHandler) {
		if (this.isShown()) {
			return;
		}
		
		this.attach(htEventHandler);
		
		document.body.appendChild(this._elLayer);
		this._welLayer.html(this._template.process(htTemplateProcess));
		
		var htCustomEvent = { elLayer : this._elLayer }; 
		
		if (this.fireEvent("beforeShow", htCustomEvent)) {
			this._welLayer.show();
			this._attachEvents();
			this.getLayerPosition().setPosition();
			this._bIsShown = true;
			this._oFoggy.show(this._elLayer);
		} else {
			return;
		}
	},
	
	/**
	 * 다이얼로그 레이어를 숨긴다.
	 * @remark 다이얼로그 레이어가 숨겨지는 동시에 모든 이벤트가 제거되고 document.body에서 제거된다.
	 */
	hide : function() {
		if (this.fireEvent("beforeHide", { elLayer : this._elLayer })) {
			this._oFoggy.hide();
		} 
	}
}).extend(jindo.Dialog);	﻿/**
 * @fileOverview 자식 노드를 Ajax요청으로 실시간으로 가져오는 동적트리
 * @author senxation
 * @version 0.2
 */
jindo.DynamicTree = jindo.$Class({
	/** @lends jindo.DynamicTree */
	
	/**
	 * DynamicTree 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.Tree
	 * @param {HTMLElement} el 컴포넌트를 적용할 Base (기준) 엘리먼트
	 * @param {HashTable} htOption 옵션객체
	 * @example
var oDanamicTree = new jindo.DynamicTree(jindo.$('tree'), {
	sClassPrefix: 'tree-',
	sUrl : "http://ajaxui.jindodesign.com/docs/components/samples/response/DynamicTree.php"
}).attach({
	request : function(oCustomEvent) {
		//자식노드의 데이터를 가져오기위해 Ajax 요청을 보내기 직전에 발생
		//이벤트 객체 oCustomEvent = {
		//	element : (HTMLElement) 선택된 노드, 
		//	htRequestParameter : { //(Object) Ajax 요청을 보낼 파라메터 객체
		//		sKey : (String) 선택된 노드의 유일한 key값
		// 	}
		//}
		//oCustomEvent.stop() 수행시 Ajax 요청 보내지 않음
	},
	response : function(oCustomEvent) {
		//응답을 받은 후 자식노드를 트리에 추가하기 전에 발생
		//이벤트 객체 e = {
		//	htResponseJSON : (HashTable) Ajax 응답의 JSON 객체
		//}
		//oCustomEvent.stop() 수행시 응답에 대한 자식노드를 추가하지 않음
	}
});
	 * @example
응답 예제
{
	sKey : 'tree-data-12452282036211399187', //부모 노드의 키
	htChildren : [
		{
			sLabel : 'node', //첫번째 자식 노드의 레이블   
			bHasChild : false //노드가 자식을 가지는지의 여부 
		},
		{
			sLabel : 'internal-node', 
			bHasChild : true
		}
	]
}
	 */
	$init : function(el, htOption) {
		
		var htDefaultOption = {
			sUrl : "", //요청 url
			sRequestType : "jsonp", //요청타입
			sRequestMethod : "get", //요청방식
			htRequestParameter : {} //(Object) 파라메터
		}
		
		this.option(htDefaultOption);
		this.option(htOption || {});

		this._attachEvents();		
		this._initAjax();
	},
	
	_attachEvents : function() {
		var self = this;
		
		this.attach("beforeExpand", function(oCustomEvent){
			
			var el = oCustomEvent.element;
			
			var self = this;
			//받아온 데이터가 있는지확인
			if(self.getNodeData(el).hasOwnProperty("_aChildren")) {
				return;
			};
	
			var htRequestParameter = self.option("htRequestParameter");
			htRequestParameter.key = self._getNodeDataKey(el);
			var htParam = {
				element : el,
				htRequestParameter : htRequestParameter 
			}
			
			if (self.fireEvent("request", htParam)) {
				//데이터를 받아옴
				self._request(htParam.htRequestParameter);
			}
			else {
				oCustomEvent.stop();				
			}
		});
	},
	
	_initAjax : function() {
		var htOption = this.option();
		var sPrefix = this.option("sClassPrefix");
        var sUrl = htOption.sUrl;
		var self = this;     
		this._oAjax = jindo.$Ajax(sUrl, {
            type: htOption.sRequestType,
            method: htOption.sRequestMethod,
            onload: function(oResponse){
                try {
					var htParam = {
						htResponseJSON : oResponse.json() 
					}
					
					if (!self.fireEvent("response", htParam)) {
						return;
					}
					
					var elNode = self.createNode(htParam.htResponseJSON["aChildren"]);
					var elTargetNode = jindo.$$.getSingle("." + htParam.htResponseJSON["sKey"], self.getRootList());
					if(self.getChildListOfNode(elTargetNode)) {
						return;
					}
					self.appendNode(elTargetNode, elNode);
					
					//자식이 있는경우 닫힌상태로 append
					jindo.$A(elNode).forEach(function(el){
						if (jindo.$$.getSingle("." + sPrefix + "has-child", el)) {
							jindo.$Element(el).addClass(sPrefix + "collapsed");	
						}
					});
                } 
                catch (e) {
                }
            }
        });
	},
	
	/**
     * @ignore
     */
    _request: function(htRequestParameter){
		this._oAjax.abort();
		this._oAjax.request(htRequestParameter);	
    },
		
	/**
	 * 노드가 자식을 가지고 있는지 여부를 가져온다. (overriding)
	 * @param {Object} elNode
	 * @return {Boolean}
	 */
	hasChild : function(elNode) {
		return this._htNodeData[this._getNodeDataKey(elNode)]["bHasChild"];
	},
	
	/**
	 * 노드를 새로 그린다. (자식노드가 있거나 마지막 노드일경우 클래스명 처리)
	 * @ignore
	 * @param {HTMLElement} elNode
	 */
	_paintNode : function(elNode) {
		if (!elNode) {
			return;
		}
		var htPart = this.getPartsOfNode(elNode);
		var aChildNodes = this.getChildNodes(elNode);
		
		var oNodeData = this.getNodeData(elNode);
		
		var welNode = jindo.$Element(elNode); 
		var welItem = jindo.$Element(htPart.elItem);

		delete oNodeData["_aChildren"]; //자식이 없으면 _aChildren 제거
		
		//자식이 있는지 여부		
		if (this.hasChild(elNode)) {
			welItem.addClass(this.htClassName.sHasChild);
			if (aChildNodes.length > 0) { //Ajax로 받아오기전에는 length == 0;
				oNodeData["bHasChild"] = true;
				oNodeData["_aChildren"] = [];
			}
			
			var self = this;
			jindo.$A(aChildNodes).forEach(function(elNode, i){
				oNodeData["_aChildren"].push(self.getNodeData(elNode));
			})
		}
		else {
			welItem.removeClass(this.htClassName.sHasChild);
			if (htPart.elChild) {
				htPart.elChild.parentNode.removeChild(htPart.elChild);	
			}
		}
		
		//마지막 노드인지
		oNodeData["lastNode"] = jindo.$$.getSingle('~ .' + this.htClassName.sNode, elNode) ? false : true;
		(oNodeData["lastNode"]) ? welNode.addClass(this.htClassName.sLastNode) : welNode.removeClass(this.htClassName.sLastNode);
		elNode.parentNode.style.zoom = 1; //ie 렌더링 버그 수정!!
	},
	
	/**
	 * (overriding)
	 * @ignore
	 */
	_makeNodeData : function(elNode) {
		var oNodeData = this.getNodeData(elNode);
		oNodeData["bHasChild"] = false;
		if (jindo.$Element(this.getPartsOfNode(elNode).elItem).hasClass(this.option('sClassPrefix') + 'has-child')) {
			oNodeData["bHasChild"] = true;				
		}	
		this.$super._makeNodeData(elNode);
	}
	
}).extend(jindo.Tree);
﻿/**
 * @fileOverview 브라우저가 스크롤되어도 항상 레이어가 따라오도록 위치를 고정시키는 컴포넌트 
 * @author hooriza, modified by senxation
 * @version 0.1
 */
 
jindo.FloatingLayer = jindo.$Class({
	/** @lends jindo.FloatingLayer */ 
	_oPos : null,
	_oTransition : null,
	_oTimer : null,
	//_bRepaint : false,

	/**
	 * Fixed 컴포넌트를 생성한다.
	 * @constructs
	 * @param {String | HTMLElement} el 고정시킬 레이어 엘리먼트 (또는 id)
	 * @param {HashTable} htOption 옵션 객체
	 * @extends jindo.UIComponent
	 * @requires jindo.Effect
	 * @requires jindo.Timer
	 * @requires jindo.Transition
	 * @example
new jindo.Fixed($('LU_layer'), {
	nDelay : 0, // (Number) 스크롤시 nDelay(ms) 이후에 이동
	nDuration : 500, // (Number) Transition이 수행될 시간
	sEffect : "easeOut", // (String) 레이어 이동에 적용될 jindo.Effect 명
	bActivateOnload : true //(Boolean) 로드와 동시에 activate 할지 여부
}).attach('beforeMove', function(oCustomEvent) {
	//oCustomEvent.nX : 레이어가 이동될 x좌표 (number)
	//oCustomEvent.nY : 레이어가 이동될 y좌표 (number)
});
	 */
	$init : function(el, htOption) {
		var el = this._el = jindo.$(el);
		var wel = this._wel = jindo.$Element(el);
		
		this.option({
			nDelay : 0,
			nDuration : 500,
			sEffect : "easeOut",
			bActivateOnload : true
		});
		
		this.option(htOption || {});
		this._oPos = this._getPosition();
		this._oTransition = new jindo.Transition().fps(60);
		this._oTimer = new jindo.Timer();
		this._wfScroll = jindo.$Fn(this._onScroll, this)
		
		if (this.option("bActivateOnload")) {
			this.activate();
		}
	},
	
	_onActivate : function() {
		var self = this;
		setTimeout(function() { self._onScroll(); }, 0);
		
		this._wfScroll.attach(window, 'scroll');
		this._wfScroll.attach(window, 'resize');
	},
	
	_onDeactivate : function() {
		this._wfScroll.detach(window, 'scroll');
		this._wfScroll.detach(window, 'resize');
	},
	
	_getPosition : function() {
		var el = this._el;
		var wel = this._wel;

		var sLeft = el.style.left;
		var sRight = el.style.right;
		var sTop = el.style.top;
		var sBottom = el.style.bottom;
		
		var oPos = {
			sAlignX : sLeft ? 'left' : (sRight ? 'right' : null),
			sAlignY : sTop ? 'top' : (sBottom ? 'bottom' : null)
		};
		
		var oOffset = wel.offset();
		var oClient = jindo.$Document().clientSize();
		
		if (oPos.sAlignX == 'left') oPos.nX = oOffset.left;
		else if (oPos.sAlignX == 'right') {
			oPos.nX = oClient.width - oOffset.left - wel.width();
			if (oPos.nX < parseFloat(sRight)) oPos.nX = parseFloat(sRight);
		}

		if (oPos.sAlignY == 'top') oPos.nY = oOffset.top;
		else if (oPos.sAlignY == 'bottom') {
			oPos.nY = oClient.height - oOffset.top - wel.height();
			if (oPos.nY < parseFloat(sBottom)) oPos.nY = parseFloat(sBottom);
		}
		
		return oPos;
	},
	
	_onScroll : function() {
		var self = this;
		
		this._oTimer.start(function() {
			self._paint();
		}, this.option('nDelay'));
	},
	
	_paint : function() {
		var oDoc = document.documentElement || document;
		var oBody = document.body;

		var el = this._el;
		var wel = this._wel;
		
		var oPos = this._oPos;
		var oScrollPos = {};

		var oOffset = jindo.$Element(el).offset(); // 플로팅 객체의 위치
		var nPosX, nPosY;
		
		var oParam = { nX : null, nY : null };

		if (oPos.sAlignX) {
			switch (oPos.sAlignX) {
			case 'left':
				oScrollPos.x = oDoc.scrollLeft || oBody.scrollLeft;
				nPosX = oOffset.left - oScrollPos.x; // 스크롤 기준 선부터 얼마나 떨어져 있나
				break;
			
			case 'right':
				oScrollPos.x = (oDoc.scrollLeft || oBody.scrollLeft) + jindo.$Document().clientSize().width;
				nPosX = oScrollPos.x - (oOffset.left + wel.width());
				break;
			}
			
			oParam.nX = parseFloat(wel.css(oPos.sAlignX)) + (oPos.nX - nPosX);
		}
		
		if (oPos.sAlignY) {
			switch (oPos.sAlignY) {
			case 'top':
				oScrollPos.y = oDoc.scrollTop || oBody.scrollTop;
				nPosY = oOffset.top - oScrollPos.y; // 스크롤 기준 선부터 얼마나 떨어져 있나
				break;
			
			case 'bottom':
				oScrollPos.y = (oDoc.scrollTop || oBody.scrollTop) + jindo.$Document().clientSize().height;
				nPosY = oScrollPos.y - (oOffset.top + wel.height());
				break;
			}
			
			oParam.nY = parseFloat(wel.css(oPos.sAlignY)) + (oPos.nY - nPosY);
		}

		this.fireEvent('beforemove', oParam);
		
		var oTrans = {};
		var fEffect = jindo.Effect[this.option('sEffect')];

		if (oParam.nX !== null) {
			oTrans['@' + oPos.sAlignX] = fEffect(oParam.nX + 'px');
		}
		if (oParam.nY !== null) {
			oTrans['@' + oPos.sAlignY] = fEffect(oParam.nY + 'px');
		}
		
		var self = this;
		this._oTransition.start(this.option('nDuration'),
			el, oTrans
		).precede(function() {
			self.fireEvent('move');
		});
	}
}).extend(jindo.UIComponent);
/**
 * @fileOverview 리스트에 페이지 목록 매기고 페이지에 따른 네비게이션을 구현한 컴포넌트
 * @author senxation
 * @version 0.4
 */
jindo.Pagination = jindo.$Class({
	/** @lends jindo.Pagination */
	
	/**
	 * 리스트에 페이지 목록 매기고 페이지에 따른 네비게이션을 구현한 컴포넌트.
	 * 기본 목록은 마크업에 static하게 정의되어있고, 페이지 이동을위해 클릭시마다 보여줄 아이템 목록을 Ajax Call을 통해 받아온다.
	 * 페이지 컴포넌트가 로드되면 .loaded 클래스명이 추가된다.
	 * @constructs
	 * @param {String | HTMLElement} sId 페이지목록을 생성할 엘리먼트 id 혹은 엘리먼트 자체
	 * @param {Object} oOption 옵션 객체
	 * @extends jindo.Component
	 * @example 
var oPagination = new jindo.Pagination("paginate", {
	nItem : 1000, //전체 아이템 개수
	nItemPerPage : 10, //한 페이지에 표시될 아이템 개수
	nPagePerPageList : 10, //페이지목록에 표시될 페이지 개수
	nPage : 1, //초기 페이지
	sMoveUnit : "pagelist", //페이지목록 이동시 이동 단위 "page" || "pagelist"
	bAlignCenter : false, //현재페이지가 항상 가운데 위치하도록 정렬. sMoveUnit이 "page"일 때만 사용
	sInsertTextNode : "" //페이지리스트 생성시에 각각의 페이지 노드를 한줄로 붙여쓰지 않게 하기 위해서는 "\n" 또는 " "를 설정한다. 이 옵션에 따라 렌더링이 달라질 수 있다.
}).attach({
	beforeMove : function(oCustomEvent) {
		//페이지 이동을 위해 클릭했을때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nPage : (Number) 클릭된 페이지
		//}
		//oCustomEvent.stop()을 수행하면 페이지 이동(loaded 이벤트)이 일어나지 않는다.
	},
	move : function(oCustomEvent) {
		//페이지 이동이 완료된 이후 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		//	nPage : (Number) 현재 페이지
		//}
	}
});
	 */
	$init : function(sId, oOption){
		this._elPageList = jindo.$(sId);
		this._elCurrentPage = jindo.$("<strong>");
		this._elPage = jindo.$("<a>");
		jindo.$Element(this._elPage).attr("href","#");
		
		this._elAPrevEndPage = jindo.$$.getSingle("a.pre_end", this._elPageList);
		this._elAPrevPage = jindo.$$.getSingle("a.pre", this._elPageList);
		this._elANextEndPage = jindo.$$.getSingle("a.next_end", this._elPageList);
		this._elANextPage = jindo.$$.getSingle("a.next", this._elPageList);
		this._elSpanPrevEndPage = jindo.$$.getSingle("span.pre_end", this._elPageList);
		this._elSpanPrevPage = jindo.$$.getSingle("span.pre", this._elPageList);
		this._elSpanNextEndPage = jindo.$$.getSingle("span.next_end", this._elPageList);
		this._elSpanNextPage = jindo.$$.getSingle("span.next", this._elPageList);
		
		this._fClickPage = jindo.$Fn(this._onClickPageList, this);
		this._fClickPage.attach(this._elPageList, "click");
		
		this.option({
			nItem : 10,
			nItemPerPage : 10,
			nPagePerPageList : 10,
			nPage : 1,
			sMoveUnit : "pagelist",
			bAlignCenter : false,
			sInsertTextNode : ""
		});
		if (oOption) this.option(oOption);
		
		this.setItemCount(this.option("nItem"));
		this.movePageTo(this.option("nPage"));
		
		jindo.$Element(this._elPageList).addClass("loaded");
	},
	
	/**
	 * 기준 엘리먼트를 구한다.
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this._elPageList;
	},
	
	/**
	 * 전체 아이템의 개수를 리턴한다.
	 * @return {Number} 아이템 개수
	 */
	getItemCount : function() {
		return this.option("nItem");
	},
	
	/**
	 * 전체 아이템의 개수를 설정한다.
	 * @param {Number} n 아이템 개수
	 */
	setItemCount : function(n) {
		this.option({"nItem" : n});
	},
	
	/**
	 * 한 페이지에 보여줄 아이템의 개수를 구한다.
	 * @return {Number} 한 페이지에 보여줄 아이템의 개수
	 */
	getItemPerPage : function() {
		return this.option("nItemPerPage");
	},
	
	/**
	 * 한 페이지에 보여줄 아이템의 개수를 설정한다.
	 * @param {Object} n 아이템 개수
	 */
	setItemPerPage : function(n) {
		this.option("nItemPerPage", n);
	},
	
	/**
	 * 현재 페이지를 리턴한다.
	 * @return {Number} 현재 페이지
	 */
	getCurrentPage : function() {
		return this._nCurrentPage;
	},
	
	/**
	 * 해당 페이지의 첫번째 아이템이 전체 중 몇 번째 아이템인지 구한다.
	 * @param {Number} n 페이지 번호
	 * @return {Number} 
	 */
	getFirstItemOfPage : function(n) {
		return this.getItemPerPage() * (n - 1) + 1;
	},
	
	/**
	 * 아이템의 인덱스로부터 몇번째 페이지인지를 구한다.
	 * @param {Object} n
	 * @return {Number} 
	 */
	getPageOfItem : function(n) {
		return Math.ceil(n / this.getItemPerPage());	
	},
	
	_getLastPage : function() {
		return Math.ceil(this.getItemCount() / this.getItemPerPage());
	},

	_getRelativePage : function(sRelative) {
		var nPage = null;

		if (this.option("sMoveUnit") == "page") {
			switch (sRelative) {
				case "pre" :
					nPage = this.getCurrentPage() - 1;
				break;
				case "next" :
					nPage = this.getCurrentPage() + 1;
				break;
			}
		}
		else {
			var nThisPageList = this._getPageList(this.getCurrentPage());
			switch (sRelative) {
				case "pre_end" :
					var nLastPageOfPrePageList = (nThisPageList - 1) * this.option("nPagePerPageList");
					nPage = 1;
				break;
				case "pre" :
					var nLastPageOfPrePageList = (nThisPageList - 1) * this.option("nPagePerPageList");
					nPage = nLastPageOfPrePageList;
				break;
				case "next" :
					var nFirstPageOfNextPageList = (nThisPageList) * this.option("nPagePerPageList") + 1;
					nPage = nFirstPageOfNextPageList;
				break;
				case "next_end" :
					nPage = this._getLastPage();
				break;
			}
		}
		
		return nPage;
	},
	
	/**
	 * 몇번째 페이지 리스트인지 구함
	 * @param {Number} nThisPage
	 */
	_getPageList : function(nThisPage) {
		if (this.option("bAlignCenter")) {
			var nLeft = Math.floor(this.option("nPagePerPageList") / 2);
			var nPageList = nThisPage - nLeft;
			if (nPageList < 1) nPageList = 1;
			if (nPageList > this._getLastPage()) nPageList = this._getLastPage();
			return nPageList;
		}
		return Math.ceil(nThisPage / this.option("nPagePerPageList"));
	},
	
	_onClickPageList : function(e) {
		e.stop(jindo.$Event.CANCEL_DEFAULT);
		
		var nPage = null;
		
		var el = e.element;
		if (el.tagName != "A") {
			el = jindo.$$.getSingle("! a", el);
			if (!el) return;
		}
		
		var we = jindo.$Element(el);
		if (we.hasClass("pre_end") || we.hasClass("pre") || we.hasClass("next") || we.hasClass("next_end")) {
			if (we.hasClass("pre_end")) {
				nPage = this._getRelativePage("pre_end");
			}
			else if (we.hasClass("pre")) {
				nPage = this._getRelativePage("pre");
			}
			else if (we.hasClass("next")) {
				nPage = this._getRelativePage("next");
			}
			else if (we.hasClass("next_end")) {
				nPage = this._getRelativePage("next_end");				
			}
		}
		else {
			var nPage = parseInt(jindo.$Element(el).text());
		}
		
		this.movePageTo(nPage);
	},
	
	_convertToAvailPage : function(nPage) {
		var nPage = nPage;
		var nLastPage = this._getLastPage();
		if (nPage < 1) nPage = 1;
		if (nPage > nLastPage) nPage = nLastPage;

		return nPage;
	},
	
	/**
	 * 지정한 페이지로 이동하고 페이지 목록을 다시 그린다.
	 * 이동하기전 beforeMove, 이동후에 move 커스텀이벤트를 발생한다.
	 * @param {Number} nPage 이동할 페이지
	 * @param {Boolean} bFireEvent 커스텀이벤트의 발생 여부 (디폴트 true)
	 */
	movePageTo : function(nPage, bFireEvent){
		if (typeof bFireEvent == "undefined") {
			var bFireEvent = true;
		}
		
		var nPage = this._convertToAvailPage(nPage);
		this._nCurrentPage = nPage;
		
		if (bFireEvent) {
			if (!this.fireEvent("beforeMove", {
				nPage: nPage
			})) {
				return;
			}
		}
		
		this._paginate(nPage);
		
		if (bFireEvent) {
			this.fireEvent("move", {
				nPage: nPage
			});
		}
	},
	
	/**
	 * 페이징을 다시 그린다.
	 * @param {Number} nItemCount 아이템의 개수가 바뀌었을 경우 설정해준다.
	 */
	reset : function(nItemCount) {
		if (typeof nItemCount == "undefined") var nItemCount = this.option("nItem");
		else var nItemCount = nItemCount;
		
		this.setItemCount(nItemCount);
		this.movePageTo(1);
	},
	
	_addTextNode : function() {
		var sTextNode = this.option("sInsertTextNode");
		this._elPageList.appendChild(document.createTextNode(sTextNode));		
	},
	
	_paginate : function(nPage){
		this._empty();
		this._addTextNode();
		
		var nLastPage = this._getLastPage();
		var nThisPageList = this._getPageList(nPage);
		var nLastPageList = this._getPageList(nLastPage);
		
		if (nLastPage == 0) {
			jindo.$Element(this._elPageList).addClass("no-result");
		}
		else if (nLastPage == 1) {
			jindo.$Element(this._elPageList).addClass("only-one");
		}
		else {
			jindo.$Element(this._elPageList).removeClass("only-one").removeClass("no-result");
		}
		
		if (this.option("bAlignCenter")) {
			var nLeft = Math.floor(this.option("nPagePerPageList") / 2);
			var nFirstPageOfThisPageList = nPage - nLeft;
			if (nFirstPageOfThisPageList < 1) {
				nFirstPageOfThisPageList = 1;
			}
			var nLastPageOfThisPageList = nFirstPageOfThisPageList + this.option("nPagePerPageList") - 1;
			if (nLastPageOfThisPageList > nLastPage) {
				nFirstPageOfThisPageList = nLastPage - this.option("nPagePerPageList") + 1;
				if (nFirstPageOfThisPageList < 1) {
					nFirstPageOfThisPageList = 1;
				}
				nLastPageOfThisPageList = nLastPage;
			}
		}
		else {
			var nFirstPageOfThisPageList = (nThisPageList - 1) * this.option("nPagePerPageList") + 1;
			var nLastPageOfThisPageList = (nThisPageList) * this.option("nPagePerPageList");
			if (nLastPageOfThisPageList > nLastPage) nLastPageOfThisPageList = nLastPage;
		}
		

		if ((nThisPageList > 1) || (this.option("sMoveUnit") == "page" && nPage > 1)) {
			if (this._elAPrevEndPage) {
				jindo.$Element(this._elPageList).append(this._elAPrevEndPage);
				this._addTextNode();
			}
			jindo.$Element(this._elPageList).append(this._elAPrevPage);
			this._addTextNode();
		}
		else {
			if (this._elSpanPrevEndPage) {
				jindo.$Element(this._elPageList).append(this._elSpanPrevEndPage);
				this._addTextNode();
			}
			if (this._elSpanPrevPage) {
				jindo.$Element(this._elPageList).append(this._elSpanPrevPage);
				this._addTextNode();
			}	
		}		

		for (var i = nFirstPageOfThisPageList; i <= nLastPageOfThisPageList ; i++) {
			if (i == nPage) {
				var el = this._elCurrentPage.cloneNode(true);
			}
			else {
				var el = this._elPage.cloneNode(true);
			}
			if (i == nFirstPageOfThisPageList) {
				jindo.$Element(el).addClass("first-child");
			}
			jindo.$Element(el).text(i.toString());
			jindo.$Element(this._elPageList).append(el);
			
			this._addTextNode();
		}

		if ((nThisPageList < nLastPageList) || (this.option("sMoveUnit") == "page" && nPage < nLastPage)) {
			jindo.$Element(this._elPageList).append(this._elANextPage);
			this._addTextNode();
			if (this._elANextEndPage) {
				jindo.$Element(this._elPageList).append(this._elANextEndPage);
				this._addTextNode();
			}	
		}
		else {
			if (this._elSpanNextPage) {
				jindo.$Element(this._elPageList).append(this._elSpanNextPage);
				this._addTextNode();
			}
			if (this._elSpanNextEndPage) {
				jindo.$Element(this._elPageList).append(this._elSpanNextEndPage);
				this._addTextNode();
			}
		}
	},
	
	_empty : function(){
		if (this._elAPrevEndPage) this._elAPrevEndPage = this._elAPrevEndPage.cloneNode(true); 
		if (this._elAPrevPage) this._elAPrevPage = this._elAPrevPage.cloneNode(true); 
		if (this._elANextEndPage) this._elANextEndPage = this._elANextEndPage.cloneNode(true);
		if (this._elANextPage) this._elANextPage = this._elANextPage.cloneNode(true);
		if (this._elSpanPrevEndPage) this._elSpanPrevEndPage = this._elSpanPrevEndPage.cloneNode(true);
		if (this._elSpanPrevPage) this._elSpanPrevPage = this._elSpanPrevPage.cloneNode(true);
		if (this._elSpanNextEndPage) this._elSpanNextEndPage = this._elSpanNextEndPage.cloneNode(true);
		if (this._elSpanNextPage) this._elSpanNextPage = this._elSpanNextPage.cloneNode(true);
		jindo.$Element(this._elPageList).empty();
	}
}).extend(jindo.Component);
﻿/**
 * @fileOverview 실시간 순위 변화를 보여주는 롤링 차트
 * @author senxation
 * @version 0.2
 */

jindo.RollingChart = jindo.$Class({
	/** @lends jindo.RollingChart */
		
	_nIndexOfRolling : 0, //현재 롤링되고있는 아이템의 인덱스
	_bIsRolling : false, //롤링 중인지 여부

	/**
	 * 롤링차트 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.Component
	 * @requires jindo.Rolling
	 * @param {HTMLElement} el 기준 엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 * @example
var oRollingChart = new jindo.RollingChart($('rolling_chart'), {
	sDirection : 'down', //롤링될 방향 "down" || "up"
	nFPS : 50, //롤링을 그려줄 초당 프레임수
	nDuration : 300, //롤링될 시간
	nRollingInterval : 50, //각 롤링간의 시간간격
	sUrl : "test.php", //요청 url
	sRequestType : "jsonp", //요청타입
	sRequestMethod : "get", //요청방식
	htRequestParameter : { p : 11 }, //요청 파라메터
	nRequestInterval : 5000, //새로운 목록을 가져올 시간 간격 (ms)
	bActivateOnload : true //(Boolean) 초기화시 activate 여부
}).attach({
	request : function(oCustomEvent) {
		//롤링될 새로운 목록을 요청하기 전에 발생
		//oCustomEvent.stop(); 수행시 요청하지 않음
	},
	response : function(oCustomEvent) {
		//목록을 성공적으로 받아온 이후에 발생
		//이벤트 객체 oCustomEvent = {
		//	htResponseJSON : (HashTable) 응답의 JSON 객체
		//}
		//oCustomEvent.stop(); 수행시 새로 받아온 목록을 업데이트 하지 않음
	},
	beforeUpdate : function(oCustomEvent) {
		//새 목록을 받아온 후 기존 목록에 적용하기 이전에 발생 
		//oCustomEvent.stop(); 수행시 새로 받아온 목록을 업데이트 하지 않음
	},
	beforeRolling : function(oCustomEvent) {
		//새 목록이 추가되고 각각의 롤링이 시작되기전 발생.
		//이벤트 객체 oCustomEvent = {
		//	nIndex : (Number) 현재 롤링될 목록의 번호
		//}
	},
	afterRolling : function(oCustomEvent) {
		//새 목록이 추가되고 각각의 롤링이 종료된 후 발생.
		//이벤트 객체 oCustomEvent = {
		//	nIndex : (Number) 현재 롤링된 목록의 번호
		//}
	},
	afterUpdate : function(oCustomEvent) {
		//모든 롤링이 끝난 이후에 발생
	}
});
	 */
	$init : function(el, htOption) {
		
		var htDefaultOption = {
			sClassPrefix : 'rollingchart-', //Default Class Prefix
			sDirection : 'down', //롤링될 방향 "down" || "up"
			nFPS : 50, //롤링을 그려줄 초당 프레임수 
			nDuration : 300, //롤링될 시간
			nRollingInterval : 100, //각 롤링간의 시간간격
			sUrl : "", //요청 url
			sRequestType : "jsonp", //요청타입
			sRequestMethod : "get", //요청방식
			htRequestParameter : null, //(Object) 파라메터
			nRequestInterval : 10000, //새로운 목록을 가져올 시간 간격 (ms)
			bActivateOnload : true //(Boolean) 초기화시 activate 여부
		}
		
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		this._el = jindo.$(el);

		this._assignHTMLElements(); //컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
		this._initTimer();
		this._initRolling();
		
		if (this.option("bActivateOnload")) {
			this.activate(); //컴포넌트를 활성화한다.
		}
	},

	/**
	 * 컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
	 */
	_assignHTMLElements : function() {
		this._elList = jindo.$$.getSingle("ol", this._el);
		this._aItems = jindo.$$("> li", this._elList);
	},
	
	/**
	 * 챠트의 리스트 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getList : function() {
		return this._elList;
	},
	
	/**
	 * 챠트 리스트의 아이템 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getItems : function() {
		return this._aItems;
	},
	
	/**
	 * 각 챠트 리스트 아이템에 롤링을 위한 리스트를 가져온다.
	 * @param {HTMLElement} elItem
	 */
	getListOfItem : function(elItem) {
		return jindo.$$.getSingle("ul", elItem);
	},
	
	/**
	 * 챠트가 롤링중인지 여부를 가져온다.
	 * @return {Boolean}
	 */
	isRolling : function() {
		return this._bIsRolling;	
	},
	
	_initTimer : function() {
		this._oRequestTimer = new jindo.Timer();
	},
	
	/**
	 * 일정 간격으로 Ajax 요청을 위한 Timer 객체를 가져온다.
	 * @return {jindo.Timer}
	 */
	getTimer : function() {
		return this._oRequestTimer;
	},
	
	_initRolling : function() {
		var self = this;
		this._oRollingEventHandler = {
			"end" : function(){
				setTimeout(function(){
					self.fireEvent("afterRolling", { nIndex : self._nIndexOfRolling });
					self._roll(self._nIndexOfRolling + 1);	
				}, self.option("nRollingInterval"));
			}
		};
		this._oRolling = new jindo.Rolling(this._el, {
			nFPS : this.option("nFPS"),
			nDuration : this.option("nDuration"),
			sDirection : 'vertical',
			sEffect : "linear"
		});
	},
	
	/**
	 * 롤링 컴포넌트의 인스턴스를 가져온다.
	 * @return {jindo.Rolling}
	 */
	getRolling : function() {
		return this._oRolling;
	},
	
	/**
	 * Rolling이 적용될 아이템을 번호로 정한다. ////////////// 
	 * @param {Number} n
	 * @ignore
	 */
	_setItemIndexToRolling : function(n) {
		var elList = this.getListOfItem(this.getItems()[n]);
		var oRolling = this.getRolling();
		oRolling._el = elList;
		oRolling._elList = elList;
	},

	/**
	 * 컴포넌트를 활성화한다.
	 * @return {this}
	 */
	_onActivate : function() {
		var self = this;

		this.getTimer().start(function(){
			self._stopRequest();
			self._request();
			return true;
		}, this.option("nRequestInterval"));
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		this.getTimer().abort();
	},
	
	/**
     * @ignore
     * @param {String} sQuery 쿼리. 생략시 현재 입력된 input의 값
     */
    _request: function(sQuery){
		if (this.isRolling()) {
			return;
		}
		
        var htOption = this.option();
        var sUrl = htOption.sUrl;
        var htParameter = htOption.htRequestParameter;
		var self = this;        
        this._oAjax = jindo.$Ajax(sUrl, {
            type: htOption.sRequestType,
            method: htOption.sRequestMethod,
            onload: function(oResponse){
                try {
					var htParam = { htResponseJSON : oResponse.json() };
					if(!self.fireEvent("response", htParam)) {
						return;
					}
					
					if(!self.fireEvent("beforeUpdate")) {
						return;
					}
										
					var oChart = htParam.htResponseJSON;
					self._addItemToRolling(oChart);
					self.getRolling().getTransition().attach(self._oRollingEventHandler);
					self._roll(0);
                } 
                catch (e) {
                }
            }
        });
		if (!self.fireEvent("request")) {
			return;
		}
		this._oAjax.request(htParameter);
    },
	
	_stopRequest: function(){
        try {
            this._oAjax.abort();
            this._oAjax = null;
        } 
        catch (e) {
        }
	},
	
	_addItemToRolling : function(oChart) {
		var self = this;
		var sDirection = this.option("sDirection");
		
		jindo.$A(this.getItems()).forEach(function(el, i){
			var wel = jindo.$Element(jindo.$("<li>"));
			wel.html(oChart.items[i]);
			var elList = self.getListOfItem(el);
			if(sDirection == "down") {
				elList.insertBefore(wel.$value(), elList.firstChild);
				elList.scrollTop = 9999;
			}
			else {
				jindo.$Element(elList).append(wel.$value());
				elList.scrollTop = 0;	
			}
		})
	},
	
	_removeItemRolled : function() {
		var self = this;
		var sDirection = this.option("sDirection");
		
		jindo.$A(this.getItems()).forEach(function(el, i){
			if(sDirection == "down") {
				jindo.$Element(jindo.$$("li", self.getListOfItem(el))[1]).leave();
			}
			else {
				var elList = self.getListOfItem(el);
				jindo.$Element(jindo.$$.getSingle("li", elList)).leave();
				elList.scrollTop = 0;	
			}
			
		})
		this._nIndexOfRolling = 0;
	},

	_roll : function(n) {
		this._bIsRolling = true;
		this._nIndexOfRolling = n;
		this.fireEvent("beforeRolling", { nIndex : n });
		var nIndex = n;
		if (nIndex == this.getItems().length) {
			this._removeItemRolled();
			this._nIndexOfRolling = 0;
			this.getRolling().getTransition().detach(this._oRollingEventHandler);
			this._bIsRolling = false;
			this.fireEvent("afterUpdate");
			return;
		}
			
		this._setItemIndexToRolling(nIndex);
		
		var n = 1;
		if (this.option("sDirection") == "down") {
			n = -1;
		}
		this.getRolling().moveBy(n);
	}
}).extend(jindo.UIComponent);	﻿/**
 * @fileOverview 목록을 순환이동하는 롤링 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.CircularRolling = jindo.$Class({
	/** @lends jindo.CircularRolling */
	/**
	 * 컴포넌트를 생성한다.
	 * @constructs
	 * @extends jindo.Rolling
	 * @see jindo.Rolling
	 */			 
	$init : function() {
		this._sListInnerHTML = this._elList.innerHTML;
		var welList = jindo.$Element(this._elList);
		jindo.$A(jindo.$$('> li', this._duplicate())).forEach(function(elItem){
			welList.append(elItem);
		});
		jindo.$A(jindo.$$('> li', this._duplicate())).forEach(function(elItem){
			welList.append(elItem);
		});
			
		this.attach('beforeMove', function(oCustomEvent) {
			var self = this;
			var nSize = this._size / 3;
			
			oCustomEvent.element = {
				getter : function(k) {
					return self._el[k] 
				},
				setter : function(k, v) {
					if (v < 0) v = nSize + parseFloat(v);
					self._el[k] = v % nSize;
				}
			};
		});
	},
	
	_duplicate : function() {
		var elDuplicatedList = jindo.$('<ul>');
		elDuplicatedList.innerHTML = this._sListInnerHTML;		
		return elDuplicatedList;
	},
	
	/**
	 * n번째 아이템으로 이동한다. (overrided)
	 * @param {Number} n
	 */
	moveTo : function(n) {
		if (!this._move(n)) {
			return false;
		}
		return true;
	}

}).extend(jindo.Rolling);
/**
 * @fileOverview 정해진 크기의 박스내의 내용에 따라 자동으로 스크롤바를 생성하는 스크롤박스 컴포넌트
 * @author senxation
 * @version 0.2
 */
jindo.ScrollBox = new jindo.$Class({
	/** @lends jindo.ScrollBox */

	/**
	 * ScrollBox 컴포넌트는 정해진 크기의 박스내의 내용을 스크롤바를 이용해 이동하여 볼 수 있게 한다.
	 * ScrollBar 컴포넌트와 다르게 박스내의 내용이 유동적으로 변할 때 스크롤이 나타나거나 사라지고 막대의 길이도 자동으로 구해진다.
	 * @constructs
	 * @extends jindo.ScrollBar
	 * @param {HTMLElement} el
	 * @param {Object} oOption
	 * @example
var oScrollBox = new jindo.ScrollBox("scroll", {
	sClassPrefix : "scrollbar-", // (String) Class Prefix
	sOverflowX : "auto", // (String) 가로스크롤을 보여주는 방법 "auto"(자동) || "scroll" (항상)|| "hidden" (보이지않음) 
	sOverflowY : "auto", // (String) 세로스크롤을 보여주는 방법 "auto"(자동) || "scroll" (항상)|| "hidden" (보이지않음)
	bAdjustThumbSize : true, // (Boolean) Thumb의 크기가 Content의 크기에따라 자동으로 변할지 여부
	nMinThumbSize : 50, // (Number) bAdjustThumbSize가 true일경우 크기가 변해도 최소로 유지될 크기
	nDelta : 16 // (Number) 스크롤 속도
});
	 */	
	$init : function(el, oOption) {
		
		this.option({
			sClassPrefix : "scrollbar-",
			bActivateOnload : true,
			sOverflowX : "auto",
			sOverflowY : "auto",
			bAdjustThumbSize : true,
			nMinThumbSize : 50,
			nDelta : 16 //스크롤 속도
		});
		
		this.option(oOption || {});
		
		this._el = jindo.$(el);
		
		if (this.option("bActivateOnload")) {
			this.activate();
			this.reset();
		}
	},
	
	/**
	 * 스크롤바의 보임/숨김 여부를 자동으로 설정한다.
	 */	
	reset : function() {
		
		var oBoxSize = this.getDefaultBoxSize();
		var oContentSize = this.getDefaultContentSize();
		
		this._autoToggleScrollBar();
		
		//보정을 위한 상태설정		
		var oStatusH = this.hasScrollBarHorizontal();
		var oStatusV = this.hasScrollBarVertical();
		
		this._adjustBoxSize();
		this._adjustContentSize();
		
		//보정
		this._autoToggleScrollBar();
		if (oStatusH != this.hasScrollBarHorizontal() || oStatusV != this.hasScrollBarVertical()) {
			this._adjustBoxSize();
			this._adjustContentSize();
		}
		
		this._autoToggleAvailability();
		this._adjustTrackSize();
		this._adjustThumbSize();
		this.$super.reset();
	},

	/**
	 * 컴포넌트를 활성화한다.
	 */
	_onActivate : function() {
		var sPrefix = this.option("sClassPrefix");
		//활성화 로직 ex)event binding
		this.$super._onActivate();
		this.reset();
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 */
	_onDeactivate : function() {
		var sPrefix = this.option("sClassPrefix");
		
		this.$super._onDeactivate();
		this._adjustBoxSize();
	},

	/**
	 * 스크롤 박스의 크기를 설정한다.
	 * @param {Number} nWidth (optional)
	 * @param {Number} nHeight (optional)
	 */
	setSize : function(nWidth, nHeight) {
		var sClassPrefix = this.option("sClassPrefix");

		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();
		
		var oBoxSize = this.getDefaultBoxSize();

		if (nWidth) {
			//jindo.$Element(this._el).width(nWidth);
			jindo.$Element(this._el).css("width", nWidth + "px");
		}
		if (nHeight) {
			//jindo.$Element(this._el).height(nHeight);
			jindo.$Element(this._el).css("height", nHeight + "px");
		}

		this.setBoxSize(nWidth, nHeight);

		this._oBoxSize = {
			nWidth : jindo.$Element(this._elBox).width(),
			nHeight : jindo.$Element(this._elBox).height()
		}
		this.reset(); 
	},

	/**
	 * 컨텐트 엘리먼트의 크기를 구한다.
	 * @return {Object}
	 * @example
var oSize = {
	nWidth : (Number),
	nHeight : (Number)
}
	 */
	getContentSize : function() {
		var welContent = jindo.$Element(this._elContent);
		
		return {
			nWidth : parseInt(welContent.width()),
			nHeight : parseInt(welContent.height())
		}
	},

	/**
	 * 컨텐트 엘리먼트의 크기를 설정한다.
	 * @param {Number} nWidth
	 * @param {Number} nHeight
	 */	
	setContentSize : function(nWidth, nHeight) {
		var welContent = jindo.$Element(this._elContent);
		
		if (nWidth) {
			if (nWidth == Infinity) {
				welContent.css("width", "");
			}
			else {
				welContent.css("width", nWidth + "px");	
			}
			
		}

		if (nHeight) {
			if (nHeight == Infinity) {
				welContent.css("height", "auto");
			}
			else {
				welContent.css("height", nHeight + "px");	
			}
		}
		this.$super.reset();
	},
	
	/**
	 * 박스 엘리먼트의 크기를 구한다.
	 * @example
var oSize = {
	nWidth : (Number),
	nHeight : (Number)
}
	 */
	getBoxSize : function() {
		var welBox = jindo.$Element(this._elBox);
		return {
			nWidth : parseInt(welBox.width()),
			nHeight : parseInt(welBox.height())
		}
	},
	
	/**
	 * 박스 엘리먼트의 크기를 설정한다.
	 * @param {Number} nWidth
	 * @param {Number} nHeight
	 */
	setBoxSize : function(nWidth, nHeight) {
		var welBox = jindo.$Element(this._elBox);
		if (nWidth) {
			//jindo.$Element(this._elBox).width(nWidth);
			welBox.css("width", nWidth + "px");
		}
		if (nHeight) {
			//jindo.$Element(this._elBox).height(nHeight);
			welBox.css("height", nHeight + "px");
		}
		this.$super.reset();
	},

	/**
	 * 트랙 엘리먼트의 크기를 구한다.
	 * @param {Object} 
	 * @return {Object}
	 * @example
var oSize = {
	nWidth : (Number),
	nHeight : (Number)
}
	 */
	getTrackSize : function(o) {
		if (!o.elScrollBar) {
			return {
				nWidth : 0,
				nHeight : 0
			}	
		}
		var welTrack = jindo.$Element(o.elTrack);
		return {
			nWidth : parseInt(welTrack.width()),
			nHeight : parseInt(welTrack.height())
		}
	},
	
	/**
	 * 트랙 엘리먼트의 크기를 설정한다.
	 * @param {Number} nWidth
	 * @param {Number} nHeight
	 */
	setTrackSize : function(o, nWidth, nHeight) {
		var welTrack = jindo.$Element(o.elTrack);
		if (nWidth) {
			//jindo.$Element(o.elTrack).width(nWidth);
			welTrack.css("width", nWidth + "px");
		}
		if (nHeight) {
			//jindo.$Element(o.elTrack).height(nHeight);
			welTrack.css("height", nHeight + "px");
		}
	},
	
	/**
	 * 가로스크롤이 생겨야하는 상황인지 판단한다.
	 * @return {Boolean}
	 */
	isNeededScrollBarHorizontal : function() {
		
		if(this.option("sOverflowX") == "scroll") {
			return true;
		}
		
		var oContentSize = this.getContentSize();
		var oBoxSize = this.getDefaultBoxSize();
		
		if (this.getScrollBarHorizontal().elScrollBar && this.option("sOverflowX") != "hidden") {
			if(this.hasScrollBarVertical()) {
				if(oContentSize.nWidth > oBoxSize.nWidth - jindo.$Element(this.getScrollBarVertical().elScrollBar).width()) {
					return true;	
				}
			}
			if (oContentSize.nWidth > oBoxSize.nWidth){
				return true;	
			}
		}
		return false;
	},
	
	/**
	 * 세로스크롤이 생겨야하는 상황인지 판단한다.
	 * @return {Boolean}
	 */
	isNeededScrollBarVertical : function() {
		
		if(this.option("sOverflowY") == "scroll") {
			return true;
		}
		
		var oContentSize = this.getContentSize();
		var oBoxSize = this.getDefaultBoxSize();

		if (this.getScrollBarVertical().elScrollBar && this.option("sOverflowY") != "hidden") {
			if(this.hasScrollBarHorizontal()) {
				if(oContentSize.nHeight > oBoxSize.nHeight - jindo.$Element(this.getScrollBarHorizontal().elScrollBar).height()) {
					return true;	
				}
			}
			if(oContentSize.nHeight > oBoxSize.nHeight) {
				return true;	
			}
		}
		return false;
	},
	
	_autoToggleScrollBar : function() {
		
		if (!this.isActivating()) {
			return;
		}
		
		var sClassPrefix = this.option("sClassPrefix");
		
		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();
		var bAjustThumbSize = this.option("bAdjustThumbSize");
		
		var bV = this.isNeededScrollBarVertical();
		if (oV.elScrollBar) {
			var welScrollBar = jindo.$Element(oV.elScrollBar);
			(bV) ? welScrollBar.addClass(sClassPrefix + "show") : welScrollBar.removeClass(sClassPrefix + "show");
			if (oV.elThumb && bAjustThumbSize) {
				jindo.$Element(oV.elThumb).css("height", "0px"); //ie6에서 문제때문에 스크롤바를 보여준 직후에 (trackSize를 조절해주기 이전) Thumb사이즈를 0로 만들어준다.
			}
		}
		var bH = this.isNeededScrollBarHorizontal();
		if (oH.elScrollBar) {
			var welScrollBar = jindo.$Element(oH.elScrollBar);
			(bH) ? welScrollBar.addClass(sClassPrefix + "show") : welScrollBar.removeClass(sClassPrefix + "show");
			if (oH.elThumb && bAjustThumbSize) {
				jindo.$Element(oH.elThumb).css("width", "0px");
			}
		}

		//세로스크롤 안생기고, 가로스크롤생긴후에 세로스크롤이 필요해지는 경우!		
		var bV = this.isNeededScrollBarVertical();
		if (oV.elScrollBar) {
			var welScrollBar = jindo.$Element(oV.elScrollBar);
			(bV) ? welScrollBar.addClass(sClassPrefix + "show") : welScrollBar.removeClass(sClassPrefix + "show");
			if (oV.elThumb && bAjustThumbSize) {
				jindo.$Element(oV.elThumb).css("height", "0px");
			}	
		}
	},
	
	/**
	 * Track의 길이를 자동 조절한다.
	 */
	_adjustTrackSize : function() {
		
		if (!this.isActivating()) {
			return;
		}
		
		var oContentSize = this.getContentSize();
		var oBoxSize = this.getDefaultBoxSize();
		
		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();
		
		var bH = this.isNeededScrollBarHorizontal();
		//가로 스크롤
		if (bH && oH.elScrollBar) {
			var nTrackWidth = oBoxSize.nWidth;

			var wel = jindo.$Element(oH.elScrollBar);
			wel.css("top", oBoxSize.nHeight - wel.height() + "px");
		
			//세로 스크롤도 있는경우
			var nVerticalWidth = 0;
			var bV = this.hasScrollBarVertical();
			if (bV && oV.elScrollBar) {
				nVerticalWidth = parseInt(jindo.$Element(oV.elScrollBar).width());
				nTrackWidth -= nVerticalWidth;
			}	
			wel.width(nTrackWidth); //가로스크롤의 크기 조절
			
			var nButtonLeftWidth = 0;
			if (oH.elButtonLeft) {
				nButtonLeftWidth = parseInt(jindo.$Element(oH.elButtonLeft).width());
				nTrackWidth -= nButtonLeftWidth;
			}
			if (oH.elButtonRight) {
				nTrackWidth -= parseInt(jindo.$Element(oH.elButtonRight).width());
			}

			jindo.$Element(oH.elTrack).css("left", nButtonLeftWidth + "px"); //가로스크롤의 위치 조절
			
			this.setTrackSize(oH, nTrackWidth, null);
		}

		var bV = this.isNeededScrollBarVertical();		
		//세로 스크롤
		if (bV && oV.elScrollBar) {
			var nTrackHeight = oBoxSize.nHeight;
			
			//가로 스크롤도 있는경우
			var nHorizontalHeight = 0;
			var bH = this.hasScrollBarHorizontal();
			if (bH && oH.elScrollBar) {
				nHorizontalHeight = parseInt(jindo.$Element(oH.elScrollBar).height());
				nTrackHeight -= nHorizontalHeight;
			}
			
			if (oV.elButtonUp) {
				nTrackHeight -= parseInt(jindo.$Element(oV.elButtonUp).height());
			}
			if (oV.elButtonDown) {
				nTrackHeight -= parseInt(jindo.$Element(oV.elButtonDown).height());
				//jindo.$Element(oV.elButtonDown).css("bottom", nHorizontalHeight +"px");
			}
			
			this.setTrackSize(oV, null, nTrackHeight);
		}
		
	},
	
	/**
	 * ScrollBar 가 생성되었을 경우의 Box 사이즈를 설정해준다.
	 */
	_adjustBoxSize : function() {
		
		if (!this.isActivating()) {
			return;
		}
		
		var oContentSize = this.getDefaultContentSize();
		var oBoxSize = this.getDefaultBoxSize();
		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();
		var bV = this.hasScrollBarVertical();
		var bH = this.hasScrollBarHorizontal();
		
		this.setBoxSize(oBoxSize.nWidth, oBoxSize.nHeight);
		
		//가로 스크롤
		if (bH && oH.elScrollBar) {
			var nHeight = oBoxSize.nHeight;
			nHeight -= parseInt(jindo.$Element(oH.elScrollBar).height());
			this.setBoxSize(null, nHeight);
		}
		//세로 스크롤
		if (bV && oV.elScrollBar) {
			var nWidth = oBoxSize.nWidth;
			nWidth -= parseInt(jindo.$Element(oV.elScrollBar).width());
			this.setBoxSize(nWidth, null);
		}

		//가로, 세로스크롤 모두 없는 경우에 Box와 Content사이즈가 같게 설정
		//if (!bH && !bV) {
			//this.setBoxSize(oBoxSize.nWidth, oBoxSize.nHeight);
		//}
	},
	
	_adjustContentSize : function() {
		
		if (!this.isActivating()) {
			return;
		}
		
		var oContentSize = this.getDefaultContentSize();
		var oBoxSize = this.getBoxSize();
		var bV = this.option("sOverflowY") != "hidden";
		var bH = this.option("sOverflowX") != "hidden";	
		//가로, 세로스크롤 중 하나만 존재하는 경우에는 Content사이즈를 조절해 줌
		//세로 스크롤
		if (bV && !bH) {
			var nWidth = oBoxSize.nWidth;
		}
		//가로 스크롤
		if (bH && !bV) {
			var nHeight = oBoxSize.nHeight;
		}
		
		this.setContentSize(nWidth || Infinity, nHeight || Infinity);
	},

	_adjustThumbSize : function() {
		
		if (!this.isActivating()) {
			return;
		}
		
		if (!this.option("bAdjustThumbSize")) {
			return;
		}
		
		var sClassPrefix = this.option("sClassPrefix");
		var nMinThumbSize = this.option("nMinThumbSize");
		var oContentSize = this.getContentSize();
		var oBoxSize = this.getBoxSize(); //현재 그려진 box 사이즈

		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();
		if (oV.elScrollBar) {
					
			var oTrackSizeV = this.getTrackSize(oV);
			var nThumbHeight = Math.floor(parseInt(oTrackSizeV.nHeight * oBoxSize.nHeight / oContentSize.nHeight));
			if (nThumbHeight < nMinThumbSize) {
				nThumbHeight = nMinThumbSize;
			}
			if (nThumbHeight >= oTrackSizeV.nHeight) {
				nThumbHeight = oTrackSizeV.nHeight;
			}
			jindo.$Element(oV.elThumb).height(nThumbHeight);
			
			///////thumb-body 크기 조절
			var nGap = 0;
			if(oV.elThumbHead) {
				nGap += jindo.$Element(oV.elThumbHead).height();
			}
			if(oV.elThumbFoot) {
				nGap += jindo.$Element(oV.elThumbFoot).height();
			}
			if(oV.elThumbBody) {
				jindo.$Element(oV.elThumbBody).height(nThumbHeight - nGap);
			}
		}
		
		if (oH.elScrollBar) {
			var oTrackSizeH = this.getTrackSize(oH);
			var nThumbWidth = Math.floor(parseInt(oTrackSizeH.nWidth * oBoxSize.nWidth / oContentSize.nWidth));
			if (nThumbWidth < nMinThumbSize) {
				nThumbWidth = nMinThumbSize;
			}
			//max값과 같은 경우
			if (nThumbWidth >= oTrackSizeH.nWidth) {
				nThumbWidth = oTrackSizeH.nWidth;
			}
			jindo.$Element(oH.elThumb).width(nThumbWidth);
			
			///////thumb-body 크기 조절
			var nGap = 0;
			if(oH.elThumbHead) {
				nGap += jindo.$Element(oH.elThumbHead).width();
			}
			if(oH.elThumbFoot) {
				nGap += jindo.$Element(oH.elThumbFoot).width();
			}
			if(oH.elThumbBody) {
				jindo.$Element(oH.elThumbBody).width(nThumbWidth - nGap);	
			}
		}
	},
	_autoToggleAvailability : function(){
		
		var sClassPrefix = this.option("sClassPrefix");
		
		var oContentSize = this.getContentSize();
		var oBoxSize = this.getBoxSize(); //현재 그려진 box 사이즈
		var oH = this.getScrollBarHorizontal();
		var oV = this.getScrollBarVertical();
		
		if (oH.elScrollBar) {
			//deactivate
			if (this.option("sOverflowX") == "scroll" && oBoxSize.nWidth >= oContentSize.nWidth) {
				jindo.$Element(oH.elScrollBar).addClass(sClassPrefix + "disabled");
				this.$super._onDeactivate("horizontal");
				if (this.isActivating()) { //활성화일경우에만 scrollbar에서 삽입된 noscript 클래스명을 다시 제거
					jindo.$Element(this._el).removeClass(sClassPrefix + "noscript");
				}	
			}
			else {
				jindo.$Element(oH.elScrollBar).removeClass(sClassPrefix + "disabled");
				
				if (this.isActivating()) { //활성화일경우에만 scrollbar도 활성화
					this.$super._onActivate("horizontal");
				}
			}	
		}
		
		if (oV.elScrollBar) {
			if (this.option("sOverflowY") == "scroll" && oBoxSize.nHeight >= oContentSize.nHeight) {
				jindo.$Element(oV.elScrollBar).addClass(sClassPrefix + "disabled");
				this.$super._onDeactivate("vertical");
				if (this.isActivating()) { //활성화일경우에만 scrollbar에서 삽입된 noscript 클래스명을 다시 제거
					jindo.$Element(this._el).removeClass(sClassPrefix + "noscript")
				}
			}
			else {
				jindo.$Element(oV.elScrollBar).removeClass(sClassPrefix + "disabled");
				if (this.isActivating()) { //활성화일경우에만 scrollbar도 활성화
					this.$super._onActivate("vertical");
				}
			}
		}
	}
}).extend(jindo.ScrollBar);/**
 * @fileOverview 별점 입력 컴포넌트
 * @author senxation
 * @version 0.3
 */

jindo.StarRating = jindo.$Class({
	/** @lends jindo.StarRating */
		
	_bIsActivating : false, //컴포넌트의 활성화 여부
	_nValue : 0, //최후에 선택된 값

	/**
	 * 컴포넌트를 생성한다.
	 * @constructs
	 * @param {HTMLElement} el 베이스(기준) 엘리먼트
	 * @param {HashTable} htOption 옵션 객체
	 * @extends jindo.UIComponent
	 * @example
oStarRating = new jindo.StarRating(jindo.$("star_rating"), {
	nStep : 1, //설정가능한 값의 단계 ex) 1, 0.5, 0.25
	nMaxValue : 10, //최대 값
	nDefaultValue : 0, //로드시 기본으로 설정할 값
	bSnap : false, //MouseMove시 step별로 스냅시킬지 여부
	bActivateOnload : true //로드시 컴포넌트 활성화여부
}).attach({
	set : function(oCustomEvent) {
		//값이 설정되었을 때 발생
		//이벤트 객체 oCustomEvent = {
		//	nValue : (Number) 설정된 값
		//}
		jindo.$("score").innerHTML = oCustomEvent.nValue;
	}
});
	 */
	$init : function(el, htOption) {
		
		//옵션 초기화
		var htDefaultOption = {
			nStep : 1, //설정가능한 값의 단계 ex) 1, 0.5, 0.25
			nMaxValue : 10, //최대 값
			nDefaultValue : 0, //로드시 기본으로 설정할 값
			bSnap : false, //MouseMove시 step별로 스냅시킬지 여부
			bActivateOnload : true //로드시 컴포넌트 활성화여부
		}
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		//Base 엘리먼트 설정
		this._el = jindo.$(el);

		//컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
		this._assignHTMLElements();
		
		this._wfMouseMove = jindo.$Fn(this._onMouseMove, this);
		this._wfMouseLeave = jindo.$Fn(this._onMouseLeave, this);
		this._wfClick = jindo.$Fn(this._onClick, this);
		
		//활성화
		if(this.option("bActivateOnload")) {
			this.activate(); //컴포넌트를 활성화한다.	
		}
	},

	/**
	 * 컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
	 */
	_assignHTMLElements : function() {
		this._elRatingElement = jindo.$$.getSingle("span", this.getBaseElement());
	},
	
	/**
	 * 컴포넌트의 베이스 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this._el;
	},

	/**
	 * 별점의 점수를 표시할 엘리먼트를 구한다.
	 * @return {HTMLElement}
	 */
	getRatingElement : function() {
		return this._elRatingElement;
	},
	
	/**
	 * 설정된 값을 구한다. 
	 * @return {Number} 0과 option의 maxValue 사이의 값
	 */
	getValue : function() {
		return this._nValue;	
	},
	
	/**
	 * 활성화된 RatingElement의 가로 길이로부터 설정된 값을 구한다. 
	 * @return {Number} 0과 option의 maxValue 사이의 값
	 */
	getValueByWidth : function() {
		return jindo.$Element(this.getRatingElement()).width() / this._nBaseWidth * this.option("nMaxValue");	
	},
	
	/**
	 * 값을 설정한다.
	 * @param {Number} nValue 0과 option의 maxValue 사이의 값
	 * @param {Boolean} bFireEvent "set" 커스텀이벤트를 발생할지 여부
	 * @return {this}
	 */
	setValue : function(nValue, bFireEvent) {
		
		if (typeof bFireEvent == "undefined") {
			var bFireEvent = true;	
		}

		nValue = this._round(nValue, this.option("nStep"));
		
		var htOption = this.option();
		var nMaxValue = this.option("nMaxValue");
		if (nValue > nMaxValue) {
			nValue = nMaxValue;
		}
		if (nValue < 0) {
			nValue = 0;
		}
		
		var nWidth = this._nBaseWidth * nValue / nMaxValue
		nWitdh = (nWidth > this._nBaseWidth) ? this._nBaseWidth : nWidth;
		
		jindo.$Element(this.getRatingElement()).width(nWidth);
		this._nValue = nValue;
		
		if (bFireEvent) {
			this.fireEvent("set", { nValue : this._nValue });	
		}
		
		return this;
	},
	
	/**
	 * 값을 초기화한다.
	 * @param {Boolean} bDefault 옵션의 defaultValue 값으로 리셋할지의 여부. 선언되지 않으면 0로 초기화 한다.
	 * @return {this}
	 */
	reset : function(bDefault) {
		if(typeof bDefault != "undefined" && bDefault) {
			var nValue = this.option("nDefaultValue");
		} else {
			var nValue = 0;		
		}
		this.setValue(nValue, false);
		return this;
	},
	
	/**
	 * 소수점단위로도 반올림
	 * @ignore
	 * @param {Number} nValue 반올림할 값
	 * @param {Number} nStep 반올림 단위 (ex 0.5)
	 */
	_round : function(nValue, nStep) { //9.9,  0.5
		var nResult = nValue;
	
		var nFloor = Math.floor(nValue); //9
		var nMaxCandidate = nFloor + 1;
		
		var nCompare = 1;
		for (var nCandidate = nFloor; nCandidate <= nMaxCandidate; nCandidate += nStep) {
			var nTempCompare = Math.abs(nValue - nCandidate);
			if (nTempCompare <= nCompare) {
				nCompare = nTempCompare;
				nResult = nCandidate;
			} 
		}
		
		if (nStep == 1) {
			return parseInt(nResult);
		}
		
		return nResult.toFixed(nStep.toString().length - 2);
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 * @return {this}
	 */
	_onActivate : function() {
		var el = this.getBaseElement();
		this._wfMouseMove.attach(el, "mousemove");
		this._wfMouseLeave.attach(el, "mouseleave");
		this._wfClick.attach(el, "click");
		
		this._nBaseWidth = jindo.$Element(this.getBaseElement()).width();
		this.reset();
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		var el = this.getBaseElement();
		this._wfMouseMove.detach(el, "mousemove");
		this._wfMouseLeave.detach(el, "mouseleave");
		this._wfClick.detach(el, "click");
	},
	
	_onMouseMove : function(we) {
		var nOffsetX = we.pos(true).offsetX + 1;
		nOffsetX = (nOffsetX > this._nBaseWidth) ? this._nBaseWidth : nOffsetX;
		
		var welRating = jindo.$Element(this.getRatingElement());
		
		if (this.option("bSnap")) {
			var nValue = nOffsetX / this._nBaseWidth * this.option("nMaxValue");
			var nWidth = this._round(nValue, this.option("nStep")) * this._nBaseWidth / this.option("nMaxValue");
			nWitdh = (nWidth > this._nBaseWidth) ? this._nBaseWidth : nWidth;
			
			welRating.css("width", nWidth + "px");		
			return;
		}
		
		welRating.css("width", nOffsetX + "px");
		return;
	},
	
	_onMouseLeave : function(we) {
		this.setValue(this._nValue, false);
	},
	
	_onClick : function(we) {
		this.setValue(this.getValueByWidth());
	}
	
}).extend(jindo.UIComponent);	﻿/**
 * @fileOverview 탭이동을 구현한 컴포넌트
 * @author hooriza, modified by senxation
 * @version 0.4
 */
jindo.TabControl = jindo.$Class({
	/** @lends jindo.TabControl */

	_bIsActivating : false, //컴포넌트의 활성화 여부

	_nCurrentIndex : null, //현재 선택된 탭의 인덱스
	_welSelectedTab : null,
	_welSelectedPanel : null,
	
	/**
	 * TabControl 컴포넌트를 생성한다.
	 * @constructs
	 * @param {HTMLElement} el TabControl을 적용한 기준 엘리먼트.
	 * @param {HashTable} htOption 옵션 객체
	 * @extends jindo.UIComponent
	 * @example
<!--
	기준 엘리먼트는 반드시 같은 수의 classPrefix+"tab", classPrefix+"panel" 쌍을 가져야하고 각 쌍은 특정 엘리먼트로 감싸져있어야한다.
	아래 예 참고.
-->
<div id="tab">
	<ul>
		<li class="tc-tab">첫번째</li> <!-- tab의 클래스명은 옵션의 classPrefix+"tab"으로 정해야한다. -->
		<li class="tc-tab tc-selected">두번째</li> <!-- default로 선택될 탭을 지정할 경우 tab의 클래스명은 옵션의 classPrefix+"selected"으로 정한다. (탭이 선택되었을 때 해당 탭과 매칭되는 패널은 classPrefix+"selected"의 클래스명을 갖게 된다.) -->
		<li class="tc-tab">세번째</li>
	</ul>
	<div>
		<div class="tc-panel">SUB SUB #1</li> <!-- tab이 선택되었을때 보여지는 panel의 클래스명은 옵션의 classPrefix+"panel"으로 정해야한다. -->
		<div class="tc-panel tc-selected">SUB SUB #2</li> <!-- default로 선택될 탭을 지정할 경우 panel의 클래스명은 옵션의 classPrefix+"selected"으로 정한다. -->
		<div class="tc-panel">SUB SUB #3</li>
	</div>
</div>
	 * @example
var oTab = new jindo.TabControl($('tab'), { 
	sClassPrefix : "tc-" // (String) 클래스명 앞에 붙게되는 prefix 선언
	sCheckEvent : "click", //탭에 적용될 이벤트 ("mouseover", "mousedown", "click")
	bActivateOnload : true //로드시 컴포넌트 활성화여부
}).attach({
	beforeSelect : function(oCustomEvent) {
		//탭이 선택되기 전에 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		// 	nIndex : (Number) 선택된 탭의 인덱스
		// 	elTab : (HTMLElement) 선택된 탭
		// 	elPanel : (HTMLElement) 선택된 패널
		//}
		//oCustomEvent.stop()시 해당 탭이 선택되지 않음.
	}
	select : function(oCustomEvent) {
		//탭이 선택되었을 때 발생
		//전달되는 이벤트 객체 oCustomEvent = {
		// 	nIndex : (Number) 선택된 탭의 인덱스
		// 	elTab : (HTMLElement) 선택된 탭
		// 	elPanel : (HTMLElement) 선택된 패널
		//}
	}
});
	 */
	$init : function(el, htOption) {
		
		//옵션 초기화
		var htDefaultOption = {
			sClassPrefix : 'tc-', //Default Class Prefix
			sCheckEvent : "click", //탭에 적용될 이벤트 ("mouseover", "mousedown", "click")
			bActivateOnload : true //로드시 컴포넌트 활성화여부
		}
		this.option(htDefaultOption);
		this.option(htOption || {});
		
		//Base 엘리먼트 설정
		this._el = jindo.$(el);
		
		this._wfEventTab = jindo.$Fn(this._onEventTab, this);

		//컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
		this._assignHTMLElements();
		
		//활성화
		if(this.option("bActivateOnload")) {
			this._selectTab(this._elSelectedTab);
			this.activate(); //컴포넌트를 활성화한다.	
		}
		
	},
	
	/**
	 * 컴포넌트에서 사용되는 HTMLElement들을 선언하는 메소드
	 */
	_assignHTMLElements : function() {
		var sPrefix = this.option('sClassPrefix');
		var el = this._el;
		this._elTabHolder = jindo.$$.getSingle('.' + sPrefix + 'tab !> *', el);
		this._elPanelHolder = jindo.$$.getSingle('.' + sPrefix + 'panel !> *', el);
		
		this._elSelectedTab = jindo.$$.getSingle('> .' + sPrefix + 'tab.' + sPrefix + 'selected', this._elTabHolder);
		if (!this._elSelectedTab) {
			this._elSelectedTab = jindo.$$.getSingle('> .' + sPrefix + 'tab', this._elTabHolder);
		}
	},
	
	/**
	 * 탭을 가지는 부모 엘리먼트(UL)를 구한다
	 * @return {HTMLElement}
	 */
	getTabHolder : function() {
		return this._elTabHolder;
	},
	
	/**
	 * 패널을 가지는 부모 엘리먼트(DIV)를 구한다
	 * @return {HTMLElement}
	 */
	getPanelHolder : function() {
		return this._elPanelHolder;
	},

	/**
	 * n번째 탭 엘리먼트를 구한다
	 * @return {HTMLElement}
	 */
	getTab : function(n) {
		return this.getTabs()[n];
	},

	/**
	 * 탭 엘리먼트 목록을 구한다
	 * @return {Array}
	 */
	getTabs : function() {
		var sPrefix = this.option('sClassPrefix');
		return jindo.$$('> .' + sPrefix + 'tab', this.getTabHolder());
	},

	/**
	 * n번째 패널 엘리먼트를 구한다
	 * @return {HTMLElement}
	 */
	getPanel : function(n) {
		return this.getPanels()[n];
	},

	/**
	 * 패널 엘리먼트 목록을 구한다
	 * @return {Array}
	 */
	getPanels : function() {
		var sPrefix = this.option('sClassPrefix');
		return jindo.$$('> .' + sPrefix + 'panel', this.getPanelHolder());
	},
	

	/**
	 * n번째 Tab을 선택한다.
	 * @param {Number} n
	 * @param {bFireEvent} 선택시 사용자 이벤트를 발생할 지 여부
	 * @return {Boolean} 선택여부
	 */
	selectTab : function(n, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			var bFireEvent = true;	
		}
		
		var elTab = null;
		if (typeof n == 'number') {
			elTab = this.getTab(n);
		}
		if (!elTab) {
			return false;
		}
		
		this._selectTab(elTab, bFireEvent);
		return true;
	},

	/**
	 * 몇 번째 탭인지 구한다
	 * @param {HTMLElement} elTab
	 * @return {Number} 
	 */	
	getIndex : function(elTab) {
		return jindo.$Element(this.getTabHolder()).indexOf(elTab)
	},
	
	/**
	 * 현재 몇번째 탭이 보여지고 있는지 구한다.
	 * @return {Number}
	 */
	getCurrentIndex : function() {
		return this._nCurrentIndex;
	},
	
	_selectTab : function(elTab, bFireEvent) {
		
		if (typeof bFireEvent == "undefined") {
			var bFireEvent = true;	
		}
		
		var sPrefix = this.option('sClassPrefix');
		var nIndex = this.getIndex(elTab);
		
		// 해당번째 패널 찾기
		var elPanel = this.getPanel(nIndex);
		
		if (bFireEvent) {
			if (!this.fireEvent("beforeSelect", {
				nIndex : nIndex,
				elTab : elTab,
				elPanel : elPanel
			})) {
				return;
			}
		}
		
		var welTab = jindo.$Element(elTab);
		if (this._welSelectedTab) {
			this._welSelectedTab.removeClass(sPrefix + 'selected');
		}
		this._welSelectedTab = welTab;
		welTab.addClass(sPrefix + 'selected');
		
		var welPanel = jindo.$Element(elPanel);
		if (this._welSelectedPanel) {
			this._welSelectedPanel.removeClass(sPrefix + 'selected');
		}
		this._welSelectedPanel = welPanel;
		welPanel.addClass(sPrefix + 'selected');
		
		this._nCurrentIndex = nIndex;
		
		if (bFireEvent) {
			this.fireEvent("select", {
				nIndex : nIndex,
				elTab : elTab,
				elPanel : elPanel
			})
		}
	},
	
	/**
	 * 컴포넌트의 베이스 엘리먼트를 가져온다.
	 * @return {HTMLElement}
	 */
	getBaseElement : function() {
		return this._el;
	},
	
	/**
	 * 컴포넌트를 활성화한다.
	 * @return {this}
	 */
	_onActivate : function() {
		this._wfEventTab.attach(this.getTabHolder(), this.option("sCheckEvent"));
	},
	
	/**
	 * 컴포넌트를 비활성화한다.
	 * @return {this}
	 */
	_onDeactivate : function() {
		this._wfEventTab.detach(this.getTabHolder(), this.option("sCheckEvent"));
	},
	
	_onEventTab : function(we) {
		var sPrefix = this.option('sClassPrefix');
		this.fireEvent(we.type, { weEvent : we });
		
		var el = we.element;
		var elTab = jindo.$$.test(el, '.' + sPrefix + 'tab') ? el : jindo.$$.getSingle('! .' + sPrefix + 'tab', el);
		if (!elTab) {
			return; // 탭을 클릭한게 아니면 작업 중단
		}
		
		this._selectTab(elTab);
	}
}).extend(jindo.UIComponent);