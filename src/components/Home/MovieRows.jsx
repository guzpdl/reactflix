import React from "react";
import { Container, Image, Card } from "react-bootstrap";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./MovieRows.css";

const MovieRows = ({ topRatedMovies }) => {
  return (
    <div className="px-5 pt-1">
      <h2 className="text-white-50 square border-bottom">Top rated movies</h2>
      <Container className="container-movierows">
        <Swiper
          className="mySwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
        >
          {topRatedMovies.map((topRatedMovie, index) => {
            return (
              <SwiperSlide key={index} className="poster-movies">
                <Card className="bg-dark">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/original${topRatedMovie.poster_path}`}
                  />
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default MovieRows;
