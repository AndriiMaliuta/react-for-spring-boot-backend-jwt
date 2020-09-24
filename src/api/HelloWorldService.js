import axios from 'axios';

class HelloWorldService {
  execute() {
    let username = 'anma';
    let password = 'anma';
    let basicAuthHeader = 'Basic ' + window.btoa(`${username}:${password}`);

    axios.get('http://localhost:8080/api/v1/blogs', {
      headers: { Authorization: basicAuthHeader },
    });

    return axios.get('http://localhost:8080/api/v1/blogs', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbm1hIiwiZXhwIjoxNjAwNjk3NzQ1LCJpYXQiOjE2MDA2OTQxNDV9.zvm6WmNmFFsSmvSgZgNUqfPvZEYRa6P7C9egDA6J6Is',
      },
    });
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.log(error));

    // axios
    //   .get('https://pokeapi.co/api/v2/pokemon/ditto')
    //   .then((response) => console.log(response.data));
  }
}

export default new HelloWorldService();
