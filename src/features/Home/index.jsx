import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MainPage from "./Components/MainPage";

function Home(props) {
  return (
    <div>
      <Header />
      <Banner title="Welcome to the Scanleaf" />
      <MainPage />
      <Footer />
    </div>
  );
}

export default Home;
