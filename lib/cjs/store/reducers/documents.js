"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
    download: stateUtility_1.default.getObserverInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  list
        case actions_1.documentActions.GET_DOCUMENTS_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.documentActions.GET_DOCUMENTS_FULFILLED:
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(action.payload.data),
            });
        case actions_1.documentActions.GET_DOCUMENTS_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //	download
        case actions_1.documentActions.DOWNLOAD_DOCUMENT_LOADING:
            return state.merge({
                download: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.documentActions.DOWNLOAD_DOCUMENT_FULFILLED:
            return state.merge({
                download: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.documentActions.DOWNLOAD_DOCUMENT_REJECTED:
            return state.merge({
                download: stateUtility_1.default.getObserverRejected(action.payload),
            });
        default:
            return state;
    }
});
