import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Content } from "../generic/content/styles";
import Home from "../home";
import Login from "../login";
/* import Navigation from "../navigation"; */
import Profile from "../profile";
import Register from "../register";
import Sidebar from "../sidebar";
import { AppWrapper } from "./styles";
import { setUser } from "../../store/auth";
import { loadTwitts } from "../../store/twitt";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { selectTwitts } from "../../store/twitt";

const mapState = (state: RootState) => {
  return {
    twitts: selectTwitts(state),
  };
};

const connector = connect(mapState, { loadTwitts });

type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}

const App: React.FC<Props> = ({ twitts, loadTwitts }) => {
  console.log("T:", twitts);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("set");

    dispatch(setUser());
  }, []);
  return (
    <AppWrapper>
      {/* <Navigation /> */}
      <Sidebar />
      <Content>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route
            path='/profile'
            render={() => (
              <Profile twitts={twitts.twitts} loadTwitts={loadTwitts} />
            )}
          />
          <Route path='/login' render={() => <Login />} />
          <Route path='/register' render={() => <Register />} />
        </Switch>
      </Content>
    </AppWrapper>
  );
};

export default connector(App);
