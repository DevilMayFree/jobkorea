// 브라우저 체크
var Browser = {
	chk : navigator.userAgent.toLowerCase()
}
Browser = {
	ie : Browser.chk.indexOf('msie') != -1,
	ie6 : Browser.chk.indexOf('msie 6') != -1,
	ie7 : Browser.chk.indexOf('msie 7') != -1,
	ie8 : Browser.chk.indexOf('msie 8') != -1,
	ie9 : Browser.chk.indexOf('msie 9') != -1,
	ie10 : Browser.chk.indexOf('msie 10') != -1,
	opera : !!window.opera,
	safari : Browser.chk.indexOf('safari') != -1,
	safari3 : Browser.chk.indexOf('applewebkir/5') != -1,
	mac : Browser.chk.indexOf('mac') != -1,
	chrome : Browser.chk.indexOf('chrome') != -1,
	firefox : Browser.chk.indexOf('firefox') != -1
}
$(function(){
	if(Browser.ie8){
		$("body").addClass("ie8");
	}
	var main_visual = $('.main_slide .cycle-slideshow');
	var main_event = $('#mb_event .ev_pic');
//	$(window).load(function(){
//		$("#main_visual").css("opacity", 1);
//		slideMotion(".cycle-slide-active");
//	});
//
//	main_visual.on("cycle-before", function(event, opts, outgoingSlideEl, incomingSlideEl, forwardFlag){
//		var idx = $(this).data("cycle.opts").nextSlide;
//		var slide_speed = $(this).data("cycle.opts").speed;
//		var el = incomingSlideEl;
//
//		$("#main_slide .item").find(".mv_el").css("opacity", 0);
//		slideMotion(el);
//	});

	main_event.on("cycle-before", function(event, opts, outgoingSlideEl, incomingSlideEl, forwardFlag){
		var idx = $(this).data("cycle.opts").nextSlide;
		var slide_speed = $(this).data("cycle.opts").speed;
		var el = incomingSlideEl;

		// $("#main_slide .item").find(".mv_el").css("opacity", 0);
		// slideMotion(el);
	});
	function slideMotion(el){
		$(el).find(".mv_el").velocity("stop").velocity("transition.slideUpIn", { stagger: 300 }).velocity({ opacity: 1 });
	}

	var slideLock = "false";
	var ss;
	function slideStop()
	{
		clearTimeout(ss);
		slideLock = "true";
		ss = setTimeout(function(){
			slideLock = "false";
		}, $(".main_slide .cycle-slideshow").attr("data-cycle-speed"));
	}

	$(document).ready(function(){
        var video = $('#main_slide .txtbox video').get(0);

		main_visual = new Swiper('.main_slide .swiper-container', {
			speed: 2000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			effect: "fade",
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
            loop: true,
			on: {
				slideChangeTransitionEnd: function(){
                    video.addEventListener('play', function(e){
                        main_visual.autoplay.stop();
                    })
                    video.addEventListener('pause', function(e){
                        main_visual.autoplay.start();
                    })
				}
			}
		});
	})

	$("#main_slide .btn-cycle").on("click", function(){
		if(slideLock=="false"){
			slideStop();
			if($(this).hasClass("cycle-prev")){
				main_visual.cycle('prev');
			}else if($(this).hasClass("cycle-next")){
				main_visual.cycle('next');
			}
		}else {
			return false;
		}
	});

	$(".main_slide .resume").hide();
	$(".main_slide  #play_btn button").click(function(){
		if ($(".main_slide .cycle-slideshow").hasClass("cycle-paused")) {
			$(".main_slide .resume").hide();
			$(".main_slide .pause").show();
		}else {
			$(".main_slide .pause").hide();
			$(".main_slide .resume").show();
		};
	});
	$(".main_slide .pause").click(function(event) {
		$('.main_slide .cycle-slideshow').cycle('pause');
	});
	$(".main_slide .resume").click(function(event) {
		$('.main_slide .cycle-slideshow').cycle('resume');
	});

	/**
	 * main quick tab
	 */
	var $quick_btn = $(".quick_tab li");
	$quick_btn.on("click", "a", function(e){
		e.preventDefault();

		var cts = $(this).attr("href");

		$quick_btn.removeClass("on");
		$(this).closest("li").addClass("on");

		$(".quick_tab_cts").hide();
		$(cts).fadeIn(250);
	});

	/**
	 * main quick more
	 */
	var $quick_more = $(".quick_menu .btn_more");
	var tab1_h = $("#service.quick_tab_cts > ul").css("height");
	var tab2_h= $("#first.quick_tab_cts > ul").css("height");
	$quick_more.click(function(){
		var tab_id = $(this).closest(".quick_tab_cts").attr("id");
		$this = $(this);
		if($(this).hasClass("on")){
			$this.removeClass("on");
			if(tab_id == "service"){
				// $this.closest(".quick_tab_cts").find("ul").css({height : tab1_h});
			}else {
				// $this.closest(".quick_tab_cts").find("ul").css({height : tab2_h});
			}
		}else {
			$this.addClass("on");
			// $this.closest(".quick_tab_cts").find("ul").css({
			// 	height : "100%"
			// });
		}
	});
	$(".quick_tab_cts").on("mouseleave", function(){
		var tab_id = $(this).attr("id");

		if(tab_id == "service"){
			$("#"+tab_id).find("ul").css({height : tab1_h});
		}else {
			$("#"+tab_id).find("ul").css({height : tab2_h});
		}

		$quick_more.removeClass("on");
	});

	var stock_rolling = $('.stock_rolling .cycle-slideshow');
	var stock_tab = $(".stocks_tab li");
	var $title = $("#stock_rolling_wrap .stock_tit");
	var $stocks_tab = $(".stocks_tab_list");
	stock_rolling.on("cycle-before", function(event, opts, outgoingSlideEl, incomingSlideEl, forwardFlag){
		var idx = $(this).data("cycle.opts").nextSlide;
		var tit = $(incomingSlideEl).attr("data-txt");

		$title.velocity({rotateX : 180}, {duration : 250, complete : function(){$title.velocity({rotateX : 0}, 0);}});
		$title.text(tit);
	});

	$title.on("mouseenter", function(){
		$stocks_tab.fadeIn(250);
	});
	$stocks_tab.on("mouseleave", function(){
		$stocks_tab.fadeOut(100);
		stock_rolling.cycle('resume');
	});

	$stocks_tab.find("li").on("click", function(e){
		e.preventDefault();
		var idx = $(this).index();
		stock_rolling.cycle('goto', idx);
		stock_rolling.cycle('pause');
	});

	/**
	 * #invest
	 */
	var $invest_list = $(".invest_list > li > a");
	$invest_list.on("mouseenter", function(event) {
		$(".invest_list > li").removeClass("on");
		$(".invest_list [class*='_list']").hide().css("opacity", 0);// 20231030 수정_msy

		$(this).closest('li').addClass("on");
		$(this).closest('li').find("[class*='_list']").show().css("opacity", 1);// 20231030 수정_msy
	});

	/* 20231030 수정_msy */
	const youtubeSwiper = new Swiper('.youtube_list .swiper-container', {
		slidesPerView: "auto",
		spaceBetween: 20,
		scrollbar: {
			el: ".youtube_list .swiper-container .swiper-scrollbar",
			draggable: true,
			mousewheel: true,
			snapOnRelease: false
		},
		observer: true,
		observeParents: true,
	})
	/* // 20231030 수정_msy */

	/* notice */
	var $notice_list = $("#mb_notice .tab span");
	let defaultTarget = $("#defaultOpen");

	defaultTarget.addClass('active');
	$('#main_board').find('#' + defaultTarget.data('tab-target')).show();

	$notice_list.on("mouseenter", function(event) {
		let target = $(this).data('tab-target');		

		$('#mb_notice .tabcontent').hide();
		$('#mb_notice .tab span').not($(this)).removeClass('active');

		$(this).closest('.board_box').find('#' + target).show();
		$(this).addClass('active');
	});
	/* // notice */

	/**
	 * #idea_box
	 */
	var $idea_btn = $(".idea_box a");
	$idea_btn.on("mouseenter", function(event) {
		var cts = $(this).attr("href");

		$idea_btn.removeClass("on");
		$(this).addClass("on");
		$(".idea_list").hide();

		$(cts).show();
	});

	/*var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({triggerElement: "#invest_wrap"})
					.on("enter", function(){
						if(!$(".invest_list li.on > .subj_list").hasClass("animate_end")){
							$(".invest_list li.on > .subj_list").find("li").velocity("transition.slideUpIn", { stagger: 250 }).velocity({ opacity: 1 });
							$(".invest_list li.on > .subj_list").velocity("transition.slideUpIn", { stagger: 200 }).velocity({ opacity: 1 });

							setTimeout(function(){
								flag = "true";
								$(".invest_list li.on > .subj_list").addClass("animate_end");
							}, 1500);
						}
					})
					.addTo(controller);

	var scene = new ScrollMagic.Scene({triggerElement: "#main_cs"})
					.on("enter", function(){
						if(!$("#main_cs .box > a").hasClass("animate_end")){
							$("#main_cs .box > a").velocity("transition.slideUpIn", { stagger: 250 }).velocity({ opacity: 1 }).addClass("animate_end");
						}
					})
					.addTo(controller);
	*/
	$(".btn_smarthi_down").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("on");
		$(this).next(".qrcode").fadeToggle(700);
	});
});

