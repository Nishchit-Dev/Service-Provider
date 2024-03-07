import axios from "axios";

interface info {
  firstName: string;
  lastName: string;
  userType: string;
  email: string;
  password: string;
  phoneNumber: string;
  countryCode: string;
}
const host = "http://localhost:3000/auth/sign-up";
export const Signup = async (info: info) => {
  try {
    return await axios.post(host, info).then((res) => {
      console.log(res.data);
      return { status: true, error: null };
    });
  } catch (err) {
    console.log(err.response.data.error);
    return { status: false, error: err.response.data.error };
  }
};
