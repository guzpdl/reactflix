import React, { useState, useEffect } from "react";
import MoviesAxios from "../service/movies.service";
import HomeCarousel from "../components/Home/HomeCarousel";
import { Container } from "react-bootstrap";
import MovieRows from "../components/Home/MovieRows";
import TvShowRows from "../components/Home/TvShowRows";

const Home = () => {
  const moviesAxios = new MoviesAxios();

  const [movies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

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

  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  return (
    <Container>
      <HomeCarousel movies={movies} />
      <MovieRows movieData={topRatedMovies} />
      {/* <MovieRows movieData={topRatedMovies} /> */}
      <TvShowRows />
    </Container>
  );
};

export default Home;
