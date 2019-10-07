"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var types = {
    GET_PACKAGES: '[packages] GET_PACKAGES',
    GET_PACKAGES_INITIAL_STATE: '[packages] GET_PACKAGES_INITIAL_STATE',
    GET_PACKAGES_LOADING: '[packages] GET_PACKAGES_LOADING',
    GET_PACKAGES_FULFILLED: '[packages] GET_PACKAGES_FULFILLED',
    GET_PACKAGES_REJECTED: '[packages] GET_PACKAGES_REJECTED',
    GET_PACKAGE_LEXICON: '[packages] GET_PACKAGE_LEXICON',
    GET_PACKAGE_LEXICON_INITIAL_STATE: '[packages] GET_PACKAGE_LEXICON_INITIAL_STATE',
    GET_PACKAGE_LEXICON_LOADING: '[packages] GET_PACKAGE_LEXICON_LOADING',
    GET_PACKAGE_LEXICON_FULFILLED: '[packages] GET_PACKAGE_LEXICON_FULFILLED',
    GET_PACKAGE_LEXICON_REJECTED: '[packages] GET_PACKAGE_LEXICON_REJECTED',
    CREATE_PACKAGE: '[packages] CREATE_PACKAGE',
    CREATE_PACKAGE_INITIAL_STATE: '[packages] CREATE_PACKAGE_INITIAL_STATE',
    CREATE_PACKAGE_LOADING: '[packages] CREATE_PACKAGE_LOADING',
    CREATE_PACKAGE_FULFILLED: '[packages] CREATE_PACKAGE_FULFILLED',
    CREATE_PACKAGE_REJECTED: '[packages] CREATE_PACKAGE_REJECTED',
    SHOW_PACKAGE: '[packages] SHOW_PACKAGE',
    SHOW_PACKAGE_INITIAL_STATE: '[packages] SHOW_PACKAGE_INITIAL_STATE',
    SHOW_PACKAGE_LOADING: '[packages] SHOW_PACKAGE_LOADING',
    SHOW_PACKAGE_FULFILLED: '[packages] SHOW_PACKAGE_FULFILLED',
    SHOW_PACKAGE_REJECTED: '[packages] SHOW_PACKAGE_REJECTED',
    DELETE_PACKAGE: '[packages] DELETE_PACKAGE',
    DELETE_PACKAGE_INITIAL_STATE: '[packages] DELETE_PACKAGE_INITIAL_STATE',
    DELETE_PACKAGE_LOADING: '[packages] DELETE_PACKAGE_LOADING',
    DELETE_PACKAGE_FULFILLED: '[packages] DELETE_PACKAGE_FULFILLED',
    DELETE_PACKAGE_REJECTED: '[packages] DELETE_PACKAGE_REJECTED',
    UPDATE_PACKAGE: '[packages] UPDATE_PACKAGE',
    UPDATE_PACKAGE_INITIAL_STATE: '[packages] UPDATE_PACKAGE_INITIAL_STATE',
    UPDATE_PACKAGE_LOADING: '[packages] UPDATE_PACKAGE_LOADING',
    UPDATE_PACKAGE_FULFILLED: '[packages] UPDATE_PACKAGE_FULFILLED',
    UPDATE_PACKAGE_REJECTED: '[packages] UPDATE_PACKAGE_REJECTED',
    GET_PACKAGE_RECIPIENTS: '[packages] GET_PACKAGE_RECIPIENTS',
    GET_PACKAGE_RECIPIENTS_INITIAL_STATE: '[packages] GET_PACKAGE_RECIPIENTS_INITIAL_STATE',
    GET_PACKAGE_RECIPIENTS_LOADING: '[packages] GET_PACKAGE_RECIPIENTS_LOADING',
    GET_PACKAGE_RECIPIENTS_FULFILLED: '[packages] GET_PACKAGE_RECIPIENTS_FULFILLED',
    GET_PACKAGE_RECIPIENTS_REJECTED: '[packages] GET_PACKAGE_RECIPIENTS_REJECTED',
    CREATE_PACKAGE_RECIPIENT: '[packages] CREATE_PACKAGE_RECIPIENT',
    CREATE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] CREATE_PACKAGE_RECIPIENT_INITIAL_STATE',
    CREATE_PACKAGE_RECIPIENT_LOADING: '[packages] CREATE_PACKAGE_RECIPIENT_LOADING',
    CREATE_PACKAGE_RECIPIENT_FULFILLED: '[packages] CREATE_PACKAGE_RECIPIENT_FULFILLED',
    CREATE_PACKAGE_RECIPIENT_REJECTED: '[packages] CREATE_PACKAGE_RECIPIENT_REJECTED',
    UPDATE_PACKAGE_RECIPIENT: '[packages] UPDATE_PACKAGE_RECIPIENT',
    UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE',
    UPDATE_PACKAGE_RECIPIENT_LOADING: '[packages] UPDATE_PACKAGE_RECIPIENT_LOADING',
    UPDATE_PACKAGE_RECIPIENT_FULFILLED: '[packages] UPDATE_PACKAGE_RECIPIENT_FULFILLED',
    UPDATE_PACKAGE_RECIPIENT_REJECTED: '[packages] UPDATE_PACKAGE_RECIPIENT_REJECTED',
    DELETE_PACKAGE_RECIPIENT: '[packages] DELETE_PACKAGE_RECIPIENT',
    DELETE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] DELETE_PACKAGE_RECIPIENT_INITIAL_STATE',
    DELETE_PACKAGE_RECIPIENT_LOADING: '[packages] DELETE_PACKAGE_RECIPIENT_LOADING',
    DELETE_PACKAGE_RECIPIENT_FULFILLED: '[packages] DELETE_PACKAGE_RECIPIENT_FULFILLED',
    DELETE_PACKAGE_RECIPIENT_REJECTED: '[packages] DELETE_PACKAGE_RECIPIENT_REJECTED',
    GET_PACKAGE_DOCUMENTS: '[packages] GET_PACKAGE_DOCUMENTS',
    GET_PACKAGE_DOCUMENTS_INITIAL_STATE: '[packages] GET_PACKAGE_DOCUMENTS_INITIAL_STATE',
    GET_PACKAGE_DOCUMENTS_LOADING: '[packages] GET_PACKAGE_DOCUMENTS_LOADING',
    GET_PACKAGE_DOCUMENTS_FULFILLED: '[packages] GET_PACKAGE_DOCUMENTS_FULFILLED',
    GET_PACKAGE_DOCUMENTS_REJECTED: '[packages] GET_PACKAGE_DOCUMENTS_REJECTED',
    CREATE_PACKAGE_DOCUMENTS: '[packages] CREATE_PACKAGE_DOCUMENTS',
    CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE: '[packages] CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE',
    CREATE_PACKAGE_DOCUMENTS_LOADING: '[packages] CREATE_PACKAGE_DOCUMENTS_LOADING',
    CREATE_PACKAGE_DOCUMENTS_FULFILLED: '[packages] CREATE_PACKAGE_DOCUMENTS_FULFILLED',
    CREATE_PACKAGE_DOCUMENTS_REJECTED: '[packages] CREATE_PACKAGE_DOCUMENTS_REJECTED',
    UPDATE_DOCUMENT: '[packages] UPDATE_DOCUMENT',
    UPDATE_DOCUMENT_INITIAL_STATE: '[packages] UPDATE_DOCUMENT_INITIAL_STATE',
    UPDATE_DOCUMENT_LOADING: '[packages] UPDATE_DOCUMENT_LOADING',
    UPDATE_DOCUMENT_FULFILLED: '[packages] UPDATE_DOCUMENT_FULFILLED',
    UPDATE_DOCUMENT_REJECTED: '[packages] UPDATE_DOCUMENT_REJECTED',
    CREATE_DOCUMENT_FROM_CONNECTED_SERVICE: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE',
    CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE',
    CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING',
    CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED',
    CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED',
    DOWNLOAD_PACKAGE_DOCUMENT: '[packages] DOWNLOAD_PACKAGE_DOCUMENT',
    GET_PACKAGE_IMAGE_URL: '[packages] GET_PACKAGE_IMAGE_URL',
    SET_PACKAGE_IMAGE_URL: '[packages] SET_PACKAGE_IMAGE_URL',
    GET_DOCUMENT_IMAGE_URL: '[packages] GET_DOCUMENT_IMAGE_URL',
    SET_DOCUMENT_IMAGE_URL: '[packages] SET_DOCUMENT_IMAGE_URL',
    GET_DOCUMENT_PAGE_IMAGE_URL: '[packages] GET_DOCUMENT_PAGE_IMAGE_URL',
    SET_DOCUMENT_PAGE_IMAGE_URL: '[packages] SET_DOCUMENT_PAGE_IMAGE_URL',
    DELETE_DOCUMENT: '[packages] DELETE_DOCUMENT',
    DELETE_DOCUMENT_INITIAL_STATE: '[packages] DELETE_DOCUMENT_INITIAL_STATE',
    DELETE_DOCUMENT_LOADING: '[packages] DELETE_DOCUMENT_LOADING',
    DELETE_DOCUMENT_FULFILLED: '[packages] DELETE_DOCUMENT_FULFILLED',
    DELETE_DOCUMENT_REJECTED: '[packages] DELETE_DOCUMENT_REJECTED',
    GET_PAGES: '[packages] GET_PAGES',
    GET_PAGES_INITIAL_STATE: '[packages] GET_PAGES_INITIAL_STATE',
    GET_PAGES_LOADING: '[packages] GET_PAGES_LOADING',
    GET_PAGES_FULFILLED: '[packages] GET_PAGES_FULFILLED',
    GET_PAGES_REJECTED: '[packages] GET_PAGES_REJECTED',
    PUBLISH: '[packages] PUBLISH',
    PUBLISH_INITIAL_STATE: '[packages] PUBLISH_INITIAL_STATE',
    PUBLISH_LOADING: '[packages] PUBLISH_LOADING',
    PUBLISH_FULFILLED: '[packages] PUBLISH_FULFILLED',
    PUBLISH_REJECTED: '[packages] PUBLISH_REJECTED',
};
exports.packageActions = __assign(__assign({}, types), { getPackages: function (query, successCb, errorCb) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_PACKAGES,
            payload: null,
            query: query,
            successCb: successCb,
            errorCb: errorCb,
        });
    }, getPackagesInitialState: function () { return ({
        type: types.GET_PACKAGES_INITIAL_STATE,
        payload: null,
    }); }, getPackagesLoading: function () { return ({
        type: types.GET_PACKAGES_LOADING,
        payload: null,
    }); }, getPackagesFulfilled: function (response) { return ({
        type: types.GET_PACKAGES_FULFILLED,
        payload: response,
    }); }, getPackagesRejected: function (response) { return ({
        type: types.GET_PACKAGES_REJECTED,
        payload: response,
    }); }, getPackageLexicon: function (query, successCb, errorCb) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_PACKAGE_LEXICON,
            payload: null,
            query: query,
            successCb: successCb,
            errorCb: errorCb,
        });
    }, getPackageLexiconInitialState: function () { return ({
        type: types.GET_PACKAGE_LEXICON_INITIAL_STATE,
        payload: null,
    }); }, getPackageLexiconLoading: function () { return ({
        type: types.GET_PACKAGE_LEXICON_LOADING,
        payload: null,
    }); }, getPackageLexiconFulfilled: function (response) { return ({
        type: types.GET_PACKAGE_LEXICON_FULFILLED,
        payload: response,
    }); }, getPackageLexiconRejected: function (response) { return ({
        type: types.GET_PACKAGE_LEXICON_REJECTED,
        payload: response,
    }); }, createPackage: function (data, successCb, errorCb) { return ({
        type: types.CREATE_PACKAGE,
        payload: null,
        data: data,
        successCb: successCb,
        errorCb: errorCb,
    }); }, createPackageInitialState: function () { return ({
        type: types.CREATE_PACKAGE_INITIAL_STATE,
        payload: null,
    }); }, createPackageLoading: function () { return ({
        type: types.CREATE_PACKAGE_LOADING,
        payload: null,
    }); }, createPackageFulfilled: function (response) { return ({
        type: types.CREATE_PACKAGE_FULFILLED,
        payload: response,
    }); }, createPackageRejected: function (response) { return ({
        type: types.CREATE_PACKAGE_REJECTED,
        payload: response,
    }); }, showPackage: function (id, successCb, errorCb) { return ({
        type: types.SHOW_PACKAGE,
        payload: null,
        id: id,
        successCb: successCb,
        errorCb: errorCb,
    }); }, showPackageInitialState: function () { return ({
        type: types.SHOW_PACKAGE_INITIAL_STATE,
        payload: null,
    }); }, showPackageLoading: function () { return ({
        type: types.SHOW_PACKAGE_LOADING,
        payload: null,
    }); }, showPackageFulfilled: function (response) { return ({
        type: types.SHOW_PACKAGE_FULFILLED,
        payload: response,
    }); }, showPackageRejected: function (response) { return ({
        type: types.SHOW_PACKAGE_REJECTED,
        payload: response,
    }); }, updatePackage: function (id, data, successCb, errorCb) { return ({
        type: types.UPDATE_PACKAGE,
        payload: null,
        id: id,
        data: data,
        successCb: successCb,
        errorCb: errorCb,
    }); }, updatePackageInitialState: function () { return ({
        type: types.UPDATE_PACKAGE_INITIAL_STATE,
        payload: null,
    }); }, updatePackageLoading: function () { return ({
        type: types.UPDATE_PACKAGE_LOADING,
        payload: null,
    }); }, updatePackageFulfilled: function (response) { return ({
        type: types.UPDATE_PACKAGE_FULFILLED,
        payload: response,
    }); }, updatePackageRejected: function (response) { return ({
        type: types.UPDATE_PACKAGE_REJECTED,
        payload: response,
    }); }, deletePackage: function (id, successCb, errorCb) { return ({
        type: types.DELETE_PACKAGE,
        payload: null,
        id: id,
        successCb: successCb,
        errorCb: errorCb,
    }); }, deletePackageInitialState: function () { return ({
        type: types.DELETE_PACKAGE_INITIAL_STATE,
        payload: null,
    }); }, deletePackageLoading: function () { return ({
        type: types.DELETE_PACKAGE_LOADING,
        payload: null,
    }); }, deletePackageFulfilled: function (response) { return ({
        type: types.DELETE_PACKAGE_FULFILLED,
        payload: response,
    }); }, deletePackageRejected: function (response) { return ({
        type: types.DELETE_PACKAGE_REJECTED,
        payload: response,
    }); }, getPackageRecipients: function (id, query, successCb, errorCb) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_PACKAGE_RECIPIENTS,
            payload: null,
            id: id,
            query: query,
            successCb: successCb,
            errorCb: errorCb,
        });
    }, getPackageRecipientsInitialState: function () { return ({
        type: types.GET_PACKAGE_RECIPIENTS_INITIAL_STATE,
        payload: null,
    }); }, getPackageRecipientsLoading: function () { return ({
        type: types.GET_PACKAGE_RECIPIENTS_LOADING,
        payload: null,
    }); }, getPackageRecipientsFulfilled: function (response) { return ({
        type: types.GET_PACKAGE_RECIPIENTS_FULFILLED,
        payload: response,
    }); }, getPackageRecipientsRejected: function (response) { return ({
        type: types.GET_PACKAGE_RECIPIENTS_REJECTED,
        payload: response,
    }); }, createPackageRecipient: function (id, data, successCb, errorCb) { return ({
        type: types.CREATE_PACKAGE_RECIPIENT,
        payload: null,
        id: id,
        data: data,
        successCb: successCb,
        errorCb: errorCb,
    }); }, createPackageRecipientInitialState: function () { return ({
        type: types.CREATE_PACKAGE_RECIPIENT_INITIAL_STATE,
        payload: null,
    }); }, createPackageRecipientLoading: function () { return ({
        type: types.CREATE_PACKAGE_RECIPIENT_LOADING,
        payload: null,
    }); }, createPackageRecipientFulfilled: function (response) { return ({
        type: types.CREATE_PACKAGE_RECIPIENT_FULFILLED,
        payload: response,
    }); }, createPackageRecipientRejected: function (response) { return ({
        type: types.CREATE_PACKAGE_RECIPIENT_REJECTED,
        payload: response,
    }); }, updatePackageRecipient: function (id, recipientId, data, successCb, errorCb) { return ({
        type: types.UPDATE_PACKAGE_RECIPIENT,
        payload: null,
        id: id,
        recipientId: recipientId,
        data: data,
        successCb: successCb,
        errorCb: errorCb,
    }); }, updatePackageRecipientInitialState: function () { return ({
        type: types.UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE,
        payload: null,
    }); }, updatePackageRecipientLoading: function () { return ({
        type: types.UPDATE_PACKAGE_RECIPIENT_LOADING,
        payload: null,
    }); }, updatePackageRecipientFulfilled: function (response) { return ({
        type: types.UPDATE_PACKAGE_RECIPIENT_FULFILLED,
        payload: response,
    }); }, updatePackageRecipientRejected: function (response) { return ({
        type: types.UPDATE_PACKAGE_RECIPIENT_REJECTED,
        payload: response,
    }); }, deletePackageRecipient: function (id, recipientId, successCb, errorCb) { return ({
        type: types.DELETE_PACKAGE_RECIPIENT,
        payload: null,
        id: id,
        recipientId: recipientId,
        successCb: successCb,
        errorCb: errorCb,
    }); }, deletePackageRecipientInitialState: function () { return ({
        type: types.DELETE_PACKAGE_RECIPIENT_INITIAL_STATE,
        payload: null,
    }); }, deletePackageRecipientLoading: function () { return ({
        type: types.DELETE_PACKAGE_RECIPIENT_LOADING,
        payload: null,
    }); }, deletePackageRecipientFulfilled: function (response) { return ({
        type: types.DELETE_PACKAGE_RECIPIENT_FULFILLED,
        payload: response,
    }); }, deletePackageRecipientRejected: function (response) { return ({
        type: types.DELETE_PACKAGE_RECIPIENT_REJECTED,
        payload: response,
    }); }, getPackageDocuments: function (id, query, successCb, errorCb) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_PACKAGE_DOCUMENTS,
            payload: null,
            id: id,
            query: query,
            successCb: successCb,
            errorCb: errorCb,
        });
    }, getPackageDocumentsInitialState: function () { return ({
        type: types.GET_PACKAGE_DOCUMENTS_INITIAL_STATE,
        payload: null,
    }); }, getPackageDocumentsLoading: function () { return ({
        type: types.GET_PACKAGE_DOCUMENTS_LOADING,
        payload: null,
    }); }, getPackageDocumentsFulfilled: function (response) { return ({
        type: types.GET_PACKAGE_DOCUMENTS_FULFILLED,
        payload: response,
    }); }, getPackageDocumentsRejected: function (response) { return ({
        type: types.GET_PACKAGE_DOCUMENTS_REJECTED,
        payload: response,
    }); }, createPackageDocuments: function (id, data, successCb, errorCb) { return ({
        type: types.CREATE_PACKAGE_DOCUMENTS,
        payload: null,
        id: id,
        data: data,
        successCb: successCb,
        errorCb: errorCb,
    }); }, createPackageDocumentsInitialState: function () { return ({
        type: types.CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE,
        payload: null,
    }); }, createPackageDocumentsLoading: function () { return ({
        type: types.CREATE_PACKAGE_DOCUMENTS_LOADING,
        payload: null,
    }); }, createPackageDocumentsFulfilled: function (response) { return ({
        type: types.CREATE_PACKAGE_DOCUMENTS_FULFILLED,
        payload: response,
    }); }, createPackageDocumentsRejected: function (response) { return ({
        type: types.CREATE_PACKAGE_DOCUMENTS_REJECTED,
        payload: response,
    }); }, updateDocument: function (packageId, documentId, data, successCb, errorCb) { return ({
        type: types.UPDATE_DOCUMENT,
        payload: null,
        packageId: packageId,
        documentId: documentId,
        data: data,
        successCb: successCb,
        errorCb: errorCb,
    }); }, updateDocumentInitialState: function () { return ({
        type: types.UPDATE_DOCUMENT_INITIAL_STATE,
        payload: null,
    }); }, updateDocumentLoading: function () { return ({
        type: types.UPDATE_DOCUMENT_LOADING,
        payload: null,
    }); }, updateDocumentFulfilled: function (response) { return ({
        type: types.UPDATE_DOCUMENT_FULFILLED,
        payload: response,
    }); }, updateDocumentRejected: function (response) { return ({
        type: types.UPDATE_DOCUMENT_REJECTED,
        payload: response,
    }); }, createDocumentFromSocialAccount: function (id, socialAccountId, externalFileId, successCb, errorCb) { return ({
        type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE,
        payload: null,
        id: id,
        socialAccountId: socialAccountId,
        externalFileId: externalFileId,
        successCb: successCb,
        errorCb: errorCb,
    }); }, createDocumentFromSocialAccountInitialState: function () { return ({
        type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE,
        payload: null,
    }); }, createDocumentFromSocialAccountLoading: function () { return ({
        type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING,
        payload: null,
    }); }, createDocumentFromSocialAccountFulfilled: function (response) { return ({
        type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED,
        payload: response,
    }); }, createDocumentFromSocialAccountRejected: function (response) { return ({
        type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED,
        payload: response,
    }); }, downloadPackageDocument: function (id, documentId, successCb, errorCb) { return ({
        type: types.DOWNLOAD_PACKAGE_DOCUMENT,
        payload: null,
        id: id,
        documentId: documentId,
        successCb: successCb,
        errorCb: errorCb,
    }); }, getPackageImageUrl: function (id, image_url, successCb, errorCb) { return ({
        type: types.GET_PACKAGE_IMAGE_URL,
        payload: null,
        id: id,
        image_url: image_url,
        successCb: successCb,
        errorCb: errorCb,
    }); }, setPackageImageUrl: function (id, image_url, imageUrl) {
        if (imageUrl === void 0) { imageUrl = image_url; }
        return ({
            type: types.SET_PACKAGE_IMAGE_URL,
            payload: null,
            id: id,
            image_url: image_url,
            imageUrl: imageUrl,
        });
    }, getDocumentImageUrl: function (documentId, image_url, successCb, errorCb) { return ({
        type: types.GET_DOCUMENT_IMAGE_URL,
        payload: null,
        documentId: documentId,
        image_url: image_url,
        successCb: successCb,
        errorCb: errorCb,
    }); }, setDocumentImageUrl: function (documentId, imageUrl) { return ({
        type: types.SET_DOCUMENT_IMAGE_URL,
        payload: null,
        documentId: documentId,
        imageUrl: imageUrl,
    }); }, getDocumentPageImageUrl: function (documentId, pageId, image_url, successCb, errorCb) { return ({
        type: types.GET_DOCUMENT_PAGE_IMAGE_URL,
        payload: null,
        documentId: documentId,
        pageId: pageId,
        image_url: image_url,
        successCb: successCb,
        errorCb: errorCb,
    }); }, setDocumentPageImageUrl: function (documentId, pageId, imageUrl) { return ({
        type: types.SET_DOCUMENT_PAGE_IMAGE_URL,
        payload: null,
        documentId: documentId,
        pageId: pageId,
        imageUrl: imageUrl,
    }); }, deleteDocument: function (id, documentId, successCb, errorCb) { return ({
        type: types.DELETE_DOCUMENT,
        payload: null,
        id: id,
        documentId: documentId,
        successCb: successCb,
        errorCb: errorCb,
    }); }, deleteDocumentInitialState: function () { return ({
        type: types.DELETE_DOCUMENT_INITIAL_STATE,
        payload: null,
    }); }, deleteDocumentLoading: function () { return ({
        type: types.DELETE_DOCUMENT_LOADING,
        payload: null,
    }); }, deleteDocumentFulfilled: function (documentId) { return ({
        type: types.DELETE_DOCUMENT_FULFILLED,
        payload: documentId,
    }); }, deleteDocumentRejected: function (response) { return ({
        type: types.DELETE_DOCUMENT_REJECTED,
        payload: response,
    }); }, getPages: function (packageId, query, successCb, errorCb) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_PAGES,
            payload: null,
            packageId: packageId,
            query: query,
            successCb: successCb,
            errorCb: errorCb,
        });
    }, getPagesInitialState: function () { return ({
        type: types.GET_PAGES_INITIAL_STATE,
        payload: null,
    }); }, getPagesLoading: function () { return ({
        type: types.GET_PAGES_LOADING,
        payload: null,
    }); }, getPagesFulfilled: function (response) { return ({
        type: types.GET_PAGES_FULFILLED,
        payload: response,
    }); }, getPagesRejected: function (response) { return ({
        type: types.GET_PAGES_REJECTED,
        payload: response,
    }); }, publish: function (packageId, successCb, errorCb) { return ({
        type: types.PUBLISH,
        payload: null,
        packageId: packageId,
        successCb: successCb,
        errorCb: errorCb,
    }); } });
