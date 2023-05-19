import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <>
      <Box
        backgroundColor="#0f0c7951"
        minHeight="140px"
        padding={8}
        borderRadius="25px"
      >
        <Text fontSize="2xl" fontWeight="bold">
          {mainContent}
        </Text>

        <Text fontSize="xl">
          {content}
          </Text>
      </Box>
    </>
  );
};
