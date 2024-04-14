
// 공지사항
(function($){
	$(document).ready(function(){
		$("#notice_tab div").hide();
		$("#notice_tab div:eq(0)").show();

		$("#notice_tab h2 a").bind("click",function(){
			$("#notice_tab div").hide();
			$(this).parent().next().show();

			//버튼색상활성화
			$("#notice_tab h2 img").each(function(){
				$(this).attr("src",$(this).attr("src").replace("on.gif","off.gif"));
			});
			$(this).children().attr("src", $(this).children().attr("src").replace("off.gif","on.gif"));
		});

		/* 온라인 가이드 텝 */
		$("#guide_tab div").hide();
		$("#guide_tab div:eq(0)").show();

		$("#guide_tab h2 a").bind("click",function(){
			$("#guide_tab div").hide();
			$(this).parent().next().show();

			//버튼색상활성화
			$("#guide_tab h2 img").each(function(){
				$(this).attr("src",$(this).attr("src").replace("on.gif","off.gif"));
			})
			$(this).children().attr("src", $(this).children().attr("src").replace("off.gif","on.gif"));
		});
	});

	$(document).ready(function(){
		$("#stocks_tab div").hide();
		$("#stocks_tab div:eq(0)").show();

		$("#stocks_tab h2 a").bind("click",function(){
			$("#stocks_tab div").hide();
			$(this).parent().next().show();

			//버튼색상활성화
			$("#stocks_tab h2 img").each(function(){
				$(this).attr("src",$(this).attr("src").replace("on.gif","off.gif"));
			})
			$(this).children().attr("src",
			$(this).children().attr("src").replace("off.gif","on.gif"));
		});
	});

	$(document).ready(function(){
		$("#login_tab div").hide();
		$("#login_tab div:eq(0)").show();

		$("#login_tab h3 a").bind("click",function(){
			$("#login_tab div").hide();
			$(this).parent().next().show();

			//버튼색상활성화
			$("#login_tab h3 img").each(function(){
				$(this).attr("src",$(this).attr("src").replace("on.gif","off.gif"));
			})
			$(this).children().attr("src",
			$(this).children().attr("src").replace("off.gif","on.gif"));
		});
	});

	$(document).ready(function(){
		$("#login_tab0 div").hide();
		$("#login_tab0 div:eq(0)").show();

		$("#login_tab0 h3 a").bind("click",function(){
			$("#login_tab0 div").hide();
			$(this).parent().next().show();

			//버튼색상활성화
			$("#login_tab0 h3 img").each(function(){
				$(this).attr("src",$(this).attr("src").replace("on.gif","off.gif"));
			})
			$(this).children().attr("src",
			$(this).children().attr("src").replace("off.gif","on.gif"));
		});
	});




	// 빠른서비스
	$(document).ready(function(){
		$(".parent").jSpotlight({title_effect: "slide"});
	});


	// 쿼리효과 컨트롤
	$(document).ready(function($){
		$("#open_mapop").click(function(){
			$("#pop1").slideToggle(180);
		});
		$("#closs_mapop").click(function(){
			$("#pop1").slideToggle();
		});

		$("#open_loginall").click(function(){
			$("#loginsalI1").slideToggle(280);
			$("#loginsalI").toggle();
		});
		$("#closs_loginall").click(function(){
			$("#loginsalI1").slideToggle();
			$("#loginsalI").hide();
		});

		$("#open_suballId").click(function(){
			$("#suballId").slideToggle(280);
			$("#suballId1").toggle();
			$("#myacsset1").toggle();
		});
		$("#closs_suballId").click(function(){
			$("#suballId").slideToggle();
			$("#suballId1").hide();
			$("#myacsset1").hide();
		});
		$("#closs1_suballId").click(function(){
			$("#suballId").slideToggle(280);
			$("#suballId1").hide();
			$("#myacsset1").hide();
		});

	  $("#open_bbox1").click(function(){
		$("#bbox2").fadeOut("");
		$("#open_bbox1").hide();
		$("#open_bbox12").show();
		$("#open_bbox2").show();
		$("#open_bbox22").hide();
		$("#bbox1").fadeToggle("200");
	  });
	  $("#open_bbox11").click(function(){
		$("#open_bbox1").show();
		$("#open_bbox12").hide();
		$("#bbox1").fadeOut("200");
	  });
	  $("#open_bbox2").click(function(){
		$("#bbox1").fadeOut("");
		$("#open_bbox1").show();
		$("#open_bbox12").hide();
		$("#open_bbox2").hide();
		$("#open_bbox22").show();
		$("#bbox2").fadeToggle("200");
	  });
	  $("#open_bbox21").click(function(){
		$("#bbox1").fadeOut("");
		$("#open_bbox2").show();
		$("#open_bbox22").hide();
		$("#bbox2").fadeOut("200");
	  });

		$("#open_family").click(function(){
			$("#open_family").hide();
			$("#close_family1").show();
			$("#box_family").show();
		});
		$("#close_family").click(function(){
			$("#open_family").show();
			$("#close_family1").hide();
			$("#box_family").hide();
		});

		$("#open_slowbox").click(function(){
			$("#slowbox").fadeToggle("slow");
		});
		$("#closs_slowbox").click(function(){
			$("#slowbox").fadeToggle("");
		});

		$("#close_service").click(function(){
			$("#sub_layout1").slideUp(280);
			$(".quick_open").show();
		});
		$("#open_service").click(function(){
			$("#sub_layout1").slideDown(280);
			$(".quick_open").hide();
		});

		$("#close_service").click(function(){
			$("#sub_layout2").slideUp(280);
			$(".quick1_open").show();
		});
		$("#open_service").click(function(){
			$("#sub_layout2").slideDown(280);
			$(".quick1_open").hide();
		});

		$("#open_calendar1").click(function(){
			$(".ly_popup").fadeToggle("");
		});
		$("#closs_calendar1").click(function(){
			$(".ly_popup").fadeToggle("");
		});

		$("#open_calendar2").click(function(){
			$(".ly_popup2").fadeToggle("");
		});
		$("#closs_calendar2").click(function(){
			$(".ly_popup2").fadeToggle();
		});
	});


	$(document).ready(function($){
		$("#open_111").mouseover(function(){
		//$("#open_nav_link").click(function(){
			$("#suballId").slideToggle(80);
		});
	});

	$(document).ready(function($){
		$("#check_inq").click(function(){
			if($("#check_inq").is(':checked'))	$("#m_cf").hide(300);
			else 	$("#m_cf").show(300);
		});
	});

})(jQuery);

