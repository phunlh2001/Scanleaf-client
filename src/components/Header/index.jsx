import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto" className="navigation justify-content-start">
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
            <NavLink to="/scan-photos">
              <span>Scan</span>
            </NavLink>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
            <NavLink to="/about-us">
              <span>About</span>
            </NavLink>
          </Col>
          <Col xs="auto" className="btn d-flex justify-content-end fw-bold">
            <Button
              color="primary"
              className="px-4"
              size="md"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              color="success"
              className="mx-3 px-4"
              size="md"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
