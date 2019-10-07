"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
    lexicon: stateUtility_1.default.getItemInitialState(),
    item: stateUtility_1.default.getItemInitialState(),
    recipients: stateUtility_1.default.getPaginationInitialState(),
    documents: stateUtility_1.default.getPaginationInitialState(),
    pages: stateUtility_1.default.getPaginationInitialState(),
    createPackageDocument: stateUtility_1.default.getObserverInitialState(),
    deleteDocument: stateUtility_1.default.getObserverInitialState(),
    createPackage: stateUtility_1.default.getObserverInitialState(),
    recipient: stateUtility_1.default.getItemInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  list
        case actions_1.packageActions.GET_PACKAGES_INITIAL_STATE:
            return state.merge({
                list: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.packageActions.GET_PACKAGES_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.packageActions.GET_PACKAGES_FULFILLED:
            var listResponse = action.payload.data;
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(listResponse),
            });
        case actions_1.packageActions.GET_PACKAGES_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  lexicon
        case actions_1.packageActions.GET_PACKAGE_LEXICON_INITIAL_STATE:
            return state.merge({
                lexicon: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.packageActions.GET_PACKAGE_LEXICON_LOADING:
            return state.merge({
                lexicon: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.packageActions.GET_PACKAGE_LEXICON_FULFILLED:
            var lexiconResponse = action.payload.data;
            return state.merge({
                lexicon: stateUtility_1.default.getItemFulfilled(lexiconResponse),
            });
        case actions_1.packageActions.GET_PACKAGE_LEXICON_REJECTED:
            return state.merge({
                lexicon: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  createPackage
        case actions_1.packageActions.CREATE_PACKAGE_INITIAL_STATE:
            return state.merge({
                createPackage: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.packageActions.CREATE_PACKAGE_LOADING:
            return state.merge({
                createPackage: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.packageActions.CREATE_PACKAGE_FULFILLED:
            var createPackageResponse = action.payload.data;
            return state.merge({
                createPackage: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(createPackageResponse),
            });
        case actions_1.packageActions.CREATE_PACKAGE_REJECTED:
            return state.merge({
                createPackage: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  showPackage
        case actions_1.packageActions.SHOW_PACKAGE_INITIAL_STATE:
            return state.merge({
                item: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.packageActions.SHOW_PACKAGE_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.packageActions.SHOW_PACKAGE_FULFILLED:
            var showPackageResponse = action.payload.data;
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(showPackageResponse),
            });
        case actions_1.packageActions.SHOW_PACKAGE_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  updatePackage
        case actions_1.packageActions.UPDATE_PACKAGE_INITIAL_STATE:
            return state.merge({
                item: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.packageActions.UPDATE_PACKAGE_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.packageActions.UPDATE_PACKAGE_FULFILLED:
            var updatePackageResponse = action.payload.data;
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(updatePackageResponse),
            });
        case actions_1.packageActions.UPDATE_PACKAGE_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  delete
        case actions_1.packageActions.DELETE_PACKAGE_INITIAL_STATE:
            return state.merge({
                item: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.packageActions.DELETE_PACKAGE_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.packageActions.DELETE_PACKAGE_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(),
            });
        case actions_1.packageActions.DELETE_PACKAGE_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  getRecipients
        case actions_1.packageActions.GET_PACKAGE_RECIPIENTS_INITIAL_STATE:
            return state.merge({
                recipients: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.packageActions.GET_PACKAGE_RECIPIENTS_LOADING:
            return state.merge({
                recipients: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.packageActions.GET_PACKAGE_RECIPIENTS_FULFILLED:
            var getRecipientsResponse = action.payload.data;
            return state.merge({
                recipients: stateUtility_1.default.getPaginationFulfilled(getRecipientsResponse),
            });
        case actions_1.packageActions.GET_PACKAGE_RECIPIENTS_REJECTED:
            return state.merge({
                recipients: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //	Delete recipient
        case actions_1.packageActions.DELETE_PACKAGE_RECIPIENT_INITIAL_STATE:
            return state.merge({
                recipient: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.packageActions.DELETE_PACKAGE_RECIPIENT_LOADING:
            return state.merge({
                recipient: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.packageActions.DELETE_PACKAGE_RECIPIENT_FULFILLED:
            return state.merge({
                recipient: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.packageActions.DELETE_PACKAGE_RECIPIENT_REJECTED:
            return state.merge({
                recipient: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  createRecipient
        case actions_1.packageActions.CREATE_PACKAGE_RECIPIENT_INITIAL_STATE:
            return state.merge({
                recipient: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.packageActions.CREATE_PACKAGE_RECIPIENT_LOADING:
            return state.merge({
                recipient: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.packageActions.CREATE_PACKAGE_RECIPIENT_FULFILLED:
            return state.merge({
                recipient: stateUtility_1.default.getItemFulfilled(action.payload.data),
            });
        case actions_1.packageActions.CREATE_PACKAGE_RECIPIENT_REJECTED:
            return state.merge({
                recipient: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  updateRecipient
        case actions_1.packageActions.UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE:
            return state.merge({
                recipient: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.packageActions.UPDATE_PACKAGE_RECIPIENT_LOADING:
            return state.merge({
                recipient: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.packageActions.UPDATE_PACKAGE_RECIPIENT_FULFILLED:
            var updateRecipientsResponse = action.payload.data;
            return state.merge({
                recipient: stateUtility_1.default.getItemFulfilled(updateRecipientsResponse),
            });
        case actions_1.packageActions.UPDATE_PACKAGE_RECIPIENT_REJECTED:
            return state.merge({
                recipient: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  getPackageDocuments
        case actions_1.packageActions.GET_PACKAGE_DOCUMENTS_INITIAL_STATE:
            return state.merge({
                documents: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.packageActions.GET_PACKAGE_DOCUMENTS_LOADING:
            return state.merge({
                documents: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.packageActions.GET_PACKAGE_DOCUMENTS_FULFILLED:
            var getDocumentsResponse = action.payload.data;
            return state.merge({
                documents: stateUtility_1.default.getPaginationFulfilled(getDocumentsResponse),
            });
        case actions_1.packageActions.GET_PACKAGE_DOCUMENTS_REJECTED:
            return state.merge({
                documents: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  getPages
        case actions_1.packageActions.GET_PAGES_INITIAL_STATE:
            return state.merge({
                pages: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.packageActions.GET_PAGES_LOADING:
            return state.merge({
                pages: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.packageActions.GET_PAGES_FULFILLED:
            return state.merge({
                pages: stateUtility_1.default.getPaginationFulfilled(action.payload.data),
            });
        case actions_1.packageActions.GET_PAGES_REJECTED:
            return state.merge({
                pages: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  createPackageDocument
        case actions_1.packageActions.CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE:
            return state.merge({
                createPackageDocument: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.packageActions.CREATE_PACKAGE_DOCUMENTS_LOADING:
            return state.merge({
                createPackageDocument: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.packageActions.CREATE_PACKAGE_DOCUMENTS_FULFILLED:
            return state.merge({
                createPackageDocument: stateUtility_1.default.getObserverFulfilled(),
                documents: stateUtility_1.default.addItemToPagination(state.toJS().documents, action.payload.data, false),
            });
        case actions_1.packageActions.CREATE_PACKAGE_DOCUMENTS_REJECTED:
            return state.merge({
                createPackageDocument: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //	createDocumentFromSocialAccount
        case actions_1.packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE:
            return state.merge({
                createPackageDocument: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING:
            return state.merge({
                createPackageDocument: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED:
            return state.merge({
                createPackageDocument: stateUtility_1.default.getObserverFulfilled(),
                documents: stateUtility_1.default.addItemToPagination(state.toJS().documents, action.payload.data, false),
            });
        case actions_1.packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED:
            return state.merge({
                createPackageDocument: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  deleteDocument
        case actions_1.packageActions.DELETE_DOCUMENT_INITIAL_STATE:
            return state.merge({
                deleteDocument: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.packageActions.DELETE_DOCUMENT_LOADING:
            return state.merge({
                deleteDocument: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.packageActions.DELETE_DOCUMENT_FULFILLED:
            return state.merge({
                deleteDocument: stateUtility_1.default.getObserverFulfilled(),
                documents: stateUtility_1.default.removeItemFromPagination(state.toJS().documents, action.payload),
            });
        case actions_1.packageActions.DELETE_DOCUMENT_REJECTED:
            return state.merge({
                deleteDocument: stateUtility_1.default.getObserverRejected(action.payload),
            });
        case actions_1.packageActions.SET_PACKAGE_IMAGE_URL:
            var packages = state.toJS().list;
            var packageIndex = packages.data.findIndex(function (item) { return item.id === action.id; });
            packages.data[packageIndex].image = action.image_url.data;
            return state.merge({
                list: packages,
            });
        case actions_1.packageActions.SET_DOCUMENT_IMAGE_URL:
            var docs = state.toJS().documents;
            var docIndex = docs.data.findIndex(function (document) { return document.id === action.documentId; });
            docs.data[docIndex].image = action.imageUrl.data;
            return state.merge({
                documents: docs,
            });
        case actions_1.packageActions.SET_DOCUMENT_PAGE_IMAGE_URL:
            var doccies = state.toJS().documents;
            var doccyIndex = doccies.data.findIndex(function (document) { return document.id === action.documentId; });
            var paggyIndex = doccies.data[doccyIndex].pages.findIndex(function (page) { return page.id === action.pageId; });
            console.log(doccyIndex);
            console.log(paggyIndex);
            var images = doccies.data[doccyIndex].pages[paggyIndex].images;
            if (images === undefined) {
                images = [];
            }
            images.push(action.imageUrl.data);
            doccies.data[doccyIndex].pages[paggyIndex].images = images;
            return state.merge({
                documents: doccies,
            });
        default:
            return state;
    }
});
