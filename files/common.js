var permNum     = "0123456789,.-" ;
var permSEng    = "abcdefghijklmnopqrstuvwxyz" ;
var permLEng    = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var permEng     = permSEng + permLEng ;
var permSpecial = "%~!@#$%^&*()_+|{}[]\"=':;?><,./` "

function __alertMsg(msg, obj, func){
	try{ msg = msg.replaceAll('\n', '<br/>'); }
	catch(e){ msg = msg.split('\n').join('<br/>'); }
	_window = self;
	if(parent){ if(parent.name) _window = parent; }
	try{
		_window.$.MessageBox(msg).done(function(){
			if(obj) obj.focus();
			if(func) func();
		});
	}
	catch(e){
		$.MessageBox(msg).done(function(){
			if(obj) obj.focus();
			if(func) func();
		});
	}
}
window.alert = function(msg, obj, func){
	__alertMsg(msg, obj, func);
}

function __fncChkSpace(formName, fieldName, str){
	var f = document.forms[formName];
	var obj = f[fieldName];
	var tmpStr = obj.value;
	if(tmpStr.length==0){
		if(str!=null){
			alert(str + " 입력하세요", obj) ;
		}
		return false;
	}
	return true;
}

/*******************************************************************************/
// 공백 체크
//	- formName  : 폼이름
//  - fieldName : 필드명
/*******************************************************************************/
function fncChkSpace(formName, fieldName, str){
	var f   = document.forms[formName];
	var obj = f[fieldName];
	tmpStr = obj.value;
	if(tmpStr.length==0){
		if(str!=null){
			alert(str + " 입력하세요", obj) ;
		}
		return false;
	}
	return true ;
}

/*******************************************************************************/
// 공백 체크(필드 빈공백 체크 )
//	- formName  : 폼이름
//  - fieldName : 필드명
/*******************************************************************************/
function fncChkField(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName];
	tmpStr = obj.value;

	if(tmpStr.length==0){
		if(str!=null){
			alert(str + " 입력하세요", obj) ;
		}
		return false;
	}
	return true ;
}

/*******************************************************************************/
// 공백 체크(value)
//	- value : 입력폼 이름 ex) document.frm.MBR_ID
/*******************************************************************************/
function fncChkSpaceV(value){
	tmpStr = value ;
		
	for(i=0 ; i<tmpStr.length ; i++){
		if(tmpStr.charAt(i)!=" ")
			return true ;
	}

	return false ;
}

/*******************************************************************************/
// 특수문자체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "필명을"
/*******************************************************************************/
function fncChkSpecial(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;
	tmpStr = obj.value ;
	for(i=0 ; i<tmpStr.length ; i++){
		if(permSpecial.indexOf(tmpStr.charAt(i))!=-1){
			if(str!=null){
				alert(str, obj);
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// 영문체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkEng(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if(permEng.indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " 잘못 입력하였습니다.\r\n영문만 입력이 가능합니다.", obj) ;
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// 대문자 체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkLEng(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if(permLEng.indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " 잘못 입력하였습니다.\r\n대문자만 입력이 가능합니다.", obj);
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// 소문자 체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkSEng(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if(permSEng.indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " 잘못 입력하였습니다.\r\n소문자만 입력이 가능합니다.", obj);
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// 대문자,숫자 체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkLEngNum(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if((permLEng+permNum).indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " 잘못 입력하였습니다.\r\n대문자와 숫자의 조합으로만 입력이 가능합니다.", obj) ;
			}
			return false ;
		}
	}
	return true ;
}


/*******************************************************************************/
// 소문자,숫자 체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkSEng(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if((permSEng+permNum).indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " 잘못 입력하였습니다.\r\n소문자와 숫자의 조합으로만 입력이 가능합니다.", obj) ;
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// 영문숫자체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkEngNum(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if((permEng+permNum).indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " 잘못 입력하였습니다.\r\n영문과 숫자의 조합으로만 입력이 가능합니다.", obj);
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// 숫자체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkNumber(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;
	return fncChkObjNumber(obj, str);
}
function fncChkObjNumber(obj, str){
	tmpStr = obj.value ;
	for(i=0 ; i<tmpStr.length ; i++){
		if((permNum).indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " 잘못 입력하였습니다.\r\n숫자만 입력이 가능합니다.", obj) ;
			}
			obj.value = '';
			return false ;
		}
	}
	return true ;
}
function fucChkNumber(obj){
	var tmpStr = obj.value ;
	for(i=0 ; i<tmpStr.length ; i++){
		if((permNum).indexOf(tmpStr.charAt(i))<0) return false;
	}
	return true;
}
/*******************************************************************************/
// 숫자체크(value)
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str       : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkNumberV(value){
	tmpStr = value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if((permNum).indexOf(tmpStr.charAt(i))<0)
			return false ;
	}
	return true ;
}



