import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesAxios from "../service/movies.service";
import { Container } from "react-bootstrap";
import DetailsCard from "../components/Details/DetailsCard";

const Details = () => {
  const moviesAxios = new MoviesAxios();
  let { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  const getMovieById = async () => {
    moviesAxios
      .movieById(id)
      .then((movieData) => {
        setMovieInfo(movieData);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovieById();
  }, []);

  return (
    <Container style={{ minHeight: "85vh" }}>
      <div className="px-5 pt-1 " style={{ height: "85vh" }}>
        <h1 className="text-white-50 square border-bottom">Details</h1>
        <DetailsCard movieInfo={movieInfo} />
      </div>
    </Container>
  );
};

export default Details;
