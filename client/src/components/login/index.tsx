import React from "react";
import {
  LoginTitle,
  Wrapper,
  LoginCard,
  Input,
  Circle,
  TextLink,
} from "./styles";
import { SubmitButton } from "../button/submit/styles";

const Login = () => {
  const handleSubmit = () => {
    console.log("Submit");
  };
  return (
    <Wrapper>
      <LoginCard>
        <LoginTitle>Login</LoginTitle>
        <form
          onSubmit={() => handleSubmit()}
          style={{ width: "100%", zIndex: 2 }}
        >
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
          <Input type="password" name="password" placeholder="Password" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
        <Circle size={150} top={55} left={65} color="#007cb0de" />
        <Circle size={60} top={28} left={48} color="#007cb0de" />
        <Circle size={20} top={5} left={75} color="#007cb0de" />
        <TextLink href="/register">Need an account? Register here.</TextLink>
      </LoginCard>
    </Wrapper>
  );
};

export default Login;
