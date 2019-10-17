import config from '../config'
import {
	ActiveCampaignIcon,
	BoxIcon,
	DropBoxIcon,
	GoogleIcon,
	GoogleContactsIcon,
	GoogleDriveIcon,
	Document,
} from '../icons'

export const hasSocialAccount = (list, provider, scopes = null) => {
	const socialAccount = list.data.find((item) => item.provider === provider)

	if (socialAccount === undefined) {
		return undefined
	} else {
		if (scopes === undefined || scopes === null) {
			return true
		} else {
			return serviceHasScopes(socialAccount, scopes)
		}
	}
}

export const serviceHasScopes = (service, scopes) => {
	const providedScopes = scopes.split(' ')
	let hasScopes = true
	providedScopes.forEach((scopeItem) => {
		if (service.scopes.includes(scopeItem) === false) {
			hasScopes = false
		}
	})
	return hasScopes
}

export const isStorageService = (service) => {
	if (service.provider === 'google') {
		return serviceHasScopes(service, config.google.scopes.drive)
	} else if (service.provider === 'dropbox' || service.provider === 'box') {
		return true
	}
	return false
}

export const getSocialIcon = (provider, scopes = null) => {
	switch (provider) {
		case 'google':
			switch (scopes) {
				case config.google.scopes.authentication:
					return GoogleIcon
				case config.google.scopes.contacts:
					return GoogleContactsIcon
				case config.google.scopes.drive:
					return GoogleDriveIcon
				default:
					return null
			}
		case 'active_campaign':
			return ActiveCampaignIcon
		case 'box':
			return BoxIcon
		case 'dropbox':
			return DropBoxIcon
		case 'approveme':
			return Document
		default:
			return null
	}
}

export const getProviderName = (provider, scopes = null) => {
	switch (provider) {
		case 'approveme':
			return 'Past Documents'
		case 'google':
			if (scopes === null) {
				return 'Google'
			} else {
				switch (scopes) {
					case config.google.scopes.authentication:
						return 'Google'
					case config.google.scopes.contacts:
						return 'Google Contacts'
					case config.google.scopes.drive:
						return 'Google Drive'
					default:
						return null
				}
			}
		case 'dropbox':
			return 'Dropbox'
		case 'box':
			return 'Box'
		case 'active_campaign':
			return 'Active Campaign'
		default:
			return ''
	}
}

export const getServiceDescription = (provider, scopes) => {
	switch (provider) {
		case 'google':
			if (scopes === null) {
				return 'Use your Google account to login'
			} else {
				switch (scopes) {
					case config.google.scopes.authentication:
						return 'Use your Google account to login'
					case config.google.scopes.contacts:
						return 'Tag, capture and manage contact automation based on ApproveMe events.'
					case config.google.scopes.drive:
						return 'Sync your Google Drive'
					default:
						return null
				}
			}
		case 'dropbox':
			return 'Sync your DropBox drive'
		case 'box':
			return 'Sync your Box drive'
		case 'active_campaign':
			return 'Tag, capture and manage contact automation based on ApproveMe events.'
		default:
			return 'MAP ME IN socialAccountUtility@getServiceDescription'
	}
}

export const getSearchName = (provider) => {
	switch (provider) {
		default:
			return 'Search'
	}
}

export const parseApiResponse = (list) => {
	const googleAuth = getParsedObject(list, 'google', config.google.scopes.authentication)
	const googleContacts = getParsedObject(list, 'google', config.google.scopes.contacts)
	const googleDrive = getParsedObject(list, 'google', config.google.scopes.drive)
	const activeCampaign = getParsedObject(list, 'active_campaign')
	const dropBox = getParsedObject(list, 'dropbox')
	const box = getParsedObject(list, 'box')
	let connected = []
	let available = []

	googleAuth.connectedService ? connected.push(googleAuth) : available.push(googleAuth)
	googleContacts.connectedService ? connected.push(googleContacts) : available.push(googleContacts)
	googleDrive.connectedService ? connected.push(googleDrive) : available.push(googleDrive)
	activeCampaign.connectedService ? connected.push(activeCampaign) : available.push(activeCampaign)
	dropBox.connectedService ? connected.push(dropBox) : available.push(dropBox)
	box.connectedService ? connected.push(box) : available.push(box)

	return {
		connected,
		available,
	}
}

export const getParsedObject = (list, provider, scopes = null) => {
	const socialAccount = list.data.find((item) => item.provider === provider)
	let data = {
		provider,
		scopes,
		connectedService: undefined,
	}

	if (socialAccount === undefined) {
		return data
	} else {
		if (scopes === undefined || scopes === null) {
			return data
		} else {
			const providedScopes = scopes.split(' ')
			let hasScopes = true
			providedScopes.forEach((scopeItem) => {
				if (socialAccount.scopes.includes(scopeItem) === false) {
					hasScopes = false
				}
			})
			if (hasScopes) {
				data.connectedService = socialAccount
			}
		}
	}
	return data
}

export const canManageConnection = (connectedService) => {
	if (connectedService === undefined) {
		return false
	} else if (connectedService.provider === 'active_campaign') {
		return true
	} else {
		return false
	}
}
