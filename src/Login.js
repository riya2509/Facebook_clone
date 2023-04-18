import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  //Hook for dispatching after done with Reducer.js
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //Sign in...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //After doing dispatch we have user inside the data
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
          alt=""
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
