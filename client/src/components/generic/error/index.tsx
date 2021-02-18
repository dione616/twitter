import React, { ReactNode } from "react";
import { Err } from "./styles";

interface IProps {
  children: ReactNode;
}

const ValidationError = ({ children }: IProps) => {
  return <Err>{children}</Err>;
};

export default ValidationError;
