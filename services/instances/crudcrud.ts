import axios from "axios";

const crudcrudInstance = axios.create({
  baseURL: "https://crudcrud.com/api/",
});

export default crudcrudInstance;
