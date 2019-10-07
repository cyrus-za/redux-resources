import { accountActions, authActions, notificationActions } from '../actions'
import { put, takeEvery, call, select } from 'redux-saga/effects'
import { oauthApi, userApi } from '../../api'
import { getAccounts, getDefaultAccount } from './accounts'

import { connectToNotificationService, subscribeToUserEvents } from './notifications'
import { authUser } from '../selectors'
import { AnyAction } from 'redux'

export function* getAuthUser() {
	try {
		yield put(authActions.authUserLoading())
		const meResponse = yield call(userApi.me)
		yield put(authActions.authUserData(meResponse.data))
		yield put(authActions.authUserLoaded())
	} catch (error) {
		yield put(authActions.authUserError(error))
		yield put(authActions.authUserNotLoaded())
	}
}

export function* authUserInitialState() {
	yield put(authActions.authUserData(null))
	yield put(authActions.authUserError(null))
	yield put(authActions.authUserNotLoaded())
}

export function* login({ user, provider = null, access_token = null, token_secret = null }: AnyAction) {
	try {
		yield put(authActions.createAccessTokenInitialState())
		yield put(authActions.createAccessToken())
		yield put(authActions.createAccessTokenLoading())

		const userResponse =
			user !== undefined
				? yield call(oauthApi.createAccessToken, user)
				: yield call(oauthApi.createSocialAccessToken, provider, access_token, token_secret)

		yield put(authActions.createAccessTokenFulfilled(userResponse))
	} catch (error) {
		yield put(authActions.createAccessTokenRejected(error))
		yield put(notificationActions.displaySnackbarMessage(error.message, 2000))
	}
}

export function* logout({  }: AnyAction) {
	//  auth
	window.localStorage.removeItem('accessToken')
	yield put(authActions.createAccessTokenInitialState())
	window.localStorage.removeItem('userMeta')
	yield put(authActions.authUserInitialState())
	yield put(authActions.authMetaInitialState())

	//  accounts
	window.localStorage.removeItem('defaultAccount')
	window.localStorage.removeItem('accountList')
	yield put(accountActions.getDefaultAccountInitialState())
	yield put(accountActions.accountsInitialState())
	// disconnect from pusher
	yield put(notificationActions.disconnectFromNotificationService())
}

export function* getAuthMeta() {
	try {
		const state = yield select()
		const user = authUser(state)
		yield put(authActions.authMetaInitialState())
		yield put(authActions.authMetaLoading())
		const meResponse = yield call(userApi.getUserMeta, user.data.id)
		yield put(authActions.authMetaFulfilled(meResponse))
	} catch (error) {
		yield put(authActions.authMetaRejected(error))
	}
}

export function* update({ id, user }: AnyAction) {
	try {
		yield put(authActions.updateAuthUserInitialState())
		yield put(authActions.updateAuthUserLoading())
		const userResponse = yield call(userApi.updateUser, id, user)
		yield put(authActions.updateAuthUserFulfilled(userResponse))
		yield put(notificationActions.displaySnackbarMessage('Profile updated', 2000))
	} catch (error) {
		yield put(authActions.updateAuthUserRejected(error))
	}
}

export function* create({ user }: AnyAction) {
	try {
		yield put(authActions.createUserInitialState())
		yield put(authActions.createUserLoading())
		const userResponse = yield call(userApi.createUser, user)
		yield put(authActions.createUserFulfilled(userResponse, user))
		yield put(notificationActions.displaySnackbarMessage('User registered', 4000))
	} catch (error) {
		yield put(authActions.createUserRejected(error))
	}
}

function* updatePhoto({ id, payload, successCb, errorCb }: AnyAction) {
	try {
		yield put(authActions.updateAuthPhotoInitialState())
		yield put(authActions.updateAuthPhotoLoading())
		const response = yield call(userApi.updatePicture, id, payload)
		yield put(authActions.updateAuthPhotoFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Profile photo updated!', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(authActions.updateAuthPhotoRejected(error))
		errorCb !== undefined && errorCb()
	}
}

export function* loginSaga() {
	yield takeEvery(authActions.LOG_USER_IN, login)
	yield takeEvery(authActions.CREATE_SOCIAL_ACCESS_TOKEN, login)

	yield takeEvery(authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, getAccounts)
	yield takeEvery(authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, getDefaultAccount)
	yield takeEvery(authActions.CREATE_AUTH_ACCESS_TOKEN_FULFILLED, getAuthUser)
	yield takeEvery(authActions.AUTH_USER_LOADED, getAuthMeta)
	yield takeEvery(authActions.AUTH_USER_LOADED, connectToNotificationService)
	yield takeEvery(authActions.AUTH_USER_LOADED, subscribeToUserEvents)
}

export function* logoutSaga() {
	yield takeEvery(authActions.LOG_USER_OUT, logout)
}

export default function* rootSaga() {
	yield takeEvery(authActions.AUTH_USER_INITIAL_STATE, authUserInitialState)
	yield takeEvery(authActions.UPDATE_AUTH_USER, update)
	yield takeEvery(authActions.CREATE_USER, create)
	yield takeEvery(authActions.CREATE_USER_FULFILLED, login)
	yield takeEvery(authActions.UPDATE_AUTH_PHOTO, updatePhoto)
}
