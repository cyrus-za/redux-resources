import { accountActions, accountInviteActions, notificationActions } from '../actions/index'
import { put, takeEvery, call } from 'redux-saga/effects'
import { accountApi } from '../../api/index'

export function* getAccounts() {
	try {
		//	yield put(accountActions.accountsInitialState())
		yield put(accountActions.accountsLoading())
		const response = yield call(accountApi.getAccounts)
		yield put(accountActions.accountsFulfilled(response))
	} catch (error) {
		yield put(accountActions.accountsRejected(error))
	}
}

export function* getDefaultAccount() {
	try {
		//	yield put(accountActions.getDefaultAccountInitialState())
		yield put(accountActions.getDefaultAccountLoading())
		const response = yield call(accountApi.getDefaultAccount)
		yield put(accountActions.getDefaultAccountFulfilled(response))
	} catch (error) {
		yield put(accountActions.getDefaultAccountRejected(error))
	}
}

export function* setDefaultAccount({ id }) {
	try {
		yield put(accountActions.setDefaultAccountInitialState())
		yield put(accountActions.setDefaultAccountLoading())
		const response = yield call(accountApi.setDefaultAccount, id)
		yield put(accountActions.setDefaultAccountFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Default account updated!', 2000))
	} catch (error) {
		yield put(accountActions.setDefaultAccountRejected(error))
	}
}

export function* showAccount({ id }) {
	try {
		yield put(accountActions.showAccountInitialState())
		yield put(accountActions.showAccountLoading())
		const response = yield call(accountApi.show, id)
		yield put(accountActions.showAccountFulfilled(response))
	} catch (error) {
		yield put(accountActions.showAccountRejected(error))
	}
}

export function* getAccountUsers({ id }) {
	try {
		yield put(accountActions.accountUsersInitialState())
		yield put(accountActions.accountUsersLoading())
		const response = yield call(accountApi.getUsers, id)
		yield put(accountActions.accountUsersFulfilled(response))
	} catch (error) {
		yield put(accountActions.accountUsersRejected(error))
	}
}

export function* createAccount({ account, successCb, errorCb }) {
	try {
		yield put(accountActions.createAccountInitialState())
		yield put(accountActions.createAccountLoading())
		const response = yield call(accountApi.create, account)
		yield put(accountActions.createAccountFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Account created!', 2000))
		yield call(getAccounts)
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.createAccountRejected(error))
		errorCb && errorCb()
	}
}

export function* deleteAccountMember({ account, member, successCb, errorCb }) {
	try {
		yield put(accountActions.deleteAccountMemberInitialState())
		yield put(accountActions.deleteAccountMemberLoading())
		const response = yield call(accountApi.deleteAccountMember, account.id, member.id)
		yield put(accountActions.deleteAccountMemberFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Account member deleted!', 2000))
		yield call(getAccountUsers, { id: account.id })
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.deleteAccountMemberRejected(error))
		errorCb && errorCb()
	}
}

export function* updateAccountMember({ account, member, data, successCb, errorCb }) {
	try {
		yield put(accountActions.updateAccountMemberInitialState())
		yield put(accountActions.updateAccountMemberLoading())
		const response = yield call(accountApi.updateAccountMember, account.id, member.id, data)
		yield put(accountActions.updateAccountMemberFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Account member updated!', 2000))
		yield call(getAccountUsers, { id: account.id })
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.updateAccountMemberRejected(error))
		errorCb && errorCb()
	}
}

export function* updateAccount({ account, data, successCb, errorCb }) {
	try {
		yield put(accountActions.updateAccountInitialState())
		yield put(accountActions.updateAccountLoading())
		const response = yield call(accountApi.update, account.id, data)
		yield put(accountActions.updateAccountFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Account updated!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.updateAccountRejected(error))
		errorCb && errorCb()
	}
}

function* updateAccountPhoto({ id, payload, successCb, errorCb }) {
	try {
		yield put(accountActions.updateAccountPhotoInitialState())
		yield put(accountActions.updateAccountPhotoLoading())
		const response = yield call(accountApi.updatePicture, id, payload)
		yield put(accountActions.updateAccountPhotoFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Account photo updated!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(accountActions.updateAccountPhotoRejected(error))
		errorCb && errorCb()
	}
}

function* getInvoices({ account }) {
	try {
		yield put(accountActions.getInvoicesInitialState())
		yield put(accountActions.getInvoicesLoading())
		const response = yield call(accountApi.getInvoices, account.id)
		yield put(accountActions.getInvoicesFulfilled(response))
	} catch (error) {
		yield put(accountActions.getInvoicesRejected(error))
	}
}

export default function* rootSaga() {
	yield takeEvery(accountActions.LOAD_ACCOUNTS, getAccounts)
	yield takeEvery(accountInviteActions.ACCEPT_ACCOUNT_INVITE_FULFILLED, getAccounts)

	yield takeEvery(accountActions.LOAD_DEFAULT_ACCOUNT, getDefaultAccount)
	yield takeEvery(accountActions.SET_DEFAULT_ACCOUNT, setDefaultAccount)
	yield takeEvery(accountActions.CREATE_ACCOUNT, createAccount)
	yield takeEvery(accountActions.SHOW_ACCOUNT, showAccount)
	yield takeEvery(accountActions.LOAD_ACCOUNT_USERS, getAccountUsers)
	yield takeEvery(accountActions.DELETE_ACCOUNT_MEMBER, deleteAccountMember)
	yield takeEvery(accountActions.UPDATE_ACCOUNT_MEMBER, updateAccountMember)
	yield takeEvery(accountActions.UPDATE_ACCOUNT, updateAccount)
	yield takeEvery(accountActions.UPDATE_ACCOUNT_PHOTO, updateAccountPhoto)
	yield takeEvery(accountActions.GET_INVOICES, getInvoices)
}
