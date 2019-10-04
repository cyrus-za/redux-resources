import pusher from '../utilities/pusher'
import { notificationActions } from '../store/actions'
import { put } from 'redux-saga/effects'

export const pusherApi = {
	connect,
	subscribeToUserEvents,
	handleLogOut,
}

function handleLogOut() {
	pusher.unbind_all()
	pusher.disconnect()
}

pusher.connection
	.bind('connecting', () => {
		put(notificationActions.connectToNotificationServiceLoading())
	})
	.bind('connected', () => {
		put(notificationActions.connectToNotificationServiceFulfilled())
	})
	.bind('unavailable', () => {
		put(
			notificationActions.connectToNotificationServiceRejected({
				data: {
					message: 'No internet connection',
				},
			})
		)
	})
	.bind('failed', () => {
		put(
			notificationActions.connectToNotificationServiceRejected({
				data: {
					message: 'Channels is not supported by the browse',
				},
			})
		)
	})
	.bind('disconnected', () => {
		put(
			notificationActions.connectToNotificationServiceRejected({
				data: {
					message: 'The Channels connection was previously connected and has now intentionally been closed',
				},
			})
		)
	})

function connect() {
	pusher.connect()
}

function subscribeToUserEvents(userId) {
	return new Promise((resolve, reject) => {
		const usersChannel = pusher
			.subscribe('private-users.' + userId)
			.bind('pusher:subscription_succeeded', function() {
				resolve()
			})
			.bind('pusher:subscription_error', function(status) {
				reject({ status: status })
			})

		usersChannel.bind('UserConfirmedEmailEvent', (data) => {
			put(notificationActions.userConfirmedEmailEvent(data))
		})

		usersChannel.bind('UserUpdatedEmailEvent', (data) => {
			put(notificationActions.userUpdatedEmailEvent(data))
		})

		usersChannel.bind('Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', (data) => {
			if (data.read_at === undefined) {
				data.read_at = null
			}

			if (data.data === undefined) {
				data.data = {
					title: data.title,
					body: data.body,
				}
				delete data.title
				delete data.body
			}
			put(notificationActions.notificationReceivedEvent(data))
		})
	})
}
