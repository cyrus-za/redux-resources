"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    list: stateUtility_1.default.getPaginationInitialState(),
    getMyAccountInvites: stateUtility_1.default.getPaginationInitialState(),
    item: stateUtility_1.default.getItemInitialState(),
    deleteAccountInvite: stateUtility_1.default.getObserverInitialState(),
    acceptAccountInvite: stateUtility_1.default.getObserverInitialState(),
    createAccountInvite: stateUtility_1.default.getItemInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  list
        case actions_1.accountInviteActions.GET_ACCOUNT_INVITES_INITIAL_STATE:
            return state.merge({
                list: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.accountInviteActions.GET_ACCOUNT_INVITES_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.accountInviteActions.GET_ACCOUNT_INVITES_FULFILLED:
            var list = action.payload.data;
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(list),
            });
        case actions_1.accountInviteActions.GET_ACCOUNT_INVITES_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  getMyAccountInvites
        case actions_1.accountInviteActions.GET_MY_ACCOUNT_INVITES_INITIAL_STATE:
            return state.merge({
                getMyAccountInvites: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.accountInviteActions.GET_MY_ACCOUNT_INVITES_LOADING:
            return state.merge({
                getMyAccountInvites: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.accountInviteActions.GET_MY_ACCOUNT_INVITES_FULFILLED:
            var getMyAccountInvites = action.payload.data;
            return state.merge({
                getMyAccountInvites: stateUtility_1.default.getPaginationFulfilled(getMyAccountInvites),
            });
        case actions_1.accountInviteActions.GET_MY_ACCOUNT_INVITES_REJECTED:
            return state.merge({
                getMyAccountInvites: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  deleteAccountInvite
        case actions_1.accountInviteActions.DELETE_ACCOUNT_INVITE_INITIAL_STATE:
            return state.merge({
                deleteAccountInvite: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.accountInviteActions.DELETE_ACCOUNT_INVITE_LOADING:
            return state.merge({
                deleteAccountInvite: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.accountInviteActions.DELETE_ACCOUNT_INVITE_FULFILLED:
            return state.merge({
                deleteAccountInvite: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.accountInviteActions.DELETE_ACCOUNT_INVITE_REJECTED:
            return state.merge({
                deleteAccountInvite: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  acceptAccountInvite
        case actions_1.accountInviteActions.ACCEPT_ACCOUNT_INVITE_INITIAL_STATE:
            return state.merge({
                acceptAccountInvite: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.accountInviteActions.ACCEPT_ACCOUNT_INVITE_LOADING:
            return state.merge({
                acceptAccountInvite: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.accountInviteActions.ACCEPT_ACCOUNT_INVITE_FULFILLED:
            var acceptedAccountInvite = action.payload.data;
            return state.merge({
                acceptAccountInvite: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(acceptedAccountInvite),
            });
        case actions_1.accountInviteActions.ACCEPT_ACCOUNT_INVITE_REJECTED:
            return state.merge({
                acceptAccountInvite: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  createAccountInvite
        case actions_1.accountInviteActions.CREATE_ACCOUNT_INVITE_INITIAL_STATE:
            return state.merge({
                createAccountInvite: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.accountInviteActions.CREATE_ACCOUNT_INVITE_LOADING:
            return state.merge({
                createAccountInvite: stateUtility_1.default.getItemLoading(),
            });
        case actions_1.accountInviteActions.CREATE_ACCOUNT_INVITE_FULFILLED:
            var createResponse = action.payload.data;
            return state.merge({
                createAccountInvite: stateUtility_1.default.getItemFulfilled(createResponse),
            });
        case actions_1.accountInviteActions.CREATE_ACCOUNT_INVITE_REJECTED:
            return state.merge({
                createAccountInvite: stateUtility_1.default.getItemRejected(action.payload),
            });
        default:
            return state;
    }
});
