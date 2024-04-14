//------------ NON ACTIVE INIT ------------//
var _thisDomain = document.domain;
if(_thisDomain.indexOf('open')==-1){
	document.write('<script type="text/javascript" src="https://center.signkorea.com:8700/cloud/v1/utf8/js/koscom_cloud.js?revision=220503"></script>');
}else{
	document.write('<script type="text/javascript" src="https://tweb.signkorea.com:8700/cloud/v1/utf8/js/koscom_cloud.js?revision=220503"></script>');
}
//------------ orderSign whenever ------------//
const _domain = [
	'opendev.hi-ib.com', 'opendev2.hi-ib.com', 'www.hi-ib.com', 'ww2.hi-ib.com', 'm.hi-ib.com'
];
const _siteCode = [
	'U1MwMDQ2XzEw', 'U1MwMDQ2XzAz', 'U1MwMDQ2X0hJX1c=', 'U1MwMDQ2X0hJX1cy', 'U1MwMDQ2X0hJX01X'
];
const _apiKey = [
	'95ede1c9d40615486524805b28a33772e0949732c0cc30bff6bd5fe3df3281cd', '8625e1a9c11838cc27a90c91559fb5f30249eeb7da455a0a0428bf7447c44bef', '40ea537eabf69bb3c5ad3a01478248576b0f40f6997d6434bf7da11780f7eaa3', 'f2feadcc95fe651b104c1f8429259dd8e8b070cc515b0befaa24bc3322c6c1ed', 'b758a95aa0b5f2c9b650ade8d83e17b8bf504aa714197cb0051170290a940b0e'
];
var this_siteCode, this_apiKey;
$(document).ready(function (){
	setTimeout(function(){
		this_init(SKCloud_init);
	}, 1000);
	setInterval(SKCloud_init, 600000);
});
//Ŭ���� �̿��� ���� ���� ���̼���
function this_init(callback){
	for(var i=0;i<_domain.length;i++){
		if(_domain[i] == _thisDomain){
			this_siteCode = _siteCode[i];
			this_apiKey = _apiKey[i];
			break;
		}
	}
	callback();
}
function SKCloud_init(){
	if(CloudCert.doubleClickBlock(arguments.callee)) {
		return;
	}

	var importPC = 0x01;
	var importSmart = 0x02;
	var issueCert = 0x04;
	var importFile = 0x08;

	var initParam;
	initParam = {
		uiOption : {
			certImportOption : importPC | importSmart | issueCert | importFile ,
			issueClause : true,
			issueOpenUrl : {
								isOpenUrl: true,
								issueUrl: 'https://'+_thisDomain+'/TOP.jsp?_url=/banking/cert_center/ba0701.jsp',
								renewUrl: 'https://'+_thisDomain+'/TOP.jsp?_url=/banking/cert_center/ba0701.jsp'
							},
			/*
			 * lang : ��� ���('ko' : �ѱ���, 'en' : ����)
			 * expiredCertFilter : ���ڼ���� ����� ������ ���͸� ����(true: ���͸� O, false: ���͸� X)
			 * checkPasswordCertDelete : ������ ������ PIN �Է� ����(true : PIN Ȯ��, false : PIN ��Ȯ�� )
			 */
			 lang : 'ko',
			 //���ڼ���� ����� ������ ���͸� ���� true/false
			 expiredCertFilter : false,
			 //������ �н����� üũ ���� true/false
			 checkPasswordCertDelete : true,
			 
			 // ������ �ٿ�ε� Ȱ��ȭ: true/ ��Ȱ��ȭ:false
			 enableExport : true,
			 //pc ������ �������� �� ����� ������ ���͸� ���� true:���͸� O, false: ���͸� X
			 importCertFilter : false,
			 //������ ��й�ȣ �ִ� ���Է� ��� Ƚ��(PC ������ ��������)
			 errMaxCount : 5,
			 //NA ��ġ ���α׷� �ٿ�ε� ���
			 certUrl:'https://www.hi-ib.com/SKCertService/SKCertServiceSetup.exe'
			 
		},
		setMatched: {
			siteCode: "SS0046"
			//siteCode: "jaguar2"
			//siteCode: "jaguar"
		},
		license: {
			//siteCode: "U1MwMDQ2XzAz",
			siteCode: this_siteCode,
			apiKey: this_apiKey,
			customID: 'SS0046',
			extraConnectionInfo: ''
		},
		externalCss : {
			//cssUrl: 'https://erp.SS0046.co.kr:8443/sample/ljy_test/style.css'
			cssUrl: ''
		},
		signSiteOption : {
			//���� ����� ���ڵ� : base64, hex
			signResultEncoding : 'base64',
			//���� ���� charset(������)
			plainCharset : 'euc-kr'
		}
	};
	CloudCert.initCloudCert(initParam);
	_cloudInit = true;
}

