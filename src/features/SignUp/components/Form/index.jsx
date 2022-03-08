import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../../../redux/actions/UserAction";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./SignUpForm.scss";

function SignUpForm(props) {
  let schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required().min(8),
    cPwd: yup.string().required().min(8),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  //redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserSignup);
  const { userInfo, error } = user;

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) navigate("/");
  });

  const onSubmit = (data) => {
    if (
      !name.match(
        /^(([A-Za-z]+[-']?)*([A-Za-z]+)?\s)+([A-Za-z]+[-']?)*([A-Za-z]+)?$/
      )
    ) {
      alert("Full name example: John Doe");
    } else if (password !== confirmPassword) {
      alert("Repeat password is wrong!");
    } else {
      console.log(data);
      dispatch(signUp(data));
    }
  };

  return (
    <div className="container-register">
      <div className="box">
        <h2 className="box__title">Sign Up to Scanleaf</h2>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Input
              className="my-4"
              id="fullname"
              type="text"
              placeholder="Full Name"
              {...register("fullname")}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="my-4"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="my-4"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password")}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="my-4"
              id="confirmPwd"
              type="password"
              placeholder="Confirm Password"
              {...register("cPwd")}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>
          <Button color="success" className="button" type="submit">
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
