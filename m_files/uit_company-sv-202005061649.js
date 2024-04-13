
$(function() {
	$("#corp_story,#dev_gipartinfo").find(".more_btns").each(function () {
		var $textArea = $(this).prev();
		var $height = $(this).attr("user-height");
		if ($height == undefined) {
			$height = 102;
		} else {
			$height = parseInt($height, 10);
		}

		$(this).on('click', function(event) {
			event.preventDefault();
			if ( $(this).hasClass('togl') ) {
				$(this).removeClass('togl');
				$textArea.css({height:$height})
				$(this).text('더보기');
			} else {
				$(this).addClass('togl')
				$textArea.css({height:"auto"})
				$(this).text('닫기');
			}
			
		});
	});


	// Tab - 합격자소서에서만 사용
	$('.assayCont .jkComTab li a').on('click', function() {
		var target = $(this).data('target');
		$('.tabCont').hide();
		$('.jkComTab li').removeClass('on');
		$(this).parent('li').addClass('on');
		$(target).show();
	});

	// Sort
	$('.sortOptBx .btnSortOpt').on('click', function() {
		$(this).toggleClass('on');
		$(this).parents('.comSortArea').toggleClass('open');
	});

	// Swipe
	var swiper = new Swiper('.pasInfoSwipe .swipeInner', {
			slidesPerView: "auto",
			paginationClickable: true,
			freeMode: true
	});

	// Toggle List
	var passBtn = ".toggleList .q button";
	$('.toggleList').find('li:nth-child(n+1):nth-child(-n+2)').addClass('on').find('.q button .arr').text('닫기');
	$(document).on('click', passBtn, function(event) {
		event.preventDefault();
		var list = $(this).parents('li');
		if (list.hasClass('on')) {
			$(this).find('.arr').text('보기');
			list.removeClass('on');
		} else {
			list.addClass('on');
			$(this).find('.arr').text('닫기');
		}
	});
});

;(function($) {
	var on = $.fn.on, debounce;
	$.fn.on = function () {
		var args = Array.apply(null, arguments);
		var first = args[0];
		var last = args[args.length - 1];
		var isObj = typeof first === 'object';
		if (!isObj && isNaN(last) || (last === 1 && args.pop())) return on.apply(this, args);
		if (isObj) {
			for (var event in first) {
				this.on(event, last, first[event], args[1]);
			}
			return this;
		}
		var delay = args.pop();
		var fn = args.pop();
		args.push(function () {
			var self = this, params = arguments;
			clearTimeout(debounce);
			debounce = setTimeout(function () {
				fn.apply(self, params);
			}, delay);
		});
		return on.apply(this, args);
	};
}(this.jQuery || this.Zepto));
// $(window).on({resize: function (e) {
	
// }},150);

