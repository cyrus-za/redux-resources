import { contactActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { contactApi } from '../../api/contactApi'

interface Props {
	payload
	successCb: (response) => void
	errorCb: (err: Error) => void
}

function* searchContacts({ payload, successCb, errorCb }: Props) {
	try {
		yield put(contactActions.setSearchContactsLoading())
		const response = yield call(contactApi.searchContact, payload)
		yield put(contactActions.setSearchContactsFulfilled(response))
		successCb && successCb(response)
	} catch (error) {
		yield put(contactActions.setSearchContactsRejected(error))
		errorCb && errorCb(error)
	}
}

export default function* rootSaga() {
	yield takeEvery<any>(contactActions.SEARCH_CONTACTS, searchContacts)
}
