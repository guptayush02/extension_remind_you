import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import checkLogin from '../utils/checkLogin.js';

import Home from '../components/home/Home.js';
import CalenderList from '../components/calenderList/CalenderList.js';
import Events from '../components/events/Events.js';

const Routes = ({ history }) => {

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(checkLogin());
    // redirection()
  }, []);

  // const redirection = () => {
  //   if (!isLogin) return history.push("/");
  //   return history.push("/calender-list");
  // }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calender-list">
            <CalenderList />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default Routes;
