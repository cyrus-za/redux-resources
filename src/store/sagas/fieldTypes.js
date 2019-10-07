import { fieldTypeActions } from '../actions/index'
import { put, takeEvery, call } from 'redux-saga/effects'
import { fieldTypeApi } from '../../api/index'

export function* getFieldTypes({ query }) {
	try {
		yield put(fieldTypeActions.setFieldTypesLoading())
		const response = yield call(fieldTypeApi.getFieldTypes, query)
		yield put(fieldTypeActions.setFieldTypesFulfilled(response))
	} catch (error) {
		yield put(fieldTypeActions.setFieldTypesRejected(error))
	}
}

export default function* rootSaga() {
	yield takeEvery(fieldTypeActions.GET_FIELD_TYPES, getFieldTypes)
}
