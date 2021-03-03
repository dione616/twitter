import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../../store";
import { selectAuth } from "../../../../store/auth";
import { Text, TitleMedium } from "../../../generic/typography/styles";
import { Wrapper } from "./styles";

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
    <Wrapper>
      <TitleMedium>
        {auth.user?.firstname} {auth.user?.lastname}
      </TitleMedium>
      <Text>My status is awesome YO!</Text>
      <Text>City: Sumy</Text>
      <Text>Country: Ukraine</Text>
      <Text>
        Since:{new Date(`${auth.user?.createdAt}`).toLocaleDateString()}
      </Text>
    </Wrapper>
  );
};

export default connector(ProfileData);
