//------------ MUST IMPORT JAVASCRIPT -----------//
document.write('<script type="text/javascript" src="/js/crypto/util.js"></script>');
document.write('<script type="text/javascript" src="/js/crypto/jsbn.js"></script>');
document.write('<script type="text/javascript" src="/js/crypto/random.js"></script>');
document.write('<script type="text/javascript" src="/js/crypto/hash.js"></script>');
document.write('<script type="text/javascript" src="/js/crypto/rsa.js"></script>');
document.write('<script type="text/javascript" src="/js/crypto/aes.js"></script>');
document.write('<script type="text/javascript" src="/js/crypto/pbkdf2.js"></script>');
document.write('<script type="text/javascript" src="/js/crypto/mode-ecb-min.js"></script>');

// private
var _rsaKey;
var _certFile;
var _formFeed = '\f';
var _certSign = _certSign || {};
_certSign.util = (function(){
	var util = { version : "1.0" };
	/* Create and Manage Cert File */
	util.createCertFile = function(pubMod, privateRawBank, passPhrase){
		var certFile = new Object();
		certFile.public_modulus = pubMod;
		certFile.private_rawBank = privateRawBank;
		certFile.signatue = btoa(SHA256(passPhrase));
			var d = new Date();
			var year = d.getFullYear();
			var month = d.getMonth();
			var day = d.getDate();
			var c = new Date(year+1, month, day);
		certFile.dead_time = c.getTime();
		return certFile;
	}
	util.getCertFile = function(uid){
		var certFile = null;
		var _certInfo = window.localStorage['_cert_Sign_bank_'+uid];
		if(_certInfo!=null) certFile = JSON.parse(_certInfo);
		if(certFile!=null && certFile.dead_time < (new Date()).getTime()){
			alert('인증서 만료기간이 지났습니다. 재발급을 받으시기 바랍니다.');
			return null;
		}
		return certFile;
	};
	util.storeCertFile = function(uid, _certFile){
		window.localStorage['_cert_Sign_bank_'+uid] = JSON.stringify(_certFile);
	};
	util.clearCertFile = function(uid){
		window.localStorage.removeItem('_cert_Sign_bank_'+uid);
	};
	util.getRSAKey = function(_certFile){
		var rsaKey = new RSAKey();
		rsaKey.setPublic(_certFile.public_modulus, '10001');
		return rsaKey;
	};
	/* Create and Manage Cert File */
	/* Make SignData */
	util.getSignedTxt = function(rsaKey, plainTxt, hash){
		var _ret;
		if(hash) _ret = rsaKey.encrypt(SHA256(plainTxt));
		else _ret = rsaKey.encrypt(plainTxt);
		return _ret;
	};
	util.makeFullSignedData = function(rsaKey, orderData){
		var signedOrderData = rsaKey.encrypt(SHA256(orderData));
		var cryptoObj = _aes_encrypt(signedOrderData+_formFeed+orderData);
		return (btoa(rsaKey.encrypt(cryptoObj.header))+_formFeed+cryptoObj.data);
	};
	/* Make SignData */
	return util;
})();
(function($){
	/*AES*/
	_aes_encrypt = function(plainText){
		var cryptoObj = {};
		var keySize = 256;
		var iterationCount = 1000;
		var key = CryptoJS.lib.WordArray.random(keySize/8).toString(CryptoJS.enc.Hex);
		var salt = CryptoJS.lib.WordArray.random(keySize/8).toString(CryptoJS.enc.Hex);
		var iv = CryptoJS.lib.WordArray.random(keySize/16).toString(CryptoJS.enc.Hex);
		var key128Bits1000Iterations = CryptoJS.PBKDF2(key, CryptoJS.enc.Hex.parse(salt),{ keySize: keySize/32, iterations: iterationCount }); // PBKDF2
		var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), key128Bits1000Iterations, {iv:CryptoJS.enc.Hex.parse(iv)});
		cryptoObj.header = key+salt+iv;
		cryptoObj.data = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
		return cryptoObj;
	};
	/*AES*/
})(jQuery);
