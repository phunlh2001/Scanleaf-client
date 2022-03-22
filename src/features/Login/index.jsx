import React, { useEffect, useState } from "react";
import LoginForm from "./components/Form";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "../../firebase.config";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./Login.scss";
import { useSelector } from "react-redux";

function Login(props) {
  const [login, setLogin] = useState(false);

  const handleClick = () => {
    setLogin(true);
  };

  //============REDUX============//
  const user = useSelector((state) => state.UserLogin);
  const { userInfo } = user;

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) navigate("/");
  });

  return (
    <div className="container-login">
      <div className="box">
        <h2 className="box__title">Sign In to Scanleaf</h2>
        {login ? (
          <LoginForm />
        ) : (
          <div className="box__form">
            <button className="box__btn--outline" onClick={handleClick}>
              <FaUser style={{ color: "#333" }} />
              <span> Sign in with username</span>
            </button>
            <SignIn />
          </div>
        )}
        <p className="box__ask-login">
          Don't have an account? <br />
          <Link to="/register">Create one</Link> <br />
          <Link to="/">
            <FaLongArrowAltLeft /> Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
