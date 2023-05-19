import { Card } from "../components/Card";
import { Box, Center, Input } from "@chakra-ui/react";
import { ButtonLogin } from "../components/Button";
import { Login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

export const Home = () => {
  const [email, setEmail] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email: string) => {
    const loggedIn = await Login(email)

    if (!loggedIn){
      return alert('Email invalido')
    }
    setIsLoggedIn(true)
    changeLocalStorage({login: true})
    navigate('/conta/1')
  }
 

  return (
    <>
      <Box padding="25px">
        <Card>
          <Box
            minHeight="400px"
            bgColor="#371c9b6f"
            width="45vw"
            height="35vh"
            borderRadius="8px"
            p="15px"
            margin="50px auto"
          >
            <Center
              color="#fff"
              marginBottom="40px"
              fontSize="30px"
              fontWeight="500"
            >
              <h1>Fazer Login</h1>
            </Center>

            <Input
              color={"white"}
              placeholder="Email"
              mb="10px"
              type="email"
              borderColor="#5df5fa"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              placeholder="Password"
              mb="8px"
              type="password"
              borderColor="#5df5fa"
              marginBottom="40px"
            />
            <Center marginBottom="20px" marginTop="30px">
              <ButtonLogin 
              onClick={() => validateUser(email)} 
              
              />
            </Center>
          </Box>
        </Card>
      </Box>
    </>
  );
};
