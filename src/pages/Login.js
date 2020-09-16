import React from "react";
import "./css/Login.css";
import { auth, GoogleProvider } from "../firebase/firebase";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();
  const signInWithGoogle = () => {
    auth.signInWithPopup(GoogleProvider).then((res) => {
      dispatch({
        type: actionTypes.SET_FB_USER,
        user: res.user,
      });
      history.push("/home");
    });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-768x432.png"
          alt=""
          className="login__logo"
        />
        <p>Welcome to the Tinder Clone, created by @antonicarol</p>
        <span>
          This is not the official Tinder, so feel free to leave some feedaback
        </span>
        <p>Login to an Account to start finding the love of yout life </p>

        <button onClick={signInWithGoogle}>
          Sign in with a Google Account
        </button>
      </div>
    </div>
  );
}

export default Login;
