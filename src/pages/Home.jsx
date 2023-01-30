import React, { useState, useEffect } from "react";
import MoviesAxios from "../service/movies.service";
import HomeCarousel from "../components/Home/HomeCarousel";
import { Container } from "react-bootstrap";
import MovieRows from "../components/Home/MovieRows";
import TvShowRows from "../components/Home/TvShowRows";
import TvShowsAxios from "../service/tvShows.service";

const Home = () => {
  const moviesAxios = new MoviesAxios();
  const tvShowsAxios = new TvShowsAxios();

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  const getPopularMovies = () => {
    moviesAxios
      .movies()
      .then((moviesData) => {
        setPopularMovies(moviesData.results);
      })
      .catch((error) => console.log(error));
  };

  const getTopRatedMovies = () => {
    moviesAxios
      .topRatedMovies()
      .then((topRatedMoviesData) => {
        setTopRatedMovies(topRatedMoviesData.results);
      })
      .catch((error) => console.log(error));
  };

  const getPopularTvShows = () => {
    tvShowsAxios
      .popularTvShows()
      .then((tvShowsData) => {
        setPopularTvShows(tvShowsData.results);
      })
      .catch((error) => console.log(error));
  };

  const getTopRatedTvShows = () => {
    tvShowsAxios
      .topRatedTvShows()
      .then((tvShowsData) => {
        setTopRatedTvShows(tvShowsData.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
    getPopularTvShows();
    getTopRatedTvShows();
  }, []);

  console.log(popularTvShows);

  return (
    <Container>
      <HomeCarousel movies={popularMovies} />
      <MovieRows movieData={topRatedMovies} title={"Top rated movies"} />
      {/* <MovieRows movieData={topRatedMovies} /> */}
      <TvShowRows tvShowData={topRatedTvShows} title={"Top rated TV shows"} />
      <TvShowRows tvShowData={popularTvShows} title={"Popular TV shows"} />
    </Container>
  );
};

export default Home;
