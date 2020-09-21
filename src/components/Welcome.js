import React, { Component } from 'react';
import ListBlogs from './ListBlogs';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h2>Welcome, {this.props.match.params.name} to the Blogs App</h2>
        <p>
          You can find the Blogs list <Link to='/blogs'>here</Link>
        </p>
      </div>
    );
  }
}
