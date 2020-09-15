import { Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";
import { useStateValue } from "./context/StateProvider";
import Login from "./pages/Login";
import db from "./db/axios";
import Home from "./pages/Home";
import { actionTypes } from "./context/reducer";
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
          pics: [],
          gender: "",
          age: 0,
        },
      }).then((res) => console.log(res.data));
    }
  }, []);

  useEffect(() => {
    db.get(`/tinder/user/${user?.email}`).then((res) => {
      dispatch({
        type: actionTypes.SET_DB_USER,
        user: res.data[0],
      });
    });
  }, [user]);
  return <div className="app">{user === null ? <Login /> : <Home />}</div>;
}

export default App;
