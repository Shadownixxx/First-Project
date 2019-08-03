import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import ToDoPage from "../pages/ToDoFolder/ToDoPage.js";
import TankPage from "../pages/TankPage.js";
import ContactPage from "../pages/ContactPage.js";
import ErrorPage from "../pages/ErrorPage.js";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/list" component={ToDoPage} />
        <Route path="/tank" component={TankPage} />
        <Route path="/admin" component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
