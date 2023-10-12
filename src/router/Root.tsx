import React,{ FC } from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";

const Root: FC = () => (
    <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        {/* <Redirect to="/home" /> */}
        <Login/>
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
)
export default Root;