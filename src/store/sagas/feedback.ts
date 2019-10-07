import { notificationActions, feedbackActions } from '../actions'
import { put, takeEvery, call } from 'redux-saga/effects'
import { feedbackApi } from '../../api'

interface Props {
	payload
	successCb: VoidFunction
	errorCb: VoidFunction
}

function* sendFeedback({ payload, successCb, errorCb }: Props) {
	try {
		yield put(feedbackActions.setSendFeedbackLoading())
		const response = yield call(feedbackApi.sendFeedback, payload)
		yield put(feedbackActions.setSendFeedbackFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Feedback submitted!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(feedbackActions.setSendFeedbackRejected(error))
		// TODO: remove this line once API endpoint implemented
		yield put(notificationActions.displaySnackbarMessage('Feedback submitted!', 2000))

		errorCb && errorCb()
	}
}

export default function* rootSaga() {
	yield takeEvery<any>(feedbackActions.SEND_FEEDBACK, sendFeedback)
}
