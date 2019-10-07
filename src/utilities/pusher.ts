import Pusher from 'pusher-js'
import config from '../config'
import axios from 'axios'

const authorizer = function(channel) {
	return {
		authorize: function(socketId, callback) {
			axios({
				url: `${config.apiBase}/broadcasting/auth`,
				method: 'POST',
				data: {
					channel_name: channel.name,
					socket_id: socketId,
				},
			})
				.then((response) => {
					callback(false, response.data)
				})
				.catch((error) => {
					console.log(error)
				})
		},
	}
}

const pusher = new Pusher(config.pusher.appKey, {
	cluster: config.pusher.appCluster,
	encrypted: true,
	authorizer,
})

export default pusher
