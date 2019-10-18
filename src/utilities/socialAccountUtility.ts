import config from '../config'

export const getParsedObject = (list, provider, scopes?: string) => {
	const socialAccount = list.data.find((item) => item.provider === provider)
	const data = {
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

export const parseApiResponse = (list) => {
	const googleAuth = getParsedObject(list, 'google', config.google.scopes.authentication)
	const googleContacts = getParsedObject(list, 'google', config.google.scopes.contacts)
	const googleDrive = getParsedObject(list, 'google', config.google.scopes.drive)
	const activeCampaign = getParsedObject(list, 'active_campaign')
	const dropBox = getParsedObject(list, 'dropbox')
	const box = getParsedObject(list, 'box')
	const connected = [] as any[]
	const available = [] as any[]

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
