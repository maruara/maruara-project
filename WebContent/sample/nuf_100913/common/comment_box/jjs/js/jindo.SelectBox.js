/**
 * @fileOverview HTML Select 엘리먼트를 대체하여 디자인을 적용하는 컴포넌트
 * @author senxation
 * @version 0.2.1
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
	 * @class HTML Select 엘리먼트를 대체하여 디자인을 적용하는 컴포넌트
	 * @extends jindo.HTMLComponent
	 * @requires jindo.Timer
	 * @requires jindo.LayerManager
	 * @requires jindo.LayerPosition
	 * @requires jindo.RolloverClick
	 * @param {HTMLElement} el
	 * @param {HashTable} htOption
	 * @example
oSelectBox = new jindo.SelectBox(jindo.$("s"), {
	sClassPrefix : 'selectbox-', //Default Class Prefix
	nWidth : null, //가로 사이즈, null시 자동
	nHeight : null, //목록의 최대 높이. 그 이상시 스크롤 생김, null시 자동.
	bUseLayerPosition : true, //LayerPosition 컴포넌트로 위치 설정할지 여부.
	aOptionHTML : [], //option에 매칭되는 html. 셀렉트박스 내부에 html을 적용하고 싶을 경우 option 엘리먼트의 개수에 맞게 값을 설정한다.
	LayerPosition : {
		sPosition : "outside-bottom", //목록의 위치. LayerPosition 컴포넌트에서 사용할 옵션
		sAlign : "left", //목록의 정렬. LayerPosition 컴포넌트에서 사용할 옵션
		nTop : 0, //선택박스와 목록의 상하 간격. LayerPosition 컴포넌트에서 사용할 옵션
		nLeft : 0 //선택박스와 목록의 좌우 간격. LayerPosition 컴포넌트에서 사용할 옵션
	}
}).attach({
	change : function(oCustomEvent) {//선택한 아이템이 바뀌었을때 발생
		//전달되는 이벤트객체 oCustomEvent = {
		//	nIndex : (Number) 선택된 옵션의 인덱스, nLastIndex : nLastSelectedIndex
		//	nLastIndex : (Number) 선택되기 전의 옵션의 인덱스
		//}
	},
	open : function(oCustomEvent) {//레이어가 열리기 직전 발생
		//oCustomEvent.stop(); 수행시 레이어가 열리지 않음
	},
	close : function(oCustomEvent) {//레이어가 닫히기 직전 발생
		//oCustomEvent.stop(); 수행시 레이어가 닫히지 않음					
	},
	focus : function(oCustomEvent) {//셀렉트박스가 포커스를 얻으면 발생
		//oCustomEvent.stop(); 수행시 포커스 할 수 없음
	},
	blur : function(oCustomEvent) {//셀렉트박스가 포커스를 잃으면 발생
	}
});
	 */
	$init : function(el, htOption) {
		this._aItemData = [];
		this._aListItem = [];
		this._aOptions = [];
		var htDefaultOption = {
			sClassPrefix : 'selectbox-', //Default Class Prefix
			nWidth : null,
			nHeight : null,
			bUseLayerPosition : true, //LayerPosition 컴포넌트로 위치 설정할지 여부
			aOptionHTML : [],
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
				
				var el = oCustomEvent.element;
				jindo.$A(self._aItemData).forEach(function(htData){
					if (htData.elItem === el) {
						self.setValue(htData.sText);						
						jindo.$A.Break();
					}
				});
				
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
	setSelectedIndex : function(nIndex, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;
		}
		
		var nLastSelectedIndex = this.getSelectedIndex();
		this._setSelectedIndex(nIndex);
		this._paint();
		
		if (bFireEvent && nLastSelectedIndex != nIndex) {
			this.fireEvent("change", { nIndex : nIndex, nLastIndex : nLastSelectedIndex });	
		}
	},
	
	_setSelectedIndex : function(nIndex) {
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
		return this._aListItem;
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
		this._setSelectedIndex(nDefaultOption);
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
		var nSelectedIndex = this.getSelectedIndex(); 
		
		var sHTML = this.option("aOptionHTML")[nSelectedIndex] || "";
		var sText = this._aItemData[nSelectedIndex].sText;
		if (sHTML) {
			welLabel.html(sHTML);
		} else {
			welLabel.text(sText);
		}
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
		this._aListItem = [];
		
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
			
			var sHTML = this.option("aOptionHTML")[i] || "";
			var sText = welOption.text() || "";
			
			var sValue = welOption.attr("value");
			if (!sValue) {
				welOption.attr("value", sText);
				sValue = sText;
			}
			
			this._aItemData[i] = {
				el : elOption,
				elItem : null,
				sHTML : sHTML,
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
				if (oItem.sHTML) {
					welItem.html(oItem.sHTML);
				} else {
					welItem.text(oItem.sText);
				}
				
				if (oItem.bDisabled) {
					welItem.addClass(sPrefix + 'item-disabled');
				}
				else {
					welItem.addClass(sPrefix + 'item'); //구분선이 아닐경우만
				}
				
				elList.appendChild(elItem);
				this._aListItem.push(elItem);
				this._aItemData[i].elItem = elItem;
			}
			
		}
		if (this._aListItem.length == 0) {
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
			
			this._setSelectedIndex(nTargetIndex);
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
						self._setSelectedIndex(self._getSelectableIndex(self._nSelectedIndex, nDiff, nSelectedIndex));
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
	
}).extend(jindo.HTMLComponent);	