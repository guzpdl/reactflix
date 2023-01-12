import React from "react";
import { Carousel, Container, Image, Row } from "react-bootstrap";

const HomeCarousel = ({ popularMovies }) => {
  console.log(popularMovies);

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://picsum.photos/500/300"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://picsum.photos/500/300"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://picsum.photos/500/300"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default HomeCarousel;
