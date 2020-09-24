import axios from 'axios';
import { API_URL } from '../components/common/Constants.js';

class BlogDataService {
  retrieveAllBlogs() {
    return axios.get(
      `${API_URL}/api/v1/blogs`
      // , {
      //   headers: {
      //     Authorization:
      //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbm1hIiwiZXhwIjoxNjAwODcyOTE0LCJpYXQiOjE2MDA4NjkzMTR9.dvGbs9p2YIhUM3ybVQbrjPlIGyIO6vDKrSMTxGqBNaw',
      //   },
    );
    // return axios.post('http://localhost:8080/auth', {
    //   username: 'anma',
    //   password: 'anma',
    // });
    // return axios.get('http://localhost:8080/api/v1/blogs', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization:
    //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbm1hIiwiZXhwIjoxNjAwNzA4NDU3LCJpYXQiOjE2MDA3MDQ4NTd9.CgNIeRo2l3dsMp_QDtmHZkGwxo3OnFh0q5ML2S8Cm2M',
    //   },
    // });
  }

  retrieveBlogById(id) {
    return axios.get(`http://localhost:8080/api/v1/blogs/${id}`);
  }

  deleteBlog(id) {
    return axios.delete(`http://localhost:8080/api/v1/blogs/${id}`, {
      crossdomain: true,
    });
  }

  updateBlog(id, blog) {
    return axios.put(`http://localhost:8080/api/v1/blogs/${id}`, blog);
  }

  createBlog(blog) {
    return axios.post('http://localhost:8080/api/v1/blogs', blog);
  }
}

export default new BlogDataService();
