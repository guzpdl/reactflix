import React, { useState } from "react";
import { useEffect } from "react";
import MoviesAxios from "../service/popularMovies.service";
import HomeCarousel from "../components/Home/HomeCarousel";
import { Container } from "react-bootstrap";
import MovieRows from "../components/Home/MovieRows";

const Home = () => {
  const popularMoviesAxios = new MoviesAxios();

  const [popularMovies, setPopularMovies] = useState([]);

  const getPopularMovies = () => {
    popularMoviesAxios
      .popularMovies()
      .then((popularMoviesData) => {
        setPopularMovies(popularMoviesData.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <Container>
      <HomeCarousel popularMovies={popularMovies} />
      <MovieRows />
    </Container>
  );
};

export default Home;
