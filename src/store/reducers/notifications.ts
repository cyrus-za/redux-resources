import { fromJS } from 'immutable'
import { notificationActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const DEFAULT_AUTO_HIDE_DURATION = 4000

const initialState = fromJS({
	snackBar: {
		open: false,
		autoHideDuration: DEFAULT_AUTO_HIDE_DURATION,
		message: '',
	},

	list: stateUtility.getPaginationInitialState(),
	totalUnreadNotifications: 0,
	item: stateUtility.getItemInitialState(),

	updateNotification: stateUtility.getObserverInitialState(),
	deleteNotification: stateUtility.getObserverInitialState(),
	connectToNotificationService: stateUtility.getObserverInitialState(),
	subscribeToUserEvents: stateUtility.getObserverInitialState(),
})

export default function(state = initialState, action) {
	switch (action.type) {
		//  list
		case notificationActions.GET_NOTIFICATIONS_INITIAL_STATE:
			return state.merge({
				list: stateUtility.getPaginationInitialState(),
			})
		case notificationActions.GET_NOTIFICATIONS_LOADING:
			return state.merge({
				list: stateUtility.getPaginationLoading(),
			})
		case notificationActions.GET_NOTIFICATIONS_FULFILLED:
			const list = action.payload.data
			return state.merge({
				list: stateUtility.getPaginationFulfilled(list),
			})
		case notificationActions.GET_NOTIFICATIONS_REJECTED:
			return state.merge({
				list: stateUtility.getPaginationRejected(action.payload),
			})

		//  list
		case notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS_INITIAL_STATE:
			return state.merge({
				totalUnreadNotifications: 0,
			})
		case notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS_LOADING:
			return state.merge({
				totalUnreadNotifications: 0,
			})
		case notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS_FULFILLED:
			const totalUnreadNotifications = action.payload.data
			return state.merge({
				totalUnreadNotifications: totalUnreadNotifications.total,
			})
		case notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS_REJECTED:
			return state.merge({
				totalUnreadNotifications: 0,
			})

		case notificationActions.UPDATE_NOTIFICATION_INITIAL_STATE:
			return state.merge({
				updateNotification: stateUtility.getObserverInitialState(),
			})
		case notificationActions.UPDATE_NOTIFICATION_LOADING:
			return state.merge({
				updateNotification: stateUtility.getObserverLoading(),
			})
		case notificationActions.UPDATE_NOTIFICATION_FULFILLED:
			const updateNotificationResponse = action.payload.data
			let updatedList = state.toJS().list
			let unreadNotifications = state.toJS().totalUnreadNotifications
			const updatedItemIndex = updatedList.data.findIndex((item) => item.id === updateNotificationResponse.id)
			if (updatedItemIndex !== -1) {
				updatedList.data[updatedItemIndex] = updateNotificationResponse
				updateNotificationResponse.read_at === null ? unreadNotifications++ : unreadNotifications--
			}
			return state.merge({
				updateNotification: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemFulfilled(updateNotificationResponse),
				list: updatedList,
				totalUnreadNotifications: unreadNotifications,
			})
		case notificationActions.UPDATE_NOTIFICATION_REJECTED:
			return state.merge({
				updateNotification: stateUtility.getObserverRejected(action.payload),
			})

		case notificationActions.DELETE_NOTIFICATION_INITIAL_STATE:
			return state.merge({
				deleteNotification: stateUtility.getObserverInitialState(),
			})
		case notificationActions.DELETE_NOTIFICATION_LOADING:
			return state.merge({
				deleteNotification: stateUtility.getObserverLoading(),
			})
		case notificationActions.DELETE_NOTIFICATION_FULFILLED:
			return state.merge({
				deleteNotification: stateUtility.getObserverFulfilled(),
				item: stateUtility.getItemInitialState(),
			})
		case notificationActions.DELETE_NOTIFICATION_REJECTED:
			return state.merge({
				deleteNotification: stateUtility.getObserverRejected(action.payload),
			})

		case notificationActions.ADD_NOTIFICATION_TO_LIST:
			return state.merge({
				list: stateUtility.addItemToPagination(state.toJS().list, action.payload),
				totalUnreadNotifications: state.toJS().totalUnreadNotifications + 1,
			})

		case notificationActions.DISPLAY_SNACKBAR_MESSAGE:
			return state.merge({
				snackBar: {
					open: true,
					autoHideDuration: action.autoHideDuration,
					message: action.message,
				},
			})
		case notificationActions.HANDLE_SNACKBAR_CLOSE:
			return state.merge({
				snackBar: {
					open: false,
					autoHideDuration: DEFAULT_AUTO_HIDE_DURATION,
					message: '',
				},
			})

		//  connectToNotificationService
		case notificationActions.CONNECT_TO_NOTIFICATION_SERVICE_INITIAL_STATE:
			return state.merge({
				connectToNotificationService: stateUtility.getObserverInitialState(),
			})
		case notificationActions.CONNECT_TO_NOTIFICATION_SERVICE_LOADING:
			return state.merge({
				connectToNotificationService: stateUtility.getObserverLoading(),
			})
		case notificationActions.CONNECT_TO_NOTIFICATION_SERVICE_FULFILLED:
			return state.merge({
				connectToNotificationService: stateUtility.getObserverFulfilled(),
			})
		case notificationActions.CONNECT_TO_NOTIFICATION_SERVICE_REJECTED:
			return state.merge({
				connectToNotificationService: stateUtility.getObserverRejected(action.payload),
			})

		//  subscribeToUserEvents
		case notificationActions.SUBSCRIBE_TO_USER_EVENTS_INITIAL_STATE:
			return state.merge({
				subscribeToUserEvents: stateUtility.getObserverInitialState(),
			})
		case notificationActions.SUBSCRIBE_TO_USER_EVENTS_LOADING:
			return state.merge({
				subscribeToUserEvents: stateUtility.getObserverLoading(),
			})
		case notificationActions.SUBSCRIBE_TO_USER_EVENTS_FULFILLED:
			return state.merge({
				subscribeToUserEvents: stateUtility.getObserverFulfilled(),
			})
		case notificationActions.SUBSCRIBE_TO_USER_EVENTS_REJECTED:
			return state.merge({
				subscribeToUserEvents: stateUtility.getObserverRejected(action.payload),
			})

		default:
			return state
	}
}
