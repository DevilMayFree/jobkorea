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
            ServiceError_UNKNOWN: "���� ��ϵ��� ���� �����ڵ�",

            /* common */
            ServiceError_INVALID_INPUT: "�Է°��� �߸��Ǿ����ϴ�.",
            ServiceError_BASE64_ENCODE_FAILED: "Base64 Encode �����߽��ϴ�.",
            ServiceError_BASE64_DECODE_FAILED: "Base64 Decode �����߽��ϴ�.",

            /* token */
            ServiceError_TOKEN_NOT_INITIALIZED: "���ȵ�ũ�� �ʱ�ȭ ���� �ʾҽ��ϴ�.",
            ServiceError_TOKEN_NOT_FOUND: "���ȵ�ũ�� �������� �ʽ��ϴ�.",
            ServiceError_TOKEN_BAD: "���ȵ�ũ�� ���°� �������Դϴ�. �ʱ�ȭ �ϼ���.",
            ServiceError_TOKEN_UBIKEY_NOT_INSTALLED: "Ubikey�� ��ġ���� �ʾҽ��ϴ�. ���α׷��� ��ġ ���ּ���.",
            ServiceError_TOKEN_UBIKEY_NOT_LATEST_VERSION: "Ubikey�� �ֽ� ������ �ƴմϴ�. ���α׷��� ������Ʈ ���ּ���.",
            ServiceError_TOKEN_UBIKEY_INVALID_OPTIONS: "Ubikey �ɼǰ��� �߸��Ǿ����ϴ�.",
            ServiceError_TOKEN_NOT_RECOGNIZED: "���� ��ū�� �ƴմϴ�.",
            ServiceError_TOKEN_FUNCTION_NOT_SUPPORTED: "��ū���� �ش����� �������� �ʽ��ϴ�.",

            ServiceError_SSLCONFIG_SERVICE_SSL_INIT_FAILED: "SSL ���� �ʱ�ȭ�� �����߽��ϴ�.",

            /* service common */
            ServiceError_SERVICE_REJECTED: "�ùٸ� MangoWire �޽����� �ƴϹǷ�, ���񽺰� �����Ǿ����ϴ�.",
            ServiceError_SESSIONID_NOT_EXIST: "������ ����Ǿ��ų� �߸��Ǿ����ϴ�. �ٽ� �����ϼ���.",
            ServiceError_SESSION_IS_USING: "�ٸ� ������ ������ ������Դϴ�. �ٽ� �����ϼ���.",
            ServiceError_OPERATION_NOT_SUPPORTED: "�������� �ʴ� ����Դϴ�.",
            ServiceError_OPERATION_NOT_EXPECTED: "���� �� ����� ������ �� �����ϴ�.",
            ServiceError_INVALID_INPUT_TOKENID: "��ū �ĺ��ڰ� �߸��Ǿ����ϴ�.",
            ServiceError_MEMORY_ALLOCATION_FAILED: "�޸� �Ҵ翡 �����߽��ϴ�.",

            ServiceError_NO_SSL_CERTIFICATE: "��ϵ� SSL �������� �������� �ʽ��ϴ�.",
            ServiceError_NOT_SUPPORTED_LANGUAGE: "�����ϴ� �� �ƴմϴ�.",

            /* services */
            ServiceError_CERTIFICATE_NOT_FOUND: "�������� �������� �ʽ��ϴ�.",

            /* delete service */
            ServiceError_DELETE_CERTIFICATE_FAILED: "������ ������ �����߽��ϴ�.(��Ÿ ����)",
            ServiceError_DELETE_CERTIFICATE_INVALID_CERTINDENTIFIER: "�Է°��� �߸� �Ǿ����ϴ�.",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PROGRAM_FILES_PATH_DELETE_WARNING: "Program files�� ����� �������� ������ �� �����ϴ�.",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PASSWORD_INCORRECT: "������ ������ �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_DELETE_PIN_INCORRECT: "������ ������ �����߽��ϴ�(PIN ��ȣ�� Ȯ���ϼ���).",
            ServiceError_DELETE_PIN_FAILED_INPUT_CANCELED: "������ ������ �����߽��ϴ�(PIN ��ȣ �Է��� ����߽��ϴ�).",
            ServiceError_DELETE_PWD_FAILED_INPUT_CANCELED: "������ ������ �����߽��ϴ�(��й�ȣ �Է��� ����߽��ϴ�).",

            /* encrypt vid random */
            ServiceError_ENCRYPT_VIDRANDOM_INVALID_CERTINDENTIFIER: "�Է°��� �߸� �Ǿ����ϴ�.",//"Invalid arugment(keyIdentifier or recipientCertificate)");
            ServiceError_ENCRYPT_VIDRANDOM_FAILED: "EncryptVIDRandom failed.",
            ServiceError_ENCRYPT_VIDRANDOM_TOKEN_NOT_INITIALIZE: "���ȵ�ũ�� �ʱ�ȭ ���� �ʾҽ��ϴ�.",

            /* generate key pair */
            ServiceError_GENERATE_KEYPAIR_INVALID_ARGUMENT: "�Է°��� �߸� �Ǿ����ϴ�.",//"Invalid arugment(algorithm or modularLength)");
            ServiceError_GENERATE_KEYPAIR_FAILED: "Gen key fail",
            ServiceError_GENERATE_KEYPAIR_TOKEN_NOT_INITIALIZE: "���ȵ�ũ�� �ʱ�ȭ ���� �ʾҽ��ϴ�.",

            ServiceError_REPLAY_NOT_MATCHED_MESSAGE_NUMBER: "���� �������� ���ΰ�ħ ���ּ���.(M)",
            ServiceError_REPLAY_CANNOT_REQUEST_WITHOUT_TIC_MESSAGE: "���� �������� ���ΰ�ħ ���ּ���.(S)",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_NOT_MATCHED_KEY_PAIR: "����� �������� Ű���� �ٸ��ϴ�.",
            ServiceError_GENERATE_SIGNATURE_NOT_EXPECTED_KEYIDENTIFIER: "not expected keyIdentifier",
            ServiceError_GENERATE_SIGNATURE_FAILED: "���ڼ��� �����Ͽ����ϴ�.",
            ServiceError_GENERATE_SIGNATURE_TOKEN_NOT_INITAILIZE: "���ȵ�ũ�� �ʱ�ȭ ���� �ʾҽ��ϴ�.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PWD_INCORRECT: "������ ��й�ȣ �Է��� �߸� �Ǿ����ϴ�.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_LOCKED: "���ڼ��� �����Ͽ����ϴ�(��ġ�� �����ϴ�).",
            ServiceError_GENERATE_SIGNATURE_FAILED_SGPKCS8_PRIVATEKEYINFO_DECODE_FAILED: "���ڼ��� �����Ͽ����ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_GENERATE_SIGNATURE_ENCRYPT_VIDRANDOM_FAILED: "���ڼ��� �����Ͽ����ϴ�(�ĺ���ȣ ������ ����).", //"encrypt VID Random failed(0x%x, false)"
            ServiceError_GENERATE_SIGNATURE_INVALID_ARGUMENT: "�Է°��� �߸� �Ǿ����ϴ�.",//"Invalid input (plain, keyIdentifier, false)",
            ServiceError_GENERATE_SIGNATURE_CANCELED: "��û�� �۾��� ����ڿ� ���� ��ҵǾ����ϴ�.",
            ServiceError_GENERATE_SIGNATURE_KSTOKEN_PIN_INCORRECT: "PIN ��ȣ �Է��� �߸��Ǿ����ϴ�.",
            ServiceError_GENERATE_SIGNATURE_KOSCOM_SIGN_MUST_HAVE_CERTIFICATE: "Koscom ���ڼ��� �������� �ʿ��մϴ�.",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_INCORRECT: "���ڼ��� �����Ͽ����ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ERROR: "���� �б⿡ �����߽��ϴ�(��θ� Ȯ���ϼ���).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ERROR: "���� ���⿡ �����߽��ϴ�(��θ� Ȯ���ϼ���).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ACCESS_DENIED: "���� ������ ���� ���� �б⿡ �����߽��ϴ�.",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ACCESS_DENIED: "���� ������ ���� ���� ���⿡ �����߽��ϴ�.",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_MEMORY_ALLOCATION: "�޸𸮰� �����Ͽ� ���� ���� �����߽��ϴ�.",

            /* get certificate list */
            ServiceError_GET_CERTIFICATE_LIST_FAILED: "Function Failed",
            ServiceError_GET_CERTIFICATE_LIST_TOKEN_NOT_INITIALIZE: "���ȵ�ũ�� �ʱ�ȭ ���� �ʾҽ��ϴ�.",
            ServiceError_GET_CERTIFICATE_LIST_UBIKEY_NOT_INITIALIZE: "UBIKey ���񽺰� �ʱ�ȭ ���� �ʾҽ��ϴ�.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PIN_INCORRECT: "PIN ��ȣ�� Ȯ���ϼ���.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPIN_CANCELED: "PIN �Է��� ����߽��ϴ�.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPWD_CANCELED: "��й�ȣ �Է��� ����߽��ϴ�.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PWD_INCORRECT: "��й�ȣ�� Ȯ���ϼ���.",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_UBIKEY_INPUT_CANCELED: "Ubikey ���񽺸� ����߽��ϴ�.",

            /* get certificate */
            ServiceError_GET_CERTIFICATE_INVALID_ARGUMENT: "�Է°��� �߸��Ǿ����ϴ�.",//"certIdentifier"
            ServiceError_GET_CERTIFICATE_FAILED: "������ �������⸦ �����Ͽ����ϴ�.",
            ServiceError_GET_CERTIFICATE_NOT_FOUND: "�������� ã�� �� �����ϴ�.",
            ServiceError_GET_CERTIFICATE_TOKEN_NOT_INITIALIZE: "���ȵ�ũ�� �ʱ�ȭ ���� �ʾҽ��ϴ�.",

            /* setMatchedContext */
            ServiceError_SETMATCHED_CONTEXT_INPUT_CANCELED: "��й�ȣ �Է��� ����߽��ϴ�.",
            ServiceError_SETMATCHED_CONTEXT_INVALID_CUSTOM_SID: "�߸��� session ID�� �ԷµǾ����ϴ�.",
            ServiceError_SETMATCHED_CONTEXT_CUSTOM_SID_IS_NULL: "session ID�� NULL�� �ԷµǾ����ϴ�.",
            ServiceError_SETMATCHED_CONTEXT_CREATE_SESSION_UNIT_FAILED: "session ������ �����߽��ϴ�.",

            /* get ca certificate */
            ServiceError_GET_CA_CERTIFICATE_INVALID_ARGUMENT: "�Է°��� �߸��Ǿ����ϴ�.",

            /* push certificate */
            ServiceError_PUSH_CERTIFICATE_INVALID_ARGUMENT: "�Է°��� �߸� �Ǿ����ϴ�.",//"Invalid arugment(keyIdentifier or certificate, false)",
            ServiceError_PUSH_CERTIFICATE_NOT_EXPECTED_KEYIDENTIFIER: "not expected keyIdentifier",
            ServiceError_PUSH_CERTIFICATE_FAILED: "PushCertificate failed.",
            ServiceError_PUSH_CERTIFICATE_TOKEN_NOT_INITIALIZE: "���ȵ�ũ�� �ʱ�ȭ ���� �ʾҽ��ϴ�.",

            /* verify service */
            ServiceError_VERIFY_CERTIFICATE_FAILED: "������ ��й�ȣ Ȯ�ο� �����߽��ϴ�.(��Ÿ ����)",
            ServiceError_VERIFY_CERTIFICATE_INVALID_CERTINDENTIFIER: "�Է°��� �߸� �Ǿ����ϴ�.",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_INCORRECT: "���ڼ��� �����Ͽ����ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_INCORRECT: "���ڼ��� �����Ͽ����ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_LOCKED: "���ڼ��� �����Ͽ����ϴ�(��ġ�� �����ϴ�).",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_LOCKED: "���ڼ��� �����Ͽ����ϴ�(��ġ�� �����ϴ�).",

            /* generate keypair */
            ServiceError_GENERATE_KEYPAIR_CANCELLED: "Ű�� ������ ����ڿ� ���� ��ҵǾ����ϴ�.",
            ServiceError_GENERATE_KEYPAIR_PIN_INCORRECT: "PIN ��ȣ�� �߸��Ǿ� Ű�� ������ �����Ͽ����ϴ�.",
            ServiceError_GENERATE_KEYPAIR_PIN_LOCKED: "PIN ��ȣ ������ ��ġ�� �����ϴ�. Ű�� ������ �����Ͽ����ϴ�.",
            ServiceError_GENERATE_KEYPAIR_PWD_INCORRECT: "��й�ȣ�� �߸��Ǿ� Ű�� ������ �����Ͽ����ϴ�.",

            /* cmp common*/
            ServiceError_CMP_MEMORY_ALLOCATION_FAILED: "�޸� �Ҵ翡 �����߽��ϴ�.",
            ServiceError_CMP_SERVER_CONNECT_FAILED: "CA �������� ��ſ� �����߽��ϴ�.",

            /* issue / recover */
            ServiceError_CMP_ISSUE_INVALID_ARGUMENT: "������ �߱޿� ���� �Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_CA: "�������� �ʴ� ���� ��� �ڵ尡 �ԷµǾ����ϴ�.",
            ServiceError_CMP_ISSUE_INPUTPIN_CANCELED: "��й�ȣ �Է��� ����߽��ϴ�.",
            ServiceError_CMP_ISSUE_PKCS5_ENCRYPT_FAILED: "PKCS#5 ��ȣȭ�� �����߽��ϴ�.",
            ServiceError_CMP_ISSUE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "PKCS#8 �޽��� ������ �����߽��ϴ�.",
            ServiceError_CMP_ISSUE_SAVE_CERTIFICATE_FAILED: "������ ���忡 �����߽��ϴ�.",
            ServiceError_CMP_ISSUE_IMPORT_INIT_FAILED: "�߱޵� ������ ���忡 �����߽��ϴ�.(initialize ����)",
            ServiceError_CMP_ISSUE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "�߱޵� ���ڼ���� ������ ���忡 �����߽��ϴ�.",
            ServiceError_CMP_ISSUE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "�߱޵� Ű�й�� ������ ���忡 �����߽��ϴ�.",
            ServiceError_CMP_ISSUE_IMPORT_CA_PUB_IMPORT_FAILED: "CA ����Ű ���忡 �����߽��ϴ�.",
            ServiceError_CMP_ISSUE_IMPORT_FINAL_FAILED: "�߱޵� ������ ���忡 �����߽��ϴ�.(finalize ����)",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_BILL: "���� �߱��� ���� �������� �ʽ��ϴ�.",
            ServiceError_CMP_ISSUE_LOW_SPEC_ICCARD: "ICCard�� �������� �ʴ� �������Դϴ�.",
            ServiceError_CMP_ISSUE_NOT_USABLE_TOKNE_FAILED: "�����Ͻ� ��ũ�� �������� �߱��� �� �����ϴ�.",

            ServiceError_CMP_UPDATE_INVALID_ARGUMENT: "������ ���ſ� ���� �Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_CA: "�������� �ʴ� ���� ��� �ڵ尡 �ԷµǾ����ϴ�.",
            ServiceError_CMP_UPDATE_INPUTPIN_CANCELED: "��й�ȣ �Է��� ����߽��ϴ�.",
            ServiceError_CMP_UPDATE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "������ �������� �������µ� �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_ADD_OLD_CERTIFICATE_FAILED: "������ �������� �߰��ϴµ� �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_ADD_OLD_KEY_FAILED: "������ Ű������ �߰��ϴµ� �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_PKCS5_ENCRYPT_FAILED: "PKCS#5 ��ȣȭ�� �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "PKCS#8 �޽��� ������ �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_SAVE_CERTIFICATE_FAILED: "������ ���忡 �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_INVALID_PASSWORD: "���� ������ ��й�ȣ�� Ȯ���ϼ���.",
            ServiceError_CMP_UPDATE_IMPORT_INIT_FAILED: "�߱޵� ������ ���忡 �����߽��ϴ�.(initialize ����)",
            ServiceError_CMP_UPDATE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "�߱޵� ���ڼ���� ������ ���忡 �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "�߱޵� Ű�й�� ������ ���忡 �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_IMPORT_CA_PUB_IMPORT_FAILED: "CA ����Ű ���忡 �����߽��ϴ�.",
            ServiceError_CMP_UPDATE_IMPORT_FINAL_FAILED: "�߱޵� ������ ���忡 �����߽��ϴ�.(finalize ����)",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_BILL: "���� ������ ���� �������� �ʽ��ϴ�.",
            ServiceError_CMP_UPDATE_NOT_UPDATE_TIME: "�������� ������ �� �ִ� �Ⱓ�� �ƴմϴ�. ������ ������ ���� 1���� �� ���� �����մϴ�.",
            ServiceError_CMP_UPDATE_INVALID_PIN: "PIN ��ȣ�� Ȯ���ϼ���",
            ServiceError_CMP_UPDATE_NOT_USABLE_TOKNE_FAILED: "�����Ͻ� ��ũ�� �������� �߱��� �� �����ϴ�.",

            ServiceError_CMP_REVOKE_INVALID_ARGUMENT: "������ ��⿡ ���� �Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_CMP_REVOKE_NOT_SUPPORTED_CA: "�������� �ʴ� ���� ��� �ڵ尡 �ԷµǾ����ϴ�.",
            ServiceError_CMP_REVOKE_INPUTPIN_CANCELED: "��й�ȣ �Է��� ����߽��ϴ�.",
            ServiceError_CMP_REVOKE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "����� �������� �������µ� �����߽��ϴ�.",
            ServiceError_CMP_REVOKE_ADD_OLD_CERTIFICATE_FAILED: "����� �������� �߰��ϴµ� �����߽��ϴ�.",
            ServiceError_CMP_REVOKE_ADD_OLD_KEY_FAILED: "����� Ű������ �߰��ϴµ� �����߽��ϴ�.",
            ServiceError_CMP_REVOKE_INVALID_PASSWORD: "��й�ȣ�� Ȯ���ϼ���.",
            ServiceError_CMP_REVOKE_INVALID_PIN: "PIN ��ȣ�� Ȯ���ϼ���.",
            ServiceError_CMP_REVOKE_PIN_LOCKED: "PIN�� �����ϴ�.",

            /* get PCIdentity */
            ServiceError_GET_PCIDENTITY_FAILED_MEMORY_ALLOCATION_FAILED: "�޸� �Ҵ翡 �����߽��ϴ�.",
            ServiceError_GET_PCIDENTITY_FAILED_INVALID_WINDOWS: "�ܸ� �ĺ� ���� �������� ���߽��ϴ�(Windows �� Ÿ OS�� ���� �����մϴ�).",
            ServiceError_GET_PCIDENTITY_FAILED: "�ܸ� �ĺ� ���� �������� ���߽��ϴ�(��Ÿ ����).",

            /* certificate manager, changePin */
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERTINDENTIFIER: "�Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_CHANGE_PIN_FAILED_INPUT_CANCELED: "��й�ȣ �Է��� ����߽��ϴ�.",
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERT_TYPE: "��й�ȣ ���濡 �����߽��ϴ�(������ ���Ŀ� ������ �߻��߽��ϴ�).",
            ServiceError_CHANGE_PIN_FAILED_PIN_INCORRECT: "��й�ȣ ���濡 �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_CHANGE_PIN_FAILED_FILE_WRITE_ERROR: "��й�ȣ ���濡 �����߽��ϴ�(�������� ������ �� ������ �߻��߽��ϴ�).",
            ServiceError_CHANGE_PIN_FAILED: "��й�ȣ ���濡 �����Ͽ����ϴ�(��Ÿ ����).",
            ServiceError_CHANGE_PIN_FAILED_PROGRAM_FILES_PATH_WARNING: "Program files�� ����� ������ ��й�ȣ�� ������ �� �����ϴ�.",
            ServiceError_CHANGE_PIN_FAILED_NOT_MATCHED_PWD: "����� ������ ��й�ȣ�� Ű�й�� ������ ��й�ȣ�� ��ġ���� �ʽ��ϴ�.",

            /* certificate manager, export certificate */
            ServiceError_EXPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "��й�ȣ �Է��� ����߽��ϴ�.",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "������ �������⸦ ����߽��ϴ�.",
            ServiceError_EXPORT_CERTIFICATE_FAILED_INVALID_CERT_TYPE: "������ �������⿡ �����߽��ϴ�(������ ���Ŀ� ������ �߻��߽��ϴ�).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SEARCH_CERTIFICATE_FAILED: "������ �������⿡ �����߽��ϴ�(�������� ã�� ���߽��ϴ�).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PIN_INCORRECT: "������ �������⿡ �����߽��ϴ�(PIN ��ȣ�� Ȯ���ϼ���).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PWD_INCORRECT: "������ �������⿡ �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ADD_CERTIFICATELIST_FAILED: "������ �������⿡ �����߽��ϴ�(add certificate fail).",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ENCODE_PFX_FAILED: "������ �������⿡ �����߽��ϴ�(encode pfx fail).",
            ServiceError_EXPORT_CERTIFICATE_FAILED: "������ �������⿡ �����߽��ϴ�(��Ÿ ����).",

            /* certificate manager, import certificate */
            ServiceError_IMPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "������ �������⿡ �����߽��ϴ�(������ ������ ����߽��ϴ�).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "������ �������⿡ �����߽��ϴ�(��й�ȣ �Է��� ����߽��ϴ�).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX: "������ �������⿡ �����߽��ϴ�(PFX ������ �������� �ƴմϴ�).",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX_PASSWORD: "������ �������⿡ �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_IMPORT_CERTIFICATE_FAILED: "������ �������⿡ �����߽��ϴ�(��Ÿ ����).",
            ServiceError_IMPORT_CERTIFICATE_NOT_AFTER_CERTIFICATE_FAILED: "�ֽ� �������� �̹� ����Ǿ� �ֽ��ϴ�.",

            /* certificate manager, verify pin */
            ServiceError_VERIFY_PIN_FAILED_INVALID_CERTINDENTIFIER: "��й�ȣ Ȯ�ο� �����߽��ϴ�(�Է°��� �߸��Ǿ����ϴ�).",
            ServiceError_VERIFY_PIN_FAILED_INPUT_CANCELED: "��й�ȣ Ȯ�ο� �����߽��ϴ�(�Է��� ����߽��ϴ�).",
            ServiceError_VERIFY_PIN_FAILED: "��й�ȣ Ȯ�ο� �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "��й�ȣ Ȯ�ο� �����߽��ϴ�(����� �������� ��ȣȭ�� �������� ��й�ȣ�� ��ġ���� �ʽ��ϴ�).",

            /* certificate manager, verify pin */
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_CERTINDENTIFIER: "�Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_TOKENINDENTIFIER: "�Էµ� ��ü�� ����� �� ���� ��ü�Դϴ�.",
            ServiceError_CHANGE_STORAGE_FAILED_INPUT_CANCELED: "������ �����ü ���濡 �����߽��ϴ�(��й�ȣ �Է��� ����߽��ϴ�).",
            ServiceError_CHANGE_STORAGE_FAILED_CERTIFICATE_AND_KEY_FAILED: "������ �����ü ���濡 �����߽��ϴ�.",
            ServiceError_CHANGE_STORAGE_FAILED_PIN_INCORRECT: "������ �����ü ���濡 �����߽��ϴ�(PIN ��ȣ�� Ȯ���ϼ���).",
            ServiceError_CHANGE_STORAGE_FAILED_PWD_INCORRECT: "������ �����ü ���濡 �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_CHANGE_STORAGE_SAME_TOKEN: "������ ������ �����ü�� �����ϴ�.",
            ServiceError_CHANGE_STORAGE_FAILED: "������ �����ü ���濡 �����߽��ϴ�(��Ÿ ����).",
            ServiceError_CHANGE_STORAGE_OVERWRITE_CANCELED: "������ �����ü ������ ����Ͽ����ϴ�.",
            ServiceError_CHANGE_STORAGE_FAILED_AFTER_CERTIFICATE: "�ֽ� �������� �̹� ����Ǿ� �ֽ��ϴ�.",

            /* validateCertificate */
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTINDENTIFIER: "�Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTIFICATE: "������ ������ �߸��Ǿ����ϴ�.",
            ServiceError_VALIDATE_CERTIFICATE_CRL_FAILED: "������ ������ �����߽��ϴ�.",
            ServiceError_VALIDATE_CERTIFICATE_FAILED: "������ ��ȿ�� ������ �����߽��ϴ�(��Ÿ ����).",

            /* session manager */
            ServiceError_SESSION_MANAGER_SESSION_ID_IS_NULL: "session id�� ���� session ���忡 �����߽��ϴ�.",

            /* validate certificate*/

            /* tray */
            ServiceError_OPERATE_TRAY_INVALID_TRAY_VENDOR: "�߸��� tray ����Դϴ�.",
            ServiceError_OPERATE_TRAY_INVALID_TRAY_OPERATE: "�߸��� tray operate �����Դϴ�.",

            /* SignVerify */
            ServiceError_VERIFY_SIGNATURE_INVALID_ARGUMENT: "�Է°��� �߸��Ǿ����ϴ�.",
            ServiceError_VERIFY_SIGNATURE_PLAIN_IS_NULL: "������ �ʿ��� ���ڼ����Դϴ�.",
            ServiceError_VERIFY_SIGNATURE_UNSUPPORT_SIGNTYPE: "���� �������� �ʴ� ���ڼ����Դϴ�.",
            ServiceError_VERIFY_SIGNATURE_INVALID_X509_TYPE: "X509 ���������°� �ƴմϴ�.",
            ServiceError_VERIFY_SIGNATURE_INVALID_PUBLIC_KEY_TYPE: "public key ���°� �ƴմϴ�.",
            ServiceError_VERIFY_SIGNATURE_VERIFY_FAILED: "��������� �����߽��ϴ�.",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_FAILED: "���� �б⿡ �����߽��ϴ�.",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_FAILED: "���� ���⿡ �����߽��ϴ�.",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_ACCESS_DENIED: "���� ������ ���� ���� �б⿡ �����߽��ϴ�.",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_ACCESS_DENIED: "���� ������ ���� ���� ���⿡ �����߽��ϴ�.",
            ServiceError_VERIFY_SIGNATURE_FILE_MEMORY_ALLOCATE_FAILED: "�޸� �������� ���� �����߽��ϴ�.",

            /* VIDVerify */
            ServiceError_VERIFY_VID_INVALID_CERTID: "�Է°��� �߸��Ǿ����ϴ�.",
            ServiceError_VERIFY_VID_INVALID_KEYID: "�Է°��� �߸��Ǿ����ϴ�.",
            ServiceError_VERIFY_VID_INVALID_IDN: "�Է°��� �߸��Ǿ����ϴ�.",
            ServiceError_VERIFY_VID_TOKEN_NOT_INITIALIZE: "���ȵ�ũ�� �ʱ�ȭ ���� �ʾҽ��ϴ�.",
            ServiceError_VERIFY_VID_NOT_FOUND: "�Է°��� �߸��Ǿ����ϴ�.",
            ServiceError_VERIFY_VID_NOT_INVALID_X509_TYPE: "X509 ���������°� �ƴմϴ�.",
            ServiceError_VERIFY_VID_GET_RANDOM_FAILED: "random�� �������µ� �����߽��ϴ�.",
            ServiceError_VERIFY_VID_INVALID_PWD: "random�� �������µ� �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_VERIFY_VID_VERIFY_FAILED: "VID ������ �����߽��ϴ�.",

            /* cipher, hash */
            ServiceError_GET_HASH_FAILED_INVALID_INPUT: "message digest�� �����߽��ϴ�(�Է°��� �߸��Ǿ����ϴ�).",
            ServiceError_GET_HASH_FAILED_INVALID_ALGORITHM: "message digest�� �����߽��ϴ�(�������� �ʴ� �˰����Դϴ�).",
            ServiceError_GET_HASH_FAILED_UNSUPPORTED_DIGEST_ALGORITHM: "message digest�� �����߽��ϴ�(�������� �ʴ� �˰����Դϴ�).",
            ServiceError_GET_HASH_FAILED_FILE_NOT_FOUND: "message digest�� �����߽��ϴ�(������ ã�� �� �����ϴ�).",
            ServiceError_GET_HASH_FAILED_FILE_READ_FAILED: "message digest�� �����߽��ϴ�(������ �дµ� ������ �߻��߽��ϴ�).",
            ServiceError_GET_HASH_FAILED: "message digest�� �����߽��ϴ�(��Ÿ ����).",

            /* cipher, encrypt */
            ServiceError_ENCRYPT_FAILED_INVALID_INPUT: "message ��ȣȭ�� �����߽��ϴ�(�Է°��� �߸��Ǿ����ϴ�).",
            ServiceError_ENCRYPT_FAILED_KEY_IS_NULL: "message ��ȣȭ�� �����߽��ϴ�(key ���� �����ϴ�).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_KEY_LEN: "message ��ȣȭ�� �����߽��ϴ�(key ���̰� �߸��Ǿ����ϴ�).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_ALGORITHM: "message ��ȣȭ�� �����߽��ϴ�(�������� �ʴ� ��ȣȭ �˰����Դϴ�).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_MODE: "message ��ȣȭ�� �����߽��ϴ�(�������� �ʴ� �����Դϴ�).",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_PADDING: "message ��ȣȭ�� �����߽��ϴ�(�������� �ʴ� �е��Դϴ�).",
            ServiceError_ENCRYPT_FAILED_HD_IS_NULL: "message ��ȣȭ�� �����߽��ϴ�(14406).",
            ServiceError_ENCRYPT_FAILED_INIT_KEY: "message ��ȣȭ�� �����߽��ϴ�(14407).",
            ServiceError_ENCRYPT_FAILED_MAKE_KEY: "message ��ȣȭ�� �����߽��ϴ�(14408).",
            ServiceError_ENCRYPT_FAILED: "message ��ȣȭ�� �����߽��ϴ�(14409).",

            /* cipher, decrypt */
            ServiceError_DECRYPT_FAILED_INVALID_INPUT: "message ��ȣȭ�� �����߽��ϴ�(�Է°��� �߸��Ǿ����ϴ�).",
            ServiceError_DECRYPT_FAILED_KEY_IS_NULL: "message ��ȣȭ�� �����߽��ϴ�(key ���� �����ϴ�).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_KEY_LEN: "message ��ȣȭ�� �����߽��ϴ�(key ���̰� �߸��Ǿ����ϴ�).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_ALGORITHM: "message ��ȣȭ�� �����߽��ϴ�(�������� �ʴ� ��ȣȭ �˰����Դϴ�).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_MODE: "message ��ȣȭ�� �����߽��ϴ�(�������� �ʴ� �����Դϴ�).",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_PADDING: "message ��ȣȭ�� �����߽��ϴ�(�������� �ʴ� �е��Դϴ�).",
            ServiceError_DECRYPT_FAILED_HD_IS_NULL: "message ��ȣȭ�� �����߽��ϴ�(14506).",
            ServiceError_DECRYPT_FAILED_MAKE_KEY: "message ��ȣȭ�� �����߽��ϴ�(14507).",
            ServiceError_DECRYPT_FAILED_NOT_MATCHED_DOMAIN: "message ��ȣȭ�� �����߽��ϴ�(14508).",
            ServiceError_DECRYPT_FAILED: "message ��ȣȭ�� �����߽��ϴ�(14509).",

            /* envelope */
            ServiceError_ENVELOPE_FAILED_INVALID_INPUT: "���ں����� �����߽��ϴ�(�Է°��� �߸��Ǿ����ϴ�).",
            ServiceError_ENVELOPE_FAILED_INVALID_X509_CERT: "���ں����� �����߽��ϴ�(�Է��� �������� x509�� �ƴմϴ�).",
            ServiceError_ENVELOPE_FAILED: "���ں����� �����߽��ϴ�(��Ÿ ����).",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ERROR: "���� �б⿡ �����߽��ϴ�(��θ� Ȯ���ϼ���).",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ERROR: "���� ���⿡ �����߽��ϴ�(��θ� Ȯ���ϼ���).",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "���� ������ ���� ���� �б⿡ �����߽��ϴ�.",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "���� ������ ���� ���� ���⿡ �����߽��ϴ�.",

            /* deenvelope */
            ServiceError_DEENVELOPE_FAILED_INVALID_INPUT: "���ں��� ��ȣȭ�� �����߽��ϴ�(�Է°��� �߸��Ǿ����ϴ�).",
            ServiceError_DEENVELOPE_FAILED_INPUT_CANCELED: "���ں��� ��ȣȭ�� �����߽��ϴ�(�Է��� ����߽��ϴ�).",
            ServiceError_DEENVELOPE_FAILED_PIN_INCORRECT: "���ں��� ��ȣȭ�� �����߽��ϴ�(PIN ��ȣ�� Ȯ���ϼ���).",
            ServiceError_DEENVELOPE_FAILED_PWD_INCORRECT: "���ں��� ��ȣȭ�� �����߽��ϴ�(��й�ȣ�� ����߽��ϴ�).",
            ServiceError_DEENVELOPE_FAILED_FILE_READ: "���� �б⿡ �����߽��ϴ�(��θ� Ȯ���ϼ���).",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE: "���� ���⿡ �����߽��ϴ�(��θ� Ȯ���ϼ���).",
            ServiceError_DEENVELOPE_FAILED: "���ں��� ��ȣȭ�� �����߽��ϴ�.",
            ServiceError_DEENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "���� ������ ���� ���� �б⿡ �����߽��ϴ�.",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "���� ������ ���� ���� ���⿡ �����߽��ϴ�.",
            ServiceError_DEENVELOPE_FAILED_INVALID_TEXT: "���ں��� ��ȣȭ�� �����߽��ϴ�(��ȣ���� �ջ�ǰų� ������ ��ġ�� �߸��Ǿ����ϴ�).",

            /* p12 */
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED: "PFX ���ڼ��� �����߽��ϴ�(��Ÿ ����).",
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED_SELECT_CANCELED: "PFX ���ڼ��� �����߽��ϴ�(������ ����߽��ϴ�).",

            /* certificate manager, export certificate and key */
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: '������ �������⿡ �����߽��ϴ�.(�Է°��� �߸��Ǿ����ϴ�) ',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: '������ �������⿡ �����߽��ϴ�.(��й�ȣ �Է��� ����߽��ϴ�)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_PRIVATEKEY_FAILED: '������ �������⿡ �����߽��ϴ�.(����Ű�� ã�� ���߽��ϴ�)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_CERTIFICATE_FAILED: '������ �������⿡ �����߽��ϴ�.(�������� ã�� ���߽��ϴ�)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: '������ �������⿡ �����߽��ϴ�.(PIN ��ȣ�� Ȯ���ϼ���)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_LOCKED: '������ �������⿡ �����߽��ϴ�.(��ġ�� �����ϴ�)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: '������ �������⿡ �����߽��ϴ�.(��й�ȣ�� Ȯ���ϼ���)',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED: '������ �������⿡ �����߽��ϴ�.',

            /* certificate manager, import certificate and key */
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: "������ �������⿡ �����߽��ϴ�.(�Է°��� �߸��Ǿ����ϴ�)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: "������ �������⿡ �����߽��ϴ�.(��й�ȣ �Է��� ����߽��ϴ�)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: "������ �������⿡ �����߽��ϴ�.(PIN ��ȣ�� Ȯ���ϼ���)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: "������ �������⿡ �����߽��ϴ�.(��й�ȣ�� Ȯ���ϼ���)",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED: "������ �������⿡ �����߽��ϴ�.",

            /* mac address error message */
            ServiceError_MAC_ADDRESS_ERROR: 'MAC�ּ� �������⿡ �����߽��ϴ�.',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_HANDLE: 'DLL �ڵ� �������⿡ �����߽��ϴ�.',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_FUNC: 'DLL �Լ� �������⿡ �����߽��ϴ�.',
            ServiceError_MAC_ADDRESS_NONVALIDATED_RETURN_FUNC: '�Լ� ��ȯ���� ��ȿ���� �ʽ��ϴ�.',
            ServiceError_MAC_ADDRESS_FAILED_MEMORY: '�޸𸮸� �Ҵ��ϴµ� �����߽��ϴ�.',
            ServiceError_MAC_ADDRESS_FAILED_REG_OPEN: '������Ʈ���� ���µ� �����߽��ϴ�.',
            ServiceError_MAC_ADDRESS_FAILED_GET_REG_VALUE: '������Ʈ�� ���� ��µ� �����߽��ϴ�.',
            ServiceError_MAC_ADDRESS_FAILED_REG_CLOSE: '������Ʈ���� �ݴµ� �����߽��ϴ�.',
            ServiceError_MAC_ADDRESS_FAILED_GET_LAST_NETID: 'NetId�� �������µ� �����߽��ϴ�.',
            ServiceError_MAC_ADDRESS_FAILED_GET_SYSTEM_FOLDER_NAME: "system ��θ� �������µ� �����߽��ϴ�.",

            /* p11 error message */
            ServiceError_P11_CLOSE_SESSION_ERROR: "P11 Close session error",
            ServiceError_P11_CLOSE_SESSION_HANDLE_INVALID: "�ڵ��� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_P11_CLOSE_SESSION_TOKENMASTER_INVALID: "��ū �����Ͱ� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_P11_CLOSE_SESSION_FAILED_GET_TOKENLIST: "��ū ����Ʈ�� �������� ���߽��ϴ�.",
            ServiceError_P11_CLOSE_SESSION_IS_NOT_P11: "P11 ��ū�� �ƴմϴ�.",
            ServiceError_P11_CLOSE_SESSION_FAILED_CLOSE_SESSION: "Close Session�� �����Ͽ����ϴ�.",

            /* p11 HSM */
            ServiceError_P11_HSM_ERROR: "P11 HSM error",
            ServiceError_P11_HSM_NOT_EXIST_HANDLE: "�ڵ��� �������� �ʽ��ϴ�.",
            ServiceError_P11_HSM_FAILED_GET_TOKENINDENTIFIER: "��ū id�� �������µ� �����Ͽ����ϴ�.",
            ServiceError_P11_HSM_FAILED_GET_TOKENMASTER: "��ū �����͸� �������� ���߽��ϴ�.",

            /* ConvertStringFormat */
            ServiceError_CONVERT_STRING_FORMAT_ERROR: "Convert String Format error",
            ServiceError_CONVERT_STRING_FORMAT_INVALID_INPUT: "�Է°��� �߸��Ǿ����ϴ�.",
            ServiceError_CONVERT_STRING_FORMAT_FAILED_CHANGE_STRING_FORMAT: "���ڿ��� ��ȯ�ϴµ� �����Ͽ����ϴ�.",

            /* CheckExistenceCertByPath */
            ServiceError_CHECK_EXISTENCE_CERT_ERROR: "Check Existence cert error",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_CERTINDENTIFIER: "������ id�� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_ARGUMENT: "��ȿ���� �Էµ��� �ʾҽ��ϴ�.",
            ServiceError_CHECK_EXISTENCE_CERT_SAME_TOKEN: "���� ��ū�� �Է��Ͽ����ϴ�.",
            ServiceError_CHECK_EXISTENCE_CERT_NOT_EXIST_HANDLE: "�ڵ��� �������� �ʽ��ϴ�.",

            /* getFilePath */
            ServiceError_GET_FILE_PATH_CANCELED: "���� ������ ����߽��ϴ�.",

            /* securedisk */
            ServiceError_SECUREDISK_BACKUP_ERROR: "������ũ ��� �� ������ �����Ͽ����ϴ�.",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_CERTINDENTIFIER: "�Է� ���� �߸��Ǿ����ϴ�.(������)",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_KEYINDENTIFIER: "Ű ���� �߸��Ǿ����ϴ�.",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_TOKENINDENTIFIER: "��ū ���� �߸��Ǿ����ϴ�.",
            ServiceError_SECUREDISK_BACKUP_INVALID_VALUE: "���� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_BACKUPCERTLIST: "��� ������ ����Ʈ�� ����µ� �����߽��ϴ�.",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_SECURETOKEN: "������ũ�� ã�µ� �����Ͽ����ϴ�.",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_HANDLE: "�Է� �ڵ��� �������� �ʽ��ϴ�.",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_DATA: "�����Ͱ� �߸��Ǿ��ų� �������� �ʽ��ϴ�.",
            ServiceError_SECUREDISK_BACKUP_INVALID_RANGE: "�������� ������ �߸��Ǿ����ϴ�.",
            ServiceError_SECUREDISK_BACKUP_INVALID_PIN: "��й�ȣ�� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_SECUREDISK_BACKUP_FAILED_CASTING: "��ȯ�� �����Ͽ����ϴ�.",

            /* pin complex check */
            ServiceError_CHECK_COMPLEX_PIN_ERROR: '��й�ȣ ���Ἲ �˻� ����',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PINS: '���� �Էµ��� �ʾҽ��ϴ�',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SAME_PWD: '�Է��� �ΰ��� ��й�ȣ�� ��ġ���� �ʽ��ϴ�.',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_LENGTH: '�ű� ��й�ȣ�� 10�� �̻� 30�� ���Ϸ� �Է��ϼ���.',
            ServiceError_CHECK_COMPLEX_PIN_SAME_PWD: '�ű� ������ ��й�ȣ�� ���� ������ ��й�ȣ�� �����մϴ�.',
            ServiceError_CHECK_COMPLEX_PIN_GETPIN_FAILED: '�Է°� ȹ�濡 ���� �߽��ϴ�(Ű���� ���� ���� ����)',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PIN: '�Է��� ��й�ȣ�� ������Ģ�� ����˴ϴ�.',
            ServiceError_CHECK_COMPLEX_PIN_UPDATE_ERROR: '��������ȭ�� ���� ���� ������ ��й�ȣ�� 10�� �̻� 30�� ���Ϸ� ������ �ֽʽÿ�.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_CHAR: '���ڿ� Ư�����ڸ� �ϳ� �̻� �����Ͻʽÿ�.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_NUMBER: '�����ڿ� Ư�����ڸ� �ϳ� �̻� �����Ͻʽÿ�.',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_SPECIAL: '���ڿ� �����ڸ� �ϳ� �̻� �����Ͻʽÿ�.',
            ServiceError_CHECK_COMPLEX_PIN_NO_CHAR: '�����ڸ� �ϳ� �̻� �����Ͻʽÿ�.',
            ServiceError_CHECK_COMPLEX_PIN_NO_NUMBER: '���ڸ� �ϳ� �̻� �����Ͻʽÿ�.',
            ServiceError_CHECK_COMPLEX_PIN_NO_SPECIAL: 'Ư�����ڸ� �ϳ� �̻� �����Ͻʽÿ�(\", \', \\, \| ����)',
            ServiceError_CHECK_COMPLEX_PIN_PATTERN: "�ű� ��й�ȣ ���� ��Ģ:\n1. 1111 �Ǵ� aaaa�� ���� 4�� �̻� ���� ���� �������� ��� �Ұ�\n2. 1234 �Ǵ� abcd ���� 4�� ���ӵ� ���� ��� �Ұ�\n3. ababab�� ���� 3�� �̻� �α��� �������� ��� ����\n4. abcabc�� ���� 2�� �̻� ������ �������� ��� ����\n",
            //ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_SET_LENGTH: 18015,
            ServiceError_CHECK_COMPLEX_PIN_INVALID_SET_LENGTH: "��й�ȣ �ڸ��� ������ 8�� �̻����� �Է��� �ּ���.",

            ServiceError_GET_TOKEN_INFO_NOT_HSM: "������ū�� �ƴմϴ�.",
            ServiceError_GET_TOKEN_INFO_UNSUPPORTED_OS: "�ش� �ü������ ���� ����� ������ �� �����ϴ�.",

            /* keyboardProtection */
            ServiceError_KEYBOARDPROTECTION_INVALID_ARGUMENT: "�Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_KEYBOARDPROTECTION_CREATE_FAILED: "Ű���庸�� ���� �����߽��ϴ�.",
            ServiceError_KEYBOARDPROTECTION_INIT_FAILED: "Ű���庸�� �ʱ�ȭ �����߽��ϴ�.",
            ServiceError_KEYBOARDPROTECTION_GETPIN_FAILED: "�Է°� ȹ�濡 ���� �߽��ϴ�(Ű���� ���� ���� ����).",
            ServiceError_KEYBOARDPROTECTION_GETPUBLICKEY_FAILED: "Ű���庸�� ����Ű ȹ�濡 �����߽��ϴ�.",

            /* mobile usim */
            ServiceError_MOBILE_USIM_NOT_PRESENT: "����Ʈ���� ���α׷��� ��ġ���� �ʾҽ��ϴ�.",
            ServiceError_MOBILE_USIM_INVALID_OPTIONS: "����Ʈ������ �ɼ��� �߸��Ǿ����ϴ�.",
            ServiceError_MOBILE_USIM_USER_CANCELED: "����Ʈ������ ��ҵǾ����ϴ�.",

            /* mobisign */
            ServiceError_MOBISIGN_INVALID_OPTIONS: "�������� �ɼ��� �߸��Ǿ����ϴ�.",
            ServiceError_MOBISIGN_NOT_INSTALLED: "������ ���α׷��� ��ġ���� �ʾҽ��ϴ�.",
            ServiceError_MOBISIGN_NOT_LATEST_VERSION: "������ ������ �߸��Ǿ����ϴ�.",
            ServiceError_MOBISIGN_USER_CANCELED: "�������� ��ҵǾ����ϴ�.",
            ServiceError_MOBISIGN_NOT_LOADED: "������ ��� �ε��� �����߽��ϴ�.",

            /* relay */
            /* relay.raon */
            ServiceError_RELAY_RAON_NEED_CALL_GETREFNUM: "������ ���翡 �����߽��ϴ�(������ȣ ��û�� �ʿ��մϴ�).",
            ServiceError_RELAY_RAON_FAILED_TO_GETREFNUM: "������ ���翡 �����߽��ϴ�(������ȣ ��û�� �����߽��ϴ�).",
            ServiceError_RELAY_RAON_FAILED_NO_CERT: "������ ���翡 �����߽��ϴ�(���۵� �������� �����ϴ�).",
            ServiceError_RELAY_RAON_FAILED_TO_GETCERT: "������ ���翡 �����߽��ϴ�(������ �ܸ��� ������ȣ�� �Է����ּ���).",
            ServiceError_RELAY_RAON_FAILED_TO_EXPORTCERT: "������ ���翡 �����߽��ϴ�(������ �������⿡ �����߽��ϴ�).",
            ServiceError_RELAY_RAON_FAILED_AUTHORIZATION_FAILE: "������ ���翡 �����߽��ϴ�(������ȣ�� ��ġ���� �ʽ��ϴ�.)",
            ServiceError_RELAY_RAON_NOT_SUPPORTED_TOKEN: "������ ���翡 �����߽��ϴ�(�������� �ʴ� ��ū�Դϴ�.).",
            // �ݺ��� ������ Ż�� ����� ���� ��������
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_INPUT_CANCELED: "��й�ȣ �Է��� ����ڿ� ���� ��� �Ǿ����ϴ�.",
            ServiceError_RELAY_RAON_CERTIFICATE_INVALID_CERTINDENTIFIER: "�ش� �������� ã�� �� �����ϴ�.",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED: "������ ���翡 �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "������ ���翡 �����߽��ϴ�(��й�ȣ�� Ȯ���ϼ���).",
            ServiceError_RELAY_RAON_TOKEN_FUNCTION_NOT_SUPPORTED: "������ ���翡 �����߽��ϴ�(�������� �ʴ� ��ü�Դϴ�).",
            ServiceError_RELAY_RAON_IVALID_REF_NUM: "������ ���翡 �����߽��ϴ�(���ι�ȣ ������ �����߽��ϴ�).",

            /* certificateSynchronize */
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_CERTIDNTIFIER: "�Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_ARGUMENT: "�Է°��� �߸� �Ǿ����ϴ�.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INPUT_CANCELED: "��й�ȣ �Է��� ����ڿ� ���� ��� �Ǿ����ϴ�.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED: "��й�ȣ ���濡 �����߽��ϴ�.",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_SIGN_PWD_FAILED: "��й�ȣ ���濡 �����߽��ϴ�(����� ��й�ȣ�� Ȯ���ϼ���)",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_KM_PWD_FAILED: "��й�ȣ ���濡 �����߽��ϴ�(Ű�й�� ��й�ȣ�� Ȯ���ϼ���)",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_FIND_KMCERTIFICATE: "Ű�й�� �������� �������� �ʽ��ϴ�.",

            /* Koscom Envelop */
            ServiceError_KOSCOM_ENVELOP_FAILED: "Koscom ���ں��� ��ȣȭ�� �����߽��ϴ�.",
            ServiceError_KOSCOM_ENVELOP_INVALID_CERT_FAILED: "�������� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_KOSCOM_ENVELOP_INVALID_PLAIN_FAILED: "������ ��ȿ���� �ʽ��ϴ�.",
            ServiceError_KOSCOM_ENVELOP_EXTRACT_KEY_FAILED: "Ű ���⿡ �����Ͽ����ϴ�.",
            ServiceError_KOSCOM_ENVELOP_BASE64_ENCODE_FAILED: "base64 encoding�� �����߽��ϴ�.",

            /* Koscom Develop */
            ServiceError_KOSCOM_DEVELOP_FAILED: "Koscom ���ں��� ��ȣȭ�� �����߽��ϴ�.",
            ServiceError_KOSCOM_DEVELOP_INVALID_ENVELOPDATA_FAILED: "���ں��� �޽����� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_KOSCOM_DEVELOP_INVALID_INPUT_FAILED: "���ں����� ���� �������� �Էµ��� �ʾҽ��ϴ�.",
            ServiceError_KOSCOM_DEVELOP_FAILED_INPUT_CANCELED: "�Է��� ����߽��ϴ�.",
            ServiceError_KOSCOM_DEVELOP_FAILED_PWD_INCORRECT: "��й�ȣ�� Ʋ�Ƚ��ϴ�.",
            ServiceError_KOSCOM_DEVELOP_FAILED_PIN_INCORRECT: "pin ��ȣ�� Ʋ�Ƚ��ϴ�.",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED: "���ں��� ��ȣȭ�� ���� ������ ���� �� �����ϴ�.",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ: "���ں��� ��ȣȭ�� ���� ������ ���� �� �����ϴ�.",

            /* Koscom Encrypt */
            ServiceError_KOSCOM_ENCRYPT_FAILED: "encrypt �����Ͽ����ϴ�.",
            ServiceError_KOSCOM_ENCRYPT_INVALID_PLAIN: "�Է°��� �߸� �Ǿ����ϴ�. (plain)",
            ServiceError_KOSCOM_ENCRYPT_INVALID_SESSIONKEY: "�Է°��� �߸� �Ǿ����ϴ�. (sessionkey)",
            ServiceError_KOSCOM_ENCRYPT_ENCODING_FAILED: "base64 encode �����Ͽ����ϴ�.",
            ServiceError_KOSCOM_ENCRYPT_SESSIONID_FAILED: "����ID ȹ�� �����Ͽ����ϴ�.",

            /* Koscom Decrypt */
            ServiceError_KOSCOM_DECRYPT_FAILED: "decrypt �����Ͽ����ϴ�.",
            ServiceError_KOSCOM_DECRYPT_INVALID_ENCRYPTDATA: "�Է°��� �߸� �Ǿ����ϴ�. (encryptData).",
            ServiceError_KOSCOM_DECRYPT_INVALID_SESSIONKEY: "�Է°��� �߸� �Ǿ����ϴ�. (sessionkey)",
            ServiceError_KOSCOM_DECRYPT_ENCODING_FAILED: "����ID ȹ�� �����Ͽ����ϴ�.",

            /* SetPFXNPKIFile */
            ServiceError_SETPFXNPKIFILE_FAILED: "SetPFXNPKIFile �����Ͽ����ϴ�.",
            ServiceError_SETPFXNPKIFILE_UNKNOWN_FILE: "�� �� ���� �����Դϴ�.",
            ServiceError_SETPFXNPKIFILE_INVALID_FILEPATH: "�߸��� ���� ����Դϴ�.",
            ServiceError_SETPFXNPKIFILE_INVALID_TYPE: "�߸��� Ÿ���Դϴ�.",
            ServiceError_SETPFXNPKIFILE_NOT_FIND_FILE: "�ش� ����� ������ �������� �ʽ��ϴ�.",
            ServiceError_SETPFXNPKIFILE_INVALID_PWD: "��й�ȣ�� Ʋ�Ƚ��ϴ�.",
            ServiceError_SETPFXNPKIFILE_PFX_PKCS8_DECODE_FAIL: "PKCS8 ���ڵ��� �����߽��ϴ�.",
            ServiceError_SETPFXNPKIFILE_DER_NOT_FIND_SIGNPRIKEY_FILE: "�ش� ��ο��� signPri.key ������ ã�� ���� �����ϴ�.",
            ServiceError_SETPFXNPKIFILE_PFX_DECODE_FAILED: "PFX Decode �����߽��ϴ�. (��й�ȣ�� Ʋ�Ƚ��ϴ�)",
            ServiceError_SETPFXNPKIFILE_DER_DECODE_FAILED: "Der(X509) Decode �����߽��ϴ�.",

            /* USBKey */
            ServiceError_USBKEYTOKEN_WRITE_BUFFER_FAILED: "�����Ͻ� ������ū�� ��������� �����մϴ�.(3.5KBytes �ʿ�)",

            /* KoscomFileEnvelop */
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED                                     : "���ں��� ��ȣȭ�� �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_CERT_FAILED                        : "�������� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_PLAIN_FAILED                       : "������ ��ȿ���� �ʽ��ϴ�.",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_DECODE_FAILED                       : "base64 decoding�� �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_ENCODE_FAILED                       : "base64 encoding�� �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_ENVELOP_NOT_SUPPORTED                              : "������ ��������� ���� �������� �ʽ��ϴ�.",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE_ACCESS_DENIED            : "���� ������ ���� ���� �б⿡ �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE                          : "���� ���⿡ �����߽��ϴ�.",

            /* KoscomFileDevelop */
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED                                     : "���ں��� ��ȣȭ�� �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_ENVELOPDATA_FAILED                 : "���ں��� �޽����� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_INPUT_FAILED                       : "�Է°��� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_INPUT_CANCELED                      : "�Է��� ����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PWD_INCORRECT                       : "��й�ȣ�� Ʋ�Ƚ��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PIN_INCORRECT                       : "PIN ��ȣ�� Ʋ�Ƚ��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED             : "���� ������ ���� ���� �б⿡ �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ                           : "���� �б⿡ �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_DECODE_FAILED                       : "base64 decoding�� �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_ENCODE_FAILED                       : "base64 encoding�� �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_WRITE                          : "���� �б⿡ �����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_INPUT_CANCELED                             : "PIN��ȣ �Է��� ����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_PWD_INPUT_CANCELED                         : "��й�ȣ �Է��� ����߽��ϴ�.",
            ServiceError_KOSCOM_FILE_DEVELOP_CERTIFICATE_INVALID_CERTINDENTIFIER        : "�Է°��� �߸��Ǿ����ϴ�.",

            /* GetCertificateListWithDn */
            ServiceError_GETCERTIFICATELIST_WITH_DN_FAILED                              : "������ �������⿡ �����߽��ϴ�.",
            ServiceError_GETCERTIFICATELIST_WITH_DN_INVALID_INPUT_FAILED                : "�Է°��� ��ȿ���� �ʽ��ϴ�.",
            ServiceError_GETCERTIFICATELIST_WITH_DN_NO_SEARCH_CERTIFIATE_FAILED         : "��û�� �ش��ϴ� �������� ã�� �� �����ϴ�.",

            /* HASH Signature Error */
            ServiceError_HASH_LENGTH_ERROR: " Hash ���� �߸� �Ǿ����ϴ�. ( not 32 byte ) ",

            /* SCRIPT */
            ScriptError_SETMATCHEDCONTEXT_NOT_CERTIFICATE: "��û�Ͻ� �������� �����ϴ�.",
            ScriptError_SIGNDATAB64_NOT_PLAINTEXT: "�Է� �Ű������� null�Դϴ�.",
            ScriptError_CERTSERVICESETUP_VERSION_MODULE: "��ġ�� ��� ������ �����ϴ�, �ֽŹ����� ��ġ���ּ���,",
            ScriptError_CERTSERVICESETUP_VERSION_DLL: "��ġ�� DLL ������ �����ϴ�, �ֽŹ����� ��ġ���ּ���,",
            ScriptError_UCPIDREQUSER_NOT_USERAGREEMENT: "�Է� �Ű������� null�Դϴ�. (userAgreement)",
            ScriptError_UCPIDREQUSER_NOT_MODE: "�Է� �߸��� �Ű����� �Դϴ�. (mode)",
            ScriptError_PFX_MAKESIGNATURE_ERORR: "���ڼ��� �� ������ �߻��Ͽ����ϴ�.",
            ScriptError_ISSUE_BILL_SAFARINOTSUPPORT: '[���ĸ�(Safari) �������� "ȯ�漳��>��������>��Ű" �����κ��� "�׻����"���� �����Ͻ� �Ŀ� ���������� �߱��� �����Ͽ� �ֽñ� �ٶ��ϴ�.]',
            ScriptError_UPDATE_BILL_SAFARINOTSUPPORT: '[���ĸ�(Safari) �������� "ȯ�漳��>��������>��Ű" �����κ��� "�׻����"���� �����Ͻ� �Ŀ� ���������� ������ �����Ͽ� �ֽñ� �ٶ��ϴ�.]',
            ScriptError_ENVELOP_INVALID_VALUE: '�Է¸Ű������� NULL�Դϴ�.',
            ScriptError_DEVELOP_INVALID_VALUE: '�Է¸Ű������� NULL�Դϴ�.',
            ScriptError_DEVELOP_NOT_CERTIFICATE: '��ġ�ϴ� �������� �����ϴ�.',
            ScriptError_ENCRYPTDATA_INVALID_VALUE: '�Է¸Ű������� NULL�Դϴ�.',
            ScriptError_DECRYPTDATA_INVALID_VALUE: '�Է¸Ű������� NULL�Դϴ�.',
            ScriptError_KOSCOM_ENCRYPT_INVALID_VALUE: '�Է¸Ű������� NULL�Դϴ�.',
            ScriptError_KOSCOM_DECRYPT_INVALID_VALUE: '�Է¸Ű������� NULL�Դϴ�.'
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
            ServiceError_VERIFY_VID_INVALID_PWD: "It failed to bring random��Please check the password��.",
            ServiceError_VERIFY_VID_VERIFY_FAILED: "It failed to VID verification.",

            /* cipher, hash */
            ServiceError_GET_HASH_FAILED_INVALID_INPUT: "message digest I failed��Input value was wrong��.",
            ServiceError_GET_HASH_FAILED_INVALID_ALGORITHM: "message digest I failed��This is an unsupported algorithm��.",
            ServiceError_GET_HASH_FAILED_UNSUPPORTED_DIGEST_ALGORITHM: "message digest I failed��This is an unsupported algorithm��.",
            ServiceError_GET_HASH_FAILED_FILE_NOT_FOUND: "message digest I failed��File not found��.",
            ServiceError_GET_HASH_FAILED_FILE_READ_FAILED: "message digest I failed��There was an error to read the file��.",
            ServiceError_GET_HASH_FAILED: "message digest I failed��Other error��.",

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
            ServiceError_ENCRYPT_FAILED: "It failed in message encryption��14409��.",

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
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED: "It failed to PFX signature��Other error��.",
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED_SELECT_CANCELED: "It failed to PFX signature��I was deselected��.",

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
            // �ݺ��� ������ Ż�� ����� ���� ��������
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
            ServiceError_KOSCOM_ENCRYPT_INVALID_PLAIN: "The input value is invalid.��plain��",
            ServiceError_KOSCOM_ENCRYPT_INVALID_SESSIONKEY: "The input value is invalid. (sessionkey)",
            ServiceError_KOSCOM_ENCRYPT_ENCODING_FAILED: "Base64 encoding failed.",
            ServiceError_KOSCOM_ENCRYPT_SESSIONID_FAILED: "���ë����ID������������ު�����",

            /* Koscom Decrypt */
            ServiceError_KOSCOM_DECRYPT_FAILED: "Decrypt Failed",
            ServiceError_KOSCOM_DECRYPT_INVALID_ENCRYPTDATA: "The input value is invalid. (encryptData).",
            ServiceError_KOSCOM_DECRYPT_INVALID_SESSIONKEY: "The input value is invalid. (sessionkey)",
            ServiceError_KOSCOM_DECRYPT_ENCODING_FAILED: "Session ID acquisition failed.",

            /* SetPFXNPKIFile */
            ServiceError_SETPFXNPKIFILE_FAILED: "SetPFXNPKIFile �������ު�����",
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
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_INPUT_CANCELED                      : "Input canceled.��",
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
            ScriptError_UCPIDREQUSER_NOT_USERAGREEMENT: "Input parameter is null. ��userAgreement��",
            ScriptError_UCPIDREQUSER_NOT_MODE: "Input parameter is invalid. ��mode��",
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
            ServiceError_UNKNOWN: "ڱ��?����?��?��",

            /* common */
            ServiceError_INVALID_INPUT: "�������������᪷������ު���",
            ServiceError_BASE64_ENCODE_FAILED: "Base64 Encode�������ު�����",
            ServiceError_BASE64_DECODE_FAILED: "Base64 Decode�������ު�����",

            /* token */
            ServiceError_TOKEN_NOT_INITIALIZED: "�������ƫ��ǫ���������Ѣ������ު���Ǫ�����",
            ServiceError_TOKEN_NOT_FOUND: "�������ƫ��ǫ�����������ު���",
            ServiceError_TOKEN_BAD: "�������ƫ��ǫ�������?������ȪǪ�����Ѣ�����ƪ���������",
            ServiceError_TOKEN_UBIKEY_NOT_INSTALLED: "Ubikey�����󫹫�?�몵��ƪ��ު��󡣫׫����򫤫󫹫�?�몷�ƪ���������",
            ServiceError_TOKEN_UBIKEY_NOT_LATEST_VERSION: "Ubikey�������?�����ǪϪ���ު��󡣫׫��������檷�ƪ���������",
            ServiceError_TOKEN_UBIKEY_INVALID_OPTIONS: "Ubikey���׫�����������?�Ǫ���",
            ServiceError_TOKEN_NOT_RECOGNIZED: "��ʦ���쪿��?����Ϫ���ު���",
            ServiceError_TOKEN_FUNCTION_NOT_SUPPORTED: "��?����Ǫ���Ѧ���򫵫�?�Ȫ��ƪ��ު���",

            ServiceError_SSLCONFIG_SERVICE_SSL_INIT_FAILED: "SSL��?�ӫ�����Ѣ�����������ު�����",

            /* service common */
            ServiceError_SERVICE_REJECTED: "MangoWire��ë�?��������Ϊ��ᡢ��?�ӫ�����?���ު���",
            ServiceError_SESSIONID_NOT_EXIST: "���ë�������?Ѣ�બ﷪쪿�����ު�����?�Ǫ������?���ƪ���������",
            ServiceError_SESSION_IS_USING: "�����ᶪǫ��ë�����������Ǫ������?���ƪ���������",
            ServiceError_OPERATION_NOT_SUPPORTED: "����?�ȪǪ��ʪ�Ѧ���Ǫ���",
            ServiceError_OPERATION_NOT_EXPECTED: "�������Ѧ����?�����몳�ȪϪǪ��ު���",
            ServiceError_INVALID_INPUT_TOKENID: "��?������ܬ���᪷������ު���",
            ServiceError_MEMORY_ALLOCATION_FAILED: "������ܪ�?�ƪ��������ު�����",

            ServiceError_NO_SSL_CERTIFICATE: "��?���쪿SSL������ު���",
            ServiceError_NOT_SUPPORTED_LANGUAGE: "����?�Ȫ��ƪ������ު�����ު���",

            /* services */
            ServiceError_CERTIFICATE_NOT_FOUND: "��?��������ު���",

            /* delete service */
            ServiceError_DELETE_CERTIFICATE_FAILED: "��?���������������ު�������������Ϋ���?��",
            ServiceError_DELETE_CERTIFICATE_INVALID_CERTINDENTIFIER: "�������������᪷������ު���",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PROGRAM_FILES_PATH_DELETE_WARNING: "�׫����ի�����������쪿��?�������Ǫ��ު���",//"Invalid arugment(certIdentifier)");
            ServiceError_DELETE_PASSWORD_INCORRECT: "��?���������������ު��������ѫ���?�ɪ����㪷�ƪ�����������",
            ServiceError_DELETE_PIN_INCORRECT: "��?���������������ު�����PIN��?�����㪷�ƪ�����������",
            ServiceError_DELETE_PIN_FAILED_INPUT_CANCELED: "��?���������������ު�����PIN��?�������򫭫�󫻫몷�ު�������",
            ServiceError_DELETE_PWD_FAILED_INPUT_CANCELED: "��?���������������ު������ѫ���?�ɪ������򫭫�󫻫몷�ު�������",

            /* encrypt vid random */
            ServiceError_ENCRYPT_VIDRANDOM_INVALID_CERTINDENTIFIER: "�������������᪷������ު���",//"Invalid arugment(keyIdentifier or recipientCertificate)");
            ServiceError_ENCRYPT_VIDRANDOM_FAILED: "EncryptVIDRandom failed.",
            ServiceError_ENCRYPT_VIDRANDOM_TOKEN_NOT_INITIALIZE: "�������ƫ��ǫ���������Ѣ������ު���Ǫ�����",

            /* generate key pair */
            ServiceError_GENERATE_KEYPAIR_INVALID_ARGUMENT: "�������������᪷������ު���",//"Invalid arugment(algorithm or modularLength)");
            ServiceError_GENERATE_KEYPAIR_FAILED: "Gen key fail",
            ServiceError_GENERATE_KEYPAIR_TOKEN_NOT_INITIALIZE: "�������ƫ��ǫ���������Ѣ������ު���Ǫ�����",

            ServiceError_REPLAY_NOT_MATCHED_MESSAGE_NUMBER: "��Ϋ�?�������檷�ƪ�����������M��",
            ServiceError_REPLAY_CANNOT_REQUEST_WITHOUT_TIC_MESSAGE: "��Ϋ�?�������檷�ƪ�����������S��",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_NOT_MATCHED_KEY_PAIR: "�����쪿?٥�������ګ���춪ʪ�ު���",
            ServiceError_GENERATE_SIGNATURE_NOT_EXPECTED_KEYIDENTIFIER: "not expected keyIdentifier",
            ServiceError_GENERATE_SIGNATURE_FAILED: "����٣���������ު�����",
            ServiceError_GENERATE_SIGNATURE_TOKEN_NOT_INITAILIZE: "�������ƫ��ǫ���������Ѣ������ު���Ǫ�����",
            ServiceError_GENERATE_SIGNATURE_FAILED_PWD_INCORRECT: "��?���Ϋѫ���?�����������ުêƪ��ު���",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_LOCKED: "����٣���������ު�����(?�Ǫ���ë�����ު�����)",
            ServiceError_GENERATE_SIGNATURE_FAILED_SGPKCS8_PRIVATEKEYINFO_DECODE_FAILED: "����٣���������ު�����(�ѫ���?�ɪ����㪷�ƪ���������)",
            ServiceError_GENERATE_SIGNATURE_ENCRYPT_VIDRANDOM_FAILED: "����٣���������ު�����(���ꫢ����?������������)", //"encrypt VID Random failed(0x%x, false)"
            ServiceError_GENERATE_SIGNATURE_INVALID_ARGUMENT: "�������������᪷������ު���",//"Invalid input (plain, keyIdentifier, false)",
            ServiceError_GENERATE_SIGNATURE_CANCELED: "�ꫯ�����ȫɫ�?��������?��?�˪�ê�����Ἢ���ު�����",
            ServiceError_GENERATE_SIGNATURE_KSTOKEN_PIN_INCORRECT: "PIN��?�����������ުêƪ��ު���",
            ServiceError_GENERATE_SIGNATURE_KOSCOM_SIGN_MUST_HAVE_CERTIFICATE: "Koscom����٣��?������驪˪ʪ�ު���",
            ServiceError_GENERATE_SIGNATURE_FAILED_PIN_INCORRECT: "����٣���������ު�����(�ѫ���?�ɪ����㪷�ƪ���������).",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ERROR: "�ի������?��������������ު������ѫ������㪷�ƪ�����������",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ERROR: "�ի����������?�ߪ��������ު������ѫ������㪷�ƪ�����������",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_READ_ACCESS_DENIED: "?�ڪ����˪�ꡢ�ի������?��������������ު�����",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_WRITE_ACCESS_DENIED: "?�ڪ����˪�ꡢ�ի����������?�ߪ��������ު�����",
            ServiceError_GENERATE_SIGNATURE_FAILED_FILE_MEMORY_ALLOCATION: "���ꪬ���몷������٣���������ު�����",

            /* get certificate list */
            ServiceError_GET_CERTIFICATE_LIST_FAILED: "Function Failed",
            ServiceError_GET_CERTIFICATE_LIST_TOKEN_NOT_INITIALIZE: "�������ƫ��ǫ���������Ѣ������ު���Ǫ�����",
            ServiceError_GET_CERTIFICATE_LIST_UBIKEY_NOT_INITIALIZE: "UBIKey��?�ӫ�����Ѣ������ƪ��ު���",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PIN_INCORRECT: "PIN��?�����㪷�ƪ���������",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPIN_CANCELED: "PIN����������Ἢ��ު�����",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_INPUTPWD_CANCELED: "�ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_PWD_INCORRECT: "�ѫ���?�ɪ����㪷�ƪ���������",
            ServiceError_GET_CERTIFICATE_LIST_FAILED_UBIKEY_INPUT_CANCELED: "Ubikey��?�ӫ��򫭫�󫻫몷�ު�����",

            /* get certificate */
            ServiceError_GET_CERTIFICATE_INVALID_ARGUMENT: "�������������᪷������ު���",//"certIdentifier"
            ServiceError_GET_CERTIFICATE_FAILED: "��?���Ϋ����?�Ȫ��������ު�����",
            ServiceError_GET_CERTIFICATE_NOT_FOUND: "��?����̸�Ī���ު���",
            ServiceError_GET_CERTIFICATE_TOKEN_NOT_INITIALIZE: "�������ƫ��ǫ���������Ѣ������ު���Ǫ�����",

            /* setMatchedContext */
            ServiceError_SETMATCHED_CONTEXT_INPUT_CANCELED: "�ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_SETMATCHED_CONTEXT_INVALID_CUSTOM_SID: "�����������ë����ID���᪷������ު���",
            ServiceError_SETMATCHED_CONTEXT_CUSTOM_SID_IS_NULL: "���ë����ID��NULL���������ު�����",
            ServiceError_SETMATCHED_CONTEXT_CREATE_SESSION_UNIT_FAILED: "���ë������������������ު�����",

            /* get ca certificate */
            ServiceError_GET_CA_CERTIFICATE_INVALID_ARGUMENT: "�������������᪷������ު���",

            /* push certificate */
            ServiceError_PUSH_CERTIFICATE_INVALID_ARGUMENT: "�������������᪷������ު���",//"Invalid arugment(keyIdentifier or certificate, false)",
            ServiceError_PUSH_CERTIFICATE_NOT_EXPECTED_KEYIDENTIFIER: "not expected keyIdentifier",
            ServiceError_PUSH_CERTIFICATE_FAILED: "PushCertificate failed.",
            ServiceError_PUSH_CERTIFICATE_TOKEN_NOT_INITIALIZE: "�������ƫ��ǫ���������Ѣ������ު���Ǫ�����",

            /* verify service */
            ServiceError_VERIFY_CERTIFICATE_FAILED: "��?���ѫ���?�ɪ�������������ު�����(������Ϋ���?)",
            ServiceError_VERIFY_CERTIFICATE_INVALID_CERTINDENTIFIER: "�������������᪷������ު���",

            /* generate signature */
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_INCORRECT: "����٣���������ު�����(�ѫ���?�ɪ����㪷�ƪ���������)",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_INCORRECT: "����٣���������ު�����(�ѫ���?�ɪ����㪷�ƪ���������)",
            ServiceError_GENERATE_SIGNATURE_TOKEN_PIN_LOCKED: "����٣���������ު�����(?�Ǫ���ë�����ު�����)",
            ServiceError_GENERATE_SIGNATURE_TOKEN_CERT_PIN_LOCKED: "����٣���������ު�����(?�Ǫ���ë�����ު�����)",

            /* generate keypair */
            ServiceError_GENERATE_KEYPAIR_CANCELLED: "������?����������������?���˪�êƫ���󫻫몵��ު�����",
            ServiceError_GENERATE_KEYPAIR_PIN_INCORRECT: "�ѫ���?�ɪ��᪷������ު���������?���������������������ު�����",
            ServiceError_GENERATE_KEYPAIR_PIN_LOCKED: "�ѫ���?�ɪ���ë�����ơ�������?���������������������ު�����",
            ServiceError_GENERATE_KEYPAIR_PWD_INCORRECT: "�ѫ���?�ɪ����ުê����ګ����������������ު�����",

            /* cmp common*/
            ServiceError_CMP_MEMORY_ALLOCATION_FAILED: "������ܪ�?�ƪ��������ު�����",
            ServiceError_CMP_SERVER_CONNECT_FAILED: "CA��?��?�Ȫ�������������ު�����",

            /* issue / recover */
            ServiceError_CMP_ISSUE_INVALID_ARGUMENT: "��?��?�������������������᪷������ު���",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_CA: "����?�ȪǪ��ʪ���?Ѧ?��?�ɪ���������ު�����",
            ServiceError_CMP_ISSUE_INPUTPIN_CANCELED: "�ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_CMP_ISSUE_PKCS5_ENCRYPT_FAILED: "PKCS#5 ��?�����������ު�����",
            ServiceError_CMP_ISSUE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "PKCS#8 ��ë�?�����������������ު�����",
            ServiceError_CMP_ISSUE_SAVE_CERTIFICATE_FAILED: "��?����������������ު�����",
            ServiceError_CMP_ISSUE_IMPORT_INIT_FAILED: "?�����쪿��?����������������ު�������initialize������",
            ServiceError_CMP_ISSUE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "?�����쪿����٣����?����������������ު�����",
            ServiceError_CMP_ISSUE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "?�����쪿����������?����������������ު�����",
            ServiceError_CMP_ISSUE_IMPORT_CA_PUB_IMPORT_FAILED: "CA����������������������ު�����",
            ServiceError_CMP_ISSUE_IMPORT_FINAL_FAILED: "?�����쪿��?����������������ު�������finalize������",
            ServiceError_CMP_ISSUE_NOT_SUPPORTED_BILL: "����?���ϫ���?�Ȫ���ƪ��ު���",
            ServiceError_CMP_ISSUE_LOW_SPEC_ICCARD: "IC Card������?�Ȫ��ƪ��ʪ���?���Ǫ���",
            ServiceError_CMP_ISSUE_NOT_USABLE_TOKNE_FAILED: "��?�����ǫ�������?٥����?�����몳�ȪϪǪ��ު���",

            ServiceError_CMP_UPDATE_INVALID_ARGUMENT: "��?�����������������������᪷������ު���",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_CA: "����?�ȪǪ��ʪ���?Ѧ?��?�ɪ���������ު�����",
            ServiceError_CMP_UPDATE_INPUTPIN_CANCELED: "�ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_CMP_UPDATE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "���檹����?���Ϋ����?�Ȫ��������ު�����",
            ServiceError_CMP_UPDATE_ADD_OLD_CERTIFICATE_FAILED: "���檹����?������ʥ���������ު�����",
            ServiceError_CMP_UPDATE_ADD_OLD_KEY_FAILED: "���檹�뫭?�ի��������ʥ���������ު�����",
            ServiceError_CMP_UPDATE_PKCS5_ENCRYPT_FAILED: "PKCS#5 ��?�����������ު�����",
            ServiceError_CMP_UPDATE_MAKE_ENCRYPTED_PRIVATEKEY_INFO_FAILED: "PKCS#8 ��ë�?�����������������ު�����",
            ServiceError_CMP_UPDATE_SAVE_CERTIFICATE_FAILED: "��?����������������ު�����",
            ServiceError_CMP_UPDATE_INVALID_PASSWORD: "ͯ����?���Ϋѫ���?�ɪ����㪷�ƪ���������",
            ServiceError_CMP_UPDATE_IMPORT_INIT_FAILED: "?�����쪿��?����������������ު�������initialize������",
            ServiceError_CMP_UPDATE_IMPORT_SIGN_CERTIFICATE_IMPORT_FAILED: "?�����쪿����٣����?����������������ު�����",
            ServiceError_CMP_UPDATE_IMPORT_KM_CERTIFICATE_IMPORT_FAILED: "?�����쪿����������?����������������ު�����",
            ServiceError_CMP_UPDATE_IMPORT_CA_PUB_IMPORT_FAILED: "CA����������������������ު�����",
            ServiceError_CMP_UPDATE_IMPORT_FINAL_FAILED: "?�����쪿��?����������������ު�������initialize������",
            ServiceError_CMP_UPDATE_NOT_SUPPORTED_BILL: "����?���ϫ���?�Ȫ���ƪ��ު���",
            ServiceError_CMP_UPDATE_NOT_UPDATE_TIME: "��?�������檹�몳�Ȫ��Ǫ���Ѣ��Ϫ���ު�����?�����������?Ѣ�ڪ�﷪졢1�����񪫪�ʦ���Ǫ���",
            ServiceError_CMP_UPDATE_INVALID_PIN: "PIN��?�����㪷�ƪ���������",
            ServiceError_CMP_UPDATE_NOT_USABLE_TOKNE_FAILED: "��?�����ǫ�������?٥����?�����몳�ȪϪǪ��ު���",

            ServiceError_CMP_REVOKE_INVALID_ARGUMENT: "��?��?ѥ���������������᪷������ު���",
            ServiceError_CMP_REVOKE_NOT_SUPPORTED_CA: "����?�ȪǪ��ʪ���?Ѧ?��?�ɪ���������ު�����",
            ServiceError_CMP_REVOKE_INPUTPIN_CANCELED: "�ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_CMP_REVOKE_EXPORT_CERTIFICATE_AND_KEY_FAILED: "?ѥ������?���Ϋ����?�Ȫ��������ު�����",
            ServiceError_CMP_REVOKE_ADD_OLD_CERTIFICATE_FAILED: "?ѥ������?������ʥ���������ު�����",
            ServiceError_CMP_REVOKE_ADD_OLD_KEY_FAILED: "?ѥ���뫭?�ի��������ʥ���������ު�����",
            ServiceError_CMP_REVOKE_INVALID_PASSWORD: "�ѫ���?�ɪ����㪷�ƪ���������",
            ServiceError_CMP_REVOKE_INVALID_PIN: "PIN��?�����㪷�ƪ���������",
            ServiceError_CMP_REVOKE_PIN_LOCKED: "PIN����ë�����ƪ��ު���",

            /* get PCIdentity */
            ServiceError_GET_PCIDENTITY_FAILED_MEMORY_ALLOCATION_FAILED: "������ܪ�?�ƪ��������ު�����",
            ServiceError_GET_PCIDENTITY_FAILED_INVALID_WINDOWS: "PC��ܬ���򫤫��?�ȪǪ��ު���Ǫ�����(Windows�������OS�ϡ���������?�Ȫ��ު���)",
            ServiceError_GET_PCIDENTITY_FAILED: "PC��ܬ���򫤫��?�ȪǪ��ު���Ǫ�����(������Ϋ���?)",

            /* certificate manager, changePin */
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERTINDENTIFIER: "�������������᪷������ު���",
            ServiceError_CHANGE_PIN_FAILED_INPUT_CANCELED: "�ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_CHANGE_PIN_FAILED_INVALID_CERT_TYPE: "�ѫ���?�ɪ�?�ڪ��������ު�����(��?�������Ҫ���𹪬?�檷�ު�����)",
            ServiceError_CHANGE_PIN_FAILED_PIN_INCORRECT: "�ѫ���?�ɪ�?�ڪ��������ު�����(�ѫ���?�ɪ����㪷�ƪ�����������",
            ServiceError_CHANGE_PIN_FAILED_FILE_WRITE_ERROR: "�ѫ���?�ɪ�?�ڪ��������ު�����(��?����������������𹪬?�檷�ު�������",
            ServiceError_CHANGE_PIN_FAILED: "�ѫ���?�ɪ�?�ڪ��������ު�����(������Ϋ���?��",
            ServiceError_CHANGE_PIN_FAILED_PROGRAM_FILES_PATH_WARNING: "Program files��̫ҡ���쪿?٥���Ϋѫ���?�ɪ�?�ڪǪ��ު���",
            ServiceError_CHANGE_PIN_FAILED_NOT_MATCHED_PWD: "��٣��?٥���Ϋѫ���?�ɪ��������Ī�?٥���Ϋѫ���?�ɪ����Ȫ��ު���",

            /* certificate manager, export certificate */
            ServiceError_EXPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "�ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "��?���Ϋ�������?�Ȫ򫭫�󫻫몷�ު�����",
            ServiceError_EXPORT_CERTIFICATE_FAILED_INVALID_CERT_TYPE: "��?���Ϋ�������?�Ȫ��������ު�����(��?�������Ҫ���𹪬?�檷�ު�����)",
            ServiceError_EXPORT_CERTIFICATE_FAILED_SEARCH_CERTIFICATE_FAILED: "��?���Ϋ�������?�Ȫ��������ު�����(��?����?����������ު�����)",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PIN_INCORRECT: "��?���Ϋ�������?�Ȫ��������ު�����(�ѫ���?�ɪ����㪷�ƪ���������)",
            ServiceError_EXPORT_CERTIFICATE_FAILED_PWD_INCORRECT: "��?���Ϋ�������?�Ȫ��������ު������ѫ���?�ɪ����㪷�ƪ�����������",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ADD_CERTIFICATELIST_FAILED: "��?���Ϋ�������?�Ȫ��������ު�����(add certificate fail)",
            ServiceError_EXPORT_CERTIFICATE_FAILED_ENCODE_PFX_FAILED: "��?���Ϋ�������?�Ȫ��������ު�����(encode pfx fail)",
            ServiceError_EXPORT_CERTIFICATE_FAILED: "��?���Ϋ�������?�Ȫ��������ު�����(������Ϋ���?)",

            /* certificate manager, import certificate */
            ServiceError_IMPORT_CERTIFICATE_FAILED_SELECT_CANCELED: "��?���Ϋ����?�Ȫ��������ު�����(��?����?�򫭫�󫻫몷�ު�����)",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INPUT_CANCELED: "��?���Ϋ����?�Ȫ��������ު�����(�ѫ���?�ɪ������򫭫�󫻫몷�ު�����)",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX: "��?���Ϋ����?�Ȫ��������ު�����(PFX���Ҫ���?���ǪϪ���ު���)",
            ServiceError_IMPORT_CERTIFICATE_FAILED_INVALID_PFX_PASSWORD: "��?���Ϋ����?�Ȫ��������ު�����(�ѫ���?�ɪ����㪷�ƪ���������)",
            ServiceError_IMPORT_CERTIFICATE_FAILED: "��?���Ϋ����?�Ȫ��������ު�����(������Ϋ���?)",
            ServiceError_IMPORT_CERTIFICATE_NOT_AFTER_CERTIFICATE_FAILED: "�����?٥�������Ǫ�������ƪ��ު���",

            /* certificate manager, verify pin */
            ServiceError_VERIFY_PIN_FAILED_INVALID_CERTINDENTIFIER: "�ѫ���?�ɪ�������������ު����������������ުêƪ�������",
            ServiceError_VERIFY_PIN_FAILED_INPUT_CANCELED: "�ѫ���?�ɪ�������������ު����������򫭫�󫻫몷�ު�������",
            ServiceError_VERIFY_PIN_FAILED: "�ѫ���?�ɪ�������������ު������ѫ���?�ɪ����㪷�ƪ�����������",
            ServiceError_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "�ѫ���?�ɪ�������������ު�������٣��?٥������?���Ī�?٥���Ϋѫ���?�ɪ����Ȫ��ު��󣩡�",

            /* certificate manager, verify pin */
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_CERTINDENTIFIER: "�������������᪷������ު���",
            ServiceError_CHANGE_STORAGE_FAILED_INVALID_TOKENINDENTIFIER: "���ĪǪ��ʪ���?�Ǫ���",
            ServiceError_CHANGE_STORAGE_FAILED_INPUT_CANCELED: "��?����������?��?�ڪ��������ު�����(�ѫ���?�ɪ������򫭫�󫻫몷�ު�����)",
            ServiceError_CHANGE_STORAGE_FAILED_CERTIFICATE_AND_KEY_FAILED: "��?����������?��?�ڪ��������ު�����",
            ServiceError_CHANGE_STORAGE_FAILED_PIN_INCORRECT: "��?����������?��?�ڪ��������ު�����(�ѫ���?�ɪ����㪷�ƪ���������)",
            ServiceError_CHANGE_STORAGE_FAILED_PWD_INCORRECT: "��?����������?��?�ڪ��������ު������ѫ���?�ɪ����㪷�ƪ�����������",
            ServiceError_CHANGE_STORAGE_SAME_TOKEN: "?�ڪ�����?����������?���Ҫ��Ǫ���",
            ServiceError_CHANGE_STORAGE_FAILED: "��?����������?��?�ڪ��������ު�����(������Ϋ���?)",
            ServiceError_CHANGE_STORAGE_OVERWRITE_CANCELED: "?٥��������?��?�ڪ򫭫�󫻫몷�ު�����",
            ServiceError_CHANGE_STORAGE_FAILED_AFTER_CERTIFICATE: "�����?٥�������Ǫ�������ƪ��ު���",

            /* validateCertificate */
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTINDENTIFIER: "�������������᪷������ު���",
            ServiceError_VALIDATE_CERTIFICATE_INVALID_CERTIFICATE: "��?�������Ҫ��᪷������ު���",
            ServiceError_VALIDATE_CERTIFICATE_CRL_FAILED: "��?����??���������ު�����",
            ServiceError_VALIDATE_CERTIFICATE_FAILED: "��?������?��??���������ު�����(������Ϋ���?)",

            /* session manager */
            ServiceError_SESSION_MANAGER_SESSION_ID_IS_NULL: "���ë����ID������ު��󡣫��ë�����������������ު�����",

            /* validate certificate*/

            /* tray */
            ServiceError_OPERATE_TRAY_INVALID_TRAY_VENDOR: "�ȫ쫤�꫹�Ȫ��᪷������ު���",
            ServiceError_OPERATE_TRAY_INVALID_TRAY_OPERATE: "�ȫ쫤�����ª���?�ǪϪ���ު���",

            /* SignVerify */
            ServiceError_VERIFY_SIGNATURE_INVALID_ARGUMENT: "�������������᪷������ު���",
            ServiceError_VERIFY_SIGNATURE_PLAIN_IS_NULL: "�����������驪�����٣�Ǫ���",
            ServiceError_VERIFY_SIGNATURE_UNSUPPORT_SIGNTYPE: "�ު�����?�Ȫ���ƪ��ʪ�����٣�Ǫ���",
            ServiceError_VERIFY_SIGNATURE_INVALID_X509_TYPE: "X509��?���������ǪϪ���ު���",
            ServiceError_VERIFY_SIGNATURE_INVALID_PUBLIC_KEY_TYPE: "�������������ǪϪ���ު���",
            ServiceError_VERIFY_SIGNATURE_VERIFY_FAILED: "��٣??���������ު�����",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_FAILED: "�ի������?��������������ު�����",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_FAILED: "�ի����������?�ߪ��������ު�����",
            ServiceError_VERIFY_SIGNATURE_FILE_READ_ACCESS_DENIED: "?�ڪ����˪�ꡢ�ի������?��������������ު�����",
            ServiceError_VERIFY_SIGNATURE_FILE_WRITE_ACCESS_DENIED: "?�ڪ����˪�ꡢ�ի����������?�ߪ��������ު�����",
            ServiceError_VERIFY_SIGNATURE_FILE_MEMORY_ALLOCATE_FAILED: "���ꪬ���몷����٣���������ު�����",

            /* VIDVerify */
            ServiceError_VERIFY_VID_INVALID_CERTID: "�����������ުêƪ��ު���",
            ServiceError_VERIFY_VID_INVALID_KEYID: "�����������ުêƪ��ު���",
            ServiceError_VERIFY_VID_INVALID_IDN: "�����������ުêƪ��ު���",
            ServiceError_VERIFY_VID_TOKEN_NOT_INITIALIZE: "�������ƫ��ǫ���������Ѣ������ƪ��ު���Ǫ�����",
            ServiceError_VERIFY_VID_NOT_FOUND: "�����������ުêƪ��ު���",
            ServiceError_VERIFY_VID_NOT_INVALID_X509_TYPE: "X509��?������������ު���",
            ServiceError_VERIFY_VID_GET_RANDOM_FAILED: "random���êƪ���Ϊ��������ު�����",
            ServiceError_VERIFY_VID_INVALID_PWD: "random���êƪ���Ϊ��������ު������ѫ���?�ɪ����㪷�ƪ�����������",
            ServiceError_VERIFY_VID_VERIFY_FAILED: "VID??���������ު�����",

            /* cipher, hash */
            ServiceError_GET_HASH_FAILED_INVALID_INPUT: "message digest���������ު����������������ުêƪ�������",
            ServiceError_GET_HASH_FAILED_INVALID_ALGORITHM: "message digest���������ު���������?�Ȫ��ƪ��ʪ����뫴�꫺��Ǫ�����",
            ServiceError_GET_HASH_FAILED_UNSUPPORTED_DIGEST_ALGORITHM: "message digest���������ު���������?�Ȫ��ƪ��ʪ����뫴�꫺��Ǫ�����",
            ServiceError_GET_HASH_FAILED_FILE_NOT_FOUND: "message digest���������ު������ի����몬̸�Ī���ު��󣩡�",
            ServiceError_GET_HASH_FAILED_FILE_READ_FAILED: "message digest���������ު������ի������?��˫���?��?�檷�ު�������",
            ServiceError_GET_HASH_FAILED: "message digest���������ު�����������Ϋ���?����",

            /* cipher, encrypt */
            ServiceError_ENCRYPT_FAILED_INVALID_INPUT: "message��?�����������ު���(�����������ުêƪ��ު�)��",
            ServiceError_ENCRYPT_FAILED_KEY_IS_NULL: "message��?�����������ު���(key����������ު���)��",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_KEY_LEN: "message��?�����������ު���(key�����������ުêƪ��ު�)��",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_ALGORITHM: "message��?�����������ު���(����?�Ȫ��ƪ��ʪ���?�����뫴�꫺��Ǫ�)��",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_MODE: "message��?�����������ު���(����?�Ȫ��ƪ��ʪ����«�?�ɪǪ�)��",
            ServiceError_ENCRYPT_FAILED_UNSUPPORTED_PADDING: "message��?�����������ު���(����?�Ȫ��ƪ��ʪ��ѫǫ��󫰪Ǫ�)��",
            ServiceError_ENCRYPT_FAILED_HD_IS_NULL: "message��?�����������ު�����14406����",
            ServiceError_ENCRYPT_FAILED_INIT_KEY: "message��?�����������ު�����14407����",
            ServiceError_ENCRYPT_FAILED_MAKE_KEY: "message��?�����������ު�����14408��",
            ServiceError_ENCRYPT_FAILED: "message��?�����������ު�����14409����",

            /* cipher, decrypt */
            ServiceError_DECRYPT_FAILED_INVALID_INPUT: "message��?�����������ު���(�����������ުêƪ��ު�)��",
            ServiceError_DECRYPT_FAILED_KEY_IS_NULL: "message��?�����������ު���(key����������ު���)��",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_KEY_LEN: "message��?�����������ު���(key�����������ުêƪ��ު�)��",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_ALGORITHM: "message��?�����������ު���(����?�Ȫ��ƪ��ʪ���?�����뫴�꫺��Ǫ�)��",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_MODE: "message��?�����������ު���(����?�Ȫ��ƪ��ʪ����«�?�ɪǪ�)��",
            ServiceError_DECRYPT_FAILED_UNSUPPORTED_PADDING: "message��?�����������ު���(����?�Ȫ��ƪ��ʪ��ѫǫ��󫰪Ǫ�)��",
            ServiceError_DECRYPT_FAILED_HD_IS_NULL: "message��?�����������ު�����14506����",
            ServiceError_DECRYPT_FAILED_MAKE_KEY: "message��?�����������ު�����14507����",
            ServiceError_DECRYPT_FAILED_NOT_MATCHED_DOMAIN: "message��?�����������ު�����14508����",
            ServiceError_DECRYPT_FAILED: "message��?�����������ު���(14509)��",

            /* envelope */
            ServiceError_ENVELOPE_FAILED_INVALID_INPUT: "�����ժ��������ު���(�����������ުêƪ��ު�)��",
            ServiceError_ENVELOPE_FAILED_INVALID_X509_CERT: "�����ժ��������ު���(�������쪿��?����x509�Ϫ���ު���)��",
            ServiceError_ENVELOPE_FAILED: "�����ժ��������ު���(������Ϋ���?)��",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ERROR: "�ի������?��������������ު������ѫ������㪷�ƪ�����������",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ERROR: "�ի����������?�ߪ��������ު������ѫ������㪷�ƪ�����������",
            ServiceError_ENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "?�ڪ����˪�ꡢ�ի������?��������������ު�����",
            ServiceError_ENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "?�ڪ����˪�ꡢ�ի����������?�ߪ��������ު�����",

            /* deenvelope */
            ServiceError_DEENVELOPE_FAILED_INVALID_INPUT: "�������?�����������ު���(�����������ުêƪ��ު�)��",
            ServiceError_DEENVELOPE_FAILED_INPUT_CANCELED: "�������?�����������ު���(�����򫭫�󫻫몷�ު���)��",
            ServiceError_DEENVELOPE_FAILED_PIN_INCORRECT: "�������?�����������ު���(PIN��?�����㪷�ƪ�������)��",
            ServiceError_DEENVELOPE_FAILED_PWD_INCORRECT: "�������?�����������ު���(�ѫ���?�ɪ򫭫�󫻫몷�ު���)��",
            ServiceError_DEENVELOPE_FAILED_FILE_READ: "�ի������?��������������ު������ѫ������㪷�ƪ�����������",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE: "�����������?�ߪ��������ު������ѫ������㪷�ƪ�����������",
            ServiceError_DEENVELOPE_FAILED: "�������?�����������ު�����",
            ServiceError_DEENVELOPE_FAILED_FILE_READ_ACCESS_DENIED: "?�ڪ����˪�ꡢ�ի������?��������������ު�����",
            ServiceError_DEENVELOPE_FAILED_FILE_WRITE_ACCESS_DENIED: "?�ڪ����˪�ꡢ�ի����������?�ߪ��������ު�����",
            ServiceError_DEENVELOPE_FAILED_INVALID_TEXT: "��������?�����������ު�������?�����ߪ����ꡢ�ի��������ᶪ����ުêƪ�������",

            /* p12 */
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED: "PFX����٣���������ު�������Ϋ���?����",
            ServiceError_GET_CERTIFICATE_LIST_P12_FAILED_SELECT_CANCELED: "PFX����٣���������ު�������?����𶪷�ު�������",

            /* certificate manager, export certificate and key */
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: '?٥���Ϋ�������?�Ȫ��������ު������������������ުêƪ�����',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: '?٥���Ϋ�������?�Ȫ��������ު��������ѫ���?�ɪ������򫭫�󫻫몷�ު�����',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_PRIVATEKEY_FAILED: '?٥���Ϋ�������?�Ȫ��������ު���������������̸�Ī���ު���',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_SEARCH_CERTIFICATE_FAILED: '?٥���Ϋ�������?�Ȫ��������ު�������?٥����̸�Ī���ު���Ǫ�����',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: '?٥���Ϋ�������?�Ȫ��������ު�������PIN��?�����㪷�ƪ���������',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PIN_LOCKED: '?٥���Ϋ�������?�Ȫ��������ު��������ǫЫ�������ë�����ƪ��ު���',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: '?٥���Ϋ�������?�Ȫ��������ު��������ѫ���?�ɪ����㪷�ƪ���������',
            ServiceError_EXPORT_CERTIFICATE_AND_KEY_FAILED: '?٥���Ϋ�������?�Ȫ��������ު�����',

            /* certificate manager, import certificate and key */
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INVALID_ARGUMENT: "?٥���Ϋ����?�Ȫ��������ު������������������ުêƪ�����",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_INPUT_CANCELED: "?٥���Ϋ����?�Ȫ��������ު��������ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PIN_INCORRECT: "?٥���Ϋ����?�Ȫ��������ު�������PIN��?�����㪷�ƪ���������",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED_PWD_INCORRECT: "?٥���Ϋ����?�Ȫ��������ު��������ѫ���?�ɪ����㪷�ƪ���������",
            ServiceError_IMPORT_CERTIFICATE_AND_KEY_FAILED: "?٥���Ϋ����?�Ȫ��������ު�����",

            /* mac address error message */
            ServiceError_MAC_ADDRESS_ERROR: 'MAC���ɫ쫹�����𪹪���������ު�����',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_HANDLE: 'DLL�Ϋϫ�ɫ�����𪹪���������ު�����',
            ServiceError_MAC_ADDRESS_FAILED_GET_DLL_FUNC: 'DLL??�򫤫��?�Ȫ��������ު�����',
            ServiceError_MAC_ADDRESS_NONVALIDATED_RETURN_FUNC: '??��?��������?�ǪϪ���ު���',
            ServiceError_MAC_ADDRESS_FAILED_MEMORY: '������ܪ�?�ƪ�Ϊ��������ު�����',
            ServiceError_MAC_ADDRESS_FAILED_REG_OPEN: '�쫸���ȫ���Ҫ����Ȫ��������ު�����',
            ServiceError_MAC_ADDRESS_FAILED_GET_REG_VALUE: '�쫸���ȫ����������������ު�����',
            ServiceError_MAC_ADDRESS_FAILED_REG_CLOSE: '�쫸���ȫ���ͪ����������ު�����',
            ServiceError_MAC_ADDRESS_FAILED_GET_LAST_NETID: 'NetId���êƪ���Ϊ��������ު�����',
            ServiceError_MAC_ADDRESS_FAILED_GET_SYSTEM_FOLDER_NAME: "system�ѫ������𪹪�Ϊ��������ު�����",

            /* p11 error message */
            ServiceError_P11_CLOSE_SESSION_ERROR: "P11 Close session error",
            ServiceError_P11_CLOSE_SESSION_HANDLE_INVALID: "�ϫ�ɫ몬��?�Ǫ���",
            ServiceError_P11_CLOSE_SESSION_TOKENMASTER_INVALID: "��?����ޫ���?����?�Ǫ���",
            ServiceError_P11_CLOSE_SESSION_FAILED_GET_TOKENLIST: "��?����Ϋ꫹�Ȫ�����Ǫ��ު���Ǫ�����",
            ServiceError_P11_CLOSE_SESSION_IS_NOT_P11: "P11��?���󪬪���ު���",
            ServiceError_P11_CLOSE_SESSION_FAILED_CLOSE_SESSION: "Close Session���������ު�����",

            /* p11 HSM */
            ServiceError_P11_HSM_ERROR: "P11 HSM error",
            ServiceError_P11_HSM_NOT_EXIST_HANDLE: "�ϫ�ɫ몬����ު���",
            ServiceError_P11_HSM_FAILED_GET_TOKENINDENTIFIER: "��?����id���êƪ���Ϊ��������ު�����",
            ServiceError_P11_HSM_FAILED_GET_TOKENMASTER: "��?����ޫ���?���ê�?�ު�����",

            /* ConvertStringFormat */
            ServiceError_CONVERT_STRING_FORMAT_ERROR: "Convert String Format error",
            ServiceError_CONVERT_STRING_FORMAT_INVALID_INPUT: "����������?�Ǫ���",
            ServiceError_CONVERT_STRING_FORMAT_FAILED_CHANGE_STRING_FORMAT: "���֪��?������Ϊ��������ު�����",

            /* CheckExistenceCertByPath */
            ServiceError_CHECK_EXISTENCE_CERT_ERROR: "Check Existence cert error",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_CERTINDENTIFIER: "?٥��id����?�Ǫ���",
            ServiceError_CHECK_EXISTENCE_CERT_INVALID_ARGUMENT: "��?��������������ƪ��ʪ���",
            ServiceError_CHECK_EXISTENCE_CERT_SAME_TOKEN: "�Ҫ���?������������ު�����",
            ServiceError_CHECK_EXISTENCE_CERT_NOT_EXIST_HANDLE: "�ϫ�ɫ몬����ު���",

            /* getFilePath */
            ServiceError_GET_FILE_PATH_CANCELED: '�ի��������?����𶪷�ު�����',

            /* securedisk */
            ServiceError_SECUREDISK_BACKUP_ERROR: "����ǫ������ΫЫë����ëת���ӫꫫ�Ы���������ު�����",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_CERTINDENTIFIER: "�����������ުêƪ��ު�����?٥����",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_KEYINDENTIFIER: "��?���������ުêƪ��ު���",
            ServiceError_SECUREDISK_BACKUP_FAILED_INVALID_TOKENINDENTIFIER: "��?������������ުêƪ��ު���",
            ServiceError_SECUREDISK_BACKUP_INVALID_VALUE: "������?�ǪϪ���ު���",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_BACKUPCERTLIST: "�Ыë����ë�?٥���Ϋ꫹�Ȫ��ª���������ު�����",
            ServiceError_SECUREDISK_BACKUP_FAILED_FIND_SECURETOKEN: "��ǫ�������?����������ު�����",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_HANDLE: "�����ϫ�ɫ몬����ު���",
            ServiceError_SECUREDISK_BACKUP_NOT_EXIST_DATA: "��?������?�Ǫ��몫����ު���",
            ServiceError_SECUREDISK_BACKUP_INVALID_RANGE: "��?������?�����ުêƪ��ު���",
            ServiceError_SECUREDISK_BACKUP_INVALID_PIN: "�ѫ���?�ɪ���?�ǪϪ���ު���",
            ServiceError_SECUREDISK_BACKUP_FAILED_CASTING: "?�����������ު�����",

            /* pin complex check */
            ServiceError_CHECK_COMPLEX_PIN_ERROR: '�ѫ���?�ɪ������������ë�����?',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PINS: '������������ƪ��ު���Ǫ���',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SAME_PWD: '�������쪿죪ĪΫѫ���?�ɪ����Ȫ��ު���',
            ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_LENGTH: '10����߾����Ю?٥���Ϋѫ���?�ɪ��������ƪ�������',
            ServiceError_CHECK_COMPLEX_PIN_SAME_PWD: '��Ю?٥���Ϋѫ���?�ɪ�ͯ��?٥���Ϋѫ���?�ɪ��Ҫ��˪ʪ�ު���',
            ServiceError_CHECK_COMPLEX_PIN_GETPIN_FAILED: '������������������ު�������?��?�ɫ������ƫ�֧�ѫ���?��',
            ServiceError_CHECK_COMPLEX_PIN_INVALID_PIN: '���������ѫ���?�ɪ�����Ю�Ϊ����㪷�ު���',
            ServiceError_CHECK_COMPLEX_PIN_UPDATE_ERROR: '��������?�����몿�������?٥���Ϋѫ���?�ɪ�10����߾��?�ڪ��ƪ���������',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_CHAR: '?�������������߾�ߪߪʪ�����',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_NUMBER: '���������������߾�ߪߪʪ�����',
            ServiceError_CHECK_COMPLEX_PIN_ONLY_SPECIAL: '?����������߾�ߪߪʪ�����',
            ServiceError_CHECK_COMPLEX_PIN_NO_CHAR: '��������߾�ߪߪʪ�����',
            ServiceError_CHECK_COMPLEX_PIN_NO_NUMBER: '?������߾�ߪߪʪ�����',
            ServiceError_CHECK_COMPLEX_PIN_NO_SPECIAL: '�����������߾�ߪߪʪ���(\", \', \\, \| ��𶪯)',
            ServiceError_CHECK_COMPLEX_PIN_PATTERN: "��Ю�ѫ���?������Ю��:\n1. 1111�Ѫ�aaaa�Ϊ誦���Ҫ�����4���߾֧?�������֪��������ʦ\n2. 1234�Ѫ�abcd�誦��4����߾֧?�������֪��������ʦ\n3. ababab�Ϊ誦��3���߾�����֧?�������֪��������ʦ\n4. abcabc�Ϊ誦��2���߾�����֧?�������֪��������ʦ\n",
            //ServiceError_CHECK_COMPLEX_PIN_NOT_SHORT_SET_LENGTH: 18015,
            ServiceError_CHECK_COMPLEX_PIN_INVALID_SET_LENGTH: "�ѫ���?�ɪ���?�����Ҫϡ�8����߾���������ƪ���������",

            ServiceError_GET_TOKEN_INFO_NOT_HSM: "�������ƫ���?���󪬪���ު���",
            ServiceError_GET_TOKEN_INFO_UNSUPPORTED_OS: "���Ϋ��ګ�?�ƫ��󫰫����ƫ�˪ϡ���Ѧ����?�����몳�ȪϪǪ��ު���",

            /* keyboardProtection */
            ServiceError_KEYBOARDPROTECTION_INVALID_ARGUMENT: "�������������᪷������ު���",
            ServiceError_KEYBOARDPROTECTION_CREATE_FAILED: "�������ƫ���?��?�ɪ�?�����������ު�����",
            ServiceError_KEYBOARDPROTECTION_INIT_FAILED: "�������ƫ���?��?�ɪ���Ѣ�����������ު�����",
            ServiceError_KEYBOARDPROTECTION_GETPIN_FAILED: "������������������������ު�����(�������ƫ���?��?��?������?)",
            ServiceError_KEYBOARDPROTECTION_GETPUBLICKEY_FAILED: "�������ƫ���?��?�ɪ���������������������ު�����",

            /* mobile usim */
            ServiceError_MOBILE_USIM_NOT_PRESENT: "����?�����ҫ׫���બ���󫹫�?�몵��ƪ��ު���Ǫ�����",
            ServiceError_MOBILE_USIM_INVALID_OPTIONS: "����?����?�Ϋ��׫�������ުêƪ��ު���",
            ServiceError_MOBILE_USIM_USER_CANCELED: "����?����?������Ἢ���ު�����",

            /* mobisign */
            ServiceError_MOBISIGN_INVALID_OPTIONS: "obiSign���׫������?�Ǫ���",
            ServiceError_MOBISIGN_NOT_INSTALLED: "MobiSign�׫���બ���󫹫�?�몵��ƪ��ު���",
            ServiceError_MOBISIGN_NOT_LATEST_VERSION: "MobiSign�Ϋ�?��������ުêƪ��ު���",
            ServiceError_MOBISIGN_USER_CANCELED: "MobiSign�ϫ���󫻫몵��ު�����",
            ServiceError_MOBISIGN_NOT_LOADED: "MobiSign�⫸��?���?��?�ߪ��������ު�����",

            /* relay */
            /* relay.raon */
            ServiceError_RELAY_RAON_NEED_CALL_GETREFNUM: "��?���Ϋ���?���������ު�������?��?�ϴ����驪˪ʪ�ު�����",
            ServiceError_RELAY_RAON_FAILED_TO_GETREFNUM: "��?���Ϋ���?���������ު�������?��?�ϴ���������ު�������",
            ServiceError_RELAY_RAON_FAILED_NO_CERT: "��?���Ϋ���?���������ު��������᪵�쪿��?��������ު��󣩡�",
            ServiceError_RELAY_RAON_FAILED_TO_GETCERT: "��?���Ϋ���?���������ު���������Ӯ�Ǫ���?��?���������ƪ�����������",
            ServiceError_RELAY_RAON_FAILED_TO_EXPORTCERT: "��?���Ϋ���?���������ު�������?���Ϋ�������?�Ȫ��������ު�������",
            ServiceError_RELAY_RAON_FAILED_AUTHORIZATION_FAILE: "��?���Ϋ���?���������ު�������?��?�����Ȫ��ު��󣩡�",
            ServiceError_RELAY_RAON_NOT_SUPPORTED_TOKEN: "��?���Ϋ���?���������ު���������?�Ȫ���ƪ��ʪ���?����Ǫ�����",
            // �ݺ��� ������ Ż�� ����� ���� ��������
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_INPUT_CANCELED: "�ѫ���?�ɪ���������?��?�˪�êƫ���󫻫몵��ު�����",
            ServiceError_RELAY_RAON_CERTIFICATE_INVALID_CERTINDENTIFIER: "����?٥����̸�Ī��몳�Ȫ��Ǫ��ު���",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED: "?٥���Ϋ���?���������ު������ѫ���?�ɪ����㪷�ƪ�����������",
            ServiceError_RELAY_RAON_VERIFY_PIN_FAILED_NOT_MATCHED_PWD: "?٥���Ϋ���?���������ު������ѫ���?�ɪ����㪷�ƪ�����������",
            ServiceError_RELAY_RAON_TOKEN_FUNCTION_NOT_SUPPORTED: "?٥���Ϋ���?���������ު���������?�Ȫ���ƪ��ʪ���ǫ����Ǫ�����",
            ServiceError_RELAY_RAON_IVALID_REF_NUM: "?٥���Ϋ���?���������ު����������?��??���������ު�������",

            /* certificateSynchronize */
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_CERTIDNTIFIER: "��������親ꡣ",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INVALID_ARGUMENT: "��������親ꡣ",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_INPUT_CANCELED: "�ѫ���?�������ϫ�?��?�˪����㪵��ު�����",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED: "�ѫ���?��?�ڪ��������ު�����",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_SIGN_PWD_FAILED: "�ѫ���?��?�ڪ��������ު�������?�ʫѫ���?�ɪ����㪷�ƪ���������",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_KM_PWD_FAILED: "�ѫ���?��?�ڪ��������ު�������?�����īѫ���?�ɪ����㪷�ƪ���������",
            ServiceError_CERTIFICATE_SYNCHRONIZE_FAILED_FIND_KMCERTIFICATE: "��?������?٥��������ު���",

            /* Koscom Envelop */
            ServiceError_KOSCOM_ENVELOP_FAILED: "Koscom�����ա���?�����������ު�����",
            ServiceError_KOSCOM_ENVELOP_INVALID_CERT_FAILED: "?٥������?�ǪϪ���ު���",
            ServiceError_KOSCOM_ENVELOP_INVALID_PLAIN_FAILED: "�������?�Ǫ���",
            ServiceError_KOSCOM_ENVELOP_EXTRACT_KEY_FAILED: "��?������������ު�����",
            ServiceError_KOSCOM_ENVELOP_BASE64_ENCODE_FAILED: "base64 encoding���������ު�����",

            /* Koscom Develop */
            ServiceError_KOSCOM_DEVELOP_FAILED: "Koscom��������?�����������ު�����",
            ServiceError_KOSCOM_DEVELOP_INVALID_ENVELOPDATA_FAILED: "�����ի�ë�?������?�ǪϪ���ު���",
            ServiceError_KOSCOM_DEVELOP_INVALID_INPUT_FAILED: "�����ժ����Ī����?٥������������ƪ��ު���",
            ServiceError_KOSCOM_DEVELOP_FAILED_INPUT_CANCELED: "�����򫭫�󫻫몷�ު�����",
            ServiceError_KOSCOM_DEVELOP_FAILED_PWD_INCORRECT: "�ѫ���?�ɪ����ުêƪ�����",
            ServiceError_KOSCOM_DEVELOP_FAILED_PIN_INCORRECT: "pin��?�����ުêƪ�����",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED: "��������?�������Ī����ի������?�����몳�Ȫ��Ǫ��ު���",
            ServiceError_KOSCOM_DEVELOP_FAILED_FILE_READ: "��������?�������Ī����ի������?�����몳�Ȫ��Ǫ��ު���",

            /* Koscom Encrypt */
            ServiceError_KOSCOM_ENCRYPT_FAILED: "encrypt�������ު�����",
            ServiceError_KOSCOM_ENCRYPT_INVALID_PLAIN: "����������?�Ǫ�����plain��",
            ServiceError_KOSCOM_ENCRYPT_INVALID_SESSIONKEY: "����������?�Ǫ��� (sessionkey)",
            ServiceError_KOSCOM_ENCRYPT_ENCODING_FAILED: "base64 encoding���������ު�����",
            ServiceError_KOSCOM_ENCRYPT_SESSIONID_FAILED: "���ë����ID������������ު�����",

            /* Koscom Decrypt */
            ServiceError_KOSCOM_DECRYPT_FAILED: "decrypt�������ު�����",
            ServiceError_KOSCOM_DECRYPT_INVALID_ENCRYPTDATA: "����������?�Ǫ��� (encryptData).",
            ServiceError_KOSCOM_DECRYPT_INVALID_SESSIONKEY: "����������?�Ǫ��� (sessionkey)",
            ServiceError_KOSCOM_DECRYPT_ENCODING_FAILED: "���ë����ID������������ު�����",

            /* SetPFXNPKIFile */
            ServiceError_SETPFXNPKIFILE_FAILED: "SetPFXNPKIFile �������ު�����",
            ServiceError_SETPFXNPKIFILE_UNKNOWN_FILE: "ڱ�Ϋի�����ѫ�",
            ServiceError_SETPFXNPKIFILE_INVALID_FILEPATH: "��?�ʫի�����Ϋѫ��Ǫ���",
            ServiceError_SETPFXNPKIFILE_INVALID_TYPE: "����﷫����תǪ���",
            ServiceError_SETPFXNPKIFILE_NOT_FIND_FILE: "���Ϋѫ��Ϋի����몬����ު���",
            ServiceError_SETPFXNPKIFILE_INVALID_PWD: "�ѫ���?�ɪ����ުêƪ�����",
            ServiceError_SETPFXNPKIFILE_PFX_PKCS8_DECODE_FAIL: "PKCS8�ǫ�?�ɪ��������ު�����",
            ServiceError_SETPFXNPKIFILE_DER_NOT_FIND_SIGNPRIKEY_FILE: "���Ϋ�?��߾��signPri.key�ի������̸�Ī��몳�Ȫ��Ǫ��ު���",
            ServiceError_SETPFXNPKIFILE_PFX_DECODE_FAILED: "PFX Decode�������ު�����(�ѫ���?�ɪ����ުêƪ���)",
            ServiceError_SETPFXNPKIFILE_DER_DECODE_FAILED: "Der��X509��Decode�������ު�����",

            /* USBKey */
            ServiceError_USBKEYTOKEN_WRITE_BUFFER_FAILED: "��?���������?�����������洪����몷�ު�����3.5KBytes��驣�",

            /* KoscomFileEnvelop */
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED                                     : "�����ա���?�����������ު�����",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_CERT_FAILED                        : "?٥������?�ǪϪ���ު���",
            ServiceError_KOSCOM_FILE_ENVELOP_INVALID_PLAIN_FAILED                       : "�������?�Ǫ���",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_DECODE_FAILED                       : "base64 decoding���������ު�����",
            ServiceError_KOSCOM_FILE_ENVELOP_BASE64_ENCODE_FAILED                       : "base64 encoding���������ު�����",
            ServiceError_KOSCOM_FILE_ENVELOP_NOT_SUPPORTED                              : "?٥���Ϋ����?�ȪϪު�����?�Ȫ���ƪ��ު���",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE_ACCESS_DENIED            : "?�ڪ����˪�ꡢ�ի������?��������������ު�����",
            ServiceError_KOSCOM_FILE_ENVELOP_FAILED_FILE_WRITE                          : "�ի����������?�ߪ��������ު�����",

            /* KoscomFileDevelop */
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED                                     : "��������?�����������ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_ENVELOPDATA_FAILED                 : "�����ի�ë�?������?�ǪϪ���ު���",
            ServiceError_KOSCOM_FILE_DEVELOP_INVALID_INPUT_FAILED                       : "����������?�ǪϪ���ު���",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_INPUT_CANCELED                      : "�����򫭫�󫻫몷�ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PWD_INCORRECT                       : "�ѫ���?�ɪ����ުêƪ�����",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_PIN_INCORRECT                       : "PIN��?�����ުêƪ�����",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ_ACCESS_DENIED             : "?�ڪ����˪�ꡢ�ի������?��������������ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_READ                           : "�ի������?��������������ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_DECODE_FAILED                       : "base64 decoding���������ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_BASE64_ENCODE_FAILED                       : "base64 encoding���������ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_FAILED_FILE_WRITE                          : "�ի������?��������������ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_INPUT_CANCELED                             : "PIN��?�������򫭫�󫻫몷�ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_PWD_INPUT_CANCELED                         : "�ѫ���?�ɪ������򫭫�󫻫몷�ު�����",
            ServiceError_KOSCOM_FILE_DEVELOP_CERTIFICATE_INVALID_CERTINDENTIFIER        : "����������?�Ǫ���",

            /* GetCertificateListWithDn */
            ServiceError_GETCERTIFICATELIST_WITH_DN_FAILED                              : "?٥���Ϋ����?�Ȫ��������ު�����",
            ServiceError_GETCERTIFICATELIST_WITH_DN_INVALID_INPUT_FAILED                : "����������?�ǪϪ���ު���",
            ServiceError_GETCERTIFICATELIST_WITH_DN_NO_SEARCH_CERTIFIATE_FAILED         : "�ϴ��??����?٥����̸�Ī��몳�Ȫ��Ǫ��ު���",
            
            /* HASH Signature Error */
            ServiceError_HASH_LENGTH_ERROR: " �ϫë���������?�Ǫ��� ( not 32 byte ) ",

            /* SCRIPT */
            ScriptError_SETMATCHEDCONTEXT_NOT_CERTIFICATE: "�ꫯ�����Ȫ��쪿?٥��������ު���",
            ScriptError_SIGNDATAB64_NOT_PLAINTEXT: "�����ѫ��?����null�Ǫ���",
            ScriptError_CERTSERVICESETUP_VERSION_MODULE: "���󫹫�?�몷���⫸��?��Ϋ�?�������ʪ�ު��������?�����򫤫󫹫�?�몷�ƪ���������",
            ScriptError_CERTSERVICESETUP_VERSION_DLL: "���󫹫�?�몷��DLL�Ϋ�?�������ʪ�ު��������?�����򫤫󫹫�?�몷�ƪ���������",
            ScriptError_UCPIDREQUSER_NOT_USERAGREEMENT: "�����ѫ��?����null�Ǫ��� ��userAgreement��",
            ScriptError_UCPIDREQUSER_NOT_MODE: "�����ѫ��?��?����?�Ǫ��� ��mode��",
            ScriptError_PFX_MAKESIGNATURE_ERORR: "����٣��˫���?��?�檷�ު�����",
            ScriptError_ISSUE_BILL_SAFARINOTSUPPORT: '[���ի��꣨Safari���֫髦���Ρ���������>��������>���ë�?�������Ҫ�ݻ�ª��Ȫ���ʦ����?�ڪ�������������?��?������ƪ���������]',
            ScriptError_UPDATE_BILL_SAFARINOTSUPPORT: '[���ի��꣨Safari���֫髦���Ρ���������>��������>���ë�?�������Ҫ�ݻ�ª��Ȫ���ʦ����?�ڪ�������������?������������ƪ���������]',
            ScriptError_ENVELOP_INVALID_VALUE: '�����ѫ��?����NULL�Ǫ���',
            ScriptError_DEVELOP_INVALID_VALUE: '�����ѫ��?����NULL�Ǫ���',
            ScriptError_DEVELOP_NOT_CERTIFICATE: '���Ȫ���?٥��������ު���',
            ScriptError_ENCRYPTDATA_INVALID_VALUE: '�����ѫ��?����NULL�Ǫ���',
            ScriptError_DECRYPTDATA_INVALID_VALUE: '�����ѫ��?����NULL�Ǫ���',
            ScriptError_KOSCOM_ENCRYPT_INVALID_VALUE: '�����ѫ��?����NULL�Ǫ���',
            ScriptError_KOSCOM_DECRYPT_INVALID_VALUE: '�����ѫ��?����NULL�Ǫ���'
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