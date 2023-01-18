import InitAxios from "./initAxios.service";

const api_key = process.env.REACT_APP_API_KEY_MOVIES;

class TvShowsAxios extends InitAxios {
  constructor() {
    super("tv/");
  }

  popularTvShows() {
    return this.axios
      .get(`popular?api_key=${api_key}&language=en-US&page=1`)
      .then((response) => response.data);
  }

  topRatedTvShows() {
    return this.axios
      .get(`top_rated?api_key=${api_key}&language=en-US&page=1`)
      .then((response) => response.data);
  }
}

export default TvShowsAxios;
