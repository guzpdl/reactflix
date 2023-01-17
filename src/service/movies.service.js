import InitAxios from "./initAxios.service";

const api_key = process.env.REACT_APP_API_KEY_MOVIES;

class MoviesAxios extends InitAxios {
  constructor() {
    super("movie/");
  }

  movies() {
    return this.axios
      .get(`popular?api_key=${api_key}&language=en-US`)
      .then((response) => response.data);
  }

  topRatedMovies() {
    return this.axios
      .get(`top_rated?api_key=${api_key}&language=en-US`)
      .then((response) => response.data);
  }

  movieById(id) {
    return this.axios
      .get(`${id}?api_key=${api_key}&language=en-US&append_to_response=videos`)
      .then((response) => response.data);
  }
}

export default MoviesAxios;
