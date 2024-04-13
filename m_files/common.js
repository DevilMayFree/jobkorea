$(document).ready(function () {
    //이전으로 가기를 클릭한 경우
    $(".jkHeadInner > .jkBtnBack").on("click.common", function () {
        history.back();
    });

    $(".jkHeadInner > .jkBtnHome, .schHome").click(function () {
        if ($("#dev_gnbVersion_stat").val() == "0") { //구조개편(기존 기능 유지)
            location.href = "/"
        } else {
            AppExecute("goMain?url=/"); //새창 닫기
            AppExecute("closeSub?closeLevel=self"); //새창 닫기
        }
    });

    ////전체메뉴 열기
    //$(".devLeftMenu").click(function () {
    //    ui.menutotal.attached()
    //    //var tab = new ui.menutotal.components.tab(document.querySelector('.jk-menu-total .jk-menu-total-body .nav'));
    //    TotalMenuInit();
    //});
    ////전체메뉴 닫기
    //$(".devLeftMenuClose").click(function () {
    //    ui.menutotal.detached()
    //});
    ////즐겨찾기 8개 모두 선택한 경우 모달 닫기
    //$(".devConfirmClose").click(function () {
    //    ui.menutotal.modal.full.detached()
    //});
    ////초기화 "아니요"
    //$(".devFvrtResetNo").click(function () {
    //    ui.menutotal.modal.reset.detached()
    //});
    ////초기화 "예"
    //$(".devFvrtResetYes").click(function () {
    //    ui.menutotal.modal.reset.detached()
    //    ui.menutotal.bookmark.reset()
    //    FvrtDeleteAll();
    //});

    //고객센터 - 인기 회사 연봉 TOP 3
    //$(function () {
    //    $(".jk-menu-total-body .salary").click(function (e) {
    //        //var $wrap = $(".popup-salary-popularity");
    //        //var $list = $wrap.find("list-salary-popularity");

    //        $.ajax({
    //            type: "GET",
    //            url: "/include/Salary/Salary_Favor_List_AJAX.asp",
    //            dataType: "json",
    //            success: function (response) {
    //                var cur_html = "";
    //                $(".list-salary-popularity li").remove();
    //                if (response.list.length > 0) {
    //                    for (var i = 0; i < 5; i++) {
    //                        cur_html = cur_html + '<li>';
    //                        cur_html = cur_html + '<div class="order">' + response.list[i].Rank + '</div>';
    //                        cur_html = cur_html + '<a href="/Salary/' + response.list[i].BizPkNo + '?search=true&amp;M_View_Type=fullpopup"><div class="company">' + response.list[i].CoName + '</div></a>';
    //                        cur_html = cur_html + '<div class="salary">' + fn_make_comma(Math.floor(response.list[i].AvgSalaryAmt)) + '만원</div>';
    //                        cur_html = cur_html + '</li>';
    //                    }
    //                }
    //                $(".list-salary-popularity").append(cur_html);
    //            },
    //            error: function (request, status, error) {
    //                alert("code:" + request.status + "\n" + "error:" + error);
    //            }
    //        });
    //    });

    //    //콤마 처리
    //    function fn_make_comma(str) {
    //        str = String(str);
    //        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    //    }

    //});

    //고객센터 - 배너 리스트 (관리자 연동)
    //$(function () {
    //    $(".jk-menu-total-body .help").click(function (e) {
    //        $.ajax({
    //            type: "GET",
    //            url: "/include/main/Banner_List_AJAX.asp",
    //            dataType: "json",
    //            success: function (response) {
    //                var data = response.list;
    //                var cur_html = "";
    //                var className = "";
    //                var totalCnt = data.length - 1;
    //                $(".swiper-event .helpContext > div").remove();
    //                for (var i = 0; i < data.length; i++) {
    //                    //if (i === 0) {
    //                    //	className = "active";
    //                    //	cur_html = cur_html + '<div class="swiper-slide swiper-slide-item swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="' + totalCnt + '" style="width: 230px;">' + data[totalCnt].Title + '</div>';
    //                    //} else if (i === data.length - 1) {
    //                    //	className = "duplicate-prev";
    //                    //} else {
    //                    //	className = "next";
    //                    //}
    //                    cur_html = cur_html + '<div class="swiper-slide swiper-slide-item"> <a href= "' + data[i].URL_Path + '"> <img src="' + data[i].Image_Path + '"  alt="' + data[i].Title + '"> </a></div>';
    //                    //if (i === data.length - 1) {
    //                    //	cur_html = cur_html + '<div class="swiper-slide swiper-slide-item swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 230px;">' + data[0].Title + '</div>';
    //                    //}
    //                }
    //                //alert(cur_html);
    //                $(".swiper-event .helpContext").append(cur_html);
    //                ui.menutotal.plugin.swipe.initialize();
    //            },
    //            error: function (request, status, error) {
    //                alert("code:" + request.status + "\n" + "error:" + error);
    //            }
    //        });
    //    });
    //});

    //고객센터 - 최근본메뉴 조회, 삭제
    //$(function () {

    //    //var CookieValue = getCookie('CookieNo');

    //    $(".button-menu-total, .leftView").click(function (e) {
    //        Recent_Menu("L", "");
    //    });

    //    $(".jk-menu-total-body .recently").click(function (e) {
    //        Recent_Menu("L", "1");
    //    });

    //    $(".jk-header-main-nav .button-more").click(function (e) {
    //        Recent_Menu("G", "");
    //    });

    //    var Recent_Menu = function (Type, gubun) {
    //        //var keyNo = CookieValue;

    //        $.ajax({
    //            type: "GET",
    //            url: "/include/Menu/Recently_List_AJAX.asp",
    //            dataType: "json",
    //            //data: "KeyNo=" + keyNo,
    //            success: function (response) {
    //                var cur_html = "";
    //                var Recently_chk_data = false;

    //                //alert(response.list.length);
    //                if (response.list.length > 0) {
    //                    //alert(Type);
    //                    if (Type == "L") {
    //                        $(".popup-recently .popup-nav > div").remove();
    //                        //cur_html = cur_html + '<div class="popup-nav" role="navigation">';

    //                        if (response.list[0].Menu_name == "0") {
    //                            cur_html = cur_html + '<div class="no-recently">최근 본 메뉴가 없습니다.</div>';
    //                        } else {
    //                            Recently_chk_data = true;
    //                            for (var i = 0; i < response.list.length; i++) {

    //                                cur_html = cur_html + '	<div class="popup-nav-item">';
    //                                cur_html = cur_html + '		<a href="' + response.list[i].Menu_URL + '" class="popup-nav-item-link">' + response.list[i].Menu_name + '</a>';
    //                                cur_html = cur_html + '		<button type="button" deleteIdx="' + response.list[i].Fvrt_Idx + '" class="button button-delete" menuType="L" >삭제</button>';
    //                                cur_html = cur_html + '	</div>';
    //                            }
    //                        }
    //                    } else {
    //                        $(".jk-header-main-nav .recently .menu > div").remove();
    //                        //cur_html = cur_html + '<div class="popup-nav" role="navigation">';
    //                        if (response.list[0].Menu_name == "0") {
    //                            cur_html = cur_html + '<div class="no-recently">최근 본 메뉴가 없습니다.</div>';
    //                        } else {
    //                            Recently_chk_data = true;
    //                            for (var j = 0; j < response.list.length; j++) {
    //                                cur_html = cur_html + '	<div class="item">';
    //                                cur_html = cur_html + '		<a href="' + response.list[j].Menu_URL + '" >' + response.list[j].Menu_name + '</a>';
    //                                cur_html = cur_html + '		<button type="button" deleteIdx="' + response.list[j].Fvrt_Idx + '" class="button button-delete" menuType="G">삭제</button>';
    //                                cur_html = cur_html + '	</div>';
    //                            }
    //                        }
    //                    }
    //                } else {
    //                    cur_html = cur_html + '<div class="no-recently">최근 본 메뉴가 없습니다.</div>';
    //                }

    //                if (Type == "L") { //왼쪽메뉴
    //                    if (Recently_chk_data) {
    //                        $(".button-delete-all").show();
    //                        $(".popup-recently .popup-nav").append(cur_html);
    //                        ui.menutotal.layout.nav('recently');
    //                    } else {
    //                        $(".button-delete-all").hide();
    //                        $(".popup-recently .popup-nav").html(cur_html);

    //                        if (gubun == "1") {
    //                            ui.menutotal.layout.nav('recently');
    //                        } else {
    //                            ui.menutotal.layout.nav();
    //                        }

    //                    }
    //                } else {  //GNB 메뉴
    //                    if (Recently_chk_data) {
    //                        $(".button-reset").show();
    //                        $(".jk-header-main-nav .recently .menu").append(cur_html);
    //                        ui.menutotal.layout.nav('recently');
    //                    } else {
    //                        $(".jk-header-main-nav .recently .menu > div").remove();
    //                        $(".jk-header-main-nav .recently .menu").append(cur_html);
    //                        $(".button-reset").hide();
    //                        //$(".popup-recently .popup-nav").html(cur_html);

    //                        if (gubun == "1") {
    //                            ui.menutotal.layout.nav('recently');
    //                        } else {
    //                            ui.menutotal.layout.nav();
    //                        }
    //                    }

    //                }
    //                //ui.menutotal.layout.nav('recently');
    //            },
    //            error: function (request, status, error) {
    //                alert("code:" + request.status + "\n" + "error:" + error);
    //            }
    //        });
    //    };

    //    $("body").on("click", ".button-yes", function () {
    //        var deltype = "A";
    //        var reloadMenu = $("#requestMenu").val();
    //        Recent_Delete(0, deltype, CookieValue, reloadMenu, "");
    //        $("#requestMenu").val("L");
    //    });

    //    $("body").on("click", ".button-delete", function () {
    //        var deleteIdx = $(this).attr("deleteidx");
    //        var MenuType = $(this).attr("menuType");
    //        var deltype = "D";
    //        Recent_Delete(deleteIdx, deltype, CookieValue, MenuType);
    //    });

    //    $("body").on("click", ".button-reset", function () {
    //        $("#requestMenu").val("G");
    //        ui.main.modal.removeAll.attached();
    //    });


    //    var Recent_Delete = function (deleteIdx, deltype, keyNo, MenuType) {
    //        //alert("KeyNo=" + keyNo + "&Idx=" + deleteIdx + "&DelType=" + deltype + "&IsMobile=1");
    //        //return false;
    //        //include/Menu/Recently_UPDATE_AJAX.asp?KeyNo=97914&Idx=8&DelType=D&IsMobile=1

    //        $.ajax({
    //            type: "GET",
    //            url: "/include/Menu/Recently_UPDATE_AJAX.asp",
    //            dataType: "json",
    //            data: "KeyNo=" + keyNo + "&Idx=" + deleteIdx + "&DelType=" + deltype + "&IsMobile=1",
    //            success: function (response) {
    //                if (response.rc != "1") {
    //                    alert(response.msg);
    //                }
    //                //최근본 메뉴 다시 호출
    //                var gubun = "";
    //                if (MenuType == "L") {
    //                    gubun = "1";
    //                }
    //                Recent_Menu(MenuType, gubun);
    //            },
    //            error: function (request, status, error) {
    //                alert("code:" + request.status + "\n" + "error:" + error);
    //            }
    //        });

    //        if (deltype == "A") {
    //            ui.menutotal.modal.removeAll.detached(); //모달창 닫기
    //        }
    //    };
    //});

    //$(function () {
    //    $(".icoSchBtn").click(function (e) {
    //        if ($(this).attr("id") != "aSearch") {          //커리어패스는 통합검색 제외
    //            if ($("#dev_gnbVersion_stat").val() == "0") { //구조개편(기존 기능 유지)
    //                if ($("#dev_ts_xml").val() == "") {
    //                    $("#wrap > #scC, #menuWrap").hide();
    //                    $(".schWrap").show();
    //                    $(".jkSchInp").focus();
    //                } else {
    //                    location.href = "/sm/search_ajax.asp?TS_XML=" + $("#dev_ts_xml").val() + "&M_View_Type=fullpopup";
    //                }
    //            } else {
    //                AppExecute("goSub?uitype=0");
    //            }
    //        }
    //    });
    //});

    //공유하기 레이어 띄우기
    $("body").on("click", "#shareBtn, .jkBtnShare", function () {

        var tsXml = $("#dev_ts_xml").val();
        var VersionLen = $("#dev_newappversion").val().length;

        if ((tsXml == "4") || (tsXml == "5")) { 

            var C_Name = $("#dev_ShareTitle").val();
            var GI_Title = $("#dev_ShareContent").val();
            var LogoUrl = $("#dev_ShareLogoUrl").val();
            var Mem_Type_Code = $("#dev_MemTypeCode").val();
            if ($("#dev_Gno").val() != "") {
                var dev_Gno = $("#dev_Gno").val();
            }
            else {
                var dev_C_Idx = $("#dev_C_Idx").val();
            }

            var HpTag = "";
            var SubTitle = "";

            if (dev_ShortDiv == "GI") {
                HpTag = " - ";
            }

            if (dev_ShortDiv == "CO") {
                SubTitle = " 기업정보 바로가기";
            }

            if (dev_Gno != "" || dev_Gno != undefined) {
                AppExecute("share?title=" + encodeURIComponent(C_Name) + "&content=" + encodeURIComponent(HpTag + GI_Title + SubTitle) + "&logourl=" + encodeURIComponent(LogoUrl) + "&shortenurl=" + $("#dev_ShortURL").val() + "&gno=" + dev_Gno + "&Mem_Type_Code=" + Mem_Type_Code); //새창 닫기
            }
            else {
                AppExecute("share?title=" + encodeURIComponent(C_Name) + "&content=" + encodeURIComponent(HpTag + GI_Title + SubTitle) + "&logourl=" + encodeURIComponent(LogoUrl) + "&shortenurl=" + $("#dev_ShortURL").val() + "&C_Idx=" + dev_C_Idx); //새창 닫기
            }

        } else {
            $(".jkLyWrap").velocity("fadeIn");
        }
    });

    //공유하가 레이어 닫기
    $("body").on("click", ".lyBack, .jkLyClose", function () {
        $(".jkLyWrap").velocity("fadeOut");
    });

    //클립보드 시작
    var clipboardSupport = true;

    try {
        $.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());

        var version = $.browser.version;
        version = new Number(version.substring(0, version.indexOf(".")));

        //모바일 접속인지 확인
        if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i))) {
            //클립보드 복사기능이 될경우 (크롬 42+)
            if ($.browser.chrome == true && version >= 42) {
                clipboardSupport = true;
            } else {
                clipboardSupport = false;
            }
        }

    } catch (e) {

    }

    if (clipboardSupport) {
        $("#dev_btnCopyClip").show();
        //$("#txtCopyClip").hide();
    } else {
        $("#dev_btnCopyClip").hide();
        // $("#txtCopyClip").show();
    }

    function exists(namespace) {
        var tokens = namespace.split('.');
        return tokens.reduce(function (prev, curr) {
            return (typeof prev == "undefined") ? prev : prev[curr];
        }, window);
    }

    //클립보드 에러 방지 
    try {
        var clipboard = new Clipboard('#dev_btnCopyClip');
        clipboard.on('success', function (e) {


            //company, recruit 페이지에서 ui 객체 있을 때
            var existsUrlCopy = exists("ui.company.header.popup.urlcopy.once");
            if (existsUrlCopy !== undefined) {
                ui.company.header.popup.urlcopy.once();
            } else {
                $(".lyUrlTx").show();
                $(".lyUrlTx").fadeOut(2000);
            }
        });
        clipboard.on('error', function (e) {
            alert("접속중인 기기및 브라우저에서는\n클립보드 복사를 지원하지 않습니다.\nURL을 길게 누르면 복사하실 수 있습니다.");
        });
        clipboard.on('success', function () {
            go_share_count(5);
        });
    } catch (e) { }
    //클리보드 끝 


    var isIos = navigator.userAgent.match(/(ipod|iphone|ipad)/i) ? true : false;
    var isAndroid = navigator.userAgent.match(/Android/i) ? true : false;
    var isMobile = isAndroid || isIos;
    var cur_location = location.href.toLowerCase().replace("http://mts.jobkorea.co.kr", "").replace("https://mts.jobkorea.co.kr", "").replace("http://m.jobkorea.co.kr", "").replace("https://m.jobkorea.co.kr", "").replace("http://m104.jobkorea.co.kr", "").replace("https://m104.jobkorea.co.kr", "").replace("http://mts1.jobkorea.co.kr", "").replace("http://mts2.jobkorea.co.kr", "").replace("http://mts3.jobkorea.co.kr", "").replace("http://mts4.jobkorea.co.kr", "").replace("http://mts5.jobkorea.co.kr", "").replace("http://mts6.jobkorea.co.kr", "").replace("http://mts7.jobkorea.co.kr", "");
    //앱다운로드 상단 레이어
    var AppDownCookie = getCookie('th20160601__');

    window.curtain = window.curtain || {}
    window.curtain.isLoad = window.curtain.isLoad || false;

    if ($('.jk-banner-promotion').length > 0) {

        if (((AppDownCookie == "" || AppDownCookie == undefined) && (isAndroid == true) && ($("#dev_ts_xml").val() == "" || $("#dev_ts_xml").val() == undefined))) {
            var $jkBanner = $(".jk-banner-promotion");

            //추천서비스 페이지 일경우는 head fixed를 remove 시킨다.
            if (cur_location.indexOf('textuser/recommend') > -1) {
                if ($(".jk-header-container").length > 0) {
                    var $jkheader = $(".jk-header-container");

                    if ($jkheader.hasClass('fixed')) {
                        $jkheader.removeClass('fixed');
                    }
                }
            }
            var html = '<a href="{LINK}" class="link devBtnAppDown">';
            html += '<img src="{IMG_URL}" alt="{IMG_DESC}">';
            html += '</a>';
            html += '<button type="button" class="button button-close">닫기</button>';

            html = html.replace("{LINK}", "#");
            html = html.replace("{IMG_URL}", "https://i.jobkorea.kr/content/images/m/banner/ban_appDown_20161013v2.png?20180105");
            html = html.replace("{IMG_DESC}", "합격기능기업 실시간 알림 받자! 잡코리아앱 스마트 매치. 앱으로 보기");
            $jkBanner.css("background-color", "#ffffff");
            $jkBanner.html(html);

            //상단 배너 닫기
            $jkBanner.on("click", ".button-close", function () {
                var $this = $(this);
                setCookie('th20160601__', 'yes', 1440 * 7, '/', 'jobkorea.co.kr');	// 24*60*1분 (365일간 유효), 쿠키이름과 유효기간만 수정!!
                $(".jk-banner-promotion").hide();
            });

        } else {
            $(".jk-banner-promotion").hide();
        }
    }

    //console.log("window.curtain.isLoad", window.curtain.isLoad);

    if (!window.curtain.isLoad && (((AppDownCookie == "" || AppDownCookie == undefined) && (isAndroid == true) && ($("#dev_ts_xml").val() == "" || $("#dev_ts_xml").val() == undefined)))) {

        window.curtain.isLoad = true;
        // 테스트 주소 변환 처리 
        var currentLocation = cur_location;
        if (cur_location.indexOf("http://") || cur_location.indexOf("https://")) {

            currentLocation = currentLocation.replace("http://");
            currentLocation = currentLocation.replace("https://");

            var arrSplit = currentLocation.split('/');

            if (arrSplit.length > 1) {
                arrSplit.splice(0, 1);

                currentLocation = "/" + arrSplit.join("/");
            }

            //console.log("currentLocation:", currentLocation);
        }

        if (currentLocation.indexOf("?") > 0) {
            currentLocation = currentLocation.substring(0, currentLocation.indexOf("?"));
        }

        // 매칭 주소 배열 
        // 폴더 경로 일경우 /careerpath/ 까지 입력 (예: /careerpath (X) /careerpath/ (O)) 
        var arrMatchUrl = ["/careerpath/", "/salary/"];
        var arrExistUrl = ["/start/", "/headhunting/"];
        var isShowUrl = false;
        var i, len;
        var isHeaderMenuPositionFixed = false;

        len = arrMatchUrl.length;

        if ($(".jkHeadInner").css("position") === "fixed" || $(".filterTop").css("position") === "fixed") {
            isHeaderMenuPositionFixed = true;
        }

        if (!isHeaderMenuPositionFixed) {
            for (i = 0; i < len; i++) {
                var matchUrl = arrMatchUrl[i];

                if (currentLocation === matchUrl) {
                    isShowUrl = true;
                } else if (matchUrl.substr(matchUrl.length - 1, 1) === "/" && currentLocation === matchUrl.substr(0, matchUrl.length - 1)) {
                    isShowUrl = true;
                } else if (currentLocation === matchUrl + "default.asp" || currentLocation === matchUrl + "index") {
                    isShowUrl = true;
                }

                if (isShowUrl) {
                    break;
                }
            }
        }

        if (!isHeaderMenuPositionFixed && !isShowUrl) {
            len = arrExistUrl.length;

            for (i = 0; i < len; i++) {
                if (currentLocation.indexOf(arrExistUrl[i]) > -1) {
                    isShowUrl = true;
                    break;
                }
            }
        }

        if (isShowUrl) {

            //console.log("curtain start");

            var html = '    <div class="jk-banner-promotion" style="background-color:{BG_COLOR}">\n';
            html += '        <a href="{LINK}" class="link" {EVENT}>\n';
            html += '            <img src="{IMG_URL}" alt="{IMG_DESC}">\n';
            html += '        </a>';
            html += '        <button type="button" class="button button-close">닫기</button>\n';
            html += '    </div>\n';

            $.getJSON("/include/Main/Main_EventBanner_Ajax.asp", { "type": "Link" }).done(function (data) {
                if (data != null && data != undefined) {
                    html = html.replace("{EVENT}", "");
                    html = html.replace("{LINK}", data.link);
                    html = html.replace("{IMG_URL}", data.url);
                    html = html.replace("{IMG_DESC}", data.text);
                    html = html.replace("{BG_COLOR}", (data.bgcolor.indexOf("#") < 0 ? "#" : "") + data.bgcolor);
                }
                else {
                    html = "";
                }

                if (html && $('.jk-banner-promotion').length == 0) {
                    $("body").prepend(html);
                    var $jkBanner = $(".jk-banner-promotion");

                    $jkBanner.on("click", ".link", function () {
                        $.ajax({
                            url: "/include/Main/Main_EventBanner_Ajax.asp",
                            type: "POST",
                            async: false,
                            cache: false,
                            data: { "Type": "ClickCnt", "Idx": data.Idx }
                        }).done(function () {
                        });
                    });

                    //상단 배너 닫기
                    $jkBanner.on("click", ".button-close", function () {
                        var $this = $(this);
                        setCookie('th20160601__', 'yes', 1440 * 7, '/', 'jobkorea.co.kr');	// 24*60*1분 (365일간 유효), 쿠키이름과 유효기간만 수정!!
                        $(".jk-banner-promotion").hide();
                    });
                }
            });
        }
    }

    ////상단 배너 닫기
    ////$(".appDownBx").slideDown(500);
    //$("body").on("click", ".appDownClose", function () {
    //    var $this = $(this);
    //    setCookie('th20160601__', 'yes', 1440 * 7, '/', 'jobkorea.co.kr');	// 24*60*1분 (365일간 유효), 쿠키이름과 유효기간만 수정!!
    //    $(".appDownBx").hide();
    //});


    //history.back 일 경우 앱 해더 선택 처리
    //앱일 경우만, 웹일 경우 페이스북 인앱에서 웹페이지 실행시 페이지 이탈 alert 뜸
    var cur_location = location.href.toLowerCase() + "/";
    cur_location = cur_location.replace("//", "/");

    var appVersion = $("#dev_app_version").val();
    //3.0개편 분기처리작업
    window.scriptLoad = window.scriptLoad || false;

    //console.log("window.scriptLoad:", window.scriptLoad);
    if (!window.scriptLoad) {
        if (appVersion < 3) {
            if ((cur_location.indexOf("/start/best1000") >= 0)
                || (cur_location.indexOf("/salary") >= 0 && cur_location.indexOf("category=1") >= 0)
                || (cur_location.indexOf("/careerpath") >= 0 && cur_location.indexOf("category=1") >= 0)
                || (cur_location.indexOf("/careerpath") >= 0 && cur_location.indexOf("category=2") < 0)
                || (cur_location.indexOf("/recruit/theme") >= 0 && cur_location.indexOf("category=1") >= 0)) {
                if (cur_location.indexOf("/recruit/theme") >= 0) { // 테마관은 TS_XML 이 존재하므로 별도 처리
                    if (document.getElementsByName("TS_XML").length == 1) {
                        if (document.getElementsByName("TS_XML")[0].value != "") {
                            AppExecute("category?on=1");
                        }
                    }
                } else {
                    if (document.getElementsByName("TS_XML").length == 0) {	//start에서는 앱일 경우 TS_XML input name 이 없음.
                        AppExecute("category?on=1");
                    }
                }
            } else if ((cur_location.indexOf("/super/") >= 0)
                || (cur_location.indexOf("/start/careerbest1000") >= 0)
                || (cur_location.indexOf("/salary") >= 0 && cur_location.indexOf("category=2") >= 0)
                || (cur_location.indexOf("/careerpath") >= 0 && cur_location.indexOf("category=2") >= 0)
                || (cur_location.indexOf("/recruit/theme") >= 0 && cur_location.indexOf("category=2") >= 0)) {
                if (document.getElementsByName("TS_XML").length == 1) {
                    if (document.getElementsByName("TS_XML")[0].value != "") {
                        AppExecute("category?on=2");
                    }
                }
            } else if ((cur_location.indexOf("/goodjob") >= 0 && cur_location.indexOf("/view") < 0)
                || (cur_location.indexOf("/textuser/human") >= 0)) {
                if (document.getElementsByName("TS_XML").length == 1) {
                    if (document.getElementsByName("TS_XML")[0].value != "") {
                        AppExecute("category?on=3");
                    }
                }
            }
        } else {
            if (typeof getGroupCookie30 !== 'undefined') {
                var tsXml = $("#dev_ts_xml").val();

                if (getGroupCookie30("Mjobkorea", "apptsxml") != "") {
                    if ((cur_location.indexOf("/top100/") >= 0) || (cur_location.indexOf("/super/") >= 0) || (cur_location.indexOf("/recruit/theme") >= 0)
                        || (cur_location.indexOf("/recruit/joblist/partarea") >= 0) || (cur_location.indexOf("/recruit/joblist/mysearch") >= 0)
                        || (cur_location.indexOf("/recruit/joblist/partlist") >= 0) || (cur_location.indexOf("/recruit/joblist/arealist") >= 0) 
                        || (cur_location.indexOf("/recruit/ai") >= 0)  ) {
                        if ((tsXml == "4" && VersionCompareJS("appversion", "4.0.0") >= 1) || (tsXml == "5" && VersionCompareJS("appversion", "4.0.0") >= 1)) {
                            if ((cur_location.indexOf("/super/") < 0)) {
                                AppExecute("ui?title=채용공고");
                            }
                        }
                        else {
                            AppParamExcute("toapp://category?on=11", "", "0");
                        }
                    } else if ((cur_location.indexOf("/recruit/onepick/joblist") >= 0)) {
                        if ((tsXml == "4" && VersionCompareJS("appversion", "4.0.0") >= 1) || (tsXml == "5" && VersionCompareJS("appversion", "4.0.0") >= 1)) {
                            AppExecute("ui?title=채용공고&tabmenu=원픽");
                        }
                    } else if ((cur_location.indexOf("/headhunting/") >= 0)) {
                        if ((tsXml == "4" && VersionCompareJS("appversion", "4.0.0") >= 1) || (tsXml == "5" && VersionCompareJS("appversion", "4.0.0") >= 1)) {
                            if ((cur_location.indexOf("/headhunting/headhunter/profile/") < 0) && (cur_location.indexOf("/headhunting/headhunter/partinfo") < 0)) {
                                AppExecute("ui?title=헤드헌팅");
                            }
                        }
                        else {
                            AppParamExcute("toapp://category?on=13", "", "0");
                        }
                    } else if ((cur_location.indexOf("/qna/") >= 0) || (cur_location.indexOf("/careerpath/") >= 0)
                        || (cur_location.indexOf("/goodjob/") >= 0) || (cur_location.indexOf("/start/passassay") >= 0) || (cur_location.indexOf("/start/spec") >= 0)
                        || (cur_location.indexOf("/start/review") >= 0) || (cur_location.indexOf("/start/onair") >= 0) || (cur_location.indexOf("/start/interview") >= 0)
                        || (cur_location.indexOf("/start/learning") >= 0) || (cur_location.indexOf("/start/pubmoctest") >= 0) || (cur_location.indexOf("/textuser/human") >= 0)
                        || (cur_location.indexOf("/Start/PubMoctest") >= 0) || (cur_location.indexOf("/ai/analysis") >= 0) || (cur_location.indexOf("/ai/evaluation") >= 0)
                        || (cur_location.indexOf("/futurelab/") >= 0) || (cur_location.indexOf("/textuser/qna") >= 0)) {
                        if ((tsXml == "4" && VersionCompareJS("appversion", "4.0.0") >= 1) || (tsXml == "5" && VersionCompareJS("appversion", "4.0.0") >= 1)) {
                            if ((cur_location.indexOf('start/passassay/view') < 0) && (cur_location.indexOf('/start/review/view') < 0)
                                && (cur_location.indexOf('/textuser/qna/mainprofile') < 0) && (cur_location.indexOf('/textuser/qna/talksearchwindow') < 0)
                                && (cur_location.indexOf('/textuser/qna/questiondetailall') < 0) && (cur_location.indexOf('/textuser/resume') < 0) 
                                && (cur_location.indexOf('/textuser/qna/qstngroup') < 0) && (cur_location.indexOf('/textuser/qna/subscriber') < 0)
                                && (cur_location.indexOf('/textuser/qna/blockuser') < 0) && (cur_location.indexOf('/textuser/qna/setprofile') < 0)
                                && (cur_location.indexOf('/start/interview/view') < 0) && (cur_location.indexOf('/start/learning/poplectureintroduction') < 0)
                                && (cur_location.indexOf('/start/learning/video') < 0) && (cur_location.indexOf('/goodjob/lencheck') < 0)
                            ) {
                                AppExecute("ui?title=커리어");
                            } 
                        }
                        else {
                            AppParamExcute("toapp://category?on=14", "", "0");
                        }
                    } else if ((cur_location.indexOf("/salary/") >= 0) || (cur_location.indexOf('/start/companyreport') >= 0)
                        || (cur_location.indexOf("/review/") >= 0 && cur_location.indexOf("/start/review") < 0)) {
                        if ((tsXml == "4" && VersionCompareJS("appversion", "4.0.0") >= 1) || (tsXml == "5" && VersionCompareJS("appversion", "4.0.0") >= 1)) {
                            if ((cur_location.indexOf('/company/') < 0) && (cur_location.indexOf('/review/serviceview') < 0) && (cur_location.indexOf('/review/reviewsearch') < 0)
                                && (cur_location.indexOf('/start/companyreport/view') < 0) && (cur_location.indexOf('/review/comparesearch') < 0) && (cur_location.indexOf('/review/compare') < 0)) {
                                AppExecute("ui?title=커리어");
                            }                            
                        }
                        else {
                            AppParamExcute("toapp://category?on=15", "", "0");
                        }
                    } else if ((cur_location.indexOf("/start/") >= 0) || (cur_location.indexOf("/starter/desk_list.asp") >= 0) || (cur_location.indexOf("/starter/desk_view.asp") >= 0)) {
                        if ((tsXml == "4" && VersionCompareJS("appversion", "4.0.0") >= 1) || (tsXml == "5" && VersionCompareJS("appversion", "4.0.0") >= 1)) {
                            AppExecute("ui?title=공채");
                        }
                        else {
                            AppParamExcute("toapp://category?on=12", "", "0");
                        }
                    } else if ((cur_location.indexOf("/help/notice") >= 0) || (cur_location.indexOf("/help/inquiry") >= 0) || (cur_location.indexOf("/help/faq") >= 0)
                        || (cur_location.indexOf("/help/event") >= 0)) {
                        if ((tsXml == "4" && VersionCompareJS("appversion", "4.0.0") >= 1) || (tsXml == "5" && VersionCompareJS("appversion", "4.0.0") >= 1)) {
                            if (cur_location.indexOf("/help/notice/view") >= 0) {
                                AppExecute("ui?title=공지사항");
                            }
                            else {
                                if ((cur_location.indexOf('/help/inquiry/propose') < 0) && (cur_location.indexOf('/help/inquiry/report') < 0) && (cur_location.indexOf('/help/inquiry/service') < 0)
                                    && (cur_location.indexOf('/help/inquiry/list') < 0)) {
                                    AppExecute("ui?title=고객센터");
                                }                               
                            }                            
                        }
                        else {
                            AppParamExcute("toapp://category?on=17", "", "0");
                        }
                    }
                }
            }

        }
    }

    window.scriptLoad = true;
});

