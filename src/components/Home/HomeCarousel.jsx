import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeCarousel.css";

const HomeCarousel = ({ movies }) => {
  return (
    <div className="px-5 pt-1">
      <h2 className="text-white-50 square border-bottom">Trending movies</h2>

      <Carousel className="carousel ">
        {movies.map((popularMovie, index) => {
          return (
            <Carousel.Item key={index}>
              <Link to={`/movie/${popularMovie.id}`}>
                <Image
                  className="carousel-image d-block w-100 square rounded-1"
                  src={`https://image.tmdb.org/t/p/original${popularMovie.backdrop_path}`}
                  alt={index}
                />
              </Link>
              <Carousel.Caption className="text-start">
                <h3>{popularMovie.title}</h3>
                <p>{popularMovie.overview}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
