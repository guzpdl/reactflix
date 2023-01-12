import axios from "axios";

class InitAxios {
  constructor(path) {
    this.axios = axios.create({
      baseURL: `https://api.themoviedb.org/3/${path}`,
    });
  }
}

export default InitAxios;
