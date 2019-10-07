const types = {
	SEND_FEEDBACK: '[feedback] SEND_FEEDBACK',
	SET_SEND_FEEDBACK_LOADING: '[feedback] SET_SEND_FEEDBACK_LOADING',
	SET_SEND_FEEDBACK_FULFILLED: '[feedback] SET_SEND_FEEDBACK_FULFILLED',
	SET_SEND_FEEDBACK_REJECTED: '[feedback] SET_SEND_FEEDBACK_REJECTED',
}

export default {
	...types,
	sendFeedback: (payload, successCb = undefined, errorCb = undefined) => ({
		type: types.SEND_FEEDBACK,
		payload,
		successCb,
		errorCb,
	}),
	setSendFeedbackLoading: () => ({
		type: types.SET_SEND_FEEDBACK_LOADING,
		payload: null,
	}),
	setSendFeedbackFulfilled: (response) => ({
		type: types.SET_SEND_FEEDBACK_FULFILLED,
		payload: response,
	}),
	setSendFeedbackRejected: (response) => ({
		type: types.SET_SEND_FEEDBACK_REJECTED,
		payload: response,
	}),
}
