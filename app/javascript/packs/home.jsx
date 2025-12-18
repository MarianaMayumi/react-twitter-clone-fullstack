import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/pages/Home";
import UserPage from "../src/pages/UserPage";
import SignupPage from "../src/pages/SignupPage";

const path = window.location.pathname;

let Component;

if (path === "/") {
  Component = Home;
} else if (path === "/signup") {
  Component = SignupPage;
} else {
  Component = UserPage;
}

ReactDOM.render(
  <Component />,
  document.getElementById("root")
);
