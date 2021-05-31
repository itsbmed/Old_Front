import axios from "axios";
import Vue from "vue";
axios.defaults.baseURL = "http://localhost:3030/api/v1";
axios.interceptors.request.use((config) => {
  return config;
});
Vue.prototype.$http = axios;

export default axios;
