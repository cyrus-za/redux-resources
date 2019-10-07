import axios from 'axios';
import config from '../config';
export var documentApi = {
  getDocuments: getDocuments,
  downloadDocument: downloadDocument
};

function getDocuments(query) {
  if (query === void 0) {
    query = {};
  }

  return axios({
    url: config.apiBase + "/documents",
    method: 'GET',
    params: query
  });
}

function downloadDocument(id, provider) {
  return axios({
    url: config.apiBase + "/documents/" + id,
    method: 'GET',
    headers: {
      Accept: 'application/pdf'
    },
    responseType: 'blob',
    params: {
      provider: provider
    }
  });
}