"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
    item: stateUtility_1.default.getItemInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    //  list
    switch (action.type) {
        case actions_1.signatureActions.SIGNATURES_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.signatureActions.SIGNATURES_FULFILLED:
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(action.payload.data),
            });
        case actions_1.signatureActions.SET_SIGNATURES_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  create
        case actions_1.signatureActions.CREATE_SIGNATURE_LOADING:
            return state.merge({
                item: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.signatureActions.CREATE_SIGNATURE_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(action.payload.data),
            });
        case actions_1.signatureActions.CREATE_SIGNATURE_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getObserverRejected(action.payload),
            });
        default:
            return state;
    }
});
