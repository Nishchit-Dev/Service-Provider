import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { Dispatch, useState } from "react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

import { PinInput, PinInputField } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { CallResetPassword } from "../../Hooks/useResetPassword.ts";

let InputStyle = {
  boxShadow: "none",
  border: "transparent",
  backgroundColor: "#F7F7F7",
  fontFamily: "Poppins",
};
interface StepsProps {
  activeStep: number;
}
const steps = [
  { title: "Email", description: "Contact Info" },
  { title: "Verify OTP", description: "Enter OTP" },
  { title: "Reset Password", description: "Enter password" },
];

const Steps: React.FC<StepsProps> = ({ activeStep }) => {
  return (
    <>
      <Stepper size="lg" index={activeStep}>
        {steps.map((step, index) => (
          <>
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                ></StepStatus>
              </StepIndicator>
              <StepSeparator />
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
              <StepSeparator />
            </Step>
          </>
        ))}
      </Stepper>
    </>
  );
};
interface TabProps {
  setIndex: Dispatch<React.SetStateAction<number>>;
}
interface RestTabProps {
  setIndex: Dispatch<React.SetStateAction<number>>;
  id: string;
}
interface VeriftyTabProps {
  setIndex: Dispatch<React.SetStateAction<number>>;
  setUserId: Dispatch<React.SetStateAction<string>>;
}
const Success: React.FC = () => {
  return (
    <Center borderRadius={"12px"} boxShadow={"2xl"}>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        margin={"60px 25px"}
        padding={"10px"}
        gap={"20px"}
      >
        <Text fontFamily={"Poppins"} fontWeight={"700"} fontSize={"24px"} color={"#A1DD70"}>Password Changed Succesfully</Text>
      </Flex>
    </Center>
  );
};
const ResetPassword: React.FC<RestTabProps> = ({ setIndex, id }) => {
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  return (
    <Center borderRadius={"12px"} boxShadow={"2xl"}>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        margin={"60px 25px"}
        padding={"10px"}
        gap={"20px"}
      >
        <Text
          textAlign={"center"}
          fontFamily={"Poppins"}
          fontSize={"24px"}
          fontWeight={"700"}
        >
          {" "}
          Rest Password
        </Text>

        <Flex flexDirection="column" gap={"10px"} w="300px" marginTop={"30px"}>
          <Flex flexDir="column" flex={1}>
            <Text fontFamily={"Poppins"} opacity={"0.8"}>
              New Password
            </Text>
            <Input
              placeholder="New Password"
              color={"black"}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              value={pass}
              style={InputStyle}
            />
          </Flex>

          <Flex flexDir="column" flex={1}>
            <Text fontFamily={"Poppins"} opacity={"0.8"}>
              Confirm Password
            </Text>

            <Input
              placeholder="confirm Password"
              style={InputStyle}
              color={"black"}
              onChange={(e) => {
                setConPass(e.target.value);
              }}
              value={conPass}
              type="password"
            />
          </Flex>
        </Flex>

        <Flex marginTop={"20px"}>
          {/* <Box> */}
          <Button
            flex={1}
            fontFamily={"Poppins"}
            bg="pmy.100"
            color={"white"}
            _hover={{ bg: "pmy.200" }}
            onClick={() => {
              setIndex(3);
              let data = {
                userId: id,
                newPassword: pass,
                confirmPassword: conPass,
              };

              CallResetPassword()
                .ResetPassword(data)
                .then((data) => {
                  console.log(data);
                });
            }}
          >
            Rest Password
          </Button>
          {/* </Box> */}
        </Flex>
      </Flex>
    </Center>
  );
};

const EnterEmail: React.FC<TabProps> = ({ setIndex }) => {
  const [email, setEmail] = useState("");
  return (
    <Center borderRadius={"12px"} boxShadow={"2xl"}>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        margin={"60px 25px"}
        padding={"10px"}
        gap={"20px"}
      >
        <Text
          textAlign={"center"}
          fontFamily={"Poppins"}
          fontSize={"24px"}
          fontWeight={"700"}
        >
          {" "}
          Email
        </Text>

        <Flex flexDirection="column" gap={"10px"} w="300px" marginTop={"30px"}>
          <Flex flexDir="column" flex={1}>
            <Text fontFamily={"Poppins"} opacity={"0.8"}>
              Email
            </Text>
            <Input
              placeholder="Email"
              value={email}
              color={"black"}
              style={InputStyle}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Flex>
        </Flex>

        <Flex marginTop={"20px"}>
          <Button
            flex={1}
            fontFamily={"Poppins"}
            bg="pmy.100"
            color={"white"}
            _hover={{ bg: "pmy.200" }}
            onClick={() => {
              setIndex(1);
              let data = {
                emailId: email,
              };
              console.log("calling...");
              CallResetPassword()
                .SendOTPtoEmail(data)
                .then((data) => {
                  console.log(data);
                });
            }}
          >
            Send OTP
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
};
const VerifiyOTP: React.FC<VeriftyTabProps> = ({ setIndex, setUserId }) => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <Center borderRadius={"12px"} boxShadow={"2xl"} flexDir={"column"}>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          margin={"60px 25px"}
          padding={"10px"}
          gap={"30px"}
        >
          <Text
            textAlign={"center"}
            fontFamily={"Poppins"}
            fontSize={"24px"}
            fontWeight={"700"}
          >
            Verification
          </Text>

          <Flex>
            <HStack>
              <PinInput
                type="number"
                onChange={(_otp) => {
                  setOtp(_otp);
                }}
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Flex>
          <Flex>
            <Button
              flex={1}
              fontFamily={"Poppins"}
              bg="pmy.100"
              color={"white"}
              _hover={{ bg: "pmy.200" }}
              onClick={() => {
                let data = {
                  otp: otp,
                };
                CallResetPassword()
                  .VerifyOTP(data)
                  .then((data) => {
                    console.log(data);

                    if (data?.status) {
                      setUserId(data.userId);
                      setIndex(2);
                    }
                  });
              }}
            >
              Verify
            </Button>
          </Flex>
        </Flex>{" "}
      </Center>
    </>
  );
};
const RestPassword: React.FC = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [userId, setUserId] = useState("");
  console.log(activeStep);
  return (
    <>
      <Center h="100vh" display={"flex"} flexDir={"column"} gap={"30px"}>
        <Steps activeStep={activeStep} />
        <Tabs index={activeStep}>
          <TabPanels>
            <TabPanel>
              <EnterEmail setIndex={setActiveStep} />
            </TabPanel>
            <TabPanel>
              <VerifiyOTP setIndex={setActiveStep} setUserId={setUserId} />
            </TabPanel>
            <TabPanel>
              <ResetPassword setIndex={setActiveStep} id={userId} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </>
  );
};

export default RestPassword;
