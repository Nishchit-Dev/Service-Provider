import axios from "axios";
import { _Cookies } from "../../Hooks/useAuth.ts";

export const CallProfile = async () => {
  const jwt = _Cookies().getFromCookies();
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  const res = await AxiosInstance.get("/auth/whoAmI");
    console.log(res);
    return res.data.user;
};
