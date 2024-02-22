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
import HomePage from "./Home/Home.tsx";
import ProfileTab from "./Profile/Profile.tsx";

const BrowserRouter = () => {
  return (
    <BrowserRouters>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restpswd" element={<RestPassword />} />
        <Route path="/profile" element={<ProfileTab />} />
      </Routes>
    </BrowserRouters>
  );
};

export default BrowserRouter;
