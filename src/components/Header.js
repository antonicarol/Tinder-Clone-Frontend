import React from "react";
import "./css/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/profile">
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>

      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png"
        alt=""
        className="header__logo"
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
