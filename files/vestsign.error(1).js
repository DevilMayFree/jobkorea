/**
 * Created by nori on 2016. 1. 14..
 */
(function (window, vest, undefined) {
    'use strict';

    var type = {
        'ko': 0,
        'ko-kr': 0,
        'en-us': 1,
        'ja': 2,
        'ja-jp': 2
    };

    var language = [
        {
            ServiceError_UNKNOWN: "아직 등록되지 않은 오류코드",

            /* common */
            ServiceError_INVALID_INPUT: "입력값이 잘못되었습니다.",
            ServiceError_BASE64_ENCODE_FAILED: "Base64 Encode 실패했습니다.",
            ServiceError_BASE64_DECODE_FAILED: "Base64 Decode 실패했습니다.",

            /* token */
            ServiceError_TOKEN_NOT_INITIALIZED: "보안디스크가 초기화 되지 않았습니다.",
            ServiceError_TOKEN_NOT_FOUND: "보안디스크가 존재하지 않습니다.",
            ServiceError_TOKEN_BAD: "보안디스크의 상태가 비정상입니다. 초기화 하세요.",
            ServiceError_TOKEN_UBIKEY_NOT_INSTALLED: "Ubikey가 설치되지 않았습니다. 프로그램을 설치 해주세요.",
            ServiceError_TOKEN_UBIKEY_NOT_LATEST_VERSION: "Ubikey가 최신 버전이 아닙니다. 프로그램을 업데이트 해주세요.",
            ServiceError_TOKEN_UBIKEY_INVALID_OPTIONS: "Ubikey 옵션값이 잘못되었습니다.",
            ServiceError_TOKEN_NOT_RECOGNIZED: "허용된 토큰이 아닙니다.",
            ServiceError_TOKEN_FUNCTION_NOT_SUPPORTED: "토큰에서 해당기능을 지원하지 않습니다.",

            ServiceError_SSLCONFIG_SERVICE_SSL_INIT_FAILED: "SSL 서비스 초기화에 실패했습니다.",

            /* service common */
            ServiceError_SERVICE_REJECTED: "올바른 MangoWire 메시지가 아니므로, 서비스가 거절되었습니다.",
            ServiceError_SESSIONID_NOT_EXIST: "세션이 만료되었거나 잘못되었습니다. 다시 접속하세요.",
            ServiceError_SESSION_IS_USING: "다른 곳에서 세션이 사용중입니다. 다시 접속하세요.",
            ServiceError_OPERATION_NOT_SUPPORTED: "지원되지 않는 기능입니다.",
            ServiceError_OPERATION_NOT_EXPECTED: "현재 이 기능을 수행할 수 없습니다.",
            ServiceError_INVALID_INPUT_TOKENID: "토큰 식별자가 잘못되었습니다.",
            ServiceError_MEMORY_ALLOCATION_FAILED: "메모리 할당에 실패했습니다.",

            ServiceError_NO_SSL_CERTIFICATE: "등록된 SSL 인증서가 존재하지 않습니다.",
            ServiceError_NOT_SUPPORTED_LANGUAGE: "지원하는 언어가 아닙니다.",

            /* services */
            ServiceError_CERTIFICATE_NOT_FOUND: "인증서가 존재하지 않습니다.",

            /* delete service */
            ServiceError_DELETE_CERTIFICATE_FAILED: "인증서 삭제에 실패했습니다.(기타 에러)",
            ServiceError_DELETE_CERTIFICATE_INVALID_CERTINDENTIFIER: "입력값이 잘못 되었습니다.",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PROGRAM_FILES_PATH_DELETE_WARNING: "Program files에 저장된 인증서는 삭제할 수 없습니다.",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PASSWORD_INCORRECT: "인증서 삭제에 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_DELETE_PIN_INCORRECT: "인증서 삭제에 실패했습니다(PIN 번호를 확인하세요).",
            ServiceError_DELETE_PIN_FAILED_INPUT_CANCELED: "인증서 삭제에 실패했습니다(PIN 번호 입력을 취소했습니다).",
            ServiceError_DELETE_PWD_FAILED_INPUT_CANCELED: "인증서 삭제에 실패했습니다(비밀번호 입력을 취소했습니다).",

            /* encrypt vid random */
            ServiceError_ENCRYPT_VIDRANDOM_INVALID_CERTINDENTIFIER: "입력값이 잘못 되었습니다.",//"Invalid arugment(keyIdentifier or recipientCertificate)");
            ServiceError_ENCRYPT_VIDRANDOM_FAILED: "EncryptVIDRandom failed.",
            ServiceError_ENCRYPT_VIDRANDOM_TOKEN_NOT_INITIALIZE: "보안디스크가 초기화 되지 않았습니다.",

            /* generate key pair */
            ServiceError_GENERATE_KEYPAIR_INVALID_ARGUMENT: "입력값이 잘못 되었습니다.",//"Invalid arugment(algorithm or modularLength)");
            ServiceError_GENERATE_KEYPAIR_FAILED: "Gen key fail",
            ServiceError_GENERATE_KEYPAIR_TOKEN_NOT_INITIALIZE: "보안디스크가 초기화 되지 않았습니다.",

            ServiceError_REPLAY_NOT_MATCHED_MESSAGE_NUMBER: "현재 페이지를 새로고침 해주세요.(M)",
            ServiceError_REPLAY_CANNOT_REQUEST_WITHOUT_TIC_MESSAGE: "현재 페이지를 새로고침 해주세요.(S)",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_NOT_MATCHED_KEY_PAIR: "저장된 인증서의 키쌍이 다릅니다.",
            ServiceError_GENERATE_SIGNATURE_NOT_EXPECTED_KEYIDENTIFIER: "not expected keyIdentifier",
            ServiceError_GENERATE_SIGNATURE_FAILED: "전자서명에 실패하였습니다.",
            ServiceError_GENERATE_SIGNATURE_TOKEN_NOT_INITAILIZE: "보안디스크가 초기화 되지 않았습니다.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PWD_INCORRECT: "인증서 비밀번호 입력이 잘못 되었습니다.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_LOCKED: "전자서명에 실패하였습니다(장치가 잠겼습니다).",
            ServiceError_GENERATE_SIGNATURE_FAILED_SGPKCS8_PRIVATEKEYINFO_DECODE_FAILED: "전자서명에 실패하였습니다(비밀번호를 확인하세요).",
            ServiceError_GENERATE_SIGNATURE_ENCRYPT_VIDRANDOM_FAILED: "전자서명에 실패하였습니다(식별번호 생성에 실패).", //"encrypt VID Random failed(0x%x, false)"
            ServiceError_GENERATE_SIGNATURE_INVALID_ARGUMENT: "입력값이 잘못 되었습니다.",//"Invalid input (plain, keyIdentifier, false)",
            ServiceError_GENERATE_SIGNATURE_CANCELED: "요청된 작업이 사용자에 의해 취소되었습니다.",
            ServiceError_GENERATE_SIGNATURE_KSTOKEN_PIN_INCORRECT: "PIN 번호 입력이 잘못되었습니다.",
            ServiceError_GENERATE_SIGNATURE_KOSCOM_SIGN_MUST_HAVE_CERTIFICATE: "Koscom 전자서명에 인증서가 필요합니다.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_INCORRECT: "전자서명에 실패하였습니다(비밀번호를 확인하세요).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ERROR: "파일 읽기에 실패했습니다(경로를 확인하세요).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ERROR: "파일 쓰기에 실패했습니다(경로를 확인하세요).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ACCESS_DENIED: "권한 문제로 인해 파일 읽기에 실패했습니다.",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ACCESS_DENIED: "권한 문제로 인해 파일 쓰기에 실패했습니다.",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_MEMORY_ALLOCATION: "메모리가 부족하여 전자 서명에 실패했습니다.",

            /* get certificate list */
            ServiceError_GET_CERTIFICATE_LIST_FAILED: "Function Failed",
            ServiceError_GET_CERTIFICATE_LIST_TOKEN_NOT_INITIALIZE: "보안디스크가 초기화 되지 않았습니다.",
            ServiceError_GET_CERTIFICATE_LIST_UBIKEY_NOT_INITIALIZE: "UBIKey 서비스가 초기화 되지 않았습니다.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PIN_INCORRECT: "PIN 번호를 확인하세요.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPIN_CANCELED: "PIN 입력을 취소했습니다.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPWD_CANCELED: "비밀번호 입력을 취소했습니다.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PWD_INCORRECT: "비밀번호를 확인하세요.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_UBIKEY_INPUT_CANCELED: "Ubikey 서비스를 취소했습니다.",

            /* get certificate */
            ServiceError_GET_CERTIFICATE_INVALID_ARGUMENT: "입력값이 잘못되었습니다.",//"certIdentifier"
            ServiceError_GET_CERTIFICATE_FAILED: "인증서 가져오기를 실패하였습니다.",
            ServiceError_GET_CERTIFICATE_NOT_FOUND: "인증서를 찾을 수 없습니다.",
            ServiceError_GET_CERTIFICATE_TOKEN_NOT_INITIALIZE: "보안디스크가 초기화 되지 않았습니다.",

            /* setMatchedContext */
            ServiceError_SETMATCHED_CONTEXT_INPUT_CANCELED: "비밀번호 입력을 취소했습니다.",
            ServiceError_SETMATCHED_CONTEXT_INVALID_CUSTOM_SID: "잘못된 session ID가 입력되었습니다.",
            ServiceError_SETMATCHED_CONTEXT_CUSTOM_SID_IS_NULL: "session ID가 NULL로 입력되었습니다.",
            ServiceError_SETMATCHED_CONTEXT_CREATE_SESSION_UNIT_FAILED: "session 생성에 실패했습니다.",

            /* get ca certificate */
            ServiceError_GET_CA_CERTIFICATE_INVALID_ARGUMENT: "입력값이 잘못되었습니다.",

            /* push certificate */
            ServiceError_PUSH_CERTIFICATE_INVALID_ARGUMENT: "입력값이 잘못 되었습니다.",//"Invalid arugment(keyIdentifier or certificate, false)",
            ServiceError_PUSH_CERTIFICATE_NOT_EXPECTED_KEYIDENTIFIER: "not expected keyIdentifier",
            ServiceError_PUSH_CERTIFICATE_FAILED: "PushCertificate failed.",
            ServiceError_PUSH_CERTIFICATE_TOKEN_NOT_INITIALIZE: "보안디스크가 초기화 되지 않았습니다.",

            /* verify service */
            ServiceError_VERIFY_CERTIFICATE_FAILED: "인증서 비밀번호 확인에 실패했습니다.(기타 에러)",
            ServiceError_VERIFY_CERTIFICATE_INVALID_CERTINDENTIFIER: "입력값이 잘못 되었습니다.",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_INCORRECT: "전자서명에 실패하였습니다(비밀번호를 확인하세요).",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_INCORRECT: "전자서명에 실패하였습니다(비밀번호를 확인하세요).",
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_LOCKED: "전자서명에 실패하였습니다(장치가 잠겼습니다).",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_LOCKED: "전자서명에 실패하였습니다(장치가 잠겼습니다).",

            /* generate keypair */
            ServiceError_GENERATE_KEYPAIR_CANCELLED: "키쌍 생성이 사용자에 의해 취소되었습니다.",
            ServiceError_GENERATE_KEYPAIR_PIN_INCORRECT: "PIN 번호가 잘못되어 키쌍 생성에 실패하였습니다.",
            ServiceError_GENERATE_KEYPAIR_PIN_LOCKED: "PIN 번호 오류로 장치가 잠겼습니다. 키쌍 생성에 실패하였습니다.",
            ServiceError_GENERATE_KEYPAIR_PWD_INCORRECT: "비밀번호가 잘못되어 키쌍 생성에 실패하였습니다.",

            /* cmp common*/
            ServiceError_CMP_MEMORY_ALLOCATION_FAILED: "메모리 할당에 실패했습니다.",
            ServiceError_CMP_SERVER_CONNECT_FAILED: "CA 서버와의 통신에 실패했습니다.",

            /* issue / recover */
            ServiceError_CMP_ISSUE_INVALID_ARGUMENT: "인증서 발급에 대한 입력값이 잘못 되었습니다.",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_CA: "지원되지 않는 인증 기관 코드가 입력되었습니다.",
            ServiceError_CMP_ISSUE_INPUTPIN_CANCELED: "비밀번호 입력을 취소했습니다.",
            ServiceError_CMP_ISSUE_PKCS5_ENCRYPT_FAILED: "PKCS#5 암호화에 실패했습니다.",
            ServiceError_CMP_ISSUE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "PKCS#8 메시지 구성에 실패했습니다.",
            ServiceError_CMP_ISSUE_SAVE_CERTIFICATE_FAILED: "인증서 저장에 실패했습니다.",
            ServiceError_CMP_ISSUE_IMPORT_INIT_FAILED: "발급된 인증서 저장에 실패했습니다.(initialize 실패)",
            ServiceError_CMP_ISSUE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "발급된 전자서명용 인증서 저장에 실패했습니다.",
            ServiceError_CMP_ISSUE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "발급된 키분배용 인증서 저장에 실패했습니다.",
            ServiceError_CMP_ISSUE_IMPORT_CA_PUB_IMPORT_FAILED: "CA 공개키 저장에 실패했습니다.",
            ServiceError_CMP_ISSUE_IMPORT_FINAL_FAILED: "발급된 인증서 저장에 실패했습니다.(finalize 실패)",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_BILL: "과금 발급은 현재 지원되지 않습니다.",
            ServiceError_CMP_ISSUE_LOW_SPEC_ICCARD: "ICCard가 지원하지 않는 인증서입니다.",
            ServiceError_CMP_ISSUE_NOT_USABLE_TOKNE_FAILED: "선택하신 디스크에 인증서를 발급할 수 없습니다.",

            ServiceError_CMP_UPDATE_INVALID_ARGUMENT: "인증서 갱신에 대한 입력값이 잘못 되었습니다.",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_CA: "지원되지 않는 인증 기관 코드가 입력되었습니다.",
            ServiceError_CMP_UPDATE_INPUTPIN_CANCELED: "비밀번호 입력을 취소했습니다.",
            ServiceError_CMP_UPDATE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "갱신할 인증서를 가져오는데 실패했습니다.",
            ServiceError_CMP_UPDATE_ADD_OLD_CERTIFICATE_FAILED: "갱신할 인증서를 추가하는데 실패했습니다.",
            ServiceError_CMP_UPDATE_ADD_OLD_KEY_FAILED: "갱신할 키파일을 추가하는데 실패했습니다.",
            ServiceError_CMP_UPDATE_PKCS5_ENCRYPT_FAILED: "PKCS#5 암호화에 실패했습니다.",
            ServiceError_CMP_UPDATE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "PKCS#8 메시지 구성에 실패했습니다.",
            ServiceError_CMP_UPDATE_SAVE_CERTIFICATE_FAILED: "인증서 저장에 실패했습니다.",
            ServiceError_CMP_UPDATE_INVALID_PASSWORD: "이전 인증서 비밀번호를 확인하세요.",
            ServiceError_CMP_UPDATE_IMPORT_INIT_FAILED: "발급된 인증서 저장에 실패했습니다.(initialize 실패)",
            ServiceError_CMP_UPDATE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "발급된 전자서명용 인증서 저장에 실패했습니다.",
            ServiceError_CMP_UPDATE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "발급된 키분배용 인증서 저장에 실패했습니다.",
            ServiceError_CMP_UPDATE_IMPORT_CA_PUB_IMPORT_FAILED: "CA 공개키 저장에 실패했습니다.",
            ServiceError_CMP_UPDATE_IMPORT_FINAL_FAILED: "발급된 인증서 저장에 실패했습니다.(finalize 실패)",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_BILL: "과금 갱신은 현재 지원되지 않습니다.",
            ServiceError_CMP_UPDATE_NOT_UPDATE_TIME: "인증서를 갱신할 수 있는 기간이 아닙니다. 인증서 갱신은 만료 1개월 전 부터 가능합니다.",
            ServiceError_CMP_UPDATE_INVALID_PIN: "PIN 번호를 확인하세요",
            ServiceError_CMP_UPDATE_NOT_USABLE_TOKNE_FAILED: "선택하신 디스크에 인증서를 발급할 수 없습니다.",

            ServiceError_CMP_REVOKE_INVALID_ARGUMENT: "인증서 폐기에 대한 입력값이 잘못 되었습니다.",
            ServiceError_CMP_REVOKE_NOT_SUPPORTED_CA: "지원되지 않는 인증 기관 코드가 입력되었습니다.",
            ServiceError_CMP_REVOKE_INPUTPIN_CANCELED: "비밀번호 입력을 취소했습니다.",
            ServiceError_CMP_REVOKE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "폐기할 인증서를 가져오는데 실패했습니다.",
            ServiceError_CMP_REVOKE_ADD_OLD_CERTIFICATE_FAILED: "폐기할 인증서를 추가하는데 실패했습니다.",
            ServiceError_CMP_REVOKE_ADD_OLD_KEY_FAILED: "폐기할 키파일을 추가하는데 실패했습니다.",
            ServiceError_CMP_REVOKE_INVALID_PASSWORD: "비밀번호를 확인하세요.",
            ServiceError_CMP_REVOKE_INVALID_PIN: "PIN 번호를 확인하세요.",
            ServiceError_CMP_REVOKE_PIN_LOCKED: "PIN이 잠겼습니다.",

            /* get PCIdentity */
            ServiceError_GET_PCIDENTITY_FAILED_MEMORY_ALLOCATION_FAILED: "메모리 할당에 실패했습니다.",
            ServiceError_GET_PCIDENTITY_FAILED_INVALID_WINDOWS: "단말 식별 값을 가져오지 못했습니다(Windows 외 타 OS는 추후 지원합니다).",
            ServiceError_GET_PCIDENTITY_FAILED: "단말 식별 값을 가져오지 못했습니다(기타 에러).",

            /* certificate manager, changePin */
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERTINDENTIFIER: "입력값이 잘못 되었습니다.",
            ServiceError_CHANGE_PIN_FAILED_INPUT_CANCELED: "비밀번호 입력을 취소했습니다.",
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERT_TYPE: "비밀번호 변경에 실패했습니다(인증서 형식에 문제가 발생했습니다).",
            ServiceError_CHANGE_PIN_FAILED_PIN_INCORRECT: "비밀번호 변경에 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_CHANGE_PIN_FAILED_FILE_WRITE_ERROR: "비밀번호 변경에 실패했습니다(인증서를 저장할 때 문제가 발생했습니다).",
            ServiceError_CHANGE_PIN_FAILED: "비밀번호 변경에 실패하였습니다(기타 에러).",
            ServiceError_CHANGE_PIN_FAILED_PROGRAM_FILES_PATH_WARNING: "Program files에 저장된 인증서 비밀번호는 변경할 수 없습니다.",
            ServiceError_CHANGE_PIN_FAILED_NOT_MATCHED_PWD: "서명용 인증서 비밀번호와 키분배용 인증서 비밀번호가 일치하지 않습니다.",

            /* certificate manager, export certificate */
            ServiceError_EXPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "비밀번호 입력을 취소했습니다.",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "인증서 내보내기를 취소했습니다.",
            ServiceError_EXPORT_CERTIFICATE_FAILED_INVALID_CERT_TYPE: "인증서 내보내기에 실패했습니다(인증서 형식에 문제가 발생했습니다).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SEARCH_CERTIFICATE_FAILED: "인증서 내보내기에 실패했습니다(인증서를 찾지 못했습니다).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PIN_INCORRECT: "인증서 내보내기에 실패했습니다(PIN 번호를 확인하세요).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PWD_INCORRECT: "인증서 내보내기에 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ADD_CERTIFICATELIST_FAILED: "인증서 내보내기에 실패했습니다(add certificate fail).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ENCODE_PFX_FAILED: "인증서 내보내기에 실패했습니다(encode pfx fail).",
            ServiceError_EXPORT_CERTIFICATE_FAILED: "인증서 내보내기에 실패했습니다(기타 에러).",

            /* certificate manager, import certificate */
            ServiceError_IMPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "인증서 가져오기에 실패했습니다(인증서 선택을 취소했습니다).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "인증서 가져오기에 실패했습니다(비밀번호 입력을 취소했습니다).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX: "인증서 가져오기에 실패했습니다(PFX 형식의 인증서가 아닙니다).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX_PASSWORD: "인증서 가져오기에 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_IMPORT_CERTIFICATE_FAILED: "인증서 가져오기에 실패했습니다(기타 에러).",
            ServiceError_IMPORT_CERTIFICATE_NOT_AFTER_CERTIFICATE_FAILED: "최신 인증서가 이미 저장되어 있습니다.",

            /* certificate manager, verify pin */
            ServiceError_VERIFY_PIN_FAILED_INVALID_CERTINDENTIFIER: "비밀번호 확인에 실패했습니다(입력값이 잘못되었습니다).",
            ServiceError_VERIFY_PIN_FAILED_INPUT_CANCELED: "비밀번호 확인에 실패했습니다(입력을 취소했습니다).",
            ServiceError_VERIFY_PIN_FAILED: "비밀번호 확인에 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "비밀번호 확인에 실패했습니다(서명용 인증서와 암호화용 인증서의 비밀번호가 일치하지 않습니다).",

            /* certificate manager, verify pin */
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_CERTINDENTIFIER: "입력값이 잘못 되었습니다.",
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_TOKENINDENTIFIER: "입력된 매체는 사용할 수 없는 매체입니다.",
            ServiceError_CHANGE_STORAGE_FAILED_INPUT_CANCELED: "인증서 저장매체 변경에 실패했습니다(비밀번호 입력을 취소했습니다).",
            ServiceError_CHANGE_STORAGE_FAILED_CERTIFICATE_AND_KEY_FAILED: "인증서 저장매체 변경에 실패했습니다.",
            ServiceError_CHANGE_STORAGE_FAILED_PIN_INCORRECT: "인증서 저장매체 변경에 실패했습니다(PIN 번호를 확인하세요).",
            ServiceError_CHANGE_STORAGE_FAILED_PWD_INCORRECT: "인증서 저장매체 변경에 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_CHANGE_STORAGE_SAME_TOKEN: "변경할 인증서 저장매체가 같습니다.",
            ServiceError_CHANGE_STORAGE_FAILED: "인증서 저장매체 변경에 실패했습니다(기타 에러).",
            ServiceError_CHANGE_STORAGE_OVERWRITE_CANCELED: "인증서 저장매체 변경을 취소하였습니다.",
            ServiceError_CHANGE_STORAGE_FAILED_AFTER_CERTIFICATE: "최신 인증서가 이미 저장되어 있습니다.",

            /* validateCertificate */
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTINDENTIFIER: "입력값이 잘못 되었습니다.",
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTIFICATE: "인증서 형식이 잘못되었습니다.",
            ServiceError_VALIDATE_CERTIFICATE_CRL_FAILED: "인증서 검증에 실패했습니다.",
            ServiceError_VALIDATE_CERTIFICATE_FAILED: "인증서 유효성 검증에 실패했습니다(기타 에러).",

            /* session manager */
            ServiceError_SESSION_MANAGER_SESSION_ID_IS_NULL: "session id가 없어 session 저장에 실패했습니다.",

            /* validate certificate*/

            /* tray */
            ServiceError_OPERATE_TRAY_INVALID_TRAY_VENDOR: "잘못된 tray 목록입니다.",
            ServiceError_OPERATE_TRAY_INVALID_TRAY_OPERATE: "잘못된 tray operate 동작입니다.",

            /* SignVerify */
            ServiceError_VERIFY_SIGNATURE_INVALID_ARGUMENT: "입력값이 잘못되었습니다.",
            ServiceError_VERIFY_SIGNATURE_PLAIN_IS_NULL: "원문이 필요한 전자서명입니다.",
            ServiceError_VERIFY_SIGNATURE_UNSUPPORT_SIGNTYPE: "아직 지원되지 않는 전자서명입니다.",
            ServiceError_VERIFY_SIGNATURE_INVALID_X509_TYPE: "X509 인증서형태가 아닙니다.",
            ServiceError_VERIFY_SIGNATURE_INVALID_PUBLIC_KEY_TYPE: "public key 형태가 아닙니다.",
            ServiceError_VERIFY_SIGNATURE_VERIFY_FAILED: "서명검증에 실패했습니다.",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_FAILED: "파일 읽기에 실패했습니다.",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_FAILED: "파일 쓰기에 실패했습니다.",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_ACCESS_DENIED: "권한 문제로 인해 파일 읽기에 실패했습니다.",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_ACCESS_DENIED: "권한 문제로 인해 파일 쓰기에 실패했습니다.",
            ServiceError_VERIFY_SIGNATURE_FILE_MEMORY_ALLOCATE_FAILED: "메모리 부족으로 서명에 실패했습니다.",

            /* VIDVerify */
            ServiceError_VERIFY_VID_INVALID_CERTID: "입력값이 잘못되었습니다.",
            ServiceError_VERIFY_VID_INVALID_KEYID: "입력값이 잘못되었습니다.",
            ServiceError_VERIFY_VID_INVALID_IDN: "입력값이 잘못되었습니다.",
            ServiceError_VERIFY_VID_TOKEN_NOT_INITIALIZE: "보안디스크가 초기화 되지 않았습니다.",
            ServiceError_VERIFY_VID_NOT_FOUND: "입력값이 잘못되었습니다.",
            ServiceError_VERIFY_VID_NOT_INVALID_X509_TYPE: "X509 인증서형태가 아닙니다.",
            ServiceError_VERIFY_VID_GET_RANDOM_FAILED: "random을 가져오는데 실패했습니다.",
            ServiceError_VERIFY_VID_INVALID_PWD: "random을 가져오는데 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_VERIFY_VID_VERIFY_FAILED: "VID 검증에 실패했습니다.",

            /* cipher, hash */
            ServiceError_GET_HASH_FAILED_INVALID_INPUT: "message digest를 실패했습니다(입력값이 잘못되었습니다).",
            ServiceError_GET_HASH_FAILED_INVALID_ALGORITHM: "message digest를 실패했습니다(지원하지 않는 알고리즘입니다).",
            ServiceError_GET_HASH_FAILED_UNSUPPORTED_DIGEST_ALGORITHM: "message digest를 실패했습니다(지원하지 않는 알고리즘입니다).",
            ServiceError_GET_HASH_FAILED_FILE_NOT_FOUND: "message digest를 실패했습니다(파일을 찾을 수 없습니다).",
            ServiceError_GET_HASH_FAILED_FILE_READ_FAILED: "message digest를 실패했습니다(파일을 읽는데 오류가 발생했습니다).",
            ServiceError_GET_HASH_FAILED: "message digest를 실패했습니다(기타 에러).",

            /* cipher, encrypt */
            ServiceError_ENCRYPT_FAILED_INVALID_INPUT: "message 암호화를 실패했습니다(입력값이 잘못되었습니다).",
            ServiceError_ENCRYPT_FAILED_KEY_IS_NULL: "message 암호화를 실패했습니다(key 값이 없습니다).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_KEY_LEN: "message 암호화를 실패했습니다(key 길이가 잘못되었습니다).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_ALGORITHM: "message 암호화를 실패했습니다(지원하지 않는 암호화 알고리즘입니다).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_MODE: "message 암호화를 실패했습니다(지원하지 않는 운영모드입니다).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_PADDING: "message 암호화를 실패했습니다(지원하지 않는 패딩입니다).",
            ServiceError_ENCRYPT_FAILED_HD_IS_NULL: "message 암호화를 실패했습니다(14406).",
            ServiceError_ENCRYPT_FAILED_INIT_KEY: "message 암호화를 실패했습니다(14407).",
            ServiceError_ENCRYPT_FAILED_MAKE_KEY: "message 암호화를 실패했습니다(14408).",
            ServiceError_ENCRYPT_FAILED: "message 암호화를 실패했습니다(14409).",

            /* cipher, decrypt */
            ServiceError_DECRYPT_FAILED_INVALID_INPUT: "message 복호화를 실패했습니다(입력값이 잘못되었습니다).",
            ServiceError_DECRYPT_FAILED_KEY_IS_NULL: "message 복호화를 실패했습니다(key 값이 없습니다).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_KEY_LEN: "message 복호화를 실패했습니다(key 길이가 잘못되었습니다).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_ALGORITHM: "message 복호화를 실패했습니다(지원하지 않는 복호화 알고리즘입니다).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_MODE: "message 복호화를 실패했습니다(지원하지 않는 운영모드입니다).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_PADDING: "message 복호화를 실패했습니다(지원하지 않는 패딩입니다).",
            ServiceError_DECRYPT_FAILED_HD_IS_NULL: "message 복호화를 실패했습니다(14506).",
            ServiceError_DECRYPT_FAILED_MAKE_KEY: "message 복호화를 실패했습니다(14507).",
            ServiceError_DECRYPT_FAILED_NOT_MATCHED_DOMAIN: "message 복호화를 실패했습니다(14508).",
            ServiceError_DECRYPT_FAILED: "message 복호화를 실패했습니다(14509).",

            /* envelope */
            ServiceError_ENVELOPE_FAILED_INVALID_INPUT: "전자봉투를 실패했습니다(입력값이 잘못되었습니다).",
            ServiceError_ENVELOPE_FAILED_INVALID_X509_CERT: "전자봉투를 실패했습니다(입력한 인증서가 x509가 아닙니다).",
            ServiceError_ENVELOPE_FAILED: "전자봉투를 실패했습니다(기타 에러).",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ERROR: "파일 읽기에 실패했습니다(경로를 확인하세요).",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ERROR: "파일 쓰기에 실패했습니다(경로를 확인하세요).",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "권한 문제로 인해 파일 읽기에 실패했습니다.",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "권한 문제로 인해 파일 쓰기에 실패했습니다.",

            /* deenvelope */
            ServiceError_DEENVELOPE_FAILED_INVALID_INPUT: "전자봉투 복호화에 실패했습니다(입력값이 잘못되었습니다).",
            ServiceError_DEENVELOPE_FAILED_INPUT_CANCELED: "전자봉투 복호화에 실패했습니다(입력을 취소했습니다).",
            ServiceError_DEENVELOPE_FAILED_PIN_INCORRECT: "전자봉투 복호화에 실패했습니다(PIN 번호를 확인하세요).",
            ServiceError_DEENVELOPE_FAILED_PWD_INCORRECT: "전자봉투 복호화에 실패했습니다(비밀번호를 취소했습니다).",
            ServiceError_DEENVELOPE_FAILED_FILE_READ: "파일 읽기에 실패했습니다(경로를 확인하세요).",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE: "파일 쓰기에 실패했습니다(경로를 확인하세요).",
            ServiceError_DEENVELOPE_FAILED: "전자봉투 복호화에 실패했습니다.",
            ServiceError_DEENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "권한 문제로 인해 파일 읽기에 실패했습니다.",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "권한 문제로 인해 파일 쓰기에 실패했습니다.",
            ServiceError_DEENVELOPE_FAILED_INVALID_TEXT: "전자봉투 복호화에 실패했습니다(암호문이 손상되거나 파일의 위치가 잘못되었습니다).",

            /* p12 */
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED: "PFX 전자서명에 실패했습니다(기타 에러).",
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED_SELECT_CANCELED: "PFX 전자서명에 실패했습니다(선택을 취소했습니다).",

            /* certificate manager, export certificate and key */
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: '인증서 내보내기에 실패했습니다.(입력값이 잘못되었습니다) ',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: '인증서 내보내기에 실패했습니다.(비밀번호 입력을 취소했습니다)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_PRIVATEKEY_FAILED: '인증서 내보내기에 실패했습니다.(개인키를 찾지 못했습니다)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_CERTIFICATE_FAILED: '인증서 내보내기에 실패했습니다.(인증서를 찾지 못했습니다)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: '인증서 내보내기에 실패했습니다.(PIN 번호를 확인하세요)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_LOCKED: '인증서 내보내기에 실패했습니다.(장치가 잠겼습니다)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: '인증서 내보내기에 실패했습니다.(비밀번호를 확인하세요)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED: '인증서 내보내기에 실패했습니다.',

            /* certificate manager, import certificate and key */
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: "인증서 가져오기에 실패했습니다.(입력값이 잘못되었습니다)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: "인증서 가져오기에 실패했습니다.(비밀번호 입력을 취소했습니다)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: "인증서 가져오기에 실패했습니다.(PIN 번호를 확인하세요)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: "인증서 가져오기에 실패했습니다.(비밀번호를 확인하세요)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED: "인증서 가져오기에 실패했습니다.",

            /* mac address error message */
            ServiceError_MAC_ADDRESS_ERROR: 'MAC주소 가져오기에 실패했습니다.',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_HANDLE: 'DLL 핸들 가져오기에 실패했습니다.',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_FUNC: 'DLL 함수 가져오기에 실패했습니다.',
            ServiceError_MAC_ADDRESS_NONVALIDATED_RETURN_FUNC: '함수 반환값이 유효하지 않습니다.',
            ServiceError_MAC_ADDRESS_FAILED_MEMORY: '메모리를 할당하는데 실패했습니다.',
            ServiceError_MAC_ADDRESS_FAILED_REG_OPEN: '레지스트리를 여는데 실패했습니다.',
            ServiceError_MAC_ADDRESS_FAILED_GET_REG_VALUE: '레지스트리 값을 얻는데 실패했습니다.',
            ServiceError_MAC_ADDRESS_FAILED_REG_CLOSE: '레지스트리를 닫는데 실패했습니다.',
            ServiceError_MAC_ADDRESS_FAILED_GET_LAST_NETID: 'NetId를 가져오는데 실패했습니다.',
            ServiceError_MAC_ADDRESS_FAILED_GET_SYSTEM_FOLDER_NAME: "system 경로를 가져오는데 실패했습니다.",

            /* p11 error message */
            ServiceError_P11_CLOSE_SESSION_ERROR: "P11 Close session error",
            ServiceError_P11_CLOSE_SESSION_HANDLE_INVALID: "핸들이 유효하지 않습니다.",
            ServiceError_P11_CLOSE_SESSION_TOKENMASTER_INVALID: "토큰 마스터가 유효하지 않습니다.",
            ServiceError_P11_CLOSE_SESSION_FAILED_GET_TOKENLIST: "토큰 리스트를 가져오지 못했습니다.",
            ServiceError_P11_CLOSE_SESSION_IS_NOT_P11: "P11 토큰이 아닙니다.",
            ServiceError_P11_CLOSE_SESSION_FAILED_CLOSE_SESSION: "Close Session에 실패하였습니다.",

            /* p11 HSM */
            ServiceError_P11_HSM_ERROR: "P11 HSM error",
            ServiceError_P11_HSM_NOT_EXIST_HANDLE: "핸들이 존재하지 않습니다.",
            ServiceError_P11_HSM_FAILED_GET_TOKENINDENTIFIER: "토큰 id를 가져오는데 실패하였습니다.",
            ServiceError_P11_HSM_FAILED_GET_TOKENMASTER: "토큰 마스터를 가져오지 못했습니다.",

            /* ConvertStringFormat */
            ServiceError_CONVERT_STRING_FORMAT_ERROR: "Convert String Format error",
            ServiceError_CONVERT_STRING_FORMAT_INVALID_INPUT: "입력값이 잘못되었습니다.",
            ServiceError_CONVERT_STRING_FORMAT_FAILED_CHANGE_STRING_FORMAT: "문자열을 변환하는데 실패하였습니다.",

            /* CheckExistenceCertByPath */
            ServiceError_CHECK_EXISTENCE_CERT_ERROR: "Check Existence cert error",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_CERTINDENTIFIER: "인증서 id가 유효하지 않습니다.",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_ARGUMENT: "유효값이 입력되지 않았습니다.",
            ServiceError_CHECK_EXISTENCE_CERT_SAME_TOKEN: "같은 토큰을 입력하였습니다.",
            ServiceError_CHECK_EXISTENCE_CERT_NOT_EXIST_HANDLE: "핸들이 존재하지 않습니다.",

            /* getFilePath */
            ServiceError_GET_FILE_PATH_CANCELED: "파일 선택을 취소했습니다.",

            /* securedisk */
            ServiceError_SECUREDISK_BACKUP_ERROR: "안전디스크 백업 및 복구에 실패하였습니다.",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_CERTINDENTIFIER: "입력 값이 잘못되었습니다.(인증서)",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_KEYINDENTIFIER: "키 값이 잘못되었습니다.",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_TOKENINDENTIFIER: "토큰 값이 잘못되었습니다.",
            ServiceError_SECUREDISK_BACKUP_INVALID_VALUE: "값이 유효하지 않습니다.",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_BACKUPCERTLIST: "백업 인증서 리스트를 만드는데 실패했습니다.",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_SECURETOKEN: "안전디스크를 찾는데 실패하였습니다.",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_HANDLE: "입력 핸들이 존재하지 않습니다.",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_DATA: "데이터가 잘못되었거나 존재하지 않습니다.",
            ServiceError_SECUREDISK_BACKUP_INVALID_RANGE: "데이터의 범위가 잘못되었습니다.",
            ServiceError_SECUREDISK_BACKUP_INVALID_PIN: "비밀번호가 유효하지 않습니다.",
            ServiceError_SECUREDISK_BACKUP_FAILED_CASTING: "변환에 실패하였습니다.",

            /* pin complex check */
            ServiceError_CHECK_COMPLEX_PIN_ERROR: '비밀번호 무결성 검사 에러',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PINS: '값이 입력되지 않았습니다',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SAME_PWD: '입력한 두개의 비밀번호가 일치하지 않습니다.',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_LENGTH: '신규 비밀번호는 10자 이상 30자 이하로 입력하세요.',
            ServiceError_CHECK_COMPLEX_PIN_SAME_PWD: '신규 인증서 비밀번호와 이전 인증서 비밀번호가 동일합니다.',
            ServiceError_CHECK_COMPLEX_PIN_GETPIN_FAILED: '입력값 획득에 실패 했습니다(키보드 보안 연동 오류)',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PIN: '입력한 비밀번호가 생성규칙에 위배됩니다.',
            ServiceError_CHECK_COMPLEX_PIN_UPDATE_ERROR: '안전성강화를 위해 갱신 인증서 비밀번호를 10자 이상 30자 이하로 변경해 주십시오.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_CHAR: '숫자와 특수문자를 하나 이상 포함하십시오.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_NUMBER: '영문자와 특수문자를 하나 이상 포함하십시오.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_SPECIAL: '숫자와 영문자를 하나 이상 포함하십시오.',
            ServiceError_CHECK_COMPLEX_PIN_NO_CHAR: '영문자를 하나 이상 포함하십시오.',
            ServiceError_CHECK_COMPLEX_PIN_NO_NUMBER: '숫자를 하나 이상 포함하십시오.',
            ServiceError_CHECK_COMPLEX_PIN_NO_SPECIAL: '특수문자를 하나 이상 포함하십시오(\", \', \\, \| 제외)',
            ServiceError_CHECK_COMPLEX_PIN_PATTERN: "신규 비밀번호 생성 규칙:\n1. 1111 또는 aaaa와 같이 4번 이상 같은 문자 연속으로 사용 불가\n2. 1234 또는 abcd 같이 4번 연속된 문자 사용 불가\n3. ababab와 같이 3번 이상 두글자 연속으로 사용 금지\n4. abcabc와 같이 2번 이상 세글자 연속으로 사용 금지\n",
            //ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_SET_LENGTH: 18015,
            ServiceError_CHECK_COMPLEX_PIN_INVALID_SET_LENGTH: "비밀번호 자리수 설정은 8자 이상으로 입력해 주세요.",

            ServiceError_GET_TOKEN_INFO_NOT_HSM: "보안토큰이 아닙니다.",
            ServiceError_GET_TOKEN_INFO_UNSUPPORTED_OS: "해당 운영체제에는 다음 기능을 수행할 수 없습니다.",

            /* keyboardProtection */
            ServiceError_KEYBOARDPROTECTION_INVALID_ARGUMENT: "입력값이 잘못 되었습니다.",
            ServiceError_KEYBOARDPROTECTION_CREATE_FAILED: "키보드보안 연동 실패했습니다.",
            ServiceError_KEYBOARDPROTECTION_INIT_FAILED: "키보드보안 초기화 실패했습니다.",
            ServiceError_KEYBOARDPROTECTION_GETPIN_FAILED: "입력값 획득에 실패 했습니다(키보드 보안 연동 오류).",
            ServiceError_KEYBOARDPROTECTION_GETPUBLICKEY_FAILED: "키보드보안 공개키 획득에 실패했습니다.",

            /* mobile usim */
            ServiceError_MOBILE_USIM_NOT_PRESENT: "스마트인증 프로그램이 설치되지 않았습니다.",
            ServiceError_MOBILE_USIM_INVALID_OPTIONS: "스마트인증의 옵션이 잘못되었습니다.",
            ServiceError_MOBILE_USIM_USER_CANCELED: "스마트인증이 취소되었습니다.",

            /* mobisign */
            ServiceError_MOBISIGN_INVALID_OPTIONS: "모비싸인의 옵션이 잘못되었습니다.",
            ServiceError_MOBISIGN_NOT_INSTALLED: "모비싸인 프로그램이 설치되지 않았습니다.",
            ServiceError_MOBISIGN_NOT_LATEST_VERSION: "모비싸인 버전이 잘못되었습니다.",
            ServiceError_MOBISIGN_USER_CANCELED: "모비싸인이 취소되었습니다.",
            ServiceError_MOBISIGN_NOT_LOADED: "모비싸인 모듈 로딩에 실패했습니다.",

            /* relay */
            /* relay.raon */
            ServiceError_RELAY_RAON_NEED_CALL_GETREFNUM: "인증서 복사에 실패했습니다(인증번호 요청이 필요합니다).",
            ServiceError_RELAY_RAON_FAILED_TO_GETREFNUM: "인증서 복사에 실패했습니다(인증번호 요청에 실패했습니다).",
            ServiceError_RELAY_RAON_FAILED_NO_CERT: "인증서 복사에 실패했습니다(전송된 인증서가 없습니다).",
            ServiceError_RELAY_RAON_FAILED_TO_GETCERT: "인증서 복사에 실패했습니다(보내는 단말에 인증번호를 입력해주세요).",
            ServiceError_RELAY_RAON_FAILED_TO_EXPORTCERT: "인증서 복사에 실패했습니다(인증서 내보내기에 실패했습니다).",
            ServiceError_RELAY_RAON_FAILED_AUTHORIZATION_FAILE: "인증서 복사에 실패했습니다(인증번호가 일치하지 않습니다.)",
            ServiceError_RELAY_RAON_NOT_SUPPORTED_TOKEN: "인증서 복사에 실패했습니다(지원되지 않는 토큰입니다.).",
            // 금보원 인증서 탈취 취약점 관련 수정사항
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_INPUT_CANCELED: "비밀번호 입력이 사용자에 의해 취소 되었습니다.",
            ServiceError_RELAY_RAON_CERTIFICATE_INVALID_CERTINDENTIFIER: "해당 인증서를 찾을 수 없습니다.",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED: "인증서 복사에 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "인증서 복사에 실패했습니다(비밀번호를 확인하세요).",
            ServiceError_RELAY_RAON_TOKEN_FUNCTION_NOT_SUPPORTED: "인증서 복사에 실패했습니다(지원되지 않는 매체입니다).",
            ServiceError_RELAY_RAON_IVALID_REF_NUM: "인증서 복사에 실패했습니다(승인번호 검증에 실패했습니다).",

            /* certificateSynchronize */
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_CERTIDNTIFIER: "입력값이 잘못 되었습니다.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_ARGUMENT: "입력값이 잘못 되었습니다.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INPUT_CANCELED: "비밀번호 입력이 사용자에 의해 취소 되었습니다.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED: "비밀번호 변경에 실패했습니다.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_SIGN_PWD_FAILED: "비밀번호 변경에 실패했습니다(서명용 비밀번호를 확인하세요)",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_KM_PWD_FAILED: "비밀번호 변경에 실패했습니다(키분배용 비밀번호를 확인하세요)",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_FIND_KMCERTIFICATE: "키분배용 인증서가 존재하지 않습니다.",

            /* Koscom Envelop */
            ServiceError_KOSCOM_ENVELOP_FAILED: "Koscom 전자봉투 암호화에 실패했습니다.",
            ServiceError_KOSCOM_ENVELOP_INVALID_CERT_FAILED: "인증서가 유효하지 않습니다.",
            ServiceError_KOSCOM_ENVELOP_INVALID_PLAIN_FAILED: "원문이 유효하지 않습니다.",
            ServiceError_KOSCOM_ENVELOP_EXTRACT_KEY_FAILED: "키 추출에 실패하였습니다.",
            ServiceError_KOSCOM_ENVELOP_BASE64_ENCODE_FAILED: "base64 encoding에 실패했습니다.",

            /* Koscom Develop */
            ServiceError_KOSCOM_DEVELOP_FAILED: "Koscom 전자봉투 복호화에 실패했습니다.",
            ServiceError_KOSCOM_DEVELOP_INVALID_ENVELOPDATA_FAILED: "전자봉투 메시지가 유효하지 않습니다.",
            ServiceError_KOSCOM_DEVELOP_INVALID_INPUT_FAILED: "전자봉투에 사용될 인증서가 입력되지 않았습니다.",
            ServiceError_KOSCOM_DEVELOP_FAILED_INPUT_CANCELED: "입력을 취소했습니다.",
            ServiceError_KOSCOM_DEVELOP_FAILED_PWD_INCORRECT: "비밀번호가 틀렸습니다.",
            ServiceError_KOSCOM_DEVELOP_FAILED_PIN_INCORRECT: "pin 번호가 틀렸습니다.",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED: "전자봉투 복호화에 사용될 파일을 읽을 수 없습니다.",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ: "전자봉투 복호화에 사용될 파일을 읽을 수 없습니다.",

            /* Koscom Encrypt */
            ServiceError_KOSCOM_ENCRYPT_FAILED: "encrypt 실패하였습니다.",
            ServiceError_KOSCOM_ENCRYPT_INVALID_PLAIN: "입력값이 잘못 되었습니다. (plain)",
            ServiceError_KOSCOM_ENCRYPT_INVALID_SESSIONKEY: "입력값이 잘못 되었습니다. (sessionkey)",
            ServiceError_KOSCOM_ENCRYPT_ENCODING_FAILED: "base64 encode 실패하였습니다.",
            ServiceError_KOSCOM_ENCRYPT_SESSIONID_FAILED: "세션ID 획득 실패하였습니다.",

            /* Koscom Decrypt */
            ServiceError_KOSCOM_DECRYPT_FAILED: "decrypt 실패하였습니다.",
            ServiceError_KOSCOM_DECRYPT_INVALID_ENCRYPTDATA: "입력값이 잘못 되었습니다. (encryptData).",
            ServiceError_KOSCOM_DECRYPT_INVALID_SESSIONKEY: "입력값이 잘못 되었습니다. (sessionkey)",
            ServiceError_KOSCOM_DECRYPT_ENCODING_FAILED: "세션ID 획득 실패하였습니다.",

            /* SetPFXNPKIFile */
            ServiceError_SETPFXNPKIFILE_FAILED: "SetPFXNPKIFile 실패하였습니다.",
            ServiceError_SETPFXNPKIFILE_UNKNOWN_FILE: "알 수 없는 파일입니다.",
            ServiceError_SETPFXNPKIFILE_INVALID_FILEPATH: "잘못된 파일 경로입니다.",
            ServiceError_SETPFXNPKIFILE_INVALID_TYPE: "잘못된 타입입니다.",
            ServiceError_SETPFXNPKIFILE_NOT_FIND_FILE: "해당 경로의 파일이 존재하지 않습니다.",
            ServiceError_SETPFXNPKIFILE_INVALID_PWD: "비밀번호가 틀렸습니다.",
            ServiceError_SETPFXNPKIFILE_PFX_PKCS8_DECODE_FAIL: "PKCS8 디코드의 실패했습니다.",
            ServiceError_SETPFXNPKIFILE_DER_NOT_FIND_SIGNPRIKEY_FILE: "해당 경로에서 signPri.key 파일을 찾을 수가 없습니다.",
            ServiceError_SETPFXNPKIFILE_PFX_DECODE_FAILED: "PFX Decode 실패했습니다. (비밀번호가 틀렸습니다)",
            ServiceError_SETPFXNPKIFILE_DER_DECODE_FAILED: "Der(X509) Decode 실패했습니다.",

            /* USBKey */
            ServiceError_USBKEYTOKEN_WRITE_BUFFER_FAILED: "선택하신 저장토큰의 저장공간이 부족합니다.(3.5KBytes 필요)",

            /* KoscomFileEnvelop */
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED                                     : "전자봉투 암호화에 실패했습니다.",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_CERT_FAILED                        : "인증서가 유효하지 않습니다.",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_PLAIN_FAILED                       : "원문이 유효하지 않습니다.",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_DECODE_FAILED                       : "base64 decoding에 실패했습니다.",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_ENCODE_FAILED                       : "base64 encoding에 실패했습니다.",
            ServiceError_KOSCOM_FILE_ENVELOP_NOT_SUPPORTED                              : "인증서 가져오기는 아직 지원되지 않습니다.",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE_ACCESS_DENIED            : "권한 문제로 인해 파일 읽기에 실패했습니다.",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE                          : "파일 쓰기에 실패했습니다.",

            /* KoscomFileDevelop */
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED                                     : "전자봉투 복호화에 실패했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_ENVELOPDATA_FAILED                 : "전자봉투 메시지가 유효하지 않습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_INPUT_FAILED                       : "입력값이 유효하지 않습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_INPUT_CANCELED                      : "입력을 취소했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PWD_INCORRECT                       : "비밀번호가 틀렸습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PIN_INCORRECT                       : "PIN 번호가 틀렸습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED             : "권한 문제로 인해 파일 읽기에 실패했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ                           : "파일 읽기에 실패했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_DECODE_FAILED                       : "base64 decoding에 실패했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_ENCODE_FAILED                       : "base64 encoding에 실패했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_WRITE                          : "파일 읽기에 실패했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_INPUT_CANCELED                             : "PIN번호 입력을 취소했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_PWD_INPUT_CANCELED                         : "비밀번호 입력을 취소했습니다.",
            ServiceError_KOSCOM_FILE_DEVELOP_CERTIFICATE_INVALID_CERTINDENTIFIER        : "입력값이 잘못되었습니다.",

            /* GetCertificateListWithDn */
            ServiceError_GETCERTIFICATELIST_WITH_DN_FAILED                              : "인증서 가져오기에 실패했습니다.",
            ServiceError_GETCERTIFICATELIST_WITH_DN_INVALID_INPUT_FAILED                : "입력값이 유효하지 않습니다.",
            ServiceError_GETCERTIFICATELIST_WITH_DN_NO_SEARCH_CERTIFIATE_FAILED         : "요청에 해당하는 인증서를 찾을 수 없습니다.",

            /* HASH Signature Error */
            ServiceError_HASH_LENGTH_ERROR: " Hash 값이 잘못 되었습니다. ( not 32 byte ) ",

            /* SCRIPT */
            ScriptError_SETMATCHEDCONTEXT_NOT_CERTIFICATE: "요청하신 인증서가 없습니다.",
            ScriptError_SIGNDATAB64_NOT_PLAINTEXT: "입력 매개변수가 null입니다.",
            ScriptError_CERTSERVICESETUP_VERSION_MODULE: "설치한 모듈 버전이 낮습니다, 최신버전을 설치해주세요,",
            ScriptError_CERTSERVICESETUP_VERSION_DLL: "설치한 DLL 버전이 낮습니다, 최신버전을 설치해주세요,",
            ScriptError_UCPIDREQUSER_NOT_USERAGREEMENT: "입력 매개변수가 null입니다. (userAgreement)",
            ScriptError_UCPIDREQUSER_NOT_MODE: "입력 잘못된 매개변수 입니다. (mode)",
            ScriptError_PFX_MAKESIGNATURE_ERORR: "전자서명 중 에러가 발생하였습니다.",
            ScriptError_ISSUE_BILL_SAFARINOTSUPPORT: '[사파리(Safari) 브라우저의 "환경설정>개인정보>쿠키" 설정부분을 "항상허용"으로 변경하신 후에 공동인증서 발급을 진행하여 주시기 바랍니다.]',
            ScriptError_UPDATE_BILL_SAFARINOTSUPPORT: '[사파리(Safari) 브라우저의 "환경설정>개인정보>쿠키" 설정부분을 "항상허용"으로 변경하신 후에 공동인증서 갱신을 진행하여 주시기 바랍니다.]',
            ScriptError_ENVELOP_INVALID_VALUE: '입력매개변수가 NULL입니다.',
            ScriptError_DEVELOP_INVALID_VALUE: '입력매개변수가 NULL입니다.',
            ScriptError_DEVELOP_NOT_CERTIFICATE: '일치하는 인증서가 없습니다.',
            ScriptError_ENCRYPTDATA_INVALID_VALUE: '입력매개변수가 NULL입니다.',
            ScriptError_DECRYPTDATA_INVALID_VALUE: '입력매개변수가 NULL입니다.',
            ScriptError_KOSCOM_ENCRYPT_INVALID_VALUE: '입력매개변수가 NULL입니다.',
            ScriptError_KOSCOM_DECRYPT_INVALID_VALUE: '입력매개변수가 NULL입니다.'
        },
        {
            ServiceError_UNKNOWN: "The error code is not registered yet",

            /* common */
            ServiceError_INVALID_INPUT: "Invalid input.",
            ServiceError_BASE64_ENCODE_FAILED: "Base64 Encode Failed.",
            ServiceError_BASE64_DECODE_FAILED: "Base64 Decode Failed.",

            /* token */
            ServiceError_TOKEN_NOT_INITIALIZED: "SecureDisk is not initialized.",
            ServiceError_TOKEN_NOT_FOUND: "SecureDisk does not exist.",
            ServiceError_TOKEN_BAD: "SecureDisk is abnormal, Please initialized first.",
            ServiceError_TOKEN_UBIKEY_NOT_INSTALLED: "Ubikey is not installed. Please install the program.",
            ServiceError_TOKEN_UBIKEY_NOT_LATEST_VERSION: "Ubikey is not the latest version. Please update your program.",
            ServiceError_TOKEN_UBIKEY_INVALID_OPTIONS: "Ubikey option value is invalid.",
            ServiceError_TOKEN_NOT_RECOGNIZED: "Token not allowed.",
            ServiceError_TOKEN_FUNCTION_NOT_SUPPORTED: "It does not support that feature in the token.",

            ServiceError_SSLCONFIG_SERVICE_SSL_INIT_FAILED: "SSL Service initialization failed.",

            /* service common */
            ServiceError_SERVICE_REJECTED: "Service has bveen rejected becasue of invalid MangoWiore message.",
            ServiceError_SESSIONID_NOT_EXIST: "The session expires or is invalid. Please connect again.",
            ServiceError_SESSION_IS_USING: "The session is in use elsewhere. Please connect again.",
            ServiceError_OPERATION_NOT_SUPPORTED: "This function is not supported.",
            ServiceError_OPERATION_NOT_EXPECTED: "Currently, you can not perform this function.",
            ServiceError_INVALID_INPUT_TOKENID: "The token identifier is invalid.",
            ServiceError_MEMORY_ALLOCATION_FAILED: "Memory allocation failed.",

            ServiceError_NO_SSL_CERTIFICATE: "Registered SSL certificate does not exist.",
            ServiceError_NOT_SUPPORTED_LANGUAGE: "It is not a supported language.",

            /* services */
            ServiceError_CERTIFICATE_NOT_FOUND: "Certificate does not exist.",

            /* delete service */
            ServiceError_DELETE_CERTIFICATE_FAILED: " Failed to delete the certificate (other error)",
            ServiceError_DELETE_CERTIFICATE_INVALID_CERTINDENTIFIER: "Invalid input.",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PROGRAM_FILES_PATH_DELETE_WARNING: "Certificate stored in the [Program files] can not be deleted.",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PASSWORD_INCORRECT: "Delete a certificate failed (check password).",
            ServiceError_DELETE_PIN_INCORRECT: "It failed to delete certificate (Make a PIN number).",
            ServiceError_DELETE_PIN_FAILED_INPUT_CANCELED: "Failed to delete certificate (canceled the PIN number).",
            ServiceError_DELETE_PWD_FAILED_INPUT_CANCELED: "Failed to delete certificate (canceled the password).",

            /* encrypt vid random */
            ServiceError_ENCRYPT_VIDRANDOM_INVALID_CERTINDENTIFIER: "Invalid input.",//"Invalid arugment(keyIdentifier or recipientCertificate)");
            ServiceError_ENCRYPT_VIDRANDOM_FAILED: "EncryptVIDRandom failed.",
            ServiceError_ENCRYPT_VIDRANDOM_TOKEN_NOT_INITIALIZE: "SecureDisk is not initialized.",

            /* generate key pair */
            ServiceError_GENERATE_KEYPAIR_INVALID_ARGUMENT: "Invalid input.",//"Invalid arugment(algorithm or modularLength)");
            ServiceError_GENERATE_KEYPAIR_FAILED: "Gen key fail",
            ServiceError_GENERATE_KEYPAIR_TOKEN_NOT_INITIALIZE: "SecureDisk is not initialized.",

            ServiceError_REPLAY_NOT_MATCHED_MESSAGE_NUMBER: "Please update the current page. (M)",
            ServiceError_REPLAY_CANNOT_REQUEST_WITHOUT_TIC_MESSAGE: "Please update the current page. (S)",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_NOT_MATCHED_KEY_PAIR: "The keypair of the saved certificate is different.",
            ServiceError_GENERATE_SIGNATURE_NOT_EXPECTED_KEYIDENTIFIER: "Unexpected keyIdentifier",
            ServiceError_GENERATE_SIGNATURE_FAILED: "It failed to electronic signatures.",
            ServiceError_GENERATE_SIGNATURE_TOKEN_NOT_INITAILIZE: "SecureDisk is not initialized.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PWD_INCORRECT: "Enter Password of the certificate is incorrect.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_LOCKED: "Failed to electronic signatures (the device is locked.)",
            ServiceError_GENERATE_SIGNATURE_FAILED_SGPKCS8_PRIVATEKEYINFO_DECODE_FAILED: "Failure to have an electronic signature (Check password).",
            ServiceError_GENERATE_SIGNATURE_ENCRYPT_VIDRANDOM_FAILED: "t failed to electronic signature (VID Random Number generated on failure).", //"encrypt VID Random failed(0x%x, false)"
            ServiceError_GENERATE_SIGNATURE_INVALID_ARGUMENT: "Invalid input.",//"Invalid input (plain, keyIdentifier, false)",
            ServiceError_GENERATE_SIGNATURE_CANCELED: "Request Donnie work was canceled by the user.",
            ServiceError_GENERATE_SIGNATURE_KSTOKEN_PIN_INCORRECT: "The PIN number entered is invalid.",
            ServiceError_GENERATE_SIGNATURE_KOSCOM_SIGN_MUST_HAVE_CERTIFICATE: "Koscom a digital signature certificate is required.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_INCORRECT: "Failure to have an electronic signature (Check password).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ERROR: "Failed to read the file (please check the path).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ERROR: "Failed to write the file (please check the path).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ACCESS_DENIED: "Failed to read file due to authority problem.",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ACCESS_DENIED: "Failed to write the file due to authority problem.",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_MEMORY_ALLOCATION: "Memory was insufficient and electronic signature failed.",

            /* get certificate list */
            ServiceError_GET_CERTIFICATE_LIST_FAILED: "Function Failed",
            ServiceError_GET_CERTIFICATE_LIST_TOKEN_NOT_INITIALIZE: "SecureDisk is not initialized.",
            ServiceError_GET_CERTIFICATE_LIST_UBIKEY_NOT_INITIALIZE: "UBIKey service is not initialized.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PIN_INCORRECT: "Check out the PIN number.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPIN_CANCELED: "It was canceled by entering a PIN.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPWD_CANCELED: "I've canceled the password input.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PWD_INCORRECT: "Check the password.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_UBIKEY_INPUT_CANCELED: "Ubikey canceled the service.",

            /* get certificate */
            ServiceError_GET_CERTIFICATE_INVALID_ARGUMENT: "Invalid input.",//"certIdentifier"
            ServiceError_GET_CERTIFICATE_FAILED: "Failed to load the certificate.",
            ServiceError_GET_CERTIFICATE_NOT_FOUND: "Can not find the certificate.",
            ServiceError_GET_CERTIFICATE_TOKEN_NOT_INITIALIZE: "SecureDisk is not initialized.",

            /* setMatchedContext */
            ServiceError_SETMATCHED_CONTEXT_INPUT_CANCELED: "Enter the password canceled.",
            ServiceError_SETMATCHED_CONTEXT_INVALID_CUSTOM_SID: "Incorrect session ID was input.",
            ServiceError_SETMATCHED_CONTEXT_CUSTOM_SID_IS_NULL: "The session ID is input as NULL.",
            ServiceError_SETMATCHED_CONTEXT_CREATE_SESSION_UNIT_FAILED: "Failed to create session.",

            /* get ca certificate */
            ServiceError_GET_CA_CERTIFICATE_INVALID_ARGUMENT: "SecureDisk is not initialized.",

            /* push certificate */
            ServiceError_PUSH_CERTIFICATE_INVALID_ARGUMENT: "Invalid input.",//"Invalid arugment(keyIdentifier or certificate, false)",
            ServiceError_PUSH_CERTIFICATE_NOT_EXPECTED_KEYIDENTIFIER: "Unexpected keyIdentifier",
            ServiceError_PUSH_CERTIFICATE_FAILED: "PushCertificate failed.",
            ServiceError_PUSH_CERTIFICATE_TOKEN_NOT_INITIALIZE: "SecureDisk is not initialized.",

            /* verify service */
            ServiceError_VERIFY_CERTIFICATE_FAILED: "Failed password verification certificate (other error)",
            ServiceError_VERIFY_CERTIFICATE_INVALID_CERTINDENTIFIER: "Invalid input.",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_INCORRECT: "Failure to have an electronic signature (Check password).",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_INCORRECT: "Failure to have an electronic signature (Check password).",
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_LOCKED: "Failed to electronic signatures (the device is locked.)",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_LOCKED: "Failed to electronic signatures (the device is locked.)",

            /* generate keypair */
            ServiceError_GENERATE_KEYPAIR_CANCELLED: "Generate key pair has been canceled by the user.",
            ServiceError_GENERATE_KEYPAIR_PIN_INCORRECT: "Failed to generate key pairs password is incorrect.",
            ServiceError_GENERATE_KEYPAIR_PIN_LOCKED: "The key-pair generation failed, because the device is locked by wrong password.",
            ServiceError_GENERATE_KEYPAIR_PWD_INCORRECT: "The password is incorrect Failed to generate key pairs.",

            /* cmp common*/
            ServiceError_CMP_MEMORY_ALLOCATION_FAILED: "Memory allocation failed.",
            ServiceError_CMP_SERVER_CONNECT_FAILED: "It failed to communicate with the CA server.",

            /* issue / recover */
            ServiceError_CMP_ISSUE_INVALID_ARGUMENT: "The input value for the certificates issued were incorrect.",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_CA: "Unsupported certificate authority code has been inputted.",
            ServiceError_CMP_ISSUE_INPUTPIN_CANCELED: "Input password canceled",
            ServiceError_CMP_ISSUE_PKCS5_ENCRYPT_FAILED: "Failed PKCS#5 encryption.",
            ServiceError_CMP_ISSUE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "Failed PKCS#8 mssage generation.",
            ServiceError_CMP_ISSUE_SAVE_CERTIFICATE_FAILED: "The certificate store failed.",
            ServiceError_CMP_ISSUE_IMPORT_INIT_FAILED: "It failed to save the issued certificate. (Initialize failed)",
            ServiceError_CMP_ISSUE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "Failed issued certificates for signing electronic stores.",
            ServiceError_CMP_ISSUE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "Failed to save the certificate issued for key distribution.",
            ServiceError_CMP_ISSUE_IMPORT_CA_PUB_IMPORT_FAILED: "Failed CA public key storage.",
            ServiceError_CMP_ISSUE_IMPORT_FINAL_FAILED: "Failed to save the issued certificate. (Finalize failure)",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_BILL: "Billing issue is not currently supported.",
            ServiceError_CMP_ISSUE_LOW_SPEC_ICCARD: "The certificate that is not supported by the IC Card.",
            ServiceError_CMP_ISSUE_NOT_USABLE_TOKNE_FAILED: "You can not issue a certificate to the selected disk.",

            ServiceError_CMP_UPDATE_INVALID_ARGUMENT: "The input values for the renewal certificate is invalid.",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_CA: "Unsupported certificate authority code has been entered.",
            ServiceError_CMP_UPDATE_INPUTPIN_CANCELED: "Input the password canceled.",
            ServiceError_CMP_UPDATE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "Failed to retrieve the certificate to be renewed.",
            ServiceError_CMP_UPDATE_ADD_OLD_CERTIFICATE_FAILED: "Failed to add the certificate to be renewed.",
            ServiceError_CMP_UPDATE_ADD_OLD_KEY_FAILED: "Failed to add the key file to be updated.",
            ServiceError_CMP_UPDATE_PKCS5_ENCRYPT_FAILED: "Failed PKCS#5 encryption.",
            ServiceError_CMP_UPDATE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "Failed PKCS#8 mssage generation.",
            ServiceError_CMP_UPDATE_SAVE_CERTIFICATE_FAILED: "The certificate store failed.",
            ServiceError_CMP_UPDATE_INVALID_PASSWORD: "Check the previous certificate password.",
            ServiceError_CMP_UPDATE_IMPORT_INIT_FAILED: "It failed to save the issued certificate. (Initialize failed)",
            ServiceError_CMP_UPDATE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "Failed issued certificates for signing electronic stores.",
            ServiceError_CMP_UPDATE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "Failed to save the certificate issued for key distribution.",
            ServiceError_CMP_UPDATE_IMPORT_CA_PUB_IMPORT_FAILED: "Failed CA public key storage.",
            ServiceError_CMP_UPDATE_IMPORT_FINAL_FAILED: "Failed to save the issued certificate. (Finalize failure)",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_BILL: "Billing issue is not currently supported.",
            ServiceError_CMP_UPDATE_NOT_UPDATE_TIME: "Period in which it is possible to update the certificate does not have. Update of the certificate has expired, it is possible from one month ago.",
            ServiceError_CMP_UPDATE_INVALID_PIN: "Please check the PIN number.",
            ServiceError_CMP_UPDATE_NOT_USABLE_TOKNE_FAILED: "You can not issue a certificate to the selected disk.",

            ServiceError_CMP_REVOKE_INVALID_ARGUMENT: "The input values for the invalid certificate revocation.",
            ServiceError_CMP_REVOKE_NOT_SUPPORTED_CA: "Unsupported certificate authority code has been entered.",
            ServiceError_CMP_REVOKE_INPUTPIN_CANCELED: "Input the password canceled.",
            ServiceError_CMP_REVOKE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "Failed to retrieve the certificate to be revoked.",
            ServiceError_CMP_REVOKE_ADD_OLD_CERTIFICATE_FAILED: "Failed to add the certificate to be revoked.",
            ServiceError_CMP_REVOKE_ADD_OLD_KEY_FAILED: "Failed to add the key file to be revoked.",
            ServiceError_CMP_REVOKE_INVALID_PASSWORD: "Please confirm your password.",
            ServiceError_CMP_REVOKE_INVALID_PIN: "Please check the PIN number.",
            ServiceError_CMP_REVOKE_PIN_LOCKED: "PIN is locked.",

            /* get PCIdentity */
            ServiceError_GET_PCIDENTITY_FAILED_MEMORY_ALLOCATION_FAILED: "Memory allocation failed.",
            ServiceError_GET_PCIDENTITY_FAILED_INVALID_WINDOWS: "Failed to get the device identification Values (Windows OS is subsequently other outside support).",
            ServiceError_GET_PCIDENTITY_FAILED: "Failed to get the device identification value (other error).",

            /* certificate manager, changePin */
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERTINDENTIFIER: "Invalid input.",
            ServiceError_CHANGE_PIN_FAILED_INPUT_CANCELED: "Enter the password canceled.",
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERT_TYPE: "The password change failed (There was a problem with the certificate format).",
            ServiceError_CHANGE_PIN_FAILED_PIN_INCORRECT: "Failed to change password (check password).",
            ServiceError_CHANGE_PIN_FAILED_FILE_WRITE_ERROR: "Failed to change password (There was a problem in stroring the certificate",
            ServiceError_CHANGE_PIN_FAILED: "The password change failed (other error).",
            ServiceError_CHANGE_PIN_FAILED_PROGRAM_FILES_PATH_WARNING: "Password for the certificate, which is stored in the Program files can not be changed.",
            ServiceError_CHANGE_PIN_FAILED_NOT_MATCHED_PWD: "The password of the signature certificate does not match the password of the key distribution certificate.",

            /* certificate manager, export certificate */
            ServiceError_EXPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "Enter the password canceled.",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "It has canceled the certificate export.",
            ServiceError_EXPORT_CERTIFICATE_FAILED_INVALID_CERT_TYPE: "Export Certificate failed (There was a problem with the certificate format).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SEARCH_CERTIFICATE_FAILED: "Export Certificate failed (Failed to find the certificate).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PIN_INCORRECT: "Export Certificate failed (check password).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PWD_INCORRECT: "Exporting the certificate failed (Check the password).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ADD_CERTIFICATELIST_FAILED: "Export Certificate failed (add certificate fail). ",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ENCODE_PFX_FAILED: "Export Certificate failed (encode pfx fail).",
            ServiceError_EXPORT_CERTIFICATE_FAILED: "Export Certificate failed(other error).",

            /* certificate manager, import certificate */
            ServiceError_IMPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "The Certificate Import failed (canceled the certificate selection).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "The Certificate Import failed (canceled the password input).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX: "Failed to import the certificate (not certificate of PFX format).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX_PASSWORD: "The Certificate Import failed (check password).",
            ServiceError_IMPORT_CERTIFICATE_FAILED: "The Certificate Import failed (other error).",
            ServiceError_IMPORT_CERTIFICATE_NOT_AFTER_CERTIFICATE_FAILED: "The latest certificate has already been saved.",

            /* certificate manager, verify pin */
            ServiceError_VERIFY_PIN_FAILED_INVALID_CERTINDENTIFIER: "Failed to verify passwords (Invalid input).",
            ServiceError_VERIFY_PIN_FAILED_INPUT_CANCELED: "Failed to verify passwords (the input has been canceled).",
            ServiceError_VERIFY_PIN_FAILED: "Failed password verification (Please confirm your password).",
            ServiceError_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "Failed to confirm the password (the signature certificate does not match the password of the certificate for encryption).",

            /* certificate manager, verify pin */
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_CERTINDENTIFIER: "Invalid input.",
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_TOKENINDENTIFIER: "The input storage is not available.",
            ServiceError_CHANGE_STORAGE_FAILED_INPUT_CANCELED: "Failed to change the certificate storage (canceled the password input).",
            ServiceError_CHANGE_STORAGE_FAILED_CERTIFICATE_AND_KEY_FAILED: "Failed to change the certificate storage media.",
            ServiceError_CHANGE_STORAGE_FAILED_PIN_INCORRECT: "Failed to change the certificate storage (check password).",
            ServiceError_CHANGE_STORAGE_FAILED_PWD_INCORRECT: "It failed to change the certificate storage medium (Check password).",
            ServiceError_CHANGE_STORAGE_SAME_TOKEN: "Selected same storage for changing stroage",
            ServiceError_CHANGE_STORAGE_FAILED: "Failed to change the certificate storage media (other error).",
            ServiceError_CHANGE_STORAGE_OVERWRITE_CANCELED: "Canceled change of certificate storage medium.",
            ServiceError_CHANGE_STORAGE_FAILED_AFTER_CERTIFICATE: "The latest certificate has already been saved.",

            /* validateCertificate */
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTINDENTIFIER: "Invalid input.",
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTIFICATE: "This format of certificate is invalid.",
            ServiceError_VALIDATE_CERTIFICATE_CRL_FAILED: "It failed certificate validation.",
            ServiceError_VALIDATE_CERTIFICATE_FAILED: "Certificate validation failed (other errors).",

            /* session manager */
            ServiceError_SESSION_MANAGER_SESSION_ID_IS_NULL: "session id is not saved becasue the session ID is null.",

            /* validate certificate*/

            /* tray */
            ServiceError_OPERATE_TRAY_INVALID_TRAY_VENDOR: "Invalid tray list.",
            ServiceError_OPERATE_TRAY_INVALID_TRAY_OPERATE: "Invalid tray operation.",

            /* SignVerify */
            ServiceError_VERIFY_SIGNATURE_INVALID_ARGUMENT: "Invalid input.",
            ServiceError_VERIFY_SIGNATURE_PLAIN_IS_NULL: "The original digital signature is necessary.",
            ServiceError_VERIFY_SIGNATURE_UNSUPPORT_SIGNTYPE: "The signature type is not supported yet.",
            ServiceError_VERIFY_SIGNATURE_INVALID_X509_TYPE: "The certificate is not a form X509.",
            ServiceError_VERIFY_SIGNATURE_INVALID_PUBLIC_KEY_TYPE: "The key is not a form of public key ",
            ServiceError_VERIFY_SIGNATURE_VERIFY_FAILED: "Signature verification failed.",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_FAILED: "Failed to read the file.",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_FAILED: "Failed to write file.",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_ACCESS_DENIED: "Failed to read file due to authority problem.",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_ACCESS_DENIED: "Failed to write the file due to authority problem.",
            ServiceError_VERIFY_SIGNATURE_FILE_MEMORY_ALLOCATE_FAILED: "The memory was insufficient and the signature failed.",

            /* VIDVerify */
            ServiceError_VERIFY_VID_INVALID_CERTID: "Input value is incorrect.",
            ServiceError_VERIFY_VID_INVALID_KEYID: "Input value is incorrect.",
            ServiceError_VERIFY_VID_INVALID_IDN: "Input value is incorrect.",
            ServiceError_VERIFY_VID_TOKEN_NOT_INITIALIZE: "Security disk was not initialized.",
            ServiceError_VERIFY_VID_NOT_FOUND: "Input value is incorrect.",
            ServiceError_VERIFY_VID_NOT_INVALID_X509_TYPE: "There is no form of X509 certificate.",
            ServiceError_VERIFY_VID_GET_RANDOM_FAILED: "It failed to bring random.",
            ServiceError_VERIFY_VID_INVALID_PWD: "It failed to bring random（Please check the password）.",
            ServiceError_VERIFY_VID_VERIFY_FAILED: "It failed to VID verification.",

            /* cipher, hash */
            ServiceError_GET_HASH_FAILED_INVALID_INPUT: "message digest I failed（Input value was wrong）.",
            ServiceError_GET_HASH_FAILED_INVALID_ALGORITHM: "message digest I failed（This is an unsupported algorithm）.",
            ServiceError_GET_HASH_FAILED_UNSUPPORTED_DIGEST_ALGORITHM: "message digest I failed（This is an unsupported algorithm）.",
            ServiceError_GET_HASH_FAILED_FILE_NOT_FOUND: "message digest I failed（File not found）.",
            ServiceError_GET_HASH_FAILED_FILE_READ_FAILED: "message digest I failed（There was an error to read the file）.",
            ServiceError_GET_HASH_FAILED: "message digest I failed（Other error）.",

            /* cipher, encrypt */
            ServiceError_ENCRYPT_FAILED_INVALID_INPUT: "It failed in message encryption(Input value is incorrect).",
            ServiceError_ENCRYPT_FAILED_KEY_IS_NULL: "It failed in message encryption(t does not have a value of key).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_KEY_LEN: "It failed in message encryption(The length of the key is incorrect).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_ALGORITHM: "It failed in message encryption(This is an unsupported encryption algorithm).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_MODE: "It failed in message encryption(This is an unsupported operating mode).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_PADDING: "It failed in message encryption(This is an unsupported padding).",
            ServiceError_ENCRYPT_FAILED_HD_IS_NULL: "It failed in message encryption (14406).",
            ServiceError_ENCRYPT_FAILED_INIT_KEY: "It failed in message encryption (14407).",
            ServiceError_ENCRYPT_FAILED_MAKE_KEY: "It failed in message encryption (14408).",
            ServiceError_ENCRYPT_FAILED: "It failed in message encryption（14409）.",

            /* cipher, decrypt */
            ServiceError_DECRYPT_FAILED_INVALID_INPUT: "It failed to message decryption(Input value is incorrect).",
            ServiceError_DECRYPT_FAILED_KEY_IS_NULL: "It failed to message decryption(It does not have a value of key).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_KEY_LEN: "It failed to message decryption(The length of the key is incorrect).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_ALGORITHM: "It failed to message decryption(This is an unsupported encryption algorithm).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_MODE: "It failed to message decryption(This is an unsupported operating mode).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_PADDING: "It failed to message decryption(This is an unsupported padding).",
            ServiceError_DECRYPT_FAILED_HD_IS_NULL: "It failed to message decryption(14506).",
            ServiceError_DECRYPT_FAILED_MAKE_KEY: "It failed to message decryption(14507).",
            ServiceError_DECRYPT_FAILED_NOT_MATCHED_DOMAIN: "It failed to message decryption(14508).",
            ServiceError_DECRYPT_FAILED: "It failed to message decryption(14509).",

            /* envelope */
            ServiceError_ENVELOPE_FAILED_INVALID_INPUT: "It failed the envelope(Invalid input).",
            ServiceError_ENVELOPE_FAILED_INVALID_X509_CERT: "It failed the envelope(Enter the certificate is not the x509).",
            ServiceError_ENVELOPE_FAILED: "It failed the envelope(Other error).",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ERROR: "Failed to read the file (please check the path).",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ERROR: "Failed to write the file (please check the path).",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "Failed to read file due to authority problem.",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "Failed to write the file due to authority problem.",

            /* deenvelope */
            ServiceError_DEENVELOPE_FAILED_INVALID_INPUT: "It failed to child envelope decryption(Input value is incorrect).",
            ServiceError_DEENVELOPE_FAILED_INPUT_CANCELED: "It failed to child envelope decryption(It canceled the input).",
            ServiceError_DEENVELOPE_FAILED_PIN_INCORRECT: "It failed to child envelope decryption(Please check the PIN number).",
            ServiceError_DEENVELOPE_FAILED_PWD_INCORRECT: "It failed to child envelope decryption(I canceled the password).",
            ServiceError_DEENVELOPE_FAILED_FILE_READ: "Failed to read the file (please check the path).",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE: "Failed to write the file (please check the path).",
            ServiceError_DEENVELOPE_FAILED: "It failed to child envelope decryption.",
            ServiceError_DEENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "Failed to read file due to authority problem.",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "Failed to write the file due to authority problem.",
            ServiceError_DEENVELOPE_FAILED_INVALID_TEXT: "Failed to decode digital envelope (cryptography corrupted, file location was wrong).",

            /* p12 */
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED: "It failed to PFX signature（Other error）.",
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED_SELECT_CANCELED: "It failed to PFX signature（I was deselected）.",

            /* certificate manager, export certificate and key */
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: 'Certificate export failed. (The input value was incorrect)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: 'Certificate export failed. (Password input canceled)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_PRIVATEKEY_FAILED: 'Certificate export failed. (Private key not found)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_CERTIFICATE_FAILED: 'Certificate export failed. (Certificate was not found)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: 'Certificate export failed. (Please check PIN number)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_LOCKED: 'Certificate export failed. (Device locked)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: 'Certificate export failed. (Please check your password)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED: 'Certificate export failed.',

            /* certificate manager, import certificate and key */
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: "Certificate import failed. (The input value was incorrect)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: "Certificate import failed. (Password input canceled)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: "Certificate import failed. (Please check PIN number)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: "Certificate import failed. (Please check your password)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED: "Certificate import failed.",

            /* mac address error message */
            ServiceError_MAC_ADDRESS_ERROR: 'Failed to get MAC address.',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_HANDLE: 'Failed to get handle of DLL.',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_FUNC: 'Failed to import DLL function.',
            ServiceError_MAC_ADDRESS_NONVALIDATED_RETURN_FUNC: 'The return value of the function is not valid.',
            ServiceError_MAC_ADDRESS_FAILED_MEMORY: 'Failed to allocate memory.',
            ServiceError_MAC_ADDRESS_FAILED_REG_OPEN: 'Failed to open the registry.',
            ServiceError_MAC_ADDRESS_FAILED_GET_REG_VALUE: 'Failed to get registry value.',
            ServiceError_MAC_ADDRESS_FAILED_REG_CLOSE: 'Failed to close the registry.',
            ServiceError_MAC_ADDRESS_FAILED_GET_LAST_NETID: 'Failed to bring NetId.',
            ServiceError_MAC_ADDRESS_FAILED_GET_SYSTEM_FOLDER_NAME: "Failed to get system path.",

            /* p11 error message */
            ServiceError_P11_CLOSE_SESSION_ERROR: "P11 Close session error",
            ServiceError_P11_CLOSE_SESSION_HANDLE_INVALID: "The handle is invalid.",
            ServiceError_P11_CLOSE_SESSION_TOKENMASTER_INVALID: "The token master is invalid.",
            ServiceError_P11_CLOSE_SESSION_FAILED_GET_TOKENLIST: "We could not get the list of tokens.",
            ServiceError_P11_CLOSE_SESSION_IS_NOT_P11: "There is no P11 token.",
            ServiceError_P11_CLOSE_SESSION_FAILED_CLOSE_SESSION: "Close Session failed.",

            /* p11 HSM */
            ServiceError_P11_HSM_ERROR: "P11 HSM error",
            ServiceError_P11_HSM_NOT_EXIST_HANDLE: "Handle does not exist.",
            ServiceError_P11_HSM_FAILED_GET_TOKENINDENTIFIER: "Failed to bring the token id.",
            ServiceError_P11_HSM_FAILED_GET_TOKENMASTER: "Brought a token master.",

            /* ConvertStringFormat */
            ServiceError_CONVERT_STRING_FORMAT_ERROR: "Convert String Format error",
            ServiceError_CONVERT_STRING_FORMAT_INVALID_INPUT: "The input value is invalid.",
            ServiceError_CONVERT_STRING_FORMAT_FAILED_CHANGE_STRING_FORMAT: "Failed to convert string.",

            /* CheckExistenceCertByPath */
            ServiceError_CHECK_EXISTENCE_CERT_ERROR: "Check Existence cert error",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_CERTINDENTIFIER: "Invalid certificate id.",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_ARGUMENT: "A valid value has not been entered.",
            ServiceError_CHECK_EXISTENCE_CERT_SAME_TOKEN: "I entered the same token.",
            ServiceError_CHECK_EXISTENCE_CERT_NOT_EXIST_HANDLE: "Handle does not exist",

            /* getFilePath */
            ServiceError_GET_FILE_PATH_CANCELED: "The file selection was canceled.",

            /* securedisk */
            ServiceError_SECUREDISK_BACKUP_ERROR: "SecureDisk backup and recovery failed.",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_CERTINDENTIFIER: "The input value is incorrect. (Certificate)",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_KEYINDENTIFIER: "The key value is incorrect.",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_TOKENINDENTIFIER: "The value of the token is incorrect.",
            ServiceError_SECUREDISK_BACKUP_INVALID_VALUE: "Value is not valid.",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_BACKUPCERTLIST: "Failed to create backup certificate list.",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_SECURETOKEN: "Failed to search all disks.",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_HANDLE: "The input handle does not exist.",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_DATA: "Data is invalid or does not exist.",
            ServiceError_SECUREDISK_BACKUP_INVALID_RANGE: "The data range is incorrect.",
            ServiceError_SECUREDISK_BACKUP_INVALID_PIN: "The password is not valid.",
            ServiceError_SECUREDISK_BACKUP_FAILED_CASTING: "Conversion failed.",

            /* pin complex check */
            ServiceError_CHECK_COMPLEX_PIN_ERROR: 'Password integrity check error',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PINS: 'Value did not enter',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SAME_PWD: 'Two of the password entered does not match.',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_LENGTH: '10 Please enter the password for more new certificate character',
            ServiceError_CHECK_COMPLEX_PIN_SAME_PWD: 'Password for the new certificate of the password and the old certificate will be the same.',
            ServiceError_CHECK_COMPLEX_PIN_GETPIN_FAILED: 'Failed to input value acquisition (keyboard security linkage error)',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PIN: 'The passwords you entered were in violation of the production rules.',
            ServiceError_CHECK_COMPLEX_PIN_UPDATE_ERROR: 'Please change the password for the update certificate to more than 10 characters in order to enhance the safety.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_CHAR: 'Include one or more of the numbers and special characters.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_NUMBER: 'Include one or more of the letters and special characters.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_SPECIAL: 'Include one or more of the numbers and letters.',
            ServiceError_CHECK_COMPLEX_PIN_NO_CHAR: 'Include one or more of the letters.',
            ServiceError_CHECK_COMPLEX_PIN_NO_NUMBER: 'Include one or more of the numbers.',
            ServiceError_CHECK_COMPLEX_PIN_NO_SPECIAL: 'Include one or more of the special character(\", \', \\, \| except)',
            ServiceError_CHECK_COMPLEX_PIN_PATTERN: "New password creation rules:\n1. The same character can not be used continuously for more than 4 times, such as 1111 or aaaa\n2. not for use fourth consecutive characters like 1234 or abcd\n3. not for use uses more than three times in two consecutive letters, such as ababab.\n4. Not for use more than once in three consecutive letters, such as abcabc\n",
            //ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_SET_LENGTH: 18015,
            ServiceError_CHECK_COMPLEX_PIN_INVALID_SET_LENGTH: "To set the number of digits of the password, please input it with 8 or more characters.",

            ServiceError_GET_TOKEN_INFO_NOT_HSM: "There is no security token.",
            ServiceError_GET_TOKEN_INFO_UNSUPPORTED_OS: "This operating system can not perform the following functions.",

            /* keyboardProtection */
            ServiceError_KEYBOARDPROTECTION_INVALID_ARGUMENT: "Invalid input.",
            ServiceError_KEYBOARDPROTECTION_CREATE_FAILED: "The keyboard security module operation was failed.",
            ServiceError_KEYBOARDPROTECTION_INIT_FAILED: "The keyboard security module initialization failed",
            ServiceError_KEYBOARDPROTECTION_GETPIN_FAILED: "Failed to obtain the input values (keyboard interlocking security error)",
            ServiceError_KEYBOARDPROTECTION_GETPUBLICKEY_FAILED: "Failed to retrieve Public Key from keyboard security module.",

            /* mobile usim */
            ServiceError_MOBILE_USIM_NOT_PRESENT: "Smart certification program was not installed.",
            ServiceError_MOBILE_USIM_INVALID_OPTIONS: "Smart authentication options is incorrect.",
            ServiceError_MOBILE_USIM_USER_CANCELED: "Smart authentication has been canceled.",

            /* mobisign */
            ServiceError_MOBISIGN_INVALID_OPTIONS: "MobiSign option is invalid.",
            ServiceError_MOBISIGN_NOT_INSTALLED: "MobiSign program is not installed.",
            ServiceError_MOBISIGN_NOT_LATEST_VERSION: "MobiSign version is wrong.",
            ServiceError_MOBISIGN_USER_CANCELED: "MobiSign has been canceled.",
            ServiceError_MOBISIGN_NOT_LOADED: "Failed to load MobiSign module.",

            /* relay */
            /* relay.raon */
            ServiceError_RELAY_RAON_NEED_CALL_GETREFNUM: "Failed to copy of the certificate (authentication number request is required).",
            ServiceError_RELAY_RAON_FAILED_TO_GETREFNUM: "Copy of the certificate to the failed (failed authentication number request).",
            ServiceError_RELAY_RAON_FAILED_NO_CERT: "Copy of the certificate to the failed (no sent certificate).",
            ServiceError_RELAY_RAON_FAILED_TO_GETCERT: "Copy of the certificate to the failed (please enter the authentication number to the transmitting terminal).",
            ServiceError_RELAY_RAON_FAILED_TO_EXPORTCERT: "Copy of the certificate to the failed (and failed to export the certificate).",
            ServiceError_RELAY_RAON_FAILED_AUTHORIZATION_FAILE: "t failed to copy of the certificate (no authentication numbers match).",
            ServiceError_RELAY_RAON_NOT_SUPPORTED_TOKEN: "Copy of the certificate to the failed (it is a token that is not supported).",
            // 금보원 인증서 탈취 취약점 관련 수정사항
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_INPUT_CANCELED: "Password input was canceled by the user.",
            ServiceError_RELAY_RAON_CERTIFICATE_INVALID_CERTINDENTIFIER: "The certificate could not be found.",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED: "Certificate copy failed (please check your password).",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "Certificate copy failed (please check your password).",
            ServiceError_RELAY_RAON_TOKEN_FUNCTION_NOT_SUPPORTED: "Certificate copy failed (unsupported medium).",
            ServiceError_RELAY_RAON_IVALID_REF_NUM: "Certificate copy failed (authorization number verification failed).",

            /* certificateSynchronize */
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_CERTIDNTIFIER: "Input value is wrong.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_ARGUMENT: "Input value is wrong.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INPUT_CANCELED: "Password input has been approved by the user.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED: "Password change failed.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_SIGN_PWD_FAILED: "Password change failed (please check valid password)",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_KM_PWD_FAILED: "Password change failed (please check password for key distribution)",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_FIND_KMCERTIFICATE: "The key distribution certificate does not exist.",

            /* Koscom Envelop */
            ServiceError_KOSCOM_ENVELOP_FAILED: "Koscom digital envelope, encryption failed.",
            ServiceError_KOSCOM_ENVELOP_INVALID_CERT_FAILED: "The certificate is not valid.",
            ServiceError_KOSCOM_ENVELOP_INVALID_PLAIN_FAILED: "The original text is invalid.",
            ServiceError_KOSCOM_ENVELOP_EXTRACT_KEY_FAILED: "Key extraction failed.",
            ServiceError_KOSCOM_ENVELOP_BASE64_ENCODE_FAILED: "Base64 encoding failed.",

            /* Koscom Develop */
            ServiceError_KOSCOM_DEVELOP_FAILED: "Koscom digital envelope decryption failed.",
            ServiceError_KOSCOM_DEVELOP_INVALID_ENVELOPDATA_FAILED: "The digital envelope message is not valid.",
            ServiceError_KOSCOM_DEVELOP_INVALID_INPUT_FAILED: "The certificate used for the digital envelope is not entered.",
            ServiceError_KOSCOM_DEVELOP_FAILED_INPUT_CANCELED: "Input canceled.",
            ServiceError_KOSCOM_DEVELOP_FAILED_PWD_INCORRECT: "The password was wrong.",
            ServiceError_KOSCOM_DEVELOP_FAILED_PIN_INCORRECT: "The pin number was wrong.",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED: "I can not read the file used for electronic envelope decryption.",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ: "I can not read the file used for electronic envelope decryption.",

            /* Koscom Encrypt */
            ServiceError_KOSCOM_ENCRYPT_FAILED: "Encrypt Failed.",
            ServiceError_KOSCOM_ENCRYPT_INVALID_PLAIN: "The input value is invalid.（plain）",
            ServiceError_KOSCOM_ENCRYPT_INVALID_SESSIONKEY: "The input value is invalid. (sessionkey)",
            ServiceError_KOSCOM_ENCRYPT_ENCODING_FAILED: "Base64 encoding failed.",
            ServiceError_KOSCOM_ENCRYPT_SESSIONID_FAILED: "セッションID取得に失敗しました。",

            /* Koscom Decrypt */
            ServiceError_KOSCOM_DECRYPT_FAILED: "Decrypt Failed",
            ServiceError_KOSCOM_DECRYPT_INVALID_ENCRYPTDATA: "The input value is invalid. (encryptData).",
            ServiceError_KOSCOM_DECRYPT_INVALID_SESSIONKEY: "The input value is invalid. (sessionkey)",
            ServiceError_KOSCOM_DECRYPT_ENCODING_FAILED: "Session ID acquisition failed.",

            /* SetPFXNPKIFile */
            ServiceError_SETPFXNPKIFILE_FAILED: "SetPFXNPKIFile 失敗しました。",
            ServiceError_SETPFXNPKIFILE_UNKNOWN_FILE: "Unknown file path",
            ServiceError_SETPFXNPKIFILE_INVALID_FILEPATH: "Invalid file path.",
            ServiceError_SETPFXNPKIFILE_INVALID_TYPE: "Invalid Type",
            ServiceError_SETPFXNPKIFILE_NOT_FIND_FILE: "The file of that path does not exist.",
            ServiceError_SETPFXNPKIFILE_INVALID_PWD: "The password was wrong.",
            ServiceError_SETPFXNPKIFILE_PFX_PKCS8_DECODE_FAIL: "PKCS8 decoding failed.",
            ServiceError_SETPFXNPKIFILE_DER_NOT_FIND_SIGNPRIKEY_FILE: "I can not find the signPri.key file on that route.",
            ServiceError_SETPFXNPKIFILE_PFX_DECODE_FAILED: "PFX Decode Failed (The password was wrong.)",
            ServiceError_SETPFXNPKIFILE_DER_DECODE_FAILED: "Der (X509) Decode Failed.",

            /* USBKey */
            ServiceError_USBKEYTOKEN_WRITE_BUFFER_FAILED: "The storage area of ??the selected save token is insufficient. (3.5 KBytes required)",

            /* KoscomFileEnvelop */
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED                                     : "Digital envelope, encryption failed.",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_CERT_FAILED                        : "The certificate is not valid.",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_PLAIN_FAILED                       : "The original text is invalid.",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_DECODE_FAILED                       : "Base64 decoding failed.",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_ENCODE_FAILED                       : "Base64 encoding failed.",
            ServiceError_KOSCOM_FILE_ENVELOP_NOT_SUPPORTED                              : "Certificate importing is not yet supported.",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE_ACCESS_DENIED            : "Failed to read file due to authority problem.",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE                          : "Failed to write the file.",

            /* KoscomFileDevelop */
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED                                     : "Digital envelope decoding failed.",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_ENVELOPDATA_FAILED                 : "The digital envelope message is not valid.",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_INPUT_FAILED                       : "The input value is not valid.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_INPUT_CANCELED                      : "Input canceled.。",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PWD_INCORRECT                       : "The password was wrong.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PIN_INCORRECT                       : "The PIN number was wrong.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED             : "Failed to read file due to authority problem.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ                           : "Failed to read the file.",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_DECODE_FAILED                       : "Base64 decoding failed.",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_ENCODE_FAILED                       : "Base64 encoding failed.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_WRITE                          : "Failed to read the file.",
            ServiceError_KOSCOM_FILE_DEVELOP_INPUT_CANCELED                             : "Input of PIN number was canceled.",
            ServiceError_KOSCOM_FILE_DEVELOP_PWD_INPUT_CANCELED                         : "Password input canceled.",
            ServiceError_KOSCOM_FILE_DEVELOP_CERTIFICATE_INVALID_CERTINDENTIFIER        : "The input value is invalid.",

            /* GetCertificateListWithDn */
            ServiceError_GETCERTIFICATELIST_WITH_DN_FAILED                              : "Certificate import failed.",
            ServiceError_GETCERTIFICATELIST_WITH_DN_INVALID_INPUT_FAILED                : "The input value is not valid.",
            ServiceError_GETCERTIFICATELIST_WITH_DN_NO_SEARCH_CERTIFIATE_FAILED         : "I can not find the certificate corresponding to the request.",

            /* HASH Signature Error */
            ServiceError_HASH_LENGTH_ERROR: " Hash value is invalid. ( not 32 byte ) ",

            /* SCRIPT */
            ScriptError_SETMATCHEDCONTEXT_NOT_CERTIFICATE: "There is no certificate that has been requested.",
            ScriptError_SIGNDATAB64_NOT_PLAINTEXT: "Input parameter is null.",
            ScriptError_CERTSERVICESETUP_VERSION_MODULE: "Version of the installed modules is low. Please install the latest version.",
            ScriptError_CERTSERVICESETUP_VERSION_DLL: "Version of the installed DLL will be low . Please install the latest version.",
            ScriptError_UCPIDREQUSER_NOT_USERAGREEMENT: "Input parameter is null. （userAgreement）",
            ScriptError_UCPIDREQUSER_NOT_MODE: "Input parameter is invalid. （mode）",
            ScriptError_PFX_MAKESIGNATURE_ERORR: "There was an error in an electronic signature.",
            ScriptError_ISSUE_BILL_SAFARINOTSUPPORT: '[After changing Safari (Safari) browser part of the setting of "Preferences> Personal Information> cookies" to "always allow", please complete the official certificate issued.]',
            ScriptError_UPDATE_BILL_SAFARINOTSUPPORT: '[After changing the portion of the configuration of Safari (Safari) browser in the "Preferences> Personal Information> cookies" to "always allow", please complete the update of the official certificate.]',
            ScriptError_ENVELOP_INVALID_VALUE: 'The input parameter is NULL.',
            ScriptError_DEVELOP_INVALID_VALUE: 'The input parameter is NULL.',
            ScriptError_DEVELOP_NOT_CERTIFICATE: 'There is no matching certificate.',
            ScriptError_ENCRYPTDATA_INVALID_VALUE: 'The input parameter is NULL.',
            ScriptError_DECRYPTDATA_INVALID_VALUE: 'The input parameter is NULL.',
            ScriptError_KOSCOM_ENCRYPT_INVALID_VALUE: 'The input parameter is NULL.',
            ScriptError_KOSCOM_DECRYPT_INVALID_VALUE: 'The input parameter is NULL.'
        },
        {
            ServiceError_UNKNOWN: "未登?エラ?コ?ド",

            /* common */
            ServiceError_INVALID_INPUT: "入力した値は正しくありません。",
            ServiceError_BASE64_ENCODE_FAILED: "Base64 Encode失敗しました。",
            ServiceError_BASE64_DECODE_FAILED: "Base64 Decode失敗しました。",

            /* token */
            ServiceError_TOKEN_NOT_INITIALIZED: "セキュリティディスクが初期化されませんでした。",
            ServiceError_TOKEN_NOT_FOUND: "セキュリティディスクが存在しません。",
            ServiceError_TOKEN_BAD: "セキュリティディスクの?態が異常です。初期化してください。",
            ServiceError_TOKEN_UBIKEY_NOT_INSTALLED: "Ubikeyがインスト?ルされていません。プログラムをインスト?ルしてください。",
            ServiceError_TOKEN_UBIKEY_NOT_LATEST_VERSION: "Ubikeyは最新バ?ジョンではありません。プログラムを更新してください。",
            ServiceError_TOKEN_UBIKEY_INVALID_OPTIONS: "Ubikeyオプションの値が無?です。",
            ServiceError_TOKEN_NOT_RECOGNIZED: "許可されたト?クンはありません。",
            ServiceError_TOKEN_FUNCTION_NOT_SUPPORTED: "ト?クンでその機能をサポ?トしていません。",

            ServiceError_SSLCONFIG_SERVICE_SSL_INIT_FAILED: "SSLサ?ビスの初期化に失敗しました。",

            /* service common */
            ServiceError_SERVICE_REJECTED: "MangoWireメッセ?ジが不正のため、サ?ビスを中?します。",
            ServiceError_SESSIONID_NOT_EXIST: "セッションの有?期間が切れたか、または無?です。再接?してください。",
            ServiceError_SESSION_IS_USING: "他の場所でセッションを使用中です。再接?してください。",
            ServiceError_OPERATION_NOT_SUPPORTED: "サポ?トできない機能です。",
            ServiceError_OPERATION_NOT_EXPECTED: "現在、この機能を?行することはできません。",
            ServiceError_INVALID_INPUT_TOKENID: "ト?クン識別者が正しくありません。",
            ServiceError_MEMORY_ALLOCATION_FAILED: "メモリの割り?てに失敗しました。",

            ServiceError_NO_SSL_CERTIFICATE: "登?されたSSLが存在しません。",
            ServiceError_NOT_SUPPORTED_LANGUAGE: "サポ?トしている言語がありません。",

            /* services */
            ServiceError_CERTIFICATE_NOT_FOUND: "認?書が存在しません。",

            /* delete service */
            ServiceError_DELETE_CERTIFICATE_FAILED: "認?書の削除に失敗しました。（その他のエラ?）",
            ServiceError_DELETE_CERTIFICATE_INVALID_CERTINDENTIFIER: "入力した値は正しくありません。",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PROGRAM_FILES_PATH_DELETE_WARNING: "プログラムファイルに保存された認?書は削除できません。",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PASSWORD_INCORRECT: "認?書の削除に失敗しました。（パスワ?ドを確認してください。）",
            ServiceError_DELETE_PIN_INCORRECT: "認?書の削除に失敗しました（PIN番?を確認してください）。",
            ServiceError_DELETE_PIN_FAILED_INPUT_CANCELED: "認?書の削除に失敗しました（PIN番?の入力をキャンセルしました）。",
            ServiceError_DELETE_PWD_FAILED_INPUT_CANCELED: "認?書の削除に失敗しました（パスワ?ドの入力をキャンセルしました）。",

            /* encrypt vid random */
            ServiceError_ENCRYPT_VIDRANDOM_INVALID_CERTINDENTIFIER: "入力した値は正しくありません。",//"Invalid arugment(keyIdentifier or recipientCertificate)");
            ServiceError_ENCRYPT_VIDRANDOM_FAILED: "EncryptVIDRandom failed.",
            ServiceError_ENCRYPT_VIDRANDOM_TOKEN_NOT_INITIALIZE: "セキュリティディスクが初期化されませんでした。",

            /* generate key pair */
            ServiceError_GENERATE_KEYPAIR_INVALID_ARGUMENT: "入力した値は正しくありません。",//"Invalid arugment(algorithm or modularLength)");
            ServiceError_GENERATE_KEYPAIR_FAILED: "Gen key fail",
            ServiceError_GENERATE_KEYPAIR_TOKEN_NOT_INITIALIZE: "セキュリティディスクが初期化されませんでした。",

            ServiceError_REPLAY_NOT_MATCHED_MESSAGE_NUMBER: "現在のペ?ジを更新してください。（M）",
            ServiceError_REPLAY_CANNOT_REQUEST_WITHOUT_TIC_MESSAGE: "現在のペ?ジを更新してください。（S）",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_NOT_MATCHED_KEY_PAIR: "保存された?明書の鍵ペアが異なります。",
            ServiceError_GENERATE_SIGNATURE_NOT_EXPECTED_KEYIDENTIFIER: "not expected keyIdentifier",
            ServiceError_GENERATE_SIGNATURE_FAILED: "電子署名に失敗しました。",
            ServiceError_GENERATE_SIGNATURE_TOKEN_NOT_INITAILIZE: "セキュリティディスクが初期化されませんでした。",
            ServiceError_GENERATE_SIGNATURE_FAILED_PWD_INCORRECT: "認?書のパスワ?ド入力が間違っています。",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_LOCKED: "電子署名に失敗しました。(?置がロックされました。)",
            ServiceError_GENERATE_SIGNATURE_FAILED_SGPKCS8_PRIVATEKEYINFO_DECODE_FAILED: "電子署名に失敗しました。(パスワ?ドを確認してください。)",
            ServiceError_GENERATE_SIGNATURE_ENCRYPT_VIDRANDOM_FAILED: "電子署名に失敗しました。(シリアル番?の生成に失敗)", //"encrypt VID Random failed(0x%x, false)"
            ServiceError_GENERATE_SIGNATURE_INVALID_ARGUMENT: "入力した値は正しくありません。",//"Invalid input (plain, keyIdentifier, false)",
            ServiceError_GENERATE_SIGNATURE_CANCELED: "リクエストドニ?作業がユ?ザ?によって取り消されました。",
            ServiceError_GENERATE_SIGNATURE_KSTOKEN_PIN_INCORRECT: "PIN番?の入力が間違っています。",
            ServiceError_GENERATE_SIGNATURE_KOSCOM_SIGN_MUST_HAVE_CERTIFICATE: "Koscom電子署名認?書が必要になります。",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_INCORRECT: "電子署名に失敗しました。(パスワ?ドを確認してください。).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ERROR: "ファイルの?み取りに失敗しました（パスを確認してください）。",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ERROR: "ファイルの書き?みに失敗しました（パスを確認してください）。",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ACCESS_DENIED: "?限の問題により、ファイルの?み取りに失敗しました。",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ACCESS_DENIED: "?限の問題により、ファイルの書き?みに失敗しました。",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_MEMORY_ALLOCATION: "メモリが不足して電子署名に失敗しました。",

            /* get certificate list */
            ServiceError_GET_CERTIFICATE_LIST_FAILED: "Function Failed",
            ServiceError_GET_CERTIFICATE_LIST_TOKEN_NOT_INITIALIZE: "セキュリティディスクが初期化されませんでした。",
            ServiceError_GET_CERTIFICATE_LIST_UBIKEY_NOT_INITIALIZE: "UBIKeyサ?ビスが初期化されていません。",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PIN_INCORRECT: "PIN番?を確認してください。",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPIN_CANCELED: "PIN入力を取り消しました。",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPWD_CANCELED: "パスワ?ドの入力をキャンセルしました。",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PWD_INCORRECT: "パスワ?ドを確認してください。",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_UBIKEY_INPUT_CANCELED: "Ubikeyサ?ビスをキャンセルしました。",

            /* get certificate */
            ServiceError_GET_CERTIFICATE_INVALID_ARGUMENT: "入力した値は正しくありません。",//"certIdentifier"
            ServiceError_GET_CERTIFICATE_FAILED: "認?書のインポ?トに失敗しました。",
            ServiceError_GET_CERTIFICATE_NOT_FOUND: "認?書を見つかりません。",
            ServiceError_GET_CERTIFICATE_TOKEN_NOT_INITIALIZE: "セキュリティディスクが初期化されませんでした。",

            /* setMatchedContext */
            ServiceError_SETMATCHED_CONTEXT_INPUT_CANCELED: "パスワ?ドの入力をキャンセルしました。",
            ServiceError_SETMATCHED_CONTEXT_INVALID_CUSTOM_SID: "入力したセッションIDが正しくありません。",
            ServiceError_SETMATCHED_CONTEXT_CUSTOM_SID_IS_NULL: "セッションIDでNULLを入力しました。",
            ServiceError_SETMATCHED_CONTEXT_CREATE_SESSION_UNIT_FAILED: "セッションの生成に失敗しました。",

            /* get ca certificate */
            ServiceError_GET_CA_CERTIFICATE_INVALID_ARGUMENT: "入力した値は正しくありません。",

            /* push certificate */
            ServiceError_PUSH_CERTIFICATE_INVALID_ARGUMENT: "入力した値は正しくありません。",//"Invalid arugment(keyIdentifier or certificate, false)",
            ServiceError_PUSH_CERTIFICATE_NOT_EXPECTED_KEYIDENTIFIER: "not expected keyIdentifier",
            ServiceError_PUSH_CERTIFICATE_FAILED: "PushCertificate failed.",
            ServiceError_PUSH_CERTIFICATE_TOKEN_NOT_INITIALIZE: "セキュリティディスクが初期化されませんでした。",

            /* verify service */
            ServiceError_VERIFY_CERTIFICATE_FAILED: "認?書パスワ?ドの確認に失敗しました。(その他のエラ?)",
            ServiceError_VERIFY_CERTIFICATE_INVALID_CERTINDENTIFIER: "入力した値は正しくありません。",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_INCORRECT: "電子署名に失敗しました。(パスワ?ドを確認してください。)",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_INCORRECT: "電子署名に失敗しました。(パスワ?ドを確認してください。)",
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_LOCKED: "電子署名に失敗しました。(?置がロックされました。)",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_LOCKED: "電子署名に失敗しました。(?置がロックされました。)",

            /* generate keypair */
            ServiceError_GENERATE_KEYPAIR_CANCELLED: "秘密鍵?公開鍵の生成がユ?ザによってキャンセルされました。",
            ServiceError_GENERATE_KEYPAIR_PIN_INCORRECT: "パスワ?ドが正しくありません。秘密鍵?公開鍵の生成に失敗しました。",
            ServiceError_GENERATE_KEYPAIR_PIN_LOCKED: "パスワ?ドがロックされて、秘密鍵?公開鍵の生成に失敗しました。",
            ServiceError_GENERATE_KEYPAIR_PWD_INCORRECT: "パスワ?ドが間違って鍵ペアの生成に失敗しました。",

            /* cmp common*/
            ServiceError_CMP_MEMORY_ALLOCATION_FAILED: "メモリの割り?てに失敗しました。",
            ServiceError_CMP_SERVER_CONNECT_FAILED: "CAサ?バ?との通信に失敗しました。",

            /* issue / recover */
            ServiceError_CMP_ISSUE_INVALID_ARGUMENT: "認?書?給時に入力した値は正しくありません。",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_CA: "サポ?トできない認?機?コ?ドが入力されました。",
            ServiceError_CMP_ISSUE_INPUTPIN_CANCELED: "パスワ?ドの入力をキャンセルしました。",
            ServiceError_CMP_ISSUE_PKCS5_ENCRYPT_FAILED: "PKCS#5 暗?化に失敗しました。",
            ServiceError_CMP_ISSUE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "PKCS#8 メッセ?ジの生成に失敗しました。",
            ServiceError_CMP_ISSUE_SAVE_CERTIFICATE_FAILED: "認?書の保存に失敗しました。",
            ServiceError_CMP_ISSUE_IMPORT_INIT_FAILED: "?行された認?書の保存に失敗しました。（initialize失敗）",
            ServiceError_CMP_ISSUE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "?行された電子署名用認?書の保存に失敗しました。",
            ServiceError_CMP_ISSUE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "?行された鍵配布用認?書の保存に失敗しました。",
            ServiceError_CMP_ISSUE_IMPORT_CA_PUB_IMPORT_FAILED: "CAの公開鍵の保存に失敗しました。",
            ServiceError_CMP_ISSUE_IMPORT_FINAL_FAILED: "?行された認?書の保存に失敗しました。（finalize失敗）",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_BILL: "有料?行はサポ?トされていません。",
            ServiceError_CMP_ISSUE_LOW_SPEC_ICCARD: "IC Cardがサポ?トしていない認?書です。",
            ServiceError_CMP_ISSUE_NOT_USABLE_TOKNE_FAILED: "選?したディスクに?明書を?行することはできません。",

            ServiceError_CMP_UPDATE_INVALID_ARGUMENT: "認?書更新時に入力した値は正しくありません。",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_CA: "サポ?トできない認?機?コ?ドが入力されました。",
            ServiceError_CMP_UPDATE_INPUTPIN_CANCELED: "パスワ?ドの入力をキャンセルしました。",
            ServiceError_CMP_UPDATE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "更新する認?書のインポ?トに失敗しました。",
            ServiceError_CMP_UPDATE_ADD_OLD_CERTIFICATE_FAILED: "更新する認?書の追加に失敗しました。",
            ServiceError_CMP_UPDATE_ADD_OLD_KEY_FAILED: "更新するキ?ファイルの追加に失敗しました。",
            ServiceError_CMP_UPDATE_PKCS5_ENCRYPT_FAILED: "PKCS#5 暗?化に失敗しました。",
            ServiceError_CMP_UPDATE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "PKCS#8 メッセ?ジの生成に失敗しました。",
            ServiceError_CMP_UPDATE_SAVE_CERTIFICATE_FAILED: "認?書の保存に失敗しました。",
            ServiceError_CMP_UPDATE_INVALID_PASSWORD: "古い認?書のパスワ?ドを確認してください。",
            ServiceError_CMP_UPDATE_IMPORT_INIT_FAILED: "?行された認?書の保存に失敗しました。（initialize失敗）",
            ServiceError_CMP_UPDATE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "?行された電子署名用認?書の保存に失敗しました。",
            ServiceError_CMP_UPDATE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "?行された鍵配布用認?書の保存に失敗しました。",
            ServiceError_CMP_UPDATE_IMPORT_CA_PUB_IMPORT_FAILED: "CAの公開鍵の保存に失敗しました。",
            ServiceError_CMP_UPDATE_IMPORT_FINAL_FAILED: "?行された認?書の保存に失敗しました。（initialize失敗）",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_BILL: "有料?行はサポ?トされていません。",
            ServiceError_CMP_UPDATE_NOT_UPDATE_TIME: "認?書を更新することができる期間はありません。認?書の更新は有?期限が切れ、1ヶ月前から可能です。",
            ServiceError_CMP_UPDATE_INVALID_PIN: "PIN番?を確認してください。",
            ServiceError_CMP_UPDATE_NOT_USABLE_TOKNE_FAILED: "選?したディスクに?明書を?行することはできません。",

            ServiceError_CMP_REVOKE_INVALID_ARGUMENT: "認?書?棄に入力した値は正しくありません。",
            ServiceError_CMP_REVOKE_NOT_SUPPORTED_CA: "サポ?トできない認?機?コ?ドが入力されました。",
            ServiceError_CMP_REVOKE_INPUTPIN_CANCELED: "パスワ?ドの入力をキャンセルしました。",
            ServiceError_CMP_REVOKE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "?棄する認?書のインポ?トに失敗しました。",
            ServiceError_CMP_REVOKE_ADD_OLD_CERTIFICATE_FAILED: "?棄する認?書の追加に失敗しました。",
            ServiceError_CMP_REVOKE_ADD_OLD_KEY_FAILED: "?棄するキ?ファイルの追加に失敗しました。",
            ServiceError_CMP_REVOKE_INVALID_PASSWORD: "パスワ?ドを確認してください。",
            ServiceError_CMP_REVOKE_INVALID_PIN: "PIN番?を確認してください。",
            ServiceError_CMP_REVOKE_PIN_LOCKED: "PINがロックされています。",

            /* get PCIdentity */
            ServiceError_GET_PCIDENTITY_FAILED_MEMORY_ALLOCATION_FAILED: "メモリの割り?てに失敗しました。",
            ServiceError_GET_PCIDENTITY_FAILED_INVALID_WINDOWS: "PC識別値をインポ?トできませんでした。(Windows以外の他のOSは、今後サポ?トします。)",
            ServiceError_GET_PCIDENTITY_FAILED: "PC識別値をインポ?トできませんでした。(その他のエラ?)",

            /* certificate manager, changePin */
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERTINDENTIFIER: "入力した値は正しくありません。",
            ServiceError_CHANGE_PIN_FAILED_INPUT_CANCELED: "パスワ?ドの入力をキャンセルしました。",
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERT_TYPE: "パスワ?ドの?更に失敗しました。(認?書の形式に問題が?生しました。)",
            ServiceError_CHANGE_PIN_FAILED_PIN_INCORRECT: "パスワ?ドの?更に失敗しました。(パスワ?ドを確認してください。）",
            ServiceError_CHANGE_PIN_FAILED_FILE_WRITE_ERROR: "パスワ?ドの?更に失敗しました。(認?書を保存する時に問題が?生しました。）",
            ServiceError_CHANGE_PIN_FAILED: "パスワ?ドの?更に失敗しました。(その他のエラ?）",
            ServiceError_CHANGE_PIN_FAILED_PROGRAM_FILES_PATH_WARNING: "Program filesに格納された?明書のパスワ?ドは?更できません。",
            ServiceError_CHANGE_PIN_FAILED_NOT_MATCHED_PWD: "署名用?明書のパスワ?ドと鍵配布用の?明書のパスワ?ドが一致しません。",

            /* certificate manager, export certificate */
            ServiceError_EXPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "パスワ?ドの入力をキャンセルしました。",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "認?書のエクスポ?トをキャンセルしました。",
            ServiceError_EXPORT_CERTIFICATE_FAILED_INVALID_CERT_TYPE: "認?書のエクスポ?トに失敗しました。(認?書の形式に問題が?生しました。)",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SEARCH_CERTIFICATE_FAILED: "認?書のエクスポ?トに失敗しました。(認?書の?索に失敗しました。)",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PIN_INCORRECT: "認?書のエクスポ?トに失敗しました。(パスワ?ドを確認してください。)",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PWD_INCORRECT: "認?書のエクスポ?トに失敗しました（パスワ?ドを確認してください）。",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ADD_CERTIFICATELIST_FAILED: "認?書のエクスポ?トに失敗しました。(add certificate fail)",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ENCODE_PFX_FAILED: "認?書のエクスポ?トに失敗しました。(encode pfx fail)",
            ServiceError_EXPORT_CERTIFICATE_FAILED: "認?書のエクスポ?トに失敗しました。(その他のエラ?)",

            /* certificate manager, import certificate */
            ServiceError_IMPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "認?書のインポ?トに失敗しました。(認?書選?をキャンセルしました。)",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "認?書のインポ?トに失敗しました。(パスワ?ドの入力をキャンセルしました。)",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX: "認?書のインポ?トに失敗しました。(PFX形式の認?書ではありません。)",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX_PASSWORD: "認?書のインポ?トに失敗しました。(パスワ?ドを確認してください。)",
            ServiceError_IMPORT_CERTIFICATE_FAILED: "認?書のインポ?トに失敗しました。(その他のエラ?)",
            ServiceError_IMPORT_CERTIFICATE_NOT_AFTER_CERTIFICATE_FAILED: "最新の?明書がすでに保存されています。",

            /* certificate manager, verify pin */
            ServiceError_VERIFY_PIN_FAILED_INVALID_CERTINDENTIFIER: "パスワ?ドの確認に失敗しました（入力値が間違っていた）。",
            ServiceError_VERIFY_PIN_FAILED_INPUT_CANCELED: "パスワ?ドの確認に失敗しました（入力をキャンセルしました）。",
            ServiceError_VERIFY_PIN_FAILED: "パスワ?ドの確認に失敗しました（パスワ?ドを確認してください）。",
            ServiceError_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "パスワ?ドの確認に失敗しました（署名用?明書と暗?化用の?明書のパスワ?ドが一致しません）。",

            /* certificate manager, verify pin */
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_CERTINDENTIFIER: "入力した値は正しくありません。",
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_TOKENINDENTIFIER: "使用できない媒?です。",
            ServiceError_CHANGE_STORAGE_FAILED_INPUT_CANCELED: "認?書の保存媒?の?更に失敗しました。(パスワ?ドの入力をキャンセルしました。)",
            ServiceError_CHANGE_STORAGE_FAILED_CERTIFICATE_AND_KEY_FAILED: "認?書の保存媒?の?更に失敗しました。",
            ServiceError_CHANGE_STORAGE_FAILED_PIN_INCORRECT: "認?書の保存媒?の?更に失敗しました。(パスワ?ドを確認してください。)",
            ServiceError_CHANGE_STORAGE_FAILED_PWD_INCORRECT: "認?書の保存媒?の?更に失敗しました（パスワ?ドを確認してください）。",
            ServiceError_CHANGE_STORAGE_SAME_TOKEN: "?更する認?書の保存媒?が同じです。",
            ServiceError_CHANGE_STORAGE_FAILED: "認?書の保存媒?の?更に失敗しました。(その他のエラ?)",
            ServiceError_CHANGE_STORAGE_OVERWRITE_CANCELED: "?明書記憶媒?の?更をキャンセルしました。",
            ServiceError_CHANGE_STORAGE_FAILED_AFTER_CERTIFICATE: "最新の?明書がすでに保存されています。",

            /* validateCertificate */
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTINDENTIFIER: "入力した値は正しくありません。",
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTIFICATE: "認?書の形式が正しくありません。",
            ServiceError_VALIDATE_CERTIFICATE_CRL_FAILED: "認?書の??に失敗しました。",
            ServiceError_VALIDATE_CERTIFICATE_FAILED: "認?書の有?性??に失敗しました。(その他のエラ?)",

            /* session manager */
            ServiceError_SESSION_MANAGER_SESSION_ID_IS_NULL: "セッションIDが存在しません。セッションの保存に失敗しました。",

            /* validate certificate*/

            /* tray */
            ServiceError_OPERATE_TRAY_INVALID_TRAY_VENDOR: "トレイリストが正しくありません。",
            ServiceError_OPERATE_TRAY_INVALID_TRAY_OPERATE: "トレイの動作が有?ではありません。",

            /* SignVerify */
            ServiceError_VERIFY_SIGNATURE_INVALID_ARGUMENT: "入力した値は正しくありません。",
            ServiceError_VERIFY_SIGNATURE_PLAIN_IS_NULL: "元電子文書が必要な電子署名です。",
            ServiceError_VERIFY_SIGNATURE_UNSUPPORT_SIGNTYPE: "まだサポ?トされていない電子署名です。",
            ServiceError_VERIFY_SIGNATURE_INVALID_X509_TYPE: "X509認?書の形態ではありません。",
            ServiceError_VERIFY_SIGNATURE_INVALID_PUBLIC_KEY_TYPE: "公開鍵の形態ではありません。",
            ServiceError_VERIFY_SIGNATURE_VERIFY_FAILED: "署名??に失敗しました。",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_FAILED: "ファイルの?み取りに失敗しました。",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_FAILED: "ファイルの書き?みに失敗しました。",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_ACCESS_DENIED: "?限の問題により、ファイルの?み取りに失敗しました。",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_ACCESS_DENIED: "?限の問題により、ファイルの書き?みに失敗しました。",
            ServiceError_VERIFY_SIGNATURE_FILE_MEMORY_ALLOCATE_FAILED: "メモリが不足して署名に失敗しました。",

            /* VIDVerify */
            ServiceError_VERIFY_VID_INVALID_CERTID: "入力値が間違っています。",
            ServiceError_VERIFY_VID_INVALID_KEYID: "入力値が間違っています。",
            ServiceError_VERIFY_VID_INVALID_IDN: "入力値が間違っています。",
            ServiceError_VERIFY_VID_TOKEN_NOT_INITIALIZE: "セキュリティディスクが初期化されていませんでした。",
            ServiceError_VERIFY_VID_NOT_FOUND: "入力値が間違っています。",
            ServiceError_VERIFY_VID_NOT_INVALID_X509_TYPE: "X509認?書の形がありません。",
            ServiceError_VERIFY_VID_GET_RANDOM_FAILED: "randomを持ってくるのに失敗しました。",
            ServiceError_VERIFY_VID_INVALID_PWD: "randomを持ってくるのに失敗しました（パスワ?ドを確認してください）。",
            ServiceError_VERIFY_VID_VERIFY_FAILED: "VID??に失敗しました。",

            /* cipher, hash */
            ServiceError_GET_HASH_FAILED_INVALID_INPUT: "message digestを失敗しました（入力値が間違っていた）。",
            ServiceError_GET_HASH_FAILED_INVALID_ALGORITHM: "message digestを失敗しました（サポ?トしていないアルゴリズムです）。",
            ServiceError_GET_HASH_FAILED_UNSUPPORTED_DIGEST_ALGORITHM: "message digestを失敗しました（サポ?トしていないアルゴリズムです）。",
            ServiceError_GET_HASH_FAILED_FILE_NOT_FOUND: "message digestを失敗しました（ファイルが見つかりません）。",
            ServiceError_GET_HASH_FAILED_FILE_READ_FAILED: "message digestを失敗しました（ファイルを?むにエラ?が?生しました）。",
            ServiceError_GET_HASH_FAILED: "message digestを失敗しました（その他のエラ?）。",

            /* cipher, encrypt */
            ServiceError_ENCRYPT_FAILED_INVALID_INPUT: "message暗?化に失敗しました(入力値が間違っています)。",
            ServiceError_ENCRYPT_FAILED_KEY_IS_NULL: "message暗?化に失敗しました(keyの値がありません)。",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_KEY_LEN: "message暗?化に失敗しました(keyの長さが間違っています)。",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_ALGORITHM: "message暗?化に失敗しました(サポ?トしていない暗?化アルゴリズムです)。",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_MODE: "message暗?化に失敗しました(サポ?トしていない動作モ?ドです)。",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_PADDING: "message暗?化に失敗しました(サポ?トしていないパディングです)。",
            ServiceError_ENCRYPT_FAILED_HD_IS_NULL: "message暗?化に失敗しました（14406）。",
            ServiceError_ENCRYPT_FAILED_INIT_KEY: "message暗?化に失敗しました（14407）。",
            ServiceError_ENCRYPT_FAILED_MAKE_KEY: "message暗?化に失敗しました（14408）",
            ServiceError_ENCRYPT_FAILED: "message暗?化に失敗しました（14409）。",

            /* cipher, decrypt */
            ServiceError_DECRYPT_FAILED_INVALID_INPUT: "message復?化に失敗しました(入力値が間違っています)。",
            ServiceError_DECRYPT_FAILED_KEY_IS_NULL: "message復?化に失敗しました(keyの値がありません)。",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_KEY_LEN: "message復?化に失敗しました(keyの長さが間違っています)。",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_ALGORITHM: "message復?化に失敗しました(サポ?トしていない暗?化アルゴリズムです)。",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_MODE: "message復?化に失敗しました(サポ?トしていない動作モ?ドです)。",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_PADDING: "message復?化に失敗しました(サポ?トしていないパディングです)。",
            ServiceError_DECRYPT_FAILED_HD_IS_NULL: "message復?化に失敗しました（14506）。",
            ServiceError_DECRYPT_FAILED_MAKE_KEY: "message復?化に失敗しました（14507）。",
            ServiceError_DECRYPT_FAILED_NOT_MATCHED_DOMAIN: "message復?化に失敗しました（14508）。",
            ServiceError_DECRYPT_FAILED: "message復?化に失敗しました(14509)。",

            /* envelope */
            ServiceError_ENVELOPE_FAILED_INVALID_INPUT: "電子封筒を失敗しました(入力値が間違っています)。",
            ServiceError_ENVELOPE_FAILED_INVALID_X509_CERT: "電子封筒を失敗しました(入力された認?書がx509はありません)。",
            ServiceError_ENVELOPE_FAILED: "電子封筒を失敗しました(その他のエラ?)。",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ERROR: "ファイルの?み取りに失敗しました（パスを確認してください）。",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ERROR: "ファイルの書き?みに失敗しました（パスを確認してください）。",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "?限の問題により、ファイルの?み取りに失敗しました。",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "?限の問題により、ファイルの書き?みに失敗しました。",

            /* deenvelope */
            ServiceError_DEENVELOPE_FAILED_INVALID_INPUT: "子封筒復?化に失敗しました(入力値が間違っています)。",
            ServiceError_DEENVELOPE_FAILED_INPUT_CANCELED: "子封筒復?化に失敗しました(入力をキャンセルしました)。",
            ServiceError_DEENVELOPE_FAILED_PIN_INCORRECT: "子封筒復?化に失敗しました(PIN番?を確認してください)。",
            ServiceError_DEENVELOPE_FAILED_PWD_INCORRECT: "子封筒復?化に失敗しました(パスワ?ドをキャンセルしました)。",
            ServiceError_DEENVELOPE_FAILED_FILE_READ: "ファイルの?み取りに失敗しました（パスを確認してください）。",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE: "ァイルの書き?みに失敗しました（パスを確認してください）。",
            ServiceError_DEENVELOPE_FAILED: "子封筒復?化に失敗しました。",
            ServiceError_DEENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "?限の問題により、ファイルの?み取りに失敗しました。",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "?限の問題により、ファイルの書き?みに失敗しました。",
            ServiceError_DEENVELOPE_FAILED_INVALID_TEXT: "電子封筒復?化に失敗しました（暗?が破損したり、ファイルの場所が間違っていた）。",

            /* p12 */
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED: "PFX電子署名に失敗しました（他のエラ?）。",
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED_SELECT_CANCELED: "PFX電子署名に失敗しました（選?を解除しました）。",

            /* certificate manager, export certificate and key */
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: '?明書のエクスポ?トに失敗しました。（入力値が間違っていた）',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: '?明書のエクスポ?トに失敗しました。（パスワ?ドの入力をキャンセルしました）',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_PRIVATEKEY_FAILED: '?明書のエクスポ?トに失敗しました。（秘密鍵が見つかりません）',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_CERTIFICATE_FAILED: '?明書のエクスポ?トに失敗しました。（?明書が見つかりませんでした）',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: '?明書のエクスポ?トに失敗しました。（PIN番?を確認してください）',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_LOCKED: '?明書のエクスポ?トに失敗しました。（デバイスがロックされています）',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: '?明書のエクスポ?トに失敗しました。（パスワ?ドを確認してください）',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED: '?明書のエクスポ?トに失敗しました。',

            /* certificate manager, import certificate and key */
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: "?明書のインポ?トに失敗しました。（入力値が間違っていた）",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: "?明書のインポ?トに失敗しました。（パスワ?ドの入力をキャンセルしました）",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: "?明書のインポ?トに失敗しました。（PIN番?を確認してください）",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: "?明書のインポ?トに失敗しました。（パスワ?ドを確認してください）",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED: "?明書のインポ?トに失敗しました。",

            /* mac address error message */
            ServiceError_MAC_ADDRESS_ERROR: 'MACアドレスを取得するに失敗しました。',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_HANDLE: 'DLLのハンドルを取得するに失敗しました。',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_FUNC: 'DLL??をインポ?トに失敗しました。',
            ServiceError_MAC_ADDRESS_NONVALIDATED_RETURN_FUNC: '??の?り値が有?ではありません。',
            ServiceError_MAC_ADDRESS_FAILED_MEMORY: 'メモリを割り?てるのに失敗しました。',
            ServiceError_MAC_ADDRESS_FAILED_REG_OPEN: 'レジストリを開くことが失敗しました。',
            ServiceError_MAC_ADDRESS_FAILED_GET_REG_VALUE: 'レジストリ値を得るに失敗しました。',
            ServiceError_MAC_ADDRESS_FAILED_REG_CLOSE: 'レジストリを閉じた失敗しました。',
            ServiceError_MAC_ADDRESS_FAILED_GET_LAST_NETID: 'NetIdを持ってくるのに失敗しました。',
            ServiceError_MAC_ADDRESS_FAILED_GET_SYSTEM_FOLDER_NAME: "systemパスを取得するのに失敗しました。",

            /* p11 error message */
            ServiceError_P11_CLOSE_SESSION_ERROR: "P11 Close session error",
            ServiceError_P11_CLOSE_SESSION_HANDLE_INVALID: "ハンドルが無?です。",
            ServiceError_P11_CLOSE_SESSION_TOKENMASTER_INVALID: "ト?クンマスタ?が無?です。",
            ServiceError_P11_CLOSE_SESSION_FAILED_GET_TOKENLIST: "ト?クンのリストを取得できませんでした。",
            ServiceError_P11_CLOSE_SESSION_IS_NOT_P11: "P11ト?クンがありません。",
            ServiceError_P11_CLOSE_SESSION_FAILED_CLOSE_SESSION: "Close Sessionに失敗しました。",

            /* p11 HSM */
            ServiceError_P11_HSM_ERROR: "P11 HSM error",
            ServiceError_P11_HSM_NOT_EXIST_HANDLE: "ハンドルが存在しません。",
            ServiceError_P11_HSM_FAILED_GET_TOKENINDENTIFIER: "ト?クンidを持ってくるのに失敗しました。",
            ServiceError_P11_HSM_FAILED_GET_TOKENMASTER: "ト?クンマスタ?を持って?ました。",

            /* ConvertStringFormat */
            ServiceError_CONVERT_STRING_FORMAT_ERROR: "Convert String Format error",
            ServiceError_CONVERT_STRING_FORMAT_INVALID_INPUT: "入力値が無?です。",
            ServiceError_CONVERT_STRING_FORMAT_FAILED_CHANGE_STRING_FORMAT: "文字列を?換するのに失敗しました。",

            /* CheckExistenceCertByPath */
            ServiceError_CHECK_EXISTENCE_CERT_ERROR: "Check Existence cert error",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_CERTINDENTIFIER: "?明書idが無?です。",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_ARGUMENT: "有?な値が入力されていない。",
            ServiceError_CHECK_EXISTENCE_CERT_SAME_TOKEN: "同じト?クンを入力しました。",
            ServiceError_CHECK_EXISTENCE_CERT_NOT_EXIST_HANDLE: "ハンドルが存在しません。",

            /* getFilePath */
            ServiceError_GET_FILE_PATH_CANCELED: 'ファイルの選?を解除しました。',

            /* securedisk */
            ServiceError_SECUREDISK_BACKUP_ERROR: "安全ディスクのバックアップおよびリカバリに失敗しました。",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_CERTINDENTIFIER: "入力値が間違っています。（?明書）",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_KEYINDENTIFIER: "キ?の値が間違っています。",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_TOKENINDENTIFIER: "ト?クンの値が間違っています。",
            ServiceError_SECUREDISK_BACKUP_INVALID_VALUE: "値が有?ではありません。",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_BACKUPCERTLIST: "バックアップ?明書のリストを作るに失敗しました。",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_SECURETOKEN: "全ディスクの?索に失敗しました。",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_HANDLE: "入力ハンドルが存在しません。",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_DATA: "デ?タが無?であるか存在しません。",
            ServiceError_SECUREDISK_BACKUP_INVALID_RANGE: "デ?タの範?が間違っています。",
            ServiceError_SECUREDISK_BACKUP_INVALID_PIN: "パスワ?ドが有?ではありません。",
            ServiceError_SECUREDISK_BACKUP_FAILED_CASTING: "?換に失敗しました。",

            /* pin complex check */
            ServiceError_CHECK_COMPLEX_PIN_ERROR: 'パスワ?ドの整合性チェックエラ?',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PINS: '値が入力されていませんでした',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SAME_PWD: '入力された二つのパスワ?ドが一致しません。',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_LENGTH: '10文字以上の新規?明書のパスワ?ドを入力してください',
            ServiceError_CHECK_COMPLEX_PIN_SAME_PWD: '新規?明書のパスワ?ドと古い?明書のパスワ?ドが同じになります。',
            ServiceError_CHECK_COMPLEX_PIN_GETPIN_FAILED: '入力値取得に失敗しました（キ?ボ?ドセキュリティ連動エラ?）',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PIN: '入力したパスワ?ドが生成規則に違反します。',
            ServiceError_CHECK_COMPLEX_PIN_UPDATE_ERROR: '安全性を?化するために更新?明書のパスワ?ドを10文字以上に?更してください。',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_CHAR: '?字と特殊文字を一つ以上含みなさい。',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_NUMBER: '英字と特殊文字を一つ以上含みなさい。',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_SPECIAL: '?字と英字を一つ以上含みなさい。',
            ServiceError_CHECK_COMPLEX_PIN_NO_CHAR: '英字を一つ以上含みなさい。',
            ServiceError_CHECK_COMPLEX_PIN_NO_NUMBER: '?字を一つ以上含みなさい。',
            ServiceError_CHECK_COMPLEX_PIN_NO_SPECIAL: '特殊文字を一つ以上含みなさい(\", \', \\, \| を除く)',
            ServiceError_CHECK_COMPLEX_PIN_PATTERN: "新規パスワ?ド生成規則:\n1. 1111又はaaaaのように同じ文字で4回以上連?する文字列は使用不可\n2. 1234又はabcdように4文字以上連?する文字列は使用不可\n3. abababのように3回以上２文字連?する文字列は使用不可\n4. abcabcのように2回以上３文字連?する文字列は使用不可\n",
            //ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_SET_LENGTH: 18015,
            ServiceError_CHECK_COMPLEX_PIN_INVALID_SET_LENGTH: "パスワ?ドの桁?の設定は、8文字以上で入力してください。",

            ServiceError_GET_TOKEN_INFO_NOT_HSM: "セキュリティト?クンがありません。",
            ServiceError_GET_TOKEN_INFO_UNSUPPORTED_OS: "このオペレ?ティングシステムには、次の機能を?行することはできません。",

            /* keyboardProtection */
            ServiceError_KEYBOARDPROTECTION_INVALID_ARGUMENT: "入力した値は正しくありません。",
            ServiceError_KEYBOARDPROTECTION_CREATE_FAILED: "セキュリティキ?ボ?ドの?行に失敗しました。",
            ServiceError_KEYBOARDPROTECTION_INIT_FAILED: "セキュリティキ?ボ?ドの初期化に失敗しました。",
            ServiceError_KEYBOARDPROTECTION_GETPIN_FAILED: "入力した値の取得に失敗しました。(セキュリティキ?ボ?ド?行エラ?)",
            ServiceError_KEYBOARDPROTECTION_GETPUBLICKEY_FAILED: "セキュリティキ?ボ?ドの公開鍵の取得に失敗しました。",

            /* mobile usim */
            ServiceError_MOBILE_USIM_NOT_PRESENT: "スマ?ト認定プログラムがインスト?ルされていませんでした。",
            ServiceError_MOBILE_USIM_INVALID_OPTIONS: "スマ?ト認?のオプションが間違っています。",
            ServiceError_MOBILE_USIM_USER_CANCELED: "スマ?ト認?が取り消されました。",

            /* mobisign */
            ServiceError_MOBISIGN_INVALID_OPTIONS: "obiSignオプションが無?です。",
            ServiceError_MOBISIGN_NOT_INSTALLED: "MobiSignプログラムがインスト?ルされていません。",
            ServiceError_MOBISIGN_NOT_LATEST_VERSION: "MobiSignのバ?ジョンが間違っています。",
            ServiceError_MOBISIGN_USER_CANCELED: "MobiSignはキャンセルされました。",
            ServiceError_MOBISIGN_NOT_LOADED: "MobiSignモジュ?ルの?み?みに失敗しました。",

            /* relay */
            /* relay.raon */
            ServiceError_RELAY_RAON_NEED_CALL_GETREFNUM: "認?書のコピ?に失敗しました（認?番?要求が必要になります）。",
            ServiceError_RELAY_RAON_FAILED_TO_GETREFNUM: "認?書のコピ?に失敗しました（認?番?要求に失敗しました）。",
            ServiceError_RELAY_RAON_FAILED_NO_CERT: "認?書のコピ?に失敗しました（送信された認?書がありません）。",
            ServiceError_RELAY_RAON_FAILED_TO_GETCERT: "認?書のコピ?に失敗しました（送信端末に認?番?を入力してください）。",
            ServiceError_RELAY_RAON_FAILED_TO_EXPORTCERT: "認?書のコピ?に失敗しました（認?書のエクスポ?トに失敗しました）。",
            ServiceError_RELAY_RAON_FAILED_AUTHORIZATION_FAILE: "認?書のコピ?に失敗しました（認?番?が一致しません）。",
            ServiceError_RELAY_RAON_NOT_SUPPORTED_TOKEN: "認?書のコピ?に失敗しました（サポ?トされていないト?クンです）。",
            // 금보원 인증서 탈취 취약점 관련 수정사항
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_INPUT_CANCELED: "パスワ?ドの入力がユ?ザ?によってキャンセルされました。",
            ServiceError_RELAY_RAON_CERTIFICATE_INVALID_CERTINDENTIFIER: "その?明書を見つけることができません。",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED: "?明書のコピ?に失敗しました（パスワ?ドを確認してください）。",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "?明書のコピ?に失敗しました（パスワ?ドを確認してください）。",
            ServiceError_RELAY_RAON_TOKEN_FUNCTION_NOT_SUPPORTED: "?明書のコピ?に失敗しました（サポ?トされていないメディアです）。",
            ServiceError_RELAY_RAON_IVALID_REF_NUM: "?明書のコピ?に失敗しました（承認番?の??に失敗しました）。",

            /* certificateSynchronize */
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_CERTIDNTIFIER: "入力値が誤り。",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_ARGUMENT: "入力値が誤り。",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INPUT_CANCELED: "パスワ?ド入力はユ?ザ?により承認されました。",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED: "パスワ?ド?更に失敗しました。",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_SIGN_PWD_FAILED: "パスワ?ド?更に失敗しました（有?なパスワ?ドを確認してください）",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_KM_PWD_FAILED: "パスワ?ド?更に失敗しました（キ?配布用パスワ?ドを確認してください）",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_FIND_KMCERTIFICATE: "キ?配布用?明書は存在しません。",

            /* Koscom Envelop */
            ServiceError_KOSCOM_ENVELOP_FAILED: "Koscom電子封筒、暗?化に失敗しました。",
            ServiceError_KOSCOM_ENVELOP_INVALID_CERT_FAILED: "?明書が有?ではありません。",
            ServiceError_KOSCOM_ENVELOP_INVALID_PLAIN_FAILED: "原文は無?です。",
            ServiceError_KOSCOM_ENVELOP_EXTRACT_KEY_FAILED: "キ?抽出に失敗しました。",
            ServiceError_KOSCOM_ENVELOP_BASE64_ENCODE_FAILED: "base64 encodingに失敗しました。",

            /* Koscom Develop */
            ServiceError_KOSCOM_DEVELOP_FAILED: "Koscom電子封筒復?化に失敗しました。",
            ServiceError_KOSCOM_DEVELOP_INVALID_ENVELOPDATA_FAILED: "電子封筒メッセ?ジが有?ではありません。",
            ServiceError_KOSCOM_DEVELOP_INVALID_INPUT_FAILED: "電子封筒に使用される?明書が入力されていません。",
            ServiceError_KOSCOM_DEVELOP_FAILED_INPUT_CANCELED: "入力をキャンセルしました。",
            ServiceError_KOSCOM_DEVELOP_FAILED_PWD_INCORRECT: "パスワ?ドが間違っていた。",
            ServiceError_KOSCOM_DEVELOP_FAILED_PIN_INCORRECT: "pin番?が間違っていた。",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED: "電子封筒復?化に使用されるファイルを?み取ることができません。",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ: "電子封筒復?化に使用されるファイルを?み取ることができません。",

            /* Koscom Encrypt */
            ServiceError_KOSCOM_ENCRYPT_FAILED: "encrypt失敗しました。",
            ServiceError_KOSCOM_ENCRYPT_INVALID_PLAIN: "入力値が無?です。（plain）",
            ServiceError_KOSCOM_ENCRYPT_INVALID_SESSIONKEY: "入力値が無?です。 (sessionkey)",
            ServiceError_KOSCOM_ENCRYPT_ENCODING_FAILED: "base64 encodingに失敗しました。",
            ServiceError_KOSCOM_ENCRYPT_SESSIONID_FAILED: "セッションID取得に失敗しました。",

            /* Koscom Decrypt */
            ServiceError_KOSCOM_DECRYPT_FAILED: "decrypt失敗しました。",
            ServiceError_KOSCOM_DECRYPT_INVALID_ENCRYPTDATA: "入力値が無?です。 (encryptData).",
            ServiceError_KOSCOM_DECRYPT_INVALID_SESSIONKEY: "入力値が無?です。 (sessionkey)",
            ServiceError_KOSCOM_DECRYPT_ENCODING_FAILED: "セッションID取得に失敗しました。",

            /* SetPFXNPKIFile */
            ServiceError_SETPFXNPKIFILE_FAILED: "SetPFXNPKIFile 失敗しました。",
            ServiceError_SETPFXNPKIFILE_UNKNOWN_FILE: "未知のファイルパス",
            ServiceError_SETPFXNPKIFILE_INVALID_FILEPATH: "無?なファイルのパスです。",
            ServiceError_SETPFXNPKIFILE_INVALID_TYPE: "不適切タイプです。",
            ServiceError_SETPFXNPKIFILE_NOT_FIND_FILE: "そのパスのファイルが存在しません。",
            ServiceError_SETPFXNPKIFILE_INVALID_PWD: "パスワ?ドが間違っていた。",
            ServiceError_SETPFXNPKIFILE_PFX_PKCS8_DECODE_FAIL: "PKCS8デコ?ドの失敗しました。",
            ServiceError_SETPFXNPKIFILE_DER_NOT_FIND_SIGNPRIKEY_FILE: "そのル?ト上でsignPri.keyファイルを見つけることができません。",
            ServiceError_SETPFXNPKIFILE_PFX_DECODE_FAILED: "PFX Decode失敗しました。(パスワ?ドが間違っていた)",
            ServiceError_SETPFXNPKIFILE_DER_DECODE_FAILED: "Der（X509）Decode失敗しました。",

            /* USBKey */
            ServiceError_USBKEYTOKEN_WRITE_BUFFER_FAILED: "選?した保存ト?クンの保存領域が不足します。（3.5KBytes必要）",

            /* KoscomFileEnvelop */
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED                                     : "電子封筒、暗?化に失敗しました。",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_CERT_FAILED                        : "?明書が有?ではありません。",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_PLAIN_FAILED                       : "原文は無?です。",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_DECODE_FAILED                       : "base64 decodingに失敗しました。",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_ENCODE_FAILED                       : "base64 encodingに失敗しました。",
            ServiceError_KOSCOM_FILE_ENVELOP_NOT_SUPPORTED                              : "?明書のインポ?トはまだサポ?トされていません。",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE_ACCESS_DENIED            : "?限の問題により、ファイルの?み取りに失敗しました。",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE                          : "ファイルの書き?みに失敗しました。",

            /* KoscomFileDevelop */
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED                                     : "電子封筒復?化に失敗しました。",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_ENVELOPDATA_FAILED                 : "電子封筒メッセ?ジが有?ではありません。",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_INPUT_FAILED                       : "入力値が有?ではありません。",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_INPUT_CANCELED                      : "入力をキャンセルしました。",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PWD_INCORRECT                       : "パスワ?ドが間違っていた。",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PIN_INCORRECT                       : "PIN番?が間違っていた。",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED             : "?限の問題により、ファイルの?み取りに失敗しました。",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ                           : "ファイルの?み取りに失敗しました。",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_DECODE_FAILED                       : "base64 decodingに失敗しました。",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_ENCODE_FAILED                       : "base64 encodingに失敗しました。",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_WRITE                          : "ファイルの?み取りに失敗しました。",
            ServiceError_KOSCOM_FILE_DEVELOP_INPUT_CANCELED                             : "PIN番?の入力をキャンセルしました。",
            ServiceError_KOSCOM_FILE_DEVELOP_PWD_INPUT_CANCELED                         : "パスワ?ドの入力をキャンセルしました。",
            ServiceError_KOSCOM_FILE_DEVELOP_CERTIFICATE_INVALID_CERTINDENTIFIER        : "入力値が無?です。",

            /* GetCertificateListWithDn */
            ServiceError_GETCERTIFICATELIST_WITH_DN_FAILED                              : "?明書のインポ?トに失敗しました。",
            ServiceError_GETCERTIFICATELIST_WITH_DN_INVALID_INPUT_FAILED                : "入力値が有?ではありません。",
            ServiceError_GETCERTIFICATELIST_WITH_DN_NO_SEARCH_CERTIFIATE_FAILED         : "要求に??する?明書を見つけることができません。",
            
            /* HASH Signature Error */
            ServiceError_HASH_LENGTH_ERROR: " ハッシュ値が無?です。 ( not 32 byte ) ",

            /* SCRIPT */
            ScriptError_SETMATCHEDCONTEXT_NOT_CERTIFICATE: "リクエストされた?明書がありません。",
            ScriptError_SIGNDATAB64_NOT_PLAINTEXT: "入力パラメ?タがnullです。",
            ScriptError_CERTSERVICESETUP_VERSION_MODULE: "インスト?ルしたモジュ?ルのバ?ジョンが低くなります。最新バ?ジョンをインスト?ルしてください。",
            ScriptError_CERTSERVICESETUP_VERSION_DLL: "インスト?ルしたDLLのバ?ジョンが低くなります。最新バ?ジョンをインスト?ルしてください。",
            ScriptError_UCPIDREQUSER_NOT_USERAGREEMENT: "入力パラメ?タがnullです。 （userAgreement）",
            ScriptError_UCPIDREQUSER_NOT_MODE: "入力パラメ?タ?が無?です。 （mode）",
            ScriptError_PFX_MAKESIGNATURE_ERORR: "電子署名中にエラ?が?生しました。",
            ScriptError_ISSUE_BILL_SAFARINOTSUPPORT: '[サファリ（Safari）ブラウザの「環境設定>個人情報>クッキ?」の設定の部分を「常に許可」に?更した後、公認認?書?給を進めてください。]',
            ScriptError_UPDATE_BILL_SAFARINOTSUPPORT: '[サファリ（Safari）ブラウザの「環境設定>個人情報>クッキ?」の設定の部分を「常に許可」に?更した後、公認認?書の更新を進めてください。]',
            ScriptError_ENVELOP_INVALID_VALUE: '入力パラメ?タがNULLです。',
            ScriptError_DEVELOP_INVALID_VALUE: '入力パラメ?タがNULLです。',
            ScriptError_DEVELOP_NOT_CERTIFICATE: '一致する?明書がありません。',
            ScriptError_ENCRYPTDATA_INVALID_VALUE: '入力パラメ?タがNULLです。',
            ScriptError_DECRYPTDATA_INVALID_VALUE: '入力パラメ?タがNULLです。',
            ScriptError_KOSCOM_ENCRYPT_INVALID_VALUE: '入力パラメ?タがNULLです。',
            ScriptError_KOSCOM_DECRYPT_INVALID_VALUE: '入力パラメ?タがNULLです。'
        }
    ];

    //var errorMessage = (function () {
    //    var message;
    //
    //
    //    return {
    //        setLanguage: function(type){
    //            _mode = type;
    //            message = language[_mode];
    //        },
    //
    //        getMessage: function(value){
    //            for (var i in message) {
    //                if (i == value) {
    //                    return message[i];
    //                }
    //            }
    //            return "undefined";
    //        }
    //    }
    //})();
    function getBrwoserLang() {
        if (typeof (window.navigator.browserLanguage) === 'undefined')
            return window.navigator.language.toLowerCase();
        return window.navigator.browserLanguage.toLowerCase();
    };

    var getErrorMessage = function (code, mode) {
        //var _mode = (typeof(mode) == 'undefined' || mode == '') ? type[getBrwoserLang()] : mode;
        var _mode = ( typeof mode === 'undefined' || '' + mode == '' || mode > language.length ) ? type[getBrwoserLang()] : mode;
        var _message = language[_mode];
        for (var i in _message) {
            if (vest.error.errorCode[i] == code) {
                return _message[i];
            }
        }
        return 'undefined';
    };


    if (vest) {
        //vest.error.errorMessage = vest.error.errorMessage || (vest.error.errorMessage = {});
        //errorMassage.setLanguage(type[brwoserLang()]);
        //vest.extend(vest.error, {
        //    'errorMessage': errorMassage
        //});
        vest.error.getErrorMessage = getErrorMessage;
    }
})(window, vest);