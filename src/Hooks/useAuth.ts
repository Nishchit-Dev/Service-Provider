import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [flag, setFlag] = useState(false);
  const jwt = Cookies.get("JWT");

  useEffect(() => {
    if (jwt) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [jwt]);
  return { flag };
};

export const _Cookies = () => {
  const saveOnCookies = (jwt) => {
    if (jwt) {
      Cookies.set("JWT", jwt);
    }
  };

  const getFromCookies = () => {
    let jwt = Cookies.get("JWT");
    return jwt;
  };
  const resetCookies = () => {
    Cookies.remove("JWT");
    console.log("removed jwt")
  };
  const tokenExist = () => {
    let jwt = Cookies.get("JWT");
    console.log(jwt);
    if (jwt) {
      return true;
    } else {
      return false;
    }
  };

  return { saveOnCookies, getFromCookies, tokenExist, resetCookies };
};
