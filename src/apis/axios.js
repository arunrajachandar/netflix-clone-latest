import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default instance;
