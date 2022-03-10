import React, { useRef, useState } from "react";
import "./Input.scss";
import { FaTimes, FaCloudUploadAlt } from "react-icons/fa";
// import { Button } from "reactstrap";

ScanInput.propTypes = {};

function ScanInput(props) {
  const { imgProp } = props;

  return (
    <div className="input-scan">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper__image">{imgProp}</div>
          <div className="wrapper__content">
            <div className="wrapper__icon">
              <FaCloudUploadAlt />
            </div>
            <div className="wrapper__text">No file chosen, yet!</div>
          </div>
          <div id="cancel-btn">
            <FaTimes />
          </div>
          <div className="file-name">File name here</div>
        </div>
        <button id="custom-btn">Choose a file</button>
        <input id="default-btn" type="file" hidden />
      </div>
    </div>
  );
}

export default ScanInput;
