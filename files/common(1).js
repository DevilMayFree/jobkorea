function thisMovie(movieName){
	var obj = thisActive(movieName);
	if(obj == null){
		if(navigator.appName.indexOf("Microsoft") != -1) {
			obj = window[movieName];
			if(obj==null && parent!=null) obj = parent.window[movieName];
			if(window.navigator.appVersion.indexOf("Trident/6.0")!=-1){ // Internet Explorer 10
				try{
					if(obj instanceof HTMLCollection) obj = obj.item(0);
				}
				catch(exception){};
			}
		} else {
			obj = document[movieName];
			if(obj==null && parent!=null) obj = parent.document[movieName];
			if(obj==null) obj = document.all[movieName];
		}
	}
	return obj;
}
function thisActive(activeName){
	var obj = null;
	obj = eval(activeName);
	if(obj==null) obj = document.all[activeName];
	return obj;
}
function ConfirmPrs(mode, layerId_, _width, _height) {
	var params = new Object();
	params.mode = mode;
	params.popBox = 'pop_box';
	if(_width > 700) params.popBox = 'pop_box4';
	else if(_width > 400) params.popBox = 'pop_box2';
	_createActivePopupBox(layerId_, "ConfirmWin", _width, _height, false);
	_runTimeFormSubmit("/inc/common/confirm_Win.jsp", "ConfirmWin", params, "post", false); //_path, _target, params, _method, _isKsBiz
}
function setConfirmTitle(title){
	thisMovie("ConfirmWin").setTitle(title);
}
function setConfirmContent(_html) {
	thisMovie("ConfirmWin").setContent(_html);
}
function goConfirmProcess(){
	thisMovie("ConfirmWin").goConfirmProcess();
}
function closeLayer(layerId_){
	_closePopupBox(layerId_);
}
function logout(){
	top.site._loginOper(1);
}
// WTS에서의 호출 함수
function wtsGoView(ukey, gubun){
	var url = "/research/popup/re00P2.jsp?ukey="+ukey+"&gubun="+gubun+"&tr_cd="+"hts/sise/pinotext";
	var viewPopup = window.open(url,'news_view','width=817, height=560, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no');
	viewPopup.focus();
}
