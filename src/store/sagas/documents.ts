import { documentActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { documentApi } from '../../api'
import fileDownload from 'js-file-download'

export function* getDocuments({ query }) {
	try {
		yield put(documentActions.getDocumentsLoading())
		const response = yield call(documentApi.getDocuments, query)
		yield put(documentActions.getDocumentsFulfilled(response))
	} catch (error) {
		yield put(documentActions.getDocumentsRejected(error))
	}
}

export function* downloadDocument({ document, preview }) {
	try {
		if (preview === true) {
			yield call(previewDocument, { document })
			return
		}

		yield put(documentActions.downloadDocumentLoading())

		if (document.provider === 'approveme') {
			const downloadResponse = yield call(documentApi.downloadDocument, document.id, document.provider)
			const fileName = downloadResponse.headers['content-disposition'].replace('attachment; filename=', '')
			fileDownload(downloadResponse.data, fileName, downloadResponse.headers['content-type'])
		} else {
			const win = window.open(document.download_url, '_blank')
			win.focus()
		}

		yield put(documentActions.downloadDocumentFulfilled())
	} catch (error) {
		yield put(documentActions.downloadDocumentRejected(error))
	}
}

export function* previewDocument({ document }) {
	try {
		yield put(documentActions.downloadDocumentLoading())
		const downloadResponse = yield call(documentApi.downloadDocument, document.id, document.provider)
		const fileURL = URL.createObjectURL(downloadResponse.data)
		window.open(fileURL)
		window.focus()

		yield put(documentActions.downloadDocumentFulfilled())
	} catch (error) {
		yield put(documentActions.downloadDocumentRejected(error))
	}
}

export default function* rootSaga() {
	yield takeEvery(documentActions.GET_DOCUMENTS, getDocuments)
	yield takeEvery(documentActions.DOWNLOAD_DOCUMENT, downloadDocument)
}
