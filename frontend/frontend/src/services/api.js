import axios from "axios";

export const getLogs = (params) =>
  axios.get("http://localhost:5000/api/logs", { params });

export const exportCSV = () =>
  window.open("http://localhost:5000/api/logs/export");
