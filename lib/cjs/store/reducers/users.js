"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var initialState = immutable_1.fromJS({
    updatePassword: stateUtility_1.default.getObserverInitialState(),
    resendEmailConfirmation: stateUtility_1.default.getObserverInitialState(),
    notificationPreferences: stateUtility_1.default.getItemInitialState(),
    getNotificationPreferences: stateUtility_1.default.getObserverInitialState(),
    updateNotificationPreferences: stateUtility_1.default.getObserverInitialState(),
    confirmEmail: stateUtility_1.default.getObserverInitialState(),
});
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  updatePassword
        case actions_1.userActions.UPDATE_PASSWORD_INITIAL_STATE:
            return state.merge({
                updatePassword: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.userActions.UPDATE_PASSWORD_LOADING:
            return state.merge({
                updatePassword: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.userActions.UPDATE_PASSWORD_FULFILLED:
            return state.merge({
                updatePassword: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.userActions.UPDATE_PASSWORD_REJECTED:
            return state.merge({
                updatePassword: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  confirmEmail
        case actions_1.userActions.CONFIRM_EMAIL_INITIAL_STATE:
            return state.merge({
                confirmEmail: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.userActions.CONFIRM_EMAIL_LOADING:
            return state.merge({
                confirmEmail: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.userActions.CONFIRM_EMAIL_FULFILLED:
            return state.merge({
                confirmEmail: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.userActions.CONFIRM_EMAIL_REJECTED:
            return state.merge({
                confirmEmail: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  resendEmailConfirmation
        case actions_1.userActions.RESEND_EMAIL_CONFIRMATION_INITIAL_STATE:
            return state.merge({
                resendEmailConfirmation: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.userActions.RESEND_EMAIL_CONFIRMATION_LOADING:
            return state.merge({
                resendEmailConfirmation: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.userActions.RESEND_EMAIL_CONFIRMATION_FULFILLED:
            return state.merge({
                resendEmailConfirmation: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.userActions.RESEND_EMAIL_CONFIRMATION_REJECTED:
            return state.merge({
                resendEmailConfirmation: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  getNotificationPreferences
        case actions_1.userActions.GET_NOTIFICATION_PREFERENCES_INITIAL_STATE:
            return state.merge({
                notificationPreferences: stateUtility_1.default.getItemInitialState(),
                getNotificationPreferences: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.userActions.GET_NOTIFICATION_PREFERENCES_LOADING:
            return state.merge({
                notificationPreferences: stateUtility_1.default.getItemLoading(),
                getNotificationPreferences: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.userActions.GET_NOTIFICATION_PREFERENCES_FULFILLED:
            var getPreferencesFulfilled = action.payload.data;
            return state.merge({
                notificationPreferences: stateUtility_1.default.getItemFulfilled(getPreferencesFulfilled),
                getNotificationPreferences: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.userActions.GET_NOTIFICATION_PREFERENCES_REJECTED:
            return state.merge({
                notificationPreferences: stateUtility_1.default.getItemRejected(action.payload),
                getNotificationPreferences: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  updateNotificationPreferences
        case actions_1.userActions.UPDATE_NOTIFICATION_PREFERENCES_INITIAL_STATE:
            return state.merge({
                updateNotificationPreferences: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.userActions.UPDATE_NOTIFICATION_PREFERENCES_LOADING:
            return state.merge({
                updateNotificationPreferences: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.userActions.UPDATE_NOTIFICATION_PREFERENCES_FULFILLED:
            var updatePreferencesFulfilled = action.payload.data;
            return state.merge({
                notificationPreferences: stateUtility_1.default.getItemFulfilled(updatePreferencesFulfilled),
                updateNotificationPreferences: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.userActions.UPDATE_NOTIFICATION_PREFERENCES_REJECTED:
            return state.merge({
                updateNotificationPreferences: stateUtility_1.default.getObserverRejected(action.payload),
            });
        default:
            return state;
    }
});
