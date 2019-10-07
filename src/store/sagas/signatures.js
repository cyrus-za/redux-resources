import { signatureActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { signatureApi } from '../../api'

function* getSignatures() {
	try {
		yield put(signatureActions.setSignaturesLoading())
		const response = yield call(signatureApi.getSignatures)
		yield put(signatureActions.setSignaturesFulfilled(response))
	} catch (error) {
		yield put(signatureActions.setSignaturesRejected(error))
	}
}

function* createSignature({ data }) {
	try {
		yield put(signatureActions.setCreateSignatureLoading())
		const response = yield call(signatureApi.createSignature, data)
		yield put(signatureActions.setCreateSignatureFulfilled(response))
		yield call(getSignatures)
	} catch (error) {
		yield put(signatureActions.setCreateSignatureRejected(error))
	}
}

export default function* rootSaga() {
	yield takeEvery(signatureActions.GET_SIGNATURES, getSignatures)
	yield takeEvery(signatureActions.CREATE_SIGNATURE, createSignature)
}
