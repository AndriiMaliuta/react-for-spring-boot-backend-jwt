import axios from 'axios';
import { API_URL } from '../components/common/Constants.js';

export const USER_NAME = 'authenticatedUser';

class AuthService {
  executeBasicAuth(username, password) {
    return axios.get(`${API_URL}/basic-auth`, {
      headers: {
        Authorization: this.createBasicAuthHeader(username, password),
      },
    });
  }

  executeJWTauth(username, password) {
    return axios.post(`${API_URL}/auth`, { username, password });
  }

  createBasicAuthHeader(username, password) {
    return 'Basic ' + window.btoa(`${username}:${password}`);
  }

  createJWTtoken(jwt) {
    return `Bearer ${jwt}`;
  }

  registerSuccessfulLogin(username, password) {
    let basicAuthHeader = this.createBasicAuthHeader(username, password);
    sessionStorage.setItem(USER_NAME, username);
    this.setupAxiosInterceptors(basicAuthHeader);
  }

  registerSuccessfulLoginForJWT(username, jwt) {
    sessionStorage.setItem(USER_NAME, username);
    this.setupAxiosInterceptors(this.createJWTtoken(jwt));
  }

  registerSuccessfulLogout() {
    sessionStorage.removeItem(USER_NAME);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME);
    if (user == null) return false;
    return true;
  }

  getLoggedInUser() {
    let user = sessionStorage.getItem(USER_NAME);
    if (user === null) return '';
    return user;
  }

  //   BASIC
  // setupAxiosInterceptors(basicAuthHeader) {

  //   axios.interceptors.request.use((config) => {
  //     if (this.isUserLoggedIn()) {
  //       config.headers.authorization = basicAuthHeader;
  //     }
  //     return config;
  //   });

  setupAxiosInterceptors(jwt) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = jwt;
      }
      return config;
    });
  }
}

export default new AuthService();
