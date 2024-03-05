import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

import Layout from "../../layout/Layout.tsx";
import { usePasswordValidation } from "./usePasswordValidation.tsx";
import { CallChangePassword } from "./CallChangePassword.ts";

let InputStyle = {
  boxShadow: "none",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
};
interface info {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
const borderColors = {
  valid: "#EDF2F7",
  invalid: "red.100",
};
const _ChangePassword: React.FC = () => {
  const [passData, setPassData] = useState<info>({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const toast = useToast({ position: "top" });
  const [error, setError] = useState("");
  const { newPasswordBorderColor, isFormValid, oldPasswordBorderColor } =
    usePasswordValidation(passData);

  return (
    <>
      <Center alignItems={"flex-start"}>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          margin={"20px 20px"}
          //   padding={"10px"}
          gap={"20px"}
        >
          <Text
            textAlign={"center"}
            fontFamily={"Poppins"}
            fontSize={"24px"}
            fontWeight={"700"}
          >
            {" "}
            Change Password
          </Text>
          <Flex flexDirection="column" gap={"10px"}>
            <Flex flexDir="column" flex={1}>
              <Text fontFamily={"Poppins"} opacity={"0.8"}>
                Old Password
              </Text>
              <Input
                placeholder="Old Password"
                color={"black"}
                borderColor={"#EDF2F7"}
                focusBorderColor={oldPasswordBorderColor}
                onChange={(e) => {
                  setPassData((prev) => {
                    return { ...prev, oldPassword: e.target.value };
                  });
                }}
                value={passData.oldPassword}
                style={InputStyle}
              />
            </Flex>
            <Flex flexDir={"row"} flex={1} gap={"15px"}>
              <Flex flexDir="column" flex={1}>
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  New Password
                </Text>
                <Input
                  placeholder="New Password"
                  color={"black"}
                  borderColor={"#EDF2F7"}
                  focusBorderColor={newPasswordBorderColor}
                  onChange={(e) => {
                    setPassData((prev) => {
                      return { ...prev, newPassword: e.target.value };
                    });
                  }}
                  value={passData.newPassword}
                  style={InputStyle}
                />
              </Flex>
              <Flex flexDir="column" flex={1}>
                <Text fontFamily={"Poppins"} opacity={"0.8"}>
                  Confirm Password
                </Text>

                <Input
                  placeholder="confirm Password"
                  borderColor={"#EDF2F7"}
                  focusBorderColor={newPasswordBorderColor}
                  style={InputStyle}
                  color={"black"}
                  onChange={(e) => {
                    setPassData((prev) => {
                      return { ...prev, confirmNewPassword: e.target.value };
                    });
                  }}
                  value={passData.confirmNewPassword}
                  type="password"
                />
              </Flex>
            </Flex>
            <Flex gap={"5px"}>
              <Text color={"#FF6868"}>*</Text>
              <Text color={"ntl.400"}>
                Password must contain a UpperCase & LowerCase with minimun one
                Special character and a Number
              </Text>
            </Flex>
          </Flex>

          <Flex marginTop={"20px"}>
            {/* <Box> */}
            <Button
              fontFamily={"Poppins"}
              bg="pmy.100"
              opacity={isFormValid ? 1 : 0.7}
              isDisabled={!isFormValid ? true : false}
              color={"white"}
              _hover={{ bg: "pmy.200" }}
              onClick={async () => {
                console.log(isFormValid);

                if (isFormValid) {
                  let check = "hello 1";
                  let result = CallChangePassword(passData)
                    .then((res) => {
                      console.log(res);
                    })
                    .catch((errr) => {
                      setError(errr);
                      throw errr;
                    });
                  console.log(result);

                  let err =await result.catch((err) => {
                    console.log(err);
                    return err;
                  });
                  toast.promise(result, {
                    success: {
                      title: "Password Changed Successfully",
                      description: "Redirecting to login page...",
                    },
                    error: {
                      title: "Error occured while changing password",
                      description: err,
                    },
                    loading: {
                      title: "Changing password..",
                      description: "Please wait while we process your request",
                    },
                  });
                }
              }}
            >
              Rest Password
            </Button>
          </Flex>
        </Flex>
      </Center>
    </>
  );
};

export const ChangePassword = () => {
  return (
    <>
      <Layout children={<_ChangePassword />} />
    </>
  );
};
