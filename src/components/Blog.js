import React, { Component } from 'react';
import moment from 'moment';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import BlogDataService from '../api/BlogDataService.js';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      body: '',
      comment: '',
    };
  }

  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }

    BlogDataService.retrieveBlogById(this.state.id).then((response) =>
      this.setState({
        body: response.data.body,
        comment: response.data.comment,
      })
    );
  }

  onSubmit = (values) => {
    let blog = { body: values.body, comment: values.comment };

    if (this.state.id === '-1') {
      BlogDataService.createBlog(blog)
        .then(() => {
          this.props.history.push('/blogs');
        })
        .catch((error) => console.log(error));
    } else {
      BlogDataService.updateBlog(this.state.id, blog)
        .then(() => {
          this.props.history.push('/blogs');
        })
        .catch((error) => console.log(error));
    }
  };

  validate = (values) => {
    let errors = {};
    if (!values.body) {
      errors.body = 'Enter a body';
    } else if (values.body.length < 4) {
      errors.body = 'Body should have at least 4 characters ';
    }
    return errors;
  };

  render() {
    let { body, title } = this.state;
    return (
      <div className='custom-main'>
        <h2>Blog {this.state.id}</h2>
        <Formik
          initialValues={{ body, title }}
          onSubmit={this.onSubmit}
          validate={this.validate}
          validateOnChange={false}
          enableReinitialize={true}
        >
          {(props) => (
            <Form>
              <ErrorMessage name='body' component='div' />
              <ErrorMessage name='title' component='div' />
              <fieldset>
                <label>Body</label>
                <Field type='text' id='body' name='body'></Field>
              </fieldset>
              <fieldset>
                <label>Comment</label>
                <Field type='text' id='title' name='title'></Field>
              </fieldset>
              <button>Save</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Blog;
