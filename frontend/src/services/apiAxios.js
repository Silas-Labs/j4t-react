import axios from "axios";

export const Api = axios.create({
  baseURL: "https://cc1b-105-160-53-84.ngrok-free.app/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
