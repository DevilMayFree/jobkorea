	/**
	*
	*	tab Ȱ��ȭ 2013-03-04
	*  ul     id-element add    .tabi    200 ��ȣó�� 
	*	data-url iframe				url 
	*	default-url				    url   [option html������ <li> ����]
	*
	**/
	(function($){
		$(document).ready(function (){

			function tab( inx, src, this$ , tidx){
				var s_idx = 0;
				//console.log(inx, src, this$);

				// ����Ʈ�� - ��� �� �ߴ��� ���� ó���� ���� �߰�
				if ( tidx != null || tidx != undefined ) {
					s_idx = tidx;
				}

				$('.tabi').children().each(function(index,val){
					var  disTab = $(this).find('a');
					if ( disTab.hasClass('on') ) {
						disTab.removeClass("on");
					}
				});
				
				// ���� �� ���� 
				$('.tabi').children().eq(inx).find("a").first().addClass("on");

				// class = 200 �̸� ��ȣȭ ó�� ������!
				if( $('ul').hasClass('tabi 200') ){
					$('#contFrame').attr("src", KSBizDirectUrl(src, 'mycontent' ));		
				}  

				// Ʈ���̵�ä�� ->  �����Ʈ���̵�( MTS )
				else if( $('ul').hasClass('tabi mobile') ){
					
					this$.closest('ul').find('.tebottomlist1').css("display","none");
					this$.next('.tebottomlist1').css("display","block");

					//���� �޴� ù��° �޴� Ȱ��ȭ 
					this$.next().find('a').eq(s_idx).addClass("on");

					if(inx == 3){ //�º�pc(����Ʈ����t)-> �ֿ�޴� ���� divó�� 
						$('.teb_wrap').css("display","block");
					}else{
						$('.teb_wrap').css("display","none");
					}
					
					//���� �޴� Ȱ��ȭ 
					this$.addClass("on");

					this$.next('.tebottomlist1').css("display","block");

					//���� �� ���� 
					var parentDiv$ = $('.mobile').closest('div');
					var  isMargin =  this$.next().attr('data-marbottom') || this$.closest('ul').attr('data-marbottom');
					if( !(typeof  isMargin == "undefined") ){
						parentDiv$.removeClass('mgb40');
						parentDiv$.css('margin-bottom', isMargin );
					}else{
						parentDiv$.removeClass('margin-bottom');
						parentDiv$.addClass('mgb40');
					}

					//���� ������ �ε� 
					callLoadHtml(src);
				
				}// else if( $('ul').hasClas :: �����Ʈ���̵�(mts) end.

				// �Ϲ� iframe ���
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
		
		//#tab_ �̿����  id  �� 
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
			������ �����.���� -> ��� �� ���ǳ��� 
			�������� �Է��ϰ� �ش�Ǵ� �Ǽ���
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

		Ʈ���̵�ä�� -> ����Ʈ���� T�� �� �޴� ����޴� 
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


	//���� �޴�
	function mts_f(){

		$(".subMenui").children().find('a').bind("click",function(e){
			var getUrl$ = $(this).attr('href');
			if(getUrl$ == "#"){ // href = "#" �ϰ�� return false; ������ 
				var getUrl$ = $(this).attr('data-url');
				
				if( $(this).attr('data-target') == "cu10_020201"){ // �ٸ� ������ �̵��� ���� ¥����..
					if ( $(this).attr('tab-target') != undefined && $(this).attr('tab-target') != null ){
						// ����Ʈ�� - ��� �� �ߴ��� ���� ó���� ���� �߰�
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
		// FAQ ��
		var article = $('.faq .article');
		article.addClass('hide');
		article.find('.a').hide();	
		$('.faq .article .trigger').click(function(){
			var myArticle = $(this).parents('.article:first');
			if(myArticle.hasClass('hide')){
				article.addClass('hide').removeClass('show'); // ���ڵ�� ȿ���� ��ġ ������ �� ������ ���켼��
				article.find('.a').slideUp(100); // ���ڵ�� ȿ���� ��ġ ������ �� ������ ���켼��
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
// ����������01 //
function resizeIframe(f_id, win) {
	win = win || window;
	var iframe = win.document.getElementById(f_id),
	f_doc = iframe.contentWindow.document.documentElement;
	iframe.style.height = f_doc.scrollHeight + 'px';
}

// ���� as-is script ũ�ν� ����¡ �ȵ�! 2013-03-04
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
	if(sdate == ""){//��ȸ�Ⱓ �Է� �� ���� �� �⺻ ���� ��
		sdate = "20050630";
		edate = $("#set_edate").val();
	}else if( sdate.length <= 9){
		alert(" ��¥�� ��ȿ���� �ʽ��ϴ�. ");
		$('#sdate_').focus();
		return;
	} else if( edate.length <= 9){
		alert(" ��¥�� ��ȿ���� �ʽ��ϴ�. ");
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