function top_bn_close(){
	$("#header_banner").slideUp(250);
}
var Browser = {
	chk : navigator.userAgent.toLowerCase()
}
Browser = {
	ie : Browser.chk.indexOf('msie') != -1,
	ie6 : Browser.chk.indexOf('msie 6') != -1,
	ie7 : Browser.chk.indexOf('msie 7') != -1,
	ie8 : Browser.chk.indexOf('msie 8') != -1,
	ie9 : Browser.chk.indexOf('msie 9') != -1,
	ie10 : Browser.chk.indexOf('msie 10') != -1,
	opera : !!window.opera,
	safari : Browser.chk.indexOf('safari') != -1,
	safari3 : Browser.chk.indexOf('applewebkir/5') != -1,
	mac : Browser.chk.indexOf('mac') != -1,
	chrome : Browser.chk.indexOf('chrome') != -1,
	firefox : Browser.chk.indexOf('firefox') != -1
}
$(function(){
	if(Browser.ie8){
		$("body").addClass("ie8");
	}
	var main_visual = $('.main_slide .cycle-slideshow');
	$(window).load(function(){
		$("#main_visual").css("opacity", 1);
		slideMotion(".cycle-slide-active");
	});

	main_visual.on("cycle-before", function(event, opts, outgoingSlideEl, incomingSlideEl, forwardFlag){
		var idx = $(this).data("cycle.opts").nextSlide;
		var slide_speed = $(this).data("cycle.opts").speed;
		var el = incomingSlideEl;

		$("#main_slide .item").find(".mv_el").css("opacity", 0);
		slideMotion(el);
	});
	function slideMotion(el){
		$(el).find(".mv_el").velocity("stop").velocity("transition.slideUpIn", { stagger: 300 }).velocity({ opacity: 1 });
	}

	var slideLock = "false";
	var ss;
	function slideStop()
	{
		clearTimeout(ss);
		slideLock = "true";
		ss = setTimeout(function(){
			slideLock = "false";
		}, $(".main_slide .cycle-slideshow").attr("data-cycle-speed"));
	}

	$("#main_slide .btn-cycle").on("click", function(){
		if(slideLock=="false"){
			slideStop();
			if($(this).hasClass("cycle-prev")){
				main_visual.cycle('prev');
			}else if($(this).hasClass("cycle-next")){
				main_visual.cycle('next');
			}
		}else {
			return false;
		}
	});

	$(".main_slide .resume").hide();
	$(".main_slide  #play_btn button").click(function(){
		if ($(".main_slide .cycle-slideshow").hasClass("cycle-paused")) {
			$(".main_slide .resume").hide();
			$(".main_slide .pause").show();
		}else {
			$(".main_slide .pause").hide();
			$(".main_slide .resume").show();
		};
	});
	$(".main_slide .pause").click(function(event) {
		$('.main_slide .cycle-slideshow').cycle('pause');
	});
	$(".main_slide .resume").click(function(event) {
		$('.main_slide .cycle-slideshow').cycle('resume');
	});

	/**
	 * main quick tab
	 */
	var $quick_btn = $(".quick_tab li");
	$quick_btn.on("mouseenter", 'a', function(e){
		var cts = $(this).attr("href");

		$quick_btn.removeClass("on");
		$(this).closest("li").addClass("on");

		$(".quick_tab_cts").not(cts).hide();
		$(cts).fadeIn(250);
	});

	/**
	 * main quick more
	 */
	var $quick_more = $(".quick_menu .btn_more");
	var tab1_h = $("#service.quick_tab_cts > ul").css("height");
	var tab2_h= $("#first.quick_tab_cts > ul").css("height");
	$quick_more.click(function(){
		var tab_id = $(this).closest(".quick_tab_cts").attr("id");
		$this = $(this);
		if($(this).hasClass("on")){
			$this.removeClass("on");
			if(tab_id == "service"){
				$this.closest(".quick_tab_cts").find("ul").css({height : tab1_h});
			}else {
				$this.closest(".quick_tab_cts").find("ul").css({height : tab2_h});
			}
		}else {
			$this.addClass("on");
			$this.closest(".quick_tab_cts").find("ul").css({
				height : "100%"
			});
		}
	});
	$(".quick_tab_cts").on("mouseleave", function(){
		var tab_id = $(this).attr("id");

		if(tab_id == "service"){
			$("#"+tab_id).find("ul").css({height : tab1_h});
		}else {
			$("#"+tab_id).find("ul").css({height : tab2_h});
		}

		$quick_more.removeClass("on");
	});

	var stock_rolling = $('.stock_rolling .cycle-slideshow');
	var stock_tab = $(".stocks_tab li");
	var $title = $("#stock_rolling_wrap .stock_tit");
	var $stocks_tab = $(".stocks_tab_list");
	stock_rolling.on("cycle-before", function(event, opts, outgoingSlideEl, incomingSlideEl, forwardFlag){
		var idx = $(this).data("cycle.opts").nextSlide;
		var tit = $(incomingSlideEl).attr("data-txt");

		$title.velocity({rotateX : 180}, {duration : 250, complete : function(){$title.velocity({rotateX : 0}, 0);}});
		$title.text(tit);
	});

	$title.on("mouseenter", function(){
		$stocks_tab.fadeIn(250);
	});
	$stocks_tab.on("mouseleave", function(){
		$stocks_tab.fadeOut(100);
		stock_rolling.cycle('resume');
	});

	$stocks_tab.find("li").on("click", function(e){
		e.preventDefault();
		var idx = $(this).index();
		stock_rolling.cycle('goto', idx);
		stock_rolling.cycle('pause');
	});

	/**
	 * #invest
	 */
	var $invest_list = $(".invest_list > li > a");
	$invest_list.on("mouseenter", function(event) {
		$(".invest_list > li").removeClass("on");
		$(".invest_list .subj_list").hide().css("opacity", 0);

		$(this).closest('li').addClass("on");
		$(this).closest('li').find(".subj_list").show().css("opacity", 1);
	});

	/**
	 * #idea_box
	 */
	var $idea_btn = $(".idea_box a");
	$idea_btn.on("mouseenter", function(event) {
		var cts = $(this).attr("href");

		$idea_btn.removeClass("on");
		$(this).addClass("on");
		$(".idea_list").hide();

		$(cts).show();
	});

	/*var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene({triggerElement: "#invest_wrap"})
					.on("enter", function(){
						if(!$(".invest_list li.on > .subj_list").hasClass("animate_end")){
							$(".invest_list li.on > .subj_list").find("li").velocity("transition.slideUpIn", { stagger: 250 }).velocity({ opacity: 1 });
							$(".invest_list li.on > .subj_list").velocity("transition.slideUpIn", { stagger: 200 }).velocity({ opacity: 1 });

							setTimeout(function(){
								flag = "true";
								$(".invest_list li.on > .subj_list").addClass("animate_end");
							}, 1500);
						}
					})
					.addTo(controller);

	var scene = new ScrollMagic.Scene({triggerElement: "#main_cs"})
					.on("enter", function(){
						if(!$("#main_cs .box > a").hasClass("animate_end")){
							$("#main_cs .box > a").velocity("transition.slideUpIn", { stagger: 250 }).velocity({ opacity: 1 }).addClass("animate_end");
						}
					})
					.addTo(controller);
	*/
	$(".btn_smarthi_down").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("on");
		$(this).next(".qrcode").fadeToggle(700);
	});

});

function top_bn_close(){
	$("#header_banner").slideUp(250);
}