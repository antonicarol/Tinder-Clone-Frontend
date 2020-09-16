import { Button } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import { useStateValue } from "../context/StateProvider";
import "./css/Profile.css";
function Profile() {
  const [{ dbUser }, dispatch] = useStateValue();
  return (
    <div className="profile">
      <Header />
      <div className="profile__top">
        <img
          alt=""
          className="profile__profilePic"
          src={dbUser?.profile.profilePic}
        />
        <div className="profile__topInfo">
          <h1>{dbUser?.name}</h1>
          <h3>Email: {dbUser?.email}</h3>
          <p>Borned at : {dbUser?.profile.birthday}</p>
        </div>
      </div>
      <div className="profile__bottom">
        <div className="profile__passions">
          <h2>Passions</h2>
          <div>
            {dbUser?.profile.passions.map((passion) => (
              <Button variant="outlined">{passion}</Button>
            ))}
          </div>
        </div>
        <div className="profile__orientation">
          <h2>Sexual Orientation</h2>
          <div>
            {dbUser?.profile.orientation.map((orient) => (
              <Button variant="outlined">{orient}</Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
