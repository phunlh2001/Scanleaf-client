import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound(props) {
  return (
    <div className="not-found">
      <div id="error-page">
        <div className="content">
          <h2 className="content__header" data-text="404">
            404
          </h2>
          <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken, report a problem.
          </p>
          <div className="btns">
            <Link to="/">Return home</Link>
            <Link to="/Contact">Report problem</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
