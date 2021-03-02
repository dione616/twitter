import styled from "styled-components";
interface Props {
  src?: string;
}
export const Image = styled.img<Props>`
  background-image: url("https://p7.hiclipart.com/preview/247/564/869/computer-icons-user-profile-clip-art-user-avatar.jpg");
  background-size: cover;
  height: 180px;
  width: 140px;
`;
