import React from "react";
import Header from "../components/Header";
import SetUpProfile from "../components/SetUpProfile";
import SwipeButtons from "../components/SwipeButtons";
import TinderCards from "../components/TinderCards";
import { useStateValue } from "../context/StateProvider";

function Home() {
  const [{ user, dbUser }, dispatch] = useStateValue();
  console.log(user);
  console.log(dbUser);

  return (
    <div className="home">
      {!dbUser?.firstTime ? (
        <SetUpProfile />
      ) : (
        <>
          <Header />
          <TinderCards />
          <SwipeButtons />
        </>
      )}
    </div>
  );
}

export default Home;
