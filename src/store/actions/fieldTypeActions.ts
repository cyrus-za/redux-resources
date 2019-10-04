const types = {
	GET_FIELD_TYPES: '[fieldTypes] GET_FIELD_TYPES',
	FIELD_TYPES_LOADING: '[fieldTypes] FIELD_TYPES_LOADING',
	FIELD_TYPES_FULFILLED: '[fieldTypes] FIELD_TYPES_FULFILLED',
	SET_FIELD_TYPES_REJECTED: '[fieldTypes] SET_FIELD_TYPES_REJECTED',
}

export const fieldTypeActions = {
	...types,
	getFieldTypes: (query = {}) => ({
		type: types.GET_FIELD_TYPES,
		payload: null,
		query,
	}),
	setFieldTypesLoading: () => ({
		type: types.FIELD_TYPES_LOADING,
		payload: null,
	}),
	setFieldTypesFulfilled: (response) => ({
		type: types.FIELD_TYPES_FULFILLED,
		payload: response,
	}),
	setFieldTypesRejected: (data) => ({
		type: types.SET_FIELD_TYPES_REJECTED,
		payload: data,
	}),
}
