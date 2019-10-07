const types = {
	GET_DOCUMENTS: '[documents] GET_DOCUMENTS',
	GET_DOCUMENTS_INITIAL_STATE: '[documents] GET_DOCUMENTS_INITIAL_STATE',
	GET_DOCUMENTS_LOADING: '[documents] GET_DOCUMENTS_LOADING',
	GET_DOCUMENTS_FULFILLED: '[documents] GET_DOCUMENTS_FULFILLED',
	GET_DOCUMENTS_REJECTED: '[documents] GET_DOCUMENTS_REJECTED',

	DOWNLOAD_DOCUMENT: '[documents] DOWNLOAD_DOCUMENT',
	DOWNLOAD_DOCUMENT_INITIAL_STATE: '[documents] DOWNLOAD_DOCUMENT_INITIAL_STATE',
	DOWNLOAD_DOCUMENT_LOADING: '[documents] DOWNLOAD_DOCUMENT_LOADING',
	DOWNLOAD_DOCUMENT_FULFILLED: '[documents] DOWNLOAD_DOCUMENT_FULFILLED',
	DOWNLOAD_DOCUMENT_REJECTED: '[documents] DOWNLOAD_DOCUMENT_REJECTED',
}

export const documentActions = {
	...types,
	getDocuments: (query = {}) => ({
		type: types.GET_DOCUMENTS,
		payload: null,
		query,
	}),
	getDocumentsInitialState: () => ({
		type: types.GET_DOCUMENTS_INITIAL_STATE,
		payload: null,
	}),
	getDocumentsLoading: () => ({
		type: types.GET_DOCUMENTS_LOADING,
		payload: null,
	}),
	getDocumentsFulfilled: (response) => ({
		type: types.GET_DOCUMENTS_FULFILLED,
		payload: response,
	}),
	getDocumentsRejected: (response) => ({
		type: types.GET_DOCUMENTS_REJECTED,
		payload: response,
	}),

	downloadDocument: (document, preview = false) => ({
		type: types.DOWNLOAD_DOCUMENT,
		payload: null,
		document,
		preview,
	}),
	downloadDocumentInitialState: () => ({
		type: types.DOWNLOAD_DOCUMENT_INITIAL_STATE,
		payload: null,
	}),
	downloadDocumentLoading: () => ({
		type: types.DOWNLOAD_DOCUMENT_LOADING,
		payload: null,
	}),
	downloadDocumentFulfilled: (response) => ({
		type: types.DOWNLOAD_DOCUMENT_FULFILLED,
		payload: response,
	}),
	downloadDocumentRejected: (response) => ({
		type: types.DOWNLOAD_DOCUMENT_REJECTED,
		payload: response,
	}),
}
