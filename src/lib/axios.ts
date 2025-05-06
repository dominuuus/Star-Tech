import axios from "axios";

export const api = axios.create({
  baseURL: "https://bbgame-api.vercel.app",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});