//앱 > 공유하기Icon 노출 및 관련 정보제공
function toAppShareIcon(CalendarStat) {
    AppExecute("showShareUI?btnSaveCalendar=" + CalendarStat);
}

//앱일경우 공유하기 toapp://share로 띄우기(기획팀 김윤미선임 요청)
$(".toappShare").click(function () {
    toApp_share();
});

//앱에서 공유하기할때
function toApp_share() {
    var tsXml = $("#dev_ts_xml").val();

    //IOS앱일때는 시스템 공유하기
    if (tsXml != "4") {
        var cur_url = location.href.toLowerCase();
        //공고뷰이면서 회원유형코드가 서치펌일 경우 true    
        var chk_HRGiReadChk = cur_url.indexOf("/recruit/gi_read") >= 0 ? ($("#dev_MemTypeCode").val() != undefined ? ($("#dev_MemTypeCode").val() == "S" ? true : false) : false) : false;
        //alert(cur_url)
        if (cur_url.indexOf("/recruit/gi_read") >= 0 && chk_HRGiReadChk == false) {
            //공고뷰
            jk.public.recruit.giread.events().onClickModalShare();
        } else if (cur_url.indexOf("/recruit/co_read") >= 0 || cur_url.indexOf("/company/") >= 0) {
            //기업뷰
            ui.company.header.modal.share.attached();
        } else if (cur_url.indexOf("/careerpath/result") >= 0) {
            // Jobkorea.Mobile.Web.CareerPath\Views\CareerPath\Result.cshtml -> layerShow()
            $("._share").velocity("fadeIn");
            $('body').bind('touchmove', function (e) { e.preventDefault(); });
        } else if (cur_url.indexOf("/review/") >= 0 && cur_url.indexOf("/start/") < 0) {
            $('.modal').addClass('attached');
        } else if (cur_url.indexOf("/recruit/theme/giread/mma_caisbyis") >= 0) {
            $(".modalShare").addClass("visible");
        } else {
            $(".jkLyWrap").velocity("fadeIn");
        }
    } else {
        var C_Name = $("#dev_ShareTitle").val();
        var GI_Title = $("#dev_ShareContent").val();
        var LogoUrl = $("#dev_ShareLogoUrl").val();
        var dev_Gno = $("#dev_Gno").val();
        var dev_ShortDiv = $("#dev_ShortDiv").val();
        var dev_appUrl = $("#dev_appUrl").val();
        var Mem_Type_Code = $("#dev_MemTypeCode").val();
        var HpTag = "";
        var SubTitle = "";
        var recommendCheck = $("#hiddenValue").val() != undefined ? true : false;
        if (dev_ShortDiv == "GI") {
            HpTag = " - ";
            //20180612 기획요청으로 해당 프로세스 제거
            //LogoUrl = "";
        }
        if (dev_ShortDiv == "CO") {
            SubTitle = " 기업정보 바로가기";
        }
        if (LogoUrl == "" || LogoUrl == undefined) {
            LogoUrl = "//i.jobkorea.kr/content/images/common/share/share_sns.jpg";
        }
        var LabelText = "";
        LabelText = C_Name + HpTag + GI_Title + SubTitle
        var kakao_param = "sendKakaoTalkV2('', '" + encodeURIComponent(LogoUrl) + "', '" + encodeURIComponent(LabelText) + "', '" + encodeURIComponent(dev_appUrl) + "')";
        //AppExecute("share?title=" + encodeURIComponent(C_Name) + "&content=" + encodeURIComponent(HpTag + GI_Title + SubTitle) + "&logourl=" + encodeURIComponent(LogoUrl) + "&shortenurl=" + $("#dev_ShortURL").val() + "&gno=" + dev_Gno); //새창 닫기
        //AppExecute("share?title=기업정보&content=공고제목&gno=10014550&logourl=//i.jobkorea.kr/content/images/m/noneimg/none_200x100.png&shortenurl=http://adfadf.zz"); //새창 닫기
        if (recommendCheck) {
            AppExecute("share?title=" + encodeURIComponent(C_Name) + "&content=" + encodeURIComponent('\n' + HpTag + GI_Title + SubTitle) + "&logourl=" + encodeURIComponent(LogoUrl) + "&shortenurl=" + $("#dev_ShortURL").val() + "&gno=" + dev_Gno + "&recommend=1&script=" + kakao_param); //새창 닫기
        } else {
            AppExecute("share?title=" + encodeURIComponent(C_Name) + "&content=" + encodeURIComponent(HpTag + GI_Title + SubTitle) + "&logourl=" + encodeURIComponent(LogoUrl) + "&shortenurl=" + encodeURIComponent(dev_appUrl) + "&gno=" + dev_Gno + "&Mem_Type_Code=" + Mem_Type_Code + "&script=" + kakao_param); //새창 닫기
        }
    }
}

