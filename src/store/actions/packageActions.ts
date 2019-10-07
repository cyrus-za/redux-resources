const types = {
	GET_PACKAGES: '[packages] GET_PACKAGES',
	GET_PACKAGES_INITIAL_STATE: '[packages] GET_PACKAGES_INITIAL_STATE',
	GET_PACKAGES_LOADING: '[packages] GET_PACKAGES_LOADING',
	GET_PACKAGES_FULFILLED: '[packages] GET_PACKAGES_FULFILLED',
	GET_PACKAGES_REJECTED: '[packages] GET_PACKAGES_REJECTED',

	GET_PACKAGE_LEXICON: '[packages] GET_PACKAGE_LEXICON',
	GET_PACKAGE_LEXICON_INITIAL_STATE: '[packages] GET_PACKAGE_LEXICON_INITIAL_STATE',
	GET_PACKAGE_LEXICON_LOADING: '[packages] GET_PACKAGE_LEXICON_LOADING',
	GET_PACKAGE_LEXICON_FULFILLED: '[packages] GET_PACKAGE_LEXICON_FULFILLED',
	GET_PACKAGE_LEXICON_REJECTED: '[packages] GET_PACKAGE_LEXICON_REJECTED',

	CREATE_PACKAGE: '[packages] CREATE_PACKAGE',
	CREATE_PACKAGE_INITIAL_STATE: '[packages] CREATE_PACKAGE_INITIAL_STATE',
	CREATE_PACKAGE_LOADING: '[packages] CREATE_PACKAGE_LOADING',
	CREATE_PACKAGE_FULFILLED: '[packages] CREATE_PACKAGE_FULFILLED',
	CREATE_PACKAGE_REJECTED: '[packages] CREATE_PACKAGE_REJECTED',

	SHOW_PACKAGE: '[packages] SHOW_PACKAGE',
	SHOW_PACKAGE_INITIAL_STATE: '[packages] SHOW_PACKAGE_INITIAL_STATE',
	SHOW_PACKAGE_LOADING: '[packages] SHOW_PACKAGE_LOADING',
	SHOW_PACKAGE_FULFILLED: '[packages] SHOW_PACKAGE_FULFILLED',
	SHOW_PACKAGE_REJECTED: '[packages] SHOW_PACKAGE_REJECTED',

	DELETE_PACKAGE: '[packages] DELETE_PACKAGE',
	DELETE_PACKAGE_INITIAL_STATE: '[packages] DELETE_PACKAGE_INITIAL_STATE',
	DELETE_PACKAGE_LOADING: '[packages] DELETE_PACKAGE_LOADING',
	DELETE_PACKAGE_FULFILLED: '[packages] DELETE_PACKAGE_FULFILLED',
	DELETE_PACKAGE_REJECTED: '[packages] DELETE_PACKAGE_REJECTED',

	UPDATE_PACKAGE: '[packages] UPDATE_PACKAGE',
	UPDATE_PACKAGE_INITIAL_STATE: '[packages] UPDATE_PACKAGE_INITIAL_STATE',
	UPDATE_PACKAGE_LOADING: '[packages] UPDATE_PACKAGE_LOADING',
	UPDATE_PACKAGE_FULFILLED: '[packages] UPDATE_PACKAGE_FULFILLED',
	UPDATE_PACKAGE_REJECTED: '[packages] UPDATE_PACKAGE_REJECTED',

	GET_PACKAGE_RECIPIENTS: '[packages] GET_PACKAGE_RECIPIENTS',
	GET_PACKAGE_RECIPIENTS_INITIAL_STATE: '[packages] GET_PACKAGE_RECIPIENTS_INITIAL_STATE',
	GET_PACKAGE_RECIPIENTS_LOADING: '[packages] GET_PACKAGE_RECIPIENTS_LOADING',
	GET_PACKAGE_RECIPIENTS_FULFILLED: '[packages] GET_PACKAGE_RECIPIENTS_FULFILLED',
	GET_PACKAGE_RECIPIENTS_REJECTED: '[packages] GET_PACKAGE_RECIPIENTS_REJECTED',

	CREATE_PACKAGE_RECIPIENT: '[packages] CREATE_PACKAGE_RECIPIENT',
	CREATE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] CREATE_PACKAGE_RECIPIENT_INITIAL_STATE',
	CREATE_PACKAGE_RECIPIENT_LOADING: '[packages] CREATE_PACKAGE_RECIPIENT_LOADING',
	CREATE_PACKAGE_RECIPIENT_FULFILLED: '[packages] CREATE_PACKAGE_RECIPIENT_FULFILLED',
	CREATE_PACKAGE_RECIPIENT_REJECTED: '[packages] CREATE_PACKAGE_RECIPIENT_REJECTED',

	UPDATE_PACKAGE_RECIPIENT: '[packages] UPDATE_PACKAGE_RECIPIENT',
	UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE',
	UPDATE_PACKAGE_RECIPIENT_LOADING: '[packages] UPDATE_PACKAGE_RECIPIENT_LOADING',
	UPDATE_PACKAGE_RECIPIENT_FULFILLED: '[packages] UPDATE_PACKAGE_RECIPIENT_FULFILLED',
	UPDATE_PACKAGE_RECIPIENT_REJECTED: '[packages] UPDATE_PACKAGE_RECIPIENT_REJECTED',

	DELETE_PACKAGE_RECIPIENT: '[packages] DELETE_PACKAGE_RECIPIENT',
	DELETE_PACKAGE_RECIPIENT_INITIAL_STATE: '[packages] DELETE_PACKAGE_RECIPIENT_INITIAL_STATE',
	DELETE_PACKAGE_RECIPIENT_LOADING: '[packages] DELETE_PACKAGE_RECIPIENT_LOADING',
	DELETE_PACKAGE_RECIPIENT_FULFILLED: '[packages] DELETE_PACKAGE_RECIPIENT_FULFILLED',
	DELETE_PACKAGE_RECIPIENT_REJECTED: '[packages] DELETE_PACKAGE_RECIPIENT_REJECTED',

	GET_PACKAGE_DOCUMENTS: '[packages] GET_PACKAGE_DOCUMENTS',
	GET_PACKAGE_DOCUMENTS_INITIAL_STATE: '[packages] GET_PACKAGE_DOCUMENTS_INITIAL_STATE',
	GET_PACKAGE_DOCUMENTS_LOADING: '[packages] GET_PACKAGE_DOCUMENTS_LOADING',
	GET_PACKAGE_DOCUMENTS_FULFILLED: '[packages] GET_PACKAGE_DOCUMENTS_FULFILLED',
	GET_PACKAGE_DOCUMENTS_REJECTED: '[packages] GET_PACKAGE_DOCUMENTS_REJECTED',

	CREATE_PACKAGE_DOCUMENTS: '[packages] CREATE_PACKAGE_DOCUMENTS',
	CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE: '[packages] CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE',
	CREATE_PACKAGE_DOCUMENTS_LOADING: '[packages] CREATE_PACKAGE_DOCUMENTS_LOADING',
	CREATE_PACKAGE_DOCUMENTS_FULFILLED: '[packages] CREATE_PACKAGE_DOCUMENTS_FULFILLED',
	CREATE_PACKAGE_DOCUMENTS_REJECTED: '[packages] CREATE_PACKAGE_DOCUMENTS_REJECTED',

	UPDATE_DOCUMENT: '[packages] UPDATE_DOCUMENT',
	UPDATE_DOCUMENT_INITIAL_STATE: '[packages] UPDATE_DOCUMENT_INITIAL_STATE',
	UPDATE_DOCUMENT_LOADING: '[packages] UPDATE_DOCUMENT_LOADING',
	UPDATE_DOCUMENT_FULFILLED: '[packages] UPDATE_DOCUMENT_FULFILLED',
	UPDATE_DOCUMENT_REJECTED: '[packages] UPDATE_DOCUMENT_REJECTED',

	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE',
	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE:
		'[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE',
	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING',
	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED',
	CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED: '[packages] CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED',

	DOWNLOAD_PACKAGE_DOCUMENT: '[packages] DOWNLOAD_PACKAGE_DOCUMENT',

	GET_PACKAGE_IMAGE_URL: '[packages] GET_PACKAGE_IMAGE_URL',
	SET_PACKAGE_IMAGE_URL: '[packages] SET_PACKAGE_IMAGE_URL',

	GET_DOCUMENT_IMAGE_URL: '[packages] GET_DOCUMENT_IMAGE_URL',
	SET_DOCUMENT_IMAGE_URL: '[packages] SET_DOCUMENT_IMAGE_URL',

	GET_DOCUMENT_PAGE_IMAGE_URL: '[packages] GET_DOCUMENT_PAGE_IMAGE_URL',
	SET_DOCUMENT_PAGE_IMAGE_URL: '[packages] SET_DOCUMENT_PAGE_IMAGE_URL',

	DELETE_DOCUMENT: '[packages] DELETE_DOCUMENT',
	DELETE_DOCUMENT_INITIAL_STATE: '[packages] DELETE_DOCUMENT_INITIAL_STATE',
	DELETE_DOCUMENT_LOADING: '[packages] DELETE_DOCUMENT_LOADING',
	DELETE_DOCUMENT_FULFILLED: '[packages] DELETE_DOCUMENT_FULFILLED',
	DELETE_DOCUMENT_REJECTED: '[packages] DELETE_DOCUMENT_REJECTED',

	GET_PAGES: '[packages] GET_PAGES',
	GET_PAGES_INITIAL_STATE: '[packages] GET_PAGES_INITIAL_STATE',
	GET_PAGES_LOADING: '[packages] GET_PAGES_LOADING',
	GET_PAGES_FULFILLED: '[packages] GET_PAGES_FULFILLED',
	GET_PAGES_REJECTED: '[packages] GET_PAGES_REJECTED',

	PUBLISH: '[packages] PUBLISH',
	PUBLISH_INITIAL_STATE: '[packages] PUBLISH_INITIAL_STATE',
	PUBLISH_LOADING: '[packages] PUBLISH_LOADING',
	PUBLISH_FULFILLED: '[packages] PUBLISH_FULFILLED',
	PUBLISH_REJECTED: '[packages] PUBLISH_REJECTED',
}

