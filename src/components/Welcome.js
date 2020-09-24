import React, { Component } from 'react';
import ListBlogs from './ListBlogs';
import { Link } from 'react-router-dom';
import HelloWorldService from '../api/HelloWorldService.js';
import { ErrorMessage } from 'formik';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: '',
      errorMessage: '',
    };
  }
  retrieveWelcomeMEssage = () => {
    HelloWorldService.execute()
      .then((response) => this.setState({ welcomeMessage: response.data }))
      .catch((error) => console.log(error));
  };

  handleError = (error) => {
    let errorMessage = '';
    if (error.message) {
      errorMessage += error.message;
    }
    if (error.response && error.response.data) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  };

  render() {
    return (
      <div className='custom-main'>
        <div>
          <h2>Welcome, {this.props.match.params.name} to the Blogs App</h2>
          <p>
            You can find the Blogs list <Link to='/blogs'>here</Link>
          </p>
        </div>
        <div>
          Click <button onClick={this.retrieveWelcomeMEssage}>here</button> to
          get a Welcome message.
        </div>
        <div>{this.state.welcomeMessage}</div>
      </div>
    );
  }
}
