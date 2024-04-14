//revision:  2.5.18_d8decca0da55c8adb75ec0f0ff63aca13a1a2eac
//update: Mon Nov 2 18:08:37 2020 +0900
//SKCertService V2.5.0_92

typeof(console) === "object" ? console.log('koscom start') : '';

var ytMain = (function () {
    'use strict';

// ================================================================================================================================================
    // 해당 부분은 고객사 사이트에 맞춰서 설정해주시면 됩니다.
    var option = {
        encoding: 'base64',                                 // 서명값 인코딩(base64, hex)       (설정해드립니다..)
        charset: 'euc-kr'                                   //                                  (설정해드립니다..)
    };

    var config = {
        type: 'iframe',                                     // 창을 iframe, popup으로 뛰울지 설정 여부, iframe으로 고정. (popup미지원)
        btnId: '',                                          // 창착법 적용시, 원활한 텝오더를 위해 창을 뛰우는 버튼 ID 설정, (장착법 미구현)
        //HI-CUSTOM
        baseUrl: '/SKCertService/app/',                     // 절대경로로 설정. (app/views/*.html 파일들을 옮기지 않을시 상대경로로 설정해도 무방함)
        //HI-CUSTOM
        title: '',                                          // 상단 타이틀 명 설정, 호출 성격에 따라 자동 설정됨
        servicePort: 14098,                                 // vestcert와 통신하기 위한 포트 설정, koscom:14098로 설정됨(건들지마시오)
        version: {
            SKCertService: '2.5.18',                         // SKCertService version
            SantiagoSecurityService: '2.5.18'                // SantiagoSecurityService version
        },
        ablePwd: true,                                      // 비밀번호창 활성화 여부. 호출 성격에 따라 자동 설정됨
        keystrokeEncryption: 0,                             // 문서참고, SetKeySaferMode() 함수로 설정
        keySaferConfig: {                                   // 키보드보안 옵션 (사용 할 키보드보안 업체만 설정해주면 됨)
            kings: {                                        // 킹스 옵션
                path: 'https://kings.com:6800/kings/',
                fileName: ['kdfense_object.js']
            },
            nProtect: {                                     // 잉카 옵션 npPfsStartup(document.form, nProtect.param2, nProtect.param3, nProtect.param4, nProtect.param5, "npkencrypt", "re");
                path: 'https://kings.com:6800/pluginfree/js/',
                fileName: ['nppfs-1.6.0.js'],
                color: '#AFD7AF',
                param2: false,
                param3: true,
                param4: false,
                param5: true
            },
            ahnlab: {                                       // 안랩 옵션
                path: '',
                fileName: ['astx2.min.js', 'astx2_custom.js'],
                E2E: true                          // true: initE2E(),   false: initNonE2E()
            },
            xkeypad: {                                      // 한컴 옵션
                path: '',
                fileName: ['js/xkeypad_config.js', 'js/xkeypad_new_plugin_koscom.js']
            },
            touchen: {                                      // 라온 (E2E) 옵션
                //path: 'https://kings.com:6800/TouchEn/',
                //fileName: ['nxKey/js/TouchEnNxYT.js']    한국증권금융 지원하면서 연동하는 스크립트가 6개로 늘어났음. 라온쪽 커스텀마이징에 따라.. 더 늘어날수도 줄어들수도 있음.
                //fileName: ['/nxKey/js/TouchEnNxYT.js', '/nxKey/js/TouchEnNxKeyYT.js','/nxKey/js/TouchEnNxKey_Install.js','/cmn/exproto.js','/nxKey/js/TouchEnNxKey_Interface.js','/cmn/TouchEnNx_daemonYT.js']
			//HI-CUSTOM
				path: '/raon/raonnx/',
				fileName: ['cmn/json2.js', 'cmn/TouchEnNxYT.js', 'cmn/TouchEnNx_exproto.js', 'cmn/TouchEnNx_install.js', 'cmn/TouchEnNx_daemon.js', 'nxKey/js/nxkey_config.js', 'nxKey/js/TouchEnNxKey_Interface.js', 'nxKey/js/TouchEnNxKey.js', 'cmn/TouchEnNx_loader.js']
			//HI-CUSTOM
            },
            transkey: {                                     // 라온 (키패드) 옵션
                path: 'https://kings.com:6800/transkey/',
                fileName: ["transkey.js", "rsa_oaep_files/rsa_oaep-min.js", "jsbn/jsbn-min.js", "TranskeyLibPack_op.js"],
                position: {
                    x: -145,
                    y: -210
                }
            },
            vikie: {
                path: '../vikie/',
                fileName: ['js/jsrose_crypto.min.js', 'js/vikie.js'],
                vikieConfig: {
                    mobileMaxWidth: 520,
                    /* 키패드 타입. 쿼티: 'qwerty', 숫자: 'number' */
                    keypadType: 'qwerty',
                    keypadURL: {
                        number: '../vikie/vikie_number.html',
                        qwerty: '../vikie/vikie_qwerty.html'
                    },
                    figureLimitations: -1,
                    /* 재배열 시 기존 값 초기화 옵션 / true: 초기화 o, false: 초기화 x */
                    initValueRearrange: false,
                    extractSeed: {
                        /* 기능 사용 유무 */
                        flag: true
                    },
                    positionY: 0
                },
                /* 1: 스크립트내에서 복호화, 2: native에서 복호화, 3: 고객사 페이지에서 비밀번호 입력받고 native에서 복호화 */
                extraOption: 2
            }
        },
        //HI-CUSTOM
        SKCertServiceDownload: "/SKCertService/SKCertServiceSetup.exe", // skcertService 다운로드 링크. (파일까지 지정)
        //HI-CUSTOM
        relay: {
            serviceIP: "",
            servicePort: "",                           // 인증서 복사 포트 설정
            siteCode: "NONE"                                // 기능없음.
        },
        changeStorageRemoveCert: true,                          // 2017.03.28 (VESTCERT-883) 케이프투자증권 요청사항 (true: 기존인증서 삭제여부 UI 호출, false: 기존인증서 삭제여부 UI 호출안함)
        useGPKI: 17,                                             // 1: NPKI, 16: GPKI, 17: NPKI+GPKI
        language: 0,                                             // 바꾸는 함수있음
        errorMessageConfig: {
            safariBill: 'error'                                 // 사파리에서 빌링시 에러가 발생함. 이떄 보여줄 에러매세지.(에러매세지 보여준 후, 빌링로직 그대로 진행)
        },
        framePosition: {
            top: "50%", 
            left: "50%"
        },
        replayAttack: false,
        mobileusim: {
            url: 'http://download.smartcert.kr/',       // USIM 통합 설치 모듈 다운로드 안내페이지
            tokenorder: 'Mobile_USIMsmartCERT',         // dream 모듈 우선 동작(Mobile_SmartCert), raon 모듈 우선 동작(Mobile_USIMsmartCERT)
            sitecode: '0000000000',                     // raon에서 발급, 사이트 별 코드
            modcode: '00012',                           // raon에서 발급, 12번은 기타
            siteURL: 'www.signkorea.com',               // dream 에서 발급, 적용된 사이트 URL
            serviceIP: 'service.smartcert.kr',          // dream 에서 발급, 고정된 값
            servicePort: '443'                          // dream 에서 발급, 고정된 값
        },
        imgUrl: {
            loading: '../app/styles/images/img_org.gif'
        }
    };
// ================================================================================================================================================
// 아래쪽을 수정할 경우 정상동작 하지 않습니다.
    var siteCode = "koscom";

    var keyVendor = {
        0: 'null',
        1: 'kings',
        2: 'npk',
        3: 'ahnlab',
        //4: 'ahnlabOld',           미사용
        7: 'xkeypad',
        8: 'touchen',
        9: 'transkey',
        10: 'vikie'
    };

    var kos_var = {
        errorCode: 0,
        errorMessage: 0,


        pOrderStr: '',         // 검색 우선순위(S?저장토큰, H-HARD_DISK, U?보안 토큰, R?REMOVABLE)
        pViewOrderStr: '',       // 이미지 순서
        keySafer_mode: 0,   //키보드 보안 업체 연동 설정
        flag: 0,                 // 인증서 만료일 체크 알림 창 여부
        pPlainText: "signText",       // 원문
        pCertNewUrl: "http://www.signkorea.com/cer_manage/cer_manage.htm",    // URL
        scanByDialogChoiceMode: 0,
        isBullet: false,    // 인증서 갱신창 호출인지 여부.
        isInfoPage: true,   // cert통신시 통신이 안될경우 안내페이지를 뛰우지 경정하는 옵

        policyMode: 0,
        policyOID: 0,
        valid: 0,

        matchedList: [],
        matchedTokenNumber: '',
        matchedIdentifier: '',
        fullDn: '',

        pB64Signature: '',

        keyNew: '',
        userID: '',
        webAccess: false,
        matchedExipreCheck: false,
        setPFXNPKIFlag: {
            flag: false,
            fileType: 0,
            options: {
                customStr: "",
                dn: "",
                suffix: "",
                type: ""
            }
        },

        keySaferEtc : {
            //키보드 보안 업체 연동 설정 (인증서 리스트 창 이외)
            flag : false,
            mode : 0
        },
        exceptExpiredCert: false, // 만료된 인증서 제외 옵션(true: 제외)
        useMobileUsim: false
    };

    var signTitle = {
        SELECT: 0,
        RENEWAL: 1,
        SUSPENSION: 2,
        ABOLITION: 3,
        ENCRYPTIONISSUE: 4,
        REISSUE: 5,
        SEARCH: 6,
        CHANGE: 7
    };

    var confirmMsg = {
        ISSUE: 0,
        UPDATE: 1,
        DELETECERT: 2
    };

    var setMatchedOptions = {
        password: '',
        matchedContextFlag: false
    };

    function setMatchedOptionsInit () {
        setMatchedOptions.password = '';
        setMatchedOptions.matchedContextFlag = false;
        kos_var.matchedList = [];
        kos_var.matchedTokenNumber =  '';
        kos_var.matchedIdentifier = '';
    }

    function optionInit() {
        kos_var = {
            errorCode: 0,
            errorMessage: 0,

            pOrderStr: '',
            pViewOrderStr: '',
            keySafer_mode: 0,
            flag: 0,
            pPlainText: "signText",
            pCertNewUrl: "http://www.signkorea.com/cer_manage/cer_manage.htm",
            scanByDialogChoiceMode: 0,
            isBullet: false,
            isInfoPage: kos_var.isInfoPage,

            policyMode: 0,
            policyOID: 0,
            valid: 0,

            matchedList: [],
            matchedTokenNumber: '',
            matchedIdentifier: '',
            fullDn: '',

            pB64Signature: '',

            keyNew: '',
            userID: '',
            webAccess: kos_var.webAccess,
            matchedExipreCheck: false,
            setPFXNPKIFlag: {
                flag: false,
                fileType: 0,
                options: {
                    customStr: "",
                    dn: "",
                    suffix: "",
                    type: ""
                }
            },

            keySaferEtc : {
                //키보드 보안 업체 연동 설정 (인증서 리스트 창 이외)
                flag : false,
                mode : 0
            },
            exceptExpiredCert: false
        };
    }

    yettie.scriptLibrary(config.baseUrl);
    var _load;
    var loadingLibrary = function (func) {
        if (typeof(vest) === 'object') {
            config.keystrokeEncryption = (typeof(config.keystrokeEncryption) === "string") ? config.keystrokeEncryption : keyVendor[config.keystrokeEncryption];
            vest.init(config);
            func();
        } else {
            if (_load) clearTimeout(_load);
            _load = setTimeout(function () {
                yettie.init(config);
                yettie.addScriptLibrary(config.baseUrl);
                loadingLibrary(func);
            }, 1000);
        }
    };

    var selectedToken = '';

    var certError = function (error, callback) {
        optionInit();
        setMatchedOptionsInit();
        var result = '';

        // vest.isError(error instanceof jsrose.error) 확인하여 에러객체인지 확인하는 함수 추가해야될듯
        // 여기 정리필요할듯.
        if (typeof(error.getReason) == 'function') {
            //setMatched option:4096 처리
            if (error.reason[0].indexOf('sessionDn') !== -1) result = '$result=nok$dn=' + GetToken(error.reason[0], "sessionDn");
            if (error.reason[0].indexOf('sessionDn') !== -1 && error.reason[0].indexOf('sessionSerial') !== -1){
                var returnSerial = GetToken(error.reason[0], "sessionSerial");
                //var parseSerial = (returnSerial.length > 8) ? returnSerial : parseInt(returnSerial, 16);
                result = '$result=nok$dn=' + GetToken(error.reason[0], "sessionDn");
                //result += "$serial=" + parseSerial;
                result += "$serial=" + vest.util.serialFilterForKoscom(returnSerial);
            }

            kos_var.errorMessage = vest.error.getErrorMessage(error.code, config.language);

            if (kos_var.errorMessage == 'undefined') {
                kos_var.errorMessage = error.getReason()[0];
            }
        }
        else {
            //kos_var.errorMessage = error.message;
            kos_var.errorMessage = vest.error.getErrorMessage(error.code, config.language);
            if (kos_var.errorMessage == 'undefined') {
                kos_var.errorMessage = error.message;
            }
        }

        switch (error.code) {
            case vest.token.ERROR.NOT_LOAD :
            case vest.token.ERROR.LOST_CONNECTION :
                // 안내페이지 뛰우기.
                kos_var.errorCode = "90000";
                kos_var.errorMessage = error.reason[0];
                if (kos_var.isInfoPage) {
                    result = "infoOpen";
                    config.kos_var = kos_var;
                    yettie.init(config);
        //HI-CUSTOM
                    certXErrorinfo();
        //HI-CUSTOM
                    return;
                }
                break;
            case 90001:
            case 90002:
                // 안내페이지 뛰우기.
                kos_var.errorCode = error.code;
                kos_var.errorMessage = error.reason[0];
                if (kos_var.isInfoPage) {
                    result = "infoOpen";
                    config.kos_var = kos_var;
                    yettie.init(config);
        //HI-CUSTOM
                    certXErrorinfo();
        //HI-CUSTOM
                    return;
                }
                break;
            case 12020:
                kos_var.errorCode = "2417";
                break;
            case 12028:
                kos_var.errorCode = "2417";
                //kos_var.errorMessage = typeof(error.getReason) === "undefined" ? error.message : error.getReason().toString();
                break;
            case 12025:
                kos_var.errorCode = "2501";
                //kos_var.errorMessage = typeof(error.getReason) === "undefined" ? error.message : error.getReason().toString();
                break;
            case 12051:  // 1010 아님 수정해야됨.
                kos_var.errorCode = "1010";
                //kos_var.errorMessage = typeof(error.getReason) === "undefined" ? error.message : error.getReason().toString();
                break;
            case 35000:
                kos_var.errorCode = error.code;
                UnSetMatchedContext();
                break;
            default :
                kos_var.errorCode = error.code;
            //kos_var.errorMessage = typeof(error.getReason) === "undefined" ? error.message : error.getReason().toString();
        }

        kos_var.use = false;

        callback(result);
    };

    var callSign = function (verifyPin, callback, errorcallback) {
        config.kos_var = kos_var;
        config.verifyPin = verifyPin;
        yettie.init(config);
        yettie.sign(kos_var.pPlainText, option, callback, errorcallback);
    };

    var cookie = {
        setCookie: function (key, val) {
            var str = key + "=" + escape(val);
            document.cookie = str;
        },

        removeCookie: function (key) {
            document.cookie = key + "=" + ";";
        },

        getCookie: function (key) {
            key = key + "=";
            var result = "";
            var cookieData = document.cookie;
            var start = cookieData.indexOf(key);
            if (start != -1) {
                start += key.length;
                var end = cookieData.indexOf(";", start);
                if (end == -1) end = cookieData.length;
                result = cookieData.substring(start, end);
            }
            if (result == "") return window.location.host;
            return unescape(result);
        }

    };

    var bill = function (object, flag, callback) {
        var flow, str;


        if (typeof(object.bill) === "undefined") {
            callback(true);
            return;
        }

        if (flag) {
            // 사파리 체크해서 빌링 미지원으로 처리.
            if(vest.browser.getBrowser() == 'SAFARI' && vest.browser.isSafari()) {
                alert(vest.error.getErrorMessage(90300, config.language));
            }

            str = confirmMsg.ISSUE;
            object.bill = "reference=" + object.bill;
            object.option.isBill = 1;
            flow = function () {
                vest.util.setObject.center(option);
                vest.token.setIssueOptions(object.tokenNumber, 'signKorea', object.refNo, object.authCode, object.pin, option.tokenPin, object.option, function (result) {
                    result.tokenNumber = object.tokenNumber;
                    result.refNo = object.refNo;
                    result.authCode = object.authCode;
                    result.option = object.option;
                    bill(result, 1, callback);
                }, function (error) {
                    certError(error, callback);
                });
            }
        }
        else {
            // 사파리 체크해서 빌링 미지원으로 처리.
            if(vest.browser.getBrowser() == 'SAFARI' && vest.browser.isSafari()) {
                alert(vest.error.getErrorMessage(90400, config.language));
            }
            str = confirmMsg.UPDATE;
            object.bill = "serial=" + object.bill;
            object.option.isBill = 1;
            flow = function () {
                vest.util.setObject.center(option);
                vest.token.updateCertificate(object.tokenNumber, object.identifier, 'signKorea', object.oldPassword, object.newPassword, object.tokenPin, undefined, object.option, function (result) {
                    result.tokenNumber = object.tokenNumber;
                    result.identifier = object.identifier;
                    result.option = object.option;
                    bill(result, 0, callback);
                }, function (error) {
                    certError(error, callback);
                });
            }
        }

        if(typeof(option.certificateSubject) !== 'undefined') option.certificateSubject = '';
        yettie.confirm(str, option, function (result) {
            yettie.bill(object.bill, object.real, flow, function(error){
                certError(error, callback);
            });
        }, function (error) {
            certError(error, callback);
        });

        //if(confirm(str) == true) {
        //    yettie.bill(object.bill, object.real, function(result){
        //        if(result.data === 0){
        //            flow();
        //        }
        //    });
        //}
        //else{
        //    return;
        //}
    };

    function RemoveFromMedia(pszUserID, callback) {
        //config.title = "인증서 검색";
        config.title = signTitle.SEARCH;
        config.ablePwd = true;
        config.disableToken = false;
        kos_var.userID = pszUserID;
        var options = {};

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password, options) {
                vest.token.removeFromMedia(tokenNumber, password, identifier, options, callback, function (error) {
                    certError(error, callback);
                })
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function SetMatchedContext(pszUserID, pszSuffix) {

    }

    function UnSetMatchedContext(callback) {
        loadingLibrary(function () {
            var customStr = cookie.getCookie(siteCode);
            vest.token.unSetMatchedContext(customStr, function (result) {
                setMatchedOptions.matchedContextFlag = false;
                //kos_var.matchedDn = '';
                kos_var.matchedTokenNumber = '';
                kos_var.matchedIdentifier = '';
                kos_var.matchedList = [];

                callback(result);
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function SetMatchedContextExt(pszUserID, pszSuffix, pszPassword, type, callback) {
        var list;
        var getSmartCardPassword = function(customStr, callback) {
            var _smartCardList;
            var _index = 0;
            var _resultList = [];

            function getPassword (index, password){
                delete option.setMatchedFlag;
                if(index != 0){
                    _resultList.push({name: _smartCardList[index - 1].name, value: password});
                }

                if(index == _smartCardList.length) {
                    callback(_resultList);
                    return;
                }

                option.setMatchedFlag = true;
                option.tokenName = _smartCardList[index].name;
                _index++;
                yettie.init(config);
                yettie.passwordInput(option, function(smartCardPassword){
                    getPassword(_index, smartCardPassword);
                }, function(error){
                    if(error.code == 12025){
                        getPassword(_index, '');
                    }else{
                        certError(error, callback);
                    }
                });
            }

            vest.token.getSmartCardList(customStr, option, function(list){
                _smartCardList = list;
                getPassword(_index);
            });
        };

        var getHSMList = function(customStr, getHSMListCallback) {
            vest.token.getHSMList(customStr, undefined, function(HSMList) {
                if(HSMList.length == 0) {
                    getHSMListCallback();
                } else if(HSMList.length == 1) {
                    vest.token.setHSM(HSMList[0].tokenIdentifier, undefined, getHSMListCallback, function(error){
                        //certError(error, getHSMListCallback);
                        getHSMListCallback()
                    });
                } else {
                    option.HSMList = HSMList;
                    yettie.init(config);
                    yettie.tokenList(option, function(tokenNumber) {
                        vest.token.setHSM(tokenNumber, undefined, getHSMListCallback, function(error){
                            //certError(error, getHSMListCallback);
                            getHSMListCallback()
                        });
                    }, function(error) {
                        //certError(error, getHSMListCallback);
                        getHSMListCallback();
                    });
                }
            }, function(error){
                //certError(error, getHSMListCallback);
                getHSMListCallback();
            })
        };

        var setMatchedContextExtCallback = function (setMatchedContextResult) {
            //dn, serial
            var result = '';

            result += setMatchedContextResult.dn;

            // 4096 옵션에따른 임시처리.
            if ((type & 0x00001000) >> 12){
                //var resultSerial = (setMatchedContextResult.serial.length > 8) ? setMatchedContextResult.serial : parseInt(setMatchedContextResult.serial, 16);
                result = "$result=ok$dn=" + setMatchedContextResult.dn;
                //result += "$serial=" + resultSerial;
                result += "$serial=" + vest.util.serialFilterForKoscom(setMatchedContextResult.serial);
            }

            // 8192 옵션에 따른 처리
            if ((type & 0x00002000) >> 12) {
                //var resultSerial = (setMatchedContextResult.serial.length > 8) ? setMatchedContextResult.serial : parseInt(setMatchedContextResult.serial, 16);
                result = "$result=ok";
                for(var i=0; i<list.length; i++)
                {
                    if(list[i].dn == setMatchedContextResult.dn && list[i].certIdentifier == list[i].kmCertIdentifier)
                    {
                        result += "$km=nok"
                    }
                }
                if(setMatchedContextResult.bio == "ok")
                {
                    result += "$bio=ok";
                }
                result += "$dn=" + setMatchedContextResult.dn;
                //result += "$serial=" + resultSerial;
                result += "$serial=" + vest.util.serialFilterForKoscom(setMatchedContextResult.serial);
            }

            callback(result);
        };

        var _dn = pszUserID;
        var _pwd = pszPassword;
        option.pkitype = config.useGPKI;
        option.passwordInput = 1;
        config.kos_var = kos_var;

        loadingLibrary(function () {
            var customStr = cookie.getCookie(siteCode);
            getSmartCardPassword(customStr, function(smartCartList){
                getHSMList(customStr, function(){
                    vest.token.setMatchedContext(customStr, vest.browser.getBrowser(), _dn, pszSuffix, smartCartList, (type & 0x000000F0) == 16 ? type - 16 : type, option, function (result) {
                        //config.title = "인증서 선택";
                        config.title = signTitle.SELECT;
                        var dnAndSuffix = (typeof(pszUserID) === 'undefined' || pszUserID == "") ? pszSuffix : pszUserID;
                        list = [];
                        var hasSession = result.hasSession;                  // 1: true(세션있음)  / 0: false(세션없음)
                        var hasSessionPin = result.hasSessionPin;            // 1: 있음            / 0: 없음
                        /*
                         2.1.2 버전에 추가 내용
                         만료된 인증서 필터 kos_var.matchedExipreCheck 여부 따라.. false(기본값): 필터링 안함, true: 필터링 함
                         result.list[i].exipreDay < 0 만료된 인증서.
                         */
                        if(kos_var.matchedExipreCheck) {
                            var tempList = [];
                            for (var i = 0; i < result.list.length; i++) {
                                if (result.list[i].exipreDay >= 0) {
                                    tempList.push(result.list[i]);
                                }
                            }
                            result.list = tempList;
                        }

                        list = result.list;

                        if (list == "" || list.length == 0) {
                            if(kos_var.setPFXNPKIFlag.flag) {
                                /*
                                 2.4.2 [VESTCERT-952] pfxSetMatched 기능이 추가 됨
                                 인증서가 없을경우 && setPFXNPKIFlag.flag == true 경우 무조건 인증서 리스트 호출
                                 */
                                config.ablePwd = true;
                                config.disableToken = false;

                                kos_var.setPFXNPKIFlag.options.customSID = customStr;
                                kos_var.setPFXNPKIFlag.options.dn = _dn;
                                kos_var.setPFXNPKIFlag.options.suffix = pszSuffix;
                                kos_var.setPFXNPKIFlag.options.type =  (type & 0x000000F0) == 16 ? type - 16 : type;

                                yettie.init(config);
                                callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                    kos_var.matchedIdentifier = {
                                        cert: certIdentifier.cert,
                                        key: certIdentifier.key,
                                        kmCert: certIdentifier.kmCert,
                                        kmKey: certIdentifier.kmKey
                                    };

                                    kos_var.matchedTokenNumber = tokenIdentifier;
                                    setMatchedOptions.matchedContextFlag = true;
                                    selectedToken = option.selectedToken;

                                    vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, signPwd, option, function(result){
                                        setMatchedContextExtCallback(result);
                                    }, function(error) {
                                        certError(error, callback);
                                    });
                                }, function (error) {
                                    certError(error, callback);
                                });
                            }else {
                                // 인증서가 없을 경우
                                kos_var.errorCode = 2500;
                                kos_var.errorMessage = "요청하신 인증서가 없습니다.";

                                callback("");
                                return;
                            }
                        }
                        else {
                            kos_var.matchedIdentifier = {
                                cert: list[0].certIdentifier,
                                key: list[0].keyIdentifier,
                                kmCert: list[0].kmCertIdentifier,
                                kmKey: list[0].kmKeyIdentifier
                            };
                            kos_var.matchedTokenNumber = list[0].tokenIdentifier;
                            setMatchedOptions.matchedContextFlag = true;

                            var _makeSession = function(str, tokenNumber, identifier, password) {
                                option.selectedToken = vest.token.getTokenType(list[0]);
                                selectedToken = option.selectedToken;
                                vest.token.makeCustomSession(str, tokenNumber, identifier, password, option, function (result){
                                    setMatchedContextExtCallback(result);
                                }, function (error){
                                    certError(error, callback);
                                });
                            };

                            if (hasSession) {
                                // 세션이 있을경우 바로 서명준비.
                                var _sessionSingature = function(sessionpwd){
                                    yettie.init(config);
                                    yettie.renewal(list[0], kos_var.pCertNewUrl, function () {
                                        _makeSession(customStr, kos_var.matchedTokenNumber, kos_var.matchedIdentifier, sessionpwd);
                                    });
                                    setMatchedOptions.password = sessionpwd;
                                };

                                if (16 == (type & 0x000000F0) || !hasSessionPin) {
                                    option.selectedToken = vest.token.getTokenType(list[0]);
                                    option.tokenName = list[0].dn;
                                    selectedToken = option.selectedToken;
                                    yettie.init(config);
                                    
                                    yettie.passwordInput(option, _sessionSingature, function(error) {
                                        certError(error, callback);
                                    });
                                }else {
                                    _sessionSingature(_pwd);
                                }
                            }
                            else {
                                // 세션이 없고 인증서가 하나일경우, 2개이상일경우.
                                kos_var.matchedList = list;
                                kos_var.userID = _dn;                       // VESTCERT-1196 작업하면서 발견한 버그, userID 세팅시 영향받음.

                                /*
                                 2.4.2 [VESTCERT-952] pfxSetMatched 기능이 추가 됨
                                 인증서가 없을경우 && setPFXNPKIFlag.flag == true 경우 무조건 인증서 리스트 호출
                                 중복소스 이나.. 손대기가 무서워서 수정을 못하곘음...
                                 */
                                if(kos_var.setPFXNPKIFlag.flag) {

                                    kos_var.setPFXNPKIFlag.options.customSID = customStr;
                                    kos_var.setPFXNPKIFlag.options.dn = _dn;
                                    kos_var.setPFXNPKIFlag.options.suffix = pszSuffix;
                                    kos_var.setPFXNPKIFlag.options.type =  (type & 0x000000F0) == 16 ? type - 16 : type;

                                    // 인증서 선택창 호출, 비밀번호 입력받는 O, 비밀번호 받는창 X(type=0)
                                    if(!(typeof(_pwd) === 'undefined' || _pwd == '') && (type & 0x000000F0) == 0){
                                        config.ablePwd = false;
                                        config.disableToken = false;

                                        yettie.init(config);
                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            if(option.selectedToken == vest.token.TYPE.PFXNPKI) {
                                                option.passwordInput = 0;
                                                _pwd = signPwd;
                                            }
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, _pwd, option, function(result){
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }
                                    // 인증서 선택창 호출, 비밀번호 입력받는 X, 비밀번호 받는창 O(type=16)
                                    else if((typeof(_pwd) === 'undefined' || _pwd == '') && (type & 0x000000F0) == 16) {
                                        config.ablePwd = false;
                                        config.disableToken = false;

                                        yettie.init(config);
                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            if(option.selectedToken == vest.token.TYPE.PFXNPKI) { option.passwordInput = 0; }
                                            yettie.passwordInput(option, function(inputPwd){
                                                if(option.selectedToken == vest.token.TYPE.PFXNPKI) { inputPwd = signPwd; }
                                                selectedToken = option.selectedToken;
                                                vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, inputPwd, option, function(result){
                                                    setMatchedContextExtCallback(result);
                                                }, function(error) {
                                                    certError(error, callback);
                                                });
                                            }, function(error){
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }
                                    // 인증서 선택창 호출, 비밀번호 입력받는 X, 비밀번호 받는창 X(type=0),
                                    else if((typeof(_pwd) === 'undefined' || _pwd == '') && (type & 0x000000F0) == 0) {
                                        config.ablePwd = true;
                                        config.disableToken = false;

                                        yettie.init(config);
                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, signPwd, option, function(result){
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }
                                    // 인증서 선택창 호출, 비밀번호 입력받는 O, 비밀번호 받는창 O(type=16)
                                    else if(!(typeof(_pwd) === 'undefined' || _pwd == '') && (type & 0x000000F0) == 16) {
                                        config.ablePwd = false;
                                        config.disableToken = false;

                                        yettie.init(config);
                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            if(option.selectedToken == vest.token.TYPE.PFXNPKI) { option.passwordInput = 0; }
                                            yettie.passwordInput(option, function(inputPwd){
                                                if(option.selectedToken == vest.token.TYPE.PFXNPKI) { inputPwd = signPwd; }
                                                selectedToken = option.selectedToken;
                                                vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, inputPwd, option, function(result){
                                                    setMatchedContextExtCallback(result);
                                                }, function(error) {
                                                    certError(error, callback);
                                                });
                                            }, function(error){
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }
                                    // 당경우는 없음 걸리면 안됨. -> 기본으로 처리
                                    else{
                                        config.ablePwd = true;
                                        config.disableToken = false;

                                        yettie.init(config);
                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, signPwd, option, function(result){
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }
                                }
                                else {
                                    //(list.length == 1 && !(typeof(dnAndSuffix) === 'undefined' || dnAndSuffix == "") && !(typeof(sessionPwd) === 'undefined' || sessionPwd == "")
                                    // 1. dn에 해당되는 인증서가 하나의 매체, password 있음, 타입 0 => 바로 서명
                                    if(list.length == 1 && !(typeof(_pwd) === 'undefined' || _pwd == '') && (type & 0x000000F0) == 0) {
                                        yettie.init(config);
                                        yettie.renewal(list[0], kos_var.pCertNewUrl, function () {
                                            option.selectedToken = vest.token.getTokenType(list[0]);
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, kos_var.matchedTokenNumber, kos_var.matchedIdentifier, _pwd, option, function (result) {
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }

                                    // 2. dn에 해당되는 인증서가 하나의 매체, password 없음, 타입 0 => 인증서 리스트창, 비밀번호 활성화
                                    else if (list.length == 1 && (typeof(_pwd) === 'undefined' || _pwd == '') && (type & 0x000000F0) == 0) {
                                        config.ablePwd = true;
                                        config.disableToken = false;

                                        callSign(false, function(tokenIdentifier, certIdentifier, signpwd, option) {
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, signpwd, option, function (result){
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function(error) {
                                            certError(error, callback);
                                        })
                                    }

                                    // 3. dn에 해당되는 인증서가 하나의 매체, password 있음, 타입 16 => 비밀번호 하나 창
                                    else if (list.length == 1 && !(typeof(_pwd) === 'undefined' || _pwd == '') && (type & 0x000000F0) == 16) {
                                        option.selectedToken = vest.token.getTokenType(list[0]);
                                        option.tokenName = list[0].dn;
                                        yettie.init(config);
                                        yettie.passwordInput(option, function(inputPwd){
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, kos_var.matchedTokenNumber, kos_var.matchedIdentifier, inputPwd, option, function(result){
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function(error){
                                            certError(error, callback);
                                        });
                                    }

                                    // 4. dn에 해당되는 인증서가 하나의 매체, password 없음, 타입 16 => 비밀번호 하나 창
                                    else if (list.length == 1 && (typeof(_pwd) === 'undefined' || _pwd == '') && (type & 0x000000F0) == 16) {
                                        option.selectedToken = vest.token.getTokenType(list[0]);
                                        option.tokenName = list[0].dn;
                                        yettie.init(config);
                                        yettie.passwordInput(option, function(inputPwd){
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, kos_var.matchedTokenNumber, kos_var.matchedIdentifier, inputPwd, option, function(result){
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function(error) {
                                            certError(error, callback);
                                        });
                                    }

                                    // 5. dn에 해당되는 인증서가 두개의 매체, password 있음, 타입 0 => 인증서 리스트창, 비밀번호 비활성화
                                    else if (list.length >= 2 && !(typeof(_pwd) == 'undefined' || _pwd == '') && (type & 0x000000F0) == 0) {
                                        config.ablePwd = false;
                                        config.disableToken = false;

                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, _pwd, option, function(result){
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }

                                    // 6. dn에 해당되는 인증서가 두개의 매체, password 없음, 타입 0 => 인증서 리스트창, 비밀번호 활성화
                                    else if (list.length >= 2 && (typeof(_pwd) == 'undefined' || _pwd == '') && (type & 0x000000F0) == 0) {
                                        config.ablePwd = true;
                                        config.disableToken = false;

                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            selectedToken = option.selectedToken;
                                            vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, signPwd, option, function(result){
                                                setMatchedContextExtCallback(result);
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }

                                    // 7. dn에 해당되는 인증서가 두개의 매체, password 있음, 타입 16 => 인증서 리스트창, 비밀번호 비활성화 -> 비밀번호 하나 창
                                    else if (list.length >= 2 && !(typeof(_pwd) == 'undefined' || _pwd == '') && (type & 0x000000F0) == 16) {
                                        config.ablePwd = false;
                                        config.disableToken = false;

                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            yettie.init(config);
                                            yettie.passwordInput(option, function(inputPwd){
                                                selectedToken = option.selectedToken;
                                                vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, inputPwd, option, function(result){
                                                    setMatchedContextExtCallback(result);
                                                }, function(error) {
                                                    certError(error, callback);
                                                });
                                            }, function(error){
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }

                                    // 8. dn에 해당되는 인증서가 두개의 매체, password 없음, 타입 16 => 인증서 리스트창, 비밀번호 비활성화 -> 비밀번호 하나 창
                                    else if (list.length >= 2 && (typeof(_pwd) == 'undefined' || _pwd == '') && (type & 0x000000F0) == 16) {
                                        config.ablePwd = false;
                                        config.disableToken = false;

                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            yettie.init(config);
                                            yettie.passwordInput(option, function(inputPwd){
                                                selectedToken = option.selectedToken;
                                                vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, inputPwd, option, function(result){
                                                    setMatchedContextExtCallback(result);
                                                }, function(error) {
                                                    certError(error, callback);
                                                });
                                            }, function(error) {
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }

                                    // 걸릴일이없어야함..
                                    else {
                                        config.ablePwd = false;
                                        config.disableToken = false;

                                        callSign(false, function(tokenIdentifier, certIdentifier, signPwd, option) {
                                            yettie.init(config);
                                            yettie.passwordInput(option, function(inputPwd){
                                                selectedToken = option.selectedToken;
                                                vest.token.makeCustomSession(customStr, tokenIdentifier, certIdentifier, inputPwd, option, function(result){
                                                    setMatchedContextExtCallback(result);
                                                }, function(error) {
                                                    certError(error, callback);
                                                });
                                            }, function(error){
                                                certError(error, callback);
                                            });
                                        }, function (error) {
                                            certError(error, callback);
                                        });
                                    }
                                }
                            }
                        }
                    }, function (error) {
                        certError(error, callback);
                    });
                })
            });
        });
    }

    function SetExceptExpiredCert(flag) {
        kos_var.exceptExpiredCert = flag;
        return kos_var.exceptExpiredCert;
    }

    function SetServiceMode(host, mode) {
        var str = "";
        if (host != "") str += host;
        if (mode != "") str += mode;
        if (str == "") str += window.location.host;

        cookie.setCookie(siteCode, str);
        return true;
    }

    function ClearSessionService(host, service) {
    }

    function SetSessionServicePort(port) {
    }

    function SetWrongPasswordLimit(count) {
        return count;
    }

    function GetLastErrorCode() {
        return kos_var.errorCode;
    }

    function GetLastErrorMsg() {
        return kos_var.errorMessage;
    }

    function GetPCIdentity(input, mode, callback) {
        loadingLibrary(function () {
            vest.token.getPCIdentityInfo(mode, input, function (result) {
                callback(result);
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function GetMacAddress(mode, callback) {
        loadingLibrary(function () {
            vest.token.getMacAddress(mode, function (result) {
                callback(result);
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    var GetToken = function (pString, pToken) {

        //if (!pString.match(pToken + '='))
        //    return '';
        var tmpStr = pString.split('$');
        if (tmpStr[0] == pString) return "";

        var resultStr;
        //var resultStr = tmpStr[kos_var.tokenCnt].split(pToken + '=');
        for (var i = 0; i < tmpStr.length; i++) {
            if (tmpStr[i].match(pToken + '=')) {
                resultStr = tmpStr[i].split(pToken + "=");
            }
        }
        return (typeof(resultStr) == 'undefined' ? '' : resultStr[1]);
    };

    function SetDeviceOrder(pOrderStr) {
        kos_var.pOrderStr = pOrderStr.toUpperCase();
        return true;
    }

    function SetPasswordEncMode(mode) {
        return true;
    }

    function SetExipreCheckSkip(flag) {
        kos_var.flag = flag;
        cookie.setCookie('expireCheck', flag);
        return flag;
    }

    // HARD_DISK('H'), REMOVABLE('R'),   PKCS11_KEY('U'), SMART_CARD('S')
    function SetDeviceViewOrder(pViewOrderStr) {
        kos_var.pViewOrderStr = pViewOrderStr;
        return true;
    }

    function SetPolicyFilter(mode, pszOID) {
        kos_var.policyMode = mode;
        kos_var.policyOID = pszOID;
        return true;
    }

    function SetWebAccMode(mode) {
        if (mode == 1 || mode == "1") kos_var.webAccess = true;
    }

    function SetScanByDialogChoiceMode(mode) {
        kos_var.scanByDialogChoiceMode = mode;
    }

    function SetLanguageMode(mode) {
        config.language = mode;
    }

    function SetKeySaferMode(mode) {
        //config.keystrokeEncryption = mode;
        config.keystrokeEncryption = keyVendor[mode];
        kos_var.keySafer_mode = mode;
        return true;
    }

    function VerifyDataB64(pB64Signature, mode, callback) {
        var params = {};
        option.signtype = 1;
        option.signInputType = 0;

        loadingLibrary(function () {
            vest.util.setObject.center(option);
            vest.token.verifyData(pB64Signature, mode, params, option, callback, function (error) {
                certError(error, callback);
            })
        });
    }

    function VerifyCmsDataB64(pB64Signature, mode, callback) {
        var params = {};
        option.signtype = 2;
        option.signInputType = 0;

        loadingLibrary(function () {
            vest.util.setObject.center(option);
            vest.token.verifyData(pB64Signature, mode, params, option, callback, function (error) {
                certError(error, callback);
            })
        });
    }

    function VerifyPlainCmsDataB64(pB64Signature, plain, mode, callback) {
        var params = {};
        option.signtype = 4;
        option.signInputType = 0;
        params.plain = plain;

        loadingLibrary(function () {
            vest.util.setObject.center(option);
            vest.token.verifyData(pB64Signature, mode, params, option, callback, function (error) {
                certError(error, callback);
            })
        });
    }


    function VerifyData_ne_B64(pB64Signature, plain, certOrKey, mode, callback) {
        var params = {};

        params.type = mode;
        params.certOrKey = certOrKey;
        params.InputType = 0;
        params.plain = plain;
        option.signtype = 3;
        option.signInputType = 0;

        loadingLibrary(function () {
            vest.util.setObject.center(option);
            vest.token.verifyData(pB64Signature, 0, params, option, callback, function (error) {
                certError(error, callback);
            })
        });
    }

    function getSignatureType(option, signature) {
        var str = "";

        if (typeof(option) !== 'object') {
            str = signature.signature;
        }
        else if (option.signtype == 3 && option.signprotocol == 1) {
            str += "$dn=";
            str += signature.extentions.dn;
            str += "$data=";
            str += signature.signature;
            str += "$certificate=";
            str += signature.extentions.certificate;
        }
        else if (option.signprotocol == 1) {
            str += "$dn=";
            str += signature.extentions.dn;
            str += "$data=";
            str += signature.signature;
            str += "$r=";
            str += signature.extentions.r;
        }
        else {
            str = signature.signature;
        }

        return str;
    }

    function SignDataB64(pPassword, pPlainText, mode, callback) {
        //option.encoding = 'base64';
        //config.title = "인증서 선택";
        config.title = signTitle.SELECT;
        config.ablePwd = true;
        config.disableToken = false;

        kos_var.pPlainText = pPlainText;

        switch (mode) {
            case 0:
                option.signtype = 1;
                option.signprotocol = 0;
                break;

            case 1:
                option.signtype = 1;
                option.signprotocol = 1;
                break;

            case 3:
                option.signtype = 2;
                option.signprotocol = 0;
                break;

            case 4:
                option.signtype = 2;
                option.signprotocol = 1;
                break;
                
            case 5:
                option.signInputType = 3;
                option.signtype = 4;
                option.signprotocol = 0;
                option.signAttribute = 1;
                option.noCharSet = 1;
                break;

        }

        if (pPlainText == "" || typeof(pPlainText) === 'undefined' || pPlainText == null) {
            // 에러코드 설정;
            kos_var.errorCode = 1099;
            kos_var.errorMessage = "입력 매개변수가 null입니다.";

            callback("");
            return;
        }

        if (pPassword == "") pPassword = undefined;
        //if (kos_var.matchedContextFlag && kos_var.matchedList.length == 0) {
        if (setMatchedOptions.matchedContextFlag) {
            loadingLibrary(function () {
                option.customStr = cookie.getCookie(siteCode);
                vest.util.setObject.center(option);
                option.selectedToken = selectedToken;
                if(setMatchedOptions.password != '') pPassword = setMatchedOptions.password;
                vest.token.makeSignatureFromKoscom(kos_var.matchedTokenNumber, pPassword, kos_var.matchedIdentifier, pPlainText, option, function (result) {
                    //callback(result.signature)
                    setMatchedOptionsInit();
                    callback(getSignatureType(option, result));
                }, function (error) {
                    certError(error, callback);
                });
            });
        }
        else {
            loadingLibrary(function () {
                callSign(false, function (tokenNumber, identifier, password, option) {
                    if (tokenNumber instanceof vest.pki.CertificateSet) {
                        try{
                            tokenNumber.makeSignature(pPlainText, password, option, function (result) {
                                callback(getSignatureType(option, result));
                            });
                        } catch (e) {
                            var error = {
                                code: vest.error.errorCode.ScriptError_PFX_MAKESIGNATURE_ERORR
                            };
                            certError(error, callback);
                        }
                    }else{
                        vest.util.setObject.center(option);
                        vest.token.makeSignatureFromKoscom(tokenNumber, password, identifier, pPlainText, option, function (result) {
                            kos_var.use = false;
                            callback(getSignatureType(option, result));
                        }, function (error) {
                            certError(error, callback);
                        });
                    }
                }, function (error) {
                    certError(error, callback);
                });
            });
        }
    }

    function SignDataNextB64(pPassword, pPlainText, mode) {
        //kos_var.pPlainText = pPlainText;
    }

    function SignData_ne_B64(pPassword, pPlainText, mode, callback) {
        //option.encoding = 'base64';
        //config.title = "인증서 선택";
        config.title = signTitle.SELECT;
        config.ablePwd = true;
        config.disableToken = false;

        kos_var.pPlainText = pPlainText;

        switch (mode) {
            case 0:
                option.signtype = 3;
                option.signprotocol = 0;
                break;

            case 1:
                option.signtype = 3;
                option.signprotocol = 1;
                break;
        }

        if (pPlainText == "" || typeof(pPlainText) === 'undefined' || pPlainText == null) {
            // 에러코드 설정;
            kos_var.errorCode = 1099;
            kos_var.errorMessage = "입력 매개변수가 null입니다.";

            callback("");
            return;
        }

        if (pPassword == "") pPassword = undefined;
        if (setMatchedOptions.matchedContextFlag) {
            loadingLibrary(function () {
                option.customStr = cookie.getCookie(siteCode);
                vest.util.setObject.center(option);
                if(setMatchedOptions.password != '') pPassword = setMatchedOptions.password;
                option.selectedToken = selectedToken;
                vest.token.makeSignatureFromKoscom(kos_var.matchedTokenNumber, pPassword, kos_var.matchedIdentifier, pPlainText, option, function (result) {
                    //callback(result.signature)
                    setMatchedOptionsInit();
                    callback(getSignatureType(option, result));
                }, function (error) {
                    certError(error, callback);
                });
            });
        }
        else {
            loadingLibrary(function () {
                callSign(false, function (tokenNumber, identifier, password, option) {
                    if (tokenNumber instanceof vest.pki.CertificateSet) {
                        try{
                            tokenNumber.makeSignaturePKCS1(pPlainText, password, option, function (result) {
                                callback(getSignatureType(option, result));
                            });
                        } catch (e) {
                            var error = {
                                code: vest.error.errorCode.ScriptError_PFX_MAKESIGNATURE_ERORR
                            };
                            certError(error, callback);
                        }
                    }
                    else {
                        vest.util.setObject.center(option);
                        vest.token.makeSignatureFromKoscom(tokenNumber, password, identifier, pPlainText, option, function (result) {
                            callback(getSignatureType(option, result));
                        }, function (error) {
                            certError(error, callback);
                        });
                    }
                }, function (error) {
                    certError(error, callback);
                });
            });
        }
    }

    function CertManager_Issue(pszRefNo, pszAuthCode, pszUserID, pszPassword, callback) {
        config.storageSelectedFlag = true;
        config.storageSelectedTokenNumber = '';
        config.kos_var = kos_var;
        yettie.init(config);

        var clauseFlag = true;
        if (pszUserID == "NO_CPS") clauseFlag = false;

        var issue = function (refNo, authCode) {
            yettie.storageSelected(option, function (tokenNumber, option) {
                vest.util.setObject.center(option);

                if(option.selectedToken == vest.token.TYPE.TOKEN || option.selectedToken == vest.token.TYPE.SAVETOKEN) option.passwordInput = 1;
                else option.passwordInput = 0;
                config.passwordInputTitle = vest.util.title.passwordInputTitle.ISSUE;
                yettie.init(config);
                yettie.passwordInput(option, function(tokenPin) {
                    if(option.selectedToken == vest.token.TYPE.SYSTEM || option.selectedToken == vest.token.TYPE.LOCALDISK ||
                        option.selectedToken == vest.token.TYPE.SAVETOKEN || option.selectedToken == vest.token.TYPE.USBKEY) option.passwordInput = 2;
                    else option.passwordInput = 0;
                    config.passwordInputTitle = vest.util.title.passwordInputTitle.ISSUE;
                    yettie.passwordInput(option, function(pin) {
                        vest.token.setIssueOptions(tokenNumber, 'signKorea', refNo, authCode, pin, tokenPin, option, function (result) {
                            result.tokenNumber = tokenNumber;
                            result.refNo = refNo;
                            result.authCode = authCode;
                            result.option = option;
                            result.pin = pin;
                            result.tokenPin = tokenPin;
                            bill(result, 1, callback);
                        }, function (error) {
                            certError(error, callback);
                        });
                    }, function(error){
                        certError(error, callback);
                    });
                }, function(error){
                    certError(error, callback);
                })
            }, function (error) {
                certError(error, callback);
            });
        };


        var clause = function (refNo, authCode) {
            if (clauseFlag) {
                yettie.clause(function () {
                    issue(refNo, authCode);
                }, function (error) {
                    certError(error, callback);
                });
            } else {
                issue(refNo, authCode);
            }
        };

        loadingLibrary(function () {
            if (typeof(pszRefNo) === "undefined" || typeof(pszAuthCode) === "undefined" || pszRefNo == "" || pszAuthCode == "") {
                yettie.issueInput(clause, function (error) {
                    certError(error, callback);
                });
            } else {
                clause(pszRefNo, pszAuthCode);
            }
        });
    }

    function CertManager_CertNew(pszUserID, pszPassword, callback) {
        //config.title = "인증서 갱신";
        config.title = signTitle.RENEWAL;
        config.ablePwd = false;
        config.disableToken = false;

        kos_var.isBullet = true;
        kos_var.userID = pszUserID;

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password, option) {
                vest.util.setObject.center(option);

                if(option.selectedToken == vest.token.TYPE.TOKEN) option.passwordInput = 1;
                else option.passwordInput = 0;
                config.passwordInputTitle = vest.util.title.passwordInputTitle.UPDATECERTIFICATE;
                yettie.init(config);
                yettie.passwordInput(option, function(tokenPin){
                    config.passwordInputTitle = vest.util.title.passwordInputTitle.UPDATECERTIFICATE;
                    if(option.selectedToken == vest.token.TYPE.SYSTEM || option.selectedToken == vest.token.TYPE.LOCALDISK || option.selectedToken == vest.token.TYPE.SAVETOKEN) option.passwordInput = 3;
                    else option.passwordInput = 0;
                    yettie.passwordInput(option, function(oldPassword, newPassword){
                        vest.token.updateCertificate(tokenNumber, identifier, 'signKorea', oldPassword, newPassword, tokenPin, undefined, option, function (result) {
                            result.tokenNumber = tokenNumber;
                            result.identifier = identifier;
                            result.option = option;
                            result.oldPassword = oldPassword;
                            result.newPassword = newPassword;
                            result.tokenPin = tokenPin;
                            bill(result, 0, callback);
                        }, function (error) {
                            certError(error, callback);
                        });
                    }, function(error){
                        certError(error, callback);
                    });
                }, function(error){
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback);
            });
        })
    }

    function CertManager_Suspend(pszUserID, pszPassword, callback) {
        //config.title = "인증서 효력정지";
        config.title = signTitle.SUSPENSION;
        config.ablePwd = true;
        config.disableToken = false;
        kos_var.userID = pszUserID;

        loadingLibrary(function () {
            callSign(false, function (tokeNumber, identifier, password, option) {
                vest.util.setObject.center(option);
                vest.token.suspend(tokeNumber, identifier, 'signkorea', password, option, callback, function (error) {
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function CertManager_Revoke(pszUserID, pszPassword, callback) {
        //config.title = "인증서 폐지";
        config.title = signTitle.ABOLITION;
        config.ablePwd = true;
        config.disableToken = false;
        kos_var.userID = pszUserID;

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password, option) {
                vest.util.setObject.center(option);
                vest.token.revoke(tokenNumber, identifier, 'signkorea', password, option, callback, function (error) {
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function CertManager_KeyNew(dn, pszPassword, callback) {
        if (dn == "KM_ONLY") {
            //config.title = "암호화용 인증서 추가 발급";
            config.title = signTitle.ENCRYPTIONISSUE;
            config.ablePwd = false;
            config.disableToken = false;
            kos_var.userID = '';
            kos_var.keyNew = 'KM_ONLY';
        } else {
            //config.title = "인증서 재발급";
            config.title = signTitle.REISSUE;
            config.ablePwd = false;
            config.disableToken = false;
            kos_var.userID = dn;
            kos_var.keyNew = '!KM_ONLY';
        }

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password, option) {
                if (dn == "KM_ONLY") {
                    option.reIssue = 1;
                } else option.reIssue = 0;
                vest.util.setObject.center(option);


                if(option.selectedToken == vest.token.TYPE.TOKEN) option.passwordInput = 1;
                else option.passwordInput = 0;
                config.passwordInputTitle = vest.util.title.passwordInputTitle.REISSUE;
                yettie.init(config);
                yettie.passwordInput(option, function(tokenPin){
                    config.passwordInputTitle = vest.util.title.passwordInputTitle.REISSUE;
                    if(option.selectedToken == vest.token.TYPE.SYSTEM || option.selectedToken == vest.token.TYPE.LOCALDISK || option.selectedToken == vest.token.TYPE.SAVETOKEN) option.passwordInput = 3;
                    else option.passwordInput = 0;
                    yettie.passwordInput(option, function(oldPassword, newPassword){
                        vest.token.updateCertificate(tokenNumber, identifier, 'signKorea', oldPassword, newPassword, tokenPin, undefined, option, function (result) {
                            result.tokenNumber = tokenNumber;
                            result.identifier = identifier;
                            result.option = option;
                            result.oldPassword = oldPassword;
                            result.newPassword = newPassword;
                            result.tokenPin = tokenPin;
                            bill(result, 0, callback);
                        }, function (error) {
                            certError(error, callback);
                        });
                    }, function(error){
                        certError(error, callback);
                    });
                }, function(error){
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function CertManager_Status(pszUserID, callback) {
        //config.title = "인증서 검색";
        config.title = signTitle.SEARCH;
        config.ablePwd = false;
        config.disableToken = false;
        kos_var.userID = pszUserID;

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password, option) {
                //vest.token.verifyPin(tokenNumber, identifier, password, callback, function (error) {
                //    certError(error, callback);
                //});
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function RemoveLF(pSrc) {


    }

    function SetCertNewUrlInfo(pCertNewUrl) {
        if (!(pCertNewUrl.indexOf("http://") != 0 || pCertNewUrl.indexOf("https://") != 0)) {
            pCertNewUrl = "http://" + pCertNewUrl;
        }
        kos_var.pCertNewUrl = pCertNewUrl;
        return true;
    }

    function ExportP12(pszUserID, pszPassword, callback) {
        //config.title = "인증서 검색";
        config.title = signTitle.SEARCH;
        config.ablePwd = true;
        config.disableToken = true;
        kos_var.userID = pszUserID;

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password, option) {
                kos_var.fullDn = '';
                vest.util.setObject.center(option);
                vest.token.exportP12(tokenNumber, identifier, password, 1, option, callback, function (error) {
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback)
            });
        });
    }

    function ImportP12(pszPassword, callback) {
        loadingLibrary(function () {
            var option = {};
            config.kos_var = kos_var;

            vest.util.setObject.center(option);
            option.fileType = 17;
            vest.token.getFilePath(option, function(path){
                option.passwordInput = 1;
                yettie.init(config);
                yettie.passwordInput(option, function(pfxPin){
                    option.pfxCertPath = path.path;
                    vest.token.getTokenList(vest.token.TYPE.SYSTEM, undefined, function(list){
                        vest.token.importP12(list[0].tokenIdentifier, pfxPin, undefined, 1, option, callback, function (error) {
                            certError(error, callback);
                        });
                    }, function(error){
                        certError(error, callback);
                    });
                }, function(error){
                    certError(error, callback);
                });
            }, function(error){
                certError(error, callback);
            });
        });
    }

    function VerifyPassword(pszUserID, callback) {
        //config.title = "인증서 검색";
        config.title = signTitle.SEARCH;
        config.ablePwd = true;
        config.disableToken = false;
        kos_var.userID = pszUserID;

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password, option) {
                vest.util.setObject.center(option);
                vest.token.verifyPin(tokenNumber, identifier, password, callback, function(error){
                    if(error.code == 13603) {
                        yettie.init(config);
                        yettie.notMatchedPassword(option, function(){
                            option.passwordInput = 1;
                            yettie.init(config);
                            yettie.passwordInput(option, function(oldPassword) {
                                vest.token.certificateSynchronize(tokenNumber, identifier, password, oldPassword, 'undefined', callback, function(error){
                                    certError(error, callback);
                                });
                            }, function(error) {
                                certError(error, callback);
                            });
                        }, function(error){
                            certError(error, callback);
                        });
                    }
                    else {
                        certError(error, callback);
                    }
                });
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function CertManager_ChangePassword(pszUserID, pszOldPassword, pszNewPassword, callback) {
        //config.title = "인증서 비밀번호 변경";
        config.title = signTitle.CHANGE;
        config.ablePwd = false;
        config.disableToken = true;
        kos_var.userID = pszUserID;

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password, option) {
                config.passwordInputTitle = vest.util.title.passwordInputTitle.CHANGEPASSWORD;
                vest.util.setObject.center(option);
                option.passwordInput = 3;
                yettie.init(config);
                yettie.passwordInput(option, function(oldPassword, newPassword){
                    vest.token.changePin(tokenNumber, identifier, oldPassword, newPassword, option, callback, function (error) {
                        certError(error, callback);
                    });
                }, function(error){
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback);
            })
        });
    }

    function ChangeStorageMedia(pszUserID, callback) {
        //config.title = "인증서 검색";
        config.title = signTitle.SEARCH;
        config.ablePwd = true;
        config.disableToken = true;

        config.kos_var = kos_var;
        kos_var.userID = pszUserID;

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password) {
                config.disableToken = false;
                config.storageSelectedFlag = false;
                config.storageSelectedTokenNumber = tokenNumber;
                config.kos_var = kos_var;
                yettie.init(config); // kos_var 변수들 전달하기 위해.. 한거네..... +config
                yettie.storageSelected(option, function (newTokenNumber, options) {
                    var removeCheck = true;
                    if(options.selectedToken == vest.token.TYPE.TOKEN) removeCheck = false;
                    if(options.selectedToken == vest.token.TYPE.TOKEN || options.selectedToken == vest.token.TYPE.SAVETOKEN) options.passwordInput = 1; else options.passwordInput = 0;
                    yettie.passwordInput(options, function(tokenPin){
                        vest.util.setObject.center(option);
                        vest.token.getCertificates(tokenNumber, tokenPin, undefined, undefined, undefined, options, function () {
                            // 인증서 정보.
                            vest.token.getCertificate(tokenNumber, identifier.cert, function (certificate) {
                                option.certificateSubject = certificate.getSubject();
                                var changeStroage = function(flag) {
                                    //flag = 1: 기존인증서 삭제O //  flag = 0: 기존인증서 삭제 X
                                    vest.token.changeStorageMedia(tokenNumber, newTokenNumber, identifier, flag, password, tokenPin, options, callback, function (error) {
                                        certError(error, callback);
                                    });
                                };
                                if(removeCheck && config.changeStorageRemoveCert) yettie.confirm(confirmMsg.DELETECERT, option, changeStroage, changeStroage);
                                else changeStroage(0);
                            }, function (error) {
                                certError(error, callback);
                            });
                        }, function (error) {
                            certError(error, callback);
                        });
                    }, function(error) {
                        certError(error, callback);
                    });
                }, function (error) {
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function trayOn(callback) {
        var option = {};
        loadingLibrary(function () {
            vest.util.setObject.center(option);
            vest.token.tray("koscom", "on", option, callback, function (error) {
                certError(error, callback);
            });
        });
    }

    function trayOff(callback) {
        var option = {}
        loadingLibrary(function () {
            vest.util.setObject.center(option);
            vest.token.tray("koscom", "off", option, callback, function (error) {
                certError(error, callback);
            });
        });
    }

    function certServiceSetup(callback) {
        loadingLibrary(function () {
            if(vest){	//HI-CUSTOM
				vest.token.getVersion(function (versions) {
					var returnVersion = "";
					if (vest.util.certVersion.availableVersion(vest.util.certVersion.getVersion('VestCert', versions), config.version.SKCertService)
						&& vest.util.certVersion.availableVersion(vest.util.certVersion.getVersion('VestCertSecurityService', versions), config.version.SantiagoSecurityService)) {
						returnVersion = vest.util.certVersion.getVersion('VestCert', versions);
						callback(returnVersion);
					}
					else if (!vest.util.certVersion.availableVersion(vest.util.certVersion.getVersion('VestCert', versions), config.version.SKCertService)) {
						kos_var.errorCode = 90001;
						//kos_var.errorMessage = "설치한 모듈 버전이 낮습니다, 최신버전을 설치해주세요,";
						kos_var.errorMessage = vest.error.getErrorMessage(90001, config.language);
						certError(new vest.error(kos_var.errorCode, kos_var.errorMessage), callback);
					}
					else {
						kos_var.errorCode = 90002;
						//kos_var.errorMessage = "설치한 DLL 버전이 낮습니다, 최신버전을 설치해주세요,";
						kos_var.errorMessage = vest.error.getErrorMessage(90002, config.language);
						certError(new vest.error(kos_var.errorCode, kos_var.errorMessage), callback);
					}
					//callback(returnVersion);
				}, function (error) {
					certError(error, callback);
				});
			}	//HI-CUSTOM
        });
    }

    function ShowConfigMenuX(mode, callback) {
        var option = {};
        option.mode = mode;
        loadingLibrary(function () {
            vest.util.setObject.center(option);
            vest.token.tray("koscom", "config", option, callback, function (error) {
                certError(error, callback);
            });
        })
    }

    function doubleClickBlock(key) {
        if (typeof(window.signMap) === 'undefined') window.signMap = [];
        if (typeof(window.signMap[key]) === 'undefined' || window.signMap[key] == false) {
            window.signMap[key] = true;
            setTimeout(function () {
                window.signMap[key] = false;
            }, 2000)
        }
        else {
            return true;
        }
    }

    function SetInfoPage(mode) {
        if (mode === 0) {
            kos_var.isInfoPage = true;
            return true;
        }
        else if (mode === 1) {
            kos_var.isInfoPage = false;
            return true;
        } else {
            return false;
        }
    }

    function relayExport(callback) {
        config.ablePwd = true;
        config.disableToken = true;
        config.title = signTitle.SEARCH;
        loadingLibrary(function () {
            callSign(true, function (tokenNumber, identifier, password, option) {
                yettie.init(config);
                yettie.relayExport(option, function (option) {
                    option.relayIP = config.relay.serviceIP;
                    option.relayPort = config.relay.servicePort;
                    option.siteCode = config.relay.siteCode;
                    vest.token.relayRaonExportCert(tokenNumber, identifier, password, option.code, option, function (result) {
                        callback(result);
                    }, function (error) {
                        certError(error, callback)
                    });
                }, function (error) {
                    certError(error, callback)
                });
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function relayImport(callback) {
        config.kos_var = kos_var;
        //var callStorageSelected = function (option, callback, errorcallback) {
        //    yettie.storageSelected(option, function (tokenNumber, option) {
        //        vest.token.relayRaonGetCert(tokenNumber, "NONE", option, function (result) {
        //            callback(result);
        //        }, function (error) {
        //            if (error.code === 22003) {
        //                //alert("보내는 단말에 인증번호를 입력해주세요.");
        //                vest.error.getErrorMessage(error.code, config.language)
        //                callStorageSelected(option, callback, errorcallback);
        //            }
        //            else {
        //                errorcallback(error);
        //            }
        //        });
        //    }, function (error) {
        //        certError(error, callback);
        //    });
        //};

        loadingLibrary(function () {
            option.relayIP = config.relay.serviceIP;
            option.relayPort = config.relay.servicePort;
            option.siteCode = config.relay.siteCode;
            vest.util.setObject.center(option);
            vest.token.relayRaonGetRefNum(0, "NONE", option, function (refNum) {
                option.refNum = refNum;
                yettie.init(config);
                yettie.relayImport(option, function (option) {
                    config.disableToken = true;
                    yettie.init(config);
                    yettie.storageSelected(option, function (tokenNumber, option) {
                        if(option.selectedToken == vest.token.TYPE.TOKEN || option.selectedToken == vest.token.TYPE.SAVETOKEN) option.passwordInput = 1;
                        else option.passwordInput = 0;
                        yettie.passwordInput(option, function(tokenPin) {
                            vest.token.relayRaonGetCert(tokenNumber, "NONE", tokenPin, option, function (result) {
                                callback(result);
                            },  function (error) {
                                certError(error, callback);
                            });
                        }, function(error){
                            certError(error, callback);
                        });
                    }, function (error) {
                        certError(error, callback);
                    });
                    //callStorageSelected(option, callback, function(error){certError(error, callback)});
                }, function (error) {
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function Identify(dn, idn, callback) {
        //config.title = "인증서 선택";
        config.title = signTitle.SELECT;
        config.ablePwd = true;
        config.disableToken = false;
        kos_var.userID = dn;
        config.kos_var = kos_var;
        yettie.init(config);

        var callVerifyVID = function (tokenNumber, identifier, password, idn) {
            vest.util.setObject.center(option);
            vest.token.verifyVID(tokenNumber, identifier, password, idn, callback, function (error) {
                certError(error, callback);
            })
        };

        loadingLibrary(function () {
            callSign(false, function (tokenNumber, identifier, password) {
                kos_var.matchedIdentifier = '';
                kos_var.userID = '';
                if (typeof(idn) === "undefined" || idn == "" || idn == null) {
                    yettie.identify(function (idn) {
                        callVerifyVID(tokenNumber, identifier, password, idn);
                    }, function (error) {
                        certError(error, callback);
                    });
                }
                else {
                    callVerifyVID(tokenNumber, identifier, password, idn);
                }
            }, function(error){
                certError(error, callback);
            });
        })
    }

    function UcpidReqUser(dn, pszPassword, userArgmnt, mode, callback) {
        var ucpid;
        var error = {};

        //config.title = "인증서 선택";
        config.title = signTitle.SELECT;
        if (!(pszPassword == '' || pszPassword == 'undefined'))
            config.ablePwd = false;

        config.disableToken = false;
        kos_var.userID = dn;

        if (userArgmnt == '' || userArgmnt == 'undefined') {
            error.code = 90101;
            //error.message = 'The argument value is invalid.(userAgreement)';
            error.message = vest.error.getErrorMessage(error.code, config.language);
            certError(error, callback);
            return;
        }
        if (typeof(mode) != 'number' || mode == 0) {
            error.code = 90102;
            //error.message = 'The argument value is invalid.(mode)';
            error.message = vest.error.getErrorMessage(error.code, config.language);
            certError(error, callback);
            return;
        }


        loadingLibrary(function () {
            //이름: 1, 생일: 8,성별: 2, 국적: 4
            var realName, birthDate, gender, nationalInfo;

            realName = (mode & 0x00000001) == 1 ? 1 : 0;
            birthDate = (mode & 0x00000008) == 8 ? 1 : 0;
            gender = (mode & 0x00000002) == 2 ? 1 : 0;
            nationalInfo = (mode & 0x00000004) == 4 ? 1 : 0;

            var ucpidOptions = {
                realName: realName,
                birthDate: birthDate,
                gender: gender,
                nationalInfo: nationalInfo,
                charset: option.encoding
            };
            try {
                ucpid = vest.pki.generateUCPID(userArgmnt, ucpidOptions);
            } catch (e) {
                //ucpid문 생성 실패
                error.code = 90100;
                error.message = e.message();
                certError(error, callback);
            }

            callSign(false, function (tokenNumber, identifier, password, option) {
                vest.util.setObject.center(option);
                option.bytes = true;
                if (!(pszPassword == '' || pszPassword == 'undefined')) password = pszPassword;
                vest.token.makeSignatureFromKoscom(tokenNumber, password, identifier, ucpid, option, function (result) {
                    kos_var.use = false;
                    callback(result.signature)
                }, function (error) {
                    certError(error, callback);
                });
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function envelope(nSessionID, plain, b64Certificate, dn, opFlag, callback) {

        if(typeof nSessionID === 'undefined' || String(nSessionID) == '' ||  nSessionID === null ||
            typeof plain === 'undefined' || plain == '' ||
            typeof b64Certificate === 'undefined' || b64Certificate == '' ||
            typeof opFlag === 'undefined' || String(opFlag) == '' || opFlag === null ||
            typeof callback !== 'function'){
            certError({code: vest.error.errorCode.ScriptError_ENVELOP_INVALID_VALUE}, callback);
            return;
        }

        var envelopStart = function(b64DerCert) {
            vest.token.koscomEnvelop(String(nSessionID), plain, b64DerCert, String(opFlag), option, callback, function (error) {
                certError(error, callback);
            });
        };

        if(typeof b64Certificate === "string" && b64Certificate != "") {
            envelopStart(b64Certificate);
        }else {
            config.ablePwd = false;
            kos_var.userID = dn;
            callSign(false, function (tokenNumber, identifier, undefind, option) {
                vest.util.setObject.center(option);
                vest.token.getCertificate(tokenNumber, identifier.cert, function(cert) {
                    envelopStart(vest.util.hexToBase64(cert.toHex()));
                });
            }, function (error) {
                certError(error, callback);
            });
        }
    }

    function develope(b64EnvelopedData, dn, password, opFlag, callback) {

        if(typeof b64EnvelopedData === 'undefined' || b64EnvelopedData == '' ||
            typeof dn === 'undefined' || dn == '' ||
                //typeof password === 'undefined' || password == '' ||
            typeof opFlag === 'undefined' || String(opFlag) == '' || opFlag === null ||
            typeof callback !== 'function'){
            certError({code: vest.error.errorCode.ScriptError_DEVELOP_INVALID_VALUE}, callback);
            return;
        }

        var developStart = function(tokenNumber, identifier, developPassword) {
            if(typeof developPassword === 'undefined' || developPassword == "") developPassword = password;
            vest.util.setObject.center(option);
            vest.token.koscomDevelop(b64EnvelopedData, tokenNumber, identifier.key, developPassword, String(opFlag), option, callback, function(error){
                certError(error, callback);
            });
        };

        var checkDn = function(certCount, tokenNumber, identifier) {
            if(certCount > 1) {
                config.ablePwd = (typeof password === 'undefined' || password == '');
                kos_var.userID = dn;
                callSign(false, developStart, function(error){
                    certError(error, callback);
                });
            }else if(certCount == 1) {
                developStart(tokenNumber, identifier, password);
            }else {
                certError({code: vest.error.errorCode.ScriptError_DEVELOP_NOT_CERTIFICATE}, callback);
                return;
                // 일치하는 인증서 없음, error
            }
        };

        loadingLibrary(function () {
            vest.token.getTokenList(vest.token.TYPE.ALL, undefined, function(list){
                var certCount = 0;
                var tokenNumber;
                var identifier;

                function getCertificates(tokenList) {
                    var tokenObject = tokenList.shift();
                    var tokenType = "";

                    if(tokenObject == undefined) {
                        checkDn(certCount, tokenNumber, identifier);
                    }else {
                        tokenType = tokenObject.type;
                        // tokenList 요청시 ALL 가져왔기때문에, TYPE.SYSTEM 체크가 소용없음.
                        if(tokenType == vest.token.TYPE.LOCALDISK || tokenType == vest.token.TYPE.TOKEN){
                            vest.token.getCertificates(tokenObject.tokenIdentifier, undefined, undefined, undefined, undefined, option, function(certificates){
                                for(var i = 0; i < certificates.length; i++) {
                                    if(vest.util.matchedDn(certificates[i].getSubject(), dn)){
                                        tokenNumber = tokenObject.tokenIdentifier;
                                        identifier  = certificates[i].getIdentifier();
                                        certCount++;
                                    }
                                }
                                getCertificates(tokenList);
                            }, function(error){
                                certError(error, callback);
                            });
                        }else {
                            getCertificates(tokenList);
                        }
                    }
                }
                getCertificates(list);
            }, function(error){
                certError(error, callback);
            });
        });
    }

    function SecureEncode(plain, callback) {
        if (typeof plain === 'undefined' || plain == '' ||
            typeof callback !== 'function') {
            certError({ code: vest.error.errorCode.ScriptError_KOSCOM_ENCRYPT_INVALID_VALUE }, callback);
            return;
        }

        vest.init(config);
        option.hd = document.domain;
        vest.token.SecureEncode(plain, "", "", option, callback, function (error) {
            certError(error, callback);
        });
    }

    function SecureDecode(encMsg, callback) {
        if (typeof encMsg === 'undefined' || encMsg == '' ||
            typeof callback !== 'function') {
            certError({ code: vest.error.errorCode.ScriptError_KOSCOM_DECRYPT_INVALID_VALUE }, callback);
            return;
        }

        vest.init(config);
        option.hd = document.domain;
        vest.token.SecureDecode(encMsg, "", "", option, callback, function (error) {
            certError(error, callback);
        });
    }

    function encryptdata(plain, sessionkey, opFlag, callback) {

        if(typeof plain === 'undefined' || plain == '' ||
                //typeof sessionkey === 'undefined' || sessionkey == '' ||
            typeof opFlag === 'undefined' || String(opFlag) == '' || opFlag === null ||
            typeof callback !== 'function'){
            certError({code: vest.error.errorCode.ScriptError_ENCRYPTDATA_INVALID_VALUE}, callback);
            return;
        }

        vest.token.koscomEncryptData(plain, sessionkey, String(opFlag), option, callback, function(error){
            certError(error, callback);
        });
    }

    function decrpytData(encData, sessionkey, opFlag, callback) {

        if(typeof encData === 'undefined' || encData == '' ||
                //typeof sessionkey === 'undefined' || sessionkey == '' ||
            typeof opFlag === 'undefined' || String(opFlag) == '' || opFlag === null ||
            typeof callback !== 'function'){
            certError({code: vest.error.errorCode.ScriptError_DECRYPTDATA_INVALID_VALUE}, callback);
            return;
        }

        vest.token.koscomDecryptData(encData, sessionkey, String(opFlag), option, callback, function(error){
            certError(error, callback);
        })
    }

    function base64ToHex(base64) {
        return vest.util.base64ToHex(base64);
    }

    function hexToBase64(hex) {
        return vest.util.hexToBase64(hex);
    }

    function SetConfigMedia(num, enable, callback){
        loadingLibrary(function () {
            var _obj = {}, _configFile = {};
            var _enable = enable == 1 ? 'off' : 'on';

            if((num & 0x0000000F) == 1){
                _obj.Removable = _enable;
            }
            if((num & 0x00000F00) == 256){
                _obj.HSM = _enable;
            }
            if((num & 0x0000F000) == 4096){
                _obj.ICCard = _enable;
            }

            _configFile.MediaConf = _obj;
            vest.token.setConfigFile(_configFile, callback, function(error){
                certError(error, callback);
            });
        });
    }

    function SetMatchedContextExipreCheck (flag) {
        kos_var.matchedExipreCheck = flag;
    }

    function SetKeySaferModeEtc (boo, mode) {
        kos_var.keySaferEtc.flag = boo;
        kos_var.keySaferEtc.mode = keyVendor[mode];
    }

    function SetIframePosition(top, left) {
        config.framePosition.top = top;
        config.framePosition.left = left;
    }

    function SetPFXAndNPKI(type) {
        type = type + "";

        if(type == "0") {
            kos_var.setPFXNPKIFlag.flag = true;
            kos_var.setPFXNPKIFlag.fileType = 0;
        }else if(type == "16" || type == "16" || type.toLowerCase() == "pfx") {
            kos_var.setPFXNPKIFlag.flag = true;
            kos_var.setPFXNPKIFlag.fileType = 17;
        }else if(type == "256" || type.toLowerCase() == "der") {
            kos_var.setPFXNPKIFlag.flag = true;
            kos_var.setPFXNPKIFlag.fileType = 256;
        }else {
            kos_var.setPFXNPKIFlag.flag = false;
        }
    }

    function SignFileB64(pwd, filePath, outToFile, mode, callback) {
        config.title = signTitle.SELECT;
        config.ablePwd = true;
        config.disableToken = false;

        loadingLibrary(function() {
            if(pwd == "") pwd = undefined;
            if(setMatchedOptions.matchedContextFlag) {

                option.customStr = cookie.getCookie(siteCode);
                vest.util.setObject.center(option);

                if(setMatchedOptions.password != '') pwd = setMatchedOptions.password ;

                vest.token.generateFileSignature(kos_var.matchedTokenNumber, pwd, kos_var.matchedIdentifier, filePath, outToFile, mode, option, function(result){
                    setMatchedOptionsInit();
                    callback(result);
                }, function(error){
                    certError(error, callback);
                });
            } else {
                callSign(false, function(tokenNumber, identifier, password, option) {
                    if (tokenNumber instanceof vest.pki.CertificateSet) {
                        // 지원하지 않는 기능. (PFX, P12 서명)
                        // 에러 정의
                        certError();
                    }else {
                        vest.token.generateFileSignature(tokenNumber, password, identifier, filePath, outToFile, mode, option, callback, function(error){
                            certError(error, callback);
                        });
                    }
                })
            }
        });
    }

    function VerifyFile(signFIlePath, originFilePath, callback) {
        loadingLibrary(function(){
            vest.util.setObject.center(option);
            vest.token.verifyFileSignature(1, signFIlePath, undefined, '', callback, function(error){
                certError(error, callback);
            });
        })
    }

    function VerifyFileWithSignature(signFileMsg, originFilePath, callback){
        loadingLibrary(function(){
            vest.util.setObject.center(option);
            vest.token.verifyFileSignature(0, signFileMsg, originFilePath, '', callback, function(error){
                certError(error, callback);
            });
        })
    }

    function EncryptFileByPUKey(filePath, cert, opFlag, callback) {
        var options = {};
        options.opFlag = opFlag * 1;
        loadingLibrary(function(){
            vest.token.KoscomFileEnvelop(filePath, cert, options, callback, function(error){
                certError(error, callback);
            })
        })
    }

    function DecryptFileByPRKey(filePath, dn, pwd, opFlag, callback) {
        var options = {};

        if(!(pwd == "" || typeof pwd === "undefined")) config.ablePwd = false;
        else config.ablePwd = true;

        var developStart = function (tokenNumber, identifier, pwd, options) {
            vest.token.KoscomFileDevelop(filePath, tokenNumber, identifier, pwd, options, callback, function(error){
                certError(error, callback);
            })
        };

        loadingLibrary(function(){
            vest.token.GetCertificateListWithDN(dn, options, function(list){
                kos_var.matchedList = list;

                if(list.length == 0 || list == "") {
                    // 인증서 없음, 에러리턴
                }else if(list.length > 1 || (config.ablePwd == true)){
                    // 2개이상일 경우 인증서 리스트 호출
                    callSign(false, function(tokenNumber, identifier, password){
                        if(!(password == "" || typeof password === "undefined")) pwd = password;
                        developStart(tokenNumber, identifier, pwd, options);
                    });
                }else {
                    // 하나일 경우 바로 진행 & 비밀번호 입력
                    developStart(list[0].tokenIdentifier, {
                        cert: list[0].certIdentifier,
                        key: list[0].keyIdentifier,
                        kmCert: list[0].kmCertIdentifier,
                        kmKey: list[0].kmKeyIdentifier
                    }, pwd, options);
                }
            }, function(error){
                certError(error, callback);
            })
        })
    }

    function setAntiReplayAttack(mode) {
        config.replayAttack = mode;
    }

    function GetPath(callback) {
        loadingLibrary(function () {
            vest.token.getFilePath({}, function (res) {
                callback(res);
            }, function (error) {
                certError(error, callback);
            });
        });
    }

    function GetKeySaferModeObjectForAPI(dataObj) {
        var res = {};
        
        switch (kos_var.keySafer_mode) {
            case 1: 
                res = {
                    type: 1,
                    value: {
                        session: dataObj.session,
                        value: dataObj.value
                    }
                }
                break;
            case 2: 
                res = {
                    type: 2,
                    value: {
                        table: dataObj.table,
                        data: dataObj.data
                    }
                }
                break;
            case 3: 
                res = {
                    type: 3,
                    value: {
                        pageID: dataObj.pageID,
                        inputID: dataObj.inputID
                    }
                }

                break;
            case 7: 
                res = {
                    type: 7,
                    value: {
                        session: dataObj.session,
                        data: dataObj.data.input
                    }
                }
                break;
            case 8: 
            case 9: 
                res = {
                    type: 8,
                    value: {
                        data: dataObj
                    }
                }

                break;
            default:
                res = dataObj;
        }

        return res;
    }

    function GetE2EKey(options, callback) {
        var vender;

        if(_keySafer.getNumber() == 7) {
            vender = {
                type: _keySafer.getNumber()
            };
        }
        loadingLibrary(function(){
            vest.token.getE2EInfo(vender, function(res){
                callback(res.publicKey);
            }, function(error){
                certError(error, callback);
            });
        });
    }

    function SetChangeStorageRemoveCert(flag) {
        config.changeStorageRemoveCert = flag
    }

    function USIMSignDataB64(pPassword, pPlainText, mode, callback) {
        //option.encoding = 'base64';
        //config.title = "인증서 선택";
        config.title = signTitle.SELECT;
        config.ablePwd = true;
        config.disableToken = false;

        kos_var.pPlainText = pPlainText;
        kos_var.useMobileUsim = true;

        switch (mode) {
            case 0:
                option.signtype = 1;
                option.signprotocol = 0;
                break;

            case 1:
                option.signtype = 1;
                option.signprotocol = 1;
                break;

            case 3:
                option.signtype = 2;
                option.signprotocol = 0;
                break;

            case 4:
                option.signtype = 2;
                option.signprotocol = 1;
                break;
        }

        if (pPlainText == "" || typeof(pPlainText) === 'undefined' || pPlainText == null) {
            // 에러코드 설정;
            kos_var.errorCode = 1099;
            kos_var.errorMessage = "입력 매개변수가 null입니다.";

            callback("");
            return;
        }

        if (pPassword == "") pPassword = undefined;
        //if (kos_var.matchedContextFlag && kos_var.matchedList.length == 0) {
        if (setMatchedOptions.matchedContextFlag) {
            loadingLibrary(function () {
                option.customStr = cookie.getCookie(siteCode);
                vest.util.setObject.center(option);
                if(setMatchedOptions.password != '') pPassword = setMatchedOptions.password;
                vest.token.makeSignatureFromKoscom(kos_var.matchedTokenNumber, pPassword, kos_var.matchedIdentifier, pPlainText, option, function (result) {
                    //callback(result.signature)
                    setMatchedOptionsInit();
                    callback(getSignatureType(option, result));
                }, function (error) {
                    certError(error, callback);
                });
            });
        }
        else {
            loadingLibrary(function () {
                callSign(false, function (tokenNumber, identifier, password, option) {
                    if (tokenNumber instanceof vest.pki.CertificateSet) {
                        try{
                            tokenNumber.makeSignature(pPlainText, password, option, function (result) {
                                callback(getSignatureType(option, result));
                            });
                        } catch (e) {
                            var error = {
                                code: vest.error.errorCode.ScriptError_PFX_MAKESIGNATURE_ERORR
                            };
                            certError(error, callback);
                        }
                    }else{
                        vest.util.setObject.center(option);
                        vest.token.makeSignatureFromKoscom(tokenNumber, password, identifier, pPlainText, option, function (result) {
                            kos_var.use = false;
                            callback(getSignatureType(option, result));
                        }, function (error) {
                            certError(error, callback);
                        });
                    }
                }, function (error) {
                    certError(error, callback);
                });
            });
        }
    }

    function getSelectedToken() {
        return selectedToken;
    }

//HI-CUSTOM
	function certXErrorinfo(){
		if((location.href.indexOf('/login/loginMX.jsp')!=-1)||(location.href.indexOf('/banking/cert_center/smart_hi_plus_01.jsp')!=-1)||(location.href.indexOf('/banking/cert_center/smart_hi_plus_02.jsp')!=-1)){
			if(confirm('필수 보안 프로그램이 미실행 중입니다.\n\n[확인] 선택 시 프로그램 재실행을 \n\n[취소] 선택 시 프로그램 설치 페이지로 이동합니다.')) sk_execution();
			else{
//				alert("공동인증서 프로그램 설치화면으로 이동합니다.");
				try{
					top.main.location.href = "/userinfo/popup/install.jsp";
				}
				catch(exception){
					location.href = "/userinfo/popup/install.jsp";
				}
			}
		}
	}
//HI-CUSTOM

    return {
        //signBtnEvent: signBtnEvent,
        // 미구현
        SignDataNextB64: SignDataNextB64,
        SetScanByDialogChoiceMode: SetScanByDialogChoiceMode,
        SetWrongPasswordLimit: SetWrongPasswordLimit,
        SetPasswordEncMode: SetPasswordEncMode,
        SetSessionServicePort: SetSessionServicePort,
        ClearSessionService: ClearSessionService,
        RemoveLF: RemoveLF,

        //
        CertManager_Issue: CertManager_Issue,
        CertManager_Suspend: CertManager_Suspend,
        CertManager_Revoke: CertManager_Revoke,
        CertManager_CertNew: CertManager_CertNew,
        CertManager_Status: CertManager_Status,
        CertManager_ChangePassword: CertManager_ChangePassword,
        ChangeStorageMedia: ChangeStorageMedia,
        RemoveFromMedia: RemoveFromMedia,
        VerifyPassword: VerifyPassword,
        ExportP12: ExportP12,
        ImportP12: ImportP12,

        GetLastErrorCode: GetLastErrorCode,
        GetLastErrorMsg: GetLastErrorMsg,

        SignDataB64: SignDataB64,
        SignData_ne_B64: SignData_ne_B64,
        VerifyDataB64: VerifyDataB64,
        VerifyData_ne_B64: VerifyData_ne_B64,
        VerifyCmsDataB64: VerifyCmsDataB64,
        VerifyPlainCmsDataB64: VerifyPlainCmsDataB64,

        UnSetMatchedContext: UnSetMatchedContext,
        SetMatchedContext: SetMatchedContext,
        SetMatchedContextExt: SetMatchedContextExt,

        SetDeviceOrder: SetDeviceOrder,
        SetExipreCheckSkip: SetExipreCheckSkip,
        SetDeviceViewOrder: SetDeviceViewOrder,
        SetPolicyFilter: SetPolicyFilter,

        GetPCIdentity: GetPCIdentity,
        SetServiceMode: SetServiceMode,

        GetToken: GetToken,
        SetLanguageMode: SetLanguageMode,
        SetKeySaferMode: SetKeySaferMode,
        SetWebAccMode: SetWebAccMode,

        // 추가
        SetCertNewUrlInfo: SetCertNewUrlInfo,
        ShowConfigMenuX: ShowConfigMenuX,
        TrayOn: trayOn,
        TrayOff: trayOff,
        CertServiceSetup: certServiceSetup,
        doubleClickBlock: doubleClickBlock,
        SetInfoPage: SetInfoPage,
        GetMacAddress: GetMacAddress,

        //  relay 관련
        relayExport: relayExport,
        relayImport: relayImport,

        //2015.12
        Identify: Identify,
        CertManager_KeyNew: CertManager_KeyNew,

        //2015.01
        UcpidReqUser: UcpidReqUser,

        //2016.02 일정밀림. 우전 외부오픈 안함 -> v2.3.7 (2017.07쯤) 적용을 목표로 개발
        Envelop: envelope,
        Develop: develope,
        EncryptData: encryptdata,
        DecryptData: decrpytData,

        //2016.03.29 2.1.1 반영예정
        P2X: base64ToHex,
        X2P: hexToBase64,
        SetConfigMedia: SetConfigMedia,

        // 2.1.2 추가
        SetMatchedContextExipreCheck: SetMatchedContextExipreCheck,
        SetKeySaferModeEtc : SetKeySaferModeEtc,

        // 2.1.18 추가
        SetIframePosition: SetIframePosition,

        // 2.4.1 추가
        SetPFXAndNPKI: SetPFXAndNPKI,

        // 2.4.7? 8? 추가
        SignFileB64: SignFileB64,
        VerifyFile: VerifyFile,
        VerifyFileWithSignature: VerifyFileWithSignature,

        // 2.4.9 추가
        EncryptFileByPUKey: EncryptFileByPUKey,
        DecryptFileByPRKey: DecryptFileByPRKey,

        SetAntiReplayAttack: setAntiReplayAttack,

        // 2.5.2 추가
        GetPath: GetPath,

        // 2.5.3 추가
        GetKeySaferModeObjectForAPI: GetKeySaferModeObjectForAPI,
        GetE2EKey: GetE2EKey,

        // 2.5.5 추가
        SetChangeStorageRemoveCert: SetChangeStorageRemoveCert,
        
        // 2.5.11 추가
        SetExceptExpiredCert: SetExceptExpiredCert,

        // 2.5.13 추가
        USIMSignDataB64: USIMSignDataB64,

        getSelectedToken: getSelectedToken,

        SecureEncode: SecureEncode,
        SecureDecode: SecureDecode
    }

})();

typeof(console) === "object" ? console.log('koscom end') : '';
