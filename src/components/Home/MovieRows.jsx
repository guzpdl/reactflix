import React from "react";
import { Container, Image } from "react-bootstrap";
import "./MovieRows.css";

const MovieRows = ({ topRatedMovies }) => {
  return (
    <div className="px-5 pt-1">
      <h2 className="text-white-50 square border-bottom">Latest movies</h2>
      <Container className="container-movierows">
        {topRatedMovies.map((topRatedMovie, index) => {
          return (
            <Image
              className="poster-movies"
              style={{ width: "16rem" }}
              alt={index}
              key={index}
              src={`https://image.tmdb.org/t/p/original${topRatedMovie.poster_path}`}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default MovieRows;
