import axios from "axios";

const crudcrudInstance = axios.create({
  baseURL: "https://crudcrud.com/api/e3d121fc648b49e497ac091b595ddd23",
});

export default crudcrudInstance;
