import React, { Component } from 'react';
import BlogDataService from '../api/BlogDataService.js';

export default class ListBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      message: null,
      // { id: 1, body: 'Some body of the blog' },
      // { id: 2, body: 'Some other blog with the twxt...' },
      // ],
    };
  }

  componentDidMount() {
    this.refreshBlogs();
  }

  handleUpdate = (id) => {
    this.props.history.push(`/blogs/${id}`);
  };

  handleCreateBlog = () => {
    this.props.history.push(`/blogs/-1`);
  };

  handleDelete = (id) => {
    BlogDataService.deleteBlog(id)
      .then((response) => {
        this.setState({ message: `Deleted blog with id=${id}` });
        this.refreshBlogs();
      })
      .catch((error) => console.log(error));
    // console.log(id);
  };

  refreshBlogs = () => {
    BlogDataService.retrieveAllBlogs()
      .then((response) => this.setState({ blogs: response.data }))
      .catch((error) => console.log(error));

    // BlogDataService.retrieveAllBlogs()
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className='custom-main'>
        {this.state.message && (
          <div className='blog-deleted-msg'>{this.state.message}</div>
        )}
        <h2>Blogs List</h2>
        <div>
          <table className='table'>
            <thead>
              <tr className='table-primary'>
                <th>Blog</th>
                <th>Body</th>
                <th>Comment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.body}</td>
                  <td>{blog.comment}</td>
                  <td>
                    <button onClick={() => this.handleUpdate(blog.id)}>
                      Update
                    </button>
                    <button onClick={() => this.handleDelete(blog.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button onClick={this.handleCreateBlog}>Create</button>
          </div>
        </div>
      </div>
    );
  }
}
