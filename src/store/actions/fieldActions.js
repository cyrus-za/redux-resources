const types = {
	GET_FIELDS: '[fields] GET_FIELDS',
	GET_FIELDS_INITIAL_STATE: '[fields] GET_FIELDS_INITIAL_STATE',
	GET_FIELDS_LOADING: '[fields] GET_FIELDS_LOADING',
	GET_FIELDS_FULFILLED: '[fields] GET_FIELDS_FULFILLED',
	GET_FIELDS_REJECTED: '[fields] GET_FIELDS_REJECTED',

	CREATE_FIELD: '[fields] CREATE_FIELD',
	UPDATE_FIELD: '[fields] UPDATE_FIELD',
	DELETE_FIELD: '[fields] DELETE_FIELD',

	SET_ITEM_LOADING: '[fields] SET_ITEM_LOADING',
	SET_ITEM_FULFILLED: '[fields] SET_ITEM_FULFILLED',
	SET_ITEM_REJECTED: '[fields] SET_ITEM_REJECTED',
}

export default {
	...types,
	getFields: (packageId, query = {}, successCb = undefined, errorCb = undefined) => ({
		type: types.GET_FIELDS,
		payload: null,
		packageId,
		query,
		successCb,
		errorCb,
	}),
	getFieldsInitialState: () => ({
		type: types.GET_FIELDS_INITIAL_STATE,
		payload: null,
	}),
	getFieldsLoading: () => ({
		type: types.GET_FIELDS_LOADING,
		payload: null,
	}),
	getFieldsFulfilled: (response) => ({
		type: types.GET_FIELDS_FULFILLED,
		payload: response,
	}),
	getFieldsRejected: (response) => ({
		type: types.GET_FIELDS_REJECTED,
		payload: response,
	}),

	createField: (packageId, documentId, data, successCb = undefined, errorCb = undefined) => ({
		type: types.CREATE_FIELD,
		payload: null,
		packageId,
		documentId,
		data,
		successCb,
		errorCb,
	}),
	updateField: (packageId, documentId, fieldId, data, successCb = undefined, errorCb = undefined) => ({
		type: types.UPDATE_FIELD,
		payload: null,
		packageId,
		documentId,
		fieldId,
		data,
		successCb,
		errorCb,
	}),
	deleteField: (packageId, documentId, fieldId, successCb = undefined, errorCb = undefined) => ({
		type: types.DELETE_FIELD,
		payload: null,
		packageId,
		documentId,
		fieldId,
		successCb,
		errorCb,
	}),

	setItemLoading: () => ({
		type: types.SET_ITEM_LOADING,
		payload: null,
	}),
	setItemFulfilled: (response) => ({
		type: types.SET_ITEM_FULFILLED,
		payload: response,
	}),
	setItemRejected: (response) => ({
		type: types.SET_ITEM_REJECTED,
		payload: response,
	}),
}
