import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, FormGroup, Input } from "reactstrap";
import { login } from "../../../../redux/actions/UserAction";
import "./LoginForm.scss";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //============REDUX============//
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserLogin);
  const { error } = user;

  //============Handle Events============//
  const handleSubmit = (e, data) => {
    data = { email, password }; //destructuring
    console.log(data);
    e.preventDefault();
    dispatch(login(data)); //async action
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
