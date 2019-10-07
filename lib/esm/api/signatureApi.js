import axios from 'axios';
import config from '../config';
export var signatureApi = {
  getSignatures: getSignatures,
  createSignature: createSignature
};

function getSignatures() {
  return axios({
    url: config.apiBase + "/signatures",
    method: 'GET'
  });
}

function createSignature(data) {
  return axios({
    url: config.apiBase + "/signatures",
    method: 'POST',
    data: data
  });
}