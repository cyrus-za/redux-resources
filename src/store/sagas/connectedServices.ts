import { connectedServiceActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { connectedServiceApi } from '../../api'
import { AnyAction } from 'redux'

function* getConnectedServices({ query = {} }: AnyAction) {
	try {
		yield put(connectedServiceActions.setConnectedServicesLoading())
		const getConnectedServicesResponse = yield call(connectedServiceApi.getConnectedServices, query)
		yield put(connectedServiceActions.setConnectedServicesFulfilled(getConnectedServicesResponse))

		const list = getConnectedServicesResponse.data
		const data = {
			connected: list.data,
			available: list.data,
		}

		yield put(connectedServiceActions.setConnectedServices(data.connected))
		yield put(connectedServiceActions.setAvailableServices(data.available))
	} catch (error) {
		yield put(connectedServiceActions.setConnectedServicesRejected(error))
	}
}

function* createConnectedService({ data, successCb, errorCb }: AnyAction) {
	const { provider } = data
	try {
		yield put(connectedServiceActions.createConnectedServiceLoading())
		const getConnectedServicesResponse = yield call(connectedServiceApi.createConnectedService, data)
		yield put(connectedServiceActions.createConnectedServiceFulfilled(getConnectedServicesResponse))
		yield put(notificationActions.displaySnackbarMessage(`${provider} account now linked!`, 2000))
		successCb && successCb()
	} catch (error) {
		yield put(connectedServiceActions.createConnectedServiceRejected(error))
		errorCb && errorCb()
	}
}

function* updateConnectedService({ id, data, successCb, errorCb }: AnyAction) {
	try {
		yield put(connectedServiceActions.updateConnectedServiceLoading())
		const getConnectedServicesResponse = yield call(connectedServiceApi.updateConnectedService, id, data)
		yield put(connectedServiceActions.updateConnectedServiceFulfilled(getConnectedServicesResponse))
		yield put(notificationActions.displaySnackbarMessage(`Service updated!`, 2000))
		successCb && successCb()
	} catch (error) {
		yield put(connectedServiceActions.updateConnectedServiceRejected(error))
		errorCb && errorCb()
	}
}

function* deleteConnectedService({ id, scopes = undefined, successCb, errorCb }: AnyAction) {
	try {
		yield put(connectedServiceActions.deleteConnectedServiceLoading())
		const getConnectedServicesResponse = yield call(connectedServiceApi.deleteConnectedService, id, scopes)
		yield put(connectedServiceActions.deleteConnectedServiceFulfilled(getConnectedServicesResponse))
		yield put(notificationActions.displaySnackbarMessage(`Service deleted!`, 2000))

		successCb && successCb()
	} catch (error) {
		yield put(connectedServiceActions.deleteConnectedServiceRejected(error))
		errorCb && errorCb()
	}
}

export function* setConnectedServicesInitialState() {
	yield put(connectedServiceActions.setConnectedServicesInitialState())
}

export default function* rootSaga() {
	yield takeEvery(connectedServiceActions.GET_CONNECTED_SERVICES, getConnectedServices)
	yield takeEvery(connectedServiceActions.SET_CONNECTED_SERVICES_INITIAL_STATE, setConnectedServicesInitialState)
	yield takeEvery(connectedServiceActions.CREATE_CONNECTED_SERVICE, createConnectedService)
	yield takeEvery(connectedServiceActions.UPDATE_CONNECTED_SERVICE, updateConnectedService)
	yield takeEvery(connectedServiceActions.DELETE_CONNECTED_SERVICE, deleteConnectedService)
	yield takeEvery(connectedServiceActions.DELETE_CONNECTED_SERVICE_FULFILLED, getConnectedServices)
}
