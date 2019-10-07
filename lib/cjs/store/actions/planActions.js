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
    GET_PLANS: '[plans] GET_PLANS',
    SET_PLANS_INITIAL_STATE: '[plans] SET_PLANS_INITIAL_STATE',
    SET_PLANS_LOADING: '[plans] SET_PLANS_LOADING',
    SET_PLANS_FULFILLED: '[plans] SET_PLANS_FULFILLED',
    SET_PLANS_REJECTED: '[plans] SET_PLANS_REJECTED',
};
exports.planActions = __assign(__assign({}, types), { getPlans: function (query) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_PLANS,
            payload: null,
            query: query,
        });
    }, setPlansInitialState: function () { return ({
        type: types.SET_PLANS_INITIAL_STATE,
        payload: null,
    }); }, setPlansLoading: function () { return ({
        type: types.SET_PLANS_LOADING,
        payload: null,
    }); }, setPlansFulfilled: function (response) { return ({
        type: types.SET_PLANS_FULFILLED,
        payload: response,
    }); }, setPlansRejected: function (response) { return ({
        type: types.SET_PLANS_REJECTED,
        payload: response,
    }); } });
