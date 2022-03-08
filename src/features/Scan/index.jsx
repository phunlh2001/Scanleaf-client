import React, { useEffect } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Images from "../../constants/images";
import ScanInput from "./components/InputForm";

Scan.propTypes = {};

function Scan(props) {
  return (
    <div className="scan-mainpage">
      <Header />
      <Banner title="Upload your plant photos" backgroundUrl={Images.SCAN_BG} />
      <ScanInput />
      <Footer />
    </div>
  );
}

export default Scan;