/*******************************************************************************/
// 길이체크(바이트)
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- min : 최소 길이
//	- max : 최대 길이
//	- str : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkBytes(formName,fieldName,min,max,str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;
	len    = calBytes(tmpStr) ;

	if(min==max){
		if(len<min || len>max){
			if(str!=null){
				alert(str + " 길이가 잘못되었습니다. \r\n" + (min/2) + "자, 영문(숫자) " + min +"자로 입력하세요", obj) ;
			}

			return false ;
		}
	}
	else if(len<min && min!=0){
		if(str!=null){
			alert(str + " 길이가 너무 짧습니다. \r\n한글 " + (min/2) + "자, 영문(숫자) " + min +"자 이상으로 입력하세요", obj) ;
		}

		return false ;
	}
	else if(len>max){
		if(str!=null){
			alert(str + " 길이가 초과되었습니다. \r\n한글 " + (max/2) + "자, 영문(숫자) " + max +"자 이하로 입력하세요", obj) ;
		}

		return false ;
	}

	return true ;
}

/*******************************************************************************/
// 길이 체크(length)
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- min : 최소 길이
//	- max : 최대 길이
//	- str : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkLength(formName,fieldName,min,max,str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;
	len     = tmpStr.length ;

	if(min==max){
		if(len<min || len>max){
			if(obj.value!=null){
				if(str!=null){
					alert(str + " 길이가 잘못되었습니다. \r\n" + min +"자로 입력하세요", obj) ;
				}
			}

			return false ;
		}
	}
	else if(len<min){
		if(obj.value!=null){
			if(str!=null){
				alert(str + " 길이가 너무 짧습니다. \r\n" + min +"자 이상으로 입력하세요", obj) ;
			}
		}
		return false ;
	}
	else if(len>max){
		if(obj.value!=null){
			if(str!=null){
				alert(str + " 길이가 초과되었습니다.\r\n" + max +"자 이하로 입력하세요", obj) ;
			}
		}
		return false ;
	}

	return true ;
}

/*******************************************************************************/
// 특정길이에 자동필드 이동
//	- formName  : 폼이름
//  - fofieldName : From 필드명
//  - tofieldName : To 필드명
//	- len : From 필드값의 길이
/*******************************************************************************/
function fncAutoFieldJump(formName, fromfieldName, tofieldName, len){
	var f   = document.forms[formName] ;
	var fo = f[fromfieldName];
	var to = f[tofieldName];
	if(fo.value.length>=len) to.focus();
}

/*******************************************************************************/
// byte 변환
/*******************************************************************************/
function calBytes(str){
	tmpStr = str
	strLength = tmpStr.length
	var one_char;
	var bytes = 0;

	for (k=0;k<strLength;k++){
		one_char = tmpStr.charAt(k);

		if(escape(one_char).length>4){
			bytes += 2;
		}
		else if(one_char!='\r'){
			bytes++;
		}
	}
	
	return bytes ;
}

/*******************************************************************************/
// 이메일 체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str : 뿌려질 메세지 ex) "이메일을"
/*******************************************************************************/
function fncChkEmail(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
	var check=/@[\w\-]+\./;
	var checkend=/\.[a-zA-Z]{2,3}$/;

	tmpStr = obj.value
	
	if(((tmpStr.search(exclude) != -1)||(tmpStr.search(check)) == -1)||(tmpStr.search(checkend) == -1)){
		if(str!=null){
			alert(str + " 잘못 입력하였습니다. \r\n형식에 맞게 입력하세요", obj) ;
		}
		return false ;
	}

	return true;
}

/*******************************************************************************/
// 주민등록번호 체크
//	- formName   : 폼이름
//  - fieldName1 : 주민번호 앞자리
//  - fieldName2 : 주민번호 뒷자리
//	- str  : 뿌려질 메세지 ex) "주민번호를"
/*******************************************************************************/
function fncChkRegNum(formName, fieldName1, fieldName2, str){ 
	var f    = document.forms[formName] ;
	var obj1 = f[fieldName1] ;
	var obj2 = f[fieldName2] ;

	if(!fncChkSpace(formName, fieldName1, "주민등록번호를")) return false ;
	if(!fncChkNumber(formName, fieldName1, "주민등록번호를")) return false ;
	if(!fncChkLength(formName, fieldName1, 6, 6, "주민등록번호를")) return false ;

	if(!fncChkSpace(formName, fieldName2, "주민등록번호를")) return false ;
	if(!fncChkNumber(formName, fieldName2, "주민등록번호를")) return false ;
	if(!fncChkLength(formName, fieldName2, 7, 7, "주민등록번호를")) return false ;

	sIdno = obj1.value + "-" + obj2.value ;

	a1 = sIdno.substring(0, 1);
	a2 = sIdno.substring(1, 2);
	a3 = sIdno.substring(2, 3);
	a4 = sIdno.substring(3, 4);
	a5 = sIdno.substring(4, 5);
	a6 = sIdno.substring(5, 6);
	a7 = sIdno.substring(7, 8);
	a8 = sIdno.substring(8, 9);
	a9 = sIdno.substring(9, 10);
	a10 = sIdno.substring(10, 11);
	a11 = sIdno.substring(11, 12);
	a12 = sIdno.substring(12, 13);
	a = sIdno.substring(13, 14);
	
	x = a1*2 + a2*3 + a3*4 + a4*5 + a5*6 + a6*7 + a7*8 + a8*9 + a9*2 + a10*3 + a11*4 + a12*5;
	
	xx = x % 11;
	
	if (xx == 10) xx = 0; 
	a = 11 - a;
	
	if (a == 11) a = 1;
	else if (a == 10) a = 0;
	
	if (xx == a) 
		return true;
	else {
		if(str!=null){
			alert(str + " 잘못 입력하였습니다. \r\n형식에 맞게 입력하세요", obj1) ;
		}

		return false;
	}
}

