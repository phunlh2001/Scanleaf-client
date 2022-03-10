import React, { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, FormGroup, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../../../../redux/actions/UserAction";
import "./LoginForm.scss";

function LoginForm(props) {
  let schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(8),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  //use redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserLogin);
  const { userInfo, error } = user;

  const onSubmit = (data) => {
    data.preventDefault();
    console.log(data);
    dispatch(login(data));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo) navigate("/");
  });

  return (
    <div className="main-form">
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input
            className="my-4"
            id="email"
            type="email"
            placeholder="Email..."
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
