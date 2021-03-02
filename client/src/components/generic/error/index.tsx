import React from "react";
import { Err } from "./styles";

interface IProps {
  text?: string;
}

const ValidationError = ({ text }: IProps) => {
  return text ? <Err>{text}</Err> : <Err>Error!!!</Err>;
};

export default ValidationError;
