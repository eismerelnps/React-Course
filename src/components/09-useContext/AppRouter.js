import * as React from "react";
import * as ReactDOM from "react-dom";

import { 
    createBrowserRouter,
    RouterProvider  
} from "react-router-dom";

import { MainApp } from "./MainApp";
import { LoginScreen } from "./LoginScreen";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "login",
        element: <LoginScreen />,
      },
      {
        path: "/home",
        element: <HomeScreen />,
      },
      {
        path: "/about",
        element: <AboutScreen />,
      }
    ],
  },
]);
 