import React, { useState } from "react";
import { LoginTitle, Wrapper, LoginCard, Circle, TextLink } from "./styles";
import { SubmitButton } from "../button/submit/styles";
import { Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import ValidationError from "../generic/error";

const Login = () => {
  const [state] = useState({
    email: "",
    password: "",
  });
  const [, setRes] = useState();

  const sendData = async (data: typeof state) => {
    const response = await axios.post(`/login`, data).then((res) => {
      console.log(res.data);
      return res.data;
    });
    setRes(response);
  };

  return (
    <Wrapper>
      <LoginCard>
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
          onSubmit={(values, actions) => {
            console.log(values, actions);

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
        {/* {res ? <Success label="Successfully" /> : <ValidationError />} */}
        <Circle size={150} top={55} left={65} color="#007cb0de" />
        <Circle size={60} top={28} left={48} color="#007cb0de" />
        <Circle size={20} top={5} left={75} color="#007cb0de" />
        <TextLink href="/register">Need an account? Register here.</TextLink>
      </LoginCard>
    </Wrapper>
  );
};

export default Login;
