import React from "react";
import Images from "../../constants/images";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

Contact.propTypes = {};

function Contact(props) {
  return (
    <div>
      <Header />
      <Banner title="Give us your feedback" backgroundUrl={Images.CONTACT_BG} />
      <Footer />
    </div>
  );
}

export default Contact;
