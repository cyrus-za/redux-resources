import { createSelector } from 'reselect';

var accessToken = function (state) {
  return state.auth.toJS().accessToken;
};

export var authUser = function (state) {
  return state.auth.toJS().user;
};
export var authMeta = function (state) {
  return state.auth.toJS().meta;
};
export var defaultAccount = function (state) {
  return state.accounts.toJS().defaultAccount;
};
export var authAccounts = function (state) {
  return state.accounts.toJS().list;
};
export var isLoggedIn = createSelector([accessToken, authUser], function (accessToken, user) {
  return accessToken.data !== null && user.data !== null;
});
export var loginLoading = createSelector([accessToken, authUser, authMeta, defaultAccount, authAccounts], function (accessToken, authUser, authMeta, defaultAccount, authAccounts) {
  return accessToken.ui.loading === true || authUser.ui.loading === true || authMeta.ui.loading === true || defaultAccount.ui.loading === true || authAccounts.ui.loading === true;
});