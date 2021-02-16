import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Profile from "./profile";
import Tweets from "./tweets";
import { Wrapper } from "./wrapper/app";

const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/tweets" render={() => <Tweets />} />
      </Switch>
    </Wrapper>
  );
};

export default App;
