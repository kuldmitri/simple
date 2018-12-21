import { fetch } from './fetch';

const login = (body) => {
  return fetch('post', '/publicRouts/login', body);
};



export default {
  login,
};