/*******************************************************************************/
// 날짜 세팅
//  - formName   : 폼이름
//	- fieldName1 : 날짜 연도 필드이름
//	- fieldName2 : 날짜 월 필드이름
//	- fieldName3 : 날짜 일 필드이름
/*******************************************************************************/
function fncSetDate(formName, fieldName1, fieldName2, fieldName3){
	var f = document.forms[formName] ;
	var obj1 = f[fieldName1] ;
	var obj2 = f[fieldName2] ;
	var obj3 = f[fieldName3] ;

	year  = obj1.value ;
	month = obj2.value ;
	day   = obj3.value ;
	
	days    = new Array(31,28,31,30,31,30,31,31,30,31,30,31) ;
	days[1] = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 29 : 28 // 윤달
	
	for(i=obj3.options.length-1; i>=0 ; i--){	
		obj3.options.remove(i);
	}
	
	for(i=0; i<days[month-1] ; i++){
		oOption=document.createElement("OPTION");
		oOption.value = i+1 ;
		oOption.text  = i+1 ;
		obj3.options.add(oOption);
	}
}

/*******************************************************************************/
// 셀렉트 폼 이동
//	- formName    : 폼명
//	- selectName1 : 원본 셀렉트 이름
//	- selectName2 : 이동할 셀렉트 이름
//	- selectCont  : 이동할 곳의 개수 제한
//  - duplication : 중복체크여부
/*******************************************************************************/
function fncSelectMove(formName, selectName1,selectName2, selectCount, duplication)
{
	var f = document.forms[formName] ;
	var obj1 = f[selectName1] ;
	var obj2 = f[selectName2] ;

	var selectIndex = obj1.selectedIndex ;

	// 선택되지 않았을 경우
	if(selectIndex==-1) return ;

	// 기본값이 넘어올 경우 
	if(obj1.value=="") return ;

	// 중복 체크
	if(duplication){
		for(i=0; i<obj2.length; i++){
			if(obj2.options[i].value==obj1.value){
				alert("선택하신 항목은 이미 등록되어 있습니다.") ;
				return ;
			}
		}
	}

	// 개수체크
	if(selectCount!=null && obj2.options.length >= selectCount){
		alert(selectCount + "개 까지 이동이 가능합니다");
		return ;
	}

	// 선택된 값의 text와 value
	var text  = obj1.options[selectIndex].text ;
	var value = obj1.options[selectIndex].value ;

	// 이동될 곳에 추가
	opt = document.createElement("OPTION");
	opt.text  = text ;
	opt.value = value ;
	obj2.add(opt) ;

	obj2.options[obj2.options.length-1].selected = true ;

	// 이동된 것은 삭제
	obj1.options.remove(selectIndex) ;

	// 최상단 선택
	if(obj1.options.length>selectIndex)	{
		obj1.options[selectIndex].selected = true ;
	}
	else if(obj1.options.length!=0){
		obj1.options[selectIndex-1].selected = true ;
	}
}


/*******************************************************************************/
// 쿠키 값 가져오기
//	- name : 쿠키명
/*******************************************************************************/
function fncGetCookie( name ){
	var cookie_name = name + "=";
	var x = 0;
	while ( x <= document.cookie.length ){
		var y = (x+cookie_name.length);
		if ( document.cookie.substring( x, y ) == cookie_name ){
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
				endOfCookie = document.cookie.length;
			
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 )
	
		break;
	}
	return "";
}


/*******************************************************************************/
// 쿠키 값 세팅
//	- name  : 쿠키명
//	- value : 쿠키값
//  - expiredays : 만료일
/*******************************************************************************/
function fncSetCookie( name, value, expiredays ) {
    var todayDate = new Date();   
    todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);  
    if ( todayDate > new Date() )  
    {  
    expiredays = expiredays - 1;  
    }  
    todayDate.setDate( todayDate.getDate() + expiredays );   
     document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"   
} 

	//쿠키 세팅하기
function setCookie(name, value, expires, path, domain, secure){
	var curCookie = name + "=" + escape(value) +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "; path=/" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
	document.cookie = curCookie;
}

