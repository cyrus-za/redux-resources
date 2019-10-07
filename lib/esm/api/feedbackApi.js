import axios from 'axios';
import config from '../config';
export var feedbackApi = {
  sendFeedback: sendFeedback
};

function sendFeedback(data) {
  return axios({
    url: config.apiBase + "/feedback",
    method: 'POST',
    data: data
  });
}