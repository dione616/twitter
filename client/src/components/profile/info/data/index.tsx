import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../../store";
import { selectAuth } from "../../../../store/auth";

const mapState = (state: RootState) => {
  return {
    auth: selectAuth(state),
  };
};

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const ProfileData: React.FC<Props> = ({ auth }) => {
  return (
    <div>
      <h3>
        {auth.user?.firstname} {auth.user?.lastname}
      </h3>
      <div>My status is awesome YO!</div>
      <div>City: Sumy</div>
      <div>Country: Ukraine</div>
      <div>
        Since:{new Date(`${auth.user?.createdAt}`).toLocaleDateString()}
      </div>
    </div>
  );
};

export default connector(ProfileData);
