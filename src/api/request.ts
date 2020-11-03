import axios from 'axios';

const METHODS = ['GET', 'DELETE', 'HEAD', 'POST', 'PUT', 'PATCH'];
const baseURL = '';

const sidedRequest = (opts: any) => {
  const headers = {
    'Content-Type': 'application/json',
    ...opts.headers,
  };

  return axios({ headers, baseURL, ...opts });
};

const stubRequest = (opts: any) => {
  const { stubData } = opts;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: stubData });
    }, 1000);
  });
};

const doRequest = (opts: any) => {
  if (opts.stubData) {
    return stubRequest(opts);
  }

  return sidedRequest(opts);
};

const request = METHODS.reduce((req: { [key: string]: any }, method: string) => {
  req[method] = (opts: any) => doRequest({ ...opts, method });

  return req;
}, {});

export default request;
