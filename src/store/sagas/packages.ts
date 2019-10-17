import { packageActions, notificationActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import packageApi from '../../api/packageApi'
import fileDownload from 'js-file-download'
import { AnyAction } from 'redux'

function* getPackages({ query, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.getPackagesInitialState())
		yield put(packageActions.getPackagesLoading())
		const getPackagesResponse = yield call(packageApi.getPackages, query)
		yield put(packageActions.getPackagesFulfilled(getPackagesResponse))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.getPackagesRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getPackageLexicon({ query, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.getPackageLexiconInitialState())
		yield put(packageActions.getPackageLexiconLoading())
		const getPackageLexiconResponse = yield call(packageApi.getPackageLexicon, query)
		yield put(packageActions.getPackageLexiconFulfilled(getPackageLexiconResponse))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.getPackageLexiconRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* showPackage({ id, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.showPackageInitialState())
		yield put(packageActions.showPackageLoading())
		const showPackageResponse = yield call(packageApi.showPackage, id)
		yield put(packageActions.showPackageFulfilled(showPackageResponse))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.showPackageRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* deletePackage({ id, successCb, errorCb }: AnyAction) {
	try {
		//	yield put(packageActions.deletePackageInitialState())
		//	yield put(packageActions.deletePackageLoading())
		yield call(packageApi.deletePackage, id)
		//	yield put(packageActions.deletePackageFulfilled())
		yield put(notificationActions.displaySnackbarMessage('Package deleted', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.deletePackageRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* createPackage({ data, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.createPackageInitialState())
		yield put(packageActions.createPackageLoading())
		const createPackageResponse = yield call(packageApi.createPackage, data)
		yield put(packageActions.createPackageFulfilled(createPackageResponse))
		yield put(notificationActions.displaySnackbarMessage('Package created', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.createPackageRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* updatePackage({ id, data, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.updatePackageInitialState())
		yield put(packageActions.updatePackageLoading())
		const updatePackageResponse = yield call(packageApi.updatePackage, id, data)
		yield put(packageActions.updatePackageFulfilled(updatePackageResponse))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.updatePackageRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getRecipients({ id, query = {}, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.getPackageRecipientsInitialState())
		yield put(packageActions.getPackageRecipientsLoading())
		const getPackageRecipientsResponse = yield call(packageApi.getRecipients, id, query)
		yield put(packageActions.getPackageRecipientsFulfilled(getPackageRecipientsResponse))
		successCb && successCb()
	} catch (error) {
		yield put(packageActions.getPackageRecipientsRejected(error))
		errorCb && errorCb()
	}
}

function* createRecipient({ id, data, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.createPackageRecipientInitialState())
		yield put(packageActions.createPackageRecipientLoading())
		const createPackageRecipientResponse = yield call(packageApi.createRecipient, id, data)
		yield put(packageActions.createPackageRecipientFulfilled(createPackageRecipientResponse))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.createPackageRecipientRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* updateRecipient({ id, recipientId, data, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.updatePackageRecipientInitialState())
		yield put(packageActions.updatePackageRecipientLoading())
		const updatePackageRecipientResponse = yield call(packageApi.updateRecipient, id, recipientId, data)
		yield put(packageActions.updatePackageRecipientFulfilled(updatePackageRecipientResponse))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.updatePackageRecipientRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getDocuments({ id, query = {}, successCb = undefined, errorCb = undefined }: AnyAction) {
	try {
		yield put(packageActions.getPackageDocumentsInitialState())
		yield put(packageActions.getPackageDocumentsLoading())
		const getPackageDocumentsResponse = yield call(packageApi.getDocuments, id, query)
		yield put(packageActions.getPackageDocumentsFulfilled(getPackageDocumentsResponse))
		successCb && successCb()
	} catch (error) {
		yield put(packageActions.getPackageDocumentsRejected(error))
		errorCb && errorCb()
	}
}

function* getPages({ packageId, query = {}, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.getPagesInitialState())
		yield put(packageActions.getPagesLoading())
		const response = yield call(packageApi.getPages, packageId, query)
		yield put(packageActions.getPagesFulfilled(response))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.getPagesRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* createDocuments({ id, data, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.createPackageDocumentsInitialState())
		yield put(packageActions.createPackageDocumentsLoading())
		const createPackageDocumentsResponse = yield call(packageApi.createDocuments, id, data)
		yield put(packageActions.createPackageDocumentsFulfilled(createPackageDocumentsResponse))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.createPackageDocumentsRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* updateDocument({ packageId, documentId, data, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.updateDocumentInitialState())
		yield put(packageActions.updateDocumentLoading())
		const updatePackageRecipientResponse = yield call(packageApi.updateDocument, packageId, documentId, data)
		yield put(packageActions.updateDocumentFulfilled(updatePackageRecipientResponse))
		yield put(notificationActions.displaySnackbarMessage('Document name updated', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.updateDocumentRejected(error))
		yield put(notificationActions.displaySnackbarMessage('Failed to update name', 2000))
		errorCb !== undefined && errorCb()
	}
}

function* createDocumentFromSocialAccount({ id, socialAccountId, externalFileId, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.createDocumentFromSocialAccountInitialState())
		yield put(packageActions.createDocumentFromSocialAccountLoading())
		const createDocumentFromSocialAccountResponse = yield call(
			packageApi.createDocumentFromSocialAccount,
			id,
			socialAccountId,
			externalFileId
		)
		yield put(packageActions.createDocumentFromSocialAccountFulfilled(createDocumentFromSocialAccountResponse))
		yield put(notificationActions.displaySnackbarMessage('Document imported!', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.createDocumentFromSocialAccountRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* downloadPackageDocument({ id, documentId, successCb, errorCb }: AnyAction) {
	try {
		const downloadResponse = yield call(packageApi.downloadDocument, id, documentId)
		const fileName = downloadResponse.headers['content-disposition'].replace('attachment; filename=', '')
		fileDownload(downloadResponse.data, fileName, downloadResponse.headers['content-type'])
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getPackageImageUrl({ id, image_url, successCb, errorCb }: AnyAction) {
	try {
		const imageUrl = yield call(packageApi.getDocumentPageImageUrl, image_url)
		yield put(packageActions.setPackageImageUrl(id, imageUrl))
		successCb !== undefined && successCb()
	} catch (error) {
		//  yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getDocumentImageUrl({ documentId, image_url, successCb, errorCb }: AnyAction) {
	try {
		const imageUrl = yield call(packageApi.getDocumentPageImageUrl, image_url)
		yield put(packageActions.setDocumentImageUrl(documentId, imageUrl))
		successCb !== undefined && successCb()
	} catch (error) {
		//  yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* getDocumentPageImageUrl({ documentId, pageId, image_url, successCb, errorCb }: AnyAction) {
	try {
		const imageUrl = yield call(packageApi.getDocumentPageImageUrl, image_url)
		yield put(packageActions.setDocumentPageImageUrl(documentId, pageId, imageUrl))
		successCb !== undefined && successCb()
	} catch (error) {
		//  yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* publish({ packageId, successCb, errorCb }: AnyAction) {
	try {
		//	yield put(packageActions.showPackageLoading())
		const data = yield call(packageApi.publish, packageId)
		yield put(packageActions.showPackageFulfilled(data))
		yield put(notificationActions.displaySnackbarMessage('Package published!', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.showPackageRejected(error))
		yield put(notificationActions.displaySnackbarMessage(error.message, 2000))
		errorCb !== undefined && errorCb()
	}
}

function* deleteDocument({ id, documentId, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.deleteDocumentInitialState())
		yield put(packageActions.deleteDocumentLoading())
		yield call(packageApi.deleteDocument, id, documentId)
		yield put(packageActions.deleteDocumentFulfilled(documentId))
		yield put(notificationActions.displaySnackbarMessage('Document deleted', 2000))
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.deleteDocumentRejected(error))
		errorCb !== undefined && errorCb()
	}
}

function* deleteRecipient({ id, recipientId, successCb, errorCb }: AnyAction) {
	try {
		yield put(packageActions.deletePackageRecipientInitialState())
		yield put(packageActions.deletePackageRecipientLoading())
		yield call(packageApi.deleteRecipient, id, recipientId)
		yield put(packageActions.deletePackageRecipientFulfilled())
		successCb !== undefined && successCb()
	} catch (error) {
		yield put(packageActions.deletePackageRecipientRejected(error))
		errorCb !== undefined && errorCb()
	}
}

export default function* rootSaga() {
	yield takeEvery(packageActions.GET_PACKAGES, getPackages)
	yield takeEvery(packageActions.GET_PACKAGE_LEXICON, getPackageLexicon)
	yield takeEvery(packageActions.SHOW_PACKAGE, showPackage)
	yield takeEvery(packageActions.CREATE_PACKAGE, createPackage)
	yield takeEvery(packageActions.UPDATE_PACKAGE, updatePackage)
	yield takeEvery(packageActions.DELETE_PACKAGE, deletePackage)
	yield takeEvery(packageActions.DOWNLOAD_PACKAGE_DOCUMENT, downloadPackageDocument)
	yield takeEvery(packageActions.GET_PACKAGE_RECIPIENTS, getRecipients)
	yield takeEvery(packageActions.CREATE_PACKAGE_RECIPIENT, createRecipient)
	yield takeEvery(packageActions.UPDATE_PACKAGE_RECIPIENT, updateRecipient)
	yield takeEvery(packageActions.GET_PACKAGE_DOCUMENTS, getDocuments)
	yield takeEvery(packageActions.GET_PAGES, getPages)
	yield takeEvery(packageActions.CREATE_PACKAGE_DOCUMENTS, createDocuments)
	yield takeEvery(packageActions.UPDATE_DOCUMENT, updateDocument)
	yield takeEvery(packageActions.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE, createDocumentFromSocialAccount)
	yield takeEvery(packageActions.DELETE_DOCUMENT, deleteDocument)
	yield takeEvery(packageActions.DELETE_PACKAGE_RECIPIENT, deleteRecipient)
	yield takeEvery(packageActions.GET_PACKAGE_IMAGE_URL, getPackageImageUrl)
	yield takeEvery(packageActions.GET_DOCUMENT_IMAGE_URL, getDocumentImageUrl)
	yield takeEvery(packageActions.GET_DOCUMENT_PAGE_IMAGE_URL, getDocumentPageImageUrl)
	yield takeEvery(packageActions.PUBLISH, publish)
}
