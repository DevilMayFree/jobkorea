var redirectUrl_;
function goMenuUrl(gourl,menuauth){
	var params = new Object();
	params.tr_cd = 'hybrid/userinfo/login_chk';
	params.gourl = gourl;
	params.domain = document.domain;
	params.menuauth = menuauth;
	_sendJQueryAjax(params, 'post', true, 0, _resultLoginChk);
}
function goMainPage(url, isTop, target){
	if(url.toLowerCase().indexOf('http')!=-1){
		alert('�ٸ�����Ʈ �̵����� �ǽ������� �ֽ��ϴ�.');
		return;
	}
	var templets = ['cyKhan', 'yesTrader'];
	url = _checkTempletUrls(templets, url);
	if(url.indexOf('redirectUrl')!=-1) url = '/inc/common/redirectPage.jsp?'+url;
	else if(url.indexOf('wtsUrl')!=-1) url = '/wTrade/WebTS/main.jsp?'+url;
	else if(url.indexOf('goJSrun')!=-1){
		isTop = true; target = 'manager';
	}
	if(isTop){
		if(target) top.window[target].location.href = url;
		else top.location.href = url;
	}
	else{
		if(target) window[target].location.href = url;
		else location.href = url;
	}
}

function goTopMainPage(url){
	goMainPage(url, true);
}

//replace �Լ�
function replaceAll ( str, orgStr, repStr) {
	return str.split(orgStr).join(repStr);
}

/*
���������� ���ŷ����� ��ũ��Ʈ ����
*/
function _resultLoginChk(data){
	var AccessChk = 0;
	var result = data[0][0]['result'];
	var logintype = data[0][0]['logintype'];
	var gourl = data[0][0]['gourl'];
	var AccessChk = data[0][0]['AccessChk'];
	var menuauth = data[0][0]['menuauth'];
	if(AccessChk == -1){
		alert("���� ����Ͻô� ���������� ���� �غ����Դϴ�.\n��Ȱ�� �̿��� ���� ���ͳ��ͽ��÷η�(www.hi-ib.com)���� ������ �� �ֽñ� �ٶ��ϴ�.");
		return;
	}else if(AccessChk == 2){
		if(gourl.indexOf('javascript:') != -1){
			if(gourl.indexOf('OpenXecure') != -1){
				eval(gourl.replace('javascript:',''));
			}else{
				var url = replaceAll(gourl, "&apos;", "'");
				url = replaceAll(url, "&amp;", "&");
				eval(url.replace('javascript:',''));
			}
		}else{
			try{
				var url = replaceAll(gourl, "&apos;", "'");
				url = replaceAll(url, "&amp;", "&");
				if(window.name=='main') goMainPage(url);
				else goMainPage(url, false, 'main');
			}
			catch(exception){
				var url = replaceAll(gourl, "&apos;", "'");
				url = replaceAll(url, "&amp;", "&");
				document.location.href = url;
			}
		}
	}else if(AccessChk == 1){
		var _confirmMsg = '�ش� �޴��� ���������� �α����� �ϼž� \n����� �� �ֽ��ϴ�. \n\n�α��� �Ͻðڽ��ϱ�?';
		if(Number(menuauth)>300) _confirmMsg = '�ش� �޴��� ���������� �α����� �ϼž� \n����� �� �ֽ��ϴ�. \n\n�α��� �Ͻðڽ��ϱ�?';
		if(confirm(_confirmMsg)){
			_goReDirectLogin(gourl, "S");
		}
	}else{
		if(menuauth=='150') _goReDirectLogin(gourl, "R");
		else if(Number(menuauth.substring(0,1))>1) _goReDirectLogin(gourl, "S");
		else _goReDirectLogin(gourl);
	}
}
function _goReDirectLogin(_url, mod){
	try{
		top.site.directLogin(_url, mod);
	}
	catch(e){
		top.location.href = "/";
	}
}

