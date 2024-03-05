import React from "react";
import {
  BrowserRouter as BrowserRouters,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./login/login.tsx";
import App from "../App.js";
import RestPassword from "./Password/RestPassword.tsx";
import SignUp from "./Signup/SignUp.tsx";
import HomePage from "./Home/Home.tsx";
import ProfileTab, { NestedPofile } from "./Profile/Profile.tsx";
import { ChangePassword } from "./Signup/Changepassword/Changepassword.tsx";

const BrowserRouter = () => {
  return (
    <BrowserRouters>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restpswd" element={<RestPassword />} />

        <Route path="profile" element={<NestedPofile />}>
          <Route index path="" element={<ProfileTab />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouters>
  );
};

export default BrowserRouter;
