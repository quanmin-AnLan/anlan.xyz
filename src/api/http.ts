import axios from 'axios';
import QS from 'qs';
axios.defaults.baseURL = 'http://www.python-spider.com';
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.response.use((res) => {
    if (res.status === 200) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
);

export const get = (url: string, params: object) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err.data);
    });
  });
};

export const post = (url: string, params: object = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params)).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err.data);
    });
  });
};
