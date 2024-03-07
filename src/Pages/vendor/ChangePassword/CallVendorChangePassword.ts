import axios from "axios";
import { _Cookies } from "../../../Hooks/useAuth.ts";


interface info {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
export const CallVendorChangePassword = async (info: info) => {
  const jwt = _Cookies().getFromCookies();
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return await AxiosInstance.post("/auth/change-password", info)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      throw err.response.data.error.message;
    });
};
