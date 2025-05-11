import axios from "axios";

export const api = axios.create({
  baseURL: "https://bbgame-api-wine.vercel.pp",
  timeout: 2000,
  headers: { "Content-Type": "application/json" },
});
