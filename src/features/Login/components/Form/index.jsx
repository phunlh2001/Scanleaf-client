import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, FormGroup, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../redux/actions/UserAction";
import "./LoginForm.scss";

function LoginForm(props) {
  //hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //use redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserLogin);
  const { userInfo, error } = user;

  //if logged in, redirect to home
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) navigate("/");
  });

  //============Handle Events============//
  const handleSubmit = (e, data) => {
    data = { email, password };
    console.log(data);
    e.preventDefault();
    dispatch(login(data));
  };

  return (
    <div className="main-form">
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            className="my-4"
            id="email"
            type="email"
            placeholder="Email..."
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className="my-4"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" className="button" type="submit">
          Sign In
        </Button>
        {error && <p>{error}</p>}
      </Form>
    </div>
  );
}

export default LoginForm;
