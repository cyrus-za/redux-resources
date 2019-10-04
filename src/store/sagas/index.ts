import { all } from 'redux-saga/effects'

import accountInvites from './accountInvites'
import accounts from './accounts'
import auth, { loginSaga, logoutSaga } from './auth'
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
import feedback from './feedback'
import contacts from './contacts'

export default function* rootSaga() {
	yield all([
		accountInvites(),
		accounts(),
		auth(),
		loginSaga(),
		logoutSaga(),
		cards(),
		documents(),
		fields(),
		fieldTypes(),
		folders(),
		notifications(),
		packageTypes(),
		packages(),
		pages(),
		plans(),
		signatures(),
		subscriptions(),
		socialAccounts(),
		users(),
		feedback(),
		contacts(),
	])
}
