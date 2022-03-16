import React, { useRef, useState } from "react";
import { FaTimes, FaCloudUploadAlt } from "react-icons/fa";
import "./Input.scss";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

ScanInput.propTypes = {};

function ScanInput(props) {
  //==========HOOK================//
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  //==========HANDLE EVNETS================//
  const handleChange = () => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };
    const img = fileInputRef.current.files[0];
    reader.readAsDataURL(img);
    setFileName(img.name);
  };

  const removeFile = () => {
    setFile(null);
    setFileName("");
    fileInputRef.current.value = "";
  };

  return (
    <div className="input-scan">
      <div className="container">
        <div className={file ? "wrapper active" : "wrapper"}>
          <div className="wrapper__image">
            <img src={file} alt={file} />
          </div>
          <div className="wrapper__content">
            <div className="wrapper__icon">
              <FaCloudUploadAlt />
            </div>
            <div className="wrapper__text">No file chosen, yet!</div>
          </div>
          <div id="cancel-btn" onClick={removeFile}>
            <FaTimes />
          </div>
          <div className="file-name">
            {fileName ? fileName : "File name here"}
          </div>
        </div>
        <button id="custom-btn" onClick={() => fileInputRef.current.click()}>
          Choose a file
        </button>
        <input
          id="default-btn"
          type="file"
          onChange={handleChange}
          ref={fileInputRef}
          hidden
        />
      </div>
    </div>
  );
}

export default ScanInput;