/*******************************************************************************/
// 엔터를 <br>로 바꾸기
//	- str : 바꿀 문자열
/*******************************************************************************/
function fncChgBR(str){
	tmpStr   = str ;
	ret_str   = ""
	left_str  = "" ;
	right_str = "" ;


	while(tmpStr.indexOf("\r\n")>=0){
		left_str  = tmpStr.substring(0,tmpStr.indexOf("\r\n")) ;
		right_str = tmpStr.substring(tmpStr.indexOf("\r\n")+2) ;

		ret_str += left_str + "<br>";
		tmpStr = right_str ;
	}
	return ret_str + right_str ;
}


var ne = (navigator.appName == "Netscape") ? true : false;
var cursorPosX ;
var cursorPosY ;

//document.onmousemove = mousePos;

if(ne) document.captureEvents(Event.MOUSEMOVE); 

/*******************************************************************************/
// 마우스 좌표
/*******************************************************************************/
function mousePos(e){
	if(ne)
		evt = e;
	else
		evt = event;

	cursorPosX = window.evt.x + document.body.scrollLeft;
	cursorPosY = window.evt.y + document.body.scrollTop;
}


/*******************************************************************************/
// 자릿수 콤마 붙이기
//	- formName  : 폼이름
//  - fieldName : 필드명
/*******************************************************************************/
function fncCipher(formName, fieldName){
	var f ;
	if(typeof(formName)=="object") f = formName
	else f = document.forms[formName] ;

	var obj = f[fieldName] ;

	value = fncNonCipher(formName, fieldName) ;
	return fncCipher2(value,formName, fieldName) ;
}

function fncCipher2(value, formName, fieldName){
	// 숫자체크
	if(!fncChkNumberV(value)){
		alert("숫자를 입력하세요");
		if(formName!=null && fieldName!=null){
			document.forms[formName][fieldName].focus() ;
			return "";
		}
	}
	return fncCipherValue(value);
}

function fncCipherValue(value){
	var number = value + "";
	if(number.length == 0) return "";
	else number = number.split(',').join('');

	sign           = number.substring(0,1)=="+"||number.substring(0,1)=="-"?
					 number.substring(0,1):"" ; // 부호(+,-) ;
	decimalPoint   = number.indexOf(".") ; // 소수점의 자릿수
	positiveNumber = decimalPoint>=0 ? number.substring(0,decimalPoint) : number ; // 정수부분
	positiveNumber = sign=="+"||sign=="-"?
					 positiveNumber.substring(1) : positiveNumber ;
	decimal        = decimalPoint>=0 ? number.substring(decimalPoint+1) : "" ; // 소수부분
	n              = positiveNumber.length ; // 정수의 길이
	var result     = "" ; //결과값

	// 콤마 붙이기
	for( x=n-1 , y=0 ; x>=0 ; x--,y++){
		if((y%3)==0 && (y!=0)) result = ','+result;
		result = positiveNumber.charAt(x) + result ;
	}

	// 소수점 이하가 있으나 정수값이 ""일 경우 정수를 0으로 변환
	if(decimalPoint>=0 && result==""){
		result = "0." ;
	}

	// 소수점 이하가 있을 경우 소수점 붙이기
	result = decimalPoint>0 ? result + "." + decimal : result ;

	// 맨앞에 0이 있을 경우 제거
	num = 0 ;
	if(result.length>1){
		while(result.substring(0,1)=="0" && result.length!=1 && result.substring(0,2)!= "0.") {
			result = result.substring(1) ;
			if(num>100) break ;
			num ++ ;
		}
	}
	return sign+result ;
}

/*******************************************************************************/
// 자릿수 콤마 제거
//	- formName  : 폼이름
//  - fieldName : 필드명
/*******************************************************************************/
function fncNonCipher(formName, fieldName){
	var f ;
	if(typeof(formName)=="object") f = formName
	else f = document.forms[formName] ;

	var obj = f[fieldName] ;
	return fncNonCipherV(obj);
/*	number = obj.value ;
	data   = number + "" ;
	while(data.indexOf(",")>=0){
		idx = data.indexOf(",") ;
		data = data.substring(0,idx) + data.substring(idx+1) ;
	}

	return data ;
*/
}

function fncNonCipherV(obj){
	var _val = '';
	if(obj.value){
		_val = obj.value;
		_val = _val.split(',').join('');
	}
	return _val;
}
/*******************************************************************************/
// 배경색 바꾸기
//	- id    : 바꿀 곳의 객체 또는 id
//	- color : 바꿀 색
/*******************************************************************************/
function fncChgBgcolor(id, color){
	obj = document.all[id] ;
	
	if(obj!=null){
		obj.style.background = color ;
	}
}

/*******************************************************************************/
// 이미지 바꾸기
//	- imgId  : 바꿀 곳의 id
//	- imgSrc : 바꿀 이미지 경로
/*******************************************************************************/
function fncChgImage(imgId, imgSrc){
	document.images[imgId].src = imgSrc ; 
}


