var permNum = "0123456789,.-" ;
var englishReg = /^[a-z A-Z]*$/;
function isEmpty(obj, msg){
	var ret = false;
	if($(obj).val()==''){
		alertMsg(msg+' 입력하시기 바랍니다.');
		$(obj).focus();
		ret = true;
	}
	return ret;
}
function isNumber(obj){
	var val = $(obj).val();
	for(var i=0;i<val.length;i++){
		if(permNum.indexOf(val.charAt(i))<0){
			alertMsg('입력이 잘못되었습니다.');
			$(obj).val(val.substring(0,val.length-1));
			return;
		}
	}
}
function isEnglish(obj){
	var val = $(obj).val();
	if(!englishReg.test(val)){
		alertMsg('영문이름은 한글, 특수문자가 입력 불가능 합니다.');
		$(obj).val('');
		return; 
	}
}
var prePhone = ['010','011','016','017','018'];
function chkPhoneNumRule(obj){
	var val = $(obj).val();
	if(val.length<10) return false;
	var pre = val.substring(0,3);
	var ret = false;
	for(var i in prePhone){
		if(prePhone[i]==pre){
			ret = true;
			break;
		}
	}
	return ret;
}
var _clockTimer;
function clockStart(viewObj, Timeout, interval){
	var start = new Date().getTime(); 
	_clockTimer = setInterval(function(){
		var now = new Date().getTime();
		var remain = Timeout - (now-start);
		if(remain<0){
			clockStop();
			$(viewObj).html(setTimeView(0));
		}else{
			$(viewObj).html(setTimeView(remain));
		}
	}, interval);
}
function setTimeView(remain){
	var misss = Math.round(remain/1000);
	var sss = misss%60;
	if(sss<10) sss = '0'+sss;
	var mi  = Math.floor(misss/60);
	return (mi+':'+sss);
}
function clockStop(){
	if(_clockTimer!=null) clearInterval(_clockTimer);
}
function getRemainTime(viewObj){
	var rTime = $(viewObj).html();
	var min = rTime.substring(0,1);
	var sec = rTime.substring(2);
	if(min!='2') sec = 0;
	return Number(sec);
}
function alertMsg(msg, callback){
	setTimeout(function(){
		$('#1buttonMsg').html(msg);
		lypopAlert('#1buttonPopup');
	},500);
	if(callback){
		$('#_1buttonBtn').on('click', callback);
	}
}
function confirmMsg(msg1, msg2){
	setTimeout(function(){
		if(msg1) $('#2buttonMsg1').html(msg1);
		if(msg2) $('#2buttonMsg2').html(msg2);
		lypopAlert('#2buttonPopup');
	},500);
}
function confirmMsg(msg1, msg2, btnName1, btnName2){
	setTimeout(function(){
		if(msg1) $('#2buttonMsg1').html(msg1);
		if(msg2) $('#2buttonMsg2').html(msg2);
		if(btnName1) $('#btnName1').html(btnName1);
		if(btnName2) $('#btnName2').html(btnName2);
		lypopAlert('#2buttonPopup');
	},500);
}
function showPopMsg(idx, msg1, msg2, msg3, msg4){
	setTimeout(function(){
		if(msg1) $('#'+idx+'buttonMsg1').html(msg1);
		if(msg2) $('#'+idx+'buttonMsg2').html(msg2);
		if(msg3) $('#'+idx+'buttonMsg3').html(msg3);
		if(msg4) $('#'+idx+'buttonMsg4').html(msg4);
		lypopAlert('#'+idx+'buttonPopup');
	},500);
}
function nextFocus(nextObj){
	if(window.event.keyCode==13){
		$('#'+nextObj).focus();
	}
}
function maxNextFocus(nextObj, obj, maxlength){
	if(obj.value.length == maxlength){
		$('#'+nextObj).focus();
	}
}
function enterEvent(funcObj, obj){
	if(window.event.keyCode==13){
		eval(funcObj);
		obj.blur();
	}
}
function _goCloseLink(){
	var url = location.href.toString();
	if(url.indexOf('certification')>0){
		setTimeout(function(){ _goLink('m3'); }, 500);
	}
}
function isIOS(){
	var __isIOS = false;
	var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
	if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) __isIOS = true;
	return __isIOS;
}
function goApplication(code){
	if(code){
		if(isIOS()) location.href = "/mobile/inc/appApplication.jsp?code="+code;
		else window.open("/mobile/inc/appApplication.jsp?code="+code,"_system");
	}
	else{
		window.open("/mobile/inc/appApplicationIM.html","_system");
	}
}
