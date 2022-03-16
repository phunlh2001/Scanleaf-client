import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../../../redux/actions/UserAction";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./SignUpForm.scss";

function SignUpForm(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  //redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserSignup);
  const { userInfo } = user;

  //if logged in, redirect to home
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) navigate("/");
  });

  //============Handle Events============//
  const handleClick = (e) => {
    if (
      !fullname.match(
        /^(([A-Za-z]+[-']?)*([A-Za-z]+)?\s)+([A-Za-z]+[-']?)*([A-Za-z]+)?$/
      )
    ) {
      alert("Full name example: Nguyen Van A");
      e.preventDefault();
    } else if (password !== confirmPassword) {
      alert("Repeat password is wrong!");
      e.preventDefault();
    }
  };

  const handleSubmit = (e, data) => {
    data = { fullname, email, password, confirmPassword };

    e.preventDefault();
    console.log(data);
    dispatch(signUp(data));
  };

  return (
    <div className="container-register">
      <div className="box">
        <h2 className="box__title">Sign Up to Scanleaf</h2>
        <Form onSubmit={handleSubmit} className="form">
          <FormGroup>
            <Input
              name="fullname"
              className="my-4"
              id="fullname"
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="email"
              className="my-4"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="password"
              className="my-4"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="cPwd"
              className="my-4"
              id="confirmPwd"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormGroup>
          <Button
            color="success"
            className="button"
            type="submit"
            onClick={handleClick}
          >
            Sign Up
          </Button>
        </Form>
        <p className="box__ask-register">
          Already have an account? <br />
          <Link to="/login">Login Now</Link> <br />
          <Link to="/">
            <FaLongArrowAltLeft /> Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
