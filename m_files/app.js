//app 용 서브메인 메뉴 전체보기 닫기
function dropMenuClose() {
    const navTopAll = document.querySelector('.navTopAll');
    const mobileNavCover = document.querySelectorAll('.mobileNavCover');
    const navAllWrap = document.querySelector('.navAllWrap');

    navTopAll.classList.remove('open');
    navAllWrap.style.display = "none";
    mobileNavCover.forEach(function (covers) {
        covers.style.display = "none";
    });

    //const dropdownSwitch = document.querySelector('.dropdown-switch');
    //const buttonMenu = document.querySelector('.button-menu');
    //if (dropdownSwitch) {
    //    dropdownSwitch.checked = false;
    //    buttonMenu.classList.remove('open');
    //}
}

var fncCmmChkAppDownLink = function (iosVer, androidVer, re_url, message, type) { // ASP, .Net 공용
    var tsXmlObj = $("#dev_ts_xml").val(); // 필수값
    var appVer = $("#dev_newappversion").val(); // 필수값
    var appVerLen = appVer != undefined ? appVer.length : 0;
    var re_url = (re_url != undefined || re_url != "" ? re_url : "http://m.jobkorea.co.kr");
    var message = (message != undefined || message != "" ? message : "최신버전으로 앱을 업데이트 해주세요!");
    var IsPop = re_url.indexOf("goSub?") > -1 ? 1 : 0;

    //re_url = re_url + (IsPop == 1 || tsXmlObj == "" || tsXmlObj == undefined ? "" : "?TS_XML=" + tsXmlObj);

    if (tsXmlObj != "" && tsXmlObj != undefined) { // 앱
        if ((tsXmlObj == "4" && (appVer < iosVer)) || (tsXmlObj == "5" && (appVer < androidVer))) {
            if (confirm(message)) {
                if (tsXmlObj == "4" && (appVer < iosVer)) {
                    re_url = "https://itunes.apple.com/kr/app/id569092652?mt=8";
                } else if (tsXmlObj == "5" && (appVer < androidVer)) {
                    re_url = "https://play.google.com/store/apps/details?id=com.jobkorea.app";
                }
                if (type == "footer") {
                    //20170329 안드로이드 앱 개편으로 closeSub후 이동시켜야 실행됨
                    if (tsXmlObj == "5") {
                        AppExecute("closeSub?closeLevel=all"); //새창 닫기
                        AppExecute("goMain?url=" + escape(re_url));
                    }
                    else {
                        AppExecute("goMain?url=" + escape(re_url));
                        AppExecute("closeSub?closeLevel=all"); //새창 닫기
                    }
                    return false;
                } else {
                    location.href = re_url;
                    return false;
                }
            }
        } else {
            if (type == "footer") {
                if (tsXmlObj == "5") {
                    AppExecute("closeSub?closeLevel=all"); //새창 닫기
                    AppExecute("goMain?url=" + escape(re_url));
                }
                else {
                    AppExecute("goMain?url=" + escape(re_url));
                    AppExecute("closeSub?closeLevel=all"); //새창 닫기
                }
                return false;
            } else {
                if (IsPop == 0) {
                    location.href = re_url;
                } else { // 새창
                    AppExecute(re_url);
                }
                return false;
            }
        }
    } else {
        if (IsPop == 0) {
            location.href = re_url;
        } else { // 새창
            AppExecute(re_url);
        }
        return false;
    }
}

/* 1) 앱 업데이트 안내(신입공채 > 기업공채전략) */
var fncCoHomeAppDownLink = function (type) {
    var re_url = "/start/company";
    var message = "최신버전으로 앱을 업데이트 해주세요! \n다양한 공채자료를 확인할 수 있습니다.";

    fncCmmChkAppDownLink("2.1.7", "2.2.6", re_url, message, type);
}
/* 2) 앱 업데이트 안내(고객센터) */
var fncCustomCenterAppDownLink = function (re_url) {
    var re_url = re_url != undefined ? re_url : "/help/faq";
    var message = "한층 개선된 고객센터 최신 버전이 출시되었습니다.\n업데이트 후 이용해주세요.";

    fncCmmChkAppDownLink("2.2.0", "2.3.1", re_url, message);
}

