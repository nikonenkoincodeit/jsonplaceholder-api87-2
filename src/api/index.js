import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/";
axios.defaults.baseURL = BASE_URL;
export function getData(p) {
  return axios.get(p).then(({ data }) => {
    return data;
  });
}
