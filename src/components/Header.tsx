import { Box, Button, Center, Flex, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({login : false})
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <Flex
        p="30px"
        fontSize="2.2rem"
        fontWeight="700"
        bgColor="#05021d"
        color="#4dcedf"
        fontFamily='"Trebuchet MS"'
        width="100%"
      >
        <Box>
          <Center>
            <h1>Bang Bank</h1>
          </Center>
        </Box>
        {isLoggedIn && (
          <>
            <Spacer />
            <Button onClick={() => logout()}>Sair</Button>
          </>
        )}
      </Flex>
    </>
  );
};
