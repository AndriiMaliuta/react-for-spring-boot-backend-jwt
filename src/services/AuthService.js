class AuthService {
  registerSUccessfulLogin(username, password) {
    sessionStorage.setItem('authenticatedUser', username);
  }
  registerSuccessfulLogout() {
    sessionStorage.removeItem('authenticatedUser');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user == null) return false;
    return true;
  }
}

export default new AuthService();
