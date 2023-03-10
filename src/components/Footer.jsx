import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="text-white px-5 pt-1 ">
      <Container className="square border-top">
        <Row>
          <p className="mt-3 text-center ">
            &copy; {new Date().getFullYear()} Developed by Guzmán Ponce de León
            using the TMD API{" "}
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
