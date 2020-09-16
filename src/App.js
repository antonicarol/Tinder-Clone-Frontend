import React, { useEffect } from "react";
import "./App.css";
import Profile from "./pages/Profile";
import { useStateValue } from "./context/StateProvider";
import Login from "./pages/Login";
import db from "./db/axios";
import Home from "./pages/Home";
import { actionTypes } from "./context/reducer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    console.log(`user logged in : ${user?.displayName}`);
    if (user !== null) {
      db.post("/tinder/user/new", {
        name: user.displayName,
        email: user.email,
        firstTime: false,
        profile: {
          profilePic: "",
          gender: "",
          age: 0,
          passions: [],
          orientation: [],
        },
      }).then((res) => console.log(res.data));
    }
  }, [user]);

  useEffect(() => {
    console.log("hey");
    db.get(`/tinder/user/${user?.email}`).then((res) => {
      dispatch({
        type: actionTypes.SET_DB_USER,
        user: res.data[0],
      });
    });
  }, [user]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            {user == null ? <Redirect to="/login" /> : <Redirect to="/home" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