;(function() {
	'use strict';
	var root = this

	if(typeof exports !== 'undefined') {
		jkMobileNav = exports;
	} else {
		jkMobileNav = root.jkMobileNav = {};
	}

	var jkMobileNav,
		navNum,
		appDnHei,
		navBarOffset,
		scrollChk,
		navActiveNum,
		navListLen,
		navTopHei,
		warpContainer = $('.navDep01Swiper'),
		listWrap = $('.navDep01'),
		navOpenBtn = $('.navTopBtn button'),
		broswerInfo = navigator.userAgent;
	

	var navActive = listWrap.find(".swipeSlide a[data-id='" + navNumIndex + "']").parent('li').index();

	navNum = navActive; //활성화될 메뉴 index
	navListLen = 'auto';
	navActiveNum = navNum - 1;


	jkMobileNav.init = function() {
		jkMobileNav.agentChk();
		jkMobileNav.navControl();
		jkMobileNav.navSticky();
		jkMobileNav.appBnnGutter();
		jkMobileNav.navPosition();
	},

	jkMobileNav.agentChk = function() {
		if(!navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)){
				$('.navAllWrap .sNavItems').addClass('pcSize');
			}
		if(broswerInfo.indexOf("Android 4.1")>-1){
			$(".navTop").addClass("android4");
		} else {
			$(".navTop").addClass("otherAgent");
		}
	},

	jkMobileNav.navControl = function() {
		$('.navAllWrap').find("a[data-id='" + navNumIndex + "']").parent('li').addClass('on');
		
		var navSwiper = new Swiper('.navTop .navDep01Swiper .navInner', {
			slidesPerView: navListLen,
			initialSlide: navActiveNum,
			preventClicks: true,
			preventClicksPropagation: false,
			wrapperClass: 'swipeWrapper',
			slideClass: 'swipeSlide',
			onInit: function (swiper) {
				$('.navDep01Swiper').find('li').eq( navNum ).addClass('on'); 
				$('.navTop').parent().append("<div class='mobileNavCover'></div>");
				$('.navTopBtn button, .mobileNavCover').on('click', function(event) {
					jkMobileNav.navOpenBtn();
				});

			}
		});
	},
	jkMobileNav.navOpenBtn = function() {
		if ( !navOpenBtn.hasClass('open') ) {
			$("body").bind('touchmove', function(e){e.preventDefault()});

			if(broswerInfo.indexOf("Android 4.1")>-1){
				$(".navTop").addClass('chk');
			}
			$('#jkHeader').css({"z-index":'5'});
			$('.mobileNavCover').css({top:appDnHei, display:"block"});
			
			navOpenBtn.addClass('open');
			navOpenBtn.find('span.tx').text('메뉴전체보기닫기');
			$(".navAllWrap").show();
		} else {
			$("body").unbind('touchmove');
			$('.mobileNavCover').hide();
			$('#jkHeader').css({"z-index":''});
			if(broswerInfo.indexOf("Android 4.1")>-1){
				if ( scrollChk == true ) {
					$(".navTop").removeClass('navFix');
				}
			}
			navOpenBtn.removeClass('open');
			navOpenBtn.find('span.tx').text('메뉴전체보기');
			$(".navAllWrap").hide();
		}
	},
	jkMobileNav.navSticky = function() {
		var navBar = $(".navTop"),
			changeChk = false;
		appDnHei = 0;
		navBarOffset = 10;

		if ( !$('body').hasClass('noNavSticky') && !$('body').hasClass('starApp')) {
			fixedCheck();
			$(window).scroll(function(event) {
				if ( $('#content').height() > $(window).height() ) {
					fixedCheck();
				}
			});
		}

		function fixedCheck() {
			var scrollTop = $(document).scrollTop() - appDnHei;
			if (scrollTop >= navBarOffset) {
				if ( changeChk === false ) {
					$("body").addClass('change');
					topMove();
				}
				changeChk = true;
				scrollChk = false;
				scrollTop = 0;
			} else if (scrollTop <= navBarOffset) {
				if ( changeChk == true ) {
					$("body").removeClass('change');
					topMove();
				}
				changeChk = false;
				if ( !navBar.hasClass('chk') ) {
					scrollChk = false;
				} else {
					scrollChk = true;
				}
			}

			function topMove () {
				if ( $("body").hasClass('change') ) {
					topWrapHeight(50, 1);
				} else {
					topWrapHeight(126, 1);
				}
			}
			function topWrapHeight(s, d) {
				$(".jkHeadWrap.starCompany .jkHeadInner").stop().animate({height:s},
				{ 
					queue:true,
					duration:d,
					complete: function() {
						$(".jkHeadWrap.starCompany .jkHeadInner .headTit").animate({opacity:1}, 1)
					}
				});
				$(".jkHeadWrap.starCompany .jkHeadInner .headTit").css({opacity:0});


				
			}
		}
	},
	jkMobileNav.appBnnGutter = function() {
		$(window).load(function() {
			if ( $('.appDownBx').length ) {
				appDnHei = parseInt($('.appDownBx .appDownLink').height());
			} else {
				appDnHei = 0;
			}
		});
	},

	jkMobileNav.navPosition = function() {
		$(document).on('focusin', 'input, textarea, select', function() {
			$('.jkHeadWrap.starCompany .jkHeadArea').addClass('unfixed');
		})
		.on('focusout', 'input, textarea, select', function () {
			$('.jkHeadWrap.starCompany .jkHeadArea').removeClass('unfixed');
		});
	}
}).call(this);

var starGoTo = (function() {  
	var root = this;
	var starGoTo;
	var goTop = $('.go_top');
	if(typeof exports !== 'undefined') {
		starGoTo = exports;
	} else {
		starGoTo = root.starGoTo = {};
	}
	starGoTo.gotoEvent = function() {
		goTop.on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop:0}, 200);
		});

		$(window).scroll(function() {
			if( $(this).scrollTop() >= 30) {
				goTop.addClass('on');
			} else {
				goTop.removeClass('on');
			}
		});
	}
	return starGoTo;
}());

jkMobileNav.init();
starGoTo.gotoEvent();
