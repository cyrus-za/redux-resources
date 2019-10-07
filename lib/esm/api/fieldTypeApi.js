import axios from 'axios';
import config from '../config';
export var fieldTypeApi = {
  getFieldTypes: getFieldTypes
};

function getFieldTypes(query) {
  if (query === void 0) {
    query = {};
  }

  return axios({
    url: config.apiBase + "/field_types",
    method: 'GET',
    params: query
  });
}