import axios from "axios";

export const Api = axios.create({
  baseURL: "https://2194-105-160-49-233.ngrok-free.app/api",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
  },
});
