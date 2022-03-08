import React from "react";
import "./Footer.scss";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaGooglePlusSquare,
  FaLongArrowAltRight,
  FaCopyright,
} from "react-icons/fa";

function Footer(props) {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col md={6} className="footer__content-left">
            <h3>About</h3>
            <p>
              The website is the web application to scanning all your pic
              related medical plants if you don’t know that is a medical plants.
            </p>
            <IconContext.Provider
              value={{ className: "wrap-social-icons", size: "2em" }}
            >
              <div className="social-icons">
                <span>
                  {" "}
                  <FaFacebookSquare />
                </span>
                <span>
                  {" "}
                  <FaGooglePlusSquare />
                </span>
                <span>
                  {" "}
                  <FaLinkedin />
                </span>
                <span>
                  {" "}
                  <FaGithubSquare />
                </span>
              </div>
            </IconContext.Provider>
          </Col>
          <Col md={6} className="footer__content-right">
            <h3>Quick links</h3>
            <Link to="/">
              <FaLongArrowAltRight />
              <span> Home</span>
            </Link>
            <Link to="/scan-photos">
              <FaLongArrowAltRight />
              <span> Scan</span>
            </Link>
            <Link to="/contact">
              <FaLongArrowAltRight />
              <span> Contact</span>
            </Link>
            <Link to="/about-us">
              <FaLongArrowAltRight />
              <span> About</span>
            </Link>
          </Col>
        </Row>
        <FaCopyright style={{ fontSize: "1.4em" }} /> 2022 Copyright by SE1504 -
        SWP301_Team 5
      </Container>
    </div>
  );
}

export default Footer;
