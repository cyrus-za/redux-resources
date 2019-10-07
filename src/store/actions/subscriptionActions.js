const types = {
	GET_SUBSCRIPTIONS: '[subscriptions] GET_SUBSCRIPTIONS',
	SET_SUBSCRIPTIONS_LOADING: '[subscriptions] SET_SUBSCRIPTIONS_LOADING',
	SET_SUBSCRIPTIONS_FULFILLED: '[subscriptions] SET_SUBSCRIPTIONS_FULFILLED',
	SET_SUBSCRIPTIONS_REJECTED: '[subscriptions] SET_SUBSCRIPTIONS_REJECTED',

	CREATE_SUBSCRIPTION: '[subscriptions] CREATE_SUBSCRIPTION',
	SET_CREATE_SUBSCRIPTION_LOADING: '[subscriptions] SET_CREATE_SUBSCRIPTION_LOADING',
	SET_CREATE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_CREATE_SUBSCRIPTION_FULFILLED',
	SET_CREATE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_CREATE_SUBSCRIPTION_REJECTED',

	UPDATE_SUBSCRIPTION: '[subscriptions] UPDATE_SUBSCRIPTION',
	SET_UPDATE_SUBSCRIPTION_LOADING: '[subscriptions] SET_UPDATE_SUBSCRIPTION_LOADING',
	SET_UPDATE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_UPDATE_SUBSCRIPTION_FULFILLED',
	SET_UPDATE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_UPDATE_SUBSCRIPTION_REJECTED',

	DELETE_SUBSCRIPTION: '[subscriptions] DELETE_SUBSCRIPTION',
	SET_DELETE_SUBSCRIPTION_LOADING: '[subscriptions] SET_DELETE_SUBSCRIPTION_LOADING',
	SET_DELETE_SUBSCRIPTION_FULFILLED: '[subscriptions] SET_DELETE_SUBSCRIPTION_FULFILLED',
	SET_DELETE_SUBSCRIPTION_REJECTED: '[subscriptions] SET_DELETE_SUBSCRIPTION_REJECTED',
}

export default {
	...types,
	getSubscriptions: (query = {}) => ({
		type: types.GET_SUBSCRIPTIONS,
		payload: null,
		query,
	}),
	setSubscriptionsLoading: () => ({
		type: types.SET_SUBSCRIPTIONS_LOADING,
		payload: null,
	}),
	setSubscriptionsFulfilled: (response) => ({
		type: types.SET_SUBSCRIPTIONS_FULFILLED,
		payload: response,
	}),
	setSubscriptionsRejected: (response) => ({
		type: types.SET_SUBSCRIPTIONS_REJECTED,
		payload: response,
	}),

	createSubscription: (account, plan, coupon = null, successCb = undefined, errorCb = undefined) => ({
		type: types.CREATE_SUBSCRIPTION,
		payload: null,
		account,
		plan,
		coupon,
		successCb,
		errorCb,
	}),
	setCreateSubscriptionLoading: () => ({
		type: types.SET_CREATE_SUBSCRIPTION_LOADING,
		payload: null,
	}),
	setCreateSubscriptionFulfilled: (response) => ({
		type: types.SET_CREATE_SUBSCRIPTION_FULFILLED,
		payload: response,
	}),
	setCreateSubscriptionRejected: (response) => ({
		type: types.SET_CREATE_SUBSCRIPTION_REJECTED,
		payload: response,
	}),

	updateSubscription: (subscription, plan, coupon = null, successCb = undefined, errorCb = undefined) => ({
		type: types.UPDATE_SUBSCRIPTION,
		payload: null,
		subscription,
		plan,
		coupon,
		successCb,
		errorCb,
	}),
	setUpdateSubscriptionLoading: () => ({
		type: types.SET_UPDATE_SUBSCRIPTION_LOADING,
		payload: null,
	}),
	setUpdateSubscriptionFulfilled: (response) => ({
		type: types.SET_UPDATE_SUBSCRIPTION_FULFILLED,
		payload: response,
	}),
	setUpdateSubscriptionRejected: (response) => ({
		type: types.SET_UPDATE_SUBSCRIPTION_REJECTED,
		payload: response,
	}),

	deleteSubscription: (subscription, successCb = undefined, errorCb = undefined) => ({
		type: types.DELETE_SUBSCRIPTION,
		payload: null,
		subscription,
		successCb,
		errorCb,
	}),
	setDeleteSubscriptionLoading: () => ({
		type: types.SET_DELETE_SUBSCRIPTION_LOADING,
		payload: null,
	}),
	setDeleteSubscriptionFulfilled: (response) => ({
		type: types.SET_DELETE_SUBSCRIPTION_FULFILLED,
		payload: response,
	}),
	setDeleteSubscriptionRejected: (response) => ({
		type: types.SET_DELETE_SUBSCRIPTION_REJECTED,
		payload: response,
	}),
}
