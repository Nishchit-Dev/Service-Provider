import { useEffect, useState } from "react";
import { Regex } from "../../Utility/Regex.ts";

const isValidEmail = (email: string) => {
  return Regex.Email.test(email);
};
const isValidPassword = (pass: string) => {
  return Regex.Password.test(pass);
};

const borderColor = {
  valid: "transparent",
  invalid: "red.100",
};
const useLoginValidaitons = (email: string, password: string) => {
  const [emailBorderColor, setEmailBorderColor] = useState("transparent");
  const [passBorderColor, setPassBorderColor] = useState("transparent");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    let status = isValidEmail(email);
    if (status) {
      setEmailBorderColor(borderColor.valid);
    } else {
      setEmailBorderColor(borderColor.invalid);
    }
  }, [email]);
  useEffect(() => {
    let status = isValidPassword(password);
    if (status) {
      setPassBorderColor(borderColor.valid);
    } else {
      setPassBorderColor(borderColor.invalid);
    }
  }, [password]);

  useEffect(() => {
    if (
      emailBorderColor == borderColor.valid &&
      passBorderColor == borderColor.valid
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [emailBorderColor, passBorderColor]);

  return { emailBorderColor, passBorderColor, isFormValid };
};

export default useLoginValidaitons;
