import { useEffect, useState } from "react";
import { Regex } from "../../../Utility/Regex.ts";

interface info {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
const isValidPassword = (pass) => {
    console.log(pass)
  return Regex.Password.test(pass);
};
const borderColor = {
  valid: "#EDF2F7",
  invalid: "#FF6868",
};

export const usePasswordValidation = (data: info) => {
  const [oldPasswordBorderColor, setOldBorderColor] = useState(
    borderColor.valid
  );
  const [newPasswordBorderColor, setNewPswdData] = useState(borderColor.valid);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    let oldStatus = isValidPassword(data.oldPassword);
    let newStatus = isValidPassword(data.newPassword);
    let confrimNewStatus = isValidPassword(data.confirmNewPassword);
    console.log(oldStatus,newStatus,confrimNewStatus)
    if (oldStatus) {
      setOldBorderColor(borderColor.valid);
    } else {
      setOldBorderColor(borderColor.invalid);
    }
    if (newStatus) {
      setNewPswdData(borderColor.valid);
    } else {
      setNewPswdData(borderColor.invalid);
    }
    if (confrimNewStatus) {
      setNewPswdData(borderColor.valid);
    } else {
      setNewPswdData(borderColor.invalid);
    }

    if (
      oldStatus &&
      newStatus &&
      confrimNewStatus &&
      data.newPassword === data.confirmNewPassword
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }

    console.log(newPasswordBorderColor)
    console.log(oldPasswordBorderColor)

  }, [data]);

  return {  newPasswordBorderColor, isFormValid, oldPasswordBorderColor };
};
