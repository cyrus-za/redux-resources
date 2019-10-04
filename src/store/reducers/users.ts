import { fromJS } from 'immutable'
import { userActions } from '../actions'
import stateUtility from '../../utilities/stateUtility'

const initialState = fromJS({
	updatePassword: stateUtility.getObserverInitialState(),
	resendEmailConfirmation: stateUtility.getObserverInitialState(),
	notificationPreferences: stateUtility.getItemInitialState(),
	getNotificationPreferences: stateUtility.getObserverInitialState(),
	updateNotificationPreferences: stateUtility.getObserverInitialState(),
	confirmEmail: stateUtility.getObserverInitialState(),
})

export default (state = initialState, action) => {
	switch (action.type) {
		//  updatePassword
		case userActions.UPDATE_PASSWORD_INITIAL_STATE:
			return state.merge({
				updatePassword: stateUtility.getObserverInitialState(),
			})
		case userActions.UPDATE_PASSWORD_LOADING:
			return state.merge({
				updatePassword: stateUtility.getObserverLoading(),
			})
		case userActions.UPDATE_PASSWORD_FULFILLED:
			return state.merge({
				updatePassword: stateUtility.getObserverFulfilled(),
			})
		case userActions.UPDATE_PASSWORD_REJECTED:
			return state.merge({
				updatePassword: stateUtility.getObserverRejected(action.payload),
			})

		//  confirmEmail
		case userActions.CONFIRM_EMAIL_INITIAL_STATE:
			return state.merge({
				confirmEmail: stateUtility.getObserverInitialState(),
			})
		case userActions.CONFIRM_EMAIL_LOADING:
			return state.merge({
				confirmEmail: stateUtility.getObserverLoading(),
			})
		case userActions.CONFIRM_EMAIL_FULFILLED:
			return state.merge({
				confirmEmail: stateUtility.getObserverFulfilled(),
			})
		case userActions.CONFIRM_EMAIL_REJECTED:
			return state.merge({
				confirmEmail: stateUtility.getObserverRejected(action.payload),
			})

		//  resendEmailConfirmation
		case userActions.RESEND_EMAIL_CONFIRMATION_INITIAL_STATE:
			return state.merge({
				resendEmailConfirmation: stateUtility.getObserverInitialState(),
			})
		case userActions.RESEND_EMAIL_CONFIRMATION_LOADING:
			return state.merge({
				resendEmailConfirmation: stateUtility.getObserverLoading(),
			})
		case userActions.RESEND_EMAIL_CONFIRMATION_FULFILLED:
			return state.merge({
				resendEmailConfirmation: stateUtility.getObserverFulfilled(),
			})
		case userActions.RESEND_EMAIL_CONFIRMATION_REJECTED:
			return state.merge({
				resendEmailConfirmation: stateUtility.getObserverRejected(action.payload),
			})

		//  getNotificationPreferences
		case userActions.GET_NOTIFICATION_PREFERENCES_INITIAL_STATE:
			return state.merge({
				notificationPreferences: stateUtility.getItemInitialState(),
				getNotificationPreferences: stateUtility.getObserverInitialState(),
			})
		case userActions.GET_NOTIFICATION_PREFERENCES_LOADING:
			return state.merge({
				notificationPreferences: stateUtility.getItemLoading(),
				getNotificationPreferences: stateUtility.getObserverLoading(),
			})
		case userActions.GET_NOTIFICATION_PREFERENCES_FULFILLED:
			const getPreferencesFulfilled = action.payload.data
			return state.merge({
				notificationPreferences: stateUtility.getItemFulfilled(getPreferencesFulfilled),
				getNotificationPreferences: stateUtility.getObserverFulfilled(),
			})
		case userActions.GET_NOTIFICATION_PREFERENCES_REJECTED:
			return state.merge({
				notificationPreferences: stateUtility.getItemRejected(action.payload),
				getNotificationPreferences: stateUtility.getObserverRejected(action.payload),
			})

		//  updateNotificationPreferences
		case userActions.UPDATE_NOTIFICATION_PREFERENCES_INITIAL_STATE:
			return state.merge({
				updateNotificationPreferences: stateUtility.getObserverInitialState(),
			})
		case userActions.UPDATE_NOTIFICATION_PREFERENCES_LOADING:
			return state.merge({
				updateNotificationPreferences: stateUtility.getObserverLoading(),
			})
		case userActions.UPDATE_NOTIFICATION_PREFERENCES_FULFILLED:
			const updatePreferencesFulfilled = action.payload.data
			return state.merge({
				notificationPreferences: stateUtility.getItemFulfilled(updatePreferencesFulfilled),
				updateNotificationPreferences: stateUtility.getObserverFulfilled(),
			})
		case userActions.UPDATE_NOTIFICATION_PREFERENCES_REJECTED:
			return state.merge({
				updateNotificationPreferences: stateUtility.getObserverRejected(action.payload),
			})

		default:
			return state
	}
}
