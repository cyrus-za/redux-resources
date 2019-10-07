"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
    item: stateUtility_1.default.getItemInitialState(),
    connected: [],
    available: [],
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  list
        case actions_1.connectedServiceActions.SET_CONNECTED_SERVICES_INITIAL_STATE:
            return state.merge({
                list: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.connectedServiceActions.SET_CONNECTED_SERVICES_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.connectedServiceActions.SET_CONNECTED_SERVICES_FULFILLED:
            var listResponse = action.payload.data;
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(listResponse),
            });
        case actions_1.connectedServiceActions.SET_CONNECTED_SERVICES_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //	Create
        case actions_1.connectedServiceActions.CREATE_CONNECTED_SERVICE:
            return state.merge({
                item: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.connectedServiceActions.CREATE_CONNECTED_SERVICE_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.connectedServiceActions.CREATE_CONNECTED_SERVICE_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(action.payload.data),
            });
        case actions_1.connectedServiceActions.CREATE_CONNECTED_SERVICE_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        //	UPDATE
        case actions_1.connectedServiceActions.UPDATE_CONNECTED_SERVICE_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.connectedServiceActions.UPDATE_CONNECTED_SERVICE_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(action.payload.data),
            });
        case actions_1.connectedServiceActions.UPDATE_CONNECTED_SERVICE_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        //	DELETE
        case actions_1.connectedServiceActions.DELETE_CONNECTED_SERVICE_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.connectedServiceActions.DELETE_CONNECTED_SERVICE_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(null),
            });
        case actions_1.connectedServiceActions.DELETE_CONNECTED_SERVICE_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        case actions_1.connectedServiceActions.SET_CONNECTED_SERVICES:
            return state.merge({
                connected: action.payload,
            });
        case actions_1.connectedServiceActions.SET_AVAILABLE_SERVICES:
            return state.merge({
                available: action.payload,
            });
        default:
            return state;
    }
});
