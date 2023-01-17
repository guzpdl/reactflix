import React from "react";
import { Card } from "react-bootstrap";
import YouTube from "react-youtube";
import "./DetailsCard.css";

const DetailsCard = ({ movieInfo }) => {
  const videoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
    },
  };

  let videoData = movieInfo.videos;
  console.log(videoData?.results?.[0]);

  return (
    <Card className="card-div bg-dark text-white">
      <YouTube
        videoId={videoData?.results?.[0]?.key}
        opts={videoOptions}
        className="video-iframe"
      />

      {/* <Card.Img
        src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`}
        alt="movie image"
      /> */}
      <Card.ImgOverlay className="d-flex flex-column justify-content-end w-50">
        <Card.Title>{movieInfo.original_title}</Card.Title>
        <Card.Text>{movieInfo.overview}</Card.Text>
        <Card.Text>Popularity: {movieInfo.popularity}</Card.Text>
        <Card.Text>Release date: {movieInfo.release_date}</Card.Text>
        <Card.Text>Duration: {movieInfo.runtime} minutes</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default DetailsCard;
