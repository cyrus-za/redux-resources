import { createSelector } from 'reselect'

const accessToken = (state) => state.auth.toJS().accessToken
export const authUser = (state) => state.auth.toJS().user
export const authMeta = (state) => state.auth.toJS().meta
export const defaultAccount = (state) => state.accounts.toJS().defaultAccount
export const authAccounts = (state) => state.accounts.toJS().list

export const isLoggedIn = createSelector(
	[accessToken, authUser],
	(accessToken, user) => accessToken.data !== null && user.data !== null
)

export const loginLoading = createSelector(
	[accessToken, authUser, authMeta, defaultAccount, authAccounts],
	(accessToken, authUser, authMeta, defaultAccount, authAccounts) => {
		return (
			accessToken.ui.loading === true ||
			authUser.ui.loading === true ||
			authMeta.ui.loading === true ||
			defaultAccount.ui.loading === true ||
			authAccounts.ui.loading === true
		)
	}
)
