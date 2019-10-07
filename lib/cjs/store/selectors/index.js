"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var accessToken = function (state) { return state.auth.toJS().accessToken; };
exports.authUser = function (state) { return state.auth.toJS().user; };
exports.authMeta = function (state) { return state.auth.toJS().meta; };
exports.defaultAccount = function (state) { return state.accounts.toJS().defaultAccount; };
exports.authAccounts = function (state) { return state.accounts.toJS().list; };
exports.isLoggedIn = reselect_1.createSelector([accessToken, exports.authUser], function (accessToken, user) { return accessToken.data !== null && user.data !== null; });
exports.loginLoading = reselect_1.createSelector([accessToken, exports.authUser, exports.authMeta, exports.defaultAccount, exports.authAccounts], function (accessToken, authUser, authMeta, defaultAccount, authAccounts) {
    return (accessToken.ui.loading === true ||
        authUser.ui.loading === true ||
        authMeta.ui.loading === true ||
        defaultAccount.ui.loading === true ||
        authAccounts.ui.loading === true);
});