var fncAppVersionExcute = function (param) {
    //alert(param);
    if (param.toLowerCase().indexOf("oapp://") < 0) {
        param = "toapp://" + param;
    }
    var versionStat = $("#dev_gnbVersion_stat").val();
    var tsXmlStat = getGroupCookie30("Mjobkorea", "apptsxml");

    //alert("versionStat=" + versionStat + "|tsXmlStat=" + tsXmlStat + "|param=" + param);
    if (tsXmlStat == "4") {
        //alert("App3.0 > 아이폰\n" + param);
        window.webkit.messageHandlers.jktoappHandler.postMessage(param);
    } else if (tsXmlStat == "5") {
        //alert("App3.0 > 안드로이드\n" + param);
        window.android.jktoappHandler(param);
    }
}

var fncAppExcuteUrl = function (param) {
    var versionStat  = $("#dev_gnbVersion_stat").val();
    var tsXmlStat    = getGroupCookie30("Mjobkorea", "apptsxml");
    var versionCheck = $("#dev_gnbVersionCheck").val();

    if (tsXmlStat == "4") {
        if (versionCheck > 2) {
            window.webkit.messageHandlers.jktoappHandler.postMessage(param);
        } else {
            location.href = param;
        }
    } else if (tsXmlStat == "5") {
        if (versionCheck > 2) {
            window.android.jktoappHandler(param);
        } else {
            location.href = param;
        }
    }
}

$(function () {
    //$("a[app]").on("click", function (evt) {
    $(document).on("click", "a[app]", function (evt) {
        evt.preventDefault();
        //toapp Url
        var urlData = $(this).attr("app");
        //모바일용 link
        var urlLink = $(this).attr("href");
        //해당페이에대한 로그인 여부
        var loginCheck = "0";
        loginCheck = $(this).attr("loginchk");

        if (urlLink.indexOf("javascript") > -1) {
            location.href = urlLink;
            return false;
        }

        //Excute call
        AppParamExcute(urlData, urlLink, loginCheck);

    });

    $(document).on("click", "a[apptitle]", function (evt) {
        evt.preventDefault();
        //Version (1,2,3)
        var appVersion = isEmptyValue($("#dev_app_version").val());
        //Device (4:Ios, 5:Android)
        var tsXmlStat = getGroupCookie30("Mjobkorea", "apptsxml");

        //toapp Url
        var titleData = $(this).attr("appTitle");

        if (titleData != "") {
            titleData = "toapp://ui?title=" + encodeURIComponent(titleData)
        }
        var urlData = $(this).attr("href");

        if (tsXmlStat != "" && tsXmlStat != undefined) {
            //ToappUrl
            if (appVersion > 2) {				//3.0이상
                if (window.android) {
                    window.android.jktoappHandler(titleData);
                    location.href = urlData;
                } else {
                    window.webkit.messageHandlers.jktoappHandler.postMessage(titleData);
                    location.href = urlData;
                }
            } else {							//3.0이하
                location.href = urlData;
            }
        } else {
            location.href = urlData;
        }
    });
});

function AppParamExcute(param, urlLink, loginCheck) {
    var appVersion = isEmptyValue($("#dev_app_version").val());
    //Device (4:Ios, 5:Android)
    var tsXmlStat = getGroupCookie30("Mjobkorea", "apptsxml");
    //현재로그인 상태값 
    var dev_loginStat = $("#dev_loginStat").val();

    if (dev_loginStat == "0" && loginCheck == "1") {
        param = "toapp://login";
    }
    //alert("param=" + param + "urlLink=" + urlLink + "loginCheck=" + loginCheck + "versionCheck=" + appVersion + "tsXmlStat=" + tsXmlStat + "dev_loginStat=" + dev_loginStat);

    //title, subtile, url 등 encodeURIComponent 처리
    param = EncodingCheck(param);
    param = AddTitle(param);

    if (tsXmlStat != "" && tsXmlStat != undefined) {
        //ToappUrl
        if (appVersion > 2) {				//3.0이상
            if (window.android) {
                window.android.jktoappHandler(param);
            } else {
                window.webkit.messageHandlers.jktoappHandler.postMessage(param);
            }
        } else {

            location.href = param;
            //iFrameExcute(param);
        }
    } else {
        if (urlLink == "") {
            urlLink = "/";
        }

        location.href = urlLink;
    }
}

