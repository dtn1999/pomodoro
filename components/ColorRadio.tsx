import { Box, useRadio } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";

interface Props {
  radio: any;
  color: string;
}
const ColorRadio: React.FC<Props> = React.memo(({ radio, color }) => {
  const { getInputProps, getCheckboxProps } = useRadio(radio);

  const inputProps = getInputProps();
  const checkbox = getCheckboxProps();
  const { checked } = inputProps as any;
  console.log();
  return (
    <Box as="label">
      <input {...inputProps} />
      <Box
        {...checkbox}
        cursor="pointer"
        width="10"
        height="10"
        borderWidth="1px"
        borderRadius="full"
        bgColor={color}
        boxShadow="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        _checked={{
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {checked && <CheckIcon />}
      </Box>
    </Box>
  );
});

export default ColorRadio;
