import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useField,
} from "formik";
import * as Yup from "yup";
import { Wrapper, Input, Circle, TextLink } from "./styles";
import { SubmitButton } from "../button/submit/styles";
import { LoginCard, LoginTitle } from "../login/styles";
import ValidationError from "../generic/error";
import { TextInput } from "../generic/input/text";
import Success from "../generic/succeess";
import { boolean } from "yup/lib/locale";

interface IRes {
  response: undefined | boolean;
}

const Register = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repeat_password: "",
  });
  const [res, setRes] = useState();
  console.log(res);

  const sendData = async (data: typeof state) => {
    const response = await axios.post(`/register`, data).then((res) => {
      console.log(res.data);
      return res.data;
    });
    setRes(response);
  };

  const showResponse = (success: boolean) => {
    return success ? (
      <Success label="You have successfully registered!" />
    ) : (
      <ValidationError />
    );
  };

  return (
    <Wrapper>
      <LoginCard>
        <LoginTitle>Register</LoginTitle>

        <Formik
          initialValues={state}
          validationSchema={Yup.object({
            firstname: Yup.string()
              .min(3, "Must be at least 3 chars")
              .max(25, "Max 25 chars")
              .required("Required"),
            lastname: Yup.string()
              .min(3, "Must be at least 3 chars")
              .max(25, "Max 25 chars")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(3, "Must be at least 3 chars")
              .max(25, "Max 25 chars")
              .required("Required"),
            repeat_password: Yup.string()
              .required()
              .test(
                "passwords-match",
                "Passwords must match ya fool",
                function (value) {
                  return this.parent.password === value;
                }
              ),
          })}
          onSubmit={(values, actions) => {
            console.log(values, actions);

            sendData(values);

            setTimeout(() => {
              actions.resetForm();
              actions.setSubmitting(false);
            }, 3000);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form style={{ width: "100%", zIndex: 2 }}>
              <Field
                placeholder="Firstname"
                className="input-field"
                name="firstname"
              />
              {errors.firstname && touched.firstname ? (
                <ValidationError>{errors.firstname}</ValidationError>
              ) : null}
              <Field
                placeholder="Lastname"
                className="input-field"
                name="lastname"
              />
              {errors.lastname && touched.lastname ? (
                <ValidationError>{errors.lastname}</ValidationError>
              ) : null}
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
              <Field
                type="password"
                placeholder="Reapeat password"
                className="input-field"
                name="repeat_password"
              />
              {errors.repeat_password && touched.repeat_password ? (
                <ValidationError>{errors.repeat_password}</ValidationError>
              ) : null}
              <SubmitButton
                disabled={
                  errors.email ||
                  errors.firstname ||
                  errors.lastname ||
                  errors.password ||
                  errors.repeat_password
                    ? true
                    : false
                }
                onClick={(e) => {
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
        {res ? <Success label="Successfully" /> : <ValidationError />}
        <Circle size={150} top={80} left={65} color="#007cb0de" />
        <Circle size={60} top={28} left={48} color="#007cb0de" />
        <Circle size={20} top={5} left={75} color="#007cb0de" />
        <TextLink href="/login">Already have one?Login here.</TextLink>
      </LoginCard>
    </Wrapper>
  );
};

export default Register;
