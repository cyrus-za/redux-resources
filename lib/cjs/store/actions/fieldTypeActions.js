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
    GET_FIELD_TYPES: '[fieldTypes] GET_FIELD_TYPES',
    FIELD_TYPES_LOADING: '[fieldTypes] FIELD_TYPES_LOADING',
    FIELD_TYPES_FULFILLED: '[fieldTypes] FIELD_TYPES_FULFILLED',
    SET_FIELD_TYPES_REJECTED: '[fieldTypes] SET_FIELD_TYPES_REJECTED',
};
exports.fieldTypeActions = __assign(__assign({}, types), { getFieldTypes: function (query) {
        if (query === void 0) { query = {}; }
        return ({
            type: types.GET_FIELD_TYPES,
            payload: null,
            query: query,
        });
    }, setFieldTypesLoading: function () { return ({
        type: types.FIELD_TYPES_LOADING,
        payload: null,
    }); }, setFieldTypesFulfilled: function (response) { return ({
        type: types.FIELD_TYPES_FULFILLED,
        payload: response,
    }); }, setFieldTypesRejected: function (data) { return ({
        type: types.SET_FIELD_TYPES_REJECTED,
        payload: data,
    }); } });
