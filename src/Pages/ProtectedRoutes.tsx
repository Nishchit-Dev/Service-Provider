import { useEditable } from "@chakra-ui/react";
import { _Cookies, useAuth } from "../Hooks/useAuth.ts";
import React, { useEffect } from "react";
import { redirect } from "react-router-dom";

const ProctedRoutes = ({ childern }) => {
  const auth = _Cookies().tokenExist();
  console.log("init: ", auth);

  useEffect(() => {
    console.log(auth);
    if (!auth) {
        window.location.replace("/login");
    }
  }, []);

  return <>{auth ? <>{childern}</> : null}</>;
};

export default ProctedRoutes;
