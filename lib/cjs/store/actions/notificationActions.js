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
    GET_NOTIFICATIONS: '[cards] GET_NOTIFICATIONS',
    GET_NOTIFICATIONS_INITIAL_STATE: '[cards] GET_NOTIFICATIONS_INITIAL_STATE',
    GET_NOTIFICATIONS_LOADING: '[cards] GET_NOTIFICATIONS_LOADING',
    GET_NOTIFICATIONS_FULFILLED: '[cards] GET_NOTIFICATIONS_FULFILLED',
    GET_NOTIFICATIONS_REJECTED: '[cards] GET_NOTIFICATIONS_REJECTED',
    GET_TOTAL_UNREAD_NOTIFICATIONS: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS',
    GET_TOTAL_UNREAD_NOTIFICATIONS_INITIAL_STATE: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS_INITIAL_STATE',
    GET_TOTAL_UNREAD_NOTIFICATIONS_LOADING: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS_LOADING',
    GET_TOTAL_UNREAD_NOTIFICATIONS_FULFILLED: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS_FULFILLED',
    GET_TOTAL_UNREAD_NOTIFICATIONS_REJECTED: '[cards] GET_TOTAL_UNREAD_NOTIFICATIONS_REJECTED',
    UPDATE_NOTIFICATION: '[cards] UPDATE_NOTIFICATION',
    UPDATE_NOTIFICATION_INITIAL_STATE: '[cards] UPDATE_NOTIFICATION_INITIAL_STATE',
    UPDATE_NOTIFICATION_LOADING: '[cards] UPDATE_NOTIFICATION_LOADING',
    UPDATE_NOTIFICATION_FULFILLED: '[cards] UPDATE_NOTIFICATION_FULFILLED',
    UPDATE_NOTIFICATION_REJECTED: '[cards] UPDATE_NOTIFICATION_REJECTED',
    DELETE_NOTIFICATION: '[cards] DELETE_NOTIFICATION',
    DELETE_NOTIFICATION_INITIAL_STATE: '[cards] DELETE_NOTIFICATION_INITIAL_STATE',
    DELETE_NOTIFICATION_LOADING: '[cards] DELETE_NOTIFICATION_LOADING',
    DELETE_NOTIFICATION_FULFILLED: '[cards] DELETE_NOTIFICATION_FULFILLED',
    DELETE_NOTIFICATION_REJECTED: '[cards] DELETE_NOTIFICATION_REJECTED',
    ADD_NOTIFICATION_TO_LIST: '[cards] ADD_NOTIFICATION_TO_LIST',
    DISPLAY_SNACKBAR_MESSAGE: '[cards] DISPLAY_SNACKBAR_MESSAGE',
    HANDLE_SNACKBAR_CLOSE: '[cards] HANDLE_SNACKBAR_CLOSE',
    USER_CONFIRMED_EMAIL_EVENT: '[cards] USER_CONFIRMED_EMAIL_EVENT',
    USER_UPDATED_EMAIL_EVENT: '[cards] USER_UPDATED_EMAIL_EVENT',
    NOTIFICATION_RECEIVED_EVENT: '[cards] NOTIFICATION_RECEIVED_EVENT',
    CONNECT_TO_NOTIFICATION_SERVICE: '[cards] CONNECT_TO_NOTIFICATION_SERVICE',
    CONNECT_TO_NOTIFICATION_SERVICE_INITIAL_STATE: '[cards] CONNECT_TO_NOTIFICATION_SERVICE_INITIAL_STATE',
    CONNECT_TO_NOTIFICATION_SERVICE_LOADING: '[cards] CONNECT_TO_NOTIFICATION_SERVICE_LOADING',
    CONNECT_TO_NOTIFICATION_SERVICE_FULFILLED: '[cards] CONNECT_TO_NOTIFICATION_SERVICE_FULFILLED',
    CONNECT_TO_NOTIFICATION_SERVICE_REJECTED: '[cards] CONNECT_TO_NOTIFICATION_SERVICE_REJECTED',
    DISCONNECT_FROM_NOTIFICATION_SERVICE: '[cards] DISCONNECT_FROM_NOTIFICATION_SERVICE',
    SUBSCRIBE_TO_USER_EVENTS: '[cards] SUBSCRIBE_TO_USER_EVENTS',
    SUBSCRIBE_TO_USER_EVENTS_INITIAL_STATE: '[cards] SUBSCRIBE_TO_USER_EVENTS_INITIAL_STATE',
    SUBSCRIBE_TO_USER_EVENTS_LOADING: '[cards] SUBSCRIBE_TO_USER_EVENTS_LOADING',
    SUBSCRIBE_TO_USER_EVENTS_FULFILLED: '[cards] SUBSCRIBE_TO_USER_EVENTS_FULFILLED',
    SUBSCRIBE_TO_USER_EVENTS_REJECTED: '[cards] SUBSCRIBE_TO_USER_EVENTS_REJECTED',
};
exports.notificationActions = __assign(__assign({}, types), { getNotifications: function (query) { return ({
        type: types.GET_NOTIFICATIONS,
        payload: null,
        query: query,
    }); }, getNotificationsInitialState: function () { return ({
        type: types.GET_NOTIFICATIONS_INITIAL_STATE,
        payload: null,
    }); }, getNotificationsLoading: function () { return ({
        type: types.GET_NOTIFICATIONS_LOADING,
        payload: null,
    }); }, getNotificationsFulfilled: function (response) { return ({
        type: types.GET_NOTIFICATIONS_FULFILLED,
        payload: response,
    }); }, getNotificationsRejected: function (response) { return ({
        type: types.GET_NOTIFICATIONS_REJECTED,
        payload: response,
    }); }, getTotalUnreadNotifications: function (query) { return ({
        type: types.GET_TOTAL_UNREAD_NOTIFICATIONS,
        payload: null,
        query: query,
    }); }, getTotalUnreadNotificationsInitialState: function () { return ({
        type: types.GET_TOTAL_UNREAD_NOTIFICATIONS_INITIAL_STATE,
        payload: null,
    }); }, getTotalUnreadNotificationsLoading: function () { return ({
        type: types.GET_TOTAL_UNREAD_NOTIFICATIONS_LOADING,
        payload: null,
    }); }, getTotalUnreadNotificationsFulfilled: function (response) { return ({
        type: types.GET_TOTAL_UNREAD_NOTIFICATIONS_FULFILLED,
        payload: response,
    }); }, getTotalUnreadNotificationsRejected: function (response) { return ({
        type: types.GET_TOTAL_UNREAD_NOTIFICATIONS_REJECTED,
        payload: response,
    }); }, updateNotification: function (id, data) { return ({
        type: types.UPDATE_NOTIFICATION,
        payload: null,
        id: id,
        data: data,
    }); }, updateNotificationInitialState: function () { return ({
        type: types.UPDATE_NOTIFICATION_INITIAL_STATE,
        payload: null,
    }); }, updateNotificationLoading: function () { return ({
        type: types.UPDATE_NOTIFICATION_LOADING,
        payload: null,
    }); }, updateNotificationFulfilled: function (response) { return ({
        type: types.UPDATE_NOTIFICATION_FULFILLED,
        payload: response,
    }); }, updateNotificationRejected: function (response) { return ({
        type: types.UPDATE_NOTIFICATION_REJECTED,
        payload: response,
    }); }, deleteNotification: function (notification) { return ({
        type: types.DELETE_NOTIFICATION,
        payload: null,
        notification: notification,
    }); }, deleteNotificationInitialState: function () { return ({
        type: types.DELETE_NOTIFICATION_INITIAL_STATE,
        payload: null,
    }); }, deleteNotificationLoading: function () { return ({
        type: types.DELETE_NOTIFICATION_LOADING,
        payload: null,
    }); }, deleteNotificationFulfilled: function () { return ({
        type: types.DELETE_NOTIFICATION_FULFILLED,
        payload: null,
    }); }, deleteNotificationRejected: function (response) { return ({
        type: types.DELETE_NOTIFICATION_REJECTED,
        payload: response,
    }); }, notificationReceivedEvent: function (response) { return ({
        type: types.NOTIFICATION_RECEIVED_EVENT,
        payload: response,
    }); }, addNotificationToList: function (response) { return ({
        type: types.ADD_NOTIFICATION_TO_LIST,
        payload: response,
    }); }, handleSnackbarClose: function () { return ({
        type: types.HANDLE_SNACKBAR_CLOSE,
    }); }, displaySnackbarMessage: function (message, autoHideDuration) {
        if (autoHideDuration === void 0) { autoHideDuration = 3000; }
        return ({
            type: types.DISPLAY_SNACKBAR_MESSAGE,
            message: message,
            autoHideDuration: autoHideDuration,
        });
    }, userConfirmedEmailEvent: function (response) { return ({
        type: types.USER_CONFIRMED_EMAIL_EVENT,
        payload: response,
    }); }, userUpdatedEmailEvent: function (response) { return ({
        type: types.USER_UPDATED_EMAIL_EVENT,
        payload: response,
    }); }, subscribeToUserEvents: function () { return ({
        type: types.SUBSCRIBE_TO_USER_EVENTS,
        payload: null,
    }); }, subscribeToUserEventsInitialState: function () { return ({
        type: types.SUBSCRIBE_TO_USER_EVENTS_INITIAL_STATE,
        payload: null,
    }); }, subscribeToUserEventsLoading: function () { return ({
        type: types.SUBSCRIBE_TO_USER_EVENTS_LOADING,
        payload: null,
    }); }, subscribeToUserEventsFulfilled: function () { return ({
        type: types.SUBSCRIBE_TO_USER_EVENTS_FULFILLED,
        payload: null,
    }); }, subscribeToUserEventsRejected: function (response) { return ({
        type: types.SUBSCRIBE_TO_USER_EVENTS_REJECTED,
        payload: response,
    }); }, connectToNotificationService: function () { return ({
        type: types.CONNECT_TO_NOTIFICATION_SERVICE,
        payload: null,
    }); }, connectToNotificationServiceInitialState: function () { return ({
        type: types.CONNECT_TO_NOTIFICATION_SERVICE_INITIAL_STATE,
        payload: null,
    }); }, connectToNotificationServiceLoading: function () { return ({
        type: types.CONNECT_TO_NOTIFICATION_SERVICE_LOADING,
        payload: null,
    }); }, connectToNotificationServiceFulfilled: function () { return ({
        type: types.CONNECT_TO_NOTIFICATION_SERVICE_FULFILLED,
        payload: null,
    }); }, connectToNotificationServiceRejected: function (response) { return ({
        type: types.CONNECT_TO_NOTIFICATION_SERVICE_REJECTED,
        payload: response,
    }); }, disconnectFromNotificationService: function () { return ({
        type: types.DISCONNECT_FROM_NOTIFICATION_SERVICE,
        payload: null,
    }); } });
