import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import CommissionPage from "./views/CommissionPage/CommissionPage";
import UploadPage from "./views/UploadPage/UploadPage";
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
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path="/commission"
              component={Auth(CommissionPage, true)}
            />
            <Route exact path="/upload" component={Auth(UploadPage, true)} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Suspense>
    </div>
  );
}

export default App;
