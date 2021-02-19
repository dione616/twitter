import React, { useEffect, useState } from "react";
import { LoginTitle, Wrapper, LoginCard, Circle, TextLink } from "./styles";
import { SubmitButton } from "../button/submit/styles";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import ValidationError from "../generic/error";
import { Redirect } from "react-router-dom";
import { LoginResponse } from "../../lib/types";
import { Err } from "../generic/error/styles";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    errors: false,
  });
  const [res, setRes] = useState<LoginResponse | null>(null);
  console.log(res);

  useEffect(() => {
    return () => {
      setState({ email: "", password: "", errors: false });
    };
  }, []);

  const sendData = async (data: typeof state) => {
    const response = await axios.post(`/login`, data).then((res) => {
      console.log(res);
      setState((prev) => {
        return { ...prev, errors: true };
      });
      setTimeout(() => {
        setState((prev) => {
          return { ...prev, errors: false };
        });
      }, 3000);
      return res.data;
    });
    setRes(response);
  };

  const loginRedirect = () => {
    if (res && res.user) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Wrapper>
      <LoginCard>
        {loginRedirect()}
        <LoginTitle>Login</LoginTitle>
        <Formik
          initialValues={state}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(3, "Must be at least 3 chars")
              .max(25, "Max 25 chars")
              .required("Required"),
          })}
          onSubmit={(values) => {
            sendData(values);
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%", zIndex: 2 }}>
              <Field
                className="input-field"
                name="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <ValidationError>{errors.email}</ValidationError>
              ) : null}
              <Field
                type="password"
                placeholder="Password"
                className="input-field"
                name="password"
              />
              {errors.password && touched.password ? (
                <ValidationError>{errors.password}</ValidationError>
              ) : null}

              <SubmitButton
                disabled={errors.email ? true : false}
                onClick={() => {
                  /* setTimeout(() => {
                    
                  }, 3000); */
                }}
                type="submit"
              >
                Submit
              </SubmitButton>
            </Form>
          )}
        </Formik>
        <Circle size={150} top={55} left={65} color="#007cb0de" />
        <Circle size={60} top={28} left={48} color="#007cb0de" />
        <Circle size={20} top={5} left={75} color="#007cb0de" />
        <TextLink href="/register">Need an account? Register here.</TextLink>
        {state.errors ? <Err>Error</Err> : null}
      </LoginCard>
    </Wrapper>
  );
};

export default Login;