function AppParamExcute2(param) {
    var appVersion = isEmptyValue($("#dev_app_version").val());
    //Device (4:Ios, 5:Android)
    var tsXmlStat = getGroupCookie30("Mjobkorea", "apptsxml");
1
    //title, subtile, url 등 encodeURIComponent 처리
    param = EncodingCheck(param);
    param = AddTitle(param);

    if (tsXmlStat != "" && tsXmlStat != undefined) {
        //ToappUrl
        if (appVersion > 2) {				//3.0이상
            if (window.android) {
                window.android.jktoappHandler(param);
            } else {
                window.webkit.messageHandlers.jktoappHandler.postMessage(param);
            }
        }
    }
}

var iframenum = 0;
function iFrameExcute(param) {
    try {
        if (document.getElementById("toappframe" + (iframenum)) == null) {
            var iframe = document.createElement("iframe");
            iframe.setAttribute("id", "toappframe");
            iframe.setAttribute("style", "display:none");
            document.documentElement.appendChild(iframe);
        }
        iframe.setAttribute("src", "toapp://" + param);
        document.documentElement.removeChild("toappframe" + (iframenum));
        iframe = null;
        iframenum++;
    }
    catch (exception) {
    }
}


function getGroupCookie30(cname, value) {
    var name = cname + "=";

    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return getGroupItem30(value, c.substring(name.length, c.length));
        }
    }
    return "";
}


function getGroupItem30(cname, Cookies) {
    var splitCookies = Cookies.split("&");
    for (var i = 0; i < splitCookies.length; i++) {
        var item = splitCookies[i];
        if (item.indexOf(cname) == 0) {
            return item.split("=")[1];
        }
    }
    return "";
}


function getAppVersionCheck() {
    var nameStr = "newappversion=";
    var nameLen = nameStr.length;
    var cookieLen = document.cookie.length;		//쿠기값이 없을시 기본적으로 45이다.  document.cookie.length >= 45

    //	a로 지정시 : document.cookie ==> lucya=a; ASPSESSIONIDQGQQGLDC=GKDDHCPDJBOBAONCMJLHBCCN
    var i = 0;
    while (i < cookieLen) {
        var j = i + nameLen;
        if (document.cookie.substring(i, j) == nameStr) {
            var end = document.cookie.indexOf(";", j); // ;의 위치
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(j, end)).substr(0, 1); //쿠키값 반환
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) {
            return 2;
            break;
        }
    }
}


function isEmptyValue(value) {
    if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return getAppVersionCheck()
    } else {
        return value
    }
}