// ShortURL 생성
function getShortURL() {
    var dev_ShortDiv = $("#dev_ShortDiv").val();
    if (dev_ShortDiv == "CO" || dev_ShortDiv == "SP" || dev_ShortDiv == "RC") {
        dev_ShortKey = $("#dev_MemID").val();
    } else if (dev_ShortDiv == "SP") {
        dev_ShortKey = $("#superDomain").val();
    } else {
        dev_ShortKey = $("#dev_Gno").val();
    }

    var dev_ShortMoveURL = $("#dev_ShortMoveURL").val();
    $.ajax({
        type: "GET",
        url: "/Include/Common/Short_URL_Create.asp?dev_ShortKey=" + dev_ShortKey + "&dev_ShortDiv=" + dev_ShortDiv + "&dev_ShortMoveURL=" + encodeURIComponent(dev_ShortMoveURL),
        data: "",
        success: function (ShortURL) {
            ShortURL = "http://" + ShortURL;
            $("#dev_ShortURL").val(ShortURL);
            $("#dev_ClipShortURL").html(ShortURL);
            $("#dev_copy_clip").attr('href', ShortURL);
        }
    });
}

// 카카오톡 공유하기
function sendKakaoTalk(Share_Div, Logo_Url, LabelTxt, AppconnUrl) {
    var strURL = $("#dev_ShortURL").val();

    if (Logo_Url != "") {
        Kakao.Link.sendTalkLink({
            label: LabelTxt + strURL,
            image: {
                src: Logo_Url,
                width: '200',
                height: '100'
            },
            webButton: {
                text: '잡코리아앱으로 열기',
                url: AppconnUrl // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
            }
        });
    } else {
        Kakao.Link.sendTalkLink({
            label: LabelTxt + strURL,
            webButton: {
                text: '잡코리아앱으로 열기',
                url: AppconnUrl // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
            }
        });
    }

    go_share_count(1);
}
var isRecommend = false;
var isKakaoInit = false;
// 카카오톡 공유하기 V2
function sendKakaoTalkV2(Share_Div, Logo_Url, LabelTxt, AppconnUrl) {
    var cur_url = location.href.toLowerCase();

    if (AppconnUrl == '' && (cur_url.indexOf("/salary/") >= 0 || cur_url.indexOf("/super/") >= 0 || cur_url.indexOf("/goodjob/tip/") >= 0)) {
        AppconnUrl = $("#dev_appUrl").val();
    } 

    var strURL = $("#dev_ShortURL").val();
    isRecommend = $("#hiddenValue").val() != undefined ? true : false;

    //alert(AppconnUrl)
    if (Logo_Url == "" || Logo_Url == undefined) {
        Logo_Url = "//i.jobkorea.kr/content/images/common/share/share_sns.jpg";
    }
    //console.log(Logo_Url)

    if (Logo_Url != "") {
        if (Logo_Url.toLowerCase().indexOf("https://") < 0 || Logo_Url.toLowerCase().indexOf("http://") < 0) {
            Logo_Url = "https://" + Logo_Url.replace("//", "");
        }

        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: "",
                description: LabelTxt + "\n" + strURL,
                imageUrl: Logo_Url,
                imageWidth: 500,
                imageHeight: 100,
                link: {
                    mobileWebUrl: AppconnUrl
                }
            },
            buttons: [{
                title: (isRecommend ? "웹으로 열기" : "잡코리아앱으로 열기"),
                link: {
                    mobileWebUrl: AppconnUrl
                }
            }],
            installTalk: true
        });
    } else {
        Kakao.Link.sendDefault({
            objectType: 'text',
            text: LabelTxt + "\n" + strURL,
            link: {
                mobileWebUrl: strURL
            },
            buttons: [{
                title: (isRecommend ? "웹으로 열기" : "잡코리아앱으로 열기"),
                link: {
                    mobileWebUrl: AppconnUrl
                }
            }],
            installTalk: true
        });
    }

    if (isRecommend) {
        go_rcmd_share_count(1);
    } else {
        go_share_count(1);
    }
}



