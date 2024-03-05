import React from "react";
import useFetchProfile from "../../Hooks/useFetchProfile.ts";

import { ProfileTabs } from "./Components/SideMenu.tsx";
import Layout from "../layout/Layout.tsx";
import { Outlet } from "react-router-dom";
let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  backgroundColor: "#E4E4E4",
  fontFamily: "Poppins",
};
let _opacity = { opacity: 0.7 };
interface profile {
  countryCode: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: number;
  userType: string;
}

const ProfileTab: React.FC = () => {
  const userData: profile | null = useFetchProfile().userData;
  return (
    <>
      <Layout children={userData ? <ProfileTabs /> : null} />

      {/* <Outlet /> */}
    </>
  );
};

export const NestedPofile: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProfileTab;
