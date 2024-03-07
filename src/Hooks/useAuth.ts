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
  const saveUserType = (type: string) => {
    if (type) {
      Cookies.set("user", type);
    }
  };

  const getFromCookies = () => {
    let jwt = Cookies.get("JWT");
    return jwt;
  };
  const resetCookies = () => {
    Cookies.remove("JWT");
    console.log("removed jwt");
  };

  const getUserType = () => {
    let userType = Cookies.get("user");
    console.log(userType);

    if (userType) {
      return userType;
    }
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

  return {
    saveOnCookies,
    getFromCookies,
    tokenExist,
    resetCookies,
    getUserType,
    saveUserType,
  };
};
