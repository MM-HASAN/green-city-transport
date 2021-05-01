import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MotorFrame from "./images/Frame.png";
import CarFrame from "./images/Frame-1.png";
import BusFrame from "./images/Frame-2.png";
import TrainFrame from "./images/Group.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container fluid className="homeStyle">
      <div className="section-padding header">
        <Row>
          <Col md={4}>
            {" "}
            <h1 className="logo"> green city transport </h1>
          </Col>
          <Col md={8}>
            {" "}
            <div className="homeNav">
              <nav>
                <ul>
                  <li>
                    <a href="Home">Home</a>
                  </li>
                  <li>
                    <a href="Destination">Destination</a>
                  </li>
                  <li>
                    <a href="Blog">Blog</a>
                  </li>
                  <li>
                    <a href="Contact">Contact</a>
                  </li>
                  <li>
                    <a href="LogIn">LogIn</a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </div>

      <div className="transport section-padding">
        <Row>
          <Col md={3}>
            <div className="singleRide">
              <img src={MotorFrame} alt="motorRide"></img>
              <Button variant="contained" color="secondary">
                <Link to="/destination">Bike</Link>
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <div className="singleRide">
              <img src={CarFrame} alt="CarRide"></img>
              <Button variant="contained" color="secondary">
                <Link to="/destination">Car</Link>
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <div className="singleRide">
              <img src={BusFrame} alt="BusRide"></img>
              <Button variant="contained" color="secondary">
                <Link to="/destination">Bus</Link>
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <div className="singleRide">
              <img src={TrainFrame} alt="TrainRide"></img>
              <Button variant="contained" color="secondary">
                <Link to="/destination">Train</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
