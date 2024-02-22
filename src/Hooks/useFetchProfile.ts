import { useEffect, useState } from "react";
import { CallProfile } from "../Pages/Profile/CallProfile.ts";

interface data {
  countryCode: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  phoneNumber: number;
  userType: string;
}

const useFetchProfile = () => {
  const [userData, setUserData] = useState<data | null>(null);
  useEffect(() => {
    CallProfile().then((data) => {
      setUserData(data);
    });
  }, []);

  return { userData };
};

export default useFetchProfile;