/*�Ѱ���������*/
function goHKC(){
//	window.open('http://hkconsensus.hankyung.com/apps.analysis/analysis.list','research_view','titlebar=no,toolbar=no,resizable=yes,width=1000,height=950');
	window.open('https://consensus.hankyung.com/analysis/list','research_view','titlebar=no,toolbar=no,resizable=yes,width=1000,height=950');
}

/*������Ź����*/
function goNewStock(idx){
	if(idx==0) window.open('https://intro.newsystock.com/B2B/?sectype=hi&menu=w001','newsystock_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=1024,height=800');
	else if(idx==1) window.open('https://intro.newsystock.com/B2B/?sectype=hi&menu=w002','newsystock_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=1250,height=900');
	else if(idx==2) window.open('https://intro.newsystock.com/B2B/?sectype=hi&menu=w009','newsystock_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=780,height=790');
	else if(idx==3) window.open('https://m.itooza.com/histockbot/hts_intro.php?customHI=','stockbot_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==4) window.open('https://m.itooza.com/histockbot/hts_index.php?customHI=','stockbot_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==5) window.open('http://www.wealthmentor.net/strategy/hi_stg.jsp?device=hts&kind=intro','wells_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==6) window.open('https://rank.fabot.ai/about?hi-ib','pabot_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==7) window.open('https://rank.fabot.ai/?hi-ib','pabot_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==8) window.open('https://hi.donutz.co/introduce','donutz_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==9) window.open('https://hi.donutz.co/trials','donutz_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==10) window.open('https://www.robostock.co.kr/n_info.hi','robo_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==11) window.open('https://www.robostock.co.kr/main.hi','robo_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==12) window.open('http://www.itooza.com/event/robo','stockbot_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==13) window.open('https://www.robostock.co.kr/event.hi','robo_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==14) window.open('https://rank.fabot.ai/events/hi-ib/fight_about?hi-ib','pabot_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
	else if(idx==15) window.open('http://free.newsystock.com/Intro/event/intro_hi_apply.html','newsystock_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=900,height=900');
}

function goGenport(idx){
	if(idx==0) window.open('https://genport.newsystock.com/GenTrader/','genport_view','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=1024,height=800');
}

/* �ؿܽ��� 2013-09-13 */
function goWoldStock(idx){
	if(idx==0) window.open('http://wstock3.edaily.co.kr?cc=hi','wstock_view','titlebar=no,toolbar=no,scrollbars=yes, resizable=yes');
	else window.open('http://globalmonitor.einfomax.co.kr/infomax_hiib.html#/USA','wstock_view','titlebar=no,toolbar=no,scrollbars=yes, resizable=yes');
}	

/*��ۺ���*/
function goBroadCast(username){
	alert('����� ����Ǿ����ϴ�.');
	return;
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; 
	var yyyy = today.getFullYear();
	var hh = today.getHours();
	var mi = today.getMinutes();
	var ss = today.getSeconds();
	var ran = Math.floor(Math.random() * 100);

	if(dd<10) dd='0'+dd;
	if(mm<10) mm='0'+mm;
	if(hh<10) hh='0'+hh;
	if(mi<10) mi='0'+mi;
	if(ss<10) ss='0'+ss;

	if(username=='') username = 'W'+yyyy+''+mm+''+dd+''+hh+''+mi+''+ss+''+ran;

	var _url = "https://web3.fnup.com/Service/Cjcyber/united/player.asp?username="+escape(username)+"&nickname="+escape(username);
	window.open(_url, "frame", "width=" + (screen.width - 10) + ", height=" + (screen.height - 60) + ", scrollbars=no, resizable=yes, top=0, left=0, toolbar=no, location=no, status=no, menubar=no");	
}
/*SBSCNBC ��ۺ���*/
function goSBS(){
	window.open("http://sbscnbc.sbs.co.kr/outer/stock/stock_cts.jsp",'sbs','scrollbars=yes,width=200,height=460,left=0,top=0,resizable=no');
}
/* ### �Ѱ� ���� ��ũ 2011-10-27 ### */
function goHKN(){
	window.open("http://biz.wowtv.co.kr/export/hi-ib/wowbox.asp",'hk','scrollbars=yes,width=420,height=590,left=0,top=0,resizable=no');
}
/* ### FN ���̵� ��ũ 2011-07-06 ### */
function goFNG(){
	window.open("http://comp.fnguide.com/SVO/fnCompany.asp?cID=46&menuID=99",'fng','scrollbars=yes,width=1024,height=800,left=0,top=0,resizable=yes');
}
/* ### ����� ��ũ 2024-02-19 ### */
function goSrin(){
	window.open("https://hi-ib.applyin.co.kr/",'srin','scrollbars=yes,width=1350,height=1000,left=0,top=0,resizable=yes');
}
/* ### ����� ���������� ��ũ 2024-02-19 ### */
function goSrinPro(){
	window.open("https://hi-ib.applyin.co.kr/jobs",'srinpro','scrollbars=yes,width=1350,height=1000,left=0,top=0,resizable=yes');
}
/* ### �Һ��� �г� ��ũ 2022-10-17 ### */
function goConPanl(){
	window.open("https://www.hi-ib.com/images/notice/consumer_panel/index.html",'conpanl','scrollbars=yes,width=1350,height=1000,left=0,top=0,resizable=yes');
}
/* ### �������� ��ũ 2012-10-30 ### */
function goPension(gbn){
	switch(gbn){
		case 1:
			window.open("http://dis.kofia.or.kr/fs/dis2/com/COMOutItemAnn.jsp?mGbn=A&certifyKey=C8491B0013DA17F7E044001E0B83F1E3",'frame','scrollbars=yes,width=1200,height=650,left=0,top=0,resizable=yes');
			break;
		case 2:
			window.open("http://dis.kofia.or.kr/fs/dis2/com/COMOutItemAnn.jsp?mGbn=B&certifyKey=C8491B0013DA17F7E044001E0B83F1E3",'frame','scrollbars=yes,width=1200,height=650,left=0,top=0,resizable=yes');
			break;
		case 3:
			window.open("/mall/fund_product/pension/20121030_pension_core.pdf",'frame','scrollbars=yes,width=940,height=860,left=0,top=0,resizable=no');
			break;
		case 4:
			window.open("/mall/fund_product/pension/20121030_pension_core.pdf",'frame','scrollbars=yes,width=940,height=860,left=0,top=0,resizable=no');
			break;
		case 5:
			window.open("http://dis.kofia.or.kr/fs/dis2/com/COMOutItemAnn.jsp?mGbn=C&certifyKey=C8491B0013DA17F7E044001E0B83F1E3",'frame','scrollbars=yes,width=1200,height=650,left=0,top=0,resizable=yes');
			break;
		case 6:
			window.open("http://dis.kofia.or.kr/fs/dis2/com/COMOutItemAnn.jsp?mGbn=D&certifyKey=C8491B0013DA17F7E044001E0B83F1E3",'frame','scrollbars=yes,width=1200,height=650,left=0,top=0,resizable=yes');
			break;
		case 7:
			window.open("https://www.fss.or.kr/fss/lifeplan/goodsCmpr/list.do?menuNo=200961",'frame','scrollbars=yes,width=1200,height=860,left=0,top=0,resizable=yes');
			break;
		case 8:
			window.open("https://www.fss.or.kr/fss/lifeplan/goodsCmpr/list.do?menuNo=200961",'frame','scrollbars=yes,width=1200,height=860,left=0,top=0,resizable=yes');
			break;
	}
}
function goPensionOrg(){
	window.open('http://csa.nps.or.kr/main.do','_pension_org','titlebar=no,toolbar=no,resizable=yes,width=1024,height=800');
}
function goKofia(){
	window.open('https://dis.kofia.or.kr/websquare/index.jsp?w2xPath=/wq/fundann/DISFundSalRtn.xml&divisionId=MDIS01013004000000&serviceId=SDIS01013004000','_kofia','titlebar=no,toolbar=no,resizable=yes,width=1250,height=850');
}
function goOpenWeb(_val){
	if('Y'==_val) window.open("https://openweb.hi-ib.com:8443/company_info/ci.jsp", "_openWebBrowser",'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,left=10,top=100,height=900,width=1240');
	else{
		window.open("https://www.hi-ib.com", "_hiWebBrowser",'toolbar=1,location=1,menubar=1,scrollbars=1,resizable=1,left=10,top=100,height=900,width=1240');
		self.close();
	}
}
function goFee(){
	window.open("https://www.hi-ib.com/popup/fee.html",'fee','scrollbars=yes,width=830,height=540,left=0,top=0,resizable=yes');
}
function _goOpenWebPage(data){
	goMainPage(data[0][0]['returnPage']);
}
function _goHome(){
	top.main.location.href = "/main/main.html";
}
function goCertCenter(){
	location.href = "/banking/cert_center/ba0402.jsp";
}

/* ### FOOTER �޴� ��ũ### */
function goFooterLinkMenu(linkNum){ // �ϴ� Footer �޴�
	var _url = '';
	var isPop = false;
	switch(linkNum){
		case 0:		// ��� ���ǻ���
			_url = "/center/stipul_atten/ct0802.jsp?id=10";
			break;
		case 1:		// ��������ó��/��޹�ħ
			_url = "/center/stipul_atten/ct0803.jsp";
			break;
		case 2:		// ��ֽô�ó���
			_url = "/center/stipul_atten/ct0802.jsp?id=4";
			break;
		case 3:		// ��������
			_url = "/popup/LegalNotice.html";
			isPop = true;
			break;
		case 4:		// ��ǰ���ý�
			_url = "http://dis.kofia.or.kr/fs/dis2/com/COMOutItemAnn.jsp?certifyKey=56b5dcf368687fc83006dbd912ef0320168-7b83";
			isPop = true;
			break;
		case 5:		// ��ȣ������ǰ���
			_url = "/center/stipul_atten/ct0802.jsp?id=9";
			break;
		case 6:		// �����ټ���å
			_url = "/popup/web_accessibility.html";
			isPop = true;
			break;
		case 7:		// �������α׷���ġ
			_url = "/userinfo/popup/install.jsp";
			break;
		case 8:		// ȸ��Ұ�
			_url = "/company_info/ci.jsp";
			break;
		case 9:		// �������ȳ�
			_url = "/company_info/hi_ib/ci05.jsp";
			break;
		case 10:	// ���ڱ�����Ģ
			_url = "/mobile/common/pdf_view.jsp?pCode=C_G002|76";
			isPop = true;
			break;
		case 11:	// �ο���û
			_url = "redirectUrl=/center/advice/ct070301.jsp";
			break;
		case 12:	// ����������Ʈ ����
			_url = "/center/advice/ct0701.jsp";
			break;
		case 13:	// �ؿ��ֽ� ����ũ
			_url = "/center/advice/ct070101.jsp";
			break;
	}
	if(isPop){
		var popWidth  = 818;
		var popHeight = 530;
		if(linkNum==4){
			popWidth  = 800;
			popHeight = 610;
		}
		else if(linkNum==10){
			popWidth  = 800;
			popHeight = 600;
		}
		var _footP = window.open(_url, '_footPop'+linkNum,'titlebar=no,toolbar=no,resizable=yes,width='+popWidth+',height='+popHeight);
		_footP.focus();
	}
	else{
		goMainPage(_url);
	}
}

/* ### ó���̼��� �޴� ��ũ### */
function firstBegin(idx){
	var url = "";
	switch (idx) {
	case 0 :
		url = "/center/first_beginner/ct01.jsp";
		break;

	case 1 :
		url = "/center/first_beginner/ct0101.jsp";
		break;

	case 2 :
		url = "/center/first_beginner/ct0201.jsp";
		break;

	case 3 :
		url = "/center/first_beginner/ct0301.jsp";
		break;

	case 4 :
		url = "/center/first_beginner/ct0401.jsp";
		break;

	case 5 :
		url = "/center/first_beginner/ct0501.jsp";
		break;
	}

	var firstBeginner;
	firstBeginner = window.open (url,"NewWindow","left=0, top=0, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=400, height=770");
	firstBeginner.focus();
}
/* ### �¶��� ���� �ȳ� �޴� ��ũ(2013-07-02)### */
function onlineGuide(idx){
	var url = "";
	switch (idx) {
		case 1 :	url = "/main/onlineguide/og_010101.html";	break;
		case 2 :	url = "/main/onlineguide/og_020101.html";	break;
		case 3 :	url = "/main/onlineguide/og_030101.html";	break;
		case 4 :	url = "/main/onlineguide/og_040101.html";	break;
		case 5 :	url = "/main/onlineguide/og_050101.html";	break;
		case 6 :	url = "/main/onlineguide/og_060101.html";	break;
		case 7 :	url = "/main/onlineguide/og_070101.html";	break;
		case 8 :	url = "/main/onlineguide/og_080101.html";	break;
		case 9 :	url = "/main/onlineguide/og_090101.html";	break;
		case 10 :	url = "/main/onlineguide/og_100101.html";	break;
	}
	window.open(url,"NewWindow2","left=0, top=0, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=auto, width=931, height=775");
}

/* ### ���α׷� �ٿ�ε� ### */
function urlReturn(chk){
	if (navigator.userAgent.toUpperCase().indexOf("MOBILE") != -1){
		alert("�����Ͻ� ����� ���� ���Ȼ��� ������ PC���������� �α��� �� �̿� �����մϴ�. �̿뿡 ������ ��� �˼��մϴ�.");
		return;
	}
	var f = document.frm;
	var url_ = '/center/iframe/ct0104I01.jsp';
	f.target = 'download';
	f.chk.value = chk;
	f.action = url_;
	f.method = 'post';
	f.submit();
}



//���� js / css�ε�
function loadjscssfile(filename, filetype){
	if (filetype=="js"){ //if filename is a external JavaScript file
		var fileref=document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", filename);
	} else if (filetype=="css"){ //if filename is an external CSS file
		var fileref=document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref!="undefined")
	document.getElementsByTagName("head")[0].appendChild(fileref);
}

//�޴� �ε���
function getDetailMenuData(topId, target){
	$('.btn_gnb_depth').removeClass('open');
	$('.btn_gnb_depth').addClass('close');
	$('.btn_gnb_depth').text('��ġ��');
	// $.ajax({
	// 	url: '/menu/get2DepthMenu.jsp?topId='+ topId,
	// 	type: 'post',
	// 	cache: false,
	// 	contentType: 'application/x-www-form-urlencoded;charset=utf-8',
	// 	dataType: 'html',
	// 	success: function(data){
	// 		$(target).html(data);
	// 	},
	// 	error: function (XMLHttpRequest, textStatus, errorThrown) {
	// 		alert("error :"+XMLHttpRequest.responseText);
	// 	}
	// }, 1000);
}

//���޴� ��ũ
function getMyMenu(){
	$.ajax({
		url: '/menu/getMyMenu.jsp',
		type: 'post',
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=utf-8',
		dataType: 'html',
		success: function(data){
			$('#_myMenu').html(data);
			$('.myMenu').css('display','');
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert("error :"+XMLHttpRequest.responseText);
		}
	}, 1000);
}
function hideMyMenu(){
	$('.myMenu').css('display','none');
}
/* ### ��������### */
function saveBanking(idx){
	var url_ = "";
	switch(Number(idx)){
		case 0 :	// ���̽�Ź��
			url_ = "https://sb.koreainvestment.com/?MNG-STK003&PRDT_DCL_CD=0008#";
			break;
	
		case 1 :	// ���̽�Ź��
			url_ = "https://www.nhsavingsbank.co.kr/?stock=buystock";
			break;
	
		case 2 :	// ��ť�¼ָ��� 
			url_ = "https://www.acuonstockloan.co.kr/sv_adv0510101.act";
			break;
	
		case 3 :	// ���̷�
			url_ = "http://st.kbcapital.co.kr/HI.action";
			break;
	}
	var _saveBank;
	_saveBank = window.open (url_,"_saveBank","left=0,top=0,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1024,height=768");
	_saveBank.focus();
}
function goSearch(title){
	if(title==''){
		alert("�˻�� �Է��� �ּ���");
		return;
	}
	var param = {};
	param.chk = title;
	var f = _runTimeForm(param, 'post');
	f.target = "_self";
	f.action = '/menu/site_list.jsp';
	document.body.appendChild(f);
	f.submit(); 
}

let orgHeight = new Array();
let windowWidth;
$(document).ready(function(){
	windowWidth = $(window).width()
	$(document).ready(function(){
		$('body').show();
	});
	styleHeader()
	setGnb();
	setSnb();

	$(window).resize(function(){
		windowWidth = $(window).width()
	})
});

// gnb
var isCompany=false;
var isSubOpenClicked = false;
var isHover = false;
function setGnb(){
	hoverGnb();
	actionGnb();
	foldDepth();
}
function setISCompany(isComp){
	isCompany = isComp;
}
function isSubOpenClieck(isClicked){
	isSubOpenClicked = isClicked;
}
// gnb ���ν�Ÿ��
function styleHeader(){
	if(!$('body').find('#container_body2').length > 0){
		$('#container').siblings('#header_wrap').css({
			'border-bottom' : "2px solid #006edf"
		})
	}
}
// gnb hover ��Ÿ�� ����
function hoverGnb(){
	$('#gnb_wrap .depth01 > ul > li').click(function(){
		isSubOpenClieck(true);
		__hoverGnb($(this));
	});
	$('#gnb_wrap .depth01 > ul > li').hover(function(){
		__hoverGnb($(this));
	}, function(){
		$('.bg-gnb').hide();
		$(this).find('.bg-gnb').css('height', orgHeight[$(this).index()]);
		deleteGnbDim();
		$(this).find('.depth04').hide();
		$(this).find('.btn-fold').removeClass('on').addClass('off');
		$(this).find('.btn-fold').text('��ü ��ġ��');
		$(this).find('.depth03 > ul > li').removeClass('active');
		$(this).find('.mCustomScrollBox').css('max-height', 'none');

		$('body').css('overflow-x', '');
	});
}
function __hoverGnb(thisObj){
	isHover = true;
	thisObj.find('.bg-gnb').css('height', orgHeight);
	if(!isCompany){
		if(isSubOpenClicked){
			let codeNum = thisObj.children('a').data('code');
			
			if(thisObj.find('.depth02').length <= 0){
				thisObj.append("<div class='bg-gnb'></div>");
				thisObj.append('<div class="depth02"></div>');
				thisObj.find('.depth02').prepend('<button class="btn-fold off">��ü ��ġ��</button>');
				
				hoverPar(thisObj, codeNum);
				makeGnbDim();
				thisObj.find('.bg-gnb').css('height', orgHeight[thisObj.index()]);
			} else {
				thisObj.find('.bg-gnb').show();
				thisObj.find('.bg-gnb').css('height', orgHeight[thisObj.index()]);
				makeGnbDim();
			}

			$('body').css('overflow-x', 'hidden');
		}
	}
}
function hoverPar(target, topId){
	$.ajax({
		url: '/menu/get2DepthMenu.jsp?topId='+ topId,
		type: 'post',
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=utf-8',
		dataType: 'html',
		success: function(data){	
			if(target.find('.depth02').length > 0){
				target.find('.depth02').append('<ul>' + data + '</ul>');
				target.find('.bg-gnb').css({
					'width' : windowWidth,
					'height': target.find('.depth02').outerHeight()
				});
				orgHeight[target.index()] = target.find('.depth02').outerHeight();
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown){
			alert("error :"+XMLHttpRequest.responseText);
		}
	});
}

function actionGnb(){
	$(document).on('click', '#gnb_wrap .depth03 > ul > li > a', function(){
		$('#gnb_wrap .depth03 > ul > li').not($(this).closest('li')).removeClass('active');
		$('#gnb_wrap .depth04').not($(this).siblings('.depth04')).hide();

		if(!$(this).closest('li').hasClass('active')){
			$(this).closest('li').addClass('active');
			$(this).siblings('.depth04').show();
		} else {
			$(this).closest('li').removeClass('active');
			$(this).siblings('.depth04').hide();
		}

		checkedGnbHeight($(this));
	})
}
// gnb 4���� ��ü ����/��ġ��
function foldDepth(){
	$(document).on('click', '#gnb_wrap .depth02 .btn-fold', function(){
		$(this).closest('.depth02').children('ul').mCustomScrollbar({
			autoDraggerLength: true,
			autoHideScrollbar: true,
			scrollInertia: 0
		});
		checkedGnbHeight($(this));
		if($(this).hasClass('on')){
			$(this).removeClass('on').addClass('off');
			$(this).text('��ü ��ġ��');
			$(this).closest('.depth02').find('.depth04').hide();
			$(this).closest('.depth02').find('.depth03 > ul > li').removeClass('active');
			checkedGnbHeight($(this));
		} else {
			$(this).removeClass('off').addClass('on');
			$(this).text('����');
			$(this).closest('.depth02').find('.depth04').show();
			$(this).closest('.depth02').find('.depth03 > ul > li').addClass('active');
			checkedGnbHeight($(this));
		}
	})
}
// gnb ���̰� üũ�Ͽ� ��� ����
function checkedGnbHeight(target){
	$('.bg-gnb').css({
		'height': target.closest('.depth02').outerHeight()
	});
}
// gnb ���� dim ����
function makeGnbDim(){
	if($('body').find('.gnb-dim').length <= 0){
		$('body').append("<div class='gnb-dim' style='width: " + $(window).innerWidth() + "px;'></div>");
	}
}
// gnb ���� dim ����
function deleteGnbDim(){
	$('.gnb-dim').remove();
}
function saveGnbHeight(target){
	let thisHeight = target.outerHeight();
	return thisHeight;
}
// snb
function setSnb(){
	initSnb();
	actSnb();
}
function initSnb(){
	$('.sub_menu .depth03 > ul > li').each(function(){
		if($(this).hasClass('active')){
			$(this).find('.depth04').show();
		}
		if($(this).find('.depth04').length > 0) {
			$(this).addClass('fold');
			$(this).children('a').click(function(e){
				e.preventDefault();
			})
		}
	});
}
function actSnb(){
	$('.sub_menu .depth03 > ul > li > a').click(function(){
		if($(this).closest('li').hasClass('active')){
			$('.sub_menu .depth03 > ul > li').removeClass('active');
			$(this).closest('li').find('.depth04').hide();
			$(this).closest('li').removeClass('active');
		} else {
			$('.sub_menu .depth03 > ul > li').not($(this).closest('li')).removeClass('active');
			$('.sub_menu .depth04').not($(this).siblings('.depth04')).hide();
			$(this).closest('li').find('.depth04').show();
			$(this).closest('li').addClass('active');
		}
	})
}
/** JSObject to JqueryObject **/
function closetToggle(obj){
	if($(obj).closest("li").hasClass('open')) {
		$(obj).closest("li").removeClass('open');
		$(obj).closest("li").addClass('close');
	} else {
		$(obj).closest("li").removeClass('close');
		$(obj).closest("li").addClass('open');
	}
};
/** JSObject to JqueryObject **/
/*���鸵ũ�߼�*/
function goSMS(){
	window.open("/popup/smsiM.html", "_sms", "width=580, height=250, scrollbars=no, resizable=yes, top=" + (screen.height/2) + ", left=" + (screen.width/2) + ", toolbar=no, location=no, status=no, menubar=no");	
}