function EncodingCheck(param) {
    //var param = "toapp://goSub?uitype=1&url=list_gi/part_list.asp?ts_partcode=123412&ts_areacode=123123&ts_oversea=3252343&title=채용정보&subtitle=지역정보";
    //var param = "toapp://goSub?uitype=1&url=list_gi/part_list.asp?ts_partcode=123412";
    //var param = "toapp://gomain?url=/start/best1000";
    //대소문자 구분
    if (param.indexOf("sendKakaoTalkV2") > -1 //소문자 치환하기 전에 검사, 대소문자 주의(앱에서 대소문자 구분해서 사용함)
        || param.indexOf("App2Learning") > -1 //잡코리아 러닝 링크 대소문자 구분해서 사용함
        || param.indexOf("toapp://video") > -1 //NCS 러닝
        || param.indexOf("urltype=ncs") > -1 //NCS 러닝
        || param.indexOf("GroupName") > -1 //일괄차단 기업리스트
        || param.indexOf("toapp://viewinterLogin") > -1 //뷰인터로그인
        || param.indexOf("EP0100M002GE") > -1 //나이스 기업정보
        || param.indexOf("edit_answer_comt") > -1 //취업톡톡 답변/댓글 수정
        || param.indexOf("urltype=qnaoutlink") > -1 //취업톡톡 외부링크
        || param.indexOf("urltype=portfolio") > -1 //이력서 포트폴리오
        || param.indexOf("extLicense") > -1 //이력서 네이버 연동
        || param.indexOf("toapp://AppleLogin") > -1 //뷰인터로그인
        || param.indexOf("toapp://braze") > -1 //Braze 연동
        || param.indexOf("postView") > -1 //네이버 포스트
        || param.indexOf("bit.ly") > -1 //bit.ly
    )
    {
        return param;
    }

    param = param.toLowerCase();

    //url이 없을경우 return
    if (param.indexOf("url=") < 0) {
        return param;
    }

    var FirstSplitValue = param.split("?")[0];
    console.log("gosub=" + param.indexOf("gosub"))
    console.log("gomain=" + param.indexOf("gomain"))

    //gomain, gosub 만 파싱 처리
    var AccessArry = ["toapp://gosub", "toapp://gomain"];
    if (AccessArry.indexOf(FirstSplitValue) < 0) {
        console.log("pass flag= false");
        return param;
    }

    var SecondSplitValue = param.replace(FirstSplitValue + "?", "");
    var splitValue = SecondSplitValue.split("&");
    //console.log("test=" + splitValue);
    var arryBanValue = ["uitype", "urltype", "title", "align", "subtitle", "btnshare", "closeLevel", "reload", "repage"];
    //console.log("test=" + arryBanValue);

    var tempString = "";
    var tempUrlString = "";
    var tempSecondUrlString = "";

    for (i = 0; i < splitValue.length; i++) {
        if (arryBanValue.indexOf(splitValue[i].split("=")[0]) > -1) {
            if (splitValue[i].split("=")[1].indexOf("%") > -1) {
                tempString = tempString + "&" + splitValue[i];
            } else {
                tempString = tempString + "&" + splitValue[i].split("=")[0] + "=" + encodeURIComponent(splitValue[i].split("=")[1]);
            }
        } else {
            if (splitValue[i].indexOf("url=") > -1) {

                if (splitValue[i].split("=")[1].indexOf("%") > -1) {
                    tempUrlString = splitValue[i];
                } else {
                    tempUrlString = "url=" + encodeURIComponent(splitValue[i].split("url=")[1]);
                }
            } else {
                if (splitValue[i].length > 0) {
                    tempSecondUrlString = tempSecondUrlString + encodeURIComponent("&" + splitValue[i]);
                } else {
                    tempSecondUrlString = tempSecondUrlString;
                }
            }
        }
    }

    console.log("1=" + tempString);
    console.log("2=" + tempUrlString);
    console.log("3=" + tempSecondUrlString);
    console.log(tempUrlString + tempSecondUrlString + tempString);

    return FirstSplitValue + "?" + tempUrlString + tempSecondUrlString + tempString
}


