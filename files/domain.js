var _HOST_DOMAIN = "";
switch(document.domain){
	case "www.hi-ib.com":
		_HOST_DOMAIN = "wtsweb.hi-ib.com";
		break;
	case "www.hi-ib.co.kr":
		_HOST_DOMAIN = "wtsweb.hi-ib.co.kr";
		break;
	case "opendev.hi-ib.com":
		_HOST_DOMAIN = "wtsdev.hi-ib.com";
		break;
	case "opendev2.hi-ib.com":
		_HOST_DOMAIN = "wtsdev.hi-ib.com";
		break;
	case "wtsweb.hi-ib.com":
		_HOST_DOMAIN = "www.hi-ib.com";
		break;
	case "wtsweb.hi-ib.co.kr":
		_HOST_DOMAIN = "www.hi-ib.co.kr";
		break;
	case "wtsdev.hi-ib.com":
		_HOST_DOMAIN = "opendev.hi-ib.com";
		break;
	default:
		_HOST_DOMAIN = "wtsweb.hi-ib.com";
		break;
}
var _MST_DOMAIN = _HOST_DOMAIN.substring(_HOST_DOMAIN.indexOf("."));