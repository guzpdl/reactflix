import InitAxios from "./initAxios.service";

const api_key = process.env.REACT_APP_API_KEY_MOVIES;

class DiscoverAxios extends InitAxios {
  constructor() {
    super("discover/");
  }

  movieGenre(genreId) {
    return this.axios
      .get(
        `movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
      )
      .then((response) => response.data);
  }

  tvShowGenre(genreId) {
    return this.axios
      .get(
        `tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genreId}&include_null_first_air_dates=false`
      )
      .then((response) => response.data);
  }
}
export default DiscoverAxios;
