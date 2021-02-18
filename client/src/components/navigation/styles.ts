import styled from "styled-components";
export const NavWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  width: 100vw;
  background: white;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  background: #007cb0de;
  color: white;
  ${({ theme }) => theme.fonts.font1};

  & > a {
    font-size: 22px;
    font-weight: 600;
    margin-right: 20px;
    text-decoration: none;
    color: white;
  }
`;