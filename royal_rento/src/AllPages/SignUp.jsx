import { React } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
  CloseButton,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as Goto, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    let obj = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(obj);
    if( !firstName|| !lastName ||  !email || !password){
      setShowEmpty(true)
    }else{
      axios
      .post("https://freelancer-6ebn.onrender.com/users", obj)
      .then((res) => console.log(res.data))
      .then(() => {
        setShowSuccess(true)
        setShowEmpty(false)
        // Navigate after 2 seconds
        setTimeout(() => {
          navigate('/loginuser');
        }, 1000)
    })  
    .catch(() => {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000); // Hide the error message after 3 seconds
  });
}   
};



  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} mt={'-80px'} py={12} px={6}>
      <Box
          display={showEmpty ? "visible" : "none"}
          className={`alert ${showEmpty ? "show" : ""}`}
        >
          <Alert status="error" mb={4}>
            <AlertIcon />
            Please fill sll the details !
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setShowEmpty(false)}
            />
          </Alert>
        </Box>
        {/* Success Notification */}
        <Box
          display={showSuccess ? "visible" : "none"}
          className={`alert ${showSuccess ? "show" : ""}`}
        >
          <Alert status="success" mb={4}>
            <AlertIcon />
            Login Successful!
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setShowSuccess(false)}
            />
          </Alert>
        </Box>
        {/* Error Notification */}
        <Box
          display={showError ? "visible" : "none"}
          className={`alert ${showError ? "show" : ""}`}
        >
          <Alert status="error" mb={4}>
            <AlertIcon />
            Wrong credentials!
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setShowError(false)}
            />
          </Alert>
        </Box>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSignup}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link color={"blue.400"}>
                  <Goto to="/login">Login</Goto>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signup;
