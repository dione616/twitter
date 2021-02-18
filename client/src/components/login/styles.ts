import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.templates.centerContent};

  box-sizing: border-box;
`;
export const LoginCard = styled.div`
  ${({ theme }) => theme.templates.centerContent};
  padding: 20px;
  background: linear-gradient(99deg, hsl(52, 0%, 100%), hsl(52, 0%, 100%));
  margin: 10px;
  border-radius: 5px;
  width: 300px;
  position: relative;
  overflow: hidden;
`;
export const LoginTitle = styled.h1`
  z-index: 2;
  ${({ theme }) => theme.fonts.font1};
`;
export const Input = styled.input`
  width: 97%;
  display: block;
  font-size: 18px;
  margin: 20px 0;
  border: 1px solid black;
  background: #ffffff8c;
`;

interface Props {
  size: number;
  left: number;
  top: number;
  color: string;
}
export const Circle = styled.div<Props>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  background: ${(props) => props.color};
  border-radius: 50%;
  z-index: 1;
`;
export const TextLink = styled.a`
  color: rgb(67, 67, 67);
  font-size: 18px;
  z-index: 2;
  font-weight: 500;
`;