import React, { Component } from 'react';
import AuthService from '../services/AuthService.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'anma',
      password: '',
      loginFailed: false,
      loginSuccessful: false,
    };
  }

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginCLicked = () => {
    // ====== Hardcoded
    // if (this.state.username === 'anma' && this.state.password === 'anma') {
    //   AuthService.registerSUccessfulLogin(
    //     this.state.username,
    //     this.state.password
    //   );
    //   this.props.history.push(`/welcome/${this.state.username}`);
    //   this.setState({ loginSuccessful: true });
    //   this.setState({ loginFailed: false });
    // } else {
    //   this.setState({ loginSuccessful: false });
    //   this.setState({ loginFailed: true });
    // }
    // ======== Basic Auth
    // AuthService.executeBasicAuth(this.state.username, this.state.password)
    //   .then(() => {
    //     AuthService.registerSuccessfulLogin(
    //       this.state.username,
    //       this.state.password
    //     );
    //     this.props.history.push(`/welcome/${this.state.username}`);
    //   })
    //   .catch((error) => {
    //     this.setState({ loginSuccessful: false });
    //     this.setState({ loginFailed: true });
    //   });

    AuthService.executeJWTauth(this.state.username, this.state.password)
      .then((response) => {
        AuthService.registerSuccessfulLoginForJWT(
          this.state.username,
          response.data.jwt
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch((error) => {
        this.setState({ loginSuccessful: false });
        this.setState({ loginFailed: true });
      });
  };

  render() {
    return (
      <div className='custom-main'>
        {this.state.loginFailed && (
          <div className='error-message'>Invalid Credentials</div>
        )}
        User Name:
        <input
          type='text'
          id='username'
          name='username'
          value={this.state.username}
          onChange={this.handleFormChange}
        />
        <br />
        Password:
        <input
          type='password'
          id='password'
          name='password'
          value={this.state.password}
          onChange={this.handleFormChange}
        />
        <br />
        <button onClick={this.loginCLicked}>Login</button>
      </div>
    );
  }
}