//모바일 공유하기 카운팅하기
//page_type : 1 : 공고뷰, 2 : 기업뷰, 3 : 슈퍼기업관, 4 : 취업뉴스, 5 : 취업꿀팁, 6 : 직무인터뷰, 7 : 라이브공채속보, 8 : 공채핵심자료, 9: 인적성 면접 후기, 10:추천서비스 
//sns_type : 1 : 카카오톡, 2 : 페이스북, 3 : 라인, 4 : 메일, 5 : 복사하기
var go_share_count = function (sns_type) {
    var page_type;
    var cur_url = location.href.toLowerCase();
    var cur_search = location.search.toLowerCase();

    if (cur_url.indexOf("/recruit/gi_read") >= 0) {
        page_type = 1;
    } else if (cur_url.indexOf("/recruit/co_read") >= 0) {
        page_type = 2;
    } else if (cur_url.indexOf("/super/") >= 0) {
        page_type = 3;
    } else if (cur_url.indexOf("/goodjob/news/view") >= 0) {
        if (cur_search.indexOf("schctgr=101") >= 0) {
            page_type = 5;
        } else {
            page_type = 4;
        }
    } else if (cur_url.indexOf("/goodjob/interview/view") >= 0) {
        page_type = 6;
    } else if (cur_url.indexOf("/review/view") >= 0) {
        page_type = 9;
    } else if (cur_url.indexOf("/textuser/recommend") >= 0) {
        page_type = 10;
    }

    var param = "Page_Type=" + page_type;
    param += "&Sns_Type=" + sns_type;
    param += "&1=1"

    $.ajax({
        url: "/link/Share_Insert_JSON.asp",
        type: "GET",
        contentType: 'application/json; charset=utf8',
        dataType: "jsonp",
        data: param
    });

}

