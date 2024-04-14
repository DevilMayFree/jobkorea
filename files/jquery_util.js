var _isActiveLayer = 0;
var _secure_container = [];
var ___runningKey;
(function($){
	$(document).ready(function (){
		_js_include('/js/ajax/jvalues_util.js');  /* AJAX UTIL */
	});
	_getSecureScript = function(src){
		_setSecurityKey();
		$.ajax({
			type: "post",
			url: "/_secript"+src,
			contentType:'application/x-www-form-urlencoded;charset=utf-8',
			cache: false,
			async: false,
			dataType: "json",
			success: function(data){
				$('<script>').attr('type','text/javascript').text(_decrypt(data._scriptResult)).appendTo('head');
			}
		});
	}
	_clone = function(obj){
		if(obj === null || typeof(obj) !== 'object') return obj;
		var copy;
		if(obj instanceof Array){
			copy = [];
			for(var i=0;i<obj.length;i++) copy[i] = _cloneObj(obj[i]);
		}
		else copy = _cloneObj(obj);
		return copy;
	}
	_cloneObj = function(obj){
		var copy = obj.constructor();
		for(var attr in obj){
			if(obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
		}
		return copy;
	}
	_js_include = function(destination, func){
		$.getScript(destination, function(){
			if(func) func();
		});
	}
	_addSecureObject = function(id, value){
		var isNew = true;
		for(var i=0;i<_secure_container.length;i++){
			if(_secure_container[i].id == id){
				 _secure_container[i].value = value;
				 isNew = false;
				 break;
			}
		}
		if(isNew){ 
			var _secure_obj = new Object();
			_secure_obj.id		= id;
			_secure_obj.value	= value;
			_secure_container[_secure_container.length] = _secure_obj;
		}
	}
	_isTransFormedSecureObject = function(){
		var _ret = false; 
		for(var i=0;i<_secure_container.length;i++){
			if(_secure_container[i].value != $('#'+_secure_container[i].id).val()){
				_ret = true;
				alert('중요정보가 변조되었습니다. 확인하시기 바랍니다.');
				break;
			}
		}
		return _ret;
	}
	_getSendObject = function(f, skip){
		var obj = new Array();
		var row = 0;
		for(var i=0;i<f.elements.length;i++){
			try{
				if(skip)
					if(f.elements[i].name.indexOf(skip)!=-1) continue;
				if(f.elements[i].type == 'radio' || f.elements[i].type == 'checkbox'){
					if(f.elements[i].checked){
						var obj_i = new Object();
						obj_i.name  = f.elements[i].name;
						obj_i.value = f.elements[i].value;
						obj[row] = obj_i;
						row++;
					} 
				}
				else{
					var obj_i = new Object();
					obj_i.name = f.elements[i].name;
					obj_i.value = f.elements[i].value;
					obj[row] = obj_i;
					row++;
				}
			}
			catch(exception){};
		}
		return obj;
	}
	_getSimpleObject = function(_name, _value){
		var _obj = new Object();
		_obj.name = _name;
		_obj.value = _value;
		return _obj;
	}
	_appendObjectToForm = function(f, obj){
		for(var i=0;i<obj.length;i++){
			var obj_i = getInputObject('hidden', obj[i].name, obj[i].name, obj[i].value);
			f.appendChild(obj_i);
		}
	}
	_clearObjectsFromForm = function(f){
		for(var i=0;i<f.elements.length;i++) f.removeChild(f.elements[i]);
	}
	_clearNamedObjectFromForm = function(f, _name){
		for(var i=0;i<f.elements.length;i++){
			if(f.elements[i].name == _name) f.removeChild(f.elements[i]);
		}
	}
	_transFormObject = function(obj, _tObj,_oNames, _nName, del, len, filter, _decodeKey){ //source[Array], target[Array], orginal[Array], transName[Array], delimiter, length for[SELECT OBJECT], filter, decodeKey
		var _rows = 0;
		for(var i=0;i<obj.length;i++){
			var _val = "";
			if(filter){
				if(obj[i][filter.key]==filter.value){
					if(filter.selector){
						if(filter.selector.values instanceof Array){
							var _isHaving = false;
							for(var j=0;j<filter.selector.values.length;j++)
								if(obj[i][filter.selector.key]==filter.selector.values[j]){
									_isHaving = true;
									break;
								}
							if(_isHaving) _val = _getTransValue(obj[i], _oNames, del, len, _decodeKey);
						}
						else
							if(obj[i][filter.selector.key]==filter.selector.values) _val = _getTransValue(obj[i], _oNames, del, len, _decodeKey);
					}
					else _val = _getTransValue(obj[i], _oNames, del, len, _decodeKey);
				}
			}
			else{
				_val = _getTransValue(obj[i], _oNames, del, len, _decodeKey);
			}
			if(_val!=""){
				var i_obj = _tObj[_rows];
				if(i_obj==null) i_obj = new Object();
				i_obj[_nName] = _trim(_val);
				_tObj[_rows] = i_obj;
				_rows++;
			}
		}
	}
	_setDelimiter = function(_src, del, len){
		var _ret = "";
		var delC = 0;
		var _arr = _src.split("");
		for(var i=0;i<_arr.length-1;i++){
			if(_arr[i]==del) continue;
			_ret += _arr[i];
			delC ++;
			if(len==delC){
				_ret += del;
				delC = 0;
			}
		}
		_ret += _arr[_arr.length-1];
		return _ret;
	}
	_getTransValue = function(obj, fields, del, len, _decodeKey){
		var _val = "";
		if(fields instanceof Array){
			for(var i=0; i<fields.length; i++){
				var value = obj[fields[i]];
				if(value === void 0) value = fields[i];
				if(len>0) _val += _setDelimiter(value,del,len);
				else _val += value;
				if(i<fields.length-1) _val += del;
			}
		}
		else{
			if(len>0) _val += _setDelimiter(obj[fields],del,len);
			else _val += obj[fields];
		}
		return _val;
	}
	var _jCallBack;
	_sendJQueryAjax = function(obj, _method, isSynch, _idx, _callBack){
		var _async = true;
		if(isSynch) _async = false;
		var _ret;
		if(_callBack) _jCallBack = _callBack;
		else _jCallBack = _jOperation;
		$.ajax({
			url: "/_json/source.jsp",
			dataType: "json", //json, xml, html, js, text
			type: _method,
			async: _async,
			data: obj,	// Data Object Structure Instance
			success: function(data){
				if(isSynch) _ret = _jCallBack(data, _idx);
				else _jCallBack(data, _idx);
			},
			error: function(xhr, status, error){}
		});
		return _ret;
	}
	_chkEmpty = function(x){
		return (x!='');
	}
	_getSendArrayInfo = function(sendArray){		/*FORMDATA String ==> JavaScript*/ 
		var _sendKeys = [];
		var _sendValues = [];
		if(sendArray.constructor == Array){
			for(var i in sendArray){
				var idx = _sendKeys.lastIndexOf(sendArray[i].name.trim());
				if(idx!=-1){
					_sendKeys.splice((idx+1), 0, sendArray[i].name.trim());
					_sendValues.splice((idx+1), 0, sendArray[i].value.trim());
				}
				else{
					_sendKeys.push(sendArray[i].name.trim());
					_sendValues.push(sendArray[i].value.trim());
				}
			}
		}
		else{
			for(var i in sendArray){
				if(sendArray[i].trim()!='') _sendValues.push(sendArray[i].trim());
			}
		}
		return _sendValues.filter(_chkEmpty).join('$');
	}
	_getSSLSendObject = function(f){
		var obj = f;
		if(f.elements){
			obj = $(f).serializeArray();
			var sendObjInfo = _getSendArrayInfo(obj);
			var _sha256Key = SHA256(sendObjInfo);		/*SHA256 plainTxt ==> JavaScript*/
			if(___runningKey==_sha256Key) return null;
			else ___runningKey=_sha256Key;
			obj.push({'name':'sha256key','value':_sha256Key});
		}
		else{
			var sendObjInfo = _getSendArrayInfo(obj);
			obj.sha256key = SHA256(sendObjInfo);		/*SHA256 plainTxt ==> JavaScript*/
			if(___runningKey==obj.sha256key) return null;
			else ___runningKey=obj.sha256key;
		}
		return obj;
	}
	_sendSSLJQueryAjax = function(_obj, _method, isSynch, _idx, _callBack){
		var obj = _getSSLSendObject(_obj);
		if(obj==null) return;

		_setSecurityKey();
		try{ parent.spinner(); }catch(e){};
		var _async = true;
		if(isSynch) _async = false;
		var _ret;
		if(_callBack) _jCallBack = _callBack;
		else _jCallBack = _jOperation;
		$.ajax({
			url: "/_sslprss/source.jsp",
			contentType: "application/x-www-form-urlencoded;charset=utf-8",
			dataType: "json", //json, xml, html, js, text
			type: _method,
			async: _async,
			data: obj,	// Data Object Structure Instance
			success: function(data){
				try{ parent.spinnerStop(); }catch(e){};
				if(isSynch) _ret = _jCallBack(JSON.parse(_decrypt(data._sslTKResult)), _idx);
				else _jCallBack(JSON.parse(_decrypt(data._sslTKResult)), _idx);
				___runningKey = '';
			},
			error: function(xhr, status, error){
				try{ parent.spinnerStop(); }catch(e){};
				___runningKey = '';
			}
		});
		return _ret;
	}
	getStyleClass = function(_innerHTML){
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = _innerHTML;
		return style;
	}
	getInputObject = function(_type, _id, _name, _value, _style, _properties){
		var i_obj	= document.createElement('INPUT');
		i_obj.type = _type;
		i_obj.id   = _id;
		i_obj.name = _name;
		i_obj.value = _value;
		if(_style) i_obj.style.cssText = _style;
		if(_properties) for(var i in _properties) i_obj.setAttribute(i, _properties[i]);
		return i_obj;
	}
	getTDObj = function(_type, _id, _name, _value, _class, _style, _properties){
		if(_value==null) _value = '';
		var td_obj	= document.createElement('TD');
		td_obj.setAttribute("id", 'TD_'+_name);
		if(_type == "text") td_obj.appendChild(getInputObject(_type, _id, _name, _value, _style, _properties));
		else{
			td_obj.insertAdjacentHTML("afterBegin", _value);
			if(_style) td_obj.style.cssText = _style;
			if(_properties) for(var i in _properties) td_obj.setAttribute(i, _properties[i]);
		}
		if(_class) td_obj.setAttribute("class", _class);
		return td_obj;
	}
	getTHObj = function(_type, _id, _name, _value, _class, _style, _properties){ // ONLY HTML
		if(_value==null) _value = '';
		var th_obj	= document.createElement('TH');
		th_obj.insertAdjacentHTML("afterBegin", _value);
		if(_style) th_obj.style.cssText = _style;
		if(_properties) for(var i in _properties) th_obj.setAttribute(i, _properties[i]);
		if(_class) th_obj.setAttribute("class", _class);
		return th_obj;
	}
	getTRObj = function(_id, _height, _className, _style, _event, _jScript){
		var tr_obj = document.createElement('TR');
		tr_obj.id	= _id;
		tr_obj.setAttribute("height", _height);
		if(_className) tr_obj.setAttribute("class", _className);
		if(_style) tr_obj.style.cssText = _style;
		if(_event) addEvent(tr_obj, _event, _jScript);
		return tr_obj;
	}
	getSelectObj = function(_name, obj, _className, _style, _event, _jScript){
		var select_obj = document.createElement('SELECT');
		if(_name){
			select_obj.id = _name;
			select_obj.name = _name;
		}
		if(_className) select_obj.setAttribute("class", _className);
		if(_style) select_obj.style.cssText = _style;
		if(_event) addEvent(select_obj, _event, _jScript);
		setSelectObj(select_obj, obj);
		return select_obj;
	}
	setSelectObj = function(_tObj, obj, init){
		if(init){
			obj.splice(0,0,init);	// INIT OBJECT ADD (Start Index, How Many Remove, Add Items)
		}
		for(var i=0;i<obj.length;i++){
			var i_option = document.createElement('OPTION');
			i_option.value = obj[i].value;
			i_option.text = obj[i].text;
			_tObj.options.add(i_option);
		}
	}
	insertSelectObj = function(_tObj, obj, idx){
		var i_option = document.createElement('OPTION');
		i_option.value = obj.value;
		i_option.text = obj.text;
		_tObj.add(i_option, _tObj.options[idx]);
	}
	tableAddRow = function(t_id, r_obj){
		var table_item = _getTableRowItem(t_id);
		table_item.appendChild(r_obj);
	}
	removeRowObjById = function(t_id, r_id){
		var table_item = _getTableRowItem(t_id);
		for(var i=0;i<table_item.childNodes.length;i++){
			if(table_item.childNodes[i].id == r_id){
				table_item.removeChild(table_item.childNodes[i]);
				break;
			}
		}
	}
	removeRow = function(t_id, r_obj){
		removeRowObjById(t_id, r_obj.id);
	}
	getRowObj = function(t_id, _id){
		var r_obj = null;
		var table_item = _getTableRowItem(t_id);
		for(var i=0;i<table_item.childNodes.length;i++){
			if(table_item.childNodes[i].id == _id){
				r_obj = table_item.childNodes[i];
				break;
			}
		}
		return r_obj;
	}
	getRowObjByIndex = function(t_id, idx){
		var r_obj = null;
		var table_item = _getTableRowItem(t_id);
		if(idx < table_item.childNodes.length) r_obj = table_item.childNodes[idx];
		return r_obj;
	}
	getTableLastObject = function(t_id){
		var table_item = _getTableRowItem(t_id);
		return table_item.childNodes[table_item.childNodes.length-1];
	}
	getTableRowSize = function(t_id){
		return _getTableRowItem(t_id).childNodes.length;
	}
	removeRows = function(t_id){
		var table_item = _getTableRowItem(t_id);
		try{
			while(table_item.childNodes.length>0) table_item.deleteRow(0);
		}
		catch(e){};
	}
	_getTableRowItem = function(t_id){
		var tbody = _getIdObject(t_id).getElementsByTagName("TBODY");
		var table_item = tbody.item(0);
		if(table_item == null){
			table_item = document.createElement('TBODY');
			_getIdObject(t_id).appendChild(table_item);
		}
		return table_item;
	}
	_getIdObject = function(_id){
		return document.getElementById(_id);
	}
	_getTRInfo = function(obj, _name){
		var _ret = '';
		for(var i=0;i<obj.childNodes.length;i++){
			var obj_i = obj.childNodes[i];
			if(obj_i.tagName == "TD"){
				if(obj_i.id == ('TD_'+_name)){
					if(obj_i.childNodes[0]){
						if(obj_i.childNodes[0].tagName=="INPUT") _ret = obj_i.childNodes[0].value;
						else _ret = obj_i.innerHTML;
						break;
					}
					else{
						_ret = obj_i.value;
						break;
					}
				}
			}
			else{
				if(obj_i.name == _name){
					_ret = obj_i.value;
					break;
				}
			}
		}
		return _ret;
	}
	_modTRInfo = function(obj, _name, _value, isHtml){
		for(var i=0;i<obj.childNodes.length;i++){
			var obj_i = obj.childNodes[i];
			if(obj_i.name){
				if(obj_i.name == _name){
					if(isHtml){
						obj_i.innerHTML = "";
						if(_value!="") obj_i.insertAdjacentHTML("afterBegin", _value);
					}
					else obj_i.value = _value;
					break;
				}
			}
			else if(obj_i.childNodes[0]){
				if(obj_i.childNodes[0].name == _name){
					obj_i.childNodes[0].value = _value;
					break;
				}
			}
		}
	}
	_getColumnCnts = function(tId){
		var cols = $('#'+tId).find("col");
		var count = 0;
		for(var i = 0; i < cols.length; i++){
			var colspan = cols.eq(i).attr("colspan");
			if( colspan && colspan > 1) count += colspan;
			else count++;
		}
		return ""+count;
	}
	/**
		Written by Joseph
		Feel free to use or modify this script for any purpose. I'd appreciate you leaving
		this header in though.
	*/
	addEvent = function(obj, eventType, handler){
		if (!obj.eventHandlers) obj.eventHandlers = [];
		if (!obj.eventHandlers[eventType]){
			obj.eventHandlers[eventType] = [];
			if(obj['on' + eventType]) obj.eventHandlers[eventType].push(obj['on' + eventType]);
			obj['on' + eventType] = handleEvent;
		}
		obj.eventHandlers[eventType].push(handler);
	}
	removeEvent = function(obj, eventType, handler){
		var handlers = obj.eventHandlers[eventType];
		for(var i in handlers) if (handlers[i] == handler) delete handlers[i];
	}
	handleEvent = function(e){
		if(!e) e = fixEvent(event);
		var handlers = this.eventHandlers[e.type];
		try{
			for(var i in handlers){
				this.$$handleEvent = handlers[i];
				eval(this.$$handleEvent+'(this)');
			}
		}
		catch(exception){};
	}
	fixEvent = function(event){
	//	add W3C standard event methods
		event.preventDefault = fixEvent.preventDefault;
		event.stopPropagation = fixEvent.stopPropagation;
		return event;
	}
	fixEvent.preventDefault = function(){
		this.returnValue = false;
	}
	fixEvent.stopPropagation = function(){
		this.cancelBubble = true;
	}
	/** Templets Check **/
	var _stemplets = ['cyKhan', 'yesTrader'];
	_isTempletUrl = function(_url, _templet){
		try{
			if(document.title.toUpperCase().substring(0,_templet.length)==_templet.toUpperCase()){
				if(_url.indexOf('templet=')==-1){
					if(_url.indexOf('?')==-1) _url += '?templet='+_templet;
					else _url += '&templet='+_templet;
				}
			}
		}
		catch(exception){}
		return _url;
	}
	_isTemplet = function(_templet, f){
		var _ret = false;
		if(f){
			var _action = f.action;
			var postAction = _isTempletUrl(_action);
			if(_action != postAction){
				f.action = postAction;
				_ret = true;
			}
		}
		return _ret;
	}
	_checkTemplets = function(templets, f){
		for(var i=0;i<templets.length;i++)
			if(_isTemplet(templets[i], f)) break;
	}
	_checkTempletUrls = function(templets, _url){
		var postUrl = _url;
		for(var i=0;i<templets.length;i++){
			postUrl = _isTempletUrl(_url, templets[i]);
			if(_url != postUrl) break;
		}
		return postUrl;
	}
	/** Templets Check **/
	SSLFormSubmit = function(f){
		var _target = f.target;
		if(_target=='') f.target = "_self";
		_checkTemplets(_stemplets, f);
		if(!document.body.contains(f)) document.body.appendChild(f);
		f.submit();
	}
	SSLDirectUrl = function(_url, _target, _redirectUrl){
		if(_url.toLowerCase().indexOf('http')!=-1){
			alert('다른사이트 이동으로 피싱위험이 있습니다.');
			return;
		}
		var form = document.createElement("form");
		document.body.appendChild(form);
		
		form.setAttribute("method", "post");
		if(_target==null) _target = "_self";
		form.setAttribute("target", _target);
		if(_redirectUrl){
			var obj_ = getInputObject("hidden", "_redirectUrl", "_redirectUrl", _redirectUrl);
			form.appendChild(obj_);
		}
		if(_url.indexOf("?")!=-1){
			var _params = _url.substring(_url.indexOf("?")+1);
			if(_params.indexOf('&')!=-1){
				var params_ = _params.split('&');
				for(var i=0;i<params_.length;i++){
					var _param = params_[i].split('=');
					var obj_ = getInputObject("hidden", _param[0], _param[0], _param[1]);
					form.appendChild(obj_);
				}
			}
			else{
				var _param = _params.split('=');
				var obj_ = getInputObject("hidden", _param[0], _param[0], _param[1]);
				form.appendChild(obj_);
			}
		}
		form.setAttribute("action", _url);
		SSLFormSubmit(form);
	}
	//E2E Trans Data
	_TREncData = function(toForm, toFields, fromForm, fromFields){  //toFormName, toFields[Array], fromFormName, fromFields[Array]
		var tForm = document.forms[toForm];
		_TREncRuntimeForm(tForm, toFields, fromForm, fromFields);
	}
	_TREncRuntimeForm = function(tForm, toFields, fromForm, fromFields){  //toForm, toFields[Array], fromFormName, fromFields[Array]
		var fForm = document.forms[fromForm];
		if(fForm.hid_key_data){
			var hKeyData = fForm.hid_key_data.value;
	
			if(tForm.hid_key_data) tForm.hid_key_data.value = hKeyData;
			else tForm.appendChild(getInputObject("hidden", "hid_key_data", "hid_key_data", hKeyData));

			_setEncDataClears(tForm, toFields);
			var h_EncData = "";
			if(tForm['hid_enc_data']) h_EncData = tForm.hid_enc_data.value;
			for(var i=0;i<fromFields.length;i++){
				var _h_enc_data = _getEncDataFromForm(fromForm, fromFields[i]);
				if(_h_enc_data!='' && _h_enc_data!='undefined'){
					h_EncData += 'E2E_'+toFields[i]+'='+_h_enc_data+'%TK%';
					if(!tForm['E2E_'+toFields[i]]) tForm.appendChild(getInputObject("hidden", "E2E_"+toFields[i], "E2E_"+toFields[i], ""));
				}
			}
			if(tForm['hid_enc_data']) tForm.hid_enc_data.value = h_EncData;
			else tForm.appendChild(getInputObject("hidden", "hid_enc_data", "hid_enc_data", h_EncData));
		}
	}
	_getEncDataFromForm = function(fromForm, field){
		var _ret = "";
		var fForm = document.forms[fromForm];
		if(fForm.hid_enc_data){
			var h_EncData = fForm.hid_enc_data.value;
			var h_EncArry = h_EncData.split('%TK%');
			for(var i=0;i<h_EncArry.length;i++){
				if(h_EncArry[i].indexOf(field)!=-1){
					_ret = h_EncArry[i].substring(h_EncArry[i].indexOf("=")+1);
					break;
				}
			}
		}
		return _ret;
	}
	_setEncDataClears = function(tForm, toFields){
		for(var i=0;i<toFields.length;i++) _setEncDataFormClear_i(tForm, toFields[i]);
	}
	_setEncDataClear = function(obj){
		_setEncDataFormClear_i(obj.form, obj.name);
	}
	_setEncDataFormClear_i = function(fForm, field){
		if(fForm.hid_enc_data){
			var h_EncData = fForm.hid_enc_data.value;
			var h_EncArry = h_EncData.split('%TK%');
			for(var i=0;i<h_EncArry.length;i++){
				if(h_EncArry[i].indexOf(field)!=-1){
					h_EncArry[i] = '';
					break;
				}
			}
			fForm.hid_enc_data.value = h_EncArry.join('%TK%');
		}
		if(fForm["E2E_"+field]) fForm["E2E_"+field].value = '';
	}
	_setEncDataFormClear = function(fromForm, field){
		var fForm = document.forms[fromForm];
		_setEncDataFormClear_i(fForm, field);

		/** Add Transe Key **/
		if(fForm["Tk_"+field+"_separator"]) fForm["Tk_"+field+"_separator"].value = '';
		if(fForm["Tk_"+field+"_hidden"]) fForm["Tk_"+field+"_hidden"].value = '';
		if(fForm["Tk_"+field+"_hmac"]) fForm["Tk_"+field+"_hmac"].value = '';
		if(fForm["Tk_"+field+"_name"]) fForm["Tk_"+field+"_name"].value = '';
		if(fForm["transkeyUuid"]) fForm["transkeyUuid"].value = '';
		/** Add Transe Key **/
	}
	_setEncDataToForm = function(toForm, field, enc_value){
		if(toForm['E2E_'+field]) toForm['E2E_'+field].value = enc_value;
		else toForm.appendChild(getInputObject("hidden", "E2E_"+field, "E2E_"+field, enc_value));
	}
	_setEncDataForm = function(tForm){
		if(tForm['hid_enc_data']) tForm.hid_enc_data.value = "";
		else tForm.appendChild(getInputObject("hidden", "hid_enc_data", "hid_enc_data", ""));
		var hEncData = "";

		for(var i=0;i<tForm.elements.length;i++){
			if(tForm.elements[i].name.indexOf('E2E')!=-1) hEncData += tForm.elements[i].name+'='+tForm[i].value+'%TK%';
		}
		tForm.hid_enc_data.value = hEncData;
	}
	//E2E Trans Data
	//TouchEn TranseKey
	_TRTranseKeyRuntimeForm = function(tForm, toFields, tk_ids, tk_names){  //toForm, toFields[Array], tk_ids[Array]
		for(var i=0;i<tk_ids.length;i++){
			if(_getIdObject("Tk_"+tk_ids[i]+"_separator").value == "transkey"){
				var tkObj = tk.inputFillEncData(_getIdObject(tk_ids[i]));
				if(tForm['Tk_'+toFields[i]+'_separator']) tForm['Tk_'+toFields[i]+'_separator'].value = "transkey";
				else tForm.appendChild(getInputObject("hidden", 'Tk_'+toFields[i]+'_separator', 'Tk_'+toFields[i]+'_separator', "transkey"));

				if(tForm['Tk_'+toFields[i]+'_hidden']) tForm['Tk_'+toFields[i]+'_hidden'].value = tkObj.hidden;
				else tForm.appendChild(getInputObject("hidden", 'Tk_'+toFields[i]+'_hidden', 'Tk_'+toFields[i]+'_hidden', tkObj.hidden));
				if(tForm['Tk_'+toFields[i]+'_hmac']) tForm['Tk_'+toFields[i]+'_hmac'].value = tkObj.hmac;
				else tForm.appendChild(getInputObject("hidden", 'Tk_'+toFields[i]+'_hmac', 'Tk_'+toFields[i]+'_hmac', tkObj.hmac));
				if(tForm['Tk_'+toFields[i]+'_name']) tForm['Tk_'+toFields[i]+'_name'].value = tk_ids[i];
				else tForm.appendChild(getInputObject("hidden", 'Tk_'+toFields[i]+'_name', 'Tk_'+toFields[i]+'_name', tk_ids[i]));
			}
		}
		if(tForm['transkeyUuid']) tForm['transkeyUuid'].value = tk.transkeyUuid;
		else tForm.appendChild(getInputObject("hidden", 'transkeyUuid', 'transkeyUuid', tk.transkeyUuid));
	}
	_getTranseKeyDataFromForm = function(fromForm, fid){
		var fForm = document.forms[fromForm];
		var tk_inf = '';
		if(fForm['Tk_'+fid+'_separator']){
			if(fForm['Tk_'+fid+'_separator'].value=='transkey'){
				tk_inf = fForm['transkeyUuid'].value+'\f';
				tk_inf += fForm['Tk_'+fid+'_hidden'].value+'\f';
				tk_inf += fForm['Tk_'+fid+'_hmac'].value+'\f';
				tk_inf += fForm['Tk_'+fid+'_name'].value;
			}
		}
		return tk_inf;
	}
	_setTranseKeyDataToForm = function(tForm, field, rVal){
		var tk_inf = rVal.split('\f');
		if(tForm['Tk_'+field+'_separator']) tForm['Tk_'+field+'_separator'].value = "transkey";
		else tForm.appendChild(getInputObject("hidden", 'Tk_'+field+'_separator', 'Tk_'+field+'_separator', "transkey"));

		if(tForm['transkeyUuid']) tForm['transkeyUuid'].value = tk_inf[0];
		else tForm.appendChild(getInputObject("hidden", 'transkeyUuid', 'transkeyUuid', tk_inf[0]));
		if(tForm['Tk_'+field+'_hidden']) tForm['Tk_'+field+'_hidden'].value = tk_inf[1];
		else tForm.appendChild(getInputObject("hidden", 'Tk_'+field+'_hidden', 'Tk_'+field+'_hidden', tk_inf[1]));
		if(tForm['Tk_'+field+'_hmac']) tForm['Tk_'+field+'_hmac'].value = tk_inf[2];
		else tForm.appendChild(getInputObject("hidden", 'Tk_'+field+'_hmac', 'Tk_'+field+'_hmac', tk_inf[2]));
		if(tForm['Tk_'+field+'_name']) tForm['Tk_'+field+'_name'].value = tk_inf[3];
		else tForm.appendChild(getInputObject("hidden", 'Tk_'+field+'_name', 'Tk_'+field+'_name', tk_inf[3]));
	}
	//TouchEn TranseKey
	//Mobile TranseKey
	_MTRTranseKeyRuntimeForm = function(tForm, toFields, tk_ids){  //toForm, toFields[Array], tk_ids[Array]
		for(var i=0;i<tk_ids.length;i++){
			var tkObj = mtk.inputFillEncData(_getIdObject(tk_ids[i]));
			if(tForm['transkey_'+toFields[i]]) tForm['transkey_'+toFields[i]].value = tkObj.hidden;
			else tForm.appendChild(getInputObject("hidden", 'transkey_'+toFields[i], 'transkey_'+toFields[i], tkObj.hidden));
			if(tForm['transkey_HM_'+toFields[i]]) tForm['transkey_HM_'+toFields[i]].value = tkObj.hmac;
			else tForm.appendChild(getInputObject("hidden", 'transkey_HM_'+toFields[i], 'transkey_HM_'+toFields[i], tkObj.hmac));
			if(tForm['transkey_ID_'+toFields[i]]) tForm['transkey_ID_'+toFields[i]].value = tk_ids[i];
			else tForm.appendChild(getInputObject("hidden", 'transkey_ID_'+toFields[i], 'transkey_ID_'+toFields[i], tk_ids[i]));
		}
		if(tForm['transkeyUuid']) tForm['transkeyUuid'].value = mtk.transkeyUuid;
		else tForm.appendChild(getInputObject("hidden", 'transkeyUuid', 'transkeyUuid', mtk.transkeyUuid));
	}
	//Mobile TranseKey
	//KSBIZ ADD SCRIPT
	getNodeBlockByName = function(sNode, name){ // getXMLNode of equas nodename
		if(sNode.nodeName==name) return sNode;
		else{
			if(sNode.hasChildNodes()){
				var childNodes = sNode.childNodes;
				for(var i=0;i<childNodes.length;i++)  return getNodeBlockByName(childNodes[i], name);
			}
		}
	}
	_promptClose = function(){
		_closePopupBox('prompt');
	}
	_prompt = function(info) {
		_createPopupBox('prompt', 424, 70, 80, true) // _id, _width, _top, _left, _border
		var _innerHtml = '<table width="424" height="208"><tr><td bgcolor="#878787" align="center"><table width="406" height="190" border="0" cellpadding="0" cellspacing="0" class="t_ch"><tr><td height="40" valign="bottom"><h4><em><img src="'+info.img_0+'" hspace="6" align="absmiddle"/> '+info.title+' </em></h4></td></tr><tr><td height="2"><div class="t_login_line"></div></td></tr><tr><td height="50" valign="bottom" align="center"><div class="t_login"><em>※ '+info.message+'</em></div></td></tr><tr><td height="10" style="padding: 10px 40px;"><ul><li><em>&nbsp;'+info.text+'&nbsp;</em><input type="text" id="prompt_input" size="30" style="IME-MODE:active"/></li></ul></td></tr><tr><td height="40" valign="top" align="center"><img src="'+info.img_1+'" width="126" height="27" usemap="#PromptMap" border="0" class="bt_img"/></td></tr></table></td></tr></table><map name="PromptMap" id="PromptMap"><area shape="rect" coords="7,3,59,28" href="javascript:'+info.func+'(document.getElementById(\'prompt_input\').value);_promptClose()"/><area shape="rect" coords="67,5,124,26" href="javascript:_promptClose()"/></map>';
		_insertHtmlPopupBox('prompt', _innerHtml);
		document.getElementById("prompt_input").focus();
	}
	_popupInfo = function(info){
		_createPopupBox(info.id, info.width, info.top, info.left, true); // _id, _width, _top, _left, _border
		_insertHtmlPopupBox(info.id, info.html);
	}
	_createPopupBox = function(_id, _width, _top, _left, _border, _parent, _window, _absolute) {
		var popupbox;
		if(_window == null) _window = self;
		if(_parent) popupbox = _window.document.createElement('span');
		else popupbox = _window.document.createElement('div');
		popupbox.setAttribute('id', _id);
		if(_absolute==null) _controlWallLayer(_window, 0);
		if(_parent) _window.document.getElementById(_parent).appendChild(popupbox);
		else _window.document.getElementsByTagName('body')[0].appendChild(popupbox);
		if(_parent) popupbox.style.position = 'relative';
		else popupbox.style.position = 'absolute';
		popupbox.style.scrolling = "no";
		popupbox.style.overflow = "hidden";
		if(_top<0) _top = 0;
		popupbox.style.top = _top+"px";
		popupbox.style.left = _left+"px";
		if(_width) popupbox.style.width = _width+"px";
		else popupbox.style.width = "100%";
		popupbox.style.zIndex = 9999;
		return popupbox;
	}
	_closePopupBox = function(_pid, _parent, _window, _absolute){
		if(_window == null) _window = self;
		_window.$("#"+_pid).fadeOut(200, function(){
			if(_absolute){}
			else _controlWallLayer(_window, 1);
			if(_parent) _window.document.getElementById(_parent).removeChild(_window.document.getElementById(_pid));
			else _window.document.getElementsByTagName("body")[0].removeChild(_window.document.getElementById(_pid));
		});
/*		if(_window == null) _window = self;
		if(_absolute == null) _controlWallLayer(_window, 1);
		if(_parent) _window.document.getElementById(_parent).removeChild(_window.document.getElementById(_pid));
		else _window.document.getElementsByTagName("body")[0].removeChild(_window.document.getElementById(_pid));
*/
	}
	_controlWallLayer = function(_window, _idx){
		try{
			if(_idx==0){
				if(_window._isActiveLayer==0) _viewWall(_window);
				_window._isActiveLayer++;
			}
			else{
				_window._isActiveLayer--;
				if(_window._isActiveLayer==0) _closeWall(_window);
			}
		}
		catch(exception){alert(exception.message);};
	}
	_closeWall = function(_window){
		try{
			if(_window == null) _window = self;
			var _wall = _window.document.getElementById("wall");
			if(_wall) _wall.style.display = "none";
		}
		catch(exception){};
	}
	_viewWall = function(_window){
		try{
			var _wall = _window.document.getElementById("wall");
			if(_wall){
				_wall.style.height = $(_window.document).height()+'px';
				_wall.style.display = "";
			}
		}
		catch(exception){};
	}
	_createActivePopupBox = function(_id, _name, _width, _height, _border, _top, _left, _parent, _window, _fadeTime, _title){
		_createInfoPopupBox(_id, _name, _width, _height, _border, _top, _left, _parent, _window, _fadeTime, _title);
	}
	_createInfoPopupBox = function(_id, _name, _width, _height, _border, _top, _left, _parent, _window, _fadeTime, _title, abolute) { //_id(div id), _name(iFrame id), _width, _height, _border, _top, _left, _parent, _window, _fadeTime, _title, abolute
		if(_window == null) _window = self;
		if(_top == null) _top = _getCenterPosition(_height, false, _window)+$(_window.document).scrollTop();
		if(_left == null) _left = _getCenterPosition(_width, true, _window);
		var popupbox = _createPopupBox(_id, _width, _top, _left, _border, _parent, _window, abolute);
		_window.$("#"+_id).css("display","none");
		if(_width == null) _width = "100%";
		if(_title == null) _title = "동적으로 생성된 아이프레임입니다.";
		var hidden_Cover = "<iframe style='position:absolute; border:none; top:0; left:0; height:100%; width:100%; z-index:-1;'></iframe>";
		popupbox.innerHTML = "<iframe id='"+_name+"' name='"+_name+"' width='"+_width+"' height='"+_height+"' title='"+_title+"' allowTransparency='false' frameborder=0 scrolling=no></iframe>"+hidden_Cover;
		if(_fadeTime == null) _fadeTime = 400;
		_window.$("#"+_id).fadeIn(_fadeTime);
	}
	_getCenterPosition = function(_size, _isWidth, _window){
		if(_window == null) _window = self;
		var _ret = 0;
		if(_size != null){
			var fullSize = _getScreenFullSize(_isWidth, _window);
			_ret = (fullSize/2)-(_size/2);
		}
		return _ret;
	}
	_getScreenFullSize = function(_isWidth, _window){
		var _ret = 0;
		if(_isWidth){
/*			if(_window.innerWidth) _ret = _window.innerWidth;
			else if(_window.document.documentElement) _ret = _window.document.documentElement.clientWidth;
			else if(_window.document.body) _ret = _window.document.body.clientWidth;
*/			_ret = $(_window.document).width();
		}
		else{
/*			if(_window.innerWidth) _ret = _window.innerHeight;
			else if(_window.document.documentElement) _ret = _window.document.documentElement.clientHeight;
			else if(_window.document.body) _ret = _window.document.body.clientHeight;
*/			_ret = $(_window.top).height();
		}
		return _ret;
	}		
	_insertHtmlPopupBox = function(_pid, _html, _window){
		if(_window == null) _window = self;
		_window.document.getElementById(_pid).innerHTML = _html;
	}
	_isExistPopuBox = function(_pid, _window){
		var _ret = false;
		if(_window == null) _window = self;
		if(_window.document.getElementById(_pid)) _ret = true;
		return _ret;
	}
	_hidePopupBox = function(_pid, _window){
		if(_window == null) _window = self;
		if(_isExistPopuBox(_pid, _window)){
			var _pBox = _window.document.getElementById(_pid);
			_pBox.style.display = "none";
		}
	}
	_recoverPopupBox = function(_pid, _window){
		if(_window == null) _window = self;
		if(_isExistPopuBox(_pid, _window)){
			var _pBox = _window.document.getElementById(_pid);
			_pBox.style.display = "";
		}
	}
	_runTimeFormSubmit = function(_path, _target, params, _method, _isKsBiz){
		var form = _runTimeForm(params, _method);
		form.setAttribute("action", _path);
		form.setAttribute("target", _target);
		if(_isKsBiz) KSBizFormSubmit(form);
		else{
			document.body.appendChild(form);
			form.submit();
			document.body.removeChild(form);
		}
	}
	_runTimeForm = function(params, _method){
		var form = document.createElement("form");
		form.setAttribute("method", _method);
		if(params){
			for(var key in params){
				var obj_i = getInputObject("hidden", key, key, params[key]);
				form.appendChild(obj_i);
			}
		}
		return form;
	}
	_clearScript = function(contents){
		while(contents.indexOf('<script')!=-1){
			contents = contents.substring(0, contents.indexOf('<script'))+contents.substring(contents.indexOf('</script>')+9);
		}
		return contents;
	}
	_inheritStyle = function(frameDoc){
		var selfStyleSheets = document.styleSheets;
		var cssString = [];
		for(var i=0;i<selfStyleSheets.length;i++){
			var cssRules = selfStyleSheets[i].cssRules;
			for(var j=0;j<cssRules.length;j++){
				var cssTxt = cssRules[j].cssText;
				if(cssTxt.indexOf('height')!=-1 && cssTxt.indexOf('overflow')!=-1){
					var css_i = cssTxt.split(';');
					for(var k=0;k<css_i.length;){
						if(css_i[k].indexOf('height')!=-1) css_i.splice(k,1);
						if(css_i[k].indexOf('overflow')!=-1) css_i.splice(k,1);
						else k++;
					}
					cssTxt = css_i.join(';');
					cssString.push(cssTxt);
				}
				else cssString.push(cssTxt);
			}
		}
		frameDoc.document.write('<style>');
		frameDoc.document.write(cssString.join("\n"));
		frameDoc.document.write('</style>');
	}
	_innerPrint = function(divId, _window, html_string){
		if(_window == null) _window = self;
		var printContents;
		if(divId) printContents = _window.document.getElementById(divId).innerHTML;
		else if(html_string) printContents = html_string;

		var iframe = document.createElement('iframe');
		iframe.name = 'printFrame';
		document.body.appendChild(iframe);
		var frameDoc = iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument.document ? iframe.contentDocument.document : iframe.contentDocument;
		frameDoc.document.open();
		frameDoc.document.write(printContents);
		frameDoc.document.close();

		if(navigator.userAgent.indexOf("Trident")!=-1) frameDoc.document.body.style.zoom = 0.9;
		setTimeout(function(){
			if(frameDoc.document.queryCommandSupported('print')){
				frameDoc.document.execCommand('print', false, null);
			}
			else{
				window.frames['printFrame'].print();
			}
		}, 1500);
		setTimeout(function(){
			document.body.removeChild(iframe);
		}, 10000);
	}
	/* acnt_gds, gds_type check 
	'******************************************************************
	'00':종합(전체리스트)		0X, 1X, 3X, 4X, 6X, 9X(99제외)
	'05':수익증권계좌			0X, 9X(99제외)
	'11':위탁계좌				1X, 9X(99제외)
	'13':위탁 + KOSPI 선옵계좌	1X, 3X, 9X(99제외)
	'16':위탁 + 저축 계좌		1X, 6X, 9X(99제외)
	'30':KOSPI선옵 + KOFEX선옵 계좌		3X
	'31':KOSPI선옵계좌			3X
	'32':KOFEX선옵계좌			3X
	'60':저축계좌				6X
	'99':4-4계좌	
	'******************************************************************
	*/
	fnc_gds_chk = function(acnt_gds, gds_type){
		var _ret = false;
		if(acnt_gds=='99') return _ret;
		var acnt_type = acnt_gds.substring(0,1);
		switch(gds_type){
			case '00': _ret = true; break;
			case '05':
				if(acnt_type=='0'||acnt_type=='9') _ret = true;
				break;
			case '11':
				if((acnt_type=='1'||acnt_type=='9') && acnt_gds!='19') _ret = true;
				break;
			case '13': 
				if(acnt_type=='1'||acnt_type=='3'||acnt_type=='9') _ret = true;
				break;
			case '16': 
				if(acnt_type=='1'||acnt_type=='6'||acnt_type=='9') _ret = true;
				break;
			case '30':
			case '31':
			case '32':
				if(acnt_type=='3') _ret = true;
				break;
			case '60':
				if(acnt_type=='6') _ret = true;
				break;
		}
		return _ret;
	}
	_getFundCustGds = function(acnt, fcod, fseq, _callBack){
		var param = new Object();
		param.tr_cd = 'hts/teller/CO/CO4000Q_WTSA1_P';
		param.p_a51 = acnt;
		param.p_a52 = fcod;
		param.p_a53 = fseq;
		_sendSSLJQueryAjax(param, "POST", true, 0, _callBack);
	}
	_trim = function(obj){
		if(_getObjectType(obj)=='String'){
			obj = obj.split('+').join(' ');
			return obj;
		}
		else
			for(var i in obj) obj[i] = obj[i].split('+').join(' ');
	}
	_getObjectType = function(obj){
		return Object.prototype.toString.call(obj).slice(8,-1);
	}
	/*AES(Advanced Encryption Standard) Java ==> JavaScript*/
	_setSecurityKey = function(){
		var sendKey = {};
		var date = new Date();
		sendKey._secureKey = btoa("sJS"+date.getTime());
		window.localStorage.removeItem('_secureKey');
		window.localStorage.setItem('_secureKey', sendKey._secureKey);
		$.ajax({
			type: "post",
			url: "/inc/common/PrivateSecuerKey.jsp",
			contentType:'application/x-www-form-urlencoded;charset=utf-8',
			cache: false,
			async: false,
			dataType: "json" ,
			data: sendKey,	// Data Object Structure Instance
			success: function(data){}
		});
	}
	_decrypt = function(str){
		if(str == null || str.length < 8) return null;
		str = str.replace(/\n/gi, '');
		var decode = CryptoJS.AES.decrypt(str, CryptoJS.enc.Base64.parse(window.localStorage.getItem('_secureKey')), {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
		return decodeURIComponent(decode.toString(CryptoJS.enc.Utf8));
	}
	/*AES*/
})(jQuery);
