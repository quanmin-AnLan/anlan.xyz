import axios from 'axios';
import QS from 'qs';
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.response.use((res) => {
    if (res.status === 200 || res.status === 202) {
      return Promise.resolve(res);
    } else {
      return Promise.reject(res);
    }
  },
);

const ad = axios.create({
  baseURL: '/api',
});

export const adGet = (url: string, params: object) => {
  return new Promise((resolve, reject) => {
    ad.get(url, {
      params,
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err.data);
    });
  });
};

export const adPost = (url: string, params: object = {}) => {
  return new Promise((resolve, reject) => {
    ad.post(url, QS.stringify(params)).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err.data);
    });
  });
};

const yyx = axios.create({
  baseURL: '/yyxApi',
});

export const yyxGet = (url: string, params: object) => {
  return new Promise((resolve, reject) => {
    yyx.get(url, {
      params,
    }).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err.data);
    });
  });
};

export const yyxPost = (url: string, params: object = {}) => {
  return new Promise((resolve, reject) => {
    yyx.post(url, QS.stringify(params)).then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err.data);
    });
  });
};

const anlan = axios.create({
  baseURL: "http://api.anlan.xyz/",
});

export const anlanGet = (url: string, params: object) => {
  return new Promise((resolve, reject) => {
    anlan
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  })
}