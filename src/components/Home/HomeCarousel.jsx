import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "./HomeCarousel.css";

const HomeCarousel = ({ popularMovies }) => {
  console.log(popularMovies);

  return (
    <div className="px-5 pt-1">
      <h2 className="text-white-50 square border-bottom">Trending Movies</h2>
      <Carousel className="carousel ">
        {popularMovies.map((popularMovie, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                className="carousel-image d-block w-100 square rounded-1"
                src={`https://image.tmdb.org/t/p/original${popularMovie.backdrop_path}`}
                alt={index}
              />
              <Carousel.Caption>
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
