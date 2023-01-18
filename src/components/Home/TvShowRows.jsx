import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./MovieRows.css";
import { Link } from "react-router-dom";
import TvShowsAxios from "../../service/tvShows.service";

const TvShowRows = () => {
  const tvShowsAxios = new TvShowsAxios();

  const [tvShows, setTvShows] = useState([]);

  const getPopularTvShows = () => {
    tvShowsAxios
      .popularTvShows()
      .then((tvShowsData) => {
        setTvShows(tvShowsData.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPopularTvShows();
  }, []);

  console.log(tvShows);

  return (
    <div className="px-5 pt-1">
      <h2 className="text-white-50 square border-bottom">Popular TV shows</h2>
      <Container className="container-movierows">
        <Swiper
          className="mySwiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
        >
          {tvShows.map((tvShow, index) => {
            return (
              <SwiperSlide key={index} className="poster-movies">
                <Card className="bg-dark">
                  <Link to={`/movie/${tvShow.id}`}>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
                    />
                  </Link>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default TvShowRows;
