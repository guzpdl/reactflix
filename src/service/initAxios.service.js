import axios from "axios";

class InitAxios {
  constructor() {
    this.axios = axios.create({
      baseURL: `https://api.themoviedb.org/3/`,
    });
  }
}

export default InitAxios;
