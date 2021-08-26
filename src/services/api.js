import axios from "axios";

export default function api() {
  const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
  });

  return instance;
};