import React from "react";
interface IProps {
  label: string;
}
const Success = ({ label }: IProps) => {
  return <h3 style={{ color: "green" }}>{label}</h3>;
};

export default Success;