/*******************************************************************************/
// 문자열 바꾸기
//	- str    : 원본 문자열
//  - oldStr : 바꿀 문자열
//  - newStr : 새 문자열
/*******************************************************************************/
function fncReplace(str, oldStr, newStr){
	tmpStr    = str ;
	ret_str   = ""
	left_str  = "" ;
	right_str = "" ;

	if(str.indexOf(oldStr)==-1){
		return str ;
	}

	while(tmpStr.indexOf(oldStr)>=0){
		left_str  = tmpStr.substring(0,tmpStr.indexOf(oldStr)) ;
		right_str = tmpStr.substring(tmpStr.indexOf(oldStr)+oldStr.length) ;

		ret_str += left_str + newStr;
		tmpStr = right_str ;
	}

	return ret_str + right_str ;
}


/*******************************************************************************/
// Iframe 크기 조절
//	- iframId : iframe의 id
/*******************************************************************************/
function frameResize(iframId){
	parent.document.getElementById(iframId).style.height=document.body.scrollHeight+(document.body.offsetHeight-document.body.clientHeight);
	//alert(document.body.scrollHeight + " : " + document.body.offsetHeight + " : " +document.body.clientHeight) ;
}


/*******************************************************************************/
// 해당문자만 입력 허용 
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- val : 허용문자
//	- str : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkString(formName, fieldName, val, str){
	var f = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if(val.indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str, obj) ;
			}

			return false ;
		}
	}
	return true ;
}


/*******************************************************************************/
// 콤마가 들어간 숫자 체크
//	- formName  : 폼이름
//  - fieldName : 필드명
//	- str : 뿌려질 메세지 ex) "회원 아이디를"
/*******************************************************************************/
function fncChkCommaNum(formName, fieldName, str){
	var f = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	// 숫자와 , 체크
	for(i=0 ; i<tmpStr.length ; i++)	{
		if((permNum + ","+".").indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " 잘못 입력하였습니다.\r\n숫자만 입력이 가능합니다.", obj) ;
			}
			obj.value="";

			return false ;
		}
	}

	// 자릿수 체크
	var tmpStrlen = tmpStr.indexOf(".");	// 소숫점 위치
	tmpStr = tmpStr.substring(0,tmpStrlen)	// 소숫점 왼쪽 정수 반환

	numbers = tmpStr.split(",") ;
	for(i=0; i<numbers.length; i++){
		if(i==0) {
			if(numbers[i].length>3){
				if(str!=null){
					alert(str + " 잘못 입력하였습니다.\r\n자릿수를 확인하세요") ;
				}
				return false ;
			}
		}
		else{
			if(numbers[i].length!=3){
				if(str!=null){
					alert(str + " 잘못 입력하였습니다.\r\n자릿수를 확인하세요") ;
				}
				return false ;
			}
		}
	}

	return true ;
}


/*******************************************************************************/
// 숫자 자리수 표시
//	- number : 자릿수 표시를 할 숫자
//	- formName 
//  - fieldName
/*******************************************************************************/
function autoComma(formName, fieldName){
	document.forms[formName][fieldName].value = fncCipher(formName,fieldName) ;
}


/*******************************************************************************/
// 공인인증 확인
//  - f  : form 객체
//  - dn : ?
/*******************************************************************************/
function chkXecure(f,dn){
	f.q.value = getSessionKey() ;
	if(certCase!=null && certCase=='3') return true;
	f.orderData.value = getOrderData(f) ;
	if(setOrderSignData(dn,f)) return true ;
	else{
		if(opener!=null && opener.name==ORD_ORDER){
			opener.focus();
			window.close();
		}
		return false;
	}
}

/*******************************************************************************/
// 날짜포맷 세팅
//  - formName  : form 명
//  - fieldName : 필드명
//  - format    : 데이타포맷("/":yyyy/MM/dd, "-":yyyy-MM-dd 등)
/*******************************************************************************/

function autoDateFormat(formName, fieldName, format){
	var f       = document.forms[formName] ;
	var obj     = f[fieldName] ;
	var date    = "" ;
	autoDateFormatObj(obj, format);
}
function autoDateFormatObj(obj, format){
	var date    = "" ;
	var tmpDate = obj.value ;
	if(tmpDate.length==0) return;
	var restrictStr = permNum+format;
	for(i=0; i<tmpDate.length; i++){
		if(restrictStr.indexOf(tmpDate.charAt(i))<0){
			obj.value = tmpDate.substring(0,tmpDate.length-1);
			return;
		}
	}

	// 숫자형태로 변환
	if(format!=null && format!="") tmpDate = fncReplace(tmpDate,format,"") ;

	// 백스페이스바, 좌우방향키를 눌렀을 때는 입력값 그대로.
	if(event.keyCode==8 || event.keyCode==37 || event.keyCode==39){
		return ;
	}

	// 포맷붙이기
	for(i=0; i<tmpDate.length; i++){
		date += tmpDate.charAt(i) ;
		if(date.length==4) date += format;
		if(date.length==(6+format.length)) date += format ;
	}
	if(format!=null && format!=""){
		var month = date.substr(5,2);
		if(Number(month)>12){
			obj.value = date.substr(0,5);
			return;
		}
		var day = date.substr(8,2);
		if(Number(day)>31){
			obj.value = date.substr(0,8);
			return;
		}
		date = date.substring(0,10) ;
	}
	else{
		var month = date.substr(4,2);
		if(Number(month)>12){
			obj.value = date.substr(0,4);
			return;
		}
		var day = date.substr(6,2);
		if(Number(day)>31){
			obj.value = date.substr(0,6);
			return;
		}
		date = date.substring(0,8);
	}
	obj.value = date;
}

