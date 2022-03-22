import React from "react";
import { Form, Input, Button } from "reactstrap";
import { FaUser, FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import MessageIcon from "@mui/icons-material/Message";
import "./ContactForm.scss";

function ContactForm(props) {
  return (
    <div className="container-contact">
      <div className="wrapper-contact">
        <header>Send Us Your Message</header>
        <Form>
          <div className="dbl-field">
            <div className="field">
              <Input type="text" name="name" placeholder="Enter your name" />
              <FaUser />
            </div>
            <div className="field">
              <Input type="text" name="email" placeholder="Enter your email" />
              <FaEnvelope />
            </div>
          </div>
          <div className="dbl-field">
            <div className="field">
              <Input type="text" name="phone" placeholder="Enter your phone" />
              <FaPhoneAlt />
            </div>
            <div className="field">
              <Input
                type="text"
                name="website"
                placeholder="Enter your website"
              />
              <FaGlobe />
            </div>
          </div>
          <div className="message">
            <Input
              placeholder="Write your message"
              name="message"
              type="textarea"
            />
            <MessageIcon className="material-icons" />
          </div>
          <div className="button-area">
            <Button color="primary" type="button">
              Send Message
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