// 메인 클릭
jQuery(function(){
	var article = $('#retebs1 .article');
	article.addClass('hide');
//	article.find('.top_menu').slideUp(300);
	$('#retebs1 .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.find('.top_menu').hide();
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.top_menu').slideDown(200);
		} else {
			article.removeClass('show').addClass('hide');
			article.find('.top_menu').slideUp(200);
		}
	});
});

jQuery(function(){
	var article = $('#retebs2 .article');
//	article.find('.top_menu').slideUp(300);
	$('#retebs2 .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			$("#retebs2 li a").removeClass("selected");
			$(this).addClass("selected");
			article.find('.top_menu').hide();
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.top_menu').slideDown(100);
		} else {
			$("#retebs2 li a").removeClass("selected");
			article.removeClass('show').addClass('hide');
			article.find('.top_menu').slideUp(100);
		}
	});
});

jQuery(function(){
	var article = $('#retebs3 .article');
//	article.find('.top_menu').slideUp(300);
	$('#retebs3 .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			$("#retebs3 li a").removeClass("selected");
			$(this).addClass("selected");
			article.find('.top_menu').hide();
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.top_menu').slideDown(100);
		} else {
			$("#retebs3 li a").removeClass("selected");
			article.removeClass('show').addClass('hide');
			article.find('.top_menu').slideUp(100);
		}
	});
});


// 마우스롤오버

