import axios, { AxiosResponse } from "axios";
import React, { MouseEvent, useEffect, useState } from "react";
import {
  LoginTitle,
  Wrapper,
  LoginCard,
  Input,
  SubmitButton,
  Circle,
  TextLink,
} from "./styles";

const Register = () => {
  const [state, setState] = useState("Empty");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await axios
      .post(`/register`, {
        email: "vetal160199@gmail.com",
        password: "password",
      })
      .then((data: AxiosResponse) => {
        console.log(data);
        return data;
      });
  };

  useEffect(() => {
    const res = axios.get(`/register`).then((data: AxiosResponse) => {
      console.log(data);
      setState(data.data);
      return data;
    });
    return () => {};
  }, []);
  return (
    <Wrapper>
      <LoginCard>
        <LoginTitle>Register</LoginTitle>
        <form style={{ width: "100%", zIndex: 2 }}>
          <Input
            type="text"
            name="firstname"
            required
            placeholder="Firstname"
          />
          <Input type="text" name="lastname" required placeholder="Lastname" />
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Input
            type="password"
            name="repeat_password"
            placeholder="Repeat password"
            required
          />
          <SubmitButton onClick={(e) => handleSubmit(e)} type="submit">
            Submit
          </SubmitButton>
        </form>
        <Circle size={150} top={55} left={65} color="#50d4fc" />
        <Circle size={60} top={28} left={48} color="#2fc8f7" />
        <Circle size={20} top={5} left={75} color="#50d4fc" />
        <TextLink href="/login">Already have one?Login here.</TextLink>
      </LoginCard>
      <h1>{state}</h1>
    </Wrapper>
  );
};

export default Register;
