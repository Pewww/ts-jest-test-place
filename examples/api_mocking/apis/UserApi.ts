import axios from 'axios';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

class UserApi {
  getUser(id: string) {
    return axios.get(`${API_ENDPOINT}/users/${id}/`);
  }
}

export default UserApi;