//sns_type : 1 : 카카오톡, 2 : 페이스북, 3 : 라인, 4 : sms, 5 : 복사하기
var go_rcmd_share_count = function (sns_type) {
    var page_type;
    var cur_url = location.href.toLowerCase();
    var cur_search = location.search.toLowerCase();

    var param = "&snsType=" + sns_type;


    $.ajax({
        url: "/TextUser/Recommend/RecommendShareCount",
        type: "GET",
        contentType: 'application/json; charset=utf8',
        dataType: "jsonp",
        data: param
    });

}




// send to SNS
function toSNS(sns, strTitle) {
    var strURL = $("#dev_ShortURL").val();
    var snsArray = new Array();
    var strMsg = strTitle + " " + strURL;
    var image = "이미지경로";
    isRecommend = $("#hiddenValue").val() != undefined ? true : false;
    var smsUrl = "";
    var ts_xml = $("#dev_ts_xml").val();

    var isIos = navigator.userAgent.match(/(ipod|iphone|ipad)/i) ? true : false;
    var isAndroid = navigator.userAgent.match(/Android/i) ? true : false;
    var isMobile = isAndroid || isIos;

    if (sns == "sms") {
        smsUrl = $("#smsUrl").val();

        if (isAndroid) {
            smsUrl = "sms://?body=" + smsUrl;
        }

        if (isIos) {
            smsUrl = "sms://&body=" + smsUrl;
        }
    }


    snsArray['facebook'] = "http://m.facebook.com/sharer.php?u=" + encodeURIComponent(strURL);
    snsArray['line'] = "http://line.me/R/msg/text/?" + encodeURIComponent(strTitle) + "%0D%0A" + encodeURIComponent(strURL);
    snsArray['mailMsg'] = "mailto:?subject=" + encodeURIComponent(strTitle) + "&body=" + encodeURIComponent(strTitle) + "%0D%0A" + encodeURIComponent(strURL);
    snsArray['sms'] = smsUrl + "%0D%0A" + encodeURIComponent(strURL);


    /* 미 사용
    snsArray['twitter'] = "http://twitter.com/home?status=" + encodeURIComponent(strTitle) + ' ' + encodeURIComponent(strURL);    
    snsArray['pinterest'] = "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(strURL) + "&media=" + image + "&description=" + encodeURIComponent(strTitle);
    snsArray['band'] = "http://band.us/plugin/share?body=" + encodeURIComponent(strTitle) + "  " + encodeURIComponent(strURL) + "&route=" + encodeURIComponent(strURL);
    snsArray['blog'] = "http://blog.naver.com/openapi/share?url=" + encodeURIComponent(strURL) + "&title=" + encodeURIComponent(strTitle);    
    snsArray['pholar'] = "http://www.pholar.co/spi/rephol?url=" + encodeURIComponent(strURL) + "&title=" + encodeURIComponent(strTitle);
    snsArray['google'] = "https://plus.google.com/share?url=" + encodeURIComponent(strURL) + "&t=" + encodeURIComponent(strTitle);
    */

    switch (sns.toLowerCase()) {
        case "facebook": (isRecommend ? go_rcmd_share_count(2) : go_share_count(2)); break;
        case "line": (isRecommend ? go_rcmd_share_count(3) : go_share_count(3)); break;
        case "mailmsg": go_share_count(4); break;
        case "sms": go_rcmd_share_count(4); break;
            break;
        default:
            break;
    }
    if (sns == "mailMsg" || sns == "sms") {
        location.href = snsArray[sns];
        return
    }

    window.open(snsArray[sns]);
}

