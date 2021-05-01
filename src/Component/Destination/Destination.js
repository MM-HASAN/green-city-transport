import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Destination.css";

const Destination = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <h3> Green City Transport</h3>
            <div className="search-area">
              <p>pick form</p>
              <input type="text"></input>
              <p>pick to</p>
              <input type="text" />
            </div>
          </Col>
          <Col md={8} className="map">
            <div id="map"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
