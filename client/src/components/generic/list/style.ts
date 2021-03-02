import styled from "styled-components";

export const List = styled.ul`
  z-index: 2;
  list-style-type: none;
`;

export const Li = styled.li`
  /* 
  ${({ theme }) => theme.templates.centerContent}; */
  z-index: 2;

  & > a {
    font-size: 24px;
    color: white;
    text-decoration: none;
  }
  & > a:hover {
    cursor: pointer;
    color: #c7c7c7;
  }
`;
