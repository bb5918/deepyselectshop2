import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import AdminPage from './views/AdminPage/AdminPage'

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "#5014A5",
          height: "300px",
          width: "100%",
          fontFamily: "IBM Plex Hans KR",
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={Auth(LandingPage, null)} />
              <Route exact path="/login" component={Auth(LoginPage, false)} />
              {/* <Route
                exact
                path="/register"
                component={Auth(RegisterPage, false)}
              /> */}
              <Route exact path="/admin" component={Auth(AdminPage, true)} />
            </Switch>
          </div>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
