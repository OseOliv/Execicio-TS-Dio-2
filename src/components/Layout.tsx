import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <Box minHeight="100vh" bgColor="#0d0733" p="30px" padding={0} margin={0} color="#fff">
      <Header />
      {children}
    </Box>
  );
};
