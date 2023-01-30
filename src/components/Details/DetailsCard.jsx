import React from "react";
import { Card } from "react-bootstrap";
import YouTube from "react-youtube";
import "./DetailsCard.css";

const DetailsCard = ({ selectedInfo, param }) => {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
      disablekb: 1,
      fs: 0,
    },
  };

  let videoData = selectedInfo.videos;

  console.log(selectedInfo);

  return (
    <Card className="card-div bg-dark text-white">
      {videoData?.results?.length !== 0 ? (
        <YouTube
          videoId={videoData?.results?.[0]?.key}
          host="https://www.youtube.com"
          opts={videoOptions}
          className="video-iframe"
        />
      ) : (
        <Card.Img
          src={
            selectedInfo?.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/original${selectedInfo.backdrop_path}`
              : `https://image.tmdb.org/t/p/original${selectedInfo.poster_path}`
          }
          alt="movie image"
          fluid
        />
      )}

      <Card.ImgOverlay className="d-flex flex-column justify-content-end w-50">
        {param === "movie" ? (
          <Card.Title>{selectedInfo.original_title}</Card.Title>
        ) : (
          <Card.Title>{selectedInfo.name}</Card.Title>
        )}
        <Card.Text>{selectedInfo.overview}</Card.Text>
        <Card.Text>Rating: {selectedInfo?.vote_average?.toFixed(1)}</Card.Text>
        {param === "movie" && (
          <>
            <Card.Text>Release date: {selectedInfo.release_date}</Card.Text>
            <Card.Text>Duration: {selectedInfo.runtime} minutes</Card.Text>
          </>
        )}
        {param === "tvshow" && (
          <>
            <Card.Text>Release date: {selectedInfo.first_air_date}</Card.Text>
            <Card.Text>Seasons: {selectedInfo.number_of_seasons}</Card.Text>
            <Card.Text>Episodes: {selectedInfo.number_of_episodes}</Card.Text>
          </>
        )}
      </Card.ImgOverlay>
    </Card>
  );
};

export default DetailsCard;
