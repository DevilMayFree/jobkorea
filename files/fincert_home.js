var _date = new Date();
var _year = _date.getFullYear();
var _month = _date.getMonth()+1;
var _day = _date.getDate();
if(_month<10) _month = '0'+_month;
if(_day<10) _day = '0'+_day;
var _dateString = (_year+''+_month+''+_day);

//------------ NON ACTIVE INIT ------------//
var _isOrgIdx = 0;
var _thisDomain = document.domain;
if(_thisDomain.indexOf('open')==-1){
	document.write('<script src="https://4user.yeskey.or.kr/v1/fincert.js?dt='+_dateString+'" charset="utf-8"></script>');
	_isOrgIdx = 1;
}else{
	document.write('<script src="https://t-4user.yeskey.or.kr/v1/fincert.js?dt='+_dateString+'" charset="utf-8"></script>');
	_isOrgIdx = 0;
}
const _orgCode = [
	'DF30070000', 'RF30070000'
];
const _finApiKey = [
	'e3355f4d-e011-4fd8-9f07-2fa0efa08eb8', '3ffc3d9d-dee7-4e85-bf06-199bcaf2ce22'
];
var this_orgCode, this_finApiKey;

var isLoad = false;
var __certSeqNum;
var __simpleKeyToken;
var __isRunningDelayTime = 0;
//금융인증 이용을 위한 설정 라이선스
$(document).ready(function (){
	this_orgCode = _orgCode[_isOrgIdx];
	this_finApiKey = _finApiKey[_isOrgIdx];
});

function _finCert_init(callback){
	var initParam = {};
	initParam.orgCode = this_orgCode;
	initParam.apiKey = this_finApiKey;
	initParam.lang = 'kor';
	initParam.success = function(){
		isLoad = true;
		callback();
	};
	initParam.fail = function(error){
		alert(error.code+' _finCert_init : '+error.message);
	};
	FinCert.Sdk.init(initParam);
}
function _getNounce(){
	var _nonce;
	$.ajax({
		type: "post",
		url: "/cert/getNounce.jsp",
		contentType:'application/x-www-form-urlencoded;charset=utf-8',
		cache: false,
		async: false,
		dataType: "json" ,
		success: function(data){
			_nonce = data['_nonce'];
		}
	});
	return _nonce;
}
function _getCipherDel(){
	var _cipherDel;
	$.ajax({
		type: "post",
		url: "/cert/getCipherDel.jsp",
		contentType:'application/x-www-form-urlencoded;charset=utf-8',
		cache: false,
		async: false,
		dataType: "json" ,
		success: function(data){
			_cipherDel = data['_cipherDel'];
		}
	});
	return _cipherDel;
}
var orderObj;
function finCert_service(cmd, obj, signType, callback){
	orderObj = {}
	orderObj.cmd = cmd;
	orderObj.object = obj;
	orderObj.signType = signType;
	if(callback) orderObj.callback = callback;
	if(isLoad) setTimeout(FC_service, __isRunningDelayTime);
	else _finCert_init(FC_service);
}
function FC_service(){
	if(__isRunningDelayTime==0) __isRunningDelayTime = 700;
	var cmd = orderObj.cmd;
	var obj = orderObj.object;
	var signType = orderObj.signType;

	var signParam = {};
	signParam.signFormat = {};
	signParam.signFormat.type = 'CMS';
	signParam.signFormat.CMSInfo = {};

	if(cmd=='S1') signParam.signFormat.CMSInfo.withoutContent = true;	// LOGIN
	if(signType=='97'){
		signType = '99';
		signParam.signFormat.CMSInfo.ssn = 'dummy';
	}

	var nonce = _getNounce();
	signParam.content = {};
	signParam.content.plainText = {};
	signParam.content.plainText.plainTexts = [];
	signParam.content.plainText.plainTexts[0] = {
		"orderData" : obj.plainTxt,
		"nonce" : nonce
	}

	if(cmd!='S1'){
		signParam.view = {};
		signParam.view.lastAccessCert= true;
		if(__certSeqNum) signParam.view.certSeqNum= __certSeqNum;
	}
	signParam.info = {};
	signParam.info.signType = signType;
	signParam.info.simpleKeyReq = true;

	signParam.success = function(result){
		if(signType=='99'){
			__certSeqNum = result.certSeqNum;
			__simpleKeyToken = result.simpleKeyToken;
			registerSimpleKeyToken(__certSeqNum, __simpleKeyToken);
		}
		obj.signed_value = result.signedVals[0];
		if(cmd=='S1') obj.hashed_value = result.hashedVals[0];
		if(orderObj.callback) orderObj.callback();
		__isRunningDelayTime = 500;
	};
	signParam.fail = function(error){
		alert(error.code+' : '+error.message);
		if(signType=='98'){
			spinnerStop();
			_closeWall();
		}
	};

	if(signType=='21'){
		var aesObj = _aes_encrypt(SHA256(obj.plainTxt));
		var cipherDel = _getCipherDel();
		var result = {};
		result.signedVals = [];
		result.signedVals[0] = btoa(aesObj.header)+cipherDel+aesObj.data;
		signParam.success(result);
	}
	else if(signType=='98'){
		signParam.info.signType = '99';
		signParam.certSeqNum = __certSeqNum;
		signParam.simpleKeyToken = __simpleKeyToken;
		signParam.simpleKeyType = '2';
		if(__simpleKeyToken) FinCert.Sdk.signWithoutUI(signParam);
		else FinCert.Sdk.sign(signParam);
	}
	else FinCert.Sdk.sign(signParam);
}
function registerSimpleKeyToken(certSeqNum, simpleKeyToken){
	var registParam = {};
	registParam.certSeqNum = certSeqNum;
	registParam.simpleKeyToken = simpleKeyToken;
	registParam.simpleKeyType = '2';
	registParam.success = function(result){
	};
	registParam.fail = function(error){
		alert(error.code+' registerSimpleKeyToken : '+error.message);
	};
	FinCert.Sdk.regSimpleKeyToken(registParam);
}
function FC_manage(){
	if(isLoad) __FC_manage();
	else _finCert_init(__FC_manage);
}
function __FC_manage(){
	FinCert.Sdk.manage({
		"success": function() {
		},
		"fail": function(error) {
			alert(error.code + " : " + error.message);
		}
	});
}
