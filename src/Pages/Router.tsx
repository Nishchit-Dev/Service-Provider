import React from "react";
import {
  BrowserRouter as BrowserRouters,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./login/login.tsx";
import App from "../App.js";
import RestPassword from "./ResetPassword/RestPassword.tsx";
import SignUp from "./Signup/SignUp.tsx";

const BrowserRouter = () => {
  return (
    <BrowserRouters>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restpswd" element={<RestPassword />} />

        <Route path="/signup" />
      </Routes>
    </BrowserRouters>
  );
};

export default BrowserRouter;