function AddTitle(param) {
    var _title = "";
    //var dev_newappversion = $("#dev_newappversion").length == 0 ? "" : $("#dev_newappversion").val();
    if (VersionCompareJS("appversion", "4.0.0") >= 1) {
        if (param.indexOf("gomain") >= 0) {
            if ((param.indexOf("%2ftop100%2f") >= 0) || (param.indexOf("%2frecruit%2ftheme") >= 0)) {
                _title = encodeURIComponent("채용공고");
            } else if ((param.indexOf("%2fqna%2f") >= 0) || (param.indexOf("%2fcareerpath") >= 0)
                || (param.indexOf("%2fgoodjob") >= 0) || (param.indexOf("%2fstart%2fpassassay") >= 0) || (param.indexOf("%2fstart%2fspec") >= 0)
                || (param.indexOf("%2fstart%2freview") >= 0) || (param.indexOf("%2fstart%2fonair") >= 0) || (param.indexOf("%2fstart%2finterview") >= 0)
                || (param.indexOf("%2fstart%2flearning") >= 0) || (param.indexOf("%2fstart%2fpubmoctest") >= 0) || (param.indexOf("%2ftextuser%2fhuman") >= 0)
                || (param.indexOf("%2fai%2f") >= 0) || (param.indexOf("%2ffuturelab%2f") >= 0) || (param.indexOf("%2ftextuser%2fqna") >= 0)) {
                _title = encodeURIComponent("커리어");
            } else if ((param.indexOf("%2fsalary%2f") >= 0) || (param.indexOf('%2fstart%2fcompanyreport') >= 0) || (param.indexOf('%2freview%2fhome') >= 0) ||
                (param.indexOf('%2ftextuser%2fcareercheck') >= 0)) {
                _title = encodeURIComponent("커리어");
            } else if ((param.indexOf("%2fstart%2f") >= 0) || (param.indexOf("%2fstarter%2fdesk_list.asp") >= 0) || (param.indexOf("%2fstarter%2fdesk_view.asp") >= 0)) {
                _title = encodeURIComponent("공채");
            } else if ((param.indexOf("%2fheadhunting%2f") >= 0)) {
                if (param.indexOf("%2fheadhunting%2fheadhunter%2fProfile%2f") < 0) {
                    _title = encodeURIComponent("헤드헌팅");
                }                
            } else if ((param.indexOf("%2fhelp%2fevent") >= 0)) {
                _title = encodeURIComponent("고객센터");
            }
            param = param + "&title=" + _title;
        }
    }
    else
    {
        if (param.indexOf("gomain") >= 0) {
            if ((param.indexOf("%2ftop100%2f") >= 0) || (param.indexOf("%2fsuper%2f") >= 0) || (param.indexOf("%2frecruit%2ftheme") >= 0)) {
                _title = encodeURIComponent("채용정보");
            } else if ((param.indexOf("%2fqna%2f") >= 0) || (param.indexOf("%2fcareerpath") >= 0)
                || (param.indexOf("%2fgoodjob") >= 0) || (param.indexOf("%2fstart%2fpassassay") >= 0) || (param.indexOf("%2fstart%2fspec") >= 0)
                || (param.indexOf("%2fstart%2freview") >= 0) || (param.indexOf("%2fstart%2fonair") >= 0) || (param.indexOf("%2fstart%2finterview") >= 0)
                || (param.indexOf("%2fstart%2flearning") >= 0) || (param.indexOf("%2fstart%2fpubmoctest") >= 0) || (param.indexOf("%2ftextuser%2fhuman") >= 0)
                || (param.indexOf("%2fai%2f") >= 0) || (param.indexOf("%2ffuturelab%2f") >= 0) || (param.indexOf("%2ftextuser%2fqna") >= 0)) {
                _title = encodeURIComponent("커리어");
            } else if ((param.indexOf("%2fsalary%2f") >= 0) || (param.indexOf('%2fstart%2fcompanyreport') >= 0) || (param.indexOf('%2freview%2fhome') >= 0)) {
                _title = encodeURIComponent("기업·연봉");
            } else if ((param.indexOf("%2fstart%2f") >= 0) || (param.indexOf("%2fstarter%2fdesk_list.asp") >= 0) || (param.indexOf("%2fstarter%2fdesk_view.asp") >= 0)) {
                _title = encodeURIComponent("신입공채");
            } else if ((param.indexOf("%2fheadhunting%2f") >= 0)) {
                _title = encodeURIComponent("헤드헌팅");
                //} else if ((param.indexOf("%2fsalary%2f") >= 0) || (param.indexOf("%2fcareerpath") >= 0) || (param.indexOf("%2ftextuser%2fqna") >= 0)) {
                //    _title = encodeURIComponent("연봉·커리어");
                //} else if (param.indexOf("%2fgoodjob") >= 0) {
                //    _title = encodeURIComponent("뉴스·자료");
            }
            param = param + "&title=" + _title;
        }
    }
    return param;
}

$(function () {
    //전체메뉴 즐겨찾기 추가/삭제
    $(document).on("click", ".button-bookmark", function (e) {
        var _this = $(this);
        var _link = _this.parent().find("a").attr("href");
        var _selector = "." + _this.attr("data-bookmark-class");
        var _className = _this.attr("data-bookmark-class");
        var _menuName = _this.attr("data-bookmark-name");
        var menuIdx = $(this).attr("menuIdx");
        var _bookmarkCnt = $(".bookmark-list").find("li > a").length
        var ga_label = _this.attr("data-ga-label");
        
        if ((!_this.hasClass("selected")) && (_bookmarkCnt > 7)) {
            ui.menutotal.modal.full.attached();
        } else {
            $.ajax({
                type: "GET",
                url: "/include/menu/Frvt_List_Update_Ajax.asp?menuIdx=" + menuIdx,
                dataType: "json",
                success: function (response) {
                    if (response == "0") {
                        if (_this.hasClass("selected")) {
                            _this.removeClass("selected")                       //별표 삭제
                            ui.menutotal.bookmark.remove(_className);           //상단 즐겨찾기 메뉴 삭제

                            GA_Event("햄버거_MO", "lnb", "즐겨찾기_해제_" + ga_label)
                        } else {
                            _this.addClass("selected")                          //별표 추가
                            ui.menutotal.bookmark.add(_className, _menuName);   //상단 즐겨찾기 메뉴 추가

                            GA_Event("햄버거_MO", "lnb", "즐겨찾기_등록_" + ga_label)
                        }
                        TotalMenuInit();
                    }
                    else if (response == "99") {
                        ui.menutotal.modal.full.attached();
                    }
                    else {
                        alert("에러코드 : " + response)
                    }
                    //즐겨찾기 추가된 리스트 링크 수정
                    setTimeout(function () {
                        $(_selector).attr("href", _link)
                    }, 300);
                },
                error: function () {
                    alert("에러가 발생했습니다.")
                }
            })
        }
    });
})

