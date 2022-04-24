const axios = require("axios");

export const mainBackend = axios.create({
  baseURL: 'http://3.232.244.22/',
});
