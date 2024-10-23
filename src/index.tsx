import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TeacherProvider } from "./context/Teacher";
import TeacherData from "./Pages/TeacherData";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
