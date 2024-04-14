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
			alert(str + " �Է��ϼ���", obj) ;
		}
		return false;
	}
	return true;
}

/*******************************************************************************/
// ���� üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
/*******************************************************************************/
function fncChkSpace(formName, fieldName, str){
	var f   = document.forms[formName];
	var obj = f[fieldName];
	tmpStr = obj.value;
	if(tmpStr.length==0){
		if(str!=null){
			alert(str + " �Է��ϼ���", obj) ;
		}
		return false;
	}
	return true ;
}

/*******************************************************************************/
// ���� üũ(�ʵ� ����� üũ )
//	- formName  : ���̸�
//  - fieldName : �ʵ��
/*******************************************************************************/
function fncChkField(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName];
	tmpStr = obj.value;

	if(tmpStr.length==0){
		if(str!=null){
			alert(str + " �Է��ϼ���", obj) ;
		}
		return false;
	}
	return true ;
}

/*******************************************************************************/
// ���� üũ(value)
//	- value : �Է��� �̸� ex) document.frm.MBR_ID
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
// Ư������üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "�ʸ���"
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
// ����üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
/*******************************************************************************/
function fncChkEng(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if(permEng.indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n������ �Է��� �����մϴ�.", obj) ;
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// �빮�� üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
/*******************************************************************************/
function fncChkLEng(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if(permLEng.indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n�빮�ڸ� �Է��� �����մϴ�.", obj);
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// �ҹ��� üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
/*******************************************************************************/
function fncChkSEng(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if(permSEng.indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n�ҹ��ڸ� �Է��� �����մϴ�.", obj);
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// �빮��,���� üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
/*******************************************************************************/
function fncChkLEngNum(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if((permLEng+permNum).indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n�빮�ڿ� ������ �������θ� �Է��� �����մϴ�.", obj) ;
			}
			return false ;
		}
	}
	return true ;
}


/*******************************************************************************/
// �ҹ���,���� üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
/*******************************************************************************/
function fncChkSEng(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if((permSEng+permNum).indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n�ҹ��ڿ� ������ �������θ� �Է��� �����մϴ�.", obj) ;
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// ��������üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
/*******************************************************************************/
function fncChkEngNum(formName, fieldName, str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	for(i=0 ; i<tmpStr.length ; i++){
		if((permEng+permNum).indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n������ ������ �������θ� �Է��� �����մϴ�.", obj);
			}
			return false ;
		}
	}
	return true ;
}

/*******************************************************************************/
// ����üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
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
				alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n���ڸ� �Է��� �����մϴ�.", obj) ;
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
// ����üũ(value)
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str       : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
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
// ����üũ(����Ʈ)
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- min : �ּ� ����
//	- max : �ִ� ����
//	- str : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
/*******************************************************************************/
function fncChkBytes(formName,fieldName,min,max,str){
	var f   = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;
	len    = calBytes(tmpStr) ;

	if(min==max){
		if(len<min || len>max){
			if(str!=null){
				alert(str + " ���̰� �߸��Ǿ����ϴ�. \r\n" + (min/2) + "��, ����(����) " + min +"�ڷ� �Է��ϼ���", obj) ;
			}

			return false ;
		}
	}
	else if(len<min && min!=0){
		if(str!=null){
			alert(str + " ���̰� �ʹ� ª���ϴ�. \r\n�ѱ� " + (min/2) + "��, ����(����) " + min +"�� �̻����� �Է��ϼ���", obj) ;
		}

		return false ;
	}
	else if(len>max){
		if(str!=null){
			alert(str + " ���̰� �ʰ��Ǿ����ϴ�. \r\n�ѱ� " + (max/2) + "��, ����(����) " + max +"�� ���Ϸ� �Է��ϼ���", obj) ;
		}

		return false ;
	}

	return true ;
}

/*******************************************************************************/
// ���� üũ(length)
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- min : �ּ� ����
//	- max : �ִ� ����
//	- str : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
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
					alert(str + " ���̰� �߸��Ǿ����ϴ�. \r\n" + min +"�ڷ� �Է��ϼ���", obj) ;
				}
			}

			return false ;
		}
	}
	else if(len<min){
		if(obj.value!=null){
			if(str!=null){
				alert(str + " ���̰� �ʹ� ª���ϴ�. \r\n" + min +"�� �̻����� �Է��ϼ���", obj) ;
			}
		}
		return false ;
	}
	else if(len>max){
		if(obj.value!=null){
			if(str!=null){
				alert(str + " ���̰� �ʰ��Ǿ����ϴ�.\r\n" + max +"�� ���Ϸ� �Է��ϼ���", obj) ;
			}
		}
		return false ;
	}

	return true ;
}

