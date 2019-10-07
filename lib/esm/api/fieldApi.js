import axios from 'axios';
import config from '../config';
export var fieldApi = {
  getFields: getFields,
  createField: createField,
  updateField: updateField,
  deleteField: deleteField
};

function getFields(packageId, query) {
  if (query === void 0) {
    query = {};
  }

  return axios({
    url: config.apiBase + "/packages/" + packageId + "/fields",
    method: 'GET',
    params: query
  });
}

function createField(packageId, data) {
  return axios({
    url: config.apiBase + "/packages/" + packageId + "/fields",
    method: 'POST',
    data: data
  });
}

function updateField(packageId, fieldId, data) {
  return axios({
    url: config.apiBase + "/packages/" + packageId + "/fields/" + fieldId,
    method: 'PUT',
    data: data
  });
}

function deleteField(packageId, fieldId) {
  return axios({
    url: config.apiBase + "/packages/" + packageId + "/fields/" + fieldId,
    method: 'DELETE'
  });
}