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
    GET_PACKAGE_TYPES: '[packageTypes] GET_PACKAGE_TYPES',
    PACKAGE_TYPES_LOADING: '[packageTypes] PACKAGE_TYPES_LOADING',
    PACKAGE_TYPES_FULFILLED: '[packageTypes] PACKAGE_TYPES_FULFILLED',
    SET_PACKAGE_TYPES_REJECTED: '[packageTypes] SET_PACKAGE_TYPES_REJECTED',
};
exports.packageTypeActions = __assign(__assign({}, types), { getPackageTypes: function (query) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_PACKAGE_TYPES,
            payload: query,
        });
    }, setPackageTypesLoading: function () { return ({
        type: types.PACKAGE_TYPES_LOADING,
        payload: null,
    }); }, setPackageTypesFulfilled: function (response) { return ({
        type: types.PACKAGE_TYPES_FULFILLED,
        payload: response,
    }); }, setPackageTypesRejected: function (data) { return ({
        type: types.SET_PACKAGE_TYPES_REJECTED,
        payload: data,
    }); } });