/*******************************************************************************/
// 날짜 유효성 체크
//  - formName  : form 명
//  - fieldName : 필드명
//  - format    : 데이타포맷("/":yyyy/MM/dd, "-":yyyy-MM-dd 등)
/*******************************************************************************/
function fncChkDateFormat(formName, fieldName, format, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	var year ;
	var month ;
	var day ;

	if(format!=""){
		date    = obj.value.split(format) ;

		if(date.length!=3) {
			if(str!=null){
				alert(str + " 날짜가 유효하지 않습니다.\r\nyyyy"+format+"MM"+format+"dd 형태로 입력하세요.", obj) ;
			}
			return false ;
		}

		year  = date[0] ;
		month = date[1] ;
		day   = date[2] ;
	}
	else{
		date = obj.value ;
		if(date.length!=8){
			if(str!=null){
				alert(str + " 날짜가 유효하지 않습니다.\r\nyyyy"+format+"MM"+format+"dd 형태로 입력하세요.", obj) ;
			}
			return false ;
		}

		year  = date.substring(0,4) ;
		month = date.substring(4,6) ;
		day   = date.substring(6,8) ;
	}

	if(eval(month)<1 || eval(month) > 12) {
		if(str!=null){
			alert(str + " 날짜가 유효하지 않습니다.\r\nyyyy"+format+"MM"+format+"dd 형태로 입력하세요.", obj) ;
		}
		return false ;
	}
	else if(eval(month)<10) month = "0" + eval(month) ;
	
	days    = new Array(31,28,31,30,31,30,31,31,30,31,30,31) ;
	days[1] = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 29 : 28 // 윤달

	if(eval(day)<1 || eval(day)>days[month-1]){
		if(str!=null){
			alert(str + " 날짜가 유효하지 않습니다.", obj) ;
		}
		return false ;
	}
	else if(eval(day)<10) day = "0" + eval(day) ;

	obj.value = year + format + month + format + day ;

	return true ;
}


/*******************************************************************************/
// 필드 readOnly 세팅
//   - f         : 폼 객체
//   - fieldName : 필드명 
//   - value     : 값
/*******************************************************************************/
function setReadOnly(f, fieldName, readonly){
	var obj = f[fieldName] ;
	obj.readOnly = readonly ;

	if(readonly){
		obj.readonly = true ;
		obj.style.background  = "#F9F9F9" ;
		obj.style.borderColor = "#ACACAC" ;
	}
	else{
		obj.readonly = false ;
		obj.style.background  = "#FFFFFF" ;
		obj.style.borderTopColor    = "#1F1F1F" ;
		obj.style.borderLeftColor   = "#1F1F1F" ;
		obj.style.borderRightColor  = "#7F7F7F" ;
		obj.style.borderBottomColor = "#7F7F7F" ;
	}
}


/*******************************************************************************/
// 필드 disabled, enabled
//   - formName  : 폼명
//   - fieldName : 필드명 
//   - disable   : disabled 여부
/*******************************************************************************/
function setFieldDisable(f, fieldName, disable){
	var obj = f[fieldName] ;
	
	if(disable){
		obj.disabled = true ;
		obj.style.background  = "#DDDDDD" ;
		obj.style.borderColor = "#ACACAC" ;
	}
	else{
		obj.disabled = false ;
		obj.style.background  = "#FFFFFF" ;
		obj.style.borderTopColor    = "#1F1F1F" ;
		obj.style.borderLeftColor   = "#1F1F1F" ;
		obj.style.borderRightColor  = "#7F7F7F" ;
		obj.style.borderBottomColor = "#7F7F7F" ;
	}
}


