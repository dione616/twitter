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

      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#fc84ba" />
            <stop offset="100%" stop-color="#826ce2" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          fill-opacity="1"
          d="M0,320L11.4,309.3C22.9,299,46,277,69,266.7C91.4,256,114,256,137,256C160,256,183,256,206,240C228.6,224,251,192,274,186.7C297.1,181,320,203,343,202.7C365.7,203,389,181,411,149.3C434.3,117,457,75,480,64C502.9,53,526,75,549,112C571.4,149,594,203,617,229.3C640,256,663,256,686,224C708.6,192,731,128,754,122.7C777.1,117,800,171,823,186.7C845.7,203,869,181,891,149.3C914.3,117,937,75,960,53.3C982.9,32,1006,32,1029,48C1051.4,64,1074,96,1097,106.7C1120,117,1143,107,1166,122.7C1188.6,139,1211,181,1234,181.3C1257.1,181,1280,139,1303,133.3C1325.7,128,1349,160,1371,144C1394.3,128,1417,64,1429,32L1440,0L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
        ></path>
      </svg>
    </AppWrapper>
  );
};

export default App;
