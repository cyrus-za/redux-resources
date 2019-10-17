import { contactActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { contactApi } from '../../api/contactApi'
import { Contact } from '../../components/PackageAddEdit/Steps/Recipients/types'

interface Props {
	payload: Partial<Contact>
	successCb: (response: Contact[]) => void
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
