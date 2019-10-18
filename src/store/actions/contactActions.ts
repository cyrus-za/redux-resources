const types = {
	SEARCH_CONTACTS: '[contacts] SEARCH_CONTACTS',
	SEARCH_LOADING: '[contacts] SEARCH_LOADING',
	SEARCH_FULFILLED: '[contacts] SEARCH_FULFILLED',
	SEARCH_REJECTED: '[contacts] SEARCH_REJECTED',
}

export default {
	...types,
	searchContacts: (payload, successCb?, errorCb?) => ({
		type: types.SEARCH_CONTACTS,
		payload,
		successCb,
		errorCb,
	}),
	setSearchContactsLoading: () => ({
		type: types.SEARCH_LOADING,
		payload: null,
	}),
	setSearchContactsFulfilled: (response) => ({
		type: types.SEARCH_FULFILLED,
		payload: response,
	}),
	setSearchContactsRejected: (response) => ({
		type: types.SEARCH_REJECTED,
		payload: response,
	}),
}