//전체메뉴 -> 즐겨찾기 불러오기
function TotalMenuInit() {
    var _html = "";
    var bookMarkButtonCnt = $(".button-bookmark").length;
    var fvrtMenu = "|";
    var loopCnt = 4;
    $.ajax({
        url: "/include/menu/Frvt_List_Select_Ajax.asp",
        method: 'GET',
        cache: false,
        async: false,
        dataType: "json",
        success: function (result) {
            result = result || {};
            result.d = result.d || {};

            if (result.d.length > 0) {
                //즐겨찾는 메뉴 생성
                if (result.d.length > 4) {
                    loopCnt = 8;
                }
                for (i = 0; i < loopCnt; i++) {
                    if (i < result.d.length) {
                        _html = _html + "<li class='item'><a href='" + document.location.protocol.replace("https:", "http:") + "//" + document.location.host + result.d[i].Menu_Url + "' class='favo_" + result.d[i].Icon_File_Name + "' onclick=\"GA_Event('햄버거_MO', '즐겨찾는메뉴', '" + result.d[i].name + "')\"><i aria-hidden='true'></i>" + result.d[i].name + "</a></li>";
                        fvrtMenu = fvrtMenu + result.d[i].idx + "|";
                    } else {
                        _html = _html + "<li class='item' aria-hidden='hidden'></li>"
                    }
                }
                _html = "<ul class='bookmark-list'>" + _html + "</div>"
                $(".bookmark-body").html(_html);

                //즐겨찾기 별표 칠하기
                $.each($(".button-bookmark"), function (i) {
                    //console.log($(this).attr("menuidx"))
                    if (fvrtMenu.indexOf("|" + $(this).attr("menuidx") + "|") >= 0) {
                        $(this).addClass("selected");
                    } else {
                        $(this).removeClass("selected");
                    }
                });

                //초기 즐겨찾기 카운트
                ui.menutotal.bookmark.setCount(result.d.length)
            }
        }
    })
}

//전체메뉴 -> 즐겨찾기 초기화
function FvrtDeleteAll() {
    $.ajax({
        type: "GET",
        url: "/include/menu/Frvt_List_Delete_Ajax.asp?",
        dataType: "json",
        success: function (response) {
            if (response == "0") {
                //ui.menutotal.bookmark.remove(n);
            } else {
                alert("에러코드 : " + response)
            }
        },
        error: function () {
            alert("에러가 발생했습니다.")
        }
    })
}


