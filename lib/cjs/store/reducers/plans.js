"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    //  list
    switch (action.type) {
        //  list
        case actions_1.planActions.SET_PLANS_INITIAL_STATE:
            return state.merge({
                list: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.planActions.SET_PLANS_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.planActions.SET_PLANS_FULFILLED:
            var listResponse = action.payload.data;
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(listResponse),
            });
        case actions_1.planActions.SET_PLANS_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        default:
            return state;
    }
});
