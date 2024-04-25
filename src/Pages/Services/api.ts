import axios from "axios";
import { _Cookies } from "../../Hooks/useAuth.ts";


export const CallTotalServices = async () => {

  const jwt = _Cookies().getFromCookies();
  console.log("hello");
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  try {
    const res = await AxiosInstance.get("/services");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