function addLoadEvent(func){
	var oldonload = window.onload;
	if (typeof oldonload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
function overimg() {
	var imgs = document.getElementsByTagName('img');
	for (var i=0; i<imgs.length; i++) {
		if (imgs[i].className=='auto_over'){
			imgs[i].onmouseover = function(){
				var imgsrc = this.getAttribute('src');
				var imgover = imgsrc.replace('_on', '_off');
				this.setAttribute('src',imgover);
			}
			imgs[i].onmouseout = function(){
				var imgsrc = this.getAttribute('src');
				var imgover = imgsrc.replace('_off', '_on');
				this.setAttribute('src',imgover);
			}
		}
	}
}
addLoadEvent(overimg);

//아이프레임 자동 높이 조절
function resizeFrame(iframeObj){
	var innerBody = iframeObj.contentWindow.document.body;
	oldEvent = innerBody.onclick;
	innerBody.onclick = function(){ resizeFrame(iframeObj, 1);oldEvent; };
	var innerHeight = innerBody.scrollHeight + (innerBody.offsetHeight - innerBody.clientHeight);
	iframeObj.style.height = innerHeight;
	var innerWidth = innerBody.scrollWidth + (innerBody.offsetWidth - innerBody.clientWidth);
	iframeObj.style.width = innerWidth;
	if( !arguments[1] )		/* 특정 이벤트로 인한 호출시 스크롤을 그냥 둔다. */
	this.scrollTo(1,1);
}

//png ie6투명처리
function setPng24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='';
	return '';
}

// 즐겨찾기
function bookmark(){
	window.external.AddFavorite('http://www.hi-ib.com');
}

// FAQ 용
jQuery(function(){
	// 160121 쿼리사용 막음
	if ($('.faq').hasClass('false_ani')) {
		return false;
	};
	var article = $('.faq .article');
	article.addClass('hide');
	$('.faq .article .trigger').click(function(){
		var myArticle = $(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			article.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('.a').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('.a').slideUp(100);
		}
	});
});

// 도움말 메뉴용
jQuery(function(jQuery){
	// Side Menu
	var menu_v = jQuery('div.menu_v');
	var sItem = menu_v.find('>ul>li');
	var ssItem = menu_v.find('>ul>li>ul>li');
	var lastEvent = null;

	sItem.find('>ul').css('display','none');
	menu_v.find('>ul>li>ul>li[class=active]').parents('li').attr('class','active');
	menu_v.find('>ul>li[class=active]').find('>ul').css('display','block');

	function menu_vToggle(event){
		var t = jQuery(this);

		if (this == lastEvent) return false;
		lastEvent = this;
		setTimeout(function(){ lastEvent=null }, 200);

		if (t.next('ul').is(':hidden')) {
			sItem.find('>ul').slideUp(100);
			t.next('ul').slideDown(100);
		} else if(!t.next('ul').length) {
			sItem.find('>ul').slideUp(100);
		} else {
			t.next('ul').slideUp(100);
		}

		if (t.parent('li').hasClass('active')){
			t.parent('li').removeClass('active');
		} else {
			sItem.removeClass('active');
			t.parent('li').addClass('active');
		}
	}
	sItem.find('>a').click(menu_vToggle).focus(menu_vToggle);

	function subMenuActive(){
		ssItem.removeClass('active');
		jQuery(this).parent(ssItem).addClass('active');
	};
	ssItem.find('>a').click(subMenuActive).focus(subMenuActive);

	//icon
	menu_v.find('>ul>li>ul').prev('a').append('<span class="i"></span>');
});






// JavaScript Document


/*이미지 롤오버 */
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
	var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
	if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
	d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function chg01_out() {
MM_swapImage('g_02','','/images/m_notice_02.gif',1);
}

  function chg001_over() {
	MM_swapImage('g_01','','../images/helpguide/btn_contents_on.gif',1);
	MM_swapImage('g_02','','../images/helpguide/btn_ahead_off.gif',1);
	document.getElementById('noticeItem01').style.display='';
	document.getElementById('noticeItem02').style.display='none';
}
function chg002_over() {
	MM_swapImage('g_01','','../images/helpguide/btn_contents_off.gif',1);
	MM_swapImage('g_02','','../images/helpguide/btn_ahead_on.gif',1);
	document.getElementById('noticeItem01').style.display='none';
	document.getElementById('noticeItem02').style.display='';
}



function goto_site(){
	if(document.goto.family1.value!=''){
		window.open(document.goto.family1.value);
	}
	return false;
}

/* 메인용 탭버튼 */
function tabOn(tabid,a) {
	for (i=1;i<=10;i++) {
		if(i<10){inn="0"+i;} else {inn=""+i;}
		tabMenu = document.getElementById("tab"+tabid+"m"+i);
		tabContent = document.getElementById("tab"+tabid+"c"+i);
		tabMore = document.getElementById("tab"+tabid+"more"+i);
		if (tabMenu) {
		if (tabMenu.tagName=="IMG") { tabMenu.src = tabMenu.src.replace("on.gif", ".gif"); }
			if (tabMenu.tagName=="A") { tabMenu.className=""; }
		}
		if (tabContent) { tabContent.style.display="none"; }
		if (tabMore) { tabMore.style.display="none"; }

	}
	if(a<10){ann="0"+a;} else {ann=""+a;}
	tabMenu = document.getElementById("tab"+tabid+"m"+a);
	tabContent = document.getElementById("tab"+tabid+"c"+a);
	tabMore = document.getElementById("tab"+tabid+"more"+a);
//	alert(tabMenu.tagName);
	if (tabMenu) { //
		if (tabMenu.tagName=="IMG") { tabMenu.src = tabMenu.src.replace(".gif", "on.gif"); }
		if (tabMenu.tagName=="A") { tabMenu.className="on"; }
	}
	if (tabContent) { tabContent.style.display="block"; }
	if (tabMore) { tabMore.style.display="block"; }
}

function tab1On(tabid,a) {
	for (i=1;i<=10;i++) {
		if(i<10){inn="0"+i;} else {inn=""+i;}
		tabMenu = document.getElementById("tab"+tabid+"m"+i);
		tabContent = document.getElementById("tab"+tabid+"c"+i);
		tabMore = document.getElementById("tab"+tabid+"more"+i);
		if (tabMenu) {
		if (tabMenu.tagName=="IMG") { tabMenu.src = tabMenu.src.replace("on.gif", ".gif"); }
			if (tabMenu.tagName=="A") { tabMenu.className=""; }
		}
		if (tabContent) { tabContent.style.display="none"; }
		if (tabMore) { tabMore.style.display="none"; }

	}
	if(a<10){ann="0"+a;} else {ann=""+a;}
	tabMenu = document.getElementById("tab"+tabid+"m"+a);
	tabContent = document.getElementById("tab"+tabid+"c"+a);
	tabMore = document.getElementById("tab"+tabid+"more"+a);
//	alert(tabMenu.tagName);
	if (tabMenu) { //
		if (tabMenu.tagName=="IMG") { tabMenu.src = tabMenu.src.replace(".gif", "on.gif"); }
		if (tabMenu.tagName=="A") { tabMenu.className="on"; }
	}
	if (tabContent) { tabContent.style.display="block"; }
	if (tabMore) { tabMore.style.display="block"; }
}

function tab2On(tabid,a) {
	for (i=1;i<=10;i++) {
		if(i<10){inn="0"+i;} else {inn=""+i;}
		tabMenu = document.getElementById("tab"+tabid+"m"+i);
		tabMenu1 = document.getElementById("tab3m"+i);
		tabContent = document.getElementById("tab"+tabid+"c"+i);
		tabMore = document.getElementById("tab"+tabid+"more"+i);
		if (tabMenu) {
		if (tabMenu.tagName=="IMG") { tabMenu.src = tabMenu.src.replace("on.gif", ".gif"); }
			if (tabMore) { tabMenu.style.color=""; }
		}
		if (tabContent) { tabContent.style.display="none"; }
		if (tabMore) { tabMore.style.display="none"; }
	}
	if(a<10){ann="0"+a;} else {ann=""+a;}
	tabMenu = document.getElementById("tab"+tabid+"m"+a);
	tabContent = document.getElementById("tab"+tabid+"c"+a);
	tabMore = document.getElementById("tab"+tabid+"more"+a);
//	alert(tabMenu.tagName);
	if (tabMenu) { //
		if (tabMenu.tagName=="IMG") { tabMenu.src = tabMenu.src.replace(".gif", "on.gif"); }
		if (tabMore) { tabMenu.style.color="#20d7f6"; }
	}
	if (tabContent) { tabContent.style.display="block"; }
	if (tabMore) { tabMore.style.display="block"; }
}


/* 주식뱅킹 3차메뉴용 */

function initNavigation(seq) {
	var nav = document.getElementById("retebs1");
	nav.menu = new Array();

	if (nav.current) {
		eventNavigation(nav.current, false);
		nav.current = null;
	}

	nav.current = null;
	nav.original = null;
	nav.menuseq = 0;

	var navItem = null;
	for (var i = 0; i < nav.childNodes.length; i++) {
		navItem = nav.childNodes.item(i);
		if (navItem.tagName != "LI") continue;

		nav.menuseq++;
		navItem.anchor = navItem.getElementsByTagName("span").item(0);
		navItem.image = navItem.getElementsByTagName("img").item(0);
		navItem.submenu = navItem.getElementsByTagName("ul").item(0);

		navItem.firstChild.onfocus = function (e) {
			nav.isOver = true;

			if (nav.current) {  //이전 메뉴 초기화
				eventNavigation(nav.current, false);
				nav.current = null;
			}
			eventNavigation(this.parentNode, true);
			nav.current = this.parentNode;
		}

		navItem.onmouseover = navItem.onfocus = function (e) {
			nav.isOver = true;

			if (nav.current) {  //이전 메뉴 초기화
				eventNavigation(nav.current, false);
				nav.current = null;
			}

			eventNavigation(this, true);
			nav.current = this;
		}

		navItem.onmouseout = navItem.onblur = function (e) {
			nav.isOver = false;

			setTimeout(function (e) {
				if (nav.isOver == false) {
					if (nav.original) {
						nav.original.onmouseover();
						if(nav.original.submenu && nav.original.submenu.original){
							nav.original.submenu.original.onmouseover();
						}
					} else if(nav.current) {
						eventNavigation(nav.current, false);
						nav.current = null;
					}
				}
			}, 500);
		}

		if(navItem.submenu){
			initNavigationSub(navItem.submenu)
		}
		nav.menu[nav.menuseq] = navItem;
		if(nav.menuseq == seq) nav.original = navItem;
	}

	if (nav.original) nav.original.onmouseover();
}

function initNavigationSub(submenu){
	var indexMenu = 0;
	var navItemSub = null;
	for (var i = 0; i < submenu.childNodes.length; i++) {
		navItemSub = submenu.childNodes.item(i);
		if (navItemSub.tagName != "LI") continue;
		indexMenu++;

		navItemSub.anchor = navItemSub.getElementsByTagName("span").item(0);
		navItemSub.image = navItemSub.getElementsByTagName("img").item(0);
		navItemSub.submenu = navItemSub.getElementsByTagName("ul").item(0);

		if(navItemSub.anchor && navItemSub.anchor.className.indexOf("select") > -1){
			submenu.original = navItemSub;
		}

		navItemSub.onmouseover = navItemSub.onfocus = function (e) {
			eventNavigation(this, true);
		}

		navItemSub.onmouseout = navItemSub.onblur = function (e) {
			eventNavigation(this, false);
		}

		if(navItemSub.submenu){
			initNavigationSub(navItemSub.submenu)
		}
	}
}


function eventNavigation(element, isOver){
	if(isOver){
		if (element.anchor){
			element.anchor.style.fontWeight="normal";
			element.anchor.style.color="#20d7f6"
		}
		if(element.image){
			element.image.src = element.image.src.replace("_off","_on");
		}
		if (element.submenu){
			element.submenu.style.display = "block";
		}
	}else{
		if (element.anchor){
			element.anchor.style.fontWeight="normal";
			element.anchor.style.color="#FFF"
		}
		if(element.image){
			element.image.src = element.image.src.replace("_on","_off");
		}
		if (element.submenu){
			element.submenu.style.display = "none";
		}
	}
}

/* 이미지겔러리 */
jQuery(document).ready(function() {
 //Slide Gallery 이미지 샐랙터
 jQuery(".list_wrap ul li").click(function() {
  jQuery(this).addClass("active").siblings().removeClass();
  jQuery(".photo_img img").attr("src",jQuery(this).children("a").attr("href"));
  return false;
 });
 //Slide Gallery 슬라이딩 초기화
 jQuery(".list_wrap").width("710"*parseInt(jQuery(".list_wrap ul").size())+"px");
 jQuery(".list_wrap ul:last").prependTo(".list_wrap");
 jQuery(".list_wrap").css("margin-left","-710px");
 //Silde Gallery의 prev버튼
 jQuery("button.btn_prev").click(function() {
  jQuery(".list_wrap").animate({
   marginLeft:"+=710px"
  },"swing",function() {
   jQuery(".list_wrap ul:last").prependTo(".list_wrap");
   jQuery(".list_wrap").css("margin-left","-710px");
   jQuery(".list_wrap ul li").removeClass();
  });
 });
 //Silde Gallery의 next버튼
 jQuery("button.btn_next").click(function() {
  jQuery(".list_wrap").animate({
   marginLeft:"-=710px"
  },"swing",function() {
   jQuery(".list_wrap ul:first").appendTo(".list_wrap");
   jQuery(".list_wrap").css("margin-left","-710px");
   jQuery(".list_wrap ul li").removeClass();
  });
 });
});

/* Pc Doctor */
$(function(){
	$(".pc_teblist .tab_con:not("+$("li a.selected").attr("href")+")").hide();
	$(".pc_teblist li a").click(function(){
		$(".pc_teblist li a").removeClass("selected");
		$(this).addClass("selected");
		$(".pc_teblist .tab_con").hide();
		$($(this).attr("href")).show();
		return false;
	});
});

/*스마트 하이 주요메뉴 20130416_0928 */

$(function(){
	$(".import_menulist01 .tab_con").hide();
	$(".con_menulist02_wrap li:first a").addClass("selected").show();
	$(".tab_con:first").show();

	$("ul.import_menulist01 li a").click(function() {
		$("ul.import_menulist01 li a").removeClass("selected"); //Remove any "active" class
		$(this).addClass("selected"); //Add "active" class to selected tab
		$(".import_menulist01 .tab_con").hide(); //Hide all tab content

		var activeTab = $(this).attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).show(); //Fade in the active content
		return false;
	});
});



