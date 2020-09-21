import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthService from '../../services/AuthService.js';

const Header = () => {
  const isUserLoggedIn = AuthService.isUserLoggedIn();
  return (
    <div>
      {isUserLoggedIn && (
        <span>
          <Link className='my-link' to='/welcome'>
            Home
          </Link>
        </span>
      )}

      {!isUserLoggedIn && (
        <span>
          <Link className='my-link' to='/'>
            Login
          </Link>
        </span>
      )}

      {isUserLoggedIn && (
        <span>
          <Link to='/logout' onClick={AuthService.registerSuccessfulLogout}>
            Logout
          </Link>
        </span>
      )}
      <hr />
    </div>
  );
};

export default withRouter(Header);
