import { Box, useRadio } from "@chakra-ui/react";
import React from "react";

interface Props {
  radio: any;
  color: string;
}
const ColorRadio: React.FC<Props> = React.memo(({ radio, color }) => {
  const { getInputProps, getCheckboxProps } = useRadio(radio);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="full"
        bgColor={color}
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      ></Box>
    </Box>
  );
});

export default ColorRadio;