//이전으로
function goBack() //구조개편(앱 호출)
{
    if ($("#dev_gnbVersion_stat").val() == "0") { //구조개편(기존 기능 유지)
        history.back();
    } else {
        AppExecute("closeSub?closeLevel=self"); //새창 닫기
    }
}

var iframeno = 0;
function AppExecute(url) //구조개편(앱 호출)
{
    var versionCheck = isEmptyValue($("#dev_app_version").val());
    if (versionCheck < 3) {
        try {
            if (document.getElementById("toappframe" + (iframeno)) == null) {
                var iframe = document.createElement("iframe");
                iframe.setAttribute("id", "toappframe");
                iframe.setAttribute("style", "display:none");
                document.documentElement.appendChild(iframe);
            }
            iframe.setAttribute("src", "toapp://" + url);
            document.documentElement.removeChild("toappframe" + (iframeno));
            iframe = null;
            iframeno++;
        }
        catch (exception) {
        }
    } else {
        AppParamExcute("toapp://" + url, "", "0")
    }
}

// ui form style

;
(function ($) {
    //$.fn.extend({
    //    // input[type='text'] ui placeholder style
    //    txPlaceholder: function (options) {
    //        this.defaults = {
    //            selector: '.jkSchInp'
    //        };
    //        var settings = $.extend({}, this.defaults, options);
    //        return this.has(settings.selector).each(function () {
    //            var $this = $(this),
    //                $inputBox = $this.find(settings.selector);
    //            $inputBox.on({
    //                focus: function () {
    //                    $this.addClass('on');
    //                }, blur: function () {
    //                    $this.removeClass('on');
    //                }
    //            });
    //        });
    //    },
    //    // ui select style
    //    uiJkSelect: function (options) {
    //        this.defaults = {
    //            selector: '.jkSelect'
    //        };
    //        var settings = $.extend({}, this.defaults, options);
    //        debugger;
    //        return this.has(settings.selector).each(function () {
    //            var $this = $(this),
    //                $selBox = $this.find(settings.selector);
    //            $selBox.on({
    //                focus: function () {
    //                    $this.addClass('on');
    //                }, blur: function () {
    //                    $this.removeClass('on');
    //                }, change: function () {
    //                    if ($(this).find('option:checked').attr('selected')) {
    //                        $this.removeClass('change');
    //                    } else {
    //                        $this.addClass('change');
    //                    }
    //                }
    //            });
    //        });
    //    },
    //});

})(jQuery);
$(function () {
    $.fn.extend({
        // input[type='text'] ui placeholder style
        txPlaceholder: function (options) {
            this.defaults = {
                selector: '.jkSchInp'
            };
            var settings = $.extend({}, this.defaults, options);
            return this.has(settings.selector).each(function () {
                var $this = $(this),
                    $inputBox = $this.find(settings.selector);
                $inputBox.on({
                    focus: function () {
                        $this.addClass('on');
                    }, blur: function () {
                        $this.removeClass('on');
                    }
                });
            });
        },
        // ui select style
        uiJkSelect: function (options) {
            this.defaults = {
                selector: '.jkSelect'
            };
            var settings = $.extend({}, this.defaults, options);
            return this.has(settings.selector).each(function () {
                var $this = $(this),
                    $selBox = $this.find(settings.selector);
                $selBox.on({
                    focus: function () {
                        $this.addClass('on');
                    }, blur: function () {
                        $this.removeClass('on');
                    }, change: function () {
                        if ($(this).find('option:checked').attr('selected')) {
                            $this.removeClass('change');
                        } else {
                            $this.addClass('change');
                        }
                    }
                });
            });
        },
    });

    // input[type='text'] ui placeholder
    $('.jkSchInput').txPlaceholder({ selector: '.jkSchInp' });

    // ui select style
    $('.jkSelWrap').uiJkSelect({ selector: '.jkSelect' });

    //fix된 메뉴가 아이폰에서 제대로 작동하지 않을때 사용함.
    $("body").on("focusin", "input, textarea, select", function () {
        var $this = $(this);
        if (navigator.userAgent.match(/iPhone/)) {
            $(".jkHeadInner").addClass("jkHeadStatic");
            if ($this.is(":disabled") || ($this.attr("readonly") == "readonly")) {
                setTimeout(function () { $(".jkHeadInner").removeClass("jkHeadStatic"); }, 1000);
            }
        }
    });

    $("body").on("focusout", "input, textarea, select", function () {
        var $this = $(this);
        if (navigator.userAgent.match(/iPhone/)) {
            $(".jkHeadInner").removeClass("jkHeadStatic");
        }
    });
});

