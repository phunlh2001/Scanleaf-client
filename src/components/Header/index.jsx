import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Col, Container, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.scss";
import ImageAvatars from "./components/Avatar";
import { logout } from "../../redux/actions/UserAction";

function Header() {
  const navigate = useNavigate();

  //============REDUX============//
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserLogin); //global state
  const { userInfo } = user; //destructuring

  //============Handle Events============//
  const handleClick = () => {
    console.log("logout");
    dispatch(logout());
  };

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
          {userInfo ? (
            <Col xs="auto" className="btn d-flex justify-content-end fw-bold">
              <ImageAvatars />
              <Button
                color="secondary"
                size="sm"
                className="px-4"
                onClick={handleClick}
              >
                Logout
              </Button>
            </Col>
          ) : (
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
          )}
        </Row>
      </Container>
    </header>
  );
}

export default Header;
