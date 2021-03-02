import styled from "styled-components";
export const NavWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  width: 100vw;
  background: white;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(90deg, #937ff0, #fc84ba);
  color: white;
  z-index: 3;

  ${({ theme }) => theme.fonts.font1};

  & > a {
    font-size: 22px;
    font-weight: 600;
    margin-right: 20px;
    text-decoration: none;
    color: white;
  }
`;
