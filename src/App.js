import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import NotFound from "./Component/NotFound/NotFound";
import LogIn from "./Component/LogIn/LogIn";
import { createContext, useState } from "react";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Destination from "./Component/Destination/Destination";

//context
export const loggedInUserContext = createContext();

function App() {
  const [loggedInUser, setLoggenInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  return (
    <loggedInUserContext.Provider value={[loggedInUser, setLoggenInUser]}>
      <p style={{ color: "red", fontSize: "30px", float: "right" }}>
        {loggedInUser.name}
      </p>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/:destination">
            <Destination />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </loggedInUserContext.Provider>
  );
}

export default App;
