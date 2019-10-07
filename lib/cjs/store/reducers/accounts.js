"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationFromLocalStorage('accountList'),
    item: stateUtility_1.default.getItemInitialState(),
    users: stateUtility_1.default.getPaginationInitialState(),
    defaultAccount: stateUtility_1.default.getItemFromLocalStorage('defaultAccount'),
    setDefaultAccount: stateUtility_1.default.getObserverInitialState(),
    createAccount: stateUtility_1.default.getItemInitialState(),
    deleteAccountMember: stateUtility_1.default.getObserverInitialState(),
    updateAccountMember: stateUtility_1.default.getObserverInitialState(),
    updateAccount: stateUtility_1.default.getObserverInitialState(),
    updatePhoto: stateUtility_1.default.getObserverInitialState(),
    invoices: stateUtility_1.default.getPaginationInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  item
        case actions_1.accountActions.SHOW_ACCOUNT_INITIAL_STATE:
            return state.merge({
                item: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.accountActions.SHOW_ACCOUNT_LOADING:
            return state.merge({
                item: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.accountActions.SHOW_ACCOUNT_FULFILLED:
            var item = action.payload.data;
            return state.merge({
                item: stateUtility_1.default.getItemFulfilled(item),
            });
        case actions_1.accountActions.SHOW_ACCOUNT_REJECTED:
            return state.merge({
                item: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  users
        case actions_1.accountActions.LOAD_ACCOUNT_USERS_INITIAL_STATE:
            return state.merge({
                users: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.accountActions.LOAD_ACCOUNT_USERS_LOADING:
            return state.merge({
                users: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.accountActions.LOAD_ACCOUNT_USERS_FULFILLED:
            var accountUsers = action.payload.data;
            return state.merge({
                users: stateUtility_1.default.getPaginationFulfilled(accountUsers),
            });
        case actions_1.accountActions.LOAD_ACCOUNT_USERS_REJECTED:
            return state.merge({
                users: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  accounts
        case actions_1.accountActions.LOAD_ACCOUNTS_INITIAL_STATE:
            return state.merge({
                list: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.accountActions.LOAD_ACCOUNTS_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.accountActions.LOAD_ACCOUNTS_FULFILLED:
            var accountList = action.payload.data;
            window.localStorage.setItem('accountList', JSON.stringify(accountList));
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(accountList),
            });
        case actions_1.accountActions.LOAD_ACCOUNTS_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  getDefaultAccount
        case actions_1.accountActions.LOAD_DEFAULT_ACCOUNT_INITIAL_STATE:
            return state.merge({
                defaultAccount: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.accountActions.LOAD_DEFAULT_ACCOUNT_LOADING:
            return state.merge({
                defaultAccount: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.accountActions.LOAD_DEFAULT_ACCOUNT_FULFILLED:
            var getDefaultAccountResponse = action.payload.data;
            window.localStorage.setItem('defaultAccount', JSON.stringify(getDefaultAccountResponse));
            return state.merge({
                defaultAccount: stateUtility_1.default.getItemFulfilled(getDefaultAccountResponse),
            });
        case actions_1.accountActions.LOAD_DEFAULT_ACCOUNT_REJECTED:
            return state.merge({
                defaultAccount: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  setDefaultAccount
        case actions_1.accountActions.SET_DEFAULT_ACCOUNT_INITIAL_STATE:
            return state.merge({
                setDefaultAccount: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.accountActions.SET_DEFAULT_ACCOUNT_LOADING:
            return state.merge({
                setDefaultAccount: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.accountActions.SET_DEFAULT_ACCOUNT_FULFILLED:
            var setDefaultAccountResponse = action.payload.data;
            window.localStorage.setItem('defaultAccount', JSON.stringify(setDefaultAccountResponse));
            return state.merge({
                setDefaultAccount: stateUtility_1.default.getObserverFulfilled(),
                defaultAccount: stateUtility_1.default.getItemFulfilled(setDefaultAccountResponse),
            });
        case actions_1.accountActions.SET_DEFAULT_ACCOUNT_REJECTED:
            return state.merge({
                setDefaultAccount: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  createAccount
        case actions_1.accountActions.CREATE_ACCOUNT_INITIAL_STATE:
            return state.merge({
                createAccount: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.accountActions.CREATE_ACCOUNT_LOADING:
            return state.merge({
                createAccount: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.accountActions.CREATE_ACCOUNT_FULFILLED:
            var createAccountResponse = action.payload.data;
            return state.merge({
                createAccount: stateUtility_1.default.getItemFulfilled(createAccountResponse),
            });
        case actions_1.accountActions.CREATE_ACCOUNT_REJECTED:
            return state.merge({
                createAccount: stateUtility_1.default.getItemRejected(action.payload),
            });
        //  deleteAccountMember
        case actions_1.accountActions.DELETE_ACCOUNT_MEMBER_INITIAL_STATE:
            return state.merge({
                deleteAccountMember: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.accountActions.DELETE_ACCOUNT_MEMBER_LOADING:
            return state.merge({
                deleteAccountMember: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.accountActions.DELETE_ACCOUNT_MEMBER_FULFILLED:
            return state.merge({
                deleteAccountMember: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.accountActions.DELETE_ACCOUNT_MEMBER_REJECTED:
            return state.merge({
                deleteAccountMember: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  updateAccountMember
        case actions_1.accountActions.UPDATE_ACCOUNT_MEMBER_INITIAL_STATE:
            return state.merge({
                updateAccountMember: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.accountActions.UPDATE_ACCOUNT_MEMBER_LOADING:
            return state.merge({
                updateAccountMember: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.accountActions.UPDATE_ACCOUNT_MEMBER_FULFILLED:
            return state.merge({
                updateAccountMember: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.accountActions.UPDATE_ACCOUNT_MEMBER_REJECTED:
            return state.merge({
                updateAccountMember: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  updateAccount
        case actions_1.accountActions.UPDATE_ACCOUNT_INITIAL_STATE:
            return state.merge({
                updateAccount: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.accountActions.UPDATE_ACCOUNT_LOADING:
            return state.merge({
                updateAccount: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.accountActions.UPDATE_ACCOUNT_FULFILLED:
            var updateAccountResponse = action.payload.data;
            var returnVal = {
                updateAccount: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(updateAccountResponse),
            };
            if (updateAccountResponse.id === state.toJS().defaultAccount.data.id) {
                window.localStorage.setItem('defaultAccount', JSON.stringify(updateAccountResponse));
                returnVal.defaultAccount = stateUtility_1.default.getItemFulfilled(updateAccountResponse);
            }
            return state.merge(returnVal);
        case actions_1.accountActions.UPDATE_ACCOUNT_REJECTED:
            return state.merge({
                updateAccount: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  updatePhoto
        case actions_1.accountActions.UPDATE_ACCOUNT_PHOTO_INITIAL_STATE:
            return state.merge({
                updatePhoto: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.accountActions.UPDATE_ACCOUNT_PHOTO_LOADING:
            return state.merge({
                updatePhoto: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.accountActions.UPDATE_ACCOUNT_PHOTO_FULFILLED:
            return state.merge({
                updatePhoto: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.accountActions.UPDATE_ACCOUNT_PHOTO_REJECTED:
            return state.merge({
                updatePhoto: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  invoices
        case actions_1.accountActions.GET_INVOICES_INITIAL_STATE:
            return state.merge({
                invoices: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.accountActions.GET_INVOICES_LOADING:
            return state.merge({
                invoices: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.accountActions.GET_INVOICES_FULFILLED:
            return state.merge({
                invoices: stateUtility_1.default.getPaginationFulfilled(action.payload.data),
            });
        case actions_1.accountActions.GET_INVOICES_REJECTED:
            return state.merge({
                invoices: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        default:
            return state;
    }
});