/*스마트 하이 주요메뉴 20130415_1750
$(function(){
	$(".import_menulist01 .tab_con:not("+$(".import_menulist01 li a.selected").attr("href")+")").hide();
	$(".import_menulist01 li a").click(function(){
		$(".import_menulist01 li a").removeClass("selected");
		$(this).addClass("selected");
		$(".import_menulist01 .tab_con").hide();
		$($(this).attr("href")).show();
		return false;
	});
});
*/


/*스마트 하이 주요메뉴 기존 소스 20130415_1750
$(function(){
	$(".con_menulist02 .tab_con:not("+$(".con_menulist02 li a.selected").attr("href")+")").hide()
	$(".con_menulist02 li a").click(function(){
		$(".con_menulist02 li a").removeClass("selected");
		$(this).addClass("selected");
		$(".con_menulist02 .tab_con").hide();
		$($(this).attr("href")).show();
		return false;
	});
});
*/


/* SKT 사용방법 */
$(function(){
	$(".tebottomlist3 .tab_con:not("+$(".tebottomlist3 li a.selected").attr("href")+")").hide();
	$(".tebottomlist3 li a").click(function(){
		$(".tebottomlist3 li a").removeClass("selected");
		$(this).addClass("selected");
		$(".tebottomlist3 dl.tab_con").hide();
		$($(this).attr("href")).show();
		return false;
	});
});

