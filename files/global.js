	/**
	*
	*	tab 활성화 2013-03-04
	*  ul     id-element add    .tabi    200 함호처리 
	*	data-url iframe				url 
	*	default-url				    url   [option html페이지 <li> 삭제]
	*
	**/
	(function($){
		$(document).ready(function (){

			function tab( inx, src, this$ , tidx){
				var s_idx = 0;
				//console.log(inx, src, this$);

				// 스마트폰 - 상단 탭 중단탭 관련 처리로 인한 추가
				if ( tidx != null || tidx != undefined ) {
					s_idx = tidx;
				}

				$('.tabi').children().each(function(index,val){
					var  disTab = $(this).find('a');
					if ( disTab.hasClass('on') ) {
						disTab.removeClass("on");
					}
				});
				
				// 매인 탭 설정 
				$('.tabi').children().eq(inx).find("a").first().addClass("on");

				// class = 200 이면 암호화 처리 페이지!
				if( $('ul').hasClass('tabi 200') ){
					$('#contFrame').attr("src", KSBizDirectUrl(src, 'mycontent' ));		
				}  

				// 트레이딩채널 ->  모바일트레이딩( MTS )
				else if( $('ul').hasClass('tabi mobile') ){
					
					this$.closest('ul').find('.tebottomlist1').css("display","none");
					this$.next('.tebottomlist1').css("display","block");

					//서브 메뉴 첫번째 메뉴 활성화 
					this$.next().find('a').eq(s_idx).addClass("on");

					if(inx == 3){ //태블릿pc(스마트하이t)-> 주요메뉴 예외 div처리 
						$('.teb_wrap').css("display","block");
					}else{
						$('.teb_wrap').css("display","none");
					}
					
					//서브 메뉴 활성화 
					this$.addClass("on");

					this$.next('.tebottomlist1').css("display","block");

					//마진 값 설정 
					var parentDiv$ = $('.mobile').closest('div');
					var  isMargin =  this$.next().attr('data-marbottom') || this$.closest('ul').attr('data-marbottom');
					if( !(typeof  isMargin == "undefined") ){
						parentDiv$.removeClass('mgb40');
						parentDiv$.css('margin-bottom', isMargin );
					}else{
						parentDiv$.removeClass('margin-bottom');
						parentDiv$.addClass('mgb40');
					}

					//몸통 컨텐츠 로드 
					callLoadHtml(src);
				
				}// else if( $('ul').hasClas :: 모바일트레이딩(mts) end.

				// 일반 iframe 사용
				else if($('ul').hasClass('tabi')){
					$('#contFrame').attr("src", src);		
				}

				iframe_autoresize(window.document.contFrame,300);
			}//end function
			
		$.each($('.tabi').children(), function(i , el){
			$(el).find("a").click(function(ev){
				tab(i, $(this).attr('data-url'), $(this) );
				//mts_f();
				return false;
			});
		});
		
		//#tab_ 미운오리  id  값 
		if( $('#tab_').size() == 1){
		$.each($('#tab_').children(), function(i , el){
			$(el).find("a").click(function(ev){
				tab(i, $(this).attr('data-url'));
				return false;
			});
		});
		}//end if 
      
		/*
			default load.. 
			고객센터 고객상담.문의 -> 상담 및 문의내역 
			폼페이지 입력하고 해당되는 탭설정
		*/
		var isDefault =  $('#default-url').children('a').attr('data-url');
		if( !(typeof  isDefault == "undefined") ){
			var inx = $('#default-url').children('a').attr('data-index') || "empty";
			if( inx == "empty" ){
				tab("0" , isDefault);
			}else{
				tab(inx-1 , isDefault);
			}
			return false;
		}

	
	/*
		2013-03-20

		트레이딩채널 -> 스마트하이 T란 탭 메뉴 서브메뉴 
	*/
		
		var recursive = true;
		var callLoadHtml = function(getUrl$){
			$('#contentBody').load(getUrl$, function(responseText){
				mts_f();
	
				juyoMenu();
				faq_slide();
				recursive = true;
			});	
		}
		
	//default load...
	var idx = $('#idx').find('a').attr('data-idx');

	if( (typeof  idx == "undefined" || idx == "null") ){
		tab( "0", $('.tabi').first().find('a').attr('data-url'),  $('.tabi').children().eq(0).find("a").first() );
	}else{
		tab( idx,  $('#urx').find('a').attr('data-urx'),  $('.tabi').children().eq(idx).find("a").first() );
	}


	//서브 메뉴
	function mts_f(){

		$(".subMenui").children().find('a').bind("click",function(e){
			var getUrl$ = $(this).attr('href');
			if(getUrl$ == "#"){ // href = "#" 일경우 return false; 때문에 
				var getUrl$ = $(this).attr('data-url');
				
				if( $(this).attr('data-target') == "cu10_020201"){ // 다른 탭으로 이동시 예외 짜증나..
					if ( $(this).attr('tab-target') != undefined && $(this).attr('tab-target') != null ){
						// 스마트폰 - 상단 탭 중단탭 관련 처리로 인한 추가
						tab($(this).attr('tab-target') , $(this).attr('data-url'),  $('.tabi').children().eq( $(this).attr('tab-target') ).find("a").first(), $(this).attr('tab-idx') );

						$('.tebottomlist1').children().last().find('a').addClass("on");

					} else {
						$('.tebottomlist1').children().last().find('a').removeClass("on");
						$('.tebottomlist1').children().eq(1).find('a').addClass("on");
					}
				}



				if(recursive){
					callLoadHtml( getUrl$ );
					recursive = false;
				}				
				return false;	
			}
		
		});//$('.tebottomlist').children()..	
	}//function mts_f(){

		
	
	function juyoMenu(){
		$(".import_menulist01 .tab_con").hide();
		$(".con_menulist02_wrap li:first a").addClass("selected").show();		
		$(".con_menulist02_wrap .tab_con:first").show();
		
		$("ul.import_menulist01 li").click(function() {
			$("ul.import_menulist01 li a").removeClass("selected");
			$(".import_menulist01 .tab_con").hide();
			
			var activeTab = $(this).children();
			$(activeTab).addClass("selected").show();
			return false;
		});
	}

	function faq_slide(){
		// FAQ 용
		var article = $('.faq .article');
		article.addClass('hide');
		article.find('.a').hide();	
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
	}
	
	accList();

	function accList(){
		if($('.acc_wrap').length > 0) {
			$('.acc_wrap .acc_cont').hide();
			$('.acc_wrap [data-click]').click(function(){
				$(this).closest('.acc_list').toggleClass('on');
				$(this).closest('.acc_list').children('.acc_cont').slideToggle(300);
				$(this).closest('.acc_list').siblings().removeClass('on');
				$(this).closest('.acc_list').siblings().children('.acc_cont').slideUp(300);
			});
		}
	}

		});//$(document).rea
	})(jQuery);


