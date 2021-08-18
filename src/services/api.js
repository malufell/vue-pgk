import axios from "axios";

export default class ApiService {
    constructor(id) {
      this.resource = 'https://jsonplaceholder.typicode.com/posts';
    };
  
   lista() {
    return axios.get(this.resource);
  };

   busca(id) {
    return axios.get(`${this.resource}/${id}`)
   } 
};