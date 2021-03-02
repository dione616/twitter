import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.templates.centerContent};
  z-index: 2;

  box-sizing: border-box;
`;
export const ContentWrapper = styled.div`
  display: flex;
  z-index: 2;
  height: 100%;
  min-height: 100vh;
`;
