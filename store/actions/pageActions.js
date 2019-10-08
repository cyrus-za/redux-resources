const types = {
	GET_PAGES: '[pages] GET_PAGES',
	GET_PAGES_INITIAL_STATE: '[pages] GET_PAGES_INITIAL_STATE',
	GET_PAGES_LOADING: '[pages] GET_PAGES_LOADING',
	GET_PAGES_FULFILLED: '[pages] GET_PAGES_FULFILLED',
	GET_PAGES_REJECTED: '[pages] GET_PAGES_REJECTED',
	GET_PAGE_IMAGE: '[pages] GET_DOCUMENT_PAGE_IMAGE_URL',
	SET_PAGE_IMAGE: '[pages] SET_DOCUMENT_PAGE_IMAGE_URL',
}

export default {
	...types,
	getPages: (packageId, documentId, successCb = undefined, errorCb = undefined) => ({
		type: types.GET_PAGES,
		payload: null,
		packageId,
		documentId,
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
	getPageImage: (pageId, image_url, successCb = undefined, errorCb = undefined) => ({
		type: types.GET_PAGE_IMAGE,
		payload: null,
		pageId,
		image_url,
		successCb,
		errorCb,
	}),
	setPageImage: (pageId, image) => ({
		type: types.SET_PAGE_IMAGE,
		payload: null,
		pageId,
		image,
	}),
}
