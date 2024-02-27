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
      return { status: true, jwt: res.data, error: null };
    });
  } catch (err) {
    console.log(err.response.data.error);
    return { status: false, jwt: null, error: err.response.data.error };
  }
};
