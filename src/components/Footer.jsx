import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="text-white bg-dark">
      <Container>
        <Row>
          <p className="mt-3 text-center">
            &copy; {new Date().getFullYear()} Developed by Guzmán Ponce de León
            using the The Movie Database API{" "}
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