export const packageActions = {
	...types,
	getPackages: (query = {}, successCb, errorCb) => ({
		type: types.GET_PACKAGES,
		payload: null,
		query,
		successCb,
		errorCb,
	}),
	getPackagesInitialState: () => ({
		type: types.GET_PACKAGES_INITIAL_STATE,
		payload: null,
	}),
	getPackagesLoading: () => ({
		type: types.GET_PACKAGES_LOADING,
		payload: null,
	}),
	getPackagesFulfilled: (response) => ({
		type: types.GET_PACKAGES_FULFILLED,
		payload: response,
	}),
	getPackagesRejected: (response) => ({
		type: types.GET_PACKAGES_REJECTED,
		payload: response,
	}),

	getPackageLexicon: (query = {}, successCb, errorCb) => ({
		type: types.GET_PACKAGE_LEXICON,
		payload: null,
		query,
		successCb,
		errorCb,
	}),
	getPackageLexiconInitialState: () => ({
		type: types.GET_PACKAGE_LEXICON_INITIAL_STATE,
		payload: null,
	}),
	getPackageLexiconLoading: () => ({
		type: types.GET_PACKAGE_LEXICON_LOADING,
		payload: null,
	}),
	getPackageLexiconFulfilled: (response) => ({
		type: types.GET_PACKAGE_LEXICON_FULFILLED,
		payload: response,
	}),
	getPackageLexiconRejected: (response) => ({
		type: types.GET_PACKAGE_LEXICON_REJECTED,
		payload: response,
	}),

	createPackage: (data, successCb, errorCb) => ({
		type: types.CREATE_PACKAGE,
		payload: null,
		data,
		successCb,
		errorCb,
	}),
	createPackageInitialState: () => ({
		type: types.CREATE_PACKAGE_INITIAL_STATE,
		payload: null,
	}),
	createPackageLoading: () => ({
		type: types.CREATE_PACKAGE_LOADING,
		payload: null,
	}),
	createPackageFulfilled: (response) => ({
		type: types.CREATE_PACKAGE_FULFILLED,
		payload: response,
	}),
	createPackageRejected: (response) => ({
		type: types.CREATE_PACKAGE_REJECTED,
		payload: response,
	}),

	showPackage: (id, successCb, errorCb) => ({
		type: types.SHOW_PACKAGE,
		payload: null,
		id,
		successCb,
		errorCb,
	}),
	showPackageInitialState: () => ({
		type: types.SHOW_PACKAGE_INITIAL_STATE,
		payload: null,
	}),
	showPackageLoading: () => ({
		type: types.SHOW_PACKAGE_LOADING,
		payload: null,
	}),
	showPackageFulfilled: (response) => ({
		type: types.SHOW_PACKAGE_FULFILLED,
		payload: response,
	}),
	showPackageRejected: (response) => ({
		type: types.SHOW_PACKAGE_REJECTED,
		payload: response,
	}),

	updatePackage: (id, data, successCb, errorCb) => ({
		type: types.UPDATE_PACKAGE,
		payload: null,
		id,
		data,
		successCb,
		errorCb,
	}),
	updatePackageInitialState: () => ({
		type: types.UPDATE_PACKAGE_INITIAL_STATE,
		payload: null,
	}),
	updatePackageLoading: () => ({
		type: types.UPDATE_PACKAGE_LOADING,
		payload: null,
	}),
	updatePackageFulfilled: (response) => ({
		type: types.UPDATE_PACKAGE_FULFILLED,
		payload: response,
	}),
	updatePackageRejected: (response) => ({
		type: types.UPDATE_PACKAGE_REJECTED,
		payload: response,
	}),

	deletePackage: (id, successCb, errorCb) => ({
		type: types.DELETE_PACKAGE,
		payload: null,
		id,
		successCb,
		errorCb,
	}),
	deletePackageInitialState: () => ({
		type: types.DELETE_PACKAGE_INITIAL_STATE,
		payload: null,
	}),
	deletePackageLoading: () => ({
		type: types.DELETE_PACKAGE_LOADING,
		payload: null,
	}),
	deletePackageFulfilled: (response) => ({
		type: types.DELETE_PACKAGE_FULFILLED,
		payload: response,
	}),
	deletePackageRejected: (response) => ({
		type: types.DELETE_PACKAGE_REJECTED,
		payload: response,
	}),

	getPackageRecipients: (id, query = {}, successCb, errorCb) => ({
		type: types.GET_PACKAGE_RECIPIENTS,
		payload: null,
		id,
		query,
		successCb,
		errorCb,
	}),
	getPackageRecipientsInitialState: () => ({
		type: types.GET_PACKAGE_RECIPIENTS_INITIAL_STATE,
		payload: null,
	}),
	getPackageRecipientsLoading: () => ({
		type: types.GET_PACKAGE_RECIPIENTS_LOADING,
		payload: null,
	}),
	getPackageRecipientsFulfilled: (response) => ({
		type: types.GET_PACKAGE_RECIPIENTS_FULFILLED,
		payload: response,
	}),
	getPackageRecipientsRejected: (response) => ({
		type: types.GET_PACKAGE_RECIPIENTS_REJECTED,
		payload: response,
	}),

	createPackageRecipient: (id, data, successCb, errorCb) => ({
		type: types.CREATE_PACKAGE_RECIPIENT,
		payload: null,
		id,
		data,
		successCb,
		errorCb,
	}),
	createPackageRecipientInitialState: () => ({
		type: types.CREATE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	createPackageRecipientLoading: () => ({
		type: types.CREATE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	createPackageRecipientFulfilled: (response) => ({
		type: types.CREATE_PACKAGE_RECIPIENT_FULFILLED,
		payload: response,
	}),
	createPackageRecipientRejected: (response) => ({
		type: types.CREATE_PACKAGE_RECIPIENT_REJECTED,
		payload: response,
	}),

	updatePackageRecipient: (id, recipientId, data, successCb, errorCb) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT,
		payload: null,
		id,
		recipientId,
		data,
		successCb,
		errorCb,
	}),
	updatePackageRecipientInitialState: () => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	updatePackageRecipientLoading: () => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	updatePackageRecipientFulfilled: (response) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_FULFILLED,
		payload: response,
	}),
	updatePackageRecipientRejected: (response) => ({
		type: types.UPDATE_PACKAGE_RECIPIENT_REJECTED,
		payload: response,
	}),

	deletePackageRecipient: (id, recipientId, successCb, errorCb) => ({
		type: types.DELETE_PACKAGE_RECIPIENT,
		payload: null,
		id,
		recipientId,
		successCb,
		errorCb,
	}),
	deletePackageRecipientInitialState: () => ({
		type: types.DELETE_PACKAGE_RECIPIENT_INITIAL_STATE,
		payload: null,
	}),
	deletePackageRecipientLoading: () => ({
		type: types.DELETE_PACKAGE_RECIPIENT_LOADING,
		payload: null,
	}),
	deletePackageRecipientFulfilled: (response) => ({
		type: types.DELETE_PACKAGE_RECIPIENT_FULFILLED,
		payload: response,
	}),
	deletePackageRecipientRejected: (response) => ({
		type: types.DELETE_PACKAGE_RECIPIENT_REJECTED,
		payload: response,
	}),

	getPackageDocuments: (id, query = {}, successCb, errorCb) => ({
		type: types.GET_PACKAGE_DOCUMENTS,
		payload: null,
		id,
		query,
		successCb,
		errorCb,
	}),
	getPackageDocumentsInitialState: () => ({
		type: types.GET_PACKAGE_DOCUMENTS_INITIAL_STATE,
		payload: null,
	}),
	getPackageDocumentsLoading: () => ({
		type: types.GET_PACKAGE_DOCUMENTS_LOADING,
		payload: null,
	}),
	getPackageDocumentsFulfilled: (response) => ({
		type: types.GET_PACKAGE_DOCUMENTS_FULFILLED,
		payload: response,
	}),
	getPackageDocumentsRejected: (response) => ({
		type: types.GET_PACKAGE_DOCUMENTS_REJECTED,
		payload: response,
	}),

	createPackageDocuments: (id, data, successCb, errorCb) => ({
		type: types.CREATE_PACKAGE_DOCUMENTS,
		payload: null,
		id,
		data,
		successCb,
		errorCb,
	}),
	createPackageDocumentsInitialState: () => ({
		type: types.CREATE_PACKAGE_DOCUMENTS_INITIAL_STATE,
		payload: null,
	}),
	createPackageDocumentsLoading: () => ({
		type: types.CREATE_PACKAGE_DOCUMENTS_LOADING,
		payload: null,
	}),
	createPackageDocumentsFulfilled: (response) => ({
		type: types.CREATE_PACKAGE_DOCUMENTS_FULFILLED,
		payload: response,
	}),
	createPackageDocumentsRejected: (response) => ({
		type: types.CREATE_PACKAGE_DOCUMENTS_REJECTED,
		payload: response,
	}),
	updateDocument: (packageId, documentId, data, successCb, errorCb) => ({
		type: types.UPDATE_DOCUMENT,
		payload: null,
		packageId,
		documentId,
		data,
		successCb,
		errorCb,
	}),

	updateDocumentInitialState: () => ({
		type: types.UPDATE_DOCUMENT_INITIAL_STATE,
		payload: null,
	}),
	updateDocumentLoading: () => ({
		type: types.UPDATE_DOCUMENT_LOADING,
		payload: null,
	}),
	updateDocumentFulfilled: (response) => ({
		type: types.UPDATE_DOCUMENT_FULFILLED,
		payload: response,
	}),
	updateDocumentRejected: (response) => ({
		type: types.UPDATE_DOCUMENT_REJECTED,
		payload: response,
	}),

	createDocumentFromSocialAccount: (id, socialAccountId, externalFileId, successCb, errorCb) => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE,
		payload: null,
		id,
		socialAccountId,
		externalFileId,
		successCb,
		errorCb,
	}),
	createDocumentFromSocialAccountInitialState: () => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	createDocumentFromSocialAccountLoading: () => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_LOADING,
		payload: null,
	}),
	createDocumentFromSocialAccountFulfilled: (response) => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_FULFILLED,
		payload: response,
	}),
	createDocumentFromSocialAccountRejected: (response) => ({
		type: types.CREATE_DOCUMENT_FROM_CONNECTED_SERVICE_REJECTED,
		payload: response,
	}),

	downloadPackageDocument: (id, documentId, successCb, errorCb) => ({
		type: types.DOWNLOAD_PACKAGE_DOCUMENT,
		payload: null,
		id,
		documentId,
		successCb,
		errorCb,
	}),

	getPackageImageUrl: (id, image_url, successCb, errorCb) => ({
		type: types.GET_PACKAGE_IMAGE_URL,
		payload: null,
		id,
		image_url,
		successCb,
		errorCb,
	}),

	setPackageImageUrl: (id, image_url, imageUrl = image_url) => ({
		type: types.SET_PACKAGE_IMAGE_URL,
		payload: null,
		id,
		image_url,
		imageUrl,
	}),

	getDocumentImageUrl: (documentId, image_url, successCb, errorCb) => ({
		type: types.GET_DOCUMENT_IMAGE_URL,
		payload: null,
		documentId,
		image_url,
		successCb,
		errorCb,
	}),

	setDocumentImageUrl: (documentId, imageUrl) => ({
		type: types.SET_DOCUMENT_IMAGE_URL,
		payload: null,
		documentId,
		imageUrl,
	}),

	getDocumentPageImageUrl: (documentId, pageId, image_url, successCb, errorCb) => ({
		type: types.GET_DOCUMENT_PAGE_IMAGE_URL,
		payload: null,
		documentId,
		pageId,
		image_url,
		successCb,
		errorCb,
	}),

	setDocumentPageImageUrl: (documentId, pageId, imageUrl) => ({
		type: types.SET_DOCUMENT_PAGE_IMAGE_URL,
		payload: null,
		documentId,
		pageId,
		imageUrl,
	}),

	deleteDocument: (id, documentId, successCb, errorCb) => ({
		type: types.DELETE_DOCUMENT,
		payload: null,
		id,
		documentId,
		successCb,
		errorCb,
	}),
	deleteDocumentInitialState: () => ({
		type: types.DELETE_DOCUMENT_INITIAL_STATE,
		payload: null,
	}),
	deleteDocumentLoading: () => ({
		type: types.DELETE_DOCUMENT_LOADING,
		payload: null,
	}),
	deleteDocumentFulfilled: (documentId) => ({
		type: types.DELETE_DOCUMENT_FULFILLED,
		payload: documentId,
	}),
	deleteDocumentRejected: (response) => ({
		type: types.DELETE_DOCUMENT_REJECTED,
		payload: response,
	}),

	getPages: (packageId, query = {}, successCb, errorCb) => ({
		type: types.GET_PAGES,
		payload: null,
		packageId,
		query,
		successCb,
		errorCb,
	}),
	getPagesInitialState: () => ({
		type: types.GET_PAGES_INITIAL_STATE,
		payload: null,
	}),
	getPagesLoading: () => ({
		type: types.GET_PAGES_LOADING,
		payload: null,
	}),
	getPagesFulfilled: (response) => ({
		type: types.GET_PAGES_FULFILLED,
		payload: response,
	}),
	getPagesRejected: (response) => ({
		type: types.GET_PAGES_REJECTED,
		payload: response,
	}),

	publish: (packageId, successCb, errorCb) => ({
		type: types.PUBLISH,
		payload: null,
		packageId,
		successCb,
		errorCb,
	}),
}
