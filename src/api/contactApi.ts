import axios from 'axios'
import config from '../config'
import { Contact } from '../components/PackageAddEdit/Steps/Recipients/types'

export const contactApi = {
	searchContact,
}

function searchContact(data: Partial<Contact>) {
	return axios({
		url: `${config.apiBase}/contacts`,
		method: 'GET',
		params: {
			first_names: data.firstName || '',
			last_names: data.lastName || '',
			emails: data.email || '',
		},
	})
		.then((res) => res.data)
		.then((data) =>
			data.map((c) => ({
				firstName: c.first_name,
				lastName: c.last_name,
				email: c.email_addresses[0] && c.email_addresses[0].value,
				imageUrl: c.image_url,
			}))
		)
}
