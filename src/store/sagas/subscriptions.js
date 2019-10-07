import { notificationActions, subscriptionActions } from '../actions/index'
import { put, takeEvery, call } from 'redux-saga/effects'
import { subscriptionApi } from '../../api/index'

function* getSubscriptions({ query }) {
	try {
		yield put(subscriptionActions.setSubscriptionsLoading())
		const getSubscriptionsResponse = yield call(subscriptionApi.getSubscriptions, query)
		yield put(subscriptionActions.setSubscriptionsFulfilled(getSubscriptionsResponse))
	} catch (error) {
		yield put(subscriptionActions.setSubscriptionsRejected(error))
	}
}

function* createSubscription({ account, plan, coupon, successCb, errorCb }) {
	const data = {
		account_id: account.id,
		plan_id: plan.id,
		coupon,
	}
	try {
		yield put(subscriptionActions.setCreateSubscriptionLoading())
		const response = yield call(subscriptionApi.createSubscription, data)
		yield put(subscriptionActions.setCreateSubscriptionFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Subscription created!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(subscriptionActions.setCreateSubscriptionRejected(error))
		errorCb && errorCb()
	}
}

function* updateSubscription({ subscription, plan, coupon = null, successCb, errorCb }) {
	const data = {
		plan_id: plan.id,
		coupon,
	}
	try {
		yield put(subscriptionActions.setUpdateSubscriptionLoading())
		const response = yield call(subscriptionApi.updateSubscription, subscription.id, data)
		yield put(subscriptionActions.setUpdateSubscriptionFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Subscription updated!', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(subscriptionActions.setUpdateSubscriptionRejected(error))
		errorCb && errorCb()
	}
}

function* deleteSubscription({ subscription, successCb, errorCb }) {
	try {
		yield put(subscriptionActions.setDeleteSubscriptionLoading())
		const response = yield call(subscriptionApi.deleteSubscription, subscription.id)
		yield put(subscriptionActions.setDeleteSubscriptionFulfilled(response))
		yield put(notificationActions.displaySnackbarMessage('Subscription deleted', 2000))
		successCb && successCb()
	} catch (error) {
		yield put(subscriptionActions.setDeleteSubscriptionRejected(error))
		errorCb && errorCb()
	}
}

export default function* rootSaga() {
	yield takeEvery(subscriptionActions.GET_SUBSCRIPTIONS, getSubscriptions)
	yield takeEvery(subscriptionActions.CREATE_SUBSCRIPTION, createSubscription)
	yield takeEvery(subscriptionActions.UPDATE_SUBSCRIPTION, updateSubscription)
	yield takeEvery(subscriptionActions.DELETE_SUBSCRIPTION, deleteSubscription)
}
