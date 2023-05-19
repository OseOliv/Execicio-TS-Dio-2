import React, { MouseEventHandler } from "react";
import { Button } from "@chakra-ui/react";

interface ButtonLoginProps {
  onClick: MouseEventHandler;
}

export const ButtonLogin: React.FC<ButtonLoginProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="blue"
      size="sm"
      width="100%"
      p="25px"
      fontSize="30"
    >
      Entrar
    </Button>
  );
};
