import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home";
import Login from "../login";
import Navigation from "../navigation";
import Profile from "../profile";
import Register from "../register";
import Tweets from "../tweets";
import { AppWrapper } from "./styles";

const App = () => {
  return (
    <AppWrapper>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/tweets" render={() => <Tweets />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
      </Switch>
    </AppWrapper>
  );
};

export default App;
