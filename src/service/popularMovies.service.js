import InitAxios from "./initAxios.service";

const api_key = process.env.REACT_APP_API_KEY_MOVIES;

class MoviesAxios extends InitAxios {
  constructor() {
    super("movie/");
  }

  popularMovies() {
    return this.axios
      .get(`popular?api_key=${api_key}&language=en-US`)
      .then((response) => response.data);
  }
}

export default MoviesAxios;
