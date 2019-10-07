"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutable_1 = require("immutable");
var actions_1 = require("../actions");
var stateUtility_1 = require("../../utilities/stateUtility");
var DEFAULT_AUTO_HIDE_DURATION = 4000;
var initialState = immutable_1.fromJS({
    snackBar: {
        open: false,
        autoHideDuration: DEFAULT_AUTO_HIDE_DURATION,
        message: '',
    },
    list: stateUtility_1.default.getPaginationInitialState(),
    totalUnreadNotifications: 0,
    item: stateUtility_1.default.getItemInitialState(),
    updateNotification: stateUtility_1.default.getObserverInitialState(),
    deleteNotification: stateUtility_1.default.getObserverInitialState(),
    connectToNotificationService: stateUtility_1.default.getObserverInitialState(),
    subscribeToUserEvents: stateUtility_1.default.getObserverInitialState(),
});
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        //  list
        case actions_1.notificationActions.GET_NOTIFICATIONS_INITIAL_STATE:
            return state.merge({
                list: stateUtility_1.default.getPaginationInitialState(),
            });
        case actions_1.notificationActions.GET_NOTIFICATIONS_LOADING:
            return state.merge({
                list: stateUtility_1.default.getPaginationLoading(),
            });
        case actions_1.notificationActions.GET_NOTIFICATIONS_FULFILLED:
            var list = action.payload.data;
            return state.merge({
                list: stateUtility_1.default.getPaginationFulfilled(list),
            });
        case actions_1.notificationActions.GET_NOTIFICATIONS_REJECTED:
            return state.merge({
                list: stateUtility_1.default.getPaginationRejected(action.payload),
            });
        //  list
        case actions_1.notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS_INITIAL_STATE:
            return state.merge({
                totalUnreadNotifications: 0,
            });
        case actions_1.notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS_LOADING:
            return state.merge({
                totalUnreadNotifications: 0,
            });
        case actions_1.notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS_FULFILLED:
            var totalUnreadNotifications = action.payload.data;
            return state.merge({
                totalUnreadNotifications: totalUnreadNotifications.total,
            });
        case actions_1.notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS_REJECTED:
            return state.merge({
                totalUnreadNotifications: 0,
            });
        case actions_1.notificationActions.UPDATE_NOTIFICATION_INITIAL_STATE:
            return state.merge({
                updateNotification: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.notificationActions.UPDATE_NOTIFICATION_LOADING:
            return state.merge({
                updateNotification: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.notificationActions.UPDATE_NOTIFICATION_FULFILLED:
            var updateNotificationResponse_1 = action.payload.data;
            var updatedList = state.toJS().list;
            var unreadNotifications = state.toJS().totalUnreadNotifications;
            var updatedItemIndex = updatedList.data.findIndex(function (item) { return item.id === updateNotificationResponse_1.id; });
            if (updatedItemIndex !== -1) {
                updatedList.data[updatedItemIndex] = updateNotificationResponse_1;
                updateNotificationResponse_1.read_at === null ? unreadNotifications++ : unreadNotifications--;
            }
            return state.merge({
                updateNotification: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemFulfilled(updateNotificationResponse_1),
                list: updatedList,
                totalUnreadNotifications: unreadNotifications,
            });
        case actions_1.notificationActions.UPDATE_NOTIFICATION_REJECTED:
            return state.merge({
                updateNotification: stateUtility_1.default.getObserverRejected(action.payload),
            });
        case actions_1.notificationActions.DELETE_NOTIFICATION_INITIAL_STATE:
            return state.merge({
                deleteNotification: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.notificationActions.DELETE_NOTIFICATION_LOADING:
            return state.merge({
                deleteNotification: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.notificationActions.DELETE_NOTIFICATION_FULFILLED:
            return state.merge({
                deleteNotification: stateUtility_1.default.getObserverFulfilled(),
                item: stateUtility_1.default.getItemInitialState(),
            });
        case actions_1.notificationActions.DELETE_NOTIFICATION_REJECTED:
            return state.merge({
                deleteNotification: stateUtility_1.default.getObserverRejected(action.payload),
            });
        case actions_1.notificationActions.ADD_NOTIFICATION_TO_LIST:
            return state.merge({
                list: stateUtility_1.default.addItemToPagination(state.toJS().list, action.payload),
                totalUnreadNotifications: state.toJS().totalUnreadNotifications + 1,
            });
        case actions_1.notificationActions.DISPLAY_SNACKBAR_MESSAGE:
            return state.merge({
                snackBar: {
                    open: true,
                    autoHideDuration: action.autoHideDuration,
                    message: action.message,
                },
            });
        case actions_1.notificationActions.HANDLE_SNACKBAR_CLOSE:
            return state.merge({
                snackBar: {
                    open: false,
                    autoHideDuration: DEFAULT_AUTO_HIDE_DURATION,
                    message: '',
                },
            });
        //  connectToNotificationService
        case actions_1.notificationActions.CONNECT_TO_NOTIFICATION_SERVICE_INITIAL_STATE:
            return state.merge({
                connectToNotificationService: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.notificationActions.CONNECT_TO_NOTIFICATION_SERVICE_LOADING:
            return state.merge({
                connectToNotificationService: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.notificationActions.CONNECT_TO_NOTIFICATION_SERVICE_FULFILLED:
            return state.merge({
                connectToNotificationService: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.notificationActions.CONNECT_TO_NOTIFICATION_SERVICE_REJECTED:
            return state.merge({
                connectToNotificationService: stateUtility_1.default.getObserverRejected(action.payload),
            });
        //  subscribeToUserEvents
        case actions_1.notificationActions.SUBSCRIBE_TO_USER_EVENTS_INITIAL_STATE:
            return state.merge({
                subscribeToUserEvents: stateUtility_1.default.getObserverInitialState(),
            });
        case actions_1.notificationActions.SUBSCRIBE_TO_USER_EVENTS_LOADING:
            return state.merge({
                subscribeToUserEvents: stateUtility_1.default.getObserverLoading(),
            });
        case actions_1.notificationActions.SUBSCRIBE_TO_USER_EVENTS_FULFILLED:
            return state.merge({
                subscribeToUserEvents: stateUtility_1.default.getObserverFulfilled(),
            });
        case actions_1.notificationActions.SUBSCRIBE_TO_USER_EVENTS_REJECTED:
            return state.merge({
                subscribeToUserEvents: stateUtility_1.default.getObserverRejected(action.payload),
            });
        default:
            return state;
    }
}
exports.default = default_1;
