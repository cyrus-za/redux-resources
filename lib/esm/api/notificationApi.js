import axios from 'axios';
import config from '../config';
export var notificationApi = {
  getNotifications: getNotifications,
  deleteNotification: deleteNotification,
  update: update
};

function getNotifications(query) {
  if (query === void 0) {
    query = {};
  }

  return axios({
    url: config.apiBase + "/notifications",
    method: 'GET',
    params: query
  });
}

function update(id, notification) {
  return axios({
    url: config.apiBase + "/notifications/" + id,
    method: 'PUT',
    data: notification
  });
}

function deleteNotification(id) {
  return axios({
    url: config.apiBase + "/notifications/" + id,
    method: 'DELETE'
  });
}