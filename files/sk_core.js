var URL_HOME   = "www.hi-ib";
//var ReIssueUrl = "http://www.hi-ib.com/cert/base_reIssue.jsp";
var ReIssueUrl = "/frameLink.jsp?path=107";
var CertManX;
var _dnName;
var _userId;
var _clientIP;
var _skTimers = [];
var _isCertType;
//------------ orderSign whenever ------------//
$(document).ready(function (){
	$.ajax({
		type: "post",
		url: "/inc/common/UserIP.jsp",
		contentType:'application/x-www-form-urlencoded;charset=utf-8',
		cache: false,
		dataType: "json" ,
		success: function(data){
			_clientIP = data['client_ip'];
			_isCertType = data['client_isCertType'];
		}
	});
});
function _setCertType(certType, func){
	$.ajax({
		type: "post",
		url: "/inc/common/setCertType.jsp?isCertType="+certType,
		contentType:'application/x-www-form-urlencoded;charset=utf-8',
		cache: false,
		dataType: "json" ,
		success: function(data){
			_isCertType = data['_isCertType'];
			setTimeout(func, 500);
		}
	});
}
function _setUUIDRequest(){
	$.ajax({
		type: "post",
		url: "/inc/common/setUUIDRequest.jsp",
		contentType:'application/x-www-form-urlencoded;charset=utf-8',
		cache: false,
		dataType: "json" ,
		success: function(data){}
	});
}
function getCertType(){
	return _isCertType;
}
function _getFullOrderData(){
	var _orderData;
	for(var i=0;i<document.forms.length;i++) _orderData += getSigneOrderData(document.forms[i]);
	return _orderData;
}
//------------ getSigneOrderData--------------//
function getSigneOrderData(f, exclude){
	var orderData = "";
	for(var i=0; i<f.length; i++){
// Add E2E
		try{
			if(f[i].name=="hid_key_data") continue;
			if(f[i].name=="hid_enc_data") continue;
			if(f[i].name.indexOf('Tk_')!=-1) continue;
			if(f[i].name.indexOf('E2E_')!=-1) continue;
			if(f[i].name.indexOf('transkey')!=-1) continue;
		}
		catch(exception){};
// Add E2E
		if(f[i].name=="orderData" || f[i].name=="orderSign" || f[i].name=="f_scrt" || f[i].name==exclude) continue;
		orderData += f[i].value;
	}
	try{
		f.orderData.value = orderData;
	}
	catch(exception){};
	return orderData ;
}
function stopTimers(func){
	for(var i=0;i<_skTimers.length;i++){
		if(_skTimers[i].func == func){
			clearTimeout(_skTimers[i].timer);
			_skTimers.splice(i,1);
			break;
		}
	}
}
//------------ CertManX INIT --------------//
function SKCertCallBack(func){
	try{
		stopTimers(func);
		var skTimer = new Object();
		skTimer.func  = func;
		skTimer.timer = setTimeout(function(){SKCertCallBack(func);},2000);
		_skTimers[_skTimers.length] = skTimer;

		if(getCookieForActiveX() === "true"){
			CertManX = loadActiveObject();
		}else{
			CertManX = ytMain;
		}
		if(CertManX){
			if(CertManX.doubleClickBlock(arguments.callee)) return;
			CertManX.CertServiceSetup(function(result){
				if(result == ""){
					var errorMsg = "";
					var errorCode = CertManX.GetLastErrorCode();
					if(errorCode == 90000) errorMsg = "SKCertService 모듈이 실행되지 않았습니다.";
					else if(errorCode == 90001 || errorCode == 90002) errorMsg = "SKCertService 모듈 업데이트가 필요합니다.";
					else errorMsg = errorCode + "//" + CertManX.GetLastErrorMsg();
					if(location.href.indexOf("install.jsp")==-1){
						alert(errorMsg);
						try{
							top.main.location.href = "/userinfo/popup/install.jsp";
						}
						catch(e){
							location.href = "/userinfo/popup/install.jsp";
						}
					}
					else return;
				}
				CertManX.SetDeviceOrder("HRUS");		// 인증서 우선 검색 순위
				CertManX.SetPasswordEncMode(1 + 16);	// 패스워드 ENC 모드
				CertManX.SetExipreCheckSkip(0);			// 인증서 만료 안내창
				CertManX.SetDeviceViewOrder("RUSH");	// 저장매체 이미지 순서
				CertManX.SetPolicyFilter(1+16+256,"1.2.410.200004.5.1.1.10;");	// 인증서 정책 필터
				CertManX.SetWebAccMode(1);				// 장애인 웹접근성
				CertManX.SetScanByDialogChoiceMode(0);	// 저장매체 선택시 인증서 검색
				CertManX.SetLanguageMode(0);			// 모듈 언어 설정
				//CertManX.SetLogoFile("/app/styles/images/list2_03.jpg");				// 선택창 로고
				CertManX.SetKeySaferMode(8);			// 키보드보안모듈 연동
				CertManX.SetCertNewUrlInfo(ReIssueUrl); // 인증서 갱신URL 설정
				CertManX.SetMatchedContextExipreCheck(1); // 만료된 인증서를 나타내지 않음
				func();
				stopTimers(func);
			});
		}
	}
	catch(e){
		alert('SKCertCallBack error'+e);
	};
}
//------------ orderSign --------------//
function complexOrderSign(orderData, func){ // Full 서명(Base64형태의 서명값 생성)
	CertManX.SignDataB64("", ""+orderData, 1, function(signdata){
		if(signdata == "") {
			alert("SignDataB64 풀서명실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
			return;
		}
		var obj = new Object();
		obj.dn	= CertManX.GetToken(signdata,"dn");
		_dnName = obj.dn;
		obj.data  = CertManX.GetToken(signdata,"data");
		obj.rdata = CertManX.GetToken(signdata,"r");
		obj.sdata = orderData;
		_setUUIDRequest();
		func(obj);
	});
}
function orderSign(orderData, obj, func){ // Full 서명(Base64형태의 서명값 생성)
	CertManX.SignDataB64("", ""+orderData, 0, function(signdata){
		if(signdata == "") {
			alert("SignDataB64 풀서명실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
			return;
		}
		obj.value = signdata; //Full 서명;
		_setUUIDRequest();
		func();
	});
}
function simpleOrderSign(orderData, obj, func){  // 축약 서명;
	if((/cloud/).test(_isCertType)){
		SetMatchedCert(3, orderData, func, obj);
	}
	else if((/finCert/).test(_isCertType)){
		var finOrder = {};
		finOrder.plainTxt = orderData;
		finOrder.signed_value = '';
		finOrder.hashed_value = '';
		finOrder.callback = function(){
			obj.value = finOrder.signed_value;
			if(func) func();
		};
		finCert_service('S2', finOrder, '21', finOrder.callback);
	}
	else{
		CertManX.SignData_ne_B64("", ""+orderData, 1, function (nesigndata) {
			if(nesigndata == "") {
				alert("SignData_ne_B64 축약실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			obj.value = CertManX.GetToken(nesigndata,"data");
			_setUUIDRequest();
			if(func) func();
		});
	}
}
function WTSOrderSign(dnName, orderData, obj, func){ // WTS 축약 서명(Base64형태의 서명값 생성)
	if((/cloud/).test(_isCertType)){
		SetMatchedCert(3, orderData, func, obj);
	}
	else if((/finCert/).test(_isCertType)){
		var finOrder = {};
		finOrder.plainTxt = orderData;
		finOrder.signed_value = '';
		finOrder.hashed_value = '';
		finOrder.callback = function(){
			obj.value = finOrder.signed_value;
			if(func) func();
		};
		finCert_service('S2', finOrder, '21', finOrder.callback);
	}
	else{
		SKCertCallBack(function(){
			_sessionCertProcess(dnName, "", obj, orderData, false, func);
		});
	}
}
//------------ SessionSignProcess --------------// SessionSign_Check
function _sessionCertProcess(dnName, capw, obj, orderData, isFull, func){
	CertManX.SetMatchedContextExt(dnName, "", _decrypt(capw), 256 + 0 + 0, function(dn){
		if(dn==""){
			if(CertManX.GetLastErrorCode() == 2417){
				try{ SKCertError(dnName, '1');} catch(e){
					alert("공동인증서 비밀번호를 잘못입력하셨습니다.");
				};
			}
			else if(CertManX.GetLastErrorCode() == 2424){
				alert("[은행전용인증서는 사용할 수 없습니다.] " + CertManX.GetLastErrorMsg());
			}
			else {
				alert("SetMatchedContextExt 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
			}
			return;
		}
		else _dnName = dn;
		if(isFull) orderSign(orderData, obj, func);
		else simpleOrderSign(orderData, obj, func);
	});
}
//------------ CertSignProcess --------------// PassWord Always Check
function CertSignProcess(dnName, capw, obj, orderData, isFull, func){
	if((/cloud/).test(_isCertType)){
		if(isFull) top.main.SetMatchedCert(1, orderData, func, obj);
		else top.main.SetMatchedCert(3, orderData, func, obj);
	}
	else if((/finCert/).test(_isCertType)){
		var finOrder = {};
		finOrder.plainTxt = orderData;
		finOrder.signed_value = '';
		finOrder.callback = function(){
			obj.value = finOrder.signed_value;
			if(func) func();
		};
		top.main.finCert_service('S2', finOrder, '99', finOrder.callback);
	}
	else{
		if(dnName!='') _dnName = dnName;
		SKCertCallBack(function(){
			CertManX.SetWrongPasswordLimit(1);   // 패스워드 입력제한
			CertManX.UnSetMatchedContext(function(){ // 선택정보 초기화
				_sessionCertProcess(_dnName, capw, obj, orderData, isFull, func);
			});
		});
	}
}
//------------ SessionSignProcess -----------// PassWord Not Check
function SessionSignProcess(dnName, obj, orderData, isFull, func){
	if((/cloud/).test(_isCertType)){
		if(isFull) top.main.SetMatchedCert(4, orderData, func, obj);
		else top.main.SetMatchedCert(3, orderData, func, obj);
	}
	else if((/finCert/).test(_isCertType)){
		var finOrder = {};
		finOrder.plainTxt = orderData;
		finOrder.signed_value = '';
		finOrder.callback = function(){
			obj.value = finOrder.signed_value;
			if(func) func();
		};
		top.main.finCert_service('S2', finOrder, '98', finOrder.callback);
	}
	else{
		if(dnName!='') _dnName = dnName;
		SKCertCallBack(function(){
			_sessionCertProcess(_dnName, "", obj, orderData, isFull, func);
		});
	}
}
//------------ CAOnlyCertLogin -----------//
function CAOnlyCertLogin(orderData, func){
	if((/cloud/).test(_isCertType)){
		top.main.SetMatchedCert(5, orderData, func);
	}
	else if((/finCert/).test(_isCertType)){
		var finOrder = {};
		finOrder.plainTxt = orderData;
		finOrder.signed_value = '';
		finOrder.hashed_value = '';
		finOrder.callback = function(){
			var finResult = {};
			finResult.data = finOrder.signed_value;
			finResult.hashed_data = finOrder.hashed_value;
			if(func){
				_setUUIDRequest();
				func(finResult);
			}
		};
		top.main.finCert_service('S1', finOrder, '11', finOrder.callback);
	}
	else{
		SKCertCallBack(function(){
			CertManX.SetWrongPasswordLimit(1);   // 패스워드 입력제한
			CertManX.UnSetMatchedContext(function(){ // 선택정보 초기화
				CertManX.SetMatchedContextExt("", "", "", 256 + 0 + 0 + 4096, function(data){
					var dn = CertManX.GetToken(data, "dn");
					var result = CertManX.GetToken(data, "result");
					if(result != "ok"){
						if(CertManX.GetLastErrorCode() == 2417){
							try{ SKCertError(dn, '1');} catch(e){
								alert("공동인증서 비밀번호를 잘못입력하셨습니다.");
							};
						}
						else if(CertManX.GetLastErrorCode() == 2424){
							alert("[은행전용인증서는 사용할 수 없습니다.] " + CertManX.GetLastErrorMsg());
						}
						else {
							alert("SetMatchedContextExt 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
						}
						return;
					}
					else _dnName = dn;
					complexOrderSign(orderData, func)
				});
			});
		});
	}
}
//------------ CAComplexDataProcess -----------//
function CAComplexDataProcess(orderData, func){
	if((/cloud/).test(_isCertType)){
		top.main.SetMatchedCert(1, orderData, func);
	}
	else if((/finCert/).test(_isCertType)){
		var finOrder = {};
		finOrder.plainTxt = orderData;
		finOrder.signed_value = '';
		finOrder.callback = function(){
			var finResult = {};
			finResult.signed_value = finOrder.signed_value;
			if(func){
				_setUUIDRequest();
				func(finResult);
			}
		};
		top.main.finCert_service('S2', finOrder, '99', finOrder.callback);
	}
	else{
		SKCertCallBack(function(){
			CertManX.SetWrongPasswordLimit(1);   // 패스워드 입력제한
			CertManX.UnSetMatchedContext(function(){ // 선택정보 초기화
				CertManX.SetMatchedContextExt("", "", "", 256 + 0 + 0, function(dn){
					if(dn==""){
						if(CertManX.GetLastErrorCode() == 2417){
							alert("공동인증서 비밀번호를 잘못입력하셨습니다.");
						}
						else if(CertManX.GetLastErrorCode() == 2424){
							alert("[은행전용인증서는 사용할 수 없습니다.] " + CertManX.GetLastErrorMsg());
						}
						else {
							alert("SetMatchedContextExt 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
						}
						return;
					}
					else _dnName = dn;
					complexOrderSign(orderData, func)
				});
			});
		});
	}
}
//------------ GET PC_INFO --------------//
function getMacAddress(mode, obj, func){
	if(mode instanceof Array) GetPCIdentity(mode, obj, func);
	else{
		if(mode==2) GetPCIdentity(9, obj, func);
		else if(mode==0) GetPCIdentity(5, obj, func);
		else GetPCIdentity(mode, obj, func);
	}
}
function _GetPCIdentity_i(mod, ret){
	var _ret;
	switch(mod){
		case 0:
			_ret = CertManX.GetToken(ret, "cpuid"); break; // CPU ID
		case 1:
			_ret = CertManX.GetToken(ret, "hdid"); break; // Hard Disk Model Name
		case 2:
			_ret = CertManX.GetToken(ret, "hdsn"); break; // Hard Disk Serial #
		case 3:
			_ret = CertManX.GetToken(ret, "hkey"); break; // Hard Disk Serial Hash key
		case 4:
			_ret = CertManX.GetToken(ret, "nid"); break; // Net Adapter Model Name
		case 5:
			_ret = CertManX.GetToken(ret, "mac"); break; // Mac Address
		case 6:
			_ret = CertManX.GetToken(ret, "nkey"); break; // Mac Address Hash key
		case 9:
			_ret = _clientIP;	break; // GET IP Address
	}
	return _ret;
}
function _void(){};
function _GetPCIdentity(modes, objs, func){ // GET PC_INFO
	var _ret;
	CertManX.SetSessionServicePort(20554769);
	CertManX.GetPCIdentity("", 1+16+32, function(ret){
		for(var i=0;i<modes.length;i++){
			var _ret = _GetPCIdentity_i(modes[i], ret);
			if(_ret) objs[i].value = _ret;
		}
		try{
			if(func) func();
		}
		catch(exception){};
	});
}
function IE_IssueCert(pszRefNo, pszAuthCode){ //인증서발급
	if((/cloud/).test(_isCertType)){
		top.main.Cloudissue(pszRefNo, pszAuthCode);
	}
	else{
		if(getCookieForActiveX() === "true"){
			CertManX = loadActiveObject();
		}else{
			CertManX = ytMain;
		}
		if(CertManX.doubleClickBlock(arguments.callee)) return;
		CertManX.SetKeySaferMode(8);
		CertManX.CertManager_Issue(pszRefNo, pszAuthCode, "NO_CPS", "", function (issue) {
			if (issue == "") {
				alert("CertManager_Issue 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			alert("인증서가 정상적으로 발급되었습니다.\n" +
				  "다시 로그인하시기 바랍니다.\n\n" +
				  "기타 궁금하신 사항은 디지털컨택트센터로 문의하시기 바랍니다.  \n" +
				  "디지털컨택트센터 연락처 : 1588-7171");
			//재로그인
			if(top!=null) top.site._loginOper(1);
		});
	}
}
function CertNewIssue(dnName){ //인증서 갱신
	if(confirm("인증서 발급후 11개월 경과후에 인증서 갱신(사용기간 연장 서비스)이 가능합니다.\n\n인증서 발급후 11개월이 경과하지 않은 인증서는 사용불가합니다. \n\n계속 진행하시겠습니까 ?")){
		if(dnName) _dnName = dnName;
		else _dnName = "";
		SKCertCallBack(function(){
			CertManX.CertManager_CertNew(_dnName, "", function (ex) {
				if (ex == "") {
					alert("CertManager_CertNew 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("인증서가 정상적으로 갱신되었습니다.");
			});
		});
	}
}
function ExportP12(dnName){ //내보내기
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL ExportP12(BSTR pszUserID, BSTR pszPassword)
			CertManX.ExportP12(_dnName, "", function (ex) {
				if (ex == "") {
					alert("내보내기 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("인증서 내보내기가 완료되었습니다.");
			});
		});
	});
}
function ImportP12(){ //가져오기
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL ImportP12(BSTR pszPassword)
			CertManX.ImportP12("", function (im) {
				if (im == "") {
					alert("가져오기 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("인증서 가져오기 완료되었습니다.");
			});
		});
	});
}
function ChangeStorageMedia(dnName){ //저장매체변경
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL ChangeStorageMedia(BSTR pszUserID)
			CertManX.ChangeStorageMedia(_dnName, function (ChangeStorage) {
				if (ChangeStorage == "") {
					alert("저장매체변경 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("인증서 저장매체변경이 완료되었습니다.");
			});
		});
	});
}
function CertManager_ChangePassword(dnName){ //비밀번호 변경
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL CertManager_ChangePassword(BSTR pszUserID, BSTR pszOldPassword, BSTR pszNewPassword)
			CertManX.CertManager_ChangePassword(_dnName, "", "", function (changepw) {
				if (changepw == "") {
					alert(" 비밀번호 변경실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("인증서 비밀번호변경이 완료되었습니다.");
			});
		});
	});
}
function RemoveFromMedia(dnName){ //저장된인증서 삭제
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL RemoveFromMedia(BSTR pszUserID)
			CertManX.RemoveFromMedia(_dnName, function (RemoveFromMedia) {
				if (RemoveFromMedia == "") {
					alert("RemoveFromMedia 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("저장된인증서 삭제가 완료되었습니다.");
			});
		});
	});
}
function Status(){ //인증서 내용보기
	SKCertCallBack(function(){
		CertManX.CertManager_Status("", function () {
		});
	});
}
function _CertNewUrlInfo(){
	CertManX.SetServiceMode(URL_HOME, _dnName) //세션 설정
	CertManX.SetExipreCheckSkip(0);
}
function TerminateCA(dnName, func){  //인증서 폐지
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.CertManager_Revoke(_dnName, "", function (ex) {
			if (ex == "") {
				alert("CertManager_Revoke 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			else func();
		});
	});
}
function CertNewUrlInfo(dnName, userid){ //인증서 세션 설정
	_dnName = dnName;
	_userId = userid;
	SKCertCallBack(_CertNewUrlInfo);
}
function ConfigMenu(){  //인증서 환경설정
	SKCertCallBack(function(){
		CertManX.ShowConfigMenuX(function(){
		});
	});
}
function GetPCIdentity(mode, obj, func){ //GET PC_INFO
	SKCertCallBack(function(){
		if(mode instanceof Array) _GetPCIdentity(mode, obj, func);
		else _GetPCIdentity([mode], [obj], func);
	});
}
function sessionClear(){
	SKCertCallBack(function(){
		CertManX.UnsetMatchedContext(function(){
			CertManX.ClearSessionService(URL_HOME, _dnName);
		});		
	});
}
function _isSKCertService(nextFunc){
	SKCertCallBack(function(){
		if(nextFunc) nextFunc();
	});
}
//------------ 인증서 (개인)전환 및 추가발급 --------------//
function ind_change(){
	var url = "http://www.signkorea.com/cer_manage/certchangePerson/certchange_person.htm";
	window.open(url,'win1','toolbar=no,menubar=no,status=no,scrollbars=yes,left=0,top=0,height=620,width=585');
}
//------------ 인증서 (법인)전환 및 추가발급 --------------//
function com_change(){
	var url = "http://www.signkorea.com/cer_manage/certchange.htm";
	window.open(url,'win1','toolbar=no,menubar=no,status=no,scrollbars=yes,left=0,top=0,height=620,width=585');
}
//------------ 스마트폰 인증서 관리 --------------//
function relayExport(){
	SKCertCallBack(function(){
		CertManX.SetKeySaferModeEtc(false, 8);	// 키보드보안모듈 연동 release 
		CertManX.relayExport(function (result) {
			if (result == "") {
				alert("스마트폰에서 인증서 relayExport 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			alert("스마트폰에서 인증서 가져오기 버튼을 눌러서 인증서를 스마트폰에 저장하세요.");
		});
	});
}
function relayImport(){
	SKCertCallBack(function(){
		CertManX.relayImport(function (result) {
			if (result == "") {
				alert("스마트폰에서 인증서 relayImport 실패 : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			alert("인증서 저장이 완료되었습니다.");
		});
	});
}
function sk_execution(){
	var iframe = document.createElement('iframe');
	document.body.appendChild(iframe);
	iframe.contentWindow.location.href = 'santiago://';
}
