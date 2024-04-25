import axios from "axios";
import { _Cookies } from "../../../../Hooks/useAuth.ts";

interface Data {
  serviceCategoryId: string;
  name: string;
  companyName: string;
  description: string;
  email: string;
  phoneNumber: string;
  address: string;
  availability: string;
  price: string;
  website: string;
}
export const CallAddService = async (serviceInfo: Data) => {
  const jwt = _Cookies().getFromCookies();
  console.log(jwt);

  console.log(serviceInfo);
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  try {
    const res = await AxiosInstance.post("/services/add-service", serviceInfo);
    console.log(res);
    return res.data.user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const CallMyService = async () => {
  const jwt = _Cookies().getFromCookies();
  console.log("hello");
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  try {
    const res = await AxiosInstance.get("/services/my-services");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const CallNewServices = async () => {
  const jwt = _Cookies().getFromCookies();
  console.log("hello");
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  try {
    const res = await AxiosInstance.get("/services/add-services");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

interface uploadDataType {
  serviceId: string;
  address: string;
  availability: string;
  companyName: string;
  description: string;
  email: string;
  id: string;
  name: string;
  phoneNumber: string;
  price: string;
  serviceCategoryId: string;
  website: string;
}

export const CallUpdateServices = async (payload: uploadDataType) => {
 
  
  const jwt = _Cookies().getFromCookies();
  // console.log(payload);
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  try {
    const res = await AxiosInstance.post("/services/update-service", payload);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

interface deletePayload {
  serviceId: string;
}

export const CallDeleteService = async (payload: deletePayload) => {
  const jwt = _Cookies().getFromCookies();
  console.log(payload);
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  try {
    const res = await AxiosInstance.post("/services/delete-service", payload);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const CallFetchServiceCategories = async () => {
  const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
  });
  try {
    const res = await AxiosInstance.get("/service-category");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
