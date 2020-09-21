import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';
import ListBlogs from './ListBlogs';
import Header from './common/Header';
import Footer from './common/Footer';
import Logout from './Logout';
import AuthenticatedRoute from './AuthenticatedRoute';

export default class BlogsApp extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path='/' component={Login} />
              <AuthenticatedRoute exact path='/welcome' component={Welcome} />
              <AuthenticatedRoute
                exact
                path='/welcome/:name'
                component={Welcome}
              />
              <AuthenticatedRoute exact path='/blogs' component={ListBlogs} />
              <Route exact path='/logout' component={Logout} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </>
        </Router>
      </div>
    );
  }
}
