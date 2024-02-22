import axios from "axios";

interface info {
  email: string;
  password: string;
}
const host = "http://localhost:3000/auth/login";
export const RequestLogin = async (info: info) => {
  try {
    return await axios.post(host, info).then((res) => {
      console.log(res.data);
      return { status: true, jwt: res.data };
    });
  } catch (err) {
    console.log(err.response.data);
    return { status: false,jwt:null };
  }
};
