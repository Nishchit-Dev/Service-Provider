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
import Services from "./Services/Services.tsx";
import VendorDashboard from "./vendor/dashboard/vendorDashboard.tsx";
import Vendor from "./vendor/vendor.tsx";
import { VendorChangePassword } from "./vendor/ChangePassword/Changepassword.tsx";
import ProctedRoutes from "./ProtectedRoutes.tsx";
import VendorSignUp from "./vendor/Signup/SignUp.tsx";
import VendorHistory from "./vendor/History/History.tsx";
import RawContentManageService from "./vendor/Services/ManageService.tsx";

const BrowserRouter = () => {
  return (
    <BrowserRouters>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restpswd" element={<RestPassword />} />
        <Route path="/service" element={<Services />} />

        <Route path="vendor" element={<Vendor />}>
          <Route
            path=""
            index
            element={<ProctedRoutes childern={<VendorDashboard />} />}
          />
          <Route
            path="dashboard"
            element={<ProctedRoutes childern={<VendorDashboard />} />}
          />
          <Route path="signup" element={<VendorSignUp />} />
          <Route
            path="change-password"
            element={<ProctedRoutes childern={<VendorChangePassword />} />}
          />
          <Route
            path="history"
            element={<ProctedRoutes childern={<VendorHistory />} />}
          />
           <Route
            path="services"
            element={<ProctedRoutes childern={<RawContentManageService />} />}
          />
        </Route>

        <Route path="profile" element={<NestedPofile />}>
          <Route index path="" element={<ProfileTab />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouters>
  );
};

export default BrowserRouter;