(function () {
    // lazy js from JKMON
    var lazyJs = function (url, callback) {
        if (url == null) {
            return false;
        }
        callback = callback || function () { };
        var scriptEle = document.createElement("script");
        scriptEle.type = "text/javascript";
        var loaded = false;
        scriptEle.onreadystatechange = function () {
            if (this.readyState == "loaded" || this.readyState == "complete") {
                if (loaded) return;
                loaded = true;
                callback();
            }
        };
        scriptEle.onload = function () {
            callback();
        };
        scriptEle.src = url;
        document.getElementsByTagName("head")[0].appendChild(scriptEle);
    };

    ////전체메뉴 열기 - 이전버전
    //$(document).on("click", ".devLeftMenu", function () {
    //    var $jkMenuTotal = $(".jk-menu-total");

    //    if ($jkMenuTotal.hasClass("loaded")) {
    //        ui.menutotal.attached();
    //        TotalMenuInit();
    //    } else {
    //        $.ajax({
    //            type: "GET",
    //            cache: false,
    //            url: "/Public/API/CommonUI/LeftMenu",
    //            success: function (data) {
    //                $jkMenuTotal.html(data);
    //                lazyJs("//i.jobkorea.kr/content/javascript/mobile/dist/common/ui.header.menutotal.min.js?data=201909231401", function () {
    //                    $jkMenuTotal.addClass("loaded");
    //                    ui.menutotal.attached();
    //                    TotalMenuInit();
    //                    // TODO: from app.js, 개발 로직 확인 필요, ajax 호출(json)

    //                    //전체메뉴 닫기
    //                    $(".jk-menu-total").on("click", ".devLeftMenuClose", function () {
    //                        ui.menutotal.detached();
    //                    });

    //                    //즐겨찾기 8개 모두 선택한 경우 모달 닫기
    //                    $(".jk-menu-total").on("click", ".devConfirmClose", function () {
    //                        ui.menutotal.modal.full.detached();
    //                    });
    //                    //초기화 "아니요"
    //                    $(".jk-menu-total").on("click", ".devFvrtResetNo", function () {
    //                        ui.menutotal.modal.reset.detached();
    //                    });
    //                    //초기화 "예"
    //                    $(".jk-menu-total").on("click", ".devFvrtResetYes", function () {
    //                        ui.menutotal.modal.reset.detached();
    //                        ui.menutotal.bookmark.reset();
    //                        FvrtDeleteAll();
    //                    });
    //                });
    //            }
    //        });
    //    }
    //});

    //전체메뉴 열기-new
    $(document).on("click", ".devLeftMenu", function () {
        var $jkMenuTotal = $(".jk-menu-total");
        const bodyWrap = document.querySelector('body');

        if ($jkMenuTotal.hasClass("loaded")) {
            $jkMenuTotal.removeClass('detached');
            $jkMenuTotal.addClass("attached");
            bodyWrap.style.cssText = "overflow:hidden;"
        } else {
            $.ajax({
                type: "GET",
                cache: false,
                url: "/Public/API/CommonUI/LeftMenu",
                success: function (data) {
                    $jkMenuTotal.html(data);
                    $jkMenuTotal.addClass("loaded attached");
                    bodyWrap.style.cssText = "overflow:hidden;"
                    //전체메뉴 닫기
                    $jkMenuTotal.on("click", ".devLeftMenuClose", function () {
                        $jkMenuTotal.removeClass('attached');
                        $jkMenuTotal.addClass('detached');
                        bodyWrap.style.cssText = "";
                    });

                    handleGnbEvent();
                }
            });
        }
    });

})();

function handleGnbEvent() {
    let gnbScrollTop = 0;

    const headerHeight = document.querySelector('.jk-menu-total-header').clientHeight;
    const gnbTabWrap = document.querySelector('.nav-wrap .tab');
    const gnbTabs = document.querySelectorAll('.nav-wrap .tab a'); // gnb tab 버튼
    const gnbContents = document.querySelectorAll('.nav-list'); // gnb 메뉴별 영역
    const gnbScrollEl = document.querySelector('.jk-menu-total-body'); // gnb 스크롤 되는 div

    gnbTabs.forEach((el, index) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            gnbScrollTop = gnbContents[index].offsetTop - (headerHeight + gnbTabWrap.clientHeight);
            gnbScrollEl.scrollTo({
                top: gnbScrollTop,
                left: 0,
                behavior: 'smooth'
            });
        });
    });

    gnbScrollEl.addEventListener("scroll", function (e) {
        let scrollTop = e.target.scrollTop + headerHeight;

        gnbContents.forEach((navList, index) => {
            let offsetTop = navList.offsetTop - gnbTabWrap.clientHeight;
            let innerHeight = (navList.offsetTop + navList.clientHeight) - gnbTabWrap.clientHeight;
            let tabIdx = gnbTabs[index];

            if (scrollTop >= offsetTop && scrollTop <= innerHeight) {
                if (!tabIdx.classList.contains('active')) {
                    tabIdx.classList.add('active');
                }

            } else if (scrollTop > innerHeight || offsetTop > scrollTop) {
                tabIdx.classList.remove('active');

            } else if (scrollTop < gnbTabWrap.offsetTop + 10) {
                // 10은 마진값
                gnbTabs.forEach((el) => {
                    el.classList.remove("active");
                });
            }
        });
    });
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