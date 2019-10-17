// import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'
// import { reducer as toastr } from 'react-redux-toastr'

// import accounts from './accounts'
// import accountInvites from './accountInvites'
// import auth from './auth'
// import cards from './cards'
// import documents from './documents'
// import fields from './fields'
// import fieldTypes from './fieldTypes'
// import folders from './folders'
// import notifications from './notifications'
// import packageTypes from './packageTypes'
// import packages from './packages'
// import pages from './pages'
// import plans from './plans'
// import signatures from './signatures'
// import subscriptions from './subscriptions'
// import socialAccounts from './connectedServices'
// import users from './users'

// export default (history) =>
// 	combineReducers({
// 		router: connectRouter(history),
// 		accounts,
// 		accountInvites,
// 		auth,
// 		cards,
// 		documents,
// 		fields,
// 		fieldTypes,
// 		folders,
// 		notifications,
// 		packageTypes,
// 		packages,
// 		pages,
// 		signatures,
// 		subscriptions,
// 		plans,
// 		socialAccounts,
// 		users,
// 		toastr,
// 	})

export { default as accounts } from './accounts'
export { default as accountInvites } from './accountInvites'
export { default as auth } from './auth'
export { default as cards } from './cards'
export { default as documents } from './documents'
export { default as fields } from './fields'
export { default as fieldTypes } from './fieldTypes'
export { default as folders } from './folders'
export { default as notifications } from './notifications'
export { default as packageTypes } from './packageTypes'
export { default as packages } from './packages'
export { default as pages } from './pages'
export { default as plans } from './plans'
export { default as signatures } from './signatures'
export { default as subscriptions } from './subscriptions'
export { default as socialAccounts } from './connectedServices'
export { default as users } from './users'
