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
    switch (action.type) {
        //  list
        case actions_1.fieldActions.GET_FIELDS_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.fieldActions.GET_FIELDS_FULFILLED:
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(action.payload.data),
            });
        case actions_1.fieldActions.GET_FIELDS_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  item
        case actions_1.fieldActions.SET_ITEM_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.fieldActions.SET_ITEM_FULFILLED:
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(action.payload.data),
            });
        case actions_1.fieldActions.SET_ITEM_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        default:
            return state;
    }
});
