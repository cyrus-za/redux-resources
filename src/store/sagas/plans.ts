import { planActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { planApi } from '../../api'
import { AnyAction } from 'redux'

function* getPlans({ query }: AnyAction) {
	try {
		yield put(planActions.setPlansLoading())
		const getPlansResponse = yield call(planApi.getPlans, query)
		yield put(planActions.setPlansFulfilled(getPlansResponse))
	} catch (error) {
		yield put(planActions.setPlansRejected(error))
	}
}

export function* setPlansInitialState() {
	yield put(planActions.setPlansInitialState())
}

export default function* rootSaga() {
	yield takeEvery(planActions.GET_PLANS, getPlans)
	yield takeEvery(planActions.SET_PLANS_INITIAL_STATE, setPlansInitialState)
}
