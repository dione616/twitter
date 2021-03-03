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
import { useDispatch } from "react-redux";

const App = () => {
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
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/register' render={() => <Register />} />
        </Switch>
      </Content>
    </AppWrapper>
  );
};

export default App;
