import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { SetStateAction } from "react";

interface info {
  email: string;
  password: string;
}
const host = "http://localhost:3000/auth/login";
export const RequestLogin = async (info: info) => {
  try {
    return await axios.post(host, info).then((res) => {
      console.log(res.data);
      return {
        status: true,
        jwt: res.data.jwt,
        error: null,
        userType: res.data.userType,
      };
    });
  } catch (err) {
    console.log(err.response.data.error);
    return {
      status: false,
      jwt: null,
      error: err.response.data.error,
      userType: null,
    };
  }
};

export const EnableEmailNotification = async () => {
  const url = "http://localhost:3000/services/enable-notification";
  const payload = { email: "nishchitpatel84@gmail.com" };
  try {
    await axios.post(url, payload).then((res) => {
      console.log(res.data);
    });
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const DisableEmailNotification = async () => {
  const url = "http://localhost:3000/services/disable-notification";
  const payload = { email: "nishchitpatel84@gmail.com" };
  try {
    await axios.post(url, payload).then((res) => {
      console.log(res.data);
    });
  } catch (err) {
    console.log(err.response.data.error);
  }
};
