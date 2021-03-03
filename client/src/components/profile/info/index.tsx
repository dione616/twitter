import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store";
import { selectAuth } from "../../../store/auth";
import Avatar from "./avatar";
import ProfileData from "./data";
import { logout } from "../../../store/auth";
import { Wrapper } from "./styles";

const mapState = (state: RootState) => {
  return {
    auth: selectAuth(state),
  };
};

const connector = connect(mapState, { logout });
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const ProfileInfo: React.FC<Props> = ({ auth, logout }) => {
  return (
    <Wrapper>
      {auth.user?.img && <Avatar img={auth.user.img} />}
      {auth.user && auth.user.img ? <Avatar img={auth.user.img} /> : <Avatar />}
      <ProfileData />
      <button onClick={() => logout()}>Logout</button>
    </Wrapper>
  );
};

export default connector(ProfileInfo);
