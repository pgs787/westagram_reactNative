import React from "react";
import Login from "./instagram/components/Login/Login";
import MainRoute from "./Tabcomponents/MainRoute";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default createAppContainer(
  createSwitchNavigator(
    {
      MainRoute: MainRoute,
      Login: Login
    },
    {
      initialRouteName: "Login"
    }
  )
);
