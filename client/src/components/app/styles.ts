import styled from "styled-components";

export const AppWrapper = styled.div`
  /* ${({ theme }) => theme.templates.alignCenter}; */
  display: grid;
  grid-template-areas: "sidebar content";
  grid-template-columns: 50px 1fr;
  background: linear-gradient(164deg, #242e48, #613061);
  min-height: 100vh;
  position: relative;
  padding: 0 25vw;
`;
