const types = {
	GET_CONNECTED_SERVICES: '[connectedServices] GET_CONNECTED_SERVICES',
	SET_CONNECTED_SERVICES_INITIAL_STATE: '[connectedServices] SET_CONNECTED_SERVICES_INITIAL_STATE',
	SET_CONNECTED_SERVICES_LOADING: '[connectedServices] SET_CONNECTED_SERVICES_LOADING',
	SET_CONNECTED_SERVICES_FULFILLED: '[connectedServices] SET_CONNECTED_SERVICES_FULFILLED',
	SET_CONNECTED_SERVICES_REJECTED: '[connectedServices] SET_CONNECTED_SERVICES_REJECTED',

	CREATE_CONNECTED_SERVICE: '[connectedServices] CREATE_CONNECTED_SERVICE',
	CREATE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] CREATE_CONNECTED_SERVICE_INITIAL_STATE',
	CREATE_CONNECTED_SERVICE_LOADING: '[connectedServices] CREATE_CONNECTED_SERVICE_LOADING',
	CREATE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] CREATE_CONNECTED_SERVICE_FULFILLED',
	CREATE_CONNECTED_SERVICE_REJECTED: '[connectedServices] CREATE_CONNECTED_SERVICE_REJECTED',

	UPDATE_CONNECTED_SERVICE: '[connectedServices] UPDATE_CONNECTED_SERVICE',
	UPDATE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] UPDATE_CONNECTED_SERVICE_INITIAL_STATE',
	UPDATE_CONNECTED_SERVICE_LOADING: '[connectedServices] UPDATE_CONNECTED_SERVICE_LOADING',
	UPDATE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] UPDATE_CONNECTED_SERVICE_FULFILLED',
	UPDATE_CONNECTED_SERVICE_REJECTED: '[connectedServices] UPDATE_CONNECTED_SERVICE_REJECTED',

	DELETE_CONNECTED_SERVICE: '[connectedServices] DELETE_CONNECTED_SERVICE',
	DELETE_CONNECTED_SERVICE_INITIAL_STATE: '[connectedServices] DELETE_CONNECTED_SERVICE_INITIAL_STATE',
	DELETE_CONNECTED_SERVICE_LOADING: '[connectedServices] DELETE_CONNECTED_SERVICE_LOADING',
	DELETE_CONNECTED_SERVICE_FULFILLED: '[connectedServices] DELETE_CONNECTED_SERVICE_FULFILLED',
	DELETE_CONNECTED_SERVICE_REJECTED: '[connectedServices] DELETE_CONNECTED_SERVICE_REJECTED',

	SET_CONNECTED_SERVICES: '[connectedServices] SET_CONNECTED_SERVICES',
	SET_AVAILABLE_SERVICES: '[connectedServices] SET_AVAILABLE_SERVICES',
}

export const connectedServiceActions = {
	...types,
	getConnectedServices: (query = {}) => ({
		type: types.GET_CONNECTED_SERVICES,
		payload: null,
		query,
	}),
	setConnectedServicesInitialState: () => ({
		type: types.SET_CONNECTED_SERVICES_INITIAL_STATE,
		payload: null,
	}),
	setConnectedServicesLoading: () => ({
		type: types.SET_CONNECTED_SERVICES_LOADING,
		payload: null,
	}),
	setConnectedServicesFulfilled: (response) => ({
		type: types.SET_CONNECTED_SERVICES_FULFILLED,
		payload: response,
	}),
	setConnectedServicesRejected: (response) => ({
		type: types.SET_CONNECTED_SERVICES_REJECTED,
		payload: response,
	}),

	createConnectedService: (data, successCb, errorCb) => ({
		type: types.CREATE_CONNECTED_SERVICE,
		payload: null,
		data,
		successCb,
		errorCb,
	}),
	createConnectedServiceInitialState: () => ({
		type: types.CREATE_CONNECTED_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	createConnectedServiceLoading: () => ({
		type: types.CREATE_CONNECTED_SERVICE_LOADING,
		payload: null,
	}),
	createConnectedServiceFulfilled: (response) => ({
		type: types.CREATE_CONNECTED_SERVICE_FULFILLED,
		payload: response,
	}),
	createConnectedServiceRejected: (response) => ({
		type: types.CREATE_CONNECTED_SERVICE_REJECTED,
		payload: response,
	}),

	updateConnectedService: (id, data, successCb, errorCb) => ({
		type: types.UPDATE_CONNECTED_SERVICE,
		payload: null,
		id,
		data,
		successCb,
		errorCb,
	}),
	updateConnectedServiceInitialState: () => ({
		type: types.UPDATE_CONNECTED_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	updateConnectedServiceLoading: () => ({
		type: types.UPDATE_CONNECTED_SERVICE_LOADING,
		payload: null,
	}),
	updateConnectedServiceFulfilled: (response) => ({
		type: types.UPDATE_CONNECTED_SERVICE_FULFILLED,
		payload: response,
	}),
	updateConnectedServiceRejected: (response) => ({
		type: types.UPDATE_CONNECTED_SERVICE_REJECTED,
		payload: response,
	}),

	deleteConnectedService: (id, scopes = undefined, successCb, errorCb) => ({
		type: types.DELETE_CONNECTED_SERVICE,
		payload: null,
		id,
		scopes,
		successCb,
		errorCb,
	}),
	deleteConnectedServiceInitialState: () => ({
		type: types.DELETE_CONNECTED_SERVICE_INITIAL_STATE,
		payload: null,
	}),
	deleteConnectedServiceLoading: () => ({
		type: types.DELETE_CONNECTED_SERVICE_LOADING,
		payload: null,
	}),
	deleteConnectedServiceFulfilled: (response) => ({
		type: types.DELETE_CONNECTED_SERVICE_FULFILLED,
		payload: response,
	}),
	deleteConnectedServiceRejected: (response) => ({
		type: types.DELETE_CONNECTED_SERVICE_REJECTED,
		payload: response,
	}),
	setConnectedServices: (list) => ({
		type: types.SET_CONNECTED_SERVICES,
		payload: list,
	}),
	setAvailableServices: (list) => ({
		type: types.SET_AVAILABLE_SERVICES,
		payload: list,
	}),
}
