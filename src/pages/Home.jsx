import React, { useState } from "react";
import { useEffect } from "react";
import MoviesAxios from "../service/popularMovies.service";
import HomeCarousel from "../components/Home/HomeCarousel";

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

  return <HomeCarousel popularMovies={popularMovies} />;
};

export default Home;
