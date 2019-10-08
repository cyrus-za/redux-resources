import { accountInviteActions, notificationActions } from '../actions'
import { put, takeEvery, call, select } from 'redux-saga/effects'
import { accountInviteApi } from '../../api'
import { authUser } from '../selectors'

export function* getAccountInvites({ query }) {
	try {
		yield put(accountInviteActions.accountInvitesInitialState())
		yield put(accountInviteActions.accountInvitesLoading())
		const response = yield call(accountInviteApi.getAccountInvites, query)
		yield put(accountInviteActions.accountInvitesFulfilled(response))
	} catch (error) {
		yield put(accountInviteActions.accountInvitesRejected(error))
	}
}

export function* deleteAccountInvite({ invite, successCb, errorCb }) {
	try {
		yield put(accountInviteActions.deleteAccountInviteInitialState())
		yield put(accountInviteActions.deleteAccountInviteLoading())
		const response = yield call(accountInviteApi.deleteAccountInvite, invite.id)
		yield put(accountInviteActions.deleteAccountInviteFulfilled(response))
		successCb && successCb()
		yield call(getAccountInvites, {
			query: { account_ids: invite.account.id, status: 'pending' },
		})
		yield put(notificationActions.displaySnackbarMessage('Account Invitation Deleted!', 2000))
	} catch (error) {
		yield put(accountInviteActions.deleteAccountInviteRejected(error))
		errorCb && errorCb()
	}
}

export function* deleteMyAccountInvite({ invite }) {
	try {
		yield put(accountInviteActions.deleteAccountInviteLoading())
		const response = yield call(accountInviteApi.deleteAccountInvite, invite.id)
		yield put(accountInviteActions.deleteAccountInviteFulfilled(response))
		yield call(myAccountInvites)
		yield put(notificationActions.displaySnackbarMessage('Account Invitation Deleted!', 2000))
	} catch (error) {
		yield put(accountInviteActions.deleteAccountInviteRejected(error))
	}
}

export function* createAccountInvite({ invite, successCb, errorCb }) {
	try {
		yield put(accountInviteActions.createAccountInviteInitialState())
		yield put(accountInviteActions.createAccountInviteLoading())
		const response = yield call(accountInviteApi.create, invite)
		yield put(accountInviteActions.createAccountInviteFulfilled(response))
		yield call(getAccountInvites, {
			query: { account_ids: invite.account_id, status: 'pending' },
		})
		successCb && successCb()
	} catch (error) {
		yield put(accountInviteActions.createAccountInviteRejected(error))
		errorCb && errorCb(error)
	}
}

export function* acceptAccountInvite({ invite }) {
	try {
		yield put(accountInviteActions.acceptAccountInviteInitialState())
		yield put(accountInviteActions.acceptAccountInviteLoading())
		const response = yield call(accountInviteApi.accept, invite.id)
		yield put(accountInviteActions.acceptAccountInviteFulfilled(response))
		yield call(myAccountInvites)
		yield put(notificationActions.displaySnackbarMessage('Account Invitation Accepted!', 2000))
	} catch (error) {
		yield put(accountInviteActions.acceptAccountInviteRejected(error))
	}
}

export function* myAccountInvites() {
	const state = yield select()
	const user = authUser(state)

	try {
		yield put(accountInviteActions.getMyAccountInvitesInitialState())
		yield put(accountInviteActions.getMyAccountInvitesLoading())
		const response = yield call(accountInviteApi.getAccountInvites, {
			emails: user.data.email,
			status: 'pending',
		})
		yield put(accountInviteActions.getMyAccountInvitesFulfilled(response))
	} catch (error) {
		yield put(accountInviteActions.getMyAccountInvitesRejected(error))
	}
}

export default function* rootSaga() {
	yield takeEvery(accountInviteActions.GET_ACCOUNT_INVITES, getAccountInvites)
	yield takeEvery(accountInviteActions.DELETE_ACCOUNT_INVITE, deleteAccountInvite)
	yield takeEvery(accountInviteActions.DELETE_MY_ACCOUNT_INVITE, deleteMyAccountInvite)
	yield takeEvery(accountInviteActions.CREATE_ACCOUNT_INVITE, createAccountInvite)
	yield takeEvery(accountInviteActions.ACCEPT_ACCOUNT_INVITE, acceptAccountInvite)
	yield takeEvery(accountInviteActions.GET_MY_ACCOUNT_INVITES, myAccountInvites)
}
