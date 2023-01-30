import React, { useState, useEffect } from "react";
import MoviesAxios from "../service/movies.service";
import HomeCarousel from "../components/Home/HomeCarousel";
import { Container } from "react-bootstrap";
import MovieRows from "../components/Home/MovieRows";
import TvShowRows from "../components/Home/TvShowRows";
import TvShowsAxios from "../service/tvShows.service";
import DiscoverAxios from "../service/genres.service";

const Home = () => {
  const moviesAxios = new MoviesAxios();
  const tvShowsAxios = new TvShowsAxios();
  const discoverAxios = new DiscoverAxios();

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [musicalMovies, setMusicalMovies] = useState([]);

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

  const getTopRatedTvShows = () => {
    tvShowsAxios
      .topRatedTvShows()
      .then((tvShowsData) => {
        setTopRatedTvShows(tvShowsData.results);
      })
      .catch((error) => console.log(error));
  };

  const getDramaMovies = () => {
    discoverAxios
      .movieGenre(18)
      .then((documentaryMovieData) => {
        setDramaMovies(documentaryMovieData.results);
      })
      .catch((error) => console.log(error));
  };

  const getMusicalMovies = () => {
    discoverAxios
      .movieGenre(10402)
      .then((musicalMovieData) => {
        setMusicalMovies(musicalMovieData.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
    getTopRatedTvShows();
    getDramaMovies();
    getMusicalMovies();
  }, []);

  return (
    <Container>
      <HomeCarousel movies={popularMovies} />
      <MovieRows movieData={topRatedMovies} title={"Top rated movies"} />
      <MovieRows movieData={dramaMovies} title={"Drama"} />
      <MovieRows movieData={musicalMovies} title={"Musical"} />
      <TvShowRows tvShowData={topRatedTvShows} title={"Top rated TV shows"} />
    </Container>
  );
};

export default Home;
