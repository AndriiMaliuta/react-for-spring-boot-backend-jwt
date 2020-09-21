import React, { Component } from 'react';

export default class ListBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        { id: 1, body: 'Some body of the blog' },
        { id: 2, body: 'Some other blog with the twxt...' },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Blogs List</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Blog</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {this.state.blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.id}</td>
                  <td>{blog.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