/*******************************************************************************/
// Ư�����̿� �ڵ��ʵ� �̵�
//	- formName  : ���̸�
//  - fofieldName : From �ʵ��
//  - tofieldName : To �ʵ��
//	- len : From �ʵ尪�� ����
/*******************************************************************************/
function fncAutoFieldJump(formName, fromfieldName, tofieldName, len){
	var f   = document.forms[formName] ;
	var fo = f[fromfieldName];
	var to = f[tofieldName];
	if(fo.value.length>=len) to.focus();
}

/*******************************************************************************/
// byte ��ȯ
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
// �̸��� üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str : �ѷ��� �޼��� ex) "�̸�����"
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
			alert(str + " �߸� �Է��Ͽ����ϴ�. \r\n���Ŀ� �°� �Է��ϼ���", obj) ;
		}
		return false ;
	}

	return true;
}

/*******************************************************************************/
// �ֹε�Ϲ�ȣ üũ
//	- formName   : ���̸�
//  - fieldName1 : �ֹι�ȣ ���ڸ�
//  - fieldName2 : �ֹι�ȣ ���ڸ�
//	- str  : �ѷ��� �޼��� ex) "�ֹι�ȣ��"
/*******************************************************************************/
function fncChkRegNum(formName, fieldName1, fieldName2, str){ 
	var f    = document.forms[formName] ;
	var obj1 = f[fieldName1] ;
	var obj2 = f[fieldName2] ;

	if(!fncChkSpace(formName, fieldName1, "�ֹε�Ϲ�ȣ��")) return false ;
	if(!fncChkNumber(formName, fieldName1, "�ֹε�Ϲ�ȣ��")) return false ;
	if(!fncChkLength(formName, fieldName1, 6, 6, "�ֹε�Ϲ�ȣ��")) return false ;

	if(!fncChkSpace(formName, fieldName2, "�ֹε�Ϲ�ȣ��")) return false ;
	if(!fncChkNumber(formName, fieldName2, "�ֹε�Ϲ�ȣ��")) return false ;
	if(!fncChkLength(formName, fieldName2, 7, 7, "�ֹε�Ϲ�ȣ��")) return false ;

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
			alert(str + " �߸� �Է��Ͽ����ϴ�. \r\n���Ŀ� �°� �Է��ϼ���", obj1) ;
		}

		return false;
	}
}