function clearCert(){
	var unset_options =  {};
		CloudCert.UnSetMatchedCert(unset_options, function(res) {
		});
}

//��������å ���͸�
function setconfig(){
	var policyFilter = {
		mode : 1+16+256,
		OID : '1.2.410.200004.5.1.1.10'
	};
	CloudCert.SetPolicyFilter(policyFilter);
}

var __isRunningDelayTime = 0;
var orderObj;
function SetMatchedCert(signtypeval, orderData, func, obj){
	orderObj = {}
	orderObj.signtypeval = signtypeval;
	orderObj.orderData = orderData;
	if(func) orderObj.func = func;
	if(obj) orderObj.obj = obj;
	setTimeout(Cloud_service, __isRunningDelayTime);
}

//����������
function Cloud_service(){
	if(CloudCert.doubleClickBlock(arguments.callee)) {
		return;
	}
	setconfig();

	if(__isRunningDelayTime==0) __isRunningDelayTime = 700;

	var SetMatchedCert_options = {
		prefix:'', suffix:'', needPin:true
	};
	// 5. Full ���� Login
	if(orderObj.signtypeval == 5){
		var unset_options =  {};
		CloudCert.ClearSession(function(res) {
			if(res.code == undefined || res.code == '') {
				CloudCert.UnSetMatchedCert(unset_options, function(res) {
					if(res.code == undefined || res.code == '') {
						CloudCert.SetMatchedCert(SetMatchedCert_options, function(res) {
							if(res.code == undefined || res.code  == '') {
								//������ ���ü��� �� ���ڼ���/CMS���� ����
								CloudSign(1, orderObj.orderData, orderObj.func, orderObj.obj);
							} else {
								if (res.code == 2417) {
									alert("��й�ȣ ����");
									return;
								}
								else if(res.code == 2000){
									return;
								}
								else {
									alert("SetMatchedCert ���� : [" + res.code + "]" + res.message);
									return;
								}
							}
						});
					} else {
						alert("UnSetMatchedCert ���� : [" + res.code + "]" + res.message);
						return;
					}
				});
			} else {
					alert("ClearSession ���� : [" + res.code + "]" + res.message);
					return;
			}
		});
	}
	// 1. Full ����, 2. CMS����, 3. ��༭��, 4. ���� Pin�Է¾��� Full 
	else{
		if(orderObj.signtypeval == 3 || orderObj.signtypeval == 4) SetMatchedCert_options.needPin = false // 3., 4. needPin false

		CloudCert.SetMatchedCert(SetMatchedCert_options, function(res) {
			if(res.code == undefined || res.code  == '') {
				if(orderObj.signtypeval==4) orderObj.signtypeval = 1;
				CloudSign(orderObj.signtypeval, orderObj.orderData, orderObj.func, orderObj.obj);
			} else {
				if (res.code == 2417) {
					alert("��й�ȣ ����");
					return;
				}
				else if(res.code == 2000){
					return;
				}
				else {
					alert("SetMatchedCert ���� : [" + res.code + "]" + res.message);
					return;
				}
			}
		});
	}
}
//���ڼ���
function CloudSign(signtype, orderData, func, obj){

	_setUUIDRequest();

	var plaintext = new String(orderData);
	var signprotocol = 1;
	var signInputType = 0;

	var options =  {
		plain: plaintext ,
		// signtype // 0: pkcs1, 1: koscom p7 sign, 2: cms(default), 3: ��༭��, 4: �������� ����
		signtype: signtype,
		// signProtocol // 0 : ���� ������(default), 1 : dn + signdata + r
		signprotocol: signprotocol,
		// signInputType // 0: plain �״��(default), 1: digestInfo, 2: digest
		signInputType: signInputType,
		//pin:'',
		//dn:''
	};

	var callback = function(res) {
		if(res.code  == undefined || res.code  == '') {
			var result = {};
			result.dn = res.dn;
			result.data = res.signature;
			result.rdata = res.r;
			result.sdata = plaintext;
			result.pubkey = res.pub;
			try{
				if(obj) obj.value = result.data;
				if(func) func(result);
			}
			catch(e){
				alert(e.message);
			}
		} else {
			// ���� �ڵ� ó��
			switch(res.code) {
				case "2000"  :
					res.message = "��� �Ǿ����ϴ�.";
					break;
				case "20933" :
					res.message = "�޴��� ������ ��� �Ǿ����ϴ�.";
					break;
				case 5180  :
					res.message = "��й�ȣ ������ �������� �����ϴ�.";
					break;
				default:
			}
			alert(res.message + ' [' + res.code + ']');
		}
		__isRunningDelayTime = 500;
	}
	CloudCert.CloudSign(options, callback);
}

