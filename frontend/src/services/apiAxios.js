import axios from "axios";

const api = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
