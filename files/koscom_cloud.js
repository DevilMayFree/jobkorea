
typeof (console) === "object" ? console.log('koscom cloud start') : '';

var CloudCert = (function () {

	var _config = {};
	var _iframeOpen = false;
	var _this = this;
	var _layerCount = 0;
	var _callbackPool = {};
	var _messageNumber = 0;
	var _layer;
	var _iframeName = 'koscom_cloud_iframe';
	var _serverDomain = 'https://center.signkorea.com:8700/cloud/v1/utf8/views/sign.html?indicium=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb21haW4iOiJ3d3cuaGktaWIuY29tIiwicmVtb3RlIjoiMjEyLjg3LjE5NC42IiwiZnBpZCI6IjUxM2U1ZTJiYzc4NjVhMGZjZTNkNDk0YTAxMDUzYjIyIiwiZmxhZyI6MjgzNCwid2lkIjoiL0NMMSIsImV4cCI6MTcxMzA4OTE5OSwianRpIjoiMkNRMGdXa1pUOWZKRHRyUVhqcVl2WFNRMFM3Z283eHAifQ.E3rzc1id7sGoCwox3c3kTkRY1ABs8-KbAuH5QXe5W1g';
	var siteCode;
	var licenseSiteCode;
	var licenseApiKey;
	var licensecustomID;
	var extraConnectionInfo;
	var policyFilter = {};
	var isPolicy = false;
	var returnUserID = false;
	var _iframe_zindex = 9999;
	//ui option
	var certImportOption;
	var issueClause;
	var cssUrl;
	var isOpenUrl;
	var issueUrl;
	var renewUrl;
	var lang;
	var expiredCertFilter;
	var checkPasswordCertDelete;
	var enableExport;
	var importCertFilter;
	var errMaxCount;
	var certUrl;
	
	//sign
	var signResultEncoding;
	var plainCharset;

	//iframe option
	var opacity;
	var backgroundColor;

	function initCloudCert(initParam) {
		if(typeof(initParam) !== 'object') {
			return false;
		}
		var setMatchedParam = initParam.setMatched;
		var license = initParam.license;
		var uiOption = initParam.uiOption;
		var extCss = initParam.externalCss;
		var signSiteOption = initParam.signSiteOption;
		var iframeOption = initParam.iframeOption;

		if(typeof(setMatchedParam) !== 'object' || 
			typeof(license) !== 'object' || 
			typeof(uiOption) !== 'object' || 
			typeof(extCss) !== 'object' || 
			typeof(signSiteOption) !== 'object') 
		{
			return false;
		}
		
		siteCode = typeof(setMatchedParam.siteCode) === 'string' ? setMatchedParam.siteCode : '';
		licenseSiteCode = typeof(license.siteCode) === 'string' ? license.siteCode : '';
		licenseApiKey = typeof(license.apiKey) === 'string' ? license.apiKey : '';
		licensecustomID = typeof(license.customID) === 'string' ? license.customID : '';
		extraConnectionInfo = 'd6870801e069ce655b03c617e1753eb5';

		certImportOption = typeof(uiOption.certImportOption) === 'number' ? uiOption.certImportOption : 0xFF;
		issueClause = typeof(uiOption.issueClause) === 'boolean' ? uiOption.issueClause : true;
		if(typeof(uiOption.issueOpenUrl) === 'object') {
			isOpenUrl = typeof(uiOption.issueOpenUrl.isOpenUrl) === 'boolean' ? uiOption.issueOpenUrl.isOpenUrl : false;
			issueUrl = typeof(uiOption.issueOpenUrl.issueUrl) === 'string' ? uiOption.issueOpenUrl.issueUrl : '';
			renewUrl = typeof(uiOption.issueOpenUrl.renewUrl) === 'string' ? uiOption.issueOpenUrl.renewUrl : '';
		}
		lang = typeof(uiOption.lang) === 'string' ? uiOption.lang : 'ko';
		expiredCertFilter = typeof(uiOption.expiredCertFilter) === 'boolean' ? uiOption.expiredCertFilter : false;
		checkPasswordCertDelete = typeof(uiOption.checkPasswordCertDelete) === 'boolean' ? uiOption.checkPasswordCertDelete : true;
		enableExport = typeof(uiOption.enableExport) === 'boolean' ? uiOption.enableExport : true;
		importCertFilter = typeof(uiOption.importCertFilter) === 'boolean' ? uiOption.importCertFilter : false;
		errMaxCount = typeof(uiOption.errMaxCount) === 'number' ? uiOption.errMaxCount : 1;
		_config.btnId = typeof(uiOption.btnId) === 'string' ? uiOption.btnId : 'cloudLogin';

		certUrl = typeof(uiOption.certUrl) === 'string' && uiOption.certUrl != '' ? uiOption.certUrl : '#';
		
		cssUrl = typeof(extCss.cssUrl) === 'string' ? extCss.cssUrl : '';

		// console.log('initParam.externalCss.cssUrl : ' +  extCss.cssUrl);
		// console.log('initParam.uiOption.lang : ' + initParam.uiOption.lang);
		// console.log('req.cssUrl : ' +  cssUrl);
		// console.log('req.lang : ' + lang);

		signResultEncoding = typeof(signSiteOption.signResultEncoding) === 'string' ? signSiteOption.signResultEncoding : '';
		plainCharset = typeof(signSiteOption.plainCharset) === 'string' ? signSiteOption.plainCharset : '';

		if(typeof(iframeOption) !== 'object'){
			opacity = 0.72;
			backgroundColor = '#000000';
		}
		else{
			opacity = typeof(iframeOption.opacity) === 'number' ? iframeOption.opacity : 0.72;
			backgroundColor = typeof(iframeOption.backgroundColor) === 'string' ? iframeOption.backgroundColor : '#000000';
		}

		return true;
	}
	

    function doubleClickBlock(key) {
        if (typeof (window.signMap) === 'undefined') window.signMap = [];
        if (typeof (window.signMap[key]) === 'undefined' || window.signMap[key] == false) {
            window.signMap[key] = true;
            setTimeout(function () {
                window.signMap[key] = false;
            }, 2000)
        }
        else {
            return true;
        }
    }

	function scrollDisable() {
		var html = document.getElementsByTagName('html')[0];
		html.style.overflow = 'hidden';
		if(detectIOS()){
			var elements = document.body.children;
			for (var i = 0; i < elements.length; i++) {
				if (elements[i].tagName !== 'IFRAME') {
					elements[i].style.display = 'none';
				}
			}
		}
	}

	function scrollEnable() {
		var html = document.getElementsByTagName('html')[0];
		html.style.overflow = '';
		if(detectIOS()){
			var elements = document.body.children;
			for (var i = 0; i < elements.length; i++) {
				if (elements[i].tagName !== 'IFRAME') {
					elements[i].style.display = '';
				}
			}
		}
	}

	function layerDisable() {
		if (_layer != undefined)
			return;

		_layer = document.createElement('div');
		_layer.style.position = 'fixed';
		_layer.style.top = 0;
		_layer.style.left = 0;
		_layer.style.width = '100%';
		_layer.style.height = '100%';
		_layer.style.zIndex = "100";
		_layer.style.backgroundColor = backgroundColor;
		_layer.style.zIndex = _iframe_zindex;
		_layer.style.opacity = opacity;
		document.body.appendChild(_layer);
	}

	function layerEnable() {
		if (_layer != undefined) {
			document.body.removeChild(_layer);
			_layer = undefined;
		}
	}

	function iframeClose() {
		if(document.getElementById(_iframeName) === null) return;
		document.getElementById(_iframeName).parentNode.removeChild(_iframe);
		
		scrollEnable();
		layerEnable();

		if (_config.btnId) {
			var btn = document.getElementById(_config.btnId);
			if (!(btn == null || btn == 'null' || btn == 'undefined')) {
				btn.focus();
			}
		}

		_iframeOpen = false;
	}


	function removeIframe() {
		if(document.getElementById(_iframeName) === null) return;

		if (_config.btnId) {
			var btn = document.getElementById(_config.btnId);
			if (!(btn == null || btn == 'null' || btn == 'undefined')) {
				btn.focus();
			}
		}

		iframeDisable();
	}

	function iframeOpen(isshow, callback){
		if (_iframeOpen) {
			if(isshow == true) {
				iframeEnable();
			}
			callback();
			return;
		}

		_iframe = document.createElement('iframe');

		_iframe.src = _serverDomain + '&css=' + encodeURIComponent(cssUrl)+'&lang='+lang;
		// console.log('req_full_url : ' + _iframe.src);
		_iframe.scrolling = "no";
		
		_iframe.id = 'koscom_cloud_iframe';
		_iframe.name = 'koscom_cloud_iframe';
		_iframe.width = '100%';  
		_iframe.height = '100%';    
		_iframe.title = "클라우드";
		_iframe.frameborder = "no";
		_iframe.style.top = 0;
		_iframe.style.left = 0;
		_iframe.style.position = 'fixed';
		_iframe.style.zIndex = _iframe_zindex + 1;
		_iframe.style.border = "none";
		_iframe.style.display = 'none';
		
		if(isshow == true) {
			iframeEnable();
		}

		//var element = document.getElementById(_config.btnId);
		//if (_config.btnId === '' || _config.btnId === undefined || element === null) {			
		document.body.appendChild(_iframe);
		//}
		//else {
		 //   element.parentElement.insertBefore(_iframe, element);
		//}
		_iframeOpen = true;

		_iframe.addEventListener('load', function() {
			window.addEventListener('message', serverMessage, false);
			callback(true);
			_iframe.removeEventListener('load', arguments.callee);
		});
	}
	
	function iframeEnable() {
		_iframe.style.display = 'block';
		scrollDisable();
		layerDisable();
		_iframe.focus();
	}
	
	function iframeDisable() {
		_iframe.style.display = 'none';
		scrollEnable();
		layerEnable();
	}

    function clientMessage(req, isshow, callback) {
		var _req = req;

		_req = setLicenseConfig(_req);
		_req = setExtraConnectionInfo(_req);
		_req = setUIOption(_req);
		_req = setSignSiteOption(_req);

		iframeOpen(isshow, function() {
			++_messageNumber;
			req.messageNumber = _messageNumber;
			_callbackPool[_messageNumber] = callback;

			_iframe.contentWindow.postMessage({ req: JSON.stringify(_req), type: 'none' }, _serverDomain);
		});

		function setLicenseConfig(request) {
			var _request;
			var _config = {};

			_request = request
			
			if(_iframeOpen) {
				_request.config = undefined;
				return _request;
			}
			
			_config.siteCode = licenseSiteCode;
			_config.customID = licensecustomID;
			_config.apiKey = licenseApiKey;
			_request.config = _config;

			return _request;
		}


		function setExtraConnectionInfo(request) {
			var _request;

			_request = request
			
			if(_iframeOpen) {
				_request.extraConnectionInfo = undefined;
				return _request;
			}
			
			_request.extraConnectionInfo = extraConnectionInfo;

			return _request;
		}

		function setUIOption(request) {
			var _request;
			var _ui = {};
			var _issueUrl = {};

			_request = request
	
			_ui.importOption = certImportOption;
			_ui.issueClause = issueClause;

			_ui.expiredCertFilter = expiredCertFilter;
			_ui.checkPasswordCertDelete = checkPasswordCertDelete;
			_ui.enableExport = enableExport;
			_ui.importCertFilter = importCertFilter;
			_ui.errMaxCount = errMaxCount;
			_ui.certUrl = certUrl;

			_issueUrl.isOpenUrl = isOpenUrl;
			_issueUrl.issueUrl = issueUrl;
			_issueUrl.renewUrl = renewUrl;

			_ui.issueOpenUrl = _issueUrl;

			_request.uiOption = _ui;
			return _request;
		}	
		
		function setSignSiteOption(request) {
			var _request;
			var _signSiteOption = {};

			_request = request
	
			_signSiteOption.signResultEncoding = signResultEncoding;
			_signSiteOption.plainCharset = plainCharset;

			_request.signSiteOption = _signSiteOption;
			return _request;
		}
	}

	function serverMessage(res) {
		var resObject;
        var result;
        var callback;

			// 도메인이 맞는지 확인부터 다른 도메인 무시하기.
			if (!_serverDomain.indexOf(res.origin) == 0) {
				return;
			}

			if(!(typeof decodeURIComponent(res.data) !== 'undefined')) {
				console.log('server -> client::데이터가 없습니다.');
				return;
			}

			try {
				resObject = JSON.parse(res.data);
				result = resObject.data;
			} catch (e) {
				console.log('server -> client::전문 json이 형식에 맞지 않습니다.');
				return;
			}

			//인증서 시리얼이 있을 경우 코스콤 형식으로 변환
			if(result.serial != undefined && result.serial != '' ) {
				result.serial = serialFilterForKoscom(result.serial);
			}

			//이전 버튼에 포커스 주면서 서비스 종료
			removeIframe();
			
			callback = _callbackPool[resObject.messageNumber];
			callback(result);

	}

	function isErrorData(object) {
        if (typeof object === 'object' && object != null) {
            if (typeof object.error !== 'undefined' && typeof object.error == 'number') {
                if (typeof object.message !== 'undefined' && typeof object.message == 'string') {
                    return true;
                }
            }
        }
        return false;
    }
	
	function detectIOS() {
		return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	}

	function CloudIssue(ref, auth, issueclause, callback) {
		var req = {};
		var data = {};

		req.operation = 'CloudIssue';

		if (typeof ref !== 'undefined')
			data.ref = ref;
		if (typeof auth !== 'undefined')
			data.auth = auth;
			if (typeof auth !== 'undefined')
			data.issueclause = issueclause;

		req.data = data;
		clientMessage(req, true, callback);
	}

	function CloudRevoke(options, callback) {
		if(_this.isPolicy == true) {
			var req = {};
			var data = {};
			
			req.operation = 'SetPolicyFilter';
			
			data.policy = _this.policyFilter;
			
			req.data = data;
			clientMessage(req, false, function(res) {
				reqRevoke();
			});
		} else {
			reqRevoke();
		}
		
		function reqRevoke() {
			var req = {};
			var data = {};
	
			req.operation = 'CloudRevoke';
	
			if (typeof options !== 'undefined') {
				data.options = {};
				if (typeof options.reason !== 'undefined') {
					data.options.reason = options.reason;
				}
				if (typeof options.dn !== 'undefined') {
					data.options.dn = encode64(unescape(encodeURIComponent(options.dn)));
				}
			}
	
			req.data = data;
			clientMessage(req, true, callback);
		}
	}

	function CloudRenewal(options, callback) {
		if(_this.isPolicy == true) {
			var req = {};
			var data = {};
			
			req.operation = 'SetPolicyFilter';
			
			data.policy = _this.policyFilter;
			
			req.data = data;
			clientMessage(req, false, function(res) {
				reqRenewal();
			});
		} else {
			reqRenewal();
		}

		function reqRenewal() {
			var req = {};
			var data = {};
	
			req.operation = 'CloudRenewal';
	
			if (typeof options !== 'undefined') {
				data.options = {};
				if (typeof options.reIssue !== 'undefined') {
					data.options.reIssue = options.reIssue;
				}
				if (typeof options.dn !== 'undefined') {
					data.options.dn = encode64(unescape(encodeURIComponent(options.dn)));
				}
			}
	
			req.data = data;
			clientMessage(req, true, callback);
		}
	}


	function CloudSign(options, callback) {
		if(_this.isPolicy == true) {
			var req = {};
			var data = {};
			
			req.operation = 'SetPolicyFilter';
			
			data.policy = _this.policyFilter;
			
			req.data = data;
			clientMessage(req, false, function(res) {
				setReturnUserID(reqSign);
			});
		} else {
			setReturnUserID(reqSign);
		}
		
		function reqSign() {
			var req = {};
			var data = {};
			req.operation = 'IsSetMatched';
			
			clientMessage(req, false, function (res) {
				
				/* 멀티 서명 검증
				if (typeof plain !== 'undefined') {
					if(Object.prototype.toString.call(plain) === '[object Array]') {
						data.plain = [];
						while(plain.length > 0) {
							data.plain.push(encode64(plain.shift()));
						}
					} else {
						data.plain = encode64(plain);
					}
				}
				*/
				if(res.isSetMatehd) {
					req.operation = 'SetMatchedSign';
					data.options = options;
					req.data = data;
					clientMessage(req, res.isShow, callback);
				} else {
					req.operation = 'CloudSign';
					data.options = options;
					req.data = data;
					clientMessage(req, true, callback);
				}
			});
		}
		
	}

	function UnSetMatchedCert(options, callback) {
		var req = {};
		var data = {
			options:{}
		};

		req.operation = 'UnSetMatchedCert';

		if (typeof options !== 'undefined') {
			data.options = options;
		}
		data.options.customSID = encode64(siteCode);
		req.data = data;
		clientMessage(req, false, callback);
	}

	function SetMatchedCert(options, callback) {
		if(_this.isPolicy == true) {
			var req = {};
			var data = {};
			
			req.operation = 'SetPolicyFilter';
			
			data.policy = _this.policyFilter;
			
			req.data = data;
			clientMessage(req, false, function(res) {
				setReturnUserID(reqSetMatched);
			});
		} else {
			setReturnUserID(reqSetMatched);
		}
		
		function reqSetMatched() {
			var req = {};
			var data = {};
	
			req.operation = 'SetMatchedCert';
	
			if (typeof options !== 'undefined')
				data.options = {};
			data.options.customSID = encode64(siteCode);
			if (typeof options.pin !== 'undefined')
				data.options.pin = options.pin;
			if (typeof options.prefix !== 'undefined')
				data.options.prefix = encode64(unescape(encodeURIComponent(options.prefix)));
			if (typeof options.suffix !== 'undefined')
				data.options.suffix = encode64(unescape(encodeURIComponent(options.suffix)));
			if (typeof options.needPin !== 'undefined')
				data.options.needPin = options.needPin;
				
			req.data = data;
			clientMessage(req, false, function(res) {
				
				if(res.dn != undefined && res.dn != '' ) {
					callback(res);
				} else {
					req = {};
					data = {};
		
					req.operation = 'MakeCustomSession';
			
					if (typeof options !== 'undefined') {
						data.options = {};
						data.options.customSID = encode64(siteCode);
					if (typeof options.pin !== 'undefined')
						data.options.pin = options.pin;
					if (typeof options.prefix !== 'undefined') 
						data.options.prefix = encode64(unescape(encodeURIComponent(options.prefix)));
					if (typeof options.suffix !== 'undefined')
						data.options.suffix = encode64(unescape(encodeURIComponent(options.suffix)));
					if (typeof options.isPwd !== 'undefined')
						data.options.isPwd = options.isPwd;
					}
					
					req.data = data;
					clientMessage(req, true, callback);
				}
					
			});
		}
	}

	function SetPolicyFilter(policy) {
		_this.policyFilter = policy;
		_this.isPolicy = true;

		return true;
	}

	function SetReturnUserID(isReturnUserID){
		_this.returnUserID = typeof isReturnUserID === 'boolean' ? isReturnUserID : false;
	}

	function setReturnUserID(callback){
		var req = {};
		
		req.operation = 'SetReturnUserID';
		req.data = _this.returnUserID;
		
		clientMessage(req, false, callback);
	}

	function CertServiceSetup(callback) {
		var req = {};

		req.operation = 'CertServiceSetup';
		clientMessage(req, false, callback);
	}

	function IsConnect(callback) {
		var req = {};

		req.operation = 'IsConnect';
		clientMessage(req, false, callback);
	}

	function Connection(callback) {
		var req = {};

		req.operation = 'Connection';
		clientMessage(req, true, callback);
	}

	function GetPubKey(callback) {
		var req = {};

		req.operation = 'GetPubKey';
		clientMessage(req, false, callback);
	}

	function ImportCertificateEx(envelopData, callback) {
		var req = {};
		req.data = envelopData;

		req.operation = 'ImportCertificateEx';
		clientMessage(req, true, callback);
	}

	function CloudUcpidSign(userAgreement, agreeInfo, ispurl, callback) {
		var req = {};
		var data = {};

		req.operation = 'CloudUcpidSign';

		data.userAgreement = userAgreement;
		data.ispUrlInfo = ispurl;
		data.userAgreeInfo = agreeInfo;

		req.data = data;
		clientMessage(req, true, callback);
	}

	function CloudMydataSign(plain, callback) {
		var req = {};
		var data = {};

		req.operation = 'CloudMydataSign';
		data.plain = plain;

		req.data = data;
		clientMessage(req, true, callback);
	}

	function IsSupportedBrowser(callback) {
		var req = {};
		req.operation = 'IsSupportedBrowser';

		clientMessage(req, false, callback);
	}

	function ShowCertManager(options, callback) {
		if(_this.isPolicy == true) {
			var req = {};
			var data = {};
			
			req.operation = 'SetPolicyFilter';
			
			data.policy = _this.policyFilter;
			
			req.data = data;
			clientMessage(req, false, function(res) {
				reqCertManager();
			});
		} else {
			reqCertManager();
		}
		
		function reqCertManager() {
			var req = {};
			var data = {
				options:{}
			};
	
			req.operation = 'ShowCertManager';
	
			if (typeof options !== 'undefined') {
				data.options = options;
			} else {
				data.options.onlyShow = true;
			}
	
			req.data = data;
			clientMessage(req, true, callback);
		}
	}

	function VerifySignature(data, callback) {
		var req = {};
		
		req.operation = 'VerifySignature';
		req.data = data;
		
		clientMessage(req, false, callback);		
	}

	function VerifyVID(data, callback) {
		var req = {};
		
		req.operation = 'VerifyVID';
		req.data = data;
		
		clientMessage(req, true, callback);		
	}	
	
	function encode64(input, maxline) {
        var line = '';
        var output = '';
        var chr1, chr2, chr3;
        var i = 0;
        var _base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            // encode 4 character group
            line += _base64.charAt(chr1 >> 2);
            line += _base64.charAt(((chr1 & 3) << 4) | (chr2 >> 4));
            if (isNaN(chr2)) {
                line += '==';
            } else {
                line += _base64.charAt(((chr2 & 15) << 2) | (chr3 >> 6));
                line += isNaN(chr3) ? '=' : _base64.charAt(chr3 & 63);
            }

            if (maxline && line.length > maxline) {
                output += line.substr(0, maxline) + '\r\n';
                line = line.substr(maxline);
            }
        }
        output += line;

        return output;
    }
	
	function serialFilterForKoscom(serial) {
        // serial: hex로된 serial값
        /*
         . 일련번호가 4바이트 이내 정수이면(헥사스트링표현으로 8바이트 이내) 십진수로 표현(decimal-string)
         	단, 십진수로 표현시 10자리 이상인 경우, 헥사스트링(hexa-string)으로 표현
         . 일련번호가 4바이트 초과 정수이면(헥사스트링표현으로 9바이트 이상) 헥사스트링으로(hexa-string) 표현
         */
        var res = '';

        if(serial.length > 8 || (parseInt(serial, 16) + "").length >= 10) {
            res = serial;
        } else {
            res = parseInt(serial, 16) + "";
        };

        return res;
    }

	function ClearSession(callback){
		var req = {};

		req.operation = 'ClearSession';
		clientMessage(req, false, callback);
	}

	function SetStorageEventListener(callback){
		var req = {};

		req.operation = 'SetStorageEventListener';
		clientMessage(req, false, callback);
	}

	function SetMixedId(data, callback){
		var req = {};

		req.operation = 'SetMixedId';
		req.data = data;

		clientMessage(req, false, callback);
	}

	function GetCurrentDeviceId(callback){
		var req = {};

		req.operation = 'GetCurrentDeviceId';
		clientMessage(req, false, callback);
	}

	
	function SetAuthId(data, callback){
		var req = {};

		req.operation = 'SetAuthId';
		req.data = data;

		clientMessage(req, false, callback);
	}

	return {
		IframeOpen: iframeOpen,
		IframeClose: iframeClose,
		CloudIssue : CloudIssue,
		CloudRevoke : CloudRevoke,
		CloudRenewal : CloudRenewal,
		CloudSign : CloudSign,
		UnSetMatchedCert : UnSetMatchedCert,
		SetMatchedCert : SetMatchedCert,
		SetPolicyFilter : SetPolicyFilter,
		CertServiceSetup : CertServiceSetup,
		CloudUcpidSign : CloudUcpidSign,
		CloudMydataSign : CloudMydataSign,
		initCloudCert: initCloudCert,
		CertServiceSetup: CertServiceSetup,
		doubleClickBlock: doubleClickBlock,
		IsSupportedBrowser: IsSupportedBrowser,
		ShowCertManager: ShowCertManager,
		VerifySignature: VerifySignature,
		VerifyVID: VerifyVID,
		ClearSession : ClearSession,
		SetStorageEventListener : SetStorageEventListener,
		SetMixedId : SetMixedId,
		GetCurrentDeviceId : GetCurrentDeviceId,
		IsConnect : IsConnect,
		Connection : Connection,
		GetPubKey : GetPubKey,
		ImportCertificateEx : ImportCertificateEx,
		SetAuthId : SetAuthId,
		SetReturnUserID : SetReturnUserID
	}
})();

typeof (console) === "object" ? console.log('koscom cloud end') : '';
