import { useEffect, useState } from "react";
import { Regex } from "../../Utility/Regex.ts";

const isNameValid = (name: string) => {
  return Regex.Name.test(name);
};

const isCountryCodeValid = (code: string) => {
  return Regex.CountryCode.test(code);
};

const isPhoneValid = (phone: string) => {
  return Regex.Phone.test(phone);
};

const isValidEmail = (email: string) => {
  return Regex.Email.test(email);
};
const isValidPassword = (pass: string) => {
  return Regex.Password.test(pass);
};
const borderColors = {
  valid: "#EDF2F7",
  invalid: "red.100",
};
const data = {
  fName: borderColors.valid,
  lName: borderColors.valid,
  pswd: borderColors.valid,
  code: borderColors.valid,
  phone: borderColors.valid,
  email: borderColors.valid,
};

const useSignupValidation = (
  fName: string,
  lName: string,
  pswd: string,
  phone: string,
  email: string
) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [borderColor, setBorderColor] = useState(data);

  useEffect(() => {
    if (
      borderColor.phone == borderColors.valid &&
      borderColor.email == borderColors.valid &&
      borderColor.fName == borderColors.valid &&
      borderColor.lName == borderColors.valid &&
      borderColor.pswd == borderColors.valid
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [borderColor]);

  useEffect(() => {
    let flag = isNameValid(fName);
    if (flag) {
      setBorderColor((prev) => ({ ...prev, fName: borderColors.valid }));
    } else {
      setBorderColor((prev) => ({ ...prev, fName: borderColors.invalid }));
    }
  }, [fName]);

  useEffect(() => {
    let flag = isNameValid(lName);
    if (flag) {
      setBorderColor((prev) => ({ ...prev, lName: borderColors.valid }));
    } else {
      setBorderColor((prev) => ({ ...prev, lName: borderColors.invalid }));
    }
  }, [lName]);

  useEffect(() => {
    let flag = isValidEmail(email);
    if (flag) {
      setBorderColor((prev) => ({ ...prev, email: borderColors.valid }));
    } else {
      setBorderColor((prev) => ({ ...prev, email: borderColors.invalid }));
    }
  }, [email]);

  useEffect(() => {
    let flag = isPhoneValid(phone);
    if (flag) {
      setBorderColor((prev) => ({ ...prev, phone: borderColors.valid }));
    } else {
      setBorderColor((prev) => ({ ...prev, phone: borderColors.invalid }));
    }
  }, [phone]);

  useEffect(() => {
    let flag = isValidPassword(pswd);
    if (flag) {
      setBorderColor((prev) => ({ ...prev, pswd: borderColors.valid }));
    } else {
      setBorderColor((prev) => ({ ...prev, pswd: borderColors.invalid }));
    }
  }, [pswd]);

  return { isFormValid, borderColor };
};

export default useSignupValidation;