/*******************************************************************************/
// 데이터 숫자포맷 전환
/*******************************************************************************/
function replace(szAll, szFind, szReplace) {
 	var i;
 	var length;
 	var bQuation;

 	bQuation = false;
 	length = szReplace.length - szFind.length;

 	for(i = 0; i < szAll.length; i++) {
   		if(szAll.substr(i,szFind.length) == szFind) {
     			if(i > 0) {
       				if(szFind == "\n") {
         				szAll = szAll.substr(0, i-1) + szReplace + szAll.substr(i+szFind.length,szAll.length - (i+szFind.length));
       				} else {
         				szAll = szAll.substr(0, i) + szReplace + szAll.substr(i+szFind.length,szAll.length - (i+szFind.length));
       				}
     			} else {
       				szAll = szReplace + szAll.substr(i+szFind.length,szAll.length - (i+szFind.length));
     			}
     			i = i + length;
   		}
 	}
 	return szAll;
}
/*******************************************************************************/
// 필드 disabled, enabled
//   - formName  : 폼명
//   - fieldName : 필드명 
//   - disable   : disabled 여부
/*******************************************************************************/
function disableAll(obj, except1, except2){
	if(obj.length){
		for(i=0; i<obj.length; i++){ 
			if(obj[i].name!=except1&&obj[i].name!=except2) obj[i].disabled = true;
		}
	}
	else{
		if(obj.name!=except1&&obj.name!=except2) obj.disabled = true;
	}
}
function clearCheckedAll(obj){
	if(obj.length){
		for(i=0; i<obj.length;i++) obj[i].checked = false;
	}
	else{
		obj.checked = false;
	}
}
function clearCheckedDisableAll(obj){
	if(obj.length){
		for(i=0; i<obj.length;i++){
			obj[i].checked = false;
			obj[i].disabled = true;
		}
	}
	else{
		obj.checked = false;
		obj.disabled = true;
	}
}
function disabledFieldAll(obj){
	if(obj.length){
		for(i=0; i<obj.length;i++) obj[i].disabled = true;
	}
	else obj.disabled = true;
}
function enabledFieldAll(obj){
	if(obj.length){
		for(i=0; i<obj.length;i++) obj[i].disabled = false;
	}
	else obj.disabled = true;
}
function enableAll(obj, except1, except2){
	if(obj.length){
		for(i=0; i<obj.length; i++){
			if(obj[i].name!=except1&&obj[i].name!=except2) obj[i].disabled = false;
		}
	}
	else{
		if(obj.name!=except1&&obj.name!=except2) obj.disabled = false;
	}
}
function setCheckedObj(obj, val){
	if(obj.length){
		for(i=0; i<obj.length; i++){
			if(obj[i].value==val) obj[i].checked = true;
		}
	}
	else{
		if(obj.value==val) obj.checked = true;
	}
}
/*******************************************************************************/
// 필드 SimpleDateValue
/*******************************************************************************/
function getSimpleDateValue(dtVal){
//	ADD MODIFIED BY JJS 
	format = "/";
//	ADD MODIFIED BY JJS 
	if(dtVal.indexOf(format)!=-1){
		var yyyyTmp = dtVal.substr(0,dtVal.indexOf(format));
		var mmTmp=dtVal.substr(dtVal.indexOf(format)+1,2);
		var ddTmp = dtVal.substr(dtVal.lastIndexOf(format)+1,2);
		return (yyyyTmp+mmTmp+ddTmp);
	}
	else return (dtVal);
}


/*******************************************************************************/
// 전달 가져오기 ※이 함수를 쓰기 위해서는 반드시 /t_js/calendar.js와 같이 써야 한다.
//   - date  : 기준날짜
//   - num   : 전 달 
/*******************************************************************************/
function getPreDateByMonth(date, num){
	var dates = date.split("/") ;
	if(dates.length<3){
		alert("날짜형식이 잘못되었습니다.\r\nyyyy/MM/dd 형태로 입력하세요");
		return "";
	}

	try{
		var yy = eval(dates[0]) ;
		var mm = eval(dates[1]) ;
		var dd = eval(dates[2]) ;

		if(mm-num<=0){
			yy = yy - 1 ;
			mm = 12 + (mm-num) ;
		}
		else {
			mm = mm - num ;
		}

		newDate = new Date(yy, mm-1, 1) ;
		lastDate = getLastDay(yy,mm) ;

		if(lastDate<dd) dd = lastDate ;

		newDate = yy + "/" + (mm<10?"0"+mm:mm+"") + "/" + (dd<10?"0"+dd:dd+"");

		return newDate ;
	}
	catch(e){
		alert("날짜형식이 잘못되었습니다.\r\nyyyy/MM/dd 형태로 입력하세요");
		return "";
	}
}

/*******************************************************************************/
// 필드 isCheckPeriod
/*******************************************************************************/
function isCheckPeriod(orgVal, period){
	var isAble = false;
	var today = new Date();
	thisYear  = today.getFullYear();
	thisMonth = today.getMonth() + 1;
	thisDay   = today.getDate();

	regYear   = orgVal.substr(0,4);
	regMonth  = orgVal.substr(5,2);
	regDate   = orgVal.substr(8,2);

	gapday = thisDay-period;
	if(gapday<0) thisMonth--;
	if(thisMonth==0){
		thisYear--;
		thisMonth = 12
	}
	endDay = new Date(thisYear, thisMonth, gapday);
	regDay = new Date(regYear, regMonth-1, regDate);
	if(regDay<endDay){
		alert(orgVal+'신청일기준의 잔고증명서는 거래영업점에 \r\n내점하시어 신청하여 주시기 바랍니다.');
		return false;
	}
	else return true;
}
/**	######## Set Event Logic #########
**/
function swapImg(){
	if(event.type == 'mouseover'){
		oldtype = 'off';
		type = 'on';
	}
	else if(event.type == 'mouseout'){
		oldtype = 'on';
		type = 'off';
	}
	var srcString = event.srcElement.src;
	var idx = srcString.indexOf(oldtype+'.');
	var front = srcString.substring(0, idx)
	var rear = srcString.substring(idx+oldtype.length);
	var path = front + type + rear;

	event.srcElement.src = path;
}