// 앱다운로드 레이어
var go_appdown_click = function () {
    var cur_location = location.href.toLowerCase();
    if (cur_location.indexOf("mts.") < 0) {
        $.get("/Link/?No=38993", "", go_appdown);
    } else {
        $.get("/Link/?No=102", "", go_appdown);
    }
}

var go_appdown = function (go_link) {
    if (go_link === "" || go_link === undefined) {
        go_link = "jobkorea://";
    }
    var web_link = "http://mobile.jobkorea.co.kr/application/m_app_jobkorea.asp";

    isIos = navigator.userAgent.match(/(ipod|iphone|ipad)/i) ? true : false;
    isAndroid = navigator.userAgent.match(/Android/i) ? true : false;
    isMobile = isAndroid || isIos;

    if (isMobile) {
        if (isAndroid) {

            if (navigator.userAgent.match(/Chrome/i)) {
                if (window.opener != null) {
                    setTimeout(function () {
                        window.close();
                        return false;
                    }, 100);
                }
                setTimeout(function () {
                    location.replace("market://details?id=com.jobkorea.app&url=" + encodeURIComponent(go_link));
                    return false;
                }, 25);
            }
            else {
                var install_block = (function () {
                    return function () {
                        location.replace("market://details?id=com.jobkorea.app&url=" + encodeURIComponent(go_link));
                        return false;
                    };
                })(this);
                var iframe = document.createElement('iframe');
                iframe.style.visibility = 'hidden';
                iframe.src = go_link;	//앱으로 이동합니다.
                iframe.onload = install_block;
                document.body.appendChild(iframe);
            }
        } else if (isIos) {
            var install_block = (function () {
                return function () {
                    window.location = "https://itunes.apple.com/kr/app/id569092652";
                };
            })(this);
            setTimeout(install_block, 1050);
            location.href = go_link;	//앱으로 이동합니다.
        } else {
            location.href = web_link;
        }
    } else {
        location.href = web_link;
    }
}

