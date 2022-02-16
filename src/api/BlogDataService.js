import axios from 'axios';
import { API_URL } from '../components/common/Constants.js';

class BlogDataService {
  retrieveAllBlogs() {
    return axios.get(
      `${API_URL}/api/v1/blogs`
      // , {
      //   headers: {
      //     Authorization:
      //       'Bearer TOKEN',
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
    //       'Bearer eyJhbGciOiJIUzI1rteNiJ9.eyJzdWIiOiJhbmh1hIiwiZXhwIjoxNjAwNzA4NDhtXQiOjE2MDA3MDdQ4NTd9.CgNIeRo2l3dsMp_QDtmHZkGwxo3OnFh0q5ML2S8Cm2M',
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
