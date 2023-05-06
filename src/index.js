import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import "./index.css";

//import { CounterApp } from './components/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { Layout } from './components/05-useLayoutEffect/Layout';
//import { Memorize } from './components/06-memos/Memorize';
//import { MemoHook } from './components/06-memos/MemoHook';
//import { CallBackHook } from './components/06-memos/CallBackHook';
//import { Padre } from './components/07-tarea-memo/Padre';
//import { TodoApp } from './components/08-useReducer/TodoApp';

import { MainApp } from "./components/09-useContext/MainApp";

import { LoginScreen } from "./components/09-useContext/LoginScreen";
import { HomeScreen } from "./components/09-useContext/HomeScreen";
import { AboutScreen } from "./components/09-useContext/AboutScreen";
import ErrorPage from "./components/09-useContext/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoginScreen />,
      },

      {
        path: "home",
        element: <HomeScreen />,
      },
      {
        path: "about",
        element: <AboutScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
