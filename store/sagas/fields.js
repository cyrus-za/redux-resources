import { fieldActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { fieldApi } from '../../api'

export function* getFields({ packageId, query = {}, successCb, errorCb }) {
	try {
		yield put(fieldActions.getFieldsLoading())
		const response = yield call(fieldApi.getFields, packageId, query)
		yield put(fieldActions.getFieldsFulfilled(response))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.getFieldsRejected(error))
		errorCb && errorCb()
	}
}

function* createField({ packageId, documentId, data, successCb, errorCb }) {
	try {
		yield put(fieldActions.setItemLoading())
		const response = yield call(fieldApi.createField, packageId, documentId, data)
		yield put(fieldActions.setItemFulfilled(response))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.setItemRejected(error))
		errorCb && errorCb()
	}
}

function* updateField({ packageId, documentId, fieldId, data, successCb, errorCb }) {
	try {
		yield put(fieldActions.setItemLoading())
		const response = yield call(fieldApi.updateField, packageId, documentId, fieldId, data)
		yield put(fieldActions.setItemFulfilled(response))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.setItemRejected(error))
		errorCb && errorCb()
	}
}

function* deleteField({ packageId, documentId, fieldId, successCb, errorCb }) {
	try {
		yield put(fieldActions.setItemLoading())
		yield call(fieldApi.deleteField, packageId, documentId, fieldId)
		yield put(fieldActions.setItemFulfilled(null))
		successCb && successCb()
	} catch (error) {
		yield put(fieldActions.setItemRejected(error))
		errorCb && errorCb()
	}
}

export default function* rootSaga() {
	yield takeEvery(fieldActions.GET_FIELDS, getFields)
	yield takeEvery(fieldActions.CREATE_FIELD, createField)
	yield takeEvery(fieldActions.UPDATE_FIELD, updateField)
	yield takeEvery(fieldActions.DELETE_FIELD, deleteField)
}