/*******************************************************************************/
// ��¥ ����
//  - formName   : ���̸�
//	- fieldName1 : ��¥ ���� �ʵ��̸�
//	- fieldName2 : ��¥ �� �ʵ��̸�
//	- fieldName3 : ��¥ �� �ʵ��̸�
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
	days[1] = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 29 : 28 // ����
	
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
// ����Ʈ �� �̵�
//	- formName    : ����
//	- selectName1 : ���� ����Ʈ �̸�
//	- selectName2 : �̵��� ����Ʈ �̸�
//	- selectCont  : �̵��� ���� ���� ����
//  - duplication : �ߺ�üũ����
/*******************************************************************************/
function fncSelectMove(formName, selectName1,selectName2, selectCount, duplication)
{
	var f = document.forms[formName] ;
	var obj1 = f[selectName1] ;
	var obj2 = f[selectName2] ;

	var selectIndex = obj1.selectedIndex ;

	// ���õ��� �ʾ��� ���
	if(selectIndex==-1) return ;

	// �⺻���� �Ѿ�� ��� 
	if(obj1.value=="") return ;

	// �ߺ� üũ
	if(duplication){
		for(i=0; i<obj2.length; i++){
			if(obj2.options[i].value==obj1.value){
				alert("�����Ͻ� �׸��� �̹� ��ϵǾ� �ֽ��ϴ�.") ;
				return ;
			}
		}
	}

	// ����üũ
	if(selectCount!=null && obj2.options.length >= selectCount){
		alert(selectCount + "�� ���� �̵��� �����մϴ�");
		return ;
	}

	// ���õ� ���� text�� value
	var text  = obj1.options[selectIndex].text ;
	var value = obj1.options[selectIndex].value ;

	// �̵��� ���� �߰�
	opt = document.createElement("OPTION");
	opt.text  = text ;
	opt.value = value ;
	obj2.add(opt) ;

	obj2.options[obj2.options.length-1].selected = true ;

	// �̵��� ���� ����
	obj1.options.remove(selectIndex) ;

	// �ֻ�� ����
	if(obj1.options.length>selectIndex)	{
		obj1.options[selectIndex].selected = true ;
	}
	else if(obj1.options.length!=0){
		obj1.options[selectIndex-1].selected = true ;
	}
}


/*******************************************************************************/
// ��Ű �� ��������
//	- name : ��Ű��
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
// ��Ű �� ����
//	- name  : ��Ű��
//	- value : ��Ű��
//  - expiredays : ������
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

	//��Ű �����ϱ�
function setCookie(name, value, expires, path, domain, secure){
	var curCookie = name + "=" + escape(value) +
		((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
		((path == null) ? "; path=/" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
	document.cookie = curCookie;
}

/*******************************************************************************/
// ���͸� <br>�� �ٲٱ�
//	- str : �ٲ� ���ڿ�
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
// ���콺 ��ǥ
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
// �ڸ��� �޸� ���̱�
//	- formName  : ���̸�
//  - fieldName : �ʵ��
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
	// ����üũ
	if(!fncChkNumberV(value)){
		alert("���ڸ� �Է��ϼ���");
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
					 number.substring(0,1):"" ; // ��ȣ(+,-) ;
	decimalPoint   = number.indexOf(".") ; // �Ҽ����� �ڸ���
	positiveNumber = decimalPoint>=0 ? number.substring(0,decimalPoint) : number ; // �����κ�
	positiveNumber = sign=="+"||sign=="-"?
					 positiveNumber.substring(1) : positiveNumber ;
	decimal        = decimalPoint>=0 ? number.substring(decimalPoint+1) : "" ; // �Ҽ��κ�
	n              = positiveNumber.length ; // ������ ����
	var result     = "" ; //�����

	// �޸� ���̱�
	for( x=n-1 , y=0 ; x>=0 ; x--,y++){
		if((y%3)==0 && (y!=0)) result = ','+result;
		result = positiveNumber.charAt(x) + result ;
	}

	// �Ҽ��� ���ϰ� ������ �������� ""�� ��� ������ 0���� ��ȯ
	if(decimalPoint>=0 && result==""){
		result = "0." ;
	}

	// �Ҽ��� ���ϰ� ���� ��� �Ҽ��� ���̱�
	result = decimalPoint>0 ? result + "." + decimal : result ;

	// �Ǿտ� 0�� ���� ��� ����
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
// �ڸ��� �޸� ����
//	- formName  : ���̸�
//  - fieldName : �ʵ��
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
// ���� �ٲٱ�
//	- id    : �ٲ� ���� ��ü �Ǵ� id
//	- color : �ٲ� ��
/*******************************************************************************/
function fncChgBgcolor(id, color){
	obj = document.all[id] ;
	
	if(obj!=null){
		obj.style.background = color ;
	}
}

/*******************************************************************************/
// �̹��� �ٲٱ�
//	- imgId  : �ٲ� ���� id
//	- imgSrc : �ٲ� �̹��� ���
/*******************************************************************************/
function fncChgImage(imgId, imgSrc){
	document.images[imgId].src = imgSrc ; 
}


/*******************************************************************************/
// ���ڿ� �ٲٱ�
//	- str    : ���� ���ڿ�
//  - oldStr : �ٲ� ���ڿ�
//  - newStr : �� ���ڿ�
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
// Iframe ũ�� ����
//	- iframId : iframe�� id
/*******************************************************************************/
function frameResize(iframId){
	parent.document.getElementById(iframId).style.height=document.body.scrollHeight+(document.body.offsetHeight-document.body.clientHeight);
	//alert(document.body.scrollHeight + " : " + document.body.offsetHeight + " : " +document.body.clientHeight) ;
}


/*******************************************************************************/
// �ش繮�ڸ� �Է� ��� 
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- val : ��빮��
//	- str : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
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
// �޸��� �� ���� üũ
//	- formName  : ���̸�
//  - fieldName : �ʵ��
//	- str : �ѷ��� �޼��� ex) "ȸ�� ���̵�"
/*******************************************************************************/
function fncChkCommaNum(formName, fieldName, str){
	var f = document.forms[formName] ;
	var obj = f[fieldName] ;

	tmpStr = obj.value ;

	// ���ڿ� , üũ
	for(i=0 ; i<tmpStr.length ; i++)	{
		if((permNum + ","+".").indexOf(tmpStr.charAt(i))<0){
			if(str!=null){
				alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n���ڸ� �Է��� �����մϴ�.", obj) ;
			}
			obj.value="";

			return false ;
		}
	}

	// �ڸ��� üũ
	var tmpStrlen = tmpStr.indexOf(".");	// �Ҽ��� ��ġ
	tmpStr = tmpStr.substring(0,tmpStrlen)	// �Ҽ��� ���� ���� ��ȯ

	numbers = tmpStr.split(",") ;
	for(i=0; i<numbers.length; i++){
		if(i==0) {
			if(numbers[i].length>3){
				if(str!=null){
					alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n�ڸ����� Ȯ���ϼ���") ;
				}
				return false ;
			}
		}
		else{
			if(numbers[i].length!=3){
				if(str!=null){
					alert(str + " �߸� �Է��Ͽ����ϴ�.\r\n�ڸ����� Ȯ���ϼ���") ;
				}
				return false ;
			}
		}
	}

	return true ;
}


/*******************************************************************************/
// ���� �ڸ��� ǥ��
//	- number : �ڸ��� ǥ�ø� �� ����
//	- formName 
//  - fieldName
/*******************************************************************************/
function autoComma(formName, fieldName){
	document.forms[formName][fieldName].value = fncCipher(formName,fieldName) ;
}


/*******************************************************************************/
// �������� Ȯ��
//  - f  : form ��ü
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
// ��¥���� ����
//  - formName  : form ��
//  - fieldName : �ʵ��
//  - format    : ����Ÿ����("/":yyyy/MM/dd, "-":yyyy-MM-dd ��)
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

	// �������·� ��ȯ
	if(format!=null && format!="") tmpDate = fncReplace(tmpDate,format,"") ;

	// �齺���̽���, �¿����Ű�� ������ ���� �Է°� �״��.
	if(event.keyCode==8 || event.keyCode==37 || event.keyCode==39){
		return ;
	}

	// ���˺��̱�
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
// ��¥ ��ȿ�� üũ
//  - formName  : form ��
//  - fieldName : �ʵ��
//  - format    : ����Ÿ����("/":yyyy/MM/dd, "-":yyyy-MM-dd ��)
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
				alert(str + " ��¥�� ��ȿ���� �ʽ��ϴ�.\r\nyyyy"+format+"MM"+format+"dd ���·� �Է��ϼ���.", obj) ;
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
				alert(str + " ��¥�� ��ȿ���� �ʽ��ϴ�.\r\nyyyy"+format+"MM"+format+"dd ���·� �Է��ϼ���.", obj) ;
			}
			return false ;
		}

		year  = date.substring(0,4) ;
		month = date.substring(4,6) ;
		day   = date.substring(6,8) ;
	}

	if(eval(month)<1 || eval(month) > 12) {
		if(str!=null){
			alert(str + " ��¥�� ��ȿ���� �ʽ��ϴ�.\r\nyyyy"+format+"MM"+format+"dd ���·� �Է��ϼ���.", obj) ;
		}
		return false ;
	}
	else if(eval(month)<10) month = "0" + eval(month) ;
	
	days    = new Array(31,28,31,30,31,30,31,31,30,31,30,31) ;
	days[1] = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 29 : 28 // ����

	if(eval(day)<1 || eval(day)>days[month-1]){
		if(str!=null){
			alert(str + " ��¥�� ��ȿ���� �ʽ��ϴ�.", obj) ;
		}
		return false ;
	}
	else if(eval(day)<10) day = "0" + eval(day) ;

	obj.value = year + format + month + format + day ;

	return true ;
}


