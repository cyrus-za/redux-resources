import { packageTypeActions } from '../actions/index'
import { put, takeEvery, call } from 'redux-saga/effects'
import { packageTypeApi } from '../../api/index'

export function* getPackageTypes(query) {
	try {
		yield put(packageTypeActions.setPackageTypesLoading())
		const response = yield call(packageTypeApi.getPackageTypes, query)
		yield put(packageTypeActions.setPackageTypesFulfilled(response))
	} catch (error) {
		yield put(packageTypeActions.setPackageTypesRejected(error))
	}
}

export default function* rootSaga() {
	yield takeEvery(packageTypeActions.GET_PACKAGE_TYPES, getPackageTypes)
}
