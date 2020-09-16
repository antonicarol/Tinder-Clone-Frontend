import React from "react";
import Header from "../components/Header";
import SetUpProfile from "../components/SetUpProfile";
import SwipeButtons from "../components/SwipeButtons";
import TinderCards from "../components/TinderCards";
import { useStateValue } from "../context/StateProvider";
import useGeolocation from "react-hook-geolocation";
import "./css/Home.css";
import PassionFilter from "../components/filters/PassionFilter";
import OrientationFilter from "../components/filters/OrientationFilter";
import LocationFilter from "../components/filters/LocationFilter";
import { Button } from "@material-ui/core";
import db from "../db/axios";
function Home() {
  const geolocation = useGeolocation();
  const [
    { user, dbUser, filtersPass, filtersOrien },
    dispatch,
  ] = useStateValue();
  console.log(user);
  console.log(dbUser);
  console.log(geolocation);
  console.log(filtersPass, filtersOrien);

  const filterUsers = () => {
    db.get(`/tinder/card/filter/${filtersPass}/${filtersOrien}`).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      {!dbUser?.firstTime ? (
        <SetUpProfile />
      ) : (
        <div className="home">
          <Header />
          <div className="home__container">
            <div className="home__left">
              <h3>Filter users</h3>
              <LocationFilter />
              <PassionFilter />
              <OrientationFilter />
              <Button onClick={filterUsers}>FILTER</Button>
            </div>

            <div className="home__body">
              <TinderCards />
            </div>
          </div>
          <SwipeButtons />
        </div>
      )}
    </>
  );
}

export default Home;
