import axios from 'axios';
import config from '../config';
export var accountInviteApi = {
  getAccountInvites: getAccountInvites,
  deleteAccountInvite: deleteAccountInvite,
  create: create,
  accept: accept
};

function getAccountInvites(query) {
  if (query === void 0) {
    query = {};
  }

  return axios({
    url: config.apiBase + "/account_invites",
    method: 'GET',
    params: query
  });
}

function deleteAccountInvite(id) {
  return axios({
    url: config.apiBase + "/account_invites/" + id,
    method: 'DELETE'
  });
}

function create(data) {
  return axios({
    url: config.apiBase + "/account_invites",
    method: 'POST',
    data: data
  });
}

function accept(id) {
  return axios({
    url: config.apiBase + "/account_invites/" + id + "/accept",
    method: 'PUT'
  });
}