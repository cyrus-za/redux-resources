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
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    accessToken: stateUtility_1.default.getStringFromLocalStorage('accessToken'),
    user: stateUtility_1.default.getItemFromLocalStorage('authUser'),
    meta: stateUtility_1.default.getItemFromLocalStorage('userMeta'),
    updateUser: stateUtility_1.default.getObserverInitialState(),
    createUser: stateUtility_1.default.getObserverInitialState(),
    updatePhoto: stateUtility_1.default.getObserverInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    //  log user out
    switch (action.type) {
        case actions_1.authActions.AUTH_USER_LOADING:
            return state.merge({
                user: __assign(__assign({}, state.toJS().user), { ui: { loading: true, loaded: false } }),
            });
        case actions_1.authActions.AUTH_USER_LOADED:
            return state.merge({
                user: __assign(__assign({}, state.toJS().user), { ui: { loading: false, loaded: true } }),
            });
        case actions_1.authActions.AUTH_USER_NOT_LOADED:
            return state.merge({
                user: __assign(__assign({}, state.toJS().user), { ui: { loading: false, loaded: false } }),
            });
        case actions_1.authActions.AUTH_USER_DATA:
            action.payload === null
                ? window.localStorage.removeItem('authUser')
                : window.localStorage.setItem('authUser', JSON.stringify(action.payload));
            return state.merge({
                user: __assign(__assign({}, state.toJS().user), { data: action.payload }),
            });
        case actions_1.authActions.AUTH_USER_ERROR:
            return state.merge({
                user: __assign(__assign({}, state.toJS().user), { data: action.payload }),
            });
        //  auth access token
        case actions_1.authActions.CREATE_AUTH_ACCESS_TOKEN_INITIAL_STATE:
            return state.merge({
                accessToken: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.authActions.CREATE_AUTH_ACCESS_TOKEN_LOADING:
            return state.merge({
                accessToken: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED:
            var access_token = action.payload.data.access_token;
            window.localStorage.setItem('accessToken', access_token);
            return state.merge({
                accessToken: stateUtility_1.default.getItemFulfilled(access_token),
            });
        case actions_1.authActions.CREATE_AUTH_ACCESS_TOKEN_REJECTED:
            return state.merge({
                accessToken: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  meta
        case actions_1.authActions.LOAD_AUTH_USER_META_INITIAL_STATE:
            return state.merge({
                meta: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.authActions.LOAD_AUTH_USER_META_LOADING:
            return state.merge({
                meta: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.authActions.LOAD_AUTH_USER_META_FULFILLED:
            var userMeta = action.payload.data;
            window.localStorage.setItem('userMeta', JSON.stringify(userMeta));
            return state.merge({
                meta: stateUtility_1.default.getItemFulfilled(userMeta),
            });
        case actions_1.authActions.LOAD_AUTH_USER_META_REJECTED:
            return state.merge({
                meta: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  updateUser
        case actions_1.authActions.UPDATE_AUTH_USER_INITIAL_STATE:
            return state.merge({
                updateUser: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.authActions.UPDATE_AUTH_USER_LOADING:
            return state.merge({
                updateUser: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.authActions.UPDATE_AUTH_USER_FULFILLED:
            var updateUserResponse = action.payload.data;
            window.localStorage.setItem('authUser', JSON.stringify(updateUserResponse));
            return state.merge({
                updateUser: stateUtility_1.default.getObserverFulfilled(),
                user: stateUtility_1.default.getItemFulfilled(updateUserResponse),
            });
        case actions_1.authActions.UPDATE_AUTH_USER_REJECTED:
            return state.merge({
                updateUser: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  createUser
        case actions_1.authActions.CREATE_USER_INITIAL_STATE:
            return state.merge({
                createUser: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.authActions.CREATE_USER_LOADING:
            return state.merge({
                createUser: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.authActions.CREATE_USER_FULFILLED:
            return state.merge({
                createUser: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.authActions.CREATE_USER_REJECTED:
            return state.merge({
                createUser: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  updatePhoto
        case actions_1.authActions.UPDATE_AUTH_PHOTO_INITIAL_STATE:
            return state.merge({
                updatePhoto: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.authActions.UPDATE_AUTH_PHOTO_LOADING:
            return state.merge({
                updatePhoto: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.authActions.UPDATE_AUTH_PHOTO_FULFILLED:
            return state.merge({
                updatePhoto: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.authActions.UPDATE_AUTH_PHOTO_REJECTED:
            return state.merge({
                updatePhoto: stateUtility_1.default.getObserverRejected(action.payload),
            });
        default:
            return state;
    }
});