/* 주소검색 */
$(function(){
	$(".addr_box .tab_con:not("+$(".addr_box a.selected").attr("href")+")").hide();
	$(".addr_box li .tab_title a").click(function(){
		$(".addr_box li .tab_title a").removeClass("selected");
		$(this).addClass("selected");
		$(".addr_box .tab_con").hide();
		$($(this).attr("href")).show();
		if(isChange) isChange();
		return false;
	});
});

/* 태블릿PC(스마트하이T) 주요메뉴  */
$(function(){
	$(".tebottomlist4 .teb_con:not("+$(".tebottomlist4 dd a.selected").attr("href")+")").hide();
	$(".tebottomlist4 dd a").click(function(){
		$(".tebottomlist4 dd a, .tebottomlist4 dt a").removeClass("selected");
		$(this).addClass("selected");
		$(".tebottomlist4 .teb_con").hide();
		$($(this).attr("href")).show();
		return false;
	});

	$(".tebottomlist4 dt a").click(function(){
		$(".tebottomlist4 dt a").removeClass("selected");
		$(this).addClass("selected");
		$(".tebottomlist4 .teb_con").hide();
		$($(this).attr("href")).show();
		return false;
	});

	$(".tebottomlist4 dt a.first").click(function(){
		$(".tebottomlist4 dd a").removeClass("selected");
		$(".tebottomlist4 dd.first a").addClass("selected");
		return false;
	});

	$(".tebottomlist4 dt a.second").click(function(){
		$(".tebottomlist4 dd a").removeClass("selected");
		$(".tebottomlist4 dd.second a").addClass("selected");
		return false;
	});

	$(".tebottomlist4 dt a.third").click(function(){
		$(".tebottomlist4 dd a").removeClass("selected");
		$(".tebottomlist4 dd.third a").addClass("selected");
		return false;
	});

	$(".tebottomlist4 dt a.fourth").click(function(){
		$(".tebottomlist4 dd a").removeClass("selected");
		$(".tebottomlist4 dd.fourth a").addClass("selected");
		return false;
	});

	$(".line1 dd a").click(function(){
		$(".tebottomlist4 dt a").removeClass("selected");
		$(".line1 dt a").addClass("selected");
		return false;
	});

	$(".line2 dd a").click(function(){
		$(".tebottomlist4 dt a").removeClass("selected");
		$(".line2 dt a").addClass("selected");
		return false;
	});

	$(".line3 dd a").click(function(){
		$(".tebottomlist4 dt a").removeClass("selected");
		$(".line3 dt a").addClass("selected");
		return false;
	});

	$(".line4 dd a").click(function(){
		$(".tebottomlist4 dt a").removeClass("selected");
		$(".line4 dt a").addClass("selected");
		return false;
	});

});


