import { combineReducers } from 'redux'

import accounts from './accounts'
import accountInvites from './accountInvites'
import auth from './auth'
import cards from './cards'
import documents from './documents'
import fields from './fields'
import fieldTypes from './fieldTypes'
import folders from './folders'
import notifications from './notifications'
import packageTypes from './packageTypes'
import packages from './packages'
import pages from './pages'
import plans from './plans'
import signatures from './signatures'
import subscriptions from './subscriptions'
import socialAccounts from './connectedServices'
import users from './users'

export default (history, connectRouter, props = {}) =>
	combineReducers({
		router: connectRouter(history),
		accounts,
		accountInvites,
		auth,
		cards,
		documents,
		fields,
		fieldTypes,
		folders,
		notifications,
		packageTypes,
		packages,
		pages,
		signatures,
		subscriptions,
		plans,
		socialAccounts,
		users,
		...props
	})
