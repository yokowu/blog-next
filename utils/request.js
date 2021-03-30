import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:9090/api" : "/api",
  timeout: 5000,
});

instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

instance.interceptors.response.use((rsp) => {
  return rsp.data;
});

export function get(url, params) {
  return instance.get(url, {
    params,
  });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function put(url, data) {
  return instance.put(url, data);
}

export function del(url) {
  return instance.delete(url);
}