/* 처음이세요 */
$(function(){
	$('li.teb_btn a.step1_1').click(function(){
		$('.box04 .con_wrap').css('height','1860px');
	});

	$('li.teb_btn a.step1_2').click(function(){
		$('.box04 .con_wrap').css('height','1030px');
	});

	$('.qr_code').mouseover(function(){
		$('.tool_box').css('display','block');
	});

	$('.qr_code').mouseout(function(){
		$('.tool_box').css('display','none');
	});

	$(".box03 .con:not("+$("li.teb_btn a.selected").attr("href")+")").hide();
	$(".box03 li.teb_btn a").click(function(){
		$(".box03 li.teb_btn a").removeClass("selected");
		$(this).addClass("selected");
		$(".box03 .con").hide();
		$($(this).attr("href")).show();
		return false;
	});

	$(".box04 .con:not("+$("li.teb_btn a.selected").attr("href")+")").hide();
	$(".box04 li.teb_btn a").click(function(){
		$(".box04 li.teb_btn a").removeClass("selected");
		$(this).addClass("selected");
		$(".box04 .con").hide();
		$($(this).attr("href")).show();
		return false;
	});


	// 일반설치
	$('.box_title2 a').click(function(){
		$('.box04').slideToggle(250);
	});

});

/* SIZE SET CLASS CSS */
$(function(){
	$(document).ready(function (){
		_isPaintRefresh();
	});
});
function whiz_init(){
	_set_class_value('w_', 'width');
	_set_class_value('h_', 'height');
	_set_class_value('mg_',  'margin');
	_set_class_value('pad_', 'padding');
	_set_class_value('mgt', 'margin-top');
	_set_class_value('mgb', 'margin-bottom');
	_set_class_value('mgl', 'margin-left');
	_set_class_value('mgr', 'margin-right');
	_set_class_value('padt', 'padding-top');
	_set_class_value('padb', 'padding-bottom');
	_set_class_value('padl', 'padding-left');
	_set_class_value('padr', 'padding-right');
	_set_class_value('max_h', 'max-height');
	_set_class_value('max_w', 'max-width');
}
function _set_class_value(preTag, attr){
	var classContainer = $('[class*='+preTag+']');
	var class_length = classContainer.length;
	if(class_length > 0){
		for(var i=0;i<class_length;i++){
			var classObj = classContainer.eq(i);
			var class_name = classObj.attr('class');
			classObj.css(attr,_get_class_value(class_name, preTag)+'px');
		}
	}
}
function _get_class_value(className, preTag){
	var _ret = 0;
	var classNames = className.split(' ');
	for(var i=0;i<classNames.length;i++){
		if(classNames[i].indexOf(preTag)!=-1){
			_ret = classNames[i].substring(preTag.length);
			break;
		}
	}
	return _ret;
}
var _refreshCnt = 0;
function _isPaintRefresh(){
	if(_refreshCnt<10){
		whiz_init();
		_refreshCnt++;
		setTimeout(_isPaintRefresh, 500);
	}
}