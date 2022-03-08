import React from "react";
import Images from "../../constants/images";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutCard from "./components/Card";

About.propTypes = {};

function About(props) {
  return (
    <div>
      <Header />
      <Banner
        title="Contributors to the site"
        backgroundUrl={Images.ABOUT_BG}
      />
      <AboutCard />
      <Footer />
    </div>
  );
}

export default About;
