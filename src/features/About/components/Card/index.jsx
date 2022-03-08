import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import people from "../data";
import "./AboutCard.scss";

function AboutCard(props) {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <main>
      <section className="about-container">
        <div className="title my-3">
          <h2>About Us</h2>
        </div>
        <article className="review mb-4">
          <div className="image-container">
            <img src={image} alt={name} className="person-img" />
          </div>

          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>

          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default AboutCard;
