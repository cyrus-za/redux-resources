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
    SEND_FEEDBACK: '[feedback] SEND_FEEDBACK',
    SET_SEND_FEEDBACK_LOADING: '[feedback] SET_SEND_FEEDBACK_LOADING',
    SET_SEND_FEEDBACK_FULFILLED: '[feedback] SET_SEND_FEEDBACK_FULFILLED',
    SET_SEND_FEEDBACK_REJECTED: '[feedback] SET_SEND_FEEDBACK_REJECTED',
};
exports.feedbackActions = __assign(__assign({}, types), { sendFeedback: function (payload, successCb, errorCb) {
        if (successCb === void 0) { successCb = undefined; }
        if (errorCb === void 0) { errorCb = undefined; }
        return ({
            type: types.SEND_FEEDBACK,
            payload: payload,
            successCb: successCb,
            errorCb: errorCb,
        });
    }, setSendFeedbackLoading: function () { return ({
        type: types.SET_SEND_FEEDBACK_LOADING,
        payload: null,
    }); }, setSendFeedbackFulfilled: function (response) { return ({
        type: types.SET_SEND_FEEDBACK_FULFILLED,
        payload: response,
    }); }, setSendFeedbackRejected: function (response) { return ({
        type: types.SET_SEND_FEEDBACK_REJECTED,
        payload: response,
    }); } });
