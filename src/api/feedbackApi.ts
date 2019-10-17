import axios from 'axios'
import config from '../config'
import { Feedback } from '../components/Feedback'

export const feedbackApi = {
	sendFeedback,
}

function sendFeedback(data: Feedback) {
	return axios({
		url: `${config.apiBase}/feedback`,
		method: 'POST',
		data,
	})
}
