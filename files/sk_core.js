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
					if(errorCode == 90000) errorMsg = "SKCertService ����� ������� �ʾҽ��ϴ�.";
					else if(errorCode == 90001 || errorCode == 90002) errorMsg = "SKCertService ��� ������Ʈ�� �ʿ��մϴ�.";
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
				CertManX.SetDeviceOrder("HRUS");		// ������ �켱 �˻� ����
				CertManX.SetPasswordEncMode(1 + 16);	// �н����� ENC ���
				CertManX.SetExipreCheckSkip(0);			// ������ ���� �ȳ�â
				CertManX.SetDeviceViewOrder("RUSH");	// �����ü �̹��� ����
				CertManX.SetPolicyFilter(1+16+256,"1.2.410.200004.5.1.1.10;");	// ������ ��å ����
				CertManX.SetWebAccMode(1);				// ����� �����ټ�
				CertManX.SetScanByDialogChoiceMode(0);	// �����ü ���ý� ������ �˻�
				CertManX.SetLanguageMode(0);			// ��� ��� ����
				//CertManX.SetLogoFile("/app/styles/images/list2_03.jpg");				// ����â �ΰ�
				CertManX.SetKeySaferMode(8);			// Ű���庸�ȸ�� ����
				CertManX.SetCertNewUrlInfo(ReIssueUrl); // ������ ����URL ����
				CertManX.SetMatchedContextExipreCheck(1); // ����� �������� ��Ÿ���� ����
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
function complexOrderSign(orderData, func){ // Full ����(Base64������ ���� ����)
	CertManX.SignDataB64("", ""+orderData, 1, function(signdata){
		if(signdata == "") {
			alert("SignDataB64 Ǯ������� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
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
function orderSign(orderData, obj, func){ // Full ����(Base64������ ���� ����)
	CertManX.SignDataB64("", ""+orderData, 0, function(signdata){
		if(signdata == "") {
			alert("SignDataB64 Ǯ������� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
			return;
		}
		obj.value = signdata; //Full ����;
		_setUUIDRequest();
		func();
	});
}
function simpleOrderSign(orderData, obj, func){  // ��� ����;
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
				alert("SignData_ne_B64 ������ : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			obj.value = CertManX.GetToken(nesigndata,"data");
			_setUUIDRequest();
			if(func) func();
		});
	}
}
function WTSOrderSign(dnName, orderData, obj, func){ // WTS ��� ����(Base64������ ���� ����)
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
					alert("���������� ��й�ȣ�� �߸��Է��ϼ̽��ϴ�.");
				};
			}
			else if(CertManX.GetLastErrorCode() == 2424){
				alert("[���������������� ����� �� �����ϴ�.] " + CertManX.GetLastErrorMsg());
			}
			else {
				alert("SetMatchedContextExt ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
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
			CertManX.SetWrongPasswordLimit(1);   // �н����� �Է�����
			CertManX.UnSetMatchedContext(function(){ // �������� �ʱ�ȭ
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
			CertManX.SetWrongPasswordLimit(1);   // �н����� �Է�����
			CertManX.UnSetMatchedContext(function(){ // �������� �ʱ�ȭ
				CertManX.SetMatchedContextExt("", "", "", 256 + 0 + 0 + 4096, function(data){
					var dn = CertManX.GetToken(data, "dn");
					var result = CertManX.GetToken(data, "result");
					if(result != "ok"){
						if(CertManX.GetLastErrorCode() == 2417){
							try{ SKCertError(dn, '1');} catch(e){
								alert("���������� ��й�ȣ�� �߸��Է��ϼ̽��ϴ�.");
							};
						}
						else if(CertManX.GetLastErrorCode() == 2424){
							alert("[���������������� ����� �� �����ϴ�.] " + CertManX.GetLastErrorMsg());
						}
						else {
							alert("SetMatchedContextExt ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
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
			CertManX.SetWrongPasswordLimit(1);   // �н����� �Է�����
			CertManX.UnSetMatchedContext(function(){ // �������� �ʱ�ȭ
				CertManX.SetMatchedContextExt("", "", "", 256 + 0 + 0, function(dn){
					if(dn==""){
						if(CertManX.GetLastErrorCode() == 2417){
							alert("���������� ��й�ȣ�� �߸��Է��ϼ̽��ϴ�.");
						}
						else if(CertManX.GetLastErrorCode() == 2424){
							alert("[���������������� ����� �� �����ϴ�.] " + CertManX.GetLastErrorMsg());
						}
						else {
							alert("SetMatchedContextExt ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
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
function IE_IssueCert(pszRefNo, pszAuthCode){ //�������߱�
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
				alert("CertManager_Issue ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			alert("�������� ���������� �߱޵Ǿ����ϴ�.\n" +
				  "�ٽ� �α����Ͻñ� �ٶ��ϴ�.\n\n" +
				  "��Ÿ �ñ��Ͻ� ������ ����������Ʈ���ͷ� �����Ͻñ� �ٶ��ϴ�.  \n" +
				  "����������Ʈ���� ����ó : 1588-7171");
			//��α���
			if(top!=null) top.site._loginOper(1);
		});
	}
}
function CertNewIssue(dnName){ //������ ����
	if(confirm("������ �߱��� 11���� ����Ŀ� ������ ����(���Ⱓ ���� ����)�� �����մϴ�.\n\n������ �߱��� 11������ ������� ���� �������� ���Ұ��մϴ�. \n\n��� �����Ͻðڽ��ϱ� ?")){
		if(dnName) _dnName = dnName;
		else _dnName = "";
		SKCertCallBack(function(){
			CertManX.CertManager_CertNew(_dnName, "", function (ex) {
				if (ex == "") {
					alert("CertManager_CertNew ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("�������� ���������� ���ŵǾ����ϴ�.");
			});
		});
	}
}
function ExportP12(dnName){ //��������
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL ExportP12(BSTR pszUserID, BSTR pszPassword)
			CertManX.ExportP12(_dnName, "", function (ex) {
				if (ex == "") {
					alert("�������� ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("������ �������Ⱑ �Ϸ�Ǿ����ϴ�.");
			});
		});
	});
}
function ImportP12(){ //��������
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL ImportP12(BSTR pszPassword)
			CertManX.ImportP12("", function (im) {
				if (im == "") {
					alert("�������� ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("������ �������� �Ϸ�Ǿ����ϴ�.");
			});
		});
	});
}
function ChangeStorageMedia(dnName){ //�����ü����
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL ChangeStorageMedia(BSTR pszUserID)
			CertManX.ChangeStorageMedia(_dnName, function (ChangeStorage) {
				if (ChangeStorage == "") {
					alert("�����ü���� ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("������ �����ü������ �Ϸ�Ǿ����ϴ�.");
			});
		});
	});
}
function CertManager_ChangePassword(dnName){ //��й�ȣ ����
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL CertManager_ChangePassword(BSTR pszUserID, BSTR pszOldPassword, BSTR pszNewPassword)
			CertManX.CertManager_ChangePassword(_dnName, "", "", function (changepw) {
				if (changepw == "") {
					alert(" ��й�ȣ ������� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("������ ��й�ȣ������ �Ϸ�Ǿ����ϴ�.");
			});
		});
	});
}
function RemoveFromMedia(dnName){ //����������� ����
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.UnSetMatchedContext(function () {
			CertManX.SetWrongPasswordLimit(1);
	
			//BOOL RemoveFromMedia(BSTR pszUserID)
			CertManX.RemoveFromMedia(_dnName, function (RemoveFromMedia) {
				if (RemoveFromMedia == "") {
					alert("RemoveFromMedia ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
					return;
				}
				alert("����������� ������ �Ϸ�Ǿ����ϴ�.");
			});
		});
	});
}
function Status(){ //������ ���뺸��
	SKCertCallBack(function(){
		CertManX.CertManager_Status("", function () {
		});
	});
}
function _CertNewUrlInfo(){
	CertManX.SetServiceMode(URL_HOME, _dnName) //���� ����
	CertManX.SetExipreCheckSkip(0);
}
function TerminateCA(dnName, func){  //������ ����
	_dnName = dnName;
	SKCertCallBack(function(){
		CertManX.CertManager_Revoke(_dnName, "", function (ex) {
			if (ex == "") {
				alert("CertManager_Revoke ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			else func();
		});
	});
}
function CertNewUrlInfo(dnName, userid){ //������ ���� ����
	_dnName = dnName;
	_userId = userid;
	SKCertCallBack(_CertNewUrlInfo);
}
function ConfigMenu(){  //������ ȯ�漳��
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
//------------ ������ (����)��ȯ �� �߰��߱� --------------//
function ind_change(){
	var url = "http://www.signkorea.com/cer_manage/certchangePerson/certchange_person.htm";
	window.open(url,'win1','toolbar=no,menubar=no,status=no,scrollbars=yes,left=0,top=0,height=620,width=585');
}
//------------ ������ (����)��ȯ �� �߰��߱� --------------//
function com_change(){
	var url = "http://www.signkorea.com/cer_manage/certchange.htm";
	window.open(url,'win1','toolbar=no,menubar=no,status=no,scrollbars=yes,left=0,top=0,height=620,width=585');
}
//------------ ����Ʈ�� ������ ���� --------------//
function relayExport(){
	SKCertCallBack(function(){
		CertManX.SetKeySaferModeEtc(false, 8);	// Ű���庸�ȸ�� ���� release 
		CertManX.relayExport(function (result) {
			if (result == "") {
				alert("����Ʈ������ ������ relayExport ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			alert("����Ʈ������ ������ �������� ��ư�� ������ �������� ����Ʈ���� �����ϼ���.");
		});
	});
}
function relayImport(){
	SKCertCallBack(function(){
		CertManX.relayImport(function (result) {
			if (result == "") {
				alert("����Ʈ������ ������ relayImport ���� : [" + CertManX.GetLastErrorCode() + "]" + CertManX.GetLastErrorMsg());
				return;
			}
			alert("������ ������ �Ϸ�Ǿ����ϴ�.");
		});
	});
}
function sk_execution(){
	var iframe = document.createElement('iframe');
	document.body.appendChild(iframe);
	iframe.contentWindow.location.href = 'santiago://';
}
