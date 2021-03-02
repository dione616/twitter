import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.templates.justifyLeft};
  z-index: 2;

  box-sizing: border-box;

  grid-area: sidebar;
`;
