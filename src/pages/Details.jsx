import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesAxios from "../service/movies.service";
import TvShowsAxios from "../service/tvShows.service";
import { Container } from "react-bootstrap";
import DetailsCard from "../components/Details/DetailsCard";

const Details = () => {
  const moviesAxios = new MoviesAxios();
  const tvShowsAxios = new TvShowsAxios();

  let { movieOrShow, id } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);
  const [tvShowInfo, setTvShowInfo] = useState([]);

  const getMovieById = async () => {
    moviesAxios
      .movieById(id)
      .then((movieData) => {
        setMovieInfo(movieData);
      })
      .catch((error) => console.log(error));
  };
  const getTvShowById = async () => {
    tvShowsAxios
      .tvShowById(id)
      .then((tvShowData) => {
        setTvShowInfo(tvShowData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovieById();
    getTvShowById();
  }, []);

  return (
    <Container style={{ minHeight: "80vh", maxHeight: "85vh" }}>
      <div className="px-5 pt-1 " style={{ height: "85vh" }}>
        <h1 className="text-white-50 square border-bottom">Details</h1>
        {movieOrShow === "movie" ? (
          <DetailsCard selectedInfo={movieInfo} param={movieOrShow} />
        ) : (
          <DetailsCard selectedInfo={tvShowInfo} param={movieOrShow} />
        )}
      </div>
    </Container>
  );
};

export default Details;
