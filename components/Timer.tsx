import { Box, Text, CircularProgress } from "@chakra-ui/react";
import React from "react";

interface Props {}

const Timer: React.FC<Props> = ({}) => {
  const [] = React.useState<number>();
  return (
    <Box
      bg="#fff"
      display="flex"
      width="20rem"
      height="20rem"
      borderRadius="full"
      mt="4rem"
      shadow="timer"
      bgColor="#1E2140"
      p="1rem"
    >
      <Box
        position="relative"
        overflow="hidden"
        bg="#fff"
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        bgColor="#111426"
        p="0rem"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="transparent"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Text fontSize="6xl" fontWeight="bold" color="#D0D9F2">
            17:59
          </Text>
          <Text
            letterSpacing="0.4rem"
            textTransform="uppercase"
            mt="1rem"
            color="#D0D9F2"
          >
            pause
          </Text>
        </Box>

        <CircularProgress
          size="100%"
          value={50}
          thickness="2px"
          color="#F26D6D"
          bgColor=""
          trackColor="#111426"
        />
      </Box>
    </Box>
  );
};

export default Timer;