function fncSwapImg(old_type, new_type){
	var srcString = event.srcElement.src;
	var idx = srcString.lastIndexOf(old_type+'.');
	if(idx==-1) return;
	var pre = srcString.substring((idx-old_type.length), idx);
	if(pre==new_type) return;

	var front = srcString.substring(0, idx);
	var rear = srcString.substring(idx+old_type.length);
	var path = front + new_type + rear;
	event.srcElement.src = path;
}

function fncSwapImg_new(old_type, new_type, srcString){
	var idx = srcString.lastIndexOf(old_type+'.');
	if(idx==-1) return;
	var pre = srcString.substring((idx-old_type.length), idx);
	if(pre==new_type) return;

	var front = srcString.substring(0, idx);
	var rear = srcString.substring(idx+old_type.length);
	var path = front + new_type + rear;
	
	return path;
}
/**	######## Set Event Logic #########
**/
function Trim(obj){
	var source = obj.value;
	var result = "";
	for(var i=0;i<source.length;i++){
		var schar = source.charAt(i);
		if(schar!=" ") result += schar;
	}
	obj.value = result;
}

function Trim_Val(source){
	var result = "";
	for(var i=0;i<source.length;i++){
		var schar = source.charAt(i);
		if(schar!=" ") result += schar;
	}
	return result;
}

function setFixedLength(obj,len){
	var source = obj.value;
	if(len>source.length){
		var gap = len-source.length
		for(var i=0;i<gap;i++) source += " ";
	}
	else if(len<source.length){
		source = source.substr(0,len);
	}
	obj.value = source;
}

/*******************************************************************************/
// 필드 WINDOWS
/*******************************************************************************/
function getWindow(winname){
	for(var i=0;i<top.window.length;i++){
		var _win = top.window[i];
		if(winname == _win.name){
			return _win;
			break;
		}
		for(var j=0;j<_win.window.length;j++){
			var _win_c = _win.window[j];
			if(winname == _win_c.name){
				return _win_c;
				break;
			}
			for(var k=0;k<_win_c.window.length;k++){
				var _win_c_c = _win_c.window[j];
				if(winname == _win_c_c.name){
					return _win_c_c;
					break;
				}
			}
		}
	}
}

function goCenterWin(win, width, height){
	x = (screen.width  - width)/2;
	y = (screen.height - height)/2;
	win.moveTo(x,y);
}

/*******************************************************************************/
// 체크필드 isChecked
/*******************************************************************************/
function isFieldChecked(obj, name){
	if(obj==null){
		alert(name + "(이)가 존재하지 않습니다.");
		return false;
	}
	if(obj.length>1){
		for(var i=0;i<obj.length;i++){
			if(obj[i].checked==true) return true;
		}
	}else{
		if(obj.checked==true) return true;
	}
	
	if(obj.length>1) alert(name + "(이)가 선택되지 않았습니다.", obj[0]);
	else alert(name + "(이)가 선택되지 않았습니다.", obj);
	return false;
}
function getCheckedValue(obj){
	var ret = "";
	if(obj!=null){
		for(var i=0;i<obj.length;i++){
			if(obj[i].checked==true){
				ret = obj[i].value;
				break;
			}
		}
	}
	return ret;
}

/*******************************************************************************/
// 입력폼에서 숫자만 입력받기
/*******************************************************************************/
 function numbersonly(e, decimal) {
     var key;
     var keychar;

     if (window.event) {
         key = window.event.keyCode;
     } else if (e) {
         key = e.which;
     } else {
         return true;
     }
     keychar = String.fromCharCode(key);

     if ((key == null) || (key == 0) || (key == 8) || (key == 9) || (key == 13)
             || (key == 27)) {
         return true;
     } else if ((("0123456789").indexOf(keychar) > -1)) {
         return true;
     } else if (decimal && (keychar == ".")) {
         return true;
     } else{
     	alert("숫자만 입력 가능합니다.");
         return false;
     }
 }

/*******************************************************************************/
// 필요없는 char 삭제
/*******************************************************************************/
function removeAsh(src, ash){
	var ret = "";
	var sp = src.split(ash);
	for(var i=0;i<sp.length;i++) ret += sp[i];
	return ret;
}

/*******************************************************************************/
// Math Round(val, precision)
/*******************************************************************************/
function fncRoundPrecision(val, precision){
	var p = Math.pow(10, precision);
	return (Math.round(val * p)/p);
}


/*******************************************************************************/
// 입력불가 태그 체크 
/*******************************************************************************/
function chkSecuData(str){
	var key = new Array( "%","<", ">", "&", "=", ")", "(","/", "+", "UNION", "SELECT", "INSERT", "UPDATE", "DELETE", "EXEC" )	//제한되는 태그

	if(str!=""){
		for(i=0;i<key.length;i++){
			result0 = str.toUpperCase().indexOf(key[i]);
    	
			if(result0 > -1){
				alert( key[i]+" 등의 태그 사용이 제한됩니다");			 
				return false;
				break; 
			}		
		}			
	}	
	return true;
}
