const types = {
	GET_PLANS: '[plans] GET_PLANS',
	SET_PLANS_INITIAL_STATE: '[plans] SET_PLANS_INITIAL_STATE',
	SET_PLANS_LOADING: '[plans] SET_PLANS_LOADING',
	SET_PLANS_FULFILLED: '[plans] SET_PLANS_FULFILLED',
	SET_PLANS_REJECTED: '[plans] SET_PLANS_REJECTED',
}

export const planActions = {
	...types,
	getPlans: (query = {}) => ({
		type: types.GET_PLANS,
		payload: null,
		query,
	}),
	setPlansInitialState: () => ({
		type: types.SET_PLANS_INITIAL_STATE,
		payload: null,
	}),
	setPlansLoading: () => ({
		type: types.SET_PLANS_LOADING,
		payload: null,
	}),
	setPlansFulfilled: (response) => ({
		type: types.SET_PLANS_FULFILLED,
		payload: response,
	}),
	setPlansRejected: (response) => ({
		type: types.SET_PLANS_REJECTED,
		payload: response,
	}),
}
