import { authActions, notificationActions, userActions } from '../actions/index'
import { put, takeEvery, call } from 'redux-saga/effects'
import { userApi } from '../../api/index'

function* updatePassword({ id, payload, successCb, errorCb }) {
	try {
		yield put(userActions.updatePasswordInitialState())
		yield put(userActions.updatePasswordLoading())
		const accountsResponse = yield call(userApi.updateUserPassword, id, payload)
		yield put(userActions.updatePasswordFulfilled(accountsResponse))
		successCb && successCb()
	} catch (error) {
		yield put(userActions.updatePasswordRejected(error))
		errorCb && errorCb()
	}
}

function* resendEmailConfirmation() {
	try {
		yield put(userActions.resendEmailConfirmationInitialState())
		yield put(userActions.resendEmailConfirmationLoading())
		const accountsResponse = yield call(userApi.resendEmailConfirmation)
		yield put(userActions.resendEmailConfirmationFulfilled(accountsResponse))
		yield put(notificationActions.displaySnackbarMessage('Confirmation email resent', 2000))
	} catch (error) {
		yield put(userActions.resendEmailConfirmationRejected(error))
	}
}

function* getNotificationPreferences({ id }) {
	try {
		yield put(userActions.getNotificationPreferencesInitialState())
		yield put(userActions.getNotificationPreferencesLoading())
		const notificationPreferences = yield call(userApi.getNotificationPreferences, id)
		yield put(userActions.getNotificationPreferencesFulfilled(notificationPreferences))
	} catch (error) {
		yield put(userActions.getNotificationPreferencesRejected(error))
	}
}

function* updateNotificationPreferences({ id, payload }) {
	try {
		yield put(userActions.updateNotificationPreferencesInitialState())
		yield put(userActions.updateNotificationPreferencesLoading())
		const notificationPreferences = yield call(userApi.updateNotificationPreferences, id, payload)
		yield put(userActions.updateNotificationPreferencesFulfilled(notificationPreferences))
		yield put(notificationActions.displaySnackbarMessage('Notification preferences updated!', 2000))
	} catch (error) {
		yield put(userActions.updateNotificationPreferencesRejected(error))
	}
}

function* confirmEmail({ token, successCb, errorCb }) {
	try {
		yield put(userActions.confirmEmailInitialState())
		yield put(userActions.confirmEmailLoading())
		const userMeta = yield call(userApi.confirmEmail, token)
		yield put(userActions.confirmEmailFulfilled())
		yield put(authActions.authMetaFulfilled(userMeta))
		yield put(notificationActions.displaySnackbarMessage('Email Confirmed!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(userActions.confirmEmailRejected(error))
		errorCb && errorCb()
	}
}

export default function* updatePasswordSaga() {
	yield takeEvery(userActions.UPDATE_PASSWORD, updatePassword)
	yield takeEvery(userActions.RESEND_EMAIL_CONFIRMATION, resendEmailConfirmation)
	yield takeEvery(userActions.GET_NOTIFICATION_PREFERENCES, getNotificationPreferences)
	yield takeEvery(userActions.UPDATE_NOTIFICATION_PREFERENCES, updateNotificationPreferences)
	yield takeEvery(userActions.CONFIRM_EMAIL, confirmEmail)
}
