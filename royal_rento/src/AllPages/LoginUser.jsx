import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Slide,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link as Goto, useNavigate } from "react-router-dom";
import { authState } from "../Context/AuthContext";
import { useContext } from "react";
import './Login.css'

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser, setShowUser } = useContext(authState);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = async () => {
    // console.log(obj)
    axios.get(
        `https://freelancer-6ebn.onrender.com/users?email=${email}&password=${password}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data)
          setUser(res.data[0].firstName);
          // alert('Login SuccessFull')
          setShowUser(true);
          setShowSuccess(true)
            // Navigate after 2 seconds
            setTimeout(() => {
              navigate('/');
            }, 1000)
        } else {
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 3000); // Hide the error message after 3 seconds
        }
      })
      .catch(() => {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000); // Hide the error message after 3 seconds
      });
  };


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} mt={"-150px"} py={2} px={6}>
      {/* Success Notification */}
      <Box display={showSuccess?'visible':"none"} className={`alert ${showSuccess ? 'show' : ''}`}>
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
        <Box display={showError?'visible':"none"}  className={`alert ${showError ? 'show' : ''}`}>
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
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            If you don't have account please{" "}
            <Link color={"blue.400"}>
              <Goto to="/signup">Sign Up✌️ </Goto>
            </Link>
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleLogin}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
        {/* <Modal isOpen={showSuccess} onClose={() => setShowSuccess(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login Successful</ModalHeader>
            <ModalBody>
              <Alert status="success">
                <AlertIcon />
                You have successfully logged in.
              </Alert>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={() => setShowSuccess(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={showError} onClose={() => setShowError(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login Failed</ModalHeader>
            <ModalBody>
              <Alert status="error">
                <AlertIcon />
                Incorrect email or password. Please try again.
              </Alert>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={() => setShowError(false)}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </Stack>
    </Flex>
  );
}
