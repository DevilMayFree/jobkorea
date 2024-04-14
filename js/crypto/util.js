if(!window.atob){
	var tableStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var table = tableStr.split("");
	window.atob = function(base64){	// Base64 Decode
		if (/(=[^=]+|={3,})$/.test(base64)) throw new Error("String contains an invalid character");
		base64 = base64.replace(/=/g, "");
		var n = base64.length & 3;
		if(n === 1) throw new Error("String contains an invalid character");
		for(var i = 0, j = 0, len = base64.length / 4, bin = []; i < len; ++i) {
			var a = tableStr.indexOf(base64[j++] || "A"), b = tableStr.indexOf(base64[j++] || "A");
			var c = tableStr.indexOf(base64[j++] || "A"), d = tableStr.indexOf(base64[j++] || "A");
			if ((a | b | c | d) < 0) throw new Error("String contains an invalid character");
			bin[bin.length] = ((a << 2) | (b >> 4)) & 255;
			bin[bin.length] = ((b << 4) | (c >> 2)) & 255;
			bin[bin.length] = ((c << 6) | d) & 255;
		};
		return String.fromCharCode.apply(null, bin).substr(0, bin.length + n - 4);
	};
	window.btoa = function(bin){	// Base64 Encode
		for (var i = 0, j = 0, len = bin.length / 3, base64 = []; i < len; ++i) {
			var a = bin.charCodeAt(j++), b = bin.charCodeAt(j++), c = bin.charCodeAt(j++);
			if ((a | b | c) > 255) throw new Error("String contains an invalid character");
			base64[base64.length] = table[a >> 2] + table[((a << 4) & 63) | (b >> 4)] +
								  (isNaN(b) ? "=" : table[((b << 2) & 63) | (c >> 6)]) +
								  (isNaN(b + c) ? "=" : table[c & 63]);
		}
		return base64.join("");
	};
}
function str2binb(str) {
	var chrsz = 8;
	var bin = Array();
	var mask = (1 << chrsz) - 1;
	for(var i = 0; i < str.length * chrsz; i += chrsz) {
		bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
	}
	return bin;
}
function Utf8Encode(string) {
	string = string.replace(/\r\n/g,"\n");
	var utftext = "";
	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);
		if (c < 128) {
			utftext += String.fromCharCode(c);
		}
		else if((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		}
		else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		}
	}
	return utftext;
}
function binb2hex(binarray) {
	var hexcase = 0;
	var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	var str = "";
	for(var i = 0; i < binarray.length * 4; i++) {
		str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) + hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
	}
	return str;
}
