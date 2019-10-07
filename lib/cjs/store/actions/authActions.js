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
    LOG_USER_IN: '[auth] LOG_USER_IN',
    LOG_USER_OUT: '[auth] LOG_USER_OUT',
    CREATE_SOCIAL_ACCESS_TOKEN: '[auth] CREATE_SOCIAL_ACCESS_TOKEN',
    CREATE_USER: '[auth] CREATE_USER',
    CREATE_USER_INITIAL_STATE: '[auth] CREATE_USER_INITIAL_STATE',
    CREATE_USER_LOADING: '[auth] CREATE_USER_LOADING',
    CREATE_USER_FULFILLED: '[auth] CREATE_USER_FULFILLED',
    CREATE_USER_REJECTED: '[auth] CREATE_USER_REJECTED',
    CREATE_AUTH_ACCESS_TOKEN: '[auth] CREATE_AUTH_ACCESS_TOKEN',
    CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE: '[auth] CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE',
    CREATE_AUTH_ACCESS_TOKEN_LOADING: '[auth] CREATE_AUTH_ACCESS_TOKEN_LOADING',
    CREATE_AUTH_ACCESS_TOKEN_FULFILLED: '[auth] CREATE_AUTH_ACCESS_TOKEN_FULFILLED',
    CREATE_AUTH_ACCESS_TOKEN_REJECTED: '[auth] CREATE_AUTH_ACCESS_TOKEN_REJECTED',
    LOAD_AUTH_USER_META: '[auth] LOAD_AUTH_USER_META',
    LOAD_AUTH_USER_META_INITIAL_STATE: '[auth] LOAD_AUTH_USER_META_INITIAL_STATE',
    LOAD_AUTH_USER_META_LOADING: '[auth] LOAD_AUTH_USER_META_LOADING',
    LOAD_AUTH_USER_META_FULFILLED: '[auth] LOAD_AUTH_USER_META_FULFILLED',
    LOAD_AUTH_USER_META_REJECTED: '[auth] LOAD_AUTH_USER_META_REJECTED',
    UPDATE_AUTH_USER: '[auth] UPDATE_AUTH_USER',
    UPDATE_AUTH_USER_INITIAL_STATE: '[auth] UPDATE_AUTH_USER_INITIAL_STATE',
    UPDATE_AUTH_USER_LOADING: '[auth] UPDATE_AUTH_USER_LOADING',
    UPDATE_AUTH_USER_FULFILLED: '[auth] UPDATE_AUTH_USER_FULFILLED',
    UPDATE_AUTH_USER_REJECTED: '[auth] UPDATE_AUTH_USER_REJECTED',
    AUTH_USER_LOADING: '[auth] AUTH_USER_LOADING',
    AUTH_USER_LOADED: '[auth] AUTH_USER_LOADED',
    AUTH_USER_NOT_LOADED: '[auth] AUTH_USER_NOT_LOADED',
    AUTH_USER_DATA: '[auth] AUTH_USER_DATA',
    AUTH_USER_ERROR: '[auth] AUTH_USER_ERROR',
    AUTH_USER_INITIAL_STATE: '[auth] AUTH_USER_INITIAL_STATE',
    UPDATE_AUTH_PHOTO: '[auth] UPDATE_AUTH_PHOTO',
    UPDATE_AUTH_PHOTO_INITIAL_STATE: '[auth] UPDATE_AUTH_PHOTO_INITIAL_STATE',
    UPDATE_AUTH_PHOTO_LOADING: '[auth] UPDATE_AUTH_PHOTO_LOADING',
    UPDATE_AUTH_PHOTO_FULFILLED: '[auth] UPDATE_AUTH_PHOTO_FULFILLED',
    UPDATE_AUTH_PHOTO_REJECTED: '[auth] UPDATE_AUTH_PHOTO_REJECTED',
};
exports.authActions = __assign(__assign({}, types), { authUserInitialState: function () { return ({
        type: types.AUTH_USER_INITIAL_STATE,
        payload: null,
    }); }, authUserLoading: function () { return ({
        type: types.AUTH_USER_LOADING,
        payload: null,
    }); }, authUserLoaded: function () { return ({
        type: types.AUTH_USER_LOADED,
        payload: null,
    }); }, authUserNotLoaded: function () { return ({
        type: types.AUTH_USER_NOT_LOADED,
        payload: null,
    }); }, authUserData: function (data) { return ({
        type: types.AUTH_USER_DATA,
        payload: data,
    }); }, authUserError: function (response) { return ({
        type: types.AUTH_USER_ERROR,
        payload: response,
    }); }, handleLogin: function (user) { return ({
        type: types.LOG_USER_IN,
        payload: null,
        user: user,
    }); }, logUserOut: function () { return ({
        type: types.LOG_USER_OUT,
        payload: null,
    }); }, createSocialAccessToken: function (provider, access_token, token_secret) { return ({
        type: types.CREATE_SOCIAL_ACCESS_TOKEN,
        payload: null,
        provider: provider,
        access_token: access_token,
        token_secret: token_secret,
    }); }, createUser: function (user) { return ({
        type: types.CREATE_USER,
        payload: null,
        user: user,
    }); }, createUserInitialState: function () { return ({
        type: types.CREATE_USER_INITIAL_STATE,
        payload: null,
    }); }, createUserLoading: function () { return ({
        type: types.CREATE_USER_LOADING,
        payload: null,
    }); }, createUserFulfilled: function (response, user) { return ({
        type: types.CREATE_USER_FULFILLED,
        payload: response,
        user: user,
    }); }, createUserRejected: function (response) { return ({
        type: types.CREATE_USER_REJECTED,
        payload: response,
    }); }, createAccessToken: function () { return ({
        type: types.CREATE_AUTH_ACCESS_TOKEN,
        payload: null,
    }); }, createAccessTokenInitialState: function () { return ({
        type: types.CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE,
        payload: null,
    }); }, createAccessTokenLoading: function () { return ({
        type: types.CREATE_AUTH_ACCESS_TOKEN_LOADING,
        payload: null,
    }); }, createAccessTokenFulfilled: function (response) { return ({
        type: types.CREATE_AUTH_ACCESS_TOKEN_FULFILLED,
        payload: response,
    }); }, createAccessTokenRejected: function (response) { return ({
        type: types.CREATE_AUTH_ACCESS_TOKEN_REJECTED,
        payload: response,
    }); }, authMeta: function () { return ({
        type: types.LOAD_AUTH_USER_META,
        payload: null,
    }); }, authMetaInitialState: function () { return ({
        type: types.LOAD_AUTH_USER_META_INITIAL_STATE,
        payload: null,
    }); }, authMetaLoading: function () { return ({
        type: types.LOAD_AUTH_USER_META_LOADING,
        payload: null,
    }); }, authMetaFulfilled: function (response) { return ({
        type: types.LOAD_AUTH_USER_META_FULFILLED,
        payload: response,
    }); }, authMetaRejected: function (response) { return ({
        type: types.LOAD_AUTH_USER_META_REJECTED,
        payload: response,
    }); }, updateAuthUser: function (id, user) { return ({
        type: types.UPDATE_AUTH_USER,
        payload: null,
        id: id,
        user: user,
    }); }, updateAuthUserInitialState: function () { return ({
        type: types.UPDATE_AUTH_USER_INITIAL_STATE,
        payload: null,
    }); }, updateAuthUserLoading: function () { return ({
        type: types.UPDATE_AUTH_USER_LOADING,
        payload: null,
    }); }, updateAuthUserFulfilled: function (response) { return ({
        type: types.UPDATE_AUTH_USER_FULFILLED,
        payload: response,
    }); }, updateAuthUserRejected: function (response) { return ({
        type: types.UPDATE_AUTH_USER_REJECTED,
        payload: response,
    }); }, updateAuthPhoto: function (id, data, successCb, errorCb) {
        if (successCb === void 0) { successCb = undefined; }
        if (errorCb === void 0) { errorCb = undefined; }
        return ({
            type: types.UPDATE_AUTH_PHOTO,
            payload: data,
            id: id,
            successCb: successCb,
            errorCb: errorCb,
        });
    }, updateAuthPhotoInitialState: function () { return ({
        type: types.UPDATE_AUTH_PHOTO_INITIAL_STATE,
        payload: null,
    }); }, updateAuthPhotoLoading: function () { return ({
        type: types.UPDATE_AUTH_PHOTO_LOADING,
        payload: null,
    }); }, updateAuthPhotoFulfilled: function (response) { return ({
        type: types.UPDATE_AUTH_PHOTO_FULFILLED,
        payload: response,
    }); }, updateAuthPhotoRejected: function (response) { return ({
        type: types.UPDATE_AUTH_PHOTO_REJECTED,
        payload: response,
    }); } });
