/*
 * 해당 파일은 모바일  기업뷰 페이지 공통 스크립트 입니다.
 * /Company/xxxx
 * /Coread/memtype/memid                          
*/
//기업뷰 스크립트 옵션 기본설정 없을경우 설정
var Coread = Coread || {};
Coread.Options = Coread.Options || {};
Coread.Options.newsInitUrl = Coread.Options.newsInitUrl || "";
Coread.Options.giInitUrl = Coread.Options.giInitUrl || "";    
Coread.Options.financialUrl = Coread.Options.financialUrl || "";


//기본적으론 layout 하단 참조 예정
$(function () {
    //뉴스영역
    var newsArea$ = $("#corp-news");
    //뉴스모달 영역
    var newsWrap$ = $(".modal-latest-news");

	
    

    //뉴스 컨텐츠 가져오기
    function getNewsContentList(url) {
        if (url !== "") {
            $.ajax({
                type: "get",
                url: url,
				cache: false,
				async: false,
                dataType: "html",
                success: function (response) {
                    newsArea$.html(response);
                }
            });
        }        
    }

    //뉴스 페이징
    newsArea$.on("click", ".tplPagination a", function (e) {
        e.preventDefault();
        var url = $(this).attr("href");        
        getNewsContentList(url);
    });

    //뉴스 상세
    newsArea$.on("click", ".list-corporate-latest-news-item a", function (e) {
        e.preventDefault();

        var newsAnchor = $(this);
        var url = newsAnchor.attr("href");
        getNewsContentDetail(url);        
        
    });

    //뉴스 컨텐츠 가져오기
    function getNewsContentDetail(url) {
        if (url !== "") {
            $.ajax({
                type: "get",
                url: url,
                cache: false,
                dataType: "json",
				success: function (response) {
					if (response.IsSuccess) {
						newsWrap$.find(".modal-body .header").html(response.Data.Title);
						newsWrap$.find(".description").html(response.Data.Cntnt);
						newsWrap$.find(".meta .date").html(response.Data.Pub_Date_Format);
						newsWrap$.find(".meta .source").html("출처 : " + response.Data.Source);
						//열때마다 위로
						newsWrap$.find(".modal-body").scrollTop(0);
						//뉴스 팝업
						ui.company.modal.news.attached();

					}
					else {
						//alert(response.Message);
					}
				}
            });
        }        
    }

    //채용 컨테이너가 있으면 채용가저오기
    var agiContainer$ = $(".container-body-in-progress");

    //채용 페이징 버튼이벤트
    agiContainer$.on("click", ".tplPagination a", function (e) {
        e.preventDefault();
        var url = $(this).attr("href");        
        
        getAgiContentList(agiContainer$, url);

    });

	if (newsArea$.length > 0) {

		var url = Coread.Options.newsInitUrl;
		getNewsContentList(url);

	}

	if (agiContainer$.length > 0) {
		url = Coread.Options.giInitUrl;
		$.each(agiContainer$, function () {
			var agi$ = $(this);

			getAgiContentList(agi$, url);
		});
	}

    ///채용 컨텐츠 가져오기
    function getAgiContentList(container, url) {        
        if (url !== "") {
            $.ajax({
                type: "get",
				url: url,
				async :false,
                cache: false,
                dataType: "html",
                success: function (response) {
                    container.html(response);
                }
            });
        }        
    }
        
    //재무현황 전체보기 버튼    
    var financialAll$ = $(".button-view-financial-status");
    //재무현황 전체 보기결과
    var financialResult$ = $(".modal-financial-statements");

    var financialSelect$ = $("#lbl-dropdown-business-analysis");

    //버튼이 있으면
    if (financialAll$.length > 0) {        
        financialSelect$.on("change", function () {            
            var resultTable$ = financialResult$.find("#financialAllResult");

            var yeardate = financialSelect$.val();
                        
            if (yeardate !== "") {                
                $.ajax({
                    type: "get",
                    url: Coread.Options.financialUrl + yeardate, // financialUrl 는 /로 끝나게 작업하였음
                    cache: false,
                    dataType: "html",
                    success: function (response) {
                        if (response) {
                            resultTable$.replaceWith(response);
                        }
                    }
                });
            }
        });      

    }
        

    

})

var deepLink_view = deepLink_view || (function () {
	var _config = {};

	// 앱 실행. giRead.js 코드 사용
	function goApp(url, title) {
		// ==> jobkorea://?gno=121212 or jobkorea://gibread?gno=1212jobkorea://gi_read?gno=121
		var go_link = 'jobkorea://goSub?uitype=1&urltype=gib&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title);

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
						location.replace('market://details?id=com.jobkorea.app&url=' + encodeURIComponent(go_link));
						return false;
					}, 25);
				}
				else {
					var install_block = (function () {
						return function () {
							location.replace('market://details?id=com.jobkorea.app&url=' + encodeURIComponent(go_link));
							return false;
						};
					})(this);

					var iframe = document.createElement('iframe');
					iframe.style.visibility = 'hidden';
					iframe.src = go_link;	//앱으로 이동합니다.
					iframe.onload = install_block;
					document.body.appendChild(iframe);
				}
			}
			else if (navigator.userAgent.match(/(ipod|iphone|ipad)/i)) {
				var install_block = (function () {
					return function () {
						window.location = "https://itunes.apple.com/kr/app/id569092652";
					};
				})(this);
				setTimeout(install_block, 1050);
				location.href = go_link; // 앱으로 이동합니다.
			}
		}

		return false;
	}

	return {
		init: function (config) {
			_config = config;

		}, // init()
		ready: function () {

			// 앱 보기
			$('.devBtnAppDown').click(function () {
				var url = _config.appUrl;
				var title = _config.giTitle;

				//alert(url);
				goApp(url, title);
			});



		}
	}
})();