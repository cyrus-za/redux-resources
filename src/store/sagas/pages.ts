import { pageActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { pageApi } from '../../api'
import { AnyAction } from 'redux'

export function* getPages({ packageId, documentId, successCb, errorCb }: AnyAction) {
	try {
		yield put(pageActions.getPagesLoading())
		const response = yield call(pageApi.getPages, packageId, documentId)
		yield put(pageActions.getPagesFulfilled(response))
		successCb && successCb()
	} catch (error) {
		yield put(pageActions.getPagesRejected(error))
		errorCb && errorCb()
	}
}

export function* getPageImage({ pageId, image_url, successCb, errorCb }: AnyAction) {
	try {
		const response = yield call(pageApi.getPageImage, image_url)
		yield put(pageActions.setPageImage(pageId, response))
		successCb && successCb()
	} catch (error) {
		yield put(pageActions.getPagesRejected(error))
		errorCb && errorCb()
	}
}

export default function* rootSaga() {
	yield takeEvery(pageActions.GET_PAGES, getPages)
	yield takeEvery(pageActions.GET_PAGE_IMAGE, getPageImage)
}
