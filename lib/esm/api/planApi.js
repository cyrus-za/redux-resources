import axios from 'axios';
import config from '../config';
export var planApi = {
  getPlans: getPlans
};

function getPlans(query) {
  if (query === void 0) {
    query = {};
  }

  return axios({
    url: config.apiBase + "/plans",
    method: 'GET',
    params: query
  });
}