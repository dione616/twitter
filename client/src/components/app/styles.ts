import styled from "styled-components";

export const AppWrapper = styled.div`
  ${({ theme }) => theme.templates.centerContent};
  background: rgb(66, 195, 255);
  min-height: 100vh;
`;
