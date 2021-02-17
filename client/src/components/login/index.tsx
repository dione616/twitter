import React from "react";
import {
  LoginTitle,
  Wrapper,
  LoginCard,
  Input,
  SubmitButton,
  Circle,
  TextLink,
} from "./styles";

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
        <Circle size={150} top={55} left={65} color="#50d4fc" />
        <Circle size={60} top={28} left={48} color="#2fc8f7" />
        <Circle size={20} top={5} left={75} color="#50d4fc" />
        <TextLink href="/register">Need an account? Register here.</TextLink>
      </LoginCard>
    </Wrapper>
  );
};

export default Login;
