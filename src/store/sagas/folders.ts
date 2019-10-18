import { folderActions, notificationActions } from '../actions'
import { call, put, takeEvery } from 'redux-saga/effects'
import { folderApi } from '../../api'
import { AnyAction } from 'redux'

function* getFolders({ query }: AnyAction) {
	try {
		yield put(folderActions.getFoldersInitialState())
		yield put(folderActions.getFoldersLoading())
		const getFoldersResponse = yield call(folderApi.getFolders, query)
		yield put(folderActions.getFoldersFulfilled(getFoldersResponse))
	} catch (error) {
		yield put(folderActions.getFoldersRejected(error))
	}
}

function* createFolder({ data, successCb, errorCb }: AnyAction) {
	try {
		yield put(folderActions.createFolderInitialState())
		yield put(folderActions.createFolderLoading())
		const createFolderResponse = yield call(folderApi.createFolder, data)
		yield put(folderActions.createFolderFulfilled(createFolderResponse))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Folder created!', 2000))

		const query = {
			account_ids: createFolderResponse.data.account_id,
		}
		console.log(query)
		yield call<any>(getFolders, { query })
	} catch (error) {
		yield put(folderActions.createFolderRejected(error))
		errorCb && errorCb()
	}
}

function* updateFolder({ id, data, successCb, errorCb }: AnyAction) {
	try {
		yield put(folderActions.updateFolderInitialState())
		yield put(folderActions.updateFolderLoading())
		const updateFolderResponse = yield call<any>(folderApi.updateFolder, id, data)
		yield put(folderActions.updateFolderFulfilled(updateFolderResponse))
		successCb && successCb()
		yield put(notificationActions.displaySnackbarMessage('Folder updated!', 2000))

		const query = {
			account_ids: updateFolderResponse.data.account_id,
		}
		yield call<any>(getFolders, { query })
	} catch (error) {
		yield put(folderActions.updateFolderRejected(error))
		errorCb && errorCb()
	}
}

export default function* rootSaga() {
	yield takeEvery(folderActions.GET_FOLDERS, getFolders)
	yield takeEvery(folderActions.CREATE_FOLDER, createFolder)
	yield takeEvery(folderActions.UPDATE_FOLDER, updateFolder)
}
