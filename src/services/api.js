import axios from "axios";

export default class ApiService {
    constructor(id) {
      this.resource = 'https://jsonplaceholder.typicode.com/posts';
    };
  
   getPosts() {
    return axios.get(this.resource);
  };

   getPostId(id) {
    return axios.get(`${this.resource}/${id}`)
   };
};