//������ �߱�
function Cloudissue(refNum, authCode){
	if(CloudCert.doubleClickBlock(arguments.callee)) {
		return;
	}

	var callback = function(res) {
		if(res.code  == undefined || res.code  == ''){
			alert("�������߱� ����");
		}
		else{
			alert("Ŭ���� �������߱��� �����Ͽ����ϴ�.");
		}
	}
	CloudCert.ClearSession(function(res) {
		if(res.code == undefined || res.code == '') {
			CloudCert.CloudIssue(refNum,authCode,true,callback);
		}	
		else{
			alert("ClearSession : [" + res.code + "]" + res.message);
		}
	});
}
//������ ����
function Cloudrenewal(){

	if(CloudCert.doubleClickBlock(arguments.callee)) {
		return;
	}

	var options =  {
		relssue: undefined // ����
	}

	var callback = function(res) {
		if(res.code  == undefined || res.code  == ''){
			alert("���������� ����");
		}
		else{
			alert("Ŭ���� ������������ �����Ͽ����ϴ�.");
		}
	}
	CloudCert.ClearSession(function(res) {
		if(res.code == undefined || res.code == '') {
			CloudCert.CloudRenewal(options,callback);
		}
		else {
			alert("ClearSession : [" + res.code + "]" + res.message);
		}
	});
}
//������ ����
function Cloudrevoke(){

	if(CloudCert.doubleClickBlock(arguments.callee)) {
		return;
	}

	var options =  {
		// reason: 1(���), 6 (����)
		reason: 1
	}

	var callback = function(res) {
		if(res.code  == undefined || res.code  == ''){
			alert("���������� ����");
		}
		else{
			alert("Ŭ���� ������������ �����Ͽ����ϴ�.");
		}
	}
	CloudCert.ClearSession(function(res) {
		if(res.code == undefined || res.code == '') {
			CloudCert.CloudRevoke(options,callback);
		}
		else {
			alert("ClearSession : [" + res.code + "]" + res.message);
		}
	});
}

//������ ����
function CloudShowCertManger(){

	if(CloudCert.doubleClickBlock(arguments.callee)) {
		return;
	}
	var options =  {
		onlyShow: true
	}
	var callback = function(res) {
		
	}

	CloudCert.ClearSession(function(res) {
		if(res.code == undefined || res.code == '') {
			CloudCert.ShowCertManager(options,callback);
		}
		else {
			alert("ClearSession : [" + res.code + "]" + res.message);
		}
	});
}
