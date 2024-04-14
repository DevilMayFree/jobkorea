var _MXLoginStatus=0;
function main_project(_e){
	switch(_e){
		case 'r1': goSrinPro(); break;
		case 'r2': goMenuUrl('/center/tool_intro/ct0311.jsp','000'); break;
		case 'r3': window.open('https://youtube.com/@hi-ib','youtube','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=1250,height=900'); break;
		case 'e1': goMenuUrl('/_tprss/center/event/ct060201.jsp?tr_cd=db/board/TWBBACL/board_view&bid=C_E001&aid=183','000'); break;
		case 'e6': goMenuUrl('/_tprss/center/event/ct060201.jsp?tr_cd=db/board/TWBBACL/board_view&bid=C_E001&aid=186','000'); break;
		case 'e7': window.open("/event/event20221128.html","new_popup","resizable=1,scrollbars=1,width=915px, height=915px"); break;
		case 'eL': goMenuUrl('/_tprss/center/event/ct0602.jsp?tr_cd=db/board/TWBBACL/board_list&bid=C_E001','000'); break;
		case 'q1': goMenuUrl('wtsUrl=/wTrade/WebTS/order/wt0201.jsp','400'); break;
		case 'q2': goMenuUrl('/banking/bank_trans/ba000101.jsp','300'); break;
		case 'q3': goMenuUrl('/banking/deposit_loan/ba020101.jsp','000'); break;
		case 'q4': goMenuUrl('/center/tool_intro/ct0301.jsp','000'); break;
		case 'q5': goMenuUrl('/mall/fund_product/ml0001.jsp?searchType=ALL','000'); break;
		case 'q6': goMenuUrl('/center/advice/ct070601.jsp','000'); break;
		case 'q7': goMenuUrl('/center/advice/ct070301.jsp','000'); break;
		case 'q8': goMenuUrl('/banking/bank_trans/ba0005.jsp','300'); break;
		case 'q9': goMenuUrl('/userinfo/ui3_030100.jsp','100'); break;
		case 'f1': goMenuUrl('/center/business_intro/ct02010401.jsp','000'); break;
		case 'f2': goMenuUrl('/userinfo/ui1_010101.jsp','000'); break;
		case 'f3': goMenuUrl('/banking/cert_center/ba0401.jsp','000'); break;
		case 'f4': goMenuUrl('/center/tool_intro/ct0301.jsp','000'); break;
		case 'f5': goMenuUrl('/banking/bank_trans/ba000101.jsp','300'); break;
		case 'p1': goMenuUrl('/center/business_intro/ct02010401.jsp','000'); break;
		case 'p2': goMenuUrl('/center/tool_intro/ct0311.jsp','000'); break;
		case 'p3': window.open("/popup/secu_card.html","new_popup","resizable=1,scrollbars=1,width=815px, height=930px"); break;
		case 'p4': goMenuUrl('/center/advice/ct070301.jsp','000'); break;
		case 'p5': window.open("/popup/mainPop.html","new_popup","resizable=1,width=321px,height=675px"); break;
		case 'd1': urlReturn('15'); break;
		case 'd2': window.open("https://www.yesstock.com/Download/YesTrader4Setup.exe","yesstock","resizable=1,width=1px,height=1px"); break;
		case 'm1': goMenuUrl('/userinfo/ui1_010101.jsp','000'); break;
		case 'm2': goMenuUrl('/userinfo/ui4_040101.jsp','000'); break;
		case 'm3': _loginOper(_MXLoginStatus); break;
		case 'm4': goMenuUrl('/banking/cert_center/ba0401.jsp','000'); break;
		case 'nL': goMenuUrl('/research/bussiness_indust/re0203.jsp?bid=C_A001','000'); break;
		case 'n1': goMenuUrl('/research/bussiness_indust/re0203.jsp?bid=O_S001','000'); break;
		case 'iM': goMenuUrl('/research/re.jsp','000'); break;
		case 'i1': goMenuUrl('/research/bussiness_indust/re00_list.jsp?bid=R_E08','000'); break;
		case 'i2': goMenuUrl('/research/bussiness_indust/re00_list.jsp?bid=R_E09','000'); break;
		case 'i3': goMenuUrl('/research/bussiness_indust/re00_list.jsp?bid=R_E03','000'); break;
		case 'i4': goMenuUrl('/research/bussiness_indust/re00_list.jsp?bid=R_E04','000'); break;
		case 'i5': goMenuUrl('/research/bussiness_indust/re00_list.jsp?bid=R_E110','000'); break;
		case 'i6': goMenuUrl('/research/bussiness_indust/re00_list.jsp?bid=R_E05','000'); break;
		case 'i7': goMenuUrl('/research/bussiness_indust/re00_list.jsp?bid=R_E010','000'); break;
		case 'i8': window.open('https://youtube.com/@hi-ib','youtube','titlebar=no,toolbar=no,resizable=yes,scrollbars=yes,width=1250,height=900'); break;
		case 'F1': goMenuUrl('/mall/fund_product/ml0001.jsp?searchType=ALL','000'); break;
		case 'F2': goMenuUrl('/mall/fund_product/ml0001.jsp?searchType=ALL&sort=2','000'); break;
		case 'F3': goMenuUrl('/mall/fund_product/ml0001.jsp?searchType=ALL&sort=22','000'); break;
		case 'T1': goMenuUrl('/research/bussiness_indust/re00_list.jsp?bid=RMHV','000'); break;
		case 'T2': main_popup('/mobile/research/rs05P1.jsp'); break;
		case 'T3': goMenuUrl('/online/right_subs/on030501_01.jsp','300'); break; //청약신청화면
	}
}
function setMainJisu(){
	$.ajax({
		url: '/upload/main/info/main_sise.json',
		type: 'post',
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=utf-8',
		dataType: 'json',
		success: function(data){
			var infos = data[0];
			for(var i=0;i<infos.length;i++){
				var info = infos[i];
				var _key = info['key'];
				if(_key!=''){
					var _class = '';
					var _diff = info['diff'].substring(0,1);
					var _difv = info['diff'].substring(1);
					if(_diff=='+') _class = 'stat_up';
					else if(_diff=='-') _class = 'stat_down';
					else _difv = info['diff'];
					$('#'+_key).removeClass();
					$('#'+_key).addClass(_class);
					$('#'+_key+'_jisu').html(info['curr']);
					$('#'+_key+'_per').html(_difv);
				}
			}
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log("error :"+XMLHttpRequest.responseText);
		}
	 });
}
function getHtmlPortfolio(obj, isLong){
	var pre_ = 's_';
	if(isLong) pre_ = 'm_';
	var _html = '<li onclick="main_project(\'T2\')"><div class="cts">';
		_html += '<p class="item_tit">'+obj[pre_+'jname']+'</p>';
		_html += '<ul class="data_list"><li><span class="tit">편입일</span><span class="data date">'+obj[pre_+'regdt']+'</span></li>';
		_html += '<li><span class="tit">편입기준가</span><span class="data won1">'+obj[pre_+'stval']+'</span></li>';
		var dtval = obj[pre_+'dtval'].substring(0,1)=='-'?obj[pre_+'dtval'].substring(1):obj[pre_+'dtval'].substring(0,1)=='+'?obj[pre_+'dtval'].substring(1):obj[pre_+'dtval'];
		_html += '<li><span class="tit">전일종가</span><span class="data won1">'+dtval+'</span></li>';
		var _class = obj[pre_+'dtprf'].substring(0,1)=='-'?'down':'avr';
		_html += '<li><span class="tit">수익률</span><span class="data '+_class+'">'+obj[pre_+'dtprf']+' %</span></li>';
		_html += '</ul></div></li>';
	return _html;
}
function setHiKickPortfolio(){
	$.ajax({
		url: '/upload/main/info/hiKick.json',
		type: 'post',
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=utf-8',
		dataType: 'json',
		success: function(data){
			var infos1 = data[0]; 
			for(var i=0;i<infos1.length;i++) $('#longList').append(getHtmlPortfolio(infos1[i], true));
			var infos2 = data[1];
			for(var i=0;i<infos2.length;i++) $('#shortList').append(getHtmlPortfolio(infos2[i], false));
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log("error :"+XMLHttpRequest.responseText);
		}
	 });
}
function ellipsis(len){
	for(var i=0;i<$('.ellipsis').length;i++) $('.ellipsis').eq(i).dotdotdot({maxLength:len});
}
function showTopMainBanner(){
//	var head_html = '<div class="inner"><img src="/images/main/2017/hd_banner01.jpg" alt="증권회사와의 거래는 반드시 본인계좌를 이용하세요 증권회사 직원 개인 계좌를 통한 거래는 사고 위험성 높고 피해금액 보전이 되지 않습니다" /><button type="button" class="hgbtn btn_bn_close" onclick="top_bn_close();">상단 배너 닫기</button></div>';
	var head_html = '<div class="inner"><img src="/images/main/banner/header_banner20211231.jpg"><button type="button" class="hgbtn btn_bn_close" onclick="top_bn_close();">상단 배너 닫기</button></div>';
	$('#header_banner').html(head_html);
	$('#header_banner').css('display','none');

    //if ( document.cookie.indexOf("Popup_20201113") < 0 ) main_project('p5');
}
$(document).ready(function (){
	setMainJisu();
	setInterval(setMainJisu, 60000);
	getInformation();
	setInterval(getInformation, 60000);
	var navVersion = navigator.appVersion;
	if(navVersion.indexOf("MSIE 8")>0 || navVersion.indexOf("MSIE 7")>0){
		if(confirm("사용중이신 브라우저는 버전이 낮아서 당사의 금융서비스를 \n이용하기 어렵습니다.\n\n이용가능한 브라우저로 버전업을 하실 수 있는 페이지로 \n이동하시겠습니까?")){
			location.href = "/center/tool_intro/ct03010.jsp";
		}
	}
	ellipsis(30);
	showTopMainBanner();
	document.getElementById("defaultOpen").click();

	getPopupInfo();
});
function view_notece(bid,aid,_height){
	var hegh = 830;
	if(_height) hegh = _height;
	var newWin = window.open('',"research_view", "titlebar=no,scrollbars=yes,toolbar=no,resizable=yes,width=818,height="+hegh);
	var f = document.frm;
	f.bid.value = bid;
	f.aid.value = aid;
	f.redirectUrl.value = '/research/popup/re0203P1.jsp';
	f.action = "/inc/common/redirectPostPage.jsp";
	f.target = "research_view";
	f.submit(); 
	newWin.focus();
}
function view_research(bid,aid){
	view_notece(bid,aid);
}
function firstBegin(url){
	var firstBeginner = window.open (url,"firstBeginner","left=0, top=0, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, width=400, height=770");
	firstBeginner.focus();
}
function main_popup(url){
	var new_popup = window.open(url,"new_popup","resizable=1,scrollbars=1");
	new_popup.focus();
}
function main_rollproject(){
	for(var i=0;i<$(".mv_el").length;i++){
		if($(".mv_el").eq(i).css('opacity')==1){
			main_project('r'+i);
			break;
		}
	}
}
var infoKey = '2023/12$1$1$2';
var infoKey2 = '2023/10$1$1$2';
function getInformation(){
	$.ajax({
		url: '/common/heap/competition.json',
		type: 'post',
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=utf-8',
		dataType: 'json',
		success: function(data){
			setInformation(data['COMPETITION_RATE']);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			alert(errorThrown.message);
		}
	});
}
function setInformation(data){
	for(var i in data){
		if(data[i]['p_a64'] == infoKey){
			_setInfo(data[i],1);
		}else if(data[i]['p_a64'] == infoKey2){
			_setInfo(data[i],2);
		}
	}
}
function _getDecodeTitle(obj){
	return decodeURI(obj).split('+').join(' ');
}
function _setInfo(obj,i){
	$('#p_a52_'+i).html(_getDecodeTitle(obj['p_a52']));
	$('#p_a55_'+i).html(_getDecodeTitle(obj['p_a55']));
	$('#p_a65_'+i).html(obj['p_a65']);
	$('#p_a66_'+i).html(obj['p_a66']);
	$('#p_a67_'+i).html(obj['p_a67']);
}
function goCompetitionPop(key){
	var competitonUrl = 'https://www.hi-ib.com/mobile/common/competition_rate.html?key='+key;
	window.open(competitonUrl, '', 'width=500, height=920');
}
function popClose(){
	$('#myModal').css('display','none');
}
function openCity(evt, cityName){
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";

	if(cityName == "Oversea"){
		document.getElementById("btn_notice").setAttribute("onclick","main_project('n1');");
	}else{
		document.getElementById("btn_notice").setAttribute("onclick","main_project('nL');");
	}
}
function goNoticeList(){
	if($('#Notice').is(':visible')) main_project('nL');
	else if($('#Oversea').is(':visible')) main_project('n1');
}
function goInvestList(){
	if($('#i8').is(':visible')) main_project('i8');
	else main_project('i4');
}
function getPopupInfo(){
	var popupCookie = fncGetCookie("_checkPop");
	if(popupCookie == ""){
		$('#layer_pop').css('display','');
	}
}
/*function closePopup(){
	if($('#checkPop').is(':checked')){
		fncSetCookie("_checkPop","checked",7);
		$('#layer_pop').css('display','none');
	}else{
		$('#layer_pop').css('display','none');
	}
}*/