var list_status_change = function (gno, gino, value) {
    var currentUrl = location.href.toLowerCase();
    var Version = $("#dev_app_version").val();
    var xml = $("#dev_ts_xml").val();

    //현재창 리로드 url 체크함수
    var currentCheck = reloadUrlCheck(currentUrl);

    if (currentCheck) {
        //AppExecute("reload?target=self"); --Ver. IOS : 3.3.2, AOS : 3.3.4 이상
        location.reload();
    }
    else {
        var $target = $(".RNL_" + gino)                                     //맞춤채용,나의공고(최근본 공고),스크랩공고
            .add(".RFL_" + gino)                                            //전문채용관,공채달력
            .add(".list-recruit li[data-gino='" + gino + "'] > button")     //지역,직무,분류별,My검색
            .add("button[data-gino='" + gino + "'].btnScrap")               //1000대기업,경력1000대기업,헤드헌팅채용공고,팔로우헤드헌터 채용정보
            .add("button[gino='" + gino + "'].btnScrap")                    //관심기업채용정보
            .add("span[data-gino='" + gino + "'].scrab")                    //검색(통합검색,채용정보,헤드헌팅)
            .add("button[data-gi-no='" + gino + "'].btnScrap")              //그룹사채용
            .add("button[data-gino='" + gino + "'].btnStarScr")             //합격자소서, 직무인터뷰, 인적성후기, 채용설명회
            .add("a[gi_no='" + gino + "'].btnScrap")                        //입사지원현황
            .add("button[data-gino='" + gino + "'].scrap_btn")             //메인홈 스와이프
            .add(".mySmartMatch .section-content label[data-gino='" + gino + "']");                       //추천채용
        //지역,직무,분류별,My검색-> active 그외 on
        var scrapCss = $(".list-recruit li[data-gino='" + gino + "'] > button").length > 0 ? "active" : "on";

        //0:스크랩, 20,30: 스크랩해제
        if (value == 0) {
            $target.addClass(scrapCss);
        } else {
            $target.removeClass(scrapCss);
        }
    }
}

var reloadUrlCheck = function (url) {
    var result = false;
    //관심기업정보, 마이페이지> 스크랩탭
    if ((url.indexOf("text_user/jm_m_list.asp") > 0) ||
        (url.indexOf("textuser/mypage") > 0) ||
        (url.indexOf("list_gi/recent_list.asp") > 0)
    ) {
        result = true;
    }

    return result;
}

var numberToKorean = function (number) {
    var inputNumber = number < 0 ? false : number;
    var unitWords = ['', '만', '억', '조', '경'];
    var splitUnit = 10000;
    var splitCount = unitWords.length;
    var resultArray = [];
    var resultString = '';

    for (var i = 0; i < splitCount; i++) {
        var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        unitResult > 0 ? resultArray[i] = unitResult : '';
    }

    for (var i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }

    resultString = resultString + (resultString != '' ? '원' : '');

    return resultString;
}

//앱체크 시작 - 해당 함수 다른 js 에도 있기 때문에 해당 함수 수정시 VersionCompareJS 로 검색해서 동기화 부탁드립니다.(참조되는 공통js가 다르기 때문에 각 js에 선언됨)
var isNullOrEmptyJS = function (value) {
    return (!value || value == undefined || value == "" || value.length == 0);
}

function VersionCompareJS(orgVersion, compareVersion) {
    var returnValue = 0;

    if (orgVersion == "appversion") // 매번 호출 위치에서 appversion을 선언 또는 hid 값 호출 해야하는 부분을 'appversion' 문자값을 설정하면 함수에서 버전 가져오게 처리
    {
        orgVersion = $("#dev_newappversion").val();
    }

    if (isNullOrEmptyJS(orgVersion) || isNullOrEmptyJS(compareVersion)) {
        return -1;  //오류
    }

    orgVersion = isNullOrEmptyJS(orgVersion) ? "" : orgVersion.trim();
    compareVersion = isNullOrEmptyJS(compareVersion) ? "" : compareVersion.trim();

    if (orgVersion == compareVersion) {
        return 1;   //동일함.
    }
    var orgVersionArr = orgVersion.split('.');
    var comparaVersionArr = compareVersion.split('.');
    if (orgVersionArr.length == comparaVersionArr.length) {
        for (var i = 0; i <= orgVersionArr.length; i++) {
            if (!isNullOrEmptyJS(orgVersionArr[i]) && $.isNumeric(orgVersionArr[i])
                && !isNullOrEmptyJS(comparaVersionArr[i]) && $.isNumeric(comparaVersionArr[i])) {
                if (Number(orgVersionArr[i]) > Number(comparaVersionArr[i]))  //크면
                {
                    returnValue = 2;
                    break;
                }
                else if (Number(orgVersionArr[i]) < Number(comparaVersionArr[i])) //작으면
                {
                    returnValue = 0;
                    break;
                }
            }
            else {
                returnValue = -1;
                break;
            }
        }
    }
    else {
        returnValue = -1;
    }

    return returnValue;
}
//앱체크 종료