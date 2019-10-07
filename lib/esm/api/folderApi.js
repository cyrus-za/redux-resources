import axios from 'axios';
import config from '../config';
export var folderApi = {
  getFolders: getFolders,
  showFolder: showFolder,
  createFolder: createFolder,
  updateFolder: updateFolder
};

function getFolders(query) {
  if (query === void 0) {
    query = {};
  }

  return axios({
    url: config.apiBase + "/folders",
    method: 'GET',
    params: query
  });
}

function showFolder(id) {
  return axios({
    url: config.apiBase + "/folders/" + id,
    method: 'GET'
  });
}

function createFolder(data) {
  return axios({
    url: config.apiBase + "/folders",
    method: 'POST',
    data: data
  });
}

function updateFolder(id) {
  return axios({
    url: config.apiBase + "/folders/" + id,
    method: 'PUT'
  });
}