/*******************************************************************************/
// �ʵ� readOnly ����
//   - f         : �� ��ü
//   - fieldName : �ʵ�� 
//   - value     : ��
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
// �ʵ� disabled, enabled
//   - formName  : ����
//   - fieldName : �ʵ�� 
//   - disable   : disabled ����
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
// ������ �������� ��ȯ
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
// �ʵ� disabled, enabled
//   - formName  : ����
//   - fieldName : �ʵ�� 
//   - disable   : disabled ����
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
// �ʵ� SimpleDateValue
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
// ���� �������� ���� �Լ��� ���� ���ؼ��� �ݵ�� /t_js/calendar.js�� ���� ��� �Ѵ�.
//   - date  : ���س�¥
//   - num   : �� �� 
/*******************************************************************************/
function getPreDateByMonth(date, num){
	var dates = date.split("/") ;
	if(dates.length<3){
		alert("��¥������ �߸��Ǿ����ϴ�.\r\nyyyy/MM/dd ���·� �Է��ϼ���");
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
		alert("��¥������ �߸��Ǿ����ϴ�.\r\nyyyy/MM/dd ���·� �Է��ϼ���");
		return "";
	}
}

/*******************************************************************************/
// �ʵ� isCheckPeriod
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
		alert(orgVal+'��û�ϱ����� �ܰ������� �ŷ��������� \r\n�����Ͻþ� ��û�Ͽ� �ֽñ� �ٶ��ϴ�.');
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
// �ʵ� WINDOWS
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
// üũ�ʵ� isChecked
/*******************************************************************************/
function isFieldChecked(obj, name){
	if(obj==null){
		alert(name + "(��)�� �������� �ʽ��ϴ�.");
		return false;
	}
	if(obj.length>1){
		for(var i=0;i<obj.length;i++){
			if(obj[i].checked==true) return true;
		}
	}else{
		if(obj.checked==true) return true;
	}
	
	if(obj.length>1) alert(name + "(��)�� ���õ��� �ʾҽ��ϴ�.", obj[0]);
	else alert(name + "(��)�� ���õ��� �ʾҽ��ϴ�.", obj);
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
// �Է������� ���ڸ� �Է¹ޱ�
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
     	alert("���ڸ� �Է� �����մϴ�.");
         return false;
     }
 }

/*******************************************************************************/
// �ʿ���� char ����
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
// �ԷºҰ� �±� üũ 
/*******************************************************************************/
function chkSecuData(str){
	var key = new Array( "%","<", ">", "&", "=", ")", "(","/", "+", "UNION", "SELECT", "INSERT", "UPDATE", "DELETE", "EXEC" )	//���ѵǴ� �±�

	if(str!=""){
		for(i=0;i<key.length;i++){
			result0 = str.toUpperCase().indexOf(key[i]);
    	
			if(result0 > -1){
				alert( key[i]+" ���� �±� ����� ���ѵ˴ϴ�");			 
				return false;
				break; 
			}		
		}			
	}	
	return true;
}
