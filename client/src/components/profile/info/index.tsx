import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store";
import { selectAuth } from "../../../store/auth";
import Avatar from "./avatar";
import ProfileData from "./data";
import { logout } from "../../../store/auth";

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
    <div style={{ minHeight: "250px" }}>
      {auth.user?.img && <Avatar img={auth.user.img} />}
      <ProfileData />
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default connector(ProfileInfo);
