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
    SEARCH_CONTACTS: '[contacts] SEARCH_CONTACTS',
    SEARCH_LOADING: '[contacts] SEARCH_LOADING',
    SEARCH_FULFILLED: '[contacts] SEARCH_FULFILLED',
    SEARCH_REJECTED: '[contacts] SEARCH_REJECTED',
};
exports.contactActions = __assign(__assign({}, types), { searchContacts: function (payload, successCb, errorCb) { return ({
        type: types.SEARCH_CONTACTS,
        payload: payload,
        successCb: successCb,
        errorCb: errorCb,
    }); }, setSearchContactsLoading: function () { return ({
        type: types.SEARCH_LOADING,
        payload: null,
    }); }, setSearchContactsFulfilled: function (response) { return ({
        type: types.SEARCH_FULFILLED,
        payload: response,
    }); }, setSearchContactsRejected: function (response) { return ({
        type: types.SEARCH_REJECTED,
        payload: response,
    }); } });