function goIframe(src){
	window.document.contFrame.location.href=src;
}
// 아이프레임01 //
function resizeIframe(f_id, win) {
	win = win || window;
	var iframe = win.document.getElementById(f_id),
	f_doc = iframe.contentWindow.document.documentElement;
	iframe.style.height = f_doc.scrollHeight + 'px';
}

// 기존 as-is script 크로스 브라우징 안됨! 2013-03-04
function iframe_autoresize(arg,p){
	try{
		$("#contFrame").height($("#contFrame").contents().height()); 
	}
	catch(exception){};
}

function research_checkSubmit(){
	var bid = "R_E";
	var aid = "";	//document.custom_search.aid.value;
	var iKey = "%"+ $("#iKey_view_all").val() +"%";//'%'+document.custom_search.iKey_view.value+'%';
	var iKey_view = $("#iKey_view_all").val() ;
	var cur_page = 1;
	var sdate = $("#sdate_").val();
	var edate = $("#edate_").val();
	var keyOption = "ALL";
	if(sdate == ""){//조회기간 입력 값 없을 때 기본 설정 값
		sdate = "20050630";
		edate = $("#set_edate").val();
	}else if( sdate.length <= 9){
		alert(" 날짜가 유효하지 않습니다. ");
		$('#sdate_').focus();
		return;
	} else if( edate.length <= 9){
		alert(" 날짜가 유효하지 않습니다. ");
		$('#edate_').focus();
		return;
	}
	var param = new Object();
	param.tr_cd = 'db/board/TWBBACL/board_list';
	param.bid = bid;
	param.aid = aid;
	param.iKey = iKey;
	param.iKey_view = iKey_view;
	param.cur_page = cur_page;
	param.sdate = sdate;
	param.edate = edate;
	param.keyOption = keyOption;
	param.another_url = 're_result';
	var f = _runTimeForm(param, 'post');
	f.action = '/research/re_result.jsp';
	SSLFormSubmit(f);
}