"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
    item: stateUtility_1.default.getObserverInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    //  list
    switch (action.type) {
        //  list
        case actions_1.subscriptionActions.SET_SUBSCRIPTIONS_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.subscriptionActions.SET_SUBSCRIPTIONS_FULFILLED:
            var listResponse = action.payload.data;
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(listResponse),
            });
        case actions_1.subscriptionActions.SET_SUBSCRIPTIONS_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //	create
        case actions_1.subscriptionActions.SET_CREATE_SUBSCRIPTION_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.subscriptionActions.SET_CREATE_SUBSCRIPTION_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(action.payload.data),
            });
        case actions_1.subscriptionActions.SET_CREATE_SUBSCRIPTION_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        //	update
        case actions_1.subscriptionActions.SET_UPDATE_SUBSCRIPTION_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.subscriptionActions.SET_UPDATE_SUBSCRIPTION_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(action.payload.data),
            });
        case actions_1.subscriptionActions.SET_UPDATE_SUBSCRIPTION_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        //	delete
        case actions_1.subscriptionActions.SET_DELETE_SUBSCRIPTION_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.subscriptionActions.SET_DELETE_SUBSCRIPTION_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled({}),
            });
        case actions_1.subscriptionActions.SET_DELETE_SUBSCRIPTION_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        default:
            return state;
    }
});
