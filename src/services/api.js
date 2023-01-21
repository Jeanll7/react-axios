import axios from "axios";

const api = axios.create({
  baseURL: "",
  // https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=
  // 7ef853c3ea72e45701f6a3c983aa4301
});

export default api;
