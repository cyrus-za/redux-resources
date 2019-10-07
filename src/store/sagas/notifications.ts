import { authActions, notificationActions } from '../actions'
import { put, takeEvery, call, select } from 'redux-saga/effects'
import { notificationApi, pusherApi } from '../../api'
import { AnyAction } from 'redux'

function* userConfirmedEmailEvent({ payload }: AnyAction) {
	yield put(authActions.authMetaFulfilled(payload))
	yield put(notificationActions.displaySnackbarMessage('Email confirmed!', 2000))
}

function* userUpdatedEmailEvent({ payload }: AnyAction) {
	yield put(authActions.authMetaFulfilled(payload))
	yield put(
		notificationActions.displaySnackbarMessage('Please check your inbox and confirm your new email address', 2000)
	)
}

function* notificationReceivedEvent({ payload }: AnyAction) {
	yield put(notificationActions.addNotificationToList(payload))
}

export function* getNotifications({ query }: AnyAction) {
	try {
		yield put(notificationActions.getNotificationsInitialState())
		yield put(notificationActions.getNotificationsLoading())
		const response = yield call(notificationApi.getNotifications, query)
		yield put(notificationActions.getNotificationsFulfilled(response))
	} catch (error) {
		yield put(notificationActions.getNotificationsRejected(error))
	}
}

export function* getTotalUnreadNotifications() {
	try {
		const query = {
			is_read: 0,
			per_page: 1,
		}
		yield put(notificationActions.getTotalUnreadNotificationsInitialState())
		yield put(notificationActions.getTotalUnreadNotificationsLoading())
		const response = yield call(notificationApi.getNotifications, query)
		yield put(notificationActions.getTotalUnreadNotificationsFulfilled(response))
	} catch (error) {
		yield put(notificationActions.getTotalUnreadNotificationsRejected(error))
	}
}

export function* updateNotification({ id, data }: AnyAction) {
	try {
		yield put(notificationActions.updateNotificationInitialState())
		yield put(notificationActions.updateNotificationLoading())
		const response = yield call(notificationApi.update, id, data)
		yield put(notificationActions.updateNotificationFulfilled(response))
	} catch (error) {
		yield put(notificationActions.updateNotificationRejected(error))
	}
}

export function* deleteNotification() {
	try {
		yield put(notificationActions.deleteNotificationInitialState())
		yield put(notificationActions.deleteNotificationLoading())
		// const response = yield call(notificationApi.deleteNotification, notification.id)
		yield put(notificationActions.deleteNotificationFulfilled())
	} catch (error) {
		yield put(notificationActions.deleteNotificationRejected(error))
	}
}

export function* connectToNotificationService() {
	yield call(pusherApi.connect)
}
export function* subscribeToUserEvents() {
	try {
		yield put(notificationActions.subscribeToUserEventsLoading())
		const state = yield select()
		const userId = state.auth.toJS().user.data.id
		yield call(pusherApi.subscribeToUserEvents, userId)
		yield put(notificationActions.subscribeToUserEventsFulfilled())
	} catch (error) {
		yield put(notificationActions.subscribeToUserEventsRejected(error))
	}
}

export function* disconnectFromNotificationService() {
	yield call(pusherApi.handleLogOut)
	yield put(notificationActions.connectToNotificationServiceInitialState())
	yield put(notificationActions.subscribeToUserEventsInitialState())
}

export default function* rootSaga() {
	yield takeEvery(notificationActions.GET_NOTIFICATIONS, getNotifications)
	yield takeEvery(notificationActions.GET_TOTAL_UNREAD_NOTIFICATIONS, getTotalUnreadNotifications)
	yield takeEvery(notificationActions.UPDATE_NOTIFICATION, updateNotification)
	yield takeEvery(notificationActions.DELETE_NOTIFICATION, deleteNotification)

	yield takeEvery(notificationActions.CONNECT_TO_NOTIFICATION_SERVICE, connectToNotificationService)
	yield takeEvery(notificationActions.SUBSCRIBE_TO_USER_EVENTS, subscribeToUserEvents)

	yield takeEvery(notificationActions.DISCONNECT_FROM_NOTIFICATION_SERVICE, disconnectFromNotificationService)

	yield takeEvery(notificationActions.USER_CONFIRMED_EMAIL_EVENT, userConfirmedEmailEvent)
	yield takeEvery(notificationActions.USER_UPDATED_EMAIL_EVENT, userUpdatedEmailEvent)
	yield takeEvery(notificationActions.NOTIFICATION_RECEIVED_EVENT, notificationReceivedEvent)
}
