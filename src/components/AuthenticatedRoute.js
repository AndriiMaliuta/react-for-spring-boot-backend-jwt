import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthService from '../services/AuthService.js';

export class AuthenticatedRoute extends Component {
  render() {
    if (AuthService.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to='/login' />;
    }
    return <div></div>;
  }
}

export default AuthenticatedRoute;
