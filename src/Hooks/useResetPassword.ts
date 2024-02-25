import axios from "axios";
import { _Cookies } from "../Hooks/useAuth.ts";

interface sentEmail {
  emailId: string;
}
interface VerifyOTP {
  otp: string;
}
interface ResetPassowrd {
  userId: string;
  newPassword: string;
  confirmPassword: string;
}

const init = () => {
  const jwt = _Cookies().getFromCookies();
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
  });
  return { jwt, AxiosInstance };
};

export const CallResetPassword = () => {
  const { jwt, AxiosInstance } = init();

  const SendOTPtoEmail = async (info: sentEmail) => {
    try {
      console.log("calling ");
      return AxiosInstance.post("/auth/forgot-password", info).then((res) => {
        console.log(res.data);
        return res.data;
      });
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  };

  const VerifyOTP = async (info: VerifyOTP) => {
    try {
      return AxiosInstance.post("/auth/verify-otp", info).then((res) => {
        console.log(res.data)
        return { status: true, userId: res.data };
      });
    } catch (err) {
      console.log(err);
      return { status: false,userId:"" };
    }
  };

  const ResetPassword = async (info: ResetPassowrd) => {
    try {
        return AxiosInstance.post("/auth/reset-password", info).then((res) => {
        console.log(res.data);
        return res.data;
      });
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  };

  return { SendOTPtoEmail, ResetPassword, VerifyOTP };
};
