//add firebase
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
//design form material-ui
import { Button } from "@material-ui/core";

import React, { useContext } from "react";
import "./LogIn.css";
import { loggedInUserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const LogIn = () => {
  //signInWithgoogle
  let [logInUser, setLogInUser] = useContext(loggedInUserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  var provider = new firebase.auth.GoogleAuthProvider();
  const handelGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        console.log(result.user);
        setLogInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //logIn with email and password
  const handelOnBlur = (e) => {
    let isFormedValid = true;
    if (e.target.name === "email") {
      //email validation
      isFormedValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log("email", isFormedValid);
    }
    if (e.target.name === "password") {
      //password validation
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormedValid = isPasswordValid && passwordHasNumber;
      console.log("pass", isFormedValid);
    }
    if (isFormedValid) {
      const newUserInfo = { ...logInUser };
      newUserInfo[e.target.name] = e.target.value;
      setLogInUser(newUserInfo);
    }
  };

  const handelOnSubmit = (e) => {
    if (logInUser.email && logInUser.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(logInUser.email, logInUser.password)
        .then((result) => {
          const { displayName, email, photoURL, password } = result.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            password: password,
          };
          console.log(result.user);
          setLogInUser(signedInUser);
          history.replace(from);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    e.preventDefault();
  };
  return (
    <div className="loginSystem">
      <div className="googleLogIN">
        <div className="loginStyle">
          <h1>Hi. {logInUser.name}</h1>
          <p>email.{logInUser.email}</p>
          <Button
            onClick={handelGoogleSignIn}
            variant="contained"
            color="secondary"
          >
            LogIn
          </Button>
        </div>
      </div>
      <div className="signInWithEmailAndPassWord">
        <form onSubmit={handelOnSubmit}>
          <input
            onBlur={handelOnBlur}
            placeholder="your email"
            type="text"
            name="email"
            id="2"
          />
          <br></br>
          <input
            onBlur={handelOnBlur}
            placeholder="your pass"
            type="password"
            name="password"
            id="1"
          />
          <br></br>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
