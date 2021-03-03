import { Wrapper } from "./styles";
import Info from "./info";
import AddTwitt from "../twitt/add-twitt";
import List from "../twitt/list";
import { Twitt } from "../../lib/types";

interface Props {
  twitts: Twitt[];
  loadTwitts: () => void;
}

const Profile: React.FC<Props> = ({ twitts, loadTwitts }) => {
  return (
    <Wrapper>
      <Info />
      <AddTwitt />
      <List twitts={twitts} loadTwitts={loadTwitts} />
    </Wrapper>
  );
};

export default Profile;
